<template>
  <div id="app" class="main">
    <Header></Header>

    <router-view>
    </router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "../components/The-header/index.vue";
  import Footer from "../components/The-footer/index.vue";
  export default {
    components: { Header,Footer }
  }
</script>
<style lang="less">

</style>
