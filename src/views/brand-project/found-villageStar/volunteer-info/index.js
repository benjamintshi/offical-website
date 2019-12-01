import format from '@/utils/format.js'
export default {
  data() {
    return {
      newsInfo:{},//this.route.params
      content:"<p> " +
      "      为进一步激发广大家长和孩子诵读经典的兴趣，感受阅读乐趣，7月6日早上司马迁图书馆携手养正学堂在禹甸园南广场举办了以“感恩孝亲”为主题的亲子经典诵读活动。活动邀请了60对亲子家庭参加。<br /> \n" +
      "      <br /> \n" +
      "      活动现场，杨芙蓉老师带领穿汉服的的孩子和爸爸妈妈一起诵读《弟子规》《朱子家训》等经典作品，让孩子和家长体会“孝悌、谨言、爱众”的圣人古训，让学生们感受到了传统文化的魅力。<br /> \n" +
      "      <br /> \n" +
      "      亲子诵读，共享经典！本次活动，让家长和孩子一同阅读，一同朗诵，一同成长，营造了良好的亲子阅读氛围，让大家感受到传统文化的博大精深，体味传统文化的人文内涵。为进一步激发广大家长和孩子诵读经典的兴趣，感受阅读乐趣，7月6日早上司马迁图书馆携手养正学堂在禹甸园南广场举办了以“感恩孝亲”为主题的亲子经典诵读活动。活动邀请了60对亲子家庭参加。活动现场，杨芙蓉老师带领穿汉服的的孩子和爸爸妈妈一起诵读《弟子规》《朱子家训》等经典作品，让孩子和家长体会“孝悌、谨言、爱众”的圣人古训，让学生们感受到了传统文化的魅力。<br /> \n" +
      "      <br /> \n" +
      "      亲子诵读，共享经典！本次活动，让家长和孩子一同阅读，一同朗诵，一同成长，营造了良好的亲子阅读氛围，让大家感受到传统文化的博大精深，体味传统文化的人文内涵。<br /> \n" +
      "   \n" +
      "      </p> \n" +
      "      <p> \n" +
      "      <br /> \n" +
      "      </p>",
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
    this.newsInfo.projectId = this.$route.query.projectId;
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
