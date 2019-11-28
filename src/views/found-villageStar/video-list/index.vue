<template>
  <div class="video-list">
    <!--<img class="top-bg" src="/static/images/villageStar/top2.png" alt="">-->
    <ul class="video-list-top">
      <p class="nav">品牌项目 > 河南 > 村宝 > 志愿风采</p>
      <li class="search">
        <p>志愿风采</p>
        <!--<i-input placeholder="Enter name" style="width: auto">-->
           <!--<Icon type="ios-search" slot="prefix" />-->
        <!--</i-input>-->
        <div class="search-input">
          <Icon type="ios-search"  size="20"/>
          <input type="text" placeholder="输入关键字" v-model="inputValue" @change="changeValue()">
        </div>
      </li>
    </ul>
    <ul class="video-list-content">
      <li class="volunteer">
        <p class="filter" @click="filter">
          按时间排序 <img src="/static/images/villageStar/filter.png" alt="">
        </p>
        <div  v-for="(item,index) in volunteers" :key="index" :class="(index+1)%4 !=0 ?'right14':''">
          <img :src="item.img" alt="">
          <p>{{item.title}}</p>
          <span>{{item.name}}</span>
        </div>
        <Page v-if="total>16" :total="total" prev-text="上一页" next-text="下一页" :current="pageNum" @on-change="changePage"/>
      </li>
    </ul>
  </div>
</template>
<script src="./index.js">

</script>
