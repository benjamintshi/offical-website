import BaseInfo from "./base-info/index.vue"
import ModifyInfo from "./modify-info/index.vue"
export default {
  components:{ BaseInfo , ModifyInfo },
  data() {
    return {
      modify:false,
      userInfo:{}
    }

  },
  mounted(){

  },
  methods:{

    login(){

    },
    getUserInfo(data){
      this.userInfo = data;
    }
  }
}
