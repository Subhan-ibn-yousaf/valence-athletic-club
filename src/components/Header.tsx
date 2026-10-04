import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Calendar } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenBooking: (planOrTour?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Programs', href: '#programs' },
    { label: 'About', href: '#about' },
    { label: 'Facility', href: '#facility' },
    { label: 'Membership', href: '#membership' },
    { label: 'Coaches', href: '#coaches' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['hero', 'programs', 'about', 'facility', 'membership', 'coaches', 'reviews', 'faq'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#05090D]/98 backdrop-blur-xl py-3 border-b border-white/15 shadow-2xl shadow-black/90'
            : 'bg-[#05090D]/92 backdrop-blur-lg py-4 border-b border-white/10 shadow-xl shadow-black/50'
        }`}
      >
        <div className="content-container flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group transition-transform duration-200 active:scale-95 shrink-0"
            aria-label="Valence Athletic Club Home"
          >
            <BrandLogo size="md" />
          </a>

          {/* Desktop Navigation - High contrast & bold athletic styling */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-xs xl:text-sm font-display font-bold uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-white font-extrabold bg-white/10 shadow-xs'
                      : 'text-white/85 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-[2.5px] bg-[#F5223A] rounded-full shadow-[0_0_8px_#F5223A]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking('Performance')}
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-display font-bold uppercase tracking-wider text-white bg-[#F5223A] hover:bg-[#D4142B] rounded-full transition-all duration-200 shadow-[0_0_25px_rgba(245,34,58,0.5)] hover:shadow-[0_0_35px_rgba(245,34,58,0.7)] cursor-pointer active:scale-95 overflow-hidden hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Join Now
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700" />
            </button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <button
              onClick={() => onOpenBooking('Performance')}
              className="px-4 py-2 text-xs font-display font-bold uppercase tracking-wider text-white bg-[#F5223A] hover:bg-[#D4142B] rounded-full shadow-[0_0_15px_rgba(245,34,58,0.4)]"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-[#151D24] border border-white/20 hover:border-[#F5223A] text-white flex items-center justify-center transition-all focus:outline-none shadow-md"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#F5223A]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation - Full z-[100] overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed top-0 right-0 bottom-0 w-[88%] max-w-sm bg-[#071016] border-l border-white/15 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl z-10">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <BrandLogo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F5223A] text-white/80 hover:text-white flex items-center justify-center transition-all"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-1 py-6">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-display text-sm font-bold uppercase tracking-wider transition-all ${
                        isActive
                          ? 'bg-[#F5223A]/15 text-white border-l-4 border-[#F5223A]'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-40" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('Performance');
                }}
                className="w-full py-3.5 text-center text-xs font-display font-bold uppercase tracking-wider text-white bg-[#F5223A] rounded-full shadow-[0_0_25px_rgba(245,34,58,0.5)] flex items-center justify-center gap-2"
              >
                Join Valence Today
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-4 text-center">
                <span className="text-xs text-[#9AA3AB]">
                  Questions? Call concierge:{' '}
                  <span className="text-white font-medium">(800) 825-3623</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
