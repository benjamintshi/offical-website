<template>
  <div class="cultivate-list">
    <ul class="cultivate-list-content">
      <p class="title">线下培训</p>
      <li class="filter-tool">
        <div>
          <p> <span style="margin-right: 35px">区</span>域：</p>
          <div class="selectCity ">
            <span v-for="(item,index) in areaList" :key="index" @click="swtichCity(item)"
                  :class="pCode ==item.areaCode?'a-hover-style active':'a-hover-style'">
              {{item.areaName}}
            </span>
            <!--收起 展开没有效果-->
           <!-- <p v-if="showAll"   class="control a-hover-style"  @click="close">收起</p>
            <p  v-else class="control a-hover-style" @click="open">展开</p>-->
          </div>

        </div>
        <div>
          <p> <span style="margin-right: 35px">状</span>态：</p>
          <div>
            <span :class="currentState ==item.value?'a-hover-style active':'a-hover-style'"
                  v-for="(item,index) in states" :key="index" @click="swtichStatus(item)">
              {{item.name}}
            </span>
          </div>
        </div>
      </li>
    </ul>
    <ul style="    width: 1040px;padding-left: 20px;">
      <li >
        <Row>
          <i-col span="8" v-for="(item,index) in trainList" :key="index" class="block-list" >
            <div class="a-hover-style" @click="toDetail(item)">
              <img :src="item.activityCover" alt="">
              <p class="title">{{item.activityName}}</p>
              <p class="address">
                <span class="text-ellipsis">{{item.activityProvinceName}} {{item.activityCityName}} {{item.activityCountyName}}</span>
                <span class="wait" v-if="item.status == '1'">待开始</span>
                <span class="prograss" v-else-if="item.status =='2'">进行中</span>
                <span class="apply" v-else-if="item.status =='3'">已结束</span>
                <span  v-else>已结束</span>
              </p>
              <p class="time">开讲日期  {{item.activityStartDate}} - {{item.activityEndDate}}</p>
            </div>
          </i-col>
        </Row>
      </li>
      <Page v-if="total>9" :total="total" :pageSize="pageSize" prev-text="上一页" next-text="下一页" :current="pageNum" @on-change="changePage"/>
    </ul>
  </div>
</template>
<script src="./index.js">

</script>
