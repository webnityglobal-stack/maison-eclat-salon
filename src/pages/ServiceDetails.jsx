
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, CalendarDays, Check } from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { services } from '../data/services';

export default function ServiceDetails() {
  const { id } = useParams();

  const s = services.find(x => x.id === Number(id));

  if (!s) {
    return (
      <>
        <Header />

        <div className="wrap py-20 sm:py-24 text-center">
          Treatment not found{' '}
          <Link to="/services" className="text-gold underline">
            Explore services
          </Link>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="wrap py-8 sm:py-12">

        {/* Back Navigation */}
        <Link
          to="/services"
          className="flex items-center gap-2 text-[9px] uppercase tracking-widest mb-6"
        >
          <ArrowLeft size={14} />
          Back to menu
        </Link>

        {/* Service Details */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Service Image */}
          <img
            src={s.image}
            alt={s.name}
            className="w-full aspect-[4/5] object-cover"
          />

          {/* Service Information */}
          <div>

            <p className="eyebrow">
              {s.category} · MAISON SIGNATURE
            </p>

            <h1 className="display text-5xl sm:text-7xl mt-3">
              {s.name}
            </h1>

            <div className="flex items-center gap-2 text-sm text-stone mt-4">
              <Clock size={15} />
              {s.duration}
            </div>

            <p className="font-display text-4xl text-gold mt-5">
              ₹{s.price.toLocaleString('en-IN')}
            </p>

            <p className="text-stone leading-8 mt-5">
              {s.description}
            </p>

            {/* Service Benefits */}
            <ul className="flex flex-col gap-3 text-sm text-ivory/80 mt-5">
              {[
                'Personalised consultation',
                'Expert-led treatment',
                'Finishing touch and aftercare'
              ].map(x => (
                <li
                  key={x}
                  className="flex gap-3 items-center"
                >
                  <Check size={15} className="text-gold" />
                  {x}
                </li>
              ))}
            </ul>

            {/* Booking Button */}
            <Link
              to={`/book?service=${s.id}`}
              className="gold-btn mt-7"
            >
              Reserve this ritual
              <CalendarDays size={15} />
            </Link>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}
