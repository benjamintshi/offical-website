import axios from "axios";
import util from "../../utils/postRequest";

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
      axios({
        method: 'post',
        url: 'http://zyz.liyue.com/socket/api/sms/sendPhoneOrEmailCode',
        data: {
          phoneOrEmail: this.accountInfo.account,
        },
        transformRequest: util.data().transformRequest,
        headers: util.data().headers
      })
        .then(response => {
        })
        .catch(function (error) {
          console.log(error);
        });
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
      if(this.selectType==1){
      axios({
        method: 'post',
        url: 'http://zyz.liyue.com/socket/api/sms/checkPhoneOrEmailCodeForLost',
        data: {
          phoneOrEmail: this.accountInfo.account,
          code: this.accountInfo.code
        },
        transformRequest: util.data().transformRequest,
        headers: util.data().headers
      })
        .then(response => {
          if(response.data.code==200){
            this.firstStep = false;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      }else{
        axios({
          method: 'post',
          url: 'http://zyz.liyue.com/socket/api/sms/checkIdCardForLost',
          data: {
            name: this.identifierInfo.name,
            idNo: this.identifierInfo.number
          },
          transformRequest: util.data().transformRequest,
          headers: util.data().headers
        })
          .then(response => {
            if(response.data.code==200){
              this.firstStep = false;
            }
            else if(response.data.code==0){
              alert('用户不存在')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    setPsd() {
        if(this.accountInfo.passwd==this.accountInfo.passwd2){
          axios({
            method: 'post',
            url: 'http://zyz.liyue.com/socket/api/sms/updatePwdForLost',
            data: {
              newPassword: this.accountInfo.passwd
            },
            transformRequest: util.data().transformRequest,
            headers: util.data().headers
          })
            .then(response => {
              if(response.data.code==200){
                alert('修改成功')
                window.location.href = 'http://zyz.liyue.com/view/#/login';
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
        else{
          alert('密码不一致')
        }
    },

  }
}
