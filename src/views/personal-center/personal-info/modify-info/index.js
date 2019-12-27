import {ajax_get, ajax_post} from '../../../../utils/axios.util';
import constant from '../../../../utils/constant'

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
      xInfo: [],
      serviceCInfo: [],
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
      modifySuccess: false,
      serviceTimeType: '',
      spevialServiceTime: '',
      serviceTime: [],
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
    pCode() {
      this.getcInfo();
      this.xCode = ''
    },
    cCode() {
      this.getxInfo();
    },
    xCode() {
      this.savexInfo();
    },
    //服务区域
    servicePCode() {
      this.getServiceCInfo();
      this.serviceXCode = '';
    },
    serviceCCode() {
      this.getServiceXInfo();
      this.serviceXCode = '';
    },
    serviceXCode() {
      this.saveServiceXInfo();
    },
    spevialServiceTime: function (val, oldVal) {
      if (val === 1) {
        this.userInfo.volunteer.serviceTime = '每天'
      } else if (val === 2) {
        this.userInfo.volunteer.serviceTime = '周六日'
      } else {
        this.userInfo.volunteer.serviceTime = ''
      }
    }
  },
  methods: {
    getUserInfo() {
      ajax_get(constant.api_base_url + '/vUser/getSessionUserInfo',
        null, data => {
          if (data.code === "200") {
            this.userInfo = data.data;
            //将服务时间拆分
            this.serviceTime = this.userInfo.volunteer.servicePeriod.split("~");
            this.userInfo.volunteer.platformType = this.userInfo.volunteer.platformType.toString();
            if (this.userInfo.volunteer.serviceTime === '每天') {
              this.spevialServiceTime = '1'
            } else if (this.userInfo.volunteer.serviceTime === '周六日') {
              this.spevialServiceTime = "2"
              alert(this.spevialServiceTime)
            } else {
              this.spevialServiceTime = '3'
            }
            this.getpInfo();
            this.getServicePInfo();
          } else {
            alert(data.message)
          }
        }
      )
    },
    getpInfo() {
      ajax_get(constant.api_base_url + '/vArea/getAreas/0',
        null, data => {
          if (data.code === "200") {
            this.pInfo = data.data;
            //获取用户信息里的省code
            this.pCode = this.userInfo.provinceCode;
            //省code值和所有省的code值相等 把对应省name取出来
            for (var i = 0; i < this.pInfo.length; i++) {
              if (this.pCode === this.pInfo[i].areaCode) {
                this.pName = this.pInfo[i].areaName
                break;
              }
            }
          } else {
            alert(data.message)
          }
        }
      )
    },
    getcInfo() {
      //获取所有市信息
      ajax_get(constant.api_base_url + '/vArea/getAreas/' + this.pCode,
        null, data => {
          if (data.code === "200") {
            this.cInfo = data.data;
            //获取用户信息里的市code
            this.cCode = this.userInfo.cityCode;
            //市code值和所有市的code值相等 把对应市name取出来
            for (let i = 0; i < this.cInfo.length; i++) {
              if (this.cCode === this.cInfo[i].areaCode) {
                this.cName = this.cInfo[i].areaName;
                break;
              }
            }
          } else {
            alert(data.message)
          }
        }
      )
    },
    getxInfo() {
      //获取所有县信息
      ajax_get(constant.api_base_url + '/vArea/getAreas/' + this.cCode,
        null, data => {
          if (data.code === "200") {
            this.xInfo = data.data;
            //获取用户信息里的县code
            this.xCode = this.userInfo.countyCode;
            //市code值和所有县的code值相等 把对应县name取出来
            for (var i = 0; i < this.xInfo.length; i++) {
              if (this.xCode === this.xInfo[i].areaCode) {
                this.xName = this.xInfo[i].areaName
                break;
              }
            }
          } else {
            alert(data.message)
          }
        }
      );
    },
    savexInfo() {
      for (let i = 0; i < this.xInfo.length; i++) {
        if (this.xCode === this.xInfo[i].areaCode) {
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
        if (this.servicePCode === this.pInfo[i].areaCode) {
          this.servicePName = this.pInfo[i].areaName;
          break;
        }
      }
      this.getServiceCInfo();
    },
    getServiceCInfo() {
      //获取所有服务市信息
      ajax_get(constant.api_base_url + '/vArea/getAreas/' + this.servicePCode,
        null, data => {
          if (data.code === "200") {
            this.serviceCInfo = data.data;
            //获取用户信息里的市code
            this.serviceCCode = this.userInfo.volunteer.serviceCityCode;
            //服务市code值和所有服务市的code值相等 把对应服务市name取出来
            for (let i = 0; i < this.serviceCInfo.length; i++) {
              if (this.serviceCCode === this.serviceCInfo[i].areaCode) {
                this.serviceCName = this.serviceCInfo[i].areaName;
                break;
              }
            }
            this.getServiceXInfo();
          } else {
            alert(data.message)
          }
        }
      )
    },
    getServiceXInfo() {
      //获取所有服务县信息
      this.serviceXCode = this.userInfo.volunteer.serviceCountyCode;
      ajax_get(constant.api_base_url + '/vArea/getAreas/' + this.serviceCCode,
        null, data => {
          if (data.code === "200") {
            this.serviceXInfo = data.data;
            //服务县code值和所有服务县的code值相等 把对应服务县name取出来
            for (var i = 0; i < this.serviceXInfo.length; i++) {
              if (this.serviceXCode === this.serviceXInfo[i].areaCode) {
                this.serviceXName = this.serviceXInfo[i].areaName;
                break;
              }
            }
          } else {
            alert(data.message)
          }
        }
      )
    },
    saveServiceXInfo() {
      for (var i = 0; i < this.serviceXInfo.length; i++) {
        if (this.serviceXCode === this.serviceXInfo[i].areaCode) {
          this.serviceXName = this.serviceXInfo[i].areaName;
          break;
        }
      }
    },
    submit() {
      let UserData = {
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
      }
      ajax_post(constant.api_base_url + '/vUser/updateUser',
        UserData, data => {
          if (data.code === "200") {
            this.modifySuccess = true;
          } else {
            alert(data.message)
          }
        }
      )
    },
    back() {
      this.$emit("success");
    }
  }
}
