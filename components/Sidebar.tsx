import React from 'react';
import { Home, Music2, BookOpen, Settings, Zap, Disc, Cpu, Layers } from 'lucide-react';
import { ViewState, NavItem } from '../types';

interface SidebarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'FEED', label: 'HOME', icon: Home },
  { id: 'PROJECTS', label: 'FILES', icon: Layers },
  { id: 'REWARDS', label: 'COMMS', icon: Zap },
  { id: 'HELP', label: 'AI HELP', icon: Cpu },
];

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView }) => {
  return (
    <aside className="w-24 md:w-64 flex flex-col h-full shrink-0 p-4 gap-4 z-20">
      {/* Brand / Logo Area */}
      <div className="hud-panel h-20 flex items-center justify-center relative tech-corners clip-path-slant">
        <Disc className="text-cyan-400 w-8 h-8 animate-spin-slow" />
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-[10px] text-cyan-500 font-mono tracking-[0.2em] w-full text-center">
          SYSTEM READY
        </div>
      </div>

      {/* Navigation Keys */}
      <nav className="flex-1 flex flex-col gap-3">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onChangeView(item.id)}
            className={`
              relative h-14 w-full flex items-center px-4 transition-all duration-300 group
              ${currentView === item.id 
                ? 'hud-panel border-l-4 border-l-cyan-400 bg-cyan-950/30' 
                : 'hud-panel hover:bg-white/5 border-l-4 border-l-transparent hover:border-l-cyan-500/50'}
            `}
          >
            {/* Inner Content */}
            <div className="flex items-center space-x-4 z-10">
              <item.icon className={`w-6 h-6 ${currentView === item.id ? 'text-cyan-400 text-glow-cyan' : 'text-slate-500 group-hover:text-cyan-200'}`} />
              <span className={`hidden md:block font-bold text-lg tracking-widest ${currentView === item.id ? 'text-white text-glow-cyan' : 'text-slate-500 group-hover:text-white'}`}>
                {item.label}
              </span>
            </div>

            {/* Decorative arrow on right */}
            {currentView === item.id && (
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-cyan-400 rotate-45 shadow-[0_0_10px_#06b6d4]"></div>
              </div>
            )}
          </button>
        ))}
      </nav>

      {/* System Status / Settings */}
      <div className="hud-panel-gold p-4 flex flex-col items-center justify-center gap-2 relative tech-corners-gold">
        <div className="w-full flex justify-between items-end text-gold-500">
           <span className="text-[10px] font-mono text-amber-500">PWR LVL</span>
           <span className="text-xl font-bold text-amber-400 text-glow-gold">100%</span>
        </div>
        <div className="w-full h-1 bg-amber-900/50">
           <div className="h-full w-full bg-amber-500 shadow-[0_0_10px_#f59e0b]"></div>
        </div>
        <button className="mt-2 w-full flex items-center justify-center p-2 hover:bg-amber-500/10 rounded transition-colors">
            <Settings className="w-5 h-5 text-amber-500" />
        </button>
      </div>
    </aside>
  );
};