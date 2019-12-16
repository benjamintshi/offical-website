import ServiceInfo from "./volunteer-service-info/index.vue";
import PolicyFiles from "./policy-files/index.vue";
import TrainNews from "./train-news/index.vue";
export default {
  components: { ServiceInfo,PolicyFiles,TrainNews },
  data() {
    return {
      filterList:["活动快讯","政策文件","培训快讯"],
      selectedIndex:0,
      newslist:[
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          content:"来自双阳区城中小学来自双阳区城中小学、长春市红领巾宣讲团的26名小学生在吉林外国语大学26名大学生志愿者的陪同下，走进联合国教科文组织世走进联合国教科文组织世走进联合国教科文组织世",
          tag:"陕西省渭南市韩城市",
          img:"static/images/villageStar/zhiyuan.jpg",
          id:"1"
        },
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          content:"来自双阳区城中小学来自双阳区城中小学、长春市红领巾宣讲团的26名小学生在吉林外国语大学26名大学生志愿者的陪同下，走进联合国教科文组织世走进联合国教科文组织世走进联合国教科文组织世",
          tag:"陕西省渭南市韩城市",
          img:"static/images/villageStar/zhiyuan.jpg",
          id:"1"
        },
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          content:"来自双阳区城中小学来自双阳区城中小学、长春市红领巾宣讲团的26名小学生在吉林外国语大学26名大学生志愿者的陪同下，走进联合国教科文组织世走进联合国教科文组织世走进联合国教科文组织世",
          tag:"陕西省渭南市韩城市",
          img:"static/images/villageStar/zhiyuan.jpg",
          id:"1"
        },
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          content:"来自双阳区城中小学来自双阳区城中小学、长春市红领巾宣讲团的26名小学生在吉林外国语大学26名大学生志愿者的陪同下，走进联合国教科文组织世走进联合国教科文组织世走进联合国教科文组织世",
          tag:"陕西省渭南市韩城市",
          img:"static/images/villageStar/zhiyuan.jpg",
          id:"1"
        },
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          content:"来自双阳区城中小学来自双阳区城中小学、长春市红领巾宣讲团的26名小学生在吉林外国语大学26名大学生志愿者的陪同下，走进联合国教科文组织世走进联合国教科文组织世走进联合国教科文组织世",
          tag:"陕西省渭南市韩城市",
          img:"static/images/villageStar/zhiyuan.jpg",
          id:"1"
        },
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          content:"来自双阳区城中小学来自双阳区城中小学、长春市红领巾宣讲团的26名小学生在吉林外国语大学26名大学生志愿者的陪同下，走进联合国教科文组织世走进联合国教科文组织世走进联合国教科文组织世",
          tag:"陕西省渭南市韩城市",
          img:"static/images/villageStar/zhiyuan.jpg",
          id:"1"
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
      typeList:[
        {
          name:"全部",
          value:"all"
        },
        {
          name:"中央国务院政策文件",
          value:"a"
        },
        {
          name:"文化和旅游部政策文件",
          value:"b"
        },
        {
          name:"地方政策文件",
          value:"c"
        },
      ],
      selectType:"all",
      queryId:""
    }

  },
  mounted(){

    if(this.$route.query.id){
      this.selectedIndex = this.$route.query.id;
    }
    this.queryId = this.$route.query.id;
  },
  methods:{
    changeFilter(index){
        this.selectedIndex = index;
    },
    changeType(item){
      this.selectType = item.value;
      //this.newslist = [];
    },
    changePage(){

    },
    toRecommend(){

    }
  },
  watch:{
    queryId(value) {
      debugger
    }
  }
}
