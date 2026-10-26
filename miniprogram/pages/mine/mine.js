const store = require('../../utils/store')
const { HALL } = require('../../utils/data')

Page({
  data: { name: '', avatar: '', hall: HALL },
  onShow() {
    const user = store.read()
    this.setData({ name: user.nickname, avatar: user.avatarUrl })
  },
  onAvatar(e) {
    const avatarUrl = e.detail.avatarUrl
    store.write({ avatarUrl })
    this.setData({ avatar: avatarUrl })
  },
  onName(e) {
    const nickname = e.detail.value
    store.write({ nickname })
    this.setData({ name: nickname })
  },
  hall() {
    wx.showModal({
      title: HALL.name,
      content: HALL.address + '\n文化馆自己的小程序账号还没填，先打开公开介绍。',
      confirmText: '复制介绍链接',
      success: (res) => {
        if (!res.confirm) return
        wx.setClipboardData({ data: HALL.page })
      }
    })
  },
  prefs() { wx.navigateTo({ url: '/pages/prefs/prefs' }) },
  about() { wx.navigateTo({ url: '/pages/about/about' }) }
})
