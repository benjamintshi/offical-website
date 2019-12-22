import format from '@/utils/format.js'
export default {
  data() {
    return {
      newsInfo:{},//this.route.params
      content:"<p> " +
      " 为保障旅游者合法权益，规范在线旅游市场秩序，促进在线旅游产业可持续发展，我部研究起草了《在线旅游经营服务管理暂行规定（征求意见稿）》。现面向社会公开征求意见，公众可通过以下途径和方式提出反馈意见：\n" +
      "　　1.通过信函方式将意见邮寄至：北京市东城区朝阳门北大街10号文化和旅游部市场管理司（邮编：100020）。来信请注明“《在线旅游经营服务管理暂行规定》征求意见”字样。\n" +
      "　　2.通过电子邮件方式将意见发送至邮箱：wlscjgc@mct.gov.cn。\n" +
      "　　意见反馈截止时间为2019年11月10日。\n</p>",
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
      ],
      appendix:[
        {
          name:"在线旅游经营服务管理暂行规定（征求意见稿）",
          url:"http://106.13.17.103/html/test.docx"
        },
        {
          name:"关于《在线旅游经营服务管理暂行规定（征求意见稿）》",
          url:"http://106.13.17.103/html/test.docx"
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
