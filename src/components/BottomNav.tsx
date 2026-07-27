"use client";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { path: "/", label: "首页", icon: "🏠" },
  { path: "/register", label: "报到", icon: "📋" },
  { path: "/dormitory", label: "宿舍", icon: "🏠" },
  { path: "/campus", label: "校园", icon: "🌸" },
  { path: "/me", label: "我的", icon: "🎀" },
];

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = (path: string) => path === "/" ? pathname === "/" : pathname.startsWith(path);
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-strong safe-bottom">
      <div className="flex items-center justify-around h-14 max-w-lg mx-auto px-2">
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <button key={item.path} onClick={() => router.push(item.path)} className="relative flex flex-col items-center justify-center flex-1 h-full">
              <span className={`text-lg transition-all ${active ? "scale-110" : "opacity-45"}`}>{item.icon}</span>
              <span className={`text-[10px] mt-0.5 font-medium ${active ? "text-[#e8578a]" : "text-[#c4a0a8]"}`}>{item.label}</span>
              {active && <motion.div layoutId="bn" className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-5 h-1 rounded-full bg-[#e8578a]" transition={{type:"spring",stiffness:500,damping:30}}/>}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
