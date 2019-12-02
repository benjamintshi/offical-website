import format from '@/utils/format.js'
export default {
  data() {
    return {
      newsInfo: {},//this.route.params
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
    this.newsInfo.itemId = this.$route.query.itemId;
    this.getVCunbaoNewsById();
    this.getGoodVolunteerShows();
  },
  methods:{
    // 点击推荐链接
    toRecommend(item){
      this.$router.push({
        name:"volunteerInfo",
        query:{'itemId':item.id}
      })
    },
    getVCunbaoNewsById(){
      this.http.get('/vCunbaoNews/getVCunbaoNewsById/'+ this.newsInfo.itemId).then(res=>{
        console.log(res.data.data);
        this.newsInfo.title = res.data.data.title;
        this.content = res.data.data.content;
        this.newsInfo.time = format(res.data.data.createDatetime,'YYYY/MM/DD HH:mm');
        console.log(this.newsInfo);
      })
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
          volunteer.id = item.projectId;
          volunteer.name = item.projectName;
          volunteer.time = format(item.createDate,'YYYY.MM.DD');
          this.recommend.push(volunteer);
        })
      })
    }
  }

}
