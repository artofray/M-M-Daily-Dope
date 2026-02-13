import React from 'react';
import { MOCK_REWARDS } from '../constants';
import { Zap, ExternalLink, Gift } from 'lucide-react';

export const Rewards: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-[#0b0c15] p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-yellow-500/10 rounded-full mb-4">
             <Zap className="w-8 h-8 text-yellow-500" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">Community Rewards</h1>
          <p className="text-slate-400 max-w-lg mx-auto">
            Earn <span className="text-yellow-500 font-bold">Karma Points</span> by answering questions, mentoring beginners, and being kind. Redeem them for real tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_REWARDS.map((reward) => (
            <div key={reward.id} className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] overflow-hidden flex flex-col hover:border-yellow-500/50 transition-colors">
              <div className="h-32 bg-slate-800 relative">
                 <img src={reward.imageUrl} alt={reward.title} className="w-full h-full object-cover opacity-60" />
                 <div className="absolute top-2 right-2 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-md">
                   {reward.provider}
                 </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-2">{reward.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-1">{reward.description}</p>
                <div className="flex items-center justify-between mt-auto">
                   <span className="text-yellow-500 font-mono font-bold">{reward.cost} Karma</span>
                   <button className="bg-white text-black text-sm font-bold px-4 py-2 rounded-full hover:bg-slate-200 transition-colors">
                     Redeem
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Sponsors */}
        <div className="mt-16 border-t border-[#2a2a2a] pt-8">
            <h4 className="text-slate-500 text-sm uppercase font-bold tracking-wider mb-6 text-center">Supported By Like-Minded Partners</h4>
            <div className="flex justify-center items-center space-x-8 opacity-50 grayscale hover:grayscale-0 transition-all">
                <div className="text-xl font-bold text-white">Leonardo.ai</div>
                <div className="text-xl font-bold text-white">SeedDance</div>
                <div className="text-xl font-bold text-white">Suno</div>
            </div>
        </div>
      </div>
    </div>
  );
};