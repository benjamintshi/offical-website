<template>
  <div class="table-list">
      <table >
        <tr class="title">
          <th width="100px">日期</th>
          <th>描述</th>
          <th>类型</th>
          <th>累计积分</th>
        </tr>
        <tr v-for="(item,index) in list" :key="index">
          <td>{{item.createDatetime}}</td>
          <td>{{item.des}}</td>
          <td v-if="item.itemType==1">志愿活动</td>
          <td v-if="item.itemType==2">培训</td>
          <td > {{item.coin}}  </td>

        </tr>
      </table>
    <div style="float: right;">
      <a class="loadMore" v-if="!isMost" @click="loadMore">查看更多...</a>
    </div>
  </div>
</template>


<script src="./index.js">

</script>
