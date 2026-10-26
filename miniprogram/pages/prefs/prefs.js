const data = require('../../utils/data')
const store = require('../../utils/store')
const motion = require('../../utils/motion')

Page({
  data: { list: [], reduce: false },
  onShow() {
    const prefs = store.read().preferences
    this.setData({
      reduce: !require('../../utils/motion').motionOn(),
      list: data.PREFS.map((item) => ({ id: item.id, name: item.name, on: prefs.indexOf(item.id) >= 0 }))
    })
  },
  toggle(e) {
    const id = e.currentTarget.dataset.id
    const user = store.read()
    const preferences = user.preferences.slice()
    const at = preferences.indexOf(id)
    if (at >= 0) preferences.splice(at, 1)
    else if (preferences.length < 3) preferences.push(id)
    else {
      wx.showToast({ title: '最多三个', icon: 'none' })
      return
    }
    store.write({ preferences })
    this.onShow()
  },
  toggleMotion() {
    const reduce = !this.data.reduce
    motion.setReduceMotion(reduce)
    this.setData({ reduce })
  }
})
