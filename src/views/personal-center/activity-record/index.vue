<template>
  <section>
    <div class="table-list" v-if="isVolunteer">
      <table >
        <tr class="title">
          <th >项目服务日期</th>
          <th>服务项目</th>
          <th>组织团队名称</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item,index) in list" :key="index">
          <td>{{item.time}}</td>
          <td>{{item.project}}</td>
          <td>{{item.teamName }}</td>
          <td class="blue" @click="toDetail(item)"> 查看详情  </td>
        </tr>
      </table>
    </div>
    <div class="table-list" v-else>
      <table >
        <tr class="title">
          <th >项目服务日期</th>
          <th>活动名称</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item,index) in list" :key="index">
          <td>{{item.time}}</td>
          <td>{{item.project}}</td>
          <td>
            <span v-if="item.status ==1">待开始</span>
            <span v-if="item.status ==2">进行中</span>
            <span v-if="item.status ==3">已驳回</span>
          </td>
          <td class="blue" @click="toDetail(item)"> 查看详情  </td>
        </tr>
      </table>
    </div>
  </section>

</template>


<script src="./index.js">

</script>
