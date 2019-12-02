
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

      pageNum:1,//当前页码
      pageSize:6,
      total:16,// 超过16时显示页码

    }

  },
  mounted(){

  },
  methods:{
    changePage(){

    },
    toNewsDetail(item){
      this.$router.push({
        name:"policyFileDetail",
        query:{'itemId':item.id}
      })
    },
  }
}
