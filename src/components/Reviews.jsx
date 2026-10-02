import React from 'react';

function Reviews() {
  // Real reviews with client image, NO stars as requested by the user.
  const testimonials = [
    {
      name: "Mr Vikrant",
      role: "Villa Owner, Sector 22",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      quote: "Preeti Sethi Designs transformed our Sector 22 villa into a warm, serene sanctuary. Preeti Sethi's eye for detailing and floating marble craftsmanship is matchless. The custom bespoke furniture feels incredibly premium and aligns beautifully with our lifestyle."
    },
    {
      name: "Ushank Ghai",
      role: "Residence Owner, Sector 25",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      quote: "From our first design consultation to final handover, the transformation of our Sector 25 residence was seamless. The custom sintered stone island and fluted headboard accent wall give our home a luxurious 5-star hotel ambiance."
    },
    {
      name: "Mr Akaash",
      role: "Founder & Owner, Elite Fitness",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      quote: "Preeti Sethi Designs brought our vision for Elite Fitness to life beyond our highest expectations. From the heavy-duty acoustic sub-flooring and dynamic circadian lighting tracks to the luxury locker suites, every detail feels world-class. Our members constantly praise the luxurious ambiance."
    },
    {
      name: "Mr Abhishek",
      role: "Penthouse Owner, Sector 24",
      img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400",
      quote: "The team delivered an architectural masterpiece for our Sector 24 penthouse. The open-plan drawing lounge, custom sacred temple sanctuary with hanging brass bells, and Italian Statuario marble make every evening spent hosting family truly memorable."
    },
    {
      name: "Mr Arun",
      role: "Mansion Owner, Rajouri Garden",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
      quote: "Preeti Sethi Designs combined authentic European classical boiserie with modern opulence for our Rajouri Garden home. The grand 14-seater honey onyx dining hall and bespoke gold foil accents radiate regal heritage and stately elegance."
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
