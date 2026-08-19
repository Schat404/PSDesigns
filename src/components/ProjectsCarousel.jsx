import React from 'react';

function ProjectsCarousel({ onSelectProject }) {
  // 6 projects to auto-scroll at the bottom of every page
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

  // Double list to allow infinite seamless autoscroll wrap
  const doubledList = [...projectsList, ...projectsList];

  return (
    <section className="bottom-projects-carousel">
      <div className="carousel-header">
        <h3>VIEW OUR PROJECTS</h3>
      </div>
      <div className="bottom-carousel-track-wrapper">
        <div className="bottom-carousel-track">
          {doubledList.map((project, index) => (
            <div 
              key={`${project.id}-${index}`} 
              className="bottom-project-card"
              onClick={() => onSelectProject(project)}
            >
              <div className="bottom-frame">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="bottom-info">
                <h4 className="bottom-title">{project.name}</h4>
                <p className="bottom-location">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsCarousel;
