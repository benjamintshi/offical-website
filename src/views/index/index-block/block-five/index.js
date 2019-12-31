import format from '@/utils/format.js'
export default {

  data() {
    return {
      // 从上往下，模块一
      newsList2:[],
      newsList1:[  //资讯
        {
          title:"河南省22文化和旅游志愿者走进新疆河南省文化和旅游志愿者走进新疆",
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
        },
        {
          title:"河南省文化和旅游志愿者走进新疆",
          time:"2019.08.22",
          to:"/"
        }
      ]
    }

  },
  mounted(){
    this.getPageVTraining();
    this.getPageContentStatistic();
  },
  methods:{

    // 线下培训
    toMore(){

      localStorage.setItem("activeMenu","studyCenter");
      this.$router.push('cultivateList');
    },
    // 线下培训
    toDetail(item){
      localStorage.setItem("activeMenu","studyCenter");
      this.$router.push({
        name:"cultivateDetail",
        query:{'itemId':item.id}
      })

    },
    // 理论文献
    toMoreL(){

      localStorage.setItem("activeMenu","studyCenter");
      this.$router.push('literatureLst');
    },
    // 理论文献
    toDetailL(item){
      localStorage.setItem("activeMenu","studyCenter");
      this.$router.push({
        name:"literatureDetail",
        query:{'itemId':item.id}
      })

    },
    getPageVTraining(){
      var params = {
        pageNum:'1',
        pageSize:6
      }
      this.http.get('/vTraining/getPageVTraining',params).then(res=>{
        this.total = res.data.data.total;
        this.newsList1 = [];
        // console.log(res.data.data)
        res.data.data.list.forEach(item => {
          var news ={};
          news.id = item.id;
          news.title = item.trainingName;
          news.time = format(item.createDatetime,'YYYY.MM.DD');;
          this.newsList1.push(news);
        })
      })
    },
    getPageContentStatistic(){
      var params = {
        pageNum:'1',
        pageSize:6
      }
      this.http.get('/contentStatistic/getPageContentStatistic',params).then(res=>{
        // this.total = res.data.data.total;
        this.newsList2 = [];
        console.log(res.data.data)
        // res.data.data.list.forEach(item => {
        //   var news ={};
        //   news.id = item.id;
        //   news.title = item.trainingName;
        //   news.time = format(item.createDatetime,'YYYY.MM.DD');;
        //   this.newsList2.push(news);
        // })
      })
    },
  }
}
