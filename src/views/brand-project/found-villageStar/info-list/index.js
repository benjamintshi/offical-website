export default {
  data() {
    return {
      info:false,
      volunteers:[ //志愿者风采
      ],
      pageNum:1,//当前页码
      pageSize:16,
      total:16,// 超过16时显示页码
      inputValue:"",
      sortType:'0',
      desc:true //降序
    }
  },
  mounted(){
    this.cityCode = localStorage.getItem('cityCode');
    this.cityCode2 = localStorage.getItem('cityCode2');
    this.getProvinceVolunteerShows();
  },
  methods:{
    // 切换页面时返回当前的页码
    changePage(page){
      this.pageNum = page;
      this.getProvinceVolunteerShows();
    },
    //修改输入框
    changeValue(){
      //this.inputValue为当前数据
      this.getProvinceVolunteerShows();
    },
    filter(){
      this.desc = !this.desc;// true为降序 false为升序
      this.pageNum = 1;
      if(this.desc){
        this.sortType = '0';
      }else{
        this.sortType = '1'
      }
      this.getProvinceVolunteerShows();
    },
    vlounteerDetail(item){
      this.$router.push({
        name:"volunteerInfo",
        query:{'projectId':item.id}
      })
    },
    getProvinceVolunteerShows(){
      var params ={
        'pageNum':this.pageNum ,
        'pageSize':this.pageSize,
        'title':this.inputValue,
        'sortType':this.sortType,
        'cCode':this.cityCode,
        'xCode':this.cityCode2,
      }
      console.log(params)
      var volunteer = {}
      this.http.get('/vProjectAchieve/getProvinceVolunteerShows/41',params).then(res=>{
        this.total = res.data.data.total;
        console.log(res.data)
        this.volunteers= [];
        res.data.data.list.forEach(item => {
          var volunteer = {}
          volunteer.id = item.projectId;
          volunteer.title = item.projectName;
          if(item.attachments.length > 0){
            // console.log(item.attachments[0].l);
            volunteer.img = item.attachments[0].attachmentUrl;
          }else{
            volunteer.img = "static/images/villageStar/zhiyuan.jpg";
          }
          volunteer.name = item.vuser.userName;
          this.volunteers.push(volunteer);
        })
        console.log(this.volunteers);
      })
    }
  }
}
