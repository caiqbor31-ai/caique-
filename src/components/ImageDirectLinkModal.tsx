import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, Code2, Link as LinkIcon, Sparkles } from 'lucide-react';
import { DIRECT_IMAGES } from '../data';

interface ImageDirectLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ImageDirectLinkModal: React.FC<ImageDirectLinkModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedTagId, setCopiedTagId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'Todas as Imagens' },
    { id: 'Desfile & Passarela', label: 'Desfile & Passarela' },
    { id: 'Catálogo de Looks', label: 'Catálogo de Looks' },
    { id: 'Ficha de Modelo', label: 'Ficha de Modelo' },
    { id: 'Atelier & Provas', label: 'Atelier & Provas' },
    { id: 'Bastidores da Agência', label: 'Bastidores da Agência' },
    { id: 'Identidade Visual', label: 'Identidade Visual' },
  ];

  const filteredImages =
    activeCategory === 'all'
      ? DIRECT_IMAGES
      : DIRECT_IMAGES.filter((img) => img.category === activeCategory);

  const copyUrl = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const copyHtmlTag = (id: string, url: string, title: string) => {
    const tag = `<img src="${url}" alt="${title}" loading="lazy" referrerPolicy="no-referrer" />`;
    navigator.clipboard.writeText(tag);
    setCopiedTagId(id);
    setTimeout(() => setCopiedTagId(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200 font-mono-tech">
      <div className="bg-[#faf9f6] text-[#1a1c1b] w-full max-w-5xl shadow-2xl border border-black/[0.12] overflow-hidden relative my-auto flex flex-col max-h-[90vh]">
        {/* Cabeçalho do Modal */}
        <div className="p-6 sm:p-8 border-b border-black/[0.12] flex items-start justify-between bg-white relative">
          <div className="absolute top-2 left-2 text-[8px] text-black/30 select-none">+</div>
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#5f5e5a] font-bold">
                [SYS_ASSETS // MEDIA REPOSITORY] &bull; SUNDAYS PROJECT
              </span>
            </div>
            <h2 className="font-display-street text-2xl sm:text-3xl text-black uppercase font-semibold tracking-tight">
              LINKS DIRETOS DE IMAGENS DO HTML
            </h2>
            <p className="text-xs text-[#5f5e5a] font-sans-editorial leading-relaxed">
              Todas as imagens de lookbook, street casting, bastidores e editoriais com links diretos permanentes para incorporação rápida em HTML ou documentação técnica.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#5f5e5a] hover:text-black hover:bg-[#f2f0eb] transition-colors cursor-pointer shrink-0 ml-4 border border-black/[0.1]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Guia Rápido de Uso no HTML */}
        <div className="px-6 sm:px-8 py-3 bg-[#f2f0eb] border-b border-black/[0.12] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#444748]">
          <div className="flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5 text-black shrink-0" />
            <span className="text-[10.5px]">
              FORMATO HTML: &lt;img src="URL_DIRETO" alt="Descrição" /&gt;
            </span>
          </div>
          <span className="text-[9.5px] uppercase tracking-wider text-black font-bold">
            [URLS PÚBLICOS DE ALTA RESOLUÇÃO]
          </span>
        </div>

        {/* Filtros de Categoria */}
        <div className="px-6 sm:px-8 py-3 bg-white border-b border-black/[0.12] flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-3 py-1.5 text-[9.5px] uppercase tracking-[0.16em] cursor-pointer transition-colors whitespace-nowrap border ${
                activeCategory === c.id
                  ? 'bg-black text-white border-black font-bold'
                  : 'bg-[#f2f0eb] text-[#5f5e5a] border-black/[0.08] hover:text-black hover:border-black/30'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Lista de Imagens */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredImages.map((img) => (
              <div
                key={img.id}
                className="p-4 bg-white border border-black/[0.12] flex gap-4 items-start group hover:border-black transition-all relative"
              >
                <div className="absolute top-1 right-1 text-[7px] text-black/20 select-none">+</div>
                {/* Miniatura */}
                <div className="w-24 h-28 bg-[#e6e4df] shrink-0 overflow-hidden relative border border-black/[0.08]">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-1 right-1 bg-black/85 text-white text-[8px] uppercase tracking-widest px-1 py-0.2 font-mono-tech">
                    {img.aspectRatio}
                  </span>
                </div>

                {/* Conteúdo & Ações */}
                <div className="flex-1 min-w-0 space-y-2">
                  <div>
                    <span className="text-[8.5px] uppercase tracking-[0.18em] text-[#5f5e5a] block font-bold">
                      [{img.category}]
                    </span>
                    <h4 className="font-display-street text-sm uppercase text-black font-semibold truncate">
                      {img.title}
                    </h4>
                    <p className="text-[10.5px] font-sans-editorial text-[#5f5e5a] line-clamp-1">
                      {img.description}
                    </p>
                  </div>

                  {/* Campo com o link direto */}
                  <div className="flex items-center gap-1 bg-[#f2f0eb] px-2 py-1 border border-black/[0.12]">
                    <LinkIcon className="w-3 h-3 text-[#5f5e5a] shrink-0" />
                    <input
                      readOnly
                      value={img.url}
                      className="bg-transparent text-[9.5px] font-mono-tech text-[#5f5e5a] w-full focus:outline-none truncate selection:bg-black selection:text-white"
                      title={img.url}
                    />
                  </div>

                  {/* Botões de Ação */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => copyUrl(img.id, img.url)}
                      className="px-2.5 py-1.5 bg-black hover:bg-neutral-800 text-white text-[9px] uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer font-bold"
                    >
                      {copiedId === img.id ? (
                        <>
                          <Check className="w-3 h-3 text-white" />
                          <span>COPIADO!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>COPIAR LINK</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => copyHtmlTag(img.id, img.url, img.title)}
                      className="px-2.5 py-1.5 bg-[#f2f0eb] hover:bg-black hover:text-white text-black border border-black/[0.12] text-[9px] uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer font-bold"
                    >
                      {copiedTagId === img.id ? (
                        <>
                          <Check className="w-3 h-3 text-black" />
                          <span>TAG COPIADA!</span>
                        </>
                      ) : (
                        <>
                          <Code2 className="w-3 h-3" />
                          <span>TAG HTML</span>
                        </>
                      )}
                    </button>

                    <a
                      href={img.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-[#5f5e5a] hover:text-black hover:bg-[#f2f0eb] border border-black/[0.08] transition-colors"
                      title="Abrir imagem em nova aba"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rodapé do Modal */}
        <div className="p-4 sm:p-6 border-t border-black/[0.12] bg-white flex items-center justify-between">
          <p className="text-[10.5px] text-[#5f5e5a]">
            TOTAL DE <strong className="text-black font-bold">{DIRECT_IMAGES.length}</strong> IMAGENS COM LINKS DIRETOS PARA INCORPORAÇÃO.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-black text-white text-[10px] uppercase tracking-[0.18em] hover:bg-neutral-800 transition-colors cursor-pointer font-bold"
          >
            [FECHAR]
          </button>
        </div>
      </div>
    </div>
  );
};
