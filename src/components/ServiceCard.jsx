import Reveal from './Reveal'

const accentMap = {
  signal: {
    iconBg: 'bg-sky-50 border-sky-200 text-sky-600',
    dot: 'bg-sky-500',
    glow: 'group-hover:bg-sky-50',
  },
  volt: {
    iconBg: 'bg-blue-50 border-blue-200 text-blue-600',
    dot: 'bg-blue-500',
    glow: 'group-hover:bg-blue-50',
  },
  amber: {
    iconBg: 'bg-amber-50 border-amber-200 text-amber-600',
    dot: 'bg-amber-500',
    glow: 'group-hover:bg-amber-50',
  },
}

export default function ServiceCard({ service, index = 0, detailed = false }) {
  const accent = accentMap[service.accent] || accentMap.signal
  const Icon = service.icon

  return (
    <Reveal delay={(index % 3) * 0.08}>
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl">
        <div
          className={`absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-slate-50 transition-colors ${accent.glow}`}
        />
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border text-2xl ${accent.iconBg} shadow-xs`}>
          <Icon />
        </div>
        <h3 className="mt-6 font-display text-lg font-extrabold text-slate-900">{service.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-600 font-medium">
          {detailed ? service.description : service.short}
        </p>
        {detailed && (
          <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5 text-sm text-slate-700 font-medium">
            {service.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5">
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} />
                {p}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  )
}
