import React, { useState } from 'react';
import { flashcardsData } from '../data/neuroData';
import { HelpCircle, Brain, Check, RotateCcw, Pin, MousePointer, Filter } from 'lucide-react';

interface FlashcardsViewProps {
  masteredIds: Set<string>;
  onToggleMastered: (id: string) => void;
  onResetProgress: () => void;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  masteredIds,
  onToggleMastered,
  onResetProgress
}) => {
  const [flippedIds, setFlippedIds] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string>('Todas');

  const categories = ['Todas', ...Array.from(new Set(flashcardsData.map(f => f.category)))];

  const filteredCards = activeCategory === 'Todas'
    ? flashcardsData
    : flashcardsData.filter(f => f.category === activeCategory);

  const handleCardClick = (id: string) => {
    setFlippedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="view-flashcards" className="block space-y-5">
      {/* Deck Controls */}
      <div className="bg-[#fbf8f5] p-4 rounded-xl border border-[#d4cbc2]/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold font-serif text-[#292420]">
            Tarjetas de Repaso y Autoevaluación
          </h2>
          <p className="text-xs sm:text-sm text-[#49423c] mt-0.5">
            Tarjetas basadas en los temas de clase: planimetría, cisuras, neurona, matriz 2x2, meninges y LCR.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-white px-3.5 py-2 rounded-lg border border-[#d4cbc2]">
          <div className="text-center pr-3 border-r border-[#d4cbc2]/60">
            <div className="text-xs text-[#787169]">Total</div>
            <div className="text-base font-bold text-[#292420]">
              {flashcardsData.length}
            </div>
          </div>
          <div className="text-center pr-3 border-r border-[#d4cbc2]/60">
            <div className="text-xs text-emerald-700">Dominadas</div>
            <div className="text-base font-bold text-emerald-700">
              {masteredIds.size}
            </div>
          </div>
          <button
            onClick={onResetProgress}
            className="text-xs text-[#787169] hover:text-[#944920] underline decoration-dotted ml-1 inline-flex items-center gap-1 cursor-pointer"
            title="Reiniciar progreso"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reiniciar</span>
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 flex-wrap">
        <Filter className="w-3.5 h-3.5 text-[#787169] mr-1" />
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#2b553c] text-white shadow-xs'
                : 'bg-[#f5efe9] hover:bg-[#ebe3dc] text-[#49423c]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Flashcards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
        {filteredCards.map((fc, index) => {
          const isMastered = masteredIds.has(fc.id);
          const isFlipped = flippedIds.has(fc.id);

          return (
            <div
              key={fc.id}
              className="perspective-1000 h-80 w-full cursor-pointer select-none"
              onClick={() => handleCardClick(fc.id)}
            >
              <div
                className={`relative w-full h-full transform-style-3d transition-transform duration-500 rounded-2xl shadow-parchment ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* FRONT FACE (QUESTION) */}
                <div
                  className={`absolute inset-0 w-full h-full backface-hidden bg-white rounded-2xl border-2 p-6 flex flex-col justify-between hover:shadow-card-lift transition ${
                    isMastered ? 'border-emerald-500' : 'border-[#d4cbc2]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 border-b border-[#d4cbc2]/40 pb-3">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#f5efe9] text-[#49423c]">
                        {fc.category}
                      </span>
                      <span className="text-[11px] font-mono text-[#787169] font-semibold">
                        Tarjeta {index + 1}
                      </span>
                    </div>

                    <div className="mt-6 text-center px-2">
                      <div className="w-10 h-10 mx-auto rounded-full bg-[#f5efe9] flex items-center justify-center text-[#2b553c] mb-3">
                        <HelpCircle className="w-5 h-5 text-[#2b553c]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-[#292420] leading-snug">
                        {fc.question}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#787169] border-t border-[#d4cbc2]/30 pt-3">
                    <span className="text-[11px] flex items-center gap-1">
                      <MousePointer className="w-3 h-3 text-[#2b553c]" />
                      Haz clic para voltear
                    </span>
                    {isMastered && (
                      <span className="text-emerald-700 font-bold text-xs flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        Dominada
                      </span>
                    )}
                  </div>
                </div>

                {/* BACK FACE (ANSWER & EXAM NOTE) */}
                <div
                  className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[#fbf8f3] rounded-2xl border-2 p-5 flex flex-col justify-between overflow-y-auto ${
                    isMastered ? 'border-emerald-600' : 'border-[#2b553c]/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-[#e3d7c7] pb-2 text-xs">
                      <span className="font-bold text-[#2b553c] flex items-center gap-1.5 font-sans">
                        <Brain className="w-3.5 h-3.5" /> Respuesta de clase
                      </span>
                      <span className="text-[#787169] text-[11px] font-mono font-semibold">{fc.id.toUpperCase()}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#231f1c] leading-relaxed mt-2.5 font-sans">
                      {fc.answer}
                    </p>

                    {/* Highlighted note */}
                    <div className="mt-3 p-2.5 bg-[#fcf2df] border-l-4 border-amber-600 rounded-r text-[11px] text-amber-950 leading-relaxed">
                      <span className="font-bold text-amber-900 block mb-0.5 flex items-center gap-1">
                        <Pin className="w-3 h-3 text-amber-700" />
                        Punto de examen:
                      </span>
                      {fc.examNote}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#e8ded1] flex items-center justify-between gap-2 mt-2 font-sans">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleMastered(fc.id);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 cursor-pointer ${
                        isMastered
                          ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                          : 'bg-[#f5efe9] hover:bg-[#ebe3dc] text-[#231f1c]'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{isMastered ? 'Dominada' : 'Marcar como Dominada'}</span>
                    </button>

                    <span className="text-[10px] text-[#787169] italic">Volver a voltear</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
