import axios from "axios";

export default {
  data() {
    return {
      pageNum:1,
      pageSize:1,
      totalNum: '',
      n:1,
      newslist:[],
      isMost: false,
      list:[],
      isVolunteer:true // 是否是志愿者
    }

  },
  mounted(){
      this.getlist();
  },
  methods:{
    getlist: function () {
      axios.get('http://zyz.liyue.com/socket/api/vActivity/getMyParticipateActivities', {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        }
      })
        .then(response => {
          this.list = response.data.data.list;
          this.pageSize = response.data.data.pageSize;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    toDetail(item){
      this.$router.push({
        name:"activityDetail",
        query:{'itemId':item.id}
      })

    },
    loadMore: function () {
      this.n = this.n + 1;
      var temp = this.n
      axios.get('http://zyz.liyue.com/socket/api/vActivity/getMyParticipateActivities', {
        params: {
          pageNum: 1,
          pageSize: this.pageSize * temp
        }
      })
        .then(response => {
          this.list = response.data.data.list;
          this.totalNum = response.data.data.size;
          if (this.totalNum == response.data.data.total) {
            this.isMost = true
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }


  },
  /*filters:{
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
  }*/
}
