<template>
      <div class= 'chooseblock'>
        <div class='oneblock' v-for="(item,index) in block" :key='index' @click='jump(item)'>
            <img class="oneblockpic" :src="item.imageUrl">
            <p class='blocktext'>{{item.name}}</p>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: ['block'],
  methods: {
    jump (data) {
      if (data.isStore) {
        wx.navigateTo({
          url: '/pages/storeGetLists/main?id=' + data.id + '&name=' + data.name
        })
      } else {
        wx.navigateTo({
          url: '/pages/productLists/main?id=' + data.id + '&name=' + data.name
        })
      }
    }
  }
}
</script>
<style>
.chooseblock{
  min-height: 488rpx;
  width: 750rpx;
  display: flex;
   flex-direction: row;
  flex-wrap: wrap;
}
.oneblock {
  margin: 37rpx;
  width:114rpx;
}
.blocktext{
  text-align: center;
  margin: 17rpx auto 0 auto;
  color:#666666;
  font-size:28rpx;
  font-family:SourceHanSansCN-Regular;
  font-weight:400;
}
.oneblockpic{
  width:104rpx; 
  height:104rpx; 
  margin:0 5rpx 0 5rpx;
}
</style>
