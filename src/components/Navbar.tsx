import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, PhoneCall } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenQuickSchedule?: () => void;
}

export function Navbar({ onOpenQuickSchedule }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Sobre Nós', href: '#sobre-nos' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Convênios', href: '#convenios' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-xs py-3'
          : 'bg-[#f5f8fa]/90 backdrop-blur-md py-4 sm:py-5 border-b border-[#b6cada]/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element in display face) */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#53514e] rounded-md"
            aria-label="Compreender - Espaço Clínico Transdisciplinar - Ir para o início"
          >
            {/* Custom Monogram Emblem */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#b6cada] to-[#9db7cb] flex items-center justify-center text-[#53514e] shadow-xs border border-white/60 transition-transform duration-200 group-hover:scale-105 shrink-0">
              <span className="font-display font-bold text-xl leading-none">C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-display font-bold tracking-tight text-[#53514e] leading-tight">
                Compreender
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-widest text-[#53514e]/80">
                Espaço Clínico Transdisciplinar
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 concise single-line nav links */}
          <nav
            aria-label="Navegação principal"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#53514e]"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#2d2b29] transition-colors py-1 relative group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#53514e] rounded-xs"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#53514e] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale conosco pelo WhatsApp"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#53514e] hover:bg-[#3d3b38] active:scale-98 transition-all duration-200 shadow-xs hover:shadow-md focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#53514e] whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-[#b6cada]" aria-hidden="true" />
              <span>Agende sua Consulta</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 rounded-lg bg-[#b6cada]/40 text-[#53514e] hover:bg-[#b6cada]/60 transition-colors"
              aria-label="Contato direto no WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#53514e] hover:bg-[#b6cada]/30 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#53514e]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden fixed inset-x-0 top-[65px] bg-[#f5f8fa]/98 backdrop-blur-xl border-b border-[#b6cada]/50 shadow-xl transition-all duration-300 px-6 py-6"
        >
          <nav className="flex flex-col gap-4 text-base font-medium text-[#53514e]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-[#b6cada]/30 hover:text-[#2d2b29] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#b6cada]/40 flex flex-col gap-3">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#53514e] hover:bg-[#3d3b38] transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#b6cada]" />
                <span>Agende sua Consulta (WhatsApp)</span>
              </a>
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#53514e] bg-[#b6cada]/30 hover:bg-[#b6cada]/50 transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Ligar: {CLINIC_INFO.phoneFormatted}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
