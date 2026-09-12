import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { Talent } from '../types';

interface TalentModalProps {
  talent: Talent | null;
  onClose: () => void;
  onInspectImage: (url: string, title: string) => void;
  onSelectLookByModelName: (modelName: string) => void;
}

export const TalentModal: React.FC<TalentModalProps> = ({
  talent,
  onClose,
  onInspectImage,
  onSelectLookByModelName,
}) => {
  const [optionHeld, setOptionHeld] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  if (!talent) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(talent.imageUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const handleHoldOption = () => {
    setOptionHeld(true);
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
          {/* Coluna Esquerda: Foto Principal do Comp-Card */}
          <div className="md:col-span-5 bg-[#e6e4df] relative min-h-[380px] md:min-h-[560px] border-r border-black/[0.12]">
            <img
              src={talent.imageUrl}
              alt={talent.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-black text-white px-2.5 py-1 text-[9.5px] uppercase font-mono-tech tracking-wider font-bold">
              {talent.code}
            </div>

            {/* Ações Rápidas de Imagem */}
            <div className="absolute bottom-4 inset-x-4 flex items-center gap-2 font-mono-tech">
              <button
                onClick={handleCopy}
                className="flex-1 bg-black/90 hover:bg-black text-white text-[9.5px] uppercase tracking-wider py-2 px-3 flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-white/10 font-bold"
              >
                {copiedUrl ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedUrl ? '[LINK COPIADO]' : '[COPIAR LINK RAW]'}</span>
              </button>

              <a
                href={talent.imageUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-black/90 hover:bg-black text-white p-2 transition-colors border border-white/10"
                title="Abrir em Nova Aba"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna Direita: Ficha Técnica & Medidas de Casting com Traços Finos */}
          <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#5f5e5a] font-mono-tech font-bold">
                  [STREET CASTING COMP-CARD] // {talent.board}
                </span>
                <h2 className="font-display-street text-2xl sm:text-3xl text-black uppercase font-semibold mt-1 tracking-tight">
                  {talent.name}
                </h2>
                <p className="text-[11px] text-[#5f5e5a] font-mono-tech tracking-wider uppercase mt-1">
                  BASES ATIVAS: {talent.bases.join(' // ')}
                </p>
              </div>

              {/* Tabela de Medidas Anatômicas Oficiais com Traços Finos */}
              <div className="border-t border-b border-black/[0.12] py-4 font-mono-tech">
                <span className="text-[9.5px] uppercase tracking-[0.2em] text-black font-bold block mb-3">
                  [MEDIDAS EXATAS DE CASTING // METRICS]
                </span>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 text-xs">
                  <div className="p-2.5 bg-[#f2f0eb] border border-black/[0.10]">
                    <span className="text-[9px] uppercase text-[#5f5e5a] block font-bold">ALTURA</span>
                    <span className="font-bold text-black text-sm">{talent.height} CM</span>
                  </div>

                  {talent.chest ? (
                    <div className="p-2.5 bg-[#f2f0eb] border border-black/[0.10]">
                      <span className="text-[9px] uppercase text-[#5f5e5a] block font-bold">TÓRAX</span>
                      <span className="font-bold text-black text-sm">{talent.chest} CM</span>
                    </div>
                  ) : (
                    <div className="p-2.5 bg-[#f2f0eb] border border-black/[0.10]">
                      <span className="text-[9px] uppercase text-[#5f5e5a] block font-bold">BUSTO</span>
                      <span className="font-bold text-black text-sm">{talent.bust} CM</span>
                    </div>
                  )}

                  <div className="p-2.5 bg-[#f2f0eb] border border-black/[0.10]">
                    <span className="text-[9px] uppercase text-[#5f5e5a] block font-bold">CINTURA</span>
                    <span className="font-bold text-black text-sm">{talent.waist} CM</span>
                  </div>

                  <div className="p-2.5 bg-[#f2f0eb] border border-black/[0.10]">
                    <span className="text-[9px] uppercase text-[#5f5e5a] block font-bold">
                      {talent.hips ? 'QUADRIL' : 'SAPATO'}
                    </span>
                    <span className="font-bold text-black text-sm">
                      {talent.hips ? `${talent.hips} CM` : talent.shoe}
                    </span>
                  </div>
                </div>
              </div>

              {/* Histórico & Biografia */}
              <div className="space-y-1.5 text-xs leading-relaxed text-[#444748]">
                <p className="font-mono-tech font-bold text-black uppercase tracking-wider text-[9.5px]">
                  [HISTÓRICO DE CAMPANHAS &amp; DESFILES]
                </p>
                <p className="font-sans-editorial">{talent.campaigns}</p>
                {talent.bio && <p className="font-sans-editorial text-[#5f5e5a]">{talent.bio}</p>}
              </div>

              {/* Conexão com Desfile */}
              <div className="bg-[#f2f0eb] p-3.5 border border-black/[0.12] flex items-center justify-between font-mono-tech">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#5f5e5a] block font-bold">
                    DROP 01 // FW25 LOOKBOOK
                  </span>
                  <span className="text-[11px] font-bold text-black uppercase">
                    Modelou peças do acervo técnico sundays project
                  </span>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onSelectLookByModelName(talent.name);
                  }}
                  className="text-[10px] uppercase tracking-wider text-black font-bold underline hover:text-[#5f5e5a] transition-colors cursor-pointer"
                >
                  [VER LOOK] &rarr;
                </button>
              </div>
            </div>

            {/* Ações de Reserva de Casting */}
            <div className="space-y-3 pt-4 border-t border-black/[0.12] font-mono-tech">
              {optionHeld ? (
                <div className="p-3 bg-black text-white text-xs flex items-center gap-2 border border-white/20">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <span className="text-[10.5px]">OPÇÃO RETIDA POR 24 HORAS. Central de booking Paris / São Paulo acionada.</span>
                </div>
              ) : (
                <button
                  onClick={handleHoldOption}
                  className="w-full bg-black text-white py-3.5 text-[10.5px] uppercase tracking-[0.18em] font-bold hover:bg-neutral-800 transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>[RESERVAR OPÇÃO DE CASTING // 24H HOLD]</span>
                </button>
              )}

              <p className="text-[9.5px] text-[#5f5e5a] text-center font-mono-tech">
                BOOKING DIRETO INTERNACIONAL: <span className="text-black font-bold">casting@sundaysproject.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
