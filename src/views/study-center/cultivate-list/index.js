
export default {

  data(){
    return{
      trainList:[
        {
          title:"河南省文化和旅游志愿者走进新疆",
          status:"3",
          to:"/",
          address:"安徽省黄山市歙县文化馆",

          timeStart:"2019.08.01",
          timeEnd:"2019.09.01",
          img:"static/images/villageStar/zhiyuan.jpg",
        },
        {
          title:"河南省文化和旅游志愿者走进新疆",
          status:"1",
          to:"/",
          address:"安徽省黄山市歙县文化馆",

          timeStart:"2019.08.01",
          timeEnd:"2019.09.01",
          img:"static/images/villageStar/zhiyuan.jpg",
        },
        {
          title:"河南省文化和旅游志愿者走进新疆",
          status:"2",
          to:"/",
          address:"安徽省黄山市歙县文化馆",
          timeStart:"2019.08.01",
          timeEnd:"2019.09.01",
          img:"static/images/villageStar/zhiyuan.jpg",
        },
        {
          title:"河南省文化和旅游志愿者走进新疆",
          status:"3",
          to:"/",
          address:"安徽省黄山市歙县文化馆",

          timeStart:"2019.08.01",
          timeEnd:"2019.09.01",
          img:"static/images/villageStar/zhiyuan.jpg",
        },
        {
          title:"河南省文化和旅游志愿者走进新疆",
          status:"1",
          to:"/",
          address:"安徽省黄山市歙县文化馆",

          timeStart:"2019.08.01",
          timeEnd:"2019.09.01",
          img:"static/images/villageStar/zhiyuan.jpg",
        },
        {
          title:"河南省文化和旅游志愿者走进新疆",
          status:"4",
          to:"/",
          address:"安徽省黄山市歙县文化馆",
          timeStart:"2019.08.01",
          timeEnd:"2019.09.01",
          img:"static/images/villageStar/zhiyuan.jpg",
        }
      ],
      pageNum:1,//当前页码
      pageSize:9,
      total:16,// 超过16时显示页码
      areaList:[
        {
          name:"全部",
          value:"all"
        },
        {
          name:"北京",
          value:"1"
        },
        {
          name:"天津",
          value:"2"
        },{
          name:"河北",
          value:"3"
        },
        {
          name:"山西",
          value:"4"
        },
        {
          name:"全部",
          value:"5"
        },
        {
          name:"北京",
          value:"6"
        },
        {
          name:"广东省",
          value:"7"
        },{
          name:"西藏自治区",
          value:"8"
        },
        {
          name:"宁夏回族自治区",
          value:"9"
        },
        {
          name:"湖南省",
          value:"5"
        },
        {
          name:"北京",
          value:"6"
        },
        {
          name:"天津",
          value:"7"
        },{
          name:"河北",
          value:"8"
        },
        {
          name:"青海省",
          value:"9"
        }
      ],
      cityCode:"all",
      showAll:true,
      states:[
        {
          name:"全部",
          value:"all"
        },
        {
          name:"待开始",
          value:"b"
        },
        {
          name:"进行中",
          value:"c"
        },
        {
          name:"已结束",
          value:"d"
        },
        {
          name:"可报名",
          value:"e"
        }
      ],
      number:[
        {
          name:"全部",
          value:"all"
        },
        {
          name:"0",
          value:"b"
        },
        {
          name:"0 - 100",
          value:"c"
        },
        {
          name:"101 - 200",
          value:"d"
        },
        {
          name:"201 - 500",
          value:"e"
        }
      ],
      currentState:"all",
      selectNumber:"all"
    }
  },
  mounted(){

  },
  methods:{
    swtichCity(item){
      this.cityCode = item.value;
    },
    swtichStatus(item){
      this.currentState = item.value;
    },
    swtichNumber(item){
      this.selectNumber = item.value;
    },
    changePage(){

    },
    toDetail(item){
      this.$router.push({
        name:"cultivateDetail",
        query:{'itemId':item.id}
      })

    },
  }
}