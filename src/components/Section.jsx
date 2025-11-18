export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        {eyebrow && (
          <p className="text-xs font-medium tracking-wider uppercase text-cyan-300/80">{eyebrow}</p>
        )}
        {title && (
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">{title}</h2>
        )}
        <div className="mt-8 grid gap-6">
          {children}
        </div>
      </div>
    </section>
  );
}
