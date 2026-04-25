"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Pill, Flame, Package, Scale, Car } from "lucide-react";

const areas = [
  {
    icon: Pill,
    category: "Dangerous Drugs",
    cases: ["Depo Provera Lawsuit", "Ozempic Lawsuit", "Suboxone Lawsuit", "Zantac Lawsuit", "Mounjaro Lawsuit"],
    color: "from-red-900/20 to-transparent",
  },
  {
    icon: Flame,
    category: "Chemical Exposure",
    cases: ["AFFF Lawsuit", "Paraquat Lawsuit", "Roundup Lawsuit", "Chlorpyrifos Exposure"],
    color: "from-orange-900/20 to-transparent",
  },
  {
    icon: Package,
    category: "Defective Products",
    cases: ["Hair Relaxer Cancer Lawsuit", "NEC Baby Formula Lawsuit", "Ninja Cooker Burn Lawsuit", "Toxic Baby Food Autism"],
    color: "from-blue-900/20 to-transparent",
  },
  {
    icon: Car,
    category: "Personal Injury",
    cases: ["Car Accidents", "Truck Accidents", "Motorcycle Accidents", "Wrongful Death"],
    color: "from-green-900/20 to-transparent",
  },
  {
    icon: Scale,
    category: "Mass Tort",
    cases: ["Bard Power Port Lawsuit", "Paragard IUD Lawsuit", "Roblox Lawsuit", "Social Media Lawsuits"],
    color: "from-purple-900/20 to-transparent",
  },
];

const recentCases = [
  {
    title: "Firefighting Foam AFFF Lawsuit",
    excerpt: "For decades, firefighters used Aqueous Film-Forming Foam (AFFF) to suppress fires. AFFF contains chemicals that build up in the body over time, negatively impacting overall human health.",
    date: "June 2025",
  },
  {
    title: "Roblox Sexual Abuse Lawsuit & Child Exploitation Claims",
    excerpt: "Lax safety measures and inadequate moderation allow online predators free access to engage in child sexual exploitation and grooming on the platform.",
    date: "2025",
  },
  {
    title: "Ozempic Lawsuit Lawyer",
    excerpt: "Many horror stories illustrate serious Ozempic side effects and the medical issues that can accompany this product, including gastroparesis and intestinal blockages.",
    date: "January 2026",
  },
  {
    title: "Baby Food Autism Lawsuit",
    excerpt: "We represent children with autism spectrum disorder who were exposed to heavy metals in baby foods from major manufacturers.",
    date: "December 2025",
  },
  {
    title: "Suboxone Tooth Decay Lawsuit",
    excerpt: "Suboxone film strips cause severe dental decay and other oral health issues that manufacturers failed to adequately warn patients about.",
    date: "2025",
  },
  {
    title: "Hair Relaxer Cancer Lawsuit",
    excerpt: "Chemical straightening products used primarily by African American women have been linked to increased risk of uterine and ovarian cancers.",
    date: "2025",
  },
];

export default function PracticeAreas() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Practice areas */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold-600 font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-4">Practice Areas</p>
          <h2 className="font-display font-bold text-black text-4xl lg:text-5xl leading-tight">
            Cases We <span className="gold-text">Take</span>
          </h2>
          <div className="gold-line mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
          {areas.map((area, i) => (
            <div
              key={i}
              className={`card-hover bg-black rounded-xl p-6 group cursor-pointer transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-b ${area.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <div className="w-10 h-10 border border-gold-500/40 rounded-lg flex items-center justify-center mb-4 group-hover:border-gold-400 group-hover:bg-gold-500/10 transition-all">
                  <area.icon size={18} className="text-gold-400" />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-4 leading-snug">
                  {area.category}
                </h3>
                <ul className="space-y-2">
                  {area.cases.map((c) => (
                    <li key={c}>
                      <a href="#" className="text-gray-400 font-sans text-xs hover:text-gold-300 transition-colors flex items-center gap-1 group/link">
                        <span className="w-1 h-1 rounded-full bg-gold-500/40 group-hover/link:bg-gold-400 transition-colors" />
                        {c}
                      </a>
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-4 text-gold-500 font-sans text-xs font-semibold tracking-wide hover:text-gold-300 transition-colors block">
                  See All →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Recent cases */}
        <div className={`transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-gold-600 font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-4">Latest Updates</p>
              <h2 className="font-display font-bold text-black text-3xl lg:text-4xl">
                Active Lawsuits & <span className="gold-text">Case News</span>
              </h2>
            </div>
            <a href="#" className="hidden sm:flex items-center gap-2 text-gold-600 font-sans font-semibold text-sm hover:text-gold-500 transition-colors">
              View All <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentCases.map((c, i) => (
              <article
                key={i}
                className={`card-hover bg-white border border-gray-100 rounded-xl p-6 group transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${600 + i * 100}ms` }}
              >
                <div className="text-gold-600 font-sans text-xs uppercase tracking-widest mb-3 font-semibold">
                  {c.date}
                </div>
                <h3 className="font-display font-bold text-black text-lg leading-snug mb-3 group-hover:text-gold-700 transition-colors">
                  {c.title}
                </h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {c.excerpt}
                </p>
                <a href="#" className="text-gold-600 font-sans text-xs font-semibold tracking-wide hover:text-gold-500 flex items-center gap-1 transition-colors">
                  READ MORE <ArrowRight size={12} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
