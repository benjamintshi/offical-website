import format from '@/utils/format.js'
export default {
  data() {
    return {
      newsInfo:{},//this.route.params
      content:"<p> ",
      recommend:[
      ]
    }
  },
  mounted(){
    this.newsInfo.projectId = this.$route.query.itemId;
    this.getVCultureNewsById();
  },
  methods:{
    // 点击推荐链接
    toRecommend(item){
      this.newsInfo.projectId = item.id;
      this.getVCultureNewsById();
      // this.$route.query.itemId = item.id;
    },
    getVCultureNewsById(){
      this.http.get('/vCultureNews//getVCultureNewsById/'+ this.newsInfo.projectId).then(res=>{
        var item = res.data.data;
        this.newsInfo.title = item.title;
        this.content = item.content;
        this.newsInfo.time = format(item.createDatetime,'YYYY/MM/DD HH:mm');
        this.getPageVCultureNews();
      })
    },
    vlounteerDetail(item){
      // this.$router.push({
      //   name:"volunteerInfo",
      //   query:{'projectId':item.id}
      // })
    },
    getPageVCultureNews(){
      var params ={
        'pageNum':1 ,
        'pageSize':5
      }
      this.http.get('/vCultureNews/getPageVCultureNews',params).then(res=>{
        this.total = res.data.data.total;
        this.recommend = [];
        // console.log(res.data.data.list);
        res.data.data.list.forEach(item => {
          var news ={};
          news.id = item.id;
          news.name = item.title;
          this.recommend.push(news);
        })
      })
    },
  }

}
