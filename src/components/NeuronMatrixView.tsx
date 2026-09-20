import React, { useState } from 'react';
import { neuronPartsData, matrixCellsData } from '../data/neuroData';
import { MatrixCell } from '../types';
import { Microscope, Grid, CheckCircle, Info, Sparkles, Layers, ArrowRight } from 'lucide-react';

export const NeuronMatrixView: React.FC = () => {
  const [selectedNeuronPart, setSelectedNeuronPart] = useState<string>('soma');
  const [selectedMatrixCell, setSelectedMatrixCell] = useState<MatrixCell>(matrixCellsData[0]);

  const activeNeuron = neuronPartsData.find(p => p.id === selectedNeuronPart) || neuronPartsData[0];

  return (
    <div id="view-neuron-matrix" className="space-y-8">
      {/* SECTION 1: Anatomía de la Neurona (Matching Image 2) */}
      <section className="bg-white rounded-2xl border border-[#d4cbc2] p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#d4cbc2]/60 pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-[#205b76] text-xs font-bold uppercase tracking-wider mb-1">
              <Microscope className="w-4 h-4 text-[#205b76]" />
              <span>Citología y Estructura</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#292420]">
              La Neurona y sus Componentes
            </h2>
            <p className="text-xs sm:text-sm text-[#49423c] mt-1">
              Identificación de las 6 partes principales según el esquema de clase.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Interactive SVG Diagram replicating Image 2 */}
          <div className="lg:col-span-7 bg-[#fbf8f3] rounded-2xl p-6 border-2 border-[#e7ded3] shadow-inner flex flex-col items-center justify-center relative">
            <div className="text-[11px] font-bold text-[#787169] uppercase tracking-wider mb-2 self-start">
              Diagrama Celular de la Neurona
            </div>

            <svg viewBox="0 0 420 540" className="w-full max-w-sm h-auto select-none drop-shadow-sm">
              <defs>
                <radialGradient id="somaGradient" cx="45%" cy="40%" r="55%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="60%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </radialGradient>
                <radialGradient id="nucleusGradient" cx="40%" cy="40%" r="50%">
                  <stop offset="0%" stopColor="#6ee7b7" />
                  <stop offset="100%" stopColor="#10b981" />
                </radialGradient>
                <linearGradient id="myelinGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#bfdbfe" />
                  <stop offset="50%" stopColor="#dbeafe" />
                  <stop offset="100%" stopColor="#93c5fd" />
                </linearGradient>
              </defs>

              {/* DENDRITES (Branching tree at top) */}
              <g
                className="cursor-pointer transition-opacity hover:opacity-80"
                onClick={() => setSelectedNeuronPart('dendritas')}
              >
                {/* Upper left branches */}
                <path d="M 180,120 Q 130,70 100,50 Q 80,40 60,30" stroke="#1e293b" strokeWidth="2.5" fill="none" />
                <path d="M 130,70 Q 110,40 115,20" stroke="#1e293b" strokeWidth="2" fill="none" />
                <path d="M 150,90 Q 140,50 150,25" stroke="#1e293b" strokeWidth="2" fill="none" />
                {/* Upper center branches */}
                <path d="M 210,110 Q 220,50 240,20" stroke="#1e293b" strokeWidth="2.5" fill="none" />
                <path d="M 220,60 Q 200,30 190,15" stroke="#1e293b" strokeWidth="2" fill="none" />
                {/* Upper right branches */}
                <path d="M 240,130 Q 300,70 340,50 Q 370,40 380,25" stroke="#1e293b" strokeWidth="2.5" fill="none" />
                <path d="M 300,80 Q 320,50 315,30" stroke="#1e293b" strokeWidth="2" fill="none" />
                {/* Lateral left branches */}
                <path d="M 150,160 Q 90,140 60,150 Q 40,160 30,140" stroke="#1e293b" strokeWidth="2.5" fill="none" />
                <path d="M 90,140 Q 80,110 60,95" stroke="#1e293b" strokeWidth="2" fill="none" />
                {/* Lateral right branches */}
                <path d="M 270,180 Q 340,160 370,180 Q 390,195 400,180" stroke="#1e293b" strokeWidth="2.5" fill="none" />
                <path d="M 330,165 Q 350,130 370,120" stroke="#1e293b" strokeWidth="2" fill="none" />
              </g>

              {/* SOMA (Cell body) */}
              <g
                className="cursor-pointer transition-transform hover:scale-[1.02] origin-center"
                onClick={() => setSelectedNeuronPart('soma')}
              >
                <path
                  d="M 210,110 C 250,115 280,140 275,180 C 270,220 230,235 220,245 C 205,245 170,225 155,190 C 145,150 170,115 210,110 Z"
                  fill="url(#somaGradient)"
                  stroke="#1d4ed8"
                  strokeWidth="3"
                />
              </g>

              {/* NUCLEUS (In the center of soma) */}
              <g
                className="cursor-pointer transition-transform hover:scale-110 origin-center"
                onClick={() => setSelectedNeuronPart('nucleo')}
              >
                <ellipse
                  cx="215"
                  cy="170"
                  rx="22"
                  ry="26"
                  fill="url(#nucleusGradient)"
                  stroke="#047857"
                  strokeWidth="2.5"
                />
              </g>

              {/* AXON (Central line going down) */}
              <g
                className="cursor-pointer"
                onClick={() => setSelectedNeuronPart('axon')}
              >
                <path
                  d="M 218,245 Q 280,310 230,420"
                  stroke="#0284c7"
                  strokeWidth="6"
                  fill="none"
                />
              </g>

              {/* MYELIN SHEATHS (Beads around axon) */}
              <g
                className="cursor-pointer"
                onClick={() => setSelectedNeuronPart('mielina')}
              >
                <rect x="235" y="245" width="22" height="32" rx="10" fill="url(#myelinGradient)" stroke="#0284c7" strokeWidth="2" transform="rotate(15 246 261)" />
                <rect x="250" y="280" width="22" height="32" rx="10" fill="url(#myelinGradient)" stroke="#0284c7" strokeWidth="2" transform="rotate(20 261 296)" />
                <rect x="258" y="315" width="22" height="32" rx="10" fill="url(#myelinGradient)" stroke="#0284c7" strokeWidth="2" transform="rotate(12 269 331)" />
                <rect x="255" y="350" width="22" height="32" rx="10" fill="url(#myelinGradient)" stroke="#0284c7" strokeWidth="2" transform="rotate(-5 266 366)" />
                <rect x="240" y="385" width="22" height="32" rx="10" fill="url(#myelinGradient)" stroke="#0284c7" strokeWidth="2" transform="rotate(-18 251 401)" />
              </g>

              {/* SYNAPSIS (Terminal arborization at bottom) */}
              <g
                className="cursor-pointer transition-opacity hover:opacity-80"
                onClick={() => setSelectedNeuronPart('sinapsis')}
              >
                <path d="M 215,425 Q 180,455 140,480 Q 120,490 105,510" stroke="#0284c7" strokeWidth="3" fill="none" />
                <path d="M 180,455 Q 160,490 145,520" stroke="#0284c7" strokeWidth="2.5" fill="none" />
                <path d="M 215,425 Q 210,470 200,525" stroke="#0284c7" strokeWidth="3" fill="none" />
                <path d="M 215,425 Q 245,465 265,515" stroke="#0284c7" strokeWidth="3" fill="none" />
                <path d="M 245,465 Q 275,480 300,505" stroke="#0284c7" strokeWidth="2.5" fill="none" />
              </g>

              {/* TEXT LABELS & LEADER LINES (Exact matches to Image 2) */}
              {/* Las dendritas */}
              <line x1="85" y1="35" x2="115" y2="45" stroke="#1e293b" strokeWidth="1.5" />
              <text x="30" y="32" fill="#0f172a" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Las dendritas</text>

              {/* El núcleo */}
              <line x1="100" y1="180" x2="200" y2="175" stroke="#1e293b" strokeWidth="1.5" />
              <circle cx="200" cy="175" r="3" fill="#1e293b" />
              <text x="20" y="185" fill="#0f172a" fontSize="13" fontWeight="bold" fontFamily="sans-serif">El núcleo</text>

              {/* El soma (cuerpo celular) */}
              <line x1="190" y1="230" x2="200" y2="210" stroke="#1e293b" strokeWidth="1.5" />
              <circle cx="200" cy="210" r="3" fill="#1e293b" />
              <text x="130" y="245" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="sans-serif">El soma</text>
              <text x="110" y="260" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="sans-serif">(cuerpo celular)</text>

              {/* Las capas de mielina */}
              <line x1="170" y1="335" x2="255" y2="335" stroke="#1e293b" strokeWidth="1.5" />
              <circle cx="255" cy="335" r="3" fill="#1e293b" />
              <text x="90" y="330" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Las capas</text>
              <text x="95" y="345" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="sans-serif">de mielina</text>

              {/* El axón */}
              <line x1="285" y1="365" x2="270" y2="360" stroke="#1e293b" strokeWidth="1.5" />
              <text x="290" y="370" fill="#0f172a" fontSize="13" fontWeight="bold" fontFamily="sans-serif">El axón</text>

              {/* La sinapsis */}
              <line x1="75" y1="510" x2="110" y2="505" stroke="#1e293b" strokeWidth="1.5" />
              <text x="15" y="515" fill="#0f172a" fontSize="13" fontWeight="bold" fontFamily="sans-serif">La sinapsis</text>
            </svg>
          </div>

          {/* Right Inspector Box for Neuron Part */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#edf5f0] border border-[#2b553c]/30 rounded-xl p-5 shadow-xs">
              <div className="flex items-center gap-2 text-[#2b553c] text-xs font-bold uppercase tracking-wider mb-2">
                <CheckCircle className="w-4 h-4 text-[#2b553c]" />
                <span>Elemento Seleccionado</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-[#292420]">
                {activeNeuron.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#49423c] mt-2 leading-relaxed">
                {activeNeuron.description}
              </p>
              <div className="mt-3 p-3 bg-white rounded-lg border border-[#2b553c]/20 text-xs text-[#2b553c] font-medium">
                <strong>Clave de clase:</strong> {activeNeuron.examHighlight}
              </div>
            </div>

            {/* Sustancia Gris vs Sustancia Blanca (Textual Notes) */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-[#d4cbc2] bg-[#fbf8f5]">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-serif font-bold text-sm text-[#292420]">
                    Sustancia Gris (SG)
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#944920]/10 text-[#944920]">
                    Definición
                  </span>
                </div>
                <p className="text-xs text-[#49423c]">
                  <strong>Concentración de cuerpos neuronales</strong> (somas con sus núcleos celulares).
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#d4cbc2] bg-[#fbf8f5]">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-serif font-bold text-sm text-[#292420]">
                    Sustancia Blanca (SB)
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#205b76]/10 text-[#205b76]">
                    Definición
                  </span>
                </div>
                <p className="text-xs text-[#49423c]">
                  <strong>Concentración de somas y axones</strong> (definición textual estricta de la clase).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Terminología Básica - Matriz 2x2 (Exact match to Image 3 Excalidraw) */}
      <section className="bg-white rounded-2xl border border-[#d4cbc2] p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#d4cbc2]/60 pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-[#944920] text-xs font-bold uppercase tracking-wider mb-1">
              <Grid className="w-4 h-4 text-[#944920]" />
              <span>Matriz Terminológica 2x2</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#292420]">
              Terminología Básica: SG / SB × SNC / SNP
            </h2>
            <p className="text-xs sm:text-sm text-[#49423c] mt-1">
              Fiel reflejo del diagrama manuscrito en Excalidraw de la clase.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Excalidraw Visual Replica (Handwritten Style Grid) */}
          <div className="lg:col-span-7 bg-[#faf6f0] p-6 rounded-2xl border-2 border-[#d4cbc2] shadow-inner font-serif">
            <div className="text-center text-xs font-mono text-[#787169] mb-4">
              Esquema de Clasificación de Estructuras Nerviosas
            </div>

            {/* Matrix Container styled like the hand-drawn sketch */}
            <div className="max-w-md mx-auto">
              {/* Column Headers: SG and SB */}
              <div className="grid grid-cols-12 mb-2 text-center">
                <div className="col-span-3"></div>
                <div className="col-span-4 text-xl sm:text-2xl font-bold text-[#292420] tracking-wide">
                  SG
                </div>
                <div className="col-span-5 text-xl sm:text-2xl font-bold text-[#292420] tracking-wide">
                  SB
                </div>
              </div>

              {/* The 2x2 Grid with Rounded Hand-drawn border */}
              <div className="border-4 border-[#231f1c] rounded-3xl overflow-hidden bg-white shadow-md divide-y-4 divide-[#231f1c]">
                {/* Row 1: SNC */}
                <div className="grid grid-cols-12 min-h-[110px] items-stretch">
                  {/* Row Header: SNC */}
                  <div className="col-span-3 border-r-4 border-[#231f1c] bg-[#fbf8f5] flex items-center justify-center p-2 text-xl sm:text-2xl font-bold text-[#292420]">
                    SNC
                  </div>
                  {/* Cell: SNC + SG -> Nucleos */}
                  <button
                    onClick={() => setSelectedMatrixCell(matrixCellsData[0])}
                    className={`col-span-4 border-r-4 border-[#231f1c] p-3 flex flex-col items-center justify-center text-center transition cursor-pointer hover:bg-amber-50/60 ${
                      selectedMatrixCell.system === 'SNC' && selectedMatrixCell.tissue === 'SG'
                        ? 'bg-amber-100/70 ring-2 ring-inset ring-[#944920]'
                        : ''
                    }`}
                  >
                    <span className="text-lg sm:text-xl font-bold text-[#292420] tracking-tight">
                      Núcleos
                    </span>
                    <span className="text-[10px] text-[#787169] font-sans mt-0.5">SNC + SG</span>
                  </button>
                  {/* Cell: SNC + SB -> Fascículo / Tracto / Vía o AS */}
                  <button
                    onClick={() => setSelectedMatrixCell(matrixCellsData[1])}
                    className={`col-span-5 p-3 flex flex-col items-center justify-center text-center transition cursor-pointer hover:bg-amber-50/60 ${
                      selectedMatrixCell.system === 'SNC' && selectedMatrixCell.tissue === 'SB'
                        ? 'bg-amber-100/70 ring-2 ring-inset ring-[#944920]'
                        : ''
                    }`}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#292420] leading-tight">
                      Fascículo
                    </span>
                    <span className="text-sm font-semibold text-[#292420]">
                      Tracto
                    </span>
                    <span className="text-xs text-[#49423c]">
                      Vía o AS
                    </span>
                    <span className="text-[10px] text-[#787169] font-sans mt-0.5">SNC + SB</span>
                  </button>
                </div>

                {/* Row 2: SNP */}
                <div className="grid grid-cols-12 min-h-[110px] items-stretch">
                  {/* Row Header: SNP */}
                  <div className="col-span-3 border-r-4 border-[#231f1c] bg-[#fbf8f5] flex items-center justify-center p-2 text-xl sm:text-2xl font-bold text-[#292420]">
                    SNP
                  </div>
                  {/* Cell: SNP + SG -> Ganglios */}
                  <button
                    onClick={() => setSelectedMatrixCell(matrixCellsData[2])}
                    className={`col-span-4 border-r-4 border-[#231f1c] p-3 flex flex-col items-center justify-center text-center transition cursor-pointer hover:bg-amber-50/60 ${
                      selectedMatrixCell.system === 'SNP' && selectedMatrixCell.tissue === 'SG'
                        ? 'bg-amber-100/70 ring-2 ring-inset ring-[#944920]'
                        : ''
                    }`}
                  >
                    <span className="text-lg sm:text-xl font-bold text-[#292420] tracking-tight">
                      Ganglios
                    </span>
                    <span className="text-[10px] text-[#787169] font-sans mt-0.5">SNP + SG</span>
                  </button>
                  {/* Cell: SNP + SB -> Nervios */}
                  <button
                    onClick={() => setSelectedMatrixCell(matrixCellsData[3])}
                    className={`col-span-5 p-3 flex flex-col items-center justify-center text-center transition cursor-pointer hover:bg-amber-50/60 ${
                      selectedMatrixCell.system === 'SNP' && selectedMatrixCell.tissue === 'SB'
                        ? 'bg-amber-100/70 ring-2 ring-inset ring-[#944920]'
                        : ''
                    }`}
                  >
                    <span className="text-lg sm:text-2xl font-bold text-[#292420] tracking-tight">
                      Nervios
                    </span>
                    <span className="text-[10px] text-[#787169] font-sans mt-0.5">SNP + SB</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center text-xs text-[#787169] mt-4 font-sans italic">
              Haz clic en cualquiera de los 4 cuadrantes para ver su análisis detallado.
            </div>
          </div>

          {/* Matrix Cell Focus Dossier */}
          <div className="lg:col-span-5 bg-white border border-[#d4cbc2] rounded-xl p-5 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#d4cbc2]/60 pb-3 mb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#944920]">
                  {selectedMatrixCell.system === 'SNC' ? 'Sistema Nervioso Central' : 'Sistema Nervioso Periférico'} • {selectedMatrixCell.tissue === 'SG' ? 'Sustancia Gris' : 'Sustancia Blanca'}
                </span>
                <h3 className="text-xl font-bold font-serif text-[#292420] mt-1">
                  {selectedMatrixCell.structure}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-lg bg-[#faf5ee] border border-[#d4cbc2] flex items-center justify-center text-[#944920] font-bold">
                {selectedMatrixCell.system}
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="text-xs font-bold text-[#787169] uppercase tracking-wider mb-1">
                  Definición precisa:
                </h4>
                <p className="text-sm text-[#231f1c] leading-relaxed">
                  {selectedMatrixCell.definition}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#787169] uppercase tracking-wider mb-1">
                  Significado anatómico:
                </h4>
                <p className="text-xs text-[#49423c] leading-relaxed">
                  {selectedMatrixCell.description}
                </p>
              </div>

              <div className="p-3 bg-[#fef7e6] border border-amber-300 rounded-lg text-xs text-amber-950 mt-4">
                <strong>Clave mnemotécnica de examen:</strong>
                <p className="mt-1">
                  • Cuerpos en SNC = <strong>Núcleos</strong><br />
                  • Vías en SNC = <strong>Fascículo / Tracto / Vía o AS</strong><br />
                  • Cuerpos en SNP = <strong>Ganglios</strong><br />
                  • Vías en SNP = <strong>Nervios</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
