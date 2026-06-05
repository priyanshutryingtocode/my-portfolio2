import { PageIntro } from '../components/PageIntro';
import { Timeline } from '../components/Timeline';
import { developer, education, experience, leadership, skills } from '../data/portfolio';

export function AboutPage() {
  return (
    <div className="page page-about">
      <PageIntro
        eyebrow="About"
        title="I like the overlap between engineering precision and interface taste."
        copy={developer.about}
      />

      <section className="about-layout">
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
      </section>

      <section className="section-block two-column">
        <div className="section-card">
          <p className="eyebrow">Education</p>
          <Timeline items={education} />
        </div>
        <div className="section-card">
          <p className="eyebrow">Experience</p>
          <Timeline items={experience} />
        </div>
      </section>

      <section className="section-block two-column">
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
      </section>
    </div>
  );
}
