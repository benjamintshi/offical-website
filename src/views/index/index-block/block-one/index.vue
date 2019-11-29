<template>

        <li class="block-one">
          <Row>
            <i-col span="12">
              <img :src="left.img" alt="">
              <p class="img-title text-ellipsis">{{left.title}}</p>
            </i-col>
            <i-col span="12" style="padding-left:20px;">
              <Menu mode="horizontal" theme="light" active-name="1" on-select="swtichOne">
                <MenuItem name="1">
                  志愿快讯
                </MenuItem>
                <MenuItem name="2">
                  政策文件
                </MenuItem>
              </Menu>
                <p class="news-list" v-for="(item,index) in right.newsList" :key="index">
                  <span class="circle-dot"> </span>
                  <span class="title text-ellipsis">{{item.title}} </span>
                  <span class="time"> {{item.time}}</span>
                </p>
            </i-col>
          </Row>
        </li>


</template>
<script src="./index.js">

</script>
