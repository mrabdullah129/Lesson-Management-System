import { ArrowLeft, BadgeCheck, Code2, Laptop, Palette, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const developers = [
  {
    role: 'TEAM LEADER',
    name: 'M Abdullah Wali',
    portfolioUrl: 'https://muhammadabdullahwali.vercel.app/',
    description: 'Strategic and hands-on full-stack developer leading architecture, system planning, and scalable product execution.',
    accent: 'from-amber-400 to-yellow-300',
    icon: Rocket
  },
  {
    role: 'DEVELOPER',
    name: 'Atif Ayyoub',
    portfolioUrl: 'https://atif-portfolio-nine.vercel.app/',
    description: 'Creative and detail-focused developer with strong expertise in modern frontend technologies.',
    accent: 'from-sky-500 to-cyan-400',
    icon: Code2
  },
  {
    role: 'DEVELOPER',
    name: 'Abdullah Javaid',
    portfolioUrl: 'https://portfolio-omega-jet-b832nexgmd.vercel.app/',
    description: 'Passionate developer focused on backend systems, APIs, and performance optimization.',
    accent: 'from-violet-500 to-fuchsia-400',
    icon: Laptop
  }
];

function DeveloperCard({ developer }) {
  const Icon = developer.icon;

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 text-white shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
      <div className={`absolute inset-0 bg-gradient-to-br ${developer.accent} opacity-10 transition duration-300 group-hover:opacity-20`} />
      <div className="relative z-10 flex h-full flex-col gap-5">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
            <BadgeCheck size={14} /> {developer.role}
          </span>
          <span className="inline-flex rounded-2xl bg-white/10 p-3 text-white/90">
            <Icon size={20} />
          </span>
        </div>

        <div className="space-y-3">
          <h3 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-[3.35rem]">{developer.name}</h3>
          <p className="max-w-sm text-base leading-8 text-slate-200">{developer.description}</p>
        </div>

        <div className="mt-auto">
          <a
            href={developer.portfolioUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </article>
  );
}

function DeveloperPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(30,41,59,0.96),rgba(15,23,42,1)_55%,rgba(2,6,23,1)_100%)] px-4 py-6 text-white md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            to="/lecture/lecture-02-nodejs"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/15"
          >
            <ArrowLeft size={16} /> Back to LMS
          </Link>
          <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            Meet the developer
          </span>
        </div>

        <div className="mb-8">
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">The talented minds building this system</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {developers.map((developer) => (
            <DeveloperCard key={developer.name} developer={developer} />
          ))}
        </div>

        <div className="mt-8 grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md lg:grid-cols-3">
          <div className="rounded-2xl bg-black/20 p-4 text-sm text-slate-200">Clean UI inspired by readable learning systems.</div>
          <div className="rounded-2xl bg-black/20 p-4 text-sm text-slate-200">Fast navigation with professional card-based presentation.</div>
          <div className="rounded-2xl bg-black/20 p-4 text-sm text-slate-200">Built to showcase the people behind the LMS.</div>
        </div>
      </div>
    </div>
  );
}

export default DeveloperPage;