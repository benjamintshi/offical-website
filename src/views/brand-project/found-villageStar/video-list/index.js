export default {
  data() {
    return {
      info:false,
      cityCode:'',
      cityCode2:'',
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
      videos:[],
      sortType:'0',
      desc:true //降序
    }
  },
  mounted(){
    this.cityCode = localStorage.getItem('cityCode');
    this.cityCode2 = localStorage.getItem('cityCode2');
    this.getCharm();
  },
  methods:{
    // 切换页面时返回当前的页码
    changePage(page){
      this.pageNum = page;
      this.getCharm();
    },
    watchVideo(item){
      this.$router.push({
        name:"volunteerVideo",
        query:{'itemId': item.id}
      })
    },
    getCharm(){
      console.log("页面开始检索。。。");
      var params ={
        'pageNum':this.pageNum ,
        'pageSize':16,
        'title':this.inputValue,
        'sortType':this.sortType,
        'cCode':this.cityCode,
        'xCode':this.cityCode2,
      }
      var video = {
      }
      this.videos= [];
      this.http.get('/vCunbaoVideo/getCunbaoVideos',params).then(res=>{
        this.total = res.data.data.total;
        res.data.data.list.forEach(item => {
          var video ={};
          video.id = item.id;
          video.title = item.title;
          video.name = item.publishUserName;
          if(item.cover == "http://封面.jpg"){
            video.img = "/static/images/villageStar/zhiyuan.jpg";
          }else{
            video.img = item.cover;
          }
          this.videos.push(video);
        })
      })
    },
    //修改输入框
    changeValue(){
      //this.inputValue为当前数据
      this.getCharm();
    },
    filter(){
      this.desc = !this.desc;// true为降序 false为升序
      this.pageNum = 1;
      if(this.desc){
        this.sortType = '0';
      }else{
        this.sortType = '1'
      }
      this.getCharm();
    }
  }
}
