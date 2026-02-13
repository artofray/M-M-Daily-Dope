import React from 'react';
import { MOCK_REWARDS } from '../constants';
import { Zap, ShieldCheck } from 'lucide-react';

export const Rewards: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
      
      <div className="text-center mb-12 relative">
         <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan-900/50 -z-10"></div>
         <div className="inline-block bg-[#020617] px-8 border border-cyan-500/30 p-4">
             <h1 className="text-3xl font-bold text-white tracking-[0.3em] uppercase text-glow-cyan">Resource Exchange</h1>
             <p className="text-cyan-600 font-mono text-xs mt-2 tracking-widest">TRADE KARMA FOR UPGRADES</p>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {MOCK_REWARDS.map((reward) => (
            <div key={reward.id} className="hud-panel p-1 flex flex-col group hover:scale-[1.02] transition-transform duration-300">
               {/* Image Frame */}
               <div className="h-48 bg-black relative overflow-hidden border-b border-cyan-900/50">
                  <div className="absolute inset-0 bg-cyan-500/10 z-10"></div>
                  <img src={reward.imageUrl} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="absolute top-2 right-2 z-20 bg-black/80 border border-amber-500/50 px-2 py-1">
                     <span className="text-[10px] text-amber-500 font-mono font-bold">{reward.cost} PTS</span>
                  </div>
               </div>

               <div className="p-4 flex-1 flex flex-col bg-gradient-to-b from-[#020617] to-black">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">{reward.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 font-light leading-relaxed flex-1">{reward.description}</p>
                  
                  <button className="w-full py-3 bg-cyan-900/20 border border-cyan-500/50 text-cyan-400 font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all flex items-center justify-center space-x-2 group-hover:shadow-[0_0_15px_#06b6d4]">
                     <Zap className="w-4 h-4" />
                     <span>ACQUIRE</span>
                  </button>
               </div>
            </div>
         ))}
      </div>
    </div>
  );
};