<template>
  <div class="forget-password">
    <p class="title-tip">忘记密码</p>
    <div class="first-step" v-if="firstStep">
      <!--账号-->
      <Row>
        <i-col span="5" >
          <p style="line-height: 40px;">账号类型：</p>
        </i-col>
        <i-col span="19">
          <Select v-model=" selectType " style="width:100%;" @on-change="changeType">
            <Option v-for="item in accountType" :value="item.id" :key="item.value">{{ item.name }}</Option>
          </Select>
        </i-col>
      </Row>
      <section v-if="selectType =='1'">
        <Row class="center-block">
          <i-col span="5" >
            <p><span style="margin-right: 31px">账</span> 号：</p>
          </i-col>
          <i-col span="19">
            <input type="text" v-model="accountInfo.account">

          </i-col>
        </Row>
        <!--验证码-->
        <Row class="vertify-code">
          <i-col span="17">
            <input type="text" v-model="accountInfo.code">
          </i-col>
          <i-col span="7" >
            <button class="a-hover-style" @click="sendCode">
              {{send}}
            </button>
          </i-col>

        </Row>
      </section>
      <section v-if="selectType =='2'">
        <Row class="center-block">
          <i-col span="5" >
            <p> 身份证号：</p>
          </i-col>
          <i-col span="19">
            <input type="text" v-model="identifierInfo.number">

          </i-col>
        </Row>
        <Row class="center-block">
          <i-col span="5" >
            <p>真实姓名： </p>
          </i-col>
          <i-col span="19">
            <input type="text" v-model="identifierInfo.name">

          </i-col>
        </Row>
      </section>


      <button class="send" @click="nextStep">下一步</button>
    </div >
    <div v-else class="first-step" >
      <Row class="center-block">
        <i-col span="5" >
          <p>重置密码：</p>
        </i-col>
        <i-col span="19">
          <input type="text" v-model="accountInfo.account">

        </i-col>
      </Row>
      <Row class="center-block">
        <i-col span="5" >
          <p>确认密码：</p>
        </i-col>
        <i-col span="19">
          <input type="text" v-model="accountInfo.account">

        </i-col>
      </Row>
      <button class="send" @click="setPsd">确定</button>
    </div>

  </div>


</template>


<script src="./index.js">

</script>
