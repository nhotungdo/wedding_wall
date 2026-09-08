'use client';

import { motion } from 'framer-motion';
import { Phone, Heart } from 'lucide-react';
import './Footer.css';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="footer-brand mb-6">
            <h2 className="font-serif text-gold" style={{ fontSize: '2.5rem' }}>Minh & Phương</h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Heart size={16} fill="#C9A86A" color="#C9A86A" />
              <p className="font-sans text-gold-light tracking-widest text-sm">20 • 12 • 2026</p>
              <Heart size={16} fill="#C9A86A" color="#C9A86A" />
            </div>
          </div>

          <div className="footer-thank-you mb-10">
            <p className="font-serif italic" style={{ fontSize: '1.2rem', color: '#FFF' }}>
              "Chân thành cảm ơn bạn đã đến chung vui<br />và trở thành một phần trong câu chuyện của chúng mình."
            </p>
          </div>

          <div className="footer-info-grid">
            {/* Groom Contact */}
            <div className="contact-box">
              <h4 className="font-sans text-gold mb-2 text-sm uppercase tracking-wider">Liên hệ Chú rể</h4>
              <p className="flex items-center gap-2 justify-center mb-2">
                <Phone size={14} /> 0901 234 567
              </p>
              <div className="social-links">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <InstagramIcon />
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="vertical-divider"></div>

            {/* Bride Contact */}
            <div className="contact-box">
              <h4 className="font-sans text-gold mb-2 text-sm uppercase tracking-wider">Liên hệ Cô dâu</h4>
              <p className="flex items-center gap-2 justify-center mb-2">
                <Phone size={14} /> 0987 654 321
              </p>
              <div className="social-links">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <InstagramIcon />
                </a>
              </div>
            </div>

          </div>


        </motion.div>
      </div>
    </footer>
  );
}
