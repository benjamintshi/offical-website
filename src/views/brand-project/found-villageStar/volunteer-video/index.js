import format from '@/utils/format.js'
export default {
  data() {
    return {
      info:{},
      volunteers:[ //志愿者风采
        {
          img:"static/images/villageStar/zhiyuan.jpg",
          title:"河南省志愿服务活动",
          name:"李黄梁",
          id:""
        },
        {
          img:"static/images/villageStar/zhiyuan.jpg",
          title:"河南省志愿服务活动",
          name:"李黄梁",
          id:""
        },
        {
          img:"static/images/villageStar/zhiyuan.jpg",
          title:"河南省志愿服务活动",
          name:"李黄梁",
          id:""
        },
        {
          img:"static/images/villageStar/zhiyuan.jpg",
          title:"河南省志愿服务活动河南省志愿服务活动河南省志愿服务活动",
          name:"李黄梁",
          id:""
        }
      ],
    }
  },
  mounted(){
    // console.log(this.$route.query)
    this.info.itemId = this.$route.query.itemId;
    console.log(this.info)
    this.getCharm();
    // this.info.url = "http://culturetv.hanyastar.com.cn/standard/nationalculturecloud/res/live/huikanliushanghai.mp4"
  },
  methods:{
    getCharm(){
      this.videos= [];
      this.http.get('/vCunbaoVideo/getVCunbaoVideoById/'+ this.info.itemId).then(res=>{
        console.log(res.data.data)
        var item = res.data.data;

          var video = {}
          video.id = item.id;
          video.title = item.title;
          if(item.cover == "http://封面.jpg"){
            video.cover = "static/images/villageStar/zhiyuan.jpg";
          }else{
            video.cover = item.cover;
          }
          if(item.video == "http://视频地址.mp4"){
            video.url ="http://culturetv.hanyastar.com.cn/standard/nationalculturecloud/res/live/huikanliushanghai.mp4"
          }else{
            video.url = item.video;
          }
          video.time = format(item.createDatetime,'YYYY-MM-DD HH:mm')
          video.content = item.content;
        this.info = video;
        this.getOtherCharm();
        // console.log(res.data.data);
      })
    },
    watchVideo(item){
      this.info.itemId = item.id;
      this.getCharm();
    },
    getOtherCharm(){
      var params ={
        'id':this.info.itemId,
        'size':4,
      }
      this.videos= [];
      this.http.get('/vCunbaoVideo/getRelatedVideos',params).then(res=>{
        this.charmNum = res.data.data.total;
        var item ={}
        this.volunteers = []
        for(let i in res.data.data){
          item = res.data.data[i];
          var video = {}
          video.id = item.id;
          video.title = item.title;
          if(item.cover == "http://封面.jpg"){
            video.img = "static/images/villageStar/zhiyuan.jpg";
          }else{
            video.img = item.cover;
          }
          if(item.video == "http://视频地址.mp4"){
            video.url ="http://culturetv.hanyastar.com.cn/standard/nationalculturecloud/res/live/huikanliushanghai.mp4"
          }else{
            video.url = item.video;
          }
          video.time = format(item.createDatetime,'YYYY-MM-DD HH:mm')
          video.name = item.publishUserName;
          this.volunteers.push(video);
          // this.videos.push(video)
        }
        // console.log(res.data.data);
      })
    }
  }
}
