import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Calendar, Check, Copy, ExternalLink } from 'lucide-react';
import { Look } from '../types';

interface LookModalProps {
  look: Look | null;
  onClose: () => void;
  onAddToCart: (look: Look) => void;
  onToggleWishlist: (lookId: string) => void;
  isWishlisted: boolean;
  onSelectTalentByName: (talentName: string) => void;
  onScheduleFitting: () => void;
  onInspectImage: (url: string, title: string) => void;
}

export const LookModal: React.FC<LookModalProps> = ({
  look,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onSelectTalentByName,
  onScheduleFitting,
  onInspectImage,
}) => {
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [addedToBag, setAddedToBag] = useState(false);

  if (!look) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(look.imageUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const handleAdd = () => {
    onAddToCart(look);
    setAddedToBag(true);
    setTimeout(() => setAddedToBag(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a]/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#faf9f6] text-[#1a1c1b] w-full max-w-4xl shadow-2xl border border-black/[0.15] overflow-hidden relative my-auto">
        {/* Marcações Técnicas de Canto */}
        <div className="absolute top-2 left-2 text-[8px] font-mono-tech text-black/30 z-20 select-none">+</div>
        <div className="absolute top-2 right-12 text-[8px] font-mono-tech text-black/30 z-20 select-none">+</div>

        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 p-2 bg-black hover:bg-neutral-800 text-white transition-colors cursor-pointer border border-white/20"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto">
          {/* Coluna Esquerda: Foto do Look em Passarela */}
          <div className="md:col-span-5 bg-[#e6e4df] relative min-h-[380px] md:min-h-[560px] border-r border-black/[0.12]">
            <img
              src={look.imageUrl}
              alt={look.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-black text-white px-2.5 py-1 text-[9.5px] uppercase font-mono-tech tracking-wider font-bold">
              {look.lookNumber}
            </div>

            <div className="absolute top-4 right-4 bg-white/95 border border-black/10 px-2.5 py-1 text-[8.5px] uppercase tracking-widest text-black font-bold font-mono-tech">
              {look.tag}
            </div>

            {/* Ações Rápidas de Imagem com Traço Fino */}
            <div className="absolute bottom-4 inset-x-4 flex items-center gap-2 font-mono-tech">
              <button
                onClick={handleCopy}
                className="flex-1 bg-black/90 hover:bg-black text-white text-[9.5px] uppercase tracking-wider py-2 px-3 flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-white/10 font-bold"
              >
                {copiedUrl ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedUrl ? '[LINK COPIADO]' : '[COPIAR LINK RAW]'}</span>
              </button>

              <a
                href={look.imageUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-black/90 hover:bg-black text-white p-2 transition-colors border border-white/10"
                title="Abrir Imagem em Nova Aba"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna Direita: Especificações de Streetwear de Luxo & Modelo */}
          <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#5f5e5a] font-mono-tech font-bold">
                  {look.category} // DROP 01 &bull; FW25
                </span>
                <h2 className="font-display-street text-2xl sm:text-3xl text-black uppercase font-semibold mt-1 tracking-tight">
                  {look.title}
                </h2>
                <p className="text-xl font-mono-tech font-bold text-black mt-1">
                  {look.priceFormatted}
                  <span className="text-[10px] font-normal text-[#5f5e5a] ml-2 uppercase">
                    [PRODUÇÃO LIMITADA EM SÃO PAULO &amp; PARIS]
                  </span>
                </p>
              </div>

              <p className="text-sm font-sans-editorial text-[#444748] leading-relaxed">
                {look.description}
              </p>

              {/* Especificação Têxtil com Traços Finos */}
              <div className="border-t border-b border-black/[0.12] py-4 space-y-2 font-mono-tech">
                <span className="text-[9.5px] uppercase tracking-[0.2em] text-black font-bold block">
                  [ESPECIFICAÇÕES TÊXTEIS &amp; CORTE TÉCNICO]
                </span>
                <p className="text-xs text-[#5f5e5a] leading-relaxed font-sans-editorial">
                  {look.fabric}
                </p>
                <div className="flex items-center gap-2 pt-1 text-xs text-black">
                  <span className="text-[10px] uppercase tracking-wider text-[#5f5e5a]">
                    HORAS DE ALFAIATARIA / ACABAMENTO MANUAL:
                  </span>
                  <span className="font-mono-tech font-bold">{look.tailorHours}H</span>
                </div>
              </div>

              {/* Conexão com a Modelo da Agência */}
              <div className="bg-[#f2f0eb] p-4 border border-black/[0.12] space-y-1.5 font-mono-tech">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#5f5e5a] block font-bold">
                  STREET CASTING MODEL // LOOKBOOK RUNWAY
                </span>
                <div className="flex items-baseline justify-between">
                  <h4 className="font-display-street text-base uppercase text-black font-semibold">
                    {look.model.name}
                  </h4>
                  <span className="text-xs text-[#5f5e5a]">
                    {look.model.height}
                  </span>
                </div>
                <p className="text-xs text-[#5f5e5a]">
                  {look.model.metrics}
                </p>
                <div className="pt-2 border-t border-black/[0.08]">
                  <button
                    onClick={() => {
                      onClose();
                      onSelectTalentByName(look.model.name);
                    }}
                    className="text-[10px] uppercase tracking-wider text-black underline hover:text-[#5f5e5a] transition-colors cursor-pointer font-bold"
                  >
                    [VER COMP CARD DE {look.model.name.toUpperCase()}] &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* Ações de Compra & Prova */}
            <div className="space-y-3 pt-4 border-t border-black/[0.12] font-mono-tech">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleAdd}
                  className="flex-1 bg-black text-white py-3.5 text-[10.5px] uppercase tracking-[0.18em] font-bold hover:bg-neutral-800 transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{addedToBag ? '[ADICIONADO AO CARRINHO]' : '[ENCOMENDAR PRE-ORDER]'}</span>
                </button>

                <button
                  onClick={() => onToggleWishlist(look.id)}
                  className={`p-3.5 border border-black/20 transition-colors cursor-pointer ${
                    isWishlisted ? 'bg-black text-white' : 'hover:bg-[#e6e4df] text-black'
                  }`}
                  title={isWishlisted ? 'Na Lista de Desejos' : 'Adicionar à Lista de Desejos'}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onScheduleFitting();
                }}
                className="w-full border border-black text-black py-3 text-[10px] uppercase tracking-[0.16em] hover:bg-black hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-2 font-bold"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>AGENDAR FITTING PRIVADO NO SALÃO</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
