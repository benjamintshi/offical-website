<template>
  <div class="train-detail team-detail">
    <div class="train-detail-content">
      <p class="detail-nav">
        <span @click="$router.push('activityRecruit')"> 活动招募 </span> >
        <span @click="$router.push('volunteerTeam')"> 志愿团队 </span> > 招募详情
      </p>
      <Row>
        <i-col span="12" class="block1">
          <img src="static/images/villageStar/zhiyuan.jpg" alt="">
        </i-col>
        <i-col span="12" class="block2">
          <div class="title">【123231】韩城市司马迁图书馆举办亲子诵读经典活动</div>
          <p>服务主题：学雷锋活动</p>
          <p>项目时间：2019.03.01 - 2019.06.01</p>
          <p>服务时间：9:00 - 12:00    15:00 - 17:00</p>
          <p>培训对象：亲子</p>
          <p>服务方式：线下</p>
          <p>服务区域：陕西省 韩城市</p>
          <p>服务详细地点：韩城市太史大街文化馆</p>
          <p>计划服务人次：10万人次
            <span class="active-link" style="float: right">志愿服务须知</span>
          </p>
        </i-col>
      </Row>
      <Row>
        <i-col span="12" class="block3">
          <Infodesc></Infodesc>

        </i-col>
        <i-col span="12" class="block4">
          <!--项目联系-->

          <ul class="block3" >
            <li class="block-title">
              项目联系
              <img style="height: 6px;width: 100%;" src="static/images/villageStar/line.png" alt="">
            </li>
            <li class="content">
              <p class="title">中国旅游志愿者大连中山支队</p>
              <p>地址：辽宁省大连市中山区一德街83号</p>
            </li>
            <li class="content">
              <p class="title">栾胜刚</p>
              <p>手机：13940938832</p>
              <p> 邮箱：luanshenggang@126.com</p>
            </li>
          </ul>


        </i-col>
      </Row>
    </div>

  </div>
</template>
<script src="./index.js">

</script>

