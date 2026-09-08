'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import './PhotoGallery.css';

const albums = [
  { id: 'ALL', name: 'TẤT CẢ ALBUM' },
  { id: 'PRE-WEDDING', name: 'PRE-WEDDING' },
  { id: 'OUR JOURNEY', name: 'OUR JOURNEY' },
  { id: 'LITTLE MOMENTS', name: 'LITTLE MOMENTS' },
  { id: 'FOREVER TOGETHER', name: 'FOREVER TOGETHER' }
];

const galleryImages = [
  {
    id: 1,
    category: 'PRE-WEDDING',
    title: 'Ánh Nắng Ban Mai',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'PRE-WEDDING',
    title: 'Nụ Cười Hạnh Phúc',
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'OUR JOURNEY',
    title: 'Chuyến Đi Đà Lạt',
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'OUR JOURNEY',
    title: 'Hoàng Hôn Phú Quốc',
    src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 5,
    category: 'LITTLE MOMENTS',
    title: 'Buổi Sáng Bình Yên',
    src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 6,
    category: 'LITTLE MOMENTS',
    title: 'Góc Cà Phê Quen',
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 7,
    category: 'FOREVER TOGETHER',
    title: 'Lời Hứa Dưới Mưa',
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 8,
    category: 'FOREVER TOGETHER',
    title: 'Mối Tình Vĩnh Cửu',
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop'
  }
];

const getBentoClass = (index) => {
  const patterns = [
    'span-2x2', 'span-1x1', 'span-1x2', 'span-1x1',
    'span-2x1', 'span-1x2', 'span-1x1', 'span-2x1'
  ];
  return patterns[index % patterns.length];
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.8, 
    transition: { duration: 0.3 } 
  }
};

export default function PhotoGallery() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredImages = activeTab === 'ALL'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeTab);

  const openLightbox = (index) => {
    setSelectedImgIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImgIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedImgIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedImgIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="gallery-section section-padding" id="memories">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge font-sans">OUR MEMORIES</span>
          <h2 className="title font-serif">Bộ Ảnh Kỷ Niệm</h2>
          <p className="subtitle">Lưu giữ từng khoảnh khắc tuyệt vời của Minh &amp; Phương</p>
        </motion.div>

        {/* Tab Album Filter */}
        <div className="gallery-tabs">
          {albums.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div 
          className="gallery-grid" 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.id}
                className={`gallery-item ${getBentoClass(index)}`}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                onClick={() => openLightbox(index)}
              >
                <img src={img.src} alt={img.title} loading="lazy" />
                <div className="gallery-overlay">
                  <div className="gallery-icon-wrap">
                    <Maximize2 size={24} color="#FFF" />
                  </div>
                  <span className="gallery-img-title font-serif">{img.title}</span>
                  <span className="gallery-img-cat">{img.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fullscreen Lightbox Modal rendered into document.body */}
        {isMounted && createPortal(
          <AnimatePresence>
            {selectedImgIndex !== null && (
              <motion.div 
                className="lightbox-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeLightbox}
              >
                <button className="lightbox-close" onClick={closeLightbox}>
                  <X size={28} />
                </button>

                <button className="lightbox-nav nav-left" onClick={showPrev}>
                  <ChevronLeft size={36} />
                </button>

                <motion.div 
                  className="lightbox-content"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <img 
                    src={filteredImages[selectedImgIndex].src} 
                    alt={filteredImages[selectedImgIndex].title} 
                  />
                  <div className="lightbox-caption">
                    <h4 className="font-serif">{filteredImages[selectedImgIndex].title}</h4>
                    <p>{filteredImages[selectedImgIndex].category} ({selectedImgIndex + 1} / {filteredImages.length})</p>
                  </div>
                </motion.div>

                <button className="lightbox-nav nav-right" onClick={showNext}>
                  <ChevronRight size={36} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </section>
  );
}
