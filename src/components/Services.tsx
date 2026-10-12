import { useState, useMemo } from 'react';
import {
  Brain,
  Search,
  HeartHandshake,
  MessageSquareHeart,
  Sparkles,
  GraduationCap,
  Activity,
  ShieldCheck,
  BookOpen,
  CheckSquare,
  Users,
  Compass,
  Palette,
  SunMedium,
  Smile,
  ArrowRight,
  Info,
  CheckCircle2,
  X,
  MessageCircle,
} from 'lucide-react';
import { CLINIC_SERVICES, ServiceItem, CLINIC_INFO } from '../data/clinicData';

const ICON_MAP: Record<string, React.ElementType> = {
  SearchCheck: Search,
  Brain: Brain,
  HeartHandshake: HeartHandshake,
  MessageSquareHeart: MessageSquareHeart,
  Sparkles: Sparkles,
  GraduationCap: GraduationCap,
  Activity: Activity,
  ShieldCheck: ShieldCheck,
  BookOpen: BookOpen,
  CheckSquare: CheckSquare,
  Users: Users,
  Compass: Compass,
  Palette: Palette,
  SunMedium: SunMedium,
  Smile: Smile,
};

type CategoryFilter = 'all' | 'avaliacoes' | 'individuais' | 'desenvolvimento' | 'integrada';

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: 'Todos os Serviços' },
    { key: 'avaliacoes', label: 'Avaliações Especializadas' },
    { key: 'individuais', label: 'Atendimentos Individuais' },
    { key: 'desenvolvimento', label: 'Desenvolvimento e Aprendizagem' },
    { key: 'integrada', label: 'Saúde Integrada' },
  ];

  const filteredServices = useMemo(() => {
    return CLINIC_SERVICES.filter((service) => {
      const matchesCategory =
        selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenWhatsappForService = (service: ServiceItem) => {
    const text = encodeURIComponent(
      `Olá! Gostaria de agendar ou tirar dúvidas sobre o serviço: "${service.title}" no Compreender.`
    );
    window.open(`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section
      id="servicos"
      aria-labelledby="services-title"
      className="py-20 sm:py-28 bg-[#f5f8fa] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#53514e]/80 mb-3">
            <span>Cuidado Integral & Interdisciplinar</span>
          </div>
          {/* Mandated H2 */}
          <h2
            id="services-title"
            className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-[#53514e] tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Nossos Serviços Transdisciplinares
          </h2>
          <p className="text-base text-[#53514e]/80 max-w-2xl mx-auto">
            Integramos múltiplas especialidades da saúde e do desenvolvimento
            humano sob uma visão unificada, ética e focada na autonomia do
            paciente.
          </p>
        </div>

        {/* Mandatory asterisks note highlighted elegantly */}
        <div className="mb-10 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#b6cada]/30 border border-[#b6cada]/60 text-xs sm:text-sm text-[#53514e]">
            <Info className="w-5 h-5 text-[#53514e] shrink-0" aria-hidden="true" />
            <p>
              <strong className="font-semibold">* Nota informativa:</strong> Os serviços
              marcados com asterisco (*) são{' '}
              <span className="font-semibold underline decoration-[#53514e]/40">
                serviços exclusivamente particulares
              </span>
              . Os demais serviços aceitam cobertura de convênios conforme habilitação.
            </p>
          </div>
        </div>

        {/* Interactive Filter Tabs and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white/70 backdrop-blur-xs rounded-2xl border border-white/80 overflow-x-auto shadow-2xs">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#53514e] ${
                    isActive
                      ? 'bg-[#53514e] text-white shadow-xs'
                      : 'text-[#53514e] hover:bg-[#b6cada]/30'
                  }`}
                  aria-pressed={isActive}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-[#53514e]/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar serviço ou especialidade..."
              aria-label="Buscar serviço ou especialidade"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/80 border border-[#b6cada]/40 text-xs sm:text-sm text-[#53514e] placeholder:text-[#53514e]/50 focus:bg-white focus:outline-hidden focus:border-[#53514e] focus:ring-1 focus:ring-[#53514e] transition-colors"
            />
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service) => {
              const IconComponent = ICON_MAP[service.iconName] || Activity;
              return (
                <article
                  key={service.id}
                  className="group rounded-2xl glass-card p-6 sm:p-7 flex flex-col justify-between hover:bg-white hover:shadow-md transition-all duration-200 border border-white/80"
                >
                  <div>
                    {/* Header info without pill badges */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#b6cada]/35 flex items-center justify-center text-[#53514e] group-hover:bg-[#53514e] group-hover:text-white transition-colors duration-200 shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      {/* Quiet unboxed text indicator for private only */}
                      {service.isPrivateOnly && (
                        <span className="text-[11px] font-medium text-[#53514e]/85 tracking-wide">
                          * Particular
                        </span>
                      )}
                    </div>

                    {/* Service Category */}
                    <p className="text-[11px] font-semibold tracking-wider uppercase text-[#53514e]/70 mb-1.5">
                      {service.categoryLabel}
                    </p>

                    {/* Mandated H3 */}
                    <h3 className="text-lg sm:text-xl font-display font-bold text-[#53514e] mb-3 group-hover:text-[#2d2b29] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#53514e]/85 leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#b6cada]/30 flex items-center justify-between gap-2 mt-4">
                    <button
                      type="button"
                      onClick={() => setActiveModalService(service)}
                      className="text-xs font-semibold text-[#53514e] hover:text-[#2d2b29] flex items-center gap-1.5 py-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#53514e] rounded-xs"
                    >
                      <span>Ver detalhes</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleOpenWhatsappForService(service)}
                      aria-label={`Agendar ${service.title} via WhatsApp`}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-[#b6cada]/30 hover:bg-[#53514e] hover:text-white text-[#53514e] transition-colors whitespace-nowrap"
                    >
                      Agendar
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Empty state */
          <div className="py-16 text-center rounded-2xl glass-card max-w-lg mx-auto">
            <Search className="w-10 h-10 text-[#53514e]/40 mx-auto mb-3" />
            <p className="text-base font-display font-bold text-[#53514e]">
              Nenhum serviço encontrado
            </p>
            <p className="text-xs text-[#53514e]/70 mt-1 mb-4">
              Não encontramos serviços para "{searchQuery}". Tente outro termo ou limpe o filtro.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#53514e] rounded-xl hover:bg-[#3d3b38]"
            >
              Ver todos os serviços
            </button>
          </div>
        )}
      </div>

      {/* Service Details Modal */}
      {activeModalService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-service-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveModalService(null)}
        >
          <div
            className="w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-[#b6cada]/50 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#53514e]/70 hover:text-[#53514e] hover:bg-[#b6cada]/20 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#53514e]"
              aria-label="Fechar modal de detalhes"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#53514e]/70">
                {activeModalService.categoryLabel}
              </span>
              <h3
                id="modal-service-title"
                className="text-2xl font-display font-bold text-[#53514e] mt-1"
              >
                {activeModalService.title}
              </h3>
            </div>

            <div className="space-y-4 my-6 text-sm text-[#53514e]/90 leading-relaxed">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#53514e] mb-1">
                  Sobre a Abordagem Clínica
                </h4>
                <p>{activeModalService.fullDescription}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#53514e] mb-1">
                  Público-Alvo e Indicações
                </h4>
                <p>{activeModalService.targetAudience}</p>
              </div>

              {activeModalService.isPrivateOnly && (
                <div className="p-3.5 rounded-xl bg-[#b6cada]/25 border border-[#b6cada]/50 text-xs text-[#53514e]">
                  <p>
                    <strong>Atenção:</strong> Este serviço é exclusivamente particular. Não
                    possui cobertura via convênios de saúde.
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  handleOpenWhatsappForService(activeModalService);
                  setActiveModalService(null);
                }}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-[#53514e] hover:bg-[#3d3b38] transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#b6cada]" />
                <span>Agendar Consulta no WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="w-full sm:w-auto py-3 px-5 rounded-xl text-xs font-medium text-[#53514e] hover:bg-slate-100 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
