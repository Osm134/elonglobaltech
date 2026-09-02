import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#060E1C' }}>
      {/* Gold top border */}
      <div className="h-0.5 w-full" style={{ background: '#D4A017' }} />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="Elyon Global Technologies"
                className="h-10 w-auto object-contain shrink-0"
                style={{ background: '#FFFFFF', padding: '4px 10px', borderRadius: 2 }}
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.style.display = 'none';
                  const fallback = img.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }} />
              
              {/* Branded text fallback */}
              <span
                className="items-center gap-3"
                style={{ fontFamily: 'var(--font-heading)', display: 'none' }}>
                
                <span
                  className="flex items-center justify-center font-extrabold text-sm shrink-0"
                  style={{ width: 36, height: 36, background: '#D4A017', color: '#0A1628', letterSpacing: '-0.02em' }}>
                  
                  EG
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="font-extrabold text-white text-sm tracking-wide">ELYON GLOBAL</span>
                  <span className="font-medium tracking-widest" style={{ color: '#D4A017', fontSize: '0.6rem' }}>TECHNOLOGIES</span>
                </span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-sans)' }}>
              Global workforce solutions connecting businesses with exceptional talent across the United States and India. Precision hiring. Proven results.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/elyon-global-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-white/20 hover:border-amber-400 hover:text-amber-400 text-white/50 transition-colors"
                aria-label="LinkedIn">
                
                <FaLinkedin  size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: '#D4A017', fontFamily: 'var(--font-heading)' }}>
              
              Services
            </h4>
            <ul className="space-y-3">
              {[
              { label: 'IT Staffing', href: '/services#it-staffing' },
              { label: 'RPO', href: '/services#rpo' },
              { label: 'Staff Augmentation', href: '/services#staff-augmentation' },
              { label: 'Executive Hiring', href: '/services#executive-hiring' },
              { label: 'Bench Sales', href: '/services#bench-sales' },
              { label: 'Vendor Management', href: '/services#vendor-management' },
              { label: 'Domestic Recruitment', href: '/services#domestic' }].
              map((item) =>
              <li key={item.href}>
                  <Link
                  to={item.href}
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-sans)' }}>
                  
                    {item.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: '#D4A017', fontFamily: 'var(--font-heading)' }}>
              
              Company
            </h4>
            <ul className="space-y-3">
              {[
              { label: 'About Us', href: '/about' },
              { label: 'Industries', href: '/industries' },
              { label: 'Careers', href: '/careers' },
              { label: 'Contact', href: '/contact' }].
              map((item) =>
              <li key={item.href}>
                  <Link
                  to={item.href}
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-sans)' }}>
                  
                    {item.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: '#D4A017', fontFamily: 'var(--font-heading)' }}>
              
              Contact
            </h4>
            <div className="space-y-5">
              {/* US Office */}
              <div>
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  United States
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin size={13} className="mt-0.5 shrink-0" style={{ color: '#D4A017' }} />
                    <span className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-sans)' }}>
                      7901 4th St N Ste. 300,<br />St. Petersburg, FL 33702, USA
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={13} className="shrink-0" style={{ color: '#D4A017' }} />
                    <a href="mailto:admin@elyonglobaltech.com" className="text-xs hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-sans)' }}>admin@elyonglobaltech.com
                    </a>
                  </div>
                </div>
              </div>

              {/* India Office */}
              <div>
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  India
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin size={13} className="mt-0.5 shrink-0" style={{ color: '#D4A017' }} />
                    <span className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-sans)' }}>
                      Shop 18, 19, Archana Enclave,<br />East Maredapally,<br />Secunderabad, 500026
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={13} className="shrink-0" style={{ color: '#D4A017' }} />
                    <a href="tel:+919441454411" className="text-xs hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-sans)' }}>
                      +91 94414 54411
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={13} className="shrink-0" style={{ color: '#D4A017' }} />
                    <a href="mailto:admin@elyonglobaltech.com" className="text-xs hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-sans)' }}>admin@elyonglobaltech.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-sans)' }}>
            © {currentYear} Elyon Global Technologies. All Rights Reserved.
          </p>
       <div className="flex items-center gap-6">
  <Link
    to="/privacy-policy"
    className="text-xs hover:text-white transition-colors"
    style={{
      color: 'rgba(255,255,255,0.35)',
      fontFamily: 'var(--font-sans)',
    }}
  >
    Privacy Policy
  </Link>

  <span style={{ color: 'rgba(255,255,255,0.15)' }}>
    |
  </span>

  <Link
    to="/terms-of-use"
    className="text-xs hover:text-white transition-colors"
    style={{
      color: 'rgba(255,255,255,0.35)',
      fontFamily: 'var(--font-sans)',
    }}
  >
    Terms of Use
  </Link>
</div>
        </div>
      </div>
    </footer>);

}