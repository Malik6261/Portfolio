
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      {/* Outer Circle */}
      <motion.div
        className="border border-cyan-400 rounded-full flex items-center justify-center"
        animate={{
          width: isHovering ? 60 : 30,
          height: isHovering ? 60 : 30,
          opacity: isHovering ? 0.8 : 0.4,
          borderWidth: isHovering ? '1px' : '2px',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        {/* Inner Dot */}
        <motion.div 
          className="bg-cyan-400 rounded-full"
          animate={{
            width: isHovering ? 4 : 4,
            height: isHovering ? 4 : 4,
            opacity: isHovering ? 1 : 1,
          }}
        />
      </motion.div>
      
      {/* Subtle Ping Effect on Hover */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="absolute border border-cyan-400 rounded-full w-10 h-10"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

import { AnimatePresence } from 'framer-motion';
export default Cursor;
