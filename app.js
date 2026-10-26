const FOCUS = [
  { id: "lantern", name: "鱼灯夜色", spotId: "lianjiang" },
  { id: "song", name: "河边对唱", spotId: "song" },
  { id: "wedding", name: "花船靠岸", spotId: "wedding" }
];

const SPOTS = [
  {
    spotId: "lianjiang",
    name: "莲江村 · 鱼戏莲洲",
    tag: "渔火夜色",
    area: "莲洲镇莲江村",
    image: "images/spot-lantern.jpg",
    line: "鱼灯点起，莲江村的夜就活了",
    blurb: "春节前后，村里会抬出鱼形灯沿河走。平时来，看到的是河道和村路。",
    what: "鱼灯是巡游时抬的灯。市级名录上的名字是莲洲地色、莲洲舞龙。鱼灯本身不是单独一项名录。",
    from: "光绪年间，疍民到斗门围垦沙田，把鱼灯做法带到莲洲。年份来自项目文案，入村核对前标【待核实】。",
    today: "莲江村春节鱼灯会。具体日子每年不同【待核实】。没有巡游的日子，不会有人在村口表演。",
    onSite: "到了只认灯上的一个鳞纹，看三十秒它朝哪边弯。",
    address: "珠海市斗门区莲洲镇莲江村",
    lat: 22.353123,
    lng: 113.238181,
    note: "地图点取莲江村沙湾的公开位置。文化广场的精确落点【待核实】。",
    openShort: "村落可到，灯会在春节",
    open: "日常可以进村。鱼灯会集中在春节前后【待核实】。",
    time: "半小时",
    cost: "巡游日通常不另收费",
    costNote: "是否收费仍【待核实】。",
    todayOn: false,
    next: "下一次灯会的日期还没公布，标【待核实】。",
    where: "这一带的西侧",
    bus: "先到井岸或莲洲，再问莲江村的方向。固定班次还没核对，页面上不写成确定路线。",
    drive: "导航搜索“莲江村”。从珠海市区过去大约四十分钟【待核实】。",
    walk: "进村后沿河走。",
    minutes: "市区出发约 40 分钟"
  },
  {
    spotId: "song",
    name: "岭南大地 · 赛歌",
    tag: "咸水歌声",
    area: "莲洲镇石龙村",
    image: "images/spot-song.jpg",
    line: "月光光，照地堂，咸水歌儿唱过江",
    blurb: "沙田民歌是水上的清唱，没有伴奏。园里若周末有人对唱，就能碰上。",
    what: "沙田民歌是清唱，词可以当场编。它不是展板上的一篇说明。",
    from: "光绪年间，歌声随围垦的船到斗门。“五千多首”还没核对，标【待核实】。",
    today: "岭南大地田园综合体里，如果周末有民间对唱，就能碰到。园内有没有固定赛歌台【待核实】。",
    onSite: "到了跟唱后半句：咸水歌儿唱过江。唱不下来，就听完别人的一句。",
    address: "珠海市斗门区莲洲镇石龙村石龙 888 号，岭南大地百草园一带",
    lat: 22.373247,
    lng: 113.252174,
    note: "坐标靠近园内公开点位。赛歌台如果在园中，精确位置【待核实】。",
    openShort: "随百草园开门",
    open: "公开时间有 09:00–17:30 和 09:00–19:00 两种，以门口公示为准【待核实】。",
    time: "听一句就够，园里可再留",
    cost: "门票约 68 元起",
    costNote: "优待约 58 元起，以当日售票为准。",
    todayOn: false,
    next: "这个周末有没有对唱【待核实】。没有公布的场次，就当今天没有表演。",
    where: "石龙村，岭南大地园内",
    bus: "401 路到石龙桥头，再步行约 900 米。",
    drive: "导航“岭南大地百草园”，地址是莲洲镇石龙村。",
    walk: "石龙桥头进村大约 900 米。进园之后到唱歌处的步数【待核实】。",
    minutes: "市区出发约 35–40 分钟"
  },
  {
    spotId: "wedding",
    name: "岭南大地 · 水上婚嫁",
    tag: "花船靠岸",
    area: "与赛歌同一园区",
    image: "images/spot-wedding.jpg",
    line: "以船代轿，以歌为媒",
    blurb: "迎亲在船上完成，过程用咸水歌唱。没有仪式的日子，看不到十三道程序。",
    what: "水上婚嫁把迎亲放在船上，不是在展厅里看一组照片。",
    from: "2008 年列入国家级非遗，是珠海第一个国家级项目。更早文献里的句子，原文核对标【待核实】。",
    today: "集体婚礼和国庆仪式时，才可能看见整场。是否固定在园内某个码头【待核实】。",
    onSite: "到了只认一个动作：船怎么靠岸。不必看完十三段。",
    address: "珠海市斗门区莲洲镇石龙村，岭南大地田园综合体",
    lat: 22.3724,
    lng: 113.2536,
    note: "和百草园在同一片。这个点是为了和赛歌分开标注【待核实】。",
    openShort: "随园区开放，仪式另算",
    open: "日常开放跟着百草园。仪式不是每天有。",
    time: "看一次靠岸约一分钟",
    cost: "门票约 68 元起",
    costNote: "仪式当天是否另收费【待核实】。",
    todayOn: false,
    next: "下一场集体婚礼或国庆仪式的日期【待核实】。",
    where: "石龙村，和赛歌同一个园，靠水边",
    bus: "与百草园相同：401 路到石龙桥头，步行约 900 米。",
    drive: "导航“岭南大地百草园”。灯笼沙景区已经停止营业，不要导航到那里。",
    walk: "进园后向水边走。花船码头是否每天开【待核实】。",
    minutes: "市区出发约 35 分钟"
  }
];

