export default function SectionTitle({
  badge,
  title,
  subtitle,
  center = false,
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      {badge && (
        <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-5xl font-extrabold leading-tight">{title}</h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">{subtitle}</p>
    </div>
  );
}
