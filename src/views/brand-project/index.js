import {ajax_get,ajax_post} from "../../utils/axios.util";
import constant from "../../utils/constant";
export default {
  data() {
    return {
      pageSize:10,
      pageNum:1,
      total:0,// 超过16时显示页码
      bandProjectList:[],
      projectList:[
        {
          name:"春雨工程",
          desc:"文化志愿者边疆行",
          url:"http://zhiyuanzhe.culturedc.cn:180/home_show#/home_show/chunyu_show/1"
        },
        {
          name:"春雨工程",
          desc:"文化志愿者边疆行",
          url:"http://zhiyuanzhe.culturedc.cn:180/home_show#/home_show/sunshine_show/1"
        },
        {
          name:"春雨工程",
          desc:"文化志愿者边疆行",
          url:"http://zhiyuanzhe.culturedc.cn:180/home_show#/home_show/dream_show/1"
        }
      ],
      select01:[],
      area:0 ,
      topList:[]
    }
  },
  mounted(){
    this.getCarousels();
    this.getPName();
    this.getBandProject();
  },
  methods:{
    getCarousels(){
      ajax_get(constant.api_base_url + '/vCarouselCommon/getCarousels/'+2 , null, data => {
          if (data.code === "200") {
            this.topList=data.data;
          }
        }
      )
    },
    toLink(item){
      window.open(item.url);
    },
    getPName(){
      ajax_get(constant.api_base_url + '/vArea/getBrandProvinces/'+1 , null, data => {
          if (data.code === "200") {
            this.select01=data.data;
          }
        }
      )
    },
    getBandProject(){
      ajax_get(constant.api_base_url + '/vBrand/getAreaBrands/', {
          pageSize: this.pageSize,
          pageNum:  this.pageNum,
          pCode:  this.area,
        }, data => {
          if (data.code === "200") {
            this.bandProjectList=data.data.list;
            this.total=data.data.total
          }
        }
      )
    },
    toDetail(val){
      window.location.href = val.url
    },
    changePage(val){
      this.pageNum=val;
      this.getBandProject();
    },
  }
}
