'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen } from 'lucide-react';
import './DigitalEnvelope.css';

export default function DigitalEnvelope({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // After envelope opens, trigger the flash effect
    setTimeout(() => {
      setIsFlashing(true);
      
      // While flashing white, hide envelope and trigger onOpen
      setTimeout(() => {
        setIsHiding(true);
        if (onOpen) onOpen();
      }, 800); // Trigger transition during the white flash

    }, 1200); // Time for the envelope flap to open and card to slide up
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
          {/* Flash Overlay */}
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
            {/* The Front Flap */}
            <div className="flap"></div>
            
            {/* The Card Inside */}
            <div className="card">
              <div className="card-content">
                <h2 className="font-serif text-primary">WITH LOVE</h2>
                <div className="divider"></div>
                <p className="invite-text">MINH & PHƯƠNG</p>
                <p className="date text-gold mt-2">20 • 12 • 2026</p>
              </div>
            </div>
            
            {/* Envelope Front Layer */}
            <div className="front"></div>
            
            {/* Seal/Button */}
            {!isOpen && (
              <motion.button 
                className="seal-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpen}
              >
                <MailOpen size={20} color="#FFF" />
                <span>OPEN INVITE</span>
              </motion.button>
            )}
          </div>
          
          <div className="envelope-bg"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
