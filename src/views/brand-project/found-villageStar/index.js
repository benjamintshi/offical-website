import format from '@/utils/format.js'
export default {
    data(){
      return {
        // 筛选条件
        query:"全部",
        select01: [],//获取的一级数组数据
        select02: [],//获取的二级数组数据
        cityCode:'undefined',//定义分类一的默认值
        cityCode2:'undefined',
        indexNum:0,//定义一级菜单的下标
        infoNum:0,
        charmNum:0,
        volunteerNum:0,
        subject: [],
        model1: 'all',
        model2:"all",
        provinceCode:41,
        newsList:[],  //资讯
        volunteerList:[],
        videos:[],//视频,
        isfirst:true,
        currentPlay:"",//当前播放的视频index
      }
    },
  mounted(){
    localStorage.setItem('cityCode',this.cityCode);
    localStorage.setItem('cityCode2',this.cityCode2);
      this.http.get('/vArea/getAllAreas/'+ this.provinceCode).then(res=>{
        this.subject = res.data.data;
        this.select01 = this.subject;
        // this.indexSelect01();
        // var cityCode = localStorage.getItem('cityCode');
        // if(cityCode != undefined && cityCode != 'undefined'){
        //   let i = 0;
        //   for (i = 0;i<this.select01.length;i++) {
        //     if (this.select01[i].areaCode == cityCode){
        //       this.cityCode =this.select01[i].areaCode;
        //       break
        //     }
        //   }
        // }
        this.searchPage();
    })
  },
  watch:{
    cityCode(val,oldVal){
      this.indexSelect01();
      if(oldVal != undefined && oldVal != 'undefined'){
        this.cityCode2=undefined;
      }
      this.searchPage();
      if(typeof(this.cityCode) == "undefined" || this.cityCode == "undefined"){
        this.select02 = [];
      }
      localStorage.setItem('cityCode',this.cityCode);
    },
    cityCode2(val,oldVal){
      if(this.cityCode2){
        this.searchPage();
      }
      localStorage.setItem('cityCode2',this.cityCode2);
    }
  },
  methods:{
    watchVideo(item){
      this.$router.push({
        name:"volunteerVideo",
        query:{'itemId':item.id}
      })
    },
    vlounteerDetail(item){
      this.$router.push({
        name:"volunteerInfo",
        query:{'itemId':item.id}
      })
    },
    starNewsDetail(item){
      this.$router.push({
        name:"starNewsDetail",
        query:{'itemId':item.id}
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
        if (this.select01[i].areaCode == this.cityCode){
          this.indexNum = i;
          break
        }
      }
      this.select02 = this.select01[this.indexNum].areas;
      // var cityCode2 = localStorage.getItem('cityCode2');
      // if(cityCode2 != undefined && cityCode2 != 'undefined') {
      //   for (i = 0; i < this.select02.length; i++) {
      //     if (this.select02[i].areaCode == cityCode2) {
      //       this.cityCode2 = this.select02[i].areaCode;
      //       break
      //     }
      //   }
      // }
    },
    getInformation(){
      var params ={
        'pageNum':1,
        'pageSize':6,
        'cCode':this.cityCode,
        'xCode':this.cityCode2,
      }
      this.newsList= [];
      this.http.get('/vCunbaoNews/getCunbaoNewses',params).then(res=>{
          this.infoNum = res.data.data.total;
          res.data.data.list.forEach(item => {
            var news ={};
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
        'pageSize':12,
        'cCode':this.cityCode,
        'xCode':this.cityCode2,
      }
      this.videos= [];
      this.http.get('/vCunbaoVideo/getCunbaoVideos',params).then(res=>{
        this.charmNum = res.data.data.total;
        res.data.data.list.forEach(item => {
          var video = {
          }
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
        'pageSize':8,
        'cCode':this.cityCode,
        'xCode':this.cityCode2,
      }
      this.http.get('/vProjectAchieve/getProvinceVolunteerShows/'+ this.provinceCode,params).then(res=>{
        this.volunteerNum = res.data.data.total;
        this.volunteerList= [];
        res.data.data.list.forEach(item => {
          var volunteer = {}
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
