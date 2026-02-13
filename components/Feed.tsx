import React from 'react';
import { MOCK_FEED } from '../constants';
import { Heart, MessageCircle, Share2, Award, PlayCircle } from 'lucide-react';

export const Feed: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-[#0b0c15] p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Post Input */}
        <div className="bg-[#1a1a1a] rounded-xl p-4 mb-8 border border-[#2a2a2a]">
          <div className="flex space-x-3">
            <div className="w-10 h-10 rounded-full bg-slate-700 shrink-0 overflow-hidden">
               <img src="https://i.pravatar.cc/150?u=me" alt="me" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <input 
                type="text" 
                placeholder="What are you working on? Ask for help or share a mix..." 
                className="w-full bg-transparent text-white placeholder-slate-500 focus:outline-none mb-3"
              />
              <div className="flex justify-between items-center pt-2 border-t border-[#2a2a2a]">
                <div className="flex space-x-2">
                   <button className="text-xs bg-[#2a2a2a] hover:bg-[#333] text-slate-300 px-3 py-1 rounded-full transition-colors">Add Audio</button>
                   <button className="text-xs bg-[#2a2a2a] hover:bg-[#333] text-slate-300 px-3 py-1 rounded-full transition-colors">Ask for Help</button>
                </div>
                <button className="bg-white text-black font-bold text-sm px-4 py-1.5 rounded-full hover:bg-slate-200 transition-colors">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-4 mb-6 border-b border-[#2a2a2a] pb-2">
           <button className="text-white font-bold border-b-2 border-red-500 pb-2 px-1">Following</button>
           <button className="text-slate-500 hover:text-slate-300 font-medium pb-2 px-1">Help Needed</button>
           <button className="text-slate-500 hover:text-slate-300 font-medium pb-2 px-1">Trending</button>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {MOCK_FEED.map((post) => (
            <div key={post.id} className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] overflow-hidden">
              {/* Post Header */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img src={post.user.avatarUrl} alt={post.user.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-white hover:underline cursor-pointer">{post.user.name}</span>
                      {post.user.badges.includes('Mentor') && (
                        <span className="bg-purple-900/50 text-purple-300 text-[10px] px-1.5 py-0.5 rounded border border-purple-700">Mentor</span>
                      )}
                    </div>
                    <span className="text-xs text-slate-500">{post.timestamp} • {post.user.handle}</span>
                  </div>
                </div>
                {post.type === 'QUESTION' && (
                  <span className="bg-amber-900/30 text-amber-400 text-xs px-2 py-1 rounded-full border border-amber-800/50">
                    Needs Help
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="px-4 pb-2">
                <p className="text-slate-200 text-sm leading-relaxed mb-3">{post.content}</p>
                {post.mediaUrl && (
                  <div className="bg-[#0b0c15] rounded-lg p-3 flex items-center space-x-3 border border-[#2a2a2a] cursor-pointer hover:border-slate-600 transition-colors">
                    <button className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white shrink-0 hover:scale-105 transition-transform">
                      <PlayCircle className="w-6 h-6" />
                    </button>
                    <div className="flex-1 h-8 bg-slate-800 rounded relative overflow-hidden">
                       <div className="absolute top-0 left-0 bottom-0 w-1/3 bg-slate-600 opacity-30"></div>
                       {/* Mock waveform lines */}
                       <div className="flex items-center h-full justify-between px-2 gap-1">
                          {[...Array(20)].map((_, i) => (
                            <div key={i} className="w-1 bg-slate-500 rounded-full" style={{height: `${Math.random() * 100}%`}}></div>
                          ))}
                       </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="px-4 py-3 border-t border-[#2a2a2a] flex items-center justify-between text-slate-400">
                <div className="flex space-x-6">
                  <button className="flex items-center space-x-1.5 hover:text-red-500 transition-colors text-sm">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1.5 hover:text-white transition-colors text-sm">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1.5 hover:text-white transition-colors text-sm">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                
                {post.isRewardEligible && (
                  <button className="flex items-center space-x-1.5 text-yellow-500 hover:text-yellow-400 transition-colors text-sm font-medium">
                    <Award className="w-4 h-4" />
                    <span>Offer Help (+50 Karma)</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};