import constant from "../../utils/constant";
import {ajax_post} from "../../utils/axios.util";

export default {
  data (){
    return{
      linkList:[]
    }
  },
  mounted(){
    this.getLinklist();
  },
  methods:{
    getLinklist(){
      // console.log("页面开始检索。。。");
      ajax_post(constant.api_base_url + '/vLink/queryVLinkList', {
        "enableStatus":1
      }, data => {
        if (data.code !== '200') {
          alert(data.message);
          return;
        }
        this.linkList = data.data;
      });
    },
  }
}
