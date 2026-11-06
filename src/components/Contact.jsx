import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, ExternalLink, FileText } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential design',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmittedUrl, setLastSubmittedUrl] = useState('');

  const WHATSAPP_PHONE = "919211040483"; // +91 92110 40483
  const GOOGLE_FORM_URL = "https://forms.gle/Awjx7mH9VbFLgkae7";
  const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSeSVBk2-NXF74NONdqEeVn1e8sEIijFYtuHT90b_mITbSxj2Q/formResponse";
  const MAPS_LOCATION_URL = "https://maps.app.goo.gl/rpQ1vKZArSL7VQJw8";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Silent background sync to Google Form so inquiries are safely stored
    try {
      const formPayload = new URLSearchParams();
      formPayload.append('entry.1224683238', formData.name);
      formPayload.append('entry.17492699', formData.phone);
      formPayload.append('entry.1588450503', formData.projectType);
      
      const fullMessage = formData.email 
        ? `${formData.message}\n\nClient Email: ${formData.email}` 
        : formData.message;
      formPayload.append('entry.1328396079', fullMessage);

      fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formPayload.toString()
      }).catch(() => {});
    } catch (err) {
      // ignore silent sync errors
    }

    // Format WhatsApp inquiry text
    const textLines = [
      `*New Design Inquiry — Preeti Sethi Designs*`,
      ``,
      `*Name:* ${formData.name}`,
      formData.email ? `*Email:* ${formData.email}` : null,
      `*Phone / WhatsApp:* ${formData.phone}`,
      `*Project Type:* ${formData.projectType}`,
      ``,
      `*Requirements:*`,
      formData.message
    ].filter(Boolean).join('\n');

    const whatsappApiUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(textLines)}`;
    setLastSubmittedUrl(whatsappApiUrl);

    // Direct redirect using WhatsApp API
    const opened = window.open(whatsappApiUrl, '_blank');
    if (!opened) {
      window.location.href = whatsappApiUrl;
    }

    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-container animate-fade-in">
      <section className="contact-hero">
        <h1 className="contact-title">CONNECT WITH US</h1>
        <p className="contact-subtitle">Let's discuss how we can turn your space into a masterpiece.</p>
        <div className="accent-line"></div>
      </section>

      <section className="contact-main-section">
        <div className="contact-grid">
          {/* Details Column */}
          <div className="contact-info-col">
            <h2 className="info-title">STUDIO DETAILS</h2>
            <p className="info-desc">
              Have a project in mind or want to consult with our lead designers? Fill out our inquiry form or reach us directly.
            </p>

            <div className="info-items-list">
              <div className="info-item">
                <Phone className="info-icon" size={24} />
                <div>
                  <h4>Call Us</h4>
                  <p><a href="tel:+919211040483" style={{ color: 'inherit', textDecoration: 'none' }}>+91 92110 40483</a></p>
                </div>
              </div>
              <div className="info-item">
                <a href="mailto:admin@preetisethidesigns.com" className="info-icon" aria-label="Email Us" style={{ display: 'inline-flex', color: 'inherit', textDecoration: 'none' }}>
                  <Mail size={24} />
                </a>
                <div>
                  <h4>Email Us</h4>
                  <p><a href="mailto:admin@preetisethidesigns.com" style={{ color: 'inherit', textDecoration: 'none' }}>admin@preetisethidesigns.com</a></p>
                </div>
              </div>
              <div className="info-item">
                <MapPin className="info-icon" size={24} />
                <div>
                  <h4>Our Studio</h4>
                  <p>23, Pocket 19, Sector 24, Rohini - 110085</p>
                  <a 
                    href={MAPS_LOCATION_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ fontSize: '0.82rem', color: 'var(--text-gold)', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '6px', textDecoration: 'none', fontWeight: 500 }}
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Google Form Card */}
            <div className="google-form-direct-card">
              <div className="gform-badge">
                <FileText size={16} />
                <span>OFFICIAL INQUIRY FORM</span>
              </div>
              <h4 className="gform-title">Prefer Google Forms?</h4>
              <p className="gform-desc">
                You can also submit your requirements directly on our dedicated Google Form portal.
              </p>
              <a 
                href={GOOGLE_FORM_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="gform-direct-btn"
              >
                OPEN GOOGLE FORM <ExternalLink size={15} style={{ marginLeft: '6px' }} />
              </a>
            </div>
          </div>

          {/* Premium Form Column */}
          <div className="contact-form-col">
            {submitted ? (
              <div className="success-message animate-fade-in">
                <Check size={48} className="success-icon" />
                <h3>Redirecting to WhatsApp!</h3>
                <p>Your inquiry details have been formatted for direct consultation with our lead designers on WhatsApp (+91 92110 40483).</p>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {lastSubmittedUrl && (
                    <a 
                      href={lastSubmittedUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="submit-gold-btn" 
                      style={{ padding: '0.75rem 1.6rem', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                    >
                      <span>OPEN WHATSAPP CHAT</span>
                      <ExternalLink size={15} />
                    </a>
                  )}
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectType: 'Residential design',
                        message: ''
                      });
                    }} 
                    className="gform-direct-btn" 
                    style={{ padding: '0.75rem 1.6rem' }}
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="premium-form">
                <div className="form-group">
                  <label htmlFor="name">NAME *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="name@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">PHONE / WHATSAPP NUMBER *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="projectType">PROJECT TYPE *</label>
                  <select 
                    id="projectType" 
                    name="projectType" 
                    value={formData.projectType} 
                    onChange={handleChange}
                  >
                    <option value="Residential design">Residential design</option>
                    <option value="Commercial design">Commercial design</option>
                    <option value="Bespoke furniture">Bespoke furniture</option>
                    <option value="3D visualization">3D visualization</option>
                    <option value="Renovation & consultation">Renovation & consultation</option>
                    <option value="Space planning">Space planning</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">WHAT ARE YOU LOOKING FOR? *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    required 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Describe your design aspirations, site details, timeline..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="submit-gold-btn" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'CONNECTING...' : (
                    <>SEND INQUIRY <Send size={16} /></>
                  )}
                </button>

                <p className="form-destination-note">
                  Direct WhatsApp consultation: <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}`} target="_blank" rel="noopener noreferrer">+91 92110 40483</a> | Form records to: <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">forms.gle/Awjx7mH9VbFLgkae7</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Styled Maps Section */}
      <section className="maps-section">
        <h3 className="section-title text-center mb-4">VISIT OUR DESIGN LAB</h3>
        <div className="map-frame-wrapper">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.0140784136456!2d77.0941795758367!3d28.724776479035687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07897199ac93%3A0xb629b04768b95d48!2spreetisethidesgins!5e0!3m2!1sen!2sin!4v1730900000000!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Preeti Sethi Designs Studio Location on Google Maps"
          ></iframe>
        </div>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <a 
            href={MAPS_LOCATION_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="gform-direct-btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.8rem 1.8rem', textDecoration: 'none' }}
          >
            <MapPin size={16} />
            <span>OPEN IN GOOGLE MAPS</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;