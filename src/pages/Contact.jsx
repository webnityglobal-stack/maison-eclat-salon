
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />

      <main className="wrap py-9 sm:py-12">

        <div className="grid lg:grid-cols-2 gap-9 lg:gap-14">

          {/* Contact Information */}
          <div>
            <p className="eyebrow">
              YOUR INVITATION
            </p>

            <h1 className="display text-6xl sm:text-8xl mt-3">
              We would<br />
              <i className="text-gold font-normal">
                love to meet.
              </i>
            </h1>

            <p className="text-stone leading-8 mt-5 max-w-lg">
              Whether you have a question about a treatment or are ready to plan your next visit, our concierge team is here to help.
            </p>

            <div className="flex flex-col gap-5 mt-8 text-sm text-ivory/80">

              <p className="flex gap-4">
                <MapPin className="text-gold shrink-0" size={18} />
                12, Luxury Avenue, New Delhi, India
              </p>

              <p className="flex gap-4">
                <Phone className="text-gold shrink-0" size={18} />
                +91 98765 43210
              </p>

              <p className="flex gap-4">
                <Mail className="text-gold shrink-0" size={18} />
                concierge@maisoneclat.example
              </p>

              <p className="flex gap-4">
                <Clock className="text-gold shrink-0" size={18} />
                Tuesday – Sunday, 10 AM – 8 PM
              </p>

            </div>

            <Link to="/book" className="gold-btn mt-7">
              Reserve your experience
            </Link>
          </div>

          {/* Atelier Section */}
          <div className="bg-panel p-6 sm:p-8">

            <p className="eyebrow">
              THE ATELIER
            </p>

            <h2 className="font-display text-4xl mt-3">
              A beautiful place to pause.
            </h2>

            <img
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=85"
              alt="Maison salon interior"
              className="w-full aspect-[4/3] object-cover mt-5"
            />

            <p className="text-sm text-stone leading-7 mt-5">
              We recommend booking in advance to reserve your preferred artist and treatment time. We look forward to welcoming you.
            </p>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}
