import React, { useState } from 'react';
import { Calendar, Download, Send, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';
import { AppointmentForm, CastingInquiryForm } from '../types';

export const AppointmentSection: React.FC = () => {
  // Estado do formulário de Alta-Costura
  const [coutureForm, setCoutureForm] = useState<AppointmentForm>({
    name: '',
    email: '',
    phone: '',
    salon: 'São Paulo — Jardins',
    silhouette: 'Criação Exclusiva Sob Demanda',
    notes: '',
  });
  const [coutureSubmitted, setCoutureSubmitted] = useState<boolean>(false);

  // Estado da mesa de Casting
  const [castingForm, setCastingForm] = useState<CastingInquiryForm>({
    company: '',
    email: '',
    models: '',
    usagePeriod: '',
  });
  const [castingSubmitted, setCastingSubmitted] = useState<boolean>(false);

  const handleCoutureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCoutureSubmitted(true);
    setTimeout(() => {
      setCoutureSubmitted(false);
      setCoutureForm({
        name: '',
        email: '',
        phone: '',
        salon: 'São Paulo — Jardins',
        silhouette: 'Criação Exclusiva Sob Demanda',
        notes: '',
      });
    }, 5000);
  };

  const handleCastingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCastingSubmitted(true);
    setTimeout(() => {
      setCastingSubmitted(false);
      setCastingForm({
        company: '',
        email: '',
        models: '',
        usagePeriod: '',
      });
    }, 5000);
  };

  return (
    <section className="w-full px-6 lg:px-16 py-20 lg:py-28 bg-[#faf9f6] border-t border-black/[0.12]" id="appointment-section">
      {/* Cabeçalho */}
      <div className="max-w-3xl mb-16 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-[1px] bg-black"></span>
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#5f5e5a] font-bold">
            [06 // PRIVATE FITTING &amp; CASTING DESK] &bull; SUNDAYS PROJECT
          </p>
        </div>
        <h2 className="font-display-street text-3xl lg:text-5xl text-black uppercase font-semibold leading-tight tracking-tight">
          AGENDAMENTO DE FITTING &amp; BOOKING DIRETO
        </h2>
        <p className="font-sans-editorial text-sm text-[#444748] leading-relaxed">
          Canais exclusivos dedicados a provas privadas da coleção com linhas finas e à contratação direta de talentos do nosso casting internacional.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Formulário 01: Clientes de Streetwear & Fitting */}
        <div className="lg:col-span-6 bg-white p-8 lg:p-12 border border-black/[0.12] flex flex-col justify-between relative">
          <div className="absolute top-2 left-2 text-[8px] font-mono-tech text-black/30 select-none">+</div>
          <div className="absolute top-2 right-2 text-[8px] font-mono-tech text-black/30 select-none">+</div>

          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-black/[0.12] pb-4 font-mono-tech">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#5f5e5a] font-bold">
                [01 // PRIVATE FITTING LAB]
              </span>
              <span className="flex items-center gap-1 text-[9.5px] uppercase text-black font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-black" />
                ACESSO RESERVADO
              </span>
            </div>

            <h3 className="font-display-street text-2xl lg:text-3xl text-black uppercase font-semibold">
              AGENDAR PROVA NO DESIGN LAB
            </h3>

            <p className="font-sans-editorial text-xs text-[#5f5e5a] leading-relaxed">
              Atendimento presencial reservado com a equipe de modelistas da sundays project em São Paulo (Jardins) ou Paris (Vendôme).
            </p>

            {coutureSubmitted ? (
              <div className="p-6 bg-[#f2f0eb] border border-black/[0.12] text-center space-y-2 my-8 font-mono-tech">
                <CheckCircle2 className="w-7 h-7 text-black mx-auto" />
                <h4 className="font-display-street text-lg uppercase text-black font-bold">SOLICITAÇÃO DE FITTING CONFIRMADA</h4>
                <p className="text-xs text-[#5f5e5a] font-sans-editorial max-w-sm mx-auto leading-relaxed">
                  O concierge técnico da sundays project entrará em contato em até 2 horas para formalizar o horário e as silhuetas reservadas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCoutureSubmit} className="space-y-4 pt-2 font-mono-tech">
                <div>
                  <label className="block text-[9.5px] uppercase tracking-wider text-[#5f5e5a] mb-1 font-bold">
                    NOME COMPLETO
                  </label>
                  <input
                    type="text"
                    required
                    value={coutureForm.name}
                    onChange={(e) => setCoutureForm({ ...coutureForm, name: e.target.value })}
                    placeholder="Ex: Matheus Fontana"
                    className="w-full bg-[#f2f0eb] border border-black/[0.12] px-3.5 py-2.5 text-xs text-black placeholder:text-[#888] focus:outline-none focus:border-black font-sans-editorial"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9.5px] uppercase tracking-wider text-[#5f5e5a] mb-1 font-bold">
                      E-MAIL DE CONTATO
                    </label>
                    <input
                      type="email"
                      required
                      value={coutureForm.email}
                      onChange={(e) => setCoutureForm({ ...coutureForm, email: e.target.value })}
                      placeholder="email@dominio.com"
                      className="w-full bg-[#f2f0eb] border border-black/[0.12] px-3.5 py-2.5 text-xs text-black placeholder:text-[#888] focus:outline-none focus:border-black font-sans-editorial"
                    />
                  </div>
                  <div>
                    <label className="block text-[9.5px] uppercase tracking-wider text-[#5f5e5a] mb-1 font-bold">
                      WHATSAPP / TELEFONE
                    </label>
                    <input
                      type="tel"
                      required
                      value={coutureForm.phone}
                      onChange={(e) => setCoutureForm({ ...coutureForm, phone: e.target.value })}
                      placeholder="+55 (11) 98765-4321"
                      className="w-full bg-[#f2f0eb] border border-black/[0.12] px-3.5 py-2.5 text-xs text-black placeholder:text-[#888] focus:outline-none focus:border-black font-mono-tech"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9.5px] uppercase tracking-wider text-[#5f5e5a] mb-1 font-bold">
                      BASE / SALÃO DE PROVA
                    </label>
                    <select
                      value={coutureForm.salon}
                      onChange={(e) => setCoutureForm({ ...coutureForm, salon: e.target.value })}
                      className="w-full bg-[#f2f0eb] border border-black/[0.12] px-3 py-2.5 text-xs text-black focus:outline-none focus:border-black"
                    >
                      <option value="São Paulo — Jardins">São Paulo — Jardins (Oscar Freire)</option>
                      <option value="Paris — 12 Place Vendôme">Paris — 12 Place Vendôme</option>
                      <option value="Milão — Via Montenapoleone">Milão — Via Montenapoleone</option>
                      <option value="Atendimento em Residência Privada">Atendimento em Residência Privada</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[9.5px] uppercase tracking-wider text-[#5f5e5a] mb-1 font-bold">
                      PEÇA / SILHUETA DO DROP
                    </label>
                    <select
                      value={coutureForm.silhouette}
                      onChange={(e) => setCoutureForm({ ...coutureForm, silhouette: e.target.value })}
                      className="w-full bg-[#f2f0eb] border border-black/[0.12] px-3 py-2.5 text-xs text-black focus:outline-none focus:border-black"
                    >
                      <option value="Blazer Desconstruído Oversized">Blazer Desconstruído Oversized</option>
                      <option value="Jaqueta Técnica Ripstop & Lã">Jaqueta Técnica Ripstop &amp; Lã</option>
                      <option value="Sobretudo Estruturado Minimal">Sobretudo Estruturado Minimal</option>
                      <option value="Conjunto Utilitário Street">Conjunto Utilitário Street</option>
                      <option value="Sob Medida / Peça Custom Lab">Sob Medida / Peça Custom Lab</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[9.5px] uppercase tracking-wider text-[#5f5e5a] mb-1 font-bold">
                    NOTAS ADICIONAIS DE MEDIDAS (OPCIONAL)
                  </label>
                  <textarea
                    rows={3}
                    value={coutureForm.notes}
                    onChange={(e) => setCoutureForm({ ...coutureForm, notes: e.target.value })}
                    placeholder="Especifique datas desejadas, preferência de tecidos ou detalhes para a prova..."
                    className="w-full bg-[#f2f0eb] border border-black/[0.12] p-3 text-xs text-black placeholder:text-[#888] focus:outline-none focus:border-black font-sans-editorial"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white text-[10.5px] uppercase tracking-[0.18em] py-3.5 hover:bg-neutral-800 transition-colors cursor-pointer flex items-center justify-center gap-2 font-bold"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>[SOLICITAR AGENDAMENTO DE FITTING]</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Formulário 02: Produtoras & Diretores de Casting */}
        <div className="lg:col-span-6 bg-white p-8 lg:p-12 border border-black/[0.12] flex flex-col justify-between relative">
          <div className="absolute top-2 left-2 text-[8px] font-mono-tech text-black/30 select-none">+</div>
          <div className="absolute top-2 right-2 text-[8px] font-mono-tech text-black/30 select-none">+</div>

          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-black/[0.12] pb-4 font-mono-tech">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#5f5e5a] font-bold">
                [02 // STREET CASTING DESK]
              </span>
              <span className="text-[9.5px] uppercase text-black font-bold">
                DESK: CASTING@SUNDAYSPROJECT.COM
              </span>
            </div>

            <h3 className="font-display-street text-2xl lg:text-3xl text-black uppercase font-semibold">
              MESA DE CASTING &amp; CONTRATAÇÃO
            </h3>

            <p className="font-sans-editorial text-xs text-[#5f5e5a] leading-relaxed">
              Consulta expressa para contratação de modelos para desfiles, lookbooks de streetwear, campanhas mundiais e editoriais de moda.
            </p>

            {/* Baixar Materiais de Casting */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#f2f0eb] border border-black/[0.12] font-mono-tech">
              <div className="space-y-1">
                <span className="font-display-street text-sm uppercase text-black font-semibold block">
                  LIVRO DIGITAL DE CASTING
                </span>
                <p className="text-[11px] text-[#5f5e5a] font-sans-editorial">
                  Comp-cards em alta resolução com medidas anatômicas completas.
                </p>
                <button
                  onClick={() => alert('Download do Livro Digital de Street Casting FW25 iniciado.')}
                  className="text-[9.5px] uppercase tracking-wider text-black underline font-bold cursor-pointer block pt-1"
                >
                  [BAIXAR COMP-CARDS .ZIP] &rarr;
                </button>
              </div>

              <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-black/[0.12] pt-3 sm:pt-0 sm:pl-4">
                <span className="font-display-street text-sm uppercase text-black font-semibold block">
                  OPÇÃO EXPRESSA (24H)
                </span>
                <p className="text-[11px] text-[#5f5e5a] font-sans-editorial">
                  Retenção de agenda temporária sem custo para aprovação com cliente.
                </p>
                <span className="text-[9.5px] uppercase tracking-wider text-black font-bold block pt-1">
                  RESPOSTA EM ATÉ 2 HORAS
                </span>
              </div>
            </div>

            {castingSubmitted ? (
              <div className="p-6 bg-[#f2f0eb] border border-black/[0.12] text-center space-y-2 my-8 font-mono-tech">
                <CheckCircle2 className="w-7 h-7 text-black mx-auto" />
                <h4 className="font-display-street text-lg uppercase text-black font-bold">CONSULTA TRANSMITIDA</h4>
                <p className="text-xs text-[#5f5e5a] font-sans-editorial max-w-sm mx-auto leading-relaxed">
                  O booker responsável responderá com comp-cards e cotação de cachês em menos de 2 horas úteis.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCastingSubmit} className="space-y-4 pt-2 font-mono-tech">
                <div>
                  <label className="block text-[9.5px] uppercase tracking-wider text-[#5f5e5a] mb-1 font-bold">
                    PRODUTORA OU MARCA
                  </label>
                  <input
                    type="text"
                    required
                    value={castingForm.company}
                    onChange={(e) => setCastingForm({ ...castingForm, company: e.target.value })}
                    placeholder="Ex: Balenciaga / Dazed / Nike Lab"
                    className="w-full bg-[#f2f0eb] border border-black/[0.12] px-3.5 py-2.5 text-xs text-black placeholder:text-[#888] focus:outline-none focus:border-black font-sans-editorial"
                  />
                </div>

                <div>
                  <label className="block text-[9.5px] uppercase tracking-wider text-[#5f5e5a] mb-1 font-bold">
                    E-MAIL CORPORATIVO
                  </label>
                  <input
                    type="email"
                    required
                    value={castingForm.email}
                    onChange={(e) => setCastingForm({ ...castingForm, email: e.target.value })}
                    placeholder="casting@agencia.com"
                    className="w-full bg-[#f2f0eb] border border-black/[0.12] px-3.5 py-2.5 text-xs text-black placeholder:text-[#888] focus:outline-none focus:border-black font-sans-editorial"
                  />
                </div>

                <div>
                  <label className="block text-[9.5px] uppercase tracking-wider text-[#5f5e5a] mb-1 font-bold">
                    MODELOS SELECIONADOS
                  </label>
                  <input
                    type="text"
                    required
                    value={castingForm.models}
                    onChange={(e) => setCastingForm({ ...castingForm, models: e.target.value })}
                    placeholder="Ex: Clara Chen, Mateo Silva, Elena Rostova"
                    className="w-full bg-[#f2f0eb] border border-black/[0.12] px-3.5 py-2.5 text-xs text-black placeholder:text-[#888] focus:outline-none focus:border-black font-sans-editorial"
                  />
                </div>

                <div>
                  <label className="block text-[9.5px] uppercase tracking-wider text-[#5f5e5a] mb-1 font-bold">
                    DIÁRIAS &amp; VEICULAÇÃO
                  </label>
                  <input
                    type="text"
                    required
                    value={castingForm.usagePeriod}
                    onChange={(e) => setCastingForm({ ...castingForm, usagePeriod: e.target.value })}
                    placeholder="Ex: 2 dias de gravação em Paris, digital global por 1 ano"
                    className="w-full bg-[#f2f0eb] border border-black/[0.12] px-3.5 py-2.5 text-xs text-black placeholder:text-[#888] focus:outline-none focus:border-black font-sans-editorial"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white text-[10.5px] uppercase tracking-[0.18em] py-3.5 hover:bg-neutral-800 transition-colors cursor-pointer flex items-center justify-center gap-2 font-bold"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>[CONSULTAR DISPONIBILIDADE DO ELENCO]</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
