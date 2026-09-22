"use client"
import { useEffect, useState } from 'react';
import LiveMap from './LiveMap';
import { GithubIcon, MailIcon, ResumeIcon } from './icons';

function useLondonTime() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          timeZone: 'Europe/London',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
          timeZoneName: 'short',
        }),
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function ProfileCard() {
  const time = useLondonTime();

  return (
    <div className="w-full bg-stone-900 rounded-2xl border border-stone-800 overflow-hidden mb-10 shadow-lg relative z-10">
      <div className="relative h-56 w-full bg-stone-900 overflow-hidden">
        <LiveMap className="absolute inset-0 z-0" />
        <div className="absolute top-4 right-4 bg-stone-950/90 text-stone-300 text-xs font-mono px-3 py-1.5 rounded border border-stone-700/50 shadow-sm z-20 backdrop-blur-md pointer-events-none">
          {time || 'Loading...'}
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-stone-900 via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      <div className="px-6 pb-8 relative bg-stone-900">
        <div className="absolute -top-12 left-6 z-30">
          <div className="w-24 h-24 rounded-full border-4 border-stone-900 bg-stone-700 shadow-[0_0_20px_rgba(217,119,6,0.2)] overflow-hidden flex items-center justify-center">
            <img
              src="/me_pic.jpg"
              alt="Profile picture of Dmitrijs"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-stone-100 tracking-tight pt-16">
          Hey, I&apos;m Dmitrijs
        </h1>

        <p className="mt-4 text-sm text-stone-400 max-w-xl leading-relaxed pr-16 sm:pr-20">
            Dmitrijs is a Java Test Automation Engineer at Sparta Global with full-stack development and Agile startup experience. Fluent in English, Latvian, and Russian, he builds reliable, fully tested software solutions using Java.
        </p>

        <div className="mt-6 flex items-center space-x-6">
          <button className="flex items-center space-x-3 px-4 py-2 bg-transparent text-stone-100 rounded-lg text-sm font-semibold transition-colors border border-stone-700 hover:bg-stone-800">
            <span>Resume</span>
            <ResumeIcon />
          </button>
          <a href="https://github.com/Smudy-ux" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-stone-100 transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href="mailto:dd636856@gmail.com" className="text-stone-400 hover:text-stone-100 transition-colors">
            <MailIcon size={20} />
          </a>
        </div>

        <img
          src="/idle_coding.gif"
          alt=""
          aria-hidden="true"
          className="absolute bottom-4 right-4 w-16 h-16 sm:w-20 sm:h-20 pointer-events-none select-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
        />
      </div>
    </div>
  );
}