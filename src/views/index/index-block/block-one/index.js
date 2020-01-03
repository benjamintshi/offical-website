import format from '@/utils/format.js'

export default {
  data() {
    return {
      pCode :'0',
      // 从上往下，模块一

        left:{
          img:"static/images/villageStar/zhiyuan.jpg",
          title:"山西省文化和旅游志愿者走进新疆",
          to:""
        },
        right:{
          newsList2:[],
          showLeft :true,
          newsList:[  //资讯
            {
              title:"河南省文化和旅游志愿者走进新疆河南省文化和旅游志愿者走进新疆",
              time:"2019.08.22",
              to:"/"
            },
            {
              title:"河南省文化和旅游志愿者走进新疆",
              time:"2019.08.22",
              to:"/"
            },
            {
              title:"河南省文化和旅游志愿者走进新疆",
              time:"2019.08.22",
              to:"/"
            },
            {
              title:"河南省文化和旅游志愿者走进新疆",
              time:"2019.08.22",
              to:"/"
            },
            {
              title:"河南省文化和旅游志愿者走进新疆",
              time:"2019.08.22",
              to:"/"
            }
          ]
        }

    }

  },
  mounted(){
    let activeArea = localStorage.getItem("activeArea");
    if(activeArea){
      this.pCode = activeArea;
    }
    this.right.showLeft = true;
    this.getNews();
  },
  methods:{
    // 首页切换志愿快讯和政策文件，name为菜单名字
    swtichOne(name){

    },
    selectMenu1(index){
      if(index == 1){
        this.right.showLeft = true;
      }else if(index == 2){
        this.right.showLeft = false;
      }
    },
    getNews(){
      this.http.get('/news/getNews/'+this.pCode).then(res=>{
        this.total = res.data.data.total;
        this.right.newsList = [];
        res.data.data.forEach(item => {
          var news ={};
          news.id = item.newsId;
          news.title = item.newsTitle;
          news.newsType = item.newsType;
          news.time = format(item.publishDate,'YYYY.MM.DD');;
          if(this.right.newsList.length < 5){
            this.right.newsList.push(news);
          }
        })
        this. getPageVPolicy();
      })
    }
    ,
    getPageVPolicy(){
      var params = {
        pageNum:'1',
        pageSize:5
      }
      this.http.get('/vPolicy/getPageVPolicy',params).then(res=>{
        this.total = res.data.data.total;
        this.right.newsList2 = [];
        res.data.data.list.forEach(item => {
          var news ={};
          news.id = item.id;
          news.title = item.policyName;
          news.time = format(item.policyDate,'YYYY.MM.DD');;
          this.right.newsList2.push(news);
        })
        // console.log(this.right.newsList2)
      })
    },
    toFileDetail(item){
      localStorage.setItem("activeMenu","volunteerNews");
      this.$router.push({
        name:"policyFileDetail",
        query:{'itemId':item.id}
      })
    },
    toNewsDetail(item){
      localStorage.setItem("activeMenu","volunteerNews");
      this.$router.push({
        name:"newsDetail",
        query:{'itemId':item.id,'newsType':item.newsType}
      })
    },
  }
}
