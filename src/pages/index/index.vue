<template>
  <div class='nav'>
    <!--  头部组件 --->
    <headnav @getData='getData'></headnav>
    <div class="swipernav" > <!--  轮播图组件type = 0 --->
        <swipe :banner='banner'></swipe>
    </div>
    <chooseblock :block='block'></chooseblock> <!--  方块 --->
     <div v-for="(item3,index3) in modules" :key="index3">  <!-- 组件根据type循环 --->
     <recommends v-if="item3.type=== 5" :recommends='item3'></recommends>
     <discount v-if="item3.type=== 2" :discount='item3'></discount>
     <eatdiscount v-if="item3.type=== 7" :eatdiscount='item3'></eatdiscount>
     <winter v-if="item3.type=== 3" :winter='item3'></winter>
     <about v-if="item3.type=== 6" :about='item3'></about>
     </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import card from '@/components/card'
import headnav from '@/components/nav_bar/navhead'
import swipe from '@/components/swiper/swiper'
import chooseblock from '@/components/block/chooseblock'
import recommends from '@/components/recommends/recommends'
import discount from '@/components/discount/discount'
import eatdiscount from '@/components/eatdiscount/eatdiscount'
import winter from '@/components/winter/winter'
import about from '@/components/about/about'
export default {
  data () {
    return {
      address: {
        longitude: '',
        latitude: ''
      },
      modules: [],
      block: [],
      banner: []
    }
  },

  components: {
    card,
    headnav,
    swipe,
    chooseblock,
    recommends,
    discount,
    eatdiscount,
    winter,
    about
  },
  created () {
  },
  methods: {
    ...mapMutations({
      address2: 'SETADDRESS'
    }
    ),
    getData (longitude, latitude) {
      var that = this
      let localtions = {
        longitude,
        latitude
      }
      that.address2(localtions)
      this.$.post('/storeGetHome', {
        maxType: 7,
        longitude,
        language: 'cn',
        latitude
      }).then(res => {
        that.modules = that.handleData(res.data.result.modules)
      })
    },
    handleData (data) {
      let that = this
      data.forEach((item, index, arr) => {
        if (item.type === 0) {
          that.banner = item.contents
        }
        if (item.type === 1) {
          that.block = item.contents
        }
        if (item.type === 2) {
          item.contents.forEach((item2, index2, arr2) => {
            item2.discounts.forEach((item3, index3, arr3) => {
              item3.rgba = 'color:rgba(' + item3.color[0] + ',' + item3.color[1] + ',' + item3.color[2] + ',1)'
            })
          })
        }
      })
      return data
    }
  }
}
</script>

<style scoped>
.swipernav{
  width:750rpx;
  min-height:158 rpx;

}


</style>
