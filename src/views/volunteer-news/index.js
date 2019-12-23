import ServiceInfo from "./volunteer-service-info/index.vue";
import PolicyFiles from "./policy-files/index.vue";
import TrainNews from "./train-news/index.vue";
export default {
  components: {ServiceInfo, PolicyFiles, TrainNews},
  data() {
    return {
      filterList: ["活动快讯", "政策文件", "培训快讯"],
      selectedIndex: 0,
      newslist: [
        {
          title: "“心旅益行0”乡村少年文化体验活动走进联合国教科文组织世",
          content: "来自双阳区城中小学来自双阳区城中小学、长春市红领巾宣讲团的26名小学生在吉林外国语大学26名大学生志愿者的陪同下，走进联合国教科文组织世走进联合国教科文组织世走进联合国教科文组织世",
          tag: "陕西省渭南市韩城市",
          img: "static/images/villageStar/zhiyuan.jpg",
          id: "1"
        },
        {
          title: "“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          content: "来自双阳区城中小学来自双阳区城中小学、长春市红领巾宣讲团的26名小学生在吉林外国语大学26名大学生志愿者的陪同下，走进联合国教科文组织世走进联合国教科文组织世走进联合国教科文组织世",
          tag: "陕西省渭南市韩城市",
          img: "static/images/villageStar/zhiyuan.jpg",
          id: "1"
        },
        {
          title: "“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          content: "来自双阳区城中小学来自双阳区城中小学、长春市红领巾宣讲团的26名小学生在吉林外国语大学26名大学生志愿者的陪同下，走进联合国教科文组织世走进联合国教科文组织世走进联合国教科文组织世",
          tag: "陕西省渭南市韩城市",
          img: "static/images/villageStar/zhiyuan.jpg",
          id: "1"
        },
        {
          title: "“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          content: "来自双阳区城中小学来自双阳区城中小学、长春市红领巾宣讲团的26名小学生在吉林外国语大学26名大学生志愿者的陪同下，走进联合国教科文组织世走进联合国教科文组织世走进联合国教科文组织世",
          tag: "陕西省渭南市韩城市",
          img: "static/images/villageStar/zhiyuan.jpg",
          id: "1"
        },
        {
          title: "“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          content: "来自双阳区城中小学来自双阳区城中小学、长春市红领巾宣讲团的26名小学生在吉林外国语大学26名大学生志愿者的陪同下，走进联合国教科文组织世走进联合国教科文组织世走进联合国教科文组织世",
          tag: "陕西省渭南市韩城市",
          img: "static/images/villageStar/zhiyuan.jpg",
          id: "1"
        },
        {
          title: "“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          content: "来自双阳区城中小学来自双阳区城中小学、长春市红领巾宣讲团的26名小学生在吉林外国语大学26名大学生志愿者的陪同下，走进联合国教科文组织世走进联合国教科文组织世走进联合国教科文组织世",
          tag: "陕西省渭南市韩城市",
          img: "static/images/villageStar/zhiyuan.jpg",
          id: "1"
        },

      ],
      pageNum: 1,//当前页码
      pageSize: 6,
      total: 16,// 超过16时显示页码
      recommend: [
        {
          name: "民族舞《春天中国》 培训班培训班培训班培训班",
          id: "1"
        },
        {
          name: "民族舞《春天中国》 培训班培",
          id: "2"
        },
        {
          name: "民族舞《春天中国》 培训班培训班培训班培训班",
          id: "3"
        },
        {
          name: "民族舞《春天中国》 培训班培训班",
          id: "4"
        }
      ],
      typeList: [
        {
          name: "全部",
          value: "all"
        },
        {
          name: "中央国务院政策文件",
          value: "a"
        },
        {
          name: "文化和旅游部政策文件",
          value: "b"
        },
        {
          name: "地方政策文件",
          value: "c"
        },
      ],
      selectType: "all",
      queryId: ""
    }

  },
  mounted() {
    this.initData();
    this.getListPolicy();
    this.getHotNews();
    this.getGoodNews();
  },
  methods: {
    changeFilter(index) {
      this.selectedIndex = index;
    },
    initData() {
      if (this.$route.query.id) {
        this.selectedIndex = this.$route.query.id;
      } else {
        this.selectedIndex = '0';
      }
      this.queryId = this.$route.query.id;
      console.log(this.selectedIndex)
    },
    changeType(item) {
      this.selectType = item.value;
      //this.newslist = [];
    },
    changePage() {

    },
    toRecommend() {

    },
    getListPolicy(){
      this.http.get('/vPolicy/getListPolicy').then(res=>{
        this.typeList = [];
        var type3 ={
          name :'全部',
          value: ''
        };
        this.typeList.push(type3);
        res.data.data.forEach(item => {
          var type ={};
          type.name = item;
          type.value = item
          this.typeList.push(type);
        })
      })
    },
    getHotNews(){
      var params ={
        'pageNum':this.pageNum,
        'pageSize':this.pageSize,
        'newsType':1
      }
      this.http.get('/news/getHotNews',params).then(res=>{
        this.newslist= [];
        this.total = res.data.data.total;
        res.data.data.forEach(item => {
          var news ={};
          news.id = item.newsId;
          news.title = item.newsTitle;
          news.content = item.newsContent;
          news.tag = "陕西省渭南市韩城市";
          news.img = item.newsCover;
          this.newslist.push(news);
        })
      })
    }
    , getGoodNews(){
      var params ={
        'pageNum':this.pageNum,
        'pageSize':this.pageSize,
        'newsType':1
      }
      this.http.get('/news/getGoodNews',params).then(res=>{
        this.recommend= [];
        this.total = res.data.data.total;
        console.log(res.data.data)
        res.data.data.forEach(item => {
          var news ={};
          news.id = item.newsId;
          news.name = item.newsTitle;
          // news.content = item.newsContent;
          // news.tag = "陕西省渭南市韩城市";
          // news.img = item.newsCover;
          this.recommend.push(news);
        })
      })
    }
  },
  watch: {
    queryId(value) {
      // debugger
    },
    // 利用watch方法检测路由变化：
    '$route': function (to, from) {
      // 拿到目标参数 to.query.id 去再次请求数据接口
      // this.loadPageData(to.query.id)
      this.initData();
    }
  }
}
