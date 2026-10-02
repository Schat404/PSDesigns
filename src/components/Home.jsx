import React, { useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, FileText, PenTool, Hammer, Key, Award, Sparkles, Trophy } from 'lucide-react';
import { projectsData } from '../data/projectsData';

function Home({ onNavigate, testimonials, currentSlide, setCurrentSlide, handlePrevSlide, handleNextSlide }) {
  // Take top 4 featured projects for the home grid
  const featuredProjects = projectsData.slice(0, 4);

  useEffect(() => {
    const handleScrollEffects = () => {
      // Zoom and Blur hero video on scroll
      const heroVideo = document.querySelector('.hero-video');
      if (heroVideo) {
        const scrollPos = window.scrollY;
        const scaleVal = 1 + scrollPos / 2000;
        const blurVal = Math.min(scrollPos / 30, 15);
        heroVideo.style.transform = `scale(${scaleVal})`;
        heroVideo.style.filter = `blur(${blurVal}px)`;
      }

      // Scroll reveals
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 60) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScrollEffects);
    handleScrollEffects();
    return () => window.removeEventListener('scroll', handleScrollEffects);
  }, []);

  return (
    <div className="home-container">
      
      {/* SECTION 1: Full-Screen loop video with text overlay at bottom */}
      <section className="hero-section">
        <div className="hero-video-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="hero-video"
            src="/hero-video.mp4"
          >
            Your browser does not support the video tag.
          </video>
          <div className="hero-bottom-gradient"></div>
        </div>

        {/* Brand statement overlapping the video at the bottom */}
        <div className="hero-statement-overlay">
          <div className="brand-intro-content">
            <h2 className="brand-intro-title">AWARD WINNING PERFECTION IN EVERY DETAIL</h2>
            <p className="brand-intro-body">
              Preeti Sethi Designs is an elite interior architecture house specializing in bespoke premium residential environments. We orchestrate materials, styling, and custom furniture layout overlays to elevate spaces into architectural poetry.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Featured Projects (Clean Responsive Grid, No Horizontal Scroll) */}
      <section className="featured-projects-section">
        <div className="featured-projects-container">
          <div className="section-hdr-container scroll-reveal">
            <h2 className="section-title">FEATURED PROJECTS</h2>
          </div>

          <div className="featured-projects-grid">
            {featuredProjects.map((p) => (
              <div 
                key={p.id} 
                className="featured-project-card scroll-reveal"
                onClick={() => onNavigate('project-detail', p)}
              >
                <div className="featured-card-frame">
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
                <div className="featured-card-info">
                  <h3 className="featured-card-name">{p.name}</h3>
                  <p className="featured-card-location">{p.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View all past projects button positioned below the grid */}
          <div className="view-all-projects-wrapper scroll-reveal">
            <button className="view-all-btn" onClick={() => onNavigate('projects')}>
              VIEW ALL PAST PROJECTS <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* SECTION 3: About Us Snippet (Proper head visibility) */}
      <section className="viewport-section">
        <div className="about-snip-grid">
          <div className="about-snip-image-wrapper scroll-reveal">
            <img src="/preetisethi.png" alt="Preeti Sethi Designs Studio" className="about-snip-img" loading="lazy" />
          </div>
          <div className="about-snip-content scroll-reveal">
            <h2>ABOUT US</h2>
            <h3>PARADISE FOR THOSE WHO CONNECT</h3>
            <p>
              Founded by Preeti Sethi and Shivam Nagpal, Preeti Sethi Designs was built with a shared vision—to create spaces that are beautiful, functional, personal, and deeply connected to the people who experience them.
            </p>
            <button className="know-more-btn" onClick={() => onNavigate('about')}>
              KNOW MORE
            </button>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* SECTION 4: Our Process (Clean Essajees style) */}
      <section className="home-compact-section process-showcase-section">
        <div className="process-section-inner">
          <div className="process-header-block scroll-reveal">
            <h2 className="process-main-title">Our Process</h2>
          </div>

          <div className="process-timeline-grid scroll-reveal">
            {/* Step 1 */}
            <div className="process-timeline-col">
              <div className="process-icon-wrap">
                <FileText size={32} className="process-line-icon" strokeWidth={1.5} />
              </div>
              <div className="process-step-header">
                <span className="process-step-badge">01</span>
                <h4 className="process-step-name">BRIEFING</h4>
              </div>
              <p className="process-step-desc">
                We begin with an in-depth consultation to fully understand the client's needs, lifestyle requirements, and aesthetic expectations. The foundation of every design.
              </p>
            </div>

            {/* Step 2 */}
            <div className="process-timeline-col">
              <div className="process-icon-wrap">
                <PenTool size={32} className="process-line-icon" strokeWidth={1.5} />
              </div>
              <div className="process-step-header">
                <span className="process-step-badge">02</span>
                <h4 className="process-step-name">DESIGN</h4>
              </div>
              <p className="process-step-desc">
                Translating the brief into 3D architectural blueprints, curated moodboards, and material selections. We design every single detail with precision.
              </p>
            </div>

            {/* Step 3 */}
            <div className="process-timeline-col">
              <div className="process-icon-wrap">
                <Hammer size={32} className="process-line-icon" strokeWidth={1.5} />
              </div>
              <div className="process-step-header">
                <span className="process-step-badge">03</span>
                <h4 className="process-step-name">EXECUTION</h4>
              </div>
              <p className="process-step-desc">
                Bringing our designs to life from the ground up. As we manage end-to-end execution, bespoke furnishings and structural decor are crafted flawlessly.
              </p>
            </div>

            {/* Step 4 */}
            <div className="process-timeline-col">
              <div className="process-icon-wrap">
                <Key size={32} className="process-line-icon" strokeWidth={1.5} />
              </div>
              <div className="process-step-header">
                <span className="process-step-badge">04</span>
                <h4 className="process-step-name">HANDOVER</h4>
              </div>
              <p className="process-step-desc">
                The most anticipated moment, where we hand our clients the keys to their new sanctuary, fully finished and ready for you to move in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* SECTION 5: Testimonials Carousel */}
      <section className="home-compact-section testimonials-section">
        <div className="testimonials-section-inner">
          <h2 className="section-title text-center scroll-reveal">TESTIMONIALS</h2>
          
          <div className="carousel-outer-wrapper scroll-reveal">
            <button className="carousel-arrow left" onClick={handlePrevSlide} aria-label="Previous review">
              <ChevronLeft size={22} />
            </button>
            
            <div className="carousel-viewport">
              <div 
                className="carousel-track" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((t, idx) => (
                  <div key={idx} className="carousel-slide">
                    <p className="testi-quote">"{t.quote}"</p>
                    <div className="testi-author">
                      <img src={t.img} alt={t.name} className="testi-img" loading="lazy" />
                      <div className="testi-meta">
                        <h4>{t.name}</h4>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="carousel-arrow right" onClick={handleNextSlide} aria-label="Next review">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* SECTION 6: Awards */}
      <section className="home-compact-section">
        <div className="awards-section-wrapper">
          <h2 className="section-title text-center scroll-reveal">AWARDS</h2>
          
          <div className="awards-feature-grid scroll-reveal">
            {/* Photo on Left (Desktop) / Top (Mobile) */}
            <div className="awards-image-column">
              <div className="awards-image-frame">
                <img 
                  src="/awardphoto.png" 
                  alt="Preeti Sethi Designs awarded by Shilpa Shetty at International Dazzling Awards" 
                  className="awards-main-photo" 
                  loading="lazy" 
                />
                <div className="awards-image-glow-overlay"></div>
                <div className="awards-floating-badge">
                  <Trophy size={16} />
                  <span>INTERNATIONAL DAZZLING AWARDS</span>
                </div>
              </div>
            </div>

            {/* Text on Right (Desktop) / Below (Mobile) */}
            <div className="awards-content-column">
              <div className="awards-content-card">
                <div className="awards-eyebrow">
                  <Sparkles size={16} />
                  <span>PRESTIGIOUS INDUSTRY RECOGNITION</span>
                </div>
                <h3 className="awards-headline">
                  Winner of Best Interior Design Award
                </h3>
                <div className="awards-accent-divider"></div>
                <p className="awards-description-lead">
                  Preeti Sethi Designs won the prestigious <strong>International Dazzling Awards</strong> in the <strong>Best Interior Design Award</strong> category, and were proudly awarded and felicitated by acclaimed Bollywood actress and wellness icon <strong>Shilpa Shetty</strong>.
                </p>
                <p className="awards-description-sub">
                  This distinguished national honor recognizes our studio's unwavering commitment to architectural innovation, artisanal craftsmanship, and bespoke luxury interior environments crafted across Delhi NCR.
                </p>

                <div className="awards-highlights-grid">
                  <div className="award-highlight-pill">
                    <Award size={18} className="award-pill-icon" />
                    <div className="award-pill-text">
                      <span className="pill-title">Best Interior Design Category</span>
                      <span className="pill-desc">International Dazzling Awards</span>
                    </div>
                  </div>
                  <div className="award-highlight-pill">
                    <Sparkles size={18} className="award-pill-icon" />
                    <div className="award-pill-text">
                      <span className="pill-title">Felicitated by Shilpa Shetty</span>
                      <span className="pill-desc">Celebrity Recognition & Honor</span>
                    </div>
                  </div>
                </div>

                <div className="awards-cta-row">
                  <button className="know-more-btn" onClick={() => onNavigate('projects')}>
                    EXPLORE AWARD-WINNING PROJECTS <ArrowRight size={15} style={{ marginLeft: '6px' }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* SECTION 7: Contact Us */}
      <section className="home-compact-section">
        <div className="contact-section-inner scroll-reveal">
          <h2 className="section-title text-center">START YOUR JOURNEY</h2>
          
          <div className="google-form-inquiry-box">
            <h4>CONSULTATION FORM</h4>
            <p>We invite you to share details regarding your structural blueprint layout, space dimensions, and stylistic goals.</p>
            <button 
              className="external-form-btn"
              onClick={() => window.open('https://docs.google.com/forms', '_blank')}
            >
              OPEN INQUIRY FORM <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 8: Visit Our Design Lab (Map Section) */}
      <section className="home-map-section scroll-reveal">
        <div className="process-section-inner">
          <h3 className="section-title text-center mb-4">VISIT OUR DESIGN LAB</h3>
          <p className="section-subtitle text-center mb-4" style={{ color: 'var(--accent-bronze)', marginBottom: '2rem' }}>
            23, Pocket 19, Sector 24, Rohini - 110085, New Delhi
          </p>
          <div className="map-frame-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.4687595353147!2d77.10091391508493!3d28.735467482377317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03de0b6754ad%3A0xea2be10cbf83dbcf!2sRohini%20Sector%2024%2C%20Delhi%20110085!5e0!3m2!1sen!2sin!4v1629890000000!5m2!1sen!2sin" 
              width="100%" 
              height="420" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(80%)' }} 
              allowFullScreen="" 
              loading="lazy"
              title="Preeti Sethi Designs Delhi Studio Map"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
