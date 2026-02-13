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
    <div className="flex h-screen bg-[#0b0c15] text-slate-100 overflow-hidden relative font-sans">
      <Sidebar currentView={currentView} onChangeView={setCurrentView} />
      
      <main className="flex-1 flex flex-col h-full min-w-0">
        <Header 
          wallet={wallet} 
          onConnect={handleConnectWallet} 
        />
        {renderContent()}
      </main>
    </div>
  );
}