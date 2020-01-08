import {ajax_get,ajax_post} from "../../../utils/axios.util";
import constant from "../../../utils/constant";

export default {

  data() {
    return {
      id:'',
      info:{},
      showModal:false
    }
  },
  mounted(){
    this.getActivityDetails();
  },
  methods:{
    getActivityDetails(){
      ajax_get(constant.api_base_url + '/vActivity/getVActivityById/'+this.$route.query.itemId , null, data => {
          if (data.code === "200") {
            this.info=data.data
            this.info.activityStartDate=this.date_format(data.data.activityStartDate);
            this.info.activityEndDate=this.date_format(data.data.activityEndDate)
            this.getPointArea();
          }
        }
      )
    },
    getPointArea(){
      var map = new BMap.Map("map");
      console.log(this.info.activityLatitude+":"+this.info.activityLongitude)
      let point = new BMap.Point(this.info.activityLongitude,this.info.activityLatitude);
      map.centerAndZoom(point, 15);
      map.enableScrollWheelZoom();
      /*for (var i = 0; i < 2; i ++) {
        let point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));*/
        this.addMarker(map,point);
      /*}*/
    },
    // 编写自定义函数,创建标注
    addMarker(map,point){
      let myIcon = new BMap.Icon("static/images/common/point.png", new BMap.Size(20,33));
      let marker = new BMap.Marker(point,{icon:myIcon});
      map.addOverlay(marker);
    },
    date_format(date_str) {
      if (date_str==null || date_str=='') {
        return '';
      }
      return date_str.split(' ')[0].replace(/-/g, '.');
    },
    applyActivity(){
      ajax_post(constant.api_base_url + '/vActivity/applyParticipateActivity/'+this.$route.query.itemId , null, data => {
          if (data.code === "200") {
            this.showModal = true;
          }else{
            alert(data.message)
          }
        }
      )
    },
    checkRecruitRequirement(){
      let id=this.$route.query.itemId
      this.$router.push({
        name:"volunteerRecruitDetail",
        query:{'itemId':id}
      })
    }

  },

}
