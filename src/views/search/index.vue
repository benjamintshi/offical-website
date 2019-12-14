<template>
  <div class="search">
    <ul class="search-top">
      <li class="search-input-content">
        <img class="bg" src="static/images/common/search-bg.png" alt="">

        <div class="search-block">
          <p style="font-size:28px;text-align: center">搜索</p>
          <div class="search-input">
            <input type="text" placeholder="输入关键字" v-model="inputValue"  @keyup.enter="search">
            <Icon type="ios-search" color="#818282" size="28" @click="search"/>
          </div>
          <p>
            可能感兴趣：
            <span v-for="(item,index) in adviceList" :key="index">{{item}}</span>
          </p>
        </div>
      </li>

    </ul>
    <ul class="search-result">
      <li class="nav">
        <div v-if="seachValue">
          <p>关于“<span class="tag">{{seachValue}}</span>”的搜索结果 </p>
          <p class="menu">
            <span v-for="(item,index) in menu" :key="index" :class="activeMenu == item.id?'active':''">
                {{item.name}}
            </span>
          </p>
        </div>

      </li>
      <li class="search-result-content">
        <div v-if="resultList.length>0">
          <Row >
            <i-col span="6" v-for="(item,index) in resultList" :key="index">
              <img :src="item.img" alt="">
              <p>{{item.title}}</p>
            </i-col>
          </Row>
          <Page v-if="total>12" :total="total" :pageSize="pageSize" prev-text="上一页" next-text="下一页" :current="pageNum" @on-change="changePage"/>

        </div>
        <div class="empty" v-else>
          <img src="static/images/common/empty.png" alt="">
          <p>暂无相关内容</p>
        </div>
      </li>
    </ul>
  </div>

</template>
<script src="./index.js"></script>
