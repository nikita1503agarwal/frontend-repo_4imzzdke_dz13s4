import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24 flex flex-col lg:flex-row items-start lg:items-center gap-12">
        <div className="max-w-2xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-cyan-200 ring-1 ring-white/20 backdrop-blur">Futuristic Software Studio</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_30px_rgba(34,211,238,0.25)]">
            Vertex Software Enterprise
          </h1>
          <p className="mt-4 text-lg text-slate-200/90">
            We craft interactive, scalable products for web, mobile, and cloud. Explore our services and solutions built with cutting‑edge 3D, AI, and modern architectures.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold shadow-lg shadow-cyan-500/30 transition">Start a project</a>
            <a href="#services" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold ring-1 ring-white/20 transition">Our services</a>
          </div>
        </div>

        <div className="lg:ml-auto grid grid-cols-2 gap-4 opacity-90">
          {[
            { label: 'Clients', value: '120+' },
            { label: 'Projects', value: '350+' },
            { label: 'Uptime', value: '99.99%' },
            { label: 'NPS', value: '72' },
          ].map((s) => (
            <div key={s.label} className="p-5 rounded-2xl bg-slate-900/70 ring-1 ring-white/10 backdrop-blur">
              <p className="text-2xl font-bold text-white">{s.value}</p>
              <p className="text-sm text-slate-300">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-slate-900"></div>
    </section>
  );
}
