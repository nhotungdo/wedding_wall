'use client';

import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Heart, Sparkles } from 'lucide-react';
import './WeddingCalendar.css';

export default function WeddingCalendar() {
  // December 2026 calendar data
  // Dec 1, 2026 is Tuesday. So empty cell for Mon (1 day offset).
  const weekDays = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'];
  
  // Days array: empty strings for padding + numbers 1 to 31
  const daysGrid = [
    '', 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27,
    28, 29, 30, 31, '', '', ''
  ];

  return (
    <section className="wedding-calendar-section section-padding" id="wedding-calendar">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge font-sans">SAVE THE DATE</span>
          <h2 className="title font-serif">Lịch Ngày Trọng Đại</h2>
          <p className="subtitle">Tháng 12 Năm 2026 — Đánh dấu mốc thời gian vĩnh cửu</p>
        </motion.div>

        <motion.div 
          className="calendar-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="calendar-header">
            <div className="calendar-month font-serif">
              <CalendarIcon size={24} color="var(--color-primary)" />
              <span>THÁNG 12 / 2026</span>
            </div>
            <p className="calendar-lunar font-sans">Nhằm ngày 12 tháng 11 năm Bính Ngọ (Âm Lịch)</p>
          </div>

          <div className="calendar-grid-header">
            {weekDays.map((day, idx) => (
              <div key={idx} className={`day-name ${idx === 6 ? 'sunday' : ''}`}>
                {day}
              </div>
            ))}
          </div>

          <div className="calendar-grid-body">
            {daysGrid.map((day, idx) => {
              const isWeddingDay = day === 20;
              return (
                <div 
                  key={idx} 
                  className={`calendar-cell ${isWeddingDay ? 'wedding-day' : ''} ${!day ? 'empty' : ''}`}
                >
                  {isWeddingDay ? (
                    <motion.div 
                      className="wedding-day-box"
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Heart className="wedding-heart-bg" size={32} fill="var(--color-primary)" color="var(--color-primary)" />
                      <span className="day-number">20</span>
                    </motion.div>
                  ) : (
                    <span className="day-number">{day}</span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="calendar-footer text-center">
            <div className="highlight-tag">
              <Sparkles size={16} color="var(--color-gold)" />
              <span>CHỦ NHẬT, 20 THÁNG 12, 2026 — 17:30 KHAI TIỆC</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
