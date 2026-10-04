import React from 'react';
import { Instagram, Youtube, Facebook, MapPin, Clock, Phone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05090D] text-[#9AA3AB] pt-16 sm:pt-20 pb-12 border-t border-white/10">
      <div className="content-container">
        {/* Top Footer Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Info & Location Details (5 cols) */}
          <div className="lg:col-span-5">
            <BrandLogo size="lg" className="mb-4" />
            <p className="text-xs sm:text-sm text-[#9AA3AB] leading-relaxed max-w-md mb-6">
              Valence Athletic Club is an elite performance facility uniting science-grounded
              coaching, biomechanical equipment, and an uncompromising standard of athletic discipline.
            </p>

            {/* Quick Contact & Hours info */}
            <div className="space-y-2 mb-6 text-xs text-[#808D99]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F5223A] shrink-0" />
                <span>450 Kinetic Parkway, Performance District</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#F5223A] shrink-0" />
                <span>24/7 Biometric Access for Members · Staffed 5am–10pm</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F5223A] shrink-0" />
                <span>Concierge: (800) 825-3623</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Instagram className="w-4 h-4" />, label: 'Instagram', href: 'https://instagram.com' },
                { icon: <Youtube className="w-4 h-4" />, label: 'YouTube', href: 'https://youtube.com' },
                { icon: <Facebook className="w-4 h-4" />, label: 'Facebook', href: 'https://facebook.com' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#0B1218] border border-white/10 hover:border-[#F5223A] hover:bg-[#F5223A] hover:text-white flex items-center justify-center transition-all"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns (7 cols total: 3 organized columns) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:col-span-7">
            {/* Company */}
            <div>
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-4">
                Club & Facility
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#coaches" className="hover:text-white transition-colors">Coaches & Staff</a></li>
                <li><a href="#facility" className="hover:text-white transition-colors">Equipment & Zones</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Member Reviews</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Training Programs */}
            <div>
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-4">
                Disciplines
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#programs" className="hover:text-white transition-colors">Strength & Hypertrophy</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">HIIT & Conditioning</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Boxing Dynamics</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Athletic Mobility Flow</a></li>
                <li><a href="#membership" className="hover:text-white transition-colors">Private 1-on-1 Coaching</a></li>
              </ul>
            </div>

            {/* Membership & Recovery */}
            <div>
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-4">
                Amenities & Tiers
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#membership" className="hover:text-white transition-colors">Starter Tier</a></li>
                <li><a href="#membership" className="hover:text-white transition-colors">Performance Tier</a></li>
                <li><a href="#membership" className="hover:text-white transition-colors">Elite VIP Tier</a></li>
                <li><a href="#facility" className="hover:text-white transition-colors">Infrared Saunas</a></li>
                <li><a href="#facility" className="hover:text-white transition-colors">Cold Plunge Suite</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#606E7B]">
          <div>
            © {new Date().getFullYear()} Valence Athletic Club. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Accessibility
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
