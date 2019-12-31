export default {
  data(){
    return {
      address_detail: null, //详细地址
      userlocation: {lng: "", lat: ""},
      inputValue:"",
      searchResult:{
        title:"",
        time:"",
        content:"本活动专门为义工朋友举办的长期活动，希望可以坚持锻炼\n" +
        "目前都是人群缺少锻炼就会沦为亚健康，一人健康幸福三代人，和我们一起来太极吧！宝安新桥义工-艺术组有专人教授太极拳，无论你基础如何，相信自己, 坚持学习就会有意想不到的收获。"
      },
      showResult:false,
      data: [{
        value: 'beijing',
        label: '北京',
        children: [
          {
            value: 'gugong',
            label: '故宫'
          },
          {
            value: 'tiantan',
            label: '天坛'
          },
          {
            value: 'wangfujing',
            label: '王府井'
          }
        ]
      }, {
        value: 'jiangsu',
        label: '江苏',
        children: [
          {
            value: 'nanjing',
            label: '南京',
            children: [
              {
                value: 'fuzimiao',
                label: '夫子庙',
              }
            ]
          },
          {
            value: 'suzhou',
            label: '苏州',
            children: [
              {
                value: 'zhuozhengyuan',
                label: '拙政园',
              },
              {
                value: 'shizilin',
                label: '狮子林',
              }
            ]
          }
        ],
      }]
    }
  },
  mounted(){
    this.$nextTick(function () {
      const  that = this;
      // 创建Map实例
      this.map = new BMap.Map("allmap");
      // 初始化地图,设置中心点坐标，
      var point = new BMap.Point(121.160724,31.173277); // 创建点坐标，汉得公司的经纬度坐标
      this.map.centerAndZoom(point, 15);
      this.map.enableScrollWheelZoom();

      this.map.addEventListener("click", function(){
        that.showResult = false;
      });
     this.addPoint();
    })

  },
  methods:{
    changeCity(value,selectedData){

    },
    format (labels, selectedData) {
      const index = labels.length - 1;
      return labels[index];
    },
    search(item){
      this.showResult = true;
      //将位置坐标传入
      // debugger
      // let opts = {
      //   width : 200,     // 信息窗口宽度
      //   height:1,
      //   title : "" , // 信息窗口标题
      //   enableMessage:true,//设置允许信息窗发送短息
      //   class:""
      // };
      // let point = new BMap.Point(121.160724,31.173277);
      // let content = '测试数据';
      // let infoWindow = new BMap.InfoWindow("<p class='info-content'>"+content +"</p>", opts);
      // this.map.openInfoWindow(infoWindow,point);
    },
    addPoint(){
      const that = this;
      let bounds = that.map.getBounds();
      let sw = bounds.getSouthWest();
      let ne = bounds.getNorthEast();
      let lngSpan = Math.abs(sw.lng - ne.lng);
      let latSpan = Math.abs(ne.lat - sw.lat);
      let opts = {
        width : 200,     // 信息窗口宽度
        height:1,
        title : "" , // 信息窗口标题
        enableMessage:true,//设置允许信息窗发送短息
        class:""
      };
      for (let i = 0; i < 5; i ++) {
        // debugger
        let point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
        let marker = new BMap.Marker(point);
        let content = '测试数据'+i;
        let infoWindow = new BMap.InfoWindow("<p class='info-content'>"+content +"</p>", opts);  // 创建信息窗口对象
        marker.addEventListener("click", function(){
          that.map.openInfoWindow(infoWindow,point); //开启信息窗口
        });
        that.map.addOverlay(marker);
      }
    },

  }
}
