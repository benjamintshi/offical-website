<template>
  <div class="login">
    <div class="login-content">
      <ul class="login-content-info">
        <li class="top">
          <p v-if="loginByAccount"> 扫码登录 
            <span @click="loginByAccount=false" class="a-hover-style"> <img src="/static/images/scanIcon.png" alt=""></span> 
          </p>
          <p v-else> 密码登录
            <span @click="loginByAccount=true" class="a-hover-style">密码登录 </span>
          </p>
        </li>
        <li class="center " v-if="loginByAccount">
          <div class="account-login">
            <input type="text" placeholder="请输入手机号/身份证号/邮箱" v-model="login.account">
            <input type="password" placeholder="请输入密码" v-model="login.password">
            <button @click="login">登录</button>
            <router-link to="/">忘记密码</router-link>
          </div>
        </li>
        <li class="center " v-else>
          <div class="scan-login">
            <img src="/static/images/scan.png" alt="">
            <p style="letter-spacing: 1.7px;">使用<span>文化和旅游志愿服</span></p>
            <p  style="letter-spacing:0.2px;"><span>务</span>APP或小程序扫码登录</p>
          </div>
        </li>
        <li class="bottom">
          <p><span>微信登录</span> 没有账号？ <router-link to="/"> 立即注册</router-link></p>
        </li>
      </ul>
    </div>
  </div>


</template>


<script src="./index.js">

</script>
