import React, { useState } from 'react';
import { Save, Server, Database, Key, ShieldCheck } from 'lucide-react';
import { syncWithMusicMachine } from '../services/musicMachineApi';

export const Settings: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'DISCONNECTED' | 'CONNECTED'>('DISCONNECTED');

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsConnecting(true);
    const success = await syncWithMusicMachine(apiKey);
    setConnectionStatus(success ? 'CONNECTED' : 'DISCONNECTED');
    setIsConnecting(false);
  };

  return (
    <div className="p-8 h-full overflow-y-auto pb-24 max-w-4xl">
      <h2 className="text-3xl font-bold text-white mb-6">System Configuration</h2>
      
      {/* API Connection Section */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
            <Server className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Music Machine Integration</h3>
            <p className="text-slate-400 text-sm">Connect your local dashboard to the Music Machine API for automated distribution.</p>
          </div>
        </div>

        <form onSubmit={handleConnect} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">API Endpoint URL</label>
            <div className="flex items-center bg-slate-950 border border-slate-700 rounded-lg px-3 py-2">
              <Database className="w-4 h-4 text-slate-500 mr-2" />
              <input 
                type="text" 
                defaultValue="https://api.musicmachine.network/v1" 
                className="bg-transparent border-none w-full text-slate-200 focus:outline-none text-sm"
                readOnly
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Machine API Key</label>
            <div className="flex items-center bg-slate-950 border border-slate-700 rounded-lg px-3 py-2">
              <Key className="w-4 h-4 text-slate-500 mr-2" />
              <input 
                type="password" 
                placeholder="sk_live_..." 
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="bg-transparent border-none w-full text-slate-200 focus:outline-none text-sm"
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Obtain this key from your <a href="#" className="text-cyan-400 hover:underline">Music Machine Dashboard</a>.
            </p>
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${connectionStatus === 'CONNECTED' ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`}></div>
              <span className="text-sm font-mono text-slate-400">Status: {connectionStatus}</span>
            </div>
            <button 
              type="submit" 
              disabled={isConnecting}
              className={`flex items-center space-x-2 px-6 py-2 rounded-lg font-medium transition-all ${
                connectionStatus === 'CONNECTED' 
                  ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-600/30'
                  : 'bg-purple-600 hover:bg-purple-500 text-white'
              }`}
            >
              {isConnecting ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Save className="w-4 h-4" />}
              <span>{connectionStatus === 'CONNECTED' ? 'Connected' : 'Save Connection'}</span>
            </button>
          </div>
        </form>
      </div>

      {/* NEAR Protocol Configuration */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
            <ShieldCheck className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">NEAR Protocol Defaults</h3>
            <p className="text-slate-400 text-sm">Default smart contract settings for minting new songs.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Default Royalty Beneficiary</label>
            <input 
              type="text" 
              placeholder="treasury.musicmachine.near" 
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-cyan-500/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Default Royalty %</label>
            <input 
              type="number" 
              defaultValue="5"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-cyan-500/50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
