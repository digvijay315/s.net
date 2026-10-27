import PageHero from '../components/PageHero'
import ServiceCard from '../components/ServiceCard'
import CtaBand from '../components/CtaBand'
import { services } from '../data/content'

export default function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Nine services, one accountable team"
        description="Sale, installation, upgrades and annual maintenance — across every system that keeps a building connected and secure."
        bgImage="/images/page-headers/bg-roi.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} detailed />
          ))}
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
