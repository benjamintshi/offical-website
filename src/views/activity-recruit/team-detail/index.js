import Infodesc from "./list/index.vue"
import format from '@/utils/format.js'
export default {
    components:{Infodesc},
  data() {
    return {//详情介绍
      teamId:'',
      detail:'',
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
          this.detail.foundingTime = format(rdata.foundingTime,'YYYY.MM.DD');
          // 服务方式 0：现场 1：线上
          if(rdata.serviceMode == '0'){
            this.detail.serviceModeName = '现场'
          }else{
            this.detail.serviceModeName = '线上'
          }
          if(!this.detail.teamNum){
            this.detail.teamNum = 0;
          }

        }

      })
    },
  }
}

