import { Link } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { ArrowRight, Code, Layers, Users, Briefcase, TrendingUp, Settings, MapPin, CheckCircle } from 'lucide-react';
import services  from '../content/service.json';

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  code: <Code size={22} />,
  layers: <Layers size={22} />,
  users: <Users size={22} />,
  briefcase: <Briefcase size={22} />,
  'trending-up': <TrendingUp size={22} />,
  settings: <Settings size={22} />,
  'map-pin': <MapPin size={22} />,
};

function ServicesPage() {
  const site = 'https://elyonglobaltech.com';
  const title = 'Services — Elyon Global Technologies';
  const description = 'IT staffing, RPO, staff augmentation, executive hiring, bench sales, vendor management, and domestic recruitment across the US and India.';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}/services`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/services`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#0A1628' }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(212,160,23,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeUp>
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 border text-xs font-semibold tracking-widest uppercase" style={{ borderColor: '#D4A017', color: '#D4A017', fontFamily: 'var(--font-heading)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#D4A017' }} />
              {services.hero.label}
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {services.hero.headline}
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-sans)' }}>
              {services.hero.subtext}
            </p>
          </FadeUp>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, #D4A017, transparent)' }} />
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.services.map((svc, i) => (
              <FadeUp key={svc.id} delay={i * 0.07}>
                <motion.div
                  id={svc.slug}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: 'easeOut' as const }}
                  className="group relative border border-slate-200 p-8 hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 transition-all duration-400" style={{ background: '#D4A017' }} />

                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center mb-5" style={{ background: '#F0F4F8', color: '#0A1628' }}>
                    {iconMap[svc.icon] ?? <Briefcase size={22} />}
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#D4A017', fontFamily: 'var(--font-heading)' }}>
                    {svc.tagline}
                  </p>
                  <h2 className="text-2xl font-extrabold mb-3" style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
                    {svc.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: '#4A5568', fontFamily: 'var(--font-sans)' }}>
                    {svc.description}
                  </p>

                  {/* Highlights */}
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {svc.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs font-medium" style={{ color: '#0A1628', fontFamily: 'var(--font-sans)' }}>
                        <CheckCircle size={13} style={{ color: '#D4A017', flexShrink: 0 }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold" style={{ color: '#D4A017', fontFamily: 'var(--font-heading)' }}>
                    Get Started <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#0A1628' }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(212,160,23,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {services.cta.headline}
            </h2>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-sans)' }}>
              {services.cta.subtext}
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold transition-all hover:opacity-90" style={{ background: '#D4A017', color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
              {services.cta.buttonLabel} <ArrowRight size={15} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

export default  ServicesPage ;