const { motionOn } = require('../../utils/motion')

Page({
  data: { reduce: false },
  onLoad() {
    const reduce = !motionOn()
    this.setData({ reduce })
    if (reduce) {
      this.enter()
      return
    }
    this.timer = setTimeout(() => this.enter(), 2500)
  },
  onUnload() {
    if (this.timer) clearTimeout(this.timer)
  },
  touchStart(e) {
    this.y = e.changedTouches[0].clientY
  },
  touchEnd(e) {
    if (this.y - e.changedTouches[0].clientY > 40) this.enter()
  },
  enter() {
    if (this.left) return
    this.left = true
    wx.switchTab({ url: '/pages/river/river' })
  }
})
