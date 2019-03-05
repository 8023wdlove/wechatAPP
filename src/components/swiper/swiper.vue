<template>
      <swiper class="log-item" v-if="banner.length > 0" :autoplay="autoplay" circular style='width:708rpx;height:258rpx;margin-left:21rpx;margin-rught:21rpx;'>
        <block v-for="(item, index) in banner" :key="index" >
          <swiper-item>
            <image :src="item.imageUrl" mode="scaleToFill" @click="jump(item.url,item)" style='width:708rpx;height:258rpx;'></image>
          </swiper-item>
      </block>
    </swiper>
</template>
<script>
export default {
  data () {
    return {
      autoplay: true,
      circular: true
    }
  },
  props: ['banner'],
  methods: {
    jump (urls, data) {
      console.log(this.$store.state, 8888)
      if (urls) {
        let params = urls.split('?')
        wx.navigateTo({
          url: '/pages/webview/main?url=' + params[0] + '&' + params[1]
        })
      } else {
        if (data.referId && data.referName) {
          console.log('内部跳转')
        }
      }
    }
  }
}
</script>
<style>
  .log-item1 {
  display: flex;
  flex-direction: row;
  justify-content:center; 
}
</style>



