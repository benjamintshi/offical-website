<template>
  <div class="service-desc">
    <!-- 志愿者介绍 -->
        <ul class="base-info" v-if="!noDesc && !modify">
              <li class="base-info-left">
                <img :src="info.img" alt="">
              </li>
            <li class="base-info-right">
                <p class="title">
                  {{info.name}}
                  <span @click="modify = true" class="a-hover-style">编辑</span>
                </p>
                <div v-html="info.content"></div>
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
          姓名：{{info.name}}
        </li>
        <li>
          封面：
          <div class="upload">
            <!-- 控件相关配置见 https://www.iviewui.com/components/upload -->
            <Upload
              action="//jsonplaceholder.typicode.com/posts/"
              :format="['jpg','jpeg','png']"
              :max-size="2048"
            >
              <img :src="info.img" alt="" v-if="info.img">
              <div class="upload-cover"  v-if="info.img">
                更换
              </div>
              <img src="static/images/common/upload.png" alt="" v-else>
            </Upload>

          </div>
        </li>
        <li>
          个人介绍内容：
          <textarea v-model="info.content"></textarea>
        </li>
        <button class="common-btn" @click="submit">
          保存
        </button>
      </ul>
  </div>



</template>


<script src="./index.js">

</script>
