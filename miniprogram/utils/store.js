const KEY = 'shuise-user'

function blank() {
  return {
    nickname: '',
    avatarUrl: '',
    preferences: [],
    bend: 0,
    saved: [],
    waterPosts: [],
    reminder: []
  }
}

function read() {
  return Object.assign(blank(), wx.getStorageSync(KEY) || {})
}

function write(patch) {
  const next = Object.assign(read(), patch)
  wx.setStorageSync(KEY, next)
  return next
}

module.exports = { read, write }
