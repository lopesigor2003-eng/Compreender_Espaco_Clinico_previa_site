import { HeartHandshake, Ear, Compass } from 'lucide-react';

export function About() {
  const pillars = [
    {
      icon: HeartHandshake,
      title: 'Vínculos Verdadeiros',
      description: 'Construímos relações terapêuticas sólidas e afetuosas, baseadas na confiança e no respeito contínuo.',
    },
    {
      icon: Ear,
      title: 'Escuta Sensível',
      description: 'Compreendemos além das palavras, ouvindo a história, as angústias e as potencialidades de cada indivíduo.',
    },
    {
      icon: Compass,
      title: 'Caminho Construído Juntos',
      description: 'Uma jornada trilhada de mãos dadas com as famílias, os profissionais e a rede escolar e comunitária.',
    },
  ];

  return (
    <section
      id="sobre-nos"
      aria-labelledby="about-title"
      className="py-20 sm:py-28 bg-gradient-to-b from-[#f5f8fa] via-[#e6eff5] to-[#f5f8fa] relative overflow-hidden"
    >
      {/* Decorative ambient backdrop */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#b6cada]/30 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#b6cada]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#53514e]/80 mb-3">
            <span>Identidade & Filosofia Clínica</span>
          </div>
          {/* Mandated H2 */}
          <h2
            id="about-title"
            className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-[#53514e] tracking-tight mb-6"
            style={{ textWrap: 'balance' }}
          >
            Nossa Essência e Propósito
          </h2>
          <div className="w-16 h-1 bg-[#53514e]/30 mx-auto rounded-full" />
        </div>

        {/* Featured Manifesto Card with Glassmorphism */}
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 sm:p-12 shadow-sm border border-white/90 relative mb-16">
          <div className="space-y-6 text-[#53514e] text-base sm:text-lg leading-relaxed font-normal">
            <p className="text-lg sm:text-xl font-medium text-[#383734] leading-relaxed">
              Mais do que uma mudança visual, essa nova identidade representa um
              novo ciclo, cheio de significado, cuidado e propósito. Ela nasce da
              nossa essência e do compromisso em continuar oferecendo um espaço
              de acolhimento, evolução e respeito à singularidade de cada pessoa
              que passa por aqui.
            </p>
            <p>
              No símbolo, nos traços e nas cores, está refletido tudo aquilo que
              acreditamos: vínculos verdadeiros, escuta sensível e um caminho
              construído de mãos dadas com as famílias, os profissionais e a
              comunidade.
            </p>
            <p className="font-semibold text-[#2f2e2c]">
              Essa transformação é para você, que confia no nosso trabalho e
              caminha conosco. Seja bem-vindo a essa nova fase do Compreender!
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#b6cada]/40 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#b6cada]/60 flex items-center justify-center font-display font-bold text-[#53514e]">
                C
              </div>
              <div>
                <p className="text-sm font-semibold text-[#53514e]">
                  Compreender Espaço Clínico
                </p>
                <p className="text-xs text-[#53514e]/75">
                  Santa Maria · Rio Grande do Sul
                </p>
              </div>
            </div>

            <span className="text-xs italic text-[#53514e]/80">
              Vínculos verdadeiros · Escuta sensível · Evolução singular
            </span>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-8 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/80 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#b6cada]/40 flex items-center justify-center text-[#53514e]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-medium text-[#53514e]/50 tabular-nums">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold text-[#53514e] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#53514e]/85 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
