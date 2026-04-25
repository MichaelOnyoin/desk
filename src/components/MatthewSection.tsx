"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "20+ years of practicing law",
  "$250M+ in compensation recovered",
  "Personal cell phone given to every client",
  "Board Certified Trial Lawyer",
  "Active in mass tort litigation nationwide",
  "Featured on CNN, ABC, NBC, and FOX",
];

const whyUs = [
  {
    num: "01",
    title: "Litigation Bulldogs — Not Settlement Mills",
    body: "Many TV firms churn out volume, settling cases for low amounts using inexperienced staff. At Dolman Law Group, we're litigation and trial lawyers at our core. Insurance companies know we'll go the distance and take a case to a jury when necessary.",
  },
  {
    num: "02",
    title: "Quality Over Quantity",
    body: "We don't try to take every tiny case. We focus on quality. When we take your case, we go to the mat for you. You'll receive the personal cell phone number of our managing partner, Matthew Dolman.",
  },
  {
    num: "03",
    title: "Financial Resources to Level the Playing Field",
    body: "Winning against greedy insurance companies is a war of attrition. We force them to spend money at every step by being a constant legal thorn in their side until they give in.",
  },
  {
    num: "04",
    title: "We Ensure You Get the Medical Care You Need",
    body: "We've cultivated a national network of doctors willing to give you the care you need immediately, regardless of your ability to pay. They get paid later out of your settlement.",
  },
  {
    num: "05",
    title: "Our Mission Stems From a Story Just Like Yours",
    body: "When Matthew Dolman was 14, his father was injured in a car accident and hired an incompetent attorney off a billboard. Matthew devotes his life to giving you the service he wishes his father received.",
  },
];

export default function MatthewSection() {
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
    <section ref={ref} className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Matthew bio */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <p className="text-gold-400 font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-6">
              Our Founding Partner
            </p>
            <h2 className="font-display font-bold text-white text-4xl lg:text-5xl leading-tight mb-2">
              Hi, I'm{" "}
            </h2>
            <h2 className="font-display font-bold text-4xl lg:text-5xl leading-tight mb-6">
              <span className="gold-text">Matthew Dolman</span>
            </h2>
            <div className="gold-line mb-8" />
            <p className="font-body text-gray-300 text-lg leading-relaxed mb-6 italic">
              "I have a very personal reason for wanting to help you."
            </p>
            <p className="font-body text-gray-400 leading-relaxed mb-6">
              I've been in your shoes. When I was 14, my father got in a serious car accident—and the lawyer he hired off a magazine advertisement was incompetent. Our family could never get him on the phone, and when we did, he acted annoyed.
            </p>
            <p className="font-body text-gray-400 leading-relaxed mb-10">
              Since then, I've been devoted to giving you the service I wish my family had back then. For me, it's personal. I've helped create the very law firm I wish my father had hired.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-gold-400 shrink-0" />
                  <span className="font-sans text-gray-300 text-sm">{h}</span>
                </div>
              ))}
            </div>
            <a href="#" className="btn-gold inline-flex items-center gap-2 text-black font-sans font-semibold px-8 py-4 rounded text-sm">
              Read My Story <ArrowRight size={16} />
            </a>
          </div>

          {/* Photo placeholder */}
          <div className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-gold-500/30 rounded-2xl" />
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden aspect-[3/4] flex items-end justify-center">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-900/20 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
                <div className="relative text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display font-bold text-gold-300 text-3xl">MD</span>
                  </div>
                  <div className="font-display font-bold text-white text-xl mb-1">Matthew Dolman</div>
                  <div className="text-gold-400 font-sans text-sm">Founding & Managing Partner</div>
                  <div className="text-gray-500 font-sans text-xs mt-2">Board Certified Trial Lawyer</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Us */}
        <div className={`transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-14">
            <p className="text-gold-400 font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Top 5 Reasons
            </p>
            <h2 className="font-display font-bold text-white text-4xl lg:text-5xl">
              Partner with <span className="gold-text">Dolman Law Group</span>
            </h2>
            <div className="gold-line mx-auto mt-4" />
          </div>

          <div className="space-y-6">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className={`border border-gold-500/20 rounded-xl p-8 hover:border-gold-400/50 hover:bg-gold-500/5 transition-all duration-300 group ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${700 + i * 100}ms` }}
              >
                <div className="flex gap-6 items-start">
                  <div className="text-gold-500/40 font-display font-bold text-5xl leading-none shrink-0 group-hover:text-gold-400/60 transition-colors">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-xl mb-3 leading-snug group-hover:text-gold-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body text-gray-400 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
