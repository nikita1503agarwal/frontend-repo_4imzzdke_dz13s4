import Spline from '@splinetool/react-spline';

export default function MiniScene({ title, description }) {
  return (
    <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
      <div className="h-48 relative">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/60" />
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold text-sm">{title}</h3>
        {description && <p className="mt-1 text-xs text-slate-300">{description}</p>}
      </div>
    </div>
  );
}
