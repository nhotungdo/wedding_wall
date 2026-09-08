'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Maximize2 } from 'lucide-react';
import './OurStory.css';

const chapters = [
  {
    chapter: 'CHAPTER 01',
    title: 'THE DAY WE MET',
    subtitle: 'Lần Đầu Gặp Nỡ',
    date: 'Tháng 9, 2019',
    description: 'Mọi câu chuyện tình yêu vĩ đại đều bắt đầu từ một khoảnh khắc tình cờ. Ngày hôm ấy tại khuôn viên trường đại học, ánh mắt đầu tiên trao nhau đã mở ra một hành trình không bao giờ quên.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1000&auto=format&fit=crop',
  },
  {
    chapter: 'CHAPTER 02',
    title: 'WHEN WE FELL IN LOVE',
    subtitle: 'Rung Động Đầu Tiên',
    date: 'Tháng 2, 2020',
    description: 'Những buổi hẹn hò dưới cơn mưa nhẹ, những cuộc trò chuyện kéo dài thấu đêm. Minh & Phương nhận ra đối phương chính là mảnh ghép còn thiếu trong cuộc đời mình.',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000&auto=format&fit=crop',
  },
  {
    chapter: 'CHAPTER 03',
    title: 'THE MOMENT WE KNEW',
    subtitle: 'Hành Trình Gắn Kết',
    date: 'Tháng 10, 2022',
    description: 'Trải qua vô vàn chuyến đi khám phá những vùng đất mới, cùng nhau vượt qua những thử thách trong cuộc sống. Tình yêu cứ thế lớn dần lên theo năm tháng.',
    image: 'https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1000&auto=format&fit=crop',
  },
  {
    chapter: 'CHAPTER 04',
    title: 'FOREVER STARTS HERE',
    subtitle: 'Khởi Đầu Vĩnh Cửu',
    date: 'Tháng 10, 2026',
    description: 'Và rồi Minh & Phương quyết định cùng nhau bước vào chương mới của cuộc đời — Nơi nụ cười, hạnh phúc và lời hứa chân thành sẽ kéo dài mãi mãi.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop',
  }
];

export default function OurStory() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="our-story-section section-padding" id="our-story">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge font-sans">OUR STORY</span>
          <h2 className="title font-serif">Câu Chuyện Tình Yêu</h2>
          <p className="subtitle">Hành trình tìm thấy nhau và lựa chọn bên nhau trọn đời</p>
        </motion.div>

        <div className="chapters-container">
          {chapters.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                className={`chapter-row ${isEven ? 'row-normal' : 'row-reverse'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="chapter-img-col">
                  <div 
                    className="chapter-img-wrapper clickable-img"
                    onClick={() => setSelectedImg(item)}
                  >
                    <img src={item.image} alt={item.title} />
                    <span className="chapter-tag">{item.chapter}</span>
                    <div className="img-hover-overlay">
                      <Maximize2 size={24} color="#FFF" />
                      <span>Xem ảnh phóng to</span>
                    </div>
                  </div>
                </div>

                <div className="chapter-text-col">
                  <div className="chapter-content">
                    <div className="chapter-date font-sans">
                      <span className="chapter-date-dot">✦</span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="chapter-title font-serif">{item.title}</h3>
                    <h4 className="chapter-subtitle">{item.subtitle}</h4>
                    <p className="chapter-desc">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Popup Modal rendered into document.body */}
      {isMounted && createPortal(
        <AnimatePresence>
          {selectedImg && (
            <motion.div 
              className="img-popup-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
            >
              <button className="popup-close-btn" onClick={() => setSelectedImg(null)}>
                <X size={28} />
              </button>

              <motion.div 
                className="popup-content-box"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img src={selectedImg.image} alt={selectedImg.title} />
                <div className="popup-caption">
                  <span className="popup-badge font-sans">{selectedImg.chapter}</span>
                  <h4 className="font-serif">{selectedImg.title} — {selectedImg.subtitle}</h4>
                  <p className="font-sans">{selectedImg.date}</p>
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
