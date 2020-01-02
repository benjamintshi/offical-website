export default {
  data(){
    return {
      address_detail: null, //详细地址
      userlocation: {lng: "", lat: ""},
      inputValue:"",
      searchResult:[
        {
          name:"北京市昌平区文化旅游志愿服务活动",
          city:"北京市",
          pri:"北苑"
        },
        {
          name:"北京市昌平区文化旅游志愿服务活动",
          city:"北京市",
          pri:"北苑"
        }
      ],
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

      }],
      markerList:[]
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
      window.toDetail = function (index){
        localStorage.setItem("activeMenu","activityInfo");
          const item = that.searchResult[index];

          that.$router.push({
            name:"activityDetail",
            query:{"itemId":""}
          })
      };
      this.lastInfoBox = null;

      for (let i = 0; i < this.searchResult.length; i ++) {
        let item = this.searchResult[i];
        // debugger
        let point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
        let marker = new BMap.Marker(point);

        let content = '详情'+i;
        let time ="2019.04.13 - 2019.08.29";

        let html = "<div class='marker-detail'><p class='title'>"+ item.name +"</p><p class='time'>"+ time +
          "</p><p class='content text-ellipsis'>"+ content + "</p><p class='toDetail' onclick='toDetail(\""+ i +"\")'> 查看详情</p></div>";
        let infoBox = new BMapLib.InfoBox(that.map,html, {
          boxStyle: {
            // background: "#333333",
            width: "499px",
            height: "273px"
          }
        });
        this.markerList.push({
          marker:marker,
          infoBox:infoBox,
          point:point
        });
        marker.addEventListener("click", function(){
          // that.map.openInfoWindow(infoWindow,point); //开启信息窗口
          that.markerDetail(this,infoBox,point);
        });
        that.map.addOverlay(marker);

      }

    },
    detail(item,index){
      let markerObj = this.markerList[index];
      this.markerDetail(markerObj.marker,markerObj.infoBox,markerObj.point);
    },
    markerDetail(marker,infoBox,point){
      const that = this;
      if(that.lastInfoBox){
        //判断上一个窗体是否存在，若存在则执行close
        that.lastInfoBox.close();
      }
      that.lastInfoBox = infoBox;
      infoBox.open(marker);
      that.map.centerAndZoom(point,15);
    }

  }
}
