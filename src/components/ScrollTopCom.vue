<template>
  <div id="goTop">
    <div class="icons" v-show="visiable" @click="handleScrollTop">
      <Icon type="ios-arrow-dropup-circle a-hover-style" size="50"/>
    </div>
  </div>
</template>



<script>
  export default {
    name: "goTop",
    data() {
      return {
        scrollTop: null, //初始化scrollTop
        visiable: false, //默认不显示
      }
    },
    methods: {
      handleScroll() {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (this.scrollTop > 500) {
          this.visiable = true
        } else {
          this.visiable = false
        }
      },

      handleScrollTop() {
        let timer = null,
          that = this
        cancelAnimationFrame(timer)
        timer = requestAnimationFrame(function fn() {
          if (that.scrollTop > 0) {
            that.scrollTop -= 50
            document.body.scrollTop = document.documentElement.scrollTop = that.scrollTop;
            timer = requestAnimationFrame(fn)
          } else {
            cancelAnimationFrame(timer);
            that.visiable = false;
          }
        })
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped>

  .icons {
    position: fixed;
    right: 60px;
    bottom: 100px;
    /*width: .80rem;*/
    /*height: .80rem;*/
    /*border-radius: 50%;*/
    /*background: rgba(0, 0, 0, .65);*/
  }

  .icons:hover {
    /*background: rgba(0, 0, 0, .85);*/
  }
</style>s
