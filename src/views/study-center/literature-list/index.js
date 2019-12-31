import axios from "axios";

export default {
  data() {
    return {
      filterList:["活动快讯","政策文件","培训快讯"],
      selectedIndex:0,
      newslist:[],
      pageNum:1,//当前页码
      pageSize:8,
      total:''  ,// 超过16时显示页码
      recommend:[],
    }

  },
  mounted(){
      this.getlist();
  },
  methods:{
    getlist: function () {
      axios.get('http://zyz.liyue.com/socket/api/vLiterature/getPageVLiterature', {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        }
      })
        .then(response => {
          this.newslist = response.data.data.list;
          this.total = response.data.data.total;
          this.getRecomendlist();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getRecomendlist: function () {
      axios.get('http://zyz.liyue.com/socket/api/vLiterature/getPageGoodLiterature', {
        params: {
          pageNum: 1,
          pageSize: 8,
        }
      })
        .then(response => {
          this.recommend = response.data.data.list;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    changePage(val){
      this.pageNum=val;
      this.getlist();
    },
    toDetail(item){
      this.$router.push({
        name:"literatureDetail",
        query:{'itemId':item.id}
      })

    },
  }
}
