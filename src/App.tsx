import React, { useEffect, useState, useRef } from 'react';

/**
 * ContactSection Component
 * Minimal and high-impact section to drive conversions and connections.
 */
const ContactSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const transitionBase = "transition-all duration-1000 ease-out transform";
  const hoverBase = "transition-all duration-300 ease-in-out";
  const hidden = "opacity-0 translate-y-12";
  const visible = "opacity-100 translate-y-0";

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/jonathannassif" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/jonathan-nassif/" },
    { name: "Twitter / X", url: "https://x.com/jonathannassiff" }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="w-full flex flex-col items-center justify-center px-8 md:px-16 py-20 md:py-24 relative z-10"
    >
      <div className="max-w-4xl w-full text-center md:text-left">
        <div className={`${transitionBase} ${isVisible ? visible : hidden} delay-0`}>
          <span className="text-blue-400 text-xs font-bold tracking-[0.4em] uppercase mb-8 block">
            Get In Touch
          </span>
        </div>

        <h2 className={`${transitionBase} ${isVisible ? visible : hidden} delay-200 text-5xl md:text-7xl font-black tracking-tight leading-none mb-8 text-white`}>
          Ready to <span className="text-slate-400 italic font-serif">Scale?</span>
        </h2>

        <div className={`${transitionBase} ${isVisible ? visible : hidden} delay-400`}>
          <p className="text-xl md:text-2xl font-light text-slate-300 mb-12 max-w-2xl leading-relaxed">
            Let's turn your vision into a high-converting digital reality. 
            Currently accepting new projects for 2025.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6 mb-16">
            <a 
              href="https://calendly.com/jonas2000288/10min"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative px-10 py-5 bg-blue-500 text-white font-black text-sm uppercase tracking-widest rounded-full overflow-hidden hover:scale-105 hover:bg-blue-600 active:scale-95 shadow-2xl shadow-blue-500/20 ${hoverBase}`}
            >
              <span className="relative z-10">Book a Strategy Call</span>
            </a>

            <a 
              href="mailto:jonas2000288@gmail.com"
              className="text-lg md:text-xl font-bold text-blue-400 hover:text-blue-300 border-b-2 border-blue-400/30 hover:border-blue-300 transition-all py-2"
            >
              jonas2000288@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-12">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-[0.3em] font-bold text-slate-400 hover:text-blue-400 transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative accent for contact section */}
      <div className="absolute left-1/2 -bottom-32 -translate-x-1/2 w-[80%] h-64 bg-blue-500/10 blur-[160px] -z-10 rounded-full" />
    </section>
  );
};

/**
 * ProjectsSection Component
 * Displays a grid of project cards with hover effects and scroll animations.
 */
const ProjectsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Aristo Education Platform",
      description: "Built a modern, accessible platform with clear CTAs and course information.",
      link: "https://aristoeducation.net/",
      tag: "Platform"
    },
    {
      title: "Growth Landing Page",
      description: "Designed a modern landing page with bold visuals, 3D elements, and clear CTAs.",
      link: "https://growth-landing-page-lime.vercel.app/",
      tag: "Landing Page"
    },
    {
      title: "Moodify - Wellness Tracker",
      description: "Created an interactive mood-tracking app with data visualization and streak tracking.",
      link: "https://jonathannassif.github.io/Moodify/",
      tag: "Web App"
    }
  ];

  const transitionBase = "transition-all duration-1000 ease-out transform";
  const hoverBase = "transition-all duration-300 ease-in-out";
  const hidden = "opacity-0 translate-y-12";
  const visible = "opacity-100 translate-y-0";

  return (
    <section 
      ref={sectionRef}
      id="projects"
      className="w-full flex flex-col items-center justify-center px-8 md:px-16 py-20 md:py-24 relative z-10"
    >
      <div className="max-w-7xl w-full">
        <div className={`${transitionBase} ${isVisible ? visible : hidden} delay-0 mb-12`}>
          <span className="text-blue-400 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">Case Studies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${transitionBase} ${isVisible ? visible : hidden} group block p-8 bg-slate-800/40 border border-slate-700/50 rounded-3xl hover:-translate-y-4 hover:bg-slate-700/50 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 ${hoverBase}`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 bg-blue-500/20 px-3 py-1.5 rounded-full">
                  {project.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-blue-400 group-hover:gap-4 transition-all">
                View Project 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * AboutSection Component
 * Uses IntersectionObserver to trigger a clean fade-in and slide-up animation.
 */
const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const transitionBase = "transition-all duration-1000 ease-out transform";
  const hidden = "opacity-0 translate-y-12";
  const visible = "opacity-100 translate-y-0";

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="w-full flex flex-col items-center justify-center px-8 md:px-16 py-20 md:py-24 relative z-10"
    >
      <div className="max-w-4xl w-full">
        <div className={`${transitionBase} ${isVisible ? visible : hidden} delay-0`}>
          <span className="text-blue-400 text-xs font-bold tracking-[0.4em] uppercase mb-8 block">
            What I Do
          </span>
        </div>

        <h2 className={`${transitionBase} ${isVisible ? visible : hidden} delay-200 text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-8 text-white`}>
          I Build Landing Pages That Turn Your <span className="text-slate-400">Followers</span> Into <span className="text-blue-400">Paying Clients.</span>
        </h2>

        <div className={`${transitionBase} ${isVisible ? visible : hidden} delay-400 max-w-2xl`}>
          <p className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed mb-8">
            Custom websites designed to <span className="text-blue-400 font-semibold">convert</span>. No templates. No fluff. <br />
            Just results.
          </p>
          
          <div className="flex items-center gap-6">
            <div className="h-px w-12 bg-blue-500" />
            <span className="text-sm font-bold tracking-widest uppercase text-slate-400">
              Direct-to-consumer focus
            </span>
          </div>
        </div>
      </div>
      
      {/* Decorative background element for the about section */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[120px] -z-10" />
    </section>
  );
};

