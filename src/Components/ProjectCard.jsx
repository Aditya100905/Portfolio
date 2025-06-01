// import React, { useState } from "react";
// import { ExternalLink, Eye, Sparkles } from "lucide-react";
// import { Github } from "./Icons.jsx";

// const ProjectCard = ({ project, index }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [imageLoaded, setImageLoaded] = useState(false);

//   return (
//     <div
//       className={`relative overflow-hidden rounded-3xl border border-gray-800/50 backdrop-blur-sm transition-all duration-700 hover:border-purple-500/50 group ${
//         index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//       } flex flex-col md:flex hover:shadow-2xl hover:shadow-purple-500/20`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{
//         transform: isHovered
//           ? "translateY(-12px) scale(1.02)"
//           : "translateY(0) scale(1)",
//         transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/50"></div>
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//         <div
//           className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-15`}
//         ></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 animate-pulse"></div>
//       </div>

//       <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//         {[...Array(12)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-purple-400/40 rounded-full animate-ping"
//             style={{
//               left: `${10 + i * 8}%`,
//               top: `${15 + (i % 3) * 30}%`,
//               animationDelay: `${i * 0.3}s`,
//               animationDuration: "3s",
//             }}
//           />
//         ))}
//       </div>

//       <div className="md:w-1/2 p-6 lg:p-10 relative z-10 flex flex-col justify-center">
//         <div className="inline-flex items-center bg-gradient-to-r from-purple-500/15 to-blue-500/15 border border-purple-500/30 rounded-full px-4 py-2 mb-6 w-fit group-hover:border-purple-400/50 transition-all duration-500">
//           <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
//           <Sparkles className="w-4 h-4 text-purple-400 mr-2 transition-transform duration-500" />
//           <span className="text-sm text-purple-300 font-medium">
//             {project.status}
//           </span>
//         </div>

//         <h3 className="text-2xl lg:text-4xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
//           {project.title}
//         </h3>
//         <p className="text-lg text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
//           {project.subtitle}
//         </p>

//         <div className="relative overflow-hidden">
//           <p className="text-gray-300 leading-relaxed mb-6 text-sm lg:text-base transition-all duration-500 group-hover:text-white">
//             {project.description}
//           </p>
//         </div>

//         <div className="grid grid-cols-3 gap-3 mb-6">
//           {project.metrics.map((metric, metricIndex) => (
//             <div
//               key={metricIndex}
//               className="text-center bg-gray-800/40 rounded-lg p-3 border border-gray-700/40 group-hover:border-purple-500/40 group-hover:bg-gray-700/40 transition-all duration-500"
//               style={{
//                 transform: isHovered
//                   ? `translateY(-${metricIndex * 3}px)`
//                   : "translateY(0)",
//                 transitionDelay: `${metricIndex * 100}ms`,
//               }}
//             >
//               <div className="text-purple-400 font-bold text-xs group-hover:text-purple-300 transition-colors duration-300">
//                 {metric}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex flex-wrap gap-2 mb-6">
//           {project.technologies.map((tech, techIndex) => (
//             <span
//               key={techIndex}
//               className="bg-gray-800/60 border border-gray-700/60 text-purple-300 px-3 py-1 rounded-lg text-xs font-medium hover:border-purple-500/40 hover:bg-purple-500/15 transition-all duration-300 cursor-default"
//               style={{
//                 transform: isHovered
//                   ? "translateY(-6px) scale(1.05)"
//                   : "translateY(0) scale(1)",
//                 transitionDelay: `${techIndex * 50}ms`,
//               }}
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         <div className="flex flex-col sm:flex-row gap-3">
//           <a
//             href={project.demoUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group/btn bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-110 shadow-lg hover:shadow-purple-500/30 relative overflow-hidden"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-all duration-700 transform translate-x-[-100%] group-hover/btn:translate-x-[100%]"></div>
//             <Eye className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform duration-300 relative z-10" />
//             <span className="relative z-10">Live Demo</span>
//             <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
//           </a>
//           <a
//             href={project.sourceUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group/btn border border-gray-600 hover:border-gray-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center hover:bg-gradient-to-r hover:from-gray-800/60 hover:to-gray-700/60 transform hover:scale-110 backdrop-blur-sm relative overflow-hidden"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-gray-700/30 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
//             <Github className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform duration-300 relative z-10" />
//             <span className="relative z-10">Source Code</span>
//           </a>
//         </div>
//       </div>

