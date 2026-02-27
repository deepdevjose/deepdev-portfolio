/**
 * Articles Metadata (Client-Safe Bundle)
 * 
 * This file contains ONLY metadata for article listings.
 * NO markdown content is included to keep the client bundle small.
 * 
 * Full article content (with markdown) is loaded server-side only.
 * See articlesData.js for full content (server-only).
 */

export const articlesMetadata = [
  {
    id: 1,
    slug: "ai-driven-health-twin",
    title: "Validating an AI-Driven Health Twin for Industrial Robot Arms",
    description: "Exploring the design and academic validation of an AI-powered predictive health twin for industrial robot arms, focused on anticipating failures before they propagate into costly shutdowns.",
    category: "AI Research",
    reading_time: "8 min read",
    cover_image: "/blogs/health-twin-cover.jpg",
    date: "2025 – Present",
    tags: ["AI", "PredictiveMaintenance", "DigitalTwin", "Robotics", "IndustrialSystems"]
  },
  {
    id: 2,
    slug: "virtual-dynamic-museum",
    title: "Engineering a Virtual and Dynamic Museum for Digital Cultural Preservation",
    description: "Documenting the engineering and deployment of a virtual museum system developed to preserve and present the artistic legacy of Byron Gálvez, culminating in a real public exhibition.",
    category: "Academic Project",
    reading_time: "9 min read",
    cover_image: "/blogs/museum-cover.jpg",
    date: "2025",
    tags: ["DigitalHeritage", "WebEngineering", "VirtualMuseum", "AcademicProject", "SystemsDesign"],
    downloadUrl: "/blogs/Article.pdf"
  },
  {
    id: 3,
    slug: "ai-virtual-psychologist",
    title: "Designing an AI-Based Virtual Psychologist for Educational Environments",
    description: "Documenting the design and institutional presentation of an AI-based virtual psychologist, alongside a broader vision for STEM, VR, and robotics laboratories as integrated educational infrastructure.",
    category: "AI Systems",
    reading_time: "9 min read",
    cover_image: "/blogs/ai-psychologist-cover.jpg",
    date: "2025",
    tags: ["ArtificialIntelligence", "Education", "AppliedAI", "EthicalSystems", "STEMInfrastructure"]
  },
  {
    id: 5,
    slug: "vex-national-competition",
    title: "Competing at National Scale: Engineering a VEX Robotics Team to a Top-10 Finish",
    description: "Documenting participation in a national VEX Robotics competition, finishing 7th place nationwide as a robotics developer responsible for software behavior and system tuning.",
    category: "Robotics",
    reading_time: "8 min read",
    cover_image: "/blogs/vex-national-cover.jpg",
    date: "2025 – Present",
    tags: ["Robotics", "VEX", "ControlSystems", "EngineeringCompetition", "TeamEngineering"]
  },
  {
    id: 6,
    slug: "vr-labs-stem-education",
    title: "Deploying Virtual Reality Labs for High School STEM Education",
    description: "Documenting the design, setup, and operation of VR sessions using Pico Neo 3 Pro headsets with high school students in constrained classroom environments.",
    category: "STEM Education",
    reading_time: "8 min read",
    cover_image: "/blogs/vr-labs-cover.jpg",
    date: "2025",
    tags: ["VirtualReality", "STEMEducation", "AppliedEngineering", "EducationalTechnology", "VRLabs"]
  },
  {
    id: 7,
    slug: "stem-robotics-labs-introduction",
    title: "Introducing Robotics Through STEM Labs: Beyond Assembly and Code",
    description: "A session designed to introduce robotics through engineering culture and soft skills, using VEX Robotics as a systems-level reference point.",
    category: "STEM Education",
    reading_time: "7 min read",
    cover_image: "/blogs/stem-robotics-cover.jpg",
    date: "2025",
    tags: ["STEMEducation", "Robotics", "VEXRobotics", "EngineeringCulture", "SoftSkills"]
  },
  {
    id: 8,
    slug: "vex-competitive-robotics-training",
    title: "Teaching Competitive Robotics: Hardware, Software, and Systems Thinking with VEX",
    description: "A hands-on technical workshop where students work directly with robot hardware, embedded C++ programming, and system integration for competitive robotics.",
    category: "STEM Education",
    reading_time: "8 min read",
    cover_image: "/blogs/vex-training-cover.jpg",
    date: "2025",
    tags: ["Robotics", "VEXRobotics", "STEMEducation", "CPlusPlus", "AppliedEngineering"]
  },
  {
    id: 9,
    slug: "competitive-programming-contests",
    title: "Competing in Programming Contests: Learning Under Time and Cognitive Pressure",
    description: "Documenting participation in a competitive programming event (Coding Cup) and the skills developed through problem-solving under constraints.",
    category: "Software Engineering",
    reading_time: "7 min read",
    cover_image: "/blogs/coding-cup-cover.jpg",
    date: "2024",
    tags: ["CompetitiveProgramming", "SoftwareEngineering", "ProblemSolving", "Algorithms", "Education"]
  },
  {
    id: 10,
    slug: "stem-robotics-ai-public-media",
    title: "Bringing STEM, Robotics, and AI to Public Media",
    description: "Documenting my first experience participating in a live interview at Radio y Televisión de Hidalgo, discussing STEM laboratories, VEX Robotics, and artificial intelligence.",
    category: "Education",
    reading_time: "6 min read",
    cover_image: "/blogs/stem-media-cover.jpg",
    date: "2025",
    tags: ["STEM", "Robotics", "ArtificialIntelligence", "Education", "PublicOutreach"]
  },
  {
    id: 11,
    slug: "vision-language-runtime-browser",
    title: "Building a Vision-Language Model Runtime That Runs Entirely in Your Browser",
    description: "Engineering a privacy-first, zero-dependency vision-language system using WebGPU, vanilla JavaScript, and Apple's FastVLM model—no frameworks, no servers, no API calls.",
    category: "AI Systems",
    reading_time: "10 min read",
    cover_image: "/blogs/vlmr_cover.png",
    date: "2025 – 2026",
    tags: ["WebGPU", "ComputerVision", "VisionLanguageModels", "Privacy", "VanillaJS", "BrowserAI"]
  }
];
