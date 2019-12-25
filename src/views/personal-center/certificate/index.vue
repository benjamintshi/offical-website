<template>
  <div class="certificate">
    <img :src="list.url" >
    <div v-if="list.status==0">
        <button class="gray">下载证书</button>
      <p>证件已失效，去激活>></p>
    </div>
    <div v-else>
      <button href="info.img" @click="downloadCodeImg" >下载证书</button>
    </div>
  </div>
</template>
<script src="./index.js">

</script>
