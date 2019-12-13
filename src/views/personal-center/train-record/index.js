export default {
  data() {
    return {
        list:[
          {
            time:"2019-09-01 10：10",
            timeRange:20,
            project:"xxx志愿服务项目",
            teamName:"xxx志愿服务总队",
            status:1,
            id:1

          },
          {
            time:"2019-09-01 10：10",
            timeRange:20,
            project:"xxx志愿服务项目",
            teamName:"xxx志愿服务总队",
            status:2,
            id:1

          },
          {
            time:"2019-09-01 10：10",
            timeRange:20,
            project:"xxx志愿服务项目",
            teamName:"xxx志愿服务总队",
            status:3,
            id:1

          }
        ]
    }

  },
  mounted(){

  },
  methods:{
    quit(item){

    },
    toDetail(item){
      // this.$router.push({
      //   name:"activityDetail",
      //   query:{'itemId':item.id}
      // })
      this.$router.push({
        name:"cultivateDetail",
        query:{'itemId':item.id}
      })
    }

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
