import profilePic from '../assets/profile-pic.png';
import mainPic from '../assets/me_pic.jpeg';
import type { NavItem, Project, TimelineItem } from '../types';

export const developer = {
  name: 'Priyanshu Srivastava',
  initials: 'PS',
  role: 'Full-stack Developer and AI/ML Builder',
  location: 'Sri City, India',
  profilePic,
  mainPic,
  about:
    'I build polished web apps and practical AI/ML projects, with a focus on fast iteration and ideas that are easy to understand once they are in someones hands.',
  links: {
    github: 'https://github.com/priyanshutryingtocode',
    linkedin: 'https://www.linkedin.com/in/priyanshu-srivastava-523783290/',
    leetcode: 'https://leetcode.com/u/Priyanshu7011/',
  },
};

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
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
    title: 'Influencer Matcher',
    description:
      'A web application that matches brands with social media influencers based on campaign requirements, audience demographics, and engagement metrics.',
    tags: ['Python', 'Supabase', 'RAG'],
    liveUrl: 'https://influencermatcher.streamlit.app//',
    githubUrl: 'https://github.com/priyanshutryingtocode/influencer_matcher',
    featured: true,
  },
  {
    title: 'KinOrbia',
    description:
      'A movie discovery and watchlist platform for film enthusiasts, built with a responsive Next.js interface and community-first product flows.',
    tags: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    liveUrl: 'https://kinorbia.vercel.app',
    githubUrl: 'https://github.com/priyanshutryingtocode/kinorbia',
    featured: true,
  },
    {
    title: 'AI Order Assistance Chatbot',
    description:
      'A Gemini, LangChain, and Supabase chatbot that retrieves order details and gives real-time customer support through a Streamlit interface.',
    tags: ['Python', 'Supabase', 'LangChain'],
    liveUrl: 'https://orderstatusassistant.streamlit.app/',
    githubUrl: 'https://github.com/priyanshutryingtocode/ChatbotProject',
    featured: true,
  },
  {
    title: 'Reseldia',
    description:
      'A residential community platform with event management, responsive layouts, and live engagement features for neighborhood interaction.',
    tags: ['React', 'Tailwind CSS', 'Supabase'],
    liveUrl: 'https://reseldia.vercel.app',
    githubUrl: 'https://github.com/priyanshutryingtocode/Reseldia',
    featured: true,
  },
  {
    title: 'ReBot - AI Commit Analyser',
    description:
      'A RAG-powered AI tool that analyzes GitHub commit messages and provides insights on code quality, trends, and potential improvements.',
    tags: ['Python', 'Supabase', 'RAG'],
    liveUrl: 'https://rebotcodereview.streamlit.app/',
    githubUrl: 'https://github.com/priyanshutryingtocode/ReBot',
    featured: false,
  },
  {
    title: 'TuneTurtle',
    description:
      'An AI music intelligence dashboard with mood-based theming, lyrics extraction, and interactive analysis for music discovery.',
    tags: ['React', 'AI', 'Node.js'],
    liveUrl: 'https://tune-turtle.vercel.app/',
    githubUrl: 'https://github.com/priyanshutryingtocode/TuneTurtle',
  },
  {
    title: 'LuminaBooks',
    description:
      'A responsive publisher and book sales landing page focused on editorial visuals, product storytelling, and smooth front-end interactions.',
    tags: ['React', 'Tailwind CSS', 'UI Design'],
    liveUrl: 'https://lumina-books-1ifc-qebsoesvx.vercel.app/',
    githubUrl: 'https://github.com/priyanshutryingtocode/LuminaBooks',
  },
  {
    title: 'WebCalendar',
    description:
      'A web calendar inspired by physical wall calendars, with month imagery, date selection, and note-taking interactions.',
    tags: ['React', 'Tailwind CSS', 'UX'],
    liveUrl: 'https://web-calendar-teal.vercel.app/',
    githubUrl: 'https://github.com/priyanshutryingtocode/WebCalendar',
  },
  {
    title: 'Handoff Simulator',
    description:
      'A Streamlit simulator for mobile network handoffs, modeling signal strength, latency, and performance across network cells.',
    tags: ['Python', 'Streamlit', 'Matplotlib'],
    liveUrl: 'https://handoff-simulator-7011.streamlit.app/',
    githubUrl: 'https://github.com/priyanshutryingtocode/Handoff-Simulator',
  },
  {
    title: 'Signal Clone',
    description:
      'A real-time chat application built with NextJS, Python and WebSockets, replicating the core features of the Signal messaging platform.',
    tags: ['NextJS', 'Tailwind CSS', 'Python'],
    liveUrl: 'https://signal-clone-ochre.vercel.app/',
    githubUrl: 'https://github.com/priyanshutryingtocode/SignalClone',
  },
  {
    title: 'Student Management System',
    description:
      'A terminal-based C++ student record manager with CRUD operations and file-based persistence.',
    tags: ['C++', 'OOP', 'File Handling'],
    githubUrl: 'https://github.com/priyanshutryingtocode/Student-Management-System',
  },
  {
    title: 'VLSI Congestion Prediction',
    description:
      'A deep learning implementation for congestion prediction in VLSI design, aimed at improving placement and routing decisions.',
    tags: ['Python', 'Deep Learning', 'Image Processing'],
    githubUrl: 'https://github.com/priyanshutryingtocode/Implementation-of-Deep-Learning-for-Congestion-Prediction-in-VLSI',
  },
  {
    title: 'Asteroid Class Prediction',
    description:
      'A machine learning project that classifies asteroids using physical and orbital characteristics.',
    tags: ['Python', 'Machine Learning', 'Data Science'],
    githubUrl: 'https://github.com/priyanshutryingtocode/Asteroid-Class-Prediction',
  },
  {
    title: 'Snake Skate',
    description:
      'A replica of the classic Snake game built using JavaScript, HTML and CSS.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://priyanshutryingtocode.github.io/Snake-Skate/',
    githubUrl: 'https://github.com/priyanshutryingtocode/Snake-Skate',
  },
  {
    title: 'Home Automation System',
    description:
      'A home automation system built using embedded systems and C programming.',
    tags: ['Arduino', 'Hardware', 'C'],
    liveUrl: '',
    githubUrl: 'https://github.com/priyanshutryingtocode/Embedded_Systems_Home_Automation_Mini_Project',
  },
  {
    title: 'Chat3PO',
    description:
      'A Flask and Socket.IO chatroom with real-time messaging and a Gemini-powered chatbot inspired by C-3PO.',
    tags: ['Python', 'Flask', 'Generative AI'],
    liveUrl: 'https://chat3po.onrender.com/',
    githubUrl: 'https://github.com/priyanshutryingtocode/Chat3PO',
  },
  {
    title: 'Object Counter',
    description:
      'A conveyor belt + ultrasonic sensor system that counts objects and displays the count on a cloud database, built using Arduino and C programming.',
    tags: ['Arduino', 'Hardware', 'C'],
    liveUrl: '',
    githubUrl: 'https://github.com/priyanshutryingtocode/Control_System_Object_Counter',
  },
  {
    title: 'Weather App',
    description:
      'A Dockerized weather application deployed on Render, delivering real-time weather updates from a public API.',
    tags: ['Python', 'Docker', 'API'],
    liveUrl: 'https://weatherapp-82c3.onrender.com/',
    githubUrl: 'https://github.com/priyanshutryingtocode/WeatherApp',
  },
  {
    title: 'Authentication Based Door Lock System',
    description:
      'A door lock system that uses a numeric keypad to control access.',
    tags: ['Hardware', 'C++', 'C'],
    liveUrl: '',
    githubUrl: 'https://github.com/priyanshutryingtocode/Authentication_Based_Door_Unlocking',
  },
];

