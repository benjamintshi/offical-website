import format from '@/utils/format.js'
export default {
    data(){
      return {
        // 筛选条件
        query:"全部",
        select01: [],//获取的一级数组数据
        select02: [],//获取的二级数组数据
        indexId:'选择一级菜单',//定义分类一的默认值
        indexId2:'选择二级菜单',
        indexNum:0,//定义一级菜单的下标
        infoNum:0,
        charmNum:0,
        volunteerNum:0,
        subject: [],
        model1: 'all',
        model2:"all",

        newsList:[  //资讯
        ],
        volunteerList:[
      ],
        videos:[ //视频
        ],
        currentPlay:""//当前播放的视频index


      }
    },
  mounted(){
    this.http.get('/vArea/getAllAreas/41').then(res=>{
      this.subject = res.data.data;
      this.select01 =this.subject;
      this.indexSelect01();
    })
    this.searchPage();
  },
  watch:{
    indexId(val,oldVal){
      this.indexSelect01();
    }
  },
  methods:{
    watchVideo(item){
      this.$router.push({
        name:"volunteerVideo",
        params:item
      })
    },
    vlounteerDetail(item){
      this.$router.push({
        name:"volunteerInfo",
        params:item
      })
    },
    searchPage() {
      this.getInformation();
      this.getCharm();
      this.getVolunteerList();
    },
    indexSelect01(){
      let i = 0;
      for (i = 0;i<this.select01.length;i++) {
        if (this.select01[i].areaCode == this.indexId){
          this.indexNum = i;
          break
        }
      }
      this.select02 = this.select01[this.indexNum].areas;
    },
    getInformation(){
      var params ={
        'pageNum':1,
        'pageSize':6,
      }
      var news ={
        title:"河南省文化和旅游志愿者走进新疆河南省文化和旅游志愿者走进新疆",
        time:"2019.08.22",
        to:"/",
        id:""
      };
      this.http.get('/vCunbaoNews/getCunbaoNewses',params).then(res=>{
          this.infoNum = res.data.data.total;
          res.data.data.list.forEach(item => {
            news.id = item.id;
            news.title = item.title;
            news.time = format(item.createDatetime,'YYYY.MM.DD');
            //news.time = '2019.08.22';
            this.newsList.push(news);
          })
      })
    },
    getCharm(){
      var params ={
        'pageNum':1,
        'pageSize':6,
      }
      var video = {
      }
      this.http.get('/vCunbaoVideo/getCunbaoVideos',params).then(res=>{
        this.charmNum = res.data.data.total;
        res.data.data.list.forEach(item => {
          video.id = item.id;
          video.title = item.title;
          if(item.cover == "http://封面.jpg"){
            video.cover = "/static/images/villageStar/zhiyuan.jpg";
          }else{
            video.cover = item.cover;
          }
          this.videos.push(video);
        })
      })
    },
    getVolunteerList(){
      var params ={
        'pageNum':1,
        'pageSize':6,
      }
      var volunteer = {
      }
      this.http.get('/vProjectAchieve/getProvinceVolunteerShows/41',params).then(res=>{
        this.volunteerNum = res.data.data.total;
        res.data.data.list.forEach(item => {
          volunteer.id = item.projectId;
          volunteer.title = item.projectName;
          if(item.attachments.length > 0){
            // console.log(item.attachments[0].l);
            volunteer.img = item.attachments[0].attachmentUrl;
          }else{
            volunteer.img = "/static/images/villageStar/zhiyuan.jpg";
          }
          volunteer.name = item.vuser.userName;
          this.volunteerList.push(volunteer);
        })
      })
    }
  }

}
