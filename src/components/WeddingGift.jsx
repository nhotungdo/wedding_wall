'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, CreditCard, X, QrCode, ZoomIn } from 'lucide-react';
import './WeddingGift.css';

const giftAccounts = [
  {
    id: 'groom',
    type: 'NHÀ TRAI (MINH)',
    bank: 'Vietcombank',
    accountNumber: '9999 8888 6666',
    accountName: 'VU VAN MINH',
    qrImage: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=VCB-999988886666-VU+VAN+MINH'
  },
  {
    id: 'bride',
    type: 'NHÀ GÁI (PHƯƠNG)',
    bank: 'Techcombank',
    accountNumber: '8888 7777 5555',
    accountName: 'LE THI PHUONG',
    qrImage: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=TCB-888877775555-LE+THI+PHUONG'
  }
];

export default function WeddingGift() {
  const [selectedQR, setSelectedQR] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="gift-section section-padding" id="wedding-gift">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-badge font-sans">WEDDING GIFT</span>
          <h2 className="title font-serif">Mừng Cưới Online</h2>
          <p className="subtitle gift-tagline font-serif">
            "YOUR PRESENCE IS OUR GREATEST GIFT"
          </p>
          <p className="gift-sub">Sự hiện diện của bạn đã là món quà tuyệt vời nhất dành cho Minh &amp; Phương ❤️</p>
        </motion.div>

        <div className="gift-cards-grid">
          {giftAccounts.map((acc) => (
            <motion.div 
              key={acc.id}
              className="gift-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="gift-card-badge font-sans">{acc.type}</span>
              
              <div 
                className="qr-img-wrapper"
                onClick={() => setSelectedQR(acc)}
              >
                <img src={acc.qrImage} alt={acc.type} />
                <div className="qr-hover-overlay">
                  <ZoomIn size={24} color="#FFF" />
                  <span>Phóng to QR</span>
                </div>
              </div>

              <div className="account-info">
                <h4 className="bank-name font-serif">{acc.bank}</h4>
                <p className="account-num font-sans">{acc.accountNumber}</p>
                <p className="account-name font-sans">{acc.accountName}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for QR Zoom rendered into document.body */}
      {isMounted && createPortal(
        <AnimatePresence>
          {selectedQR && (
            <motion.div 
              className="qr-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedQR(null)}
            >
              <motion.div 
                className="qr-modal-content"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="qr-modal-close" onClick={() => setSelectedQR(null)}>
                  <X size={24} />
                </button>

                <h3 className="font-serif qr-modal-title">{selectedQR.type}</h3>
                <div className="large-qr-img">
                  <img src={selectedQR.qrImage} alt={selectedQR.type} />
                </div>
                <div className="qr-modal-details font-sans">
                  <p><strong>Ngân hàng:</strong> {selectedQR.bank}</p>
                  <p><strong>Số tài khoản:</strong> {selectedQR.accountNumber}</p>
                  <p><strong>Chủ tài khoản:</strong> {selectedQR.accountName}</p>
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
