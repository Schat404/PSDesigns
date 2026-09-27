import React from 'react';

function Reviews() {
  // Real reviews with client image, NO stars as requested by the user.
  const testimonials = [
    {
      name: "Rishi & Neha Kapoor",
      role: "Merlon Residence Owner",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      quote: "Preeti Sethi Designs transformed our empty villa into a warm, gorgeous sanctuary. Preeti Sethi's eye for detailing is matchless. The custom bespoke furniture feels incredibly premium and aligns beautifully with our lifestyle."
    },
    {
      name: "Ananya Malhotra",
      role: "Corporate Executive, Drawing Room Renovation",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      quote: "From our first consultation to hand-over, the journey was stress-free and exciting. The blend of deep bronze aesthetics and gold trim gives our drawing room a regal feel. Truly paradise for those who connect!"
    },
    {
      name: "Kabir Shergill",
      role: "Homeowner, Modern Washroom & Gym Project",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      quote: "Exceptional space utilization. They designed both our state-of-the-art home gym and guest washroom using gorgeous luxury marble overlays. Subtle, high-end designs without unnecessary clutter."
    },
    {
      name: "Dr. Shruti Sen",
      role: "Kitchen & Room 2 Renovation",
      img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400",
      quote: "Working with a team of female design leaders was empowering and inspiring. They understood our requirement for kitchen functional details perfectly while keeping the luxury aspect fully intact."
    }
  ];

  return (
    <div className="reviews-container animate-fade-in">
      <section className="reviews-hero">
        <h1 className="reviews-title">CLIENT TESTIMONIES</h1>
        <p className="reviews-subtitle">Real experiences shared by clients who value detail and elegance.</p>
        <div className="accent-line"></div>
      </section>

      <section className="reviews-grid-section">
        <div className="reviews-masonry">
          {testimonials.map((t, idx) => (
            <div key={idx} className="review-card">
              <div className="quote-mark">“</div>
              <p className="review-quote">{t.quote}</p>
              <div className="client-profile">
                <img src={t.img} alt={t.name} className="client-avatar" loading="lazy" />
                <div className="client-meta">
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Reviews;
