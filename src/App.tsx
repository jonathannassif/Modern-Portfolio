import React, { useEffect, useState, useRef } from "react";
import { track } from "@vercel/analytics";
import { Analytics } from "@vercel/analytics/react";
import aristoImg from "./assets/images/Aristo.png";
import growthImg from "./assets/images/Manisshh.png";
import moodifyImg from "./assets/images/Moodify.png";
import knowThyselfImg from "./assets/images/Know-Thyself.png";

/**
 * ContactSection Component
 * Enhanced with magnetic button effect and better animations
 */
const ContactSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          track("section_view", { section: "contact", portfolio: "dark" });
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("jonas2000288@gmail.com");
    setCopiedEmail(true);
    track("email_copied", { portfolio: "dark" });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const transitionBase = "transition-all duration-1000 ease-out transform";
  const hoverBase = "transition-all duration-300 ease-in-out";
  const hidden = "opacity-0 translate-y-12";
  const visible = "opacity-100 translate-y-0";

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/jonathannassif", icon: "📦" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jonathan-nassif/",
      icon: "💼",
    },
    { name: "Twitter / X", url: "https://x.com/jonathannassiff", icon: "🐦" },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full flex flex-col items-center justify-center px-8 md:px-16 py-20 md:py-32 relative z-10"
    >
      <div className="max-w-4xl w-full text-center md:text-left">
        <div
          className={`${transitionBase} ${isVisible ? visible : hidden} delay-0`}
        >
          <span className="text-blue-400 text-xs font-bold tracking-[0.4em] uppercase mb-8 block animate-pulse">
            Get In Touch
          </span>
        </div>

        <h2
          className={`${transitionBase} ${isVisible ? visible : hidden} delay-200 text-5xl md:text-7xl font-black tracking-tight leading-none mb-8 text-white`}
        >
          Ready to{" "}
          <span className="text-slate-400 italic font-serif relative inline-block group">
            Scale?
            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500"></span>
          </span>
        </h2>

        <div
          className={`${transitionBase} ${isVisible ? visible : hidden} delay-400`}
        >
          <p className="text-xl md:text-2xl font-light text-slate-300 mb-12 max-w-2xl leading-relaxed">
            Let's turn your vision into a high-converting digital reality.
            Currently accepting new projects for{" "}
            <span className="text-blue-400 font-semibold">2026</span>.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6 mb-16">
            <a
              href="https://calendly.com/jonas2000288/10min?source=dark"
              onClick={() =>
                track("calendly_click", {
                  portfolio: "dark",
                  location: "contact_section",
                })
              }
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative px-10 py-5 bg-blue-500 text-white font-black text-sm uppercase tracking-widest rounded-full overflow-hidden hover:scale-105 hover:bg-blue-600 active:scale-95 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 ${hoverBase}`}
            >
              <span className="relative z-10 flex items-center gap-2">
                📅 Book a Strategy Call
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <button
              onClick={handleEmailClick}
              className={`relative text-lg md:text-xl font-bold text-blue-400 hover:text-blue-300 border-b-2 border-blue-400/30 hover:border-blue-300 transition-all py-2 ${hoverBase}`}
            >
              {copiedEmail ? "✓ Copied!" : "jonas2000288@gmail.com"}
            </button>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                onClick={() =>
                  track("social_click", {
                    platform: social.name.toLowerCase(),
                    portfolio: "dark",
                  })
                }
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] font-bold text-slate-400 hover:text-blue-400 transition-all hover:scale-110 ${hoverBase}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-lg group-hover:scale-125 transition-transform">
                  {social.icon}
                </span>
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced decorative accent */}
      <div className="absolute left-1/2 -bottom-32 -translate-x-1/2 w-[80%] h-64 bg-blue-500/10 blur-[160px] -z-10 rounded-full animate-pulse" />
      <div className="absolute right-0 top-0 w-64 h-64 bg-purple-500/5 blur-[120px] -z-10 rounded-full" />
    </section>
  );
};

/**
 * ProjectsSection Component
 * Enhanced with better hover effects and staggered animations
 */
const ProjectsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          track("section_view", { section: "projects", portfolio: "dark" });
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Aristo Education Platform",
      description:
        "Built a modern, accessible platform with clear CTAs and course information.",
      link: "https://aristoeducation.net/",
      tag: "Platform",
      image: aristoImg,
      tech: ["React", "TailwindCSS", "TypeScript"],
    },
    {
      title: "Growth Landing Page",
      description:
        "Designed a modern landing page with bold visuals, 3D elements, and clear CTAs.",
      link: "https://growth-landing-page-lime.vercel.app/",
      tag: "Landing Page",
      image: growthImg,
      tech: ["React", "Framer Motion", "3D"],
    },
    {
      title: "Moodify - Wellness Tracker",
      description:
        "Created an interactive mood-tracking app with data visualization and streak tracking.",
      link: "https://moodify-react.vercel.app/",
      tag: "Web App",
      image: moodifyImg,
      tech: ["React", "Chart.js", "LocalStorage"],
    },
    {
      title: "Know Thyself - Self-Assessment Tool",
      description:
        "Engaging platform for personal growth assessment with interactive elements.",
      link: "https://know-thyself-react.vercel.app/",
      tag: "Web App",
      image: knowThyselfImg,
      tech: ["React", "Analytics", "UI/UX"],
    },
  ];

  const transitionBase = "transition-all duration-1000 ease-out transform";
  const hoverBase = "transition-all duration-300 ease-in-out";
  const hidden = "opacity-0 translate-y-12";
  const visible = "opacity-100 translate-y-0";

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full flex flex-col items-center justify-center px-8 md:px-16 py-20 md:py-32 relative z-10"
    >
      <div className="max-w-7xl w-full">
        <div
          className={`${transitionBase} ${isVisible ? visible : hidden} delay-0 mb-16`}
        >
          <span className="text-blue-400 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
            Case Studies
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Transforming ideas into powerful digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              onClick={() =>
                track("project_click", {
                  project: project.title,
                  portfolio: "dark",
                })
              }
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`${transitionBase} ${isVisible ? visible : hidden} group block relative bg-slate-800/40 border border-slate-700/50 rounded-3xl hover:-translate-y-4 hover:bg-slate-700/50 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 ${hoverBase} overflow-hidden`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              {/* Image with overlay */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent transition-opacity duration-300 ${hoveredIndex === index ? "opacity-70" : "opacity-40"}`}
                />

                {/* Floating tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white bg-blue-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-blue-400 group-hover:gap-4 transition-all">
                  View Project
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl`}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 blur-[150px] -z-10 rounded-full animate-pulse" />
    </section>
  );
};

/**
 * AboutSection Component
 * Enhanced with animated stats and better typography
 */
const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({ projects: 0, clients: 0, years: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          track("section_view", { section: "about", portfolio: "dark" });

          // Animate numbers
          const duration = 2000;
          const steps = 60;
          const projectsTarget = 20;
          const clientsTarget = 15;
          const yearsTarget = 3;

          let currentStep = 0;
          const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setStats({
              projects: Math.floor(projectsTarget * progress),
              clients: Math.floor(clientsTarget * progress),
              years: Math.floor(yearsTarget * progress),
            });

            if (currentStep >= steps) clearInterval(interval);
          }, duration / steps);
        }
      },
      { threshold: 0.2 },
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
      className="w-full flex flex-col items-center justify-center px-8 md:px-16 py-20 md:py-32 relative z-10"
    >
      <div className="max-w-4xl w-full">
        <div
          className={`${transitionBase} ${isVisible ? visible : hidden} delay-0`}
        >
          <span className="text-blue-400 text-xs font-bold tracking-[0.4em] uppercase mb-8 block">
            What I Do
          </span>
        </div>

        <h2
          className={`${transitionBase} ${isVisible ? visible : hidden} delay-200 text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-8 text-white`}
        >
          I Build Landing Pages That Turn Your{" "}
          <span className="text-slate-400 relative inline-block group">
            Followers
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-slate-400 to-transparent opacity-30"></span>
          </span>{" "}
          Into{" "}
          <span className="text-blue-400 relative inline-block group">
            Paying Clients.
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-transparent group-hover:scale-x-110 transition-transform origin-left"></span>
          </span>
        </h2>

        <div
          className={`${transitionBase} ${isVisible ? visible : hidden} delay-400 max-w-2xl mb-12`}
        >
          <p className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed mb-8">
            Custom websites designed to{" "}
            <span className="text-blue-400 font-semibold">convert</span>. No
            templates. No fluff. <br />
            Just <span className="text-white font-semibold">results</span>.
          </p>

          <div className="flex items-center gap-6">
            <div className="h-px w-12 bg-blue-500" />
            <span className="text-sm font-bold tracking-widest uppercase text-slate-400">
              Direct-to-consumer focus
            </span>
          </div>
        </div>

        {/* Animated Stats */}
        <div
          className={`${transitionBase} ${isVisible ? visible : hidden} delay-600 grid grid-cols-3 gap-8 mt-16`}
        >
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2 group-hover:scale-110 transition-transform">
              {stats.projects}+
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400">
              Projects
            </div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2 group-hover:scale-110 transition-transform">
              {stats.clients}+
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400">
              Clients
            </div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2 group-hover:scale-110 transition-transform">
              {stats.years}+
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400">
              Years
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced decorative background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[120px] -z-10 rounded-full animate-pulse" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-purple-500/5 blur-[150px] -z-10" />
    </section>
  );
};

