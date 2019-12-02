
export default {
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
          to:"",
          value:""
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
          to:""
        },
        {
          name:"活动信息",
          to:""
        },
        {
          name:"品牌项目",
          to:"brandProject",
          value:"brandProject"
        },
        {
          name:"学习园地",
          to:""
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
      hoverMenu:""

    }
  },
  mounted(){
    let activeMenu = localStorage.getItem("activeMenu");
    if(activeMenu){
      this.activeMenu = activeMenu;
    }
  },
  methods:{
    swtichArea (item) {
      this.activeArea = item.value;
      this.activeAreaName = item.name;
      this.showArea = false;
    },
    swtichMenu(item){
      if(this.activeMenu ==item.to || !item.to) return false;
      this.activeMenu = item.value;
      this.$router.push(item.to);
      localStorage.setItem("activeMenu",this.activeMenu);

    },
    subMenu(menuItem,subMenuItem){
      this.$router.push({
        name:subMenuItem.to ? subMenu.to : menuItem.to,
        query:subMenuItem.id? {'id':subMenuItem.id}:"",
      });
      this.activeMenu = menuItem.value;
      localStorage.setItem("activeMenu",this.activeMenu);
    }
  },


}
