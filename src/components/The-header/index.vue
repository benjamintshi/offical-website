<template>
    <div class="The-header">
      <!--顶部灰色导航-->
        <div class="top-link">

          <ul class="top-link-nav">
            <li @click="showArea=true;" :class="showArea?'swtich-area-btn':''">
              {{activeAreaName}}

              <Icon type="ios-arrow-up" v-if="showArea"/>
              <Icon type="ios-arrow-down" v-else/>
            </li>
            <!--站点切换-->
            <div class="swtich-area" v-show="showArea" @mouseleave="showArea = false" >
                <p>
                  <span v-for="(item,index) in areaList" :key="index"
                        :class="activeArea == item.value?'active':''"
                        @click="swtichArea(item)">
                    {{item.name}}
                  </span>
                </p>

            </div>
            <li>
              <router-link to="/" class="right-50">通知公告</router-link>
              <router-link to="/" class="right-50">信息查询</router-link>
              <router-link to="/" class="right-40">联系我们</router-link>
              <span class="right-40" style="font-weight: 500">|</span>
              <router-link to="login" class="right-40">登陆</router-link>
              <router-link to="personalInfo" v-if="isLogin">
                {{userInfo.name}}
                <span><Icon type="md-arrow-dropdown" size="16"/></span>
              </router-link>
              <router-link to="register" v-else>免费注册</router-link>
            </li>

          </ul>
        </div>
      <!--  中间logo部分 -->
        <div class="top-logo">
          <img class="top-logo-bg" src="static/images/top/top-bg.png" alt="">
          <ul>
            <img   style="width: 342px;" src="static/images/top/logo.png" alt="">
            <p>
              <span>
                奉献
              </span>
              <span>友爱</span>
              <span>互助</span>
              <span>进步</span>
              <router-link to="/">
                <Icon type="ios-search" color="#888"/>
              </router-link>
            </p>
          </ul>

        </div>

        <!--菜单-->
      <div class="top-menu">
        <ul>
          <li v-for="(item,index) in menelist" :key="index" :class="activeMenu === item.value?'top-menu-active a-hover-style':'a-hover-style'"
              @click.stop="swtichMenu(item)" @mousemove="hoverMenu = item.value" @mouseleave="hoverMenu =''">
            {{item.name}}
            <div class="sub-menu" v-if="item.children" v-show="hoverMenu == item.value"  @mouseleave="hoverMenu =''">
              <div v-for="(item1,index1) in item.children" :key="index1" @click.stop="subMenu(item,item1)">
                {{item1.name}}
                <div class="line" v-if="index1 !=item.children.length-1"></div>
              </div>
            </div>
          </li>

        </ul>

      </div>

    </div>
</template>
<script src="./index.js">

</script>
