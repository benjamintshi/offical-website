import {ajax_get, ajax_post} from '../../../utils/axios.util';
import constant from '../../../utils/constant'

export default {
  data() {
    return {
      userInfo: {
        userName: '',
        cardType: "1",
        cardNum: "",
        hobby: "",
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
    'userInfo.pCode'() {
      this.getcInfo();
      this.xCode = ''
    },
    'userInfo.cCode'() {
      this.getxInfo();
    },
    //服务区域
    'userInfo.servicePCode'() {
      this.getServiceCInfo();
      this.serviceXCode = '';
    },
    'userInfo.serviceCCode'() {
      this.getServiceXInfo();
      this.serviceXCode = '';
    },
    'userInfo.serviceTime'(val, ) {
      if (val === "1") {
        this.serviceAppointTime = '每天'
      } else if (val === "2") {
        this.serviceAppointTime = '周六日'
      } else {
        this.serviceAppointTime = ''
      }
    },
  },
  methods: {
    getpInfo() {
      ajax_get(constant.api_base_url + '/vArea/getAreas/0',
        null, data => {
          if (data.code === "200") {
            this.userInfo.pInfo = data.data
            //获取用户信息里的省code
          }
        }
      )
    },
    getcInfo() {
      //获取所有市信息
      ajax_get(constant.api_base_url + '/vArea/getAreas/'+ this.userInfo.pCode,
        null, data => {
          if (data.code === "200") {
            this.userInfo.cInfo = data.data;
          }
        }
      )
    },
    getxInfo() {
      //获取所有县信息
      ajax_get(constant.api_base_url + '/vArea/getAreas/'+ this.userInfo.cCode,
        null, data => {
          if (data.code === "200") {
            this.userInfo.xInfo = data.data;
          }
        }
      )
    },
    //获取服务区域的省份列表
    getServicePInfo() {
      this.getServiceCInfo();
    },
    getServiceCInfo() {
      //获取所有服务市信息
      ajax_get(constant.api_base_url + '/vArea/getAreas/'+ this.userInfo.servicePCode,
        null, data => {
          if (data.code === "200") {
            this.userInfo.serviceCInfo = data.data;
            this.getServiceXInfo();
          }
        }
      )
    },
    getServiceXInfo() {
      ajax_get(constant.api_base_url + '/vArea/getAreas/'+ this.userInfo.serviceCCode,
        null, data => {
          if (data.code === "200") {
            this.userInfo.serviceXInfo = data.data;
          }
        }
      )
    },
    submit() {
      // 提交成功后通知父组件
      this.$emit("success", this.userInfo)
    }
  }
}
