
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Flower2,
  Heart,
  Star
} from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

export default function Home() {
  return (
    <>
      <Header />

      <main>

        {/* Hero Section */}
        <section className="relative min-h-[580px] lg:min-h-[680px] flex items-center overflow-hidden bg-panel">
          <img
            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=2200&q=90"
            alt="Luxury salon interior with elegant styling stations"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-noir/95 via-noir/65 to-noir/10" />

          <div className="wrap relative py-14 sm:py-16">
            <p className="eyebrow mb-5">
              A PRIVATE WORLD OF BEAUTY & WELLNESS
            </p>

            <h1 className="display text-[clamp(3.8rem,8.6vw,8.2rem)] max-w-[950px]">
              Beauty is an<br />
              <i className="text-gold font-normal">experience.</i>
            </h1>

            <p className="text-ivory/75 text-base sm:text-lg leading-8 max-w-xl mt-6">
              Enter a space where artistry meets atmosphere. Discover exceptional hair, skin and beauty rituals, thoughtfully created around you.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">
              <Link to="/book" className="gold-btn">
                Reserve your moment <ArrowRight size={16} />
              </Link>

              <Link to="/services" className="line-btn">
                Explore the menu
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 mt-10 text-[9px] uppercase tracking-[.2em] text-ivory/70">
              <span className="flex items-center gap-2">
                <Sparkles size={14} className="text-gold" />
                Personal artistry
              </span>

              <span className="flex items-center gap-2">
                <Flower2 size={14} className="text-gold" />
                Elevated rituals
              </span>

              <span className="flex items-center gap-2">
                <Heart size={14} className="text-gold" />
                Thoughtful care
              </span>
            </div>
          </div>

          <div className="hidden lg:block absolute right-[7%] bottom-[12%] w-56 h-72 border border-gold/50 rotate-[7deg]">
            <div className="absolute inset-3 border border-gold/30 -rotate-[14deg]" />
          </div>
        </section>

        {/* Brand Highlights */}
        <section className="bg-[#211d19] py-3">
          <div className="wrap flex flex-wrap justify-center gap-x-12 gap-y-3 text-[9px] uppercase tracking-[.2em] text-champagne/80">
            <span>Private consultation</span>
            <span>Master artistry</span>
            <span>Premium formulations</span>
            <span>Exceptional experience</span>
          </div>
        </section>

        {/* Services Section */}
        <section className="section !py-14 sm:!py-16">
          <div className="wrap">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <p className="eyebrow mb-4">THE MAISON MENU</p>
                <h2 className="display text-5xl sm:text-7xl">
                  Rituals, refined.
                </h2>
              </div>

              <Link
                to="/services"
                className="text-[10px] uppercase tracking-[.18em] font-bold border-b border-gold pb-2 flex items-center gap-3 self-start"
              >
                Discover all services <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-9">
              {services.slice(0, 3).map(s => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-panel !py-14 sm:!py-16">
          <div className="wrap grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative [perspective:1000px]">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=90"
                alt="Luxury salon styling station"
                className="w-full aspect-[5/4] object-cover shadow-2xl [transform:rotateY(-5deg)]"
              />

              <div className="absolute -bottom-5 -right-3 sm:-right-6 glass p-6 sm:p-8">
                <p className="font-display text-4xl text-gold">ÉCLAT</p>
                <p className="text-[8px] uppercase tracking-[.22em] mt-1">
                  The art of feeling beautiful
                </p>
              </div>
            </div>

            <div>
              <p className="eyebrow">BEYOND THE ORDINARY</p>

              <h2 className="display text-5xl sm:text-7xl mt-4">
                A moment<br />
                that belongs<br />
                <i className="text-gold font-normal">to you.</i>
              </h2>

              <p className="text-stone text-sm sm:text-base leading-8 mt-5">
                From the first welcome to the final detail, every part of Maison Éclat is designed to help you pause, indulge and leave feeling renewed. Our artists combine expertise with a deeply personal approach.
              </p>

              <Link to="/experience" className="gold-btn mt-7">
                Discover our philosophy <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* Signature Section */}
        <section className="section !py-14 sm:!py-16">
          <div className="wrap">
            <div className="text-center mb-10">
              <p className="eyebrow">THE ÉCLAT SIGNATURE</p>

              <h2 className="display text-5xl sm:text-7xl mt-4">
                Beauty, by design.
              </h2>

              <p className="text-stone text-sm mt-4 max-w-xl mx-auto leading-7">
                Every detail is considered. Every experience is personal. Every visit is an invitation to feel your very best.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                [
                  Sparkles,
                  'Artistry first',
                  'Our specialists bring creativity, technical mastery and an eye for the details.'
                ],
                [
                  Flower2,
                  'A sensory escape',
                  'A calm, considered environment designed to make time feel like your own.'
                ],
                [
                  Star,
                  'Personal by nature',
                  'We listen, consult and tailor every service to your individual needs.'
                ]
              ].map(([I, t, d]) => (
                <div key={t} className="border-t border-white/20 pt-6">
                  <I size={25} className="text-gold" />

                  <h3 className="font-display text-3xl mt-5">
                    {t}
                  </h3>

                  <p className="text-sm leading-7 text-stone mt-3">
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-16 sm:py-20 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=85"
            alt="Beautiful salon interior"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-noir/75" />

          <div className="wrap relative text-center">
            <p className="eyebrow">YOUR MOMENT AWAITS</p>

            <h2 className="display text-5xl sm:text-7xl mt-4">
              Step into the<br />
              <i className="text-gold font-normal">exceptional.</i>
            </h2>

            <Link to="/book" className="gold-btn mt-7">
              Book your experience <ArrowRight size={15} />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