const HALL = {
  name: "斗门区文化馆",
  address: "井岸镇江湾中路 2 号文化艺术中心",
  page: "https://www.doumen.gov.cn/zdlyxxgk/whjgxxgk/whg/gwgk/content/post_3929967.html"
};

const state = {
  screen: "home",
  spotId: "song",
  focus: "song",
  mode: "bus",
  name: "",
  answer: ""
};

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem("shuise-site") || "{}");
    if (saved.name) state.name = saved.name;
    if (saved.focus) state.focus = saved.focus;
    else state.focus = ["lantern", "song", "wedding"][Math.floor(Date.now() / 86400000) % 3];
    const hit = FOCUS.find((item) => item.id === state.focus);
    state.spotId = saved.spotId || (hit ? hit.spotId : "song");
  } catch (err) {
    state.focus = "song";
  }
}
function save() {
  localStorage.setItem("shuise-site", JSON.stringify({
    focus: state.focus, name: state.name, spotId: state.spotId
  }));
}
function esc(text) {
  return String(text).replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
}
function byId(id) {
  return SPOTS.find((item) => item.spotId === id) || SPOTS[1];
}
function ordered() {
  const first = FOCUS.find((item) => item.id === state.focus);
  const id = first ? first.spotId : "song";
  return SPOTS.slice().sort((a, b) => (a.spotId === id ? -1 : b.spotId === id ? 1 : 0));
}
function current() { return byId(state.spotId); }
function todaySpot() {
  const day = Math.floor(Date.now() / 86400000) % SPOTS.length;
  const picked = ordered()[0];
  return state.focus ? picked : SPOTS[day];
}
function mapUrl(spot) {
  return "https://uri.amap.com/marker?position=" + spot.lng + "," + spot.lat + "&name=" + encodeURIComponent(spot.name);
}
function go(screen) {
  state.screen = screen;
  state.answer = "";
  render();
  window.scrollTo(0, 0);
}
function openSpot(id) {
  state.spotId = id;
  save();
  go("detail");
}

function shell(main) {
  const nav = [
    ["home", "首页"],
    ["area", "这一带"],
    ["go", "怎么走"],
    ["mine", "我的"]
  ];
  return `
    <header class="topbar">
      <button class="brand" data-go="home"><b>水色斗门</b><span>莲洲非遗水路</span></button>
      <nav class="nav">${nav.map(([id, name]) =>
        `<button class="${state.screen === id ? "on" : ""}" data-go="${id}">${name}</button>`).join("")}</nav>
    </header>
    ${main}
    <footer class="foot">配图是场面示意，用来看气氛，不是斗门现场实拍。地址、门票、班次和有没有场次，以页面文字和当天公示为准。标【待核实】的内容还不能当成已经核对过。</footer>`;
}

