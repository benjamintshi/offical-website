<template>
  <div class="login">
    <div class="login-content">
      <ul class="login-content-info">
        <li class="top">
          <p v-if="loginByAccount"> 密码登录
            <span @click="loginByAccount=false" class="a-hover-style"> <img src="static/images/scanIcon.png" alt=""></span>
          </p>
          <p v-else> 扫码登录
            <span @click="loginByAccount=true" class="a-hover-style">密码登录 </span>
          </p>
        </li>
        <li class="center " v-if="loginByAccount">
          <div class="account-login">
            <input type="text" placeholder="请输入手机号/身份证号/邮箱" v-model="login.account">
            <input type="password" placeholder="请输入密码" v-model="login.passwd">
            <button @click="toLogin">登录</button>
            <span v-if="errInfo !=null && errInfo != ''" style="color: red">*{{errInfo}}</span>
            <router-link to="forgetPassword">忘记密码</router-link>
          </div>
        </li>
        <li class="center " v-else>
          <div class="scan-login">
            <img v-bind:src="qr_code_src" alt="">
            <p >使用<span>文旅志愿</span>App扫码登录</p>

          </div>
        </li>
        <li class="bottom">
          <p><span>微信登录</span> 没有账号？ <router-link to="register"> 立即注册</router-link></p>
        </li>
      </ul>
    </div>
  </div>


</template>


<script src="./index.js">

</script>
