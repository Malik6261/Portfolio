
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BiosBootProps {
  onComplete: () => void;
}

const BiosBoot: React.FC<BiosBootProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const bootText = [
    "WAYNE TECH OS v.4.0.12 - K.A. ARCHITECTURE",
    "DECRYPTING SYSTEM KERNEL...",
    "ESTABLISHING SECURE CONNECTION...",
    "LOADING PROJECT DATABASE: classified.db",
    "INITIALIZING DETECTIVE MODE...",
    "BIOMETRIC SCAN: KOMILOV ABDUMALIK",
    "ACCESS GRANTED.",
    "WELCOME, ARCHITECT."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootText.length) {
        setLines(prev => [...prev, bootText[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 800);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] bg-[#0a0a0a] flex items-center justify-center p-8 overflow-hidden"
    >
      <div className="w-full max-w-2xl font-mono text-[10px] md:text-xs text-cyan-500 uppercase">
        <div className="flex flex-col gap-1 border border-cyan-500/30 p-4 bg-cyan-950/10">
          {lines.map((line, i) => (
            <motion.div 
              key={i}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <span className="mr-2 text-cyan-200">[{new Date().toLocaleTimeString()}]</span>
              {line}
            </motion.div>
          ))}
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
            className="w-2 h-4 bg-cyan-500 inline-block mt-2"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default BiosBoot;
