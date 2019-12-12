
export default {
  data() {
    return {
      menuList: [
        {
          name: "个人基础信息",
          to:"personalInfo",
        },
        {
          name: "个人志愿服务介绍",
          to:"serviceDesc",
        },
        {
          name: "参加过的团队",
          to:"",
        },
        {
          name: "志愿服务记录",
          to:"",
        },
        {
          name: "参与活动记录",
          to:"",
        },
        {
          name: "接受培训记录",
          to:"",
        },
        {
          name: "积分累计记录",
          to:"",
        },
        {
          name: "表彰记录",
          to:"",
        },
        {
          name: "评价投诉记录",
          to:"",
        },
        {
          name: "志愿服务证书",
          to:"",
        }
      ],
      activeMenu:"personalInfo"
    }

  },
  mounted(){
    this.activeMenu = this.$route.name;
  },
  methods:{

    swtichMenu(item){
      if( this.activeMenu == this.$route.name) return;
      this.activeMenu = item.to;
      this.$router.push(item.to)
    }
  }
}
