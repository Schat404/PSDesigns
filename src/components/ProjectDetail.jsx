import React from 'react';
import { ArrowLeft, Compass, Calendar, MapPin, ZoomIn } from 'lucide-react';

function ProjectDetail({ project, onBack }) {
  if (!project) return null;

  return (
    <div className="project-detail-container animate-fade-in">
      {/* Back button */}
      <button className="back-btn" onClick={onBack}>
        <ArrowLeft size={16} /> BACK TO PAST PROJECTS
      </button>

      {/* Main detail grid - Essajees style */}
      <div className="detail-header-grid">
        <div className="detail-title-col">
          <h1 className="detail-name">{project.name}</h1>
          <p className="detail-tagline-text">{project.tagline}</p>
          <div className="detail-description-box">
            <p>{project.description}</p>
            <p className="mt-4 text-almond">
              This space was approved and executed based on our client's bespoke design brief. We prioritized clean geometric patterns, premium ambient integration, and tailored layout elements.
            </p>
          </div>
        </div>

        <div className="detail-specs-col">
          <div className="spec-item">
            <span className="spec-label">CATEGORY</span>
            <span className="spec-value">{project.category}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">YEAR</span>
            <span className="spec-value">{project.year}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">LOCATION</span>
            <span className="spec-value">{project.location}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">AREA SIZE</span>
            <span className="spec-value">{project.area}</span>
          </div>
        </div>
      </div>

      {/* Large Featured Image Showcase */}
      <div className="detail-image-gallery">
        <div className="gallery-main-frame">
          <img src={project.image} alt={project.name} className="gallery-hero-img" />
          <div className="gallery-watermark">PS DESIGNS</div>
        </div>

        {/* Placeholder sub-sections representing details of the room */}
        <div className="gallery-sub-grid">
          <div className="sub-grid-card">
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600" 
              alt="Detail perspective 1" 
              className="gallery-sub-img" 
            />
            <div className="sub-card-label">Detail Perspective 1</div>
          </div>
          <div className="sub-grid-card">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600" 
              alt="Material details" 
              className="gallery-sub-img" 
            />
            <div className="sub-card-label">Material Details</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
