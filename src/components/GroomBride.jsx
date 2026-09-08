'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Smile, Coffee, X, Maximize2 } from 'lucide-react';
import './GroomBride.css';

export default function GroomBride() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const groomInfo = {
    title: 'CHÚ RỂ MINH',
    name: 'ĐẶNG VĂN MINH',
    quote: '"The man who found his forever."',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
  };

  const brideInfo = {
    title: 'CÔ DÂU PHƯƠNG',
    name: 'NGUYỄN THỊ PHƯƠNG',
    quote: '"The woman who made forever feel like home."',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop'
  };

  return (
    <section className="groom-bride-section section-padding" id="couple">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge font-sans">GROOM &amp; BRIDE</span>
          <h2 className="title font-serif">Chú Rể &amp; Cô Dâu</h2>
          <p className="subtitle">Hai trái tim hòa cùng một nhịp đập</p>
        </motion.div>

        <div className="couple-grid">
          {/* Chú Rể MINH */}
          <motion.div 
            className="couple-card groom-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div 
              className="couple-avatar-wrapper clickable-avatar"
              onClick={() => setSelectedPerson(groomInfo)}
            >
              <img src={groomInfo.image} alt={groomInfo.name} />
              <span className="role-tag font-sans">CHÚ RỂ</span>
              <div className="avatar-hover-icon">
                <Maximize2 size={20} color="#FFF" />
              </div>
            </div>

            <div className="couple-info">
              <h3 className="couple-name font-serif">{groomInfo.name}</h3>
              <p className="couple-quote font-serif">{groomInfo.quote}</p>

              <div className="info-list">
                <div className="info-item">
                  <Smile className="info-icon" size={16} />
                  <span><strong>Tính cách:</strong> Điềm tĩnh, chân thành &amp; luôn hài hước</span>
                </div>
                <div className="info-item">
                  <Coffee className="info-icon" size={16} />
                  <span><strong>Sở thích:</strong> Nhiếp ảnh, cà phê sáng &amp; du lịch phượt</span>
                </div>
                <div className="info-item">
                  <Sparkles className="info-icon" size={16} />
                  <span><strong>Fun fact:</strong> Luôn mang theo ống kính để chụp ảnh Phương</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="couple-center-heart">
            <Heart size={32} fill="var(--color-primary)" color="var(--color-primary)" />
          </div>

          {/* Cô Dâu PHƯƠNG */}
          <motion.div 
            className="couple-card bride-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div 
              className="couple-avatar-wrapper clickable-avatar"
              onClick={() => setSelectedPerson(brideInfo)}
            >
              <img src={brideInfo.image} alt={brideInfo.name} />
              <span className="role-tag font-sans">CÔ DÂU</span>
              <div className="avatar-hover-icon">
                <Maximize2 size={20} color="#FFF" />
              </div>
            </div>

            <div className="couple-info">
              <h3 className="couple-name font-serif">{brideInfo.name}</h3>
              <p className="couple-quote font-serif">{brideInfo.quote}</p>

              <div className="info-list">
                <div className="info-item">
                  <Smile className="info-icon" size={16} />
                  <span><strong>Tính cách:</strong> Ngọt ngào, ấm áp &amp; chu đáo</span>
                </div>
                <div className="info-item">
                  <Coffee className="info-icon" size={16} />
                  <span><strong>Sở thích:</strong> Cắm hoa, làm bánh &amp; đọc sách</span>
                </div>
                <div className="info-item">
                  <Sparkles className="info-icon" size={16} />
                  <span><strong>Fun fact:</strong> Là "tổ trưởng hậu trường" trong mọi chuyến đi</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Popup Modal for Groom/Bride */}
      <AnimatePresence>
        {selectedPerson && (
          <motion.div 
            className="img-popup-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPerson(null)}
          >
            <button className="popup-close-btn" onClick={() => setSelectedPerson(null)}>
              <X size={28} />
            </button>

            <motion.div 
              className="popup-content-box"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedPerson.image} alt={selectedPerson.name} />
              <div className="popup-caption">
                <span className="popup-badge font-sans">{selectedPerson.title}</span>
                <h4 className="font-serif">{selectedPerson.name}</h4>
                <p className="font-serif italic">{selectedPerson.quote}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
