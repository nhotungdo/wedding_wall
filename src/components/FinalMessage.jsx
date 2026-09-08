'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Maximize2 } from 'lucide-react';
import './FinalMessage.css';

export default function FinalMessage() {
  const [showPopup, setShowPopup] = useState(false);

  const finalImg = 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop';

  return (
    <section className="final-message-section section-padding" id="final-message">
      <div className="container">
        <motion.div 
          className="final-card text-center clickable-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          onClick={() => setShowPopup(true)}
        >
          <div className="final-img-background">
            <div className="final-overlay"></div>
          </div>

          <div className="final-content">
            <h2 className="final-names font-serif">MINH &amp; PHƯƠNG</h2>

            <div className="final-quote-box font-serif">
              <p className="line-1">TWO HEARTS</p>
              <p className="line-2">ONE BEAUTIFUL STORY</p>
              <p className="line-3">ONE FOREVER</p>
            </div>

            <div className="final-heart-icon">
              <Heart size={32} fill="var(--color-primary)" color="var(--color-primary)" />
            </div>

            <p className="final-thankyou font-serif">
              THANK YOU FOR BEING PART OF OUR JOURNEY ❤️
            </p>

            <p className="final-sub font-sans">
              Sự hiện diện và lời chúc của bạn là điều trân quý nhất đối với chúng mình!
            </p>

            <div className="final-zoom-hint font-sans">
              <Maximize2 size={16} color="var(--color-gold-light)" />
              <span>Bấm để xem ảnh kỷ niệm</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Popup Modal for Final Message Image */}
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
              <img src={finalImg} alt="Minh & Phương Final Picture" />
              <div className="popup-caption">
                <span className="popup-badge font-sans">MINH &amp; PHƯƠNG</span>
                <h4 className="font-serif">TWO HEARTS · ONE BEAUTIFUL STORY · ONE FOREVER</h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
