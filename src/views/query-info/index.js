import axios from "axios";

export default {
  data() {
    return {
      volunteerResult: "", //志愿者信息查询结果
      certificateResult: "",
      activeMenu: 1,
      name: "",
      number: "",
      serviceArea: '',
      userInfo: {},
      pName: '',
      cName: '',
    }
  },
  methods: {
    swtichMenu(index) {
      this.activeMenu = index;
      this.certificateResult = "";
      this.volunteerResult = "";
    },
    query() {
      if (this.activeMenu == 1) {
        axios.get('http://zyz.liyue.com/socket/api/vUser/getUserInfoByIdCard', {
          params: {
            name: this.name,
            idNo: this.number,
          }
        })
          .then(response => {
            if (response.data.code ==200) {
              this.volunteerResult = true;
            }
            this.userInfo = response.data.data;
            this.getServiceArea();
          })
          .catch(function (error) {
            console.log(error);
          });
      }else{
        axios.get('http://zyz.liyue.com/socket/api/vUser/myVolunteerCertificate', {
        })
          .then(response => {
            if (response.data.code ==200) {
              this.certificateResult = true;
            }
            this.userInfo = response.data.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    getServiceArea(val) {
      axios.get('http://zyz.liyue.com/socket/api/vArea/getAreas/0', {})
        .then(response => {
          for (var i = 0; i < response.data.data.length; i++) {
            if (this.userInfo.volunteer.serviceProvinceCode == response.data.data[i].areaCode) {
              this.pName = response.data.data[i].areaName;
              break;
            }
          }
          this.getServiceCity();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getServiceCity() {
      axios.get('http://zyz.liyue.com/socket/api/vArea/getAreas/' + this.userInfo.volunteer.serviceProvinceCode, {})
        .then(response => {
          for (var i = 0; i < response.data.data.length; i++) {
            if (this.userInfo.volunteer.serviceCityCode == response.data.data[i].areaCode) {
              this.cName = response.data.data[i].areaName;
              break;
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  }
}
