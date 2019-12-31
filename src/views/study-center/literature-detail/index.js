import format from '@/utils/format.js'
import {ajax_get, ajax_post} from '../../../utils/axios.util';
import constant from '../../../utils/constant'
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
      ajax_get(constant.api_base_url + '/vLiterature/getPageVLiterature',
        {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        }, data => {
          if (data.code === "200") {
            this.recommend = data.data.list;
            this.total = data.data.total;
          }
        }
      )
    },
    // 点击推荐链接
    toRecommend(item){
      this.newsInfo.id = item.id;
      this.getVProjectAchieveById();
    },
    getVProjectAchieveById(){
        this.http.get(constant.api_base_url+'/vLiterature/getVLiteratureById/'+ this.newsInfo.id).then(res=>{
        this.newsInfo.title = res.data.data.projectName;
        this.content = res.data.data.content;
        this.newsInfo.time = format(res.data.data.createDatetime,'YYYY/MM/DD HH:mm');
        console.log(this.newsInfo);
        this.getRecommendList();
      })
    },
  }
}
