<template>
  <div class="map-content" >
    <div id="allmap"  style="position: absolute">

    </div>
    <div class="search-block" >
            <div class="input-block">
              <Icon type="ios-arrow-back" size="25" class="a-hover-style" @click="$router.push('/')"/>
              <i-input v-model="inputValue" placeholder="搜索活动相关关键字、地区名称" @on-enter="search">
              <span slot="append" class="a-hover-style">
                <Icon type="ios-search" color="#ffffff" size="25" @click="search"/>
              </span>
              </i-input>
              <div class="search-result" v-if="showResult">
                <p class="title">
                  北京市昌平区文化旅游志愿服务活动
                </p>
                <p class="time">2019.04.13 - 2019.08.29</p>
                <div class="search-result-content" v-html="searchResult.content">
                </div>
              </div>
            </div>
    </div>
    <Cascader :data="data" @on-change="changeCity"
              :clearable = "false"  :render-format="format"
              class="address-select"></Cascader>
  </div>
</template>
<script src="./index.js">

</script>

