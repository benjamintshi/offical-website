import util from '../../utils/postRequest.js';
import axios from "axios";


export default {
  data() {
    return {
      login:{
        account:"",
        passwd:""
      },
      errInfo: '',
      loginByAccount:true
    }
  },
  mounted(){

  },
  methods:{
   /* toLogin(){
      var url = "http://zyz.liyue.com/socket/api/vUser/appLogin";
      util.post(url,this.login)
        .then(response => {
          if(response.data.data.userId != null){
            window.location.href = 'http://zyz.liyue.com/view';
          }else{
            this.errInfo='账号或密码错误'
          }
      })
        .catch(function (error) {
          console.log(error);
        });
    },*/
    toLogin(){
      axios({
        method: 'post',
        url: 'http://zyz.liyue.com/socket/api/vUser/appLogin',
        data: {
          account: this.login.account,
          passwd: this.login.passwd
        },
        transformRequest: util.data().transformRequest,
        headers: util.data().headers
      })
        .then(response => {
          console.log(response);
          if(response.data.data.userId != null){
            window.location.href = 'http://zyz.liyue.com/view';
          }else{
            this.errInfo='账号或密码错误'
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
