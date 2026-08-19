import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function PastProjects({ onSelectProject }) {
  const containerRef = useRef(null);

  const projectsList = [
    {
      id: "drawing-room",
      name: "Drawing Room",
      category: "LIVING SPACE",
      year: "2026",
      location: "DELHI / NCR",
      area: "1,200 sq. ft.",
      image: "/brochure-1.jpeg",
      tagline: "Paradise for those who connect.",
      description: "A luxury lounge combining golden ambient lights, bespoke plush velvet seating, and custom ceiling work designed to invoke connection and luxury."
    },
    {
      id: "common-washroom",
      name: "Common Washroom",
      category: "RESIDENTIAL",
      year: "2025",
      location: "GURUGRAM",
      area: "350 sq. ft.",
      image: "/brochure-2.jpeg",
      tagline: "Modern elegance in private spaces.",
      description: "Featuring floating custom marble vanities, deep bronze accents, and clean concealed ambient lines that elevate private spaces into luxury hotels."
    },
    {
      id: "kitchen",
      name: "Kitchen",
      category: "CULINARY INTERIOR",
      year: "2026",
      location: "NEW DELHI",
      area: "650 sq. ft.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
      tagline: "Innovative kitchen functionality.",
      description: "Crafted with smart concealed drawers, premium stone finishes, and beautiful backsplashes that unite form and utility."
    },
    {
      id: "room-1",
      name: "Room 1",
      category: "MASTER BEDROOM",
      year: "2025",
      location: "NOIDA",
      area: "800 sq. ft.",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800",
      tagline: "Bespoke royal master suite.",
      description: "Warm layered bedding, wheat gold headboard accents, and beautiful custom panel designs reflecting quiet luxury."
    },
    {
      id: "room-2",
      name: "Room 2",
      category: "GUEST BEDROOM",
      year: "2026",
      location: "DELHI",
      area: "600 sq. ft.",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800",
      tagline: "Artful guest luxury bedroom.",
      description: "Sleek textures and almond beige furniture. Created with clean lines, functional wardrobes, and regal detailing."
    },
    {
      id: "room-3",
      name: "Room 3",
      category: "CHILDREN'S SUITE",
      year: "2025",
      location: "ROHINI",
      area: "550 sq. ft.",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800",
      tagline: "Creative luxury children's room.",
      description: "Vibrant custom reading niches, ergonomic layout details, and playful premium materials."
    },
    {
      id: "gym",
      name: "Gym",
      category: "WELLNESS STUDIO",
      year: "2026",
      location: "SOUTH DELHI",
      area: "900 sq. ft.",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800",
      tagline: "Modern residential wellness gym.",
      description: "A private training room featuring mirrored panels, dedicated sound isolation, and high-end wooden flooring."
    }
  ];

  useEffect(() => {
    // Highly optimized CSS-transform based GSAP stacking
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
        <h1 className="projects-title-small">PAST PROJECTS</h1>
        <p className="projects-subtitle-small">Exploring scale, detailing, and identity across residential designs.</p>
        <div className="accent-line-small"></div>
      </section>

      {/* GSAP Stacked Cards Container */}
      <div className="gsap-stacked-cards-container">
        {projectsList.map((project, idx) => (
          <div key={project.id} className="gsap-card" style={{ zIndex: idx + 1 }}>
            <div className="gsap-card-inner">
              <div className="gsap-card-grid">
                <div 
                  className="gsap-card-visual"
                  onClick={() => onSelectProject(project)}
                >
                  <img src={project.image} alt={project.name} loading="lazy" />
                  <div className="gsap-card-badge">{project.category}</div>
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
                  <button 
                    className="know-more-btn"
                    onClick={() => onSelectProject(project)}
                  >
                    VIEW FULL DETAILS
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
