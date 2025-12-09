// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="mb-8 text-4xl font-bold text-gray-800 tracking-tight">
        Visual Spellbook
      </h1>
      <p className="mb-8 text-gray-600">画像生成AIプロンプト管理カタログ</p>
      
      <div className="grid gap-4">
        <Link 
          href="/hairstyle"
          className="rounded-xl bg-indigo-600 px-8 py-4 text-center font-bold text-white shadow-lg transition-all hover:bg-indigo-700 hover:scale-105"
        >
          髪型・前髪カタログへ
        </Link>
        
        {/* 今後ページが増えたらここにボタンを追加できます */}
        {/* <Link href="/clothing" ... >服装カタログへ</Link> */}

        <Link 
          href="/clothing"
          className="rounded-xl bg-indigo-600 px-8 py-4 text-center font-bold text-white shadow-lg transition-all hover:bg-indigo-700 hover:scale-105"
        >
          服装カタログへ
        </Link>

        <Link 
          href="/accessories"
          className="rounded-xl bg-indigo-600 px-8 py-4 text-center font-bold text-white shadow-lg transition-all hover:bg-indigo-700 hover:scale-105"
        >
          アクセサリーカタログへ
        </Link>

      </div>
    </div>
  );
}