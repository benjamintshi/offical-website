export default {
    data(){
      return {
        // 筛选条件
        query:"全部",
        cityList: [
          {
            value: 'all',
            label: '全部'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
        select01: [],//获取的一级数组数据
        select02: [],//获取的二级数组数据
        indexId:'选择一级菜单',//定义分类一的默认值
        indexId2:'选择二级菜单',
        indexNum:0,//定义一级菜单的下标
        subject: [
          {
            "id": 4101,
            "name": "郑州市",
            "obj": [
              {
                "id": 410101,
                "name": "市辖区",
                "obj": [

                ]
              },
              {
                "id": 410102,
                "name": "中原区",
                "sub": [

                ]
              },
              {
                "id": 410104,
                "name": "管城回族区",
                "obj": [

                ]
              }
            ]
          },
          {
            "id": 4102,
            "name": "开封市",
            "obj": [
              {
                "id": 410201,
                "name": "市辖区",
                "obj": [

                ]
              },
              {
                "id": 410202,
                "name": "龙亭区",
                "obj": [

                ]
              },
              {
                "id": 4102013,
                "name": "顺河区",
                "obj": [

                ]
              }
            ]
          }
        ],
        model1: 'all',
        model2:"all",

        newsList:[  //资讯
          {
            title:"河南省文化和旅游志愿者走进新疆河南省文化和旅游志愿者走进新疆",
            time:"2019.08.22",
            to:"/"
          },
          {
            title:"河南省文化和旅游志愿者走进新疆",
            time:"2019.08.22",
            to:"/"
          },
          {
            title:"河南省文化和旅游志愿者走进新疆",
            time:"2019.08.22",
            to:"/"
          },
          {
            title:"河南省文化和旅游志愿者走进新疆",
            time:"2019.08.22",
            to:"/"
          }
        ],
        volunteers:[ //志愿者风采
          {
            img:"/static/images/villageStar/zhiyuan.jpg",
            title:"河南省志愿服务活动",
            name:"李黄梁",
            id:""
          },
          {
            img:"/static/images/villageStar/zhiyuan.jpg",
            title:"河南省志愿服务活动",
            name:"李黄梁",
            id:""
          },
          {
            img:"/static/images/villageStar/zhiyuan.jpg",
            title:"河南省志愿服务活动",
            name:"李黄梁",
            id:""
          },
          {
            img:"/static/images/villageStar/zhiyuan.jpg",
            title:"河南省志愿服务活动河南省志愿服务活动河南省志愿服务活动",
            name:"李黄梁",
            id:""
          },
          {
            img:"/static/images/villageStar/zhiyuan.jpg",
            title:"河南省志愿服务活动",
            name:"李黄梁",
            id:""
          },
          {
            img:"/static/images/villageStar/zhiyuan.jpg",
            title:"河南省志愿服务活动",
            name:"李黄梁",
            id:""
          }
        ],
        videos:[ //视频
          {
            id:"1",
            cover:"/static/images/villageStar/zhiyuan.jpg",
            title:"河南省志愿活动相关花絮",
            time:"2019.04.18",
            desc:"河南省发布相关志愿活动，在活动中志愿者积极参与，活动效果非常好也有很了很大的收获。"
          },
          {
            id:"2",
            cover:"/static/images/villageStar/zhiyuan.jpg",
            title:"河南省志愿活动相关花絮",
            time:"2019.04.18",
            desc:"河南省发布相关志愿活动，在活动中志愿者积极参与，活动效果非常好也有很了很大的收获。"
          },
          {
            id:"3",
            cover:"/static/images/villageStar/zhiyuan.jpg",
            title:"河南省志愿活动相关花絮",
            time:"2019.04.18",
            desc:"河南省发布相关志愿活动，在活动中志愿者积极参与，活动效果非常好也有很了很大的收获。"
          },
          {
            id:"4",
            cover:"/static/images/villageStar/zhiyuan.jpg",
            title:"河南省志愿活动相关花絮",
            time:"2019.04.18",
            desc:"河南省发布相关志愿活动，在活动中志愿者积极参与，活动效果非常好也有很了很大的收获。"
          },
          {
            id:"4",
            cover:"/static/images/villageStar/zhiyuan.jpg",
            title:"河南省志愿活动相关花絮",
            time:"2019.04.18",
            desc:"河南省发布相关志愿活动，在活动中志愿者积极参与，活动效果非常好也有很了很大的收获。"
          },
          {
            id:"4",
            cover:"/static/images/villageStar/zhiyuan.jpg",
            title:"河南省志愿活动相关花絮",
            time:"2019.04.18",
            desc:"河南省发布相关志愿活动，在活动中志愿者积极参与，活动效果非常好也有很了很大的收获。"
          },
          {
            id:"4",
            cover:"/static/images/villageStar/zhiyuan.jpg",
            title:"河南省志愿活动相关花絮",
            time:"2019.04.18",
            desc:"河南省发布相关志愿活动，在活动中志愿者积极参与，活动效果非常好也有很了很大的收获。"
          },
          {
            id:"4",
            cover:"/static/images/villageStar/zhiyuan.jpg",
            title:"河南省志愿活动相关花絮",
            time:"2019.04.18",
            desc:"河南省发布相关志愿活动，在活动中志愿者积极参与，活动效果非常好也有很了很大的收获。"
          }
        ],
        currentPlay:""//当前播放的视频index


      }
    },
  mounted(){
    this.select01 = this.subject;
    this.indexSelect01();
    console.log(this.select01);
  },
  watch:{
    indexId(val,oldVal){
      this.indexSelect01();
    }
  },
  methods:{
    watchVideo(item){
      this.$router.push({
        name:"volunteerVideo",
        params:item
      })
    },
    vlounteerDetail(item){
      this.$router.push({
        name:"volunteerInfo",
        params:item
      })
    },
    indexSelect01(){
      let i = 0;
      for (i = 0;i<this.select01.length;i++) {
        if (this.select01[i].id == this.indexId){
          this.indexNum = i;
          break
        }
      }
      this.select02 = this.select01[this.indexNum].obj;
      console.log(this.select02);
    }
  }

}
