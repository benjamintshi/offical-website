
export default {

  data() {
    return {
      newslist:[

      ],
      pageNum:1,//当前页码
      pageSize:6,
      inputValue:'',
      total:16,// 超过16时显示页码
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

    }

  },
  mounted(){
    this.cityCode = localStorage.getItem('cityCode');
    this.cityCode2 = localStorage.getItem('cityCode2');
    this.getCunbaoNewses();
  },
  methods:{
    changePage(page){
      this.pageNum = page;
      this.getCunbaoNewses();
    },
    getCunbaoNewses(){
      // console.log("页面开始检索。。。");
      var params ={
        'pageNum':this.pageNum ,
        'pageSize':6,
        'title':this.inputValue,
        'sortType':this.sortType,
        'cCode':this.cityCode,
        'xCode':this.cityCode2,
      }
      var video = {
      }
      this.videos= [];
      this.http.get('/vCunbaoNews/getCunbaoNewses',params).then(res=>{
        this.total = res.data.data.total;
        console.log(res.data.data);
        this.newslist =[];
        res.data.data.list.forEach(item => {
          var news ={};
          news.id = item.id;
          news.title = item.title;
          news.tag = item.cityName + item.countyName;
          if(item.cover == "http://封面.jpg"){
            news.img = "static/images/villageStar/zhiyuan.jpg";
          }else{
            news.img = item.cover;
          }
          news.content = item.content;
          this.newslist.push(news);
        })
      })
    },
    toRecommend(item){
      this.$router.push({
        name:"starNewsDetail",
        query:{'itemId':100027 }
      })
    },
    search(){
      this.getCunbaoNewses();
    },
    toNewsDetail(item){
      this.$router.push({
        name:"starNewsDetail",
        query:{'itemId':item.id}
      })
    },
  },
}
