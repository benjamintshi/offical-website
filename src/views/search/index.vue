<template>
  <div class="search-pag">
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
            <span v-for="(item,index) in adviceList" :key="index"
                  class="a-hover-style" @click="searchByHotWord(item.name)" >{{item.name}}
            </span>
          </p>
        </div>
      </li>

    </ul>
    <ul class="search-result" v-if="searchValue!='' ">
      <li class="nav">
        <div>
          <p>关于“ <span class="tag">{{searchValue}}</span> ”的搜索结果 </p>
          <p class="menu">
            <span v-for="(item,index) in menu" :key="index" :class="activeMenu == item.id?'active':''"   @click="switchMenu(item)">
                {{item.name}}
            </span>
          </p>
        </div>

      </li>
      <li class="search-result-content" v-show="activeMenu === 'a'">
        <div v-if="newsList.length > 0">
          <Row >
            <i-col span="6" v-for="(item,index) in newsList" :key="index">
              <div @click="toNewsDetail(item)">
              <img :src="item.newsCover" alt="">
              <p>{{item.newsTitle}}</p>
              </div>
            </i-col>
          </Row>
          <Page v-if="total>12" :total="total" :pageSize="pageSize" prev-text="上一页" next-text="下一页" :current="pageNum" @on-change="changePage"/>

        </div>
        <div class="empty" v-else>
          <img src="static/images/common/empty.png" alt="">
          <p>暂无相关内容</p>
        </div>
      </li>

      <li class="search-result-content" v-show="activeMenu === 'b'">
        <div v-if="activityList.length>0">
          <Row >
            <i-col span="6" v-for="(item,index) in activityList" :key="index">
              <div @click="toActivityDetail(item)">
              <img :src="item.activityCover" alt="">
              <p>{{item.activityName}}</p>
              </div>
            </i-col>
          </Row>
          <Page v-if="total>12" :total="total" :pageSize="pageSize" prev-text="上一页" next-text="下一页" :current="pageNum" @on-change="changePage"/>

        </div>
        <div class="empty" v-else>
          <img src="static/images/common/empty.png" alt="">
          <p>暂无相关内容</p>
        </div>
      </li>

      <li class="search-result-content" v-show="activeMenu === 'c'">
        <div v-if="teamList.length > 0">
          <Row >
            <i-col span="6" v-for="(item,index) in teamList" :key="index">
              <div @click="toTeamDetail(item)">
                <img :src="item.teamLogo" alt="">
                <p>{{item.teamName}}</p>
              </div>
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
