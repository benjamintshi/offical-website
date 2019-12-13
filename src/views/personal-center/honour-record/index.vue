<template>
  <div class="table-list">
      <table >
        <tr class="title">
          <th width="100px">表彰日期</th>
          <th>表彰奖励名称</th>
          <th>志愿者/团队</th>
          <th width="140px">
            表彰奖励文书名称及文号
          </th>
          <th>表彰奖励颁发者</th>
        </tr>
        <tr v-for="(item,index) in list" :key="index">
          <td>{{item.time}}</td>
          <td>{{item.project}}</td>
          <td>{{item.teamName }}</td>
          <td>{{item.timeRange}}</td>
          <td > 查看详情  </td>

        </tr>
      </table>
  </div>
</template>


<script src="./index.js">

</script>
