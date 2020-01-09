<template>

        <li class="block-one block-three">

          <Row>
            <i-col span="12"  style="padding-right:14px ">
              <p class="block-title">
                活动信息
                <span class="more a-hover-style" @click="toMore"> 更多</span>
              </p>
              <img style="height: 6px" src="static/images/villageStar/line.png" alt="">
              <div class="recruit a-hover-style" v-for="(item,index) in recruitList" :key="index" @click="toDetail(item)">
                <div class="img-contain">
                  <img :src="item.img" alt="">
                </div>

                <div class="desc">
                  <p class="title">
                    {{item.title}}
                  </p>
                  <p class="address">
                    <span class="text-ellipsis">{{item.address}}</span>
                    <span class="wait" v-if="item.status == '1'">待开始</span>
                    <span class="prograss" v-else-if="item.status == '2'">进行中</span>
                    <span class="wait" v-else-if="item.status == '3'">已结束 </span>
                  </p>
                  <p class="time">招募时间：{{item.time}}  </p>
                </div>

              </div>
              <div class="news-content">
                <p class="news-list a-hover-style" v-for="(item,index) in newsList1" :key="index" @click="toDetail(item)">
                  <span class="circle-dot"> </span>
                  <span class="title text-ellipsis">{{item.title}} </span>
                  <span class="time"> {{item.time}}</span>
                </p>
              </div>

            </i-col>
            <i-col span="12" style="padding-left:14px ">
              <p class="block-title">
                志愿团队
                <span class="more a-hover-style" @click="toMoreTeam"> 更多</span>
              </p>
              <img style="height: 6px" src="static/images/villageStar/line.png" alt="">
              <Row class="service-info a-hover-style">
                 <i-col span="12" v-for="(item,index) in serviceList" :key="index">

                   <div @click="toDetailTeam(item)">
                     <div class="img-contain">
                       <img :src="item.img" alt="" >
                     </div>
                     <p class="title text-ellipsis">{{item.title}}</p>
                     <p class="desc">
                       <span>{{item.serviceModeName}}</span>
                       <span>{{item.style}}</span>
                       <span>{{item.number}}人</span>
                     </p>
                   </div>
                 </i-col>

              </Row>
              <div class="news-content">
                <p class="news-list a-hover-style" v-for="(item,index) in newsList2" :key="index" @click="toDetailTeam(item)">
                  <span class="circle-dot"> </span>
                  <span class="title text-ellipsis">{{item.title}} </span>
                  <span class="time"> {{item.time}}</span>
                </p>
              </div>
            </i-col>
          </Row>
        </li>


</template>
<script src="./index.js">

</script>
