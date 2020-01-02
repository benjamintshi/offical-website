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
              <div class="search-result" v-if="showResult" >
                <p class="title">
                  搜索"<span>{{inputValue}}</span> "相关地区及活动
                </p>
                <div class="search-result-list" >
                 <Row v-for="(item,index) in searchResult" :key="index" class="a-hover-style">
                   <div @click="detail(item,index)" >
                     <i-col span="22">
                       <p class="name">{{item.name}}</p>
                       <p class="address">{{item.city}} <span>{{item.pri}}</span></p>

                     </i-col>
                     <i-col span="2" >
                       <Icon type="ios-arrow-forward" size="30" color="#CACBCC" style="margin-top: 15px;"/>
                     </i-col>
                   </div>
                 </Row>
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

