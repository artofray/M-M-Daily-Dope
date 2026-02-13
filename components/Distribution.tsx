import React from 'react';
import { Song, SongStatus } from '../types';
import { Settings, Plus, LayoutGrid, List, Search, AlertCircle, Edit2 } from 'lucide-react';
import { pushMetadataToMachine } from '../services/musicMachineApi';

interface DistributionProps {
  songs: Song[];
}

export const Distribution: React.FC<DistributionProps> = ({ songs }) => {
  // Filter for items that look like "Releases" (Albums/Singles) rather than raw files
  // In this mock, we assume items starting with 'rel-' are releases
  const releases = songs.filter(s => s.id.startsWith('rel-'));

  const getStatusBadge = (status: SongStatus) => {
    switch (status) {
      case SongStatus.ISSUE:
        return (
          <span className="bg-amber-500/20 text-amber-500 border border-amber-500/50 text-[10px] font-bold px-2 py-0.5 rounded uppercase flex items-center">
            <AlertCircle className="w-3 h-3 mr-1" /> Issue found
          </span>
        );
      case SongStatus.DRAFT:
        return <span className="bg-slate-700 text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase">DRAFT</span>;
      case SongStatus.PUBLISHED:
        return <span className="bg-cyan-900/40 text-cyan-400 border border-cyan-500/30 text-[10px] font-bold px-2 py-0.5 rounded uppercase">RELEASED</span>;
      default:
        return <span className="bg-slate-700 text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase">{status}</span>;
    }
  };

  const getStatusColorClass = (status: SongStatus) => {
      if (status === SongStatus.ISSUE) return "text-amber-500";
      if (status === SongStatus.PUBLISHED) return "text-cyan-400";
      return "text-slate-400";
  };

  return (
    <div className="h-full flex flex-col bg-[#0b0c15] p-8 overflow-y-auto">
      {/* Header */}
      <div className="flex flex-col mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-white tracking-tight">My releases</h1>
          <button className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold py-2 px-6 rounded-full text-sm transition-colors flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Add release
          </button>
        </div>

        {/* Filters and Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
             <button className="bg-slate-800 border border-slate-700 text-slate-300 px-4 py-2 rounded-full text-sm font-medium hover:border-slate-500 transition-colors flex items-center">
                All statuses <span className="ml-2 text-xs">▼</span>
             </button>
             <button className="bg-slate-800 border border-slate-700 text-slate-300 px-4 py-2 rounded-full text-sm font-medium hover:border-slate-500 transition-colors flex items-center">
                All artists <span className="ml-2 text-xs">▼</span>
             </button>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Title, artist or UPC" 
                  className="bg-slate-900 border border-slate-700 text-slate-300 text-sm rounded-lg py-2 pl-10 pr-4 w-64 focus:outline-none focus:border-cyan-500 transition-colors"
                />
            </div>
            <div className="flex bg-slate-800 rounded-lg p-1 border border-slate-700">
                <button className="p-2 bg-slate-700 rounded text-white shadow-sm">
                    <LayoutGrid className="w-4 h-4" />
                </button>
                <button className="p-2 text-slate-400 hover:text-white">
                    <List className="w-4 h-4" />
                </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4 text-sm text-slate-500">
        Showing 1-{releases.length} of {releases.length} results
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
        {releases.map((release) => (
            <div key={release.id} className="group bg-[#14151e] border border-slate-800 rounded-lg overflow-hidden hover:border-slate-600 transition-all duration-200 flex flex-col">
                {/* Cover Art Area */}
                <div className="relative aspect-square w-full bg-slate-900 overflow-hidden">
                    {release.coverUrl ? (
                         <img src={release.coverUrl} alt={release.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-700">
                            <span className="text-4xl">♫</span>
                        </div>
                    )}
                    
                    {/* Status Badge Over Image - Top Left */}
                    <div className="absolute top-3 left-3">
                         {release.status === SongStatus.ISSUE && (
                             <span className="bg-amber-400 text-black text-[10px] font-bold px-2 py-1 rounded shadow-sm">IN REVIEW</span>
                         )}
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-4 flex flex-col flex-1">
                    <div className="mb-1 flex justify-between items-start">
                         <span className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${getStatusColorClass(release.status)}`}>
                             {release.status === SongStatus.ISSUE ? '' : release.status} 
                         </span>
                         {release.status === SongStatus.ISSUE && getStatusBadge(release.status)}
                    </div>

                    <h3 className="font-bold text-slate-100 text-lg leading-tight mb-1 line-clamp-2" title={release.title}>
                        {release.title}
                    </h3>

                    <div className="text-slate-400 text-xs mb-4">
                        {release.trackCount} Tracks • {release.upc || 'No UPC'}
                    </div>

                    <div className="mt-auto">
                        <button className="w-fit flex items-center space-x-2 px-4 py-2 rounded-full border border-slate-600 hover:bg-slate-800 text-slate-300 text-xs font-medium transition-colors">
                            {release.status === SongStatus.ISSUE ? (
                                <>
                                    <Edit2 className="w-3 h-3" />
                                    <span>Fix issue</span>
                                </>
                            ) : release.status === SongStatus.DRAFT ? (
                                <>
                                    <Edit2 className="w-3 h-3" />
                                    <span>Finish release</span>
                                </>
                            ) : (
                                <>
                                    <Settings className="w-3 h-3" />
                                    <span>Manage</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};
