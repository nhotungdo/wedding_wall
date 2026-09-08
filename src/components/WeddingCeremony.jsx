'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import './WeddingCeremony.css';

export default function WeddingCeremony() {
  return (
    <section className="ceremony-section section-padding" id="ceremony">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge font-sans">THE WEDDING DAY</span>
          <h2 className="title font-serif">Lễ Cưới Chính Thức</h2>
          <p className="subtitle">Trân trọng kính mời quý khách đến chung vui cùng gia đình chúng tôi</p>
        </motion.div>

        <motion.div 
          className="ceremony-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="ceremony-header">
            <h3 className="ceremony-names font-serif">MINH &amp; PHƯƠNG</h3>
            <p className="ceremony-tagline font-serif font-italic">"Together is a wonderful place to be"</p>
          </div>

          <div className="ceremony-grid">
            <div className="ceremony-item">
              <div className="ceremony-icon">
                <Calendar size={24} color="var(--color-primary)" />
              </div>
              <h4 className="item-title font-sans">NGÀY TỔ CHỨC</h4>
              <p className="item-value font-serif">20 · 12 · 2026</p>
              <p className="item-sub">Chủ Nhật (Nhằm ngày 12/11 Âm Lịch)</p>
            </div>

            <div className="ceremony-item">
              <div className="ceremony-icon">
                <Clock size={24} color="var(--color-primary)" />
              </div>
              <h4 className="item-title font-sans">THỜI GIAN</h4>
              <p className="item-value font-serif">17 : 30</p>
              <p className="item-sub">Đón khách &amp; Khai tiệc</p>
            </div>

            <div className="ceremony-item">
              <div className="ceremony-icon">
                <MapPin size={24} color="var(--color-primary)" />
              </div>
              <h4 className="item-title font-sans">ĐỊA ĐIỂM</h4>
              <p className="item-value font-serif">White Palace Convention</p>
              <p className="item-sub">194 Hoàng Văn Thụ, Phường 9, Phú Nhuận, TP.HCM</p>
            </div>
          </div>

          <div className="ceremony-action text-center">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn ceremony-map-btn"
            >
              <MapPin size={18} />
              <span>XEM BẢN ĐỒ</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
