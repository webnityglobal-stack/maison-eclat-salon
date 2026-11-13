
import { Link } from 'react-router-dom';
import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Clock,
  ArrowUpRight
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0d0c0b] border-t border-white/10 pt-12 sm:pt-14 lg:pt-16 pb-6">

      <div className="wrap">

        {/* Main Footer */}
        <div className="grid grid-cols-2 lg:grid-cols-[1.2fr_0.75fr_0.95fr_1fr] gap-x-4 sm:gap-x-6 lg:gap-x-5 gap-y-10 pb-10 sm:pb-12 lg:pb-14">

          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-1 min-w-0">

            <Link to="/" className="inline-block">
              <h2 className="font-display text-2xl sm:text-3xl tracking-[.06em] text-ivory">
                MAISON ÉCLAT<span className="text-gold">.</span>
              </h2>
            </Link>

            <p className="text-xs sm:text-sm text-stone leading-7 mt-4 max-w-xs">
              A world of considered beauty, exceptional artistry and quiet luxury. Your moment, beautifully made.
            </p>

            <div className="flex items-center gap-4 mt-6">

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gold hover:bg-gold hover:text-[#0d0c0b] transition-all duration-300"
              >
                <Instagram size={17} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gold hover:bg-gold hover:text-[#0d0c0b] transition-all duration-300"
              >
                <Facebook size={17} />
              </a>

            </div>
          </div>

          {/* Discover */}
          <div className="min-w-0">

            <h4 className="eyebrow mb-5">
              Discover
            </h4>

            <div className="flex flex-col gap-3.5 text-xs sm:text-sm text-stone">

              <Link to="/services" className="hover:text-gold transition-colors w-fit">
                Our services
              </Link>

              <Link to="/experience" className="hover:text-gold transition-colors w-fit">
                The experience
              </Link>

              <Link to="/gallery" className="hover:text-gold transition-colors w-fit">
                Gallery
              </Link>

              <Link to="/book" className="hover:text-gold transition-colors w-fit">
                Appointments
              </Link>

            </div>
          </div>

          {/* Visit Atelier */}
          <div className="min-w-0">

            <h4 className="eyebrow mb-5">
              Visit the atelier
            </h4>

            <div className="flex flex-col gap-4 text-xs sm:text-sm text-stone">

              <div className="flex items-start gap-2.5 leading-6">
                <MapPin size={16} className="text-gold shrink-0 mt-1" />
                <span>12, Luxury Avenue, New Delhi</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone size={16} className="text-gold shrink-0 mt-0.5" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-gold transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-start gap-2.5 leading-6">
                <Clock size={16} className="text-gold shrink-0 mt-1" />
                <span>Tue–Sun · 10 AM–8 PM</span>
              </div>

            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-1 min-w-0">

            <h4 className="eyebrow mb-5">
              The Éclat letter
            </h4>

            <p className="text-xs sm:text-sm text-stone leading-7 mb-5 max-w-sm">
              A thoughtful note on beauty, new rituals and private experiences.
            </p>

            <form
              onSubmit={e => {
                e.preventDefault();
                alert('Thank you for joining Maison Éclat.');
                e.currentTarget.reset();
              }}
              className="flex items-center w-full border-b border-white/30 pb-3 group focus-within:border-gold transition-colors"
            >

              <input
                required
                type="email"
                placeholder="Your email address"
                aria-label="Your email address"
                className="bg-transparent min-w-0 flex-1 outline-none text-xs sm:text-sm placeholder:text-stone text-ivory"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="text-gold hover:text-ivory transition-colors shrink-0 ml-3"
              >
                <ArrowUpRight size={19} />
              </button>

            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">

          <span className="text-[8px] sm:text-[9px] tracking-[.17em] text-stone uppercase text-center sm:text-left">
            © 2026 Maison Éclat. All rights reserved.
          </span>

          <span className="font-display italic text-sm text-gold">
            Beauty, elevated.
          </span>

        </div>

      </div>

    </footer>
  );
}
