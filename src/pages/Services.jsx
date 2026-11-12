
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

export default function Services() {
  const [filter, setFilter] = useState('All');

  const cats = [
    'All',
    'Hair',
    'Colour',
    'Styling',
    'Skin',
    'Bridal',
    'Nails'
  ];

  return (
    <>
      <Header />

      <main>

        {/* Page Heading */}
        <div className="bg-panel py-10 sm:py-14 text-center">
          <p className="eyebrow">
            THE MAISON MENU
          </p>

          <h1 className="display text-6xl sm:text-8xl mt-3">
            The art of you.
          </h1>

          <p className="text-stone mt-3 text-sm">
            A curated collection of beauty rituals and signature treatments.
          </p>
        </div>

        {/* Services Listing */}
        <div className="wrap py-9 sm:py-12">

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-7">
            {cats.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-3 border text-[9px] uppercase tracking-[.18em] transition-colors ${
                  filter === c
                    ? 'bg-gold text-noir border-gold'
                    : 'border-white/20 text-ivory hover:border-gold'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-9">
            {services
              .filter(s => filter === 'All' || s.category === filter)
              .map(s => (
                <ServiceCard key={s.id} service={s} />
              ))}
          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}
