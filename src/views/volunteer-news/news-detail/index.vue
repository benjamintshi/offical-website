<template>
  <div class="volunteer-info">
    <div class="star-info-nav">
      <span @click="$router.push('volunteerNews')" class="a-hover-style"> 志愿快讯 </span>  > 活动快讯 > 正文
    </div>
    <ul class="volunteer-info-left">
      <li class="base-info">
        <p>{{newsInfo.title}}</p><br/>
        <span class="time">发布时间：{{newsInfo.time}}</span>
      </li>
      <img style="height: 6px;width: 100%" src="static/images/villageStar/line.png" alt="">
      <div v-html="content" class="info-content">
      </div>
    </ul>
    <ul class="volunteer-info-right">
      <p>精选推荐</p>
      <li v-for="(item,index) in recommend" :key="index" @click="toRecommend(item)">
        <span></span>
        {{item.name}}
      </li>
    </ul>
  </div>

</template>
<script src="./index.js">

</script>
