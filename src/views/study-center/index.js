import {ajax_get} from "../../utils/axios.util";
import constant from "../../utils/constant";
import dataFormat from "../../utils/format";

export default {

  data(){
    return{
      value1:0,
      topList:[
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          tag:"陕西省渭南市韩城市",
          img:"static/images/villageStar/zhiyuan.jpg",
          id:"2"
        },
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          tag:"陕西省渭南市韩城市",
          img:"static/images/villageStar/zhiyuan.jpg",
          id:"1"
        },
        {
          title:"“心旅益行”乡村少年文化体验活动走进联合国教科文组织世",
          tag:"陕西省渭南市韩城市",
          img:"static/images/villageStar/zhiyuan.jpg",
          id:"3"
        },
      ],
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
      literatureList:[],
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
        }
      ]
    }
  },
  mounted(){
    this.getLiteratureList();
    this.getTrainList();

  },
  methods:{
    getTrainList(){
      ajax_get(constant.api_base_url + '/vTraining/getPageVTraining/', {
          pageSize: 6,
          pageNum:  1,
        }, data => {
          if (data.code === "200") {
            this.trainList=data.data.list;
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
    getLiteratureList(){
      ajax_get(constant.api_base_url + '/vLiterature/getPageVLiterature/', {
          pageSize: 6,
          pageNum:  1,
        }, data => {
          if (data.code === "200") {
            this.literatureList=data.data.list;
          }
        }
      )
    },
    toDetail(item){
      this.$router.push({
        name:"literatureDetail",
        query:{'itemId':item.id}
      })

    },
    toculDetail(item){
      this.$router.push({
        name:"cultivateDetail",
        query:{'itemId':item.id}
      })

    },
  }
}
