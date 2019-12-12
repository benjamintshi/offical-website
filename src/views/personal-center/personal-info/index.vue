<template>
  <section>
    <!-- 修改信息 -->
      <ModifyInfo v-if="modify" @success = " modify =false"></ModifyInfo>
    <!-- 个人基本信息 -->
      <BaseInfo @modify = "modify =true " v-else></BaseInfo>

  </section>


</template>


<script src="./index.js">

</script>


