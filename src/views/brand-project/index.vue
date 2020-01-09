<template>
  <div class="brand-project">
    <!--<img src="static/images/villageStar/top4.png" alt="">-->
    <Carousel autoplay v-model="value1" loop class="img-list">
      <CarouselItem v-for="(item,index) in topList" :key="index">
        <div class="demo-carousel"  @click="toculDetail(item)"><img :src="item.url" alt=""></div>
      </CarouselItem>
    </Carousel>
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
        <Option v-for="item in select01" :value="item.areaCode" :key="item.areaCode" >{{ item.areaName }}</Option>
      </Select>
    </p>
    <ul>
      <li>
        <div class="local-project">
          <div v-for="(item,index) in bandProjectList" :key="index" @click="toDetail(item)">
            <div class="img-contain">
              <img :src="item.bannerUrl" alt="" >
            </div>
            <div class="word-bg">
              <p>{{item.brandTitle}}</p>
            </div>
          </div>
        </div>
        <Page v-if="total>9" :total="total" :pageSize="pageSize" prev-text="上一页" next-text="下一页" :current="pageNum" @on-change="changePage"/>
      </li>
    </ul>
  </div>

</template>
<script src="./index.js">

</script>
