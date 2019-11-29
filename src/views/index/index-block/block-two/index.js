import Header from "@/components/The-header/index.vue";
import Footer from "@/components/The-footer/index.vue";
export default {
  components: { Header,Footer },
  data() {
    return {
      // 从上往下，模块一

        left:{
          img:"/static/images/villageStar/zhiyuan.jpg",
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

  },
  methods:{
    // 首页切换志愿快讯和政策文件，name为菜单名字
    swtichOne(name){

    }
  }
}
