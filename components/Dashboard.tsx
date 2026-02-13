import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { TrendingUp, Users, DollarSign, Activity, Zap } from 'lucide-react';
import { Song } from '../types';

interface DashboardProps {
  songs: Song[];
}

const DATA = [
  { name: 'Mon', streams: 4000, revenue: 240 },
  { name: 'Tue', streams: 3000, revenue: 139 },
  { name: 'Wed', streams: 2000, revenue: 980 },
  { name: 'Thu', streams: 2780, revenue: 390 },
  { name: 'Fri', streams: 1890, revenue: 480 },
  { name: 'Sat', streams: 2390, revenue: 380 },
  { name: 'Sun', streams: 3490, revenue: 430 },
];

export const Dashboard: React.FC<DashboardProps> = ({ songs }) => {
  const totalPlays = songs.reduce((acc, song) => acc + song.plays, 0);
  const totalSongs = songs.length;

  return (
    <div className="p-8 h-full overflow-y-auto pb-24">
      <h2 className="text-3xl font-bold text-white mb-6">Production Overview</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-cyan-500/30 transition-all">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Activity className="w-16 h-16 text-cyan-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500 text-sm font-medium mb-1">Total Streams</span>
            <span className="text-2xl font-bold text-white">{totalPlays.toLocaleString()}</span>
            <div className="flex items-center text-green-400 text-xs mt-2">
              <TrendingUp className="w-3 h-3 mr-1" />
              <span>+12.5% vs last week</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-purple-500/30 transition-all">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <DollarSign className="w-16 h-16 text-purple-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500 text-sm font-medium mb-1">Est. Revenue (NEAR)</span>
            <span className="text-2xl font-bold text-white">Ⓝ 1,240.50</span>
            <div className="flex items-center text-green-400 text-xs mt-2">
              <TrendingUp className="w-3 h-3 mr-1" />
              <span>+8.2% vs last week</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-pink-500/30 transition-all">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Users className="w-16 h-16 text-pink-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500 text-sm font-medium mb-1">Active Listeners</span>
            <span className="text-2xl font-bold text-white">8,540</span>
            <div className="flex items-center text-slate-400 text-xs mt-2">
              <span>Currently active</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-orange-500/30 transition-all">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Zap className="w-16 h-16 text-orange-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500 text-sm font-medium mb-1">Tracks Distributed</span>
            <span className="text-2xl font-bold text-white">{totalSongs}</span>
            <div className="flex items-center text-orange-400 text-xs mt-2">
              <span>3 Pending Approval</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-lg font-bold text-white mb-6">Streaming Activity</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={DATA}>
                <defs>
                  <linearGradient id="colorStreams" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }}
                  itemStyle={{ color: '#e2e8f0' }}
                />
                <Area type="monotone" dataKey="streams" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#colorStreams)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-lg font-bold text-white mb-6">Revenue Sources</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }}
                  cursor={{fill: '#1e293b'}}
                />
                <Bar dataKey="revenue" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
