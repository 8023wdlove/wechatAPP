<template>
  <div>
    <titlecom :title='about' v-if='about.name'> </titlecom>
    <div class='about'>
       <div v-for="(item, index) in about.contents" :key="index">
        <img :class="index+1=== about.contents.length? 'aboutpic aboutpics' : 'aboutpic'"  :src="item.imageUrl" @click="jump(item.url)"/>
      </div>
     </div>
  </div>
</template>
<script>
import titlecom from '@/components/title/titlecom'
export default {
  data () {
    return {
    }
  },
  props: ['about'],
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
  .about{
    width:708rpx;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 21rpx;
    margin-bottom: 35rpx;
    /* padding-right: 21rpx; */

  }
  .aboutpic{
    display: block;
    margin-right:15rpx;
    width:222rpx;
    height:277rpx;
    background:rgba(242,242,242,1);
    border:1rpx solid rgba(217,217,217,1)
  }
  .aboutpic.aboutpics{
     margin-right:0rpx;
  }
</style>

