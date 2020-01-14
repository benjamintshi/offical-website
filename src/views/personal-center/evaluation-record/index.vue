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
          <td>{{item.createDatetime}}</td>
          <td>{{item.project}}</td>
          <td>{{item.content }}</td>
          <td v-if="item.replyStatus==0">待回复</td>
          <td v-if="item.replyStatus==1">已回复</td>

        </tr>
      </table>
    <Page v-if="total>10" :total="total" :pageSize="pageSize" prev-text="上一页" next-text="下一页" :current="pageNum" @on-change="changePage"/>
  </div>
</template>


<script src="./index.js">

</script>
