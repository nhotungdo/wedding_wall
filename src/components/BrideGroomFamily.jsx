'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import './BrideGroomFamily.css';

export default function BrideGroomFamily() {
  return (
    <section className="family-section section-padding bg-surface" id="family">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="title">Gia đình hai bên</h2>
          <p className="subtitle">Cùng với sự chúc phúc của hai gia đình</p>
        </motion.div>

        <div className="couple-info">
          <motion.div 
            className="person groom"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="avatar">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" alt="Chú rể" />
            </div>
            <h3 className="name font-serif text-primary">Minh Nhật</h3>
            <p className="role font-sans text-gold">CHÚ RỂ</p>
            <div className="family-details text-muted mt-4 text-sm">
              <p>Trưởng nam</p>
              <p>Ông: Nguyễn Văn A</p>
              <p>Bà: Trần Thị B</p>
            </div>
          </motion.div>

          <motion.div 
            className="heart-divider"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
          >
            <Heart size={40} fill="#C71B20" color="#C71B20" />
          </motion.div>

          <motion.div 
            className="person bride"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="avatar">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" alt="Cô dâu" />
            </div>
            <h3 className="name font-serif text-primary">Ngọc Anh</h3>
            <p className="role font-sans text-gold">CÔ DÂU</p>
            <div className="family-details text-muted mt-4 text-sm">
              <p>Út nữ</p>
              <p>Ông: Lê Văn C</p>
              <p>Bà: Phạm Thị D</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
