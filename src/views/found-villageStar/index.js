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
    }
  }

}
