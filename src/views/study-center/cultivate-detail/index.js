import {ajax_get} from "../../../utils/axios.util";
import constant from "../../../utils/constant";
import dataFormat from "../../../utils/format";

export default {
  data() {
    return {
      trainInfo:{},
      columns1: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '岗位',
          key: 'title'
        },
        {
          title: '申请时间',
          key: 'date'
        }
      ],
      data1: []
    }
  },
  mounted(){
    this.getDetails();
    this.getApplyPerson();
  },
  methods:{
      getDetails(){
        ajax_get(constant.api_base_url + '/vTraining/getVTrainingById/'+this.$route.query.itemId, null
          , data => {
            if (data.code === "200") {
              this.trainInfo=data.data;
              this.trainInfo.trainingStartDate=this.date_format(data.data.trainingStartDate);
              this.trainInfo.trainingEndDate=this.date_format(data.data.trainingEndDate)
              this.trainInfo.trainingApplyStartDate=this.date_format(data.data.trainingApplyStartDate)
              this.trainInfo.trainingApplyEndDate=this.date_format(data.data.trainingApplyEndDate)
            }
          }
        )
      },
    getApplyPerson(){
      ajax_get(constant.api_base_url + '/vTrainingCrowd/getPageNormalTrainingCrowd/', {
        pageSize:7,
        pageNum:1,
        trainingId:this.$route.query.itemId,
        }
        , data => {
          if (data.code === "200") {
              for(let i=0;i<data.data.list.length;i++){
                let a={
                  name:data.data.list[i].userName,
                  title: '学员',
                  date: data.data.list[i].applyDate,
                }
                this.data1.push(a)
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
  }
}
