<template>
      <i-col span="16" >
          <ul class="news-list " v-if="newslist.length>0">
            <li v-for="(item,index) in newslist" :key="index" class="a-hover-style" @click="toNewsDetail(item)">
              <div class="img-contain">
                <img :src="item.img" alt="">
              </div>
              <div>
                <p class="title text-ellipsis">{{item.title}}</p>
                <p class="tag">{{item.tag}}</p>
                <p class="content" v-html="item.content"></p>
               </div>

            </li>
            <Page v-if="total>pageSize" :total="total" :pageSize="pageSize" prev-text="上一页" next-text="下一页" :current="pageNum" @on-change="changePage"/>

          </ul>
          <ul v-else class="empty-content news-list">
            暂无数据～
          </ul>
      </i-col>


</template>


<script src="./index.js">

</script>
