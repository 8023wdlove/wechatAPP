<template>
      <swiper class="log-item" v-if="imgUrls.length > 0" indidator-dots="imgUrls.length > 1" :autoplay="autoplay" indicator-dots="true" style='width:708rpx;height:258rpx;margin:21rpx;'>
        <block v-for="(item, index) in imgUrls" :key="index" >
          <swiper-item>
            <image :src="item" mode="scaleToFill" @click="show" style='width:708rpx;height:258rpx;'></image>
          </swiper-item>
      </block>
    </swiper>
</template>
<script>
export default {
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
  methods: {
    show () {
      console.log('l轮播图跳转')
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



