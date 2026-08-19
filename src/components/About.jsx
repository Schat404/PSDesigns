import React from 'react';
import { Mail, Phone, MapPin, Award } from 'lucide-react';

function About({ onNavigate }) {
  return (
    <div className="about-container animate-fade-in">
      {/* Title & Banner */}
      <section className="about-hero">
        <h1 className="about-title">OUR STORY</h1>
        <p className="about-subtitle">Sharing a story of perseverance, passion, and progress.</p>
        <div className="accent-line"></div>
      </section>

      {/* Brochure Story Content */}
      <section className="story-content-section">
        <div className="story-grid">
          <div className="story-image-side">
            <div className="story-img-wrapper">
              <img src="/brochure-4.jpeg" alt="Preti Sethi Principal Designer" className="designer-portrait" />
              <div className="portrait-badge">
                <Award size={20} />
                <span>ESTABLISHED STUDIO</span>
              </div>
            </div>
            <div className="designer-tag">
              <h3>PRETI SETHI</h3>
              <p>Founder & Principal Designer</p>
            </div>
          </div>
          
          <div className="story-text-side">
            <h2 className="story-heading">Preti Sethi</h2>
            <h3 className="story-subheading">Founder & Lead Visionary</h3>
            <p className="story-para">
              Preti Sethi is the founder of <strong>PS Designs</strong>. The name of our studio is not just a brand; it's a reflection of her identity and her passion for designs. When she began this journey, it was marked by limited resources but boundless enthusiasm. When she started, it was a time when there was no office to call our own.
            </p>
            <p className="story-para">
              This journey from <strong>One to a team of Ten</strong> and growing showcases our commitment to excellence and the trust of our clients, who have made this journey possible.
            </p>
            <p className="story-para">
              One of the proudest moments in our journey was when we opened our very own office in the heart of the nation, Delhi. This office is more than just a physical space; it's a symbol of our growth, creativity, and innovation. It represents our dedication to delivering exceptional design experiences to our clients.
            </p>
            <div className="metrics-grid">
              <div className="metric-box">
                <span className="metric-num">10+</span>
                <span className="metric-label">Design Experts</span>
              </div>
              <div className="metric-box">
                <span className="metric-num">100%</span>
                <span className="metric-label">Client Trust</span>
              </div>
              <div className="metric-box">
                <span className="metric-num">Delhi</span>
                <span className="metric-label">Design Studio</span>
              </div>
            </div>
            <div className="about-action-btn-row">
              <button className="cta-gold-btn" onClick={() => onNavigate('contact')}>
                CONNECT WITH PRETI
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <h2 className="section-title text-center">OUR PHILOSOPHY</h2>
        <div className="philosophy-grid">
          <div className="phil-card">
            <h4>IDENTITY</h4>
            <p>We craft environments that directly reflect who you are and who you connect with.</p>
          </div>
          <div className="phil-card">
            <h4>INNOVATION</h4>
            <p>Combining traditional layouts with modern bespoke luxury items and tech integration.</p>
          </div>
          <div className="phil-card">
            <h4>GROWTH</h4>
            <p>From a small home workspace to a premium creative studio in Delhi.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
