import {ajax_get, ajax_post} from '../../../utils/axios.util';
import constant from '../../../utils/constant'

export default {
  data() {
    return {
      userInfo:{},
      list: [],
      pageSize: '1',
      totalNum: '',
      n: 1,
      isMost: false,

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
          pageNum: 1,
          pageSize: this.pageSize,
        }, data => {
          if (data.code === "200") {
            this.list = data.data.list;
            this.pageSize = data.data.pageSize;
          }
        }
      )
    },
    loadMore: function () {
      this.n = this.n + 1;
      let temp = this.n
      ajax_get(constant.api_base_url + '/vActivity/getMyJoinActivities',
        {
          pageNum: 1,
          pageSize: this.pageSize * temp
        }, data => {
          if (data.code === "200") {
            this.list = data.data.list;
            this.totalNum = data.data.size;
            if (this.totalNum === data.data.total) {
              this.isMost = true
            }
          }
        }
      )
    },
    toDetail(item) {
      this.$router.push({
        name: "activityDetail",
        query: {'itemId': item.id}
      })

    }

  },
}
