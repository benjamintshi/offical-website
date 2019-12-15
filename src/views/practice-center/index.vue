<template>

  <div class="volunteer-news practice-center">
    <div class="volunteer-news-content">
        <p class="title">新时代文明实践中心</p>
        <ul class="news-list ">
          <li v-for="(item,index) in newslist" :key="index" class="a-hover-style" @click="toNewsDetail(item)">
            <img :src="item.img" alt="">
            <div>
              <p class="title text-ellipsis">{{item.title}}</p>
              <p class="tag">{{item.tag}}</p>
              <p class="content" v-html="item.content"></p>
            </div>

          </li>
          <Page v-if="total>pageSize" :total="total" :pageSize="pageSize" prev-text="上一页" next-text="下一页" :current="pageNum" @on-change="changePage"/>

        </ul>

    </div>

  </div>


</template>


<script src="./index.js">

</script>
