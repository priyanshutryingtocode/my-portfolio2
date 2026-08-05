import type { Project } from '../types';
import { getProjectAccentColor } from '../utils/tagColors';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const accentColor = getProjectAccentColor(project.tags);

  return (
    <article className="project-card" style={{ borderLeftColor: accentColor } as React.CSSProperties}>
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
