import {ajax_get, ajax_post} from '../../../utils/axios.util';
import constant from '../../../utils/constant'

export default {
  data(){
    return{
      pageSize:10,
      pageNum:1,
      total:0,// 超过16时显示页码
      newslist:[],
      userInfo:{},
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
      ajax_get(constant.api_base_url + '/vMessage/getMyMessages',
        {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        }, data => {
          if (data.code === "200") {
            this.newslist = data.data.list;
            this.pageSize = data.data.pageSize;
            this.total=data.data.total;
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
