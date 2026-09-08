'use client';

import { motion } from 'framer-motion';
import { Calendar, Heart, Plane, Ring, Church, Sparkles } from 'lucide-react';
import './LoveTimeline.css';

const timelineData = [
  {
    year: '2019',
    event: 'First Met',
    title: '✨ Lần Đầu Gặp Mặt',
    description: 'Ánh nhìn ngập ngừng và nụ cười đầu tiên khởi đầu cho một tình yêu đẹp.',
    icon: Sparkles
  },
  {
    year: '2020',
    event: 'First Date',
    title: '❤️ Buổi Hẹn Hò Đầu Tiên',
    description: 'Tách cà phê ấm áp và những câu chuyện kéo dài tưởng như không bao giờ kết thúc.',
    icon: Heart
  },
  {
    year: '2022',
    event: 'Our Adventures',
    title: '✈️ Những Chuyến Đi',
    description: 'Cùng nhau đặt chân đến những thành phố mới, lưu giữ ngàn khoảnh khắc đáng nhớ.',
    icon: Plane
  },
  {
    year: '2025',
    event: 'The Proposal',
    title: '💍 Lời Cầu Hôn',
    description: 'Dưới ánh hoàng hôn lãng mạn, câu nói "Will you marry me?" và nụ cười hạnh phúc.',
    icon: Heart
  },
  {
    year: '2026',
    event: 'The Wedding',
    title: '💒 Ngày Trọng Đại',
    description: 'Minh & Phương chính thức gọi nhau là Chồng và Vợ trước sự chứng kiến của người thân.',
    icon: Church
  }
];

export default function LoveTimeline() {
  return (
    <section className="timeline-section section-padding" id="timeline">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge font-sans">LOVE TIMELINE</span>
          <h2 className="title font-serif">Cột Mốc Tình Yêu</h2>
          <p className="subtitle">Những thời điểm đáng nhớ trên hành trình của chúng mình</p>
        </motion.div>

        <div className="timeline-horizontal">
          <div className="timeline-line"></div>
          {timelineData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div 
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="timeline-year-badge">{item.year}</div>
                <div className="timeline-dot">
                  <IconComponent size={18} color="white" />
                </div>
                <div className="timeline-card">
                  <h4 className="timeline-title font-serif">{item.title}</h4>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
