<template>
  <div class="table-list">
      <table >
        <tr class="title">
          <th width="100px">加入日期</th>
          <th>团队名称</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item,index) in list" :key="index">
          <td>{{item.time}}</td>
          <td>{{item.teamName}}</td>
          <td>{{item.status | exchangeStatus}}</td>
          <td v-if="item.status ==1" class="yellow"> 放弃申请  </td>
          <td v-else-if="item.status ==2" class="red" > 申请退出  </td>
          <td v-else class="blue"> 放弃申请  </td>

        </tr>
      </table>
  </div>
</template>


<script src="./index.js">

</script>
