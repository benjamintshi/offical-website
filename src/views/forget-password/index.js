
export default {
  data() {
    return {
      firstStep:true,
      accountType:[
        {
          name:"手机号/邮箱号",
          id:"1",
          value:"1"
        },
        {
          name:"身份证",
          id:"2",
          value:"2"
        }
      ],
      selectType:"1",
      send:"发送验证码",
      accountInfo:{
        account:"",
        code:""
      },
      identifierInfo:{
        number:"",
        name:""
      }
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
    nextStep(){
        this.firstStep = false;
    },
    changeType(){

    },
    setPsd(){

    }
  }
}
