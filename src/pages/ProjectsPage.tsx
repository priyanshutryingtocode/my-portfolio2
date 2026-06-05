import { PageIntro } from '../components/PageIntro';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/portfolio';

export function ProjectsPage() {
  return (
    <div className="page page-projects">
      <PageIntro
        eyebrow="Projects"
        title="A gallery of shipped experiments, products, and engineering builds."
        copy="The strongest pieces are featured first, followed by smaller builds that show breadth across web, AI, data, and systems."
      />

      <section className="projects-layout">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </section>
    </div>
  );
}
