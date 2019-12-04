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
      this.http.get('/vProjectAchieve/getVProjectAchieveById/'+ this.newsInfo.projectId).then(res=>{
        this.newsInfo.title = res.data.data.projectName;
        this.content = res.data.data.projectInfo;
        this.newsInfo.time = format(res.data.data.createDate,'YYYY/MM/DD HH:mm');
        console.log(this.newsInfo);
        this.getGoodVolunteerShows();
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
