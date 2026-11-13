import React, { useRef, useState, useEffect } from 'react';

/**
 * UniversalVideoPlayer
 * 
 * Supports both YouTube (standard videos, Shorts, embeds) and Google Drive video previews.
 * - For YouTube: uses the official privacy-enhanced YouTube embed (`youtube-nocookie.com/embed/...`)
 *   with full responsive aspect ratio handling (16:9 for normal landscape, 9:16 portrait for vertical Shorts)
 *   and optimal mobile + desktop touch controls.
 * - For Google Drive: dynamically scales desktop base resolution if needed to prevent mobile control clipping.
 */
export default function UniversalVideoPlayer({ 
  src, 
  title = "Video Player", 
  aspectRatio = null, 
  className = '' 
}) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [containerHeight, setContainerHeight] = useState(0);

  if (!src) return null;

  // Determine if it's a YouTube video
  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');
  const isDrive = src.includes('drive.google.com');

  // Parse YouTube embed URL if raw watch/shorts URL was passed
  let embedUrl = src;
  let isShort = false;

  if (isYouTube) {
    if (src.includes('/shorts/')) {
      const match = src.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
      const videoId = match ? match[1] : '';
      embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
      isShort = true;
    } else if (src.includes('watch?v=')) {
      const match = src.match(/[?&]v=([a-zA-Z0-9_-]+)/);
      const videoId = match ? match[1] : '';
      embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
    } else if (src.includes('youtu.be/')) {
      const match = src.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
      const videoId = match ? match[1] : '';
      embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
    } else if (!src.includes('/embed/')) {
      embedUrl = src;
    }
  }

  // Override aspect ratio if specified
  const effectiveRatio = aspectRatio || (isShort ? '9:16' : '16:9');
  const isPortrait = effectiveRatio === '9:16';

  // Desktop scaling for Google Drive on narrow viewports
  const BASE_DESKTOP_WIDTH = 780;
  const BASE_DESKTOP_HEIGHT = 438.75;

  useEffect(() => {
    if (!isDrive) return;

    const updateDimensions = () => {
      if (!containerRef.current) return;
      const clientWidth = containerRef.current.clientWidth;
      if (clientWidth <= 0) return;

      if (clientWidth < BASE_DESKTOP_WIDTH) {
        const computedScale = clientWidth / BASE_DESKTOP_WIDTH;
        setScale(computedScale);
        setContainerHeight(clientWidth * (9 / 16));
      } else {
        setScale(1);
        setContainerHeight(0);
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener('resize', updateDimensions);
    window.addEventListener('orientationchange', updateDimensions);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('orientationchange', updateDimensions);
    };
  }, [isDrive]);

  // YouTube rendering
  if (isYouTube) {
    if (isPortrait) {
      return (
        <div 
          className={`universal-video-wrapper youtube-shorts-wrapper ${className}`}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '380px',
            margin: '0 auto',
            aspectRatio: '9 / 16',
            background: '#000000',
            borderRadius: '14px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.45)'
          }}
        >
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
          />
        </div>
      );
    }

    // Standard 16:9 YouTube video
    return (
      <div 
        className={`universal-video-wrapper youtube-standard-wrapper ${className}`}
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '56.25%', // 16:9
          background: '#000000',
          borderRadius: 'inherit',
          overflow: 'hidden'
        }}
      >
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
        />
      </div>
    );
  }

  // Google Drive rendering
  const isScaled = isDrive && scale < 1;

  return (
    <div 
      ref={containerRef}
      className={`universal-video-wrapper responsive-drive-wrapper ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: isScaled ? `${containerHeight}px` : undefined,
        paddingTop: isScaled ? 0 : '56.25%',
        overflow: 'hidden',
        background: '#000000',
        borderRadius: 'inherit'
      }}
    >
      <iframe
        src={src}
        title={title}
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        loading="eager"
        style={
          isScaled
            ? {
                position: 'absolute',
                top: 0,
                left: 0,
                width: `${BASE_DESKTOP_WIDTH}px`,
                height: `${BASE_DESKTOP_HEIGHT}px`,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
                border: 'none',
                pointerEvents: 'auto',
                touchAction: 'manipulation'
              }
            : {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                pointerEvents: 'auto'
              }
        }
      />
    </div>
  );
}

