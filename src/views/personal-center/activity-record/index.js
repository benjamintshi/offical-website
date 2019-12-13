export default {
  data() {
    return {
        list:[
          {
            time:"2019.09.01 - 2019.09.10",
            project:"xxx志愿服务项目",
            teamName:"xxx志愿服务总队",
            status:1
          },
          {
            time:"2019.09.01 - 2019.09.10",
            project:"xxx志愿服务项目",
            teamName:"xxx志愿服务总队",
            status:2
          },
          {
            time:"2019.09.01 - 2019.09.10",
            project:"xxx志愿服务项目",
            teamName:"xxx志愿服务总队",
            status:3
          }
        ],
      isVolunteer:false // 是否是志愿者
    }

  },
  mounted(){

  },
  methods:{
    toDetail(item){
      this.$router.push({
        name:"activityDetail",
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
