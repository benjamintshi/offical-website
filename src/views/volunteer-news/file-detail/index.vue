<template>
  <div class="volunteer-info">
    <div class="star-info-nav">
      <span @click="$router.push('volunteerNews')"> 志愿快讯 </span>  > 政策文件 > 正文
    </div>
    <ul class="volunteer-info-left">
      <li class="base-info">
        <p>{{newsInfo.title}}</p><br/>
        <span class="time">发布时间：{{newsInfo.time}}</span>
      </li>
      <img style="height: 6px;width: 100%" src="static/images/villageStar/line.png" alt="">

      <div class="file-detail">
        <Row class="list">
            <i-col span="14" style="padding-right: 50px;">
              <Row>
                <i-col span="8">
                  索 引 号：
                </i-col>
                <i-col span="16">
                  000014348/2019-00083
                </i-col>
              </Row>
              <Row>
                <i-col span="8">
                  发布机构：
                </i-col>
                <i-col span="16">
                  市场管理司
                </i-col>
              </Row>
              <Row>
                <i-col span="8">
                  名     称：
                </i-col>
                <i-col span="16" style="font-size: 12px;">
                  文化和旅游部关于《在线旅游经营服务
                  管理暂行规定（征求意见稿）》公开征
                  求意见的通知
                </i-col>
              </Row>
              <Row>
                <i-col span="8">
                  文     号：
                </i-col>
                <i-col span="16">
                  无
                </i-col>
              </Row>
            </i-col>
            <i-col span="10">

              <Row>
                <i-col span="8">
                  分     类：
                </i-col>
                <i-col span="16">
                  规范性文件、通知
                </i-col>
              </Row>
              <Row>
                <i-col span="8">
                  发文日期：
                </i-col>
                <i-col span="16">
                  2019年11月08日
                </i-col>
              </Row>
              <Row>
                <i-col span="10">
                  时间有效性：
                </i-col>
                <i-col span="14">

                </i-col>
              </Row>
              <Row>
                <i-col span="8">
                  主 题 词：
                </i-col>
                <i-col span="16">
                  在线旅游经营服务
                </i-col>
              </Row>
            </i-col>
        </Row>
      </div>
      <div v-html="content" class="info-content" style="margin:38px 0 45px;">
      </div>
       <!--附件-->
      <div >
        <Row class="appendix-download">
          <i-col span="2">
            附件：
          </i-col>
          <i-col span="22">
            <p v-for="(item,index) in appendix" :key="index" style="color: #B1B2B3" class="a-hover-style">
              {{item.name}}
              <a :href="item.url" @click="item.url">下载</a>
            </p>
          </i-col>
        </Row>
      </div>
    </ul>
    <ul class="volunteer-info-right">
      <p>精选推荐</p>
      <li v-for="(item,index) in recommend" :key="index" @click="toRecommend(item)">
        <span></span>
        {{item.name}}
      </li>
    </ul>

  </div>

</template>
<script src="./index.js">

</script>
