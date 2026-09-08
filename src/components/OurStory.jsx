'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import './OurStory.css';

const storyEvents = [
  {
    year: '2019',
    title: 'Lần đầu gặp nhau',
    location: 'Đại học FPT',
    description: '"Lần đầu tiên chúng mình gặp nhau, ánh mắt ấy đã làm trái tim lỡ nhịp..."',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop'
  },
  {
    year: '2020',
    title: 'Bắt đầu hẹn hò',
    location: 'Hà Nội',
    description: 'Những buổi hẹn hò đầu tiên, những cái nắm tay ngượng ngùng và lời yêu chưa dám ngỏ.',
    image: 'https://images.unsplash.com/photo-1534080182604-bd9aeb2405ed?q=80&w=800&auto=format&fit=crop'
  },
  {
    year: '2023',
    title: 'Những chuyến đi',
    location: 'Khắp mọi nơi',
    description: 'Cùng nhau rong ruổi qua những nẻo đường, mỗi chuyến đi là một kỷ niệm khó quên.',
    image: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=800&auto=format&fit=crop'
  },
  {
    year: '2026',
    title: 'We said YES 💍',
    location: 'Đà Lạt',
    description: 'Một lời cầu hôn bất ngờ, một lời đồng ý chân thành. Chuyến hành trình mới bắt đầu.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop'
  }
];

export default function OurStory() {
  return (
    <section className="story-section section-padding bg-surface" id="our-story">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="title">Câu chuyện tình yêu</h2>
          <p className="subtitle">Từ những ngày đầu tiên đến mãi mãi về sau</p>
        </motion.div>

        <div className="timeline">
          {storyEvents.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className={`timeline-row ${isLeft ? 'row-left' : 'row-right'}`}>
                
                {/* Image Side */}
                <motion.div 
                  className="timeline-image-container"
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="image-frame">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={event.image} alt={event.title} loading="lazy" />
                  </div>
                </motion.div>

                {/* Center Divider / Dot */}
                <div className="timeline-divider">
                  <div className="timeline-dot-wrapper">
                    <div className="timeline-dot-outer">
                      <Heart size={16} fill="#C71B20" color="#C71B20" />
                    </div>
                  </div>
                  <div className="timeline-line"></div>
                </div>

                {/* Content Side */}
                <motion.div 
                  className="timeline-content-container"
                  initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="timeline-content">
                    <h3 className="event-year font-serif">{event.year}</h3>
                    <h4 className="event-title font-sans">{event.title}</h4>
                    <p className="event-location font-sans text-gold text-sm mb-3">📍 {event.location}</p>
                    <p className="event-desc italic text-muted leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
