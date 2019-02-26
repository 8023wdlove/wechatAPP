<template>
      <div class= 'chooseblock'>
        <div class='oneblock' v-for="(item,index) in blocks" :key='index'>
            <img class="oneblockpic" :src="item.src">
            <p class='blocktext'>{{item.txt}}</p>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      blocks: [
        {
          src: '/static/images/user.png',
          txt: '美肴'
        },
        {
          src: '/static/images/user.png',
          txt: '美味佳肴'
        },
        {
          src: '/static/images/user.png',
          txt: '美肴'
        },
        {
          src: '/static/images/user.png',
          txt: '美味佳肴'
        },
        {
          src: '/static/images/user.png',
          txt: '美佳肴'
        },
        {
          src: '/static/images/user.png',
          txt: '美味佳肴'
        },
        {
          src: '/static/images/user.png',
          txt: '美味'
        },
        {
          src: '/static/images/user.png',
          txt: '美味'
        }
      ]
    }
  }
}
</script>
<style>
.chooseblock{
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
