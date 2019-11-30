<template>
  <div class="input-base-info">
    <p class="title">个人基本信息填写</p>
    <Row>
      <i-col span="4" >
        <p ><span style="letter-spacing: 50px;">账</span>号</p>
      </i-col>
      <i-col span="20">
        <input type="text" placeholder="" v-model="formData.name">
      </i-col>
    </Row>
    <Row>
      <i-col span="4" >
        <p ><span style="letter-spacing: 7px;">证件类</span>型</p>
      </i-col>
      <i-col span="20">
        <input type="text" placeholder="" v-model="formData.name">
      </i-col>
    </Row>
    <Row>
      <i-col span="4" >
        <p ><span style="letter-spacing: 7px;">证件号</span>码</p>
      </i-col>
      <i-col span="20">
        <input type="text" placeholder="" v-model="formData.name">
      </i-col>
    </Row>
  </div>


</template>
<script src="./index.js">

</script>
