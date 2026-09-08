'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, ExternalLink, Calendar, Heart } from 'lucide-react';
import './WeddingCeremony.css';

const weddingEvents = [
  {
    id: 1,
    index: '01',
    badge: 'TIỆC CƯỚI LẦN 1',
    emoji: '💍',
    solarDate: '14/10/2026',
    solarDay: 'Thứ Tư',
    lunarDate: '04 tháng 9 Âm Lịch',
    time: '17:30',
    note: 'Khai tiệc mừng cưới',
    location: 'Tư Gia Nhà Trai / Nhà Gái',
    address: 'Xã Châu Ninh, Huyện Khoái Châu, Tỉnh Hưng Yên',
    mapLink: 'https://maps.google.com/?q=X%C3%A3+Ch%C3%A2u+Ninh,+Huy%E1%BB%87n+Kho%C3%A1i+Ch%C3%A2u,+T%E1%BB%89nh+H%C6%B0ng+Y%C3%AAn'
  },
  {
    id: 2,
    index: '02',
    badge: 'TIỆC CƯỚI LẦN 2 · NGÀY 1',
    emoji: '💒',
    solarDate: '18/10/2026',
    solarDay: 'Chủ Nhật',
    lunarDate: '08 tháng 9 Âm Lịch',
    time: '17:30',
    note: 'Khai tiệc mừng cưới',
    location: 'Tư Gia Dâu Rể',
    address: 'Xã Châu Ninh, Huyện Khoái Châu, Tỉnh Hưng Yên',
    mapLink: 'https://maps.google.com/?q=X%C3%A3+Ch%C3%A2u+Ninh,+Huy%E1%BB%87n+Kho%C3%A1i+Ch%C3%A2u,+T%E1%BB%89nh+H%C6%B0ng+Y%C3%AAn'
  },
  {
    id: 3,
    index: '03',
    badge: 'TIỆC CƯỚI LẦN 2 · NGÀY 2',
    emoji: '💒',
    solarDate: '19/10/2026',
    solarDay: 'Thứ Hai',
    lunarDate: '09 tháng 9 Âm Lịch',
    time: '17:30',
    note: 'Khai tiệc mừng cưới',
    location: 'Tư Gia Dâu Rể',
    address: 'Xã Châu Ninh, Huyện Khoái Châu, Tỉnh Hưng Yên',
    mapLink: 'https://maps.google.com/?q=X%C3%A3+Ch%C3%A2u+Ninh,+Huy%E1%BB%87n+Kho%C3%A1i+Ch%C3%A2u,+T%E1%BB%89nh+H%C6%B0ng+Y%C3%AAn'
  }
];

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
          <span className="section-badge font-sans">THE WEDDING EVENTS</span>
          <h2 className="title font-serif">Lịch Lễ Cưới Chính Thức</h2>
          <p className="subtitle">Trân trọng kính mời quý khách đến chung vui cùng dâu rể<br /><strong>Vũ Minh &amp; Lê Phương</strong></p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="ceremony-timeline">
          {/* Vertical center line */}
          <div className="ceremony-v-line" />

          {weddingEvents.map((evt, index) => (
            <motion.div
              key={evt.id}
              className="ceremony-row"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Left: Date block */}
              <div className="ceremony-date-col">
                <div className="ceremony-date-card">
                  <span className="ceremony-emoji">{evt.emoji}</span>
                  <p className="ceremony-solar-day font-serif">{evt.solarDay}</p>
                  <p className="ceremony-solar-date font-sans">{evt.solarDate}</p>
                  <span className="ceremony-lunar font-sans">{evt.lunarDate}</span>
                </div>
              </div>

              {/* Center node */}
              <div className="ceremony-node">
                <span className="node-index font-sans">{evt.index}</span>
              </div>

              {/* Right: Detail block */}
              <div className="ceremony-detail-col">
                <div className="ceremony-detail-card">
                  <div className="ceremony-badge font-sans">{evt.badge}</div>

                  <div className="ceremony-info-rows">
                    <div className="ceremony-info-row">
                      <Clock size={16} color="var(--color-primary)" />
                      <div>
                        <strong>{evt.time}</strong>
                        <span>{evt.note}</span>
                      </div>
                    </div>

                    <div className="ceremony-info-row">
                      <MapPin size={16} color="var(--color-primary)" />
                      <div>
                        <strong>{evt.location}</strong>
                        <span>{evt.address}</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={evt.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn ceremony-map-btn"
                  >
                    <MapPin size={15} />
                    <span>XEM BẢN ĐỒ</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          className="ceremony-footer-note text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Heart size={18} fill="var(--color-primary)" color="var(--color-primary)" />
          <p className="font-serif">Sự hiện diện của quý khách là niềm hạnh phúc lớn nhất của chúng mình</p>
        </motion.div>
      </div>
    </section>
  );
}
