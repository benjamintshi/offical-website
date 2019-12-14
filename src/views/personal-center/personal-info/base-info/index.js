
export default {
  data() {
    return {
      isVolunteer:true,
      info:{
        zsUrl:"static/images/common/zs.jpg"//证书的url
      },
      projectName:"证书"//下载证书图片生成的名字
    }

  },
  mounted(){

  },
  methods:{

    modifyInfo(){
      this.$emit('modify');
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
      image.src = this.info.zsUrl;
    }
  }

}
