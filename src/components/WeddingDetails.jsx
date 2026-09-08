'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Navigation } from 'lucide-react';
import './WeddingDetails.css';

const schedule = [
  { time: '16:30', title: 'Đón khách', icon: '📸' },
  { time: '17:30', title: 'Làm lễ', icon: '💍' },
  { time: '18:30', title: 'Tiệc cưới', icon: '🍽️' },
  { time: '20:30', title: 'After Party', icon: '🎉' }
];

export default function WeddingDetails() {
  return (
    <section className="details-section section-padding" id="wedding-details">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="title">Sự kiện Cưới</h2>
          <p className="subtitle">Rất hân hạnh được đón tiếp bạn</p>
        </motion.div>

        <div className="details-grid">
          {/* Main Event Info */}
          <motion.div 
            className="detail-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-header bg-primary">
              <h3 className="font-serif">Lễ Thành Hôn</h3>
            </div>
            <div className="card-body">
              <div className="info-row">
                <Calendar className="text-gold" size={24} />
                <div>
                  <h4>Thứ ba</h4>
                  <p>13 Tháng 10, 2026</p>
                </div>
              </div>
              <div className="info-row">
                <Clock className="text-gold" size={24} />
                <div>
                  <h4>17:30 PM</h4>
                  <p>Giờ đón khách</p>
                </div>
              </div>
              <div className="info-row">
                <MapPin className="text-gold" size={24} />
                <div>
                  <h4>Tư Gia Dâu Rể</h4>
                  <p>Xã Châu Ninh, Huyện Khoái Châu, Hưng Yên</p>
                </div>
              </div>
              
              <a href="#" className="btn mt-6 w-full">
                <Navigation size={18} />
                Chỉ đường (Google Maps)
              </a>
            </div>
          </motion.div>

          {/* Schedule */}
          <motion.div 
            className="schedule-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-serif text-center mb-6 text-primary" style={{ fontSize: '1.8rem' }}>Lịch trình</h3>
            <div className="schedule-list">
              {schedule.map((item, index) => (
                <div key={index} className="schedule-item">
                  <div className="time font-sans text-gold font-bold">{item.time}</div>
                  <div className="dot"></div>
                  <div className="event">
                    <span className="icon">{item.icon}</span>
                    <span className="event-title">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
