import Spline from '@splinetool/react-spline';

export default function SplineBanner({ title, subtitle }) {
  return (
    <section className="relative min-h-[50vh] lg:min-h-[60vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_30px_rgba(34,211,238,0.25)]">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-200/90">{subtitle}</p>
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-slate-900"></div>
    </section>
  );
}
