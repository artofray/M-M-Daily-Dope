import React from 'react';
import { MOCK_PROJECTS } from '../constants';
import { Lock, Globe, MoreHorizontal, Clock, Music, Folder } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
       {/* File Explorer Header */}
       <div className="flex items-center justify-between mb-8">
          <div>
             <h2 className="text-3xl font-bold text-white text-glow-cyan tracking-widest uppercase">
               Data Archives
             </h2>
             <span className="text-xs text-cyan-600 font-mono">/ROOT/USERS/DEFAULT/PROJECTS</span>
          </div>
          
          <div className="flex space-x-2">
             <button className="hud-panel px-4 py-2 flex items-center space-x-2 hover:bg-cyan-500/20 text-cyan-400">
                <Folder className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">New Directory</span>
             </button>
             <button className="bg-cyan-600 text-black font-bold px-4 py-2 text-xs uppercase tracking-wider hover:bg-cyan-400 transition-colors">
                + New Project
             </button>
          </div>
       </div>

       {/* Grid of Files */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MOCK_PROJECTS.map((project) => (
             <div key={project.id} className="hud-panel p-4 flex items-center space-x-4 hover:bg-cyan-900/20 cursor-pointer transition-colors group">
                <div className="w-16 h-16 bg-black border border-cyan-800 flex items-center justify-center shrink-0 relative overflow-hidden">
                   {project.coverUrl ? (
                      <img src={project.coverUrl} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                   ) : (
                      <Music className="text-cyan-800 w-8 h-8" />
                   )}
                   {/* Corner decoration */}
                   <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500"></div>
                </div>

                <div className="flex-1 min-w-0">
                   <h3 className="text-white font-bold tracking-wide truncate group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                   <div className="flex items-center space-x-2 text-xs text-cyan-700 font-mono mt-1">
                      <span>{project.artist}</span>
                      <span>|</span>
                      <span>{project.duration}</span>
                   </div>
                </div>

                <div className="flex flex-col items-end space-y-2">
                   <span className={`text-[9px] px-2 py-0.5 border ${
                      project.status === 'Draft' ? 'border-slate-600 text-slate-500' : 
                      project.status === 'Released' ? 'border-green-500 text-green-500 bg-green-900/20' : 
                      'border-amber-500 text-amber-500 bg-amber-900/20'
                   } uppercase tracking-wider`}>
                      {project.status}
                   </span>
                   
                   <div className="flex items-center text-cyan-800">
                      {project.isPrivate ? <Lock className="w-3 h-3" /> : <Globe className="w-3 h-3" />}
                   </div>
                </div>
             </div>
          ))}
       </div>
    </div>
  );
};