<template>
  <div class="query-info">
    <div class="query-input">
      <Row>
      <i-col span="12">
        <p :class="activeMenu ==1? 'menu active':'menu'" @click="swtichMenu(1)">志愿者信息查询</p>
      </i-col>
      <i-col span="12">
        <p :class="activeMenu ==2? 'menu active':'menu'" @click="swtichMenu(2)">志愿服务认证信息查询</p>
      </i-col>
    </Row>
      <Row>
        <i-col span="6">
          <label >姓 <span style="margin-left:43px">名</span> </label>
        </i-col>
        <i-col span="18">
          <input type="text" v-model="name">
        </i-col>
      </Row>
      <Row>
        <i-col span="6">
          <label >身份证号码</label>
        </i-col>
        <i-col span="18">
          <input type="text" v-model="number">
        </i-col>
      </Row>
      <button @click="query">查询</button>
    </div>
    <div class="query-result">
      <div class="query-result-content" v-if="activeMenu==1">
        <div class="volunteer-info" v-if="volunteerResult">
          <div>
            <p class="base-info">
              <span class="title font26">{{userInfo.userName}}</span>
              <span class="tag" v-if="userInfo.volunteer.platformType==0">文化志愿者</span>
              <span class="tag" v-if="userInfo.volunteer.platformType==1">阳光工程</span>
              <span class="tag" v-if="userInfo.volunteer.platformType==2">圆梦工程</span>
              <span class="tag" v-if="userInfo.volunteer.platformType==3">旅游志愿者</span>
              <span class="integral">{{userInfo.volunteer.coin}}积分</span>
            </p>
            <Row>
              <i-col span="5">志愿者唯一编号</i-col>
              <i-col span="7">{{userInfo.volunteer.volunteerId}}</i-col>
              <i-col span="5" >在职状态</i-col>
              <i-col span="7" v-if="userInfo.volunteer.workStatus==1">在职</i-col>
              <i-col span="7 " v-if="userInfo.volunteer.workStatus==0">离职</i-col>
            </Row>
            <Row>
              <i-col span="5">注册时间</i-col>
              <i-col span="7">{{userInfo.volunteer.createTime}}</i-col>
              <i-col span="5" >
                认证时间
              </i-col>
              <i-col span="7">
                {{userInfo.volunteer.createTime}}
              </i-col>
            </Row>
            <Row>
              <i-col span="5">服务区域</i-col>
              <i-col span="7">{{pName}}-{{cName}}</i-col>
              <i-col span="5" >服务方式</i-col>
              <i-col span="7">{{userInfo.volunteer.serviceMode}}</i-col>
            </Row>
            <Row>
              <i-col span="5">服务类别</i-col>
              <i-col span="7">{{userInfo.volunteer.serviceType}}</i-col>
              <i-col span="5" >特长</i-col>
              <i-col span="7">{{userInfo.volunteer.artSpetiality}}</i-col>
            </Row>
            <Row>
              <i-col span="5">服务对象</i-col>
              <i-col span="7">{{userInfo.volunteer.serviceCrowd}}</i-col>
              <i-col span="5" >可提供服务时间</i-col>
              <i-col span="7">{{userInfo.volunteer.servicePeriod}}</i-col>
            </Row>
          </div>
        </div>
        <div class="empty" v-else>
          <img src="static/images/common/empty.png" alt="">
          <p>暂无此人信息</p>
        </div>
      </div>
      <div class="query-result-content" v-else>
        <div class="empty" v-if="certificateResult">
          <img style="max-width: 960px;width: 100%" :src="userInfo.url" alt="">
        </div>
        <div class="empty" v-else>
          <img src="static/images/common/empty.png" alt="">
          <p>暂无此人志愿服务认证证书</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js">

</script>
