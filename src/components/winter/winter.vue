<template>
  <div>
    <titlecom :title='winter' v-if='!winter.notitle||winter.name'> </titlecom>
    <div class='winter'>
        <div class='oneblock' v-for="(item,index) in winter.contents" :key='index'>
          <div class='imgbg'>
            <img class='winterpic' :src="item.imageSmallUrl" :style="winter.showBorder? 'border:2rpx solid #c9c9c9':null">
            <div class='txtdesc'>
              <p class='notes'>{{item.name}}</p>
            </div>
          </div>
          <p class='align price'>${{item.priceCurrent}}</p>
          <div class ='align buy'>来一个</div>
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
  props: ['winter'],
  components: {
    titlecom
  }
}
</script>
<style scoped>
.winter{
  width:750rpx;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.imgbg{
  position: relative;
}
.txtdesc{
  position: absolute;
  left:19rpx;
  bottom:23rpx;
  width:296rpx;
  height:35rpx;
  background:rgba(255,255,255,1);
  border-radius:18rpx;
}
.notes{
  text-align: center;
  margin:0 auto;
  width:268rpx;
  height:35rpx;
  font-size:25rpx;
  font-family:SourceHanSansCN-Regular;
  font-weight:400;
  color:rgba(51,51,51,1);
  overflow: hidden;/*超出部分隐藏*/  white-space: nowrap;/*不换行*/
  text-overflow:ellipsis;/*超出部分文字以...显示*/
}
.price{
  height:30rpx;
  font-size:31rpx;
  font-family:SourceHanSansCN-Regular;
  font-weight:400;
  color:rgba(255,134,1,1);
  margin-bottom: 19rpx;

}
.buy{
  width:146rpx;
  height:50rpx;
  border:2rpx solid rgba(239,140,52,1);
  border-radius:25rpx;
  text-align: center;
  font-size:29rpx;
  font-family:SourceHanSansCN-Regular;
  font-weight:400;
  color:rgba(255,134,1,1);
}
.oneblock{
  margin: 21rpx;
  width:333rpx;
  display: flex;
  flex-direction: column;
  align-items: center;


  /* justify-content: center; */
  /* align-items:center; */
}
.winterpic{
  width:333rpx;
  height:223rpx;
  border-radius:42rpx;
}

</style>

