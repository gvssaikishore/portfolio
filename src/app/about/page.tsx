import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Download, Linkedin, Mail } from 'lucide-react';
import { Geist, Geist_Mono } from 'next/font/google';
import styles from './about.module.css';

const geistSans = Geist({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const geistMono = Geist_Mono({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata: Metadata = {
  title: 'About | Sai Kishore Gollakota',
  description:
    'Building scalable products at the intersection of technology and customer value. Product Owner with 15+ years across software, networking, and cloud.',
};

export default function AboutPage() {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Thinking', href: '#thinking' },
    { label: 'Contact', href: '#contact' },
  ];

  const highlights = [
    'Led cross-functional teams to deliver scalable cloud and networking solutions',
    'Improved system performance, release efficiency, and developer productivity',
    'Translated ambiguous business needs into clear product strategies',
  ];

  const experience = [
    {
      title: 'Product Owner',
      metrics: ['20% Faster Releases', 'Sprint Predictability ↑'],
      company: 'Cisco Systems · Oct 2023 – Present · Bengaluru',
      points: [
        'Own product strategy and roadmap for Cisco Commerce & CX Cloud modules',
        'Led a team of engineers to define acceptance criteria and streamline execution',
        'Prioritized platform improvements to remove friction and accelerate engineering velocity',
      ],
    },
    {
      title: 'Scrum Master / Senior QA Lead',
      metrics: ['25% Performance Gain', 'K8s Scalability'],
      company: 'Cisco Systems · Apr 2021 – Oct 2023',
      points: [
        'Partnered with Product Managers to refine backlog and translate business needs into actionable user stories',
        'Defined release strategies and testing frameworks for business-critical applications',
        'Enabled data-driven planning using Agile metrics like velocity and burndown',
      ],
    },
    {
      title: 'Lead QA Engineer',
      metrics: ['30K+ Upgrades', '100% API Coverage'],
      company: 'Cisco Systems · Dec 2017 – Apr 2021',
      points: [
        'Led a team of 8 engineers, driving test strategy and execution',
        'Delivered 30,000+ upgrades in live customer environments',
        'Built automation frameworks achieving 100% API coverage',
      ],
    },
    {
      title: 'Senior Test Engineer',
      metrics: [],
      company: 'Cisco Systems · Mar 2011 – Dec 2017',
      points: [
        'Owned multiple modules ensuring high-quality delivery aligned with business requirements',
        'Specialized in defect triaging and production issue resolution',
      ],
    },
  ];

  const caseStudies = [
    {
      eyebrow: ['AI Content Platform', 'AI Workflow'],
      title: 'XCopyAI',
      description:
        'Simplifying AI-driven content creation workflows and improving user productivity through intelligent automation.',
      href: 'https://www.producttalent.com/sai-kishore-gollakota/projects/xcopyai/',
    },
    {
      eyebrow: ['EdTech Learning Platform', 'EdTech UX'],
      title: 'MikroLearn',
      description:
        'Enhancing engagement and knowledge retention through bite-sized, micro-learning experiences designed for scale.',
      href: 'https://www.producttalent.com/sai-kishore-gollakota/projects/mikrolearn/',
    },
  ];

  const skillCategories = [
    {
      title: 'Product Strategy',
      skills: ['Roadmapping & Vision', 'Customer-Centric Thinking', 'Problem Discovery'],
    },
    {
      title: 'Execution & Delivery',
      skills: ['Agile / Scrum', 'Backlog Prioritization', 'Release Management'],
    },
    {
      title: 'Technical Depth',
      skills: ['Cloud (AWS)', 'Networking Systems', 'Kubernetes', 'API & Automation'],
    },
    {
      title: 'Leadership',
      skills: ['Stakeholder Management', 'Cross-functional Leadership', 'Team Building & Mentorship'],
    },
  ];

  const thinking = [
    {
      title: 'Why Developer Experience is a Product Problem',
      description:
        'Great products are not just customer-facing. Internal developer experience directly impacts speed, quality, and innovation.',
    },
    {
      title: "Execution is a Product Manager's Superpower",
      description:
        'Strategy without execution is just intent. The real impact comes from disciplined delivery.',
    },
    {
      title: 'Metrics That Actually Matter',
      description:
        "Velocity doesn't matter if outcomes don't improve. Focus on impact metrics, not activity metrics.",
    },
  ];

  return (
    <main className={`${geistSans.className} relative overflow-hidden bg-[#05080f] text-slate-50`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.22),transparent_28%),radial-gradient(circle_at_88%_10%,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.1),transparent_32%)]" />
      <div className={`${styles.gridOverlay} pointer-events-none absolute inset-0 opacity-60`} />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <nav className="sticky top-[68px] z-30 mb-14 rounded-lg border border-slate-800/90 bg-[#05080f]/85 px-4 py-3 backdrop-blur md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link href="/" className="text-sm font-bold tracking-tight text-slate-100">
              SKG.
            </Link>
            <div className={`${geistMono.className} flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-slate-400`}>
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2 py-1 transition-colors hover:text-slate-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <section className={`${styles.reveal} relative mb-20 min-h-[62vh] border-b border-slate-800 pb-16`}>
          <div className="mb-7 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.17em] text-slate-400">
            <span className={`${geistMono.className} rounded border border-slate-700 bg-slate-900/60 px-3 py-1`}>15+ Years</span>
            <span className={`${geistMono.className} rounded border border-slate-700 bg-slate-900/60 px-3 py-1`}>Cisco</span>
            <span className={`${geistMono.className} rounded border border-slate-700 bg-slate-900/60 px-3 py-1`}>
              Scalable Systems
            </span>
          </div>

          <h1 className="max-w-4xl text-balance text-4xl font-bold leading-tight tracking-[-0.03em] text-slate-50 sm:text-5xl">
            Building Scalable Products at the Intersection of Technology and Customer Value
          </h1>

          <p className={`${geistMono.className} mt-6 text-sm uppercase tracking-[0.16em] text-sky-300`}>
            Product Owner at Cisco · 15+ Years in Software, Networking & Cloud
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Specializing in turning complex systems into reliable, high-impact products, driving execution excellence,
            improving developer velocity, and delivering measurable business outcomes.
          </p>

          <div className={`${styles.stagger} mt-9 flex flex-wrap gap-4`}>
            <a
              href="#work"
              className={`${geistMono.className} inline-flex items-center gap-2 rounded border border-slate-700 bg-slate-900/80 px-4 py-3 text-[11px] uppercase tracking-[0.15em] text-slate-200 transition hover:border-sky-400/80 hover:text-sky-200`}
            >
              View My Work
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="#contact"
              className={`${geistMono.className} inline-flex items-center gap-2 rounded border border-sky-400/60 bg-sky-500/10 px-4 py-3 text-[11px] uppercase tracking-[0.15em] text-sky-200 transition hover:bg-sky-500/20`}
            >
              Download Resume
              <Download className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>

        <section id="about" className={`${styles.reveal} mb-20 border-b border-slate-800 pb-16`}>
          <p className={`${geistMono.className} mb-3 text-xs uppercase tracking-[0.15em] text-slate-500`}>About</p>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-50 sm:text-4xl">
            From Systems Engineering to Product Leadership
          </h2>
          <div className="mt-8 max-w-4xl space-y-5 text-slate-300">
            <p>
              Product Owner with 15+ years of experience across software engineering, quality assurance, and product
              leadership, currently driving product initiatives at Cisco.
            </p>
            <p>
              The journey from QA to Product has shaped a systems-first mindset: deeply understanding constraints,
              user impact, and the bridge between business goals and engineering execution.
            </p>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-100">Not just shipping features. Solving business problems with measurable impact.</p>
          </div>
        </section>

        <section id="experience" className={`${styles.reveal} mb-20 border-b border-slate-800 pb-16`}>
          <p className={`${geistMono.className} mb-3 text-xs uppercase tracking-[0.15em] text-slate-500`}>Experience</p>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-50 sm:text-4xl">System Log</h2>
          <div className="mt-8 space-y-5">
            {experience.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-slate-800 bg-slate-950/70 p-6 transition-colors hover:border-sky-500/50"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-100">{item.title}</h3>
                  <div className={`${geistMono.className} flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.16em] text-sky-300`}>
                    {item.metrics.map((metric) => (
                      <span key={metric} className="rounded border border-sky-500/50 bg-sky-500/10 px-2 py-1">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
                <p className={`${geistMono.className} mt-3 text-xs uppercase tracking-[0.14em] text-slate-400`}>{item.company}</p>
                <ul className="mt-4 space-y-2 text-slate-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className={`${styles.reveal} mb-20 border-b border-slate-800 pb-16`}>
          <p className={`${geistMono.className} mb-3 text-xs uppercase tracking-[0.15em] text-slate-500`}>Case Studies</p>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-50 sm:text-4xl">My Work</h2>
          <p className="mt-4 max-w-4xl text-slate-300">
            Product thinking and solutions documented in detail. Each case study showcases approach to problem-solving,
            strategy, and execution.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {caseStudies.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-slate-800 bg-slate-950/70 p-6 transition hover:-translate-y-0.5 hover:border-sky-500/60"
              >
                <div className={`${geistMono.className} flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.16em] text-sky-300`}>
                  {item.eyebrow.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h3 className="mt-3 flex items-center gap-2 text-2xl font-semibold text-slate-100 transition group-hover:text-sky-200">
                  {item.title}
                  <ArrowRight className="h-4 w-4" />
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className={`${styles.reveal} mb-20 border-b border-slate-800 pb-16`}>
          <p className={`${geistMono.className} mb-3 text-xs uppercase tracking-[0.15em] text-slate-500`}>Capabilities</p>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-50 sm:text-4xl">Skills & Expertise</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {skillCategories.map((category) => (
              <article key={category.title} className="rounded-lg border border-slate-800 bg-slate-950/70 p-6">
                <h3 className={`${geistMono.className} text-sm uppercase tracking-[0.14em] text-slate-200`}>{category.title}</h3>
                <ul className="mt-4 space-y-2 text-slate-300">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-7 rounded-lg border border-slate-800 bg-slate-950/70 p-6">
            <p className={`${geistMono.className} text-xs uppercase tracking-[0.15em] text-slate-500`}>Certifications</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="rounded border border-slate-700 px-3 py-2">AWS Certified Solutions Architect – Associate</span>
              <span className="rounded border border-slate-700 px-3 py-2">Cisco Certified Network Associate (CCNA)</span>
            </div>
          </div>
        </section>

        <section id="thinking" className={`${styles.reveal} mb-20 border-b border-slate-800 pb-16`}>
          <p className={`${geistMono.className} mb-3 text-xs uppercase tracking-[0.15em] text-slate-500`}>Perspectives</p>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-50 sm:text-4xl">Product Thinking</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {thinking.map((item) => (
              <article key={item.title} className="rounded-lg border border-slate-800 bg-slate-950/70 p-6">
                <h3 className="text-lg font-semibold leading-snug text-slate-100">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className={`${styles.reveal} mb-6 rounded-lg border border-slate-700/80 bg-slate-950/80 p-8 sm:p-10`}>
          <p className={`${geistMono.className} mb-3 text-xs uppercase tracking-[0.15em] text-slate-500`}>Connect</p>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-50 sm:text-4xl">
            Let&apos;s build impactful products together.
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="mailto:gvssaikishore@gmail.com"
              className="inline-flex items-center gap-2 rounded border border-sky-500/60 bg-sky-500/10 px-4 py-3 text-sky-200 transition hover:bg-sky-500/20"
            >
              <Mail className="h-4 w-4" />
              gvssaikishore@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/sai-kishore-gollakota/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200 transition hover:border-slate-500"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </section>

        <footer className={`${geistMono.className} pb-4 pt-6 text-[11px] uppercase tracking-[0.14em] text-slate-500`}>
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-800 pt-5">
            <span>Portfolio Status: Operational</span>
            <span>Last Updated: April 26, 2026</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
