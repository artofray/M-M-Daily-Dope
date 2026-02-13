import React from 'react';
import { Home, Music2, Heart, BookOpen, Settings, Zap } from 'lucide-react';
import { ViewState, NavItem } from '../types';

interface SidebarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'FEED', label: 'Community', icon: Home },
  { id: 'PROJECTS', label: 'My Projects', icon: Music2 },
  { id: 'REWARDS', label: 'Rewards', icon: Zap },
  { id: 'HELP', label: 'Learn', icon: BookOpen },
];

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView }) => {
  return (
    <aside className="w-20 md:w-64 bg-black border-r border-[#1a1a1a] flex flex-col h-full shrink-0">
      {/* Brand */}
      <div className="h-16 flex items-center px-4 md:px-6 border-b border-[#1a1a1a]">
        <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shrink-0">
          <Music2 className="text-white w-5 h-5" />
        </div>
        <span className="ml-3 font-bold text-lg hidden md:block text-white tracking-tight">
          Music<span className="font-light text-slate-400">Machine</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 space-y-2 px-2 md:px-4">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onChangeView(item.id)}
            className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 group ${
              currentView === item.id
                ? 'bg-[#1a1a1a] text-white border-l-4 border-red-500'
                : 'text-slate-400 hover:bg-[#1a1a1a] hover:text-white'
            }`}
          >
            <item.icon className={`w-6 h-6 ${currentView === item.id ? 'text-red-500' : 'group-hover:text-white'}`} />
            <span className="hidden md:block font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-[#1a1a1a]">
        <button className="w-full flex items-center justify-center md:justify-start space-x-3 text-slate-400 hover:text-white transition-colors p-2">
          <Settings className="w-5 h-5" />
          <span className="hidden md:block text-sm">Settings</span>
        </button>
      </div>
    </aside>
  );
};