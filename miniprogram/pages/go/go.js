const { spotById, TONES } = require('../../utils/data')

Page({
  data: { spot: {}, accent: '#2C5F5D', mode: 'drive' },
  onLoad(query) {
    const spot = spotById(query.id)
    this.setData({
      spot,
      accent: TONES[spot.waterColor].accent
    })
  },
  pick(e) {
    this.setData({ mode: e.currentTarget.dataset.mode })
  },
  openMap() {
    const spot = this.data.spot
    wx.openLocation({
      latitude: spot.location.lat,
      longitude: spot.location.lng,
      name: spot.name,
      address: spot.address,
      scale: 15
    })
  }
})
