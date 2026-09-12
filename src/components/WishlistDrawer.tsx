import React from 'react';
import { X, Trash2, Heart, ShoppingBag } from 'lucide-react';
import { Look } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistLooks: Look[];
  onRemoveFromWishlist: (lookId: string) => void;
  onAddToCart: (look: Look) => void;
  onExploreLooks: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistLooks,
  onRemoveFromWishlist,
  onAddToCart,
  onExploreLooks,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xs flex justify-end animate-in fade-in duration-200 font-mono-tech">
      <div className="bg-[#faf9f6] text-[#1a1c1b] w-full max-w-md h-full flex flex-col shadow-2xl border-l border-black/[0.12] relative">
        {/* Cabeçalho */}
        <div className="p-6 border-b border-black/[0.12] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-black" />
            <h3 className="font-display-street text-lg uppercase text-black font-semibold tracking-tight">
              ARQUIVO PRIVADO ({wishlistLooks.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#5f5e5a] hover:text-black transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo da Wishlist */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {wishlistLooks.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
              <Heart className="w-10 h-10 text-[#aaa]" />
              <p className="font-display-street text-lg uppercase text-black font-semibold">
                ARQUIVO VAZIO // DROP 01
              </p>
              <p className="font-sans-editorial text-xs text-[#5f5e5a] max-w-xs leading-relaxed">
                Guarde peças do Drop 01 para comparar medidas anatômicas e encomendar diretamente pelo design lab.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onExploreLooks();
                }}
                className="px-6 py-2.5 bg-black text-white text-[10px] uppercase tracking-[0.18em] font-mono-tech font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                [VER CATÁLOGO DE LOOKS]
              </button>
            </div>
          ) : (
            wishlistLooks.map((look) => (
              <div
                key={look.id}
                className="p-4 bg-white border border-black/[0.12] flex gap-4 items-start relative"
              >
                <div className="w-20 h-24 bg-[#e6e4df] shrink-0 overflow-hidden border border-black/[0.08]">
                  <img
                    src={look.imageUrl}
                    alt={look.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-[#5f5e5a] font-mono-tech font-bold">
                        {look.lookNumber}
                      </span>
                      <h4 className="font-display-street text-sm uppercase text-black font-semibold truncate">
                        {look.title}
                      </h4>
                    </div>
                    <button
                      onClick={() => onRemoveFromWishlist(look.id)}
                      className="text-[#5f5e5a] hover:text-black p-1 cursor-pointer"
                      title="Remover do Arquivo"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs font-mono-tech font-bold text-black">
                    {look.priceFormatted}
                  </p>
                  <p className="text-[10.5px] font-sans-editorial text-[#5f5e5a] truncate">
                    {look.description}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        onAddToCart(look);
                        onRemoveFromWishlist(look.id);
                      }}
                      className="w-full py-2 bg-black text-white text-[9.5px] uppercase tracking-[0.16em] font-mono-tech font-bold hover:bg-neutral-800 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>[MOVER PARA PRE-ORDER]</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
