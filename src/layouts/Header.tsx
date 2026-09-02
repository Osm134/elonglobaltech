import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, LogIn } from 'lucide-react';
import { useState } from 'react';
import logo from "../assets/logo.png";
const navItems = [
  { href: '/', label: 'Home' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { href: '/services', label: 'All Services' },
      { href: '/services#it-staffing', label: 'IT Staffing' },
      { href: '/services#rpo', label: 'RPO' },
      { href: '/services#staff-augmentation', label: 'Staff Augmentation' },
      { href: '/services#executive-hiring', label: 'Executive Hiring' },
      { href: '/services#bench-sales', label: 'Bench Sales' },
    ],
  },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50" style={{ background: '#0A1628' }}>
      {/* Top accent bar */}
      <div className="h-0.5 w-full" style={{ background: '#D4A017' }} />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
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
              }}
            />
            {/* Branded text fallback — hidden by default, shown only if image fails */}
            <span
              className="items-center gap-3"
              style={{ fontFamily: 'var(--font-heading)', display: 'none' }}
            >
              <span
                className="flex items-center justify-center font-extrabold text-sm shrink-0"
                style={{ width: 36, height: 36, background: '#D4A017', color: '#0A1628', letterSpacing: '-0.02em' }}
              >
                EG
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-extrabold text-white text-sm tracking-wide">ELYON GLOBAL</span>
                <span className="font-medium text-xs tracking-widest" style={{ color: '#D4A017', fontSize: '0.6rem' }}>TECHNOLOGIES</span>
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors group"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.label}
                    <ChevronDown size={14} className="opacity-60" />
                    <span
                      className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                      style={{ background: '#D4A017' }}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 mt-0 w-52 py-2 shadow-2xl border border-white/10"
                      style={{ background: '#0D1F3C' }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="relative px-4 py-2 text-sm font-medium transition-colors group"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: location.pathname === item.href ? '#D4A017' : 'rgba(255,255,255,0.8)',
                  }}
                >
                  {item.label}
                  <span
                    className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                    style={{
                      background: '#D4A017',
                      width: location.pathname === item.href ? '100%' : '0%',
                    }}
                  />
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://outlook.office365.com/mail/inbox"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold border transition-all duration-200 hover:bg-white/10"
              style={{
                borderColor: 'rgba(255,255,255,0.25)',
                color: 'rgba(255,255,255,0.8)',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.02em',
              }}
              title="Login to Outlook Mail"
            >
              <LogIn size={15} />
              Login
            </a>
            <Link
              to="/contact"
              className="px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                background: '#D4A017',
                color: '#0A1628',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.02em',
              }}
            >
              Hire Talent
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10" style={{ background: '#0D1F3C' }}>
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href || item.label}
                to={item.href || '/'}
                className="py-3 px-2 text-sm font-medium text-white/80 hover:text-white border-b border-white/5 transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-3 py-3 text-center text-sm font-semibold"
              style={{ background: '#D4A017', color: '#0A1628', fontFamily: 'var(--font-heading)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Talent
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}