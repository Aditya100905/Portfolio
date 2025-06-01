import React, { useState, useEffect, useRef } from "react";
import { projects } from "./Projects.js";
import { skills } from "./Skills.jsx";
import {
  ArrowRight,
  Mail,
  Code2,
  Globe,
  FileText,
  Star,
  Award,
  Target,
  Users,
  Menu,
  X,
  Heart,
  BracesIcon,
} from "lucide-react";

import { Github, Linkedin } from "./Icons.jsx";
import ProjectCard from "./ProjectCard"; 
import EmailContact from "./EmailContact"; 

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [skillsInView, setSkillsInView] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
const [isProjectsAnimating, setIsProjectsAnimating] = useState(false);

  const skillsRef = useRef(null);
  const heroRef = useRef(null);

  const roles = [
    "Frontend Developer",
    "Data Science Enthusiast",
    "Problem Solver",
    "Tech Innovator",
  ];

  const fullRole = roles[currentRole];

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    let i = 0;
    const typeTimer = setInterval(() => {
      if (i < fullRole.length) {
        setTypedText(fullRole.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeTimer);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setTypedText("");
        }, 2000);
      }
    }, 100);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(typeTimer);
      observer.disconnect();
    };
  }, [currentRole, fullRole]);

  const achievements = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Featured Projects",
      description: "Multiple projects showcased and deployed successfully",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Open Source",
      description: "Contributing to open source community with quality code",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Problem Solver",
      description: "Focused on creating efficient and scalable solutions",
      color: "from-green-500 to-blue-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Experience working in team environments and projects",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const navigation = [
    { id: "home", label: "Home", icon: <Globe className="w-4 h-4" /> },
    { id: "about", label: "About", icon: <FileText className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <BracesIcon className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <Code2 className="w-4 h-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x / 10}px`,
            top: `${mousePosition.y / 10}px`,
            transform: `translate(-50%, -50%)`,
          }}
        ></div>
        <div
          className="absolute w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${mousePosition.x / 15}px`,
            bottom: `${mousePosition.y / 15}px`,
            animationDelay: "1s",
          }}
        ></div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-ping"
            style={{
              left: `${10 + i * 4}%`,
              top: `${20 + (i % 5) * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: "4s",
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img
                src="/logo.png"
                className="w-[7%] h-[7%] rounded-full m-2 mr-3"
                alt=""
              />
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Aditya Kumar Goyal
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                      activeSection === item.id
                        ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/40"
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-gray-800/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                    activeSection === item.id
                      ? "bg-purple-500/20 text-purple-400"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/40"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative z-10 pt-16"
      >
        <div
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transform transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Mobile Layout - Centered Photo */}
          <div className="lg:hidden text-center mb-8">
            <div className="mb-8 flex justify-center">
              <div className="relative mt-10">
                <div className="absolute inset-0 bg-gradient-to-r rounded-lg blur-lg opacity-50 scale-110 animate-pulse"></div>
                <img
                  src="/me.png"
                  alt="Aditya Kumar Goyal"
                  className="relative w-36 h-36 sm:w-42 sm:h-42 rounded-lg object-cover border-4 shadow-2xl hover:scale-105 transition-transform duration-300 sm:object-fit"
                />
              </div>
            </div>
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:text-left">
            {/* Left Side - Content */}
            <div className="order-1">
              <div className="mb-8 relative">
                <div className="inline-flex mt-5 mb-0 items-center bg-gradient-to-r from-purple-500/15 to-blue-500/15 border border-purple-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-purple-300 font-medium">
                    Available for opportunities
                  </span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  Aditya
                </span>
              </h1>

              <div className="h-16 mb-8">
                <p className="text-xl sm:text-2xl lg:text-2xl text-gray-300 font-light">
                  {typedText}
                  <span className="animate-pulse text-purple-400">|</span>
                </p>
              </div>

              <p className="text-lg sm:text-xl text-gray-400 mb-12 leading-relaxed">
                Passionate about creating exceptional digital experiences
                through innovative web development and data-driven solutions.
                Always exploring new technologies and pushing creative
                boundaries.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-6">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="group bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center transform hover:scale-110 shadow-lg hover:shadow-purple-500/30 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                  <span className="relative z-10">View My Work</span>
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                </button>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="group border-2 border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center hover:bg-gradient-to-r hover:from-gray-800/60 hover:to-gray-700/60 transform hover:scale-110 backdrop-blur-sm"
                >
                  <Mail className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Let's Connect
                </button>
              </div>

              <div className="mt-16 flex space-x-8">
                <a
                  href="https://github.com/Aditya100905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transform hover:scale-125 transition-all duration-300"
                >
                  <Github className="w-8 h-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aditya-kumar-goyal-1a631328a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transform hover:scale-125 transition-all duration-300"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
                <a
                  href="mailto:adityakumargoyal06@gmail.com"
                  className="text-gray-400 hover:text-purple-400 transform hover:scale-125 transition-all duration-300"
                >
                  <Mail className="w-8 h-8" />
                </a>
              </div>
            </div>

            {/* Right Side - Photo */}
            <div className="order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-2xl blur-2xl opacity-20 scale-105 animate-pulse"></div>
                <img
                  src="/me.png"
                  alt="Aditya Kumar Goyal"
                  className="relative lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl object-cover border-8 border-white shadow-2xl hover:scale-105 transition-all duration-500 bg-white"
                />
              </div>
            </div>
          </div>

          {/* Mobile Content - Only shown on mobile */}
          <div className="lg:hidden text-center">
            <div className="mb-8 relative">
              <div className="inline-flex mt-5 mb-0 items-center bg-gradient-to-r from-purple-500/15 to-blue-500/15 border border-purple-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-purple-300 font-medium">
                  Available for opportunities
                </span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Aditya
              </span>
            </h1>

            <div className="h-16 mb-8">
              <p className="text-xl sm:text-2xl text-gray-300 font-light">
                {typedText}
                <span className="animate-pulse text-purple-400">|</span>
              </p>
            </div>

            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating exceptional digital experiences through
              innovative web development and data-driven solutions. Always
              exploring new technologies and pushing creative boundaries.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => scrollToSection("projects")}
                className="group bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center transform hover:scale-110 shadow-lg hover:shadow-purple-500/30 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="group border-2 border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center hover:bg-gradient-to-r hover:from-gray-800/60 hover:to-gray-700/60 transform hover:scale-110 backdrop-blur-sm"
              >
                <Mail className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Let's Connect
              </button>
            </div>

            <div className="mt-16 flex justify-center space-x-8">
              <a
                href="https://github.com/Aditya100905"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transform hover:scale-125 transition-all duration-300"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-kumar-goyal-1a631328a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transform hover:scale-125 transition-all duration-300"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="mailto:adityakumargoyal06@gmail.com"
                className="text-gray-400 hover:text-purple-400 transform hover:scale-125 transition-all duration-300"
              >
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A passionate developer with a love for creating innovative
              solutions and learning new technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/50 border border-gray-700/60 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/8 via-blue-500/8 to-cyan-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    My Journey
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Currently pursuing B.Tech in Computer Science and
                    Engineering at IIIT Una, I'm passionate about frontend
                    development and data science. My journey began with
                    curiosity about how websites work, which evolved into a deep
                    love for creating user-centric digital experiences.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    I believe in continuous learning and staying updated with
                    the latest technologies. My goal is to bridge the gap
                    between design and functionality, creating solutions that
                    are both beautiful and efficient.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/90 to-gray-800/50 border border-gray-700/60 rounded-3xl p-6 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-500 group relative overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>
                  <div className="relative z-10">
                    <div
                      className={`bg-gradient-to-r ${achievement.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {achievement.icon}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div id="skills" ref={skillsRef} className="mb-20 scroll-mt-20">
            <h3
              className="text-3xl font-bold text-center mb-12 text-white"
              id="skills-heading"
            >
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  aria-labelledby="skills-heading"
                  className={`${skill.bgColor} border border-gray-700/60 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-500 group relative overflow-hidden`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`bg-gradient-to-r ${skill.color} p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">
                          {skill.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                    <span className="text-purple-400 font-bold">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="w-full bg-gray-700/60 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: skillsInView ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 100}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

<section id="projects" className="py-16 sm:py-20 lg:py-24 relative z-10 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
        Featured Projects
      </h2>
      <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
        A showcase of my recent work and creative solutions
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-6 rounded-full" />
    </div>

    {/* Projects Grid */}
    <div className="relative">
      <div className="space-y-8 sm:space-y-12 lg:space-y-16">
        {(showAllProjects ? projects : projects.slice(0, 2)).map((project, index) => (
          <div
            key={project.id}
            className={`transform transition-all duration-700 ease-out ${
              showAllProjects && index >= 2
                ? isProjectsAnimating
                  ? 'opacity-0 translate-y-16 scale-95'
                  : 'opacity-100 translate-y-0 scale-100'
                : 'opacity-100 translate-y-0 scale-100'
            }`}
            style={{
              transitionDelay: showAllProjects && index >= 2 ? `${(index - 2) * 200}ms` : '0ms'
            }}
          >
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 via-pink-600/20 to-cyan-600/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />
              <div className="relative">
                <ProjectCard project={project} index={index} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced fade overlay */}
      {!showAllProjects && projects.length > 2 && (
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent pointer-events-none" />
      )}
    </div>

    {/* Enhanced Show All / Show Less Button */}
    {projects.length > 2 && (
      <div className="text-center mt-12 sm:mt-16 lg:mt-20">
        <button
          onClick={() => {
            setIsProjectsAnimating(true);
            
            if (showAllProjects) {
              // When showing less, scroll to top of projects section
              setTimeout(() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  const headerOffset = 100;
                  const elementPosition = projectsSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
                
                setTimeout(() => {
                  setShowAllProjects(false);
                  setIsProjectsAnimating(false);
                }, 300);
              }, 100);
            } else {
              // When showing more, expand and smooth scroll to new content
              setShowAllProjects(true);
              
              setTimeout(() => {
                // Calculate position of first new project
                const newProjectsStart = document.querySelector(`[data-project-index="2"]`);
                if (newProjectsStart) {
                  const headerOffset = 120;
                  const elementPosition = newProjectsStart.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
                setIsProjectsAnimating(false);
              }, 800);
            }
          }}
          disabled={isProjectsAnimating}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 text-white font-semibold text-base sm:text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 overflow-hidden"
          style={{
            background: showAllProjects 
              ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%)' 
              : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)',
            boxShadow: showAllProjects
              ? '0 10px 30px -5px rgba(239, 68, 68, 0.3), 0 4px 6px -2px rgba(239, 68, 68, 0.1)'
              : '0 10px 30px -5px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.1)'
          }}
        >
          {/* Animated background overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
               style={{
                 background: showAllProjects
                   ? 'linear-gradient(135deg, #f87171 0%, #ef4444 50%, #dc2626 100%)'
                   : 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)'
               }} />
          
          {/* Button content */}
          <span className="relative z-10 flex items-center gap-3">
            {/* Loading spinner */}
            {isProjectsAnimating && (
              <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            )}
            
            {/* Text content with smooth transitions */}
            <span className="transition-all duration-300">
              {isProjectsAnimating 
                ? (showAllProjects ? 'Collapsing...' : 'Loading...')
                : (showAllProjects ? 'Show Less Projects' : `View All ${projects.length} Projects`)
              }
            </span>
            
            {/* Enhanced arrow with proper animations */}
            {!isProjectsAnimating && (
              <div className={`relative transition-all duration-500 ease-out ${
                showAllProjects ? 'rotate-180 scale-110' : 'rotate-0 scale-100 group-hover:translate-y-0.5'
              }`}>
                {showAllProjects ? (
                  <svg 
                    className="w-5 h-5 transition-all rotate-180 duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M5 10l7-7 7 7" 
                    />
                  </svg>
                ) : (
                  <svg 
                    className="w-5 h-5 transition-all duration-300 group-hover:animate-bounce" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M19 14l-7 7-7-7" 
                    />
                  </svg>
                )}
              </div>
            )}
          </span>
          
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-active:opacity-20 transition-opacity duration-150" />
          
          {/* Shine effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        </button>
        
        {/* Enhanced progress indicator */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <div className="flex items-center gap-2">
            {Array.from({ length: Math.min(projects.length, 6) }).map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-500 ${
                  (showAllProjects || i < 2)
                    ? 'w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30'
                    : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
            {projects.length > 6 && (
              <span className="text-sm text-gray-400 ml-2">
                +{projects.length - (showAllProjects ? 6 : 2)} more
              </span>
            )}
          </div>
          
          {/* Project counter */}
          <div className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full backdrop-blur-sm border border-gray-700/50">
            {showAllProjects ? projects.length : 2} of {projects.length}
          </div>
        </div>
      </div>
    )}
  </div>
</section>



      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>

          <EmailContact />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Heart className="w-5 h-5 text-red-400 animate-pulse" />
              <span className="text-gray-400">
                Made with passion by Aditya Kumar Goyal
              </span>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/Aditya100905"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-kumar-goyal-1a631328a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:adityakumargoyal06@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800/50 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 Aditya Kumar Goyal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

<style jsx>{`
  @keyframes gradient-x {
    0%, 100% {
      background-size: 200% 200%;
      background-position: left center;
    }
    50% {
      background-size: 200% 200%;
      background-position: right center;
    }
  }
  
  .animate-gradient-x {
    animation: gradient-x 3s ease infinite;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .animate-gradient-x {
      animation: none;
    }
  }
`}</style>

export default Portfolio;
