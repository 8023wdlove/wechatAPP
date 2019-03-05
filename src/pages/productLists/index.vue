<template>
  <div v-if ="show">
    <comtitle :title="title"></comtitle>
     <winter :winter="products"></winter>
  </div>
</template>
<script>
import comtitle from '@/components/comtitle/title'
import winter from '@/components/winter/winter'
export default {
  data () {
    return {
      show: false,
      id: '',
      title: '',
      products: {
        contents: [],
        notitle: true
      }
    }
  },
  components: {
    comtitle,
    winter
  },
  onLoad (option) {
    this.products = {
      contents: [],
      notitle: true
    }
    this.id = option.id
    this.title = option.name
    this.getData()
  },
  methods: {
    getData () {
      let that = this
      this.$.post('/storeGetProducts', {
        categoryId: that.id,
        language: 'cn'
      }).then(res => {
        console.log(res.data.result, 8888)
        that.$set(that.products, 'contents', res.data.result.products)
        console.log(that.products, 9999000)
        that.show = true
        // that.modules = that.handleData(res.data.result.modules)
      })
    }
  }
}
</script>
<style scoped>
  
</style>
