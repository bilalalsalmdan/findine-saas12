'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function FadeIn({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.7, 
        delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ 
  children, 
  className = '',
  staggerDelay = 0.1 
}: { 
  children: React.ReactNode; 
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleOnHover({ 
  children, 
  className = '',
  scale = 1.03 
}: { 
  children: React.ReactNode; 
  className?: string;
  scale?: number;
}) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxSection({ 
  children, 
  className = '',
  speed = 0.5 
}: { 
  children: React.ReactNode; 
  className?: string;
  speed?: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

export function AnimatedGradient({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      animate={{
        background: [
          'radial-gradient(circle at 0% 0%, rgba(230, 3, 75, 0.3) 0%, transparent 50%)',
          'radial-gradient(circle at 100% 100%, rgba(124, 58, 237, 0.3) 0%, transparent 50%)',
          'radial-gradient(circle at 0% 100%, rgba(230, 3, 75, 0.3) 0%, transparent 50%)',
          'radial-gradient(circle at 0% 0%, rgba(230, 3, 75, 0.3) 0%, transparent 50%)',
        ]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
    />
  );
}

export function FloatingElement({ 
  children, 
  className = '',
  duration = 3 
}: { 
  children: React.ReactNode; 
  className?: string;
  duration?: number;
}) {
  return (
    <motion.div
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function TypewriterText({ 
  text, 
  className = '',
  speed = 0.05 
}: { 
  text: string; 
  className?: string;
  speed?: number;
}) {
  const letters = Array.from(text);
  
  return (
    <motion.span className={className}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * speed }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function MagneticButton({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <motion.button
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}
