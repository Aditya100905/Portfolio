import React, { useState, useEffect, useRef } from "react";
import { projects } from "./Projects.js";
import { skills } from "./Skills.jsx";
import {
  ArrowRight,
  // Github,
  // Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Terminal,
  Cpu,
  Globe,
  FileText,
  MousePointer,
  Zap,
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  Target,
  Users,
  Menu,
  X,
  Download,
  Eye,
  Layers,
  Sparkles,
  Phone,
  Send,
  Copy,
  Check,
  MapPin,
  Heart,
  FlaskConical,
  BracesIcon,
  Palette,
  FileCode,
  TerminalSquare,
  Hash,
  Plus,
  Atom,
  Sliders,
} from "lucide-react";

import { Github, Linkedin } from "./Icons.jsx";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-gray-800/50 backdrop-blur-sm transition-all duration-700 hover:border-purple-500/50 group ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } flex flex-col md:flex hover:shadow-2xl hover:shadow-purple-500/20`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered
          ? "translateY(-12px) scale(1.02)"
          : "translateY(0) scale(1)",
        transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/50"></div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-15`}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 animate-pulse"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/40 rounded-full animate-ping"
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      <div className="md:w-1/2 p-6 lg:p-10 relative z-10 flex flex-col justify-center">
        <div className="inline-flex items-center bg-gradient-to-r from-purple-500/15 to-blue-500/15 border border-purple-500/30 rounded-full px-4 py-2 mb-6 w-fit group-hover:border-purple-400/50 transition-all duration-500">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
          <Sparkles className="w-4 h-4 text-purple-400 mr-2 group-hover:rotate-180 transition-transform duration-500" />
          <span className="text-sm text-purple-300 font-medium">
            {project.status}
          </span>
        </div>

        <h3 className="text-2xl lg:text-4xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
          {project.title}
        </h3>
        <p className="text-lg text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
          {project.subtitle}
        </p>

        <div className="relative overflow-hidden">
          <p className="text-gray-300 leading-relaxed mb-6 text-sm lg:text-base transition-all duration-500 group-hover:text-white">
            {project.description}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {project.metrics.map((metric, metricIndex) => (
            <div
              key={metricIndex}
              className="text-center bg-gray-800/40 rounded-lg p-3 border border-gray-700/40 group-hover:border-purple-500/40 group-hover:bg-gray-700/40 transition-all duration-500"
              style={{
                transform: isHovered
                  ? `translateY(-${metricIndex * 3}px)`
                  : "translateY(0)",
                transitionDelay: `${metricIndex * 100}ms`,
              }}
            >
              <div className="text-purple-400 font-bold text-xs group-hover:text-purple-300 transition-colors duration-300">
                {metric}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-gray-800/60 border border-gray-700/60 text-purple-300 px-3 py-1 rounded-lg text-xs font-medium hover:border-purple-500/40 hover:bg-purple-500/15 transition-all duration-300 cursor-default"
              style={{
                transform: isHovered
                  ? "translateY(-6px) scale(1.05)"
                  : "translateY(0) scale(1)",
                transitionDelay: `${techIndex * 50}ms`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-purple-500/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-all duration-700 transform translate-x-[-100%] group-hover/btn:translate-x-[100%]"></div>
            <Eye className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform duration-300 relative z-10" />
            <span className="relative z-10">Live Demo</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
          </a>
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn border border-gray-600 hover:border-gray-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center hover:bg-gradient-to-r hover:from-gray-800/60 hover:to-gray-700/60 transform hover:scale-110 hover:-rotate-1 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700/30 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            <Github className="w-5 h-5 mr-2 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300 relative z-10" />
            <span className="relative z-10">Source Code</span>
          </a>
        </div>
      </div>

      <div className="md:w-1/2 relative min-h-[250px] md:min-h-[400px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center group-hover:from-gray-800 group-hover:to-gray-700 transition-all duration-700 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/15 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-blue-500/15 rounded-full blur-lg animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          {/* <div
            className="text-6xl lg:text-8xl opacity-30 group-hover:opacity-60 transform transition-all duration-700 mb-4"
            style={{
              transform: isHovered
                ? "scale(1.2)"
                : "scale(1)",
              filter: isHovered
                ? "drop-shadow(0 0 30px rgba(147, 51, 234, 0.4))"
                : "none",
            }}
          >
            {project.image}
          </div> */}

          <div className="relative w-full h-64 lg:h-80 overflow-hidden flex items-center justify-center mb-4 transition-all duration-700 group-hover:opacity-60 opacity-30">
            <a href={project.demoUrl} target="_blank">
              <img
                src={project.image}
                alt="Project"
                className="transition-transform cursor-pointer duration-700 transform group-hover:scale-110 max-h-full max-w-full object-contain"
                style={{
                  filter: isHovered
                    ? "drop-shadow(0 0 30px rgba(147, 51, 234, 0.4))"
                    : "none",
                }}
              />
            </a>
          </div>

          <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="text-purple-400 font-bold text-lg">
              {project.category}
            </div>
            <div className="text-gray-400 text-sm">{project.year}</div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div
          className={`absolute bottom-6 right-6 w-24 h-24 bg-gradient-to-br ${project.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700`}
        ></div>

        <div
          className="absolute top-4 right-4 w-4 h-4 border-2 border-purple-400/40 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ transitionDelay: "200ms" }}
        ></div>
        <div
          className="absolute bottom-8 left-8 w-6 h-6 border-2 border-blue-400/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ transitionDelay: "400ms" }}
        ></div>
      </div>
    </div>
  );
};

const EmailContact = () => {
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [emailStatus, setEmailStatus] = useState("idle");
  const [copied, setCopied] = useState(false);
  const myEmail = "adityakumargoyal06@gmail.com";

  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

  const handleInputChange = (e) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleQuickEmail = () => {
    const subject = encodeURIComponent("Collaboration Opportunity");
    const body = encodeURIComponent(
      `Hi Aditya,\n\nI'm interested in discussing potential collaboration opportunities with you.\n\nBest regards,`
    );
    window.open(`mailto:${myEmail}?subject=${subject}&body=${body}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = emailData;

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    setEmailStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey, // Replace this with your actual Web3Forms access key
          name,
          email,
          subject: subject || "Contact from Portfolio",
          message,
          reply_to: "adityakumargoyal06@gmail.com",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setEmailStatus("sent");
        setEmailData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send email.");
      }
    } catch (error) {
      console.error("Email send error:", error);
      setEmailStatus("error");
    } finally {
      setTimeout(() => setEmailStatus("idle"), 3000);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/50 border border-gray-700/60 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/8 via-blue-500/8 to-cyan-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/15 to-blue-500/15 rounded-full blur-2xl"></div>

        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
            <Mail className="w-6 h-6 mr-3 text-purple-400" />
            Contact Information
          </h3>

          <div className="space-y-6">
            <div className="group/item hover:bg-gray-800/40 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-gray-700/60">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-purple-500/15 border border-purple-500/30 p-3 rounded-xl mr-4 group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Email</div>
                    <div className="text-white font-medium break-all">
                      {myEmail}
                    </div>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors duration-300 transform hover:scale-110"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="group/item hover:bg-gray-800/40 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-gray-700/60">
              <div className="flex items-center">
                <div className="bg-green-500/15 border border-green-500/30 p-3 rounded-xl mr-4 group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Phone</div>
                  <a
                    href="tel:8920211168"
                    className="text-white hover:text-green-400 transition-colors duration-300 font-medium"
                  >
                    +91 8920211168
                  </a>
                </div>
              </div>
            </div>

            <div className="group/item hover:bg-gray-800/40 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-gray-700/60">
              <div className="flex items-center">
                <div className="bg-blue-500/15 border border-blue-500/30 p-3 rounded-xl mr-4 group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Location</div>
                  <a
                    href="https://iiitu.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    IIIT Una, Himachal Pradesh
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700/60">
            <div className="space-y-3">
              <button
                onClick={handleQuickEmail}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-purple-500/30 relative overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <Send className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Quick Email</span>
              </button>

              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/aditya-kumar-goyal-1a631328a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Aditya100905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/50 border border-gray-700/60 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/8 via-blue-500/8 to-purple-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-500/15 to-blue-500/15 rounded-full blur-2xl"></div>

        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
            <Send className="w-6 h-6 mr-3 text-green-400" />
            Send Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={emailData.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/60 border border-gray-600/60 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={emailData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/60 border border-gray-600/60 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={emailData.subject}
                onChange={handleInputChange}
                className="w-full bg-gray-800/60 border border-gray-600/60 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors duration-300"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Message*
              </label>
              <textarea
                name="message"
                value={emailData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full bg-gray-800/60 border border-gray-600/60 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Tell me about your project or idea..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={emailStatus === "sending"}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-green-500/30 relative overflow-hidden group/btn"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              {emailStatus === "sending" ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  <span className="relative z-10">Sending...</span>
                </>
              ) : emailStatus === "sent" ? (
                <>
                  <Check className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">Message Sent!</span>
                </>
              ) : emailStatus === "error" ? (
                <>
                  <X className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">Error - Try Again</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">Send Message</span>
                </>
              )}
            </button>

            <p className="text-gray-400 text-xs text-center">
              Your message will be sent securely using Web3Forms
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [skillsInView, setSkillsInView] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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
          className={`max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 transform transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-8 relative">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500/15 to-blue-500/15 border border-purple-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-purple-300 font-medium">
                Available for opportunities
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Aditya
            </span>
          </h1>

          <div className="h-16 mb-8">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
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
              className="group bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center transform hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-purple-500/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
              <span className="relative z-10">View My Work</span>
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="group border-2 border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center hover:bg-gradient-to-r hover:from-gray-800/60 hover:to-gray-700/60 transform hover:scale-110 hover:-rotate-1 backdrop-blur-sm"
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

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
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
              <Heart className="w-5 h-5 text-red-400" />
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
              &copy; {new Date().getFullYear()} Aditya Kumar Goyal. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
