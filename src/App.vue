<template>
  <div id="app">
    <!--<Header></Header>-->

    <router-view>
      </router-view>
    <scroll-top />
  </div>
</template>
<script>
  import ScrollTop from "./components/ScrollTopCom.vue";
  export default {
    components: {ScrollTop }
  }
</script>
<!--<script>-->
<!--import Header from "./components/The-header/index.vue";-->
<!--export default {-->
  <!--components: { Header }-->
<!--}-->
<!--</script>-->
<style lang="less">

</style>
