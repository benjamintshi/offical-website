export default {
  data() {
    return {
      info:false,
      volunteers:[ //志愿者风采
        {
          img:"/static/images/villageStar/zhiyuan.jpg",
          title:"河南省志愿服务活动",
          name:"李黄梁",
          id:""
        },
        {
          img:"/static/images/villageStar/zhiyuan.jpg",
          title:"河南省志愿服务活动",
          name:"李黄梁",
          id:""
        },
        {
          img:"/static/images/villageStar/zhiyuan.jpg",
          title:"河南省志愿服务活动",
          name:"李黄梁",
          id:""
        },
        {
          img:"/static/images/villageStar/zhiyuan.jpg",
          title:"河南省志愿服务活动河南省志愿服务活动河南省志愿服务活动",
          name:"李黄梁",
          id:""
        }
      ],
    }
  },
  mounted(){
    debugger
    this.info = this.$route.params;
    this.info.url = "http://culturetv.hanyastar.com.cn/standard/nationalculturecloud/res/live/huikanliushanghai.mp4"
  }
}
