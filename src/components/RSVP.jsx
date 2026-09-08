'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import './RSVP.css';

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    attending: 'yes',
    count: 1,
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission (No DB needed per user request)
    setIsSubmitted(true);
  };

  return (
    <section className="rsvp-section section-padding bg-surface" id="rsvp">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="title">Xác nhận tham dự</h2>
          <p className="subtitle">Sự hiện diện của bạn là niềm vinh hạnh cho gia đình chúng tôi</p>
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
                  <label>Tên của bạn</label>
                  <input 
                    type="text" 
                    placeholder="Nhập tên của bạn..." 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div className="form-group">
                  <label>Bạn có thể tham dự không?</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        name="attending" 
                        value="yes"
                        checked={formData.attending === 'yes'}
                        onChange={(e) => setFormData({...formData, attending: e.target.value})}
                      />
                      <span>Có, mình sẽ đến ❤️</span>
                    </label>
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        name="attending" 
                        value="no"
                        checked={formData.attending === 'no'}
                        onChange={(e) => setFormData({...formData, attending: e.target.value})}
                      />
                      <span>Rất tiếc, mình bận mất rồi</span>
                    </label>
                  </div>
                </div>

                <AnimatePresence>
                  {formData.attending === 'yes' && (
                    <motion.div 
                      className="form-group"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <label>Số người tham dự</label>
                      <div className="count-control">
                        <button type="button" onClick={() => setFormData(f => ({...f, count: Math.max(1, f.count - 1)}))}>-</button>
                        <span>{formData.count}</span>
                        <button type="button" onClick={() => setFormData(f => ({...f, count: Math.min(10, f.count + 1)}))}>+</button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="form-group">
                  <label>Lời nhắn cho cô dâu chú rể</label>
                  <textarea 
                    placeholder="Gửi lời chúc tốt đẹp nhất..." 
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn w-full mt-4">
                  <Send size={18} />
                  Xác nhận
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
                <CheckCircle2 size={60} color="#C71B20" />
                <h3 className="font-serif text-primary mt-4">Cảm ơn bạn!</h3>
                <p className="mt-2 text-muted">
                  {formData.attending === 'yes' 
                    ? `Hẹn gặp lại ${formData.name} vào ngày vui của chúng mình nhé ❤️`
                    : `Cảm ơn ${formData.name} đã gửi lời chúc mừng đến chúng mình ❤️`}
                </p>
                <button 
                  className="btn btn-outline mt-6"
                  onClick={() => setIsSubmitted(false)}
                >
                  Gửi phản hồi khác
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
