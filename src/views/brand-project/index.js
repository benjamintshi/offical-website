export default {
  data() {
    return {
      projectList:[
        {
          name:"春雨工程",
          desc:"文化志愿者边疆行",
          url:"http://zhiyuanzhe.culturedc.cn:180/home_show#/home_show/chunyu_show/1"
        },
        {
          name:"阳光工程",
          desc:"中西部农村文化志愿服务行动计划",
          url:"http://zhiyuanzhe.culturedc.cn:180/home_show#/home_show/sunshine_show/1"
        },
        {
          name:"圆梦工程",
          desc:"农村未成年人文化志愿服务计划",
          url:"http://zhiyuanzhe.culturedc.cn:180/home_show#/home_show/dream_show/1"
        }
      ],
      select01:[
        {
          areaCode:"1",
          areaName:"河南"
        }
      ],
      area:"1",
      topList:[
        {
          img:"static/images/villageStar/top4.png"
        },
        {
          img:"static/images/villageStar/top4.png"
        }
      ]
    }
  },
  methods:{
    toLink(item){
      window.open(item.url);
    },
    toculDetail(item){

    }
  }
}
