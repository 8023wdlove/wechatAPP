<template>
  <div>
      <swiper class="log-item1" v-if="imgUrls.length > 0" indidator-dots="imgUrls.length > 1" :autoplay="autoplay" indicator-dots="true" style='width:750rpx;height:480rpx;'>
      <block v-for="(item, index) in imgUrls" :key="index" >
        <swiper-item>
          <image :src="item" mode="scaleToFill" @click="show" style='width:750rpx;height:480rpx;'></image>
        </swiper-item>
      </block>
    </swiper>

    <ul class="container log-list">
      <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
        <card :text="(index + 1) + ' . ' + log"></card>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      autoplay: true,
      logs: [],
      imgUrls: [
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/management-school-picture/7683b32e-4e44-4b2f-9c03-c21f34320870'
      ]
    }
  },

  created () {
    let logs
    wx.showTabBarRedDot({
      index: 1
    })
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
    } else {
      logs = mpvue.getStorageSync('logs') || []
    }
    this.logs = logs.map(log => formatTime(new Date(log)))
  },
  methods: {
    show () {
      console.log(4567890)
    }
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
/* image {
    width: 750rpx;
} */
.log-item1 {
  display: flex;
  flex-direction: row;
  justify-content:center; 
}
</style>
