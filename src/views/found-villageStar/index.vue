<template>
  <div class="village-star">
    <ul class="village-star-content">
      <img class="top" src="/static/images/villageStar/top.png" alt="">
       <!--筛选地区-->
      <li class="search">
        <p class="title">
          {{query}}
        </p>

        <Row class="filter">
          <i-col span="4" >地区筛选</i-col>
          <i-col span="10">
            <Select v-model="model1" >
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </i-col>
          <i-col span="10">
            <Select v-model="model2" >
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </i-col>
        </Row>

      </li>
      <!--资讯-->
      <li class="news">
        <p class="block-title">
          村宝资讯
          <span>共221条</span>
          <span class="more">更多</span>
        </p>
        <Row class="filter">

          <i-col span="12" v-for="(item,index) in newsList" :key="index" :class="index==newsList.length-1||index==newsList.length-2?'':'addBorder'">
            <router-link :to="item.to" >
              <span class="circle"></span>
              <span class="title">{{item.title}}</span>
              <span class="time">{{item.time}}</span>
            </router-link>
          </i-col>

        </Row>

      </li>
       <!--魅力村宝-->
      <li class="volunteer-video">
        <p class="block-title">
          村宝资讯
          <span>共221条</span>
          <span class="more">更多</span>
        </p>
        <div  v-for="(item,index) in videos" :key="index" @click="watchVideo(item)">
            <img :src="item.cover" alt="">
            <p class="video-title">{{ item.title}}</p>
            <div class="play-cover">
              <img src="/static/images/villageStar/playVideo.png" alt="">
            </div>
        </div>

      </li>
      <!--志愿者风采-->
      <li class="volunteer">
        <p class="block-title">志愿风采
          <span>共221条</span>
          <span class="more">更多</span>
        </p>
        <div  v-for="(item,index) in volunteers" :key="index" :class="(index+1)%4 !=0 ?'right33':''">
          <img :src="item.img" alt="">
          <p>{{item.title}}</p>
          <span>{{item.name}}</span>
        </div>

      </li>
      <!--志愿者排名-->
      <li class="volunteer-vote">
        <Row >
          <i-col span="8" >
            <p class="title">最震撼村宝</p>
            <div class="desc">
              <img src="/static/images/villageStar/zhiyuan.jpg" alt="">
              <div>
                <p>第一名  杨宏宇</p>
                <span>点击详情</span>
              </div>

            </div>
            <div class="desc">
              <img src="/static/images/villageStar/zhiyuan.jpg" alt="">
              <div>
                <p>第一名  杨宏宇</p>
                <span>点击详情</span>
              </div>

            </div>
            <div class="desc">
              <img src="/static/images/villageStar/zhiyuan.jpg" alt="">
              <div>
                <p>第一名  杨宏宇</p>
                <span>点击详情</span>
              </div>

            </div>
          </i-col>
          <i-col span="8" >
            <p class="title">最出彩村宝</p>
            <div class="desc">
              <img src="/static/images/villageStar/zhiyuan.jpg" alt="">
              <div>
                <p>第一名  杨宏宇</p>
                <span>点击详情</span>
              </div>

            </div>
            <div class="desc">
              <img src="/static/images/villageStar/zhiyuan.jpg" alt="">
              <div>
                <p>第一名  杨宏宇</p>
                <span>点击详情</span>
              </div>

            </div>
            <div class="desc">
              <img src="/static/images/villageStar/zhiyuan.jpg" alt="">
              <div>
                <p>第一名  杨宏宇</p>
                <span>点击详情</span>
              </div>

            </div>
          </i-col>
          <i-col span="8" >
            <p class="title">最感动村宝</p>
            <div class="desc">
              <img src="/static/images/villageStar/zhiyuan.jpg" alt="">
              <div>
                <p>第一名  杨宏宇</p>
                <span>点击详情</span>
              </div>

            </div>
            <div class="desc">
              <img src="/static/images/villageStar/zhiyuan.jpg" alt="">
              <div>
                <p>第一名  杨宏宇</p>
                <span>点击详情</span>
              </div>

            </div>
            <div class="desc">
              <img src="/static/images/villageStar/zhiyuan.jpg" alt="">
              <div>
                <p>第一名  杨宏宇</p>
                <span>点击详情</span>
              </div>

            </div>
          </i-col>

        </Row>
      </li>
    </ul>
  </div>

</template>
<script src="./index.js">

</script>
