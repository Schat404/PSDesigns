import React from 'react';
import { projectsData } from '../data/projectsData';

function ProjectsCarousel({ onSelectProject }) {
  // Use the canonical 5 projects and duplicate for seamless infinite autoscroll
  const doubledList = [...projectsData, ...projectsData];

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
                <img src={project.image} alt={project.name} loading="lazy" />
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
