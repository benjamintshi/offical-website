<template>
  <div class="train-detail team-detail">
    <div class="train-detail-content">
      <p class="detail-nav">
        <span @click="$router.push('activityRecruit')"> 活动招募 </span> >
        <span @click="$router.push('volunteerTeam')"> 志愿团队 </span> > 招募详情
      </p>
      <Row>
        <i-col span="12" class="block1">
          <img :src="detail.teamLogo" alt="">
        </i-col>
        <i-col span="12" class="block2">
          <div class="title">{{detail.teamName}}</div>
          <p>服务主题：{{detail.theme}}</p>
          <p>项目时间：{{detail.activityStartDate}} - {{detail.activityEndDate}}</p>
          <p>服务时间：{{detail.activityTimeBucket}}</p>
          <p>培训对象：{{detail.trainingCrowd}}</p>
          <p>服务方式：{{detail.activityModeName}}</p>
          <p>服务区域：{{detail.activityProvinceName}} {{detail.activityCityName}}</p>
          <p>服务详细地点：{{detail.activityAddr}}</p>
          <p>计划服务人次：{{detail.activityPlanNum}}
            <span class="active-link a-hover-style" style="float: right" @click="agreement.show = true;">志愿服务须知</span>
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
    <Modal v-model="agreement.show" width="600" class="agreement">
      <p slot="header" >
        <span>志愿服务须知</span>
      </p>
      <div v-html="agreement.content">

      </div>
      <div slot="footer">
      </div>
    </Modal>
  </div>
</template>
<script src="./index.js">

</script>
<style >
  .agreement .ivu-modal-footer{
    display: none;
  }
</style>
