'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen, Heart } from 'lucide-react';
import './DigitalEnvelope.css';

const PETAL_COUNT = 18;

export default function DigitalEnvelope({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: PETAL_COUNT }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 5,
      size: 10 + Math.random() * 16,
      type: Math.random() > 0.5 ? 'petal' : 'heart',
      opacity: 0.2 + Math.random() * 0.4,
      drift: -80 + Math.random() * 160,
    }));
    setPetals(generated);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFlashing(true);
      setTimeout(() => {
        setIsHiding(true);
        if (onOpen) onOpen();
      }, 800);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {!isHiding && (
        <motion.div
          className="envelope-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated background */}
          <div className="env-bg">
            <div className="env-bg-gradient" />
            <div className="env-bg-vignette" />

            {/* Floating petals / hearts */}
            {petals.map((p) => (
              <motion.div
                key={p.id}
                className={`floating-particle ${p.type}`}
                style={{
                  left: p.left,
                  bottom: '-40px',
                  width: p.size,
                  height: p.size,
                  opacity: p.opacity,
                }}
                animate={{
                  y: [0, -1200],
                  x: [0, p.drift],
                  rotate: [0, 360],
                  opacity: [p.opacity, 0],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Top decorative text */}
          <motion.div
            className="env-top-deco"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="env-deco-line" />
            <span className="env-deco-text font-sans">💍 WEDDING INVITATION 💍</span>
            <div className="env-deco-line" />
          </motion.div>

          {/* Names above envelope */}
          <motion.div
            className="env-names"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.9, type: 'spring' }}
          >
            <h1 className="env-couple-name font-serif">MINH <span className="env-amp">&</span> PHƯƠNG</h1>
            <p className="env-tagline font-sans">THE BEGINNING OF FOREVER</p>
            <p className="env-date font-sans">13 · 10 · 2026</p>
          </motion.div>

          {/* Envelope */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, type: 'spring' }}
          >
            <div className={`envelope ${isOpen ? 'open' : ''}`}>
              <div className="flap" />
              <div className="card">
                <div className="card-content">
                  <Heart className="envelope-sparkle" size={20} fill="var(--color-gold)" color="var(--color-gold)" />
                  <h3 className="sub-title font-sans">WITH LOVE</h3>
                  <h1 className="couple-names font-serif">MINH & PHƯƠNG</h1>
                  <div className="divider" />
                  <p className="date font-sans">13 · 10 · 2026</p>
                </div>
              </div>
              <div className="front" />

              {!isOpen && (
                <div className="seal-btn-container">
                  <motion.button
                    className="seal-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    animate={{ boxShadow: ['0 6px 20px rgba(0,0,0,0.3)', '0 12px 32px rgba(199,27,32,0.55)', '0 6px 20px rgba(0,0,0,0.3)'] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                    onClick={handleOpen}
                  >
                    <MailOpen size={20} color="#FFF" />
                    <span>MỞ THIỆP</span>
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Bottom hint */}
          <motion.p
            className="env-bottom-hint font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0] }}
            transition={{ delay: 1.2, duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            ✦ Nhấn vào nút để mở thiệp ✦
          </motion.p>

          {/* Flash overlay on open */}
          <AnimatePresence>
            {isFlashing && (
              <motion.div
                className="flash-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
