import axios from "axios";

export default {
  data(){
    return{
      pageNum:1,
      pageSize:1,
      totalNum: '',
      n:1,
      newslist:[],
      isMost: false,
      userInfo:{},

     /* newslist:[
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
      ]*/
    }
  },
  mounted(){
    this. getUserInfo();
  },
  methods:{

    spread(item){
      item.spread = true;
    },
    getUserInfo() {
      axios.get('http://zyz.liyue.com/socket/api/vUser/getSessionUserInfo', {
      })
        .then(response => {
          this.userInfo = response.data.data;
          this.getlist();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getlist: function () {
      axios.get('http://zyz.liyue.com/socket/api/vMessage/getMyMessages', {
        params: {

          pageNum: this.pageNum,
          pageSize: this.pageSize,
        }
      })
        .then(response => {
          this.newslist = response.data.data.list;
          this.pageSize = response.data.data.pageSize;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    loadMore: function () {
      this.n = this.n + 1;
      var temp = this.n
      axios.get('http://zyz.liyue.com/socket/api/vMessage/getMyMessages', {
        params: {
          pageNum: 1,
          pageSize: this.pageSize * temp
        }
      })
        .then(response => {
          this.newslist = response.data.data.list;
          this.totalNum = response.data.data.size;
          if (this.totalNum == response.data.data.total) {
            this.isMost = true
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
