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
              :on-success="onUploadSuccess"
              :action="upload.url"
              :format="['jpg','jpeg','png']"
              :max-size="2048"
            >
              <img :src="userInfo.avatar" alt="">
              <div class="upload-cover">
                更换
              </div>
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
