<template>
  <section>
    <div v-if="modifySuccess" class="modify-success">
      <div class="modify-success-content">
        <Icon type="ios-checkmark-circle"  size="100" color="#03be47"/>
        <p>基本信息已提交审核，请耐心等待审核结果。</p>
        <div class="action"> <span @click="$router.push('/')">去首页 </span>  <span @click="back">返回个人中心</span></div>
      </div>

    </div>
    <div class="input-base-info" v-else>
      <p class="title">修改基本信息</p>
      <Row>
        <i-col span="4" >
          <p ><span style="letter-spacing: 50px;">姓</span>名</p>
        </i-col>
        <i-col span="20">
          <input type="text" placeholder="" v-model="formData.name">
        </i-col>
      </Row>
      <Row>
        <i-col span="4" >
          <p ><span style="letter-spacing: 7px;">证件号</span>码</p>
        </i-col>
        <i-col span="20">
          <input type="text" placeholder="" v-model="formData.cardNum">
        </i-col>
      </Row>
      <Row>
        <i-col span="4" >
          <p ><span style="letter-spacing: 7px;">证件类</span>型</p>
        </i-col>
        <i-col span="20">
          <Select v-model="formData.cardType " style="width:370px;">
            <Option v-for="item in cardList" :value="item.id" :key="item.value">{{ item.name }}</Option>
          </Select>
        </i-col>
      </Row>
      <Row>
        <i-col span="4" >
          <p ><span style="letter-spacing: 7px;">服务区</span>域</p>
        </i-col>
        <i-col span="20">
          <Select v-model="formData.servieRange.privince" style="width:100px;margin-right:35px">
            <Option v-for="item in cardList" :value="item.id" :key="item.value">{{ item.name }}</Option>
          </Select>
          <Select v-model="formData.servieRange.city" style="width:100px;margin-right: 35px;">
            <Option v-for="item in cardList" :value="item.id" :key="item.value">{{ item.name }}</Option>
          </Select>
          <Select v-model="formData.servieRange.county" style="width:100px;">
            <Option v-for="item in cardList" :value="item.id" :key="item.value">{{ item.name }}</Option>
          </Select>
        </i-col>
      </Row>
      <Row>
        <i-col span="4" >
          <p ><span style="letter-spacing: 7px;">居住区</span>域</p>
        </i-col>
        <i-col span="20">
          <Select v-model="formData.addressInfo.privince" style="width:100px;margin-right:35px">
            <Option v-for="item in cardList" :value="item.id" :key="item.value">{{ item.name }}</Option>
          </Select>
          <Select v-model="formData.addressInfo.city" style="width:100px;margin-right: 35px;">
            <Option v-for="item in cardList" :value="item.id" :key="item.value">{{ item.name }}</Option>
          </Select>
          <Select v-model="formData.addressInfo.county" style="width:100px;">
            <Option v-for="item in cardList" :value="item.id" :key="item.value">{{ item.name }}</Option>
          </Select>
        </i-col>
      </Row>
      <Row>
        <i-col span="4" >
          <p ><span style="letter-spacing: 7px;">详细地</span>址</p>
        </i-col>
        <i-col span="20">
          <input type="text" placeholder="" v-model="formData.addressInfo.address">
        </i-col>
      </Row>
      <!-- <Radio v-model="single">Radio</Radio> -->
      <Row>
        <i-col span="4" >
          <p ><span style="letter-spacing: 50px;">特</span>长</p>
        </i-col>
        <i-col span="20">
          <RadioGroup v-model="formData.hobby" style="height: 50px;line-height: 50px;">
            <Radio label="sing" style="margin-right: 100px">
              <span>唱歌</span>
            </Radio>
            <Radio label="dance" style="margin-right: 100px">
              <span>跳舞</span>
            </Radio>
            <Radio label="other">
              <span>其他</span>
            </Radio>
          </RadioGroup>
        </i-col>
      </Row>
      <Row>
        <i-col span="4" >
          <p ><span style="letter-spacing: 2px;">志愿者类</span>别</p>
        </i-col>
        <i-col span="20">
          <RadioGroup v-model="formData.volunteerType" style="height: 50px;line-height: 50px;">
            <Radio label="1" style="margin-right: 58px">
              <span>文化志愿者</span>
            </Radio>
            <Radio label="2" >
              <span>旅游志愿者</span>
            </Radio>

          </RadioGroup>
        </i-col>
      </Row>
      <div class="radioList">
        <p>是否所属以下项目</p>
        <RadioGroup v-model="formData.project" style="line-height: 50px;">
          <Radio label="1" style="margin-right: 90px">
            <span>阳光工程</span>
          </Radio>
          <Radio label="2" style="margin-right: 90px">
            <span>圆梦工程</span>
          </Radio>
          <Radio label="3" >
            <span>乡村文艺志愿者</span>
          </Radio>
          <Radio label="4" style="margin-right: 90px">
            <span>春雨工程</span>
          </Radio>
          <Radio label="5" >
            <span>新时代文明实践中心</span>
          </Radio>

        </RadioGroup>
      </div>
      <div class="radioList">
        <p>志愿服务类别</p>
        <RadioGroup v-model="formData.serviceType" style="height: 50px;line-height: 50px;">
          <Radio label="1" style="margin-right: 90px">
            <span>文艺演出</span>
          </Radio>
          <Radio label="2" style="margin-right: 90px">
            <span>知识普及</span>
          </Radio>
          <Radio label="2" style="margin-right: 90px">
            <span>非遗传承</span>
          </Radio>


        </RadioGroup>
      </div>
      <div class="radioList">
        <p>可提供服务时间</p>
        <RadioGroup v-model="formData.serviceTime" style="height: 50px;line-height: 50px;">
          <Radio label="1" style="margin-right: 90px">
            <span>每天</span>
          </Radio>
          <Radio label="2" style="margin-right: 90px">
            <span>周六日</span>
          </Radio>
          <Radio label="3" >
            <span>特定时间</span>

          </Radio>
        </RadioGroup>
        <input type="text" v-model="formData.serviceAppointTime">
      </div>
      <div class="radioList">
        <p style="margin-bottom: 20px;">可提供服务时间段</p>
        <input type="text" v-model="formData.timeStart">
        —
        <input type="text" v-model="formData.timeEnd">
      </div>
      <button @click="submit">提交</button>
    </div>
  </section>





</template>
<script src="./index.js">

</script>
