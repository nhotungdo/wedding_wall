'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import './WeddingVideo.css';

export default function WeddingVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="video-section section-padding" id="video">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge font-sans">CINEMATIC PRE-WEDDING</span>
          <h2 className="title font-serif">Thước Phim Tình Yêu</h2>
          <p className="subtitle">Lưu giữ trọn vẹn từng khoảnh khắc đong đầy cảm xúc</p>
        </motion.div>

        <motion.div 
          className="video-banner"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="video-overlay"></div>
          
          <div className="video-content">
            <span className="video-tag font-serif">OUR STORY</span>
            
            <motion.button 
              className="play-btn"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsPlaying(true)}
            >
              <div className="pulse-ring"></div>
              <Play size={32} fill="white" color="white" />
            </motion.button>

            <h3 className="video-couple font-serif">MINH &amp; PHƯƠNG</h3>
            <p className="video-sub">PRE-WEDDING TRAILER 4K</p>
          </div>
        </motion.div>

        {/* Video Player Modal rendered into document.body */}
        {isMounted && createPortal(
          <AnimatePresence>
            {isPlaying && (
              <motion.div 
                className="video-modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsPlaying(false)}
              >
                <button className="video-modal-close" onClick={() => setIsPlaying(false)}>
                  <X size={28} />
                </button>

                <motion.div 
                  className="video-modal-wrapper"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1"
                    title="Wedding Pre-wedding Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </section>
  );
}
