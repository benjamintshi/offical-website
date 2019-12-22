import Header from "@/components/The-header/index.vue";
import Footer from "@/components/The-footer/index.vue";
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
          title:"河南省文化和旅游志愿者走进新疆河南省文化和旅游志愿者走进新疆",
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
          id:"2"
        }
      ],
      selected:"1"

    }

  },
  mounted(){
    let activeArea = localStorage.getItem("activeArea");
    if(activeArea){
      this.pCode = activeArea;
    }
    this.getIndexStatistics();
  },
  methods:{
    // 首页切换志愿快讯和政策文件，name为菜单名字
    swtichOne(name){
      debugger
      this.selected = name;
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

    },
  }
}
