
import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CalendarDays, Clock, CheckCircle } from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { services } from '../data/services';
import { useSalon } from '../context/SalonContext';

export default function Book() {
  const [params] = useSearchParams();
  const { addAppointment } = useSalon();
  const nav = useNavigate();

  const [done, setDone] = useState(false);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: params.get('service') || '1',
    date: '',
    time: '',
    notes: ''
  });

  const change = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    addAppointment({ ...form, id: Date.now() });
    setDone(true);
  };

  return (
    <>
      <Header />

      <main className="wrap py-9 sm:py-12 min-h-[65vh]">

        <div className="max-w-3xl mx-auto">

          {/* Page Heading */}
          <p className="eyebrow">
            A MOMENT FOR YOURSELF
          </p>

          <h1 className="display text-6xl sm:text-8xl mt-3">
            Reserve your<br />
            <i className="text-gold font-normal">
              experience.
            </i>
          </h1>

          <p className="text-stone leading-7 mt-4">
            Tell us how we can make your visit exceptional. Our concierge will be in touch to confirm your preferred appointment.
          </p>

          {/* Success Message */}
          {done ? (
            <div className="bg-panel p-8 sm:p-10 mt-7 text-center">

              <CheckCircle
                size={42}
                className="text-gold mx-auto"
              />

              <h2 className="font-display text-4xl mt-4">
                Your request is received.
              </h2>

              <p className="text-stone text-sm mt-3">
                Thank you, {form.name}. This is a frontend booking demonstration.
              </p>

              <button
                onClick={() => nav('/')}
                className="gold-btn mt-6"
              >
                Return home
              </button>

            </div>
          ) : (

            /* Booking Form */
            <form
              onSubmit={submit}
              className="bg-panel p-5 sm:p-8 mt-7 grid sm:grid-cols-2 gap-4"
            >

              <label className="text-[9px] uppercase tracking-widest">
                Your name
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={change}
                  placeholder="Full name"
                  className="field"
                />
              </label>

              <label className="text-[9px] uppercase tracking-widest">
                Phone number
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={change}
                  placeholder="+91"
                  className="field"
                />
              </label>

              <label className="text-[9px] uppercase tracking-widest">
                Email address
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={change}
                  placeholder="you@example.com"
                  className="field"
                />
              </label>

              <label className="text-[9px] uppercase tracking-widest">
                Select experience
                <select
                  name="service"
                  value={form.service}
                  onChange={change}
                  className="field"
                >
                  {services.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.name} — ₹{s.price}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-[9px] uppercase tracking-widest">
                Preferred date

                <span className="flex items-center relative">
                  <CalendarDays
                    size={16}
                    className="text-gold absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                  />

                  <input
                    required
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    name="date"
                    value={form.date}
                    onChange={change}
                    className="field"
                    style={{ paddingLeft: '45px' }}
                  />
                </span>
              </label>

              <label className="text-[9px] uppercase tracking-widest">
                Preferred time

                <span className="flex items-center relative">
                  <Clock
                    size={16}
                    className="text-gold absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                  />

                  <select
                    required
                    name="time"
                    value={form.time}
                    onChange={change}
                    className="field"
                    style={{ paddingLeft: '45px' }}
                  >
                    <option value="">Choose a time</option>

                    {[
                      '10:00 AM',
                      '11:00 AM',
                      '12:00 PM',
                      '01:00 PM',
                      '02:00 PM',
                      '03:00 PM',
                      '04:00 PM',
                      '05:00 PM',
                      '06:00 PM',
                      '07:00 PM'
                    ].map(t => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </span>
              </label>

              <label className="text-[9px] uppercase tracking-widest sm:col-span-2">
                Your note

                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={change}
                  rows="3"
                  placeholder="Tell us about your preferred look or any requests..."
                  className="field resize-y"
                />
              </label>

              <button className="gold-btn sm:col-span-2 justify-self-start">
                Request appointment →
              </button>

            </form>
          )}

        </div>

      </main>

      <Footer />
    </>
  );
}
