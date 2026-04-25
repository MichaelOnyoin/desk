"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, ArrowRight, Star } from "lucide-react";

const stats = [
  { value: "$6.7M", label: "Wrongful Death" },
  { value: "$5M", label: "Car Accident" },
  { value: "$3.2M", label: "Brain Injury" },
  { value: "$3.85M", label: "Truck Accident" },
  { value: "400+", label: "Beats Pre-Trial Offer" },
  { value: "$400M+", label: "In Settlements" },
  { value: "40K+", label: "Clients Helped" },
  { value: "120+", label: "Years Experience" },
];

const mediaLogos = ["CNN", "ABC", "NBC", "FOX", "USA Today", "Forbes", "Reuters"];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-black">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=1800&q=80')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold-500 via-gold-300 to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      {/* Geometric decoration */}
      <div className="absolute top-16 right-16 w-64 h-64 border border-gold-500/20 rotate-45 hidden xl:block" />
      <div className="absolute top-24 right-24 w-48 h-48 border border-gold-400/10 rotate-45 hidden xl:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 py-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-gold-500/20 border border-[#E8C95A]/40 rounded-full px-4 py-2 mb-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Star size={14} className="text-[#E8C95A] fill-gold-400" />
            <span className="text-[#E8C95A] font-sans text-sm tracking-widest uppercase font-medium">
              Award-Winning Trial Lawyers
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-display font-bold text-white leading-none mb-6 transition-all duration-700 delay-150 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            OUR FIGHT.{" "}
            <span className="gold-text italic">YOUR VICTORY.</span>
          </h1>

          {/* Divider */}
          <div
            className={`w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-300 mb-8 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          />

          {/* Sub */}
          <p
            className={`text-gray-300 font-body text-xl leading-relaxed mb-10 max-w-xl transition-all duration-700 delay-[400ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Skillfully, relentlessly, and compassionately devoted to our clients
            to achieve true justice. Over{" "}
            <span className="text-gold-300 font-semibold">$400 million</span> recovered.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href="#contact"
              className="btn-gold text-black font-sans font-bold px-8 py-4 rounded text-base flex items-center gap-2 justify-center"
            >
              Get Free Consultation
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:8335527274"
              className="flex items-center gap-3 border border-gold-400/50 text-white hover:border-gold-400 hover:bg-gold-500/10 transition-all px-8 py-4 rounded font-sans font-semibold text-base justify-center"
            >
              <Phone size={18} className="text-gold-400" />
              833-552-7274
            </a>
          </div>

          {/* Stars */}
          <div
            className={`flex items-center gap-2 transition-all duration-700 delay-600 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex gap-0.5">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} size={16} className="text-gold-400 fill-gold-400" />
                ))}
            </div>
            <span className="text-gray-400 font-sans text-sm">
              5.0 · Over 1,200 Client Reviews
            </span>
          </div>
        </div>

        {/* Stats row */}
        <div
          className={`mt-16 transition-all duration-1000 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-px bg-gold-500/20 rounded-xl overflow-hidden border border-gold-500/30">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="stat-card relative bg-black/70 backdrop-blur-sm px-3 py-5 text-center text-white group hover:bg-gold-500/10 transition-colors duration-300"
              >
                <div className="font-display font-bold text-gold-400 text-xl lg:text-2xl mb-1 group-hover:text-gold-300 transition-colors">
                  {stat.value}
                </div>
                <div className="font-sans text-gray-400 text-[10px] uppercase tracking-widest leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured in */}
        <div
          className={`mt-12 transition-all duration-700 delay-[800ms] ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-white font-sans text-xs uppercase tracking-[0.25em] mb-4">
            Featured In
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            {mediaLogos.map((logo) => (
              <span
                key={logo}
                className="text-white font-display font-bold text-sm lg:text-base hover:text-gold-400 transition-colors cursor-default tracking-wide"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
