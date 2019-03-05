
<template>
       <div class='recommend'>
       <div class='leftrecommend'>{{title.name}}</div>
       <div class='rightrecommend' v-if='title.showAll'>
        <span >查看全部</span>
        <img class='arrow' src="../../../static/images/btn_more.png">
         </div>
     </div>
</template>
<script>
export default {
  props: ['title'],
  created () {
  }
}
</script>
<style scoped>
.recommend{
  display: flex;
  padding: 21rpx 21rpx 21rpx 21rpx;
  flex-direction: row;
  justify-content: space-between;
}
.leftrecommend {
  font-size:33rpx;
  font-family:SourceHanSansCN-Medium;
  font-weight:500;
  color:rgba(255,134,1,1);
}
.rightrecommend{
  font-size:29rpx;
  font-family:SourceHanSansCN-Regular;
  font-weight:400;
  color:rgba(153,153,153,1);
}
.arrow{
  width:13rpx;
  height:23rpx;
  margin-left:15rpx;
}
</style>

