import React, { useRef, useState, useEffect } from 'react';

/**
 * ResponsiveDrivePlayer
 * 
 * Ensures that on mobile viewports (e.g. phones < 700px), Google Drive's iframe
 * renders in its desktop layout with full native controls (play/pause, scrubber bar,
 * 10s forward/rewind, time indicator, speed, settings, fullscreen) by rendering at a
 * desktop base width (e.g. 780px) and scaling down with CSS transform to match the
 * exact phone aspect ratio seamlessly.
 */
export default function ResponsiveDrivePlayer({ src, title, className = '' }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [containerHeight, setContainerHeight] = useState(0);

  // Logical desktop width to force Google Drive to render the full desktop player UI
  const BASE_DESKTOP_WIDTH = 780;
  const BASE_DESKTOP_HEIGHT = 438.75; // 16:9 aspect ratio (780 * 9 / 16)

  useEffect(() => {
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
  }, []);

  const isScaled = scale < 1;

  return (
    <div
      ref={containerRef}
      className={`responsive-drive-wrapper ${className}`}
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
