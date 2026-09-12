import React, { useState } from 'react';
import { Heart, Link2, Eye, ShoppingBag } from 'lucide-react';
import { LOOKS_DATA } from '../data';
import { Look } from '../types';

interface LooksSectionProps {
  onSelectLook: (look: Look) => void;
  onSelectTalentByName: (talentName: string) => void;
  onAddToCart: (look: Look) => void;
  onToggleWishlist: (lookId: string) => void;
  wishlistIds: string[];
  onInspectImage: (url: string, title: string) => void;
}

export const LooksSection: React.FC<LooksSectionProps> = ({
  onSelectLook,
  onSelectTalentByName,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onInspectImage,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'TODAS AS PEÇAS (04)' },
    { id: 'Drop 01 // Streetwear', label: 'DROP 01 // STREETWEAR' },
    { id: 'Alfaiataria Urbana', label: 'ALFAIATARIA URBANA' },
    { id: 'Outerwear Técnico', label: 'OUTERWEAR TÉCNICO' },
  ];

  const filteredLooks = LOOKS_DATA.filter((look) => {
    if (activeCategory === 'todos') return true;
    return look.category === activeCategory;
  });

  return (
    <section className="w-full px-6 lg:px-16 py-20 lg:py-28 bg-[#f5f4ef] border-b border-black/[0.12]" id="looks-and-models">
      {/* Cabeçalho da Seção com Linhas Finas */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 gap-6 border-b border-black/[0.12]">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono-tech text-[10px] uppercase tracking-[0.25em]">
            <span className="w-2 h-[1px] bg-black"></span>
            <span className="text-[#5f5e5a] font-bold">[02 // DROP ARCHIVE]</span>
            <span className="text-black/30">/</span>
            <span className="text-black font-semibold">FW25 &bull; EDITIONS</span>
          </div>
          <h2 className="font-display-street text-3xl lg:text-4xl text-[#0f0f10] font-medium uppercase tracking-tight">
            DROPS DE MODA DE RUA &amp; MODELOS DO LOOK
          </h2>
        </div>

        {/* Filtros de Categoria em Monospace com Traços Finos */}
        <div className="flex items-center gap-2 flex-wrap font-mono-tech">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-[10px] uppercase tracking-[0.16em] px-3.5 py-1.5 border transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-black text-white border-black font-bold'
                  : 'bg-white/80 text-[#0f0f10] border-black/15 hover:border-black'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Matriz Editorial com Estética de Rua e Traços Finos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
        {filteredLooks.map((look) => {
          const isWishlisted = wishlistIds.includes(look.id);

          return (
            <div
              key={look.id}
              className="group bg-[#faf9f6] flex flex-col justify-between p-4 border border-black/[0.12] transition-all duration-300 hover:border-black relative"
            >
              {/* Marcações Técnicas de Canto */}
              <div className="absolute top-1.5 left-1.5 text-[8px] font-mono-tech text-black/30 select-none">+</div>
              <div className="absolute top-1.5 right-1.5 text-[8px] font-mono-tech text-black/30 select-none">+</div>

              {/* Recipiente da Imagem e Distintivos */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#e6e4df] border border-black/[0.1]">
                <img
                  src={look.imageUrl}
                  alt={look.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                  onClick={() => onSelectLook(look)}
                  referrerPolicy="no-referrer"
                />

                {/* Distintivos Técnicos de Drop */}
                <div className="absolute top-2 left-2 bg-black text-white px-2 py-0.5 font-mono-tech text-[9px] tracking-wider uppercase font-bold">
                  {look.lookNumber}
                </div>

                <div className="absolute top-2 right-2 bg-white/95 border border-black/10 px-2 py-0.5 font-mono-tech text-[8.5px] tracking-widest uppercase text-black font-bold">
                  {look.tag}
                </div>

                {/* Ações Rápidas no Hover */}
                <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => onToggleWishlist(look.id)}
                    className={`p-2 backdrop-blur-md transition-colors cursor-pointer border ${
                      isWishlisted ? 'bg-black text-white border-black' : 'bg-white/95 text-black border-black/15 hover:bg-black hover:text-white'
                    }`}
                    title={isWishlisted ? 'Remover dos Desejos' : 'Adicionar aos Desejos'}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>

                  <button
                    onClick={() => onInspectImage(look.imageUrl, `${look.lookNumber} - ${look.title}`)}
                    className="p-2 bg-white/95 hover:bg-black hover:text-white text-black border border-black/15 backdrop-blur-md transition-colors cursor-pointer text-[9px] uppercase tracking-wider flex items-center gap-1 font-mono-tech"
                    title="Copiar link direto da imagem"
                  >
                    <Link2 className="w-3 h-3 text-black/60" />
                    <span>[RAW]</span>
                  </button>

                  <button
                    onClick={() => onSelectLook(look)}
                    className="p-2 bg-white/95 hover:bg-black hover:text-white text-black border border-black/15 backdrop-blur-md transition-colors cursor-pointer"
                    title="Ver detalhes do look"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Informações da Peça com Tipografia de Rua e Traços Finos */}
              <div className="pt-4 space-y-1.5">
                <div className="flex items-baseline justify-between gap-2">
                  <h4
                    onClick={() => onSelectLook(look)}
                    className="font-display-street text-base uppercase text-black font-semibold hover:underline cursor-pointer tracking-tight"
                  >
                    {look.title}
                  </h4>
                  <span className="font-mono-tech text-xs text-black font-bold shrink-0">
                    {look.priceFormatted}
                  </span>
                </div>
                <p className="font-sans-editorial text-xs text-[#5f5e5a] line-clamp-2 leading-relaxed">
                  {look.description}
                </p>
              </div>

              {/* Caixa de Conexão Técnica com a Modelo (Street Cast) */}
              <div className="mt-4 pt-2.5 bg-[#f0eee9] p-3 space-y-1.5 border border-black/10 font-mono-tech">
                <div className="flex items-center justify-between text-[8.5px] uppercase tracking-wider text-[#5f5e5a] border-b border-black/[0.08] pb-1">
                  <span>STREET CASTING MODEL</span>
                  <span className="w-1.5 h-1.5 bg-black"></span>
                </div>

                <div className="flex items-baseline justify-between pt-0.5">
                  <button
                    onClick={() => onSelectTalentByName(look.model.name)}
                    className="text-xs text-black font-bold hover:underline cursor-pointer text-left uppercase"
                  >
                    {look.model.name}
                  </button>
                  <span className="text-[10px] text-[#5f5e5a]">
                    {look.model.height}
                  </span>
                </div>

                <p className="text-[9.5px] text-[#5f5e5a] truncate">
                  {look.model.metrics}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-black/[0.08] text-[9px] uppercase tracking-wider">
                  <button
                    onClick={() => onAddToCart(look)}
                    className="text-black hover:underline font-bold cursor-pointer flex items-center gap-1"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>PRE-ORDER</span>
                  </button>

                  <button
                    onClick={() => onSelectTalentByName(look.model.name)}
                    className="text-[#5f5e5a] hover:text-black transition-colors cursor-pointer"
                  >
                    [COMP CARD] &rarr;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
