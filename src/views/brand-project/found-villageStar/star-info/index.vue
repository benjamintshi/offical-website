<template>
  <ul class="star-info">
      <li class="star-info-nav">
        品牌项目 > 河南 > 村宝 > 最美村宝
      </li>
    <li class="base-info">
      <img :src="info.img" alt="">
      <span>{{info.name}}</span>
    </li>
    <img style="height: 6px" src="static/images/villageStar/line.png" alt="">
    <div v-html="content" class="info-content">

    </div>
  </ul>
</template>
<script src="./index.js">

</script>
