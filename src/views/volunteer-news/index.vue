<template>

  <div class="volunteer-news">
    <ul class="volunteer-news-content">
      <p class="title">志愿快讯</p>
      <li class="filter-tool">
        <div class="tool">类 <span style="margin-left: 30px;"></span> 型：
          <span v-for="(item,index) in filterList" :key="index" @click="changeFilter(index)"
                :class="selectedIndex ==index?'active a-hover-style':'a-hover-style'" >
            {{item}}
          </span>
        </div>
        <p class="tool" v-if="selectedIndex == 1"> 分<span style="margin-left: 30px;"></span> 类：
          <span v-for="(item,index) in typeList" :key="index" @click="changeType(item)"
                :class="selectType ==item.value?'active a-hover-style':'a-hover-style'" >
            {{item.name}}
          </span>
        </p>
      </li>
      <li>
        <Row>
          <!--活动快讯-->
          <ServiceInfo v-if="selectedIndex == 0 "> </ServiceInfo>
          <!-- 政策文件 -->
          <PolicyFiles v-else-if="selectedIndex == 1"> </PolicyFiles>
          <!--培训资讯-->
          <TrainNews v-else></TrainNews>

          <i-col span="8">
                <div class="hot-news">
                  <p class="title">24小时热文</p>
                  <ul>
                    <li class="two-news a-hover-style" v-for="(item1,index1) in newslist.slice(0,2)" :key="index1+10">
                      <img :src="item1.img" alt="" onerror="this.src='http://zgwhzyz.bjbsh.com:180/show/img/loadingImage.jpg'">
                      <p>{{item1.title}}</p>
                    </li>
                    <li class="after-news a-hover-style" v-for="(item2,index2) in newslist.slice(2,5)" :key="index2+20">
                      <img :src="item2.img" alt="" onerror="this.src='http://zgwhzyz.bjbsh.com:180/show/img/loadingImage.jpg'">
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
