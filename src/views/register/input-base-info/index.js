import axios from "axios";

export default {
  data() {
    return {
      userInfo: {
        userName: '',
        cardType: "1",
        cardNum: "",
        hobby: "sing",
        volunteerType: "1",
        project: "1",
        serviceType: "1",
        serviceAppointTime: "",//指定的服务时间
        serviceTime: "1",
        timeStart: "", //服务时间段开始时间
        timeEnd: "",//服务时间段结束时间
        platformType: "",
        pInfo: [],
        cInfo: [],
        serviceCInfo: [],
        xInfo: [],
        serviceXInfo: [],
        pCode: 0,
        pName: 0,
        cCode: 0,
        cName: 0,
        xCode: 0,
        xName: 0,
        servicePCode: 0,
        servicePName: 0,
        serviceCCode: 0,
        serviceCName: 0,
        serviceXCode: 0,
        serviceXName: 0,
        address: '',
      },
      cardList: [
        {
          name: "身份证",
          id: 0
        },
        {
          name: "护照",
          id: 1
        }
      ],
    }
  },
  mounted() {
    this.getpInfo();
    this.getServicePInfo();
  },
  watch: {
    //居住区域
    'userInfo.pCode'(val, oldVal) {
      this.getcInfo();
      this.xCode = ''
    },
    'userInfo.cCode'(val, oldVal) {
      this.getxInfo();
    },
    //服务区域
    'userInfo.servicePCode'(val, oldVal) {
      this.getServiceCInfo();
      this.serviceXCode = '';
    },
    'userInfo.serviceCCode'(val, oldVal) {
      this.getServiceXInfo();
      this.serviceXCode = '';
    },
    'userInfo.serviceTime'(val, oldVal) {
      if (val == "1") {
        this.serviceAppointTime = '每天'
      } else if (val == "2") {
        this.serviceAppointTime = '周六日'
      } else {
        this.serviceAppointTime = ''
      }
    },
  },
  methods: {
    getpInfo() {
      axios.get('http://zyz.liyue.com/socket/api/vArea/getAreas/0', {})
        .then(response => {
          this.userInfo.pInfo = response.data.data
          //获取用户信息里的省code
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getcInfo() {
      //获取所有市信息
      axios.get('http://127.0.0.1:8080/api/vArea/getAreas/' + this.userInfo.pCode)
        .then(response => {
          this.userInfo.cInfo = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getxInfo() {
      //获取所有县信息
      axios.get('http://127.0.0.1:8080/api/vArea/getAreas/' + this.userInfo.cCode)
        .then(response => {
          this.userInfo.xInfo = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //获取服务区域的省份列表
    getServicePInfo() {
      this.getServiceCInfo();
    },
    getServiceCInfo() {
      //获取所有服务市信息
      axios.get('http://127.0.0.1:8080/api/vArea/getAreas/' + this.userInfo.servicePCode)
        .then(response => {
          this.userInfo.serviceCInfo = response.data.data;
          this.getServiceXInfo();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getServiceXInfo() {
      axios.get('http://127.0.0.1:8080/api/vArea/getAreas/' + this.userInfo.serviceCCode)
        .then(response => {
          this.userInfo.serviceXInfo = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    submit() {
      // 提交成功后通知父组件
      this.$emit("success", this.userInfo)
    }
  }
}
