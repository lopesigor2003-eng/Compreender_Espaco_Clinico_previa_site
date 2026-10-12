import { Check, Info } from 'lucide-react';
import { CLINIC_INSURANCES, CLINIC_INFO } from '../data/clinicData';

export function Insurances() {
  return (
    <section
      id="convenios"
      aria-labelledby="insurances-title"
      className="py-20 sm:py-24 bg-gradient-to-b from-[#f5f8fa] via-[#e8f1f7] to-[#f5f8fa] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#53514e]/80 mb-3">
            <span>Parcerias & Coberturas</span>
          </div>
          {/* Mandated H2 */}
          <h2
            id="insurances-title"
            className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-[#53514e] tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Convênios Aceitos
          </h2>
          <p className="text-base text-[#53514e]/85 max-w-2xl mx-auto">
            Facilitamos o acesso à saúde transdisciplinar através de convênios de
            reconhecida credibilidade.
          </p>
        </div>

        {/* 4 Insurance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CLINIC_INSURANCES.map((convenio) => (
            <div
              key={convenio.name}
              className="p-7 rounded-2xl glass-card flex flex-col justify-between hover:bg-white hover:shadow-md transition-all duration-300 border border-white/80 group"
            >
              <div>
                {/* Mandated H3 */}
                <h3 className="text-2xl font-display font-bold text-[#53514e] mb-1">
                  {convenio.name}
                </h3>
                <p className="text-xs font-semibold text-[#53514e]/75 mb-3">
                  {convenio.tagline}
                </p>
                <p className="text-xs text-[#53514e]/80 leading-relaxed mb-4">
                  {convenio.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#b6cada]/30 flex items-center justify-between text-xs font-semibold text-[#53514e]">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>{convenio.status}</span>
                </div>
                <span className="text-[11px] text-[#53514e]/70">Consulte especialidades</span>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Guidance Card */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-white/70 border border-white/80 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#53514e] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#53514e]/90 leading-relaxed">
              <p className="font-semibold text-[#53514e]">
                Dúvidas sobre guias ou autorizações do seu plano?
              </p>
              <p className="text-xs text-[#53514e]/80 mt-0.5">
                Nossa equipe de recepção auxilia na verificação prévia de cobertura e encaminhamentos necessários.
              </p>
            </div>
          </div>
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#53514e] hover:bg-[#3d3b38] transition-colors whitespace-nowrap shrink-0 shadow-2xs"
          >
            Consultar Cobertura
          </a>
        </div>
      </div>
    </section>
  );
}
