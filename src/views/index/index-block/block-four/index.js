
export default {
  data() {
    return {
      // 从上往下，模块一



    }

  },
  mounted(){
    let map = new BMap.Map("allmap");
    let point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom();
    // 随机向地图添加25个标注
    let bounds = map.getBounds();
    let sw = bounds.getSouthWest();
    let ne = bounds.getNorthEast();
    let lngSpan = Math.abs(sw.lng - ne.lng);
    let latSpan = Math.abs(ne.lat - sw.lat);
    for (var i = 0; i < 25; i ++) {
      let point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
      this.addMarker(map,point);
    }
    const that = this;
    map.addEventListener("click", function(){
      that.$router.push('map')
    });
  },
  methods:{
    // 首页切换志愿快讯和政策文件，name为菜单名字
    swtichOne(name){

    },
    // 编写自定义函数,创建标注
    addMarker(map,point){
      debugger
      let marker = new BMap.Marker(point);
      map.addOverlay(marker);
    }
  }
}
