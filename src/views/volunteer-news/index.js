
export default {
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
      ]
    }

  },
  mounted(){
    console.log("test"+process.env.BASE_URL)
  },
  methods:{
    changType(){

    },
    changePage(){

    },
    toRecommend(){

    }
  }
}
