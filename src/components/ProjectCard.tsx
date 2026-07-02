import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  variant?: 'large' | 'compact';
}

export function ProjectCard({ project, variant = 'compact' }: ProjectCardProps) {
  return (
    <article className={`project-card ${variant === 'large' ? 'project-card-large' : ''}`}>
      <div className="project-media">
        <img src={project.image} alt="" loading="lazy" />
        {project.featured && <span>Featured</span>}
      </div>
      <div className="project-body">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="action-row">
          {project.liveUrl && (
            <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
          <a className="button button-ghost" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </div>
      </div>
    </article>
  );
}
