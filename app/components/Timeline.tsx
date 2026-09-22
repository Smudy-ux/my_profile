"use client"
import { useState } from 'react';

type Entry = {
  initials: string;
  company: string;
  role: string;
  period: string;
  bullets?: string[];
  note?: string;
};

const work: Entry[] = [
  {
    initials: 'SG',
    company: 'Sparta Global',
    role: 'Junior Java Automation testing Engineer',
    period: 'Sep 2026 - Present',
    bullets: [
      'Participated in pair programming, learning Java principles alongside Mockito and Hamcrest frameworks.',
      'Collaborated within team environments to build and test software solutions.',
    ],
  },
  {
    initials: 'L',
    company: 'Startup (Lozori)',
    role: 'Front End Developer',
    period: '2024 - 2025',
    bullets: [
      'Built scalable UI components using React and Next.js and optimised the UI logic and rendering speeds.',
      'Worked as part of a 6-member cross-functional team, used an Agile methodology to facilitate integration.',
    ],
  },
  {
    initials: 'F',
    company: 'Fiverr',
    role: 'Front End Developer',
    period: '2022-10 – 2023-06',
    bullets: [
      'Successfully designed and implemented many custom web solutions, translating business goals into real-world, marketed products.',
      'Designed the Bisou website template as a demonstration site of responsive design skills in order to obtain freelance clients.',
      'Handled entire freelance projects, from design to implementation independently in order to deliver dependable frontend assets for businesses.',
    ],
  },
];

const education: Entry[] = [
  {
    initials: 'TC',
    company: 'Telford College',
    role: 'Higher National Diploma (HND) in Computing',
    period: 'Sep 2023 - Jul 2025',
    note: 'Awarded Classification: Distinction',
  },
  {
    initials: 'ATV',
    company: 'Austrumlatvijas Tehnologiju vidusskola',
    role: 'High School',
    period: '2020 - 2023',
    note: 'Foundation in science, technology, mathematics, and computing principles.',
  },
];

function TimelineEntry({ entry, isLast }: { entry: Entry; isLast: boolean }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center font-bold text-stone-900 border-2 border-stone-700">
        {entry.initials}
      </div>
      <div className={`flex-1 pb-6 ${isLast ? '' : 'border-b border-stone-800/80'}`}>
        <div className="flex justify-between items-start mb-1">
          <div>
            <h3 className="text-stone-100 font-semibold text-lg">{entry.company}</h3>
            <p className="text-stone-400 text-sm">{entry.role}</p>
          </div>
          <span className="text-stone-500 text-sm">{entry.period}</span>
        </div>
        {entry.bullets && (
          <ul className="mt-4 space-y-2 text-sm text-stone-300 list-disc list-inside marker:text-stone-600">
            {entry.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
        {entry.note && <p className="mt-4 font-semibold text-stone-100 text-sm">{entry.note}</p>}
      </div>
    </div>
  );
}

export default function Timeline() {
  const [tab, setTab] = useState<'work' | 'education'>('work');
  const entries = tab === 'work' ? work : education;

  return (
    <>
      <div className="w-full bg-stone-900 rounded-lg p-1 flex mb-6 border border-stone-800/80">
        {(['work', 'education'] as const).map((key) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all capitalize ${
              tab === key
                ? 'bg-stone-800 text-stone-100 shadow-sm'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      <div className="bg-stone-900 border border-stone-800/80 rounded-xl p-6 mb-16">
        <div className="space-y-8">
          {entries.map((entry, i) => (
            <TimelineEntry key={entry.company} entry={entry} isLast={i === entries.length - 1} />
          ))}
        </div>
      </div>
    </>
  );
}