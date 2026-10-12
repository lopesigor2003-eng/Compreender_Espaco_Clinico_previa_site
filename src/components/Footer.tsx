import { MessageCircle, Phone, MapPin, Clock, Instagram, Heart } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export function Footer() {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Sobre Nós', href: '#sobre-nos' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Convênios', href: '#convenios' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer
      aria-label="Rodapé institucional"
      className="bg-[#242c33] text-[#d6e2eb] pt-16 pb-12 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Purpose Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#b6cada] flex items-center justify-center text-[#53514e] font-display font-bold text-xl shadow-xs">
                C
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-white tracking-tight">
                  Compreender
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#b6cada]">
                  Espaço Clínico Transdisciplinar
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#b6cada]/90 leading-relaxed max-w-sm">
              Um espaço de acolhimento, evolução e respeito à singularidade de
              cada pessoa. Cuidado ético e transdisciplinar em Santa Maria / RS.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acompanhe a Compreender no Instagram"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#b6cada] hover:text-[#53514e] flex items-center justify-center transition-colors text-white"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale conosco no WhatsApp"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors text-white"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (mirrored navigation) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navegação
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#b6cada]/90 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Contato & Localização
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#b6cada]/90">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#b6cada] shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#b6cada] shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.hours}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline decoration-white/30"
                >
                  WhatsApp: {CLINIC_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#b6cada] shrink-0" />
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  Telefone: {CLINIC_INFO.phoneFormatted}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#b6cada]/75">
          <p>
            © 2026 Compreender - Espaço Clínico Transdisciplinar. Todos os
            direitos reservados.
          </p>
          <div className="flex items-center gap-1.5">
            <span>Cuidado com propósito e acolhimento humano</span>
            <Heart className="w-3.5 h-3.5 text-[#b6cada]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
