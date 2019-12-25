<template>
  <div class="cultivate-list volunteer-team">
    <ul class="cultivate-list-content">
      <p class="title">志愿团队</p>
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
          <p> 培训人数：</p>
          <div>
            <span :class="selectNumber ==item.value?'a-hover-style active':'a-hover-style'"
                  v-for="(item,index) in number" :key="index" @click="swtichNumber(item)">
              {{item.name}}
            </span>
          </div>
        </div>
      </li>
    </ul>
    <img src="static/images/common/top14.png" style="width: 1000px; margin:10px auto;display: block" alt="">
    <ul style="    width: 1040px;padding-left: 20px;">
      <li >
        <Row>
          <i-col span="8" v-for="(item,index) in trainList" :key="index" class="block-list" >
            <div class="a-hover-style" @click="toDetail(item)">
              <img :src="item.img" alt="">
              <p class="title">{{item.title}}</p>
              <p :class=" item.address ? 'address':'hidden-content'" >{{item.address}}
                <span class="prograss" v-if="item.status =='2'">招募中</span>

              </p>
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
