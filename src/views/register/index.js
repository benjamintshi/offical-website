import BaseInfo from "./input-base-info/index.vue";
import axios from "axios";
import util from "../../utils/postRequest";
import {md5} from "../../utils/common";
export default {
  components: {
    BaseInfo
  } ,
  data() {
    return {
      send:"发送验证码",
      t:"",
      canSend:true,
      formData:{
        account:"",
        code:"",
        secret:""
      },
      show:{
        firstStep:true,
        secondStep:false,
        thirdStep:false,
        fourStep:false

      },
      role:"",
      code:'',
      passwd:'',
      account:'',
      child:{},
    }

  },
  mounted(){

  },
  methods:{
    sendCode(){
      if (!this.canSend) return;
      axios({
        method: 'post',
        url: 'http://zyz.liyue.com/socket/api/sms/sendPhoneOrEmailCode',
        data: {
          phoneOrEmail: this.account,
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
    submitFirst(){

      if(this.code==null || this.code==='') {
        alert('请填写验证码！')
      }
      else if(this.passwd==null || this.passwd===''){
        alert('请输入密码！')
      }
      else {
        axios({
          method: 'post',
          url: 'http://zyz.liyue.com/socket/api/sms/checkPhoneOrEmailCodeForRegister',
          data: {
            phoneOrEmail: this.account,
            code:this.code,
          },
          transformRequest: util.data().transformRequest,
          headers: util.data().headers
        })
          .then(response => {
            if (response.data.code == 200){
              this.show.firstStep = false;
              this.show.secondStep = true;
            }else if(response.data.code==0){
              alert('用户已存在')
            }else{
              alert('验证码错误！')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      },
    // 注册选择角色
    selectRole(index){
      this.role = index;
    },
  //
    next(){
      if(this.role==2){
        this.show.secondStep = false;
        this.show.thirdStep = true;
      }else{
        axios({
          method: 'post',
          url: 'http://zyz.liyue.com/socket/api/sms/registerNormal',
          data: {
            phoneOrEmail: this.account,
            code:this.code,
            password:this.passwd,
          },
          transformRequest: util.data().transformRequest,
          headers: util.data().headers
        })
          .then(response => {
            if (response.data.code == 200){
              this.show.secondStep = false;
              this.show.fourStep = true;
            }else{
              alert('注册失败，请稍后再试~')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    submitSuccess(val){
      //子组件的对象赋值给父组件对象
      this.child=val
      axios({
        method: 'post',
        url: 'http://zyz.liyue.com/socket/api/sms/registerVolunteer',
        data: {
          phoneOrEmail: this.account,
          code: this.code,
          passWord: md5(this.passwd),
          userName: this.child.userName,
          identification: this.child.cardNum,
          cardType: this.child.cardType,
          provinceCode: this.child.servicePCode,
          cityCode: this.child.serviceCCode,
          countyCode: this.child.serviceXCode,
          adress: this.child.address,
          serviceProvinceCode: this.child.pCode,
          serviceCityCode: this.child.cCode,
          serviceCountyCode: this.child.xCode,
          artSpetiality: this.child.hobby,
          platformType: this.child.volunteerType,
          projectName: this.child.project,
          serviceType: this.child.serviceType,
          serviceTime: this.child.serviceAppointTime,
          servicePeriod: this.child.timeStart + "~" + this.child.timeEnd,
        },
        transformRequest: util.data().transformRequest,
        headers: util.data().headers
      })
        .then(response => {
          this.show.thirdStep = false;
          this.show.fourStep = true;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
