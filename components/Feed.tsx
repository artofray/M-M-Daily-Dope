import React from 'react';
import { MOCK_FEED } from '../constants';
import { Heart, MessageCircle, Share2, Zap, PlayCircle } from 'lucide-react';

export const Feed: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar relative">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Feed Header */}
        <div className="flex items-end justify-between border-b border-cyan-900/50 pb-4">
          <div>
            <h2 className="text-3xl font-bold text-white text-glow-cyan tracking-widest uppercase">
              Community Feed
            </h2>
            <div className="flex items-center space-x-2 mt-2">
               <div className="w-2 h-2 bg-amber-500 rounded-full animate-ping"></div>
               <span className="text-xs text-amber-500 font-mono tracking-wider">LIVE DATA STREAM</span>
            </div>
          </div>
          
          <div className="flex space-x-2">
             <button className="px-4 py-1 text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/30 transition-colors uppercase tracking-wider">
                Filter: All
             </button>
             <button className="px-4 py-1 text-xs font-bold bg-transparent text-slate-500 border border-slate-700 hover:border-cyan-500/30 hover:text-cyan-200 transition-colors uppercase tracking-wider">
                Filter: Bounties
             </button>
          </div>
        </div>

        {/* Input Area */}
        <div className="hud-panel p-6 relative group">
           <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500"></div>
           <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500"></div>
           
           <textarea 
             className="w-full bg-transparent border-none focus:ring-0 text-cyan-100 placeholder-cyan-900/50 font-mono text-sm resize-none h-20"
             placeholder="INITIATE NEW TRANSMISSION..."
           ></textarea>
           
           <div className="flex justify-between items-center mt-4 pt-4 border-t border-cyan-900/30">
              <div className="flex space-x-4">
                 <button className="text-xs text-cyan-600 hover:text-cyan-400 font-bold uppercase tracking-wider">[+ ATTACH DATA]</button>
                 <button className="text-xs text-amber-600 hover:text-amber-400 font-bold uppercase tracking-wider">[+ ADD BOUNTY]</button>
              </div>
              <button className="bg-cyan-600 hover:bg-cyan-500 text-black font-bold px-6 py-2 text-sm uppercase tracking-widest clip-path-slant">
                 UPLOAD
              </button>
           </div>
        </div>

        {/* Feed Items */}
        <div className="space-y-6">
          {MOCK_FEED.map((post) => (
            <div key={post.id} className="hud-panel p-0 relative hover:border-cyan-400/50 transition-colors duration-500 group">
              {/* Decorative side bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${post.isRewardEligible ? 'bg-amber-500' : 'bg-cyan-500/30'}`}></div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img src={post.user.avatarUrl} alt={post.user.name} className="w-12 h-12 border border-cyan-500/30 p-1" />
                      {post.user.badges.includes('Mentor') && (
                        <div className="absolute -bottom-2 -right-2 bg-purple-900 border border-purple-500 text-[8px] px-1 text-purple-200 uppercase">Mentor</div>
                      )}
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white tracking-wide">{post.user.name}</div>
                      <div className="text-xs text-cyan-700 font-mono uppercase">{post.user.handle} // {post.timestamp}</div>
                    </div>
                  </div>
                  
                  {post.bountyAmount && (
                    <div className="text-right">
                       <div className="text-amber-500 font-bold text-xl text-glow-gold">{post.bountyAmount} CR</div>
                       <div className="text-[10px] text-amber-700 font-mono uppercase tracking-widest">BOUNTY ACTIVE</div>
                    </div>
                  )}
                </div>

                <div className="mb-6 pl-16">
                  <p className="text-slate-300 leading-relaxed font-light text-lg">{post.content}</p>
                </div>

                {post.mediaUrl && (
                  <div className="ml-16 mb-6 p-4 bg-black/40 border border-cyan-900/30 flex items-center space-x-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                    <button className="w-10 h-10 flex items-center justify-center border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black transition-colors rounded-full z-10">
                       <PlayCircle className="w-6 h-6" />
                    </button>
                    <div className="flex-1 h-8 flex items-center space-x-1 z-10">
                       {[...Array(20)].map((_, i) => (
                          <div key={i} className={`w-1 bg-cyan-800/50 ${Math.random() > 0.5 ? 'h-full' : 'h-1/3'}`}></div>
                       ))}
                    </div>
                  </div>
                )}

                <div className="ml-16 flex items-center justify-between pt-4 border-t border-cyan-900/30">
                  <div className="flex space-x-6">
                     <button className="flex items-center space-x-2 text-slate-500 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-xs font-mono">{post.likes}</span>
                     </button>
                     <button className="flex items-center space-x-2 text-slate-500 hover:text-cyan-400 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-xs font-mono">{post.comments}</span>
                     </button>
                  </div>

                  {post.isRewardEligible ? (
                     <button className="flex items-center space-x-2 bg-amber-500/10 text-amber-500 border border-amber-500/50 px-4 py-2 hover:bg-amber-500 hover:text-black transition-all font-bold uppercase text-xs tracking-wider">
                        <Zap className="w-4 h-4" />
                        <span>Accept Mission</span>
                     </button>
                  ) : (
                     <button className="text-xs text-cyan-700 hover:text-cyan-400 uppercase tracking-widest font-bold">
                        View Details >
                     </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};