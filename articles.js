/**
 * 文章数据库 — 芯片工坊
 */
const ARTICLE_DATA = [
  {
    title: "半导体制造到底有多少道工序？一张全景图讲透",
    url: "https://mp.weixin.qq.com/s/SOzYBLM22ioSSk3u09YEMw",
    date: "2026-07-01",
    tags: "工艺整合,新手,趋势",
    summary: "从硅片进来到芯片出去——扩散、光刻、刻蚀、薄膜、CMP、注入、测试，一张全景地图帮你建立整体认知"
  },
  {
    title: "离子注入机里的'磁场'和'空间电荷'，到底是什么关系？",
    url: "https://mp.weixin.qq.com/s/936azvG2jnRMT9LWyPX39Q",
    date: "2026-06-30",
    tags: "离子注入,器件物理,设备",
    summary: "分析磁镜效应、空间电荷中和、束流膨胀——理解注入机束线设计最核心的两组物理概念"
  },
  {
    title: "离子注入机的'心脏'：离子源都有哪几种？",
    url: "https://mp.weixin.qq.com/s/ePrkwyxVipGjonR2djqnTQ",
    date: "2026-06-30",
    tags: "离子注入,设备,干货",
    summary: "Freeman源、Bernas源、RF源、ECR源——从热灯丝到等离子体，拆解离子源的演进与选型"
  },
  {
    title: "射频加速：离子注入机的'心脏'怎么跳（一）",
    url: "https://mp.weixin.qq.com/s/eQQ9_Ll9wpEMn_Yg_mGuXw",
    date: "2026-06-29",
    tags: "离子注入,设备,射频",
    summary: "RF Linac的核心原理——交变电场如何把离子从几十keV加速到MeV量级，逐级拆解"
  },
  {
    title: "射频加速：离子注入机的'心脏'怎么跳（二）",
    url: "https://mp.weixin.qq.com/s/rWFHCl3LYd3D9zuE3J3-Hg",
    date: "2026-06-29",
    tags: "离子注入,设备,射频",
    summary: "腔体谐振、Q值、相位聚焦——RF加速腔设计中最容易踩的坑和最优设计选择"
  },
  {
    title: "射频加速：射频电源与匹配网络（三）",
    url: "https://mp.weixin.qq.com/s/Grsn8w87Lvc_Rg4g0yUh1w",
    date: "2026-06-28",
    tags: "离子注入,设备,射频",
    summary: "阻抗匹配网络设计、反射功率控制、自动匹配器的工程实践——RF电源稳定性决定束流质量"
  },
  {
    title: "Copley CME 驱动器配置软件实操指南",
    url: "https://mp.weixin.qq.com/s/RtBfreyEoOXOztn48DIDLQ",
    date: "2026-06-28",
    tags: "自动化,设备,干货",
    summary: "从硬件接线到参数配置再到PID调参——Copley CME 驱动器上手的完整步骤和常见坑点"
  },
  {
    title: "霍尔信号与电机找相",
    url: "https://mp.weixin.qq.com/s/ET8R3q3_e6g5t9X1Xjku4g",
    date: "2026-06-27",
    tags: "自动化,设备,器件物理",
    summary: "Hall传感器输出解读、UVW六步换向、自动找相算法——直线电机驱动器调试的核心技能"
  },
  {
    title: "静电吸盘 E-Chuck：晶圆是怎么被「吸」住的",
    url: "https://mp.weixin.qq.com/s/Y2R-Gh9MaVWLetZbBeTNRg",
    date: "2026-06-27",
    tags: "设备,工艺整合,先进工艺",
    summary: "J-R型 vs Coulomb型静电吸盘的物理机制、漏电流控制、dechuck优化——晶圆夹持的工程内核"
  },
  {
    title: "注入工艺实战：能量、剂量、退火、沟道效应与验证四板斧",
    url: "https://mp.weixin.qq.com/s/dLYxGpv_JRsLK-Sj9tJzuw",
    date: "2026-06-26",
    tags: "离子注入,热处理,干货",
    summary: "能量选择、剂量校准、RTP退火窗口、沟道效应规避——从工艺工程师的角度拆解注入调试全流程"
  },
  {
    title: "直线电机的'骨架'与'眼睛'：光栅尺和霍尔驱动器如何精准配合？",
    url: "",
    date: "2026-06-25",
    tags: "自动化,设备,量测",
    summary: "光栅尺反馈与Hall换向的协同控制——直线电机定位精度的完整拆解（链接待补充）"
  },
];
