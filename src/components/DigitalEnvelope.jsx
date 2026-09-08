'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen, Sparkles } from 'lucide-react';
import './DigitalEnvelope.css';

export default function DigitalEnvelope({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);

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

          <div className={`envelope ${isOpen ? 'open' : ''}`}>
            <div className="flap"></div>
            
            <div className="card">
              <div className="card-content">
                <Sparkles className="envelope-sparkle" size={24} />
                <h3 className="sub-title">WITH LOVE</h3>
                <h1 className="couple-names">MINH & PHƯƠNG</h1>
                <p className="tagline">THE BEGINNING OF FOREVER</p>
                <div className="divider"></div>
                <p className="date">20 · 12 · 2026</p>
              </div>
            </div>
            
            <div className="front"></div>
            
            {!isOpen && (
              <div className="seal-btn-container">
                <motion.button 
                  className="seal-btn"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOpen}
                >
                  <MailOpen size={20} color="#FFF" />
                  <span>MỞ THIỆP</span>
                </motion.button>
              </div>
            )}
          </div>
          
          <div className="envelope-bg"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
