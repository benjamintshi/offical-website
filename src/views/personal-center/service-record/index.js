import {ajax_get, ajax_post} from '../../../utils/axios.util';
import constant from '../../../utils/constant'

export default {
  data() {
    return {
      userInfo:{},
      list: [],
      pageNum:1,
      pageSize: 10,
      total: '',
    }

  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      ajax_get(constant.api_base_url + '/vUser/getSessionUserInfo',
        null, data => {
          if (data.code === "200") {
            this.userInfo = data.data;
            this.getlist();
          }
        }
      )
    },
    getlist: function () {
      ajax_get(constant.api_base_url + '/vActivity/getMyJoinActivities',
        {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        }, data => {
          if (data.code === "200") {
            this.list = data.data.list;
            this.pageSize = data.data.pageSize;
            this.total=data.data.total;
          }
        }
      )
    },
    toDetail(item) {
      this.$router.push({
        name: "activityDetail",
        query: {'itemId': item.id}
      })
    },
    changePage(val){
      this.pageNum=val;
      this.getlist();
    },

  },
}
