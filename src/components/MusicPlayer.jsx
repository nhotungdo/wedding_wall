'use client';

import { useState, useEffect, useRef } from 'react';
import { Music2, Pause, Volume2 } from 'lucide-react';
import './MusicPlayer.css';

// Bài nhạc từ link: https://www.youtube.com/watch?v=XqgyD0yadH0
const YT_VIDEO_ID = 'XqgyD0yadH0';

export default function MusicPlayer({ startPlaying }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef(null);
  const containerRef = useRef(null);

  // Load YouTube IFrame API once
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      initPlayer();
      return;
    }

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      initPlayer();
    };

    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  const initPlayer = () => {
    if (playerRef.current) return; // already created
    playerRef.current = new window.YT.Player(containerRef.current, {
      videoId: YT_VIDEO_ID,
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        loop: 1,
        playlist: YT_VIDEO_ID,
      },
      events: {
        onReady: () => setIsReady(true),
        onStateChange: (event) => {
          // YT.PlayerState.PLAYING = 1
          setIsPlaying(event.data === 1);
        },
      },
    });
  };

  // Auto-play when envelope opens
  useEffect(() => {
    if (startPlaying && isReady && playerRef.current) {
      try {
        playerRef.current.playVideo();
      } catch (e) {
        console.log('Autoplay prevented:', e);
      }
    }
  }, [startPlaying, isReady]);

  const toggle = () => {
    if (!isReady || !playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  return (
    <div className="music-player-fixed">
      {/* Hidden YouTube player div */}
      <div
        ref={containerRef}
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          opacity: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      />

      {/* Floating toggle button */}
      <button
        className={`music-btn ${isPlaying ? 'playing' : ''}`}
        onClick={toggle}
        aria-label={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
        title={isPlaying ? 'Lễ Đường — Kai Đinh ▶ đang phát' : 'Bật nhạc: Lễ Đường — Kai Đinh'}
      >
        <div className={`music-icon-wrapper ${isPlaying ? 'spinning' : ''}`}>
          {isPlaying ? (
            <Pause size={15} color="#FFF" />
          ) : (
            <Music2 size={15} color="#FFF" />
          )}
        </div>
      </button>
    </div>
  );
}
