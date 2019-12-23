<template>
  <ul class="other">
    <p class="title">个人消息</p>
      <li v-for="(item,index) in newslist" :key="index">
        <div v-if="item.status ==1 ">
          <p>{{item.title}}</p>
          <p class="time">{{item.sendDate}}</p>
          <img style="height: 6px;width: 100%" src="static/images/villageStar/line.png" v-if="index != newslist.length-1">
        </div>
        <div v-else>
          <p>{{item.title}}</p>
          <div v-if="item.spread">
            <p class="time"> {{item.repeatTtile}}</p>
            <p class="time">{{item.time}}</p>
              <div class="detail-content">
                <p>
                  <span class="time">{{item.author}}</span>
                  {{item.repeat}}
                </p>
                <p class="time">{{item.repeatTime}}</p>
              </div>
          </div>
          <div v-else>
            <p class="spread" @click="spread(item)"> 查看</p>
            <p class="time">{{item.time}}</p>
          </div>

          <img style="height: 6px;width: 100%" src="static/images/villageStar/line.png" v-if="index != newslist.length-1">
        </div>

      </li>
    <div style="float: right;margin-top:-1em; ">
      <a class="loadMore" v-if="!isMost" @click="loadMore">查看更多...</a>
    </div>
  </ul>
</template>
<script src="./index.js">

</script>
