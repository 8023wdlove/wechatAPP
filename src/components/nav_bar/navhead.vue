<template>
<div>
  <div class="nav-bar2"></div>
<div class='fixed'>
    <div class="nav-bar">
        <img class= "nav_head" src="../../../static/images/nav_head.png" >
        <p class='address'>{{location}}</p>
        <img class= "nav_foot" src="../../../static/images/nav_btn_search.png" >
    </div>
  </div>
</div>
</template> 
  <script>
  //  import QQMapWX from '../../utils/qqmap-wx-jssdk.js'
  var amapFile = require('../../libs/amap-wx.js')
  export default {
    data () {
      return {
        location: ''
      }
    },
    props: ['address'],
    beforeCreate () {
      var that = this
      var myAmapFun = new amapFile.AMapWX({key: '821c95655320c3754dd884f041c2487a'})
      myAmapFun.getRegeo({
        success: function (data) {
          // 成功回调
          that.location = data[0].name
          // let address = {}
          // address.longitude = data[0].longitude
          // address.latitude = data[0].latitude
          // // this.$store.commit('SETADDRESS', address)
          that.$emit('getData', data[0].longitude, data[0].latitude)
        },
        fail: function (info) {
          // 失败回调
          console.log(info)
        }
      })
    }
}
  </script>
  
<style>
  .fixed{
      position: fixed;
      left:0;
      top:0;
      z-index: 99
  }
  .nav-bar{
  width:750rpx;
  height:112rpx;
  background:rgba(255,134,1,1);
  position: relative;
}
 .nav-bar2{
  width:750rpx;
  min-height:112rpx;

}
.nav_head{
  position: absolute;
  width: 63rpx;
  height: 63rpx;
  top:31rpx;
  left:21rpx;
  /* margin: 31rpx 0rpx 19rpx 21rpx; */
}
.nav_foot{
  position: absolute;
  width: 42rpx;
  height: 42rpx;
  top:41rpx;
  right:21rpx;
  
  /* margin: 31rpx 0rpx 19rpx 21rpx; */
}
.address{
  text-align: center;
  width: 500rpx;
  display: inline-block;
  font-size: 31rpx;
  color:#FFFFFF;
  margin: 46rpx 100rpx 30rpx 130rpx;
  overflow: hidden;/*超出部分隐藏*/
  white-space: nowrap;/*不换行*/
  text-overflow:ellipsis;/*超出部分文字以...显示*/
}
</style>

