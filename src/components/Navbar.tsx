"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown, Search } from "lucide-react";

const navItems = [
  {
    label: "Dangerous Drugs",
    children: [
      "Depo Provera Lawsuit",
      "Dupixent Lawsuit",
      "Mounjaro Lawsuit",
      "Ocaliva Lawsuit",
      "Oxbryta Lawsuit",
      "Ozempic Lawsuit",
      "Suboxone Lawsuit",
      "Tylenol Autism Lawsuit",
      "Valsartan Cancer Lawsuit",
      "Zantac Lawsuit",
      "See All Lawsuits →",
    ],
  },
  {
    label: "Chemical Exposure",
    children: [
      "AFFF Lawsuit",
      "Chlorpyrifos Exposure Lawsuit",
      "Paraquat Lawsuit",
      "Roundup Lawsuit",
      "See All Lawsuits →",
    ],
  },
  {
    label: "Defective Products",
    children: [
      "Defective Pacemaker Lawsuit",
      "Gerber Toxic Baby Food Lawsuit",
      "Hair Relaxer Cancer Lawsuit",
      "NEC Baby Formula Lawsuit",
      "Ninja Cooker Burn Lawsuit",
      "Toxic Baby Food Autism Lawsuit",
      "See All Lawsuits →",
    ],
  },
  {
    label: "Personal Injury",
    children: [
      "Car Accidents",
      "Truck Accidents",
      "Motorcycle Accidents",
      "View All Areas We Serve →",
    ],
  },
  {
    label: "About Us",
    children: [
      "Our Attorneys",
      "Case Results",
      "Dolman Law Blog",
      "Media Appearances",
      "Podcast",
      "Locations",
    ],
  },
  { label: "Contact", children: [] },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-black text-white text-sm py-2 px-4 flex justify-between items-center">
        <span className="text-gold-500 font-sans tracking-wide text-xs">
          FREE CASE EVALUATION — AVAILABLE 24/7
        </span>
        <a
          href="tel:8335527274"
          className="flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors font-sans font-semibold"
        >
          <Phone size={14} />
          833-552-7274
        </a>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 nav-glass border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/45 border-gold-200 shadow-lg shadow-black/5"
            : "bg-white border-gold-100 "
        }`}
        // style={{
        //   backgroundImage: `url('navbar-header.jpg')`,
        // }}
      >
        <div className="max-w-7xl mx-auto  px-4 lg:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0">
            <div className="flex flex-col">
              <img src="logos.svg" alt="Corporate desk logo" className="h-30 w-32" />
              {/* <span
                className="font-display font-bold text-xl text-black leading-none tracking-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                DOLMAN
                
              </span>
              <span className="text-xs font-sans font-medium tracking-[0.2em] text-gold-600 uppercase">
                Law Group
              </span> */}
            </div>
            <div className="h-8 w-px bg-gold-300 mx-1" />
            <span className="text-[10px] font-sans text-gray-500 max-w-[100px] leading-tight">
              Trusted registration and documentation services
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button className={`flex items-center gap-1 px-3 py-2 text-sm font-sans font-medium text-gray-800 hover:text-[#b8922a] transition-colors rounded ${scrolled?"text-white":""} `}>
                  {item.label}
                  {item.children.length > 0 && (
                    <ChevronDown
                      size={13}
                      className="text-gold-400 group-hover:rotate-180 transition-transform duration-200"
                    />
                  )}
                </button>

                {item.children.length > 0 && (
                  <div className="dropdown-menu absolute top-full left-0 mt-1 w-60 bg-white border border-gold-100 shadow-xl rounded-lg overflow-hidden z-50">
                    {item.children.map((child) => (
                      <a
                        key={child}
                        href="#"
                        className={`block px-4 py-2.5 text-sm font-sans transition-all border-l-2 border-transparent hover:border-gold-400 hover:bg-gold-50 hover:text-gold-700 ${
                          child.includes("→")
                            ? "text-[#E8C95A] font-semibold bg-gold-50"
                            : "text-gray-700"
                        }`}
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Search */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="text-gray-500 hover:text-gold-600 transition-colors p-2">
              <Search size={18} />
            </button>
            <a
              href="#contact"
              className="btn-gold text-black font-sans font-semibold text-sm px-5 py-2.5 rounded"
            >
              Free Consultation
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-black p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gold-100 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-sans font-medium text-gray-800"
                  onClick={() =>
                    setOpenMobileItem(
                      openMobileItem === item.label ? null : item.label
                    )
                  }
                >
                  {item.label}
                  {item.children.length > 0 && (
                    <ChevronDown
                      size={14}
                      className={`text-gold-400 transition-transform ${
                        openMobileItem === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {openMobileItem === item.label &&
                  item.children.length > 0 && (
                    <div className="bg-gray-50 pb-2">
                      {item.children.map((child) => (
                        <a
                          key={child}
                          href="#"
                          className="block px-8 py-2 text-sm font-sans text-gray-600 hover:text-gold-600"
                        >
                          {child}
                        </a>
                      ))}
                    </div>
                  )}
              </div>
            ))}
            <div className="p-4">
              <a
                href="#contact"
                className="btn-gold block text-center text-black font-sans font-semibold text-sm px-5 py-3 rounded"
              >
                Free Consultation
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
