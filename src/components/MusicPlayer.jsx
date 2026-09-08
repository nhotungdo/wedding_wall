'use client';

import { useState, useRef, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';
import './MusicPlayer.css';

// Provide a default romantic instrumental track (public domain/royalty free placeholder)
const MUSIC_SRC = "https://actions.google.com/sounds/v1/water/rain_on_roof.ogg"; // Fallback safe sound
const REAL_MUSIC_SRC = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // Better placeholder

export default function MusicPlayer({ startPlaying }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Auto-play when startPlaying prop becomes true (e.g., when envelope opens)
  useEffect(() => {
    if (startPlaying && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log("Autoplay prevented by browser, waiting for user click.", e));
    }
  }, [startPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player-fixed">
      {/* Hidden audio element */}
      <audio 
        ref={audioRef} 
        src={REAL_MUSIC_SRC} 
        loop 
        preload="auto"
      />
      
      {/* Floating Button */}
      <button 
        className={`music-btn ${isPlaying ? 'playing' : ''}`} 
        onClick={togglePlay}
        aria-label="Toggle Music"
      >
        {isPlaying ? (
          <div className="music-icon-wrapper spinning">
            <Music size={18} color="#FFF" />
          </div>
        ) : (
          <div className="music-icon-wrapper">
            <Pause size={18} color="#FFF" />
          </div>
        )}
      </button>
    </div>
  );
}
