import router from './router'

router.beforeEach((route, from, next) => {
   let meta = route.meta;
  if(meta.parentName){
    localStorage.setItem("activeMenu",meta.parentName);
  }else{
    localStorage.setItem("activeMenu",route.name);
  }
  if (route.name) {
    next()
  }


});
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
