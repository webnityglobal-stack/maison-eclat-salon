
import Header from '../components/Header';
import Footer from '../components/Footer';
import { gallery } from '../data/services';

export default function Gallery() {
  return (
    <>
      <Header />

      <main className="wrap py-9 sm:py-12">

        {/* Gallery Heading */}
        <div className="max-w-3xl mb-8">
          <p className="eyebrow">
            A GLIMPSE INSIDE
          </p>

          <h1 className="display text-6xl sm:text-8xl mt-3">
            The Maison<br />
            <i className="text-gold font-normal">
              aesthetic.
            </i>
          </h1>

          <p className="text-stone leading-7 mt-4">
            A visual journal of our space, our artists and the beauty rituals we love.
          </p>
        </div>

        {/* Gallery Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {gallery.map((src, i) => (
            <div
              key={i}
              className={`overflow-hidden bg-panel ${
                i === 1 || i === 4
                  ? 'aspect-[3/4]'
                  : 'aspect-square'
              }`}
            >
              <img
                src={src}
                alt={`Maison Eclat salon gallery ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </>
  );
}
