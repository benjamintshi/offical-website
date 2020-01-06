<template>
  <div class="train-detail">
    <div class="train-detail-content">
      <p class="detail-nav">
        <span @click="$router.push('studyCenter')"> 学习园地 </span> >
        <span @click="$router.push('cultivateList')"> 线下培训 </span> > 培训详情
      </p>
      <Row>
        <i-col span="12" class="block1">
          <img :src="trainInfo.trainingCover" alt="">
        </i-col>
        <i-col span="12" class="block2">
          <div class="title">培训主题</div>
          <p>培训类型：{{trainInfo.trainingType}}</p>
          <p>培训方式：{{trainInfo.trainingMode}}</p>
          <p>开课时间：{{trainInfo.trainingStartDate}} - {{trainInfo.trainingEndDate}}    共{{trainInfo.trainingSumHour}}学时</p>
          <p>培训对象：{{trainInfo.trainingCrowd}}</p>
          <p>培训讲师：{{trainInfo.trainingTeacher}}</p>
          <p>培训区域：{{trainInfo.trainingProvinceName}} {{trainInfo.trainingCityName}}</p>
          <p>培训详细地点：{{trainInfo.trainingAddr}}</p>
          <p>计划培训人数：{{trainInfo.trainingPlanNum}}</p>
        </i-col>
      </Row>
      <Row>
        <i-col span="12" class="block3">
          <p class="block-title" >详情介绍<span class="a-hover-style" @click="$router.push({name:'volunteerApply',query:{'itemId':trainningId,type:3}})">立即报名</span></p>
          <img style="height: 6px;width: 100%;" src="static/images/villageStar/line.png" alt="">
          <div class="content">
            <div class="title">培训详情</div>
            <div v-html="trainInfo.trainingDes">
            </div>
          </div>
          <div class="content">
            <div class="title">报名日期</div>
              <p class="time">{{trainInfo.trainingApplyStartDate}} - {{trainInfo.trainingApplyEndDate}}</p>
          </div>
          <div class="content">
            <div class="title">报名要求</div>
            <div v-html="trainInfo.trainingApplyDes">
            </div>
          </div>
        </i-col>
        <i-col span="12" class="block4">
          <p class="block-title" >最新报名
            <span >实际报名：  100人</span>
            <span >计划培训：  100人</span>
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
                <p class="title">{{trainInfo.teamName}}</p>
                <p>地址：{{trainInfo.teamAddr}}</p>
              </li>
              <li class="content">
                <p class="title">{{trainInfo.trainingContactName}}</p>
                <p>手机：{{trainInfo.trainingContactPhone}}</p>
                <p> 邮箱：{{trainInfo.trainingContactEmail}}
                </p>
              </li>
            </ul>


        </i-col>
      </Row>
    </div>

  </div>
</template>
<style>
  .content img{
    max-width: 100%;
  }
</style>
<script src="./index.js">

</script>
