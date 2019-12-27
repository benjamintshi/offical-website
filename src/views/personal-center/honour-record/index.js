import {ajax_get, ajax_post} from '../../../utils/axios.util';
import constant from '../../../utils/constant'

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
        ajax_get(constant.api_base_url + '/vHonor/getMyVHonor',
          {
            pageNum: 1,
            pageSize: this.pageSize
          }, data => {
            if (data.code === "200") {
              this.list = data.data.list;
              this.pageSize = data.data.pageSize;
            }else {
              alert(data.message)
            }
          }
        )
    },
    loadMore: function () {
      this.n=this.n+1;
      let temp=this.n;
      ajax_get(constant.api_base_url + '/vHonor/getMyVHonor',
        {
          pageNum: 1,
          pageSize: this.pageSize*temp
        }, data => {
          if (data.code === "200") {
            this.list = data.data.list;
            this.totalNum = data.data.size;
            if(this.totalNum===data.data.total){
              this.isMost=true
            }
          }else {
            alert(data.message)
          }
        }
      )
    },
    queryDetails: function (src) {
       window.open(src)
    }

  }
}
