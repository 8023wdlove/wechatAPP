<template>
  <div>
    <titlecom :title='discount' v-if="!discount.notitle"> </titlecom>
    <div class='discount'>
      <div class='discountcontent' v-for="(item,index) in discount.contents" :key="index">
        <img class='leftimage' :src="item.imageSmallUrl"/>
        <div class='leftcontent'>
          <p class='storeName'>{{item.name}} ({{item.city}})</p>
          <div class='imgcon' v-for="(item2, index2) in nums" :key="index2">
              <img class='star' v-if ="item2*2<=item.rating" src="../../../static/images/star_pre.png" >
              <img class='star' v-else-if ="item2*2>item.rating &&(item2-1)*2<item.rating" src="../../../static/images/star_half.png" >
              <img class='star' v-else src="../../../static/images/star_nor.png" >
          </div>
          <span class='comments' @click="show">{{item.review}}条评论</span>
          <span class="distance">{{item.distance}}mi</span>
          <div class='tags'>
            <div class='tagleft'>
              <span class='tagsset' v-for="(item3,index3) in item.tags" :key="index3">{{item3}} <span v-if="index3+1 !=item.tags.length" style="margin-right:9rpx;">|</span>  </span>
              <span class='priceright'>均价 ${{item.average|floor}}</span>
            </div>
          </div>
          <div class='signs' v-for="(item4,index4) in item.discounts" :key="index4">
            <img class='signspic' :src="item4.iconUrl" >
            <span class='signstxt' :style="item4.rgba">{{item4.name}}</span>
          </div>
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
      nums: [ 1, 2, 3, 4, 5 ]
    }
  },
  props: ['discount'],
  components: {
    titlecom
  },
  methods: {
    show () {
      console.log(this.discount, 889799)
    }
  },
  filters: {
    floor (data) {
      return Math.floor(data)
    }
  }
}
</script>
<style scoped>
  .discount{
  min-height: 500rpx;
  width:708rpx;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin:21rpx;
  margin-bottom: 0rpx;
  }
  .discountcontent{
  padding-bottom: 21rpx;
  }
.leftimage{
width:146rpx;
height:146rpx;
border:2rpx solid rgba(234,233,234,1);
border-radius:42rpx;
float:left;
margin-right:21rpx;
}
.leftcontent{
  float:left;
  width:537rpx;
}

.storeName{
height:32rpx;
font-size:33rpx;
padding-bottom: 21rpx;
font-family:SourceHanSansCN-Medium;
font-weight:500;
color:rgba(23,23,23,1);
}
.star{
  display:inline-block;
  width:25rpx;
  height:23rpx;
  margin-right: 6rpx;
}
.comments{
margin-left:12rpx;
height:23rpx;
font-size:25rpx;
font-family:SourceHanSansCN-Normal;
font-weight:400;
color:rgba(102,102,102,1);
}
.imgcon{
  display: inline-block;
}
.distance{
float:right;
height:22rpx;
font-size:25rpx;
font-family:SourceHanSansCN-Regular;
font-weight:400;
color:rgba(102,102,102,1);
margin-top:16rpx;
}
.tagsset{
font-size:25rpx;
font-family:SourceHanSansCN-Regular;
font-weight:400;
color:rgba(102,102,102,1); 
}
.priceright{
  margin-top:13rpx;
  float:right;
  font-size:25rpx;
  font-family:SourceHanSansCN-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
}
.signspic{
 width:23rpx;
  height:22rpx;
}
.signstxt{
  margin-left:7rpx;
  font-size:25rpx;
  font-family:SourceHanSansCN-Regular;
  font-weight:400;
}
.signs{
  height:40rpx;
}
</style>

