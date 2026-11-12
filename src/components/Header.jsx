
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sparkles, CalendarDays } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ['Home', '/'],
    ['Services', '/services'],
    ['Experience', '/experience'],
    ['Gallery', '/gallery'],
    ['Contact', '/contact']
  ];

  const navClass = ({ isActive }) =>
    isActive
      ? 'text-gold'
      : 'text-ivory/75 hover:text-gold transition-colors';

  return (
    <header className="sticky top-0 z-50 bg-noir/95 backdrop-blur-xl border-b border-white/10">

      <div className="wrap h-[82px] flex items-center justify-between gap-5">

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-ivory"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <span className="w-10 h-10 rounded-full border border-gold text-gold grid place-items-center">
            <Sparkles size={19} />
          </span>

          <span>
            <b className="font-display text-[23px] tracking-[.04em]">
              MAISON ÉCLAT
            </b>

            <small className="block text-[7px] tracking-[.34em] uppercase text-stone -mt-0.5">
              The art of beauty
            </small>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] uppercase tracking-[.22em] font-bold">
          {links.map(([t, p]) => (
            <NavLink key={p} to={p} end={p === '/'} className={navClass}>
              {t}
            </NavLink>
          ))}
        </nav>

        {/* Booking Button */}
        <Link
          to="/book"
          className="gold-btn !py-3 !px-4"
          onClick={() => setOpen(false)}
        >
          <CalendarDays size={14} />

          <span className="hidden sm:inline">
            Reserve your experience
          </span>

          <span className="sm:hidden">
            Book now
          </span>
        </Link>

      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="md:hidden border-t border-white/10 px-6 py-5 bg-noir flex flex-col gap-5 text-xs uppercase tracking-widest">

          {links.map(([t, p]) => (
            <NavLink
              onClick={() => setOpen(false)}
              key={p}
              to={p}
              end={p === '/'}
              className={navClass}
            >
              {t}
            </NavLink>
          ))}

        </nav>
      )}

    </header>
  );
}
