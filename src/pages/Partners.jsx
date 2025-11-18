import Section from '../components/Section';
import SplineBanner from '../components/SplineBanner';

const partners = [
  { name: 'AWS', note: 'Select Consulting Partner' },
  { name: 'Google Cloud', note: 'Service Partner' },
  { name: 'Spline', note: 'Early Access Partner' },
  { name: 'Vercel', note: 'Solutions Partner' },
];

export default function Partners() {
  return (
    <>
      <SplineBanner title="Partners" subtitle="We collaborate with cloud, tooling, and platform leaders." />
      <main>
        <Section eyebrow="Ecosystem" title="Strategic partners">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((p) => (
              <div key={p.name} className="h-28 rounded-2xl bg-white/5 ring-1 ring-white/10 flex flex-col items-center justify-center text-slate-200">
                <span className="text-base font-semibold">{p.name}</span>
                <span className="text-xs text-slate-400 mt-1">{p.note}</span>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}
