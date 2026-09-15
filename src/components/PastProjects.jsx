import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../data/projectsData';
import { ArrowRight, MapPin, Calendar, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function PastProjects({ onSelectProject }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Only apply GSAP scroll pinning and scale stacking on desktop/tablet devices (> 768px)
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    // Highly optimized CSS-transform based GSAP stacking for desktop
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.gsap-card');

      cards.forEach((card, i) => {
        // Pin each card in place while following cards scroll over it
        ScrollTrigger.create({
          trigger: card,
          start: "top 80px",
          endTrigger: containerRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          id: `pin-${i}`,
          fastScrollEnd: true,
          preventOverlaps: true,
        });

        // Use fast GPU-accelerated transforms (scale and y translate) with no layout thrashing
        if (i < cards.length - 1) {
          const nextCard = cards[i + 1];
          gsap.to(card.querySelector('.gsap-card-inner'), {
            scale: 0.94,
            opacity: 0.6,
            ease: "power1.out",
            scrollTrigger: {
              trigger: nextCard,
              start: "top 80px",
              end: "top 20px",
              scrub: 0.5,
              fastScrollEnd: true,
            }
          });
        }
      });
    }, containerRef);

    return () => ctx.revert(); // cleanly revert all animations and triggers without memory leaks
  }, []);

  return (
    <div className="projects-page-wrapper" ref={containerRef}>
      {/* Compact past projects hero */}
      <section className="projects-hero-compact">
        <span className="projects-badge-top">OUR PORTFOLIO</span>
        <h1 className="projects-title-small">PAST PROJECTS</h1>
        <p className="projects-subtitle-small">
          Explore our signature residential and commercial transformations across Delhi NCR.
        </p>
        <div className="accent-line-small"></div>
      </section>

      {/* GSAP Stacked Cards Container - 5 Cards */}
      <div className="gsap-stacked-cards-container">
        {projectsData.map((project, idx) => (
          <div key={project.id} className="gsap-card" style={{ zIndex: idx + 1 }}>
            <div className="gsap-card-inner">
              <div className="gsap-card-grid">
                <div 
                  className="gsap-card-visual"
                  onClick={() => onSelectProject(project)}
                >
                  <img src={project.image} alt={project.name} loading="lazy" />
                  <div className="gsap-card-badge">{project.category}</div>
                  <div className="card-number-tag">0{idx + 1}</div>
                </div>
                <div className="gsap-card-content">
                  <div className="gsap-meta-row">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <h2 
                    className="gsap-card-title"
                    onClick={() => onSelectProject(project)}
                  >
                    {project.name}
                  </h2>
                  <p className="gsap-card-tagline">{project.tagline}</p>
                  <p className="gsap-card-desc">{project.description}</p>
                  
                  <div className="card-specs-mini-row">
                    <div className="mini-spec-item">
                      <span className="mini-spec-lbl">AREA</span>
                      <span className="mini-spec-val">{project.area}</span>
                    </div>
                    <div className="mini-spec-item">
                      <span className="mini-spec-lbl">STATUS</span>
                      <span className="mini-spec-val">COMPLETED</span>
                    </div>
                  </div>

                  <button 
                    className="know-more-btn"
                    onClick={() => onSelectProject(project)}
                  >
                    EXPLORE PROJECT DETAILS <ArrowRight size={15} style={{ marginLeft: '6px' }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PastProjects;
