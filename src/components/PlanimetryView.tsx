import React, { useState } from 'react';
import { planesData, quadTermsData, lobesAndFissuresData } from '../data/neuroData';
import { PlaneItem, QuadOrientationTerm } from '../types';
import { Compass, Split, Eye, Layers, Brain, CheckCircle2, Pin, ArrowRightLeft, Sparkles } from 'lucide-react';

export const PlanimetryView: React.FC = () => {
  const [selectedPlane, setSelectedPlane] = useState<PlaneItem>(planesData[0]);
  const [selectedQuadTerm, setSelectedQuadTerm] = useState<QuadOrientationTerm>(quadTermsData[0]);
  const [selectedLobe, setSelectedLobe] = useState<string>('Lóbulo Frontal');
  const [selectedFissure, setSelectedFissure] = useState<string>('Surco Central de Rolando');

  return (
    <div id="view-planimetry" className="space-y-8">
      {/* SECTION 1: Cortes y Vistas de Planimetría */}
      <section className="bg-white rounded-2xl border border-[#d4cbc2] p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#d4cbc2]/60 pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-[#2b553c] text-xs font-bold uppercase tracking-wider mb-1">
              <Split className="w-4 h-4 text-[#2b553c]" />
              <span>Planimetría Anatómica</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#292420]">
              Cortes y Vistas Cerebrales
            </h2>
            <p className="text-xs sm:text-sm text-[#49423c] mt-1">
              Planos fundamentales para seccionar y estudiar la anatomía del encéfalo.
            </p>
          </div>
        </div>

        {/* Interactive Plane Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {planesData.map((plane) => {
            const isSelected = selectedPlane.id === plane.id;
            return (
              <button
                key={plane.id}
                onClick={() => setSelectedPlane(plane)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#edf5f0] border-[#2b553c] shadow-md ring-1 ring-[#2b553c]'
                    : 'bg-[#fbf8f5] border-[#d4cbc2] hover:bg-[#f5efe9] hover:border-[#b8aba0]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: plane.color }}
                  />
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/80 border border-[#d4cbc2]/60 text-[#49423c]">
                    {plane.axis}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-base text-[#292420]">
                  {plane.name}
                </h3>
                <p className="text-xs text-[#49423c] mt-2 leading-relaxed">
                  {plane.definition}
                </p>
              </button>
            );
          })}
        </div>

        {/* Visual Plane Diagram & Active Details */}
        <div className="bg-[#fbf8f3] rounded-xl border border-[#d4cbc2] p-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual SVG Schema */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-[#e8dfd4] shadow-inner relative overflow-hidden">
              <div className="text-[11px] font-bold text-[#787169] uppercase tracking-wider mb-2 self-start">
                Esquema Geométrico de Sección
              </div>
              <svg viewBox="0 0 340 220" className="w-full max-w-xs h-48 drop-shadow-sm">
                {/* Brain silhouette representation */}
                <ellipse cx="170" cy="115" rx="125" ry="75" fill="#fdfbf7" stroke="#8c7e72" strokeWidth="2.5" />
                <path d="M 60,115 C 80,60 140,55 170,55 C 220,55 280,75 285,115 C 285,160 210,180 170,180 C 120,180 60,160 60,115 Z" fill="#f5ede4" opacity="0.6" />
                
                {/* Sulcus representation */}
                <path d="M 160,60 Q 155,95 145,130" stroke="#b0a294" strokeWidth="2" strokeDasharray="3 3" fill="none" />
                <path d="M 120,125 Q 180,120 250,135" stroke="#b0a294" strokeWidth="2" strokeDasharray="3 3" fill="none" />

                {/* Dynamic Slice Line for Selected Plane */}
                {selectedPlane.id === 'sagital' && (
                  <g>
                    <line x1="170" y1="20" x2="170" y2="200" stroke="#2b553c" strokeWidth="4" strokeDasharray="6 4" />
                    <rect x="160" y="20" width="20" height="180" fill="#2b553c" fillOpacity="0.15" />
                    <text x="175" y="35" fill="#2b553c" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Línea media (Sagital)</text>
                    <text x="75" y="115" fill="#49423c" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Mitad Izquierda</text>
                    <text x="210" y="115" fill="#49423c" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Mitad Derecha</text>
                  </g>
                )}

                {selectedPlane.id === 'parasagital' && (
                  <g>
                    <line x1="170" y1="20" x2="170" y2="200" stroke="#d4cbc2" strokeWidth="2" strokeDasharray="4 3" />
                    <line x1="220" y1="20" x2="220" y2="200" stroke="#436d53" strokeWidth="4" strokeDasharray="6 4" />
                    <rect x="210" y="20" width="20" height="180" fill="#436d53" fillOpacity="0.2" />
                    <text x="70" y="35" fill="#787169" fontSize="10" fontFamily="sans-serif">Línea media</text>
                    <text x="180" y="195" fill="#436d53" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Paralelo a la media (Parasagital)</text>
                  </g>
                )}

                {selectedPlane.id === 'coronal' && (
                  <g>
                    <ellipse cx="170" cy="115" rx="35" ry="75" fill="#944920" fillOpacity="0.18" stroke="#944920" strokeWidth="3" />
                    <line x1="170" y1="20" x2="170" y2="210" stroke="#944920" strokeWidth="3" />
                    <text x="70" y="115" fill="#944920" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Anterior (Frontal)</text>
                    <text x="215" y="115" fill="#944920" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Posterior</text>
                  </g>
                )}

                {selectedPlane.id === 'transversal' && (
                  <g>
                    <line x1="30" y1="115" x2="310" y2="115" stroke="#205b76" strokeWidth="4" strokeDasharray="6 4" />
                    <rect x="30" y="105" width="280" height="20" fill="#205b76" fillOpacity="0.18" />
                    <text x="120" y="80" fill="#205b76" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Dorsal (Arriba)</text>
                    <text x="120" y="150" fill="#205b76" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Ventral (Abajo)</text>
                  </g>
                )}
              </svg>
            </div>

            {/* Explanatory detail box */}
            <div className="lg:col-span-6 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#2b553c]/10 text-[#2b553c]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Plano Activo: {selectedPlane.name}</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-[#292420]">
                {selectedPlane.name}
              </h3>
              <p className="text-sm text-[#49423c] leading-relaxed">
                <strong>Definición del apunte:</strong> {selectedPlane.definition}
              </p>
              {selectedPlane.note && (
                <div className="p-3 bg-[#fef7e6] border border-amber-300 rounded-lg text-xs text-amber-950 flex items-start gap-2">
                  <Pin className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Nota de clase:</span>
                    <span>{selectedPlane.note}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Terminología de Ubicación en Individuos Cuadrúpedos */}
      <section className="bg-white rounded-2xl border border-[#d4cbc2] p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#d4cbc2]/60 pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-[#944920] text-xs font-bold uppercase tracking-wider mb-1">
              <Compass className="w-4 h-4 text-[#944920]" />
              <span>Ejes Anatómicos</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#292420]">
              Terminología de Ubicación en Cuadrúpedos
            </h2>
            <p className="text-xs sm:text-sm text-[#49423c] mt-1">
              Términos de orientación estandarizados para individuos cuadrúpedos y su correspondencia espacial.
            </p>
          </div>
        </div>

        {/* 8 Terms Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {quadTermsData.map((item) => {
            const isSelected = selectedQuadTerm.term === item.term;
            return (
              <button
                key={item.term}
                onClick={() => setSelectedQuadTerm(item)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#2b553c] text-white border-[#2b553c] shadow-md ring-2 ring-[#2b553c]/30'
                    : 'bg-[#fbf8f5] text-[#292420] border-[#d4cbc2] hover:bg-[#f5efe9]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-base font-bold font-serif ${isSelected ? 'text-white' : 'text-[#292420]'}`}>
                    {item.term}
                  </span>
                  <ArrowRightLeft className={`w-3.5 h-3.5 ${isSelected ? 'text-white/80' : 'text-[#787169]'}`} />
                </div>
                <div className={`text-sm font-semibold mt-1 ${isSelected ? 'text-[#ffb692]' : 'text-[#944920]'}`}>
                  {item.meaning}
                </div>
              </button>
            );
          })}
        </div>

        {/* Focus Detail on Quadruped Opposites */}
        <div className="bg-[#faf5ee] border border-[#e3d7c7] rounded-xl p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#944920] block mb-1">
                Eje Activo Seleccionado
              </span>
              <h4 className="text-lg font-bold font-serif text-[#292420]">
                {selectedQuadTerm.term} = {selectedQuadTerm.meaning}
              </h4>
              <p className="text-xs sm:text-sm text-[#49423c] mt-1">
                {selectedQuadTerm.example}
              </p>
            </div>
            {selectedQuadTerm.opposite && (
              <div className="bg-white px-4 py-3 rounded-lg border border-[#d4cbc2] shadow-xs text-xs">
                <span className="text-[#787169] block font-semibold">Término Opuesto:</span>
                <span className="text-sm font-bold text-[#2b553c]">{selectedQuadTerm.opposite}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 3: Cisuras Importantes y Lóbulos Cerebrales (Matching Image 1) */}
      <section className="bg-white rounded-2xl border border-[#d4cbc2] p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#d4cbc2]/60 pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-[#2b553c] text-xs font-bold uppercase tracking-wider mb-1">
              <Brain className="w-4 h-4 text-[#2b553c]" />
              <span>Anatomía Cortical</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#292420]">
              Cisuras Importantes y Lóbulos Cerebrales
            </h2>
            <p className="text-xs sm:text-sm text-[#49423c] mt-1">
              Esquema fiel al diagrama de clase: Surco Central de Rolando, Surco Lateral de Silvio y los 4 lóbulos.
            </p>
          </div>
        </div>

        {/* Diagram Area + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* SVG Interactive Brain Map replicating Image 1 */}
          <div className="lg:col-span-7 bg-[#2e1065]/90 rounded-2xl p-6 border-2 border-[#4c1d95] shadow-lg flex flex-col items-center relative overflow-hidden">
            <div className="w-full flex items-center justify-between text-xs text-purple-200 mb-2 font-mono">
              <span>Vista Lateral de Hemisferio Cerebral</span>
              <span className="bg-purple-900/80 px-2 py-0.5 rounded text-[10px] text-purple-100">Interactiva</span>
            </div>

            {/* SVG Brain */}
            <svg viewBox="0 0 540 400" className="w-full max-w-lg h-auto select-none">
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.4" />
                </filter>
              </defs>

              {/* LÓBULO FRONTAL (Green) */}
              <path
                d="M 270,110 C 250,95 210,95 150,120 C 100,145 70,190 70,230 C 70,275 100,305 155,305 C 190,305 210,295 240,270 C 235,225 245,160 270,110 Z"
                fill="#16a34a"
                stroke="#15803d"
                strokeWidth="3"
                className="cursor-pointer transition-all hover:opacity-90"
                onClick={() => setSelectedLobe('Lóbulo Frontal')}
                filter="url(#glow)"
              />

              {/* LÓBULO PARIETAL (Pink/Salmon) */}
              <path
                d="M 270,110 C 310,115 355,135 390,170 C 410,195 405,230 380,260 C 320,250 270,265 240,270 C 245,220 255,160 270,110 Z"
                fill="#f472b6"
                stroke="#db2777"
                strokeWidth="3"
                className="cursor-pointer transition-all hover:opacity-90"
                onClick={() => setSelectedLobe('Lóbulo Parietal')}
                filter="url(#glow)"
              />

              {/* LÓBULO OCCIPITAL (Yellow) */}
              <path
                d="M 390,170 C 425,205 440,245 440,285 C 440,325 410,350 365,355 C 360,325 365,295 380,260 C 405,230 405,195 390,170 Z"
                fill="#eab308"
                stroke="#ca8a04"
                strokeWidth="3"
                className="cursor-pointer transition-all hover:opacity-90"
                onClick={() => setSelectedLobe('Lóbulo Occipital')}
                filter="url(#glow)"
              />

              {/* LÓBULO TEMPORAL (Purple/Magenta) */}
              <path
                d="M 240,270 C 270,265 320,250 380,260 C 365,295 360,325 365,355 C 320,365 240,365 170,355 C 150,335 155,305 185,285 C 205,275 220,270 240,270 Z"
                fill="#ec4899"
                stroke="#be185d"
                strokeWidth="3"
                className="cursor-pointer transition-all hover:opacity-90"
                onClick={() => setSelectedLobe('Lóbulo Temporal')}
                filter="url(#glow)"
              />

              {/* SURCO CENTRAL (ROLANDO) - Highlight line */}
              <path
                d="M 270,110 Q 255,185 240,270"
                stroke="#ffffff"
                strokeWidth="4"
                strokeDasharray="4 2"
                fill="none"
                className="cursor-pointer hover:stroke-amber-300"
                onClick={() => setSelectedFissure('Surco Central de Rolando')}
              />

              {/* SURCO LATERAL (SILVIO) - Highlight line */}
              <path
                d="M 185,285 Q 240,270 380,260"
                stroke="#ffffff"
                strokeWidth="4"
                fill="none"
                className="cursor-pointer hover:stroke-amber-300"
                onClick={() => setSelectedFissure('Surco Lateral de Silvio')}
              />

              {/* Labels with connecting lines matching original class diagram */}
              {/* LÓBULO FRONTAL */}
              <line x1="140" y1="90" x2="160" y2="150" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="160" cy="150" r="4" fill="#ffffff" />
              <text x="60" y="85" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                LÓBULO FRONTAL
              </text>

              {/* SURCO CENTRAL (ROLANDO) */}
              <line x1="280" y1="60" x2="260" y2="150" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="260" cy="150" r="4" fill="#ffffff" />
              <text x="180" y="55" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                SURCO CENTRAL (ROLANDO)
              </text>

              {/* LÓBULO PARIETAL */}
              <line x1="390" y1="95" x2="330" y2="160" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="330" cy="160" r="4" fill="#ffffff" />
              <text x="370" y="90" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                LÓBULO PARIETAL
              </text>

              {/* LÓBULO OCCIPITAL */}
              <line x1="440" y1="360" x2="400" y2="290" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="400" cy="290" r="4" fill="#ffffff" />
              <text x="380" y="380" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                LÓBULO OCCIPITAL
              </text>

              {/* SURCO LATERAL (SILVIO) */}
              <line x1="260" y1="365" x2="280" y2="265" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="280" cy="265" r="4" fill="#ffffff" />
              <text x="180" y="385" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                SURCO LATERAL (SILVIO)
              </text>

              {/* LÓBULO TEMPORAL */}
              <line x1="90" y1="340" x2="200" y2="320" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="200" cy="320" r="4" fill="#ffffff" />
              <text x="20" y="355" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                LÓBULO TEMPORAL
              </text>
            </svg>

            <div className="mt-3 text-xs text-purple-200 text-center">
              Haz clic en cualquier lóbulo o surco para inspeccionar su definición anatómica exacta.
            </div>
          </div>

          {/* Right Cards: Cisuras & Lóbulos Details */}
          <div className="lg:col-span-5 space-y-4">
            {/* Cisuras Card */}
            <div className="bg-[#fbf8f5] border border-[#d4cbc2] rounded-xl p-4">
              <h3 className="text-base font-bold font-serif text-[#292420] mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#944920]" />
                <span>Cisuras Importantes de Clase</span>
              </h3>
              <div className="space-y-2.5">
                {lobesAndFissuresData.fissures.map((fissure) => {
                  const isSelected = selectedFissure === fissure.name;
                  return (
                    <button
                      key={fissure.name}
                      onClick={() => setSelectedFissure(fissure.name)}
                      className={`w-full text-left p-2.5 rounded-lg border transition cursor-pointer ${
                        isSelected
                          ? 'bg-white border-[#944920] shadow-xs'
                          : 'bg-white/60 border-[#d4cbc2]/60 hover:bg-white'
                      }`}
                    >
                      <div className="font-bold text-xs text-[#292420]">
                        {fissure.name}
                      </div>
                      <div className="text-xs text-[#944920] font-semibold mt-0.5">
                        {fissure.role}
                      </div>
                      <div className="text-[11px] text-[#787169] mt-0.5">
                        {fissure.location}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Lóbulos Card */}
            <div className="bg-[#fbf8f5] border border-[#d4cbc2] rounded-xl p-4">
              <h3 className="text-base font-bold font-serif text-[#292420] mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2b553c]" />
                <span>Los 4 Lóbulos</span>
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {lobesAndFissuresData.lobes.map((lobe) => {
                  const isSelected = selectedLobe === lobe.name;
                  return (
                    <button
                      key={lobe.name}
                      onClick={() => setSelectedLobe(lobe.name)}
                      className={`p-2.5 rounded-lg border text-left transition cursor-pointer ${
                        isSelected
                          ? 'bg-white border-[#2b553c] shadow-xs'
                          : 'bg-white/60 border-[#d4cbc2]/60 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: lobe.colorTag }}
                        />
                        <span className="font-bold text-xs text-[#292420]">
                          {lobe.name}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#787169] mt-1">
                        {lobe.position}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
