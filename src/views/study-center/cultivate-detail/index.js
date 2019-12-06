export default {

  data() {
    return {//详情介绍
      baseInfo:{
        trainInfo:"<p>" +
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
      ]
    }
  },
  methods:{

  }
}
