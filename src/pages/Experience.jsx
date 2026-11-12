
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Flower2 } from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Experience() {
  return (
    <>
      <Header />

      <main>

        {/* Hero Section */}
        <section className="bg-panel py-12 sm:py-16 text-center px-5">
          <p className="eyebrow">
            THE MAISON PHILOSOPHY
          </p>

          <h1 className="display text-6xl sm:text-8xl mt-4">
            A world apart.<br />
            <i className="text-gold font-normal">
              Entirely yours.
            </i>
          </h1>

          <p className="max-w-2xl mx-auto text-stone leading-8 mt-5">
            We believe beauty is not simply what you see in the mirror. It is how you feel in the moment, the confidence you carry and the care you give yourself.
          </p>
        </section>

        {/* Philosophy Section */}
        <section className="wrap section !py-12 sm:!py-16 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=90"
            alt="Elegant luxury salon interior"
            className="w-full aspect-[5/4] object-cover"
          />

          <div>
            <p className="eyebrow">
              THE ART OF SLOWING DOWN
            </p>

            <h2 className="display text-5xl sm:text-7xl mt-3">
              Considered<br />
              in every<br />
              <i className="text-gold font-normal">
                detail.
              </i>
            </h2>

            <p className="text-stone leading-8 mt-5">
              From the atmosphere of our atelier to the expertise of our artists, every detail has been chosen to create a sense of ease. Your consultation is never rushed, your treatment is never one-size-fits-all, and your time is always valued.
            </p>
          </div>
        </section>

        {/* Signature Values */}
        <section className="bg-panel !py-12 sm:!py-16">
          <div className="wrap grid md:grid-cols-3 gap-8">

            {[
              [
                Sparkles,
                'Exceptional artistry',
                'A collective of specialists who approach their craft with imagination and precision.'
              ],
              [
                Flower2,
                'Sensory sanctuary',
                'An elegant, welcoming space where you can step away from the everyday.'
              ],
              [
                Heart,
                'Beauty made personal',
                'Treatments and rituals thoughtfully tailored to your needs and expression.'
              ]
            ].map(([I, t, d]) => (
              <div key={t}>
                <I size={27} className="text-gold" />

                <h3 className="font-display text-3xl mt-5">
                  {t}
                </h3>

                <p className="text-sm text-stone leading-7 mt-3">
                  {d}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* Booking CTA */}
        <section className="wrap py-12 sm:py-16 text-center">
          <p className="eyebrow">
            YOUR MAISON MOMENT
          </p>

          <h2 className="display text-5xl sm:text-7xl mt-3">
            Beauty, on your terms.
          </h2>

          <Link to="/book" className="gold-btn mt-6">
            Reserve an experience
          </Link>
        </section>

      </main>

      <Footer />
    </>
  );
}
