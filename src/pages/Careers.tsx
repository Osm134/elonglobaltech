import { Link } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { ArrowRight, Send, Users, Zap, Shield, Star } from 'lucide-react';
import careers  from '../content/careesrs.json';

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

const whyIcons: React.ReactElement[] = [<Star size={20} />, <Users size={20} />, <Zap size={20} />, <Shield size={20} />];

 function Careers() {
  const site = 'https://elyonglobaltech.com';
  const title = 'Careers — Elyon Global Technologies';
  const description = 'Find your next IT or Non-IT role with Elyon Global Technologies. Contract, C2H, and permanent opportunities across the US and India.';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}/careers`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/careers`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#0A1628' }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(212,160,23,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-3xl">
          <FadeUp>
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 border text-xs font-semibold tracking-widest uppercase" style={{ borderColor: '#D4A017', color: '#D4A017', fontFamily: 'var(--font-heading)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#D4A017' }} />
              {careers.hero.label}
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {careers.hero.headline}
            </h1>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-sans)' }}>
              {careers.hero.subtext}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:admin@elyonglobaltech.com?subject=Resume Submission" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold transition-all hover:opacity-90" style={{ background: '#D4A017', color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
                {careers.submitResume.buttonLabel} <Send size={14} />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold border transition-all hover:bg-white/10" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                Talk to a Recruiter <ArrowRight size={14} />
              </Link>
            </div>
          </FadeUp>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, #D4A017, transparent)' }} />
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeUp className="mb-14">
            <h2 className="text-4xl font-extrabold" style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
              {careers.whyWork.headline}
            </h2>
            <div className="mt-3 w-12 h-0.5" style={{ background: '#D4A017' }} />
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careers.whyWork.items.map((item, i) => (
              <FadeUp key={item.id} delay={i * 0.08}>
                <div className="p-7 border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 flex items-center justify-center mb-5" style={{ background: '#F0F4F8', color: '#D4A017' }}>
                   
                    {whyIcons[i]}
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A5568', fontFamily: 'var(--font-sans)' }}>
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Types */}
      <section className="py-24" style={{ background: '#F0F4F8' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <FadeUp className="mb-14 text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
              {careers.jobTypes.headline}
            </h2>
            <div className="mt-3 mx-auto w-12 h-0.5" style={{ background: '#D4A017' }} />
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-200">
            {careers.jobTypes.items.map((jt, i) => (
              <FadeUp key={jt.id} delay={i * 0.08}>
                <div className="p-8 border-b md:border-b-0 md:border-r last:border-r-0 border-slate-200 bg-white">
                  <div className="text-4xl font-extrabold mb-4 leading-none" style={{ color: 'rgba(10,22,40,0.06)', fontFamily: 'var(--font-heading)' }}>
                    0{i + 1}
                  </div>
                  <div className="w-8 h-0.5 mb-4" style={{ background: '#D4A017' }} />
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
                    {jt.type}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A5568', fontFamily: 'var(--font-sans)' }}>
                    {jt.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Resume + Bench Sales — split */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <FadeUp>
          <div className="relative flex flex-col justify-center px-12 py-20 min-h-[340px] overflow-hidden" style={{ background: '#0A1628' }}>
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10" style={{ background: 'radial-gradient(circle, #D4A017, transparent)' }} />
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#D4A017', fontFamily: 'var(--font-heading)' }}>For Job Seekers</p>
            <h3 className="text-3xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {careers.submitResume.headline}
            </h3>
            <p className="text-base mb-8 max-w-sm" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-sans)' }}>
              {careers.submitResume.subtext}
            </p>
            <a
              href="mailto:admin@elyonglobaltech.com?subject=Resume Submission"
              className="inline-flex items-center gap-2 self-start px-8 py-4 text-sm font-bold transition-all hover:opacity-90"
              style={{ background: '#D4A017', color: '#0A1628', fontFamily: 'var(--font-heading)' }}
            >
              {careers.submitResume.buttonLabel} <Send size={14} />
            </a>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="relative flex flex-col justify-center px-12 py-20 min-h-[340px] overflow-hidden" style={{ background: '#D4A017' }}>
            <div className="absolute bottom-0 left-0 w-40 h-40 opacity-10" style={{ background: 'radial-gradient(circle, #0A1628, transparent)' }} />
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(10,22,40,0.6)', fontFamily: 'var(--font-heading)' }}>For Consultants</p>
            <h3 className="text-3xl font-extrabold mb-4 leading-tight" style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
              {careers.consultantMarketing.headline}
            </h3>
            <p className="text-base mb-8 max-w-sm" style={{ color: 'rgba(10,22,40,0.65)', fontFamily: 'var(--font-sans)' }}>
              {careers.consultantMarketing.subtext}
            </p>
            <a
              href="mailto:admin@elyonglobaltech.com?subject=Bench Sales Inquiry"
              className="inline-flex items-center gap-2 self-start px-8 py-4 text-sm font-bold transition-all"
              style={{ background: '#0A1628', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}
            >
              {careers.consultantMarketing.buttonLabel} <ArrowRight size={14} />
            </a>
          </div>
        </FadeUp>
      </section>
    </>
  );
}


export default  Careers;