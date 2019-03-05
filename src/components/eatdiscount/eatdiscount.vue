<template>
  <div class='eatdiscount' >
    <titlecom :title='eatdiscount' v-if='eatdiscount.name'> </titlecom>
    <div>
      <img class='eatpic' v-for="(item,index) in eatdiscount.contents" :key='index' :style="eatdiscount.showBorder? 'border:solid 1px #c9c9c9': null" :src="item.imageUrl" @click='jump(item.url)'>
    </div>
  </div>
</template>
<script>
import titlecom from '@/components/title/titlecom'
export default {
  data () {
    return {
      border: 1,
      text: {
        name: '堂吃折扣',
        showAll: false
      }
    }
  },
  created () {
    // console.log(this.eatdiscount, 9999)
  },
  props: ['eatdiscount'],
  components: {
    titlecom
  },
  methods: {
    jump (urls) {
      let params = urls.split('?')
      wx.navigateTo({
        url: '/pages/webview/main?url=' + params[0] + '&' + params[1]
      })
    }
  }
}
</script>
<style scoped>
    .eatpic{
      display: block;
      width:708rpx;
      height:146rpx;
      margin-left:21rpx; 
      margin-bottom: 21rpx;
      border-radius:6rpx;
      border:1px solid #c9c9c9;
    }

</style>

