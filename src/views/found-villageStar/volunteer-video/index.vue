<template>
  <div class="volunteer-video">
    <ul class="volunteer-video-content" v-show="info">
      <li class="volunteer-video-nav">
        品牌项目 > 地方品牌项目 > 河南 > 魅力村宝 > 详情
      </li>
      <li class="video">
        <video :src="info.url" :poster="info.cover" controls>
        </video>

      </li>
    </ul>
    <div class="volunteer-video-info" v-show="info">
      <ul class="volunteer-video-content">
        <p class="title">{{info.title}}</p>
        <p class="time">发布时间： {{info.time}}</p>
        <p class="info">{{info.desc}}</p>
        <li class="volunteer">
          <p class="title">
            相关视频
          </p>
          <div  v-for="(item,index) in volunteers" :key="index" :class="(index+1)%4 !=0 ?'right46':''">
            <img :src="item.img" alt="">
            <p>{{item.title}}</p>
            <span>{{item.name}}</span>
          </div>

        </li>
      </ul>

    </div>
  </div>

</template>
<script src="./index.js">

</script>
