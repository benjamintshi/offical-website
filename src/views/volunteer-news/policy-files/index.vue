<template>
      <i-col span="16">
          <ul class="policy-files-list">
            <li v-for="(item,index) in newslist" :key="index" class="a-hover-style"  @click="toNewsDetail(item)">
              <p>{{item.title}}</p>
              <p>出台日期：{{item.time}}<span>{{item.office}}</span></p>
            </li>
            <Page v-if="total>6" :total="total" :pageSize="pageSize" prev-text="上一页" next-text="下一页" :current="pageNum" @on-change="changePage"/>

          </ul>

      </i-col>

</template>


<script src="./index.js">

</script>
