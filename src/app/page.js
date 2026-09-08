'use client';

import { useState } from 'react';
import DigitalEnvelope from '@/components/DigitalEnvelope';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import PhotoGallery from '@/components/PhotoGallery';
import BrideGroomFamily from '@/components/BrideGroomFamily';
import WeddingDetails from '@/components/WeddingDetails';
import RSVP from '@/components/RSVP';
import WeddingGift from '@/components/WeddingGift';
import Guestbook from '@/components/Guestbook';
import PhotoWall from '@/components/PhotoWall';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isStoryEntered, setIsStoryEntered] = useState(false);

  return (
    <main>
      <MusicPlayer startPlaying={isEnvelopeOpen} />
      
      {!isEnvelopeOpen && (
        <DigitalEnvelope onOpen={() => setIsEnvelopeOpen(true)} />
      )}
      
      {/* 
        The main container logic:
        1. When Envelope is open, Hero starts. Story is not entered yet. Overflow hidden.
        2. When Hero's "Enter Our Story" is clicked, isStoryEntered becomes true.
           Scroll unlocks, and the rest of the components are revealed.
      */}
      <div style={{ 
        height: (!isEnvelopeOpen || !isStoryEntered) ? '100vh' : 'auto', 
        overflow: (!isEnvelopeOpen || !isStoryEntered) ? 'hidden' : 'visible' 
      }}>
        {isEnvelopeOpen && (
          <Hero onEnter={() => setIsStoryEntered(true)} />
        )}
        
        {isStoryEntered && (
          <div className="content-fade-in" style={{ animation: 'fadeInUp 1s ease-out forwards' }}>
            <OurStory />
            <PhotoGallery />
            <BrideGroomFamily />
            <WeddingDetails />
            <RSVP />
            <WeddingGift />
            <Guestbook />
            <PhotoWall />
            <Footer />
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
