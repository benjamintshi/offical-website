import {ajax_get, ajax_post} from '../../../utils/axios.util';
import constant from "../../../utils/constant";

export default {
  data() {
    return {//详情介绍
      canSend: true,
      show: "first",
      send: "发送验证码",
      detailAdress: '',
      formData: {
        cardType: "1",
        cardNum: "",
        name: "",
        phoneOrEmail: "",
        code: ""
      },
      cardList: [
        {
          name: "手机号",
          id: "1"
        },
        {
          name: "邮箱号",
          id: "2"
        },
        {
          name: "身份证",
          id: "3"
        }
      ],
      targetId: '',//加入团队或者活动还是啥啥啥的id
      joinType: '',//区分加入的是团队还是活动还是啥啥啥，1活动，2团队，3培训
      userInfo:{
        volunteer:{}
      }
    }
  },
  mounted() {
    this.getUserInfo();
    let id = this.$route.query.itemId
    this.targetId = id
    let type = this.$route.query.type
    this.joinType = type
  },
  methods: {
    getUserInfo() {
      ajax_get(constant.api_base_url + '/vUser/getSessionUserInfo', null, data => {
        if (data.code === '200' && data.data.userId != null) {
          this.userInfo = data.data;
          this.show = 'second';
        } else {
          this.show = 'first';
        }
      });

    },

    nextStep() {
      if (this.formData.cardType == 3) {
        ajax_post(constant.api_base_url + '/sms/checkIdCardForLogin', {
          name: this.formData.name,
          idNo: this.formData.cardNum
        }, data => {
          if (data.code == 200 && data.data.userId != null) {
            this.show = "second";
            this.getUserInfo();
          } else {
            alert(data.message)
          }
        });
      } else {
        ajax_post(constant.api_base_url + '/sms/checkPhoneOrEmailCodeForLogin', {
          phoneOrEmail: this.formData.phoneOrEmail,
          code: this.formData.code
        }, data => {
          alert(data.code+data.data.userId)
          if (data.code == '200' && data.data.userId != null) {
            this.show = "second";
            this.getUserInfo();
          } else {
            alert(data.message)
          }
        });
      }
    },
    confirmInfo() {
      if (this.joinType == 1) {
        ajax_post(constant.api_base_url + '/vActivityMember/applyJoinActivity/' + this.targetId, null,
          data => {
            if (data.code == 200) {
              this.show = "third";
              this.getUserInfo();
            } else {
              alert(data.message)
            }
          });
      } else if (this.joinType == 2) {
        ajax_post(constant.api_base_url + '/vTeam/applyJoinTeam/' + this.targetId, null,
          data => {
            if (data.code == 200) {
              this.show = "third";
              this.getUserInfo();
            } else {
              alert(data.message)
            }
          });
      } else {
        ajax_post(constant.api_base_url + '/vTraining/applyJoinTraining/' + this.targetId, null,
          data => {
            if (data.code == 200) {
              this.show = "third";
              this.getUserInfo();
            } else {
              alert(data.message)
            }
          });
      }
    },
    sendCode() {
      if (!this.canSend) return;
      ajax_post(constant.api_base_url + '/sms/sendPhoneOrEmailCode/', {
          phoneOrEmail: this.formData.phoneOrEmail
        },
        data => {
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
  }
}

