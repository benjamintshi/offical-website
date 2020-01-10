
<template>
  <section>
    <!-- 修改信息 -->
      <ModifyInfo v-if="modify" @success = " modify =false" :userData="userInfo"></ModifyInfo>
    <!-- 个人基本信息 -->
      <BaseInfo @modify = "modify =true " @getUserInfo="getUserInfo(data)" v-else></BaseInfo>

  </section>


</template>


<script src="./index.js">

</script>


