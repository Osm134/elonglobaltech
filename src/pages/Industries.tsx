import { Link } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import industries  from '../content/industries.json';

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

 function IndustriesPage() {
  const site = 'https://elyonglobaltech.com';
  const title = 'Industries — Elyon Global Technologies';
  const description = 'Workforce solutions across Technology, Finance, Healthcare, Manufacturing, Retail, Energy, and more — US and India markets.';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}/industries`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/industries`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#0A1628' }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(212,160,23,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-3xl">
          <FadeUp>
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 border text-xs font-semibold tracking-widest uppercase" style={{ borderColor: '#D4A017', color: '#D4A017', fontFamily: 'var(--font-heading)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#D4A017' }} />
              {industries.hero.label}
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {industries.hero.headline}
            </h1>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-sans)' }}>
              {industries.hero.subtext}
            </p>
          </FadeUp>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, #D4A017, transparent)' }} />
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.industries.map((ind, i) => (
              <FadeUp key={ind.id} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: 'easeOut' as const }}
                  className="group border border-slate-200 p-8 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 transition-all duration-400" style={{ background: '#D4A017' }} />
                  <h2 className="text-xl font-extrabold mb-3" style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
                    {ind.name}
                  </h2>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#4A5568', fontFamily: 'var(--font-sans)' }}>
                    {ind.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ind.roles.map((role) => (
                      <span
                        key={role}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium"
                        style={{ background: '#F0F4F8', color: '#0A1628', fontFamily: 'var(--font-sans)' }}
                      >
                        <ChevronRight size={10} style={{ color: '#D4A017' }} />
                        {role}
                      </span>
                    ))}
                  </div>
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
            <h2 className="text-4xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {industries.cta.headline}
            </h2>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-sans)' }}>
              {industries.cta.subtext}
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold transition-all hover:opacity-90" style={{ background: '#D4A017', color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
              {industries.cta.buttonLabel} <ArrowRight size={15} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}


export default  IndustriesPage ;