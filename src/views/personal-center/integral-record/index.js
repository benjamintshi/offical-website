export default {
  data() {
    return {
        list:[
          {
            time:"2019.09.01 10:00",

            desc:"xxx志愿服务项目",
            type:"接受培训",
            integral:10
          },
          {
            time:"2019.09.01 10:00",
            desc:"xxx志愿服务项目",
            type:"消费",
            integral:20

          },
          {
            time:"2019.09.01 10:00",
            desc:"xxx志愿服务项目",
            type:"志愿服务",
            integral:-20
          }
        ]
    }

  },
  mounted(){

  },
  methods:{


  },
  filters:{
    exchangeStatus(item){
      debugger
      switch(item){
        case 1:
          return "申请中";
          break;
        case 2:
          return "已加入";
          break;
        case 3:
          return "已驳回";
          break;
      }
    },
    operate(item){
      switch(item){
        case 1:
          return {
            calssName:"",
            operateName:"放弃申请"
          };
          break;
        case 2:
          return {
            calssName:"",
            operateName:"申请退出"
          };
          break;
        case 3:
          return {
            calssName:"",
            operateName:"查看原因"
          };
          break;
      }
    }
  }
}
