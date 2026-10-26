const data = require('../../utils/data')
const store = require('../../utils/store')
const cloud = require('../../utils/cloud')

Page({
  data: {},
  onLoad(query) {
    this.spot = data.spotById(query.id)
    this.quote = data.todayQuote().text
  },
  onReady() {
    wx.createSelectorQuery().select('#poster').fields({ node: true, size: true }).exec((res) => {
      if (!res[0]) return
      const canvas = res[0].node
      const ctx = canvas.getContext('2d')
      const dpr = wx.getWindowInfo().pixelRatio || 2
      const width = res[0].width
      const height = res[0].height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      this.canvas = canvas
      this.draw(ctx, width, height)
    })
  },
  draw(ctx, width, height) {
    const accent = data.TONES[this.spot.waterColor].accent
    const user = store.read()
    ctx.fillStyle = '#F4F1EC'
    ctx.fillRect(0, 0, width, height)
    ctx.strokeStyle = accent
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(40, 250)
    ctx.quadraticCurveTo(width / 2, 310, width - 40, 250)
    ctx.stroke()
    ctx.fillStyle = '#2C5F5D'
    ctx.font = '22px serif'
    ctx.fillText(this.quote, 24, 80, width - 48)
    ctx.font = '15px sans-serif'
    ctx.fillStyle = '#1F2329'
    ctx.fillText(this.spot.name, 24, 140)
    ctx.fillStyle = '#6d7470'
    ctx.font = '12px sans-serif'
    const who = user.nickname || '一位路过的人'
    ctx.fillText(who + ' · ' + this.spot.address, 24, 400, width - 48)
    const record = {
      spotId: this.spot.spotId,
      quote: this.quote,
      nickname: who,
      at: Date.now()
    }
    const posts = store.read().waterPosts || []
    posts.unshift(record)
    store.write({ waterPosts: posts.slice(0, 20) })
    cloud.savePost(record)
  },
  save() {
    if (!this.canvas) return
    wx.canvasToTempFilePath({
      canvas: this.canvas,
      success: (res) => {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          fail: () => wx.showToast({ title: '未能保存', icon: 'none' })
        })
      }
    })
  },
  onShareAppMessage() {
    return {
      title: this.quote,
      path: '/pages/river/river?focus=' + this.spot.spotId
    }
  }
})
