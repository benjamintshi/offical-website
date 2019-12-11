<template>
  <div class="train-detail">
    <div class="train-detail-content">
      <p class="detail-nav">
        <span @click="$router.push('studyCenter')"> 学习园地 </span> >
        <span @click="$router.push('cultivateList')"> 线下培训 </span> > 培训详情
      </p>
      <Row>
        <i-col span="12" class="block1">
          <img src="static/images/villageStar/zhiyuan.jpg" alt="">
        </i-col>
        <i-col span="12" class="block2">
          <div class="title">培训主题</div>
          <p>培训类型：岗位培训</p>
          <p>培训方式：面授培训</p>
          <p>开课时间：2019.03.01 - 2019.06.01   共60学时</p>
          <p>培训对象：亲子</p>
          <p>培训讲师：讲师姓名</p>
          <p>培训区域：陕西省 韩城市</p>
          <p>培训详细地点：韩城市太史大街文化馆</p>
          <p>计划培训人数：100人</p>
        </i-col>
      </Row>
      <Row>
        <i-col span="12" class="block3">
          <p class="block-title" >详情介绍 <span class="a-hover-style">立即报名</span></p>
          <img style="height: 6px;width: 100%;" src="static/images/villageStar/line.png" alt="">
          <div class="content">
            <div class="title">培训详情</div>
            <div v-html="baseInfo.trainInfo">
            </div>
          </div>
          <div class="content">
            <div class="title">报名日期</div>
              <p class="time">2019.03.01 - 2019.06.01</p>
          </div>
          <div class="content">
            <div class="title">报名要求</div>
            <div v-html="baseInfo.trainInfo">
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
