<template>
  <section>
    <p class="block-title" >

            <span :class="selected ==item.value? 'a-hover-style right30 active':'a-hover-style right30'"
                  v-for="(item,index) in menuList" :key="index" @click="selected =item.value ">
              {{item.name}}
            </span>
      <span class="a-hover-style active-link" @click="$router.push('volunteerApply')">立即加入</span>
    </p>
    <img style="height: 6px;width: 100%;" src="static/images/villageStar/line.png" alt="">
    <section v-if=" selected == 'a'">
      <div class="content" v-html="teamDesc">

      </div>
    </section>
    <!--团队介绍-->
    <section v-else-if="selected == 'b'">
      <div class="content">
        <div class="title">招聘岗位</div>
        <p>志愿者</p>
      </div>
      <div class="content">
        <div class="title">招聘日期</div>
        <p class="time">2019.03.01 - 2019.06.01</p>
      </div>
      <div class="content">
        <div class="title">岗位描述</div>
        <div v-html="baseInfo.trainInfo"></div>
      </div>
      <div class="content">
        <div class="title">志愿保障</div>
        <p>专项培训     其他</p>
      </div>
      <div class="content">
        <div class="title">岗位要求</div>
        <div v-html="baseInfo.trainInfo"></div>
      </div>
    </section>
    <section v-else-if="selected =='c'">
      <div v-for="(item,index) in trainList" :key="index" class="content needBoder">
        <p class="title">{{item.title}}</p>
        <p class="time">参与培训人数：{{item.number}} <span>培训时长：{{item.time}}小时</span></p>
        <p class="date">{{item.startTime}} - {{item.endTime}}</p>
      </div>

    </section>
    <section v-else>
      <div v-for="(item,index) in projectList" :key="index" class="content needBoder">
        <p class="title">{{item.title}}</p>
        <p class="time">参与培训人数：{{item.number}} <span>培训时长：{{item.time}}小时</span></p>
        <p class="date">{{item.startTime}} - {{item.endTime}}</p>
      </div>

    </section>

  </section>

</template>
<script src="./index.js">

</script>
