import {ajax_get, ajax_post} from '../../../utils/axios.util';
import constant from '../../../utils/constant'

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
          }else {
            alert(data.message)
          }
        }
      )
    },
    loadMore: function () {
      this.n = this.n + 1;
      let temp = this.n;
      ajax_get(constant.api_base_url + '/vMessage/getMyMessages',
        {
          pageNum: 1,
          pageSize: this.pageSize * temp
        }, data => {
          this.newslist = data.data.list;
          this.totalNum = data.data.size;
          if (this.totalNum === data.data.total) {
            this.isMost = true
          }else {
            alert(data.message)
          }
        }
      )
    }
  }
}
