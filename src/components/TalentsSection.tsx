import React, { useState } from 'react';
import { Download, Eye, Link2 } from 'lucide-react';
import { TALENTS_DATA } from '../data';
import { Talent } from '../types';

interface TalentsSectionProps {
  onSelectTalent: (talent: Talent) => void;
  onInspectImage: (url: string, title: string) => void;
  onRequestOption: (talent: Talent) => void;
}

export const TalentsSection: React.FC<TalentsSectionProps> = ({
  onSelectTalent,
  onInspectImage,
  onRequestOption,
}) => {
  const [boardFilter, setBoardFilter] = useState<string>('all');
  const [unit, setUnit] = useState<'cm' | 'in'>('cm');

  const boards = [
    { id: 'all', label: 'TODOS OS PERFIS (42)' },
    { id: 'Top Models', label: 'TOP MODELS // RUNWAY' },
    { id: 'Elenco Principal', label: 'ELENCO PRINCIPAL' },
    { id: 'Contratação Direta', label: 'CONTRATAÇÃO DIRETA' },
    { id: 'Novos Rostos', label: 'NEW FACES // STREET' },
  ];

  const filteredTalents = boardFilter === 'all'
    ? TALENTS_DATA
    : TALENTS_DATA.filter((t) => t.board === boardFilter);

  const formatHeight = (heightCm: number) => {
    if (unit === 'cm') return `${heightCm} CM`;
    const inches = Math.round(heightCm / 2.54);
    const feet = Math.floor(inches / 12);
    const remInches = inches % 12;
    return `${feet}'${remInches}"`;
  };

  return (
    <section className="w-full px-6 lg:px-16 py-20 lg:py-28 bg-[#faf9f6] border-b border-black/[0.12]" id="talent-section">
      {/* Cabeçalho da Seção com Linhas Finas */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-black/[0.12]">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono-tech text-[10px] uppercase tracking-[0.25em]">
            <span className="w-2 h-[1px] bg-black"></span>
            <span className="text-[#5f5e5a] font-bold">[03 // STREET CASTING ROSTER]</span>
            <span className="text-black/30">/</span>
            <span className="text-black font-semibold">SUNDAYS PROJECT</span>
          </div>
          <h2 className="font-display-street text-3xl lg:text-4xl text-black font-medium uppercase tracking-tight">
            ROSTER DE CASTING &amp; COMP CARDS
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-4 font-mono-tech">
          {/* Alternância entre Métrico e Imperial com Traço Fino */}
          <div className="flex items-center border border-black/20 bg-white/80 p-0.5 text-[10px] tracking-wider uppercase">
            <button
              onClick={() => setUnit('cm')}
              className={`px-2.5 py-1 cursor-pointer transition-colors ${
                unit === 'cm' ? 'bg-black text-white font-bold' : 'text-[#5f5e5a]'
              }`}
            >
              CM
            </button>
            <button
              onClick={() => setUnit('in')}
              className={`px-2.5 py-1 cursor-pointer transition-colors ${
                unit === 'in' ? 'bg-black text-white font-bold' : 'text-[#5f5e5a]'
              }`}
            >
              IN
            </button>
          </div>

          <span className="text-[10px] uppercase tracking-[0.18em] text-[#5f5e5a]">
            42 ROSTOS ATIVOS
          </span>

          <button
            onClick={() => {
              alert('Download da ficha técnica e comp cards completos da sundays project (PDF HQ) iniciado.');
            }}
            className="text-[10px] uppercase tracking-[0.16em] text-black border border-black/20 hover:border-black px-3 py-1.5 transition-colors cursor-pointer flex items-center gap-1.5 font-bold"
          >
            <Download className="w-3.5 h-3.5" />
            <span>DOWNLOAD COMP CARDS (PDF) &rarr;</span>
          </button>
        </div>
      </div>

      {/* Abas de Filtro por Quadro com Traço Fino */}
      <div className="flex items-center gap-2 pt-6 pb-2 overflow-x-auto no-scrollbar font-mono-tech">
        {boards.map((b) => (
          <button
            key={b.id}
            onClick={() => setBoardFilter(b.id)}
            className={`px-3.5 py-1.5 text-[10px] uppercase tracking-[0.15em] cursor-pointer transition-all shrink-0 border ${
              boardFilter === b.id
                ? 'bg-black text-white border-black font-bold'
                : 'bg-white/80 text-[#5f5e5a] border-black/15 hover:text-black hover:border-black'
            }`}
          >
            {b.label}
          </button>
        ))}
      </div>

      {/* Grade de Modelos com Estilo Comp Card & Linhas Finas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
        {filteredTalents.map((talent) => (
          <div
            key={talent.id}
            className="flex flex-col space-y-3 group bg-[#f5f4ef] p-3.5 border border-black/[0.12] hover:border-black transition-all relative"
          >
            {/* Cruz de canto técnica */}
            <div className="absolute top-1.5 left-1.5 text-[8px] font-mono-tech text-black/30 select-none">+</div>
            <div className="absolute top-1.5 right-1.5 text-[8px] font-mono-tech text-black/30 select-none">+</div>

            {/* Foto Comp Card Polaroid de Vanguarda */}
            <div className="relative aspect-[4/5] overflow-hidden bg-[#e6e4df] border border-black/[0.1]">
              <img
                src={talent.imageUrl}
                alt={talent.name}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 cursor-pointer"
                onClick={() => onSelectTalent(talent)}
                referrerPolicy="no-referrer"
              />

              <div className="absolute top-2 left-2 bg-black text-white px-2 py-0.5 font-mono-tech text-[8.5px] tracking-widest uppercase font-bold">
                {talent.code}
              </div>

              {/* Botão de ver ficha completa */}
              <div
                onClick={() => onSelectTalent(talent)}
                className="absolute bottom-0 inset-x-0 bg-black/90 p-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between cursor-pointer text-white font-mono-tech"
              >
                <span className="text-[9.5px] uppercase tracking-[0.16em] font-bold">
                  [ABRIR COMP CARD COMPLETO]
                </span>
                <Eye className="w-3.5 h-3.5" />
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onInspectImage(talent.imageUrl, `${talent.name} (Comp Card sundays project)`);
                }}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 hover:bg-black text-white text-[8.5px] uppercase tracking-wider px-2 py-0.5 flex items-center gap-1 font-mono-tech cursor-pointer"
                title="Copiar link direto da imagem"
              >
                <Link2 className="w-3 h-3 text-white/70" />
                <span>[RAW]</span>
              </button>
            </div>

            {/* Informações do Modelo com Tipografia de Rua */}
            <div className="space-y-1 pt-1 font-mono-tech">
              <div className="flex items-baseline justify-between gap-1">
                <h3
                  onClick={() => onSelectTalent(talent)}
                  className="font-display-street text-lg uppercase text-black font-semibold hover:underline cursor-pointer tracking-tight"
                >
                  {talent.name}
                </h3>
                <span className="text-[9px] uppercase tracking-[0.14em] text-[#5f5e5a] font-bold">
                  {talent.board}
                </span>
              </div>

              <p className="text-[9.5px] text-[#2c2e2e] tracking-wider border-b border-black/[0.08] pb-1.5">
                HT: {formatHeight(talent.height)}
                {talent.chest ? ` // CHEST ${talent.chest}` : ` // BUST ${talent.bust}`}
                {` // W ${talent.waist}`}
                {talent.hips ? ` // H ${talent.hips}` : ` // SH ${talent.shoe}`}
              </p>

              <p className="font-sans-editorial text-xs text-[#5f5e5a] line-clamp-1 pt-0.5 leading-relaxed">
                {talent.campaigns}
              </p>
            </div>

            {/* Ação de Casting Direto */}
            <div className="pt-2 border-t border-black/[0.08] flex items-center justify-between font-mono-tech text-[9.5px]">
              <button
                onClick={() => onSelectTalent(talent)}
                className="uppercase tracking-[0.14em] text-black hover:underline cursor-pointer font-bold"
              >
                [BOOKING / RESERVA] &rarr;
              </button>
              <span className="text-[#5f5e5a] uppercase">
                {talent.bases.join('/').toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
