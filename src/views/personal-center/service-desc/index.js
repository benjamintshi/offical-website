import {empty} from "../../../utils/common";
import {ajax_get, ajax_post} from "../../../utils/axios.util";
import constant from "../../../utils/constant";

export default {
  data() {
    return {
      noDesc: false,  //是否有个人介绍
      modify: false,
      upload: {
        url: "http://cultrual.bbwhm.com:8087/api/upload/uploadFile/" //上传到服务器的地址，请替换
      },
      userInfo: {
        volunteer: {}
      }
    }
  },
  mounted(){
    this.getUserInfo();
  },
  methods:{
    onUploadSuccess(data) {
      if (data.code === '200') {
        this.userInfo.avatar = data.data;
      }
    },
    getUserInfo() {
      ajax_get(constant.api_base_url + '/vUser/getSessionUserInfo', null, data => {
        if (data.code === '2') {
          window.location.href = './';
          return;
        }
        if (data.code !== '200') {
          alert(data.message);
          return;
        }
        this.userInfo = data.data;
        if (empty(this.userInfo.avatar)) {
          this.userInfo.avatar = './static/images/common/upload.png';
        }
      });
    },
    submit(){
      ajax_post(constant.api_base_url + '/vUser/updateUser', {
          userId: this.userInfo.userId,
          avatar: this.userInfo.avatar,
          introduce: this.userInfo.volunteer.introduce
      }, data => {
        if (data.code !== '200') {
          alert(data.message);
          return;
        }
        this.modify  = false;
      });
    }
  }
}
