<template>
  <div class="table-list">
      <table >
        <tr class="title">
          <th width="100px">服务日期</th>
          <th>服务项目</th>
          <th>组织团队名称</th>
          <th>累计时长</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item,index) in list" :key="index">
          <td>{{item.activityStartDate}}</td>
          <td>{{item.activityName}}</td>
          <td>{{item.teamName }}</td>
          <td>{{item.serviceTime}}小时</td>
          <td class="blue" @click="toDetail(item)"> 查看详情  </td>
        </tr>
      </table>
    <div style="float: right;margin-top:-1em; ">
      <a class="loadMore" v-if="!isMost" @click="loadMore">查看更多...</a>
    </div>
  </div>
</template>


<script src="./index.js">

</script>
