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
          name:"春雨工程",
          desc:"文化志愿者边疆行",
          url:"http://zhiyuanzhe.culturedc.cn:180/home_show#/home_show/sunshine_show/1"
        },
        {
          name:"春雨工程",
          desc:"文化志愿者边疆行",
          url:"http://zhiyuanzhe.culturedc.cn:180/home_show#/home_show/dream_show/1"
        }
      ],
      select01:[
        {
          areaCode:"1",
          areaName:"河南"
        }
      ],
      area:"1"
    }
  },
  methods:{
    toLink(item){
      window.open(item.url);
    }
  }
}
