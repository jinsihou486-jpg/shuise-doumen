const data = require('../../utils/data')
const store = require('../../utils/store')
const { motionOn } = require('../../utils/motion')

Page({
  data: {
    reduce: false,
    lng: 113.24,
    lat: 22.35,
    markers: [],
    card: false,
    spot: null,
    saved: false
  },
  onShow() {
    const saved = store.read().saved || []
    const markers = data.SPOTS.map((spot, index) => ({
      id: index,
      latitude: spot.location.lat,
      longitude: spot.location.lng,
      iconPath: spot.pin,
      width: 28,
      height: 28,
      title: spot.name
    }))
    this.setData({ reduce: !motionOn(), markers, savedIds: saved })
  },
  openCard(e) {
    const spot = data.SPOTS[e.detail.markerId]
    const saved = (store.read().saved || []).indexOf(spot.spotId) >= 0
    store.write({ bend: data.orderSpots(store.read().preferences).findIndex((item) => item.spotId === spot.spotId) })
    this.setData({
      card: true,
      spot,
      saved,
      lng: spot.location.lng,
      lat: spot.location.lat
    })
  },
  close() { this.setData({ card: false }) },
  goThere() {
    wx.navigateTo({ url: '/pages/go/go?id=' + this.data.spot.spotId })
  },
  save() {
    const user = store.read()
    const saved = user.saved || []
    const id = this.data.spot.spotId
    const next = saved.indexOf(id) >= 0 ? saved.filter((item) => item !== id) : saved.concat(id)
    store.write({ saved: next })
    this.setData({ saved: next.indexOf(id) >= 0 })
  },
  nav() {
    const spot = this.data.spot
    wx.openLocation({
      latitude: spot.location.lat,
      longitude: spot.location.lng,
      name: spot.name,
      address: spot.address
    })
  }
})
