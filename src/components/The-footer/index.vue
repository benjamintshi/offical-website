<template>
  <div class="The-footer">
    <ul class="The-footer-link">
       <li class="area">
         <p>友情链接</p>
         <router-link to="/" v-for="(item,index) in areaList" :key="index"> {{item.name}}</router-link>
       </li>
        <li class="area-line"></li>
        <li class = "about">
            <p>
              <router-link to="/">关于我们</router-link>
              <router-link to="/">联系我们</router-link>
              <router-link to="/">常见问答</router-link>
            </p>
          <p>
            <router-link to="/">意见反馈</router-link>
            <router-link to="/">版权保护</router-link>
            <router-link to="/">免责声明</router-link>
          </p>
          <div class="link-img">
            <img src="static/images/top/weChat.png" alt="">
            <img src="static/images/top/App.png" alt="">
          </div>
        </li>

    </ul>
    <!--备案-->
    <div class="The-footer-record">

      <p>ICP备案：京ICP备18030242号-1</p>
      <p>主办单位：中华人民共和国文化和旅游部    <span>全国公共文化发展中心</span></p>
      <p>技术支持单位：昆山必捷必信息技术有限公司</p>


    </div>
  </div>
</template>
<script src="./index.js">

</script>
