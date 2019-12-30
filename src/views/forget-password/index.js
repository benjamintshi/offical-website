import {ajax_post, ajax_get} from "../../utils/axios.util";
import constant from "../../utils/constant";
import {md5} from "../../utils/common";

export default {
  data() {
    return {
      firstStep: true,
      canSend: true,
      accountType: [
        {
          name: "手机号/邮箱号",
          id: "1",
          value: "1"
        },
        {
          name: "身份证",
          id: "2",
          value: "2"
        }
      ],
      selectType: "1",
      send: "发送验证码",
      accountInfo: {
        account: "",
        passwd: "",
        passwd2: "",
        code: ""
      },
      identifierInfo: {
        number: "",
        name: ""
      }
    }

  },
  mounted() {

  },
  methods: {
    sendCode() {
      if (!this.canSend) return;
      ajax_post(constant.api_base_url + '/sms/sendPhoneOrEmailCode',
        {
          phoneOrEmail: this.accountInfo.account,
        }, data => {
          if (data.code !== "200") {
            alert(data.message)
          }
        }
      );
      const that = this;
      let time = 5;
      this.t = setInterval(() => {
        that.canSend = false;
        time--;
        that.send = time + "s";
        if (time < 1) {
          window.clearInterval(that.t);
          that.send = "重新发送";
          that.canSend = true;
        }
      }, 1000);
    },
    nextStep() {
      if (this.selectType === "1") {
        ajax_post(constant.api_base_url + '/sms/checkPhoneOrEmailCodeForLost',
          {
            phoneOrEmail: this.accountInfo.account,
            code: this.accountInfo.code
          }, data => {
            if (data.code === "200") {
              this.firstStep = false;
            }else {
              alert(data.message)
            }
          }
        )
      } else {
        ajax_post(constant.api_base_url + '/sms/checkIdCardForLost',
          {
            name: this.identifierInfo.name,
            idNo: this.identifierInfo.number
          }, data => {
            if (data.code === "200") {
              this.firstStep = false;
            } else {
              alert(data.message);
            }
          }
        )
      }
    },
    setPsd() {
      if (this.accountInfo.passwd === this.accountInfo.passwd2) {
        ajax_post(constant.api_base_url + '/sms/updatePwdForLost',
          {
            newPassword: md5(this.accountInfo.passwd)
          }, data => {
            if (data.code === "200") {
              alert('修改成功');
              window.location.href = 'http://zyz.liyue.com/view/#/login';
            } else {
              alert(data.message);
            }
          }
        )
      } else {
        alert('密码不一致')
      }
    },

  }
}
