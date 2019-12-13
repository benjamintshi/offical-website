<template>
  <ul class="other">
    <p class="title">通知公告</p>
    <li v-for="(item,index) in newslist" :key="index">

        <p>{{item.title}}</p>
        <p class="time">{{item.time}}</p>
        <img style="height: 6px;width: 100%" src="static/images/villageStar/line.png" v-if="index != newslist.length-1">

    </li>
  </ul>
</template>
<script src="./index.js">

</script>
