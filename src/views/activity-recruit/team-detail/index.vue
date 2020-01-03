<template>
  <div class="train-detail team-detail">
    <div class="train-detail-content">
      <p class="detail-nav">
        <span @click="$router.push('activityRecruit')"> 活动招募 </span> >
        <span @click="$router.push('volunteerTeam')"> 志愿团队 </span> > 团队详情
      </p>
      <Row>
        <i-col span="12" class="block1">
          <img :src="detail.teamLogo" alt="">
        </i-col>
        <i-col span="12" class="block2">
          <div class="title"><strong>{{detail.teamName}}</strong></div>
          <p>成立日期：{{detail.foundingTime}}</p>
          <p>团队成员：{{detail.teamNum}}人</p>
          <p>上级团队：{{detail.superTeam}}</p>
          <p>服务方式：{{detail.serviceModeName}}</p>
          <p>服务区域：{{detail.provinceName}} {{detail.cityName}}</p>
          <p>服务详细地点：{{detail.address}}</p>
          <p>
            <span class="active-link a-hover-style" style="float: left" @click="agreement.show = true;">志愿服务须知</span>
          </p>
        </i-col>
      </Row>
      <Row>
        <i-col span="12" class="block3">
          <Infodesc :team-detail="detail"></Infodesc>

        </i-col>
        <i-col span="12" class="block4">
          <!--项目联系-->

          <ul class="block3" >
            <li class="block-title">
              项目联系
              <img style="height: 6px;width: 100%;" src="static/images/villageStar/line.png" alt="">
            </li>
            <li class="content">
              <p class="title">{{detail.teamName}}</p>
              <p>地址：{{detail.address}}</p>
            </li>
            <li class="content">
              <p class="title">{{detail.teamContactName}}</p>
              <p>手机：{{detail.teamContactPhone}}</p>
              <p> 邮箱：{{detail.teamContactEmail}}</p>
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
