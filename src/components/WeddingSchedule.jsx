'use client';

import { motion } from 'framer-motion';
import { Camera, Flower2, Heart, Wine, UtensilsCrossed, PartyPopper, Flame } from 'lucide-react';
import './WeddingSchedule.css';

const scheduleList = [
  { time: '15:30', title: 'Đón Khách', desc: 'Chụp ảnh lưu niệm cùng Dâu Rể tại sảnh', icon: Camera },
  { time: '16:30', title: 'Ổn Định Chỗ Ngồi', desc: 'Mời quý khách di chuyển vào sảnh tiệc chính', icon: Flower2 },
  { time: '17:00', title: 'Lễ Cưới Chính Thức', desc: 'Nghi thức trao nhẫn & phát biểu của dâu rể', icon: Heart },
  { time: '18:00', title: 'Rót Rượu Champagne', desc: 'Khai tiệc & cắt bánh cưới', icon: Wine },
  { time: '18:30', title: 'Wedding Reception', desc: 'Thưởng thức thực đơn tiệc cưới đặc sắc', icon: UtensilsCrossed },
  { time: '20:00', title: 'Celebration & Game', desc: 'Trò chơi tương tác & rút thăm may mắn', icon: PartyPopper },
  { time: '21:30', title: 'After Party', desc: 'Âm nhạc & khiêu vũ tự do cùng bạn bè', icon: Flame }
];

export default function WeddingSchedule() {
  return (
    <section className="schedule-section section-padding" id="schedule">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge font-sans">WEDDING SCHEDULE</span>
          <h2 className="title font-serif">Kịch Bản Ngày Cưới</h2>
          <p className="subtitle">Lịch trình các hoạt động trong ngày vui của Minh &amp; Phương</p>
        </motion.div>

        <div className="schedule-timeline">
          {scheduleList.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div 
                key={index}
                className="schedule-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="schedule-time-box">
                  <span className="schedule-time font-sans">{item.time}</span>
                </div>

                <div className="schedule-icon-box">
                  <IconComp size={20} color="white" />
                </div>

                <div className="schedule-info-box">
                  <h4 className="schedule-item-title font-serif">{item.title}</h4>
                  <p className="schedule-item-desc">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
