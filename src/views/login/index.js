import util from '../../utils/postRequest.js';
import axios from "axios";
import {ajax_get, ajax_post} from '../../utils/axios.util';
import constant from '../../utils/constant'
import {md5} from "../../utils/common";


export default {
  data() {
    return {
      login: {
        account: "",
        passwd: ""
      },
      errInfo: '',
      loginByAccount: true,
      qr_code_src: './static/images/scan.png',
      check_qr_code_for_login_timer: null
    }
  },
  mounted() {

  },
  watch: {
    loginByAccount(val, oldVal) {
      if (val === false) {//生成登陆用二维码
        this.gen_qr_code_for_login();
      } else {//取消定时接口调用
        if (this.check_qr_code_for_login_timer != null) {
          clearTimeout(this.check_qr_code_for_login_timer);
        }
      }
    }
  },
  methods: {
    check_qr_code_for_login() {
      const that = this;
      ajax_get(constant.api_base_url + '/vQrCodeLogin/checkLoginStatus', null, function (data) {
        if (data.code !== '200') {
          if (data.message !== '用户未扫码确认') {
            alert(data.message);
          } else {
            that.check_qr_code_for_login_timer = setTimeout(that.check_qr_code_for_login, 3000);// 继续检测
          }
          return;
        }
        data = data.data;
        if (data.loginStatus !== 1) {
          alert(data.loginMsg);
          return;
        }
        window.location.href = './';// 跳转到首页
      });
    },
    gen_qr_code(content) {
      const that = this;
      ajax_post(constant.api_base_url + '/qrCode/genQRCodeBase64', {content: content, width: 200, height: 200}, function (data) {
        that.qr_code_src = data;
        if (that.check_qr_code_for_login_timer != null) {
          clearTimeout(that.check_qr_code_for_login_timer);
        }
        that.check_qr_code_for_login_timer = setTimeout(that.check_qr_code_for_login, 3000);// 继续检测
      });
    },
    gen_qr_code_for_login() {
      const that = this;
      ajax_get(constant.api_base_url + '/vQrCodeLogin/getQrCodeForLogin', null, function (data) {
        if (data.code !== '200') {
          alert(data.message);
          return;
        }
        const qr_str = JSON.stringify(data.data);
        that.gen_qr_code(qr_str);
      });
    },
    changeLoginByAccount(isLoginByAccount) {
      this.loginByAccount = isLoginByAccount;
    },
    toLogin() {
      axios({
        method: 'post',
        url: 'http://zyz.liyue.com/socket/api/vUser/appLogin',
        data: {
          account: this.login.account,
          passwd: this.login.passwd
        },
        transformRequest: util.data().transformRequest,
        headers: util.data().headers
      })
        .then(response => {
          console.log(response);
          if (response.data.data.userId != null) {
            window.location.href = 'http://zyz.liyue.com/view';
          } else {
            this.errInfo = '账号或密码错误'
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
