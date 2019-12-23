<script src="./index.js"></script>
<template>
  <div class="personal-info">
      <ul>
        <li v-if="isVolunteer">
          <p class="base-info">
            <span class="title font26">{{userInfo.userName}}</span>
            <span class="tag" v-if="userInfo.volunteer.platformType==0">文化志愿者</span>
            <span class="tag" v-if="userInfo.volunteer.platformType==1">阳光工程</span>
            <span class="tag" v-if="userInfo.volunteer.platformType==2">圆梦工程</span>
            <span class="tag" v-if="userInfo.volunteer.platformType==3">旅游志愿者</span>
            <span class="modify right" @click="modifyInfo ">修改</span>
           <span class="integral">{{userInfo.volunteer.coin}}积分</span>
          </p>

          <Row>
            <i-col span="5">志愿者唯一编号</i-col>
            <i-col span="7">{{userInfo.volunteer.volunteerId}}</i-col>
            <i-col span="5" >在职状态</i-col>
            <i-col span="7" v-if="userInfo.volunteer.workStatus==1">在职</i-col>
            <i-col span="7 " v-if="userInfo.volunteer.workStatus==0">离职</i-col>
          </Row>
          <Row>
            <i-col span="5">注册时间</i-col>
            <i-col span="7">{{userInfo.volunteer.createTime}}</i-col>
            <i-col span="5" >
              认证时间
            </i-col>
            <i-col span="7">
              {{userInfo.volunteer.createTime}}
              <span class="downLoad" @click="downloadCodeImg">下载证书</span>
            </i-col>
          </Row>
          <Row>
            <i-col span="5">服务区域</i-col>
            <i-col span="7">{{serviceArea}}</i-col>
            <i-col span="5" >服务方式</i-col>
            <i-col span="7">{{userInfo.volunteer.serviceMode}}</i-col>
          </Row>
          <Row>
            <i-col span="5">服务类别</i-col>
            <i-col span="7" >{{userInfo.volunteer.serviceType}}</i-col>
            <i-col span="5" >特长</i-col>
            <i-col span="7">{{userInfo.volunteer.artSpetiality}}</i-col>
          </Row>
          <Row>
            <i-col span="5">服务对象</i-col>
            <i-col span="7">{{userInfo.volunteer.serviceCrowd}}</i-col>
            <i-col span="5" >可提供服务时间</i-col>
            <i-col span="7">{{userInfo.volunteer.servicePeriod}}</i-col>
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
            <i-col span="7">{{userInfo.userName}}</i-col>
            <i-col span="5" >出生日期</i-col>
            <i-col span="7">{{userInfo.volunteer.birthday}}</i-col>
          </Row>
          <Row>
            <i-col span="5">证件类型</i-col>
            <i-col span="7" v-if="userInfo.cardType==0">身份证</i-col>
            <i-col span="7" v-if="userInfo.cardType==1">港澳台通行证</i-col>
            <i-col span="5" >证件号码</i-col>
            <i-col span="7">{{userInfo.identification}}</i-col>
          </Row>
          <Row>
            <i-col span="5">性别</i-col>
            <i-col span="7">{{userInfo.gender}}</i-col>
            <i-col span="5" >血型</i-col>
            <i-col span="7">{{userInfo.gender}}</i-col>
          </Row>
          <Row>
            <i-col span="5">国籍</i-col>
            <i-col span="7">中国</i-col>
            <i-col span="5" >民族</i-col>
            <i-col span="7">{{userInfo.volunteer.nation}}</i-col>
          </Row>
          <Row>
            <i-col span="5">政治面貌</i-col>
            <i-col span="7">{{userInfo.volunteer.political}}</i-col>
            <i-col span="5" >籍贯</i-col>
            <i-col span="7">{{userInfo.volunteer.nativePlace}}</i-col>
          </Row>
          <Row>
            <i-col span="5">居住区域</i-col>
            <i-col span="7">{{userInfo.volunteer.usercity}}</i-col>
            <i-col span="5" >联系地址</i-col>
            <i-col span="7">{{userInfo.volunteer.usercity}}</i-col>
          </Row>
          <Row>
            <i-col span="5">联系地址邮箱</i-col>
            <i-col span="7">{{userInfo.email}}</i-col>
            <i-col span="5" >固定电话</i-col>
            <i-col span="7">{{userInfo.telPhone}}</i-col>
          </Row>
          <Row>
            <i-col span="5">移动电话</i-col>
            <i-col span="7">{{userInfo.mobilePhone}}</i-col>
            <i-col span="5" >电子邮箱</i-col>
            <i-col span="7">{{userInfo.email}}</i-col>
          </Row>
        </li>
        <!-- 院校信息 -->
        <li >
          <p class="title">院校信息</p>

          <Row>
            <i-col span="5">学历</i-col>
            <i-col span="7">{{userInfo.volunteer.education}}</i-col>
            <i-col span="5" >毕业院校</i-col>
            <i-col span="7">{{userInfo.volunteer.school}}</i-col>
          </Row>
          <Row>
            <i-col span="5">所学专业</i-col>
            <i-col span="7">{{userInfo.volunteer.specialty}}</i-col>
            <i-col span="5" >专业类别</i-col>
            <i-col span="7">{{userInfo.volunteer.specialtyType}}</i-col>
          </Row>
          <Row>
            <i-col span="5">中国语种</i-col>
            <i-col span="7">{{userInfo.volunteer.langZh}}</i-col>
            <i-col span="5" >外语语种</i-col>
            <i-col span="7">{{userInfo.volunteer.langEn}}</i-col>
          </Row>
        </li>
        <!-- 从业信息 -->
        <li >
          <p class="title">从业信息</p>

          <Row>
            <i-col span="5">从业状况</i-col>
            <i-col span="7" v-if="userInfo.volunteer.workStatus==0">离职</i-col>
            <i-col span="7" v-if="userInfo.volunteer.workStatus==1">在职</i-col>
            <i-col span="5" >工作年限</i-col>
            <i-col span="7">{{userInfo.volunteer.workYear}}</i-col>
          </Row>
          <Row>
            <i-col span="5">职称/职务</i-col>
            <i-col span="7">{{userInfo.volunteer.workPosition}}</i-col>
            <i-col span="5" >工作单位名称</i-col>
            <i-col span="7">{{userInfo.volunteer.userUnitName}}</i-col>
          </Row>
          <Row>
            <i-col span="5">工作单位行业性质</i-col>
            <i-col span="7">{{userInfo.volunteer.businessProperty}}</i-col>
            <i-col span="5" >工作单位性质</i-col>
            <i-col span="7">{{userInfo.volunteer.unitProperty}}</i-col>
          </Row>
          <Row>
            <i-col span="5">所属文化单位</i-col>
            <i-col span="7">{{userInfo.unitName}}</i-col>

          </Row>
        </li>
      </ul>

  </div>



</template>



