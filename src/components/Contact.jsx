import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Residential',
        message: ''
      });
    }, 4000);
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
              Have a project in mind or want to consult with our lead designers? Fill out the form or reach us through our direct contact info.
            </p>

            <div className="info-items-list">
              <div className="info-item">
                <Phone className="info-icon" size={24} />
                <div>
                  <h4>Call Us</h4>
                  <p>+91 9971891303</p>
                </div>
              </div>
              <div className="info-item">
                <Mail className="info-icon" size={24} />
                <div>
                  <h4>Email Us</h4>
                  <p>p.s.disenos13@gmail.com</p>
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


          </div>

          {/* Premium Form Column */}
          <div className="contact-form-col">
            {submitted ? (
              <div className="success-message animate-fade-in">
                <Check size={48} className="success-icon" />
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. Preeti Sethi or one of our design executives will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="premium-form">
                <div className="form-group">
                  <label htmlFor="name">NAME</label>
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
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="name@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">PHONE NUMBER</label>
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
                  <label htmlFor="projectType">PROJECT TYPE</label>
                  <select 
                    id="projectType" 
                    name="projectType" 
                    value={formData.projectType} 
                    onChange={handleChange}
                  >
                    <option value="Residential">Residential Design</option>
                    <option value="Commercial">Commercial Design</option>
                    <option value="Bespoke Furniture">Bespoke Furniture</option>
                    <option value="Renovation">Renovation & Consultation</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">MESSAGE</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    required 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Describe your design aspirations..."
                  ></textarea>
                </div>
                <button type="submit" className="submit-gold-btn">
                  SEND INQUIRY <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Styled Maps Section */}
      <section className="maps-section">
        <h3 className="section-title text-center mb-4">VISIT OUR DESIGN LAB</h3>
        <div className="map-frame-wrapper">
          {/* Styled premium looking dark Map frame for New Delhi Rohini area */}
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
