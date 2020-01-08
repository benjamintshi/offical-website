import format from '@/utils/format.js'
export default {
  data() {
    return {//详情介绍
      activityId: '',
      detail:{},
      baseInfo: {
        trainInfo: "<p>" +
          "1. 主要负责管理图书馆秩序、规则；<br/>" +
          "2. 帮助参与活动的亲子完成诵读活动 </p>",
      },
      columns1: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '岗位',
          key: 'title'
        },
        {
          title: '服务时间',
          key: 'date'
        }
      ],
      data1: [
        {
          name: 'John Brown',

          title: '志愿者',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          title: '志愿者',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          title: '志愿者',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          title: '志愿者',
          date: '2016-10-04'
        }
      ],
      agreement: {
        content: "用户须知用户须知用户须知",
        show: false
      }
    }
  },
  mounted() {
    let id = this.$route.query.itemId
    this.activityId = id
    this.getVActivityById();
  },
  methods: {
    joinAtonce() {
      this.$router.push({
        name: 'volunteerApply',
        query: {
          'itemId': this.activityId,
          'type': 1
        }
      })
    },
    getVActivityById(){
      this.http.get('/vActivity/getVActivityById/'+ this.activityId).then(res=>{
        console.log(res.data)
        var rdata = res.data.data;
        if(rdata){
          this.detail = rdata;
          this.detail.activityStartDate = format(rdata.activityStartDate,'YYYY.MM.DD');
          this.detail.activityEndDate = format(rdata.activityEndDate,'YYYY.MM.DD');
          this.detail.recruitStartDate = format(rdata.recruitStartDate,'YYYY.MM.DD');
          this.detail.recruitEndDate = format(rdata.recruitEndDate,'YYYY.MM.DD');
          // 服务方式 0：现场 1：线上
          if(rdata.activityMode == '0'){
            this.detail.activityModeName = '现场'
          }else{
            this.detail.activityModeName = '线上'
          }
          this.getPageActivityNormalMember();
        }

      })
    },
    getPageActivityNormalMember(){
      var params ={
        'pageNum':1,
        'pageSize':5,
        'activityId':this.activityId
      }
      this.http.get('/vActivityMember/getPageActivityNormalMember', params).then(res=>{
        this.data1= [];
        this.total = res.data.data.total;
        console.log(res.data.data)
        res.data.data.list.forEach(item => {
          var news ={};
          news.id = item.id;
          news.name = item.userName;
          news.title = item.job;
          news.date =  format(item.applyDate,'YYYY-MM-DD');
          this.data1.push(news);
        })
      })
    },
    toDetail(){
      this.$router.push({
        name:"activityDetail",
        query:{
          'itemId':""
        }
      })
    }
  }
}

