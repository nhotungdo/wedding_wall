'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Plus, X, Maximize2 } from 'lucide-react';
import './PhotoWall.css';

const initialPhotos = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop"
];

export default function PhotoWall() {
  const [photos, setPhotos] = useState(initialPhotos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPhotos([imageUrl, ...photos]);
    }
  };

  return (
    <section className="photo-wall-section section-padding" id="photo-wall">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header text-center"
        >
          <span className="section-badge font-sans">GUEST EXPERIENCE</span>
          <h2 className="title font-serif">OUR WEDDING WALL</h2>
          <p className="subtitle">Cùng chia sẻ những khoảnh khắc đẹp nhất của bạn tại tiệc cưới Minh &amp; Phương</p>
        </motion.div>

        <div className="wall-actions text-center">
          <input 
            type="file" 
            accept="image/*" 
            ref={fileInputRef} 
            onChange={handleFileUpload} 
            style={{ display: 'none' }}
          />
          <motion.button 
            className="btn share-photo-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => fileInputRef.current?.click()}
          >
            <Camera size={20} />
            + SHARE YOUR PHOTO
          </motion.button>
        </div>

        <div className="wall-grid mt-8">
          <AnimatePresence>
            <motion.div 
              className="wall-item add-card"
              onClick={() => fileInputRef.current?.click()}
              layout
            >
              <Plus size={36} color="var(--color-primary)" />
              <span>+ SHARE YOUR PHOTO</span>
            </motion.div>

            {photos.map((photoUrl, index) => (
              <motion.div 
                key={photoUrl + index}
                className="wall-item clickable-wall-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                layout
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedPhoto(photoUrl)}
              >
                <img src={photoUrl} alt="Wedding wall guest photo" />
                <div className="wall-hover-overlay">
                  <Maximize2 size={22} color="#FFF" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Popup Modal for Photo Wall */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div 
            className="img-popup-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <button className="popup-close-btn" onClick={() => setSelectedPhoto(null)}>
              <X size={28} />
            </button>

            <motion.div 
              className="popup-content-box"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedPhoto} alt="Wedding Wall Preview" />
              <div className="popup-caption">
                <span className="popup-badge font-sans">WEDDING WALL</span>
                <h4 className="font-serif">Khoảnh Khắc Kỷ Niệm</h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
