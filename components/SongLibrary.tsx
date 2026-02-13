import React, { useState } from 'react';
import { Play, Pause, Download, Share2, MoreHorizontal, FileAudio, BarChart2 } from 'lucide-react';
import { Song, SongStatus } from '../types';

interface SongLibraryProps {
  songs: Song[];
  onMint: (id: string) => void;
}

export const SongLibrary: React.FC<SongLibraryProps> = ({ songs, onMint }) => {
  const [activeSongId, setActiveSongId] = useState<string | null>(null);
  
  // Filter out the Album objects, we only want "files" here. 
  // In a real app this would be more robust, for now we filter by having 'WAV' format or no coverUrl
  const libraryFiles = songs.filter(s => s.format === 'WAV' || !s.coverUrl || s.id.startsWith('lib-'));

  const togglePlay = (id: string) => {
    setActiveSongId(activeSongId === id ? null : id);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="h-full flex flex-col bg-[#14151e]">
      {/* Toolbar */}
      <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between shrink-0">
        <h2 className="text-2xl font-bold text-white">Library</h2>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search by name, ISRC or UPC" 
              className="bg-[#0b0c15] border border-slate-700 text-slate-300 text-sm rounded-full py-2 px-4 w-64 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
          <button className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold py-2 px-5 rounded-full text-sm transition-colors">
            + New
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="px-6 py-3 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0 bg-[#0b0c15]">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 hover:text-white transition-colors">
            <span>All files</span>
          </button>
        </div>
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-1 text-amber-400">
            <span>👑</span>
            <span>Get unlimited masters in all formats</span>
          </span>
          <span>1% of 200 GB used</span>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 px-6 py-3 border-b border-slate-800 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-[#0b0c15] shrink-0">
        <div className="w-8">{/* Checkbox placeholder */}</div>
        <div className="flex items-center space-x-2 cursor-pointer hover:text-slate-300">
          <span>Name</span>
        </div>
        <div className="w-24 text-right">Created</div>
        <div className="w-48">{/* Waveform space */}</div>
        <div className="w-32 text-right">{/* Actions */}</div>
      </div>

      {/* File List */}
      <div className="flex-1 overflow-y-auto">
        {libraryFiles.map((song) => (
          <div 
            key={song.id} 
            className={`group grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 px-6 py-3 items-center border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors ${
              activeSongId === song.id ? 'bg-slate-800/40' : ''
            }`}
          >
            {/* Checkbox / Play Button */}
            <div className="w-8 flex justify-center">
              <div className="relative w-5 h-5 group-hover:block hidden">
                 <button onClick={() => togglePlay(song.id)} className="text-slate-200 hover:text-cyan-400">
                    {activeSongId === song.id ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                 </button>
              </div>
              <input type="checkbox" className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-cyan-500 focus:ring-0 focus:ring-offset-0 group-hover:hidden" />
            </div>

            {/* Name & Metadata */}
            <div className="flex items-center space-x-4 min-w-0">
              <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center shrink-0 text-slate-500">
                <FileAudio className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="font-medium text-slate-200 truncate pr-4 text-sm">
                  {song.title}
                </div>
                <div className="flex items-center space-x-2 mt-0.5">
                  {song.format && (
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-800/80 px-1 rounded uppercase">
                      {song.format}
                    </span>
                  )}
                  {song.version && (
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-800/80 px-1 rounded uppercase">
                      {song.version}
                    </span>
                  )}
                  {song.status === SongStatus.PUBLISHED && (
                     <span className="text-[10px] font-bold text-black bg-amber-400 px-1 rounded uppercase">
                      RELEASED
                    </span>
                  )}
                </div>
              </div>
            </div>

             {/* Waveform Visualization (Mock) */}
             <div className="w-48 h-8 flex items-center opacity-30 group-hover:opacity-60 transition-opacity">
                <div className="flex items-end space-x-[2px] h-full w-full">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-1 bg-slate-400 rounded-t ${activeSongId === song.id ? 'animate-pulse bg-cyan-400' : ''}`}
                      style={{ height: `${Math.max(20, Math.random() * 100)}%` }}
                    ></div>
                  ))}
                </div>
            </div>

            {/* Date & Duration */}
            <div className="w-24 text-right flex flex-col justify-center">
                <span className="text-xs text-slate-400">{song.duration}</span>
                <span className="text-[10px] text-slate-600">{formatDate(song.createdAt)}</span>
            </div>

            {/* Actions */}
            <div className="w-32 flex justify-end items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 rounded-full hover:bg-slate-700 text-slate-400 hover:text-white transition-colors" title="Mastering">
                <BarChart2 className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full hover:bg-slate-700 text-slate-400 hover:text-white transition-colors" title="Download">
                <Download className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full hover:bg-slate-700 text-slate-400 hover:text-white transition-colors" title="Share">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full hover:bg-slate-700 text-slate-400 hover:text-white transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
