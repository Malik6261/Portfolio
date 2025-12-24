import React, { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Background3D from './components/Background3D';
import Cursor from './components/Cursor';
import BiosBoot from './components/BiosBoot';
import ProjectCard from './components/ProjectCard';
import SnowOverlay from './components/SnowOverlay';
import { PROJECTS, SKILLS } from './constants';
import { Shield, Target, Terminal, Snowflake, MessageCircle, Linkedin, Mail, Sparkles, TrendingUp, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const LINKEDIN_URL = "https://www.linkedin.com/in/abdumalik-komilov-86107a320/";
  const EMAIL_ADDRESS = "abdumalikkomilov2003@gmail.com";
  const TELEGRAM_URL = "https://t.me/malik_ecom";

  return (
    <div className="relative min-h-screen selection:bg-cyan-500 selection:text-black bg-[#060a0f] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!isLoaded && <BiosBoot onComplete={() => setIsLoaded(true)} />}
      </AnimatePresence>

      {/* Only load 3D and effects AFTER boot for better performance */}
      {isLoaded && (
        <>
          <Background3D />
          <SnowOverlay />
          <Cursor />
        </>
      )}

      {isLoaded && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="relative z-10 text-slate-300"
        >
          {/* Header */}
          <header className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-50">
            <div className="flex flex-col">
              <span className="font-mono text-cyan-400 text-xs font-bold tracking-[0.3em] flex items-center gap-2">
                <Snowflake size={14} className="animate-spin-slow text-white" /> ARCTIC_CORE_ACTIVE
              </span>
              <span className="font-mono text-[8px] text-cyan-400/50 uppercase">Subzero_Protocol_v2.0</span>
            </div>
            
            <div className="flex gap-4 items-center">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all rounded-sm group backdrop-blur-md">
                <Linkedin size={16} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all rounded-sm group backdrop-blur-md">
                <MessageCircle size={16} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </header>

          <main>
            {/* Hero Section */}
            <section className="h-screen flex flex-col justify-center px-6 md:px-24 relative">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative z-10"
              >
                <div className="text-cyan-400 font-mono text-sm mb-4 tracking-[0.5em] uppercase flex items-center gap-2">
                  <div className="h-[1px] w-12 bg-cyan-400"></div> Growth Architect
                </div>
                <h1 className="text-5xl md:text-9xl font-bold leading-none mb-6 tracking-tighter">
                  KOMILOV <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white/20" style={{ WebkitTextStroke: '0.5px rgba(255,255,255,0.2)' }}>
                    ABDUMALIK
                  </span>
                </h1>
                <p className="max-w-xl text-slate-400 font-mono text-xs md:text-sm leading-relaxed mb-10 border-l border-cyan-500/30 pl-6 italic bg-cyan-500/5 py-4">
                  "Engineering high-conversion ad ecosystems in the digital tundra. I don't just scale budgets; I architect dominance through AI-synthesized creative logic."
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={`mailto:${EMAIL_ADDRESS}`} className="px-8 py-4 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold uppercase text-[10px] tracking-widest hover:bg-cyan-500 hover:text-black transition-all backdrop-blur-md flex items-center gap-2 group">
                    <Mail size={16} className="group-hover:rotate-12 transition-transform" /> CONTACT_UPLINK
                  </a>
                </div>
              </motion.div>
              
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
                <span className="text-[8px] font-mono uppercase tracking-[0.4em]">Initialize_Scroll</span>
                <ChevronDown size={16} className="animate-bounce" />
              </div>
            </section>

            {/* Mission Section */}
            <section id="mission" className="py-24 px-6 md:px-24 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent border-y border-cyan-500/5">
              <div className="max-w-4xl">
                <div className="flex items-center gap-4 mb-8">
                  <Shield className="text-cyan-400" size={32} />
                  <h2 className="text-3xl md:text-5xl font-bold">The Sub-Zero Manifesto</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <p className="font-mono text-cyan-300 text-sm italic">
                      "In the digital noise, only the coldest, most precise logic survives. Growth is not an accident; it is an architecture."
                    </p>
                    <p className="text-slate-400 leading-relaxed font-mono text-sm">
                      Over 2 years of orchestrating high-stakes growth experiments. I specialize in the intersection of <strong>Media Buying</strong> and <strong>Gen-AI Production</strong>. 
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border border-cyan-500/10 bg-black/40 backdrop-blur-md">
                      <TrendingUp size={20} className="text-cyan-400 mb-2" />
                      <div className="text-[10px] uppercase font-bold text-slate-100">Performance</div>
                    </div>
                    <div className="p-4 border border-cyan-500/10 bg-black/40 backdrop-blur-md">
                      <Sparkles size={20} className="text-cyan-400 mb-2" />
                      <div className="text-[10px] uppercase font-bold text-slate-100">AI Synthesis</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Arsenal Section */}
            <section id="arsenal" className="py-24 px-6 md:px-24">
              <div className="flex items-center gap-4 mb-12">
                <Terminal className="text-cyan-400" size={32} />
                <h2 className="text-3xl md:text-5xl font-bold">The Technical Tundra</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILLS.map((skill, i) => (
                  <div key={i} className="bg-black/60 backdrop-blur-md p-6 border border-white/5 hover:border-cyan-500/30 transition-all">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[9px] uppercase font-mono text-cyan-500/50">{skill.category}</span>
                      <span className="text-cyan-300 text-xs font-mono">{skill.level}%</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                    <div className="w-full h-1 bg-slate-900">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5 }}
                        className="h-full bg-cyan-400 shadow-[0_0_8px_rgba(0,243,255,0.4)]" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 px-6 md:px-24">
              <div className="mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">Field Operations</h2>
                <p className="text-cyan-400/40 font-mono text-[10px] uppercase tracking-[0.3em]">Live_Campaigns // ROI_DATA_STREAMS</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="py-20 px-6 md:px-24 bg-cyan-500 text-black">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter uppercase">Bridge The Gap.</h2>
                  <a href={`mailto:${EMAIL_ADDRESS}`} className="text-lg font-bold border-b-2 border-black hover:text-white hover:border-white transition-all break-all">
                    {EMAIL_ADDRESS}
                  </a>
                </div>
                <div className="flex flex-col gap-6 md:items-end justify-center">
                   <div className="flex gap-4">
                    <a href={`mailto:${EMAIL_ADDRESS}`} className="p-4 bg-black text-cyan-400 rounded-full hover:scale-110 transition-all">
                      <Mail size={20} />
                    </a>
                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-4 bg-black text-cyan-400 rounded-full hover:scale-110 transition-all">
                      <Linkedin size={20} />
                    </a>
                    <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-4 bg-black text-cyan-400 rounded-full hover:scale-110 transition-all">
                      <MessageCircle size={20} />
                    </a>
                   </div>
                   <p className="text-[10px] font-mono opacity-80 text-right uppercase">© 2024 KOMILOV ABDUMALIK. THE WINTER ARCHITECT.</p>
                </div>
              </div>
            </footer>
          </main>
        </motion.div>
      )}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;