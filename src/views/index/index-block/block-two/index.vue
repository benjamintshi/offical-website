<template>

        <li class="block-one block-two">
          <Row>
            <i-col span="6" class="number-info">
              <p>
                <span>志愿者总人数</span>
                <span>{{volunteerCnt}}</span>
              </p>
              <p>
                <span>志愿团队总数</span>
                <span>{{teamCnt}}</span>
              </p>
              <p>
                <span>志愿活动总数</span>
                <span>{{activityCnt}}</span>
              </p>

            </i-col>
            <i-col span="9" style="padding-left:20px;">
            <Menu mode="horizontal" theme="light" active-name="1" on-select="swtichOne">
              <MenuItem name="1">
                国家示范项目
              </MenuItem>
              <MenuItem name="2">
                地方品牌项目
              </MenuItem>
              <span class="more a-hover-style"> 更多</span>
            </Menu>
              <p class="sub-menu a-hover-style">
                <span :class="selected==item.id ? 'active':''" v-for="(item,index) in subMenu" :key="index">{{item.name}}</span>
              </p>
            <p class="news-list" v-for="(item,index) in newsList1" :key="index">
              <span class="circle-dot"> </span>
              <span class="title text-ellipsis">{{item.title}} </span>
              <span class="time"> {{item.time}}</span>
            </p>
          </i-col>
            <i-col span="9" style="padding-left:20px;">
              <Menu mode="horizontal" theme="light"  >
                <MenuItem name="1">
                  活动招募
                </MenuItem>
              </Menu>
              <p class="news-list" v-for="(item,index) in newsList2" :key="index">
                <span class="circle-dot"> </span>
                <span class="title text-ellipsis">{{item.title}} </span>
                <span v-if="item.status==1" class="start"> 招募中</span>
                <span v-else-if="item.status==2" class="wait"> 待招募</span>
                <span v-else class="end"> 已结束</span>

              </p>
            </i-col>
          </Row>
        </li>


</template>
<script src="./index.js">

</script>
