'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, CreditCard, X } from 'lucide-react';
import './WeddingGift.css';

export default function WeddingGift() {
  const [showQR, setShowQR] = useState(false);

  return (
    <section className="gift-section section-padding" id="wedding-gift">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="gift-icon-wrapper mb-6 mx-auto">
            <Gift size={40} color="#C71B20" />
          </div>
          <h2 className="title">Hộp Mừng Cưới</h2>
          <p className="subtitle" style={{ maxWidth: '400px', margin: '0 auto 30px' }}>
            Sự hiện diện của bạn đã là món quà tuyệt vời nhất đối với chúng mình ❤️
          </p>
          
          <motion.button 
            className="btn btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowQR(true)}
          >
            <CreditCard size={20} />
            Mừng cưới Online
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {showQR && (
          <motion.div 
            className="qr-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQR(false)}
          >
            <motion.div 
              className="qr-modal"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn-qr" onClick={() => setShowQR(false)}>
                <X size={24} />
              </button>
              
              <h3 className="font-serif text-primary text-2xl mb-4">Mừng cưới cô dâu chú rể</h3>
              
              <div className="qr-container">
                {/* Placeholder for QR Code */}
                <div className="qr-placeholder">
                  QR CODE
                </div>
              </div>
              
              <div className="bank-info mt-6 text-left">
                <p><strong>Ngân hàng:</strong> Vietcombank</p>
                <p><strong>Số tài khoản:</strong> 1234567890</p>
                <p><strong>Chủ tài khoản:</strong> NGUYEN MINH NHAT</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
