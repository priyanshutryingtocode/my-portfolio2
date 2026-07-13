import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PageIntro } from './components/PageIntro';
import { ProjectCard } from './components/ProjectCard';
import { Timeline } from './components/Timeline';
import { developer, education, experience, leadership, projects, skills } from './data/portfolio';
import type { PageId } from './types';

const sectionIds: PageId[] = ['home', 'about', 'projects', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState<PageId>('home');

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id as PageId);
        }
      },
      { rootMargin: '-42% 0px -52% 0px', threshold: [0, 0.4, 0.8] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <Header activePage={activeSection} />
      <main>
        <section id="home" className="page page-home">
          <div className="home-hero page-grid">
            <p className="eyebrow">{developer.location}</p>
            <h1>{developer.name}</h1>
            <p>{developer.role}. I build clean web products, practical AI/ML experiments, and interfaces that are easy to use.</p>
            <div className="action-row">
              <a className="button button-primary" href="#projects">View Projects</a>
              <a className="button button-ghost" href="#contact">Contact</a>
            </div>
          </div>
        </section>

        <section id="about" className="page page-about">
          <PageIntro
            eyebrow="About"
            title="Engineering, interface taste, and practical AI."
            copy={developer.about}
          />

          <div className="about-layout">
            <div className="about-portrait">
              <img src={developer.profilePic} alt={developer.name} />
            </div>
            <div className="about-story">
              <h2>What I focus on</h2>
              <p>
                I like projects where the interface is calm, the system underneath is useful, and the final product feels
                easy to understand. My work sits between frontend craft, backend practicality, and AI/ML experimentation.
              </p>
              <div className="skill-cloud">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="section-block two-column">
            <div className="section-card">
              <p className="eyebrow">Experience</p>
              <Timeline items={experience} />
            </div>
            <div className="section-card">
              <p className="eyebrow">Education</p>
              <Timeline items={education} />
              <p className="eyebrow compact-eyebrow">Leadership</p>
              <Timeline items={leadership} />
            </div>
          </div>
        </section>

        <section id="projects" className="page page-projects">
          <PageIntro
            eyebrow="Projects"
            title="Selected builds across web, AI, and data."
            copy="A compact view of shipped projects, experiments, and practical tools."
          />

          <div className="projects-layout">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
        </section>

        <section id="contact" className="page page-contact">
          <div className="contact-page page-grid">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>Open to internships, collaborations, and project conversations.</h2>
              <p>Reach me through LinkedIn or GitHub. I am especially interested in thoughtful web apps and AI-assisted tools.</p>
              <div className="action-row">
                <a className="button button-primary" href={developer.links.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a className="button button-ghost" href={developer.links.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a className="button button-ghost" href={developer.links.leetcode} target="_blank" rel="noopener noreferrer">
                  LeetCode
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
