
<template>
  <web-view :src="url"></web-view>
</template>
<script>
export default {
  data () {
    return {
      url: ''
    }
  },
  onLoad: function (options) {
    this.url = options.url + '?id=' + options.id
    wx.showShareMenu({
      withShareTicket: true
    })
    // wx.showActionSheet({
    //   itemList: ['A', 'B', 'C'],
    //   success (res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail (res) {
    //     console.log(res.errMsg)
    //   }
    // })
  }
}
</script>