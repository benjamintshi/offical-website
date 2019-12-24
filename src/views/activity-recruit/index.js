import format from '@/utils/format.js'
export default {

  data(){
    return{
      trainList:[
        {
          title:"河南省文化和旅游志愿者走进新疆",
          status:"3",
          to:"/",
          address:"安徽省黄山市歙县文化馆",
          endTime:10,
          realNum:100,
          timeStart:"2019.08.01",
          timeEnd:"2019.09.01",
          img:"static/images/villageStar/zhiyuan.jpg",
        },
        {
          title:"河南省文化和旅游志愿者走进新疆",
          status:"1",
          to:"/",
          address:"安徽省黄山市歙县文化馆",
          endTime:10,
          realNum:100,

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
          endTime:10,
          realNum:100,
        },
        {
          title:"河南省文化和旅游志愿者走进新疆",
          status:"3",
          to:"/",
          address:"安徽省黄山市歙县文化馆",
          endTime:10,
          realNum:100,
          timeStart:"2019.08.01",
          timeEnd:"2019.09.01",
          img:"static/images/villageStar/zhiyuan.jpg",
        },
        {
          title:"河南省文化和旅游志愿者走进新疆",
          status:"1",
          to:"/",
          address:"安徽省黄山市歙县文化馆",
          endTime:10,
          realNum:100,
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
          endTime:10,
          realNum:100,
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
      cityCode:"",
      showAll:true,
      states:[
        {
          name:"全部",
          value:""
        },
        {
          name:"待开始",
          value:"1"
        },
        {
          name:"进行中",
          value:"2"
        },
        {
          name:"已结束",
          value:"3"
        },
        {
          name:"可报名",
          value:"4"
        }
      ],
      currentState:"",
      service:[
        {
          name:"全部",
          value:""
        },
        {
          name:"老人",
          value:"a"
        },
        {
          name:"儿童",
          value:"b"
        },
        {
          name:"青少年",
          value:"c"
        }
      ],
      selecteService:"all"

    }
  },
  mounted(){
    let activeAreaName = localStorage.getItem("activeAreaName");
    if(activeAreaName){
      // this.activeAreaName = activeAreaName;
      let activeArea = localStorage.getItem("activeArea");
      if(activeArea){
        this.cityCode = activeArea;
      }
    }
    this.getProvinces();
    this.showAll = false;
    this.getPageVActivity();
  },
  methods:{
    swtichCity(item){
      this.cityCode = item.value;
    },
    swtichStatus(item){
      this.currentState = item.value;
    },
    swtichService(item){
      this.selecteService = item.value;
    },
    changePage(page){
      this.pageNum = page;
      this.getPageVActivity();
    },
    getProvinces(){
      this.http.get('/vArea/getProvinces/1').then(res=>{
        this.areaList = [];
        // console.log(res.data.data)
        res.data.data.forEach(item => {
          var area = {};
          area.value = item.areaCode;
          area.name = item.areaName;
          this.areaList.push(area);
        })
      })
    },
    getPageVActivity(){
      var canCrowdAttend = ''
      if(this.currentState == '4'){
        canCrowdAttend = '1'
        this.currentState = '';
      }
      var params ={
        'pageNum':this.pageNum,
        'pageSize':this.pageSize,
        'recruitStatus':this.currentState,
        // 'canCrowdAttend':canCrowdAttend,
        'selecteService': this.selecteService,
        'activityProvinceCode':this.cityCode
      }
      this.http.get('/vActivity/getPageVActivity',params).then(res=>{
        console.log(res.data.data);
        this.trainList= [];
        this.total = res.data.data.total;
        res.data.data.list.forEach(item => {
          var train ={};
          train.id = item.newsId;
          train.title = item.activityName;
          train.status = item.newsContent;
          train.address = item.activityProvinceName + item.activityCityName + item.activityCountyName;
          train.endTime = item.canCrowdAttend;
          train.realNum = item.readyNum;
          train.timeStart = format(item.activityStartDate,'YYYY.MM.DD');
          train.timeEnd = format(item.activityEndDate,'YYYY.MM.DD')
          train.img = item.activityCover;
          if(!train.img){
            train.img = 'http://zgwhzyz.bjbsh.com:180/show/img/loadingImage.jpg'
          }
          if(!train.realNum){
            train.realNum = 0;
          }
          train.timeShow = true;
          if(!train.timeStart){
            train.timeShow = false;
          }
          this.trainList.push(train);
        })
      })
    },
    toDetail(item){
      this.$router.push({
        name:"volunteerRecruitDetail",
        query:{'itemId':item.id}
      })

    },

  }
}
