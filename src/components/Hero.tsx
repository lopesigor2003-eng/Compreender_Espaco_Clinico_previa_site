import { useState } from 'react';
import { ArrowDown, MessageCircle, Heart, Users2, Sparkles, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Background ambient lighting and delicate gradients using #b6cada and light neutral */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#b6cada]/35 rounded-full blur-3xl opacity-70 transform -translate-y-12" />
        <div className="absolute top-1/3 left-[-5%] w-[500px] h-[500px] bg-[#b6cada]/25 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/60 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Column 1: Copy and Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Quiet kicker with typographic separator (no pills) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-[#53514e]/90 mb-4 sm:mb-5">
              <span>Santa Maria · RS</span>
              <span aria-hidden="true">/</span>
              <span>Saúde Transdisciplinar</span>
              <span aria-hidden="true">/</span>
              <span>Cuidado Humanizado</span>
            </div>

            {/* Mandated H1 */}
            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-display font-bold text-[#53514e] leading-[1.15] tracking-tight mb-6"
              style={{ textWrap: 'balance' }}
            >
              Compreender - Espaço Clínico Transdisciplinar:{' '}
              <span className="font-normal text-[#3a3835]">
                Acolhimento, Evolução e Respeito à Singularidade
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#53514e]/85 leading-relaxed max-w-2xl mb-8 font-normal">
              Um ambiente terapêutico de alto padrão desenhado para promover o
              desenvolvimento humano integral. Unimos avaliações especializadas,
              psicologia, fonoaudiologia, terapia ocupacional e intervenções
              transdisciplinares em um único espaço de confiança e escuta atenta.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#53514e] hover:bg-[#383734] transition-all duration-200 shadow-sm hover:shadow-md active:scale-98 text-center whitespace-nowrap shrink-0"
              >
                <span>Conheça Nossos Serviços</span>
                <ArrowDown className="w-4 h-4 text-[#b6cada]" aria-hidden="true" />
              </a>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#53514e] bg-white/80 hover:bg-white border border-[#53514e]/20 hover:border-[#53514e]/40 transition-all duration-200 backdrop-blur-sm text-center shadow-2xs whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-[#53514e]" aria-hidden="true" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>

            {/* Quiet trust credentials */}
            <div className="pt-6 border-t border-[#b6cada]/40 grid grid-cols-3 gap-4">
              <div>
                <p className="text-xl sm:text-2xl font-display font-bold text-[#53514e] tabular-nums">
                  +12
                </p>
                <p className="text-xs text-[#53514e]/75 mt-0.5">Áreas de Cuidado</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-display font-bold text-[#53514e] tabular-nums">
                  100%
                </p>
                <p className="text-xs text-[#53514e]/75 mt-0.5">Visão Integrada</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-display font-bold text-[#53514e]">
                  Centro
                </p>
                <p className="text-xs text-[#53514e]/75 mt-0.5">Santa Maria / RS</p>
              </div>
            </div>
          </div>

          {/* Column 2: Mandatory Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative luxury frame */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-[#b6cada]/40 via-white/50 to-[#b6cada]/30 blur-xs -z-10" />

              <div className="relative overflow-hidden rounded-2xl glass-card p-2 sm:p-3 shadow-lg">
                {!imageError ? (
                  <div className="relative aspect-4/3 sm:aspect-5/4 overflow-hidden rounded-xl bg-[#b6cada]/30">
                    <img
                      src={CLINIC_INFO.heroImage}
                      alt="Fachada e identidade acolhedora da Compreender - Espaço Clínico Transdisciplinar em Santa Maria RS"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                      }`}
                    />
                    {/* Subtle aesthetic gradient overlay to ensure text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#53514e]/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                ) : (
                  /* Zero broken image fallback container */
                  <div className="aspect-4/3 sm:aspect-5/4 rounded-xl bg-gradient-to-br from-[#b6cada] to-[#d8e4ed] flex flex-col items-center justify-center p-8 text-center text-[#53514e]">
                    <Sparkles className="w-12 h-12 mb-3 text-[#53514e]/70" />
                    <span className="font-display font-bold text-lg">Compreender</span>
                    <span className="text-xs text-[#53514e]/80 mt-1 max-w-xs">
                      Espaço Clínico Transdisciplinar · Acolhimento e Evolução
                    </span>
                  </div>
                )}

                {/* Floating Glassmorphic Trust Card */}
                <div className="mt-3 p-3.5 rounded-xl bg-white/85 backdrop-blur-md border border-white/70 shadow-xs flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#b6cada]/50 flex items-center justify-center text-[#53514e] shrink-0">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#53514e]">
                        Acolhimento Singular
                      </p>
                      <p className="text-[11px] text-[#53514e]/80">
                        Cuidado de mãos dadas com cada família
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-[#53514e] bg-[#b6cada]/30 px-2.5 py-1 rounded-full whitespace-nowrap">
                    <MapPin className="w-3 h-3" />
                    <span>R. Gen. Neto, 551</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Feature Row directly below hero */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#b6cada]/40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl glass-card-subtle flex items-start gap-4 hover:bg-white/80 transition-colors">
            <div className="p-2.5 rounded-xl bg-[#b6cada]/40 text-[#53514e] shrink-0">
              <Users2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#53514e]">
                Equipe Transdisciplinar
              </h3>
              <p className="text-xs text-[#53514e]/80 mt-1 leading-relaxed">
                Diálogo constante entre especialistas para traçar metas conjuntas.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card-subtle flex items-start gap-4 hover:bg-white/80 transition-colors">
            <div className="p-2.5 rounded-xl bg-[#b6cada]/40 text-[#53514e] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#53514e]">
                Ambiente Premium e Seguro
              </h3>
              <p className="text-xs text-[#53514e]/80 mt-1 leading-relaxed">
                Salas equipadas com conforto acústico e estímulos sensoriais dosados.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card-subtle flex items-start gap-4 hover:bg-white/80 transition-colors">
            <div className="p-2.5 rounded-xl bg-[#b6cada]/40 text-[#53514e] shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#53514e]">
                Escuta Sensível e Ética
              </h3>
              <p className="text-xs text-[#53514e]/80 mt-1 leading-relaxed">
                Respeito absoluto à individualidade, tempo e potencial de cada ser humano.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card-subtle flex items-start gap-4 hover:bg-white/80 transition-colors">
            <div className="p-2.5 rounded-xl bg-[#b6cada]/40 text-[#53514e] shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#53514e]">
                Acolhimento Familiar
              </h3>
              <p className="text-xs text-[#53514e]/80 mt-1 leading-relaxed">
                Orientação contínua e suporte próximo para mães, pais e cuidadores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
