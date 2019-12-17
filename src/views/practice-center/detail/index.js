import format from '@/utils/format.js'
export default {
  data() {
    return {
      newsInfo:{},//this.route.params
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
    this.newsInfo.projectId = this.$route.query.itemId;
    this.getVProjectAchieveById();
  },
  methods:{
    // 点击推荐链接
    toRecommend(item){
      this.newsInfo.projectId = item.id;
      this.getVProjectAchieveById();
    },

    getVProjectAchieveById(){
      var params ={
        'id':this.newsInfo.projectId
      }
      this.http.post('/vCultureNews/queryVCultureNewsList',params).then(res=>{
        var item = res.data.data[0];
        this.newsInfo.title = item.title;
        this.content = item.content;
        this.newsInfo.time = format(item.createDatetime,'YYYY/MM/DD HH:mm');
        // console.log(item);
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
      this.http.get('/vProjectAchieve/getGoodVolunteerShows/41',params).then(res=>{
        this.recommend = [];
        res.data.data.list.forEach(item => {
          var volunteer ={};
          console.log(item);
          volunteer.id = item.projectId;
          volunteer.name = item.projectName;
          volunteer.time = format(item.createDate,'YYYY.MM.DD');

          this.recommend.push(volunteer);
        })
        console.log(this.recommend);
      })
    }
  }

}
