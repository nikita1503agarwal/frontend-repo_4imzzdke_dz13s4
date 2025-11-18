import Section from '../components/Section';
import SplineBanner from '../components/SplineBanner';

const roles = [
  { title: 'Senior Frontend Engineer', tags: ['React', '3D', 'Perf'], type: 'Remote' },
  { title: 'Technical Artist', tags: ['Spline', 'Three.js', 'Shaders'], type: 'Remote' },
  { title: 'Platform Engineer', tags: ['Kubernetes', 'Infra as Code', 'Observability'], type: 'Hybrid' },
];

export default function Careers() {
  return (
    <>
      <SplineBanner title="Careers" subtitle="Join a team crafting immersive, scalable software." />
      <main>
        <Section eyebrow="Open roles" title="We’re hiring">
          <div className="space-y-4">
            {roles.map((r) => (
              <div key={r.title} className="p-5 rounded-2xl bg-white/5 ring-1 ring-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">{r.title}</h3>
                    <p className="mt-1 text-sm text-slate-300">{r.tags.join(' · ')}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-white/10 text-slate-200">{r.type}</span>
                </div>
                <button className="mt-4 inline-flex px-4 py-2 rounded-xl bg-cyan-500/90 text-slate-900 font-semibold hover:bg-cyan-400">Apply</button>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}
