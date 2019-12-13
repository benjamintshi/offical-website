<template>

  <div class="volunteer-news star-news-list">
    <ul class="volunteer-news-content">
      <p class="nav a-hover-style"> <span @click="$router.push('brandProject')"> 品牌项目 > 河南 </span> >
        <span @click="$router.push('villageStar')">村宝</span> > 村宝资讯</p>
      <li >
        <div class="search-tool">
          <p>村宝资讯</p>
          <div class="search-input">
            <Icon type="ios-search"  size="20"/>
            <input type="text" placeholder="输入关键字" v-model="inputValue" @change="search()">
          </div>
        </div>

      </li>
      <li>
        <Row>
          <i-col span="16">
            <ul class="news-list ">
              <li v-for="(item,index) in newslist" :key="index" class="a-hover-style" @click="toNewsDetail(item)">
                <img :src="item.img" alt="">
                <div>
                  <p class="title text-ellipsis">{{item.title}}</p>
                  <p class="tag">{{item.tag}}</p>
                  <p class="content" v-html="item.content"></p>
                </div>

              </li>
              <Page v-if="total>6" :total="total" :pageSize="pageSize" prev-text="上一页" next-text="下一页" :current="pageNum" @on-change="changePage"/>

            </ul>
          </i-col>
          <i-col span="8">
            <ul class="recomend">
              <p>精选推荐</p>
              <li v-for="(item,index) in recommend" :key="index" @click="toRecommend(item)" >
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
