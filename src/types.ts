export type ScreenId = 'atlas' | 'backup';

export type MainTab = 'graph' | 'planimetry' | 'neuron' | 'meninges' | 'flashcards';

export interface NeuroNode {
  id: number;
  label: string;
  sublabel?: string;
  category: 'Planimetría' | 'Cisuras y Lóbulos' | 'Neurona y Matriz' | 'Meninges y LCR';
  group: 'planimetria' | 'lobulos' | 'neurona' | 'meninges';
  desc: string;
  exam: string;
  colorGroup: string;
}

export interface NeuroEdge {
  from: number;
  to: number;
  label: string;
  arrows?: string;
}

export interface Flashcard {
  id: string;
  category: string;
  question: string;
  answer: string;
  examNote: string;
}

export interface QuadOrientationTerm {
  term: string;
  meaning: string;
  opposite?: string;
  example: string;
  icon?: string;
}

export interface PlaneItem {
  id: string;
  name: string;
  axis: string;
  definition: string;
  note?: string;
  color: string;
}

export interface MatrixCell {
  tissue: 'SG' | 'SB';
  system: 'SNC' | 'SNP';
  structure: string;
  definition: string;
  description: string;
}

export interface MeningeLayer {
  name: string;
  depth: 'Externa' | 'Intermedia' | 'Interna';
  characteristics: string;
  relation: string;
  color: string;
}

export interface LcrStep {
  step: number;
  title: string;
  description: string;
  structure: string;
}
