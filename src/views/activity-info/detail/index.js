export default {

  data() {
    return {
      info:{
        content:"<p>只是测试数据</p>"
      },
      showModal:false
    }
  },
  mounted(){
    var map = new BMap.Map("map");
    let point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 15);
    this.map.enableScrollWheelZoom();
    // 随机向地图添加25个标注
    var bounds = map.getBounds();
    var sw = bounds.getSouthWest();
    var ne = bounds.getNorthEast();
    var lngSpan = Math.abs(sw.lng - ne.lng);
    var latSpan = Math.abs(ne.lat - sw.lat);
    for (var i = 0; i < 2; i ++) {
      let point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
      this.addMarker(map,point);
    }

  },
  methods:{
    // 编写自定义函数,创建标注
    addMarker(map,point){

      let marker = new BMap.Marker(point);
      map.addOverlay(marker);
    }
  },
}
