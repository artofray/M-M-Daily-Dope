import React, { useState } from 'react';
import { HELP_ARTICLES } from '../constants';
import { Search, ChevronDown, ChevronRight, BookOpen } from 'lucide-react';

export const HelpCenter: React.FC = () => {
  const [openArticle, setOpenArticle] = useState<string | null>(null);

  const toggleArticle = (id: string) => {
    setOpenArticle(openArticle === id ? null : id);
  };

  return (
    <div className="flex-1 overflow-y-auto bg-[#0b0c15] p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center space-x-3 mb-8">
            <BookOpen className="text-red-500 w-8 h-8" />
            <h1 className="text-3xl font-bold text-white">The Manual</h1>
        </div>
        
        <p className="text-slate-400 mb-8 text-lg">
           Everything you need to know about navigating The Music Machine. 
           From collaboration etiquette to distribution technicalities.
        </p>

        {/* Search */}
        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
          <input 
            type="text" 
            placeholder="How do I..." 
            className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl py-4 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
          />
        </div>

        {/* Categories / Articles */}
        <div className="space-y-4">
          {HELP_ARTICLES.map((article) => (
            <div key={article.id} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleArticle(article.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-[#252525] transition-colors text-left"
              >
                <div className="flex items-center space-x-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-black/30 px-2 py-1 rounded">
                        {article.category}
                    </span>
                    <span className="text-white font-medium">{article.title}</span>
                </div>
                {openArticle === article.id ? <ChevronDown className="text-slate-400 w-5 h-5" /> : <ChevronRight className="text-slate-400 w-5 h-5" />}
              </button>
              
              {openArticle === article.id && (
                <div className="p-6 bg-[#151515] border-t border-[#2a2a2a] text-slate-300 leading-relaxed">
                  {article.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};