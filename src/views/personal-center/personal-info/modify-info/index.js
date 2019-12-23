import axios from "axios";
import util from "../../../../utils/postRequest";

export default {
  data() {
    return {
      userInfo: {
        volunteer: {}
      },
      platformType: "",
      cardInfo: {},
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
      serviceTime: [],
      modifySuccess: false,
      formData: {
        name: "",
        cardType: "1",
        cardNum: "",
        hobby: "sing",
        volunteerType: "1",
        project: "1",
        serviceType: "1",
        serviceTime: "1",
        serviceAppointTime: "",//指定的服务时间
        timeStart: "", //服务时间段开始时间
        timeEnd: "",//服务时间段结束时间
        servieRange: {
          privince: "",
          city: "",
          county: ""
        },
        addressInfo: {
          privince: "",
          city: "",
          county: "",
          address: ""

        }
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
    this.getUserInfo();
    this.getcInfo();
    this.getxInfo();
  },
  watch: {
    //居住区域
    pCode(val, oldVal) {
      this.getcInfo();
      this.xCode = ''
    },
    cCode(val, oldVal) {
      this.getxInfo();
    },
    xCode(val, oldVal) {
      this.savexInfo();
    },
    //服务区域
    servicePCode(val, oldVal) {
      this.getServiceCInfo();
      this.serviceXCode = '';
    },
    serviceCCode(val, oldVal) {
      this.getServiceXInfo();
      this.serviceXCode = '';
    },
    serviceXCode(val, oldVal) {
      this.saveServiceXInfo();
    }
  },
  methods: {
    getUserInfo() {
      axios.get('http://zyz.liyue.com/socket/api/vUser/getSessionUserInfo', {})
        .then(response => {
          this.userInfo = response.data.data;
          //将服务时间拆分
          this.serviceTime = this.userInfo.volunteer.servicePeriod.split("~");
          this.userInfo.volunteer.platformType = this.userInfo.volunteer.platformType.toString()
          this.getpInfo();
          this.getServicePInfo();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getpInfo() {
      axios.get('http://zyz.liyue.com/socket/api/vArea/getAreas/0', {})
        .then(response => {
          this.pInfo = response.data.data
          //获取用户信息里的省code
          this.pCode = this.userInfo.provinceCode;
          //省code值和所有省的code值相等 把对应省name取出来
          for (var i = 0; i < this.pInfo.length; i++) {
            if (this.pCode == this.pInfo[i].areaCode) {
              this.pName = this.pInfo[i].areaName
              break;
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getcInfo() {
      //获取所有市信息
      axios.get('http://127.0.0.1:8080/api/vArea/getAreas/' + this.pCode)
        .then(response => {
          this.cInfo = response.data.data;
          //获取用户信息里的市code
          this.cCode = this.userInfo.cityCode;
          //市code值和所有市的code值相等 把对应市name取出来
          for (var i = 0; i < this.cInfo.length; i++) {
            if (this.cCode == this.cInfo[i].areaCode) {
              this.cName = this.cInfo[i].areaName
              break;
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getxInfo() {
      //获取所有县信息
      axios.get('http://127.0.0.1:8080/api/vArea/getAreas/' + this.cCode)
        .then(response => {
          this.xInfo = response.data.data;
          //获取用户信息里的县code
          this.xCode = this.userInfo.countyCode;
          //市code值和所有县的code值相等 把对应县name取出来
          for (var i = 0; i < this.xInfo.length; i++) {
            if (this.xCode == this.xInfo[i].areaCode) {
              this.xName = this.xInfo[i].areaName
              break;
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    savexInfo() {
      for (var i = 0; i < this.xInfo.length; i++) {
        if (this.xCode == this.xInfo[i].areaCode) {
          this.xName = this.xInfo[i].areaName
          break;
        }
      }
    },
    //获取服务区域的省份列表
    getServicePInfo() {
      this.servicePCode = this.userInfo.volunteer.serviceProvinceCode;
      //省code值和所有省的code值相等 把对应省name取出来
      for (var i = 0; i < this.pInfo.length; i++) {
        if (this.servicePCode == this.pInfo[i].areaCode) {
          this.servicePName = this.pInfo[i].areaName
          break;
        }
      }
      this.getServiceCInfo();
    },
    getServiceCInfo() {
      //获取所有服务市信息
      axios.get('http://127.0.0.1:8080/api/vArea/getAreas/' + this.servicePCode)
        .then(response => {
          this.serviceCInfo = response.data.data;
          //获取用户信息里的市code
          this.serviceCCode = this.userInfo.volunteer.serviceCityCode;
          //服务市code值和所有服务市的code值相等 把对应服务市name取出来
          for (var i = 0; i < this.serviceCInfo.length; i++) {
            if (this.serviceCCode == this.serviceCInfo[i].areaCode) {
              this.serviceCName = this.serviceCInfo[i].areaName
              break;
            }
          }
          this.getServiceXInfo();

        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getServiceXInfo() {
      //获取所有服务县信息
      this.serviceXCode = this.userInfo.volunteer.serviceCountyCode;
      axios.get('http://127.0.0.1:8080/api/vArea/getAreas/' + this.serviceCCode)
        .then(response => {
          this.serviceXInfo = response.data.data;
          //服务县code值和所有服务县的code值相等 把对应服务县name取出来
          for (var i = 0; i < this.serviceXInfo.length; i++) {
            if (this.serviceXCode == this.serviceXInfo[i].areaCode) {
              this.serviceXName = this.serviceXInfo[i].areaName
              break;
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    saveServiceXInfo() {
      for (var i = 0; i < this.serviceXInfo.length; i++) {
        if (this.serviceXCode == this.serviceXInfo[i].areaCode) {
          this.serviceXName = this.serviceXInfo[i].areaName
          break;
        }
      }
    },
    submit() {

      axios({
        method: 'post',
        url: 'http://zyz.liyue.com/socket/api/vUser/applyToBeVolunteer',
        data: {
          userId: this.userInfo.userId,
          userName: this.userInfo.userName,
          identification: this.userInfo.identification,
          cardType: this.userInfo.cardType,
          provinceCode: this.pCode,
          cityCode: this.cCode,
          countyCode: this.xCode,
          adress: this.userInfo.address,
          serviceProvinceCode: this.servicePCode,
          serviceCityCode: this.serviceCCode,
          serviceCountyCode: this.serviceXCode,
          artSpetiality: this.userInfo.volunteer.artSpetiality,
          platformType: this.userInfo.volunteer.platformType,
          projectName: this.userInfo.volunteer.projectName,
          serviceType: this.userInfo.volunteer.serviceType,
          serviceTime: this.userInfo.volunteer.serviceTime,
          servicePeriod: this.serviceTime[0] + "~" + this.serviceTime[1],

        },
        transformRequest: util.data().transformRequest,
        headers: util.data().headers
      })
        .then(response => {
          console.log(response);
          if (response.data.code == 200) {
            this.modifySuccess = true;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    back() {
      this.$emit("success");
    }
  }
}
