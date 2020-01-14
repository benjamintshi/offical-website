import {ajax_get, ajax_post} from '../../../utils/axios.util';
import constant from '../../../utils/constant'

export default {
  data() {
    return {
        list:[],
        pageNum:1,
        pageSize: 10,
        total: 1,
    }

  },
  mounted(){
    this.getlist();
  },
  methods:{
    getlist: function () {
        ajax_get(constant.api_base_url + '/vHonor/getMyVHonor',
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
    changePage(val){
      this.pageNum=val;
      this.getlist();
    },
    queryDetails: function (src) {
       window.open(src)
    }

  }
}
