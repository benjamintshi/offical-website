<template>
  <div class="service-desc">
    <!-- 志愿者介绍 -->
        <ul class="base-info" v-if="!noDesc && !modify">
              <li class="base-info-left">
                <img :src="userInfo.avatar" alt="">
              </li>
            <li class="base-info-right">
                <p class="title">
                  {{userInfo.userName}}
                  <span @click="modify = true" class="a-hover-style">编辑</span>
                </p>
                <div v-html="userInfo.volunteer.declaration"></div>
            </li>
        </ul>

    <!-- 修改资料 -->
      <ul class="modify-info" v-if="modify">
        <li class="empty-content" v-show="noDesc">
          <p>暂无内容</p>
          <p>请在下方编辑个人服务介绍</p>
          <hr>
        </li>
        <li>
          姓名：{{userInfo.userName}}
        </li>
        <li>
          封面：
          <div class="upload">
            <!-- 控件相关配置见 https://www.iviewui.com/components/upload -->
            <Upload
              action="http://cultrual.bbwhm.com:8087/api/upload/uploadFiles"
              :format="['jpg','jpeg','png']"
              :max-size="2048"
            >
              <img :src="userInfo.avatar" alt="" v-if="info.img">
              <div class="upload-cover"  v-if="info.img">
                更换
              </div>
              <img src="static/images/common/upload.png" alt="" v-else>
            </Upload>

          </div>
        </li>
        <li>
          个人介绍内容：
          <textarea v-model="userInfo.volunteer.declaration"></textarea>
        </li>
        <button class="common-btn" @click="submit">
          保存
        </button>
      </ul>
  </div>



</template>


<script src="./index.js">

</script>
