import { Phone, Mail } from "lucide-react";

const footerLinks = {
  "Dangerous Drugs": [
    "Depo Provera Lawsuit",
    "Dupixent Lawsuit",
    "Mounjaro Lawsuit",
    "Ozempic Lawsuit",
    "Suboxone Lawsuit",
    "Zantac Lawsuit",
    "See All Lawsuits",
  ],
  "Practice Areas": [
    "Car Accidents",
    "Truck Accidents",
    "Motorcycle Accidents",
    "Defective Products",
    "Chemical Exposure",
    "Mass Tort Lawsuits",
  ],
  "Locations": [
    "Clearwater, FL",
    "Tampa, FL",
    "Boca Raton, FL",
    "Bronx, NY",
    "San Antonio, TX",
  ],
  "About": [
    "Our Attorneys",
    "Case Results",
    "Dolman Law Blog",
    "Media Appearances",
    "Podcast",
    "Contact Us",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="font-display font-bold text-2xl text-white leading-none tracking-tight">
                DOLMAN
              </div>
              <div className="text-xs font-sans font-medium tracking-[0.2em] text-gold-500 uppercase">
                Law Group
              </div>
              <div className="text-gray-600 font-sans text-xs mt-1">
                Accident Injury Lawyers, PA
              </div>
            </div>

            <div className="gold-line mb-6" />

            <p className="font-body text-gray-500 text-sm leading-relaxed mb-6">
              Skillfully, relentlessly, and compassionately devoted to our clients to achieve true justice.
            </p>

            <a
              href="tel:8335527274"
              className="flex items-center gap-2 text-gold-400 font-sans font-semibold mb-2 hover:text-gold-300 transition-colors"
            >
              <Phone size={14} />
              833-552-7274
            </a>
            <a
              href="mailto:info@dolmanlaw.com"
              className="flex items-center gap-2 text-gray-500 font-sans text-sm hover:text-gold-400 transition-colors"
            >
              <Mail size={13} />
              info@dolmanlaw.com
            </a>

            {/* Social
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 border border-gold-500/20 rounded flex items-center justify-center text-gray-500 hover:text-gold-400 hover:border-gold-400 transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-sans font-bold text-gold-400 text-xs uppercase tracking-widest mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-gray-500 text-sm hover:text-gold-300 transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold-500/30 group-hover:bg-gold-400 transition-colors" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 font-sans text-xs">
            © 2026 Dolman Law Group Accident Injury Lawyers, PA ® All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            {["Disclaimer", "Privacy Policy", "Your Privacy Choices", "Sitemap"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-600 font-sans text-xs hover:text-gold-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
