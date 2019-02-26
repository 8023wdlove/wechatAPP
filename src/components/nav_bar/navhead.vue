<template>
    <div class="nav-bar">
        <img class= "nav_head" src="../../../static/images/nav_head.png" >
        <p class='address'>不超出部分字以 出部出部出部</p>
        <img class= "nav_foot" src="../../../static/images/nav_btn_search.png" >
    </div>
</template>
<style>
  .nav-bar{
  width:750rpx;
  height:112rpx;
  background:rgba(255,134,1,1);
  position: relative;
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
  width: 269rpx;
  display: inline-block;
  font-size: 31rpx;
  color:#FFFFFF;
  margin: 46rpx 241rpx 34rpx 241rpx;
  overflow: hidden;/*超出部分隐藏*/
  white-space: nowrap;/*不换行*/
  text-overflow:ellipsis;/*超出部分文字以...显示*/
}
</style>

