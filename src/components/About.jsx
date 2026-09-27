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
                  Design was never just a career choice for me — it was something I had always been drawn to.
                </p>
                <p>
                  Since my school days, I knew I wanted to be in the design field. I was just 13 when my family moved into a new home, and I ended up designing the entire space myself. I had an instinct for visualising spaces and figuring out how things could come together. It was around that time that my father also realised that I had a natural inclination towards design.
                </p>
                <p>
                  But, like many young people, I was encouraged to choose a more conventional and secure career path. I took admission into an engineering college and eventually got placed through my B.Tech.
                </p>
                <p className="emphasis-quote-line">
                  <em>But I never joined that job.</em>
                </p>
                <p>
                  I knew deep down that engineering wasn’t where my heart was. I decided to take a chance on what I had always wanted to do and enrolled in a course in Interior Design.
                </p>
                <p>
                  During the course, my teacher told me about a job opportunity at a design company in Gurgaon. I remember telling him that I wanted to build something of my own. He encouraged me to simply attend the interview and see where the opportunity took me.
                </p>
                <p>
                  I joined the company as a Drafting Designer and spent a year working in Gurgaon. That year became an important part of my journey. It gave me my first real experience of working in the design industry and taught me how much there is to learn beyond the classroom.
                </p>
                <p>
                  Eventually, I decided it was time to take the leap and start working independently.
                </p>
                <p>
                  My first project came through someone in my family. Then a friend reached out and asked me to help with their space. One project led to another, and slowly, through word of mouth, trust and the work I put into every project, Preeti Sethi Designs began to grow.
                </p>
                <p>
                  There was no roadmap to follow. I was building something in a field where I didn’t have a family background or an existing network of people who could guide me. I had to learn by doing — understanding clients, drawings, materials, vendors, execution, site management and everything in between.
                </p>
                <p>
                  The journey has been a roller coaster.
                </p>
                <p>
                  There have been long days, countless late nights and moments when things didn’t go according to plan. There were times when I had to figure things out on my own, but every challenge taught me something and made me better at what I do.
                </p>
                <p>
                  What started with a 13-year-old girl designing her home eventually became a design studio built around the same belief I had back then — that a space should not just look beautiful; it should feel like it belongs to the people who live in it.
                </p>
                <p>
                  Today, together with my husband and co-founder, <strong>Shivam Nagpal</strong>, I continue to build Preeti Sethi Designs with the same passion — offering design consultation, bespoke furniture, turnkey projects and site supervision.
                </p>
                <p>
                  For us, every project is an opportunity to understand our client’s vision and turn it into a space they can truly connect with.
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
                  src="/shivamnagpal.jpeg" 
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
