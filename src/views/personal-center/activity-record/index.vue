<template>
  <section>

    <div class="table-list"  v-if="isVolunteer">
      <table >
        <tr class="title">
          <th >项目服务日期</th>
          <th>活动名称</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item,index) in list" :key="index">
          <td>{{item.activityStartDate}}-{{item.activityEndDate}}</td>
          <td>{{item.activityName}}</td>
          <td>
            <span>{{item.auditStatus|exchangeStatus}}</span>
          </td>
          <td class="blue" @click="toDetail(item)"> 查看详情  </td>
        </tr>
      </table>
      <Page v-if="total>10" :total="total" :pageSize="pageSize" prev-text="上一页" next-text="下一页" :current="pageNum" @on-change="changePage"/>
    </div>
  </section>

</template>


<script src="./index.js">

</script>
