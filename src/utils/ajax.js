
let xcxApi = {
  post: (url, data) => {
    if (!url) {
      console.log('https: no url')
      return
    }
    wx.showLoading({
      title: '正在获取数据...',
      icon: 'loading'
    })
    return new Promise((resolve, reject) => {
      wx.request({
        url: `https://gesoo.herokuapp.com/parse/functions${url}`,
        method: 'post',
        data: data || '',
        header,
        success (res) {
          wx.hideLoading()
          resolve(res)
        },
        fail (res) {
          wx.hideLoading()
          console.log('fail')
          reject(res)
        }
      })
    })
  },
  get: (url, data) => {
    if (!url) {
      console.log('https: no url')
      return
    }
    wx.showLoading({
      title: '正在获取数据...',
      icon: 'loading'
    })
    return new Promise((resolve, reject) => {
      wx.request({
        url: `https://gesoo.herokuapp.com/parse/functions${url}`,
        method: 'get',
        data: data || '',
        header,
        success (res) {
          wx.hideLoading()
          resolve(res)
        },
        fail (res) {
          wx.hideLoading()
          console.log('fail')
          reject(res)
        }
      })
    })
  }
}
export default{
  xcxApi
}
