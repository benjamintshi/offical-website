<template>
  <div class="table-list">
      <table >
        <tr class="title">
          <th width="100px">申请日期</th>
          <th>团队名称</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item,index) in list" :key="index">
          <td>{{item.joinTime}}</td>
          <td>{{item.teamName}}</td>
          <td v-if="item.volunteerAuditStatus ==0" > 申请中  </td>
          <td v-else-if="item.volunteerAuditStatus ==1"  > 已加入  </td>
          <td v-else-if="item.volunteerAuditStatus ==2"  > 已驳回  </td>
          <td v-if="item.volunteerAuditStatus ==0" > <a class="yellow">放弃申请</a>  </td>
          <td v-if="item.volunteerAuditStatus ==1" > <a class="red">退出申请 </a> </td>
          <td v-if="item.volunteerAuditStatus ==2" > <a class="blue">- </a> </td>
        </tr>
      </table>
    <div style="float: right;">
      <a class="loadMore" v-if="!isMost" @click="loadMore">查看更多...</a>
    </div>
  </div>
</template>


<script src="./index.js">

</script>
