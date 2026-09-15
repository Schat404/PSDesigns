import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  RotateCcw, 
  RotateCw, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  MapPin, 
  Calendar, 
  Layers, 
  ArrowUpRight
} from 'lucide-react';

function ProjectDetail({ project, onBack, onNavigate }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  if (!project) return null;

  const videoSource = project.video || "/compressed-sec22.mp4";

  // Handle Autoplay & Scroll Observer
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
            setIsPlaying(true);
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [project]);

  // Video time tracking
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 0;
    setCurrentTime(curr);
    setDuration(dur);
    if (dur > 0) {
      setProgress((curr / dur) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  // Play / Pause Toggle
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Rewind 10s
  const handleRewind = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
  };

  // Forward 10s
  const handleForward = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = Math.min(videoRef.current.duration || 0, videoRef.current.currentTime + 10);
  };

  // Mute / Unmute Toggle
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  // Seek / Scrubbar
  const handleSeek = (e) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = newProgress * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    setProgress(newProgress * 100);
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  const formatTime = (timeInSec) => {
    if (isNaN(timeInSec)) return '00:00';
    const minutes = Math.floor(timeInSec / 60);
    const seconds = Math.floor(timeInSec % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="project-detail-wrapper animate-fade-in">
      
      {/* Top Back Navigation Bar */}
      <div className="detail-top-nav-bar">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={16} /> BACK TO PAST PROJECTS
        </button>
      </div>

      {/* 1. TOP HERO IMAGE & HEADER SPECIFICATION */}
      <section className="detail-hero-showcase">
        <div className="detail-hero-frame">
          <img 
            src={project.image} 
            alt={project.name} 
            className="detail-hero-main-img" 
            loading="eager"
          />
          <div className="detail-hero-gradient-overlay"></div>
          
          <div className="detail-hero-floating-caption">
            <div className="detail-hero-badge">{project.category}</div>
            <h1 className="detail-hero-title">{project.name}</h1>
            <p className="detail-hero-tagline">{project.tagline}</p>
          </div>
          <div className="detail-watermark-stamp">PS DESIGNS</div>
        </div>

        {/* Project Key Specifications Strip */}
        <div className="detail-specs-strip">
          <div className="detail-spec-card">
            <span className="spec-icon-label"><Layers size={14} /> CATEGORY</span>
            <span className="spec-primary-text">{project.category}</span>
          </div>
          <div className="detail-spec-card">
            <span className="spec-icon-label"><MapPin size={14} /> LOCATION</span>
            <span className="spec-primary-text">{project.location}</span>
          </div>
          <div className="detail-spec-card">
            <span className="spec-icon-label"><Calendar size={14} /> COMPLETION</span>
            <span className="spec-primary-text">{project.year}</span>
          </div>
          <div className="detail-spec-card">
            <span className="spec-icon-label"><Compass size={14} /> AREA SIZE</span>
            <span className="spec-primary-text">{project.area}</span>
          </div>
        </div>
      </section>

      {/* 2. SECTION: WHAT THE CLIENT EXPECTED */}
      <section className="detail-narrative-section client-expected-section">
        <div className="narrative-badge-row">
          <span className="narrative-pill client-pill">
            <Sparkles size={14} /> CLIENT BRIEF & VISION
          </span>
        </div>
        <h2 className="narrative-heading">What The Client Expected</h2>
        
        <div className="narrative-content-card">
          <blockquote className="narrative-quote">
            "{project.clientExpectations?.headline}"
          </blockquote>
          <p className="narrative-body-text">
            {project.clientExpectations?.scenario}
          </p>

          {project.clientExpectations?.requirements && (
            <div className="narrative-points-box">
              <h4 className="points-box-title">Key Client Mandates:</h4>
              <ul className="narrative-points-list">
                {project.clientExpectations.requirements.map((req, idx) => (
                  <li key={idx}>
                    <span className="point-bullet">&#9670;</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* 3. SECTION: WHAT WE DELIVERED (Execution badge removed as requested) */}
      <section className="detail-narrative-section what-delivered-section">
        <h2 className="narrative-heading">What We Delivered</h2>

        <div className="narrative-content-card delivered-card">
          <h3 className="delivered-headline-text">
            {project.whatWeDelivered?.headline}
          </h3>
          <p className="narrative-body-text">
            {project.whatWeDelivered?.scenario}
          </p>

          {project.whatWeDelivered?.deliverables && (
            <div className="narrative-points-box delivered-points-box">
              <h4 className="points-box-title">Signature Deliverables & Engineering:</h4>
              <div className="deliverables-grid">
                {project.whatWeDelivered.deliverables.map((deliv, idx) => (
                  <div key={idx} className="deliverable-item-card">
                    <CheckCircle2 size={18} className="deliverable-check-icon" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. SECTION: AUTOPLAYING VIDEO WITH INTERACTIVE CONTROLS */}
      <section className="detail-video-showcase-section">
        <div className="video-section-header">
          <span className="narrative-pill video-pill">CINEMATIC WALKTHROUGH</span>
          <h2 className="narrative-heading">Project Cinematic Tour</h2>
          <p className="video-section-sub">
            Scroll down to explore the video walkthrough. Use the interactive controls below to rewind, pause, or skip forward.
          </p>
        </div>

        <div className="custom-video-player-container">
          <div className="video-viewport-wrapper">
            <video
              ref={videoRef}
              src={videoSource}
              playsInline
              muted={isMuted}
              loop
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              className="cinematic-video-element"
              onClick={togglePlay}
            />

            {/* Tap-to-play overlay icon on pause */}
            {!isPlaying && (
              <div className="video-paused-overlay" onClick={togglePlay}>
                <div className="play-icon-circle">
                  <Play size={32} fill="currentColor" />
                </div>
              </div>
            )}
          </div>

          {/* Interactive Luxury Controls Bar */}
          <div className="custom-video-controls-bar">
            {/* Scrubber / Progress Bar */}
            <div className="video-scrubber-track" onClick={handleSeek}>
              <div 
                className="video-scrubber-fill" 
                style={{ width: `${progress}%` }}
              >
                <div className="video-scrubber-thumb"></div>
              </div>
            </div>

            {/* Bottom Controls Row */}
            <div className="video-controls-row">
              <div className="controls-left-group">
                {/* Play / Pause */}
                <button 
                  className="v-ctrl-btn main-play-btn" 
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause" : "Play"}
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
                </button>

                {/* Rewind 10s */}
                <button 
                  className="v-ctrl-btn rewind-btn" 
                  onClick={handleRewind}
                  aria-label="Rewind 10 seconds"
                  title="Rewind 10 seconds"
                >
                  <RotateCcw size={16} />
                  <span className="ctrl-step-text">10s</span>
                </button>

                {/* Forward 10s */}
                <button 
                  className="v-ctrl-btn forward-btn" 
                  onClick={handleForward}
                  aria-label="Forward 10 seconds"
                  title="Forward 10 seconds"
                >
                  <RotateCw size={16} />
                  <span className="ctrl-step-text">10s</span>
                </button>

                {/* Current Time / Duration Counter */}
                <div className="video-time-counter">
                  <span>{formatTime(currentTime)}</span>
                  <span className="time-divider">/</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              <div className="controls-right-group">
                {/* Mute / Unmute */}
                <button 
                  className="v-ctrl-btn mute-btn" 
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
                  title={isMuted ? "Unmute Audio" : "Mute Audio"}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  <span className="ctrl-state-label">{isMuted ? "MUTED" : "UNMUTED"}</span>
                </button>

                {/* Fullscreen */}
                <button 
                  className="v-ctrl-btn fs-btn" 
                  onClick={toggleFullscreen}
                  aria-label="Toggle Fullscreen"
                  title="Fullscreen"
                >
                  <Maximize size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: ABOUT THE FOUNDER */}
      <section className="detail-founder-section">
        <div className="founder-card-inner">
          <div className="founder-image-side">
            <div className="founder-img-wrapper">
              <img 
                src="/brochure-4.jpeg" 
                alt="Preti Sethi Principal Designer" 
                className="founder-portrait-img" 
                loading="lazy" 
              />
              <div className="founder-award-badge">
                <Award size={18} />
                <span>FOUNDER & VISIONARY</span>
              </div>
            </div>
          </div>

          <div className="founder-bio-side">
            <span className="founder-sub-label">LEAD PRINCIPAL DESIGNER</span>
            <h2 className="founder-name-heading">Preti Sethi</h2>
            
            <p className="founder-bio-p">
              Preti Sethi is the founder and lead visionary of <strong>PS Designs</strong>. The name of our studio is not just a brand; it is a direct reflection of her identity, meticulous eye for luxury, and dedication to high-craft architecture.
            </p>
            <p className="founder-bio-p">
              When she began this journey, it was marked by limited resources but boundless enthusiasm—operating from a time with no office of our own to scaling into a premier <strong>team of ten design experts</strong> in Delhi Rohini.
            </p>
            <p className="founder-bio-p">
              Her design philosophy ensures every project balances serene functional ergonomics with unmistakable regal artistry, tailored to how clients connect, live, and host.
            </p>

            <div className="founder-metrics-row">
              <div className="f-metric">
                <span className="f-metric-val">10+</span>
                <span className="f-metric-lbl">Design Experts</span>
              </div>
              <div className="f-metric">
                <span className="f-metric-val">100%</span>
                <span className="f-metric-lbl">Client Trust</span>
              </div>
              <div className="f-metric">
                <span className="f-metric-val">Delhi</span>
                <span className="f-metric-lbl">Design Studio</span>
              </div>
            </div>

            <div className="founder-cta-row">
              <button 
                className="cta-gold-btn" 
                onClick={() => onNavigate && onNavigate('contact')}
              >
                CONNECT WITH PRETI
              </button>
              <button 
                className="back-to-projects-btn"
                onClick={onBack}
              >
                VIEW ALL PROJECTS
              </button>
            </div>
          </div>
        </div>

        {/* 6. FOUNDER SOCIALS CONNECT SECTION */}
        <div className="founder-socials-connect-card">
          <div className="socials-connect-header">
            <span className="socials-badge">CONNECT & FOLLOW</span>
            <h3 className="socials-title">Follow Preti Sethi & PS Designs</h3>
            <p className="socials-sub">Stay updated with our newest design walkthroughs, interior transformations, and behind-the-scenes stories.</p>
          </div>

          <div className="socials-buttons-grid">
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/preetisethidesigns/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-platform-card instagram-card"
            >
              <div className="social-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>
              <div className="social-text-box">
                <span className="social-platform-name">Instagram</span>
                <span className="social-handle">@preetisethidesigns</span>
              </div>
              <ArrowUpRight size={18} className="social-arrow-icon" />
            </a>

            {/* Threads */}
            <a 
              href="https://www.threads.com/@preetisethidesigns?xmt=AQG0pjPRTbLIsdHqNzWFU5NGoLSzIJ_XHp46IlGdY_Q4HGg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-platform-card threads-card"
            >
              <div className="social-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.068 3.774 9.256 8.654 9.882v-6.99H8.197v-2.892h2.457V9.799c0-2.425 1.446-3.766 3.655-3.766 1.058 0 2.164.189 2.164.189v2.38h-1.219c-1.202 0-1.577.746-1.577 1.512v1.885h2.684l-.429 2.892h-2.255v6.99C18.226 21.256 22 17.068 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </div>
              <div className="social-text-box">
                <span className="social-platform-name">Threads</span>
                <span className="social-handle">@preetisethidesigns</span>
              </div>
              <ArrowUpRight size={18} className="social-arrow-icon" />
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/people/PSdisenos/100093298519140/?rdid=MXIcwbfLuhT1EWbj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16FVh5xVsoV%2F" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-platform-card facebook-card"
            >
              <div className="social-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className="social-text-box">
                <span className="social-platform-name">Facebook</span>
                <span className="social-handle">PS Designs Studio</span>
              </div>
              <ArrowUpRight size={18} className="social-arrow-icon" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ProjectDetail;
