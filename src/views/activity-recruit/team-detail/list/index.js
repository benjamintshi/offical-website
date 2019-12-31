export default {

  data() {
    return {
      teamId: '22',//团队Id通过url获取，先写死
      teamDesc:"<p>志愿者团队团结、有爱、积极向上，每个人都充满对生活和工作的热情，也希望更多的人参与参加进来成为团队的一份子，让志愿活动越来越好。</p>",
      menuList:[
        {
          name:"团队介绍",
          value:"a"
        },
        {
          name:"招募要求",
          value:"b"
        },
        {
          name:"培训历程",
          value:"c"
        },
        {
          name:"项目历程",
          value:"d"
        }
      ],
      selected:"a",
      baseInfo:{
        trainInfo:"<p>" +
        "1. 主要负责管理图书馆秩序、规则；<br/>" +
        "2. 帮助参与活动的亲子完成诵读活动 </p>",
      },
      trainList:[
        {
          title:"湖南志愿服务主题培训",
          number:200,
          time:100,
          startTime:"2019.07.24",
          endTime:"2019.07.28"
        },
        {
          title:"湖南志愿服务主题培训",
          number:200,
          time:100,
          startTime:"2019.07.24",
          endTime:"2019.07.28"
        },
        {
          title:"湖南志愿服务主题培训",
          number:200,
          time:100,
          startTime:"2019.07.24",
          endTime:"2019.07.28"
        }
      ],
      projectList:[
        {
          title:"湖南志愿服务",
          number:200,
          time:100,
          startTime:"2019.07.24",
          endTime:"2019.07.28"
        },
        {
          title:"湖南志愿服务主题培训",
          number:200,
          time:100,
          startTime:"2019.07.24",
          endTime:"2019.07.28"
        },
        {
          title:"湖南志愿服务主题培训",
          number:200,
          time:100,
          startTime:"2019.07.24",
          endTime:"2019.07.28"
        }
      ]
    }
  }
}
