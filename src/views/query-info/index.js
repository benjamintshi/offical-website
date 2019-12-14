export default {
  data(){
   return{
     volunteerResult:"", //志愿者信息查询结果
     certificateResult:"static/images/common/zs.jpg",
     activeMenu:1,
     name:"",
     number:""
   }
  },
  methods:{

    swtichMenu(index){
      this.activeMenu = index;
      this.certificateResult = "";
      this.volunteerResult = "";

    },
    query(){
      
    }
  }
}
