/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useEffect, useState, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import profilePic from './assets/profile-pic.png';


const DEVELOPER_NAME = 'Priyanshu Srivastava';
const ABOUT_PLACEHOLDER = 'I am a passionate full-stack developer specializing in crafting elegant, high-performance web applications. With a strong foundation in modern technologies like React and Node.js, and a keen grasp of modern AI and ML applications, I excel at building scalable solutions that deliver exceptional user experiences. I am always looking forward to tackling new challenges and pushing the boundaries of what\'s possible on the web.';

const EDUCATION = [
  {
    degree: 'B.Tech in Electronics and Communication Engineering',
    university: 'Indian Institute of Information Technology, Sri City',
    duration: 'August 2023 - Present',
    details: [
      'Current CGPA: 8.54',
      'Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming',
    ],
  },
];

const SKILLS = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
];

const PROJECTS = [

  {
    title: 'AI Order Assistance Chatbot',
    description: 'A chatbot that leverages Gemini, Langchain and Supabase to access order details for a E-commerce platform, providing real-time assistance to customers, deployed via Streamlit.',
    tags: ['Python', 'Supabase', 'Langchain'],
    image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
    liveUrl: 'https://chatbotproject-4vsvmq4kgebnur4cootjn7.streamlit.app/',
    githubUrl: 'https://github.com/priyanshutryingtocode/ChatbotProject',
  },
];

const WORK_EXPERIENCE = [
  {
    title: 'AI/ML Development Intern',
    company: 'HCLTech',
    duration: 'May 2025 - June 2025',
    description: [
      'Developed features for an LLM based client for customers of online e-commerce platforms.',
      'Collaborated with a team of 5 engineers.',
      'Implemented various ML models and algorithms to enhance the client\'s capabilities.',
    ],
  },
];

const VOLUNTEERING = [

  {
    role: 'Game Development Core Member',
    organization: 'IOTA',
    duration: 'August 2024 - May 2025'
  },
  {
    role: 'Design Lead',
    organization: 'Matrix',
    duration: 'August 2025 - Present'
  },
  {
    role: 'Design Core Member',
    organization: 'Nirvana',
    duration: 'October 2024 - May 2025'
  },
  {
    role: 'Design Core Member',
    organization: 'f/Stops',
    duration: 'September 2024 - May 2025'
  }
];



const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLElement>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsOnScreen(true);
        observer.disconnect();
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isOnScreen] as const;
};



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <About content={ABOUT_PLACEHOLDER} />
        <Education /> {/* Corrected placement */}
        <Skills />
        <WorkExperience />
        <Volunteering />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


