function detectReduceMotion() {
  const saved = wx.getStorageSync('reduceMotion')
  if (saved === true || saved === false) return saved
  return false
}

function setReduceMotion(value) {
  wx.setStorageSync('reduceMotion', !!value)
  const app = getApp()
  if (app && app.globalData) app.globalData.reduceMotion = !!value
}

function motionOn() {
  const app = getApp()
  return !(app && app.globalData && app.globalData.reduceMotion)
}

module.exports = { detectReduceMotion, setReduceMotion, motionOn }
