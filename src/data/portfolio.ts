import profilePic from '../assets/profile-pic.png';
import type { NavItem, Project, TimelineItem } from '../types';

export const developer = {
  name: 'Priyanshu Srivastava',
  initials: 'PS',
  role: 'Full-stack Developer and AI/ML Builder',
  location: 'Sri City, India',
  profilePic,
  about:
    'I build polished web apps and practical AI/ML projects, with a focus on clean interfaces, fast iteration, and ideas that are easy to understand once they are in someone hands.',
  links: {
    github: 'https://github.com/priyanshutryingtocode',
    linkedin: 'https://www.linkedin.com/in/priyanshu-srivastava-523783290/',
    leetcode: 'https://leetcode.com/u/Priyanshu7011/',
  },
};

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '12+', label: 'Projects' },
  { value: '8.5', label: 'CGPA' },
  { value: '2025', label: 'AI/ML Internship' },
];

export const skills = [
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'TypeScript',
  'JavaScript',
  'Supabase',
  'MongoDB',
  'PostgreSQL',
  'Docker',
  'Streamlit',
  'Machine Learning',
];

export const projects: Project[] = [
  {
    title: 'AI Order Assistance Chatbot',
    description:
      'A Gemini, LangChain, and Supabase chatbot that retrieves order details and gives real-time customer support through a Streamlit interface.',
    tags: ['Python', 'Supabase', 'LangChain'],
    image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=1600&auto=format&fit=crop',
    liveUrl: 'https://orderstatusassistant.streamlit.app/',
    githubUrl: 'https://github.com/priyanshutryingtocode/ChatbotProject',
    featured: true,
  },
  {
    title: 'KinOrbia',
    description:
      'A movie discovery and watchlist platform for film enthusiasts, built with a responsive Next.js interface and community-first product flows.',
    tags: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    image: 'https://images.pexels.com/photos/7991486/pexels-photo-7991486.jpeg?auto=compress&cs=tinysrgb&w=1600',
    liveUrl: 'https://kinorbia.vercel.app',
    githubUrl: 'https://github.com/priyanshutryingtocode/kinorbia',
    featured: true,
  },
  {
    title: 'Reseldia',
    description:
      'A residential community platform with event management, responsive layouts, and live engagement features for neighborhood interaction.',
    tags: ['React', 'Tailwind CSS', 'Supabase'],
    image: 'https://www.commercialproperty.review/wp-content/uploads/2020/11/prestige-shantiniketan-Bangalore.jpg',
    liveUrl: 'https://reseldia.vercel.app',
    githubUrl: 'https://github.com/priyanshutryingtocode/Reseldia',
    featured: true,
  },
  {
    title: 'TuneTurtle',
    description:
      'An AI music intelligence dashboard with mood-based theming, lyrics extraction, and interactive analysis for music discovery.',
    tags: ['React', 'AI', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop',
    liveUrl: 'https://tune-turtle.vercel.app/',
    githubUrl: 'https://github.com/priyanshutryingtocode/TuneTurtle',
  },
  {
    title: 'LuminaBooks',
    description:
      'A responsive publisher and book sales landing page focused on editorial visuals, product storytelling, and smooth front-end interactions.',
    tags: ['React', 'Tailwind CSS', 'UI Design'],
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1600&auto=format&fit=crop',
    liveUrl: 'https://lumina-books-1ifc-qebsoesvx.vercel.app/',
    githubUrl: 'https://github.com/priyanshutryingtocode/LuminaBooks',
  },
  {
    title: 'WebCalendar',
    description:
      'A web calendar inspired by physical wall calendars, with month imagery, date selection, and note-taking interactions.',
    tags: ['React', 'Tailwind CSS', 'UX'],
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1600&auto=format&fit=crop',
    liveUrl: 'https://web-calendar-teal.vercel.app/',
    githubUrl: 'https://github.com/priyanshutryingtocode/WebCalendar',
  },
  {
    title: 'Handoff Simulator',
    description:
      'A Streamlit simulator for mobile network handoffs, modeling signal strength, latency, and performance across network cells.',
    tags: ['Python', 'Streamlit', 'Matplotlib'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
    liveUrl: 'https://handoff-simulator-7011.streamlit.app/',
    githubUrl: 'https://github.com/priyanshutryingtocode/Handoff-Simulator',
  },
  {
    title: 'Weather App',
    description:
      'A Dockerized weather application deployed on Render, delivering real-time weather updates from a public API.',
    tags: ['Python', 'Docker', 'API'],
    image: 'https://images.unsplash.com/photo-1695697478813-9cd8058712e7?w=1600&auto=format&fit=crop&q=80',
    liveUrl: 'https://weatherapp-82c3.onrender.com/',
    githubUrl: 'https://github.com/priyanshutryingtocode/WeatherApp',
  },
  {
    title: 'Student Management System',
    description:
      'A terminal-based C++ student record manager with CRUD operations and file-based persistence.',
    tags: ['C++', 'OOP', 'File Handling'],
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop',
    githubUrl: 'https://github.com/priyanshutryingtocode/Student-Management-System',
  },
  {
    title: 'VLSI Congestion Prediction',
    description:
      'A deep learning implementation for congestion prediction in VLSI design, aimed at improving placement and routing decisions.',
    tags: ['Python', 'Deep Learning', 'Image Processing'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    githubUrl: 'https://github.com/priyanshutryingtocode/Implementation-of-Deep-Learning-for-Congestion-Prediction-in-VLSI',
  },
  {
    title: 'Asteroid Class Prediction',
    description:
      'A machine learning project that classifies asteroids using physical and orbital characteristics.',
    tags: ['Python', 'Machine Learning', 'Data Science'],
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop',
    githubUrl: 'https://github.com/priyanshutryingtocode/Asteroid-Class-Prediction',
  },
  {
    title: 'Chat3PO',
    description:
      'A Flask and Socket.IO chatroom with real-time messaging and a Gemini-powered chatbot inspired by C-3PO.',
    tags: ['Python', 'Flask', 'Generative AI'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1600&auto=format&fit=crop',
    liveUrl: 'https://chat3po.onrender.com/',
    githubUrl: 'https://github.com/priyanshutryingtocode/Chat3PO',
  },
];

export const education: TimelineItem[] = [
  {
    title: 'B.Tech in Electronics and Communication Engineering',
    organization: 'Indian Institute of Information Technology, Sri City',
    duration: 'August 2023 - Present',
    details: [
      'Current CGPA: 8.5',
      'Relevant coursework includes Data Structures, OOP, Pattern Recognition, and Computer Networks.',
    ],
  },
];

export const experience: TimelineItem[] = [
  {
    title: 'Full Stack Intern',
    organization: 'Silvertouch Technologies Ltd',
    duration: 'May 2026 - June 2026',
    details: [
      'Contributed to client-facing Angular/TypeScript applications within a cross-functional team, building reusable components and services, debugging production issues, and improving code modularity across the codebase.',
      'Architected and maintained RESTful APIs, bridging frontend interfaces with backend data services; reduced application load time by 50% through strategic implementation of lazy loading.',
    ],
  },
  {
    title: 'AI/ML Development Intern',
    organization: 'HCLTech',
    duration: 'May 2025 - June 2025',
    details: [
      'Built a LangChain-powered RAG pipeline for tabular CSV data, integrating retrieval mechanisms, prompt engineering, and LLM orchestration to enable accurate responses to complex natural-language queries.',
      'Benchmarked transformer models including Llama, Mistral, and DeepSeek using Hugging Face and Ollama; conducted local inference tests across temperature, top-k, and top-p configurations to analyse and optimise generation behaviour.',
    ],
  },
];

export const leadership: TimelineItem[] = [
  { title: 'Design Lead', organization: 'Matrix', duration: 'August 2025 - Present' },
  { title: 'Game Development Core Member', organization: 'IOTA', duration: 'August 2024 - May 2025' },
  { title: 'Design Core Member', organization: 'Nirvana', duration: 'October 2024 - May 2025' },
  { title: 'Design Core Member', organization: 'f/Stops', duration: 'September 2024 - May 2025' },
];