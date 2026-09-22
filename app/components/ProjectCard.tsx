import Image from 'next/image';
import { GlobeIcon, GithubIcon } from './icons';
import type { Project } from '@/lib/projects';

const btnClasses =
  'flex items-center space-x-2 px-3.5 py-1.5 bg-stone-100 text-stone-900 rounded text-sm font-semibold hover:bg-white transition-colors';

export default function ProjectCard({
  project,
  showPreview = true,
}: {
  project: Project;
  showPreview?: boolean;
}) {
  const { title, description, tech, website, source, image } = project;

  return (
    <div className="bg-stone-900 border border-stone-800/80 rounded-2xl p-5 flex flex-col justify-between hover:border-stone-700 transition-colors">
      <div>
        {showPreview && (
          <div className="relative w-full h-52 bg-stone-800/80 rounded-xl mb-6 overflow-hidden border border-stone-700/50 flex items-center justify-center">
            {image ? (
              <Image src={image} alt={`${title} preview`} fill className="object-cover" />
            ) : (
              <span className="text-stone-600 text-xs font-mono uppercase tracking-wider">
                {title} Preview
              </span>
            )}
          </div>
        )}
        <h2 className="text-xl font-bold text-stone-100 mb-2">{title}</h2>
        <p className="text-sm text-stone-400 mb-6 leading-relaxed">{description}</p>
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {tech.map((tag) => (
              <span
                key={tag}
                className="bg-stone-800 text-stone-300 text-xs px-2.5 py-1 rounded font-medium border border-stone-700/50"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {(website || source) && (
        <div className="flex items-center gap-3 pt-2">
          {website && (
            <a href={website} target="_blank" rel="noreferrer" className={btnClasses}>
              <GlobeIcon />
              <span>Website</span>
            </a>
          )}
          {source && (
            <a href={source} target="_blank" rel="noreferrer" className={btnClasses}>
              <GithubIcon />
              <span>Source</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}