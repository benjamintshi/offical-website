
export default {
  data() {
    return {
      menuList: [
        {
          name: "联系我们",
          id:"1",
        },
        {
          name: "关于我们",
          to:"2",
        }
      ],
      activeMenu:"1",
      contactUs:{
        contactUser:"XXXXXX",
        tel:"010 - 1122334",
        email:"xxxxxxxx@xx.com"
      },
      aboutUs:"关于我们关于我们关于我们关于我们"
    }

  },
  mounted(){

  },
  methods:{

    swtichMenu(item){
      if(this.activeMenu == item.id) return;
      this.activeMenu = item.id
    }
  }
}
