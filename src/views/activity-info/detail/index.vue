<template>
  <ul class="activity-detail">
    <p class="detail-nav">
      <span @click="$router.push('studyCenter')"> 活动信息 </span> >
       项目详情
    </p>
    <Row>
      <i-col span="13">
        <p class="title">
          {{info.activityName}}
        </p>
        <p class="date">项目时间：{{info.activityStartDate}} - {{info.activityEndDate}}</p>
        <div class="content" v-html="info.activityDes">

        </div>
        <p class="title">服务地点</p>
        <div id="map" ></div>
      </i-col>
      <i-col span="11">
          <div class="base-info">
            <p class="title">相关信息</p>
            <p>志愿者/团队： {{info.activityContactName}}</p>
            <p>项目时间：{{info.activityStartDate}} - {{info.activityEndDate}}</p>
            <p>服务对象：{{info.activityCrowd}}</p>
            <p>服务区域：{{info.activityProvinceName}} {{info.activityCityName}}</p>
            <p>服务主题：{{info.theme}}</p>
            <p>服务时间：{{info.activityTimeBucket}}</p>
            <p>服务方式：{{info.activityMode}}</p>
            <p>详细地址：{{info.activityAddr}}</p>
            <p v-if="info.canCrowdAttend===1 && info.participateFlg!==1 " class="apply a-hover-style" @click="applyActivity">我要参加</p>
            <p class="toDetail a-hover-style" @click="checkRecruitRequirement ">查看招募要求</p>
          </div>

      </i-col>
    </Row>
    <Modal v-model="showModal" width="360" class="applyModal">

      <div style="text-align:center">
        <Icon type="ios-checkmark-circle"  size="60" color="#03be47"/>
        <p style="margin-top:10px;font-weight:400;">报名信息已提交</p>
        <p>请耐心等待审核结果</p>
      </div>
      <div slot="footer">
      </div>
    </Modal>
  </ul>
</template>
<style>
  .content img{
    max-width: 100%;
  }
</style>
<script src="./index.js">

</script>
