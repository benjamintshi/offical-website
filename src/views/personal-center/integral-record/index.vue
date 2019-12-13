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
          <td>{{item.time}}</td>
          <td>{{item.desc}}</td>
          <td>{{item.type }}</td>
          <td > {{item.integral}}  </td>

        </tr>
      </table>
  </div>
</template>


<script src="./index.js">

</script>