//       <div className="md:w-1/2 relative min-h-[250px] md:min-h-[400px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center group-hover:from-gray-800 group-hover:to-gray-700 transition-all duration-700 overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/15 rounded-full blur-xl animate-pulse"></div>
//           <div
//             className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-blue-500/15 rounded-full blur-lg animate-pulse"
//             style={{ animationDelay: "1s" }}
//           ></div>
//         </div>

//         <div className="relative z-10 flex flex-col items-center">
//           <div className="relative w-full h-64 lg:h-80 overflow-hidden flex items-center justify-center mb-4 transition-all duration-700 group-hover:opacity-60 opacity-30">
//             <a href={project.demoUrl} target="_blank">
//               <img
//                 src={project.image}
//                 alt="Project"
//                 className="transition-transform cursor-pointer duration-700 transform group-hover:scale-110 max-h-full max-w-full object-contain"
//                 style={{
//                   filter: isHovered
//                     ? "drop-shadow(0 0 30px rgba(147, 51, 234, 0.4))"
//                     : "none",
//                 }}
//               />
//             </a>
//           </div>

//           <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//             <div className="text-purple-400 font-bold text-lg">
//               {project.category}
//             </div>
//             <div className="text-gray-400 text-sm">{project.year}</div>
//           </div>
//         </div>

//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//         <div
//           className={`absolute bottom-6 right-6 w-24 h-24 bg-gradient-to-br ${project.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700`}
//         ></div>

//         <div
//           className="absolute top-4 right-4 w-4 h-4 border-2 border-purple-400/40 opacity-0 group-hover:opacity-100 transition-all duration-500"
//           style={{ transitionDelay: "200ms" }}
//         ></div>
//         <div
//           className="absolute bottom-8 left-8 w-6 h-6 border-2 border-blue-400/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
//           style={{ transitionDelay: "400ms" }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;


