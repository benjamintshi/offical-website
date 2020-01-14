import {ajax_get, ajax_post} from '../../../utils/axios.util';
import constant from '../../../utils/constant'
export default {
  data() {
    return {
        list:[],
        pageNum:1,
        pageSize: 10,
        total: '',
    };
  },

  mounted(){
    this.getlist();
  },
  methods:{
    getlist: function () {
      ajax_get(constant.api_base_url + '/vCoinLog/getMyVCoinLogs',
        {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }, data => {
          if (data.code === "200") {
            this.list = data.data.list;
            this.total=data.data.total;
            this.pageSize = data.data.pageSize;
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
  }
}
