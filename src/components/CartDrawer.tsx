import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Look } from '../types';

export interface CartItem {
  look: Look;
  size: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (index: number) => void;
  onUpdateQuantity: (index: number, qty: number) => void;
  onCheckout: () => void;
  onExploreLooks: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateQuantity,
  onCheckout,
  onExploreLooks,
}) => {
  if (!isOpen) return null;

  const totalBRL = items.reduce(
    (sum, item) => sum + item.look.priceBRL * item.quantity,
    0
  );

  const formattedTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(totalBRL);

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xs flex justify-end animate-in fade-in duration-200 font-mono-tech">
      <div className="bg-[#faf9f6] text-[#1a1c1b] w-full max-w-md h-full flex flex-col shadow-2xl border-l border-black/[0.12] relative">
        {/* Cabeçalho */}
        <div className="p-6 border-b border-black/[0.12] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-black" />
            <h3 className="font-display-street text-lg uppercase text-black font-semibold tracking-tight">
              SACOLA DE PRE-ORDER ({items.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#5f5e5a] hover:text-black transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo da Sacola */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
              <ShoppingBag className="w-10 h-10 text-[#aaa]" />
              <p className="font-display-street text-lg uppercase text-black font-semibold">
                SACOLA VAZIA // DROP 01
              </p>
              <p className="font-sans-editorial text-xs text-[#5f5e5a] max-w-xs leading-relaxed">
                Explore as peças com cortes geométricos e traços finos do Drop 01 para reservar no seu acervo técnico.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onExploreLooks();
                }}
                className="px-6 py-2.5 bg-black text-white text-[10px] uppercase tracking-[0.18em] font-mono-tech font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                [EXPLORAR DROP ARCHIVE]
              </button>
            </div>
          ) : (
            items.map((item, idx) => (
              <div
                key={`${item.look.id}-${item.size}-${idx}`}
                className="p-4 bg-white border border-black/[0.12] flex gap-4 items-start relative"
              >
                <div className="w-20 h-24 bg-[#e6e4df] shrink-0 overflow-hidden border border-black/[0.08]">
                  <img
                    src={item.look.imageUrl}
                    alt={item.look.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-[#5f5e5a] font-mono-tech font-bold">
                        {item.look.lookNumber}
                      </span>
                      <h4 className="font-display-street text-sm uppercase text-black font-semibold truncate">
                        {item.look.title}
                      </h4>
                    </div>
                    <button
                      onClick={() => onRemoveItem(idx)}
                      className="text-[#5f5e5a] hover:text-black p-1 cursor-pointer"
                      title="Remover item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs font-mono-tech font-bold text-black">
                    {item.look.priceFormatted}
                  </p>
                  <p className="text-[10.5px] font-mono-tech text-[#5f5e5a]">
                    TAM: <span className="font-bold text-black">{item.size}</span>
                  </p>

                  <div className="flex items-center gap-3 pt-2 text-xs font-mono-tech">
                    <span className="text-[#5f5e5a] text-[10px]">QTD:</span>
                    <button
                      onClick={() => onUpdateQuantity(idx, Math.max(1, item.quantity - 1))}
                      className="w-5 h-5 bg-[#f2f0eb] border border-black/[0.12] flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer font-bold"
                    >
                      -
                    </button>
                    <span className="font-bold">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                      className="w-5 h-5 bg-[#f2f0eb] border border-black/[0.12] flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Rodapé da Sacola */}
        {items.length > 0 && (
          <div className="p-6 border-t border-black/[0.12] bg-[#f2f0eb] space-y-4">
            <div className="space-y-1">
              <div className="flex items-center justify-between font-mono-tech text-[10.5px] text-[#5f5e5a]">
                <span>ATENDIMENTO &amp; FITTING</span>
                <span className="text-black font-bold">INCLUSO (DESIGN LAB)</span>
              </div>
              <div className="flex items-center justify-between font-display-street text-lg uppercase text-black pt-2 border-t border-black/[0.12] font-semibold">
                <span>TOTAL ESTIMADO:</span>
                <span className="font-mono-tech font-bold">{formattedTotal}</span>
              </div>
            </div>

            <button
              onClick={onCheckout}
              className="w-full py-3.5 bg-black text-white text-[10.5px] uppercase tracking-[0.18em] font-mono-tech font-bold hover:bg-neutral-800 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>[CONFIRMAR PRE-ORDER // DROP 01]</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[9px] font-sans-editorial text-[#5f5e5a] text-center leading-normal">
              Entraremos em contato para confirmar as medidas de fitting e cronograma de despacho do Drop 01.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
