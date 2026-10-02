import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import PastProjects from './components/PastProjects';
import ProjectDetail from './components/ProjectDetail';
import PressDetail from './components/PressDetail';
import ProjectsCarousel from './components/ProjectsCarousel';
import Preloader from './components/Preloader';
import { AnimatePresence } from 'framer-motion';
import { Camera, Mail, Phone, ChevronRight, Menu, X, ArrowUpRight } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home'); // home, about, contact, reviews, projects, project-detail, press-detail
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedPress, setSelectedPress] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Auto-scrolling slide index for testimonials
  const [currentSlide, setCurrentSlide] = useState(0);

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

  // Testimonials auto scroll controller
  useEffect(() => {
    if (currentPage !== 'home') return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentPage, testimonials.length]);

  // Auto scroll to top on mount and page transition
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentPage]);

  const navigateTo = (page, data = null) => {
    setCurrentPage(page);
    if (page === 'project-detail') {
      setSelectedProject(data);
    } else if (page === 'press-detail') {
      setSelectedPress(data);
    }
    setMobileMenuOpen(false);
    setHeaderHidden(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderBreadcrumbs = () => {
    if (currentPage === 'home') return null;

    const pathMap = {
      about: 'About Us',
      contact: 'Contact Us',
      reviews: 'Reviews',
      projects: 'Past Projects',
      'project-detail': 'Past Projects',
      'press-detail': 'Awards & Press'
    };

    return (
      <div className="breadcrumbs-container">
        <span onClick={() => navigateTo('home')} className="breadcrumb-link">Home</span>
        <ChevronRight size={14} className="breadcrumb-separator" />
        {currentPage === 'project-detail' ? (
          <>
            <span onClick={() => navigateTo('projects')} className="breadcrumb-link">{pathMap['projects']}</span>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <span className="breadcrumb-current">{selectedProject?.name}</span>
          </>
        ) : currentPage === 'press-detail' ? (
          <>
            <span onClick={() => navigateTo('home')} className="breadcrumb-link">Home</span>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <span className="breadcrumb-current">{selectedPress?.title}</span>
          </>
        ) : (
          <span className="breadcrumb-current">{pathMap[currentPage]}</span>
        )}
      </div>
    );
  };

  return (
    <div className="app-wrapper">
      {/* First-time Load Preloader Animation */}
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Live progress bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>

      {/* Ribbon Header (Mercedes Benz India Style Centered Logo Layout) */}
      <header className="regal-header">
        <div className="header-container">
          {/* Left Nav */}
          <nav className="header-nav-left">
            <button 
              className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => navigateTo('home')}
            >
              HOME
            </button>
            <button 
              className={`nav-btn ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => navigateTo('about')}
            >
              ABOUT
            </button>
            <button 
              className={`nav-btn ${currentPage === 'projects' || currentPage === 'project-detail' ? 'active' : ''}`}
              onClick={() => navigateTo('projects')}
            >
              PAST PROJECTS
            </button>
          </nav>

          {/* Centered Logo (No text or subtitle - Logo only) */}
          <div className="header-logo-center" onClick={() => navigateTo('home')}>
            <img src="/logo.png" alt="Preeti Sethi Designs Logo" className="brand-logo-img" />
          </div>

          {/* Right Nav & Icons */}
          <div className="header-right-group">
            <nav className="header-nav-right">
              <button 
                className={`nav-btn ${currentPage === 'reviews' ? 'active' : ''}`}
                onClick={() => navigateTo('reviews')}
              >
                REVIEWS
              </button>
              <button 
                className={`nav-btn ${currentPage === 'contact' ? 'active' : ''}`}
                onClick={() => navigateTo('contact')}
              >
                CONTACT
              </button>
            </nav>

            <div className="header-socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="mailto:p.s.disenos13@gmail.com" className="social-icon" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav-links">
            <button onClick={() => navigateTo('home')}>HOME</button>
            <button onClick={() => navigateTo('about')}>ABOUT</button>
            <button onClick={() => navigateTo('projects')}>PAST PROJECTS</button>
            <button onClick={() => navigateTo('reviews')}>REVIEWS</button>
            <button onClick={() => navigateTo('contact')}>CONTACT</button>
          </nav>
        </div>
      )}

      {/* Breadcrumbs */}
      {renderBreadcrumbs()}

      {/* Main Pages */}
      <main className={currentPage === 'home' ? '' : 'main-content'}>
        {currentPage === 'home' && (
          <Home 
            onNavigate={navigateTo} 
            testimonials={testimonials}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            handlePrevSlide={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            handleNextSlide={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
          />
        )}
        {currentPage === 'about' && <About onNavigate={navigateTo} />}
        {currentPage === 'projects' && <PastProjects onSelectProject={(p) => navigateTo('project-detail', p)} />}
        {currentPage === 'project-detail' && (
          <ProjectDetail 
            project={selectedProject} 
            onBack={() => navigateTo('projects')} 
            onNavigate={navigateTo} 
          />
        )}
        {currentPage === 'press-detail' && <PressDetail article={selectedPress} onBack={() => navigateTo('home')} />}
        {currentPage === 'reviews' && <Reviews />}
        {currentPage === 'contact' && <Contact />}
      </main>

      {/* Infinite Auto-Scrolling bottom project carousel (hidden on Home page) */}
      {currentPage !== 'home' && (
        <ProjectsCarousel onSelectProject={(p) => navigateTo('project-detail', p)} />
      )}

      {/* Regal Footer */}
      <footer className="regal-footer">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <img src="/logo.png" alt="Preeti Sethi Designs" className="footer-logo" />
            <h3 className="footer-brand-title">PREETI SETHI DESIGNS</h3>
            <p className="footer-tagline">Paradise for those who connect</p>
          </div>
          <div className="footer-links-col">
            <h4>EXPLORE</h4>
            <ul>
              <li><button onClick={() => navigateTo('home')}>Home</button></li>
              <li><button onClick={() => navigateTo('about')}>About Us</button></li>
              <li><button onClick={() => navigateTo('projects')}>Past Projects</button></li>
              <li><button onClick={() => navigateTo('reviews')}>Reviews</button></li>
              <li><button onClick={() => navigateTo('contact')}>Contact Us</button></li>
            </ul>
          </div>
          <div className="footer-contact-col">
            <h4>CONNECT WITH US</h4>
            <p><strong>Phone:</strong> +91 9971891303</p>
            <p><strong>Email:</strong> p.s.disenos13@gmail.com</p>
            <p><strong>Studio:</strong> 23, Pocket 19, Sector 24, Rohini - 110085</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Preeti Sethi Designs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
