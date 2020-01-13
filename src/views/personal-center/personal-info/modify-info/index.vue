<script src="./index.js"></script>
<template>
  <section>
    <div v-if="modifySuccess" class="modify-success">
      <div class="modify-success-content">
        <Icon type="ios-checkmark-circle"  size="100" color="#03be47"/>
        <p>基本信息已提交审核，请耐心等待审核结果。</p>
        <div class="action"> <span @click="$router.push('/')">去首页 </span>  <span @click="back">返回个人中心</span></div>
      </div>

    </div>
    <div class="input-base-info" v-else>
      <p class="title">修改基本信息</p>
      <p class="sub-title">志愿服务信息</p>
      <Row>
        <i-col span="4" >
          <p ><span style="letter-spacing: 50px;">姓</span>名</p>
        </i-col>
        <i-col span="20">
<<<<<<< Updated upstream
          {{userInfo.userName }}
=======
          <input type="text" placeholder="" v-model="userInfo.userName" disabled="disabled">
>>>>>>> Stashed changes
        </i-col>
      </Row>
      <Row>
        <i-col span="4" >
          <p ><span style="letter-spacing: 2px;">志愿者类</span>别</p>
        </i-col>
        <i-col span="20">
<<<<<<< Updated upstream
          <RadioGroup v-model="userInfo.volunteer.platformType" style="height: 50px;line-height: 50px;">
            <Radio label="0" style="margin-right: 58px">
              <span>文化志愿者</span>
            </Radio>
            <Radio label="1" style="margin-right: 58px">
              <span>旅游志愿者</span>
            </Radio>
            <!--<Radio label="2" style="margin-right: 58px" >-->
              <!--<span>圆梦工程</span>-->
            <!--</Radio>-->
            <!--<Radio label="3" style="margin-right: 58px">-->
              <!--<span>旅游志愿者</span>-->
            <!--</Radio>-->

          </RadioGroup>
=======
          <input type="text" placeholder="" v-model="userInfo.identification" disabled="disabled">
>>>>>>> Stashed changes
        </i-col>
      </Row>
      <div class="radioList">
        <p>是否所属以下项目</p>
        <RadioGroup v-model="userInfo.volunteer.projectName" style="line-height: 50px;">
          <Row>
            <i-col span="6">
              <Radio label="1" >
                   <span>阳光工程</span>
              </Radio>
            </i-col>
            <i-col span="6">
              <Radio label="2" >
                <span>圆梦工程</span>
              </Radio>
            </i-col>
            <i-col span="6">
                <Radio label="3" >
                  <span>乡村文艺志愿者</span>
                </Radio>
            </i-col>
            <i-col span="6">
              <Radio label="4" >
                <span>春雨工程</span>
              </Radio>
            </i-col>
            <i-col span="6">
              <Radio label="5" >
                <span>新时代文明实践中心</span>
              </Radio>
            </i-col>
          </Row>

        </RadioGroup>
      </div>
      <Row>
        <i-col span="4" >
          <p ><span style="letter-spacing: 50px;">特</span>长</p>
        </i-col>
        <i-col span="20">
<<<<<<< Updated upstream
          <input type="text" placeholder="" v-model="userInfo.special" class="line-input">
=======
          <Select v-model="userInfo.cardType" style="width:370px;" disabled="disabled">
            <Option v-for="item in cardList" :value="item.id" :key="item.value">{{ item.name }}</Option>
          </Select>
