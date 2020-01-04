<template>
  <div class="brand-project">
    <img src="static/images/villageStar/top4.png" alt="">
    <p>国家级示范项目</p>
    <div class="project">
      <Row>
        <i-col span="8" v-for="(item,index) in projectList" :key="index">
          <div class="a-hover-style" @click="toLink(item)">
            <div class="icon">
              <img :src="'static/images/villageStar/icon'+(index+1)+'.png'" alt="">
            </div>
            <p>{{item.name}}</p>
            <p> {{item.desc}}</p>

          </div>
        </i-col>

      </Row>
    </div>
    <p>
      地方品牌项目
      <Select  v-model="area" style="width: 100px;display: inline-block;margin-left: 23px;">
        <Option v-for="item in select01" :value="item.areaCode" :key="item.areaCode">{{ item.areaName }}</Option>
      </Select>
    </p>
    <div class="local-project">
      <router-link to="villageStar">
        <img src="static/images/common/test1.png" alt="" style="height: 276px;">
        <div class="word-bg">
          <p>春晚</p>
        </div>
      </router-link>
      <router-link to="villageStar">
        <img src="static/images/common/test.png" alt="" style="height: 276px;">
        <div class="word-bg">
           <p>村宝</p>
        </div>
      </router-link>
    </div>

  </div>
</template>
<script src="./index.js">

</script>