function home() {
  const lead = todaySpot();
  const list = ordered();
  return shell(`
    <section class="hero">
      <img src="images/hero-river.jpg" alt="水乡河道与稻田的场面示意" />
      <div class="hero-copy"><div class="inner">
        <div class="kicker">斗门 · 莲洲</div>
        <h1>顺着一条河<br>把非遗走到现场</h1>
        <p class="lead">这一版只带你去三处：莲江村的鱼灯，岭南大地的赛歌，和同一园里的水上婚嫁。每处到了只做一件事。</p>
        <div class="hero-actions">
          <button class="btn" data-open="${lead.spotId}">先看今天这一处</button>
          <button class="btn ghost" data-go="area">三处分别在哪</button>
        </div>
      </div></div>
    </section>
    <div class="wrap">
      <section class="section" style="margin-top:28px">
        <div class="section-head">
          <div><p class="kicker">今日先去</p><h2>${esc(lead.name)}</h2></div>
          <p>${lead.todayOn ? "今天有场" : "今天没有固定场次"}</p>
        </div>
        <article class="today">
          <div class="pic"><img src="${lead.image}" alt="" /><span>场面示意</span></div>
          <div class="txt">
            <div class="tag">${esc(lead.tag)}</div>
            <p class="line serif">${esc(lead.line)}</p>
            <p class="do">${esc(lead.onSite)}</p>
            <p class="meta">${esc(lead.area)} · ${esc(lead.time)} · ${esc(lead.cost)}</p>
            <div class="actions"><button class="btn" data-open="${lead.spotId}">查看这一处</button><button class="btn line" data-go="go" data-spot="${lead.spotId}">怎么走</button></div>
          </div>
        </article>
      </section>

      <section class="section">
        <div class="section-head">
          <div><p class="kicker">三处现场</p><h2>选一处，再决定去不去</h2></div>
        </div>
        <div class="choices" style="margin-bottom:14px">
          ${FOCUS.map((item) => `<button class="${state.focus === item.id ? "on" : ""}" data-focus="${item.id}">${item.name}</button>`).join("")}
        </div>
        <div class="grid">
          ${list.map((spot) => `
            <button class="spot ${spot.spotId === lead.spotId ? "on" : ""}" data-open="${spot.spotId}">
              <div class="pic"><img src="${spot.image}" alt="" /><span>场面示意</span></div>
              <div class="body">
                <span class="tag">${esc(spot.tag)}</span>
                <h3 class="serif">${esc(spot.name)}</h3>
                <p>${esc(spot.blurb)}</p>
                <p class="meta">${esc(spot.area)} · ${esc(spot.time)}</p>
              </div>
            </button>`).join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-head"><div><p class="kicker">去之前</p><h2>三件事先看完</h2></div></div>
        <ol class="know">
          <li><b>灯笼沙已经停运</b><span>不要把它设成目的地，也不要按旧攻略导航过去。</span></li>
          <li><b>鱼灯不是名录名称</b><span>名录上写的是莲洲地色、莲洲舞龙。鱼灯是巡游用的灯。</span></li>
          <li><b>没有场次就不要等表演</b><span>鱼灯多在春节，赛歌和对歌要看当天有没有人唱。</span></li>
        </ol>
      </section>
    </div>`);
}

function detail() {
  const spot = current();
  const asks = [
    ["what", "这是什么", spot.what],
    ["today", "今天有没有", spot.todayOn ? "今天有。" : "今天没有固定场次。" + spot.next],
    ["go", "怎么去，一句话", spot.bus]
  ];
  return shell(`
    <div class="page-hero"><button class="back" data-go="home">← 返回首页</button></div>
    <div class="wrap" style="padding-top:0">
      <div class="cover"><img src="${spot.image}" alt="" /><span>场面示意</span></div>
      <div class="title-row">
        <div>
          <div class="tag">${esc(spot.tag)}</div>
          <h1>${esc(spot.name)}</h1>
          <p class="addr">${esc(spot.address)}</p>
        </div>
        <button class="btn" data-go="go">怎么走</button>
      </div>
      <ul class="facts">
        <li><small>今天</small><b>${spot.todayOn ? "有场" : "没有固定场次"}</b></li>
        <li><small>开放</small><b>${esc(spot.openShort)}</b></li>
        <li><small>建议停留</small><b>${esc(spot.time)}</b></li>
        <li><small>费用</small><b>${esc(spot.cost)}</b></li>
      </ul>
      <div class="callout"><small>到了只做一件事</small><p>${esc(spot.onSite)}</p></div>
      <div class="prose">
        <section><h2>先记住这一句</h2><p class="serif" style="font-size:22px">${esc(spot.line)}</p></section>
        <section><h2>它是什么</h2><p>${esc(spot.what)}</p></section>
        <section><h2>它从哪来</h2><p>${esc(spot.from)}</p></section>
        <section><h2>今天在哪能碰到</h2><p>${esc(spot.today)}</p><p style="margin-top:8px">${esc(spot.open)} ${esc(spot.costNote)}</p><p style="margin-top:8px;color:#5c6561">${esc(spot.note)}</p></section>
      </div>
      <div class="ask">
        <h2 class="serif" style="color:#163c3a">还想确认一句</h2>
        <div class="choices" style="margin-top:10px">
          ${asks.map(([id, name]) => `<button data-ask="${id}">${name}</button>`).join("")}
        </div>
        ${state.answer ? `<div class="answer">${esc(state.answer)}</div>` : ""}
      </div>
      <div class="actions">
        <button class="btn" data-go="poster">做成一张水上帖</button>
        <a class="btn line" href="${mapUrl(spot)}" target="_blank" rel="noopener">打开导航</a>
      </div>
    </div>`);
}

