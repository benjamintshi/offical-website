import util from '../../utils/http.js';
import axios from "axios";

export default {
  inject:['reload'],
  data (){
    return{
      menelist:[
        {
          name:"首页",
          to:"/",
          value:"index"
        },
        {
          name:"新时代文明实践中心",
          to:"practiceCenter",
          value:"practiceCenter"
        },
        {
          name:"志愿快讯",
          to:"volunteerNews",
          value:"volunteerNews",
          children:[
            {
              name:"活动快讯",
              id:0
            },
            {
              name:"政策文件",
              id:1
            },
            {
              name:"培训快讯",
              id:2
            }
          ]
        },
        {
          name:"活动招募",
          to:"activityRecruit",
          value:"activityRecruit",
          children:[
            {
              name:"活动招募",
              id:0
            },
            {
              name:"志愿团队",
              id:1,
              to:"volunteerTeam"
            }
          ]
        },
        {
          name:"活动信息",
          to:"activityInfo",
          value:"activityInfo"
        },
        {
          name:"品牌项目",
          to:"brandProject",
          value:"brandProject"
        },
        {
          name:"学习园地",
          to:"studyCenter",
          value:"studyCenter"
        }
      ],
      //当前页面
      activeMenu:"index",
      areaList:[
        {
          name:"全部",
          value:"all"
        },
        {
          name:"北京",
          value:"1"
        },
        {
          name:"天津",
          value:"2"
        },{
          name:"河北",
          value:"3"
        },
        {
          name:"山西",
          value:"4"
        },
        {
          name:"全部",
          value:"5"
        },
        {
          name:"北京",
          value:"6"
        },
        {
          name:"天津",
          value:"7"
        },{
          name:"河北",
          value:"8"
        },
        {
          name:"山西",
          value:"9"
        }
      ],
      activeArea:"all",
      activeAreaName:"站点切换",
      showArea:false,
      hoverMenu:"",
      isLogin:false,
      userInfo:{
      },
    }

  },
  mounted(){
    // this.getUserInfo();
    let myName=JSON.parse(sessionStorage.getItem("loginInfo"));
    let activeMenu = localStorage.getItem("activeMenu");
    if(activeMenu){
      this.activeMenu = activeMenu;
    }else{
      this.activeMenu = ""
    }
    let activeAreaName = localStorage.getItem("activeAreaName");
    if(activeAreaName){
      this.activeAreaName = activeAreaName;
      let activeArea = localStorage.getItem("activeArea");
      if(activeArea){
        this.activeArea = activeArea;
      }
    }
    this.getProvinces();
  },
  methods:{
    getUserInfo(){
      axios.get('http://zyz.liyue.com/socket/api/vUser/getSessionUserInfo', {
      })
        .then(response => {
          if(response.data.code==200){
            this.userInfo = response.data.data;
            this.isLogin=true,
            sessionStorage.setItem("userInfo",this.userInfo);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    swtichArea (item) {
      this.activeArea = item.value;
      this.activeAreaName = item.name;
      this.showArea = false;
      localStorage.setItem('activeAreaName',this.activeAreaName)
      localStorage.setItem('activeArea',this.activeArea)
      this.reload();
    },
    swtichMenu(item){
      if(this.$route.name==item.to || !item.to) return false;
      this.activeMenu = item.value;
      this.$router.push(item.to);
      localStorage.setItem("activeMenu",this.activeMenu);

    },
    subMenu(menuItem,subMenuItem){
      this.$router.push({
        name:subMenuItem.to ? subMenuItem.to : menuItem.to,
        query:subMenuItem.id? {'id':subMenuItem.id}:"",
      });
      this.activeMenu = menuItem.value;
      localStorage.setItem("activeMenu",this.activeMenu);
    },
    swtichTopMenu(){
      this.activeMenu = "";
    },
    getProvinces(){
      this.http.get('/vArea/getProvinces/1').then(res=>{
        this.areaList = [];
        // console.log(res.data.data)
        res.data.data.forEach(item => {
          var area = {};
          area.value = item.areaCode;
          area.name = item.areaName;
          this.areaList.push(area);
        })
      })
    },
  }
}
