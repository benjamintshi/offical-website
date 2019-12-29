
export default {
  data() {
    return {
      // 从上往下，模块一



    }

  },
  mounted(){
    this.getActivityMap()
  },
  methods:{
    toQuery(){
      localStorage.setItem("activeMenu","");
      this.$router.push('queryInfo');
    },
    // 编写自定义函数,创建标注
    addMarker(map,point){
      // debugger
      let marker = new BMap.Marker(point);
      map.addOverlay(marker);
    },
    getActivityMap(){
      var params = {
        pageNum:'1',
        pageSize:10
      }
      this.http.get('/vActivity/getActivityMap',params).then(res=>{
        // console.log(res.data.data)
        let map = new BMap.Map("allmap");
        var isfirst = true;
        res.data.data.forEach(item => {
            if(item.activityLongitude && item.activityLatitude){
                // console.log(item.activityLongitude + " - "+ item.activityLatitude)
                let point = new BMap.Point(item.activityLongitude, item.activityLatitude);
                if(isfirst){
                  map.centerAndZoom(point, 15);
                  map.enableScrollWheelZoom();
                  isfirst = false;
                }
                this.addMarker(map,point);
            }
        })
        const that = this;
        map.addEventListener("click", function(){
          that.$router.push('map')
        });
      })
    },
  }
}
