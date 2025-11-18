import Section from '../components/Section';
import SplineBanner from '../components/SplineBanner';

const experiments = [
  {
    title: 'Procedural City',
    summary: 'Real‑time city generator with parameter controls and camera tours.',
  },
  { title: 'NURBS Viewer', summary: 'CAD‑grade curve rendering in the browser.' },
  { title: 'Holographic UI', summary: '3D interface patterns explored with physics.' },
  { title: 'Gen‑AI Co‑pilot', summary: 'Workflow assistant integrated across design/dev tools.' },
];

export default function Labs() {
  return (
    <>
      <SplineBanner title="Vertex Labs" subtitle="An R&D playground where we ship 3D, AI, and systems experiments." />
      <main>
        <Section eyebrow="Experiments" title="In the lab">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiments.map((e) => (
              <article key={e.title} className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent ring-1 ring-white/10">
                <h3 className="text-white font-semibold">{e.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{e.summary}</p>
                <button className="mt-4 inline-flex px-3 py-1.5 rounded-lg bg-white/10 text-slate-200 hover:bg-white/20 text-xs">Open demo</button>
              </article>
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}
