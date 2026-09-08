'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Car, X, Maximize2 } from 'lucide-react';
import './VenueMap.css';

export default function VenueMap() {
  const [showPopup, setShowPopup] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const venueImg = 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop';
  const googleMapUrl = 'https://maps.google.com/?q=X%C3%A3+Ch%C3%A2u+Ninh,+Huy%E1%BB%87n+Kho%C3%A1i+Ch%C3%A2u,+T%E1%BB%89nh+H%C6%B0ng+Y%C3%AAn';

  return (
    <section className="venue-section section-padding" id="venue">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge font-sans">VENUE &amp; MAP</span>
          <h2 className="title font-serif">Địa Điểm Tổ Chức</h2>
          <p className="subtitle">Thông tin địa điểm tiệc cưới &amp; hướng dẫn di chuyển</p>
        </motion.div>

        <div className="venue-grid">
          <motion.div 
            className="venue-info-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div 
              className="venue-img-wrapper clickable-img"
              onClick={() => setShowPopup(true)}
            >
              <img src={venueImg} alt="Địa điểm tổ chức Châu Ninh, Khoái Châu, Hưng Yên" />
              <span className="venue-tag">SẢNH TIỆC CHÍNH</span>
              <div className="venue-hover-overlay">
                <Maximize2 size={24} color="#FFF" />
                <span>Xem ảnh không gian tiệc</span>
              </div>
            </div>

            <div className="venue-details">
              <h3 className="venue-title font-serif">TƯ GIA DÂU RỂ</h3>
              <p className="venue-address">
                <MapPin size={18} color="var(--color-primary)" />
                Xã Châu Ninh, Huyện Khoái Châu, Tỉnh Hưng Yên
              </p>

              <div className="venue-features">
                <div className="feature-box">
                  <Navigation className="feature-icon" size={20} />
                  <div>
                    <h5 className="font-sans">Hướng Dẫn Di Chuyển</h5>
                    <p>Địa điểm nằm tại Xã Châu Ninh, Huyện Khoái Châu. Thuận tiện di chuyển theo tuyến đường Hưng Yên / Hà Nội.</p>
                  </div>
                </div>

                <div className="feature-box">
                  <Car className="feature-icon" size={20} />
                  <div>
                    <h5 className="font-sans">Khu Vực Gửi Xe</h5>
                    <p>Bãi gửi xe ô tô &amp; xe máy rộng rãi gần khuôn viên tiệc cưới (Miễn phí cho quý khách dự tiệc).</p>
                  </div>
                </div>
              </div>

              <div className="venue-action">
                <a 
                  href={googleMapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn venue-direction-btn"
                >
                  <MapPin size={18} />
                  <span>📍 CHỈ ĐƯỜNG GOOGLE MAPS</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="venue-map-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe 
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59616.48512128795!2d105.9525!3d20.8415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a58742b6a229%3A0xb3bd3bd5fdb716f2!2zQ2jDonUgTmluaCwgS2hvw6FpIENow6J1LCBIxrBuZyBZw6pu!5e0!3m2!1sen!2svn!4v1700000000000!5m2!1sen!2svn" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '380px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Popup Modal rendered into document.body */}
      {isMounted && createPortal(
        <AnimatePresence>
          {showPopup && (
            <motion.div 
              className="img-popup-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
            >
              <button className="popup-close-btn" onClick={() => setShowPopup(false)}>
                <X size={28} />
              </button>

              <motion.div 
                className="popup-content-box"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img src={venueImg} alt="Địa điểm tổ chức Châu Ninh, Khoái Châu, Hưng Yên" />
                <div className="popup-caption">
                  <span className="popup-badge font-sans">VENUE</span>
                  <h4 className="font-serif">TƯ GIA DÂU RỂ</h4>
                  <p className="font-sans">Xã Châu Ninh, Huyện Khoái Châu, Tỉnh Hưng Yên</p>
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
