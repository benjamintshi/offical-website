import axios from "axios";

export default {
  data() {
    return {
       list:[],
       projectName:"证书"
    }
  },
    mounted(){
      this. getCertificate();
    },
  methods:{
    getCertificate: function () {
      axios.get('http://zyz.liyue.com/socket/api/vUser/myVolunteerCertificate', {
        params: {
        }
      })
        .then(response => {
          this.list= response.data.data;
          this.pageSize = response.data.data.pageSize;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    downloadCodeImg() {
        const image = new Image();
        image.setAttribute("crossOrigin", "anonymous");
        const _this = this;
        image.onload = function () {
          const canvas = document.createElement("canvas");
          canvas.width = image.width;
          canvas.height = image.height;
          const context = canvas.getContext("2d");
          context.drawImage(image, 0, 0, image.width, image.height);
          const url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
          const a = document.createElement("a"); // 生成一个a元素
          const event = new MouseEvent("click"); // 创建一个单击事件
          a.download = _this.projectName || "photo"; // 设置图片名称
          a.href = url; // 将生成的URL设置为a.href属性
          a.dispatchEvent(event); // 触发a的单击事件
        };
        image.src = this.info.img;
      }
    }
}
