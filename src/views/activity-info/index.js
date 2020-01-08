import {ajax_get} from "../../utils/axios.util";
import constant from "../../utils/constant";
import dataFormat from "../../utils/format"
export default {
  data(){
    return{
      trainList:[],
      pageNum:1,//当前页码
      pageSize:9,
      total:'',// 超过16时显示页码
      areaList:[{name:"全部", value:"all"}],
      pCode:0,
      showAll:false,
      states:[
        {
          name:"全部",
          value: 0
        },
        {
          name:"待开始",
          value: 1
        },
        {
          name:"进行中",
          value: 2
        },
        {
          name:"已结束",
          value: 3
        },
      ],
      currentState: 0,

    }
  },
  mounted(){
    this.getAreaList();
    this.getList();
  },
  methods:{
    getAreaList(){
      ajax_get(constant.api_base_url + '/vArea/getAreas/0', null, data => {
          if (data.code === "200") {
            this.areaList=data.data;
            let areaAll={areaCode:0,areaName:"全部"}
            this.areaList.unshift(areaAll)
          }
        }
      )
    },
    getList() {
      ajax_get(constant.api_base_url + '/vActivity/getPageVActivity', {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        activityStatus: this.currentState,
        activityProvinceCode: this.pCode,
        }, data => {
          if (data.code === "200") {
            this.trainList=data.data.list;
            this.total=data.data.total;
            let nowTime =  dataFormat(new Date(),"YYYY-MM-DD HH:mm:ss");
            for (let i=0;i < data.data.list.length ;i++){
              if(data.data.list[i].activityStartDate > nowTime ){
                this.trainList[i].status=1;
                this.trainList[i].activityStartDate=this.date_format(this.trainList[i].activityStartDate);
                this.trainList[i].activityEndDate=this.date_format(this.trainList[i].activityEndDate);
              }
              else if(data.data.list[i].activityStartDate <= nowTime && data.data.list[i].activityEndDate >=nowTime  ){
                this.trainList[i].status=2;
                this.trainList[i].activityStartDate=this.date_format(this.trainList[i].activityStartDate);
                this.trainList[i].activityEndDate=this.date_format(this.trainList[i].activityEndDate);
              }
              else{
                this.trainList[i].status=3;
                this.trainList[i].activityStartDate=this.date_format(this.trainList[i].activityStartDate);
                this.trainList[i].activityEndDate=this.date_format(this.trainList[i].activityEndDate);
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
      this.selectNumber = item.value;
    },
    changePage(val){
      this.pageNum=val;
      this.getList();
    },
    close(){
      this.showAll=false;
    },
    open(){
      this.showAll=true;
    },
    toDetail(item){
      this.$router.push({
        name:"activityDetail",
        query:{
          'itemId':item.id
        }
      })

    },
  }
}
