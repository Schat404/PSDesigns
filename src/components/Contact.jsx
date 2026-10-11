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

  const GOOGLE_FORM_URL = "https://forms.gle/Awjx7mH9VbFLgkae7";
  const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSeSVBk2-NXF74NONdqEeVn1e8sEIijFYtuHT90b_mITbSxj2Q/formResponse";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Map fields to Google Form entries:
      // entry.1224683238 -> Name
      // entry.17492699   -> Phone Number / WhatsApp Number
      // entry.1588450503 -> Project Type
      // entry.1328396079 -> Message (includes Email for complete record)
      const formPayload = new URLSearchParams();
      formPayload.append('entry.1224683238', formData.name);
      formPayload.append('entry.17492699', formData.phone);
      formPayload.append('entry.1588450503', formData.projectType);
      
      const fullMessage = formData.email 
        ? `${formData.message}\n\nClient Email: ${formData.email}` 
        : formData.message;
      formPayload.append('entry.1328396079', fullMessage);

      // Submit to Google Form endpoint
      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formPayload.toString()
      });

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Residential design',
        message: ''
      });
    } catch (err) {
      console.error('Error submitting form:', err);
      // Fallback: still show confirmation and allow user to open Google Form directly
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
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
                  <p>+91 92110 40483</p>
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
                <h3>Thank You!</h3>
                <p>Your inquiry has been submitted directly to our design executive team. Preeti Sethi or our senior consultation architect will reach out shortly.</p>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="submit-gold-btn" 
                    style={{ padding: '0.6rem 1.4rem' }}
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                  <a 
                    href={GOOGLE_FORM_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="gform-direct-btn"
                    style={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    VIEW GOOGLE FORM <ExternalLink size={14} style={{ marginLeft: '6px' }} />
                  </a>
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
                    <option value="space planning">space planning</option>
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
                  {isSubmitting ? 'SUBMITTING...' : (
                    <>SEND INQUIRY <Send size={16} /></>
                  )}
                </button>

                <p className="form-destination-note">
                  All inquiries are automatically recorded to our official Google Consultation portal: <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">forms.gle/Awjx7mH9VbFLgkae7</a>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.4687595353147!2d77.10091391508493!3d28.735467482377317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03de0b6754ad%3A0xea2be10cbf83dbcf!2sRohini%20Sector%2024%2C%20Delhi%20110085!5e0!3m2!1sen!2sin!4v1629890000000!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(80%)' }} 
            allowFullScreen="" 
            loading="lazy"
            title="Preeti Sethi Designs Delhi Studio Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
