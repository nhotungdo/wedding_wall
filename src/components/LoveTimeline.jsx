'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import './LoveTimeline.css';

const timelineData = [
  {
    year: '2019',
    event: 'FIRST MET',
    title: 'Lần Đầu Gặp Mặt',
    description: 'Ánh nhìn ngập ngừng và nụ cười đầu tiên khởi đầu cho một tình yêu đẹp.'
  },
  {
    year: '2020',
    event: 'FIRST DATE',
    title: 'Buổi Hẹn Hò Đầu Tiên',
    description: 'Tách cà phê ấm áp và những câu chuyện kéo dài tưởng như không bao giờ kết thúc.'
  },
  {
    year: '2022',
    event: 'OUR ADVENTURES',
    title: 'Những Chuyến Đi',
    description: 'Cùng nhau đặt chân đến những thành phố mới, lưu giữ ngàn khoảnh khắc đáng nhớ.'
  },
  {
    year: '2025',
    event: 'THE PROPOSAL',
    title: 'Lời Cầu Hôn',
    description: 'Dưới ánh hoàng hôn lãng mạn, câu nói "Will you marry me?" và nụ cười hạnh phúc.'
  },
  {
    year: '2026',
    event: 'THE WEDDING',
    title: 'Ngày Trọng Đại',
    description: 'Minh & Phương chính thức gọi nhau là Chồng và Vợ trước sự chứng kiến của người thân.'
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

        <div className="timeline-vertical">
          <div className="timeline-v-line"></div>
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                className={`timeline-v-item ${isEven ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <div className="timeline-v-node">
                  <span className="year-text font-sans">{item.year}</span>
                </div>

                <div className="timeline-v-card">
                  <span className="event-tag font-sans">{item.event}</span>
                  <h4 className="timeline-v-title font-serif">{item.title}</h4>
                  <p className="timeline-v-desc">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
