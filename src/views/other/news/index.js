export default {
  data(){
    return{
      newslist:[
        {
          title:"您于2019年08月25日报名申请加入的 “xxx项目”，团队负责人已审核通过，请准时到达指定地点进行志愿服务活动。",
          contnet:"",
          time:'2019.09.01  13:21',
          status:1
        },
        {
          title:"管理员对您2019年8月20日反馈的事项做出了回复。",
          contnet:"可查看常见问题获得解决方案，或致电010 - 234567",
          author:"管理员",
          status:2,
          time:'2019.09.01  13:21',
          repeat:"可查看常见问题获得解决方案，或致电010 - 234567",
          repeatTime:"2019.08.20  18:01",
          repeatTtile:"平台注册功能怎么使用？",
          spread:false
        }
      ]
    }
  },
  methods:{
    spread(item){
      item.spread = true;
    }
  }
}
