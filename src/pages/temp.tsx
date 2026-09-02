import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';
import { motion, useInView } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import home from "../content/home.json";
import logo from "../assets/logo.png";
import itstaff from "../assets/image.png"

// ─── Animated Counter ────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// ─── Fade-up wrapper ─────────────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────
function ServiceCard({
  title,
  description,
  className = '',
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
      transition={{ duration: 0.2, ease: 'easeOut' as const }}
      className={`group relative overflow-hidden border border-slate-200 bg-white p-6 flex flex-col justify-between cursor-pointer ${className}`}
    >
      {/* Gold accent line */}
      <div
        className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 transition-all duration-400"
        style={{ background: '#D4A017' }}
      />
      <div>
        <h3
          className="font-bold text-lg mb-2 leading-tight"
          style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: '#4A5568', fontFamily: 'var(--font-sans)' }}>
          {description}
        </p>
      </div>
      <div className="mt-4 flex items-center gap-1 text-xs font-semibold" style={{ color: '#D4A017', fontFamily: 'var(--font-heading)' }}>
        <span>Learn more</span>
        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const site = 'https://elyonglobal.com';
  const title = 'Elyon Global Technologies — Global Workforce Solutions';
  const description =
    'IT & Non-IT staffing, RPO, staff augmentation, and executive hiring across the US and India. 500+ clients. 12,000+ placements.';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${site}/#website`,
        name: 'Elyon Global Technologies',
        url: `${site}/`,
      },
      {
        '@type': 'Organization',
        '@id': `${site}/#organization`,
        name: 'Elyon Global Technologies',
        url: `${site}/`,
        description,
        areaServed: ['US', 'IN'],
      },
      {
        '@type': 'WebPage',
        '@id': `${site}/#webpage`,
        url: `${site}/`,
        name: title,
        isPartOf: { '@id': `${site}/#website` },
        about: { '@id': `${site}/#organization` },
        datePublished: '2024-01-01',
        dateModified: '2026-07-02',
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-stretch overflow-hidden" style={{ background: '#0A1628' }}>
        {/* Left content */}
        <div className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 px-8 md:px-16 lg:px-20 py-20">
          {/* Geometric accent */}
          <div
            className="absolute top-0 right-0 w-px h-full opacity-20"
            style={{ background: 'linear-gradient(to bottom, transparent, #D4A017, transparent)' }}
          />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' as const }}
          >
            <div
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border text-xs font-semibold tracking-widest uppercase"
              style={{ borderColor: '#D4A017', color: '#D4A017', fontFamily: 'var(--font-heading)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#D4A017' }} />
              US & India Workforce Solutions
            </div>

            <h1
              className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: '#FFFFFF' }}
            >
              {home.hero.headline}
              <br />
              <span style={{ color: '#D4A017' }}>{home.hero.headlineAccent}</span>
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
              style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-sans)' }}
            >
              {home.hero.subtext}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold transition-all duration-200 hover:opacity-90"
                style={{ background: '#D4A017', color: '#0A1628', fontFamily: 'var(--font-heading)', letterSpacing: '0.03em' }}
              >
                {home.hero.ctaPrimary}
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold border transition-all duration-200 hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF', fontFamily: 'var(--font-heading)', letterSpacing: '0.03em' }}
              >
                {home.hero.ctaSecondary}
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Feel free to contact us */}
            <p className="mt-6 text-sm" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-sans)' }}>
              Have a question?{' '}
              <Link
                to="/contact"
                className="underline underline-offset-2 transition-colors hover:text-white"
                style={{ color: 'rgba(212,160,23,0.8)' }}
              >
                Feel free to contact us
              </Link>{' '}
              — we respond within one business day.
            </p>
          </motion.div>
        </div>

        {/* Right image */}
        <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full">
          <img
            src={logo}
            alt="Professional team in a modern office environment"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            width={800}
            height={900}
          />
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, #0A1628 0%, rgba(10,22,40,0.4) 40%, rgba(10,22,40,0.1) 100%)' }}
          />
          {/* Geometric diagonal */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #D4A017 0px, #D4A017 1px, transparent 1px, transparent 40px)',
            }}
          />
        </div>

        {/* Bottom geometric line */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, #D4A017, transparent)' }} />
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────────── */}
      <section style={{ background: '#0D1F3C' }}>
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p
              className="text-xs font-semibold uppercase tracking-widest shrink-0"
              style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-heading)' }}
            >
              {home.trustBar.label}
            </p>
            <div className="w-px h-8 bg-white/10 hidden md:block" />
            <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12">
              {home.trustBar.stats.map((stat) => (
                <div key={stat.value} className="text-center">
                  <div
                    className="text-2xl font-extrabold"
                    style={{ color: '#D4A017', fontFamily: 'var(--font-heading)' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-sans)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES BENTO ───────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeUp>
            <div className="mb-14">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: '#D4A017', fontFamily: 'var(--font-heading)' }}
              >
                {home.services.sectionLabel}
              </p>
              <h2
                className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
                style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}
              >
                {home.services.headline}
              </h2>
              <p
                className="text-lg max-w-xl"
                style={{ color: '#4A5568', fontFamily: 'var(--font-sans)' }}
              >
                {home.services.subtext}
              </p>
            </div>
          </FadeUp>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Large card — IT Staffing */}
            <FadeUp delay={0.05} className="md:col-span-2 lg:col-span-2 md:row-span-2">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: 'easeOut' as const }}
                className="group relative h-full min-h-[320px] overflow-hidden flex flex-col justify-end p-8 cursor-pointer"
                style={{ background: '#0A1628' }}
              >
                <img
                  src={itstaff}
                  alt="IT staffing professionals"
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                  loading="lazy"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0A1628 40%, transparent)' }} />
                <div
                  className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: '#D4A017' }}
                />
                <div className="relative z-10">
                  <div
                    className="inline-block px-2 py-1 text-xs font-semibold mb-4"
                    style={{ background: '#D4A017', color: '#0A1628', fontFamily: 'var(--font-heading)' }}
                  >
                    Core Service
                  </div>
                  <h3
                    className="text-3xl font-extrabold text-white mb-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {home.services.items[0].title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-sans)' }}>
                    {home.services.items[0].description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: '#D4A017', fontFamily: 'var(--font-heading)' }}>
                    <span>Explore IT Staffing</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </FadeUp>

            {/* Medium cards */}
            {home.services.items.slice(1, 4).map((svc, i) => (
              <FadeUp key={svc.id} delay={0.1 + i * 0.07}>
                <ServiceCard title={svc.title} description={svc.description} className="h-full min-h-[150px]" />
              </FadeUp>
            ))}

            {/* Small cards */}
            {home.services.items.slice(4).map((svc, i) => (
              <FadeUp key={svc.id} delay={0.25 + i * 0.06}>
                <ServiceCard title={svc.title} description={svc.description} className="h-full" />
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.1} className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold border-2 transition-all duration-200 hover:bg-primary hover:text-white"
              style={{ borderColor: '#0A1628', color: '#0A1628', fontFamily: 'var(--font-heading)' }}
            >
              View All Services
              <ArrowRight size={15} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#0A1628' }}>
        {/* Geometric grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(212,160,23,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeUp className="mb-16 text-center">
            <h2
              className="text-4xl md:text-5xl font-extrabold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {home.stats.headline}
            </h2>
            <div className="mt-3 mx-auto w-16 h-0.5" style={{ background: '#D4A017' }} />
          </FadeUp>

          {/* Asymmetric stats layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            <FadeUp delay={0}>
              <div className="relative p-10 border-b border-white/10 lg:border-b-0 lg:border-r" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <div className="w-2 h-2 mb-6" style={{ background: '#D4A017' }} />
                <div className="text-5xl xl:text-6xl font-extrabold mb-2" style={{ color: '#D4A017', fontFamily: 'var(--font-heading)' }}>
                  <AnimatedCounter target={5} suffix="+" />
                </div>
                <div className="text-base font-semibold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{home.stats.items[0].label}</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-sans)' }}>{home.stats.items[0].sublabel}</div>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="relative p-10 border-b border-white/10 lg:border-b-0 lg:border-r" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <div className="w-2 h-2 mb-6" style={{ background: '#D4A017' }} />
                <div className="text-5xl xl:text-6xl font-extrabold mb-2" style={{ color: '#D4A017', fontFamily: 'var(--font-heading)' }}>
                  <AnimatedCounter target={200} suffix="+" />
                </div>
                <div className="text-base font-semibold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{home.stats.items[1].label}</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-sans)' }}>{home.stats.items[1].sublabel}</div>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="relative p-10 border-b border-white/10 lg:border-b-0 lg:border-r" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <div className="w-2 h-2 mb-6" style={{ background: '#D4A017' }} />
                <div className="text-5xl xl:text-6xl font-extrabold mb-2" style={{ color: '#D4A017', fontFamily: 'var(--font-heading)' }}>
                  <AnimatedCounter target={50} suffix="+" />
                </div>
                <div className="text-base font-semibold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{home.stats.items[2].label}</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-sans)' }}>{home.stats.items[2].sublabel}</div>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="relative p-10">
                <div className="w-2 h-2 mb-6" style={{ background: '#D4A017' }} />
                <div className="text-5xl xl:text-6xl font-extrabold mb-2" style={{ color: '#D4A017', fontFamily: 'var(--font-heading)' }}>
                  <AnimatedCounter target={2} suffix="" />
                </div>
                <div className="text-base font-semibold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{home.stats.items[3].label}</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-sans)' }}>{home.stats.items[3].sublabel}</div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: '#F0F4F8' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <FadeUp className="mb-16">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#D4A017', fontFamily: 'var(--font-heading)' }}
            >
              {home.whyUs.sectionLabel}
            </p>
            <h2
              className="text-4xl md:text-5xl font-extrabold leading-tight"
              style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}
            >
              {home.whyUs.headline}
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200">
            {home.whyUs.items.map((item, i) => (
              <FadeUp key={item.id} delay={i * 0.1}>
                <div
                  className="group p-10 border-b md:border-b-0 md:border-r last:border-r-0 border-slate-200 hover:bg-white transition-colors duration-300"
                >
                  <div
                    className="text-6xl font-extrabold mb-6 leading-none"
                    style={{ color: 'rgba(10,22,40,0.08)', fontFamily: 'var(--font-heading)' }}
                  >
                    {item.number}
                  </div>
                  <div
                    className="w-8 h-0.5 mb-5"
                    style={{ background: '#D4A017' }}
                  />
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#4A5568', fontFamily: 'var(--font-sans)' }}
                  >
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeUp className="mb-12 text-center">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#D4A017', fontFamily: 'var(--font-heading)' }}
            >
              {home.industries.sectionLabel}
            </p>
            <h2
              className="text-4xl md:text-5xl font-extrabold"
              style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}
            >
              {home.industries.headline}
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {home.industries.items.map((industry, i) => (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04, ease: 'easeOut' as const }}
                  whileHover={{ scale: 1.04 }}
                  className="px-5 py-2.5 border text-sm font-semibold cursor-pointer transition-colors duration-200 hover:border-amber-400 hover:text-amber-700"
                  style={{
                    borderColor: '#D1DCE8',
                    color: '#0A1628',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {industry.name}
                </motion.div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── DUAL CTA ─────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Employers — Navy */}
        <FadeUp>
          <div
            className="relative flex flex-col justify-center px-12 py-20 overflow-hidden min-h-[380px]"
            style={{ background: '#0A1628' }}
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 opacity-10"
              style={{ background: 'radial-gradient(circle, #D4A017, transparent)' }}
            />
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#D4A017', fontFamily: 'var(--font-heading)' }}
            >
              For Employers
            </p>
            <h3
              className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {home.cta.employers.headline}
            </h3>
            <p
              className="text-base mb-8 max-w-sm"
              style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-sans)' }}
            >
              {home.cta.employers.subtext}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 self-start px-8 py-4 text-sm font-bold transition-all duration-200 hover:opacity-90"
              style={{ background: '#D4A017', color: '#0A1628', fontFamily: 'var(--font-heading)' }}
            >
              {home.cta.employers.buttonLabel}
              <ArrowRight size={15} />
            </Link>
          </div>
        </FadeUp>

        {/* Candidates — Gold */}
        <FadeUp delay={0.1}>
          <div
            className="relative flex flex-col justify-center px-12 py-20 overflow-hidden min-h-[380px]"
            style={{ background: '#D4A017' }}
          >
            <div
              className="absolute bottom-0 left-0 w-40 h-40 opacity-10"
              style={{ background: 'radial-gradient(circle, #0A1628, transparent)' }}
            />
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'rgba(10,22,40,0.6)', fontFamily: 'var(--font-heading)' }}
            >
              For Job Seekers
            </p>
            <h3
              className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight"
              style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}
            >
              {home.cta.candidates.headline}
            </h3>
            <p
              className="text-base mb-8 max-w-sm"
              style={{ color: 'rgba(10,22,40,0.65)', fontFamily: 'var(--font-sans)' }}
            >
              {home.cta.candidates.subtext}
            </p>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 self-start px-8 py-4 text-sm font-bold transition-all duration-200 hover:bg-opacity-90"
              style={{ background: '#0A1628', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}
            >
              {home.cta.candidates.buttonLabel}
              <ArrowRight size={15} />
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}