import { useState, FormEvent } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Instagram,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Frontend validation
    if (!formData.nome.trim()) {
      setErrorMessage('Por favor, informe seu nome completo.');
      setFormStatus('error');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Por favor, informe um endereço de e-mail válido.');
      setFormStatus('error');
      return;
    }

    if (!formData.mensagem.trim()) {
      setErrorMessage('Por favor, escreva uma mensagem detalhando sua solicitação.');
      setFormStatus('error');
      return;
    }

    // Success simulation
    setErrorMessage('');
    setFormStatus('success');

    // Optionally prepare WhatsApp message
    // Reset after some time or let user send via WhatsApp directly
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá, equipe Compreender! Meu nome é ${formData.nome || 'Visitante'}.\nE-mail: ${formData.email || 'Não informado'}\nAssunto: ${formData.assunto || 'Dúvida Geral'}\nMensagem: ${formData.mensagem || 'Gostaria de informações sobre atendimento.'}`
    );
    window.open(`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="relative py-20 sm:py-28 overflow-hidden text-[#53514e]"
    >
      {/* Background layer with user-specified image and dark semi-transparent overlay */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src={CLINIC_INFO.footerBgImage}
          alt="Ambiente acolhedor da clínica Compreender"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-105 filter blur-xs"
        />
        {/* Deep, rich overlay to make text and colors luminous rather than dull */}
        <div className="absolute inset-0 bg-[#18232c]/92 backdrop-blur-md" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#8ec8f6] mb-3">
            <span className="px-3 py-1 rounded-full bg-[#8ec8f6]/15 border border-[#8ec8f6]/30 text-[#a3d4fc]">
              Atendimento & Localização
            </span>
          </div>
          {/* Mandated H2 */}
          <h2
            id="contact-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-4 drop-shadow-sm"
            style={{ textWrap: 'balance' }}
          >
            Fale Conosco
          </h2>
          <p className="text-base sm:text-lg text-[#e6f1fa] max-w-2xl mx-auto leading-relaxed font-normal">
            Estamos de portas abertas para acolher sua família. Agende uma
            avaliação, tire dúvidas ou faça-nos uma visita no centro de Santa Maria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Endereço */}
            <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#b6cada]/40 flex items-center justify-center text-[#53514e] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-display font-bold text-[#53514e] mb-1">
                    Endereço
                  </h3>
                  <p className="text-xs sm:text-sm text-[#53514e]/90 leading-relaxed">
                    {CLINIC_INFO.address}
                  </p>
                  <p className="text-[11px] text-[#53514e]/70 mt-1">
                    Fácil acesso e estacionamento nas proximidades.
                  </p>
                </div>
              </div>
            </div>

            {/* Horários */}
            <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#b6cada]/40 flex items-center justify-center text-[#53514e] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-display font-bold text-[#53514e] mb-1">
                    Horário de Atendimento
                  </h3>
                  <p className="text-xs sm:text-sm text-[#53514e]/90 font-medium">
                    {CLINIC_INFO.hours}
                  </p>
                  <p className="text-[11px] text-[#53514e]/70 mt-1">
                    Atendimentos com agendamento prévio.
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp e Telefone */}
            <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#b6cada]/40 flex items-center justify-center text-[#53514e] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-display font-bold text-[#53514e] mb-1">
                    WhatsApp & Telefone
                  </h3>
                  <p className="text-sm font-semibold text-[#53514e]">
                    {CLINIC_INFO.phoneFormatted}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-2xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Abrir WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${CLINIC_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#53514e] bg-[#b6cada]/30 hover:bg-[#b6cada]/50 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Ligar Agora</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#b6cada]/40 flex items-center justify-center text-[#53514e] shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-[#53514e]">
                      Instagram Oficial
                    </h3>
                    <p className="text-xs text-[#53514e]/80">
                      {CLINIC_INFO.instagramHandle}
                    </p>
                  </div>
                </div>
                <a
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#53514e] bg-[#b6cada]/30 hover:bg-[#53514e] hover:text-white transition-colors"
                >
                  Seguir
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form & Interactive Map */}
          <div className="lg:col-span-7 space-y-6">
            {/* Contact Form */}
            <div className="p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl">
              <h3 className="text-2xl font-display font-bold text-[#53514e] mb-2">
                Envie uma Mensagem
              </h3>
              <p className="text-xs sm:text-sm text-[#53514e]/80 mb-6">
                Preencha os campos abaixo e entraremos em contato rapidamente pelo WhatsApp ou e-mail.
              </p>

              {formStatus === 'success' ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-[#53514e] space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-emerald-900">
                        Mensagem Registrada com Sucesso!
                      </h4>
                      <p className="text-xs text-emerald-800 mt-0.5">
                        Agradecemos seu contato, {formData.nome}. Nossa equipe responderá em breve.
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-emerald-200/60 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Agilizar no WhatsApp agora</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFormStatus('idle');
                        setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
                      }}
                      className="px-4 py-2.5 rounded-xl text-xs font-medium text-emerald-900 hover:bg-emerald-100 transition-colors"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {formStatus === 'error' && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="nome"
                        className="block text-xs font-semibold text-[#53514e] mb-1.5"
                      >
                        Nome Completo *
                      </label>
                      <input
                        id="nome"
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) =>
                          setFormData({ ...formData, nome: e.target.value })
                        }
                        placeholder="Ex: Maria Silva"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f5f8fa] border border-[#b6cada]/40 text-sm text-[#53514e] placeholder:text-[#53514e]/40 focus:bg-white focus:outline-hidden focus:border-[#53514e] focus:ring-1 focus:ring-[#53514e] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-[#53514e] mb-1.5"
                      >
                        E-mail *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="seuemail@exemplo.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f5f8fa] border border-[#b6cada]/40 text-sm text-[#53514e] placeholder:text-[#53514e]/40 focus:bg-white focus:outline-hidden focus:border-[#53514e] focus:ring-1 focus:ring-[#53514e] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="assunto"
                      className="block text-xs font-semibold text-[#53514e] mb-1.5"
                    >
                      Assunto de Interesse
                    </label>
                    <input
                      id="assunto"
                      type="text"
                      value={formData.assunto}
                      onChange={(e) =>
                        setFormData({ ...formData, assunto: e.target.value })
                      }
                      placeholder="Ex: Avaliação TEA, Fonoaudiologia, Consulta..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f5f8fa] border border-[#b6cada]/40 text-sm text-[#53514e] placeholder:text-[#53514e]/40 focus:bg-white focus:outline-hidden focus:border-[#53514e] focus:ring-1 focus:ring-[#53514e] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensagem"
                      className="block text-xs font-semibold text-[#53514e] mb-1.5"
                    >
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      rows={4}
                      required
                      value={formData.mensagem}
                      onChange={(e) =>
                        setFormData({ ...formData, mensagem: e.target.value })
                      }
                      placeholder="Conte-nos como podemos ajudar você ou sua família..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f5f8fa] border border-[#b6cada]/40 text-sm text-[#53514e] placeholder:text-[#53514e]/40 focus:bg-white focus:outline-hidden focus:border-[#53514e] focus:ring-1 focus:ring-[#53514e] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-[#53514e] hover:bg-[#3d3b38] active:scale-98 transition-all duration-200 shadow-xs"
                    >
                      <Send className="w-4 h-4 text-[#b6cada]" />
                      <span>Enviar Mensagem</span>
                    </button>

                    <p className="text-[11px] text-[#53514e]/70 text-center sm:text-right">
                      Privacidade respeitada e resposta rápida.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Interactive Google Maps Frame */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-white/80 bg-white">
              <div className="p-4 bg-white/95 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#53514e]">
                  <MapPin className="w-4 h-4 text-[#53514e]" />
                  <span>Localização no Google Maps</span>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-medium text-[#53514e] hover:underline"
                >
                  Abrir no App do Maps
                </a>
              </div>
              <div className="relative w-full h-64 sm:h-72">
                <iframe
                  title="Localização da Compreender no Google Maps"
                  src={CLINIC_INFO.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
