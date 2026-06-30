/**
 * 文章数据库 — 芯片工坊
 * 新增文章只需在数组末尾追加一条
 */
const ARTICLE_DATA = [
  {
    title: "Faraday Cup 在离子注入剂量检测中的原理与校准方法",
    url: "https://mp.weixin.qq.com/s/xxxxx001",
    date: "2026-06-28",
    tags: "离子注入,量测,设备",
    summary: "从束流采集到电荷积分——拆解 FC 在低能高束流场景下的校准陷阱"
  },
  {
    title: "FinFET 到 GAA：3nm 以下工艺节点栅极结构演变",
    url: "https://mp.weixin.qq.com/s/xxxxx002",
    date: "2026-06-25",
    tags: "先进工艺,器件物理,趋势",
    summary: "从三栅到环栅，沟道静电控制的一场静默革命"
  },
  {
    title: "EUV 光刻胶 Outgassing 对光学系统的污染机理",
    url: "https://mp.weixin.qq.com/s/xxxxx003",
    date: "2026-06-20",
    tags: "光刻,材料,工艺整合",
    summary: "碳沉积、反射率衰减——哪些光刻胶配方更容易让 mirrors 变脏？"
  },
  {
    title: "CMP 后清洗中的颗粒再沉积：pH、Zeta 电位与表面能的三角博弈",
    url: "https://mp.weixin.qq.com/s/xxxxx004",
    date: "2026-06-15",
    tags: "CMP,清洗,材料",
    summary: "为什么 Post-CMP Clean 号称良率的隐形杀手"
  },
  {
    title: "RTP 尖峰退火对超浅结扩散长度的工艺窗口分析",
    url: "https://mp.weixin.qq.com/s/xxxxx005",
    date: "2026-06-10",
    tags: "热处理,先进工艺,器件物理",
    summary: "毫秒退火 vs 秒级退火——掺杂激活与扩散控制的平衡术"
  },
  {
    title: "半导体工厂的 AMHS 天车调度：从 OHT 到 Stocker 的全局优化",
    url: "https://mp.weixin.qq.com/s/xxxxx006",
    date: "2026-06-05",
    tags: "制造执行,自动化,设备",
    summary: "300mm Fab 里每天跑 100 万次搬运任务——为什么日本人把它做到了极致"
  },
  {
    title: "ALD vs CVD：高 k 栅介质沉积的 5 个关键选型标准",
    url: "https://mp.weixin.qq.com/s/xxxxx007",
    date: "2026-06-01",
    tags: "薄膜沉积,材料,工艺整合",
    summary: "Conformality、WER、界面态密度——选错沉积方式，器件直接报废"
  },
  {
    title: "晶圆级可靠性测试(WLR)：TDDB、HCI、BTI 的工程解读",
    url: "https://mp.weixin.qq.com/s/xxxxx008",
    date: "2026-05-28",
    tags: "可靠性,量测,器件物理",
    summary: "一张晶圆上跑 3000 小时的加速老化——可靠性工程师究竟在测什么?"
  },
  {
    title: "半导体洁净室 AMC 控制：从 ppb 到 ppt 的分子污染战争",
    url: "https://mp.weixin.qq.com/s/xxxxx009",
    date: "2026-05-22",
    tags: "洁净室,制造执行,设备",
    summary: "氨气 1ppb 就能毁掉 DUV 光刻胶——AMC 过滤系统的选型与运维"
  },
  {
    title: "5 月半导体行业投融资复盘：设备国产替代成最大赢家",
    url: "https://mp.weixin.qq.com/s/xxxxx010",
    date: "2026-05-15",
    tags: "行业动态,国产替代,趋势",
    summary: "离子注入机、量测设备、CMP——哪些赛道今年拿钱最多？"
  },
  {
    title: "TSV 深孔刻蚀的 Bosch 工艺参数优化：从 Scallop 到 Taper 的全流程控制",
    url: "https://mp.weixin.qq.com/s/xxxxx011",
    date: "2026-05-08",
    tags: "刻蚀,先进封装,工艺整合",
    summary: "10:1 高深宽比的刻蚀/沉积交替——侧壁粗糙度如何影响后续铜填充"
  },
  {
    title: "E-beam Inspection 的极限：为什么 5nm 缺陷靠光学已经看不见了",
    url: "https://mp.weixin.qq.com/s/xxxxx012",
    date: "2026-05-01",
    tags: "量测,先进工艺,设备",
    summary: "分辨率从 100nm 到 1nm——电子束检测如何填补光学检测的盲区"
  },
  {
    title: "SPICE 模型 Corner 仿真的工程实践：TT/FF/SS/FS/SF 背后的物理含义",
    url: "https://mp.weixin.qq.com/s/xxxxx013",
    date: "2026-04-25",
    tags: "仿真,器件物理,设计",
    summary: "为什么同一个芯片在 FF Corner 能跑 2GHz，在 SS 就只有 1.2GHz？"
  },
  {
    title: "半导体大宗气体纯化：从 6N 到 9N，每一级纯化器在做什么",
    url: "https://mp.weixin.qq.com/s/xxxxx014",
    date: "2026-04-18",
    tags: "厂务,材料,设备",
    summary: "N₂、Ar、O₂——Fab 里每小时的用气量够填满 30 个热气球，纯化器是 Fab 的肺"
  },
  {
    title: "4 月问答合集：关于离子注入剂量均匀性的 12 个高频问题",
    url: "https://mp.weixin.qq.com/s/xxxxx015",
    date: "2026-04-10",
    tags: "读者问答,离子注入,设备",
    summary: "从束流扫描到 wafer 倾角——读者最关心的注入问题一次性解答"
  },
];
