<template>
  <div class="train-detail">
    <div class="train-detail-content">
      <p class="detail-nav">
        <span @click="$router.push('activityRecruit')"> 活动招募  </span> > 招募详情
      </p>
      <Row>
        <i-col span="12" class="block1">
          <img :src="detail.activityCover" alt="">
        </i-col>
        <i-col span="12" class="block2">
          <div class="title">{{detail.activityName}}</div>
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
          <div class="block-title">

            <div class="a-hover-style right30" style=" display: inline-block;">查看项目详情</div>
            <span class="a-hover-style active-link" @click="joinAtonce"">立即加入</span>
          </div>
          <img style="height: 6px;width: 100%;" src="static/images/villageStar/line.png" alt="">
          <div class="content">
            <div class="title">招聘岗位</div>
            <p>{{detail.recruitJob}}</p>
          </div>
          <div class="content">
            <div class="title">招聘日期</div>
            <p class="time">{{detail.recruitStartDate}} - {{detail.recruitEndDate}}</p>
          </div>
          <div class="content">
            <div class="title">岗位描述</div>
            <div v-html="detail.recruitJobDes"></div>
          </div>
          <div class="content">
            <div class="title">志愿保障</div>
            <p>{{detail.recruitSecurity}}</p>
          </div>
          <div class="content">
            <div class="title">岗位要求</div>
            <div v-html="detail.recruitJobRequire"></div>
          </div>
        </i-col>
        <i-col span="12" class="block4">
          <p class="block-title" >最新报名
            <span >报备：{{detail.readyNum}}人</span>
            <span class="right30">计划招募：{{detail.recruitPlanNum}}人</span>
            <span class="right30">已报名： {{detail.applyNum}}人</span>

          </p>
          <img style="height: 6px;width: 100%;" src="static/images/villageStar/line.png" alt="">
          <Table :columns="columns1" :data="data1"></Table>

          <!--项目联系-->

          <ul class="block3" style="margin-top: 30px">
            <li class="block-title">
              项目联系
              <img style="height: 6px;width: 100%;" src="static/images/villageStar/line.png" alt="">
            </li>
            <li class="content">
              <p class="title">{{detail.teamName}}</p>
              <p>地址：{{detail.teamAddr}}</p>
            </li>
            <li class="content">
              <p class="title">{{detail.activityContactName}}</p>
              <p>手机：{{detail.activityContactPhone}}</p>
              <p> 邮箱：{{detail.activityContactEmail}}</p>
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
