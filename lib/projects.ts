export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  website?: string | null;
  source?: string | null;
  featured?: boolean;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: 'leaseops',
    title: 'LeaseOps',
    description: 'End-to-end property management dashboard used to manage tenants, track maintenance, and control rental payments with accurate occupancy reporting.',
    tech: ['Next.js', 'Prisma ORM', 'PostgreSQL', 'TailwindCSS', 'JWT'],
    website: 'https://lease-ops.vercel.app/dashboard',
    source: 'https://github.com/Smudy-ux/LeaseOps',
    featured: true,
    image: '/projects/proj1.png',
  },
  {
    slug: 'bisou',
    title: 'Bisou',
    description: 'Clean and colorful responsive website delivering a high-quality functional landing page, serving as a commercial showcase for client-facing frontend design.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    website: 'https://front-project-design-example.vercel.app',
    source: 'https://github.com/Smudy-ux/frontProject-designExample',
    featured: true,
    image: '/projects/proj2.png',
  },
  {
    slug: 'ticket-support-system',
    title: 'Ticket Support System',
    description: 'Real-time customer support platform featuring dedicated User and Agent portals, live chat messaging, ticket queues, and role-based access control.',
    tech: ['Next.js 16', 'React 19', 'Express.js', 'Socket.io', 'Prisma', 'PostgreSQL'],
    website: null,
    source: 'https://github.com/Smudy-ux/SyncTicket',
    image: '/projects/proj3.png',
  },
  {
    slug: 'freeconverter',
    title: 'FileConverter',
    description: 'Private in-browser file converter with no ads and zero server uploads. Files are processed entirely on the client side using WebAssembly and Canvas API.',
    tech: ['Next.js', 'TypeScript', 'WebAssembly', 'Canvas API', 'TailwindCSS'],
    source: 'https://github.com/Smudy-ux/FileConverter',
    image: '/projects/proj4.png',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);