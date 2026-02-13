import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Feed } from './components/Feed';
import { Projects } from './components/Projects';
import { Rewards } from './components/Rewards';
import { HelpCenter } from './components/HelpCenter';
import { connectNearWallet } from './services/nearService';
import { ViewState, WalletState } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('FEED');
  const [wallet, setWallet] = useState<WalletState>({
    isConnected: false,
    accountId: null,
    balance: 0,
    karmaPoints: 1250 // Initial mock points
  });

  const handleConnectWallet = async () => {
    try {
      const data = await connectNearWallet();
      setWallet(prev => ({
        ...prev,
        isConnected: true,
        accountId: data.accountId,
        balance: data.balance
      }));
    } catch (error) {
      console.error("Failed to connect wallet", error);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'FEED':
        return <Feed />;
      case 'PROJECTS':
        return <Projects />;
      case 'REWARDS':
        return <Rewards />;
      case 'HELP':
        return <HelpCenter />;
      default:
        return <Feed />;
    }
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center p-2 md:p-6">
      {/* The Outer "Monitor" Frame */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#020617] to-black -z-10"></div>
      
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0" 
           style={{ backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Main App Container with Tech Border */}
      <div className="w-full h-full max-w-[1920px] bg-black/80 border border-cyan-900/50 relative shadow-2xl flex flex-col overflow-hidden rounded-lg">
        {/* Frame Corners */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan-500/50 rounded-tl-lg pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-cyan-500/50 rounded-tr-lg pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-cyan-500/50 rounded-bl-lg pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cyan-500/50 rounded-br-lg pointer-events-none"></div>

        <Header wallet={wallet} onConnect={handleConnectWallet} />
        
        <div className="flex-1 flex min-h-0 relative z-10">
          <Sidebar currentView={currentView} onChangeView={setCurrentView} />
          
          <main className="flex-1 p-4 md:p-6 overflow-hidden flex flex-col">
             {/* Content Window Frame */}
             <div className="flex-1 hud-panel overflow-hidden flex flex-col relative">
                {/* Content Scanline Overlay */}
                <div className="absolute inset-0 scanlines pointer-events-none z-20 opacity-30"></div>
                
                {renderContent()}
             </div>
          </main>
        </div>
      </div>
    </div>
  );
}