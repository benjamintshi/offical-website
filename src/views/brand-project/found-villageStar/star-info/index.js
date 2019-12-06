export default {
  data() {
    return {
      info: {
        name: "陈信宏",
        img: "static/images/villageStar/zhiyuan.jpg",
        id: ""
      },//this.route.params
      content:''
    }
  },
  mounted(){
    this.info.id = this.$route.query.itemId;
    this.getVCunbaoVolunteerById();
  },
  methods:{
    getVCunbaoVolunteerById(){
      this.http.get('/vCunbaoVolunteer/getVCunbaoVolunteerById/'+ this.info.id).then(res=>{
        this.info.name = res.data.data.name;
        this.info.img = res.data.data.avatarUrl;
        this.content = res.data.data.des;
        // console.log(res.data.data)
      })
    }
  }
}