function goPage() {
  const spot = current();
  const modes = [["bus", "坐公交", spot.bus], ["drive", "自己开车", spot.drive], ["walk", "到了之后怎么走", spot.walk]];
  return shell(`
    <div class="wrap">
      <p class="kicker">怎么走</p>
      <div class="section-head"><h2>去${esc(spot.name)}</h2><p>${esc(spot.minutes)}</p></div>
      <div class="choices" style="margin-bottom:16px">
        ${SPOTS.map((item) => `<button class="${item.spotId === spot.spotId ? "on" : ""}" data-open-go="${item.spotId}">${esc(item.name)}</button>`).join("")}
      </div>
      <div class="steps">
        <article class="step"><i>1</i><div><h3>出发</h3><p>${esc(spot.address)}</p></div></article>
        <article class="step"><i>2</i><div><h3>在路上</h3><p>${esc(spot.minutes)}。${esc(spot.cost)}。${esc(spot.costNote)}</p></div></article>
        <article class="step"><i>3</i><div><h3>到了</h3><p>${esc(spot.onSite)}</p></div></article>
      </div>
      <div class="rides">
        ${modes.map(([id, name, text]) => `
          <button class="ride ${state.mode === id ? "on" : ""}" data-mode="${id}"><b>${name}</b><span>${esc(text)}</span></button>`).join("")}
      </div>
      <p style="margin-top:16px">${spot.todayOn ? "今天有场。" : "今天没有固定场次。"} ${esc(spot.next)}</p>
      <p style="color:#5c6561">${esc(spot.note)}</p>
      <div class="actions">
        <a class="btn" href="${mapUrl(spot)}" target="_blank" rel="noopener">打开高德导航</a>
        <button class="btn line" data-open="${spot.spotId}">回到这一处</button>
      </div>
    </div>`);
}

function area() {
  return shell(`
    <div class="wrap">
      <p class="kicker">这一带</p>
      <div class="section-head">
        <h2>莲洲三个落点</h2>
        <p>后两处在同一个园里</p>
      </div>
      <p style="max-width:720px;margin-bottom:18px">只有半天的话，先去岭南大地。赛歌和水上婚嫁都在石龙村这个园里。莲江村在更西边，鱼灯要等春节前后。</p>
      <div class="area-list">
        ${SPOTS.map((spot, index) => `
          <button class="area-item" data-open="${spot.spotId}">
            <img src="${spot.image}" alt="" />
            <div>
              <div class="order">0${index + 1} · ${esc(spot.where)}</div>
              <h3>${esc(spot.name)}</h3>
              <p>${esc(spot.blurb)}</p>
            </div>
          </button>`).join("")}
      </div>
    </div>`);
}

