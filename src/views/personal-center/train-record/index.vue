<template>
  <div class="table-list train-table">
      <table >
        <tr class="title">
          <th width="100px">培训日期</th>
          <th width="90px">培训主题</th>
          <th width="110px">组织团队名称</th>
          <th width="60px">
            状态
          </th>
          <th width="80px">报名时间</th>
          <th width="110px">参与开始时间</th>
          <th width="80px">
            培训时长
            （小时）
          </th>
          <th>操作</th>
        </tr>
        <tr v-for="(item,index) in list" :key="index">
          <td>{{item.trainingStartDate}}-{{item.trainingEndDate}}</td>
          <td>{{item.trainingName}}</td>
          <td>{{item.teamName }}</td>
          <td>{{item.joinStatus|exchangeStatus}}</td>
          <td>{{item.trainingApplyStartDate}}</td>
          <td>{{item.trainingStartDate}}</td>
          <td>{{item.trainingSumHour}}</td>
          <td >
            <span class="red" v-if="item.status ==1" @click="quit(item)"> 申请退出</span>
            <span class="yellow" v-else-if="item.status ==2" @click="quit(item)"> 放弃申请</span>
            <span class="blue" @click="toDetail(item)">查看详情 </span>
          </td>

        </tr>
      </table>
  </div>
</template>


<script src="./index.js">

</script>
