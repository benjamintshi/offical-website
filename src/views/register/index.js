import BaseInfo from "./input-base-info/index.vue";
import {ajax_get, ajax_post} from '../../utils/axios.util';
import constant from '../../utils/constant'
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
      ajax_post(constant.api_base_url + '/sms/sendPhoneOrEmailCode',
        {
          phoneOrEmail: this.account,
        }, data => {
          if (data.code !== "200") {
            alert(data.message)
          }
        }
      )
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
      let reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
      if(this.code==null || this.code==='') {
        alert('请填写验证码！')
      }
      else if(this.passwd==null || this.passwd===''){
        alert('请输入密码！')
      }
      else if (reg.test(this.passwd)==false || this.passwd.length<8){
        alert('密码不符合规范!')
      }

      else {
        ajax_post(constant.api_base_url + '/sms/checkPhoneOrEmailCodeForRegister',
          {
            phoneOrEmail: this.account,
            code:this.code,
          }, data => {
            if (data.code === "200") {
              this.show.firstStep = false;
              this.show.secondStep = true;
            }else{
              alert(data.message)
            }
          }
        )
      }
      },
    // 注册选择角色
    selectRole(index){
      this.role = index;
    },
  //
    next(){
      if(this.role==="2"){
        this.show.secondStep = false;
        this.show.thirdStep = true;
      }else{
        ajax_post(constant.api_base_url + '/sms/registerNormal',
          {
            phoneOrEmail: this.account,
            code:this.code,
            password:md5(this.passwd),
          }, data => {
            if (data.code === "200") {
              alert(data.message)
              this.show.firstStep = false;
              this.show.secondStep = true;
              this.$router.push({
                name:"index",
              })
            }else{
              alert(data.message)
            }
          }
        )
      }
    },
    toLogin(){
      this.$router.push({
        name:"login",
        query:{}
      })

    },
    submitSuccess(val){
      //子组件的对象赋值给父组件对象
      this.child=val
      let userData={
        phoneOrEmail: this.account,
        code: this.code,
        passWord: md5(this.passwd),
        userName: this.child.userName,
        identification: this.child.cardNum,
        cardType: this.child.cardType,
        provinceCode: this.child.servicePCode,
        cityCode: this.child.serviceCCode,
        countyCode: this.child.serviceXCode,
        address: this.child.address,
        serviceProvinceCode: this.child.pCode,
        serviceCityCode: this.child.cCode,
        serviceCountyCode: this.child.xCode,
        artSpetiality: this.child.hobby,
        platformType: this.child.volunteerType,
        projectName: this.child.project,
        serviceType: this.child.serviceType,
        serviceTime: this.child.serviceAppointTime,
        servicePeriod: this.child.timeStart + "~" + this.child.timeEnd,
      }
      ajax_post(constant.api_base_url + '/sms/registerVolunteer',
        userData, data => {
          if (data.code === "200") {
            this.show.thirdStep = false;
            this.show.fourStep = true;
          }else{
            alert(data.message)
          }
        }
      )

    }
  }
}
