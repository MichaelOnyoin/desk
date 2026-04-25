"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const filters = ["All", "Burn Injuries", "Traumatic Brain Injury", "Car Accident", "Truck Accident", "Motorcycle Accident"];

const cases = [
  {
    category: "Car Accident",
    amount: "$5,000,000",
    title: "Car Accident Resulting in Burn Injuries",
    tag: "Burn Injuries",
  },
  {
    category: "Traumatic Brain Injury",
    amount: "$2,250,000",
    title: "Physical assault due to negligent security at an apartment complex resulting in a traumatic brain injury",
    tag: "Traumatic Brain Injury",
  },
  {
    category: "Car Accident",
    amount: "$1,875,000",
    title: "Car accident with disputed liability. Client underwent a one-level cervical fusion and suffered a mild TBI.",
    tag: "Car Accident",
  },
  {
    category: "Truck Accident",
    amount: "$1,750,000",
    title: "Shoulder Surgery With Mild TBI",
    tag: "Truck Accident",
  },
  {
    category: "Motorcycle Accident",
    amount: "$1,150,000",
    title: "Motorcycle accident caused by at-fault driver making an illegal left turn. Client sustained a fractured elbow.",
    tag: "Motorcycle Accident",
  },
  {
    category: "Motorcycle Accident",
    amount: "$1,000,000",
    title: "Motorcycle Accident Caused a Traumatic Brain Injury",
    tag: "Motorcycle Accident",
  },
];

export default function CaseResults() {
  const [active, setActive] = useState("All");
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

  const filtered = active === "All" ? cases : cases.filter((c) => c.tag === active);

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <p className="text-gold-600 font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Proven Track Record
            </p>
            <h2 className="font-display font-bold text-black text-4xl lg:text-5xl leading-tight">
              Results We Get —{" "}
              <span className="gold-text">Case Studies</span>
            </h2>
            <div className="gold-line mt-4" />
          </div>
          <a
            href="#"
            className="btn-gold text-black font-sans font-semibold text-sm px-6 py-3 rounded flex items-center gap-2 self-start lg:self-auto whitespace-nowrap"
          >
            View All Case Studies <ArrowRight size={16} />
          </a>
        </div>

        {/* Filters */}
        <div className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-sans text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
                active === f
                  ? "bg-black border-black text-[#E8C95A] font-semibold"
                  : "border-gray-200 text-gray-600 hover:border-[#E8C95A] hover:text-[#C9A84C] bg-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c, i) => (
            <div
              key={i}
              className={`card-hover bg-white rounded-xl overflow-hidden border border-gray-100 group transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="bg-black px-6 py-5 relative overflow-hidden">
                {/* Gold shimmer background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-900/30 to-transparent" />
                <div className="relative">
                  <span className="text-gold-400 font-sans text-xs tracking-widest uppercase mb-2 block">
                    {c.category}
                  </span>
                  <div className="font-display font-bold text-white text-3xl">
                    {c.amount}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="font-body text-gray-700 leading-relaxed text-sm mb-4">
                  {c.title}
                </p>
                <span className="inline-block bg-gold-50 border border-gold-200 text-gold-700 text-[10px] font-sans font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {c.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-gray-400 font-sans text-xs text-center mt-8">
          DISCLAIMER: These case results do not constitute a guarantee, warranty, or prediction regarding the outcome of your legal matter.
        </p>
      </div>
    </section>
  );
}
