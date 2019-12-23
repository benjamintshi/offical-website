<script src="./index.js"></script>
  <template>
  <ul class="other">
    <p class="title">通知公告</p>
    <li v-for="(item,index) in newslist" :key="index">

        <p>{{item.title}}</p>
        <p class="time">{{item.sendDate}}</p>
        <img style="height: 6px;width: 100%" src="static/images/villageStar/line.png" v-if="index != newslist.length-1">
    </li>
    <div style="float: right;margin-top:-1em; ">
      <a class="loadMore" v-if="!isMost" @click="loadMore">查看更多...</a>
    </div>
  </ul>

</template>



