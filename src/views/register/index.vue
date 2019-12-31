<template>
   <div class="register-content" ref="BaseInfo">
      <p class="title-tip" v-show="!show.fourStep">
        注册
        <span>已有账号？</span>
        <span class="a-hover-style" @click="toLogin">去登陆</span>
      </p>
     <div class="first-step" v-if="show.firstStep">
       <!--账号-->
       <Row>
         <i-col span="5" >
          <p ><span style="margin-right:28px;">账</span>号：</p>
         </i-col>
         <i-col span="19">
           <input type="text" placeholder="身份证/手机号/邮箱号" v-model="account">
         </i-col>
       </Row>
       <!--验证码-->
       <Row class="vertify-code">
         <i-col span="17">
           <input type="text" v-model="code">
         </i-col>
         <i-col span="7" >
          <button class="a-hover-style" @click="sendCode">
            {{send}}
          </button>
         </i-col>

       </Row>
       <!--设置密码-->
       <Row>
         <i-col span="5" >
           设置密码：
         </i-col>
         <i-col span="19">
           <input type="text" v-model="passwd">
           <p class="tips">请设置不少于8位的密码，必须包含字母、数字</p>
         </i-col>
       </Row>
       <button class="send" @click="submitFirst">确定</button>
     </div>
     <!--第二步-->
     <div class="second-step " v-else-if="show.secondStep">
          <p @click="selectRole('1')" :class="role == '1' ?'selected a-hover-style':'a-hover-style'"><span>我是<br/>普通用户</span></p>
         <p @click="selectRole('2')" :class="role == '2' ?'selected a-hover-style':'a-hover-style'"><span>我要<br/>成为志愿者</span></p>
       <button :class="role  ?' a-hover-style':'a-hover-style btn-gray'" @click="next">下一步</button>
     </div>
     <!-- 第三步 填写注册信息-->
     <BaseInfo v-else-if="show.thirdStep" @success="submitSuccess"></BaseInfo>

     <!-- 注册成功-->
     <div v-else class="success">
       <img src="static/images/top/success.png" alt="">
       <p>个人信息已提交成功，请耐心等待审核结果</p>
       <router-link to="/">返回首页</router-link>
     </div>
   </div>
</template>


<script src="./index.js">

</script>
