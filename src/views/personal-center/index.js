import {ajax_get, ajax_post} from '../../utils/axios.util';
import constant from '../../utils/constant'
export default {
  data() {
    return {
      menuList: [
        {
          name: "个人基础信息",
          to: "personalInfo",
        },
        {
          name: "个人志愿服务介绍",
          to: "serviceDesc",
        },
        {
          name: "参加过的团队",
          to: "joinedTeam",
        },
        {
          name: "志愿服务记录",
          to: "serviceRecord",
        },
        {
          name: "参与活动记录",
          to: "activityRecord",
        },
        {
          name: "接受培训记录",
          to: "trainRecord",
        },
        {
          name: "积分累计记录",
          to: "integralRecord",
        },
        {
          name: "表彰记录",
          to: "honourRecord",
        },
        {
          name: "评价投诉记录",
          to: "evaluationRecord",
        },
        {
          name: "志愿服务证书",
          to: "certificate",
        }
      ],
      activeMenu: "personalInfo",

      commonUserMenu: [
        {
          name: "个人基础信息",
          to: "personalInfo",
        },
        {
          name: "参与活动记录",
          to: "activityRecord",
        }
      ],
      tempMeun: []
    }
  },

  mounted(){
    this.activeMenu = this.$route.name;
    this.getUserInfo();
  },
  methods:{
    getUserInfo() {
      ajax_get(constant.api_base_url + '/vUser/getSessionUserInfo',
        null, data => {
          if (data.code === "200") {
              if(data.data.identity === 1){
                this.tempMeun=this.commonUserMenu;
              }else if(data.data.identity === 2) {
                this.tempMeun=this.menuList;
              }
          } else {
            alert(data.message)
          }
        }
      )
    },
    swtichMenu(item){
      if( item.to == this.$route.name) return;
      this.activeMenu = item.to;
      this.$router.push(item.to)
    }
  }
}
