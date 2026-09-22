import { GithubIcon, MailIcon } from './icons';

export default function Footer() {
  return (
    <footer className="w-full border-t border-stone-800/60 bg-stone-950 py-8 mt-auto">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-stone-400 text-sm">
          © 2026 Dmitrijs Dums <span className="mx-1 text-stone-600">|</span> All rights reserved.
        </p>
        <div className="flex items-center space-x-6">
          <a href="https://github.com/Smudy-ux" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-stone-500 hover:text-stone-100 transition-colors">
            <GithubIcon />
          </a>
          <a href="mailto:dd636856@gmail.com" aria-label="Email" className="text-stone-500 hover:text-stone-100 transition-colors">
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}