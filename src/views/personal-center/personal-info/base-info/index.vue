<script src="./index.js"></script>
<template>
  <div class="personal-info">
      <ul>
        <li v-if="isVolunteer">
          <p class="base-info">
            <span class="title font26">{{userInfo.userName}}</span>
            <span v-if="userInfo.identity!==1 &&userInfo.identity!=0" class="tag">{{userInfo.volunteer.platformType|volunteerTypeName}}</span>
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
            <i-col span="4" >
              认证时间
            </i-col>
            <i-col span="8">
              {{userInfo.volunteer.createTime}}
              <span class="downLoad" @click="downloadCodeImg">下载证书</span>
            </i-col>
          </Row>
          <Row>
            <i-col span="5">服务区域</i-col>
            <i-col span="7">{{serviceArea || "无"}}</i-col>
            <i-col span="5" >服务方式</i-col>
            <i-col span="7">{{userInfo.volunteer.serviceMode || "无"}}</i-col>
          </Row>
          <Row>
            <i-col span="5">服务类别</i-col>
            <i-col span="7" >{{userInfo.volunteer.serviceType || "无"}}</i-col>
            <i-col span="5" >特长</i-col>
            <i-col span="7">{{userInfo.volunteer.artSpetiality || "无"}}</i-col>
          </Row>
          <Row>
            <i-col span="5">服务对象</i-col>
            <i-col span="7">{{userInfo.volunteer.serviceCrowd || "无"}}</i-col>
            <i-col span="5" >可提供服务时间</i-col>
            <i-col span="7">{{userInfo.volunteer.servicePeriod || "无"}}</i-col>
          </Row>
        </li>
        <!-- 个人信息 -->
        <li >
          <p class="title">个人信息</p>

          <Row>
            <i-col span="5">姓名</i-col>
            <i-col span="7">{{userInfo.userName || "无"}}</i-col>
            <i-col span="5" >出生日期</i-col>
            <i-col span="7">{{userInfo.volunteer.birthday || "无"}}</i-col>
          </Row>
          <Row>
            <i-col span="5">证件类型</i-col>
            <i-col span="7" v-if="userInfo.cardType==0">身份证</i-col>
            <i-col span="7" v-if="userInfo.cardType==1">港澳台通行证</i-col>
            <i-col span="5" >证件号码</i-col>
            <i-col span="7">{{userInfo.identification || "无"}}</i-col>
          </Row>
          <Row>
            <i-col span="5">性别</i-col>
            <i-col span="7">{{userInfo.gender || "无"}}</i-col>
            <i-col span="5" >血型</i-col>
            <i-col span="7">{{userInfo.gender || "无"}}</i-col>
          </Row>
          <Row>
            <i-col span="5">国籍</i-col>
            <i-col span="7">中国</i-col>
            <i-col span="5" >民族</i-col>
            <i-col span="7">{{userInfo.volunteer.nation || "无"}}</i-col>
          </Row>
          <Row>
            <i-col span="5">政治面貌</i-col>
            <i-col span="7">{{userInfo.volunteer.political || "无"}}</i-col>
            <i-col span="5" >籍贯</i-col>
            <i-col span="7">{{userInfo.volunteer.nativePlace || "无"}}</i-col>
          </Row>
          <Row>
            <i-col span="5">居住区域</i-col>
            <i-col span="7">{{userInfo.volunteer.usercity || "无"}}</i-col>
            <i-col span="5" >联系地址</i-col>
            <i-col span="7">{{userInfo.volunteer.usercity || "无"}}</i-col>
          </Row>
          <Row>
            <i-col span="5">联系地址邮箱</i-col>
            <i-col span="7">{{userInfo.email || "无"}}</i-col>
            <i-col span="5" >固定电话</i-col>
            <i-col span="7">{{userInfo.telPhone || "无"}}</i-col>
          </Row>
          <Row>
            <i-col span="5">移动电话</i-col>
            <i-col span="7">{{userInfo.mobilePhone || "无"}}</i-col>
            <i-col span="5" >电子邮箱</i-col>
            <i-col span="7">{{userInfo.email || "无"}}</i-col>
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



