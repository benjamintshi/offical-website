<template>
  <div class="personal-center">

    <Row class="personal-center-content">
      <i-col span="6">
        <ul class="personal-center-menu">
          <li v-for="(item,index) in menuList" :key="index"
              :class="activeMenu == item.id?'active':''" @click="swtichMenu(item)">
            {{item.name}}
          </li>
        </ul>
      </i-col>
      <i-col span="18">
          <ul class="contact-us">
            <li v-if="activeMenu ==1 ">
             <p> 联  系 人：  {{contactUs.contactUser}}</p>
              <p>联系电话：  {{contactUs.tel}}</p>
              <p>电子邮箱：  {{contactUs.email}}</p>
            </li>
            <li v-else>
              <p>{{aboutUs}}</p>
            </li>
          </ul>
      </i-col>
    </Row>
  </div>



</template>


<script src="./index.js">

</script>
