import {ajax_get, ajax_post} from '../../../utils/axios.util';
import constant from '../../../utils/constant'

export default {
  data() {
    return {
      pageNum:1,
      pageSize:1,
      totalNum: '',
      n:1,
      newslist:[],
      isMost: false
    }
  }
  ,
  mounted(){
    this.getlist();

  },
  methods: {
    getlist: function () {
      ajax_get(constant.api_base_url + '/vMessage/getPageVMessage',
        {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        }, data => {
          if (data.code === "200") {
            this.newslist = response.data.data.list;
            this.pageSize = response.data.data.pageSize;
          }else {
            alert(data.message)
          }
        }
      )
    },
    loadMore: function () {
      this.n = this.n + 1;
      let temp = this.n
      ajax_get(constant.api_base_url + '/vMessage/getPageVMessage',
        {
          pageNum: 1,
          pageSize: this.pageSize * temp
        }, data => {
          if (data.code === "200") {
            this.newslist = response.data.data.list;
            this.totalNum = response.data.data.size;
            if (this.totalNum === response.data.data.total) {
              this.isMost = true
            }
          }else {
            alert(data.message)
          }
        }
      )
    }
  }
}
