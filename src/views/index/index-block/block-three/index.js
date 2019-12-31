import Header from "@/components/The-header/index.vue";
import Footer from "@/components/The-footer/index.vue";
import format from '@/utils/format.js'
export default {
  components: { Header,Footer },
  data() {
    return {
      // 从上往下，模块一

        left:{
          img:"static/images/villageStar/zhiyuan.jpg",
          title:"山西省文化和旅游志愿者走进新疆",
          to:""
        },
      newsList1:[  //资讯
        {
          title:"河南省33文化和旅游志愿者走进新疆河南省文化和旅游志愿者走进新疆",
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
          title:"河南省文33化和旅游志愿者走进新疆河南省文化和旅游志愿者走进新疆",
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
        },
        {
          title:"河南省文化和旅游志愿者走进新疆",
          time:"2019.08.22",
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
      selected:"1",
      recruitList:[//招募活动
        {
          img:"static/images/villageStar/zhiyuan.jpg",
          title:"黑龙2江省文旅厅开展文明旅游宣传活动",
          address:"陕西省渭南市韩城市",
          status:"1",
          time:"2018.12.01 -2019.09.01  "
        },
        {
          img:"static/images/villageStar/zhiyuan.jpg",
          title:"黑龙江省文旅厅开展文明旅游宣传活动",
          address:"陕西省渭南市韩城市",
          status:"2",
          time:"2018.12.01 -2019.09.01  "
        }
      ],
      serviceList:[
        {
          img:"static/images/villageStar/zhiyuan.jpg",
          title:"黑龙江省22文旅厅开展文明旅游宣传活动",
          style:"北京市西城区",
          number:"10"
        },
        {
          img:"static/images/villageStar/zhiyuan.jpg",
          title:"黑龙江省文旅厅开展文明旅游宣传活动",
          style:"北京市西城区",
          number:"10"
        }
      ]



    }

  },
  mounted(){
    this.getPageVActivity();
    this.getTeamList();
  },
  methods:{
    // 首页切换志愿快讯和政策文件，name为菜单名字
    swtichOne(name){

    },
    // 活动信息
    toMore(){

      localStorage.setItem("activeMenu","activityInfo");
      this.$router.push('activityInfo');
    },
    // 活动信息
    toDetail(item){
      localStorage.setItem("activeMenu","activityInfo");
      this.$router.push({
        name:"activityDetail",
        query:{'itemId':item.id}
      })

    },
    // 志愿团队
    toMoreTeam(){

      localStorage.setItem("activeMenu","activityInfo");
      this.$router.push('volunteerTeam');
    },
    // 志愿团队
    toDetailTeam(item){
      debugger
      localStorage.setItem("activeMenu","activityInfo");
      this.$router.push({
        name:"volunteerTeamDetail",
        query:{'itemId':item.id}
      })

    },
    getPageVActivity(){
      // 分页条件查询活动
      var params = {
        pageNum:'1',
        pageSize:8
      }
      this.http.get('/vActivity/getPageVActivity',params).then(res=>{
        this.total = res.data.data.total;
        this.recruitList = [];
        this.newsList1 = [];
        // console.log(res.data.data)
        var index = 0;
        res.data.data.list.forEach(item => {
          index++;
          var news ={};
          news.id = item.projectId;
          news.title = item.activityName;
          if(index >2 ){
            news.time = format(item.recruitStartDate,'YYYY.MM.DD');
            this.newsList1.push(news);
          }else{
            news.img = item.activityCover;
            news.title = item.activityName;
            news.address = item.activityProvinceName+item.activityCityName+item.activityCountyName+item.activityAddr;
            news.address = news.address.replace('null','')
            if(item.recruitStartDate){
              news.time = format(item.recruitStartDate,'YYYY.MM.DD') + " -"+ format(item.recruitEndDate,'YYYY.MM.DD');
            }else{
              // news.time = "-";
            }
            if(!news.img){
              news.img ='http://zgwhzyz.bjbsh.com:180/show/img/loadingImage.jpg';
            }
            news.status = item.recruitStatus;
            this.recruitList.push(news);
          }
        })
      })
    },
    getTeamList(){
      // 分页条件查询活动
      var params = {
        pageNum:'1',
        pageSize:10
      }
      this.http.get('/vTeam/getTeamList',params).then(res=>{
        this.total = res.data.data.total;
        this.serviceList = [];
        this.newsList2 = [];
        // console.log(res.data.data)
        var index = 0;
        res.data.data.list.forEach(item => {
          index++;
          var news ={};
          news.id = item.teamId;
          news.title = item.teamName;
          if(index >2 ){
            news.time = format(item.foundingTime,'YYYY.MM.DD');
            this.newsList2.push(news);
          }else{
            news.img = item.teamLogo;
            news.address = item.address;
            news.num = item.teamNum
            // news.address = news.address.replace('null','')
            if(!news.img){
              news.img ='http://zgwhzyz.bjbsh.com:180/show/img/loadingImage.jpg';
            }
            this.serviceList.push(news);
          }
        })
      })
    },
  }
}
