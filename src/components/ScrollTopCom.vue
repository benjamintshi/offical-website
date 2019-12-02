<template>
  <div id="goTop">
    <div class="icons" v-show="visiable" @click="handleScrollTop">
      <i class="icons-top"></i>
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
    right: .40rem;
    bottom: 1rem;
    width: .80rem;
    height: .80rem;
    border-radius: 50%;
    background: rgba(0, 0, 0, .65);
  }

  .icons:hover {
    background: rgba(0, 0, 0, .85);
  }

  .icons-top {
    display: block;
    width: .80rem;
    height: .80rem;
    background-size: .40rem;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABaUlEQVRYR+2W7U3DQBBE31QAJaQDUkJSAXQA6QAqACqADggVBCoAKoAOCBWEDgatZEcHyeX8AYqQvD/P59t3s7tjiz2H9pyfAWBQ4H8rYPtQ0mefSeqlgO0HYCVp1hWiM4DtOXACHADzrhCdAGxfAZdAffM74ELSbVslWgPYPgMi4UxSqMC2taYgrQCSRNeSQoV1VCU5BaaSnn8dwPYYeAIeJYUKG1FBHFcQb00gGimQJH+RFI2XDdtx+6OmEEWAmHXgHfgAJqW5r/YHhCuInT6xE6A6LGSPfcXktSzVe1GCVQmiBBCHjICxpGWTmiYQ0TOhxKukae7dLEBiNHHzRg31M0nVOwGxyBnVVoCuI5WZjGjaRc4tNwBsnwM3qdG0kT4DsWFe9b5vAH0crQSZu9gawHYt1X3OaEpJSs+3lTYFiGZZ/lXyZDri+zGSNIm1FKD3z0VJgdQnakMrOmHTQ7vuGwAGBQYFvgCufKAhUkYyWwAAAABJRU5ErkJggg==");
  }
</style>s
