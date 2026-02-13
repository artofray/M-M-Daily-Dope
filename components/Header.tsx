import React from 'react';
import { Search, Bell, Wifi, Battery, User } from 'lucide-react';
import { WalletState } from '../types';

interface HeaderProps {
  wallet: WalletState;
  onConnect: () => void;
}

export const Header: React.FC<HeaderProps> = ({ wallet, onConnect }) => {
  return (
    <header className="h-24 px-6 flex items-center justify-between shrink-0 z-20 relative">
      {/* Background Decorative Lines */}
      <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-cyan-950/20 border-b border-cyan-500/30 clip-path-trapezoid flex items-center justify-center">
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse mr-2"></div>
          <span className="text-[10px] text-cyan-400 font-mono tracking-widest">NET.LINK.ESTABLISHED</span>
      </div>

      {/* Left: Search Module */}
      <div className="flex-1 max-w-md hidden md:block">
        <div className="hud-panel h-10 flex items-center px-4 skew-x-12 transform origin-bottom-left">
           <div className="-skew-x-12 flex items-center w-full">
              <Search className="text-cyan-600 w-4 h-4 mr-2" />
              <input 
                 type="text" 
                 placeholder="SEARCH DATABANKS..." 
                 className="bg-transparent border-none focus:outline-none text-cyan-100 placeholder-cyan-800 text-sm font-mono w-full uppercase"
              />
           </div>
        </div>
      </div>

      {/* Center: Title */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold tracking-[0.2em] text-white text-glow-cyan uppercase leading-none">
          The Oasis
        </h1>
        <div className="flex items-center space-x-2 mt-1">
           <div className="h-[1px] w-8 bg-amber-500"></div>
           <span className="text-xs text-amber-500 font-mono tracking-[0.3em] uppercase">Operating System</span>
           <div className="h-[1px] w-8 bg-amber-500"></div>
        </div>
      </div>

      {/* Right: Status Module */}
      <div className="flex-1 flex justify-end items-center space-x-6">
         {/* Clock Mockup */}
         <div className="hidden lg:flex flex-col items-end text-cyan-300">
            <span className="text-2xl font-bold leading-none font-mono">08:27 PM</span>
            <span className="text-[10px] uppercase tracking-widest text-cyan-600">Tue, Apr 28, 2102</span>
         </div>

         {/* Connection Stats */}
         <div className="flex items-center space-x-3 text-cyan-600">
             <Wifi className="w-5 h-5" />
             <Battery className="w-5 h-5" />
         </div>

         {/* User Profile */}
         <button 
           onClick={onConnect}
           className={`hud-panel px-4 py-2 flex items-center space-x-3 hover:bg-cyan-500/10 transition-all ${wallet.isConnected ? 'border-cyan-400' : 'border-slate-700'}`}
         >
            <div className="w-8 h-8 rounded bg-cyan-900/50 flex items-center justify-center border border-cyan-500/30">
               <User className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="flex flex-col items-start">
               <span className="text-xs font-bold text-white tracking-wider">{wallet.isConnected ? 'USER.LOGGED_IN' : 'GUEST.ACCESS'}</span>
               <span className="text-[10px] text-amber-500 font-mono">{wallet.karmaPoints} CREDITS</span>
            </div>
         </button>
      </div>
    </header>
  );
};