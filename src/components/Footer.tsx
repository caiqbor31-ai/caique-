import React, { useState } from 'react';
import { Check, Link2 } from 'lucide-react';
import { DIRECT_IMAGES } from '../data';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenDirectImages: () => void;
  onOpenAppointmentModal: () => void;
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDirectImages,
  onOpenAppointmentModal,
  onNavigate,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const brandmark = DIRECT_IMAGES.find((img) => img.id === 'brandmark')?.url;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="w-full bg-[#080809] text-white border-t border-white/15 font-mono-tech">
      {/* Barra Newsletter de Acesso Antecipado aos Drops com Traços Finos */}
      <div className="px-6 lg:px-16 py-12 border-b border-white/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-6 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-[1px] bg-white/60"></span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/70 font-bold">
                [DROP RADAR // EARLY ACCESS]
              </span>
            </div>
            <h3 className="font-display-street text-2xl sm:text-3xl text-white uppercase tracking-tight">
              ACESSO RESERVADO AOS DROPS &amp; RUNWAY
            </h3>
            <p className="font-sans-editorial text-xs sm:text-sm text-white/60 max-w-lg leading-relaxed">
              Receba com antecedência links criptografados de pré-venda de drops, lookbooks técnicos em alta resolução e convites para desfiles.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-md ml-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="SEU E-MAIL [CLIENT / BOOKER]"
                className="w-full bg-white/5 border border-white/20 px-4 py-3 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-white uppercase tracking-wider"
              />
              <button
                type="submit"
                className="shrink-0 bg-white text-black px-6 py-3 text-[10px] uppercase tracking-[0.18em] font-bold hover:bg-neutral-200 transition-colors cursor-pointer border border-white"
              >
                {subscribed ? '[CONFIRMADO]' : '[INSCREVER]'}
              </button>
            </form>
            {subscribed && (
              <p className="text-[10px] text-white/80 text-right mt-2 flex items-center justify-end gap-1 font-mono-tech">
                <Check className="w-3.5 h-3.5 text-white" />
                <span>Confirmação enviada. Você receberá alertas dos drops da sundays project.</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Links Principais do Rodapé */}
      <div className="px-6 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Coluna da Marca */}
        <div className="space-y-4">
          <BrandLogo theme="dark" size="lg" />
          <p className="font-sans-editorial text-xs text-white/60 leading-relaxed">
            sundays project &bull; Marca de moda de rua contemporânea com alfaiataria em traços finos e agência internacional de street casting. Hubs operacionais em São Paulo e Paris.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenDirectImages}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[9.5px] uppercase tracking-wider transition-colors cursor-pointer font-bold"
            >
              <Link2 className="w-3.5 h-3.5 text-white/70" />
              <span>[SYS_ASSETS // LINKS DAS IMAGENS]</span>
            </button>
          </div>
        </div>

        {/* Labs & Salões de Prova */}
        <div className="space-y-3">
          <h4 className="font-display-street text-sm uppercase text-white font-semibold tracking-wider">
            [01 // LABS &amp; SALÕES]
          </h4>
          <ul className="space-y-3 text-xs text-white/60">
            <li className="border-b border-white/10 pb-2">
              <strong className="text-white block font-mono-tech uppercase text-[11px]">São Paulo Jardins</strong>
              <span className="font-sans-editorial text-[11.5px]">Rua Oscar Freire, 920 &bull; SP</span>
            </li>
            <li className="border-b border-white/10 pb-2">
              <strong className="text-white block font-mono-tech uppercase text-[11px]">Paris Vendôme</strong>
              <span className="font-sans-editorial text-[11.5px]">12 Place Vendôme, 75001 Paris</span>
            </li>
            <li>
              <strong className="text-white block font-mono-tech uppercase text-[11px]">Milão Montenapoleone</strong>
              <span className="font-sans-editorial text-[11.5px]">Via Montenapoleone, 8, Milão</span>
            </li>
          </ul>
        </div>

        {/* Divisões & Contato */}
        <div className="space-y-3">
          <h4 className="font-display-street text-sm uppercase text-white font-semibold tracking-wider">
            [02 // DESK &amp; CONTATO]
          </h4>
          <ul className="space-y-2 text-xs text-white/60 font-mono-tech">
            <li>
              <span className="text-white/40 block text-[9.5px] uppercase">Design Lab &amp; Drops:</span>
              <a href="mailto:drops@sundaysproject.com" className="hover:text-white transition-colors">
                drops@sundaysproject.com
              </a>
            </li>
            <li>
              <span className="text-white/40 block text-[9.5px] uppercase">Street Casting &amp; Booking:</span>
              <a href="mailto:casting@sundaysproject.com" className="hover:text-white transition-colors">
                casting@sundaysproject.com
              </a>
            </li>
            <li>
              <span className="text-white/40 block text-[9.5px] uppercase">Scouting &amp; New Faces:</span>
              <a href="mailto:scouting@sundaysproject.com" className="hover:text-white transition-colors">
                scouting@sundaysproject.com
              </a>
            </li>
            <li>
              <span className="text-white/40 block text-[9.5px] uppercase">Press &amp; Editoriais:</span>
              <a href="mailto:press@sundaysproject.com" className="hover:text-white transition-colors">
                press@sundaysproject.com
              </a>
            </li>
          </ul>
        </div>

        {/* Links Rápidos */}
        <div className="space-y-3">
          <h4 className="font-display-street text-sm uppercase text-white font-semibold tracking-wider">
            [03 // ARQUIVO &amp; ATALHOS]
          </h4>
          <ul className="space-y-2 text-xs text-white/60 font-mono-tech">
            <li>
              <button
                onClick={() => onNavigate('colecoes')}
                className="hover:text-white transition-colors cursor-pointer text-left uppercase"
              >
                &gt; DROP 01 // FW25 LOOKBOOK
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('talents')}
                className="hover:text-white transition-colors cursor-pointer text-left uppercase"
              >
                &gt; CASTING ROSTER (42)
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('editorial')}
                className="hover:text-white transition-colors cursor-pointer text-left uppercase"
              >
                &gt; DIÁRIOS VISUAIS 35MM
              </button>
            </li>
            <li>
              <button
                onClick={onOpenAppointmentModal}
                className="hover:text-white transition-colors cursor-pointer text-left uppercase"
              >
                &gt; AGENDAR SALÃO PRIVADO
              </button>
            </li>
            <li>
              <button
                onClick={onOpenDirectImages}
                className="hover:text-white transition-colors cursor-pointer text-left uppercase text-white/80"
              >
                &gt; ASSETS HTML DIRETOS
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Sub-barra Inferior com Linhas Finas */}
      <div className="px-6 lg:px-16 py-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[9.5px] text-white/40 uppercase tracking-[0.16em]">
        <p>&copy; 2025 SUNDAYS PROJECT. MODA DE RUA &amp; CASTING GLOBAL. PARIS &bull; SÃO PAULO.</p>
        <p>COORD: 23&deg;33'S 46&deg;38'W // 48&deg;51'N 2&deg;20'E &bull; ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};
