'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Heart, MessageSquare } from 'lucide-react';
import './Guestbook.css';

const initialMessages = [
  { id: 1, name: 'Linh', message: 'Chúc hai bạn trăm năm hạnh phúc, mãi mãi bên nhau gắn kết!' },
  { id: 2, name: 'Hải Đăng', message: 'Mãi mãi yêu thương nhau như ngày đầu tiên nha.' },
  { id: 3, name: 'Quỳnh Trang', message: 'Chúc dâu rể sớm có hoàng tử công chúa kháu khỉnh!' }
];

export default function Guestbook() {
  const [messages, setMessages] = useState(initialMessages);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newMessage = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim()
    };

    setMessages([newMessage, ...messages]);
    setName('');
    setMessage('');
  };

  return (
    <section className="guestbook-section section-padding" id="guestbook">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header text-center"
        >
          <span className="section-badge font-sans">GUESTBOOK</span>
          <h2 className="title font-serif">Sổ Lưu Bút</h2>
          <p className="subtitle">Gửi lời chúc tốt đẹp nhất dành cho Minh &amp; Phương</p>
        </motion.div>

        <div className="guestbook-grid">
          {/* Form */}
          <motion.div 
            className="guestbook-form-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="guestbook-form" onSubmit={handleSubmit}>
              <h3 className="form-title font-serif">LEAVE A MESSAGE</h3>
              <p className="form-sub font-sans">Lời chúc của bạn sẽ xuất hiện ngay bên dưới</p>
              
              <div className="form-group">
                <label className="form-label">Tên của bạn</label>
                <input 
                  type="text" 
                  placeholder="Nhập tên của bạn..." 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Lời chúc dành cho MINH &amp; PHƯƠNG</label>
                <textarea 
                  placeholder="Viết lời chúc yêu thương tại đây..." 
                  rows="4" 
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn guestbook-submit-btn">
                <Send size={18} />
                GỬI LỜI CHÚC
              </button>
            </form>
          </motion.div>

          {/* Messages Feed */}
          <div className="messages-feed">
            <h4 className="feed-title font-serif">
              <MessageSquare size={18} color="var(--color-primary)" />
              <span>Lời chúc từ người thân &amp; bạn bè ({messages.length})</span>
            </h4>

            <div className="feed-list">
              <AnimatePresence>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    className="message-card"
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    layout
                  >
                    <div className="msg-author font-serif">
                      <Heart size={16} fill="var(--color-primary)" color="var(--color-primary)" />
                      <span>{msg.name}</span>
                    </div>
                    <p className="msg-content">"{msg.message}"</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
