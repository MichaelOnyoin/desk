"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const offices = [
  { city: "Clearwater, FL", address: "800 N Belcher Rd, Clearwater, FL 33765" },
  { city: "Tampa, FL", address: "3753 Howard Hughes Pkwy, Las Vegas, NV 89169" },
  { city: "Boca Raton, FL", address: "Boca Raton, Florida" },
  { city: "Bronx, NY", address: "The Bronx, New York" },
  { city: "San Antonio, TX", address: "San Antonio, Texas" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", case: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold-600 font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Free Case Evaluation
          </p>
          <h2 className="font-display font-bold text-black text-4xl lg:text-5xl leading-tight">
            Get Your Free{" "}
            <span className="gold-text">Consultation Today</span>
          </h2>
          <div className="gold-line mx-auto mt-4 mb-6" />
          <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
            You owe us nothing until we win. Contact us 24/7 for a free, no-obligation case review with an experienced attorney.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-gold-100 shadow-lg">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} className="text-gold-600" />
                </div>
                <h3 className="font-display font-bold text-black text-2xl mb-4">Thank You!</h3>
                <p className="font-body text-gray-600">
                  We've received your message and will contact you within 24 hours for a free case evaluation.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <h3 className="font-display font-bold text-black text-2xl mb-6">
                  Tell Us About Your Case
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-sans text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-sans text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-sans text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-sans text-sm font-medium mb-2">
                      Type of Case *
                    </label>
                    <select
                      required
                      value={form.case}
                      onChange={(e) => setForm({ ...form, case: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all bg-white"
                    >
                      <option value="">Select case type...</option>
                      <option>Car Accident</option>
                      <option>Truck Accident</option>
                      <option>Motorcycle Accident</option>
                      <option>Dangerous Drug Lawsuit</option>
                      <option>Defective Product</option>
                      <option>Chemical Exposure</option>
                      <option>Other Personal Injury</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-sans text-sm font-medium mb-2">
                      Tell Us What Happened
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all resize-none"
                      placeholder="Briefly describe your situation..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-gold w-full text-black font-sans font-bold py-4 rounded-lg flex items-center justify-center gap-2"
                  >
                    Get My Free Case Evaluation
                    <ArrowRight size={18} />
                  </button>
                  <p className="text-gray-400 font-sans text-xs text-center">
                    By submitting, you agree to our Privacy Policy. No fee until we win.
                  </p>
                </form>
              </div>
            )}
          </div>

          {/* Info */}
          <div className={`space-y-8 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {/* Contact details */}
            <div className="bg-black rounded-2xl p-8 text-white">
              <h3 className="font-display font-bold text-white text-xl mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a href="tel:8335527274" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-gold-500/20 border border-gold-400/30 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gold-500/30 transition-colors">
                    <Phone size={16} className="text-gold-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 font-sans text-xs">Call Us Anytime</div>
                    <div className="text-gold-300 font-sans font-semibold">833-552-7274</div>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold-500/20 border border-gold-400/30 rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-gold-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 font-sans text-xs">Availability</div>
                    <div className="text-white font-sans font-semibold">24/7 — Including Weekends</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold-500/20 border border-gold-400/30 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-gold-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 font-sans text-xs">Email</div>
                    <div className="text-white font-sans font-semibold">info@dolmanlaw.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Offices */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="font-display font-bold text-black text-xl mb-6 flex items-center gap-2">
                <MapPin size={18} className="text-gold-500" />
                Our Offices
              </h3>
              <div className="space-y-4">
                {offices.map((office, i) => (
                  <div key={i} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 shrink-0" />
                    <div>
                      <div className="font-sans font-semibold text-black text-sm">{office.city}</div>
                      <div className="text-gray-500 font-sans text-xs">{office.address}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Promise */}
            <div className="bg-gradient-to-br from-gold-500 to-gold-700 rounded-2xl p-8 text-black">
              <div className="font-display font-bold text-2xl mb-3">
                Our Promise to You
              </div>
              <p className="font-body text-black/80 leading-relaxed">
                You pay nothing unless we win. No hidden fees. No upfront costs. Just dedicated legal representation fighting for the compensation you deserve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
