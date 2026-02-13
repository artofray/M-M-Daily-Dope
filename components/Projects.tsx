import React from 'react';
import { MOCK_PROJECTS } from '../constants';
import { Lock, Globe, MoreHorizontal, Clock, Music } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-[#0b0c15] p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">My Projects</h1>
        <div className="flex space-x-2">
            <button className="px-4 py-1.5 rounded-full bg-[#1a1a1a] text-white text-sm font-medium border border-[#333]">Recent</button>
            <button className="px-4 py-1.5 rounded-full bg-transparent text-slate-500 text-sm font-medium hover:text-white">Folders</button>
        </div>
      </div>

      <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] overflow-hidden">
        {MOCK_PROJECTS.map((project, index) => (
          <div 
            key={project.id} 
            className={`flex items-center p-4 hover:bg-[#252525] transition-colors group cursor-pointer ${
              index !== MOCK_PROJECTS.length - 1 ? 'border-b border-[#2a2a2a]' : ''
            }`}
          >
            {/* Image */}
            <div className="w-16 h-16 rounded-lg bg-[#0b0c15] shrink-0 overflow-hidden relative">
              {project.coverUrl ? (
                <img src={project.coverUrl} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <Music className="text-slate-700 w-6 h-6" />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="ml-4 flex-1 min-w-0">
              <h3 className="text-white font-bold text-base truncate mb-1">{project.title}</h3>
              <div className="flex items-center space-x-3 text-xs text-slate-400">
                <span className="flex items-center">
                   {project.isPrivate ? <Lock className="w-3 h-3 mr-1" /> : <Globe className="w-3 h-3 mr-1" />}
                   {project.isPrivate ? 'Private' : 'Public'}
                </span>
                <span>•</span>
                <span className="flex items-center">
                   <Clock className="w-3 h-3 mr-1" />
                   {project.duration}
                </span>
                <span>•</span>
                <span>Created {project.createdAt}</span>
              </div>
            </div>

            {/* Status Pill */}
            <div className="mr-6 hidden md:block">
               <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${
                 project.status === 'Draft' ? 'border-slate-600 text-slate-400' :
                 project.status === 'Released' ? 'border-green-900 bg-green-900/20 text-green-400' :
                 'border-purple-900 bg-purple-900/20 text-purple-400'
               }`}>
                 {project.status.toUpperCase()}
               </span>
            </div>

            {/* Actions */}
            <button className="p-2 text-slate-500 hover:text-white rounded-full hover:bg-slate-700 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        ))}
        
        {/* Empty State / Add New */}
        <div className="p-4 flex items-center justify-center border-t border-[#2a2a2a] border-dashed bg-[#1a1a1a]/50 hover:bg-[#252525] transition-colors cursor-pointer text-slate-500 hover:text-slate-300">
            <span className="text-sm font-medium">+ Start a new project</span>
        </div>
      </div>
    </div>
  );
};