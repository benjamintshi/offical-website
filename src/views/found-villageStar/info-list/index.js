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
      pageNum:1,//当前页码
      total:180,// 超过16时显示页码
      inputValue:"",
      desc:false //降序
    }
  },
  mounted(){

  },
  methods:{
    // 切换页面时返回当前的页码
    changePage(page){
      this.pageNum = page;
    },
    //修改输入框
    changeValue(){
      //this.inputValue为当前数据
    },
    filter(){
      this.desc = true;// true为降序 false为升序
    }
  }
}
