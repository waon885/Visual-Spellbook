// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
// ★先ほど作ったNavbarを読み込む
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Visual Spellbook",
  description: "画像生成AIプロンプト管理カタログ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      {/* ★bodyタグの中に Navbar を配置 */}
      <body className="antialiased bg-gray-50 text-gray-900">
        
        {/* ここに置くと全ページの上部に表示されます */}
        <Navbar />

        {/* children は各ページの中身（page.tsx）が入る場所です */}
        <main>
          {children}
        </main>
        
      </body>
    </html>
  );
}