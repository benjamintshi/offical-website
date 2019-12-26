import axios from "axios";

export default {
  data() {
    return {
        list:[],
        pageSize: '1',
        totalNum: '',
        n:1,
        isMost: false
    }

  },
  mounted(){
    this.getlist();
  },
  methods:{
    getlist: function () {
      axios.get('http://zyz.liyue.com/socket/api/vTeam/getMyTeams', {
        params: {

          pageNum: 1,
          pageSize: this.pageSize
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
    loadMore: function () {
      this.n=this.n+1;
      var temp=this.n
      axios.get('http://zyz.liyue.com/socket/api/vTeam/getMyTeams', {
        params: {
          pageNum: 1,
          pageSize: this.pageSize*temp
        }
      })
        .then(response => {
          this.list = response.data.data.list;
          this.totalNum = response.data.data.size;
          if(this.totalNum==response.data.data.total){
            this.isMost=true
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    leaveTeam: function (item) {
      var msg="确定要退出该团队吗？";
      if (confirm(msg)==true){
        axios.post('http://zyz.liyue.com/socket/api/vTeam/applyQuitTeam/'+item.teamId, {
          params: {
          }
        })
          .then(response => {
            this.getlist();
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    },
  }
}
