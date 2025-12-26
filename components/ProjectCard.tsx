
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { Activity, ChevronRight, ExternalLink, Snowflake, Target, Zap } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative group bg-slate-900/40 border border-white/5 p-6 backdrop-blur-xl transition-all duration-500 overflow-hidden flex flex-col h-full"
    >
      <div className="absolute top-0 right-0 p-3 text-[8px] font-mono text-cyan-500/30 flex items-center gap-1 uppercase">
        <Snowflake size={8} className="animate-spin-slow" />
        OP_ID: {project.id}
      </div>

      <div className="mb-6">
        <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-mono block mb-1">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">
          {project.title}
        </h3>
      </div>

      <div className="space-y-4 mb-8 flex-grow">
        {project.problem && (
          <div className="border-l border-red-500/20 pl-4">
            <div className="text-[8px] font-mono text-red-400/60 uppercase mb-1 flex items-center gap-1">
              <Target size={8} /> The_Problem
            </div>
            <p className="text-xs text-slate-400 font-mono leading-relaxed">{project.problem}</p>
          </div>
        )}
        
        {project.solution && (
          <div className="border-l border-cyan-500/20 pl-4">
            <div className="text-[8px] font-mono text-cyan-400/60 uppercase mb-1 flex items-center gap-1">
              <Zap size={8} /> The_System
            </div>
            <p className="text-xs text-slate-400 font-mono leading-relaxed">{project.solution}</p>
          </div>
        )}

        {project.outcome && (
          <div className="border-l border-emerald-500/20 pl-4">
            <div className="text-[8px] font-mono text-emerald-400/60 uppercase mb-1 flex items-center gap-1">
              <Activity size={8} /> The_Result
            </div>
            <p className="text-xs text-slate-300 font-mono leading-relaxed italic">{project.outcome}</p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.specs.map((spec, i) => (
          <span 
            key={i} 
            className="text-[8px] px-2 py-0.5 bg-cyan-500/5 border border-cyan-500/10 text-cyan-400/70 uppercase font-mono"
          >
            {spec}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-4 border-t border-white/5">
        {project.url ? (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all">
            <span className="text-[10px] uppercase font-bold tracking-widest">Enter_Simulation</span>
            <ExternalLink size={12} />
          </a>
        ) : (
          <div className="flex items-center gap-2 text-slate-500 italic">
            <span className="text-[10px] uppercase font-bold tracking-widest">Internal_Deployment</span>
            <ChevronRight size={12} />
          </div>
        )}
      </div>

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#00f3ff_1px,transparent_1px)] [background-size:16px_16px]" />
    </motion.div>
  );
};

export default ProjectCard;
