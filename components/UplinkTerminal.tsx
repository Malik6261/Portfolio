import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Mail, MessageCircle, Linkedin, ShieldAlert, Terminal as TerminalIcon } from 'lucide-react';

interface UplinkTerminalProps {
  onClose: () => void;
  email: string;
  telegram: string;
  linkedin: string;
}

const UplinkTerminal: React.FC<UplinkTerminalProps> = ({ onClose, email, telegram, linkedin }) => {
  const [status, setStatus] = useState('INITIALIZING_UPLINK...');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const steps = [
      'BYPASSING_FIREWALLS...',
      'ENCRYPTING_TUNNEL...',
      'UPLINK_ESTABLISHED_SUCCESSFULLY.'
    ];
    
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setStatus(steps[currentStep]);
        currentStep++;
      } else {
        clearInterval(interval);
        setIsReady(true);
      }
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="relative w-full max-w-lg bg-[#0a0f14] border border-cyan-500/30 shadow-[0_0_50px_rgba(0,243,255,0.1)] overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-cyan-500/20 bg-cyan-950/20">
          <div className="flex items-center gap-2">
            <TerminalIcon size={14} className="text-cyan-400" />
            <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase font-bold">Secure_Comms_Terminal</span>
          </div>
          <button 
            onClick={onClose}
            className="text-cyan-400/50 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="font-mono text-xs text-cyan-500/80 mb-8 space-y-1">
            <div className="flex items-center gap-2">
              <ShieldAlert size={12} className="animate-pulse" />
              <span>CONNECTION_STATUS: <span className="text-cyan-300">{status}</span></span>
            </div>
            <div>REMOTE_TARGET: KOMILOV_ABDUMALIK</div>
            <div>ENCRYPTION: AES-256_RSA</div>
          </div>

          <div className="space-y-4">
            <motion.a
              href={`mailto:${email}`}
              initial={{ x: -20, opacity: 0 }}
              animate={isReady ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-between p-4 border border-white/5 bg-white/5 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all group"
            >
              <div className="flex items-center gap-4">
                <Mail className="text-slate-400 group-hover:text-cyan-400 transition-colors" size={20} />
                <span className="font-mono text-[10px] text-slate-300 uppercase tracking-widest group-hover:text-white transition-colors">Initiate_Direct_Mail</span>
              </div>
              <span className="text-[8px] font-mono text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">RUN_COMMAND</span>
            </motion.a>

            <motion.a
              href={telegram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: -20, opacity: 0 }}
              animate={isReady ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-between p-4 border border-white/5 bg-white/5 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all group"
            >
              <div className="flex items-center gap-4">
                <MessageCircle className="text-slate-400 group-hover:text-cyan-400 transition-colors" size={20} />
                <span className="font-mono text-[10px] text-slate-300 uppercase tracking-widest group-hover:text-white transition-colors">Telegram_Uplink</span>
              </div>
              <span className="text-[8px] font-mono text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">RUN_COMMAND</span>
            </motion.a>

            <motion.a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: -20, opacity: 0 }}
              animate={isReady ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-between p-4 border border-white/5 bg-white/5 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all group"
            >
              <div className="flex items-center gap-4">
                <Linkedin className="text-slate-400 group-hover:text-cyan-400 transition-colors" size={20} />
                <span className="font-mono text-[10px] text-slate-300 uppercase tracking-widest group-hover:text-white transition-colors">LinkedIn_Profile</span>
              </div>
              <span className="text-[8px] font-mono text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">RUN_COMMAND</span>
            </motion.a>
          </div>

          <div className="mt-8 pt-6 border-t border-cyan-500/10">
            <p className="font-mono text-[8px] text-cyan-500/40 text-center uppercase tracking-[0.4em]">
              awaiting_input_from_growth_architect...
            </p>
          </div>
        </div>

        {/* Scanning Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400/20 animate-scan pointer-events-none" />
      </motion.div>

      <style>{`
        @keyframes scan {
          from { top: 0; }
          to { top: 100%; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </motion.div>
  );
};

export default UplinkTerminal;