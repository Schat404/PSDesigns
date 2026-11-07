import React, { useState, useEffect } from 'react';
import ResponsiveDrivePlayer from './ResponsiveDrivePlayer';
import { Play, ExternalLink, ChevronLeft, ChevronRight, Quote, Video, Star } from 'lucide-react';

function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const GOOGLE_DRIVE_FOLDER = "https://drive.google.com/drive/folders/1QY_JscJruzHxFv07hhSGPfgyZYoNKTnZ";
  const VIDEO_PREVIEW_URL = "https://drive.google.com/file/d/1c9YkfE4TwXR8Fl4TblhRPBoYHORBpLqn/preview";

  const testimonials = [
    {
      name: "Mr Vikrant",
      location: "Sector 22, Rohini",
      quote: "Preeti Sethi Designs transformed our Sector 22 villa into a warm, serene sanctuary. Preeti Sethi's eye for detailing and floating marble craftsmanship is matchless. The custom bespoke furniture feels incredibly premium and aligns beautifully with our lifestyle."
    },
    {
      name: "Ushank Ghai",
      location: "Sector 25, Rohini",
      quote: "From our first design consultation to final handover, the transformation of our Sector 25 residence was seamless. The custom sintered stone island and fluted headboard accent wall give our home a luxurious 5-star hotel ambiance."
    },
    {
      name: "Mr Akaash",
      location: "Elite Fitness Gym, Delhi NCR",
      quote: "Preeti Sethi Designs brought our vision for Elite Fitness to life beyond our highest expectations. From the heavy-duty acoustic sub-flooring and dynamic circadian lighting tracks to the luxury locker suites, every detail feels world-class. Our members constantly praise the luxurious ambiance."
    },
    {
      name: "Mr Abhishek",
      location: "Sector 24, Rohini",
      quote: "The team delivered a breathtaking luxury home for our Sector 24 residence. The open-plan curved drawing lounge, custom sacred arched temple sanctuary, and beautiful finishes make every evening spent hosting family truly memorable."
    },
    {
      name: "Mr Arun",
      location: "Rajouri Garden, West Delhi",
      quote: "Preeti Sethi Designs brought our vision for our Rajouri Garden residence to life with sheer elegance. The fluid curved living lounge, peacock mural, and two-tone split marble dining table create a modern palatial ambiance that our guests always admire."
    }
  ];

  // Auto-scroll effect for text reviews carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const getInitial = (name) => {
    const cleaned = name.replace(/^Mr\.?\s+/i, '').trim();
    return (cleaned || name).charAt(0).toUpperCase();
  };

  return (
    <div className="reviews-container animate-fade-in">
      <section className="reviews-hero">
        <h1 className="reviews-title">CLIENT TESTIMONIES</h1>
        <p className="reviews-subtitle">Real experiences shared by clients who value bespoke craftsmanship and interior design excellence.</p>
        <div className="accent-line"></div>
      </section>

      {/* FEATURED VIDEO REVIEW SECTION */}
      <section className="featured-video-review-section">
        <div className="video-review-card-frame">
          <div className="video-review-header">
            <div className="video-review-badge">
              <Video size={16} />
              <span>FEATURED VIDEO WALKTHROUGH & TESTIMONIAL</span>
            </div>
            <a
              href={GOOGLE_DRIVE_FOLDER}
              target="_blank"
              rel="noopener noreferrer"
              className="video-folder-link-btn"
            >
              OPEN IN GOOGLE DRIVE <ExternalLink size={14} style={{ marginLeft: '6px' }} />
            </a>
          </div>

          <div className="video-player-aspect-wrapper">
            <ResponsiveDrivePlayer
              src={VIDEO_PREVIEW_URL}
              title="Client Video Testimonial - Preeti Sethi Designs"
              className="video-preview-iframe"
            />
          </div>

          <div className="video-review-caption">
            <div className="video-review-caption-info">
              <h3>Client Residence Video Walkthrough</h3>
              <p>
                Watch an unfiltered walkthrough and first-hand client review showcasing the precision carpentry, atmospheric cove lighting, and turnkey finish delivered by Preeti Sethi Designs.
              </p>
            </div>
            <a
              href={GOOGLE_DRIVE_FOLDER}
              target="_blank"
              rel="noopener noreferrer"
              className="video-cta-pill"
            >
              <Play size={15} style={{ fill: 'currentColor' }} /> WATCH FULL HIGH-RES VIDEO
            </a>
          </div>
        </div>
      </section>

      {/* AUTO-SCROLLING TEXT REVIEWS CAROUSEL */}
      <section
        className="reviews-autoscroll-section"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="autoscroll-header">
          <div className="autoscroll-badge">
            <Star size={14} style={{ fill: 'currentColor' }} />
            <span>VERIFIED CLIENT STORIES</span>
          </div>
          <h2 className="autoscroll-title">VOICES OF SATISFACTION</h2>
        </div>

        <div className="autoscroll-carousel-box">
          <button className="carousel-nav-btn prev" onClick={handlePrev} aria-label="Previous testimony">
            <ChevronLeft size={22} />
          </button>

          <div className="autoscroll-viewport">
            <div
              className="autoscroll-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="autoscroll-slide">
                  <Quote size={40} className="autoscroll-quote-icon" />
                  <p className="autoscroll-quote-text">"{t.quote}"</p>
                  <div className="autoscroll-client-meta">
                    <div className="client-avatar-initial" aria-label={t.name}>
                      {getInitial(t.name)}
                    </div>
                    <div>
                      <h4 className="autoscroll-client-name">{t.name}</h4>
                      <p className="autoscroll-client-loc">{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-nav-btn next" onClick={handleNext} aria-label="Next testimony">
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Indicator dots */}
        <div className="autoscroll-dots-row">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`autoscroll-dot ${currentSlide === i ? 'active' : ''}`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* COMPLETE TESTIMONIALS MASONRY GRID */}
      <section className="reviews-grid-section">
        <h3 className="section-title text-center" style={{ marginBottom: '2.5rem' }}>ALL CLIENT EXPERIENCES</h3>
        <div className="reviews-masonry">
          {testimonials.map((t, idx) => (
            <div key={idx} className="review-card">
              <div className="quote-mark">“</div>
              <p className="review-quote">{t.quote}</p>
              <div className="client-profile">
                <div className="client-avatar-initial" aria-label={t.name}>
                  {getInitial(t.name)}
                </div>
                <div className="client-meta">
                  <h4>{t.name}</h4>
                  <span className="client-location-sub">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Reviews;
