"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Countdown from "@/components/Countdown";
import PageTransition from "@/components/PageTransition";
import BackToTop from "@/components/BackToTop";

const quickLinks = [
  {
    icon: "📄", title: "报到流程", desc: "报到时间 · 地点 · 材料", href: "/register",
    bg: "linear-gradient(135deg, #ff9ab2 0%, #e8578a 100%)",
    sticker: "🐱", stickerLabel: "Hello Kitty"
  },
  {
    icon: "🏠", title: "宿舍指南", desc: "房型 · 配置 · 用电", href: "/dormitory",
    bg: "linear-gradient(135deg, #f47ba7 0%, #d43d6e 100%)",
    sticker: "🎀", stickerLabel: "Kitty Bow"
  },
  {
    icon: "🎒", title: "入学准备", desc: "清单 · 物品 · 行李", href: "/packing",
    bg: "linear-gradient(135deg, #ffb3c6 0%, #f47ba7 100%)",
    sticker: "🌸", stickerLabel: "Kitty Flower"
  },
  {
    icon: "💌", title: "联系学姐", desc: "扫码添加 · 随时咨询", href: "/senior",
    bg: "linear-gradient(135deg, #ff8fab 0%, #e8578a 100%)",
    sticker: "💕", stickerLabel: "Kitty Love"
  },
];

const features = [
  { icon: "🎯", title: "军训专区", desc: "时间安排与注意事项", href: "/military" },
  { icon: "📦", title: "快递指南", desc: "地址与菜鸟驿站", href: "/express" },
  { icon: "🍜", title: "食堂美食", desc: "南北口味一网打尽", href: "/cafeteria" },
  { icon: "🗺️", title: "校园地图", desc: "360°全景漫游", href: "/map" },
  { icon: "💰", title: "学费缴纳", desc: "缴费方式与助学贷款", href: "/register" },
  { icon: "❓", title: "常见问题", desc: "FAQ 问答专区", href: "/faq" },
];

export default function HomePage() {
  const router = useRouter();
  return (
    <PageTransition>
      <BackToTop />

      {/* Hero */}
      <section className="relative overflow-hidden text-white hk-dots" style={{ background: "linear-gradient(135deg, #ff9ab2 0%, #e8578a 50%, #d43d6e 100%)" }}>
        <div className="absolute top-4 right-4 text-6xl opacity-25">🎀</div>
        <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/10 blur-2xl" />
        <div className="relative z-10 px-5 pt-8 pb-10 safe-top">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-white/60 text-xs font-medium tracking-wide">🎀 山东外贸职业学院</p>
              <h1 className="text-lg font-bold mt-0.5">青岛北校区</h1>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-8">
            <p className="text-white/70 text-sm mb-2 tracking-wider">WELCOME · 2026</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">
              欢迎<span className="text-yellow-200">2026级</span>新同学
            </h2>
            <p className="text-white/60 text-sm mt-2">新生入学指南 · 一站式迎新服务</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-4">
            <p className="text-center text-white/60 text-xs mb-3 tracking-wide">距 离 开 学 还 有</p>
            <Countdown />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-[var(--bg-primary)] rounded-t-[2rem]" />
      </section>

      {/* Quick Links - 4 Decorated Cards */}
      <section className="px-5 mb-8 mt-6">
        <h3 className="text-sm font-semibold text-[#b8898f] mb-3 tracking-wide uppercase">✦ 快捷入口 ✦</h3>
        <div className="grid grid-cols-2 gap-3">
          {quickLinks.map((link, i) => (
            <motion.button
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push(link.href)}
              className="relative overflow-hidden rounded-2xl p-4 text-left text-white shadow-lg hk-bow min-h-[130px]"
              style={{ background: link.bg }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/8 -translate-y-1/2 translate-x-1/2" />
              {/* HK Sticker */}
              <div className="absolute bottom-2 right-2 text-4xl opacity-30">{link.sticker}</div>
              <div className="relative z-10">
                <span className="text-3xl block mb-2">{link.icon}</span>
                <h3 className="text-sm font-bold mb-0.5">{link.title}</h3>
                <p className="text-[11px] text-white/70">{link.desc}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* More Features */}
      <section className="px-5 mb-8">
        <h3 className="text-sm font-semibold text-[#b8898f] mb-3 tracking-wide uppercase">✦ 更多服务 ✦</h3>
        <div className="grid grid-cols-2 gap-3">
          {features.map((f, i) => (
            <motion.button
              key={f.href + f.icon}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.04, duration: 0.4 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => router.push(f.href)}
              className="glass rounded-2xl p-4 text-left card-hover"
            >
              <span className="text-2xl block mb-2">{f.icon}</span>
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-0.5">{f.title}</h4>
              <p className="text-xs text-[var(--text-muted)]">{f.desc}</p>
            </motion.button>
          ))}
        </div>
      </section>

      <footer className="px-5 pb-4 text-center">
        <p className="text-xs text-[#b8898f]">🎀 山东外贸职业学院 · 2026级新生迎新助手 🎀</p>
      </footer>
    </PageTransition>
  );
}