// --- LAYOUT COMPONENTS ---
interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = targetId ? document.querySelector(targetId) : null;

    if (targetElement) {
      const headerElement = document.querySelector('.header') as HTMLElement;
      const headerOffset = headerElement ? headerElement.offsetHeight : 0;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo" onClick={handleLogoClick}>{DEVELOPER_NAME}</a>
        <nav className={isMenuOpen ? 'mobile-nav is-open' : 'mobile-nav'}>
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#education" onClick={handleNavClick}>Education</a> {/* Added Education link */}
          <a href="#skills" onClick={handleNavClick}>Skills</a>
          <a href="#experience" onClick={handleNavClick}>Experience</a>
          <a href="#volunteering" onClick={handleNavClick}>Volunteering</a>
          <a href="#projects" onClick={handleNavClick}>Projects</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </nav>
        <button className={`menu-toggle ${isMenuOpen ? 'is-active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

interface SectionProps {
  id: string;
  className: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  // Memoize the options object to prevent re-running the hook's effect on every render
  const options = useMemo(() => ({ threshold: 0.2 }), []);
  const [ref, isOnScreen] = useOnScreen(options);

  return (
    <section ref={ref} id={id} className={`${className} section ${isOnScreen ? 'is-visible' : ''}`}>
      {children}
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="social-links">
        <a href="https://github.com/priyanshutryingtocode" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12,2A10,10,0,0,0,2,12c0,4.42,2.87,8.17,6.84,9.5.5.09.68-.22.68-.48s0-.85,0-1.67c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61,1,.07,1.53,1.03,1.53,1.03.89,1.53,2.34,1.09,2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95,0-1.09.39-1.99,1.03-2.69-.1-.25-.45-1.27.1-2.65,0,0,.84-.27,2.75,1.02.79-.22,1.65-.33,2.5-.33s1.71.11,2.5.33c1.91-1.29,2.75-1.02,2.75-1.02.551.38.2,2.4.1,2.65.64.7,1.03,1.6,1.03,2.69,0,3.85-2.34,4.7-4.57,4.94.36.31.68.92.68,1.85,0,1.34,0,2.42,0,2.75,0,.27.18.58.69.48A10,10,0,0,0,22,12,10,10,0,0,0,12,2Z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/priyanshu-srivastava-523783290/" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M20.447,20.452H17.06V14.5c0-1.42-.028-3.25-1.98-3.25-1.98,0-2.285,1.55-2.285,3.149V20.452H9.412V8.987h3.297v1.5h.046c.457-.86,1.566-1.758,3.25-1.758,3.479,0,4.122,2.29,4.122,5.267V20.452ZM5.337,7.433a2.062,2.062,0,1,1,2.063-2.062A2.063,2.063,0,0,1,5.337,7.433ZM6.994,20.452H3.68V8.987H6.994V20.452ZM22,0H2A2,2,0,0,0,0,2V22a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V2a2,2,0,0,0-2-2Z"/></svg>
        </a>
        <a href="https://leetcode.com/u/Priyanshu7011/" aria-label="LeetCode" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="24" height="24"><path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z"/></svg>
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} {DEVELOPER_NAME}. All Rights Reserved.</p>
    </div>
  </footer>
);


// --- PAGE SECTIONS ---
const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];

    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor(window.innerWidth / 15);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          vx: Math.random() * 0.5 - 0.25,
          vy: Math.random() * 0.5 - 0.25,
        });
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    handleResize();
    animate();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero">
      <canvas id="hero-canvas" ref={canvasRef}></canvas>
      <div className="container">
        <h1 className="hero-title">Full Stack Developer & AI-ML Enthusiast</h1>
        <p className="hero-subtitle">I design and build beautiful, responsive, and robust web applications, along with convenient and modern AI-ML projects</p>
        <a href="#projects" className="btn btn-primary">View My Work</a>
      </div>
    </section>
  );
};

const About: React.FC<{ content: string }> = ({ content }) => (
  <Section id="about" className="about">
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={profilePic} alt={DEVELOPER_NAME} />
        </div>
        <div className="about-text">
          <p>{content}</p>
        </div>
      </div>
    </div>
  </Section>
);
const Education = () => (
  <Section id="education" className="education">
    <div className="container">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {EDUCATION.map((edu, index) => ( // Corrected here
          <div className="education-card" key={index}>
            <h3 className="education-degree">{edu.degree}</h3>
            <p className="education-university">{edu.university} | {edu.duration}</p>
            <ul className="education-details">
              {edu.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const Skills = () => (
  <Section id="skills" className="skills">
    <div className="container">
      <h2 className="section-title">My Tech Stack</h2>
      <div className="skills-grid">
        {SKILLS.map((skill, index) => (
          <div className="skill-card" key={skill.name} style={{ transitionDelay: `${index * 5}ms` }}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const WorkExperience = () => (
  <Section id="experience" className="experience">
    <div className="container">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-list">
        {WORK_EXPERIENCE.map((job, index) => (
          <div className="experience-card" key={index} style={{ transitionDelay: `${index * 10}ms` }}>
            <h3 className="job-title">{job.title}</h3>
            <p className="job-company">{job.company} | {job.duration}</p>
            <ul className="job-description">
              {job.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const Volunteering = () => (
  <Section id="volunteering" className="volunteering">
    <div className="container">
      <h2 className="section-title">Volunteering & Leadership</h2>
      <div className="volunteering-list">
        {VOLUNTEERING.map((activity, index) => (
          <div className="volunteering-card" key={index} style={{ transitionDelay: `${index * 10}ms` }}>
            <h3 className="activity-role">{activity.role}</h3>
            <p className="activity-organization">{activity.organization} | {activity.duration}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);


const Projects = () => (
  <Section id="projects" className="projects">
    <div className="container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <div className="project-card" key={index} style={{ transitionDelay: `${index * 10}ms` }}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
              <div className="project-links">
                <a href={project.liveUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      setStatus('submitted');
      e.currentTarget.reset();
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <Section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">Have a project in mind or just want to say hi? Feel free to reach out!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required disabled={status === 'submitting'} />
            <input type="email" name="email" placeholder="Your Email" required disabled={status === 'submitting'} />
          </div>
          <textarea name="message" placeholder="Your Message" rows={6} required disabled={status === 'submitting'}></textarea>
          <button type="submit" className="btn btn-primary" disabled={status !== 'idle'}>
            {status === 'submitting' && 'Sending...'}
            {status === 'idle' && 'Send Message'}
            {status === 'submitted' && 'Message Sent!'}
          </button>
          {status === 'submitted' && <p className="form-success-message">Thanks for reaching out! I'll get back to you soon.</p>}
        </form>
      </div>
    </Section>
  );
};


const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}