export default {
  data() {
    return {
      modifySuccess:false,
      formData:{
        name:"",
        cardType:"1",
        cardNum:"",
        hobby:"sing",
        volunteerType:"1",
        project:"1",
        serviceType:"1",
        serviceTime:"1",
        serviceAppointTime:"",//指定的服务时间
        timeStart:"", //服务时间段开始时间
        timeEnd:"",//服务时间段结束时间
        servieRange:{
          privince:"",
          city:"",
          county:""
        },
        addressInfo:{
          privince:"",
          city:"",
          county:"",
          address:""

        }
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

      ]
    }
  },
  mounted(){

  },
  methods:{
    submit(){
      this.modifySuccess = true;
    },
    back(){
      this.$emit("success");
    }
  }
}
