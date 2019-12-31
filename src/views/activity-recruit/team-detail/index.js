import Infodesc from "./list/index.vue"
import format from '@/utils/format.js'
export default {
    components:{Infodesc},
  data() {
    return {//详情介绍
      teamId:'',
      agreement:{
        content:"用户须知用户须知用户须知",
        show:false
      }

    }
  },
  mounted() {
    let id = this.$route.query.itemId
    this.teamId = id
    this.getTeamAllDetailById();
  },
  methods:{
    getTeamAllDetailById(){
      this.http.get('/vTeam/getTeamAllDetailById/'+ this.teamId).then(res=>{
        console.log(res.data)
        var rdata = res.data.data;
        if(rdata){
          this.detail = rdata;
          this.detail.activityStartDate = format(rdata.activityStartDate,'YYYY.MM.DD');
          this.detail.activityEndDate = format(rdata.activityEndDate,'YYYY.MM.DD');
          this.detail.recruitStartDate = format(rdata.recruitStartDate,'YYYY.MM.DD');
          this.detail.recruitEndDate = format(rdata.recruitEndDate,'YYYY.MM.DD');
          // 服务方式 0：现场 1：线上
          if(rdata.activityMode == '0'){
            this.detail.activityModeName = '现场'
          }else{
            this.detail.activityModeName = '线上'
          }
        }

      })
    },
  }
}

