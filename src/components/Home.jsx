import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, FileText, PenTool, Hammer, Key } from 'lucide-react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { projectsData } from '../data/projectsData';

function Home({ onNavigate, testimonials, currentSlide, setCurrentSlide, handlePrevSlide, handleNextSlide }) {
  const horizontalSectionRef = useRef(null);

  // Awards/Press data
  const pressArticles = [
    {
      id: "award-1",
      title: "Luxurious Interior Designer of the Year",
      date: "OCTOBER 2025",
      excerpt: "PS Designs bags the top spot in premium residential planning at the National Architecture Conclave...",
      fullText: "At the National Architecture Conclave 2025, PS Designs was awarded 'Luxurious Interior Designer of the Year' for their masterwork in Delhi NCR residences. Preti Sethi highlighted her belief that every space is a canvas, and detailing is what separates quality from luxury. The jury praised the seamless balance of deep bronze tones and bespoke custom elements.",
      image: "/brochure-3.jpeg"
    },
    {
      id: "award-2",
      title: "Empowering Women Leaders in Design",
      date: "MARCH 2026",
      excerpt: "Sharing the journey of Preti Sethi from a home studio to leading a prominent design lab of ten experts...",
      fullText: "A feature article in Design Digest celebrating the story of Preti Sethi, who started PS Designs with limited resources but high goals. From a time with no office to a team of ten design experts operating in Sector 24, Rohini. Her journey illustrates the strength of female-led studio representation in Delhi.",
      image: "/brochure-4.jpeg"
    },
    {
      id: "press-1",
      title: "Bespoke Modern Living Trends",
      date: "JUNE 2026",
      excerpt: "Exploring the drawing room, modular kitchen and premium washroom layout solutions designed by PS Designs...",
      fullText: "Modern trends are pivoting back to warmth, custom textures, and quiet luxury. In this press feature, PS Designs shares tips on how to balance functional spaces (such as kitchens and storage units) with high-end gold accents and stone styling to make everyday living feel regal.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const { scrollYProgress } = useScroll({
    target: horizontalSectionRef
  });

  const xTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-58%"]);

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

      // Parallax images
      const parallaxImages = document.querySelectorAll('.parallax-img');
      parallaxImages.forEach(img => {
        const bounding = img.parentElement.getBoundingClientRect();
        const elementVisible = bounding.top < window.innerHeight && bounding.bottom > 0;
        if (elementVisible) {
          const scrollPct = (window.innerHeight - bounding.top) / (window.innerHeight + bounding.height);
          const shift = (scrollPct - 0.5) * 40;
          img.style.transform = `scale(1.1) translateY(${shift}px)`;
        }
      });

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
              PS Designs is an elite interior architecture house specializing in bespoke premium residential environments. We orchestrate materials, styling, and custom furniture layout overlays to elevate spaces into architectural poetry.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Featured projects (Scroll Driven Horizontal Scroll) */}
      <section className="featured-projects-section" ref={horizontalSectionRef}>
        <div className="sticky-horizontal-wrapper">
          <div className="section-hdr-container scroll-reveal">
            <h2 className="section-title">FEATURED PROJECTS</h2>
          </div>

          <div className="horizontal-scroll-viewport">
            <motion.div style={{ x: xTranslate }} className="horizontal-scroll-container">
              {projectsData.map((p) => (
                <div 
                  key={p.id} 
                  className="horizontal-project-card"
                  onClick={() => onNavigate('project-detail', p)}
                >
                  <div className="horizontal-frame">
                    <img src={p.image} alt={p.name} loading="lazy" />
                  </div>
                  <div className="horizontal-info">
                    <h3 className="horizontal-name">{p.name}</h3>
                    <p className="horizontal-location">{p.location}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* View all past projects button positioned below the horizontal track */}
          <div className="view-all-projects-wrapper scroll-reveal">
            <button className="view-all-btn" onClick={() => onNavigate('projects')}>
              VIEW ALL PAST PROJECTS <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* SECTION 3: About Us Snippet */}
      <section className="viewport-section">
        <div className="about-snip-grid">
          <div className="about-snip-image-wrapper parallax-frame scroll-reveal">
            <img src="/brochure-4.jpeg" alt="PS Designs Studio" className="parallax-img" loading="lazy" />
          </div>
          <div className="about-snip-content scroll-reveal">
            <h2>ABOUT US</h2>
            <h3>THE TEAM OF TEN LEADERS</h3>
            <p>
              Under the visionary direction of Preti Sethi, PS Designs has transitioned from a modest personal endeavor to a state-of-the-art office studio in Delhi Rohini. We craft luxury interiors that are deeply reflective of our clients' unique identity.
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

      {/* SECTION 6: Awards and Press Articles */}
      <section className="home-compact-section">
        <div className="press-section">
          <h2 className="section-title text-center scroll-reveal">AWARDS & PRESS</h2>
          
          <div className="press-grid">
            {pressArticles.map((article) => (
              <div 
                key={article.id} 
                className="press-card scroll-reveal"
                onClick={() => onNavigate('press-detail', article)}
              >
                <div className="press-image-frame">
                  <img src={article.image} alt={article.title} loading="lazy" />
                </div>
                <span className="press-date">{article.date}</span>
                <h4 className="press-title-card">{article.title}</h4>
                <p className="press-excerpt">{article.excerpt}</p>
              </div>
            ))}
          </div>

          <div className="view-more-container scroll-reveal">
            <button className="know-more-btn" onClick={() => onNavigate('projects')}>
              VIEW ALL PROJECTS
            </button>
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
              title="PS Designs Delhi Studio Map"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
