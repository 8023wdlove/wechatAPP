<template>
  <div >
    <comtitle :title="title"></comtitle>
     <discount :discount='discount'></discount>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import comtitle from '@/components/comtitle/title'
import discount from '@/components/discount/discount'
export default {
  data () {
    return {
      show: false,
      id: '',
      title: '',
      discount: {
        contents: [],
        notitle: true
      }
    }
  },
  components: {
    comtitle,
    discount
  },
  onLoad (option) {
    this.deleteData()
    this.id = option.id
    this.title = option.name
    this.getData()
  },
  computed: {
    ...mapState(['SETADDRESS'])
  },
  methods: {
    getData () {
      let that = this
      this.$.post('/storeGetLists', {
        categoryId: that.id,
        longitude: that.SETADDRESS.longitude,
        latitude: that.SETADDRESS.latitude,
        language: 'cn'
      }).then(res => {
        that.discount.contents = that.handleData(res.data.result.stores)
      })
    },
    handleData (data) {
      data.forEach((item2, index2, arr2) => {
        item2.discounts.forEach((item3, index3, arr3) => {
          item3.rgba = 'color:rgba(' + item3.color[0] + ',' + item3.color[1] + ',' + item3.color[2] + ',1)'
        })
      })
      return data
    },
    deleteData () {
      this.discount = {
        contents: [],
        notitle: true
      }
    }
  }
}
</script>
<style scoped>
  
</style>
