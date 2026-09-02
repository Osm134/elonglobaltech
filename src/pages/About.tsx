import { Link } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Phone, Mail, Target, Eye } from 'lucide-react';
import about from "../content/about.json" ;

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

 function AboutPage() {
  const site = 'https://elyonglobaltech.com';
  const title = 'About Us — Elyon Global Technologies';
  const description = 'Elyon Global Technologies — 5+ years of US market expertise and a growing India operations base. Learn our story, mission, and values.';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}/about`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/about`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#0A1628' }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(212,160,23,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-3xl">
          <FadeUp>
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 border text-xs font-semibold tracking-widest uppercase" style={{ borderColor: '#D4A017', color: '#D4A017', fontFamily: 'var(--font-heading)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#D4A017' }} />
              {about.hero.label}
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {about.hero.headline}
            </h1>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-sans)' }}>
              {about.hero.subtext}
            </p>
          </FadeUp>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, #D4A017, transparent)' }} />
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#D4A017', fontFamily: 'var(--font-heading)' }}>
                {about.story.headline}
              </p>
              <div className="space-y-5">
                {about.story.paragraphs.map((para, i) => (
                  <p key={i} className="text-base leading-relaxed" style={{ color: '#4A5568', fontFamily: 'var(--font-sans)' }}>
                    {para}
                  </p>
                ))}
              </div>
            </FadeUp>

            {/* Mission & Vision */}
            <FadeUp delay={0.15}>
              <div className="space-y-6">
                <div className="p-8 border-l-4" style={{ background: '#F0F4F8', borderColor: '#D4A017' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <Target size={18} style={{ color: '#D4A017' }} />
                    <h3 className="font-bold text-base" style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}>Our Mission</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A5568', fontFamily: 'var(--font-sans)' }}>
                    {about.mission.mission}
                  </p>
                </div>
                <div className="p-8 border-l-4" style={{ background: '#0A1628', borderColor: '#D4A017' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <Eye size={18} style={{ color: '#D4A017' }} />
                    <h3 className="font-bold text-base text-white" style={{ fontFamily: 'var(--font-heading)' }}>Our Vision</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-sans)' }}>
                    {about.mission.vision}
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ background: '#F0F4F8' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <FadeUp className="mb-14 text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
              What We Stand For
            </h2>
            <div className="mt-3 mx-auto w-12 h-0.5" style={{ background: '#D4A017' }} />
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-200">
            {about.values.map((val, i) => (
              <FadeUp key={val.id} delay={i * 0.08}>
                <div className="p-8 border-b md:border-b-0 md:border-r last:border-r-0 border-slate-200 bg-white hover:bg-slate-50 transition-colors">
                  <div className="text-5xl font-extrabold mb-4 leading-none" style={{ color: 'rgba(10,22,40,0.06)', fontFamily: 'var(--font-heading)' }}>
                    0{i + 1}
                  </div>
                  <div className="w-8 h-0.5 mb-4" style={{ background: '#D4A017' }} />
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
                    {val.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A5568', fontFamily: 'var(--font-sans)' }}>
                    {val.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeUp className="mb-14 text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
              {about.presence.headline}
            </h2>
            <div className="mt-3 mx-auto w-12 h-0.5" style={{ background: '#D4A017' }} />
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {about.presence.offices.map((office, i) => (
              <FadeUp key={office.id} delay={i * 0.1}>
                <div className="p-8 border border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{office.flag}</div>
                  <h3 className="text-xl font-extrabold mb-1" style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
                    {office.country}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={13} style={{ color: '#D4A017' }} />
                    <span className="text-sm font-semibold" style={{ color: '#4A5568', fontFamily: 'var(--font-sans)' }}>{office.city}</span>
                  </div>
                  <p className="text-xs mb-4" style={{ color: '#4A5568', fontFamily: 'var(--font-sans)' }}>{office.role}</p>
                  <div className="space-y-2">
                    {office.phone && (
                      <div className="flex items-center gap-2">
                        <Phone size={12} style={{ color: '#D4A017' }} />
                        <a href={`tel:${office.phone}`} className="text-xs hover:underline" style={{ color: '#0A1628', fontFamily: 'var(--font-sans)' }}>{office.phone}</a>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Mail size={12} style={{ color: '#D4A017' }} />
                      <a href="mailto:admin@elyonglobaltech.com" className="text-xs hover:underline" style={{ color: '#0A1628', fontFamily: 'var(--font-sans)' }}>{office.email}</a>
                    </div>
                  </div>
                </div>
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
              {about.cta.headline}
            </h2>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-sans)' }}>
              {about.cta.subtext}
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold transition-all hover:opacity-90" style={{ background: '#D4A017', color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
              {about.cta.buttonLabel} <ArrowRight size={15} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}


export default  AboutPage;