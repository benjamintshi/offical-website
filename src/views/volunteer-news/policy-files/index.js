
export default {
  data() {
    return {
      selectedIndex:0,
      newslist:[
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          id:"1",
          time:"2019-05-31",
          office:"文化和旅游部公共服务司"
        },
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          id:"1",
          time:"2019-05-31",
          office:"文化和旅游部公共服务司"
        },
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          id:"1",
          time:"2019-05-31",
          office:"文化和旅游部公共服务司"
        },
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          id:"1",
          time:"2019-05-31",
          office:""
        },
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          id:"1",
          time:"2019-05-31",
          office:""
        },
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          id:"1",
          time:"2019-05-31",
          office:""
        },
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          id:"1",
          time:"2019-05-31",
          office:""
        },
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          id:"1",
          time:"2019-05-31",
          office:""
        },
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          id:"1",
          time:"2019-05-31",
          office:""
        },
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          id:"1",
          time:"2019-05-31",
          office:""
        },


      ],
      cate:"",
      pageNum:1,//当前页码
      pageSize:6,
      total:16,// 超过16时显示页码

    }

  },
  mounted(){
    this.getPagePolicyByCate();
  },
  methods:{
    changePage(page){
      this.pageNum = page;
      this.getPagePolicyByCate();
    },
    toNewsDetail(item){
      this.$router.push({
        name:"policyFileDetail",
        query:{'itemId':item.id}
      })
    },
    changeType(cate) {
      this.cate = cate;
    },
    getPagePolicyByCate(){
      var params ={
        'pageNum':this.pageNum,
        'pageSize':this.pageSize,
        'cate':this.cate
      }
      this.http.get('/vPolicy/getPagePolicyByCate',params).then(res=>{
        this.newslist= [];
        this.total = res.data.data.total;
        // console.log(res.data.data)
        res.data.data.list.forEach(item => {
          var news ={};
          news.id = item.id;
          news.title = item.policyName;
          news.time = item.policyDate;
          news.office = item.policyAuthor;
          // news.tag = "陕西省渭南市韩城市";
          // news.img = item.newsCover;
          this.newslist.push(news);
        })
      })
    }
  }
}
