import {ajax_get, ajax_post} from '../../../utils/axios.util';
import constant from '../../../utils/constant'

export default {
  data() {
    return {
      list:[],
      pageNum:1,
      pageSize:10,
      total: '',
      newslist:[],
    }

  },
  mounted(){
      this.getlist();
  },
  methods:{
    getlist: function () {
      ajax_get(constant.api_base_url + '/vTraining/getMyJoinTrainingList',
        {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        }, data => {
          if (data.code === "200") {
            this.list = data.data.list;
            this.pageSize = data.data.pageSize;
            this.total = data.data.total;
          }else {
            alert(data.message)
          }
        }
      )
    },
    changePage(val){
      this.pageNum=val;
      this.getlist();
    },
    quit(item){
    },
    toDetail(item){
      this.$router.push({
        name:"cultivateDetail",
        query:{'itemId':item.id}
      })
    }

  },
  filters:{
    exchangeStatus(item){
      switch(item){
        case 0:
          return "待审核";
        case 1:
          return "审核通过";
        case 2:
          return "直接加入";
        case 3:
          return "未通过";
        case 4:
          return "放弃加入"
      }
    },
  }
}
