import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "@/src/style/globals.css";

/**
 * google字体
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
/**
 * 元数据
 */
export const metadata: Metadata = {
  title: "孙文升的博客 | Wensheng's blog",
  description: "欢迎来到孙文升的博客",
  keywords: ["孙文升的博客", "孙文升", "博客", "孙文升博客"],
  icons: {
    // 其中 public自动映射到 / 根目录
    icon: '/metadata/favicon.ico', // 或者其他路径（public下）
    shortcut: '/metadata/favicon.ico'
  },
};

type propType = Readonly<{
  children: React.ReactNode;
}>
export default function RootLayout({children}: propType) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    {children}
    </body>
    </html>
  );
}
