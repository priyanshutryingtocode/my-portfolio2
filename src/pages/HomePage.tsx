import { ProjectCard } from '../components/ProjectCard';
import { developer, projects, skills, stats } from '../data/portfolio';

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export function HomePage() {
  return (
    <div className="page page-home">
      <section className="home-hero page-grid">
        <div className="hero-copy">
          <p className="eyebrow">{developer.location}</p>
          <h1>Design-minded developer building web apps with an AI edge.</h1>
          <p>
            I turn prototypes, ML experiments, and product ideas into clean interfaces that are easy to use and easy to ship.
          </p>
          <div className="action-row">
            <a className="button button-primary" href="#/projects">Explore Projects</a>
            <a className="button button-ghost" href="#/about">About Me</a>
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
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Projects that show range, not just screenshots.</h2>
          </div>
          <a className="text-link" href="#/projects">View all projects</a>
        </div>
        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.title} variant="large" />
          ))}
        </div>
      </section>

      <section className="section-block skill-band">
        <div className="section-heading-stacked">
          <p className="eyebrow">Toolbox</p>
          <h2>Comfortable across product, frontend, backend, and ML workflows.</h2>
        </div>
        <div className="skill-cloud">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
