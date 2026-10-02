import React from 'react';

function Reviews() {
  const testimonials = [
    {
      name: "Mr Vikrant",
      quote: "Preeti Sethi Designs transformed our Sector 22 villa into a warm, serene sanctuary. Preeti Sethi's eye for detailing and floating marble craftsmanship is matchless. The custom bespoke furniture feels incredibly premium and aligns beautifully with our lifestyle."
    },
    {
      name: "Ushank Ghai",
      quote: "From our first design consultation to final handover, the transformation of our Sector 25 residence was seamless. The custom sintered stone island and fluted headboard accent wall give our home a luxurious 5-star hotel ambiance."
    },
    {
      name: "Mr Akaash",
      quote: "Preeti Sethi Designs brought our vision for Elite Fitness to life beyond our highest expectations. From the heavy-duty acoustic sub-flooring and dynamic circadian lighting tracks to the luxury locker suites, every detail feels world-class. Our members constantly praise the luxurious ambiance."
    },
    {
      name: "Mr Abhishek",
      quote: "The team delivered an architectural masterpiece for our Sector 24 penthouse. The open-plan drawing lounge, custom sacred temple sanctuary with hanging brass bells, and Italian Statuario marble make every evening spent hosting family truly memorable."
    },
    {
      name: "Mr Arun",
      quote: "Preeti Sethi Designs combined authentic European classical boiserie with modern opulence for our Rajouri Garden home. The grand 14-seater honey onyx dining hall and bespoke gold foil accents radiate regal heritage and stately elegance."
    }
  ];

  const getInitial = (name) => {
    const cleaned = name.replace(/^Mr\.?\s+/i, '').trim();
    return (cleaned || name).charAt(0).toUpperCase();
  };

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
                <div className="client-avatar-initial" aria-label={t.name}>
                  {getInitial(t.name)}
                </div>
                <div className="client-meta">
                  <h4>{t.name}</h4>
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