/**
 * Enhanced Portfolio App
 * With smooth scroll, better navigation, and dynamic interactions
 */
const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 150);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);

      // Determine active section
      const sections = ["hero", "about", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const transitionBase = "transition-all duration-1000 ease-out transform";
  const hoverBase = "transition-all duration-300 ease-in-out";
  const hidden = "opacity-0 translate-y-16";
  const visible = "opacity-100 translate-y-0";

  const scrollToSection = (id: string) => {
    track("nav_click", { section: id, portfolio: "dark" });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    track("logo_click", { portfolio: "dark" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-slate-950 min-h-screen relative">
        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Global Interactive Background Glow */}
        <div
          className="pointer-events-none fixed inset-0 z-0 opacity-60 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 70%)`,
          }}
        />

        <main className="w-full relative flex flex-col items-center selection:bg-blue-400 selection:text-white">
          {/* Enhanced Navigation */}
          <nav
            className={`fixed top-0 left-0 w-full z-50 px-8 py-6 md:px-16 flex justify-between items-center backdrop-blur-md bg-slate-950/90 border-b border-slate-800/50 ${transitionBase} ${mounted ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
          >
            <div
              onClick={scrollToTop}
              className="text-lg font-black tracking-widest group cursor-pointer relative h-6 overflow-hidden"
            >
              <span className="block group-hover:-translate-y-full transition-transform duration-500 text-white">
                JN
              </span>
              <span className="block absolute top-0 left-0 group-hover:translate-y-0 translate-y-full transition-transform duration-500 text-blue-400">
                JN
              </span>
            </div>

            <div className="flex gap-8 md:gap-12 items-center">
              {["About", "Projects", "Contact"].map((item) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`relative hidden md:block text-[11px] uppercase tracking-[0.3em] font-bold group transition-all ${hoverBase} ${isActive ? "text-blue-400" : "text-slate-400 hover:text-white"}`}
                  >
                    {item}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-blue-400 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    ></span>
                  </button>
                );
              })}
              <div className="h-px w-8 bg-slate-700 hidden md:block" />
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[11px] uppercase tracking-[0.3em] font-bold text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
              >
                Hire Me
              </button>
            </div>
          </nav>

          {/* Hero Section - Enhanced */}
          <section
            id="hero"
            className="min-h-screen w-full flex flex-col items-center justify-center relative px-8 md:px-16 py-24 overflow-hidden"
          >
            {/* Enhanced Background Accents */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
              <div
                className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[160px] animate-pulse"
                style={{ animationDuration: "8s" }}
              />
              <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-slate-800/20 rounded-full blur-[140px]" />
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:48px_48px]" />
              {/* Floating orbs */}
              <div
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-bounce"
                style={{ animationDuration: "10s" }}
              />
              <div
                className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl animate-bounce"
                style={{ animationDuration: "12s", animationDelay: "2s" }}
              />
            </div>

            <div className="relative z-10 max-w-7xl w-full flex flex-col items-center md:items-start text-center md:text-left">
              <div
                className={`${transitionBase} ${mounted ? visible : hidden} delay-100`}
              >
                <p className="text-blue-400 text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-6 md:mb-8 flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></span>
                  Based in the Digital Realm
                </p>
              </div>

              <h1
                className={`${transitionBase} ${mounted ? visible : hidden} delay-300 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-6 md:mb-8`}
              >
                <span className="text-white inline-block hover:scale-105 transition-transform">
                  Jonathan
                </span>
                <br className="md:hidden" />
                <span className="md:hidden"> </span>
                <br className="hidden md:block" />
                <span className="text-white md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-white md:via-slate-200 md:to-slate-500 inline-block hover:scale-105 transition-transform">
                  Nassif
                </span>
              </h1>

              <div className="flex flex-col md:flex-row items-center md:items-end justify-between w-full gap-8 md:gap-12">
                <div
                  className={`${transitionBase} ${mounted ? visible : hidden} delay-500 max-w-lg`}
                >
                  <h2 className="text-lg md:text-2xl font-light text-slate-300 tracking-tight leading-relaxed">
                    Full Stack Web Developer crafting <br />
                    <span className="italic font-serif text-blue-400 relative inline-block group">
                      seamless digital experiences
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-500"></span>
                    </span>{" "}
                    with <br />
                    precision and modern aesthetics.
                  </h2>
                </div>

                <div
                  className={`${transitionBase} ${mounted ? visible : hidden} delay-[700ms]`}
                >
                  <button
                    onClick={() => {
                      track("cta_click", {
                        button: "explore_work",
                        location: "hero",
                        portfolio: "dark",
                      });
                      scrollToSection("projects");
                    }}
                    className={`group relative px-10 py-5 bg-blue-500 text-white font-black text-xs md:text-sm uppercase tracking-widest rounded-full overflow-hidden hover:scale-105 hover:bg-blue-600 active:scale-95 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 ${hoverBase}`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Explore My Work
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Enhanced Background Large Text Detail */}
            <div
              className={`absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden transition-opacity duration-1000 delay-1000 -z-10 ${mounted ? "opacity-[0.03]" : "opacity-0"}`}
            >
              <span
                className="text-[30vw] font-black tracking-tighter leading-none translate-y-1/4 inline-block text-white animate-pulse"
                style={{ animationDuration: "10s" }}
              >
                NASSIF
              </span>
            </div>

            {/* Enhanced Vertical Side Info */}
            <div
              className={`fixed left-8 bottom-32 hidden lg:flex flex-col items-center gap-12 ${transitionBase} ${mounted ? "opacity-50 hover:opacity-100" : "opacity-0"} delay-[1200ms] ${hoverBase}`}
            >
              <div className="h-24 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent" />
              <span className="text-[10px] font-mono uppercase tracking-[0.5em] [writing-mode:vertical-rl] transform -rotate-180 whitespace-nowrap text-slate-400">
                Scroll to explore
              </span>
              <div
                className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDuration: "3s" }}
              />
            </div>
          </section>

          {/* Sections */}
          <AboutSection />
          <ProjectsSection />
          <ContactSection />

          {/* Enhanced Footer */}
          <footer className="w-full max-w-7xl px-8 md:px-16 py-12 flex flex-col md:flex-row justify-between items-center border-t border-slate-800 gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-[11px] uppercase tracking-widest text-slate-500">
                © 2025 Jonathan Nassif
              </span>
              <span className="text-[10px] text-slate-600">
                Crafted with precision
              </span>
            </div>
            <div className="flex gap-8">
              {[
                {
                  name: "X",
                  url: "https://x.com/jonathannassiff",
                  platform: "twitter",
                },
                {
                  name: "GitHub",
                  url: "https://github.com/jonathannassif",
                  platform: "github",
                },
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/jonathan-nassif/",
                  platform: "linkedin",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  onClick={() =>
                    track("footer_social_click", {
                      platform: social.platform,
                      portfolio: "dark",
                    })
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-widest font-bold text-slate-400 hover:text-blue-400 transition-all hover:scale-110"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </footer>

          {/* Scroll to Top Button */}
          {scrollProgress > 20 && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-4 bg-blue-500 text-white rounded-full shadow-2xl shadow-blue-500/30 hover:scale-110 hover:bg-blue-600 transition-all z-40 group"
            >
              <svg
                className="w-5 h-5 group-hover:-translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          )}
        </main>
      </div>

      {/* Vercel Analytics Component */}
      <Analytics />
    </>
  );
};

export default App;
