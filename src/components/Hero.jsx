'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

export default function Hero({ onEnter }) {
  return (
    <section className="cinematic-hero">
      {/* 1. Base dark red background */}
      <div className="hero-base-bg"></div>

      {/* 2. Slow zooming photo with overlay */}
      <motion.div 
        className="hero-image-container"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ 
          opacity: { delay: 1, duration: 2 },
          scale: { delay: 1, duration: 20, ease: "linear" }
        }}
      >
        <div className="hero-overlay"></div>
      </motion.div>

      {/* 3. The Content Sequence */}
      <div className="hero-content">
        
        {/* Phase 1: Small Intro Text (0-1s) */}
        <motion.p 
          className="intro-text font-sans"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          THE BEGINNING OF FOREVER
        </motion.p>

        {/* Phase 2: Main Names (3s) */}
        <motion.h1 
          className="hero-title font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.5 }}
        >
          Minh & Phương
        </motion.h1>

        {/* Phase 3: Date and Quote (4s) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3.5 }}
        >
          <p className="hero-date font-sans">20 • 12 • 2026</p>
          <p className="hero-quote font-serif">
            "We found love, and chose forever."
          </p>
        </motion.div>

        {/* Phase 4: Enter Button (5s) */}
        <motion.div
          className="enter-btn-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 5 }}
        >
          <button className="btn enter-btn" onClick={onEnter}>
            <span>ENTER OUR STORY</span>
            <ArrowDown size={18} />
          </button>
        </motion.div>
      </div>
      
      {/* Subtle particles for cinematic feel */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              y: "100vh", 
              x: `${Math.random() * 100}vw`,
              opacity: 0
            }}
            animate={{ 
              y: "-10vh",
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </section>
  );
}
