import React from 'react';
import { Camera, MapPin, Users, Link2 } from 'lucide-react';
import { EDITORIAL_STORIES, DIRECT_IMAGES } from '../data';

interface EditorialSectionProps {
  onInspectImage: (url: string, title: string) => void;
  onSelectTalentByName: (name: string) => void;
}

export const EditorialSection: React.FC<EditorialSectionProps> = ({
  onInspectImage,
  onSelectTalentByName,
}) => {
  const heroImage = DIRECT_IMAGES.find((img) => img.id === 'hero-runway')?.url;
  const backstageImage = DIRECT_IMAGES.find((img) => img.id === 'talent-backstage')?.url;

  return (
    <section className="w-full px-6 lg:px-16 py-20 lg:py-28 bg-[#faf9f6] border-b border-black/[0.12]" id="editorial-stories">
      {/* Cabeçalho */}
      <div className="max-w-3xl mb-16 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-[1px] bg-black"></span>
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#5f5e5a] font-bold">
            [04 // VISUAL DIARIES] &bull; SUNDAYS PROJECT
          </p>
        </div>
        <h2 className="font-display-street text-3xl lg:text-5xl text-black font-medium uppercase tracking-tight leading-tight">
          EDITORIAL DE RUA &amp; DIÁRIOS VISUAIS EM TRAÇOS FINOS
        </h2>
        <p className="font-sans-editorial text-sm text-[#444748] leading-relaxed">
          Documentação visual em 35mm e médio formato: explorando a tensão entre as linhas de concreto da arquitetura brutalista urbana e o corte arquitetônico do streetwear da sundays project.
        </p>
      </div>

      <div className="space-y-20">
        {/* História 01 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 relative group overflow-hidden bg-[#e6e4df] aspect-[16/9] border border-black/[0.12]">
            <div className="absolute top-2 left-2 text-[8px] font-mono-tech text-black/30 z-10 select-none">+</div>
            <div className="absolute top-2 right-2 text-[8px] font-mono-tech text-black/30 z-10 select-none">+</div>
            {heroImage && (
              <img
                src={heroImage}
                alt={EDITORIAL_STORIES[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            )}
            <button
              onClick={() => heroImage && onInspectImage(heroImage, EDITORIAL_STORIES[0].title)}
              className="absolute top-3 right-3 bg-black/85 hover:bg-black text-white text-[9px] uppercase tracking-wider px-2.5 py-1 flex items-center gap-1 font-mono-tech cursor-pointer z-20"
            >
              <Link2 className="w-3 h-3 text-white/70" />
              <span>[RAW DIRECT]</span>
            </button>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-1.5 font-mono-tech">
              <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#5f5e5a] font-bold block">
                CAMPANHA 01 // PARIS // {EDITORIAL_STORIES[0].season.toUpperCase()}
              </span>
              <h3 className="font-display-street text-2xl sm:text-3xl text-black font-semibold uppercase">
                {EDITORIAL_STORIES[0].title}
              </h3>
            </div>

            <p className="font-sans-editorial text-sm text-[#444748] leading-relaxed">
              {EDITORIAL_STORIES[0].description}
            </p>

            <div className="space-y-2 text-[11px] font-mono-tech text-[#5f5e5a] border-t border-b border-black/[0.12] py-4">
              <div className="flex items-center gap-2">
                <Camera className="w-3.5 h-3.5 text-black shrink-0" />
                <span>
                  FOTOGRAFIA:{' '}
                  <strong className="text-black font-semibold uppercase">{EDITORIAL_STORIES[0].photographer}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-black shrink-0" />
                <span>
                  LOCAÇÃO:{' '}
                  <strong className="text-black font-semibold uppercase">{EDITORIAL_STORIES[0].location}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-black shrink-0" />
                <span>
                  CASTING:{' '}
                  <button
                    onClick={() => onSelectTalentByName('Clara Chen')}
                    className="text-black font-bold underline hover:text-[#5f5e5a] cursor-pointer"
                  >
                    CLARA CHEN
                  </button>
                  {' & '}
                  <button
                    onClick={() => onSelectTalentByName('Elena Rostova')}
                    className="text-black font-bold underline hover:text-[#5f5e5a] cursor-pointer"
                  >
                    ELENA ROSTOVA
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* História 02 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
            <div className="space-y-1.5 font-mono-tech">
              <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#5f5e5a] font-bold block">
                CAMPANHA 02 // SÃO PAULO // {EDITORIAL_STORIES[1].season.toUpperCase()}
              </span>
              <h3 className="font-display-street text-2xl sm:text-3xl text-black font-semibold uppercase">
                {EDITORIAL_STORIES[1].title}
              </h3>
            </div>

            <p className="font-sans-editorial text-sm text-[#444748] leading-relaxed">
              {EDITORIAL_STORIES[1].description}
            </p>

            <div className="space-y-2 text-[11px] font-mono-tech text-[#5f5e5a] border-t border-b border-black/[0.12] py-4">
              <div className="flex items-center gap-2">
                <Camera className="w-3.5 h-3.5 text-black shrink-0" />
                <span>
                  FOTOGRAFIA:{' '}
                  <strong className="text-black font-semibold uppercase">{EDITORIAL_STORIES[1].photographer}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-black shrink-0" />
                <span>
                  LOCAÇÃO:{' '}
                  <strong className="text-black font-semibold uppercase">{EDITORIAL_STORIES[1].location}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-black shrink-0" />
                <span>
                  CASTING:{' '}
                  <button
                    onClick={() => onSelectTalentByName('Mateo Silva')}
                    className="text-black font-bold underline hover:text-[#5f5e5a] cursor-pointer"
                  >
                    MATEO SILVA
                  </button>
                  {' & '}
                  <button
                    onClick={() => onSelectTalentByName('Aissata Ba')}
                    className="text-black font-bold underline hover:text-[#5f5e5a] cursor-pointer"
                  >
                    AISSATA BA
                  </button>
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative group overflow-hidden bg-[#e6e4df] aspect-[16/9] border border-black/[0.12] order-1 lg:order-2">
            <div className="absolute top-2 left-2 text-[8px] font-mono-tech text-black/30 z-10 select-none">+</div>
            <div className="absolute top-2 right-2 text-[8px] font-mono-tech text-black/30 z-10 select-none">+</div>
            {backstageImage && (
              <img
                src={backstageImage}
                alt={EDITORIAL_STORIES[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            )}
            <button
              onClick={() => backstageImage && onInspectImage(backstageImage, EDITORIAL_STORIES[1].title)}
              className="absolute top-3 right-3 bg-black/85 hover:bg-black text-white text-[9px] uppercase tracking-wider px-2.5 py-1 flex items-center gap-1 font-mono-tech cursor-pointer z-20"
            >
              <Link2 className="w-3 h-3 text-white/70" />
              <span>[RAW DIRECT]</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
