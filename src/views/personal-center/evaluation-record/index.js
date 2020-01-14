import {ajax_get, ajax_post} from '../../../utils/axios.util';
import constant from '../../../utils/constant'

export default {
  data() {
    return {
      pageNum:1,
      pageSize:10,
      total: '',
      list:[],
      userInfo:{},
    }

  },
  mounted(){
    this. getUserInfo();
  },
  methods:{
    getUserInfo() {
      ajax_get(constant.api_base_url + '/vUser/getSessionUserInfo',
        null, data => {
          if (data.code === "200") {
            this.userInfo = data.data;
            this.getlist();
          }else {
            alert(data.message)
          }
        }
      )

    },
    getlist: function () {
      ajax_get(constant.api_base_url + '/vFeedback/getMyFeedbackList',
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
  }
}
