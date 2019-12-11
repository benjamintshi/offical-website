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
    function CreateControl() {

      function ZoomControl() {
        // 设置默认停靠位置和偏移量  
        this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
        this.defaultOffset = new BMap.Size(800, 10);
      }
      ZoomControl.prototype = new BMap.Control();
      ZoomControl.prototype.initialize = function(map) {
        // 创建一个DOM元素  
        var div = document.createElement("div");
        // 添加文字说明  
        var form = div.appendChild(document.createElement("form"));
        var input0 = div.appendChild(document.createElement("input"));
        input0.setAttribute("id", "text");
        var input1 = div.appendChild(document.createElement("input"));
        input1.type = "submit";
        input1.value = "search";
        input1.setAttribute("id", "search")
        // 设置样式  
        div.style.cursor = "pointer";
        div.style.border = "0px solid gray";
        div.style.backgroundColor = "white";
        input1.onclick = function() {
          var name=$("#text").val();
          alert(name);
          window.location.href="${pageContext.request.contextPath }/device/devicelist1.do?name="+encodeURIComponent(encodeURIComponent(name,'UTF-8'),'UTF-8');
        }
        map.getContainer().appendChild(div);
        // 将DOM元素返回  
        return div;
      }
      var myZoomCtrl = new ZoomControl();
      // 添加到地图当中  
      map.addControl(myZoomCtrl);
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