function mine() {
  const initial = (state.name || "客").slice(0, 1);
  return shell(`
    <div class="wrap">
      <p class="kicker">我的</p>
      <h2 class="serif" style="font-size:32px;color:#163c3a;margin:6px 0 16px">留一个称呼</h2>
      <div class="mine-card">
        <div class="who"><div class="avatar">${esc(initial)}</div>
          <input class="name" data-name placeholder="怎么称呼" value="${esc(state.name)}" />
        </div>
        <div class="rows">
          <a href="${HALL.page}" target="_blank" rel="noopener"><span>${HALL.name}</span><small>${HALL.address}</small></a>
          <button data-go="poster"><span>我的水上帖</span><small>用当前这一处生成</small></button>
          <button data-go="area"><span>三处分别在哪</span><small>莲洲</small></button>
        </div>
        <p style="margin-top:16px;color:#5c6561">导游只回答页面上写好的三句。班次、日子和精确码头，没核对的都标着【待核实】。</p>
      </div>
    </div>`);
}

function poster() {
  const spot = current();
  const who = state.name || "一位路过的人";
  return shell(`
    <div class="wrap">
      <button class="back" data-open="${spot.spotId}">← 回到这一处</button>
      <div class="section-head" style="margin-top:14px"><h2>水上帖</h2><p>可以打印，或复制下面这段话</p></div>
      <article class="poster-card" id="poster">
        <img src="${spot.image}" alt="" />
        <div class="pad">
          <div class="kicker">水色斗门</div>
          <h2>${esc(spot.line)}</h2>
          <p style="margin-top:10px">${esc(spot.onSite)}</p>
          <p style="margin-top:16px;color:#5c6561">${esc(who)} · ${esc(spot.name)}</p>
          <p style="color:#5c6561;font-size:13px">${esc(spot.address)}</p>
        </div>
      </article>
      <div class="actions">
        <button class="btn" id="copy">复制这段话</button>
        <button class="btn line" onclick="window.print()">打印或存成 PDF</button>
      </div>
    </div>`);
}

function render() {
  const view = { home, detail, go: goPage, area, mine, poster }[state.screen] || home;
  document.getElementById("app").innerHTML = view();
  bind();
}

function bind() {
  const root = document.getElementById("app");
  root.querySelectorAll("[data-go]").forEach((node) => node.addEventListener("click", () => {
    if (node.dataset.spot) state.spotId = node.dataset.spot;
    if (node.dataset.go === "go" && !node.dataset.spot && state.screen === "home") {
      const hit = FOCUS.find((item) => item.id === state.focus);
      if (hit) state.spotId = hit.spotId;
    }
    save();
    go(node.dataset.go);
  }));
  root.querySelectorAll("[data-open]").forEach((node) => node.addEventListener("click", () => openSpot(node.dataset.open)));
  root.querySelectorAll("[data-open-go]").forEach((node) => node.addEventListener("click", () => {
    state.spotId = node.dataset.openGo;
    save();
    go("go");
  }));
  root.querySelectorAll("[data-focus]").forEach((node) => node.addEventListener("click", () => {
    state.focus = node.dataset.focus;
    const hit = FOCUS.find((item) => item.id === state.focus);
    if (hit) state.spotId = hit.spotId;
    save();
    render();
  }));
  root.querySelectorAll("[data-mode]").forEach((node) => node.addEventListener("click", () => {
    state.mode = node.dataset.mode;
    render();
  }));
  root.querySelectorAll("[data-ask]").forEach((node) => node.addEventListener("click", () => {
    const spot = current();
    const kind = node.dataset.ask;
    state.answer = kind === "what" ? spot.what : kind === "today" ? ((spot.todayOn ? "今天有场。" : "今天没有固定场次。") + spot.next) : spot.bus;
    const box = root.querySelector(".ask");
    let answer = root.querySelector(".answer");
    if (!answer) {
      answer = document.createElement("div");
      answer.className = "answer";
      box.appendChild(answer);
    }
    answer.textContent = state.answer;
  }));
  const name = root.querySelector("[data-name]");
  if (name) name.addEventListener("change", () => { state.name = name.value.trim(); save(); render(); });
  const copy = root.querySelector("#copy");
  if (copy) copy.addEventListener("click", async () => {
    const spot = current();
    const text = `${spot.line}\n${spot.onSite}\n${spot.name} · ${spot.address}`;
    try {
      await navigator.clipboard.writeText(text);
      copy.textContent = "已复制";
    } catch (err) {
      copy.textContent = "请长按海报文字复制";
    }
  });
}

load();
const query = new URLSearchParams(location.search);
const page = query.get("page");
if (["home", "detail", "go", "area", "mine", "poster"].includes(page)) state.screen = page;
if (query.get("spot") && byId(query.get("spot"))) state.spotId = query.get("spot");
render();
