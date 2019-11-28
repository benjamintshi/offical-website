
export default {
  data (){
    return{
      menelist:[
        {
          name:"首页",
          to:"/"
        },
        {
          name:"新时代文明实践中心",
          to:""
        },
        {
          name:"志愿快讯",
          to:""
        },
        {
          name:"活动招募",
          to:""
        },
        {
          name:"活动信息",
          to:""
        },
        {
          name:"品牌项目",
          to:"/villageStar"
        },
        {
          name:"学习园地",
          to:""
        }
      ],
      //当前页面
      activeMenu:"首页",
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
      showArea:false

    }
  },
  methods:{
    swtichArea (item) {
      this.activeArea = item.value;
      this.activeAreaName = item.name;
      this.showArea = false;
    },
    swtichMenu(item){

      this.$router.push(item.to);
      this.activeMenu = item.name;
    }
  }

}