>>>>>>> Stashed changes
        </i-col>
      </Row>
      <div class="radioList">
        <p>志愿服务类别</p>
        <RadioGroup v-model="userInfo.volunteer.serviceType" style="height: 50px;line-height: 50px;">
          <Row>
            <i-col span="8">
              <Radio label="文艺演出" >
                <span>文艺演出</span>
              </Radio>
            </i-col>
            <i-col span="8">
              <Radio label="知识普及">
              <span>知识普及</span>
              </Radio>
            </i-col>
            <i-col span="8">
              <Radio label="非遗传承">
                <span>非遗传承</span>
              </Radio>
            </i-col>
          </Row>

        </RadioGroup>
      </div>
      <Row class="top20">
        <i-col span="4" >
          <p ><span style="letter-spacing: 7px;">服务区</span>域</p>
        </i-col>
        <i-col span="20">
          <Select v-model="servicePCode" style="width:140px;margin-right:35px">
            <Option v-for="item in pInfo" :value="item.areaCode" :key="item.value">{{ item.areaName }}</Option>
          </Select>
          <Select v-model="serviceCCode" style="width:140px;margin-right: 35px;">
            <Option v-for="item in serviceCInfo" :value="item.areaCode" :key="item.value">{{ item.areaName }}</Option>
          </Select>
          <Select v-model="serviceXCode"  style="width:140px;">
            <Option v-for="item in serviceXInfo" :value="item.areaCode" :key="item.value">{{ item.areaName }}</Option>
          </Select>
        </i-col>
      </Row>
      <Row class="top40">
        <i-col span="4" >
          <p ><span style="letter-spacing: 7px;">服务方</span>式</p>
        </i-col>
        <i-col span="20">
          <Select v-model="servicePCode" style="width:200px">
            <Option v-for="item in pInfo" :value="item.areaCode" :key="item.value">{{ item.areaName }}</Option>
          </Select>
        </i-col>
      </Row>
      <Row class="top40">
        <i-col span="4" >
          <p ><span style="letter-spacing: 7px;">服务对</span>象</p>
        </i-col>
        <i-col span="20">
          <Select v-model="servicePCode" style="width:200px">
            <Option v-for="item in pInfo" :value="item.areaCode" :key="item.value">{{ item.areaName }}</Option>
          </Select>
        </i-col>
      </Row>
      <div class="radioList">
        <p>可提供服务时间</p>
        <RadioGroup v-model="spevialServiceTime" style="height: 50px;line-height: 50px;">
          <Row>
            <i-col span="5">
              <Radio label="1" >
                <span>周一</span>
              </Radio>
            </i-col>
            <i-col span="5">
              <Radio label="1" >
                <span>周二</span>
              </Radio>
            </i-col>
            <i-col span="5">
              <Radio label="1" >
                <span>周三</span>
              </Radio>
            </i-col>
            <i-col span="5">
              <Radio label="1" >
                <span>周四</span>
              </Radio>
            </i-col>
            <i-col span="5">
              <Radio label="1" >
                <span>周五</span>
              </Radio>
            </i-col>
            <i-col span="5">
              <Radio label="1" >
                <span>周六</span>
              </Radio>
            </i-col>
            <i-col span="5">
              <Radio label="1" >
                <span>周日</span>
              </Radio>
            </i-col>

          </Row>


        </RadioGroup>

      </div>
      <Row style="margin-top: 60px;">
        <i-col span="4" >
          <p >可提供服务时间段</p>
        </i-col>
        <i-col span="20" >
          <input type="text" v-model="serviceTime[0]" class="line-input">
        </i-col>
      </Row>
      <p class="sub-title">个人信息</p>
      <Row>
        <i-col span="4" >
          <p ><span style="letter-spacing: 7px;">出生日</span>期</p>
        </i-col>
        <i-col span="20">
          <Select v-model="servicePCode" style="width:140px;margin-right:35px">
            <Option v-for="item in pInfo" :value="item.areaCode" :key="item.value">{{ item.areaName }}</Option>
          </Select>
          <Select v-model="serviceCCode" style="width:140px;">
            <Option v-for="item in serviceCInfo" :value="item.areaCode" :key="item.value">{{ item.areaName }}</Option>
          </Select>

        </i-col>
      </Row>
      <Row class="top40">
        <i-col span="4" >
          <p ><span style="margin-right: 50px">性</span>别</p>
        </i-col>
        <i-col span="20">
          <Select v-model="servicePCode" style="width:140px;">
            <Option v-for="item in pInfo" :value="item.areaCode" :key="item.value">{{ item.areaName }}</Option>
          </Select>

        </i-col>
      </Row>
      <Row class="top40">
        <i-col span="4" >
          <p ><span style="margin-right: 50px">民</span>族</p>
        </i-col>
        <i-col span="20">
          <Select v-model="servicePCode" style="width:140px;">
            <Option v-for="item in pInfo" :value="item.areaCode" :key="item.value">{{ item.areaName }}</Option>
          </Select>

        </i-col>
      </Row>
      <Row class="top40">
        <i-col span="4" >
          <p ><span style="letter-spacing: 7px;">政治面</span>貌</p>
        </i-col>
        <i-col span="20">
          <Select v-model="servicePCode" style="width:140px;">
            <Option v-for="item in pInfo" :value="item.areaCode" :key="item.value">{{ item.areaName }}</Option>
          </Select>
        </i-col>
      </Row>
      <Row class="top40">
        <i-col span="4" >
          <p ><span style="margin-right: 50px">籍</span>贯</p>
        </i-col>
        <i-col span="20">
          <input type="text" placeholder="" v-model="userInfo.special" class="line-input">
        </i-col>
      </Row>
      <Row class="top40">
        <i-col span="4" >
          <p ><span style="letter-spacing: 7px;">居住区</span>域</p>
        </i-col>
        <i-col span="20">
          <Select v-model="pCode" style="width:140px;margin-right:30px">
            <Option v-for="item in pInfo" :value="item.areaCode" :key="item.value">{{ item.areaName }}</Option>
          </Select>
          <Select v-model="cCode" style="width:140px;margin-right: 30px;">
            <Option v-for="item in cInfo" :value="item.areaCode" :key="item.value">{{ item.areaName }}</Option>
          </Select>
          <Select v-model="xCode" style="width:140px;">
            <Option v-for="item in xInfo" :value="item.areaCode" :key="item.value">{{ item.areaName }}</Option>
          </Select>
        </i-col>
      </Row>
      <Row class="top40">
        <i-col span="4" >
          <p ><span style="letter-spacing: 7px;">详细地</span>址</p>
        </i-col>
        <i-col span="20">
          <textarea type="text" v-model="userInfo.address"></textarea>
        </i-col>
      </Row>
      <Row class="top20">
        <i-col span="4" >
          <p >联系地址邮编</p>
        </i-col>
        <i-col span="20">
          <input type="text" placeholder="" v-model="userInfo.special" class="line-input">
        </i-col>
      </Row>
      <Row class="top20">
        <i-col span="4" >
          <p ><span style="letter-spacing: 7px;">固定电</span>话</p>
        </i-col>
        <i-col span="20">
          {{userData.mobilePhone}}
        </i-col>
      </Row>
      <Row class="top20">
        <i-col span="4" >
          <p ><span style="letter-spacing: 7px;">电子邮</span>箱</p>
        </i-col>
        <i-col span="20">
          {{userData.email }}
        </i-col>
      </Row>
      <p class="sub-title">院校信息</p>
      <Row class="top20">
        <i-col span="4" >
          <p ><span style="margin-right: 50px">学</span>历</p>
        </i-col>
        <i-col span="20">
          <Select v-model="servicePCode" style="width:140px;">
            <Option v-for="item in pInfo" :value="item.areaCode" :key="item.value">{{ item.areaName }}</Option>
          </Select>

        </i-col>
      </Row>
      <Row class="top20">
        <i-col span="4" >
          <p ><span style="letter-spacing: 7px;">所学专</span>业</p>
        </i-col>
        <i-col span="20">
          <input type="text" placeholder="" v-model="userInfo.special" class="line-input">
        </i-col>
      </Row>
      <Row class="top20">
        <i-col span="4" >
          <p ><span style="margin-right: 50px">语</span>种</p>
        </i-col>
        <i-col span="20">
          <input type="text" placeholder="" v-model="userInfo.special" class="line-input">

        </i-col>
      </Row>
      <Row class="top20">
        <i-col span="4" >
          <p ><span style="letter-spacing: 7px;">毕业院</span>校</p>
        </i-col>
        <i-col span="20">
          <input type="text" placeholder="" v-model="userInfo.special" class="line-input">
        </i-col>
      </Row>
      <Row class="top20">
        <i-col span="4" >
          <p ><span style="letter-spacing: 7px;">专业类</span>别</p>
        </i-col>
        <i-col span="20">
          <input type="text" placeholder="" v-model="userInfo.special" class="line-input">
        </i-col>
      </Row>
      <Row class="top20">
        <i-col span="4" >
          <p ><span style="letter-spacing: 7px;">外语语</span>种</p>
        </i-col>
        <i-col span="20">
          <input type="text" placeholder="" v-model="userInfo.special" class="line-input">
        </i-col>
      </Row >
      <p class="sub-title">从业信息</p>
      <Row class="top20">
        <i-col span="4" >
          <p ><span style="letter-spacing: 7px;">从业状</span>况</p>
        </i-col>
        <i-col span="10">
          <Select v-model="servicePCode" style="width:140px;">
            <Option v-for="item in pInfo" :value="item.areaCode" :key="item.value">{{ item.areaName }}</Option>
          </Select>
        </i-col>
        <i-col span="4" >
          <p ><span style="letter-spacing: 7px;">工作年</span>限</p>
        </i-col>
        <i-col span="6">
          <input type="text" placeholder="" v-model="userInfo.special" class="line-input" style="width: 50px !important;">年
        </i-col>
      </Row>
      <Row class="top20">
        <i-col span="4" >
          <p ><span style="letter-spacing: 7px;">职务/职</span>称</p>
        </i-col>
        <i-col span="10">
          <input type="text" placeholder="" v-model="userInfo.special" class="line-input" style="width: 200px !important;">
        </i-col>
        <i-col span="4" >
          <p >工作单位名称</p>
        </i-col>
        <i-col span="6">
          <input type="text" placeholder="" v-model="userInfo.special" class="line-input" style="width: 150px !important;">
        </i-col>
      </Row>
      <Row class="top20">
        <i-col span="4" >
          <p >工作单位行业性质</p>
        </i-col>
        <i-col span="10">
          <Select v-model="servicePCode" style="width:140px;margin-left: 24px;">
            <Option v-for="item in pInfo" :value="item.areaCode" :key="item.value">{{ item.areaName }}</Option>
          </Select>
        </i-col>
        <i-col span="4" >
          <p >工作单位性质</p>
        </i-col>
        <i-col span="6">
          <Select v-model="servicePCode" style="width:140px;">
            <Option v-for="item in pInfo" :value="item.areaCode" :key="item.value">{{ item.areaName }}</Option>
          </Select>
        </i-col>
      </Row>

      <button @click="submit">提交</button>
      <button @click="cancle" class="cancle">取消</button>
    </div>
  </section>





</template>



