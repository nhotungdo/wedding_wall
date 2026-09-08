'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Heart } from 'lucide-react';
import './Hero.css';

export default function Hero({ onEnter }) {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const weddingDate = new Date('2026-12-20T17:30:00');
    const updateCountdown = () => {
      const now = new Date();
      const diffTime = weddingDate.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysLeft(diffDays > 0 ? diffDays : 0);
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="cinematic-hero">
      <div className="hero-base-bg"></div>

      <motion.div 
        className="hero-image-container"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1.08 }}
        transition={{ 
          opacity: { duration: 1.5 },
          scale: { duration: 25, ease: "linear" }
        }}
      >
        <div className="hero-overlay"></div>
      </motion.div>

      <div className="hero-content">
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Heart size={16} fill="var(--color-gold)" color="var(--color-gold)" />
          <span>WEDDING INVITATION</span>
        </motion.div>

        <motion.div 
          className="hero-names-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <h1 className="hero-name">MINH</h1>
          <span className="hero-ampersand">&amp;</span>
          <h1 className="hero-name">PHƯƠNG</h1>
        </motion.div>

        <motion.p 
          className="hero-tagline font-serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          WE FOUND LOVE AND CHOSE FOREVER
        </motion.p>

        <motion.div
          className="hero-date-box"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p className="hero-date font-sans">20 · 12 · 2026</p>
          {daysLeft > 0 && (
            <div className="days-counter">
              <span>Ngày trọng đại còn <strong>{daysLeft}</strong> ngày</span>
            </div>
          )}
        </motion.div>

        <motion.div
          className="enter-btn-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <button className="btn enter-btn" onClick={onEnter}>
            <span>KHÁM PHÁ CÂU CHUYỆN</span>
            <ArrowDown size={18} />
          </button>
        </motion.div>
      </div>

      <div className="particles-container">
        {[...Array(15)].map((_, i) => (
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
              opacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 12,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </section>
  );
}
