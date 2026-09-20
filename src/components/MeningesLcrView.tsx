import React, { useState } from 'react';
import { meningesData, lcrStepsData } from '../data/neuroData';
import { MeningeLayer, LcrStep } from '../types';
import { Shield, Droplets, Waves, CheckCircle2, ChevronRight, ChevronLeft, RotateCcw, AlertCircle, Sparkles } from 'lucide-react';

export const MeningesLcrView: React.FC = () => {
  const [selectedMeninge, setSelectedMeninge] = useState<MeningeLayer>(meningesData[0]);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const currentStep = lcrStepsData[activeStepIndex];

  const handleNextStep = () => {
    setActiveStepIndex(prev => (prev < lcrStepsData.length - 1 ? prev + 1 : 0));
  };

  const handlePrevStep = () => {
    setActiveStepIndex(prev => (prev > 0 ? prev - 1 : lcrStepsData.length - 1));
  };

  return (
    <div id="view-meninges-lcr" className="space-y-8">
      {/* SECTION 1: Las Meninges */}
      <section className="bg-white rounded-2xl border border-[#d4cbc2] p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#d4cbc2]/60 pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-[#6d4304] text-xs font-bold uppercase tracking-wider mb-1">
              <Shield className="w-4 h-4 text-[#6d4304]" />
              <span>Capas Protectoras</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#292420]">
              Las Meninges
            </h2>
            <p className="text-xs sm:text-sm text-[#49423c] mt-1">
              Capas membranosas protectoras: Duramadre, Aracnoides y Piamadre.
            </p>
          </div>

          <div className="p-2.5 bg-[#fef7e6] border border-amber-300 rounded-xl text-xs text-amber-950 font-medium">
            <span className="font-bold block text-amber-900">Nota textual de clase:</span>
            <span>"Son las capas protectoras del SNP"</span>
          </div>
        </div>

        {/* 3 Meninges Interactive Layers Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Anatomical Cross-Section Graphic */}
          <div className="lg:col-span-6 bg-[#faf6f0] p-5 rounded-2xl border border-[#d4cbc2] flex flex-col space-y-3">
            <div className="text-[11px] font-bold text-[#787169] uppercase tracking-wider mb-1">
              Corte Anatómico Estratificado (Del Hueso al Encéfalo)
            </div>

            {/* Bone Layer */}
            <div className="p-3 bg-[#e3d7c7] border-2 border-[#bfae9c] rounded-xl text-center font-serif font-bold text-xs text-[#453729]">
              Hueso Craneal / Vértebra
            </div>

            {/* Duramadre */}
            <button
              onClick={() => setSelectedMeninge(meningesData[0])}
              className={`p-3.5 rounded-xl border-2 transition text-left cursor-pointer ${
                selectedMeninge.name === 'Dura madre'
                  ? 'bg-[#6d4304] text-white border-[#451a03] shadow-md ring-2 ring-[#6d4304]/30'
                  : 'bg-[#faf0e1] border-[#d7be9f] hover:bg-[#f3e5d0] text-[#451a03]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-sm sm:text-base">1. Dura madre</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/15 font-semibold">Externa y Rígida</span>
              </div>
              <p className="text-xs mt-1 opacity-90">Adherida directamente al hueso</p>
            </button>

            {/* Aracnoides */}
            <button
              onClick={() => setSelectedMeninge(meningesData[1])}
              className={`p-3.5 rounded-xl border-2 transition text-left cursor-pointer ${
                selectedMeninge.name === 'Aracnoides'
                  ? 'bg-[#944920] text-white border-[#572208] shadow-md ring-2 ring-[#944920]/30'
                  : 'bg-[#fbf0ea] border-[#e2c1b1] hover:bg-[#f7e4da] text-[#572208]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-sm sm:text-base">2. Aracnoides</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/15 font-semibold">Intermedia</span>
              </div>
              <p className="text-xs mt-1 opacity-90">Vellosidades donde circula el LCR (amortigua contra el hueso)</p>
            </button>

            {/* Piamadre */}
            <button
              onClick={() => setSelectedMeninge(meningesData[2])}
              className={`p-3.5 rounded-xl border-2 transition text-left cursor-pointer ${
                selectedMeninge.name === 'Piamadre'
                  ? 'bg-[#2b553c] text-white border-[#152e20] shadow-md ring-2 ring-[#2b553c]/30'
                  : 'bg-[#edf5f0] border-[#b9d9c4] hover:bg-[#e1efe6] text-[#152e20]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-sm sm:text-base">3. Piamadre</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/15 font-semibold">Interna y Delgada</span>
              </div>
              <p className="text-xs mt-1 opacity-90">En contacto directo con el tejido nervioso</p>
            </button>

            {/* Nervous tissue */}
            <div className="p-3 bg-[#e8e4db] border-2 border-[#cec7b9] rounded-xl text-center font-serif font-bold text-xs text-[#38332c]">
              Tejido Nervioso (Encéfalo / Médula)
            </div>
          </div>

          {/* Selected Layer Detail */}
          <div className="lg:col-span-6 bg-[#fbf8f5] border border-[#d4cbc2] rounded-xl p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-[#d4cbc2]/60 pb-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6d4304]">
                  Capa Meníngea {selectedMeninge.depth}
                </span>
                <h3 className="text-2xl font-bold font-serif text-[#292420] mt-0.5">
                  {selectedMeninge.name}
                </h3>
              </div>
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: selectedMeninge.color }}
              >
                <Shield className="w-5 h-5" />
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-[#787169] uppercase tracking-wider mb-1">
                Características de clase:
              </h4>
              <p className="text-sm text-[#231f1c] leading-relaxed">
                {selectedMeninge.characteristics}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-[#787169] uppercase tracking-wider mb-1">
                Relación anatómica:
              </h4>
              <p className="text-xs sm:text-sm text-[#49423c] leading-relaxed">
                {selectedMeninge.relation}
              </p>
            </div>

            <div className="p-3 bg-white rounded-lg border border-[#d4cbc2] text-xs text-[#49423c]">
              <strong>Función global:</strong> Protegen el tejido del sistema nervioso central evitando daños por fricción y choque contra el esqueleto óseo.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Líquido Céfalo-raquídeo (LCR) */}
      <section className="bg-white rounded-2xl border border-[#d4cbc2] p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#d4cbc2]/60 pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-[#205b76] text-xs font-bold uppercase tracking-wider mb-1">
              <Droplets className="w-4 h-4 text-[#205b76]" />
              <span>Fisiología y Ventrículos</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#292420]">
              Líquido Céfalo-raquídeo (LCR)
            </h2>
            <p className="text-xs sm:text-sm text-[#49423c] mt-1">
              Producción, las 3 funciones vitales y los 4 ventrículos cerebrales.
            </p>
          </div>
        </div>

        {/* Ventricles & Functions Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* 4 Ventricles Card */}
          <div className="p-4 rounded-xl border border-[#d4cbc2] bg-[#fbf8f5]">
            <h3 className="font-serif font-bold text-base text-[#292420] mb-2 flex items-center gap-2">
              <Waves className="w-4 h-4 text-[#205b76]" />
              <span>Los 4 Ventrículos Cerebrales</span>
            </h3>
            <p className="text-xs text-[#49423c] leading-relaxed">
              El líquido se produce en los ventrículos a partir del <strong>plexo coroideo</strong>:
            </p>
            <ul className="mt-2 space-y-1 text-xs text-[#231f1c]">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#205b76]" />
                <span><strong>2 ventrículos laterales:</strong> en los hemisferios cerebrales.</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#205b76]" />
                <span><strong>3er ventrículo:</strong> situado en la región diencefálica media.</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#205b76]" />
                <span><strong>4to ventrículo:</strong> ubicado en la región medial del cerebro posterior.</span>
              </li>
            </ul>
          </div>

          {/* 3 Functions Card */}
          <div className="p-4 rounded-xl border border-[#d4cbc2] bg-[#fbf8f5]">
            <h3 className="font-serif font-bold text-base text-[#292420] mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2b553c]" />
              <span>Las 3 Funciones del LCR (Rodea al SNC)</span>
            </h3>
            <div className="space-y-2 text-xs">
              <div className="p-2 bg-white rounded border border-[#d4cbc2]">
                <strong className="text-[#2b553c] block">1. Nutricionales:</strong>
                <span className="text-[#49423c]">Suministra glucosa, iones y nutrientes al tejido nervioso central.</span>
              </div>
              <div className="p-2 bg-white rounded border border-[#d4cbc2]">
                <strong className="text-[#944920] block">2. Recolección de deshechos:</strong>
                <span className="text-[#49423c]">Drena y retira los metabolitos producidos por la actividad neuronal.</span>
              </div>
              <div className="p-2 bg-white rounded border border-[#d4cbc2]">
                <strong className="text-[#205b76] block">3. Amortiguadora:</strong>
                <span className="text-[#49423c]">Suspende hidráulicamente el cerebro evitando que colapse contra el cráneo.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Flow Circuit of CSF */}
        <div className="bg-[#faf6f0] p-5 rounded-2xl border border-[#d4cbc2]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#205b76]">
                Flujo y Circulación Continua
              </span>
              <h3 className="text-lg font-bold font-serif text-[#292420]">
                El Ciclo del Líquido Céfalo-raquídeo
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevStep}
                className="p-1.5 bg-white border border-[#d4cbc2] rounded-lg text-[#292420] hover:bg-[#f5efe9] transition cursor-pointer"
                title="Paso anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-semibold px-2 py-1 bg-white border border-[#d4cbc2] rounded-md">
                Paso {currentStep.step} de {lcrStepsData.length}
              </span>
              <button
                onClick={handleNextStep}
                className="p-1.5 bg-white border border-[#d4cbc2] rounded-lg text-[#292420] hover:bg-[#f5efe9] transition cursor-pointer"
                title="Paso siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stepper Progress Bar */}
          <div className="grid grid-cols-5 gap-2 mb-4">
            {lcrStepsData.map((step, idx) => (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`py-1.5 px-2 rounded-lg text-center text-xs font-semibold transition cursor-pointer ${
                  activeStepIndex === idx
                    ? 'bg-[#205b76] text-white shadow-xs'
                    : 'bg-white border border-[#d4cbc2] text-[#787169] hover:bg-[#f5efe9]'
                }`}
              >
                <span className="hidden sm:inline">Paso </span>{step.step}
              </button>
            ))}
          </div>

          {/* Active Step Card */}
          <div className="bg-white rounded-xl border border-[#d4cbc2] p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-full bg-[#205b76] text-white flex items-center justify-center font-bold text-xs">
                {currentStep.step}
              </span>
              <span className="text-xs font-bold text-[#787169] uppercase tracking-wider">
                Estructura: {currentStep.structure}
              </span>
            </div>
            <h4 className="text-xl font-bold font-serif text-[#292420]">
              {currentStep.title}
            </h4>
            <p className="text-sm text-[#49423c] mt-2 leading-relaxed">
              {currentStep.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
