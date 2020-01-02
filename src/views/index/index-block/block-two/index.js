import Header from "@/components/The-header/index.vue";
import Footer from "@/components/The-footer/index.vue";
import format from '@/utils/format.js'
export default {
  components: { Header,Footer },
  data() {
    return {
      pCode :'0',
      volunteerCnt :'0',
      activityCnt :'0',
      teamCnt :'0',
      // 从上往下，模块一

        left:{
          img:"static/images/villageStar/zhiyuan.jpg",
          title:"山西省文化和旅游志愿者走进新疆",
          to:""
        },
      newsList12:[],
      newsList13:[],
      newsList14:[],
      newsList1:[  //资讯
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
        },
        {
          title:"河南省文化和旅游志愿者走进新疆",
          time:"2019.08.22",
          to:"/"
        }
      ],
      newsList2:[  //资讯
        {
          title:"河南33省文化和旅游志愿者走进新疆河南省文化和旅游志愿者走进新疆",
          status:"1",
          to:"/"
        },
        {
          title:"河南省文化和旅游志愿者走进新疆",
          status:"1",
          to:"/"
        },
        {
          title:"河南省文化和旅游志愿者走进新疆",
          status:"3",
          to:"/"
        },
        {
          title:"河南省文化和旅游志愿者走进新疆",
          status:"3",
          to:"/"
        },
        {
          title:"河南省文化和旅游志愿者走进新疆",
          status:"2",
          to:"/"
        },
        {
          title:"河南省文化和旅游志愿者走进新疆",
          status:"2",
          to:"/"
        },
        {
          title:"河南省文化和旅游志愿者走进新疆",
          status:"1",
          to:"/"
        }
      ],
      subMenu:[
        {
          name:"春雨工程",
          id:"1"
        },
        {
          name:"阳光工程",
          id:"2"
        },
        {
          name:"圆梦工程",
          id:"3"
        }
      ],
      selected:"1",
      selected2:"1"

    }

  },
  mounted(){
    let activeArea = localStorage.getItem("activeArea");
    if(activeArea){
      this.pCode = activeArea;
    }
    this.getIndexStatistics();
    this.getChunYuProjects();
    this.getPageVActivity();
  },
  methods:{
    // 首页切换志愿快讯和政策文件，name为菜单名字
    swtichOne(name){
      this.selected = name;
    },
    toSelect(id){
      this.selected2 = id;
    },
    getIndexStatistics(){
      this.http.get('/contentStatistic/getIndexStatistics/'+this.pCode).then(res=>{
        // console.log(res.data);
        var item = res.data.data;
        this.volunteerCnt = item.volunteerCnt;
        this.activityCnt = item.activityCnt;
        this.teamCnt = item.teamCnt;

      })
    },
    toMore(){
      localStorage.setItem("activeMenu","brandProject");
      this.$router.push('brandProject');
    },
    toMoret(){
      localStorage.setItem("activeMenu","activityRecruit");
      this.$router.push('activityRecruit');
    },
    toDetail(item){
      localStorage.setItem("activeMenu","activityRecruit");
      this.$router.push({
        name:"volunteerRecruitDetail",
        query:{'itemId':item.id}
      })

    }  ,
    getChunYuProjects(){
      var params = {
        pageNum:'1',
        pageSize:6
      }
      this.http.get('/vProject/getChunYuProjects',params).then(res=>{
        this.total = res.data.data.total;
        this.newsList1 = [];
        // console.log(res.data.data)
        res.data.data.list.forEach(item => {
          var news ={};
          news.id = item.projectId;
          news.title = item.projectName;
          news.time = format(item.createDate,'YYYY.MM.DD');;
          this.newsList1.push(news);
        })
        this.getPageSunshineVolunteerShows();
        this.getPageDreamVolunteerShows();
        this.getAreaBrands();
        // console.log(this.right.newsList2)
      })
    },
    getPageSunshineVolunteerShows(){
      var params = {
        pageNum:'1',
        pageSize:6
      }
      this.http.get('/vProjectAchieve/getPageSunshineVolunteerShows',params).then(res=>{
        this.total = res.data.data.total;
        this.newsList12 = [];
        res.data.data.list.forEach(item => {
          var news ={};
          news.id = item.projectId;
          news.title = item.projectName;
          news.time = format(item.createDate,'YYYY.MM.DD');;
          this.newsList12.push(news);
        })
      })
    },
    getPageDreamVolunteerShows(){
      var params = {
        pageNum:'1',
        pageSize:6
      }
      this.http.get('/vProjectAchieve/getPageDreamVolunteerShows',params).then(res=>{
        this.total = res.data.data.total;
        this.newsList13 = [];
        // console.log(res.data.data)
        res.data.data.list.forEach(item => {
          var news ={};
          news.id = item.projectId;
          news.title = item.projectName;
          news.time = format(item.createDate,'YYYY.MM.DD');;
          this.newsList13.push(news);
        })
      })
    },
    getAreaBrands(){
      var params = {
        pageNum:'1',
        pageSize:6
      }
      this.http.get('/vBrand/getAreaBrands',params).then(res=>{
        this.total = res.data.data.total;
        this.newsList14 = [];
        // console.log(res.data.data)
        res.data.data.list.forEach(item => {
          var news ={};
          news.id = item.brandId;
          news.title = item.brandTitle;
          news.time = format(item.createDate,'YYYY.MM.DD');;
          this.newsList14.push(news);
        })
      })
    },
    getPageVActivity(){
      var params = {
        pageNum:'1',
        recruitType:'1',
        pageSize:7
      }
      var nowDate = new Date();    //结束时间
      this.http.get('/vActivity/getPageVActivity',params).then(res=>{
        this.total = res.data.data.total;
        this.newsList2 = [];
        // console.log(res.data.data)
        res.data.data.list.forEach(item => {
          var news ={};
          news.id = item.id;
          news.title = item.activityName;
          news.time = format(item.createDatetime,'YYYY.MM.DD');
          if(item.activityEndDate){
            var date3 =  new Date(item.activityEndDate).getTime() - nowDate;   //时间差的毫秒数
            news.endTime = Math.floor(date3/(24*3600*1000))
          }else{
            news.endTime = 0;
          }
          news.status = '3'; // 已结束
          if(news.endTime > 0){
            // 标记：
            if(item.recruitType == '0' || nowDate.getTime() > new Date(item.recruitEndDate).getTime()){
              news.status = '';  // 招募标识不表示，的前提
            }else if(item.recruitType == '1'){ // 待招募标识
              if(nowDate.getTime() < new Date(item.recruitStartDate).getTime()){ // 招募中
                news.status = '1';
              }else if(nowDate.getTime()  <= new Date(item.recruitEndDate).getTime()){
                news.status = '2';
              }
            }
          }
          this.newsList2.push(news);
        })
      })
  },
    toBrandDetail(item){
        
    }

  }
}
