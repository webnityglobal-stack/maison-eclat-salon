
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
    <footer className="bg-[#0d0c0b] border-t border-white/10 pt-10 sm:pt-14 lg:pt-16 pb-6">

      <div className="wrap grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-9 sm:gap-x-10 sm:gap-y-10 pb-10 sm:pb-12 lg:pb-14">

        {/* Brand Section */}
        <div className="col-span-2 lg:col-span-1">
          <Link to="/" className="inline-block">
            <h2 className="font-display text-2xl sm:text-3xl tracking-[.06em]">
              MAISON ÉCLAT<span className="text-gold">.</span>
            </h2>
          </Link>

          <p className="text-xs sm:text-sm text-stone leading-7 mt-3 sm:mt-5 max-w-sm">
            A world of considered beauty, exceptional artistry and quiet luxury. Your moment, beautifully made.
          </p>

          <div className="flex gap-4 mt-5 sm:mt-6 text-gold">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-ivory transition-colors"
            >
              <Instagram size={19} />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-ivory transition-colors"
            >
              <Facebook size={19} />
            </a>
          </div>
        </div>

        {/* Discover */}
        <div>
          <h4 className="eyebrow mb-4 sm:mb-5">
            Discover
          </h4>

          <div className="flex flex-col gap-3 text-xs sm:text-sm text-stone">
            <Link to="/services" className="hover:text-gold transition-colors">
              Our services
            </Link>

            <Link to="/experience" className="hover:text-gold transition-colors">
              The experience
            </Link>

            <Link to="/gallery" className="hover:text-gold transition-colors">
              Gallery
            </Link>

            <Link to="/book" className="hover:text-gold transition-colors">
              Appointments
            </Link>
          </div>
        </div>

        {/* Visit Atelier */}
        <div>
          <h4 className="eyebrow mb-4 sm:mb-5">
            Visit the atelier
          </h4>

          <div className="flex flex-col gap-4 text-xs sm:text-sm text-stone">

            <p className="flex items-start gap-2 sm:gap-3 leading-6">
              <MapPin
                size={16}
                className="text-gold shrink-0 mt-1"
              />
              <span>
                12, Luxury Avenue, New Delhi
              </span>
            </p>

            <p className="flex items-start gap-2 sm:gap-3">
              <Phone
                size={16}
                className="text-gold shrink-0 mt-0.5"
              />
              <a href="tel:+919876543210" className="hover:text-gold transition-colors">
                +91 98765 43210
              </a>
            </p>

            <p className="flex items-start gap-2 sm:gap-3 leading-6">
              <Clock
                size={16}
                className="text-gold shrink-0 mt-1"
              />
              <span>
                Tue–Sun · 10 AM–8 PM
              </span>
            </p>

          </div>
        </div>

        {/* Newsletter */}
        <div className="col-span-2 lg:col-span-1">
          <h4 className="eyebrow mb-4 sm:mb-5">
            The Éclat letter
          </h4>

          <p className="text-xs sm:text-sm text-stone leading-7 mb-4 max-w-sm">
            A thoughtful note on beauty, new rituals and private experiences.
          </p>

          <form
            onSubmit={e => {
              e.preventDefault();
              alert('Thank you for joining Maison Éclat.');
              e.currentTarget.reset();
            }}
            className="flex w-full border-b border-white/30 pb-2"
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
              className="text-gold hover:text-ivory transition-colors shrink-0"
            >
              <ArrowUpRight size={19} />
            </button>
          </form>
        </div>

      </div>

      {/* Copyright */}
      <div className="wrap border-t border-white/10 pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[8px] sm:text-[9px] tracking-[.15em] sm:tracking-[.2em] text-stone uppercase">

        <span>
          © 2026 Maison Éclat. All rights reserved.
        </span>

        <span>
          Beauty, elevated.
        </span>

      </div>

    </footer>
  );
}
