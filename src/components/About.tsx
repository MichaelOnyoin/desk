"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Scale, Users, Award } from "lucide-react";

const features = [
  {
    icon: Scale,
    title: "One-on-One Case Review",
    desc: "We meet with you personally to discuss your case for free, regardless of your accident type or injury.",
  },
  {
    icon: Shield,
    title: "Aggressive Representation",
    desc: "Our dedicated team acts quickly to identify all potential sources of compensation and aggressively pursues maximum recovery.",
  },
  {
    icon: Users,
    title: "National Medical Network",
    desc: "We've cultivated a national network of doctors ready to give you care immediately, regardless of your ability to pay.",
  },
  {
    icon: Award,
    title: "No Fee Until You Win",
    desc: "Throughout your injury claim, you owe us nothing until we recover compensation for you. Zero financial risk.",
  },
];

const awards = [
  { year: "2014, 2019, 2020 & 2022", title: "Florida Trends Legal Elite", org: "Selected By Fellow Florida Bar Members" },
  { year: "2022", title: "Best Lawyers", org: "Best Lawyers Publication" },
  { year: "Lifetime", title: "Top 100 Lawyers", org: "National Trial Lawyers" },
  { year: "2013–2019", title: "Florida Super Lawyer", org: `"Up and Comer" Florida Trend's Magazine` },
  { year: "Ongoing", title: "Clients' Choice", org: "Personal Injury — Avvo.com" },
  { year: "Lifetime", title: "Multi-Million Dollar Advocates Forum", org: "Lifetime Member" },
];

export default function About() {
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

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold-600 font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="font-display font-bold text-black text-4xl lg:text-5xl leading-tight mb-6">
            Award-Winning Personal Injury &{" "}
            <span className="gold-text">Mass Tort Lawyers</span>
          </h2>
          <div className="gold-line mx-auto" />
          <p className="text-gray-600 font-body text-lg leading-relaxed mt-6">
            If you suffered serious injuries because of someone else's negligence, carelessness, or recklessness, you need a skilled advocate fighting in your corner now.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((f, i) => (
            <div
              key={i}
              className={`card-hover corner-decoration bg-white border border-gray-100 rounded-xl p-8 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-gold-100 to-gold-200 rounded-lg flex items-center justify-center mb-6">
                <f.icon size={22} className="text-gold-700" />
              </div>
              <h3 className="font-display font-semibold text-black text-lg mb-3 leading-snug">
                {f.title}
              </h3>
              <p className="font-body text-gray-600 leading-relaxed text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Awards */}
        <div
          className={`bg-black rounded-2xl p-10 lg:p-14 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <p className="gold-text font-sans text-xs tracking-[0.3em] uppercase mb-3">
              Recognized Excellence
            </p>
            <h3 className="font-display font-bold text-white text-3xl lg:text-4xl">
              Our Award History
            </h3>
            <div className="gold-line mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, i) => (
              <div
                key={i}
                className="border border-[#C9A84C]/20 rounded-lg p-6 hover:border-[#E8C95A]/60 hover:bg-[#C9A84C]/5 transition-all duration-300"
              >
                <div className="text-[#E8C95A] font-sans text-xs tracking-widest uppercase mb-2">
                  {award.year}
                </div>
                <div className="text-white font-display font-semibold text-base mb-1 leading-snug">
                  {award.title}
                </div>
                <div className="text-gray-500 font-sans text-xs">
                  {award.org}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-gold-400 text-white hover:bg-gold-500 hover:text-[#E8C95A] font-sans font-semibold text-sm px-8 py-3 rounded transition-all duration-300"
            >
              VIEW OUR FULL HISTORY →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
