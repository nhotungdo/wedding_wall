'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './PhotoGallery.css';

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    category: "wedding"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop",
    category: "memories"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    category: "wedding"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
    category: "memories"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop",
    category: "wedding"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1621801306185-3746d03d1db1?q=80&w=2070&auto=format&fit=crop",
    category: "memories"
  }
];

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const filteredImages = images.filter(img => 
    activeTab === 'all' ? true : img.category === activeTab
  );

  return (
    <section className="gallery-section section-padding" id="gallery">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="title">Album Kỷ Niệm</h2>
          <p className="subtitle">Những khoảnh khắc đáng nhớ của hai đứa</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="gallery-filters"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button 
            className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            Tất cả
          </button>
          <button 
            className={`filter-btn ${activeTab === 'wedding' ? 'active' : ''}`}
            onClick={() => setActiveTab('wedding')}
          >
            Ảnh cưới
          </button>
          <button 
            className={`filter-btn ${activeTab === 'memories' ? 'active' : ''}`}
            onClick={() => setActiveTab('memories')}
          >
            Kỷ niệm
          </button>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="masonry-grid mt-8">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div 
                layout
                key={img.id}
                className="masonry-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedImage(img.src)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={`Kỷ niệm ${img.category}`} loading="lazy" />
                <div className="overlay">
                  <span className="font-serif">Xem ảnh</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className="close-btn" onClick={() => setSelectedImage(null)}>
              <X size={32} color="#FFF" />
            </button>
            <motion.img 
              src={selectedImage} 
              alt="Phóng to kỷ niệm"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
