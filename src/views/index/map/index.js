import format from '@/utils/format.js'
export default {
  data(){
    return {
      address_detail: null, //详细地址
      userlocation: {lng: "", lat: ""},
      inputValue:"",
      inputValue2:"",
      valueArea:[],
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
      data: [],
      markerList:[]
    }
  },
  mounted(){
    this.getPageVActivity();
  },
  created() {
    this.getFirstData();//请求加载第一层数据
  },
  methods:{
    changeCity(value,selectedData){
      if(selectedData.length < 3){
        this.valueArea = []
      }else {
        this.valueArea = selectedData;
      }
      // console.log(this.valueArea);
      // console.log(selectedData);
    },
    getFirstData() { //请求加载第一层数据
        this.http.get('/vArea/getProvinces/1').then(res=>{
          // console.log(res.data.data)
          this.data = []
          res.data.data.forEach(item => {
            var area ={};
            area.value = item.areaCode;
            area.level = 1;
            area.label = item.areaName;
            if( area.value != '0'){
              area.children = [];
              area.loading = false;
            }
            this.data.push(area);
          })
        })
    },
    getPageVActivity() { //APP分页根据关键字查询活动列表
      var params ={
        activityName:this.inputValue,
        pageNum:'1',
        pageSize:10
      }
      // console.log(this.valueArea)
      // console.log(this.valueArea.length)
      if(this.valueArea.length > 1){
          params.activityProvinceCode = this.valueArea[0].value
          params.activityCityCode = this.valueArea[1].value
          params.activityCountyCode =this.valueArea[2].value
      }
      this.http.get('/vActivity/getPageVActivity',params).then(res=>{
        // console.log(res.data.data)
        this.searchResult = []
        res.data.data.list.forEach(item => {
          var area ={};
          area.name = item.activityName;
          area.city = item.activityProvinceName + item.activityCityName;
          area.pri = item.activityCountyName + item.activityAddr;
          area.id = item.id;
          area.activityDes = item.activityDes;
          area.activityStartDate = format(item.activityStartDate,'YYYY.MM.DD HH:mm');
          area.activityEndDate = format(item.activityEndDate,'YYYY.MM.DD HH:mm');
          area.activityLongitude = item.activityLongitude;
          area.activityLatitude = item.activityLatitude;
          this.searchResult.push(area);
        })
        console.log(this.searchResult[0])
        this.$nextTick(function () {
          const  that = this;
          // 创建Map实例
          this.map = new BMap.Map("allmap");
          // 初始化地图,设置中心点坐标，
          var point = new BMap.Point(this.searchResult[0].activityLongitude,this.searchResult[0].activityLatitude); // 创建点坐标，汉得公司的经纬度坐标
          this.map.centerAndZoom(point, 15);
          this.map.enableScrollWheelZoom();

          this.map.addEventListener("click", function(){
            that.showResult = false;
          });
          this.addPoint();
        })
      })
    },
    loadData(item, callback){//异步加载子项
      item.loading = true;
      this.http.get('/vArea/getAllAreas/'+ item.value).then(res=>{
        // console.log(res.data.data)
        item.children =[];
        item.loading = false;
        res.data.data.forEach(item2 => {
          var area ={};
          area.value = item2.areaCode;
          area.label = item2.areaName;
          area.level = item.level + 1;
          if(item.level < 2){
            area.children = [];
            area.loading = false;
          }
          item.children.push(area);
        })
        callback();
      })
    },
    format (labels, selectedData) {
      const index = labels.length - 1;
      return labels[index];
    },
    search(item){
      if(!this.inputValue){
        this.showResult = false;
        return;
      }
      this.inputValue2 = this.inputValue;
      this.getPageVActivity();
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
            query:{"itemId":item.id}
          })
      };
      this.lastInfoBox = null;
      // console.log(this.searchResult.length)
      for (let i = 0; i < this.searchResult.length; i ++) {
        let item = this.searchResult[i];
        // debugger
        let point = new BMap.Point(item.activityLongitude, item.activityLatitude);
        let marker = new BMap.Marker(point);

        let content = item.activityDes;
        let time =item.activityStartDate + " - " + item.activityEndDate;

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
