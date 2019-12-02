import Header from "@/components/The-header/index.vue";
import Footer from "@/components/The-footer/index.vue";
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
          title:"黑龙江省文旅厅开展文明旅游宣传活动",
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
          title:"黑龙江省文旅厅开展文明旅游宣传活动",
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

  },
  methods:{
    // 首页切换志愿快讯和政策文件，name为菜单名字
    swtichOne(name){

    }
  }
}
