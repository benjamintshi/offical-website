<template>
  <div class="cultivate-list volunteer-recruit">
    <ul class="cultivate-list-content">
      <p class="title">活动招募</p>
      <li class="filter-tool">
        <div>
          <p> <span style="margin-right: 35px">区</span>域：</p>
          <div :class="showAll?'selectCity':'selectCity retract' ">
            <span v-for="(item,index) in areaList" :key="index" @click="swtichCity(item)"
                  :class="cityCode ==item.value?'a-hover-style active':'a-hover-style'">
              {{item.name}}
            </span>

          </div>
          <div class="control a-hover-style" v-if="showAll" @click="showAll = false">收起</div>
          <div class="control a-hover-style" v-else @click="showAll = true">展开</div>

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
        <div>
          <p> 服务对象</p>
          <div>
            <span :class="selecteService ==item.value?'a-hover-style active':'a-hover-style'"
                  v-for="(item,index) in service" :key="index" @click="swtichService(item)">
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
              <img :src="item.img" alt="" onerror="this.src='http://zgwhzyz.bjbsh.com:180/show/img/loadingImage.jpg'">
              <div class="tag">
                <img src="static/images/common/waiting.png" alt="" v-if="item.status == '1'">
                <img src="static/images/common/starting.png" alt="" v-else-if="item.status =='2'">
                <img src="static/images/common/end.png" alt="" v-else>
              </div>
              <p class="title">{{item.title}}</p>

              <p class="time" v-show="item.timeShow">开讲日期  {{item.timeStart}} - {{item.timeEnd}}</p>
              <p class="address"> <sec class="right30">距结束：{{item.endTime}}天</sec>  已报名：{{item.realNum}} 人</p>
            </div>

          </i-col>
        </Row>
      </li>
      <Page v-if="total>pageSize" :total="total" :pageSize="pageSize" prev-text="上一页" next-text="下一页" :current="pageNum" @on-change="changePage"/>

    </ul>
  </div>
</template>
<script src="./index.js">

</script>
