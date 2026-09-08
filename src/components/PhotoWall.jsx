'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Upload, Plus } from 'lucide-react';
import './PhotoWall.css';

const initialPhotos = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop"
];

export default function PhotoWall() {
  const [photos, setPhotos] = useState(initialPhotos);
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      // Add new photo to the beginning of the list
      setPhotos([imageUrl, ...photos]);
    }
  };

  return (
    <section className="photo-wall-section section-padding bg-surface" id="photo-wall">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="title">Wedding Wall</h2>
          <p className="subtitle">Cùng chia sẻ những khoảnh khắc đẹp nhất trong ngày vui hôm nay</p>
        </motion.div>

        <div className="wall-actions">
          <input 
            type="file" 
            accept="image/*" 
            ref={fileInputRef} 
            onChange={handleFileUpload} 
            style={{ display: 'none' }}
          />
          <motion.button 
            className="btn upload-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => fileInputRef.current?.click()}
          >
            <Camera size={20} />
            Chụp ảnh / Tải lên
          </motion.button>
        </div>

        <div className="wall-grid mt-10">
          <AnimatePresence>
            {/* The upload placeholder button */}
            <motion.div 
              className="wall-item add-new"
              onClick={() => fileInputRef.current?.click()}
              layout
            >
              <Plus size={40} color="#C71B20" />
              <span>Thêm ảnh</span>
            </motion.div>

            {photos.map((photoUrl, index) => (
              <motion.div 
                key={photoUrl + index}
                className="wall-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                layout
                transition={{ duration: 0.4 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photoUrl} alt="Wedding moment" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
