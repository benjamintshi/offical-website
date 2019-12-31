
export default {

  data() {
    return {
      newslist:[
      ],
      pageNum:1,//当前页码
      pageSize:6,
      total:16,// 超过16时显示页码
      inputValue:""

    }

  },
  mounted(){
    this.getPageVCultureNews();

  },
  methods:{
    changePage(page){
      this.pageNum = page;
      this.getPageVCultureNews();
    },
    toRecommend(){

    },
    search(){

    },
    getPageVCultureNews(){
      console.log("页面开始检索。。。");
      var params ={
        'pageNum':this.pageNum ,
        'pageSize':this.pageSize
      }

      this.videos= [];
      this.http.get('/vCultureNews/getPageVCultureNews',params).then(res=>{
        this.total = res.data.data.total;
        this.newslist = [];
        console.log(res.data.data.list);
        res.data.data.list.forEach(item => {
          var news ={};
          news.id = item.id;
          news.title = item.title;
          news.tag = item.provinceName + item.cityName + item.countyName;
          news.tagShow = true
          if(news.tag ==  '0'){
            news.tagShow = false
          }
          if(news.cover == "http://封面.jpg"){
            news.img = "static/images/villageStar/zhiyuan.jpg";
          }else{
            news.img = item.cover;
          }
          news.content = item.content;
          this.newslist.push(news);
        })
      })
    },
    toNewsDetail(item){
      this.$router.push({
        name:"practiceCenterDetail",
        query:{'itemId':item.id}
      })
    },
  },
}
