<template>

  <div class="volunteer-news literature-list">
    <ul class="volunteer-news-content">
      <p class="title">理论文献</p>
      <li>
        <Row>
          <i-col span="16">
            <ul class="policy-files-list">
              <li v-for="(item,index) in newslist" :key="index" class="a-hover-style"  @click="toDetail(item)">
                <p>{{item.title}}</p>
                <p>出台日期：{{item.time}}<span>{{item.office}}</span></p>
              </li>
              <Page v-if="total>6" :total="total" :pageSize="pageSize" prev-text="上一页" next-text="下一页" :current="pageNum" @on-change="changePage"/>

            </ul>

          </i-col>
          <i-col span="8">
            <ul class="recomend" style="margin-top: 0px;">
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
