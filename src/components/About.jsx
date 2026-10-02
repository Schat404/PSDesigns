import React from 'react';
import { Award, Sparkles, Compass, Hammer, Key, Armchair, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

function About({ onNavigate }) {
  const services = [
    {
      title: "Design Consultation",
      icon: <Compass size={28} strokeWidth={1.5} />,
      description: "Thoughtful design guidance tailored to your space, lifestyle, aesthetic, and requirements—from concepts and layouts to materials and finishes."
    },
    {
      title: "Bespoke Furniture",
      icon: <Armchair size={28} strokeWidth={1.5} />,
      description: "Custom-designed furniture created specifically for your space, combining functionality, craftsmanship, and refined design."
    },
    {
      title: "Site Supervision & Management",
      icon: <ShieldCheck size={28} strokeWidth={1.5} />,
      description: "We visit and manage the site to ensure that the design is executed correctly. From coordinating with contractors and labour to monitoring workmanship, materials, measurements, and progress, we stay involved to maintain the quality and intent of the design."
    },
    {
      title: "Turnkey Projects",
      icon: <Key size={28} strokeWidth={1.5} />,
      description: "Complete interior solutions, from design and planning to execution and final handover, with every detail managed under one roof."
    }
  ];

  return (
    <div className="about-container animate-fade-in">
      
      {/* Hero Banner */}
      <section className="about-hero">
        <span className="about-pill-badge">ABOUT US</span>
        <h1 className="about-title">Paradise for those who connect.</h1>
        <p className="about-subtitle">
          At Preeti Sethi Designs, we believe every client deserves a space that feels like their own little paradise.
        </p>
        <div className="accent-line"></div>
      </section>

      {/* Studio Introduction Card */}
      <section className="about-intro-section">
        <div className="about-intro-card">
          <div className="intro-text-content">
            <h2 className="intro-heading">A Shared Vision for Timeless Spaces</h2>
            <p className="intro-para">
              Founded by <strong>Preeti Sethi</strong> and <strong>Shivam Nagpal</strong>, our studio was built with a shared vision—to create spaces that are beautiful, functional, personal, and deeply connected to the people who experience them.
            </p>
            <p className="intro-para">
              As the <strong>Founder & Creative Director</strong>, Preeti leads the creative vision of the studio. Her approach begins with understanding the client—their personality, lifestyle, aspirations, and the way they want their space to feel.
            </p>
            <p className="intro-para">
              <strong>Shivam Nagpal, Co-Founder</strong>, works alongside Preeti, bringing a strong focus on management, coordination, client relationships, and execution to ensure that every design vision is brought to life seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section">
        <div className="section-header-center">
          <span className="section-eyebrow">OUR EXPERTISE</span>
          <h2 className="section-title">What We Do</h2>
          <div className="accent-line-small"></div>
        </div>

        <div className="what-we-do-grid">
          {services.map((srv, idx) => (
            <div key={idx} className="service-pillar-card">
              <div className="service-icon-box">
                {srv.icon}
              </div>
              <span className="service-index-num">0{idx + 1}</span>
              <h3 className="service-card-title">{srv.title}</h3>
              <p className="service-card-desc">{srv.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Co-Founders Section */}
      <section className="founders-showcase-section">
        <div className="section-header-center">
          <span className="section-eyebrow">LEADERSHIP</span>
          <h2 className="section-title">Meet The Co-Founders</h2>
          <div className="accent-line-small"></div>
        </div>

        {/* Founder 1: Preeti Sethi */}
        <div className="founder-feature-card">
          <div className="founder-feature-grid">
            <div className="founder-visual-col">
              <div className="founder-image-frame">
                <img 
                  src="/preetisethi.png" 
                  alt="Preeti Sethi Founder & Creative Director" 
                  className="founder-main-photo" 
                  loading="lazy" 
                />
                <div className="founder-badge-tag">
                  <Award size={18} />
                  <span>FOUNDER & CREATIVE DIRECTOR</span>
                </div>
              </div>
              <div className="founder-quick-meta">
                <h3>PREETI SETHI</h3>
                <p>Founder & Creative Director</p>
              </div>
            </div>

            <div className="founder-story-col">
              <span className="founder-kicker">THE STORY BEHIND PREETI SETHI DESIGNS</span>
              <h3 className="founder-story-title">Preeti Sethi</h3>
              
              <div className="founder-story-paragraphs">
                <p>
                  <strong>Preeti Sethi</strong> is the Founder & Creative Director of Preeti Sethi Designs. Her love for design began early—at just 13, she designed her family’s entire home, discovering a natural instinct for transforming spaces.
                </p>
                <p>
                  Though she initially completed a degree in engineering, she chose to follow her true calling, enrolling in Interior Design and gaining valuable industry experience as a drafting designer in Gurgaon.
                </p>
                <p>
                  Taking the leap into independent practice, Preeti built the studio from the ground up through dedication, craftsmanship, and word-of-mouth trust across Delhi NCR.
                </p>
                <p>
                  Her design philosophy centers on creating environments that are not only aesthetically breathtaking, but deeply personal, functional, and reflective of the people who live in them.
                </p>
                <p>
                  Today, alongside co-founder <strong>Shivam Nagpal</strong>, she leads the studio delivering bespoke luxury residences, custom furniture manufacturing, and turnkey architectural execution.
                </p>
                <p>
                  For Preeti, every project is a heartfelt canvas—crafting timeless sanctuaries where people truly feel connected and at home.
                </p>
              </div>

              <div className="founder-signature-wrap">
                <div className="signature-brand-name">Preeti Sethi Designs</div>
                <div className="signature-tagline">Paradise for those who connect</div>
              </div>
            </div>
          </div>
        </div>

        {/* Founder 2: Shivam Nagpal */}
        <div className="founder-feature-card" style={{ marginTop: '4rem' }}>
          <div className="founder-feature-grid reverse-on-desktop">
            <div className="founder-visual-col">
              <div className="founder-image-frame">
                <img 
                  src="/shivam nagpal.jpeg" 
                  alt="Shivam Nagpal Co-Founder" 
                  className="founder-main-photo" 
                  loading="lazy" 
                />
                <div className="founder-badge-tag">
                  <Award size={18} />
                  <span>CO-FOUNDER & MANAGEMENT</span>
                </div>
              </div>
              <div className="founder-quick-meta">
                <h3>SHIVAM NAGPAL</h3>
                <p>Co-Founder</p>
              </div>
            </div>

            <div className="founder-story-col">
              <span className="founder-kicker">CO-FOUNDER | PREETI SETHI DESIGNS</span>
              <h3 className="founder-story-title">Shivam Nagpal</h3>
              
              <div className="founder-story-paragraphs">
                <p>
                  <strong>Shivam Nagpal</strong> is the Co-Founder of Preeti Sethi Designs, bringing together a strong understanding of design, materials, execution, and the business of creating exceptional spaces.
                </p>
                <p>
                  His design philosophy is rooted in clarity, functionality, craftsmanship, and attention to detail. He believes that truly impactful interiors are created when aesthetics and practicality work seamlessly together.
                </p>
                <p>
                  From concept development and material exploration to detailing, execution, and final delivery, Shivam takes a hands-on approach to ensure that every element contributes to the overall vision of a project.
                </p>
                <p>
                  At Preeti Sethi Designs, he works alongside the design team and clients to translate ideas into distinctive, refined, and purposeful environments—spaces that are contemporary yet timeless, and designed around the people who experience them.
                </p>
                <p>
                  With a growing focus on innovative materials, bespoke finishes, custom fabrication, and modern design solutions, Shivam continues to explore new possibilities in the world of interior design.
                </p>
                <p>
                  Design, to him, is not simply about creating beautiful spaces—it is about creating spaces with character, purpose, and lasting impact.
                </p>
              </div>

              <div className="founder-signature-wrap">
                <div className="signature-brand-name">Preeti Sethi Designs</div>
                <div className="signature-tagline">Paradise for those who connect</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Philosophy & Closing Statement */}
      <section className="philosophy-manifesto-section">
        <div className="manifesto-card">
          <span className="manifesto-badge">OUR CORE BELIEF</span>
          <h2 className="manifesto-heading">
            "We believe interior design is not simply about colours, materials, or furniture. It is about creating an atmosphere that makes you feel something—a sense of comfort, belonging, luxury, and happiness."
          </h2>
          
          <div className="manifesto-divider"></div>
          
          <p className="manifesto-body">
            My belief is simple: when a client walks into their finished space, they shouldn’t just see a beautifully designed interior. They should feel like they have entered their own paradise.
          </p>
          <p className="manifesto-subbody">
            That belief is at the heart of everything we create.
          </p>

          <div className="manifesto-punchline">
            <span className="punchline-top">We don’t just design spaces.</span>
            <span className="punchline-bottom">We create your paradise.</span>
          </div>

          <div className="manifesto-footer-brand">
            <h4>Preeti Sethi Designs</h4>
            <p>Paradise for those who connect</p>
          </div>

          <div className="manifesto-cta-wrap">
            <button className="cta-gold-btn" onClick={() => onNavigate('contact')}>
              START YOUR PROJECT WITH US <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
