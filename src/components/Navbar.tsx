import React from 'react';
import { User, Heart, ShoppingBag, Link2, Calendar } from 'lucide-react';
import { DIRECT_IMAGES } from '../data';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  wishlistCount: number;
  cartCount: number;
  openWishlist: () => void;
  openCart: () => void;
  openDirectImages: () => void;
  openAppointmentModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  wishlistCount,
  cartCount,
  openWishlist,
  openCart,
  openDirectImages,
  openAppointmentModal,
}) => {
  const brandmark = DIRECT_IMAGES.find((img) => img.id === 'brandmark')?.url;

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#faf9f6]/95 backdrop-blur-md border-b border-black/[0.12] transition-all duration-300">
      {/* Barra superior com estética técnica de moda de rua e traços finos */}
      <div className="hidden lg:flex items-center justify-between px-6 lg:px-16 py-1.5 bg-[#0f0f10] text-[#faf9f6] text-[9.5px] font-mono-tech border-b border-white/[0.08]">
        <div className="flex items-center gap-4 tracking-wider">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#ffffff] animate-ping opacity-75"></span>
            <span>PARIS [48.8566° N] • SÃO PAULO [-23.5505° S]</span>
          </span>
          <span className="text-white/20">|</span>
          <span className="text-white/60 tracking-widest uppercase text-[9px]">
            STREETWEAR COUTURE // DROP 01 CAPSULE
          </span>
        </div>
        <div className="flex items-center gap-5 tracking-widest text-[9px] uppercase">
          <button
            onClick={openDirectImages}
            className="flex items-center gap-1.5 text-[#e5e5e0] hover:text-white transition-colors cursor-pointer"
            title="Ver e copiar todos os links diretos para as imagens do HTML"
          >
            <Link2 className="w-3 h-3" />
            <span>[IMG ARCHIVE]</span>
          </button>
          <span className="text-white/20">|</span>
          <button
            onClick={openAppointmentModal}
            className="text-white/80 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Calendar className="w-3 h-3" />
            <span>STUDIO FITTING &amp; CASTING INQUIRY</span>
          </button>
        </div>
      </div>

      {/* Linha principal de navegação com traços finos */}
      <div className="w-full px-6 lg:px-16 h-20 flex items-center justify-between gap-6">
        {/* Logotipo & Marca */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => setActiveTab('colecoes')}
            className="group text-left cursor-pointer transition-opacity hover:opacity-85"
            title="sundays project — Ir para a página inicial"
          >
            <BrandLogo theme="light" size="md" withTagline={true} />
          </button>
        </div>

        {/* Menu Central com tipografia de moda de rua e traços finos */}
        <nav className="hidden xl:flex items-center gap-8">
          <button
            onClick={() => setActiveTab('colecoes')}
            className={`font-mono-tech text-[11px] uppercase tracking-[0.18em] transition-all cursor-pointer py-1 border-b ${
              activeTab === 'colecoes'
                ? 'text-black border-black font-bold'
                : 'text-[#5f5e5a] border-transparent hover:text-black'
            }`}
          >
            [01] DROPS / LOOKS
          </button>

          <button
            onClick={() => setActiveTab('talents')}
            className={`font-mono-tech text-[11px] uppercase tracking-[0.18em] transition-all cursor-pointer py-1 border-b ${
              activeTab === 'talents'
                ? 'text-black border-black font-bold'
                : 'text-[#5f5e5a] border-transparent hover:text-black'
            }`}
          >
            [02] CASTING &amp; TALENTS
          </button>

          <button
            onClick={() => setActiveTab('editorial')}
            className={`font-mono-tech text-[11px] uppercase tracking-[0.18em] transition-all cursor-pointer py-1 border-b ${
              activeTab === 'editorial'
                ? 'text-black border-black font-bold'
                : 'text-[#5f5e5a] border-transparent hover:text-black'
            }`}
          >
            [03] EDITORIAL
          </button>

          <button
            onClick={() => setActiveTab('atelier')}
            className={`font-mono-tech text-[11px] uppercase tracking-[0.18em] transition-all cursor-pointer py-1 border-b ${
              activeTab === 'atelier'
                ? 'text-black border-black font-bold'
                : 'text-[#5f5e5a] border-transparent hover:text-black'
            }`}
          >
            [04] DESIGN LAB
          </button>

          <button
            onClick={() => setActiveTab('sobre')}
            className={`font-mono-tech text-[11px] uppercase tracking-[0.18em] transition-all cursor-pointer py-1 border-b ${
              activeTab === 'sobre'
                ? 'text-black border-black font-bold'
                : 'text-[#5f5e5a] border-transparent hover:text-black'
            }`}
          >
            [05] MANIFESTO
          </button>
        </nav>

        {/* Ações à Direita */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden lg:flex items-center gap-3 text-[10.5px] uppercase tracking-[0.14em] font-mono-tech text-[#5f5e5a]">
            <button
              onClick={() => setActiveTab('talents')}
              className="px-3 py-1.5 border border-black/15 hover:border-black text-black transition-colors cursor-pointer font-medium text-[10px]"
            >
              BOOK TALENT
            </button>
            
            <button
              onClick={openWishlist}
              className="px-2.5 py-1.5 border border-black/10 hover:border-black text-black transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Heart className="w-3 h-3 text-black" />
              <span>DESEJOS ({wishlistCount})</span>
            </button>

            <button
              onClick={openCart}
              className="px-2.5 py-1.5 bg-black text-white hover:bg-neutral-800 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <ShoppingBag className="w-3 h-3 text-white" />
              <span>BAG ({cartCount})</span>
            </button>
          </div>

          {/* Botões rápidos em Mobile */}
          <button
            onClick={openDirectImages}
            className="lg:hidden p-2 text-black hover:bg-black/5 rounded transition-colors"
            title="Ver links diretos das imagens"
          >
            <Link2 className="w-5 h-5" />
          </button>

          <button
            onClick={openWishlist}
            className="lg:hidden relative p-2 text-black hover:bg-black/5 rounded transition-colors"
            title="Lista de Desejos"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-black text-white text-[9px] flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            onClick={openCart}
            className="lg:hidden relative p-2 text-black hover:bg-black/5 rounded transition-colors"
            title="Sacola de Encomendas"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-black text-white text-[9px] flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          <div
            className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center cursor-pointer hover:bg-[#333] transition-colors"
            title="Atendimento Privado VIP"
            onClick={openAppointmentModal}
          >
            <User className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Sub-barra de categorias móvel */}
      <div className="xl:hidden flex items-center overflow-x-auto px-6 py-2.5 bg-[#f4f3f1] border-t border-black/[0.06] text-[10px] uppercase tracking-[0.18em] gap-5 font-sans-editorial no-scrollbar">
        <button
          onClick={() => setActiveTab('colecoes')}
          className={`shrink-0 cursor-pointer ${
            activeTab === 'colecoes' ? 'text-black font-bold' : 'text-[#5f5e5a]'
          }`}
        >
          Coleções
        </button>
        <button
          onClick={() => setActiveTab('talents')}
          className={`shrink-0 cursor-pointer ${
            activeTab === 'talents' ? 'text-black font-bold' : 'text-[#5f5e5a]'
          }`}
        >
          Modelos &amp; Casting
        </button>
        <button
          onClick={() => setActiveTab('editorial')}
          className={`shrink-0 cursor-pointer ${
            activeTab === 'editorial' ? 'text-black font-bold' : 'text-[#5f5e5a]'
          }`}
        >
          Editorial
        </button>
        <button
          onClick={() => setActiveTab('atelier')}
          className={`shrink-0 cursor-pointer ${
            activeTab === 'atelier' ? 'text-black font-bold' : 'text-[#5f5e5a]'
          }`}
        >
          Atelier Sob Medida
        </button>
        <button
          onClick={() => setActiveTab('sobre')}
          className={`shrink-0 cursor-pointer ${
            activeTab === 'sobre' ? 'text-black font-bold' : 'text-[#5f5e5a]'
          }`}
        >
          Sobre a Marca
        </button>
      </div>
    </header>
  );
};
