<template>
  <ul class="activity-detail">
    <p class="detail-nav">
      <span @click="$router.push('studyCenter')"> 活动信息 </span> >
       项目详情
    </p>
    <Row>
      <i-col span="13">
        <p class="title">
          韩城市司马迁图书馆举办亲子诵读经典活动
        </p>
        <p class="date">项目时间：2019.07.01 - 2019.07.10</p>
        <div class="content" v-html="info.content">

        </div>
        <p class="title">服务地点</p>
        <div id="map" ></div>
      </i-col>
      <i-col span="11">
          <div class="base-info">
            <p class="title">相关信息</p>
            <p>志愿者/团队： 梁建利</p>
            <p>项目时间：2019.03.01 - 2019.06.01</p>
            <p>服务对象：亲子</p>
            <p>服务区域：河北省 保定市</p>
            <p>服务主题：学雷锋活动</p>
            <p>服务时间：9:00 - 12:00   14:00 - 16:00</p>
            <p>服务方式：现场</p>
            <p>详细地址：河北省保定市阜平县</p>

            <p class="apply a-hover-style">我要参加</p>
            <p class="toDetail a-hover-style">查看招募要求</p>
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
<script src="./index.js">

</script>
