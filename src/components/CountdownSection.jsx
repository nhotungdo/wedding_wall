'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import './CountdownSection.css';

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2026-10-13T17:30:00').getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown-section section-padding" id="countdown">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="countdown-card"
        >
          <span className="section-badge font-sans">COUNTING DOWN</span>
          <h2 className="title font-serif">Đếm Ngược Ngày Chung Đôi</h2>
          <p className="subtitle countdown-sub font-serif">
            Until Minh &amp; Phương say "I do".
          </p>

          <div className="timer-grid">
            <div className="time-box">
              <span className="time-number font-sans">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="time-label font-sans">DAYS</span>
            </div>
            <span className="timer-dots">:</span>
            <div className="time-box">
              <span className="time-number font-sans">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="time-label font-sans">HOURS</span>
            </div>
            <span className="timer-dots">:</span>
            <div className="time-box">
              <span className="time-number font-sans">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="time-label font-sans">MINUTES</span>
            </div>
            <span className="timer-dots">:</span>
            <div className="time-box">
              <span className="time-number font-sans">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="time-label font-sans">SECONDS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
