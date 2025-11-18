import Section from '../components/Section';
import SplineBanner from '../components/SplineBanner';

const caseStudies = [
  {
    title: 'Horizon Commerce',
    summary: 'Headless storefront with real‑time 3D product viewer and AR try‑on.',
    metrics: ['+38% conversion', '2.1x AOV', 'Sub‑second TTFB'],
  },
  {
    title: 'Nova Analytics',
    summary: 'Self‑serve analytics with GPU‑accelerated dashboards and streaming.',
    metrics: ['10M events/min', 'P95 < 200ms', 'SOC2 Type II'],
  },
  {
    title: 'Atlas SaaS Platform',
    summary: 'Multi‑tenant platform with role‑based access, billing, and SSO.',
    metrics: ['99.99% uptime', 'Zero‑downtime deploys', 'ISO 27001'],
  },
];

export default function CaseStudies() {
  return (
    <>
      <SplineBanner title="Case Studies" subtitle="Selected work that blends design, engineering, and 3D storytelling." />
      <main>
        <Section eyebrow="Results" title="Impact we delivered">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((c) => (
              <article key={c.title} className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
                <h3 className="text-white font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{c.summary}</p>
                <ul className="mt-4 space-y-1 text-sm text-slate-300">
                  {c.metrics.map((m) => (
                    <li key={m}>• {m}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}
