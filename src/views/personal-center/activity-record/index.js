import {ajax_get, ajax_post} from '../../../utils/axios.util';
import constant from '../../../utils/constant'

export default {
  data() {
    return {
      pageNum:1,
      pageSize:10,
      total: '',
      newslist:[],
      list:[],
      isVolunteer:true // 是否是志愿者
    }

  },
  mounted(){
      this.getlist();
  },
  methods:{
    getlist: function () {
      ajax_get(constant.api_base_url + '/vActivity/getMyParticipateActivities',
        {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
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
    toDetail(item){
      this.$router.push({
        name:"activityDetail",
        query:{'itemId':item.id}
      })

    },
    changePage(val){
      this.pageNum=val;
      this.getlist();
    },
  },
filters:{
    exchangeStatus(item){
      switch(item){
        case 0:
          return "申请中";
        case 1:
          return "已加入";
        case 2:
          return "已驳回";
      }
    },
  }
}
