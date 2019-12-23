import axios from "axios";
import boolean from "less/lib/less/functions/boolean";
import util from "../../../utils/postRequest";

export default {
  data() {
    return {
      noDesc:false,  //是否有个人介绍
      modify:false,
      info:{
          name:"王菲菲",
          img:"static/images/common/tx.jpg",
          content:"王菲菲同志作为一名旅游志愿者，一直高标准要求自己，不断提高综合素质近年来，专注旅游志愿服务，组织各项活动，鼓励广大旅游志愿者参加志愿活动，为保定市旅游发展贡献一份力量。 组织各类活动，宣传保定旅游文化"
        },
        upload:{
          url:"http://cultrual.bbwhm.com:8087/api/upload/uploadFiles/" //上传到服务器的地址，请替换
        },
        userInfo:{
        volunteer:{}
        }
    }

  },
  mounted(){
    this.getUserInfo();

  },
  methods:{
      getUserInfo() {
        axios.get('http://zyz.liyue.com/socket/api/vUser/getSessionUserInfo', {})
          .then(response => {
            this.userInfo = response.data.data;
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    submit(){
      axios({
        method: 'post',
        url: 'http://zyz.liyue.com/socket/api/vUser/updateUser',
        data: {
          userId: this.userInfo.userId,
          //缺头像url
          declaration: this.userInfo.volunteer.declaration,
        },
        transformRequest: util.data().transformRequest,
        headers: util.data().headers
      })
        .then(response => {
          console.log(response);
          if (response.data.code == 200) {
            this.modify  = false;
          }
        })
        .catch(function (error) {
          console.log(error);
        });


    }
  }
}
