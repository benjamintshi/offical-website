import format from '@/utils/format.js'
import axios from "axios";
export default {
  data() {
    return {
      newsInfo:{},//this.route.params
      content:"<p> ",
      pageSize:5,
      pageNum:1,
      recommend:[]
    }
  },
  mounted(){

    this.newsInfo.id = this.$route.query.itemId;
    this.getVProjectAchieveById();
  },
  methods:{
    //显示推荐列表
    getRecommendList(){
      axios.get('http://zyz.liyue.com/socket/api/vLiterature/getPageVLiterature', {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        }
      })
        .then(response => {
          this.recommend = response.data.data.list;
          this.total = response.data.data.total;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 点击推荐链接
    toRecommend(item){
      this.newsInfo.id = item.id;
      this.getVProjectAchieveById();
    },
    getVProjectAchieveById(){
        this.http.get('http://zyz.liyue.com/socket/api/vLiterature/getVLiteratureById/'+ this.newsInfo.id).then(res=>{
        this.newsInfo.title = res.data.data.projectName;
        this.content = res.data.data.content;
        this.newsInfo.time = format(res.data.data.createDatetime,'YYYY/MM/DD HH:mm');
        console.log(this.newsInfo);
        this.getRecommendList();
      })
    },
    /*getGoodVolunteerShows(){
      var params ={
        'pageNum':1,
        'pageSize':5
      }
      this.newsList= [];
      this.http.get('/vProjectAchieve/getGoodVolunteerShows/41',params).then(res=>{
        this.recommend = [];
        res.data.data.list.forEach(item => {
          var volunteer ={};
          console.log(item);
          volunteer.id = item.projectId;
          volunteer.name = item.projectName;
          volunteer.time = format(item.createDate,'YYYY.MM.DD');

          this.recommend.push(volunteer);
        })
        console.log(this.recommend);
      })
    }*/
  }

}
