<template>
  <div class="apply-content">
    <p class="detail-nav"><span @click="$router.push('activityRecruit')"> 活动招募</span> >
      <span @click="$router.back(-1)">招募详情</span> > 加入申请</p>
    <Row class="apply-tip">
      <i-col span="8">
        <p :class="show =='first'?'active':''">验证信息</p>
        <p :class="show =='first'?'active':''">
          <span></span>
          <img src="static/images/volunteer-news/circle-active.png" alt="" v-if="show =='first'">
          <img src="static/images/volunteer-news/circle.png" alt="" v-else>
          <span></span>
        </p>
      </i-col>
      <i-col span="8">
        <p :class="show =='second'?'active':''">确认信息</p>
        <p :class="show =='second'?'active':''">
          <span></span>
          <img src="static/images/volunteer-news/circle-active.png" alt="" v-if="show =='second'">
          <img src="static/images/volunteer-news/circle.png" alt="" v-else>
          <span></span>
        </p>
      </i-col>
      <i-col span="8">
        <p :class="show =='third'?'active':''">提交审核</p>
        <p :class="show =='third'?'active':''">
          <span></span>
          <img src="static/images/volunteer-news/circle-active.png" alt="" v-if="show =='third'">
          <img src="static/images/volunteer-news/circle.png" alt="" v-else>
          <span></span>
        </p>
      </i-col>
    </Row>
    <!--input-->
    <div class="inputBlock">
      <section v-if="show =='first'">
        <Row>
          <i-col span="6">
            <p>验证账号类型：</p>
          </i-col>
          <i-col span="18">
            <Select v-model="formData.cardType " style="width:405px;">
              <Option v-for="item in cardList" :value="item.id" :key="item.value">{{ item.name }}</Option>
            </Select>
          </i-col>
        </Row>
        <section v-if="formData.cardType ==3">
          <Row>
            <i-col span="6">
              <p>姓名：</p>
            </i-col>
            <i-col span="18">
              <input type="text" v-model="formData.name">
            </i-col>
          </Row>
          <Row>
            <i-col span="6">
              <p>身份证号码：</p>
            </i-col>
            <i-col span="18">
              <input type="text" v-model="formData.cardNum">
            </i-col>
          </Row>
        </section>
        <section v-else-if="formData.cardType ==2">
          <Row>
            <i-col span="6">
              <p>邮箱号码：</p>
            </i-col>
            <i-col span="18">
              <input type="text" v-model="formData.phoneOrEmail">
            </i-col>
          </Row>
          <Row>
            <i-col span="18">
              <input type="text" v-model="formData.code" class="hasBoder">
              <span v-if="formData.phoneOrEmail" style="color: #7E7F80;font-size: 12px;">
                验证码信息将发送到 “{{formData.phoneOrEmail}}”上，请注意查收
              </span>
            </i-col>
            <i-col span="6">
              <button class="a-hover-style" @click="sendCode">
                <p>{{send}}</p>
              </button>
            </i-col>
          </Row>
        </section>
        <section v-else>
          <Row>
            <i-col span="6">
              <p>手机号码：</p>
            </i-col>
            <i-col span="18">
              <input type="text" v-model="formData.phoneOrEmail">
            </i-col>
          </Row>
          <Row>
            <i-col span="18">
              <input type="text" v-model="formData.code" class="hasBoder">
              <span v-if="formData.phoneOrEmail" style="color: #7E7F80;font-size: 12px;">
                验证码信息将发送到 “{{formData.phoneOrEmail}}”，请注意查收
              </span>
            </i-col>
            <i-col span="6">
              <button class="a-hover-style" @click="sendCode">
                <p>{{send}}</p>
              </button>
            </i-col>
          </Row>
        </section>
        <button class="send" @click="nextStep(formData.cardType)">下一步</button>
      </section>
      <section v-else-if="show =='second'" class="base-info">
        <p>姓 名：{{userInfo.userName}}</p>
        <p>居住区域：{{userInfo.provinceName}} {{userInfo.cityName}}</p>
        <p>详细地址：{{userInfo.address}}</p>
        <p>特 长：{{userInfo.volunteer.artSpetiality}}</p>
        <p v-if="userInfo.volunteer.platformType==0">志愿者类别：文化志愿者</p>
        <p v-if="userInfo.volunteer.platformType==1">志愿者类别：阳光工程</p>
        <p v-if="userInfo.volunteer.platformType==2">志愿者类别：圆梦工程</p>
        <p v-if="userInfo.volunteer.platformType==3">志愿者类别：旅游志愿者</p>
        <p v-if="userInfo.volunteer.serviceType=='文艺演出'">志愿者服务类别：文艺演出</p>
        <p v-if="userInfo.volunteer.serviceType=='知识普及'">志愿者服务类别：知识普及</p>
        <p v-if="userInfo.volunteer.serviceType=='非遗传承'">志愿者服务类别：非遗传承</p>
        <p>可提供服务时间：{{userInfo.volunteer.serviceTime}}</p>
        <p>可提供服务时间段：{{userInfo.volunteer.servicePeriod}}</p>
        <button class="send" @click="confirmInfo">确定</button>
      </section>
      <section v-else class="success">
        <Icon type="ios-checkmark-circle" size="100" color="#66c17b"/>
        <p>
          您的个人信息已提交到项目联系人，
          请耐心等待审核结果。
        </p>
        <button class="send" @click="back">返回招募详情</button>

      </section>

    </div>
  </div>
</template>
<script src="./index.js">

</script>

