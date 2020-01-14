import {ajax_get, ajax_post} from '../../../utils/axios.util';
import constant from '../../../utils/constant'

export default {
  data() {
    return {
        list:[],
        pageSize: 10,
        pageNum:1,
        total: '',
        volunteerAuditStatus:'',
        joinTime:'',
    }

  },
  mounted(){
    this.getlist();
  },
  methods:{
    getlist: function () {
      ajax_get(constant.api_base_url + '/vTeam/getMyTeams',
        {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }, data => {
          if (data.code === "200") {
            this.list = data.data.list;
            this.pageSize = data.data.pageSize;
            this.total=data.data.total;
          }else {
            alert(data.message)
          }
        }
      )
    },
    leaveTeam: function (item) {
      let msg="确定要退出该团队吗？";
      if (confirm(msg)===true){
        ajax_post(constant.api_base_url + '/vTeam/applyQuitTeam/'+item.teamId,
          null, data => {
            if (data.code === "200") {
              item.volunteerAuditStatus=4;
            }else {
              alert(data.message)
            }
          }
        )
      }
    },
    changePage(val){
      this.pageNum=val;
      this.getlist();
    },
  },
  filters: {
    teamStatus(item) {
      switch (item) {
        case 0:
          return "申请中";
        case 1:
          return "已加入";
        case 2:
          return "已驳回";
        case 4:
          return "已退出";
      }
    }
  }
}
