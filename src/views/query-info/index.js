import {ajax_get, ajax_post} from '../../utils/axios.util';
import constant from '../../utils/constant'

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
      if (this.activeMenu === 1) {
        ajax_get(constant.api_base_url + '/vUser/getUserInfoByIdCard',
          {
            name: this.name,
            idNo: this.number,
          }, data => {
            if (data.code === "200") {
              this.volunteerResult = true;
              this.userInfo = data.data;
              this.getServiceArea();
            }
          }
        )
      }else{
        ajax_get(constant.api_base_url + '/vUser/myVolunteerCertificate',
          null, data => {
            if (data.code === "200") {
              this.certificateResult = true;
              this.userInfo = data.data;
            }
          }
        )
      }
    },
    getServiceArea() {
      ajax_get(constant.api_base_url + '/vArea/getAreas/0',
        null, data => {
          if (data.code === "200") {
            for (var i = 0; i < data.data.length; i++) {
              if (this.userInfo.volunteer.serviceProvinceCode === data.data[i].areaCode) {
                this.pName = data.data[i].areaName;
                break;
              }
            }
            this.getServiceCity();
          }
        }
      )
    },
    getServiceCity() {
      ajax_get(constant.api_base_url + '/vArea/getAreas'+ this.userInfo.volunteer.serviceProvinceCode,
        null, data => {
          if (data.code === "200") {
            for (var i = 0; i < data.data.length; i++) {
              if (this.userInfo.volunteer.serviceCityCode === response.data.data[i].areaCode) {
                this.cName = data.data[i].areaName;
                break;
              }
            }
          }
        }
      )
    },
  }
}
