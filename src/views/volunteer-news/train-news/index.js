
export default {
  data() {
    return {
      selectedIndex:0,
      newslist:[
        {
          title:"“心旅益行3”乡村少年文化体验活动走进联合国教科文组织世",
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

    }

  },
  mounted(){
    this.getPageVTrainingNews();
  },
  methods:{
    changeFilter(index){

    },
    changeType(index){
      this.selectedIndex = index;
    },
    changePage(page){
      this.pageNum = page;
      this.getPageVTrainingNews();
    },
    toNewsDetail(item){
      this.$router.push({
        name:"trainDetail",
        query:{'itemId':item.id}
      })
    },
    getPageVTrainingNews(){
      var params ={
        'pageNum':this.pageNum,
        'pageSize':this.pageSize
      }
      this.http.get('/vTrainingNews/getPageVTrainingNews',params).then(res=>{
        this.newslist= [];
        this.total = res.data.data.total;
        console.log(res.data.data)
        res.data.data.list.forEach(item => {
          var news ={};
          news.id = item.id;
          news.title = item.title;
          news.content = item.content;
          news.tag = item.provinceName + item.cityName + item.countyName;
          news.img = item.cover;
          this.newslist.push(news);
        })
      })
    }
  }
}
