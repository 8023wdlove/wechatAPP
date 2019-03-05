<template>
  <div>
    <titlecom :title='recommends' v-if='recommends.name'> </titlecom>
    <div class='recommends'>
       <div v-for="(item, index) in recommends.contents" :key="index" class='recommendsnav' @click='jump(item.url)'>
        <img class="recommendspic"   :src="item.imageUrl" lazy-load="true"/>
        <div class='desc'>
          <p class='name'>{{item.name}}</p>
          <p class='description'>{{item.description}}</p>
        </div>
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
  created () {
  },
  props: ['recommends'],
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
    .recommends{
  min-height: 500rpx;
  width:750rpx;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.recommendspic{
  display: block;
  margin: 21rpx 0 0 21rpx;
  width:344rpx;
  height: 229rpx;
  border-radius:6rpx;
}
.recommendsnav{
  position: relative;
}
.desc{
   position: absolute;
   margin:16rpx;
   width:313rpx;
   height:83rpx;
   left:20rpx;
   bottom: 0rpx;
   text-align: center;
   background:rgba(255,255,255,1);
   opacity:0.8;
   border-radius:6px;
   

}
.name{
  margin-top:6rpx; 
  font-size:27rpx;
  font-family:SourceHanSansCN-Normal;
  font-weight:400;
  color:rgba(73,74,74,1);
}
.description{
  font-size:23rpx;
  font-family:SourceHanSansCN-Normal;
  font-weight:400;
  color:rgba(112,112,112,1);
}

</style>

