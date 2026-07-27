"use client";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import BackToTop from "@/components/BackToTop";

export default function SeniorPage() {
  return (
    <PageTransition><BackToTop />
      <div className="px-5 pt-8 pb-2 safe-top">
        <p className="text-xs font-medium text-[#b8898f] tracking-wide">CONTACT</p>
        <h1 className="text-2xl font-extrabold mt-1">🎀 联系学姐</h1>
      </div>
      <section className="px-5 mt-6 mb-8 space-y-4">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
          className="relative overflow-hidden rounded-[2rem] p-6 text-white text-center"
          style={{background:"linear-gradient(135deg, #ff9ab2 0%, #e8578a 50%, #d43d6e 100%)"}}>
          <div className="absolute top-4 right-4 text-6xl opacity-20">🎀</div>
          <div className="relative z-10">
            <div className="w-20 h-20 rounded-full bg-white/20 mx-auto mb-3 flex items-center justify-center border-2 border-white/30"><span className="text-4xl">👩‍🎓</span></div>
            <h2 className="text-xl font-bold mb-1">小羊学姐</h2>
            <p className="text-white/70 text-sm mb-4">你的专属迎新学姐 ♡</p>
            <div className="bg-white/15 rounded-2xl p-4">
              <p className="text-sm text-white/90 leading-relaxed">哈喽～2026级的学弟学妹们好呀 👋 报到、宿舍、军训、校园生活……任何问题都可以问我，我会尽力帮大家解答～</p>
            </div>
          </div>
        </motion.div>

        {/* QR Code Only */}
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}}
          className="p-6 rounded-[2rem] glass text-center">
          <p className="text-sm font-bold text-[#e8578a] mb-4">🎀 扫一扫添加学姐微信 🎀</p>
          <div className="w-52 h-52 mx-auto rounded-2xl bg-white p-2 shadow-md">
            <img src="/qrcode-senior.jpg" alt="学姐微信二维码" className="w-full h-full rounded-xl object-contain" />
          </div>
          <p className="text-xs text-[#b8898f] mt-4">保存二维码 → 打开微信扫一扫</p>
        </motion.div>
      </section>
      <footer className="px-5 pb-4 text-center"><p className="text-xs text-[#b8898f]">学姐在线 · 看到就回 💕</p></footer>
    </PageTransition>
  );
}
