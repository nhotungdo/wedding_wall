'use client';

import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Heart } from 'lucide-react';
import './WeddingCalendar.css';

export default function WeddingCalendar() {
  const weekDays = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'];
  
  // Days array for October 2026 (31 days)
  const daysGrid = [
    '', '', '', 1, 2, 3, 4,
    5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31, ''
  ];

  // 3 Wedding Dates
  const weddingDates = [14, 18, 19];

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
          <h2 className="title font-serif">Lịch Các Ngày Trọng Đại</h2>
          <p className="subtitle">Tháng 10 Năm 2026 — Các mốc ngày vui của Vũ Văn Minh &amp; Lê Thị Phương</p>
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
              <span>THÁNG 10 / 2026</span>
            </div>
            <p className="calendar-lunar font-sans">Tổ chức tiệc cưới vào 3 ngày đại hung Hỷ trong tháng 9 Âm Lịch</p>
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
              const isWeddingDay = weddingDates.includes(day);
              return (
                <div 
                  key={idx} 
                  className={`calendar-cell ${isWeddingDay ? 'wedding-day' : ''} ${!day ? 'empty' : ''}`}
                >
                  {isWeddingDay ? (
                    <motion.div 
                      className="wedding-day-box"
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Heart className="wedding-heart-bg" size={32} fill="var(--color-primary)" color="var(--color-primary)" />
                      <span className="day-number">{day}</span>
                    </motion.div>
                  ) : (
                    <span className="day-number">{day}</span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="calendar-events-legend font-sans">
            <div className="legend-item">
              <span className="legend-dot">14</span>
              <div>
                <strong>Lần 1: Thứ Tư, 14/10/2026</strong>
                <span>(04/09 Âm Lịch)</span>
              </div>
            </div>
            <div className="legend-item">
              <span className="legend-dot">18</span>
              <div>
                <strong>Lần 2 (Ngày 1): Chủ Nhật, 18/10/2026</strong>
                <span>(08/09 Âm Lịch)</span>
              </div>
            </div>
            <div className="legend-item">
              <span className="legend-dot">19</span>
              <div>
                <strong>Lần 2 (Ngày 2): Thứ Hai, 19/10/2026</strong>
                <span>(09/09 Âm Lịch)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
