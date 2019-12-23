<template>

        <li class="block-one block-three">

          <Row>
            <i-col span="12"  style="padding-right:14px ">
              <p class="block-title">
                线下培训
                <span class="more a-hover-style " @click="toMore"> 更多</span>
              </p>
              <img style="height: 6px" src="static/images/villageStar/line.png" alt="">
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
                理论文献
                <span class="more a-hover-style" @click="toMoreL"> 更多</span>
              </p>
              <img style="height: 6px" src="static/images/villageStar/line.png" alt="">

              <div class="news-content">
                <p class="news-list a-hover-style" v-for="(item,index) in newsList1" :key="index" @click="toDetailL(item)">
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
