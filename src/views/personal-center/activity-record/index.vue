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
      <div style="float: right;margin-top:-1em; ">
        <a class="loadMore" v-if="!isMost" @click="loadMore">查看更多...</a>
      </div>
    </div>

    <div class="table-list" v-else>
      <table >
        <tr class="title">
          <th >项目服务日期</th>
          <th>服务项目</th>
          <th>组织团队名称</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item,index) in list" :key="index">
          <td>{{item.activityStartDate}}-{{item.activityEndDate}}</td>
          <td>{{item.activityName}}</td>
          <td>{{item.teamName }}</td>
          <td class="blue" @click="toDetail(item)"> 查看详情  </td>
        </tr>
      </table>
      <div style="float: right;margin-top:-1em; ">
        <a class="loadMore" v-if="!isMost" @click="loadMore">查看更多...</a>
      </div>
    </div>
  </section>

</template>


<script src="./index.js">

</script>
