const PREFS = [
  { id: 'photo', name: '拍照', tone: 'red' },
  { id: 'culture', name: '文化', tone: 'blue' },
  { id: 'view', name: '风景', tone: 'qing' },
  { id: 'family', name: '家庭', tone: 'pink' },
  { id: 'food', name: '美食', tone: 'warm' }
]

const TONES = {
  red: { accent: '#C84B3A', soft: '#F2D5D0' },
  blue: { accent: '#3A6B8C', soft: '#D4E4EF' },
  pink: { accent: '#D4787A', soft: '#F5E0E0' },
  qing: { accent: '#2C5F5D', soft: '#E8EDEF' },
  warm: { accent: '#F0C060', soft: '#F4F1EC' }
}

const QUOTES = [
  { text: '鱼灯点起，莲江村的夜就活了', tone: 'red', spotId: 'lianjiang' },
  { text: '月光光，照地堂，咸水歌儿唱过江', tone: 'blue', spotId: 'song' },
  { text: '以船代轿，以歌为媒', tone: 'pink', spotId: 'wedding' }
]

const SPOTS = [
  {
    spotId: 'lianjiang',
    name: '莲江村·鱼戏莲洲',
    waterColor: 'red',
    category: 'photo',
    pin: '/images/pin-red.png',
    songLine: '鱼灯点起，莲江村的夜就活了',
    what: '村里巡游时抬出的鱼形灯。市级非遗名录写的是莲洲地色、莲洲舞龙，鱼灯是这场活动里的装置，不是单独的名录项目。',
    from: '光绪年间，疍民到斗门围垦沙田，把鱼灯做法带到莲洲。这一句的年份来自项目文案，入村核对前标【待核实】。',
    today: '莲江村春节鱼灯会。具体日子每年不同【待核实】。平时能碰到的是村路和河道，不是天天有巡游。',
    onSite: '到了只做一件事：认出灯上的一个鳞纹，用三十秒看完它朝哪边弯。',
    address: '珠海市斗门区莲洲镇莲江村',
    location: { lat: 22.353123, lng: 113.238181 },
    locationNote: '坐标取自莲江村沙湾公开点位，文化广场精确位置【待核实】。',
    duration: '半小时',
    cost: '巡游日通常不另收费【待核实】',
    open: '日常村落可到。鱼灯会只在春节前后【待核实】。',
    activityToday: false,
    nextActivity: '最近公开记录多在春节，下一次日期【待核实】。',
    transport: {
      bus: '先到井岸或莲洲，再问莲江村方向。提示词中的固定班次尚未核对，不写成确定路线。',
      drive: '导航“莲江村”。自驾从珠海市区过去大约四十分钟【待核实】。',
      walk: '进村后沿河走。没有巡游的日子，不要在村口等人演给你看。'
    },
    driveMinutes: '约40分钟',
    driveCost: '油费路费自理'
  },
  {
    spotId: 'song',
    name: '岭南大地·赛歌',
    waterColor: 'blue',
    category: 'culture',
    pin: '/images/pin-blue.png',
    songLine: '月光光，照地堂，咸水歌儿唱过江',
    what: '沙田民歌是水上的清唱，没有伴奏，词可以当场编。它不是一篇说明文。',
    from: '光绪年间疍民围垦时把歌带到斗门。曲目数量“五千多首”未经这次核对，标【待核实】。',
    today: '岭南大地田园综合体里如果有人周末对唱，就能碰到。园内是否设固定赛歌台【待核实】。',
    onSite: '到了跟唱这一句的后半：咸水歌儿唱过江。唱不下来就听完别人的一句。',
    address: '珠海市斗门区莲洲镇石龙村石龙888号岭南大地百草园一带',
    location: { lat: 22.373247, lng: 113.252174 },
    locationNote: '坐标靠近园内公开点位。赛歌台若在园中，精确落点【待核实】。',
    duration: '一句歌一分钟，留在园里可更久',
    cost: '百草园门票公开信息约68元起，优待约58元起，以当日售票为准',
    open: '公开信息有 09:00–17:30 与 09:00–19:00 两种，以门口公示为准【待核实】。',
    activityToday: false,
    nextActivity: '周末是否有民间对唱【待核实】。没有场次时，最近的确定活动不要写成今天。',
    transport: {
      bus: '斗门大信一带可乘401路到石龙桥头，再步行约900米。提示词里的K3路与这条公开信息不符，第一版不采用K3。',
      drive: '导航“岭南大地百草园”，地址莲洲镇石龙村。',
      walk: '石龙桥头进村约900米。园内到赛歌处的步数【待核实】。'
    },
    driveMinutes: '市区出发约35–40分钟',
    driveCost: '门票约68元起'
  },
  {
    spotId: 'wedding',
    name: '岭南大地·水上婚嫁',
    waterColor: 'pink',
    category: 'family',
    pin: '/images/pin-green.png',
    songLine: '以船代轿，以歌为媒',
    what: '水上婚嫁把迎亲放在船上，过程用咸水歌唱，不是在展厅里看一组照片。',
    from: '清初已有水上嫁娶的说法，2008年列入国家级非遗。这是珠海第一个国家级非遗项目。屈大均《广东新语》里的句子常被引用，原文核对标【待核实】。',
    today: '集体婚礼和国庆仪式会在斗门办。是否固定在岭南大地的某个基地【待核实】。没有仪式的日子，碰不到十三道程序。',
    onSite: '到了只认一个动作：船怎么靠岸。不要试图看完十三段。',
    address: '珠海市斗门区莲洲镇石龙村岭南大地田园综合体',
    location: { lat: 22.3724, lng: 113.2536 },
    locationNote: '与百草园同片区，仪式点坐标为便于区分的邻近点【待核实】。',
    duration: '看一个靠岸动作约一分钟；整场仪式另计',
    cost: '日常入园门票约68元起。仪式日是否另收费【待核实】',
    open: '随百草园开放。仪式不是每天有。',
    activityToday: false,
    nextActivity: '集体婚礼、国庆场次的下一次日期【待核实】。',
    transport: {
      bus: '与百草园相同：401路到石龙桥头，步行约900米。',
      drive: '导航“岭南大地百草园”。不要导航已停止运营的灯笼沙景区。',
      walk: '进园后向水边走。花船码头是否每天开放【待核实】。'
    },
    driveMinutes: '市区出发约35分钟',
    driveCost: '门票约68元起'
  }
]

