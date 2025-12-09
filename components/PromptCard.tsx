// components/PromptCard.tsx
"use client";
import { useState } from 'react';
import Image from 'next/image';

type Props = {
  imageSrc: string;
  prompt: string;
  prompt1:string;
};

export default function PromptCard({ imageSrc, prompt, prompt1 }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      // 1.5秒後に「コピー済み」状態を解除
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("コピーに失敗しました", err);
    }
  };

  return (
    <div 
      onClick={handleCopy}
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
    >
      {/* 画像エリア：アスペクト比を固定（例: 2:3）して統一感を出す */}
      <div className="relative aspect-[1/1] w-full bg-gray-200">
         {/* 実際の実装では next/image を使用 */}
         <img 
           src={imageSrc} 
           alt={prompt} 
           className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
         />
         
         {/* コピー時のオーバーレイエフェクト */}
         {copied && (
           <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all">
             <span className="font-bold text-white">Copied!</span>
           </div>
         )}
      </div>

      {/* テキストエリア：シンプルに呪文だけ */}
      <div className="p-3 text-center">
        <p className={`text-sm font-medium ${copied ? 'text-green-600' : 'text-gray-700'}`}>
          {prompt1}
        </p>
      </div>
    </div>
  );
}