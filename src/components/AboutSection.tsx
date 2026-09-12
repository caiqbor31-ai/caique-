import React from 'react';
import { Sparkles, Scissors, Users, Shield, Calendar, Link2 } from 'lucide-react';
import { DIRECT_IMAGES } from '../data';

interface AboutSectionProps {
  onScheduleFitting: () => void;
  onInspectImage: (url: string, title: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onScheduleFitting,
  onInspectImage,
}) => {
  const atelierImg = DIRECT_IMAGES.find((img) => img.id === 'atelier-interior')?.url;

  return (
    <section className="w-full px-6 lg:px-16 py-20 lg:py-28 bg-[#faf9f6] border-b border-black/[0.12]" id="about-manifesto">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Cabeçalho */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f2f0eb] border border-black/[0.12]">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#5f5e5a] font-bold">
              [05 // LAB MANIFESTO] &bull; SUNDAYS PROJECT
            </span>
          </div>

          <h2 className="font-display-street text-3xl sm:text-5xl lg:text-6xl text-black uppercase font-semibold leading-[1.1] tracking-tight">
            ALFAIATARIA DE RUA COM TRAÇOS FINOS &amp; STREET CASTING
          </h2>

          <p className="font-sans-editorial text-base sm:text-lg text-[#444748] max-w-2xl mx-auto leading-relaxed">
            A sundays project nasceu na fricção entre as linhas duras da arquitetura urbana contemporânea e o rigor milimétrico da alfaiataria técnica. Peças numeradas em drops limitados vestindo personalidades magnéticas do street casting global.
          </p>
        </div>

        {/* Imagem do Atelier / Lab com Opção de Link Direto */}
        {atelierImg && (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#e6e4df] border border-black/[0.12] group">
            <div className="absolute top-2 left-2 text-[8px] font-mono-tech text-black/30 z-10 select-none">+</div>
            <div className="absolute top-2 right-2 text-[8px] font-mono-tech text-black/30 z-10 select-none">+</div>
            <img
              src={atelierImg}
              alt="Design Lab sundays project"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={() => onInspectImage(atelierImg, 'Design Lab sundays project')}
              className="absolute top-3 right-3 bg-black/85 hover:bg-black text-white text-[9px] uppercase tracking-wider px-2.5 py-1 flex items-center gap-1 font-mono-tech cursor-pointer z-20"
            >
              <Link2 className="w-3 h-3 text-white/70" />
              <span>[RAW DIRECT LINK]</span>
            </button>
          </div>
        )}

        {/* 3 Pilares Fundamentais com Traços Finos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 font-mono-tech">
          <div className="p-6 bg-[#f2f0eb] border border-black/[0.12] space-y-3 relative">
            <div className="absolute top-2 right-2 text-[8px] text-black/30 select-none">+</div>
            <Scissors className="w-5 h-5 text-black" />
            <h3 className="font-display-street text-lg uppercase text-black font-semibold">
              [TRAÇOS FINOS &amp; RECORTE]
            </h3>
            <p className="text-xs text-[#5f5e5a] leading-relaxed font-sans-editorial">
              Cada peça possui costuras com traços milimétricos, modelagem geométrica desconstruída e fusão de lã fria super 130s com ripstop técnico e popeline japonesa.
            </p>
          </div>

          <div className="p-6 bg-[#f2f0eb] border border-black/[0.12] space-y-3 relative">
            <div className="absolute top-2 right-2 text-[8px] text-black/30 select-none">+</div>
            <Users className="w-5 h-5 text-black" />
            <h3 className="font-display-street text-lg uppercase text-black font-semibold">
              [STREET CASTING GLOBAL]
            </h3>
            <p className="text-xs text-[#5f5e5a] leading-relaxed font-sans-editorial">
              Agenciamento e representação de 42 talentos selecionados nas ruas de São Paulo, Paris e Berlim, com perfis autênticos e presença de passarela de alta voltagem.
            </p>
          </div>

          <div className="p-6 bg-[#f2f0eb] border border-black/[0.12] space-y-3 relative">
            <div className="absolute top-2 right-2 text-[8px] text-black/30 select-none">+</div>
            <Shield className="w-5 h-5 text-black" />
            <h3 className="font-display-street text-lg uppercase text-black font-semibold">
              [DROPS NUMERADOS]
            </h3>
            <p className="text-xs text-[#5f5e5a] leading-relaxed font-sans-editorial">
              Lotes fechados e numerados. Não produzimos em massa. Cada drop encerra seu ciclo de confecção garantindo raridade e valor perene no arquivo do colecionador.
            </p>
          </div>
        </div>

        {/* Nossos Labs & Salões de Prova com Linhas Finas */}
        <div className="border-t border-black/[0.12] pt-12 space-y-6">
          <div className="text-center space-y-1">
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#5f5e5a] font-bold">
              [LOCATIONS // OPERATIONAL BASES]
            </span>
            <h3 className="font-display-street text-2xl uppercase text-black font-semibold">
              SALÕES DE FITTING &amp; LABS URBANOS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center font-mono-tech text-xs">
            <div className="p-4 bg-white border border-black/[0.12]">
              <span className="font-display-street text-sm uppercase text-black font-semibold block mb-1">
                São Paulo &bull; Jardins
              </span>
              <p className="text-[#5f5e5a] font-sans-editorial text-[11px]">Rua Oscar Freire, 920</p>
              <span className="text-[9.5px] text-black font-bold block mt-1">[DESIGN LAB &amp; FITTING]</span>
            </div>

            <div className="p-4 bg-white border border-black/[0.12]">
              <span className="font-display-street text-sm uppercase text-black font-semibold block mb-1">
                Paris &bull; Vendôme
              </span>
              <p className="text-[#5f5e5a] font-sans-editorial text-[11px]">12 Place Vendôme, 75001</p>
              <span className="text-[9.5px] text-black font-bold block mt-1">[SHOWROOM &amp; RUNWAY]</span>
            </div>

            <div className="p-4 bg-white border border-black/[0.12]">
              <span className="font-display-street text-sm uppercase text-black font-semibold block mb-1">
                Milão &bull; Montenapoleone
              </span>
              <p className="text-[#5f5e5a] font-sans-editorial text-[11px]">Via Montenapoleone, 8</p>
              <span className="text-[9.5px] text-black font-bold block mt-1">[TEXTILE RESEARCH]</span>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={onScheduleFitting}
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 text-[10.5px] uppercase tracking-[0.18em] font-mono-tech font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>[AGENDAR FITTING NO DESIGN LAB]</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
