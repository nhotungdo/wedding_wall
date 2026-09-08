'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Maximize2 } from 'lucide-react';
import './LoveProposal.css';

export default function LoveProposal() {
  const [showPopup, setShowPopup] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const proposalImg = 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop';

  return (
    <section className="proposal-section section-padding" id="proposal">
      <div className="container">
        <motion.div 
          className="proposal-card text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="proposal-icon-wrapper">
            <Heart size={44} fill="var(--color-primary)" color="var(--color-primary)" />
          </div>

          <span className="proposal-tag font-sans">THE MOMENT OF PROPOSAL</span>
          
          <h2 className="proposal-question font-serif">"Will you marry me?"</h2>

          <div className="proposal-answer-box">
            <h3 className="proposal-answer font-serif">SHE SAID YES! ❤️</h3>
            <p className="proposal-date font-sans">14 · 02 · 2025</p>
          </div>

          <p className="proposal-quote font-serif">
            "Khoảnh khắc chiếc nhẫn được trao tay cũng là lúc hai tâm hồn chính thức thuộc về nhau mãi mãi."
          </p>

          <div 
            className="proposal-img-wrapper clickable-img"
            onClick={() => setShowPopup(true)}
          >
            <img src={proposalImg} alt="Màn cầu hôn Minh & Phương" />
            <div className="proposal-hover-overlay">
              <Maximize2 size={24} color="#FFF" />
              <span>Xem ảnh khoảnh khắc cầu hôn</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Popup Modal rendered into document.body */}
      {isMounted && createPortal(
        <AnimatePresence>
          {showPopup && (
            <motion.div 
              className="img-popup-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
            >
              <button className="popup-close-btn" onClick={() => setShowPopup(false)}>
                <X size={28} />
              </button>

              <motion.div 
                className="popup-content-box"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img src={proposalImg} alt="Khoảnh khắc cầu hôn" />
                <div className="popup-caption">
                  <span className="popup-badge font-sans">THE PROPOSAL</span>
                  <h4 className="font-serif">SHE SAID YES! ❤️</h4>
                  <p className="font-sans">14 · 02 · 2025</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
