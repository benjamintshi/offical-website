<template>
  <div class="table-list">
      <table >
        <tr class="title">
          <th width="110px">评价投诉日期</th>
          <th>评价团队/人</th>
          <th>投诉内容</th>
          <th width="100px">
            是否已回复
          </th>

        </tr>
        <tr v-for="(item,index) in list" :key="index">
          <td>{{item.time}}</td>
          <td>{{item.project}}</td>
          <td>{{item.teamName }}</td>
          <td>{{item.content ||"待回复"}}</td>

        </tr>
      </table>
  </div>
</template>


<script src="./index.js">

</script>
