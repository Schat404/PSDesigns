import React from 'react';
import { ArrowLeft } from 'lucide-react';

function PressDetail({ article, onBack }) {
  if (!article) return null;

  return (
    <div className="press-page-container animate-fade-in">
      <button className="back-btn" onClick={onBack}>
        <ArrowLeft size={16} /> BACK TO HOME
      </button>

      <div className="detail-header-grid">
        <div className="detail-title-col">
          <span className="proj-category">PRESS & MEDIA</span>
          <h1 className="detail-name">{article.title}</h1>
          <span className="spec-value" style={{ fontSize: '0.9rem', color: 'var(--text-gold)' }}>{article.date}</span>
        </div>
      </div>

      <div className="detail-image-gallery" style={{ marginTop: '3rem' }}>
        <div className="gallery-main-frame">
          <img src={article.image} alt={article.title} className="gallery-hero-img" loading="lazy" />
        </div>
        <div className="detail-description-box" style={{ maxWidth: '800px', margin: '2rem auto 0' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '2', color: 'var(--text-primary)' }}>
            {article.fullText}
          </p>
          <p style={{ marginTop: '2rem', fontStyle: 'italic', color: 'var(--accent-bronze)' }}>
            Originally published in print and online media. For press inquiries, please contact our Delhi studio.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PressDetail;
