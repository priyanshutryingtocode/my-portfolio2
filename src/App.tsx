import { useEffect, useRef, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PageIntro } from './components/PageIntro';
import { ProjectCard } from './components/ProjectCard';
import { Timeline } from './components/Timeline';
import { developer, education, experience, leadership, projects, skills, stats } from './data/portfolio';
import type { PageId } from './types';

const sectionIds: PageId[] = ['home', 'about', 'projects', 'contact'];
const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export default function App() {
  const [activeSection, setActiveSection] = useState<PageId>('home');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveSection(visible.target.id as PageId);
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observerRef.current?.observe(section));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <Header activePage={activeSection} />
      <main>
        <section id="home" className="page page-home">
          <div className="home-hero page-grid">
            <div className="hero-copy">
              <p className="eyebrow">{developer.location}</p>
              <h1>Design-minded developer building web apps with an AI edge.</h1>
              <p>
                I turn prototypes, ML experiments, and product ideas into clean interfaces that are easy to use and easy to ship.
              </p>
              <div className="action-row">
                <a className="button button-primary" href="#projects">Explore Projects</a>
                <a className="button button-ghost" href="#about">About Me</a>
              </div>
            </div>

            <aside className="profile-panel" aria-label="Portfolio snapshot">
              <div className="profile-image-wrap">
                <img src={developer.profilePic} alt={developer.name} />
              </div>
              <span>{developer.role}</span>
              <h2>{developer.name}</h2>
              <div className="stat-grid">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <div className="section-block">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2>Projects that show range, not just screenshots.</h2>
              </div>
              <a className="text-link" href="#projects">View all projects</a>
            </div>
            <div className="featured-grid">
              {featuredProjects.map((project) => (
                <ProjectCard project={project} key={project.title} variant="large" />
              ))}
            </div>
          </div>

          <div className="section-block skill-band">
            <div className="section-heading-stacked">
              <p className="eyebrow">Toolbox</p>
              <h2>Comfortable across product, frontend, backend, and ML workflows.</h2>
            </div>
            <div className="skill-cloud">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="page page-about">
          <PageIntro
            eyebrow="About"
            title="I like the overlap between engineering precision and interface taste."
            copy={developer.about}
          />

          <div className="about-layout">
            <div className="about-portrait">
              <img src={developer.profilePic} alt={developer.name} />
            </div>
            <div className="about-story">
              <h2>What I care about</h2>
              <p>
                I enjoy projects where the surface feels simple but the system underneath is doing real work. My strongest work
                combines thoughtful UI decisions, practical backend choices, and experimentation with AI/ML tools.
              </p>
              <p>
                Outside pure development, design communities and leadership roles have shaped how I think about visual clarity,
                collaboration, and shipping work that people can actually use.
              </p>
            </div>
          </div>

          <div className="section-block two-column">
            <div className="section-card">
              <p className="eyebrow">Education</p>
              <Timeline items={education} />
            </div>
            <div className="section-card">
              <p className="eyebrow">Experience</p>
              <Timeline items={experience} />
            </div>
          </div>

          <div className="section-block two-column">
            <div className="section-card">
              <p className="eyebrow">Leadership</p>
              <Timeline items={leadership} />
            </div>
            <div className="section-card">
              <p className="eyebrow">Core skills</p>
              <div className="skill-cloud is-contained">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="page page-projects">
          <PageIntro
            eyebrow="Projects"
            title="A gallery of shipped experiments, products, and engineering builds."
            copy="The strongest pieces are featured first, followed by smaller builds that show breadth across web, AI, data, and systems."
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
              <h1>Have an idea, role, or collaboration in mind?</h1>
              <p>
                The fastest way to reach me is through LinkedIn or GitHub. I am especially interested in web apps, AI-assisted
                tools, and products where design quality matters.
              </p>
              <div className="action-row">
                <a className="button button-primary" href={developer.links.linkedin} target="_blank" rel="noopener noreferrer">
                  Message on LinkedIn
                </a>
                <a className="button button-ghost" href={developer.links.github} target="_blank" rel="noopener noreferrer">
                  View GitHub
                </a>
              </div>
            </div>

            <aside className="contact-card">
              <span>Available for</span>
              <h2>Internships, collaborations, and project conversations.</h2>
              <div className="contact-links">
                <a href={developer.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={developer.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={developer.links.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}