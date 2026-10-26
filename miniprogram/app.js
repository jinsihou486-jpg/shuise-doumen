const { detectReduceMotion } = require('./utils/motion')

App({
  globalData: {
    reduceMotion: false,
    cloudReady: false
  },
  onLaunch() {
    this.globalData.reduceMotion = detectReduceMotion()
    const env = ''
    if (env && wx.cloud) {
      wx.cloud.init({ env, traceUser: true })
      this.globalData.cloudReady = true
    }
  }
})