import React, { useState, useEffect } from "react";
import { ExternalLink, Eye, Sparkles, Github } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-gray-800/50 backdrop-blur-sm transition-all duration-700 hover:border-purple-500/50 group ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } flex flex-col md:flex hover:shadow-2xl hover:shadow-purple-500/20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered
          ? "translateY(-12px) scale(1.02)"
          : "translateY(0) scale(1)",
        transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Enhanced Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/60"></div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 via-blue-500/15 to-cyan-500/15 animate-pulse"></div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/50 rounded-full animate-ping"
            style={{
              left: `${5 + i * 6}%`,
              top: `${10 + (i % 4) * 25}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: "2.5s",
            }}
          />
        ))}
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 p-6 lg:p-10 relative z-10 flex flex-col justify-center">
        {/* Enhanced Status Badge */}
        <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/40 rounded-full px-4 py-2 mb-6 w-fit group-hover:border-purple-400/60 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-500">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse shadow-sm shadow-green-400/50"></div>
          <Sparkles className="w-4 h-4 text-purple-400 mr-2 transition-transform duration-500 group-hover:rotate-12" />
          <span className="text-sm text-purple-300 font-medium">
            {project.status}
          </span>
        </div>

        {/* Enhanced Title */}
        <h3 className="text-2xl lg:text-4xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 leading-tight">
          {project.title}
        </h3>
        
        {/* Enhanced Subtitle */}
        <p className="text-lg text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300 font-medium">
          {project.subtitle}
        </p>

        {/* Enhanced Description */}
        <div className="relative overflow-hidden mb-6">
          <p className="text-gray-300 leading-relaxed text-sm lg:text-base transition-all duration-500 group-hover:text-white/90">
            {project.description}
          </p>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Enhanced Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {project.metrics.map((metric, metricIndex) => (
            <div
              key={metricIndex}
              className="text-center bg-gray-800/50 rounded-xl p-3 border border-gray-700/50 group-hover:border-purple-500/50 group-hover:bg-gray-700/50 group-hover:shadow-lg group-hover:shadow-purple-500/10 transition-all duration-500 backdrop-blur-sm"
              style={{
                transform: isHovered
                  ? `translateY(-${metricIndex * 4}px) scale(1.02)`
                  : "translateY(0) scale(1)",
                transitionDelay: `${metricIndex * 100}ms`,
              }}
            >
              <div className="text-purple-400 font-bold text-xs group-hover:text-purple-300 transition-colors duration-300">
                {metric}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-gray-800/70 border border-gray-700/70 text-purple-300 px-3 py-1.5 rounded-lg text-xs font-medium hover:border-purple-500/50 hover:bg-purple-500/20 hover:shadow-md hover:shadow-purple-500/20 transition-all duration-300 cursor-default backdrop-blur-sm"
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

        {/* Enhanced Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-purple-500/40 relative overflow-hidden"
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
            className="group/btn border border-gray-600 hover:border-gray-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center hover:bg-gradient-to-r hover:from-gray-800/70 hover:to-gray-700/70 transform hover:scale-105 backdrop-blur-sm relative overflow-hidden hover:shadow-lg hover:shadow-gray-700/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700/40 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            <Github className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform duration-300 relative z-10" />
            <span className="relative z-10">Source Code</span>
          </a>
        </div>
      </div>

      {/* Enhanced Image Section */}
      <div className="md:w-1/2 relative min-h-[250px] md:min-h-[400px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center group-hover:from-gray-800 group-hover:to-gray-700 transition-all duration-700 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-36 h-36 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-blue-500/20 rounded-full blur-lg animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-20 h-20 bg-cyan-500/15 rounded-full blur-md animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Enhanced Project Image */}
          <div className="relative w-full h-64 lg:h-80 overflow-hidden flex items-center justify-center mb-4 transition-all duration-700 group-hover:opacity-70 opacity-40">
            <a href={project.demoUrl} target="_blank" className="relative">
              <img
                src={project.image}
                alt="Project Preview"
                className="transition-transform cursor-pointer duration-700 transform group-hover:scale-110 max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                style={{
                  filter: isHovered
                    ? "drop-shadow(0 0 40px rgba(147, 51, 234, 0.5)) brightness(1.1)"
                    : "drop-shadow(0 0 20px rgba(0, 0, 0, 0.3))",
                }}
                onLoad={() => setImageLoaded(true)}
              />
              {/* Image Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </a>
          </div>

          {/* Enhanced Project Info Overlay */}
          <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <div className="text-purple-400 font-bold text-lg mb-1">
              {project.category}
            </div>
            <div className="text-gray-400 text-sm font-medium">{project.year}</div>
          </div>
        </div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div
          className={`absolute bottom-6 right-6 w-28 h-28 bg-gradient-to-br ${project.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-80 transition-all duration-700`}
        ></div>

        {/* Enhanced Corner Decorations */}
        <div
          className="absolute top-4 right-4 w-4 h-4 border-2 border-purple-400/50 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"
          style={{ transitionDelay: "200ms" }}
        ></div>
        <div
          className="absolute bottom-8 left-8 w-6 h-6 border-2 border-blue-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"
          style={{ transitionDelay: "400ms" }}
        ></div>
        <div
          className="absolute top-1/2 left-4 w-2 h-8 bg-gradient-to-b from-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ transitionDelay: "300ms" }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectCard;