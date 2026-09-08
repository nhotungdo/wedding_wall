'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Quote } from 'lucide-react';
import './Guestbook.css';

const initialMessages = [
  { id: 1, name: 'Ngọc', message: 'Chúc hai bạn trăm năm hạnh phúc, sớm sinh quý tử nhé! ❤️' },
  { id: 2, name: 'Hải Đăng', message: 'Mãi mãi yêu thương nhau như ngày đầu tiên nha.' }
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
      name,
      message
    };

    // Add new message to the top of the list
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
          className="text-center mb-10"
        >
          <h2 className="title">Sổ Lưu Bút</h2>
          <p className="subtitle">Những lời chúc tốt đẹp nhất dành cho hai chúng mình</p>
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
              <h3 className="font-serif mb-4 text-primary" style={{ fontSize: '1.5rem' }}>Gửi lời chúc</h3>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Tên của bạn..." 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea 
                  placeholder="Lời chúc của bạn..." 
                  rows="4" 
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn w-full mt-2">
                <Send size={18} />
                Gửi lời chúc
              </button>
            </form>
          </motion.div>

          {/* Messages Feed */}
          <div className="messages-feed">
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  className="message-card"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  layout
                >
                  <Quote className="quote-icon" size={24} color="#C9A86A" />
                  <p className="msg-content">{msg.message}</p>
                  <div className="msg-author font-serif">❤️ {msg.name}</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
