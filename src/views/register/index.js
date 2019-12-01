import BaseInfo from "./input-base-info/index.vue";
export default {
  components: {BaseInfo} ,
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
        firstStep:false,
        secondStep:false,
        thirdStep:true,
        fourStep:false

      },
      role:""


    }

  },
  mounted(){

  },
  methods:{
    sendCode(){
      if(!this.canSend ) return;
      const that = this;
      let time = 5;
     this.t = setInterval(()=>{
       that.canSend = false;
        time--;
        that.send = time+"s";
        if(time < 1){
          window.clearInterval(that.t);
          that.send = "重新发送";
          that.canSend = true;
        }
      },1000);
    },
    submitFirst(){
      this.show.firstStep = false;
      this.show.secondStep = true;
    },
    // 注册选择角色
    selectRole(index){
      this.role = index;
    },
  //
    next(){
      if(this.role){
        this.show.secondStep = false;
        this.show.thirdStep = true;
      }else{
        return;
      }
    },
    submitSuccess(){
      this.show.thirdStep = false;
      this.show.fourStep = true;
    }
  }
}
