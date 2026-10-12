import { Star, CheckCircle } from 'lucide-react';
import { CLINIC_TESTIMONIALS } from '../data/clinicData';

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-title"
      className="py-20 sm:py-28 bg-[#f5f8fa] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#53514e]/80 mb-3">
            <span>Confiança & Experiências Reais</span>
          </div>
          {/* Mandated H2 */}
          <h2
            id="testimonials-title"
            className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-[#53514e] tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-base text-[#53514e]/85 max-w-2xl mx-auto">
            A verdadeira medida da nossa dedicação está no impacto gerado no dia
            a dia das famílias e pessoas atendidas.
          </p>
        </div>

        {/* Testimonials Bento / Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLINIC_TESTIMONIALS.map((depoimento) => (
            <article
              key={depoimento.id}
              className="p-8 rounded-3xl glass-card flex flex-col justify-between hover:bg-white hover:shadow-md transition-all duration-300 border border-white/90"
            >
              <div>
                {/* Top: 5 Stars + Google Maps Review Indicator */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-1" aria-label="Avaliação 5 de 5 estrelas">
                    {[...Array(depoimento.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-[#53514e]/60">
                    {depoimento.date}
                  </span>
                </div>

                {/* Text */}
                <p className="text-sm sm:text-base text-[#53514e] leading-relaxed mb-6 font-normal">
                  "{depoimento.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#b6cada]/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#b6cada] to-[#d4e2ed] flex items-center justify-center font-display font-bold text-[#53514e] text-sm">
                    {depoimento.author.charAt(0)}
                  </div>
                  <div>
                    {/* Mandated H3 for card semantic hierarchy */}
                    <h3 className="text-sm font-semibold text-[#53514e]">
                      {depoimento.author}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-medium text-[#53514e]/70">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verificado</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
