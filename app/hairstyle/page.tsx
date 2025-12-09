// app/page.tsx (または app/outer/page.tsx など)
"use client";

import { useState, useEffect } from 'react'; // ★追加: 状態管理とイベント用
import PromptCard from '@/components/PromptCard';

// ★お使いのデータをインポートしてください（例: outerData, hairstyleData）
import { hairstyleData as pageData } from '@/data/hairstyles'; 

export default function Page() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // ★スクロール量を検知してボタンの表示/非表示を切り替える
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ★目次（ページトップ）へ戻る処理
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // 目次ボタンをクリックした時の処理（前回と同じ）
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 relative">
      <h1 className="mb-4 text-3xl font-bold text-gray-800">髪型・前髪</h1>

      {/* 目次エリア */}
      <nav className="mb-12 rounded-xl bg-white p-6 shadow-sm border border-gray-100">
        <h2 className="mb-3 text-sm font-bold text-gray-500 uppercase tracking-wider">
          目次 / Categories
        </h2>
        <div className="flex flex-wrap gap-2">
          {pageData.map((section) => (
            <a
              key={section.category}
              href={`#${section.category}`}
              onClick={(e) => scrollToSection(e, section.category)}
              className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-indigo-100 hover:text-indigo-700 active:scale-95"
            >
              {section.category}
            </a>
          ))}
        </div>
      </nav>

      {/* 各セクション */}
      {pageData.map((section) => (
        <section 
          key={section.category} 
          id={section.category} 
          className="mb-16 scroll-mt-24"
        >
          <div className="mb-6 flex items-center border-b border-gray-200 pb-2">
            <h2 className="border-l-4 border-indigo-500 pl-4 text-2xl font-bold text-gray-800">
              {section.category}
            </h2>
            <span className="ml-4 text-sm font-medium text-gray-400">
              {section.items.length} items
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {section.items.map((item, index) => (
              <PromptCard 
                key={index} 
                imageSrc={item.image} 
                prompt={item.prompt} 
                prompt1={item.prompt1}
              />
            ))}
          </div>
        </section>
      ))}

      {/* ▼▼▼ 追加: 目次へ戻るフローティングボタン ▼▼▼ */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:scale-110 active:scale-95 ${
          showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="目次へ戻る"
      >
        {/* 上矢印アイコン (SVG) */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2.5} 
          stroke="currentColor" 
          className="h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
      {/* ▲▲▲ 追加終わり ▲▲▲ */}

    </div>
  );
}