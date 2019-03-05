<template>
<div>
  <div class='storehead2'></div>
    <div class='fixed'>
      <div class='storehead'>
        <img class='storepic' @click="back" src="../../../static/images/nav_btn_back.png">
        <span class='headTilte'>{{title}}</span>
        <img class='sort'  @click="sort" src="../../../static/images/nav_btn_screen.png">
        <img class='search' @click="search" src="../../../static/images/nav_btn_search.png">
      </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: ''
    }
  },
  props: ['title'],
  methods: {
    sort () {
      console.log('sort')
    },
    search () {
      console.log('search')
    },
    back () {
      // this.$emit('deleteData')
      wx.navigateBack()
    }
  }
}
</script>
<style scoped>
.fixed{
  position: fixed;
  left:0;
  top:0;
}
.storehead2{
    min-height:100rpx;
    width:750rpx;

  }
  .storehead{
    height:100rpx;
    width:750rpx;
    background:rgba(255,134,1,1);
    position: relative;
    text-align: center;
  }
  .storepic{
    position: absolute;
    width:42rpx;
    height:42rpx;
    left:21rpx;
    bottom:29rpx;
  }
  .headTilte{
    /* position: absolute;

    left:344rpx;
    bottom:34rpx; */
    margin-top: 34rpx ;
    height:100rpx;
    line-height: 100rpx;
    font-size:33rpx;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);

  }
  .sort{
     position: absolute;
      width:42rpx;
      height:42rpx;
      right:104rpx;
      bottom:29rpx;
  }
  .search{
       position: absolute;
      width:42rpx;
      height:42rpx;
      right:21rpx;
      bottom:29rpx;
  }

</style>
