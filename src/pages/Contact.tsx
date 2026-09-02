import { useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import  contact  from '../content/contact.json';

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

 function Contact() {
  const site = 'https://elyonglobaltech.com';
  const title = 'Contact — Elyon Global Technologies';
  const description = 'Get in touch with Elyon Global Technologies. Offices in Dallas, TX and Hyderabad, India. Reach us for hiring, job opportunities, or RPO inquiries.';

  const [formData, setFormData] = useState({ name: '', email: '', company: '', inquiryType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `${formData.inquiryType || 'Inquiry'} — ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:admin@elyonglobaltech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}/contact`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/contact`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#0A1628' }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(212,160,23,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-3xl">
          <FadeUp>
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 border text-xs font-semibold tracking-widest uppercase" style={{ borderColor: '#D4A017', color: '#D4A017', fontFamily: 'var(--font-heading)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#D4A017' }} />
              {contact.hero.label}
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {contact.hero.headline}
            </h1>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-sans)' }}>
              {contact.hero.subtext}
            </p>
          </FadeUp>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, #D4A017, transparent)' }} />
      </section>

      {/* Offices + Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Offices */}
            <div className="lg:col-span-2 space-y-6">
              <FadeUp>
                <h2 className="text-2xl font-extrabold mb-8" style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
                  Our Offices
                </h2>
              </FadeUp>
              {contact.offices.map((office, i) => (
                <FadeUp key={office.id} delay={i * 0.1}>
                  <div className="p-7 border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{office.flag}</span>
                      <div>
                        <h3 className="font-extrabold text-base" style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}>{office.country}</h3>
                        <p className="text-xs" style={{ color: '#4A5568', fontFamily: 'var(--font-sans)' }}>{office.city}</p>
                      </div>
                    </div>
                    <p className="text-xs mb-4 leading-relaxed" style={{ color: '#4A5568', fontFamily: 'var(--font-sans)' }}>{office.description}</p>
                    <div className="space-y-2.5">
                      <div className="flex items-start gap-2.5">
                        <MapPin size={13} className="mt-0.5 shrink-0" style={{ color: '#D4A017' }} />
                        <span className="text-xs" style={{ color: '#0A1628', fontFamily: 'var(--font-sans)' }}>{office.address}</span>
                      </div>
                      {office.phone && (
                        <div className="flex items-center gap-2.5">
                          <Phone size={13} className="shrink-0" style={{ color: '#D4A017' }} />
                          <a href={`tel:${office.phone}`} className="text-xs hover:underline" style={{ color: '#0A1628', fontFamily: 'var(--font-sans)' }}>{office.phone}</a>
                        </div>
                      )}
                      <div className="flex items-center gap-2.5">
                        <Mail size={13} className="shrink-0" style={{ color: '#D4A017' }} />
                        <a href="mailto:admin@elyonglobaltech.com" className="text-xs hover:underline" style={{ color: '#0A1628', fontFamily: 'var(--font-sans)' }}>{office.email}</a>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Form */}
            <FadeUp delay={0.15} className="lg:col-span-3">
              <div className="p-10 border border-slate-200">
                <h2 className="text-2xl font-extrabold mb-2" style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
                  {contact.form.headline}
                </h2>
                <p className="text-sm mb-8" style={{ color: '#4A5568', fontFamily: 'var(--font-sans)' }}>
                  {contact.form.subtext}
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <CheckCircle size={48} style={{ color: '#D4A017' }} className="mb-4" />
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}>Message Sent!</h3>
                    <p className="text-sm" style={{ color: '#4A5568', fontFamily: 'var(--font-sans)' }}>We'll get back to you within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
                          Full Name <span style={{ color: '#D4A017' }}>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 text-sm border border-slate-200 focus:outline-none focus:border-amber-400 transition-colors"
                          style={{ fontFamily: 'var(--font-sans)' }}
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
                          Email Address <span style={{ color: '#D4A017' }}>*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 text-sm border border-slate-200 focus:outline-none focus:border-amber-400 transition-colors"
                          style={{ fontFamily: 'var(--font-sans)' }}
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 text-sm border border-slate-200 focus:outline-none focus:border-amber-400 transition-colors"
                        style={{ fontFamily: 'var(--font-sans)' }}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
                        Inquiry Type <span style={{ color: '#D4A017' }}>*</span>
                      </label>
                      <select
                        required
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 text-sm border border-slate-200 focus:outline-none focus:border-amber-400 transition-colors bg-white"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        <option value="">Select inquiry type</option>
                        {contact.form.inquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0A1628', fontFamily: 'var(--font-heading)' }}>
                        Message <span style={{ color: '#D4A017' }}>*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 text-sm border border-slate-200 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                        style={{ fontFamily: 'var(--font-sans)' }}
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 text-sm font-bold transition-all hover:opacity-90"
                      style={{ background: '#0A1628', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}
                    >
                      Send Message <Send size={14} />
                    </button>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}


export default Contact;