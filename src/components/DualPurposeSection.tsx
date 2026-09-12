import React from 'react';
import { Calendar, Users, Link2 } from 'lucide-react';

interface DualPurposeSectionProps {
  onScheduleFitting: () => void;
  onExploreTalents: () => void;
  onInspectImage: (url: string, title: string) => void;
}

export const DualPurposeSection: React.FC<DualPurposeSectionProps> = ({
  onScheduleFitting,
  onExploreTalents,
  onInspectImage,
}) => {
  const atelierImageUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCMtY__oAQjsO5hxx8Sf3l4KWUjo5z07zz7To_yFNCPH7q25Gw3QcTZG_l8-Ks7jdRq8EcAlBfNWmgvRetQ8KT499UWZCB2OqgfKQf5lz84bMNEf3DBPzEMzCOrr56FbqlKyC3f28QCHyeWovKKbf054vIo_fqxUYgNf6wa48c0tuoZLdwFr_KQS1ARXIqZyBXH1Ici7H6-rB4Zi76__xabNRa5uk3sy34AxNetXBhbQ41OgujJvRyw';

  const talentBackstageUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAniRhjh9vKyRCecrS5_GceZpgdSy10_sBWScQC8ZkxIEwOjkoqw_MPburyVzxPhAiewio7SFiYYxxtRab44omxhGmq_PP9lF_YXDXoXEU5S97yxdRB-m3XmA-SG2BKlSpVYhpwQRA2Wqo7yh1US0Qe7RO1Ee0wZdrlVxcDqWj5Ah5hZxzA5l9oI_DclGadsz6sAGr3t0Ivd8F78p_qtGi4GwKz7vigLy6fgfLbfPpFlHhyf-JWeTaD';

  return (
    <section className="w-full px-6 lg:px-16 py-20 lg:py-28 bg-[#faf9f6] border-b border-black/[0.12]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Barra Introdutória com Traços Finos e Código da Marca */}
        <div className="lg:col-span-12 flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-black/[0.12]">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-[1px] bg-black"></span>
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#5f5e5a] font-bold">
                [01 // SYSTEM ARCHITECTURE] &bull; SUNDAYS PROJECT
              </p>
            </div>
            <h2 className="font-display-street text-3xl lg:text-4xl text-[#0f0f10] font-medium uppercase tracking-tight">
              DUAS DISCIPLINAS. MODA DE RUA &amp; TRAÇOS FINOS.
            </h2>
          </div>
          <p className="font-sans-editorial text-sm text-[#5f5e5a] max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
            A sundays project opera na fronteira do streetwear contemporâneo: silhuetas oversized, peso têxtil superior e detalhes técnicos em traços finos, combinados com um casting global e autêntico.
          </p>
        </div>

        {/* Card Esquerda: Design Lab & Drops */}
        <div className="lg:col-span-6 bg-[#f2f1ed] p-8 lg:p-12 flex flex-col justify-between group hover:bg-[#eae8e3] transition-all duration-500 relative border border-black/[0.12]">
          <div className="absolute top-2 left-2 text-[8px] font-mono-tech text-black/30">+</div>
          <div className="absolute top-2 right-2 text-[8px] font-mono-tech text-black/30">+</div>

          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-between border-b border-black/[0.08] pb-3">
              <span className="font-mono-tech text-[9.5px] uppercase tracking-[0.2em] text-[#0f0f10] font-bold">
                DIVISÃO 01 // STREETWEAR DESIGN LAB
              </span>
              <span className="font-mono-tech text-[9.5px] text-[#5f5e5a] tracking-widest uppercase">
                SP &bull; PARIS // DROP_01
              </span>
            </div>

            <h3 className="font-display-street text-2xl lg:text-3xl text-black leading-tight font-medium uppercase">
              ALFAIATARIA DE RUA &amp; DROPS LIMITADOS
            </h3>

            <p className="font-sans-editorial text-sm text-[#444748] max-w-lg leading-relaxed">
              Casacos arquitetônicos, cortes boxy com caimento impecável e detalhes em traços gráficos finos gravados a laser. Produções estritamente limitadas por drop, com fichas técnicas e tecidos de altíssima densidade.
            </p>

            {/* Métricas Técnicas da Confecção de Rua */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-black/[0.12]">
              <div className="space-y-0.5">
                <span className="font-mono-tech text-xl font-bold text-black block">520 GSM</span>
                <span className="font-mono-tech text-[9px] tracking-[0.16em] uppercase text-[#5f5e5a]">
                  Gramatura Média
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="font-mono-tech text-xl font-bold text-black block">1/40</span>
                <span className="font-mono-tech text-[9px] tracking-[0.16em] uppercase text-[#5f5e5a]">
                  Tiragem Limitada
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="font-mono-tech text-xl font-bold text-black block">0.25mm</span>
                <span className="font-mono-tech text-[9px] tracking-[0.16em] uppercase text-[#5f5e5a]">
                  Traços Finos Linha
                </span>
              </div>
            </div>
          </div>

          <div className="pt-8 relative z-10 space-y-4">
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#e4e2dd] border border-black/[0.12] relative group/img">
              <img
                src={atelierImageUrl}
                alt="Design Lab da marca sundays project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => onInspectImage(atelierImageUrl, "sundays project — Design Lab & Provas")}
                className="absolute top-3 right-3 opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/80 hover:bg-black text-white text-[9px] uppercase tracking-wider px-2.5 py-1 flex items-center gap-1 font-mono-tech cursor-pointer"
                title="Copiar link direto da imagem"
              >
                <Link2 className="w-3 h-3 text-white/70" />
                <span>[IMG_LAB]</span>
              </button>
            </div>

            <div className="flex items-center justify-between pt-2 font-mono-tech">
              <button
                onClick={onScheduleFitting}
                className="text-[10px] uppercase tracking-[0.18em] bg-black text-white px-5 py-3 hover:bg-neutral-800 transition-colors inline-flex items-center gap-2 cursor-pointer font-bold"
              >
                <span>AGENDAR FITTING / SALÃO PRIVADO</span>
                <Calendar className="w-3.5 h-3.5" />
              </button>
              <span className="text-[9.5px] uppercase text-[#5f5e5a] tracking-[0.14em]">
                SÃO PAULO / PARIS
              </span>
            </div>
          </div>
        </div>

        {/* Card Direita: Street Casting & Talents */}
        <div className="lg:col-span-6 bg-[#f2f1ed] p-8 lg:p-12 flex flex-col justify-between group hover:bg-[#eae8e3] transition-all duration-500 relative border border-black/[0.12]">
          <div className="absolute top-2 left-2 text-[8px] font-mono-tech text-black/30">+</div>
          <div className="absolute top-2 right-2 text-[8px] font-mono-tech text-black/30">+</div>

          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-between border-b border-black/[0.08] pb-3">
              <span className="font-mono-tech text-[9.5px] uppercase tracking-[0.2em] text-[#0f0f10] font-bold">
                DIVISÃO 02 // STREET CASTING &amp; TALENTS
              </span>
              <span className="font-mono-tech text-[9.5px] text-[#5f5e5a] tracking-widest uppercase">
                GLOBAL BOOKING
              </span>
            </div>

            <h3 className="font-display-street text-2xl lg:text-3xl text-black leading-tight font-medium uppercase">
              ELENCO GLOBAL &amp; STREET CASTING
            </h3>

            <p className="font-sans-editorial text-sm text-[#444748] max-w-lg leading-relaxed">
              Curadoria de rostos que definem a nova era da moda de rua e passarela de vanguarda. Scouting urbano em centros globais, gerando contratos para campanhas internacionais, lookbooks e desfiles.
            </p>

            {/* Métricas do Casting */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-black/[0.12]">
              <div className="space-y-0.5">
                <span className="font-mono-tech text-xl font-bold text-black block">42</span>
                <span className="font-mono-tech text-[9px] tracking-[0.16em] uppercase text-[#5f5e5a]">
                  Modelos Exclusivos
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="font-mono-tech text-xl font-bold text-black block">100%</span>
                <span className="font-mono-tech text-[9px] tracking-[0.16em] uppercase text-[#5f5e5a]">
                  Street &amp; Runway
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="font-mono-tech text-xl font-bold text-black block">&lt; 04H</span>
                <span className="font-mono-tech text-[9px] tracking-[0.16em] uppercase text-[#5f5e5a]">
                  Booking Response
                </span>
              </div>
            </div>
          </div>

          <div className="pt-8 relative z-10 space-y-4">
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#e4e2dd] border border-black/[0.12] relative group/img">
              <img
                src={talentBackstageUrl}
                alt="Bastidores de casting e modelos sundays project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => onInspectImage(talentBackstageUrl, "sundays project — Bastidores & Street Casting")}
                className="absolute top-3 right-3 opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/80 hover:bg-black text-white text-[9px] uppercase tracking-wider px-2.5 py-1 flex items-center gap-1 font-mono-tech cursor-pointer"
                title="Copiar link direto da imagem"
              >
                <Link2 className="w-3 h-3 text-white/70" />
                <span>[IMG_CAST]</span>
              </button>
            </div>

            <div className="flex items-center justify-between pt-2 font-mono-tech">
              <button
                onClick={onExploreTalents}
                className="text-[10px] uppercase tracking-[0.18em] bg-black text-white px-5 py-3 hover:bg-neutral-800 transition-colors inline-flex items-center gap-2 cursor-pointer font-bold"
              >
                <span>VER COMP CARDS &amp; ROSTER</span>
                <Users className="w-3.5 h-3.5" />
              </button>
              <span className="text-[9.5px] uppercase text-[#5f5e5a] tracking-[0.14em]">
                FICHAS DIGITAIS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
