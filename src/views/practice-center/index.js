
export default {

  data() {
    return {
      newslist:[
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          content:"来自双阳区城中小学来自双阳区城中小学、长春市红领巾宣讲团的26名小学生在吉林外国语大学26名大学生志愿者的陪同下，走进联合国教科文组织世走进联合国教科文组织世走进联合国教科文组织世想”、“乡村振兴战略”、“改革开放40周年”、 “社会主义核心价值观”等主题。满足广大人民群众的精神文化需求，切实发挥文化利民、乐民、惠民、育民的作用。（南阳市群众艺术馆/非物质文化遗产保护中心 ）",
          tag:"陕西省渭南市韩城市",
          img:"static/images/villageStar/zhiyuan.jpg",
          id:"1"
        },
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          content:"来自双阳区城中小学来自双阳区城中小学、长春市红领巾宣讲团的26名小学生在吉林外国语大学26名大学生志愿者的陪同下，走进联合国教科文组织世走进联合国教科文组织世走进联合国教科文组织世",
          tag:"陕西省渭南市韩城市",
          img:"static/images/villageStar/zhiyuan.jpg",
          id:"1"
        },
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          content:"来自双阳区城中小学来自双阳区城中小学、长春市红领巾宣讲团的26名小学生在吉林外国语大学26名大学生志愿者的陪同下，走进联合国教科文组织世走进联合国教科文组织世走进联合国教科文组织世",
          tag:"陕西省渭南市韩城市",
          img:"static/images/villageStar/zhiyuan.jpg",
          id:"1"
        },
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          content:"来自双阳区城中小学来自双阳区城中小学、长春市红领巾宣讲团的26名小学生在吉林外国语大学26名大学生志愿者的陪同下，走进联合国教科文组织世走进联合国教科文组织世走进联合国教科文组织世",
          tag:"陕西省渭南市韩城市",
          img:"static/images/villageStar/zhiyuan.jpg",
          id:"1"
        },
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          content:"来自双阳区城中小学来自双阳区城中小学、长春市红领巾宣讲团的26名小学生在吉林外国语大学26名大学生志愿者的陪同下，走进联合国教科文组织世走进联合国教科文组织世走进联合国教科文组织世",
          tag:"陕西省渭南市韩城市",
          img:"static/images/villageStar/zhiyuan.jpg",
          id:"1"
        },
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          content:"来自双阳区城中小学来自双阳区城中小学、长春市红领巾宣讲团的26名小学生在吉林外国语大学26名大学生志愿者的陪同下，走进联合国教科文组织世走进联合国教科文组织世走进联合国教科文组织世",
          tag:"陕西省渭南市韩城市",
          img:"static/images/villageStar/zhiyuan.jpg",
          id:"1"
        },

      ],
      pageNum:1,//当前页码
      pageSize:6,
      total:16,// 超过16时显示页码
      inputValue:""

    }

  },
  mounted(){
    this.getPageVCultureNews();

  },
  methods:{
    changePage(page){
      this.pageNum = page;
      this.getPageVCultureNews();
    },
    toRecommend(){

    },
    search(){

    },
    getPageVCultureNews(){
      console.log("页面开始检索。。。");
      var params ={
        'pageNum':this.pageNum ,
        'pageSize':this.pageSize
      }

      this.videos= [];
      this.http.get('/vCultureNews/getPageVCultureNews',params).then(res=>{
        this.total = res.data.data.total;
        this.newslist = [];
        // console.log(res.data.data.list);
        res.data.data.list.forEach(item => {
          var news ={};
          news.id = item.id;
          news.title = item.title;
          news.tag = item.createDatetime;
          if(news.cover == "http://封面.jpg"){
            news.img = "static/images/villageStar/zhiyuan.jpg";
          }else{
            news.img = item.cover;
          }
          news.content = item.content;
          this.newslist.push(news);
        })
      })
    },
    toNewsDetail(item){
      this.$router.push({
        name:"practiceCenterDetail",
        query:{'itemId':item.id}
      })
    },
  },
}
