import constant from "../../utils/constant";
import {ajax_post, ajax_get} from "../../utils/axios.util";

export default {
  data() {
    return {
      adviceList: [],
      menu: [
        {
          name: "资讯",
          id: "a"
        },
        {
          name: "项目",
          id: "b"
        },
        {
          name: "团队",
          id: "c"
        },
      ],
      activeMenu: "a",
      resultList: [],
      newsList: [
        {
          newsCover: '',
          newsTitle: ''
        }
      ],
      activityList: [
        {
        activityCover: '',
        activityName: ''
        }
      ],
      teamList: [
        {
          teamId: 0,
          teamLogo: '',
          teamName: ''
        }
      ],
      inputValue: '',
      searchValue: '',
      pageNum: 1,//当前页码
      pageSize: 12,
      total: 12,
    }
  },
  mounted() {
    this.getAdviceList();
  },
  methods: {
    searchByHotWord(word) {
      this.pageNum = 1;
      this.inputValue = word;
      this.search();
    },
    search() {
      this.searchValue = this.inputValue;
      if (this.activeMenu === "a") {
        this.getNewsList();
      }
      if (this.activeMenu === "b") {
        this.getActivityList();
      }
      if (this.activeMenu === "c") {
        this.getTeamList();
      }
    },
    changePage(page) {
      this.pageNum = page;
      this.search();
    },
    switchMenu(item) {
      this.activeMenu = item.id;
      this.pageNum = 1;
      this.search();
    },
    getAdviceList() {
      ajax_post(constant.api_base_url + '/vSearchWord/queryVSearchWordList', {
        "enableStatus": 1
      }, data => {
        if (data.code !== '200') {
          alert(data.message);
          return;
        }
        this.adviceList = data.data;
      });
    },
    getNewsList() {
      ajax_get(constant.api_base_url + '/news/getPageNewsByKey', {
        "pageNum": this.pageNum,
        "pageSize": 12,
        "key": this.inputValue
      }, data => {
        if (data.code !== '200') {
          alert(data.message);
          return;
        }
        this.total = data.data.total;
        this.newsList = data.data.list;
      });
    },
    getActivityList() {
      ajax_get(constant.api_base_url + '/vActivity/getPageVActivityByKey', {
        "pageNum": this.pageNum,
        "pageSize": 12,
        "key": this.inputValue
      }, data => {
        if (data.code !== '200') {
          alert(data.message);
          return;
        }
        this.total = data.data.total;
        this.activityList = data.data.list;
      });
    },
    getTeamList() {
      ajax_get(constant.api_base_url + '/vTeam/getTeamList', {
        "pageNum": this.pageNum,
        "pageSize": 12,
        "teamName": this.inputValue
      }, data => {
        if (data.code !== '200') {
          alert(data.message);
          return;
        }
        this.total = data.data.total;
        this.teamList = data.data.list;
      });
    },
    toNewsDetail(item){
      this.$router.push({
        name:"trainDetail",
        query: {
          'newsId':item.newsId,
          'newsType':item.newsType
        }
      });
    },
    toActivityDetail(item){
      this.$router.push({
        name:"activityDetail",
        query:{'id':item.id}
      });
    },
    toTeamDetail(item){
         this.$router.push({
         name:"volunteerTeamDetail",
         query:{'teamId':item.teamId}
       });
    }
  }
}
