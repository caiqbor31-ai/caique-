import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DualPurposeSection } from './components/DualPurposeSection';
import { LooksSection } from './components/LooksSection';
import { TalentsSection } from './components/TalentsSection';
import { EditorialSection } from './components/EditorialSection';
import { AboutSection } from './components/AboutSection';
import { AppointmentSection } from './components/AppointmentSection';
import { Footer } from './components/Footer';
import { TalentModal } from './components/TalentModal';
import { LookModal } from './components/LookModal';
import { ImageDirectLinkModal } from './components/ImageDirectLinkModal';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { LOOKS_DATA, TALENTS_DATA, DIRECT_IMAGES } from './data';
import { Look, Talent } from './types';
import { Link2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('colecoes');
  const [selectedTalent, setSelectedTalent] = useState<Talent | null>(null);
  const [selectedLook, setSelectedLook] = useState<Look | null>(null);
  const [isDirectImagesOpen, setIsDirectImagesOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);

  // Persistence / interactive state
  const [wishlistIds, setWishlistIds] = useState<string[]>(['look-11']);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { look: LOOKS_DATA[0], size: 'Sob Medida (Manequim 48)', quantity: 1 }
  ]);

  const leadTalent = TALENTS_DATA.find((t) => t.id === 'talent-clara') || TALENTS_DATA[0];

  const handleToggleWishlist = (lookId: string) => {
    setWishlistIds((prev) =>
      prev.includes(lookId) ? prev.filter((id) => id !== lookId) : [...prev, lookId]
    );
  };

  const handleAddToCart = (look: Look) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.look.id === look.id);
      if (existing) {
        return prev.map((item) =>
          item.look.id === look.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { look, size: 'Sob Medida', quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpdateCartQuantity = (index: number, qty: number) => {
    setCartItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, quantity: qty } : item))
    );
  };

  const handleSelectTalentByName = (name: string) => {
    const found = TALENTS_DATA.find(
      (t) => t.name.toLowerCase() === name.toLowerCase()
    );
    if (found) {
      setSelectedTalent(found);
    } else {
      setSelectedTalent(TALENTS_DATA[0]);
    }
  };

  const handleInspectImage = (_url: string, _title: string) => {
    setIsDirectImagesOpen(true);
  };

  const handleScheduleFitting = () => {
    const el = document.getElementById('appointment-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreLooks = () => {
    setActiveTab('colecoes');
    const el = document.getElementById('looks-and-models');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreTalents = () => {
    setActiveTab('talents');
    const el = document.getElementById('talent-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const wishlistLooks = LOOKS_DATA.filter((l) => wishlistIds.includes(l.id));

  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#1a1c1b] flex flex-col font-sans-editorial selection:bg-black selection:text-white">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        wishlistCount={wishlistIds.length}
        cartCount={cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
        openWishlist={() => setIsWishlistOpen(true)}
        openCart={() => setIsCartOpen(true)}
        openDirectImages={() => setIsDirectImagesOpen(true)}
        openAppointmentModal={handleScheduleFitting}
      />

      {/* Main Content Area based on Active Tab */}
      <main className="flex-1">
        {activeTab === 'colecoes' && (
          <>
            {/* Hero Section */}
            <HeroSection
              leadTalent={leadTalent}
              onExploreLooks={handleExploreLooks}
              onExploreTalents={handleExploreTalents}
              onOpenTalent={(t) => setSelectedTalent(t)}
              onInspectImage={handleInspectImage}
            />

            {/* Bivalent Identity Section */}
            <DualPurposeSection
              onScheduleFitting={handleScheduleFitting}
              onExploreTalents={handleExploreTalents}
              onInspectImage={handleInspectImage}
            />

            {/* Looks & Casting Synergy Section */}
            <LooksSection
              onSelectLook={(look) => setSelectedLook(look)}
              onSelectTalentByName={handleSelectTalentByName}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlistIds}
              onInspectImage={handleInspectImage}
            />

            {/* Models of the Season */}
            <TalentsSection
              onSelectTalent={(talent) => setSelectedTalent(talent)}
              onInspectImage={handleInspectImage}
              onRequestOption={(talent) => setSelectedTalent(talent)}
            />

            {/* Private Appointments & Casting Agency Desk */}
            <AppointmentSection />
          </>
        )}

        {activeTab === 'talents' && (
          <div className="pt-24">
            <TalentsSection
              onSelectTalent={(talent) => setSelectedTalent(talent)}
              onInspectImage={handleInspectImage}
              onRequestOption={(talent) => setSelectedTalent(talent)}
            />
            <AppointmentSection />
          </div>
        )}

        {activeTab === 'editorial' && (
          <div className="pt-24">
            <EditorialSection
              onInspectImage={handleInspectImage}
              onSelectTalentByName={handleSelectTalentByName}
            />
            <AppointmentSection />
          </div>
        )}

        {activeTab === 'atelier' && (
          <div className="pt-24">
            <DualPurposeSection
              onScheduleFitting={handleScheduleFitting}
              onExploreTalents={handleExploreTalents}
              onInspectImage={handleInspectImage}
            />
            <LooksSection
              onSelectLook={(look) => setSelectedLook(look)}
              onSelectTalentByName={handleSelectTalentByName}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlistIds}
              onInspectImage={handleInspectImage}
            />
            <AppointmentSection />
          </div>
        )}

        {activeTab === 'sobre' && (
          <div className="pt-24">
            <AboutSection
              onScheduleFitting={handleScheduleFitting}
              onInspectImage={handleInspectImage}
            />
            <AppointmentSection />
          </div>
        )}
      </main>

      {/* Floating Pill Quick Access for Direct Images */}
      <aside aria-label="Acesso Rápido a Recursos" className="fixed bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          onClick={() => setIsDirectImagesOpen(true)}
          className="px-4 py-3 bg-[#0a0a0a] text-white shadow-2xl border border-white/20 text-[9.5px] uppercase tracking-[0.18em] font-mono-tech font-bold hover:bg-neutral-800 transition-all cursor-pointer flex items-center gap-2"
          title="Ver e copiar todos os links diretos das imagens do HTML"
        >
          <Link2 className="w-3.5 h-3.5 text-white/80" />
          <span>[RAW HTML ASSETS // LINKS]</span>
        </button>
      </aside>

      {/* Footer */}
      <Footer
        onOpenDirectImages={() => setIsDirectImagesOpen(true)}
        onOpenAppointmentModal={handleScheduleFitting}
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Modals & Drawers */}
      <TalentModal
        talent={selectedTalent}
        onClose={() => setSelectedTalent(null)}
        onInspectImage={handleInspectImage}
        onSelectLookByModelName={handleSelectTalentByName}
      />

      <LookModal
        look={selectedLook}
        onClose={() => setSelectedLook(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedLook ? wishlistIds.includes(selectedLook.id) : false}
        onSelectTalentByName={handleSelectTalentByName}
        onScheduleFitting={handleScheduleFitting}
        onInspectImage={handleInspectImage}
      />

      <ImageDirectLinkModal
        isOpen={isDirectImagesOpen}
        onClose={() => setIsDirectImagesOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveCartItem}
        onUpdateQuantity={handleUpdateCartQuantity}
        onCheckout={() => {
          alert('Pre-order do Drop 01 registrado com sucesso! A equipe sundays project entrará em contato para confirmação de medidas e despacho.');
          setIsCartOpen(false);
        }}
        onExploreLooks={handleExploreLooks}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistLooks={wishlistLooks}
        onRemoveFromWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onExploreLooks={handleExploreLooks}
      />
    </div>
  );
}
