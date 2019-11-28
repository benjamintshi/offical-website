<template>
  <div class="volunteer-info">
    <div class="star-info-nav">
      品牌项目 > 地方品牌项目 > 河南 > 志愿风采 > 正文详情
    </div>
    <ul class="volunteer-info-left">


      <li class="base-info">
        <p>{{info.name}}</p><br/>
        <span class="time">发布时间：{{info.time}}</span>
      </li>
      <img style="height: 6px;width: 100%" src="/static/images/villageStar/line.png" alt="">
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
