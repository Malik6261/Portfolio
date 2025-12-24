
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { FileText, ChevronRight, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const CardContent = (
    <div className="relative h-full">
      <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-cyan-500/40 select-none">
        ID: {project.id}
      </div>
      
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-cyan-950/30 border border-cyan-500/20 text-cyan-400">
          <FileText size={20} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-[10px] uppercase tracking-widest text-cyan-500 font-mono">
            CLASSIFIED // {project.category}
          </span>
        </div>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed mb-6 font-mono">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.specs.map((spec, i) => (
          <span 
            key={i} 
            className="text-[9px] px-2 py-0.5 border border-cyan-500/10 text-cyan-500/60 uppercase font-mono"
          >
            {spec}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase font-bold tracking-tighter">
          {project.url ? 'Visit Live Operation' : 'Initialize Link'}
        </span>
        {project.url ? <ExternalLink size={14} /> : <ChevronRight size={14} />}
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#00f3ff_1px,transparent_1px)] [background-size:16px_16px]" />
    </div>
  );

  return (
    <motion.div
      whileHover={{ 
        rotateX: 5, 
        rotateY: -2, 
        scale: 1.02,
        boxShadow: "0 0 20px rgba(0, 243, 255, 0.2)"
      }}
      className="relative group bg-slate-900/40 border-l-2 border-cyan-500/30 p-6 backdrop-blur-md transition-all duration-300 overflow-hidden cursor-pointer"
      style={{ transformStyle: 'preserve-3d' }}
    >
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
