
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { FileText, ChevronRight, ExternalLink, Snowflake } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const CardContent = (
    <div className="relative h-full z-10">
      <div className="absolute top-0 right-0 p-3 text-[8px] font-mono text-cyan-500/40 select-none flex items-center gap-1">
        <Snowflake size={8} className="animate-spin-slow" />
        SECURE_ID: {project.id}
      </div>
      
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 backdrop-blur-sm group-hover:bg-cyan-500 group-hover:text-black transition-all">
          <FileText size={20} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-500/80 font-mono">
            LOG_ENTRY // {project.category}
          </span>
        </div>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed mb-6 font-mono border-l border-white/5 pl-4 group-hover:border-cyan-500/40 transition-colors">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.specs.map((spec, i) => (
          <span 
            key={i} 
            className="text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 text-slate-400 uppercase font-mono group-hover:text-cyan-300 group-hover:border-cyan-500/20 transition-all"
          >
            {spec}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 text-cyan-400 group-hover:translate-x-2 transition-transform">
        <span className="text-[10px] uppercase font-bold tracking-widest">
          {project.url ? 'ENTER_SIMULATION' : 'DATA_RESTRICTED'}
        </span>
        {project.url ? <ExternalLink size={14} /> : <ChevronRight size={14} />}
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#00f3ff_1px,transparent_1px)] [background-size:16px_16px]" />
    </div>
  );

  return (
    <motion.div
      whileHover={{ 
        y: -5,
        boxShadow: "0 0 30px rgba(0, 243, 255, 0.15)"
      }}
      className="relative group bg-black/60 border border-white/5 p-8 backdrop-blur-xl transition-all duration-500 overflow-hidden cursor-pointer"
    >
      {/* Crystalline Shimmer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </div>

      {project.url ? (
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </motion.div>
  );
};

export default ProjectCard;
