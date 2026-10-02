import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Compass, 
  MapPin, 
  Calendar, 
  Layers, 
  ArrowUpRight,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  FileText
} from 'lucide-react';

function ProjectDetail({ project, onNavigate }) {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [isFloorPlanModalOpen, setIsFloorPlanModalOpen] = useState(false);

  if (!project) return null;

  return (
    <div className="project-detail-wrapper animate-fade-in">

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
          <div className="detail-watermark-stamp">PREETI SETHI DESIGNS</div>
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

      {/* 2. SECTION: WHAT THE CLIENT EXPECTED (Floor plan on Left, Text on Right; Mobile: Floor Plan on top, Text below) */}
      <section className="detail-narrative-section client-expected-section">
        <h2 className="narrative-heading">What The Client Expected</h2>
        
        <div className="client-expected-grid-layout">
          {/* Left Column (Desktop) / Top (Mobile): Floor Plan */}
          {project.floorPlanImg && (
            <div className="floorplan-showcase-column">
              <div className="floorplan-card-frame" onClick={() => setIsFloorPlanModalOpen(true)}>
                <div className="floorplan-badge-tag">
                  <Compass size={14} />
                  <span>ARCHITECTURAL FLOOR PLAN</span>
                </div>
                <div className="floorplan-image-viewport">
                  <img 
                    src={project.floorPlanImg} 
                    alt={`${project.name} Architectural Floor Plan`} 
                    className="floorplan-preview-img"
                    loading="lazy"
                  />
                  <div className="floorplan-hover-overlay">
                    <span className="floorplan-zoom-badge">
                      <ZoomIn size={16} /> CLICK TO EXPAND BLUEPRINT
                    </span>
                  </div>
                </div>
                {project.floorPlanPdf && (
                  <div className="floorplan-footer-action">
                    <a 
                      href={project.floorPlanPdf} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="floorplan-pdf-download-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FileText size={15} />
                      <span>OPEN FULL PDF BLUEPRINT</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Right Column (Desktop) / Below (Mobile): Narrative Text */}
          <div className={`narrative-content-card ${!project.floorPlanImg ? 'full-width-card' : ''}`}>
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
        </div>
      </section>

      {/* 3. SECTION: WHAT WE DELIVERED */}
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

      {/* 4. SECTION: PROJECT SPACES & ARCHITECTURAL PHOTOGRAPHY (If Gallery exists) */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="detail-narrative-section detail-gallery-section">
          <h2 className="narrative-heading">Architectural Spaces & Detailing</h2>
          <p className="detail-gallery-sub">
            Explore high-resolution photography showcasing the handpicked materials, bespoke millwork, and lighting design crafted for {project.name}. Click any space to expand.
          </p>

          <div className="project-gallery-grid">
            {project.gallery.map((item, idx) => (
              <div 
                key={idx} 
                className="gallery-item-card"
                onClick={() => setActiveImageIndex(idx)}
              >
                <div className="gallery-item-image-box">
                  <img src={item.src} alt={item.title} loading="lazy" />
                  <div className="gallery-item-hover-overlay">
                    <span className="gallery-zoom-badge">
                      <ZoomIn size={16} /> VIEW FULL PHOTO
                    </span>
                  </div>
                  <span className="gallery-item-tag">{item.category}</span>
                </div>
                <div className="gallery-item-meta">
                  <h4 className="gallery-item-title">{item.title}</h4>
                  <p className="gallery-item-caption">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. SECTION: GOOGLE DRIVE CINEMATIC WALKTHROUGH (If Video link exists) */}
      {project.videoEmbedUrl && (
        <section className="detail-video-showcase-section">
          <div className="video-section-header">
            <span className="narrative-pill video-pill">CINEMATIC WALKTHROUGH</span>
            <h2 className="narrative-heading">Project Cinematic Tour</h2>
            <p className="video-section-sub">
              Watch the full walkthrough tour for {project.name} highlighting spatial transitions and bespoke materials.
            </p>
          </div>

          <div className="custom-drive-video-container">
            <div className="drive-video-responsive-frame">
              <iframe
                src={project.videoEmbedUrl}
                title={`${project.name} Video Tour`}
                className="drive-video-iframe"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
            <div className="drive-video-external-bar">
              <a 
                href={project.videoUrl || project.videoEmbedUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="drive-video-link-btn"
              >
                <span>OPEN VIDEO IN GOOGLE DRIVE</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* 6. SECTION: ABOUT THE FOUNDERS */}
      <section className="detail-founder-section">
        <div className="section-header-center" style={{ marginBottom: '3rem' }}>
          <span className="section-eyebrow">LEADERSHIP</span>
          <h2 className="section-title">The Vision Behind Preeti Sethi Designs</h2>
          <div className="accent-line-small"></div>
        </div>

        {/* Founder 1: Preeti Sethi */}
        <div className="founder-card-inner">
          <div className="founder-image-side">
            <div className="founder-img-wrapper">
              <img 
                src="/preetisethi.png" 
                alt="Preeti Sethi Founder & Creative Director" 
                className="founder-portrait-img" 
                loading="lazy" 
              />
              <div className="founder-award-badge">
                <Award size={18} />
                <span>FOUNDER & CREATIVE DIRECTOR</span>
              </div>
            </div>
          </div>

          <div className="founder-bio-side">
            <span className="founder-sub-label">FOUNDER & CREATIVE DIRECTOR</span>
            <h2 className="founder-name-heading">Preeti Sethi</h2>
            
            <p className="founder-bio-p">
              Preeti leads the creative vision of <strong>Preeti Sethi Designs</strong>. Her approach begins with understanding the client—their personality, lifestyle, aspirations, and the way they want their space to feel.
            </p>
            <p className="founder-bio-p">
              What started with a 13-year-old girl designing her home has blossomed into an established design studio built around the core belief that a space should not just look beautiful; it should feel like it belongs to the people who live in it.
            </p>
            <p className="founder-bio-p">
              Together with co-founder Shivam Nagpal, Preeti continues to craft residential sanctuaries offering design consultation, bespoke furniture, turnkey execution, and site supervision.
            </p>

            <div className="founder-cta-row">
              <button 
                className="contact-founder-btn"
                onClick={() => onNavigate && onNavigate('contact')}
              >
                CONNECT WITH PREETI
              </button>
              <button 
                className="back-to-projects-btn"
                onClick={() => onNavigate && onNavigate('about')}
              >
                READ OUR FULL STORY
              </button>
            </div>
          </div>
        </div>

        {/* Founder 2: Shivam Nagpal */}
        <div className="founder-card-inner" style={{ marginTop: '3.5rem' }}>
          <div className="founder-image-side">
            <div className="founder-img-wrapper">
              <img 
                src="/shivamnagpal.jpeg" 
                alt="Shivam Nagpal Co-Founder & Managing Director" 
                className="founder-portrait-img" 
                loading="lazy" 
              />
              <div className="founder-award-badge">
                <Award size={18} />
                <span>CO-FOUNDER & MANAGING DIRECTOR</span>
              </div>
            </div>
          </div>

          <div className="founder-bio-side">
            <span className="founder-sub-label">CO-FOUNDER & MANAGING DIRECTOR</span>
            <h2 className="founder-name-heading">Shivam Nagpal</h2>
            
            <p className="founder-bio-p">
              Shivam spearheads operations, execution, project management, and on-site engineering at <strong>Preeti Sethi Designs</strong>.
            </p>
            <p className="founder-bio-p">
              With a sharp eye for structural integrity, materials engineering, and cost-effective execution, Shivam ensures that every architectural plan conceived on paper translates seamlessly into reality without compromise.
            </p>
            <p className="founder-bio-p">
              His leadership across contractors, vendor networks, and master craftsmen ensures timely handover and unmatched quality standards.
            </p>

            <div className="founder-cta-row">
              <button 
                className="contact-founder-btn"
                onClick={() => onNavigate && onNavigate('contact')}
              >
                CONNECT WITH SHIVAM
              </button>
              <button 
                className="back-to-projects-btn"
                onClick={() => onNavigate && onNavigate('about')}
              >
                READ OUR FULL STORY
              </button>
            </div>
          </div>
        </div>

        {/* Founder Socials Connect Section */}
        <div className="founder-socials-connect-card">
          <div className="socials-connect-header">
            <span className="socials-badge">CONNECT & FOLLOW</span>
            <h3 className="socials-title">Follow Preeti Sethi Designs</h3>
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
                <span className="social-handle">Preeti Sethi Designs Studio</span>
              </div>
              <ArrowUpRight size={18} className="social-arrow-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* 7. FULLSCREEN PHOTO LIGHTBOX MODAL */}
      {project.gallery && activeImageIndex !== null && (
        <div className="gallery-lightbox-backdrop" onClick={() => setActiveImageIndex(null)}>
          <div className="gallery-lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-close-btn" 
              onClick={() => setActiveImageIndex(null)}
              aria-label="Close photo modal"
            >
              <X size={24} />
            </button>

            {/* Prev Image Button */}
            <button 
              className="lightbox-nav-btn prev-btn"
              onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : project.gallery.length - 1))}
              aria-label="Previous space photo"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image Frame */}
            <div className="lightbox-image-wrapper">
              <img 
                src={project.gallery[activeImageIndex].src} 
                alt={project.gallery[activeImageIndex].title} 
                className="lightbox-active-img"
              />
              <div className="lightbox-caption-bar">
                <div className="lightbox-meta">
                  <span className="lightbox-badge">{project.gallery[activeImageIndex].category}</span>
                  <span className="lightbox-counter">{activeImageIndex + 1} / {project.gallery.length}</span>
                </div>
                <h3 className="lightbox-img-title">{project.gallery[activeImageIndex].title}</h3>
                <p className="lightbox-img-desc">{project.gallery[activeImageIndex].caption}</p>
              </div>
            </div>

            {/* Next Image Button */}
            <button 
              className="lightbox-nav-btn next-btn"
              onClick={() => setActiveImageIndex((prev) => (prev < project.gallery.length - 1 ? prev + 1 : 0))}
              aria-label="Next space photo"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}

      {/* 8. FULLSCREEN FLOOR PLAN LIGHTBOX MODAL */}
      {isFloorPlanModalOpen && project.floorPlanImg && (
        <div className="gallery-lightbox-backdrop" onClick={() => setIsFloorPlanModalOpen(false)}>
          <div className="gallery-lightbox-container floorplan-lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-close-btn" 
              onClick={() => setIsFloorPlanModalOpen(false)}
              aria-label="Close floor plan modal"
            >
              <X size={24} />
            </button>

            <div className="lightbox-image-wrapper floorplan-modal-wrapper">
              <img 
                src={project.floorPlanImg} 
                alt={`${project.name} Architectural Blueprint`} 
                className="lightbox-active-img floorplan-modal-img"
              />
              <div className="lightbox-caption-bar">
                <div className="lightbox-meta">
                  <span className="lightbox-badge">ARCHITECTURAL BLUEPRINT</span>
                  <span className="lightbox-counter">{project.name}</span>
                </div>
                <h3 className="lightbox-img-title">{project.name} — Spatial Floor Layout</h3>
                {project.floorPlanPdf && (
                  <div style={{ marginTop: '0.8rem' }}>
                    <a 
                      href={project.floorPlanPdf} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="floorplan-modal-pdf-link"
                    >
                      <FileText size={15} style={{ marginRight: '6px' }} />
                      OPEN FULL HIGH-RESOLUTION PDF <ArrowUpRight size={14} style={{ marginLeft: '4px' }} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default ProjectDetail;
