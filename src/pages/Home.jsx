import Hero from '../components/Hero';
import Section from '../components/Section';

export default function Home() {
  const features = [
    { title: 'Enterprise‑grade', desc: 'Security, performance, and reliability baked into every delivery.' },
    { title: '3D & Motion', desc: 'Immersive product stories powered by real‑time 3D and smooth animations.' },
    { title: 'Cloud‑native', desc: 'Modern architectures on AWS/GCP with CI/CD and observability.' },
  ];

  const logos = ['Apex', 'Orbit', 'Northwind', 'Acme', 'Globex', 'Umbra'];

  return (
    <>
      <Hero />

      <main className="relative">
        <Section eyebrow="Why Vertex" title="We ship beautiful, scalable software">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 ring-1 ring-white/10">
                <p className="text-white font-semibold">{f.title}</p>
                <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Trusted by teams" title="From startups to enterprises">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 opacity-80">
            {logos.map((l) => (
              <div key={l} className="h-16 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-slate-300 text-sm">
                {l}
              </div>
            ))}
          </div>
        </Section>

        <Section id="services" eyebrow="Get started" title="Let’s build something great">
          <div className="flex flex-wrap gap-3">
            <a href="/services" className="px-5 py-3 rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold shadow-lg shadow-cyan-500/30 transition">Explore services</a>
            <a href="/contact" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold ring-1 ring-white/20 transition">Contact us</a>
          </div>
        </Section>
      </main>
    </>
  );
}
