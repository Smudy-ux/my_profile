"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'HOME' },
  { href: '/projects', label: 'PROJECTS' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-40 bg-stone-950/90 backdrop-blur-md border-b border-stone-800/60">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-center space-x-10 text-sm font-medium tracking-wide">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`transition-colors ${
              pathname === href ? 'text-stone-100' : 'text-stone-500 hover:text-stone-200'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}