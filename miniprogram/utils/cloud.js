const data = require('./data')

const ENV = ''

function ready() {
  const app = getApp()
  return !!(ENV && app && app.globalData && app.globalData.cloudReady && wx.cloud)
}

function getSpots() {
  if (!ready()) return Promise.resolve(data.SPOTS)
  return wx.cloud.database().collection('spots').get().then((res) => {
    return res.data && res.data.length ? res.data : data.SPOTS
  }).catch(() => data.SPOTS)
}

function savePost(post) {
  if (!ready()) return Promise.resolve(post)
  return wx.cloud.database().collection('waterposts').add({ data: post }).then(() => post).catch(() => post)
}

module.exports = { ENV, ready, getSpots, savePost }
