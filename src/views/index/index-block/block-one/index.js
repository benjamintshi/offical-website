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
    this.getNews();
  },
  methods:{
    // 首页切换志愿快讯和政策文件，name为菜单名字
    swtichOne(name){

    },
    selectMenu1(index){

    },
    getNews(){
      this.http.get('/news/getNews/'+this.pCode).then(res=>{
        this.total = res.data.data.total;
        this.right.newsList = [];
        res.data.data.forEach(item => {
          var news ={};
          news.id = item.newsId;
          news.title = item.newsTitle;
          news.time = format(item.publishDate,'YYYY.MM.DD');;
          this.right.newsList.push(news);
        })
      })
    }
  }
}
