<template>
  <div class="study-center">
      <Row>
        <i-col span="12">
          <template>
            <Carousel autoplay v-model="value1" loop>
              <CarouselItem v-for="(item,index) in topList" :key="index">
                <div class="demo-carousel"><img :src="item.img" alt=""></div>
              </CarouselItem>

            </Carousel>
          </template>
        </i-col>
        <i-col span="12">
          <ul class=" literature">
            <p class="block-title">理论文献 <span class="a-hover-style" @click="$router.push('literatureLst')">更多</span></p>
            <img style="height: 6px;width: 100%" src="static/images/villageStar/line.png" alt="">
              <li v-for="(item,index) in literatureList" :key="index">
                <p class="text-ellipsis" @click="toDetail(item)">
                  <span></span>
                  {{item.title}}</p>
              </li>
          </ul>

        </i-col>
      </Row>
    <img class="online-train a-hover-style" src="static/images/online-train.png" alt="">
    <!--岗前培训-->
    <ul >
      <p class="block-title" style="margin-right: 20px">线下培训
        <span class="a-hover-style" @click="$router.push('cultivateList')">更多</span>
      </p>
      <img style="height: 6px;width: 100%; padding-right: 18px" src="static/images/villageStar/line.png" alt="">
      <p class="sub-title">岗前培训</p>
      <li >
        <Row>
          <i-col span="8" v-for="(item,index) in trainList" :key="index" class="block-list" >
            <div  @click="toDetail(item)" class="a-hover-style">
              <img :src="item.img" alt="">
              <p class="title">{{item.title}}</p>
              <p class="address">{{item.address}}
                <span class="wait" v-if="item.status == '1'">待开始</span>
                <span class="prograss" v-else-if="item.status =='2'">进行中</span>
                <span  v-else>已结束</span>
              </p>
              <p class="time">开讲日期  {{item.timeStart}} - {{item.timeEnd}}</p>
            </div>

          </i-col>
        </Row>
      </li>
    </ul>
    <!--服务技能提升-->
    <ul >
      <p class="sub-title">服务技能提升</p>
      <li >
        <Row>
          <i-col span="8" v-for="(item,index) in trainList" :key="index" class="block-list" >
            <div @click="toDetail(item)" class="a-hover-style">
              <img :src="item.img" alt="">
              <p class="title">{{item.title}}</p>
              <p class="address">{{item.address}}
                <span class="wait" v-if="item.status == '1'">待开始</span>
                <span class="prograss" v-else-if="item.status =='2'">进行中</span>
                <span class="apply" v-else-if="item.status =='3'">可报名</span>
                <span  v-else>已结束</span>
              </p>
              <p class="time">开讲日期  {{item.timeStart}} - {{item.timeEnd}}</p>
            </div>

          </i-col>
        </Row>
      </li>
    </ul>
  </div>
</template>
<script src="./index.js">

</script>
