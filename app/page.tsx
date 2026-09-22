"use client"
import Link from 'next/link';
import LoadingScreen from './components/LoadingScreen';
import ProfileCard from './components/ProfileCard';
import Timeline from './components/Timeline';
import ProjectCard from './components/ProjectCard';
import { featuredProjects } from '@/lib/projects';
import type { Project } from '@/lib/projects';

// Home-page-only entry — intentionally not in lib/projects.ts so it never
// appears on the /projects page.
const raspberryPiProject: Project = {
  slug: 'raspberry-pi-iot',
  title: 'IoT Automation using Raspberry-Pi 5',
  description:
    'Created a local NAS, used for backing up files, freeing up local disk space, and streaming media; cancelling a paid cloud plan. Successfully implemented Pi-hole all over the home network, silently blocking ad & tracking servers in the background without having to configure anything from any of the devices. Created a simple yet advanced and private solution.',
  tech: ['Raspberry Pi 5', 'Pi-hole', 'Linux', 'Networking', 'Self-hosted NAS'],
  website: null,
  source: null,
};

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="max-w-4xl mx-auto px-6">
        <ProfileCard />
        <Timeline />

        <section className="mb-4">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-bold text-stone-100 tracking-tight">featured projects</h2>
            <Link
              href="/projects"
              className="text-stone-400 hover:text-stone-100 text-sm transition-colors flex items-center group"
            >
              view more{' '}
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
            <div className="md:col-span-2">
              <ProjectCard project={raspberryPiProject} showPreview={false} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}