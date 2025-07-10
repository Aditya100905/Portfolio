import {
  Atom,
  Code2,
  Cpu,
  Database,
  FileCode,
  FlaskConical,
  Hash,
  Palette,
  Plus,
  Sliders,
  TerminalSquare,
} from "lucide-react";

export const skills = [
  // Programming Languages
  {
    name: "C",
    level: 75,
    category: "Language",
    icon: <Hash className="w-5 h-5" />,
    color: "from-pink-600 to-red-600",
    bgColor: "bg-pink-500/10",
  },
  {
    name: "C++",
    level: 75,
    category: "Language",
    icon: <Plus className="w-5 h-5" />,
    color: "from-green-600 to-emerald-600",
    bgColor: "bg-green-500/10",
  },
  {
    name: "Python",
    level: 75,
    category: "Language",
    icon: <TerminalSquare className="w-5 h-5" />,
    color: "from-green-500 to-blue-500",
    bgColor: "bg-green-500/10",
  },
  {
    name: "JavaScript",
    level: 85,
    category: "Language",
    icon: <FileCode className="w-5 h-5" />,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    name: "SQL",
    level: 30,
    category: "Language",
    icon: <Database className="w-5 h-5" />,
    color: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-500/10",
  },

  // Frontend
  {
    name: "HTML",
    level: 90,
    category: "Frontend",
    icon: <Code2 className="w-5 h-5" />,
    color: "from-orange-600 to-red-500",
    bgColor: "bg-orange-500/10",
  },
  {
    name: "CSS",
    level: 85,
    category: "Frontend",
    icon: <Palette className="w-5 h-5" />,
    color: "from-blue-600 to-indigo-600",
    bgColor: "bg-blue-500/10",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "Frontend",
    icon: <Sliders className="w-5 h-5" />,
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    name: "React.js",
    level: 90,
    category: "Frontend",
    icon: <Atom className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },

  // Backend / Framework
  {
    name: "Flask",
    level: 40,
    category: "Backend",
    icon: <FlaskConical className="w-5 h-5" />,
    color: "from-gray-600 via-gray-500 to-gray-100",
    bgColor: "bg-gray-500/10",
  },
  {
    name: "MySQL",
    level: 45,
    category: "Backend",
    icon: <Database className="w-5 h-5" />,
    color: "from-sky-600 to-blue-600",
    bgColor: "bg-sky-500/10",
  },

  // Analytics / Data
  {
    name: "Data Science",
    level: 20,
    category: "Analytics",
    icon: <Cpu className="w-5 h-5" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
];
