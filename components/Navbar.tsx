// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    // sticky top-0: スクロールしても画面上に張り付く設定
    // z-50: 画像などの他の要素より手前に表示する設定
    // backdrop-blur: すりガラスのような透け感を出すおしゃれ設定
    <nav className="sticky top-0 z-50 flex h-16 w-full items-center border-b bg-white/80 px-6 backdrop-blur-md shadow-sm">
      
      {/* 左側：サイトロゴ（ホームに戻る） */}
      <div className="mr-8">
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors">
          Visual Spellbook
        </Link>
      </div>
      
      {/* 右側：メニューリンク */}
      <div className="flex gap-6">
        <Link 
          href="/hairstyle" 
          className="text-sm font-bold text-gray-600 hover:text-indigo-600 transition-colors"
        >
          髪型・前髪
        </Link>

        <Link 
          href="/clothing" 
          className="text-sm font-bold text-gray-600 hover:text-indigo-600 transition-colors"
        >
          服装
        </Link>

        <Link 
          href="/accessories" 
          className="text-sm font-bold text-gray-600 hover:text-indigo-600 transition-colors"
        >
          アクセサリー
        </Link>


        
        
        {/* まだページがないものはグレーアウトしておく例 */}
        <span className="text-sm font-medium text-blue-300 cursor-not-allowed">
          表情 (準備中)
        </span>
        <span className="text-sm font-medium text-blue-300 cursor-not-allowed">
          環境 (準備中)
        </span>
        <span className="text-sm font-medium text-blue-300 cursor-not-allowed">
          下着 (準備中)
        </span>
        <span className="text-sm font-medium text-blue-300 cursor-not-allowed">
          体位 (準備中)
        </span>
        <span className="text-sm font-medium text-blue-300 cursor-not-allowed">
          ポーズ (準備中)
        </span>
      </div>
    </nav>
  );
}