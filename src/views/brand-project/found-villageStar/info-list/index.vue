<template>
  <section>
    <!--志愿风采-->
    <div class="info-list">
      <ul class="info-list-top">
        <p class="nav a-hover-style"> <span @click="$router.push('brandProject')">品牌项目 > 河南 </span> >
          <span span @click="$router.push('villageStar')">  村宝 </span> > 志愿风采</p>
        <li class="search">
          <p>志愿风采</p>
          <div class="search-input">
            <Icon type="ios-search"  size="20"/>
            <input type="text" placeholder="输入关键字" v-model="inputValue" @change="changeValue()">
          </div>
        </li>
      </ul>
      <ul class="info-list-content">
        <li class="volunteer">
          <p class="filter" @click="filter">
            按时间排序 <img :class="desc?'transfer180':''"  src="static/images/villageStar/filter.png" alt="">
          </p>
          <div  @click="vlounteerDetail(item,'志愿风采')" v-for="(item,index) in volunteers" :key="index" :class="(index+1)%4 !=0 ?'right14':''">
            <img :src="item.img" alt="" onerror="this.src='http://zgwhzyz.bjbsh.com:180/show/img/loadingImage.jpg'">
            <p>{{item.title}}</p>
            <span>{{item.name}}</span>

          </div>
          <Page v-if="total>16" :total="total" :pageSize="pageSize" prev-text="上一页" next-text="下一页" :current="pageNum" @on-change="changePage"/>
        </li>
      </ul>
    </div>


  </section>

</template>
<script src="./index.js">

</script>
