import React from 'react';
import { X, BookOpen, Brain, Compass, Shield, Grid, Droplets } from 'lucide-react';

interface ExamGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExamGuideModal: React.FC<ExamGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/45 backdrop-blur-xs flex items-center justify-center p-4 font-sans"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full border border-[#d4cbc2] p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 text-[#787169] hover:text-[#231f1c] text-base p-1 transition cursor-pointer"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#2b553c] text-xs font-bold uppercase tracking-wider mb-1">
          <BookOpen className="w-3.5 h-3.5 text-[#2b553c]" />
          <span>Apuntes de Clase • Guía Esencial</span>
        </div>

        <h3 className="text-xl font-bold font-serif text-[#292420] mb-3">
          Resumen Completo de Neuroanatomía
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-[#231f1c] leading-relaxed">
          {/* 1. Planimetría y Cuadrúpedos */}
          <div className="p-4 bg-[#edf5f0] rounded-xl border border-[#2b553c]/30">
            <div className="flex items-center gap-2 text-[#2b553c] font-bold mb-1.5">
              <Compass className="w-4 h-4" />
              <span>1. Planimetría y Ubicación en Cuadrúpedos</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-white rounded-lg border border-[#2b553c]/20">
                <strong className="block text-[#2b553c] mb-1">Cortes del Encéfalo:</strong>
                <p>• <strong>Sagital:</strong> Línea media, divide en mitad izquierda y derecha.</p>
                <p>• <strong>Parasagital:</strong> Paralelo a la línea media (sin ubicación fija).</p>
                <p>• <strong>Coronal:</strong> Separa en mitad anterior y posterior.</p>
                <p>• <strong>Transversal:</strong> Separa en Dorsal (arriba) y Ventral (abajo).</p>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-[#2b553c]/20">
                <strong className="block text-[#2b553c] mb-1">Orientación en Cuadrúpedos:</strong>
                <p>• <strong>Dorsal:</strong> Arriba | <strong>Ventral:</strong> Abajo</p>
                <p>• <strong>Facial:</strong> En frente | <strong>Caudal:</strong> Atrás</p>
                <p>• <strong>Medial:</strong> Línea media | <strong>Lateral:</strong> A los lados</p>
                <p>• <strong>Proximal:</strong> Cerca de | <strong>Distal:</strong> Lejos de</p>
              </div>
            </div>
          </div>

          {/* 2. Cisuras y Lóbulos */}
          <div className="p-4 bg-[#fdf5ee] rounded-xl border border-[#944920]/30">
            <div className="flex items-center gap-2 text-[#944920] font-bold mb-1.5">
              <Brain className="w-4 h-4" />
              <span>2. Cisuras Importantes y Lóbulos Cerebrales</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-white rounded-lg border border-[#944920]/20">
                <strong className="block text-[#944920] mb-1">Cisuras Principales:</strong>
                <p>• <strong>Surco Central de Rolando:</strong> Separa lóbulo frontal del parietal.</p>
                <p>• <strong>Surco Lateral de Silvio:</strong> Delimita el lóbulo temporal inferiormente.</p>
                <p>• <strong>Surco Longitudinal:</strong> Separa los hemisferios cerebrales.</p>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-[#944920]/20">
                <strong className="block text-[#944920] mb-1">Los 4 Lóbulos:</strong>
                <p>• <strong>Lóbulo Frontal:</strong> Región anterior (verde en diagrama).</p>
                <p>• <strong>Lóbulo Parietal:</strong> Región superior posterior a Rolando.</p>
                <p>• <strong>Lóbulo Occipital:</strong> Polo posterior (amarillo).</p>
                <p>• <strong>Lóbulo Temporal:</strong> Región lateral inferior a Silvio.</p>
              </div>
            </div>
          </div>

          {/* 3. Neurona y Matriz Terminológica 2x2 */}
          <div className="p-4 bg-[#f0f6f9] rounded-xl border border-[#205b76]/30">
            <div className="flex items-center gap-2 text-[#205b76] font-bold mb-1.5">
              <Grid className="w-4 h-4" />
              <span>3. Neurona, Sustancias y Matriz Básica</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 bg-white rounded-lg border border-[#205b76]/20">
                <p>• <strong>6 partes de la neurona:</strong> Las dendritas, El núcleo, El soma (cuerpo celular), Las capas de mielina, El axón, La sinapsis.</p>
                <p className="mt-1">• <strong>Sustancia Gris (SG):</strong> Concentración de cuerpos neuronales.</p>
                <p>• <strong>Sustancia Blanca (SB):</strong> Concentración de somas y axones.</p>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-[#205b76]/20">
                <strong className="block text-[#205b76] mb-1">Matriz 2x2 (Diagrama Excalidraw de clase):</strong>
                <div className="grid grid-cols-2 gap-2 text-center font-bold mt-1">
                  <div className="p-1.5 bg-[#edf5f0] rounded border">SNC + SG = Núcleos</div>
                  <div className="p-1.5 bg-[#edf5f0] rounded border">SNC + SB = Fascículo / Tracto / Vía o AS</div>
                  <div className="p-1.5 bg-[#fdf5ee] rounded border">SNP + SG = Ganglios</div>
                  <div className="p-1.5 bg-[#fdf5ee] rounded border">SNP + SB = Nervios</div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Meninges y Líquido Céfalo-raquídeo */}
          <div className="p-4 bg-[#faf3e6] rounded-xl border border-[#6d4304]/30">
            <div className="flex items-center gap-2 text-[#6d4304] font-bold mb-1.5">
              <Shield className="w-4 h-4" />
              <span>4. Meninges y Líquido Céfalo-raquídeo</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-white rounded-lg border border-[#6d4304]/20">
                <strong className="block text-[#6d4304] mb-1">Las 3 Meninges (Capas protectoras del SNP):</strong>
                <p>1. <strong>Dura madre:</strong> Extensa y rígida, adherida al hueso.</p>
                <p>2. <strong>Aracnoides:</strong> Intermedia con vellosidades donde circula el LCR para evitar tocar hueso.</p>
                <p>3. <strong>Piamadre:</strong> Contacto con tejido nervioso, suave y delgada.</p>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-[#6d4304]/20">
                <strong className="block text-[#6d4304] mb-1">LCR y Ventrículos:</strong>
                <p>• Producido a partir del <strong>plexo coroideo</strong> en los 4 ventrículos (2 laterales, 3er ventrículo y 4to ventrículo en región medial).</p>
                <p>• <strong>3 funciones:</strong> Nutricionales, Recolección de deshechos, Amortiguadora.</p>
                <p>• <strong>Circuito:</strong> Ventrículos → Agujero de Maguendi → Espacio aracnoideo → Granulaciones aracnoideas → Sangre venosa.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-[#d4cbc2]/40 flex justify-end">
          <button 
            className="px-4 py-1.5 bg-[#2b553c] text-white rounded-lg text-xs font-medium hover:bg-[#436d53] transition cursor-pointer"
            onClick={onClose}
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
