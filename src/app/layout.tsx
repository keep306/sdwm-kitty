import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/Toast";
import BottomNav from "@/components/BottomNav";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "🎀 山东外贸职业学院 · 2026级新生开学助手",
  description: "山东外贸职业学院青岛北校区2026级新生入学指南。",
  appleWebApp: { capable: true, title: "开学助手", statusBarStyle: "default" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width", initialScale: 1, maximumScale: 1, userScalable: false, viewportFit: "cover",
  themeColor: "#fff5f7",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head><meta name="theme-color" content="#fff5f7" /></head>
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
        <ToastProvider>
          <ClientLayout>
            <main className="max-w-lg mx-auto min-h-screen pb-14 safe-bottom">{children}</main>
            <BottomNav />
          </ClientLayout>
        </ToastProvider>
      </body>
    </html>
  );
}
