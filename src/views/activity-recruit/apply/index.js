
export default {

  data() {
    return {//详情介绍
      show:"first",
      send:"发送验证码",
      formData:{
        cardType:"1",
        cardNum:"",
        name:"",
        email:"",
        code:""
      },
      cardList:[
        {
          name:"身份证",
          id:"1"
        },
        {
          name:"护照",
          id:"2"
        }

      ],


    }
  },
  methods:{
    nextStep(){
      if(this.formData.name == null|| this.formData.name== ''){
          alert("请输入姓名");
          return;
      }
      else if(this.formData.cardNum == null|| this.formData.cardNum== ''){
        alert("请输入身份证号码");
        return;
      }else{

      }

      this.show = "second";
    },
    confirmInfo(){
      this.show = "third";
    },
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
  }
}

