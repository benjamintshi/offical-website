<template>
  <div class="personal-center">

    <Row class="personal-center-content">
      <i-col span="6">
        <ul class="personal-center-menu">
            <li v-for="(item,index) in tempMeun" :key="index"
                :class="activeMenu==item.to?'active':''" @click="swtichMenu(item)">
              {{item.name}}
            </li>
        </ul>
      </i-col>
      <i-col span="18">
        <router-view>
        </router-view>
      </i-col>
    </Row>
  </div>



</template>


<script src="./index.js">

</script>
