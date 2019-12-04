
export default {
  data() {
    return {
      filterList:["活动快讯","政策文件","培训快讯"],
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
      recommend:[
        {
          name:"民族舞《春天中国》 培训班培训班培训班培训班",
          id:"1"
        },
        {
          name:"民族舞《春天中国》 培训班培",
          id:"2"
        },
        {
          name:"民族舞《春天中国》 培训班培训班培训班培训班",
          id:"3"
        },
        {
          name:"民族舞《春天中国》 培训班培训班",
          id:"4"
        }
      ],
    }

  },
  mounted(){

  },
  methods:{
    changePage(){

    },
    toRecommend(){

    },
    toDetail(item){

      this.$router.push({
        name:"literatureDetail",
        query:{'itemId':item.id}
      })

    },
  }
}
