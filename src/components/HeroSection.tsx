import React, { useRef, useState } from 'react';
import { ArrowUpRight, Link2, Upload, RotateCcw } from 'lucide-react';
import { Talent } from '../types';
import heroBgImage from '../assets/images/hero_sundays_snow_1789166689714.jpg';

interface HeroSectionProps {
  onExploreLooks: () => void;
  onExploreTalents: () => void;
  onOpenTalent: (talent: Talent) => void;
  leadTalent: Talent;
  onInspectImage: (url: string, title: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreLooks,
  onExploreTalents,
  onOpenTalent,
  leadTalent,
  onInspectImage,
}) => {
  const [heroBg, setHeroBg] = useState<string>(() => {
    return localStorage.getItem('sundays_hero_bg') || heroBgImage;
  });
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleCustomImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setHeroBg(result);
          localStorage.setItem('sundays_hero_bg', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = () => {
    setHeroBg(heroBgImage);
    localStorage.removeItem('sundays_hero_bg');
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0b] text-white">
      {/* Imagem de Fundo com a foto na neve da sundays project */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-[center_28%] sm:bg-[center_32%] transition-transform duration-1000 ease-out"
        style={{ backgroundImage: `url('${heroBg}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/40 to-black/25"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b]/85 via-[#0a0a0b]/35 to-transparent"></div>
      </div>

      {/* Marcações Técnicas de Traços Finos nas Quatro Extremidades */}
      <div className="absolute top-24 left-6 lg:left-16 text-white/30 font-mono-tech text-[10px] select-none z-20">
        + 48.8566° N, 2.3522° E // SNOW EXPEDITION LAB
      </div>

      {/* Ações Técnicas no Topo do Hero: Trocar Foto & Link Direto */}
      <div className="absolute top-24 right-6 lg:right-16 z-20 flex items-center gap-2">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleCustomImageUpload}
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-2.5 py-1 bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/15 text-white/80 hover:text-white text-[9px] uppercase tracking-[0.18em] font-mono-tech flex items-center gap-1.5 transition-all cursor-pointer"
          title="Fazer upload de outra foto da sua galeria para o fundo"
        >
          <Upload className="w-3 h-3 text-white/70" />
          <span>[CARREGAR FOTO]</span>
        </button>

        {heroBg !== heroBgImage && (
          <button
            onClick={handleResetImage}
            className="px-2 py-1 bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/15 text-white/80 hover:text-white text-[9px] uppercase tracking-[0.18em] font-mono-tech flex items-center gap-1 transition-all cursor-pointer"
            title="Restaurar foto padrão de montanha na neve"
          >
            <RotateCcw className="w-3 h-3" />
            <span>[RESET]</span>
          </button>
        )}

        <button
          onClick={() => onInspectImage(heroBg, "Drop 01 — A Escuridão Radiante (Snow Expedition)")}
          className="px-2.5 py-1 bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/15 text-white/80 hover:text-white text-[9px] uppercase tracking-[0.18em] font-mono-tech flex items-center gap-1.5 transition-all cursor-pointer"
          title="Copiar link direto da foto de fundo"
        >
          <Link2 className="w-3 h-3 text-white/60" />
          <span>[IMG_01.RAW]</span>
        </button>
      </div>

      {/* Camada de Conteúdo do Hero com Grid de Traços Finos */}
      <div className="relative z-10 w-full px-6 lg:px-16 pt-32 lg:pt-40 pb-14 lg:pb-20 flex flex-col justify-between min-h-[780px] lg:min-h-[840px]">
        {/* Faixa Superior de Informações em Linha Fina */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-[#c9c6c5] border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-white"></span>
            <span className="font-mono-tech text-[10px] tracking-[0.25em] uppercase font-medium text-white">
              DROP 01 // FW25 &bull; A ESCURIDÃO RADIANTE
            </span>
          </div>
          <div className="flex items-center gap-3 font-mono-tech text-[10px] tracking-[0.2em] uppercase text-white/60">
            <span>LIMITED RUN</span>
            <span className="text-white/20">/</span>
            <span>STREET CASTING ROSTER</span>
            <span className="text-white/20">/</span>
            <span className="text-white font-semibold">PARIS &bull; MILAN &bull; SP</span>
          </div>
        </div>

        {/* Hierarquia Editorial de Moda de Rua com Traços Finos */}
        <div className="mt-auto pt-12 flex flex-col lg:flex-row items-end justify-between gap-8 lg:gap-12">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/[0.06] backdrop-blur-md border border-white/15 text-white">
              <span className="w-1.5 h-1.5 bg-white" />
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.24em] font-medium">
                LUXURY STREETWEAR &bull; GLOBAL TALENT COLLECTIVE
              </span>
            </div>

            <h1 className="font-display-street text-2xl sm:text-3xl lg:text-4xl tracking-normal text-white leading-tight font-semibold uppercase">
              A ESCURIDÃO <span className="font-light text-white/70">RADIANTE.</span>
            </h1>

            <p className="font-sans-editorial text-sm sm:text-base text-[#d1d0cb] max-w-lg font-light leading-relaxed">
              O ponto de convergência entre a precisão da alfaiataria técnica, proporções oversized da cultura de rua e uma das mesas de street casting mais autênticas do circuito global.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 font-mono-tech">
              <button
                onClick={onExploreLooks}
                className="text-[10.5px] uppercase tracking-[0.2em] bg-white text-black px-7 py-3.5 hover:bg-[#e5e2e1] transition-all duration-300 flex items-center gap-2 group cursor-pointer font-bold"
              >
                <span>EXPLORAR DROPS FW25</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreTalents}
                className="text-[10.5px] uppercase tracking-[0.2em] bg-transparent text-white border border-white/30 px-7 py-3.5 hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer font-medium"
              >
                [CASTING ROSTER]
              </button>
            </div>
          </div>

          {/* Micro-Card Técnico da Modelo com Traços Finos */}
          <div className="w-full lg:w-88 bg-black/70 backdrop-blur-xl border border-white/15 p-5 space-y-4 text-left relative">
            <div className="absolute -top-1.5 -right-1.5 text-[8px] font-mono-tech text-white/40">+</div>
            <div className="absolute -bottom-1.5 -left-1.5 text-[8px] font-mono-tech text-white/40">+</div>

            <div className="flex items-center justify-between text-[#c9c6c5] border-b border-white/10 pb-2">
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.2em]">
                OPENING RUNWAY MODEL
              </span>
              <span className="font-mono-tech text-[10px] text-white tracking-widest font-bold">
                {leadTalent.code}
              </span>
            </div>

            <div className="flex gap-4 items-center">
              <div className="w-16 h-20 bg-neutral-900 overflow-hidden shrink-0 border border-white/15 relative group">
                <img
                  src={leadTalent.imageUrl}
                  alt={leadTalent.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1">
                <p className="font-display-street text-base uppercase text-white font-medium tracking-wide">
                  {leadTalent.name}
                </p>
                <p className="font-mono-tech text-[10.5px] text-[#c9c6c5]">
                  {leadTalent.height} CM // {leadTalent.bust}-{leadTalent.waist}-{leadTalent.hips}
                </p>
                <p className="font-mono-tech text-[9px] text-white/80 tracking-[0.16em] uppercase">
                  PARIS FASHION WEEK EXCLUSIVE
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-white/10 font-mono-tech">
              <button
                onClick={() => onOpenTalent(leadTalent)}
                className="text-[10px] uppercase text-white tracking-[0.18em] hover:underline transition-all cursor-pointer font-medium"
              >
                COMP CARD &amp; BOOKING &rarr;
              </button>
              <button
                onClick={() => onInspectImage(leadTalent.imageUrl, leadTalent.name)}
                className="text-white/40 hover:text-white p-1"
                title="Copiar link direto da imagem"
              >
                <Link2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
