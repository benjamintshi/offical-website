import format from '@/utils/format.js'
export default {
  data() {
    return {
      newsInfo:{},//this.route.params
      params:{},
      content:"<p> ",
      recommend:[
        {
          name:"民族舞《春天中国》 培训班培训班培训班培训班",
          id:"1"
        },
        {
          name:"民族舞《春天中国》 培训班培",
          id:"2"
        },
        {
          name:"民族舞《春天中国》 培训班培训班培训班培训班",
          id:"3"
        },
        {
          name:"民族舞《春天中国》 培训班培训班",
          id:"4"
        }
      ]
    }
  },
  mounted(){
    this.params.newsId = this.$route.query.itemId;
    this.params.newsType = this.$route.query.newsType;
    if(!this.params.newsType){
      this.params.newsType = '1'
    }
    this.params.type = '1';
    this.getNewsDetail();
  },
  methods:{
    // 点击推荐链接
    toRecommend(item){
      this.params.newsId = item.id;
      this.params.newsType = item.newsType;
      this.getNewsDetail();
    },
    getNewsDetail(){
      this.http.get('/news/getNewsDetail',this.params).then(res=>{
        // console.log(res.data);
        this.newsInfo.title = res.data.data.newsTitle;
        this.content = res.data.data.newsContent;
        this.newsInfo.time = format(res.data.data.publishDate,'YYYY/MM/DD HH:mm');
        // console.log(this.newsInfo);
        this.getGoodVolunteerShows();
      })
    },
    vlounteerDetail(item){
      // this.$router.push({
      //   name:"volunteerInfo",
      //   query:{'projectId':item.id}
      // })
    },
    getGoodVolunteerShows(){
      var params ={
        'pageNum':1,
        'pageSize':5
      }
      this.newsList= [];
      this.http.get('/news/getGoodNews',params).then(res=>{
        this.recommend = [];
        // console.log(res.data);
        res.data.data.forEach(item => {
          var volunteer ={};
          // console.log(item);
          volunteer.id = item.newsId;
          volunteer.newsType = item.newsType;
          volunteer.name = item.newsTitle;
          volunteer.time = format(item.newsTitle,'YYYY.MM.DD');
          this.recommend.push(volunteer);
        })
        // console.log(this.recommend);
      })
    }
  }

}