/**
 * Portfolio App for Jonathan Nassif.
 * Features a high-end hero section, about section, projects grid, and contact section.
 */
const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 150);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const transitionBase = "transition-all duration-1000 ease-out transform";
  const hoverBase = "transition-all duration-300 ease-in-out";
  const hidden = "opacity-0 translate-y-16";
  const visible = "opacity-100 translate-y-0";

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Global Interactive Background Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-60"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 70%)`
        }}
      />

      <main className="w-full relative flex flex-col items-center selection:bg-blue-400 selection:text-white">
        
        {/* Minimal Navigation */}
        <nav className={`fixed top-0 left-0 w-full z-50 px-8 py-6 md:px-16 flex justify-between items-center backdrop-blur-md bg-slate-950/90 border-b border-slate-800/50 ${transitionBase} ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg font-black tracking-widest group cursor-pointer relative h-6 overflow-hidden"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-500 text-white">JN</span>
            <span className="block absolute top-0 left-0 group-hover:translate-y-0 translate-y-full transition-transform duration-500 text-blue-400">JN</span>
          </div>
          
          <div className="flex gap-8 md:gap-12 items-center">
            {['About', 'Projects', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative hidden md:block text-[11px] uppercase tracking-[0.3em] font-bold text-slate-400 hover:text-white group transition-colors ${hoverBase}`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <div className="h-px w-8 bg-slate-700 hidden md:block" />
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[11px] uppercase tracking-[0.3em] font-bold text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition-colors"
            >
              Hire Me
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="min-h-screen w-full flex flex-col items-center justify-center relative px-8 md:px-16 py-24 overflow-hidden">
          {/* Hero Background Accents */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[160px]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-slate-800/20 rounded-full blur-[140px]" />
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:48px_48px]" />
          </div>

          <div className="relative z-10 max-w-7xl w-full flex flex-col items-center md:items-start text-center md:text-left">
            <div className={`${transitionBase} ${mounted ? visible : hidden} delay-100`}>
              <p className="text-blue-400 text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-6 md:mb-8">
                Based in the Digital Realm
              </p>
            </div>

            <h1 className={`${transitionBase} ${mounted ? visible : hidden} delay-300 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-6 md:mb-8`}>
              <span className="text-white">Jonathan</span>
              <br className="md:hidden" />
              <span className="md:hidden"> </span>
              <br className="hidden md:block" />
              <span className="text-white md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-white md:via-slate-200 md:to-slate-500">Nassif</span>
            </h1>

            <div className="flex flex-col md:flex-row items-center md:items-end justify-between w-full gap-8 md:gap-12">
              <div className={`${transitionBase} ${mounted ? visible : hidden} delay-500 max-w-lg`}>
                <h2 className="text-lg md:text-2xl font-light text-slate-300 tracking-tight leading-relaxed">
                  Full Stack Web Developer crafting <br />
                  <span className="italic font-serif text-blue-400">seamless digital experiences</span> with <br />
                  precision and modern aesthetics.
                </h2>
              </div>

              <div className={`${transitionBase} ${mounted ? visible : hidden} delay-[700ms]`}>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className={`group relative px-10 py-5 bg-blue-500 text-white font-black text-xs md:text-sm uppercase tracking-widest rounded-full overflow-hidden hover:scale-105 hover:bg-blue-600 active:scale-95 shadow-2xl shadow-blue-500/20 ${hoverBase}`}
                >
                  <span className="relative z-10">Explore My Work</span>
                </button>
              </div>
            </div>
          </div>

          {/* Background Large Text Detail */}
          <div className={`absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden transition-opacity duration-1000 delay-1000 -z-10 ${mounted ? 'opacity-[0.03]' : 'opacity-0'}`}>
            <span className="text-[30vw] font-black tracking-tighter leading-none translate-y-1/4 inline-block text-white">
              NASSIF
            </span>
          </div>

          {/* Vertical Side Info */}
          <div className={`fixed left-8 bottom-32 hidden lg:flex flex-col items-center gap-12 ${transitionBase} ${mounted ? 'opacity-50' : 'opacity-0'} delay-[1200ms]`}>
            <div className="h-24 w-px bg-slate-700" />
            <span className="text-[10px] font-mono uppercase tracking-[0.5em] [writing-mode:vertical-rl] transform -rotate-180 whitespace-nowrap text-slate-400">
              Scroll to explore
            </span>
          </div>
        </section>

        {/* Sections */}
        <AboutSection />
        <ProjectsSection />
        <ContactSection />

        {/* Global Footer */}
        <footer className="w-full max-w-7xl px-8 md:px-16 py-12 flex flex-col md:flex-row justify-between items-center border-t border-slate-800 gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-[11px] uppercase tracking-widest text-slate-500">© 2025 Jonathan Nassif</span>
          </div>
          <div className="flex gap-8">
            <a 
              href="https://x.com/jonathannassiff"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-widest font-bold text-slate-400 hover:text-blue-400 transition-colors"
            >
              X
            </a>
            <a 
              href="https://github.com/jonathannassif"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-widest font-bold text-slate-400 hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/jonathan-nassif/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-widest font-bold text-slate-400 hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;