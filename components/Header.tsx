import React from 'react';
import { Search, Bell, MessageSquare, Plus } from 'lucide-react';
import { WalletState } from '../types';

interface HeaderProps {
  wallet: WalletState;
  onConnect: () => void;
}

export const Header: React.FC<HeaderProps> = ({ wallet, onConnect }) => {
  return (
    <header className="h-16 bg-[#0d0d0d] border-b border-[#1a1a1a] flex items-center justify-between px-6 sticky top-0 z-20">
      {/* Search Bar */}
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 w-4 h-4 group-focus-within:text-white transition-colors" />
          <input
            type="text"
            placeholder="Search for artists, stems, or help..."
            className="w-full bg-[#1a1a1a] border border-transparent rounded-full py-2 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:bg-[#252525] transition-all"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-4 ml-4">
        <div className="hidden md:flex items-center space-x-4 mr-4">
          <button className="text-slate-400 hover:text-white transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="text-slate-400 hover:text-white transition-colors">
            <MessageSquare className="w-5 h-5" />
          </button>
        </div>

        {/* Create Button (Primary) */}
        <button className="hidden md:flex items-center space-x-2 bg-[#ff3333] hover:bg-[#cc0000] text-white px-4 py-1.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-red-900/20">
          <Plus className="w-4 h-4" />
          <span>Create</span>
        </button>

        {/* Wallet / Profile */}
        {wallet.isConnected ? (
          <div className="flex items-center space-x-2 bg-[#1a1a1a] hover:bg-[#252525] rounded-full py-1 pr-4 pl-1 cursor-pointer transition-colors border border-[#333]">
            <img 
              src="https://i.pravatar.cc/150?u=me" 
              alt="Profile" 
              className="w-8 h-8 rounded-full border border-slate-600"
            />
            <div className="flex flex-col items-start leading-none">
              <span className="text-xs font-bold text-white">My Profile</span>
              <span className="text-[10px] text-yellow-500 font-mono">{wallet.karmaPoints} Karma</span>
            </div>
          </div>
        ) : (
          <button
            onClick={onConnect}
            className="text-sm font-bold text-slate-300 hover:text-white px-3 py-2"
          >
            Log In
          </button>
        )}
      </div>
    </header>
  );
};