const HALL = {
  name: '斗门区文化馆',
  address: '珠海市斗门区井岸镇江湾中路2号斗门区文化艺术中心',
  phone: '18607733063',
  page: 'https://www.doumen.gov.cn/zdlyxxgk/whjgxxgk/whg/gwgk/content/post_3929967.html',
  appId: ''
}

function todayQuote() {
  const day = Math.floor(Date.now() / 86400000)
  return QUOTES[day % QUOTES.length]
}

function toneOf(prefs) {
  if (!prefs || !prefs.length) return TONES.qing
  const hit = PREFS.find((item) => item.id === prefs[0])
  return TONES[hit ? hit.tone : 'qing']
}

function orderSpots(prefs) {
  const rank = { photo: 'lianjiang', culture: 'song', family: 'wedding', view: 'song', food: 'lianjiang' }
  const first = prefs && prefs.length ? rank[prefs[0]] : ''
  return SPOTS.slice().sort((a, b) => (a.spotId === first ? -1 : b.spotId === first ? 1 : 0))
}

function spotById(id) {
  return SPOTS.find((item) => item.spotId === id) || SPOTS[0]
}

function guideAnswer(kind, spot) {
  if (kind === 'quote') return todayQuote().text
  if (kind === 'spot') return spot.what
  if (kind === 'go') return spot.transport.drive
  return '这句还没有经过审定，我不能接着编。'
}

module.exports = {
  PREFS,
  TONES,
  QUOTES,
  SPOTS,
  HALL,
  todayQuote,
  toneOf,
  orderSpots,
  spotById,
  guideAnswer
}
