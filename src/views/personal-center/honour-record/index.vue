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
          <td>{{item.createDatetime}}</td>
          <td>{{item.honorName}}</td>
          <td v-if="item.type==1">个人</td>
          <td v-if="item.type==2">团体</td>
          <td>{{item.honorNo}}</td>
          <td><a @click="queryDetails(item.honorCover)"> 查看详情  </a></td>
        </tr>
      </table>
    <Page v-if="total>10" :total="total" :pageSize="pageSize" prev-text="上一页" next-text="下一页" :current="pageNum" @on-change="changePage"/>
  </div>
</template>


<script src="./index.js">

</script>
