
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
          value:"15"
        },
        {
          name:"北京",
          value:"16"
        },
        {
          name:"天津",
          value:"17"
        },{
          name:"河北",
          value:"18"
        },
        {
          name:"青海省",
          value:"19"
        },
        {
          name:"青海省",
          value:"9"
        },
        {
          name:"天津",
          value:"22"
        },{
          name:"河北",
          value:"23"
        },
        {
          name:"山西",
          value:"24"
        },
        {
          name:"全部",
          value:"25"
        },
        {
          name:"北京",
          value:"26"
        },
        {
          name:"广东省",
          value:"27"
        },{
          name:"西藏自治区",
          value:"28"
        },
        {
          name:"宁夏回族自治区",
          value:"29"
        },
      ],
      cityCode:"all",
      showAll:false,
      states:[
        {
          name:"全部",
          value:"0"
        },
        {
          name:"招募中",
          value:"1"
        },
        {
          name:"停止招募",
          value:"2"
        }
      ],
      currentState:"0",
      number:[
        {
          name:"全部",
          value:"0"
        },
        {
          name:"0 - 100",
          value:"0-100"
        },
        {
          name:"101 - 200",
          value:"101-200"
        },
        {
          name:"201 - 500",
          value:"201-500"
        }
      ],
      selectNumber:"0"

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
    this.getTeamList();
  },
  methods:{
    swtichCity(item){
      this.cityCode = item.value;
      this.getTeamList();
    },
    swtichStatus(item){
      this.currentState = item.value;
      this.getTeamList();
    },
    swtichNumber(item){
      this.selectNumber = item.value;
      this.getTeamList();
    },
    changePage(page){
      this.pageNum = page;
      this.getTeamList();
    },
    toDetail(item){
      this.$router.push({
        name:"volunteerTeamDetail",
        query:{'itemId':item.id}
      })

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
    getTeamList(){
      var teamNumStart = '';
      var teamNumEnd = '';
      var numArr = this.selectNumber.split('-')
      if(numArr.length > 1){
        teamNumStart = numArr[0];
        teamNumEnd = numArr[1];
      }
      var params ={
        'pageNum':this.pageNum,
        'pageSize':this.pageSize,
        'recruitStatus':this.currentState,
        'teamNumStart':teamNumStart,
        'teamNumEnd':teamNumEnd,
        'provinceCode':this.cityCode
      }
      // console.log(params);
      this.http.get('/vTeam/getTeamList',params).then(res=>{
        // console.log(res.data.data)
        this.trainList= [];
        this.total = res.data.data.total;
        res.data.data.list.forEach(item => {
          var train ={};
          train.id = item.teamId;
          train.title = item.teamName;
          train.address = item.address;
          // train.timeStart = item.id;
          // train.timeEnd = item.id;
          train.img = item.teamLogo;
          if(item.recruitStatus == '1'){
            train.status = "2";
          }
          this.trainList.push(train);
        })
      })
    },

  }
}
