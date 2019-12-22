<template>

  <li class="block-four">
    <p class="block-title">志愿服务地图</p>
      <div id="allmap" ></div>
    <Row>
      <i-col span="8" class="a-hover-style">
        <img src="static/images/top/guide.png" alt="">
        <p class="title">
          平台操作指南<br/>
          <span>详细操作说明，使用须知等。</span>
        </p>

      </i-col>
      <i-col span="8" class="a-hover-style" >
        <div @click="toQuery">
          <img src="static/images/top/info-search.png" alt="">
          <p class="title">
            志愿者信息查询<br/>
            <span>查询志愿者个人信息等。</span>
          </p>
        </div>

      </i-col>
      <i-col span="8" class="a-hover-style">
        <img src="static/images/top/email.png" alt="">
        <p class="title">
          意见反馈<br/>
          <span>相关意见提交通道。</span>
        </p>
      </i-col>
    </Row>
  </li>


</template>


<script src="./index.js">

</script>
