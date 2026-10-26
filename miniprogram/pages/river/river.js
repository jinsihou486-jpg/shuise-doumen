const data = require('../../utils/data')
const store = require('../../utils/store')
const { motionOn } = require('../../utils/motion')

Page({
  focusId: '',
  data: {
    reduce: false,
    spots: [],
    bend: 0,
    current: {},
    quote: '',
    accent: '#2C5F5D',
    prefList: [],
    drawer: false,
    guideOn: true,
    guideOpen: false,
    guideText: ''
  },
  onLoad(query) {
    this.focusId = query.focus || ''
  },
  onShow() {
    const user = store.read()
    const spots = data.orderSpots(user.preferences)
    let bend = user.bend || 0
    if (this.focusId) {
      const found = spots.findIndex((item) => item.spotId === this.focusId)
      if (found >= 0) bend = found
      this.focusId = ''
    }
    if (bend >= spots.length) bend = 0
    const tone = data.toneOf(user.preferences.length ? user.preferences : [this.prefIdFor(spots[bend])])
    const quote = data.todayQuote()
    this.setData({
      reduce: !motionOn(),
      spots,
      bend,
      current: spots[bend],
      quote: quote.text,
      accent: spots[bend] ? data.TONES[spots[bend].waterColor].accent : tone.accent,
      prefList: data.PREFS.map((item) => ({
        id: item.id,
        name: item.name,
        on: user.preferences.indexOf(item.id) >= 0
      })),
      guideText: quote.text
    })
  },
  prefIdFor(spot) {
    if (!spot) return 'view'
    if (spot.waterColor === 'red') return 'photo'
    if (spot.waterColor === 'blue') return 'culture'
    return 'family'
  },
  touchStart(e) {
    this.x = e.changedTouches[0].clientX
  },
  touchEnd(e) {
    const delta = e.changedTouches[0].clientX - this.x
    if (Math.abs(delta) < 40 || this.data.drawer) return
    const dir = delta < 0 ? 1 : -1
    const bend = (this.data.bend + dir + this.data.spots.length) % this.data.spots.length
    this.focus(bend, false)
  },
  openBend(e) {
    const index = Number(e.currentTarget.dataset.index)
    this.focus(index, true)
  },
  focus(index, open) {
    const current = this.data.spots[index]
    store.write({ bend: index })
    this.setData({
      bend: index,
      current,
      accent: data.TONES[current.waterColor].accent,
      drawer: open
    })
  },
  closeDrawer() {
    this.setData({ drawer: false })
  },
  togglePref(e) {
    const id = e.currentTarget.dataset.id
    const user = store.read()
    let preferences = user.preferences.slice()
    const at = preferences.indexOf(id)
    if (at >= 0) preferences.splice(at, 1)
    else if (preferences.length < 3) preferences.push(id)
    store.write({ preferences })
    this.onShow()
  },
  toggleGuide() {
    this.setData({ guideOpen: !this.data.guideOpen })
  },
  ask(e) {
    const kind = e.currentTarget.dataset.kind
    this.setData({
      guideOpen: true,
      guideText: data.guideAnswer(kind, this.data.current)
    })
  },
  playLine() {
    this.setData({
      guideOpen: true,
      guideText: this.data.current.songLine
    })
  },
  goThere() {
    wx.navigateTo({ url: '/pages/go/go?id=' + this.data.current.spotId })
  },
  savePost() {
    wx.navigateTo({ url: '/pages/post/post?id=' + this.data.current.spotId })
  },
  makePost() {
    wx.navigateTo({ url: '/pages/post/post?id=' + this.data.current.spotId })
  },
  remind() {
    const spot = this.data.current
    const user = store.read()
    user.reminder = user.reminder || []
    user.reminder.push({ spotId: spot.spotId, name: spot.name, at: Date.now() })
    store.write({ reminder: user.reminder })
    wx.showToast({ title: '已记在本机', icon: 'none' })
  }
})
