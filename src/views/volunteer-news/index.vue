<template>

  <div class="volunteer-news">
    <ul class="volunteer-news-content">
      <p class="title">志愿快讯</p>
      <li class="filter-tool">
        <p> 类 <span style="margin-left: 30px;"></span> 型：
          <span v-for="(item,index) in filterList" :key="index" @click="changType(index)"
                :class="selectedIndex ==index?'active a-hover-style':'a-hover-style'">
            {{item}}
          </span>
        </p>
      </li>
      <li>
        <Row>
          <i-col span="16">
              <ul class="news-list">
                <li v-for="(item,index) in newslist" :key="index">
                  <img :src="item.img" alt="">
                  <div>
                    <p class="title text-ellipsis">{{item.title}}</p>
                    <p class="tag">{{item.tag}}</p>
                    <p class="content">{{item.content}}</p>
                   </div>

                </li>
                <Page v-if="total>6" :total="total" :pageSize="pageSize" prev-text="上一页" next-text="下一页" :current="pageNum" @on-change="changePage"/>

              </ul>
          </i-col>
          <i-col span="8">
                <div class="hot-news">
                  <p class="title">24小时热文</p>
                  <ul>
                    <li class="two-news" v-for="(item1,index1) in newslist.slice(0,2)" :key="index1+10">
                      <img :src="item1.img" alt="">
                      <p>{{item1.title}}</p>
                    </li>
                    <li class="after-news" v-for="(item2,index2) in newslist.slice(3,6)" :key="index2+20">
                      <img :src="item2.img" alt="">
                      <p>{{item2.title}}</p>
                    </li>
                  </ul>
                </div>
            <ul class="recomend">
              <p>精选推荐</p>
              <li v-for="(item,index) in recommend" :key="index" @click="toRecommend(item)">
                <span></span>
                {{item.name}}
              </li>
            </ul>
          </i-col>
        </Row>
      </li>
    </ul>

  </div>


</template>


<script src="./index.js">

</script>
