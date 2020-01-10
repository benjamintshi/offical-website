import {ajax_get, ajax_post} from '../../../../utils/axios.util';
import constant from '../../../../utils/constant'

export default {
  data() {
    return {
      userInfo: {
        volunteer:{}
      },
      serviceArea: '',
      isVolunteer: true,
      info: {
        zsUrl: "static/images/common/zs.jpg"//证书的url
      },
      projectName: "证书"//下载证书图片生成的名字
    }

  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    modifyInfo() {
      this.$emit('modify');
      this.$emit('getUserInfo',this.userInfo);
    },
    getServiceArea(){
      ajax_get(constant.api_base_url + '/vArea/getAreas/0', null, data => {
          if (data.code === "200") {
            for(var i=0; i< data.data.length; i++){
              if(this.userInfo.volunteer.serviceProvinceCode === data.data[i].areaCode) {
                this.serviceArea=data.data[i].areaName
                break;
              }
            }
          }
        }
      )
    },
    getUserInfo() {
      ajax_get(constant.api_base_url + '/vUser/getSessionUserInfo',
       null, data => {
          if (data.code === "200") {
            this.userInfo = data.data;
            this.getServiceArea();
          }
        }
      )
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
  },
  filters: {
    volunteerTypeName(item) {
      switch (item) {
        case 0:
          return "文化志愿者";
        case 1:
          return "阳光工程";
        case 2:
          return "圆梦工程";
        case 3:
          return "旅游志愿者";
      }
    }
  }
}
