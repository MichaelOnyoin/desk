import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseResults from "@/components/CaseResults";
import PracticeAreas from "@/components/PracticeAreas";
import MatthewSection from "@/components/MatthewSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <CaseResults />
      <PracticeAreas />
      <MatthewSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
