
export default {

  data() {
    return {
      // 从上往下，模块一
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
      ]
    }

  },
  mounted(){

  },
  methods:{

    // 线下培训
    toMore(){

      localStorage.setItem("activeMenu","studyCenter");
      this.$router.push('cultivateList');
    },
    // 线下培训
    toDetail(item){
      localStorage.setItem("activeMenu","studyCenter");
      this.$router.push({
        name:"cultivateDetail",
        query:{'itemId':item.id}
      })

    },
    // 理论文献
    toMoreL(){

      localStorage.setItem("activeMenu","studyCenter");
      this.$router.push('literatureLst');
    },
    // 理论文献
    toDetailL(item){
      localStorage.setItem("activeMenu","studyCenter");
      this.$router.push({
        name:"literatureDetail",
        query:{'itemId':item.id}
      })

    },
  }
}
