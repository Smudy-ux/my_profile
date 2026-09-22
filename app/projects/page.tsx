import ProjectCard from '../components/ProjectCard';
import { projects } from '@/lib/projects';

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl w-full mx-auto px-6 flex-grow">
      <h1 className="text-4xl md:text-5xl font-bold text-stone-100 tracking-tight mb-12">
        my projects.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}