export const education: TimelineItem[] = [
  {
    title: 'B.Tech in Electronics and Communication Engineering',
    organization: 'Indian Institute of Information Technology, Sri City',
    duration: 'August 2023 - Present',
    details: [
      'Current CGPA: 8.5',
      'Relevant coursework includes Data Structures and Algorithms, OOPs, Pattern Recognition, and Computer Networks.',
    ],
  },
];

export const experience: TimelineItem[] = [
  {
    title: 'Full Stack Intern',
    organization: 'Silvertouch Technologies Ltd',
    duration: 'May 2026 - June 2026',
    details: [
      'Contributed to client-facing Angular/TypeScript applications within a cross-functional team, building 10+ reusable components and services, debugging production issues, and improving code modularity across the codebase.',
      'Utilised RESTful APIs, bridging frontend interfaces with backend data services and ensuring reliable data flow; reduced application load time by 30% through strategic implementation of lazy loading.',
    ],
  },
  {
    title: 'AI/ML Development Intern',
    organization: 'HCLTech',
    duration: 'May 2025 - June 2025',
    details: [
      'Worked on a LangChain-powered RAG pipeline for tabular CSV data, integrating retrieval mechanisms, prompt engineering, and LLM orchestration to answer complex natural-language queries with structured, source-grounded responses.',
      'Benchmarked 3 transformer models (Llama, Mistral, DeepSeek) across 10+ configurations of temperature, top-k, and top-p using Hugging Face and Ollama, producing a comparative report on generation quality and inference latency to guide model selection.',
    ],
  },
];

export const leadership: TimelineItem[] = [
  { title: 'Design Lead', organization: 'Matrix - Data Science Club', duration: 'August 2025 - Present' },
  { title: 'Game Development Core Member', organization: 'IOTA - Projects Club', duration: 'August 2024 - May 2025' },
  { title: 'Design Core Member', organization: 'Nirvana - Spirituality Club', duration: 'October 2024 - May 2025' },
  { title: 'Design Core Member', organization: 'f/Stops - Photography Club', duration: 'September 2024 - May 2025' },
];
