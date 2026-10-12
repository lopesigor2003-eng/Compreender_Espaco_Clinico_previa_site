import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Insurances } from './components/Insurances';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f8fa] text-[#53514e] selection:bg-[#b6cada] selection:text-[#2d2b29]">
      {/* Semantic Header & Navigation */}
      <Navbar />

      {/* Semantic Main Content Flow */}
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Insurances />
        <Contact />
      </main>

      {/* Semantic Footer */}
      <Footer />

      {/* Floating Interactive WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
