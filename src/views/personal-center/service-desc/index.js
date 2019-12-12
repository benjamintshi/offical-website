
export default {
  data() {
    return {
      noDesc:false,  //是否有个人介绍
      modify:false,
      info:{
          name:"王菲菲",
          img:"static/images/common/tx.jpg",
          content:"王菲菲同志作为一名旅游志愿者，一直高标准要求自己，不断提高综合素质近年来，专注旅游志愿服务，组织各项活动，鼓励广大旅游志愿者参加志愿活动，为保定市旅游发展贡献一份力量。 组织各类活动，宣传保定旅游文化"
        },
        upload:{
          url:"//jsonplaceholder.typicode.com/posts/" //上传到服务器的地址，请替换
        }
    }

  },
  mounted(){

  },
  methods:{
    submit(){
      this.modify  = false;
    }
  }
}
