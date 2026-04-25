"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Bryan",
    title: "Took Away All the Hassle",
    body: "Attorney Dolman took care of all the hassles and paperwork I was being sent by the Insurance Companies. This allowed me to treat with the doctors and focus on getting better. They handled all the doctor's bills and even got them reduced to put more money in my pocket.",
    rating: 5,
  },
  {
    name: "Brent",
    title: "Great Attorney",
    body: "Matt and his team are very responsive and know how the system works. We have worked together on many cases in the past and I have learned a lot from him. I will continue to practice law with him more in the future. In fact, I have consulted with him personally on my own personal injury matter.",
    rating: 5,
  },
  {
    name: "Anne",
    title: "Glad I Chose Dolman Law Group",
    body: "Hiring Matt Dolman is the best decision you could make if you are injured in an accident. He resolved my case quickly—it only took about 4.5 months—and it was a pleasure to deal with the staff. The communication was great as I always knew what to expect with each stage of the process.",
    rating: 5,
  },
  {
    name: "Samantha",
    title: "Superb Service and Results!",
    body: "The Dolman Law Group is fantastic. I would recommend them to anyone and everyone. My case was a priority to them. I felt like they took special care of me. Mr. Dolman provided me with his personal cell phone number. Great results.",
    rating: 5,
  },
  {
    name: "Daniel",
    title: "Compassionate, Knowledgeable Attorney",
    body: "Mr. Dolman knows the law. I am very selective who I refer clients to, as it is also a reflection on my practice. I continue to refer clients to Mr. Dolman because he treats my clients with great compassion and explains the process in simple terms. He achieves the results that make the clients happy.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
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

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold-600 font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Client Success Stories
          </p>
          <h2 className="font-display font-bold text-black text-4xl lg:text-5xl">
            Testimonials
          </h2>
          <div className="gold-line mx-auto mt-4" />
        </div>

        <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative bg-black rounded-2xl p-10 lg:p-16 overflow-hidden">
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#C9A84C]/60 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#C9A84C]/60 rounded-br-2xl" />
            
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl" />

            <div className="relative text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {Array(t.rating).fill(0).map((_, i) => (
                  <Star key={i} size={20} className="text-[#E8C95A] fill-[#E8C95A]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-body text-gray-300 text-xl lg:text-2xl leading-relaxed italic mb-10 max-w-3xl mx-auto">
                "{t.body}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-px h-8 bg-[#C9A84C]/30" />
                <div>
                  <div className="font-display font-bold text-white text-lg">{t.name}</div>
                  <div className="text-[#E8C95A] font-sans text-sm">{t.title}</div>
                </div>
                <div className="w-px h-8 bg-[#C9A84C]/30" />
              </div>

              {/* Nav */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={prev}
                  className="w-10 h-10 border border-[#C9A84C]/30 rounded-full flex items-center justify-center text-[#E8C95A] hover:bg-[#C9A84C]/10 hover:border-[#E8C95A] transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === current
                          ? "w-8 h-2 bg-[#E8C95A]"
                          : "w-2 h-2 bg-[#C9A84C]/30 hover:bg-[#C9A84C]/60"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="w-10 h-10 border border-[#C9A84C]/30 rounded-full flex items-center justify-center text-[#E8C95A] hover:bg-gold-500/10 hover:border-[#E8C95A] transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
