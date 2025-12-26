
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BiosBoot from './components/BiosBoot';
import ProjectCard from './components/ProjectCard';
import SnowOverlay from './components/SnowOverlay';
import UplinkTerminal from './components/UplinkTerminal';
import { PROJECTS, SKILLS } from './constants';
import { Shield, Terminal, Snowflake, MessageCircle, Linkedin, Mail, Target, Activity, Zap, Layers, ChevronRight, Globe, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  
  const LINKEDIN_URL = "https://www.linkedin.com/in/abdumalik-komilov-86107a320/";
  const EMAIL_ADDRESS = "maliklabs.work@gmail.com";
  const TELEGRAM_URL = "https://t.me/malik_labs";
  const PROFILE_IMAGE = "https://i.postimg.cc/85xt5GpB/85d19fbe-ed1e-4521-9dd6-815baa0284d9.png"; 

  return (
    <div className="relative min-h-screen selection:bg-cyan-500 selection:text-black bg-[#060a0f] overflow-x-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-radial-at-t from-cyan-500/5 via-transparent to-transparent" />
      </div>

      <AnimatePresence mode="wait">
        {!isLoaded && <BiosBoot onComplete={() => setIsLoaded(true)} />}
      </AnimatePresence>

      <AnimatePresence>
        {isTerminalOpen && (
          <UplinkTerminal 
            onClose={() => setIsTerminalOpen(false)}
            email={EMAIL_ADDRESS}
            telegram={TELEGRAM_URL}
            linkedin={LINKEDIN_URL}
          />
        )}
      </AnimatePresence>

      {isLoaded && (
        <>
          <SnowOverlay />
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="relative z-10 text-slate-300"
          >
            {/* Header */}
            <header className="fixed top-0 left-0 w-full p-6 md:px-12 md:py-8 flex justify-between items-center z-50 backdrop-blur-sm">
              <div className="flex flex-col">
                <span className="font-mono text-cyan-400 text-[10px] font-bold tracking-[0.4em] flex items-center gap-2">
                  <Snowflake size={12} className="animate-spin-slow" /> MALIK_LABS.INTEL
                </span>
                <span className="font-mono text-[7px] text-cyan-400/40 uppercase tracking-tighter">Growth_Ops_Framework_v2.5</span>
              </div>
              
              <div className="flex gap-6 items-center">
                <div className="hidden md:flex items-center gap-2 text-[8px] font-mono text-slate-500 tracking-[0.2em] uppercase">
                  <Globe size={10} /> Based in Uzbekistan. Working Globally.
                </div>
                <div className="flex gap-3">
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-2 border border-white/5 hover:border-cyan-400/50 transition-all rounded-sm bg-white/2">
                    <Linkedin size={14} className="text-slate-400 hover:text-cyan-400 transition-colors" />
                  </a>
                  <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-2 border border-white/5 hover:border-cyan-400/50 transition-all rounded-sm bg-white/2">
                    <MessageCircle size={14} className="text-slate-400 hover:text-cyan-400 transition-colors" />
                  </a>
                </div>
              </div>
            </header>

            <main>
              {/* Hero Section - Convergent Redesign */}
              <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 md:px-24 pt-32 lg:pt-0 relative gap-16 overflow-hidden">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="flex-[1.2] z-10"
                >
                  <div className="text-cyan-400 font-mono text-xs mb-6 tracking-[0.5em] uppercase flex items-center gap-3">
                    <div className="h-[1px] w-10 bg-cyan-400"></div> Growth Architect
                  </div>
                  <h1 className="text-5xl md:text-8xl font-bold leading-[0.9] mb-8 tracking-tighter">
                    I DESIGN AND OPERATE <br /> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                      AI GROWTH SYSTEMS.
                    </span>
                  </h1>
                  
                  <div className="space-y-3 mb-12">
                    {[
                      'Meta Ads & funnel systems for B2B and E-commerce',
                      'AI-generated creatives + automated reporting (APIs)',
                      'Focused on conversion, signal, and repeatable scale'
                    ].map((text, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-400 font-mono text-xs md:text-sm">
                        <CheckCircle2 size={14} className="text-cyan-500/50" />
                        {text}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    <button 
                      onClick={() => setIsTerminalOpen(true)}
                      className="px-8 py-4 bg-cyan-500 text-black font-bold uppercase text-[11px] tracking-widest hover:bg-white transition-all flex items-center gap-3 group shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                    >
                      REQUEST A SYSTEM AUDIT <ChevronRight size={16} />
                    </button>
                    <div className="text-[9px] font-mono text-slate-500 italic max-w-[180px]">
                      Short call. Direct diagnosis. <br />No sales theatrics.
                    </div>
                  </div>
                </motion.div>

                {/* Right: Biometric Portrait - Integrated */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="flex-1 relative flex justify-center lg:justify-end"
                >
                  <div className="relative group">
                    {/* Compact Biometric Overlay */}
                    <div className="absolute -top-6 -left-6 z-20 pointer-events-none">
                      <div className="bg-black/80 border border-white/10 p-2 backdrop-blur-xl font-mono text-[8px] text-cyan-400/60 space-y-1">
                        <div className="flex items-center gap-2"><Target size={8} /> ID: ABDUMALIK_K</div>
                        <div className="flex items-center gap-2"><Activity size={8} className="animate-pulse" /> BIO: ACTIVE</div>
                      </div>
                    </div>

                    <div className="relative w-52 h-64 md:w-64 md:h-80 grayscale contrast-[1.1] border border-white/10 bg-slate-900 shadow-2xl overflow-hidden group-hover:grayscale-0 transition-all duration-700">
                      <img src={PROFILE_IMAGE} alt="Abdumalik Komilov" className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060a0f] via-transparent to-transparent opacity-60" />
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400/20 animate-scan-portrait pointer-events-none" />
                    </div>

                    <div className="absolute -bottom-4 -right-4 bg-black/80 border border-white/10 p-2 font-mono text-[7px] text-slate-500 tracking-widest uppercase">
                      Status: Execution_Mode
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Operating Principles Section - Methodology over Philosophy */}
              <section id="principles" className="py-32 px-6 md:px-24 bg-slate-900/20 border-y border-white/5">
                <div className="max-w-5xl mx-auto">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                      <div className="text-cyan-400 font-mono text-[10px] tracking-[0.4em] uppercase mb-4">Operating_Manual</div>
                      <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">THE RULES OF <br />THE SYSTEM.</h2>
                    </div>
                    <div className="max-w-xs text-slate-400 font-mono text-xs leading-relaxed">
                      "Digital growth is not about hacks; it's about architectural discipline. These are the rules I run my systems by."
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
                    {[
                      { title: 'Test before Scale', desc: 'No budget is deployed at scale without data-backed validation of the hook and funnel logic.' },
                      { title: 'Automate what Repeats', desc: 'Using n8n and Meta APIs to eliminate manual reporting and creative production bottlenecks.' },
                      { title: 'Kill what doesn\'t Convert', desc: 'ruthless budget allocation based on signal, not sentiment. If it doesn\'t drive growth, it dies.' },
                      { title: 'Optimize for Signal', desc: 'Ignoring vanity metrics. Every KPI is linked directly to backend revenue and customer LTV.' },
                      { title: 'Systems > Hacks', desc: 'Algorithm-proof growth is built on solid architectural logic, not temporary platform exploits.' },
                      { title: 'Clear Scope', desc: 'Honest collaboration. I work with a small number of projects to ensure surgical execution.' }
                    ].map((rule, i) => (
                      <div key={i} className="bg-[#060a0f] p-8 group hover:bg-slate-900/50 transition-colors">
                        <div className="text-cyan-500/40 font-mono text-[10px] mb-4">RULE_0{i+1}</div>
                        <h3 className="text-lg font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">{rule.title}</h3>
                        <p className="text-xs text-slate-500 font-mono leading-relaxed">{rule.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Arsenal Section - Capability over percentages */}
              <section id="arsenal" className="py-32 px-6 md:px-24">
                <div className="max-w-5xl mx-auto">
                  <div className="flex items-center gap-4 mb-16">
                    <Terminal className="text-cyan-400" size={24} />
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">CAPABILITIES & STACK</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SKILLS.map((skill, i) => (
                      <div key={i} className="p-6 border border-white/5 bg-slate-900/20 backdrop-blur-sm group hover:border-cyan-500/30 transition-all">
                        <div className="flex justify-between items-start mb-6">
                          <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">{skill.category}</span>
                          <Zap size={14} className="text-cyan-500/30 group-hover:text-cyan-400 transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 tracking-tight">{skill.name}</h3>
                        <div className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest">{skill.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-16 p-6 border-l-2 border-cyan-500/20 bg-cyan-500/5 font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                    Infrastructure & Tools: Meta Ads Manager · Meta Graph API · n8n Automation · AI Creative Engines · Shopify CRO · Google Cloud Functions
                  </div>
                </div>
              </section>

              {/* Projects Section */}
              <section id="projects" className="py-32 px-6 md:px-24 bg-slate-900/10">
                <div className="max-w-6xl mx-auto">
                  <div className="mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter uppercase">FIELD OPERATIONS.</h2>
                    <p className="text-cyan-400/40 font-mono text-[10px] uppercase tracking-[0.4em]">Live_Campaigns // Documented_Results</p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {PROJECTS.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </div>
              </section>

              {/* Enhanced Conversion Footer */}
              <footer id="contact" className="py-32 px-6 md:px-24 bg-cyan-500 text-black">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                  <div>
                    <div className="text-[10px] font-mono mb-6 border-b border-black pb-2 inline-block uppercase font-bold tracking-widest">FINAL_UPLINK</div>
                    <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-[0.85] uppercase">
                      Scale the <br />System.
                    </h2>
                    <p className="text-sm font-mono mb-10 max-w-sm font-medium">
                      Discussing a growth problem is the first step to architecting the solution. No fluff. Just data and strategy.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => setIsTerminalOpen(true)}
                        className="px-8 py-5 bg-black text-cyan-400 font-bold uppercase text-[11px] tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3"
                      >
                        DISCUSS A GROWTH PROBLEM <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-12 lg:items-end">
                    <div className="space-y-4 text-right">
                       <div className="text-[10px] font-mono uppercase font-bold opacity-60">Direct_Uplink</div>
                       <a href={`mailto:${EMAIL_ADDRESS}`} className="text-2xl md:text-4xl font-bold border-b-2 border-black hover:opacity-70 transition-opacity block">
                        {EMAIL_ADDRESS}
                       </a>
                    </div>

                    <div className="flex gap-4">
                      {[
                        { icon: Mail, url: `mailto:${EMAIL_ADDRESS}` },
                        { icon: Linkedin, url: LINKEDIN_URL },
                        { icon: MessageCircle, url: TELEGRAM_URL }
                      ].map((social, i) => (
                        <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="p-4 border-2 border-black hover:bg-black hover:text-cyan-400 transition-all">
                          <social.icon size={20} />
                        </a>
                      ))}
                    </div>

                    <div className="text-right font-mono text-[9px] uppercase tracking-[0.3em] font-bold opacity-80 leading-loose">
                      © 2024 KOMILOV ABDUMALIK <br />
                      BASED IN UZBEKISTAN // OPERATING GLOBALLY <br />
                      ARCHITECTING DIGITAL DOMINANCE
                    </div>
                  </div>
                </div>
              </footer>
            </main>
          </motion.div>
        </>
      )}
      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        @keyframes scan-portrait {
          0% { top: -10%; opacity: 0; }
          20% { opacity: 0.5; }
          80% { opacity: 0.5; }
          100% { top: 110%; opacity: 0; }
        }
        .animate-scan-portrait { animation: scan-portrait 4s linear infinite; }
      `}</style>
    </div>
  );
};

export default App;
