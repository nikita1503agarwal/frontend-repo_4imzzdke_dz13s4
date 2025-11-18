import Section from './Section';

export function ServicesPage() {
  const services = [
    { title: 'Product Engineering', desc: 'End‑to‑end web and mobile builds with TypeScript, React, and native platforms.' },
    { title: '3D & Interactive', desc: 'Immersive experiences using WebGL, Spline, and advanced motion.' },
    { title: 'AI Integration', desc: 'LLM-powered features, RAG pipelines, and automation.' },
    { title: 'Cloud & DevOps', desc: 'Scalable, secure infra on AWS/GCP with Kubernetes and CI/CD.' },
    { title: 'Design Systems', desc: 'Pixel-perfect UI/UX, component libraries, and branding.' },
    { title: 'Consulting', desc: 'Architecture reviews, performance tuning, and training.' },
  ];
  return (
    <div>
      <Section eyebrow="What we do" title="Services">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl bg-slate-900/70 ring-1 ring-white/10 text-slate-200">
              <p className="text-white font-semibold">{s.title}</p>
              <p className="text-sm mt-2 text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export function SolutionsPage() {
  const solutions = [
    { title: 'Commerce', desc: 'High-conversion storefronts, subscriptions, and payments.' },
    { title: 'Analytics', desc: 'Real-time dashboards and data platforms.' },
    { title: 'SaaS Platforms', desc: 'Multi-tenant apps, billing, and user management.' },
    { title: 'Enterprise', desc: 'Secure internal tools and integrations.' },
  ];
  return (
    <div>
      <Section eyebrow="Where we excel" title="Solutions">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl bg-slate-900/70 ring-1 ring-white/10 text-slate-200">
              <p className="text-white font-semibold">{s.title}</p>
              <p className="text-sm mt-2 text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export function AboutPage() {
  return (
    <div>
      <Section eyebrow="Who we are" title="About Vertex">
        <p className="text-slate-300 max-w-3xl">We are a team of engineers, designers, and strategists focused on delivering delightful products. We partner long-term and ship with quality, speed, and transparency.</p>
      </Section>
    </div>
  );
}

export function ContactPage() {
  return (
    <div>
      <Section id="contact" eyebrow="Get in touch" title="Contact">
        <form className="grid gap-4 max-w-xl">
          <input className="px-4 py-3 rounded-xl bg-white/10 ring-1 ring-white/20 text-white placeholder-slate-400" placeholder="Your name" />
          <input className="px-4 py-3 rounded-xl bg-white/10 ring-1 ring-white/20 text-white placeholder-slate-400" placeholder="Email" />
          <textarea rows="4" className="px-4 py-3 rounded-xl bg-white/10 ring-1 ring-white/20 text-white placeholder-slate-400" placeholder="Tell us about your project" />
          <button className="px-5 py-3 rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold shadow-lg shadow-cyan-500/30 transition w-fit">Send message</button>
        </form>
      </Section>
    </div>
  );
}
