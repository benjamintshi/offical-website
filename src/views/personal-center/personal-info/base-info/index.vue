<template>
  <div class="personal-info">
      <ul>
        <li v-if="isVolunteer">
          <p class="base-info">
            <span class="title font26">王菲菲</span>
            <span class="tag"> 阳光工程</span>
            <span class="modify" @click="modifyInfo">修改</span>
           <span class="integral">200积分</span>
          </p>

          <Row>
            <i-col span="5">志愿者唯一编号</i-col>
            <i-col span="7">ygzy12364849503</i-col>
            <i-col span="5" >在职状态</i-col>
            <i-col span="7">在职</i-col>
          </Row>
          <Row>
            <i-col span="5">注册时间</i-col>
            <i-col span="7">ygzy12364849503</i-col>
            <i-col span="5" >认证时间</i-col>
            <i-col span="7">在职</i-col>
          </Row>
          <Row>
            <i-col span="5">服务区域</i-col>
            <i-col span="7">ygzy12364849503</i-col>
            <i-col span="5" >服务方式</i-col>
            <i-col span="7">在职</i-col>
          </Row>
          <Row>
            <i-col span="5">服务类别</i-col>
            <i-col span="7">ygzy12364849503</i-col>
            <i-col span="5" >特长</i-col>
            <i-col span="7">在职</i-col>
          </Row>
          <Row>
            <i-col span="5">服务对象</i-col>
            <i-col span="7">ygzy12364849503</i-col>
            <i-col span="5" >可提供服务时间</i-col>
            <i-col span="7">在职</i-col>
          </Row>
        </li>
        <li v-else>
          <p class="base-info">
            <span class="title font26">王菲菲</span>
            <span class="modify" style="margin-left: 24px;" @click="$router.push('volunteerApply')"> 成为志愿者</span>
            <span class="modify right" @click="modifyInfo">修改</span>
            <span class="integral">200积分</span>
          </p>
        </li>
        <!-- 个人信息 -->
        <li >
          <p class="title">个人信息</p>

          <Row>
            <i-col span="5">姓名</i-col>
            <i-col span="7">ygzy12364849503</i-col>
            <i-col span="5" >出生日期</i-col>
            <i-col span="7">在职</i-col>
          </Row>
          <Row>
            <i-col span="5">证件类型</i-col>
            <i-col span="7">ygzy12364849503</i-col>
            <i-col span="5" >证件号码</i-col>
            <i-col span="7">在职</i-col>
          </Row>
          <Row>
            <i-col span="5">性别</i-col>
            <i-col span="7">ygzy12364849503</i-col>
            <i-col span="5" >血型</i-col>
            <i-col span="7">在职</i-col>
          </Row>
          <Row>
            <i-col span="5">国籍</i-col>
            <i-col span="7">ygzy12364849503</i-col>
            <i-col span="5" >民族</i-col>
            <i-col span="7">在职</i-col>
          </Row>
          <Row>
            <i-col span="5">政治面貌</i-col>
            <i-col span="7">ygzy12364849503</i-col>
            <i-col span="5" >籍贯</i-col>
            <i-col span="7">在职</i-col>
          </Row>
          <Row>
            <i-col span="5">居住区域</i-col>
            <i-col span="7">ygzy12364849503</i-col>
            <i-col span="5" >联系地址</i-col>
            <i-col span="7">在职</i-col>
          </Row>
          <Row>
            <i-col span="5">联系地址邮箱</i-col>
            <i-col span="7">ygzy12364849503</i-col>
            <i-col span="5" >固定电话</i-col>
            <i-col span="7">在职</i-col>
          </Row>
          <Row>
            <i-col span="5">移动电话</i-col>
            <i-col span="7">ygzy12364849503</i-col>
            <i-col span="5" >电子邮箱</i-col>
            <i-col span="7">在职</i-col>
          </Row>
        </li>
        <!-- 院校信息 -->
        <li >
          <p class="title">院校信息</p>

          <Row>
            <i-col span="5">学历</i-col>
            <i-col span="7">ygzy12364849503</i-col>
            <i-col span="5" >毕业院校</i-col>
            <i-col span="7">在职</i-col>
          </Row>
          <Row>
            <i-col span="5">所学专业</i-col>
            <i-col span="7">ygzy12364849503</i-col>
            <i-col span="5" >专业类别</i-col>
            <i-col span="7">在职</i-col>
          </Row>
          <Row>
            <i-col span="5">中国语种</i-col>
            <i-col span="7">ygzy12364849503</i-col>
            <i-col span="5" >外语语种</i-col>
            <i-col span="7">在职</i-col>
          </Row>
        </li>
        <!-- 从业信息 -->
        <li >
          <p class="title">从业信息</p>

          <Row>
            <i-col span="5">从业状况</i-col>
            <i-col span="7">ygzy12364849503</i-col>
            <i-col span="5" >工作年限</i-col>
            <i-col span="7">在职</i-col>
          </Row>
          <Row>
            <i-col span="5">职称/职务</i-col>
            <i-col span="7">ygzy12364849503</i-col>
            <i-col span="5" >工作单位名称</i-col>
            <i-col span="7">在职</i-col>
          </Row>
          <Row>
            <i-col span="5">工作单位行业性质</i-col>
            <i-col span="7">ygzy12364849503</i-col>
            <i-col span="5" >工作单位性质</i-col>
            <i-col span="7">在职</i-col>
          </Row>
          <Row>
            <i-col span="5">所属文化单位</i-col>
            <i-col span="7">ygzy12364849503</i-col>

          </Row>
        </li>
      </ul>

  </div>



</template>


<script src="./index.js">

</script>
