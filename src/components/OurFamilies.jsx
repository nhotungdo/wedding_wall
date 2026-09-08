'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import './OurFamilies.css';

export default function OurFamilies() {
  return (
    <section className="families-section section-padding" id="families">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge font-sans">OUR FAMILIES</span>
          <h2 className="title font-serif">Gia Đình Hai Bên</h2>
          <p className="subtitle">Mối nhân duyên tốt đẹp kết nối hai gia đình</p>
        </motion.div>

        <div className="families-grid">
          {/* Nhà Trai */}
          <motion.div 
            className="family-card groom-family"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="family-badge font-sans">GIA ĐÌNH NHÀ TRAI</div>
            <h3 className="groom-bride-name font-serif">MINH</h3>
            <div className="family-divider"></div>

            <div className="parents-info">
              <div className="parent-row">
                <span className="parent-label">Thân phụ:</span>
                <strong className="parent-name">Ông ĐẶNG THÀNH TÂM</strong>
              </div>
              <div className="parent-row">
                <span className="parent-label">Thân mẫu:</span>
                <strong className="parent-name">Bà LÊ THỊ MAI</strong>
              </div>
            </div>

            <p className="family-location">Địa chỉ: Q. Bình Thạnh, TP. Hồ Chí Minh</p>
          </motion.div>

          {/* Heart Icon Center */}
          <div className="family-heart-center">
            <Heart size={36} fill="var(--color-primary)" color="var(--color-primary)" />
          </div>

          {/* Nhà Gái */}
          <motion.div 
            className="family-card bride-family"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="family-badge font-sans">GIA ĐÌNH NHÀ GÁI</div>
            <h3 className="groom-bride-name font-serif">PHƯƠNG</h3>
            <div className="family-divider"></div>

            <div className="parents-info">
              <div className="parent-row">
                <span className="parent-label">Thân phụ:</span>
                <strong className="parent-name">Ông NGUYỄN QUỐC HÙNG</strong>
              </div>
              <div className="parent-row">
                <span className="parent-label">Thân mẫu:</span>
                <strong className="parent-name">Bà TRẦN THỊ HƯƠNG</strong>
              </div>
            </div>

            <p className="family-location">Địa chỉ: Q. Phú Nhuận, TP. Hồ Chí Minh</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
