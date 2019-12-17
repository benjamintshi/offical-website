<template>
  <div id="app">
    <!--<Header></Header>-->

    <router-view v-if="isRouterAlive">
      </router-view>
    <scroll-top />
  </div>
</template>
<script>
  import ScrollTop from "./components/ScrollTopCom.vue";
  export default {
    components: {ScrollTop },
    provide () {    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
      return {
        reload: this.reload
      }
    },
    data() {
      return{
        isRouterAlive: true                    //控制视图是否显示的变量
      }
    },
    methods: {
      reload () {
        this.isRouterAlive = false;            //先关闭，
        this.$nextTick(function () {
          this.isRouterAlive = true;         //再打开
        })
      }
    }
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
