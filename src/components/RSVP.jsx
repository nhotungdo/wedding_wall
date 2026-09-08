'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Heart, Calendar } from 'lucide-react';
import './RSVP.css';

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    attending: 'yes',
    selectedEvent: 'Tất cả các ngày',
    count: 2,
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="rsvp-section section-padding" id="rsvp">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header text-center"
        >
          <span className="section-badge font-sans">ARE YOU JOINING US?</span>
          <h2 className="title font-serif">Xác Nhận Tham Dự</h2>
          <p className="subtitle">Chúng mình rất mong được gặp bạn trong ngày đặc biệt này</p>
        </motion.div>

        <div className="rsvp-container">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                className="rsvp-form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <label className="form-label">Họ và tên</label>
                  <input 
                    type="text" 
                    placeholder="Nhập họ và tên của bạn..." 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Bạn sẽ tham dự chứ?</label>
                  <div className="radio-group">
                    <label className={`radio-label ${formData.attending === 'yes' ? 'selected' : ''}`}>
                      <input 
                        type="radio" 
                        name="attending" 
                        value="yes"
                        checked={formData.attending === 'yes'}
                        onChange={(e) => setFormData({...formData, attending: e.target.value})}
                      />
                      <span>Có, chắc chắn rồi ❤️</span>
                    </label>
                    <label className={`radio-label ${formData.attending === 'no' ? 'selected' : ''}`}>
                      <input 
                        type="radio" 
                        name="attending" 
                        value="no"
                        checked={formData.attending === 'no'}
                        onChange={(e) => setFormData({...formData, attending: e.target.value})}
                      />
                      <span>Rất tiếc, mình không thể</span>
                    </label>
                  </div>
                </div>

                <AnimatePresence>
                  {formData.attending === 'yes' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <div className="form-group">
                        <label className="form-label">Chọn buổi tiệc tham dự</label>
                        <select 
                          className="form-select"
                          value={formData.selectedEvent}
                          onChange={(e) => setFormData({...formData, selectedEvent: e.target.value})}
                        >
                          <option value="Tham dự tất cả các ngày">❤️ Tham dự tất cả các ngày (14, 18, 19/10)</option>
                          <option value="Lần 1: 14/10/2026 (Thứ 4)">💍 Tổ chức lần 1 (Thứ Tư, 14/10/2026)</option>
                          <option value="Lần 2 - Ngày 1: 18/10/2026 (Chủ Nhật)">💒 Tổ chức lần 2 – Ngày 1 (Chủ Nhật, 18/10/2026)</option>
                          <option value="Lần 2 - Ngày 2: 19/10/2026 (Thứ 2)">💒 Tổ chức lần 2 – Ngày 2 (Thứ Hai, 19/10/2026)</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Số người tham dự</label>
                        <div className="count-control">
                          <button type="button" onClick={() => setFormData(f => ({...f, count: Math.max(1, f.count - 1)}))}>-</button>
                          <span>{formData.count} người</span>
                          <button type="button" onClick={() => setFormData(f => ({...f, count: Math.min(10, f.count + 1)}))}>+</button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="form-group">
                  <label className="form-label">Lời nhắn</label>
                  <textarea 
                    placeholder="Gửi lời nhắn cho dâu rể..." 
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn rsvp-submit-btn">
                  <Send size={18} />
                  XÁC NHẬN THAM DỰ
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                className="rsvp-success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
              >
                <Heart size={64} fill="var(--color-primary)" color="var(--color-primary)" />
                <h3 className="font-serif success-title mt-4">THANK YOU ❤️</h3>
                <p className="success-desc mt-2">
                  Hẹn gặp <strong>{formData.name}</strong> tại <strong>{formData.selectedEvent}</strong> của Minh &amp; Phương!
                </p>
                <button 
                  className="btn btn-outline mt-6"
                  onClick={() => setIsSubmitted(false)}
                >
                  Xác nhận lại
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
