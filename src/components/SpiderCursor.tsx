import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WebLine {
  id: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  timestamp: number;
}

interface WebSplat {
  id: string;
  x: number;
  y: number;
  timestamp: number;
}

const SpiderCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [webLines, setWebLines] = useState<WebLine[]>([]);
  const [webSplats, setWebSplats] = useState<WebSplat[]>([]);
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);

  // Update mouse position
  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  // Handle mouse down
  const handleMouseDown = useCallback((e: MouseEvent) => {
    setIsClicking(true);
    
    // Create web line toward center or hovered element
    const targetX = hoveredElement 
      ? hoveredElement.getBoundingClientRect().left + hoveredElement.offsetWidth / 2
      : window.innerWidth / 2;
    const targetY = hoveredElement
      ? hoveredElement.getBoundingClientRect().top + hoveredElement.offsetHeight / 2
      : window.innerHeight / 2;

    const newWebLine: WebLine = {
      id: Math.random().toString(36).substr(2, 9),
      startX: e.clientX,
      startY: e.clientY,
      endX: targetX,
      endY: targetY,
      timestamp: Date.now(),
    };

    setWebLines(prev => [...prev, newWebLine]);

    // Create web splat at target
    const newWebSplat: WebSplat = {
      id: Math.random().toString(36).substr(2, 9),
      x: targetX,
      y: targetY,
      timestamp: Date.now(),
    };

    setWebSplats(prev => [...prev, newWebSplat]);

    // Clean up old web lines and splats
    setTimeout(() => {
      setWebLines(prev => prev.filter(line => line.id !== newWebLine.id));
      setWebSplats(prev => prev.filter(splat => splat.id !== newWebSplat.id));
    }, 1000);
  }, [hoveredElement]);

  // Handle mouse up
  const handleMouseUp = useCallback(() => {
    setIsClicking(false);
  }, []);

  // Track hovered magnetic elements
  const handleMouseEnter = useCallback((e: Event) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('magnetic-element')) {
      setHoveredElement(target);
    }
  }, []);

  const handleMouseLeave = useCallback((e: Event) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('magnetic-element')) {
      setHoveredElement(null);
    }
  }, []);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Add magnetic element listeners
    const magneticElements = document.querySelectorAll('.magnetic-element');
    magneticElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      magneticElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [updateMousePosition, handleMouseDown, handleMouseUp, handleMouseEnter, handleMouseLeave]);

  // Apply magnetic effect to hovered element
  useEffect(() => {
    if (hoveredElement) {
      const rect = hoveredElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (mousePosition.x - centerX) * 0.15;
      const deltaY = (mousePosition.y - centerY) * 0.15;
      
      hoveredElement.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.02)`;
      hoveredElement.style.transition = 'transform 0.3s cubic-bezier(0.23, 1, 0.320, 1)';
    }

    return () => {
      if (hoveredElement) {
        hoveredElement.style.transform = '';
        hoveredElement.style.transition = '';
      }
    };
  }, [mousePosition, hoveredElement]);

  return (
    <>
      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        animate={{
          scale: isClicking ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        {/* Main spider orb */}
        <motion.div
          className="w-6 h-6 rounded-full relative"
          animate={{
            boxShadow: isClicking 
              ? [
                  "0 0 0 rgba(var(--cyber-blue), 0.8)",
                  "0 0 20px rgba(var(--cyber-blue), 0.6)",
                  "0 0 40px rgba(var(--cyber-blue), 0.4)",
                  "0 0 0 rgba(var(--cyber-blue), 0.8)"
                ]
              : [
                  "0 0 10px rgba(var(--neon-green), 0.6)",
                  "0 0 20px rgba(var(--neon-green), 0.4)",
                  "0 0 10px rgba(var(--neon-green), 0.6)"
                ],
          }}
          transition={{
            duration: isClicking ? 0.3 : 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Core orb */}
          <div className="w-full h-full bg-gradient-to-br from-cyber-blue to-neon-green rounded-full" />
          
          {/* Spider legs */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent"
              style={{
                transformOrigin: '0% 50%',
                rotate: i * 45,
                top: '50%',
                left: '50%',
              }}
              animate={{
                scaleX: isClicking ? 1.5 : 1,
                opacity: isClicking ? 1 : 0.7,
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Web lines */}
      <AnimatePresence>
        {webLines.map((line) => (
          <motion.svg
            key={line.id}
            className="fixed top-0 left-0 pointer-events-none z-[9998] w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.path
              d={`M ${line.startX} ${line.startY} Q ${(line.startX + line.endX) / 2} ${line.startY - 50} ${line.endX} ${line.endY}`}
              stroke="rgba(var(--cyber-blue), 0.8)"
              strokeWidth="2"
              fill="none"
              filter="drop-shadow(0 0 10px rgba(var(--cyber-blue), 0.6))"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.svg>
        ))}
      </AnimatePresence>

      {/* Web splats */}
      <AnimatePresence>
        {webSplats.map((splat) => (
          <motion.div
            key={splat.id}
            className="fixed pointer-events-none z-[9997]"
            style={{
              left: splat.x - 20,
              top: splat.y - 20,
            }}
            initial={{ scale: 0, rotate: 0 }}
            animate={{ 
              scale: [0, 1.2, 1], 
              rotate: [0, 180, 360],
              opacity: [1, 1, 0] 
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Spider web splat */}
            <svg width="40" height="40" viewBox="0 0 40 40">
              <defs>
                <radialGradient id="webGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(var(--cyber-blue), 0.8)" />
                  <stop offset="100%" stopColor="rgba(var(--neon-green), 0.4)" />
                </radialGradient>
              </defs>
              
              {/* Web strands */}
              {[...Array(8)].map((_, i) => (
                <motion.line
                  key={i}
                  x1="20"
                  y1="20"
                  x2={20 + 15 * Math.cos((i * Math.PI) / 4)}
                  y2={20 + 15 * Math.sin((i * Math.PI) / 4)}
                  stroke="url(#webGradient)"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                />
              ))}
              
              {/* Concentric circles */}
              {[...Array(3)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx="20"
                  cy="20"
                  r={5 + i * 5}
                  fill="none"
                  stroke="url(#webGradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                />
              ))}
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};

export default SpiderCursor;