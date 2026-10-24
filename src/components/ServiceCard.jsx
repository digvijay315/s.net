import Reveal from './Reveal'

const accentMap = {
  signal: {
    iconBg: 'bg-signal-500/10 border-signal-500/30 text-signal-400',
    glow: 'group-hover:bg-signal-500/10',
  },
  volt: {
    iconBg: 'bg-volt-500/10 border-volt-500/30 text-volt-400',
    glow: 'group-hover:bg-volt-500/10',
  },
  amber: {
    iconBg: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    glow: 'group-hover:bg-amber-500/10',
  },
}

export default function ServiceCard({ service, index = 0, detailed = false }) {
  const accent = accentMap[service.accent] || accentMap.signal
  const Icon = service.icon

  return (
    <Reveal delay={(index % 3) * 0.08}>
      <div className="panel panel-hover group relative flex h-full flex-col overflow-hidden p-7">
        <div
          className={`absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-white/[0.02] transition-colors ${accent.glow}`}
        />
        <div className={`flex h-14 w-14 items-center justify-center rounded-xl border text-2xl ${accent.iconBg}`}>
          <Icon />
        </div>
        <h3 className="mt-6 font-display text-lg font-bold text-white">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {detailed ? service.description : service.short}
        </p>
        {detailed && (
          <ul className="mt-5 space-y-2.5 border-t border-white/[0.06] pt-5 text-sm text-slate-300">
            {service.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-400" />
                {p}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  )
}
