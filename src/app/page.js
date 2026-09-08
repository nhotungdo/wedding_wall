'use client';

import { useState } from 'react';
import DigitalEnvelope from '@/components/DigitalEnvelope';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import LoveTimeline from '@/components/LoveTimeline';
import GroomBride from '@/components/GroomBride';
import PhotoGallery from '@/components/PhotoGallery';
import WeddingVideo from '@/components/WeddingVideo';
import LoveProposal from '@/components/LoveProposal';
import WeddingCeremony from '@/components/WeddingCeremony';
import WeddingCalendar from '@/components/WeddingCalendar';
import WeddingSchedule from '@/components/WeddingSchedule';
import VenueMap from '@/components/VenueMap';
import OurFamilies from '@/components/OurFamilies';
import Guestbook from '@/components/Guestbook';
import WeddingGift from '@/components/WeddingGift';
import PhotoWall from '@/components/PhotoWall';
import CountdownSection from '@/components/CountdownSection';
import FinalMessage from '@/components/FinalMessage';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isStoryEntered, setIsStoryEntered] = useState(false);

  return (
    <main>
      {/* Floating Music Player */}
      <MusicPlayer startPlaying={isEnvelopeOpen} />
      
      {/* 1. Opening / Mở Thiệp */}
      {!isEnvelopeOpen && (
        <DigitalEnvelope onOpen={() => setIsEnvelopeOpen(true)} />
      )}
      
      <div style={{ 
        height: (!isEnvelopeOpen || !isStoryEntered) ? '100vh' : 'auto', 
        overflow: (!isEnvelopeOpen || !isStoryEntered) ? 'hidden' : 'visible' 
      }}>
        {/* 2. Hero — Khoảnh Khắc Đầu Tiên */}
        {isEnvelopeOpen && (
          <Hero onEnter={() => setIsStoryEntered(true)} />
        )}
        
        {/* Full Flow of 19 Sections */}
        {isStoryEntered && (
          <div className="content-fade-in" style={{ animation: 'fadeInOnly 0.8s ease-out forwards' }}>
            {/* 3. Our Story */}
            <OurStory />

            {/* 4. Love Timeline */}
            <LoveTimeline />

            {/* 5. Groom & Bride */}
            <GroomBride />

            {/* 6. Our Memories */}
            <PhotoGallery />

            {/* 7. Wedding Video */}
            <WeddingVideo />

            {/* 8. The Proposal */}
            <LoveProposal />

            {/* 9. Wedding Ceremony */}
            <WeddingCeremony />

            {/* 9b. Interactive Wedding Calendar (Lịch Ngày Cưới) */}
            <WeddingCalendar />

            {/* 10. Wedding Schedule */}
            <WeddingSchedule />

            {/* 11. Venue / Địa điểm */}
            <VenueMap />

            {/* 12. Our Families */}
            <OurFamilies />

            {/* 14. Guestbook */}
            <Guestbook />

            {/* 15. Wedding Gift */}
            <WeddingGift />

            {/* 16. Wedding Wall */}
            <PhotoWall />

            {/* 17. Countdown */}
            <CountdownSection />

            {/* 18. Final Message */}
            <FinalMessage />

            {/* 19. Footer */}
            <Footer />
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeInOnly {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}
