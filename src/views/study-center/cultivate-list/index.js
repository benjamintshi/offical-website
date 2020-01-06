import {ajax_get} from "../../../utils/axios.util";
import constant from "../../../utils/constant";
import dataFormat from "../../../utils/format";

export default {

  data(){
    return{
      trainList:[],
      pageNum:1,//当前页码
      pageSize:9,
      total:'',// 超过16时显示页码
      areaList:[],
      pCode:0,
      showAll:true,
      states:[
        {
          name:"全部",
          value:0
        },
        {
          name:"待开始",
          value:1
        },
        {
          name:"进行中",
          value:2
        },
        {
          name:"已结束",
          value:3
        }
      ],
      number:[
        {
          name:"全部",
          planNumStart:0,
          planNumEnd: 0,
          value:0,
        },
        {
          name:"1 - 100",
          planNumStart:1,
          planNumEnd: 100,
          value:1,
        },
        {
          name:"101 - 200",
          planNumStart:101,
          planNumEnd: 200,
          value:2,
        },
        {
          name:"201 - 500",
          planNumStart:201,
          planNumEnd: 500,
          value:3,
        },
        {
          name:"501 - 1000",
          planNumStart:501,
          planNumEnd: 10000,
          value:4,
        },
        {
          name:"1000以上",
          planNumStart:1000,
          planNumEnd: null,
          value:5,
        },
      ],
      currentState:0,
      planNumStart:0,
      planNumEnd:0,
      selectNumber: 0,

    }
  },
  mounted(){
    this.getAreaList();
    this.getList();
  },
  methods:{
    getAreaList() {
      ajax_get(constant.api_base_url + '/vArea/getAreas/0', null, data => {
          if (data.code === "200") {
            this.areaList = data.data;
            let areaAll = {areaCode: 0, areaName: "全部"}
            this.areaList.unshift(areaAll)
          }
        }
      )
    },
    getList() {
      ajax_get(constant.api_base_url + '/vTraining/getPageVTraining', {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          status: this.currentState,
          trainingProvinceCode: this.pCode,
          planNumStart: this.planNumStart,
          planNumEnd:this.planNumEnd,
        }, data => {
          if (data.code === "200") {
            this.trainList=data.data.list;
            this.total=data.data.total;
            let nowTime =  dataFormat(new Date(),"YYYY-MM-DD HH:mm:ss");
            for (let i=0;i < data.data.list.length ;i++){
              if(data.data.list[i].trainingStartDate > nowTime ){
                this.trainList[i].status=1;
                this.trainList[i].trainingStartDate=this.date_format(this.trainList[i].trainingStartDate);
                this.trainList[i].trainingEndDate=this.date_format(this.trainList[i].trainingEndDate);
              }
              else if(data.data.list[i].trainingStartDate <= nowTime && data.data.list[i].trainingEndDate >=nowTime  ){
                this.trainList[i].status=2;
                this.trainList[i].trainingStartDate=this.date_format(this.trainList[i].trainingStartDate);
                this.trainList[i].trainingEndDate=this.date_format(this.trainList[i].trainingEndDate);
              }
              else{
                this.trainList[i].status=3;
                this.trainList[i].trainingStartDate=this.date_format(this.trainList[i].trainingStartDate);
                this.trainList[i].trainingEndDate=this.date_format(this.trainList[i].trainingEndDate);
              }
            }
          }

        }
      )
    },
    date_format(date_str) {
      if (date_str==null || date_str=='') {
        return '';
      }
      return date_str.split(' ')[0].replace(/-/g, '.');
    },
    swtichCity(item){
      this.pCode = item.areaCode;
      this.getList();
    },
    swtichStatus(item){
      this.currentState = item.value;
      this.getList();
    },
    swtichNumber(item){
      this.selectNumber=item.value;
      this.planNumStart = item.planNumStart;
      this.planNumEnd = item.planNumEnd;
      this.getList();
    },
    changePage(val){
      this.pageNum=val;
      this.getList();
    },
    toDetail(item){
      this.$router.push({
        name:"cultivateDetail",
        query:{'itemId':item.id}
      })

    },
  }
}
