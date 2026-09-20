import { 
  NeuroNode, 
  NeuroEdge, 
  Flashcard, 
  PlaneItem, 
  QuadOrientationTerm, 
  MatrixCell, 
  MeningeLayer, 
  LcrStep 
} from '../types';

export const neuroNodes: NeuroNode[] = [
  // 1. Planimetría y Orientación
  {
    id: 1,
    label: "Planimetría",
    sublabel: "Cortes y Vistas",
    category: "Planimetría",
    group: "planimetria",
    desc: "Sistemas de cortes geométricos y referencias espaciales para el estudio anatómico del encéfalo.",
    exam: "Divide el cerebro en planos: Sagital, Parasagital, Coronal y Transversal.",
    colorGroup: "#2b553c"
  },
  {
    id: 2,
    label: "Corte Sagital",
    sublabel: "Línea media",
    category: "Planimetría",
    group: "planimetria",
    desc: "Corte por la línea media que divide el cerebro exactamente en mitad izquierda y derecha.",
    exam: "Línea media: divide el cerebro en mitad izquierda y derecha.",
    colorGroup: "#2b553c"
  },
  {
    id: 3,
    label: "Corte Parasagital",
    sublabel: "Paralelo a la media",
    category: "Planimetría",
    group: "planimetria",
    desc: "Corte sin ubicación establecida fija, pero realizado de manera estrictamente paralela a la línea media.",
    exam: "Sin ubicación fija, pero siempre paralelo a la línea media sagital.",
    colorGroup: "#2b553c"
  },
  {
    id: 4,
    label: "Corte Coronal",
    sublabel: "Anterior y Posterior",
    category: "Planimetría",
    group: "planimetria",
    desc: "Línea o plano vertical que separa al cerebro en una mitad anterior (frontal) y una mitad posterior.",
    exam: "Separa el cerebro en mitad anterior y mitad posterior.",
    colorGroup: "#2b553c"
  },
  {
    id: 5,
    label: "Corte Transversal",
    sublabel: "Dorsal y Ventral",
    category: "Planimetría",
    group: "planimetria",
    desc: "Plano horizontal que separa al cerebro en parte Dorsal (arriba) y parte Ventral (abajo).",
    exam: "Separa al cerebro en Dorsal y Ventral.",
    colorGroup: "#2b553c"
  },
  {
    id: 6,
    label: "Terminología Cuadrúpeda",
    sublabel: "Ejes corporales",
    category: "Planimetría",
    group: "planimetria",
    desc: "Terminología de ubicación anatómica basada en individuos cuadrúpedos para estandarizar orientaciones.",
    exam: "Dorsal/Ventral, Facial/Caudal, Medial/Lateral, Proximal/Distal.",
    colorGroup: "#2b553c"
  },

  // 2. Cisuras y Lóbulos
  {
    id: 7,
    label: "Cisuras Importantes",
    sublabel: "Surcos corticales",
    category: "Cisuras y Lóbulos",
    group: "lobulos",
    desc: "Pliegues o hendiduras profundas que delimitan las áreas funcionales y anatómicas de la corteza cerebral.",
    exam: "Surco central de Rolando, Surco Longitudinal y Surco Lateral de Silvio.",
    colorGroup: "#944920"
  },
  {
    id: 8,
    label: "Surco Central de Rolando",
    sublabel: "Límite Frontal/Parietal",
    category: "Cisuras y Lóbulos",
    group: "lobulos",
    desc: "Surco que discurre verticalmente dividiendo la corteza motora (frontal) de la sensorial (parietal).",
    exam: "Separa el lóbulo frontal del lóbulo parietal.",
    colorGroup: "#944920"
  },
  {
    id: 9,
    label: "Surco Longitudinal",
    sublabel: "Cisura Interhemisférica",
    category: "Cisuras y Lóbulos",
    group: "lobulos",
    desc: "Cisura longitudinal profunda en la línea media que separa los dos hemisferios cerebrales.",
    exam: "Surco medial longitudinal entre hemisferio izquierdo y derecho.",
    colorGroup: "#944920"
  },
  {
    id: 10,
    label: "Surco Lateral de Silvio",
    sublabel: "Límite Temporal",
    category: "Cisuras y Lóbulos",
    group: "lobulos",
    desc: "Cisura horizontal profunda que delimita inferiormente al lóbulo frontal y parietal respecto al lóbulo temporal.",
    exam: "Delimita el lóbulo temporal por su parte superior.",
    colorGroup: "#944920"
  },
  {
    id: 11,
    label: "Lóbulos Cerebrales",
    sublabel: "Frontal, Parietal, Occipital, Temporal",
    category: "Cisuras y Lóbulos",
    group: "lobulos",
    desc: "Cuatro regiones anatómicas delimitadas por surcos: Frontal (anterior), Parietal (superior), Occipital (caudal) y Temporal (lateral/ventral).",
    exam: "Identificados en el diagrama de clase con códigos de color e hitos de cisuras.",
    colorGroup: "#944920"
  },

  // 3. Neurona y Sustancia Gris / Blanca
  {
    id: 12,
    label: "La Neurona",
    sublabel: "Unidad funcional",
    category: "Neurona y Matriz",
    group: "neurona",
    desc: "Célula principal del sistema nervioso compuesta por: dendritas, núcleo, soma, capas de mielina, axón y sinapsis.",
    exam: "Partes del diagrama de clase: dendritas, núcleo, soma, capas de mielina, axón y sinapsis.",
    colorGroup: "#205b76"
  },
  {
    id: 13,
    label: "Sustancia Gris (SG)",
    sublabel: "Cuerpos neuronales",
    category: "Neurona y Matriz",
    group: "neurona",
    desc: "Concentración y acúmulo principal de cuerpos neuronales (somas).",
    exam: "Definición de clase: Concentración de cuerpos neuronales.",
    colorGroup: "#205b76"
  },
  {
    id: 14,
    label: "Sustancia Blanca (SB)",
    sublabel: "Somas y axones",
    category: "Neurona y Matriz",
    group: "neurona",
    desc: "Concentración de vías nerviosas recubiertas de mielina.",
    exam: "Definición textual de clase: Concentración de somas y axones.",
    colorGroup: "#205b76"
  },
  {
    id: 15,
    label: "Matriz SNC vs SNP",
    sublabel: "Terminología Básica 2x2",
    category: "Neurona y Matriz",
    group: "neurona",
    desc: "Matriz comparativa de términos anatómicos según la sustancia (SG vs SB) y el sistema (SNC vs SNP).",
    exam: "SNC+SG=Núcleos, SNC+SB=Fascículo/Tracto/Vía/AS, SNP+SG=Ganglios, SNP+SB=Nervios.",
    colorGroup: "#205b76"
  },
  {
    id: 16,
    label: "Núcleos",
    sublabel: "SNC + SG",
    category: "Neurona y Matriz",
    group: "neurona",
    desc: "Agrupación o concentración de cuerpos neuronales (Sustancia Gris) dentro del Sistema Nervioso Central (SNC).",
    exam: "Cuadrante SNC + SG.",
    colorGroup: "#205b76"
  },
  {
    id: 17,
    label: "Fascículo / Tracto / Vía o AS",
    sublabel: "SNC + SB",
    category: "Neurona y Matriz",
    group: "neurona",
    desc: "Haz de axones (Sustancia Blanca) que transmiten impulsos dentro del Sistema Nervioso Central (SNC).",
    exam: "Cuadrante SNC + SB: Fascículo, Tracto, Vía o AS.",
    colorGroup: "#205b76"
  },
  {
    id: 18,
    label: "Ganglios",
    sublabel: "SNP + SG",
    category: "Neurona y Matriz",
    group: "neurona",
    desc: "Agrupación de cuerpos neuronales (Sustancia Gris) ubicados en el Sistema Nervioso Periférico (SNP).",
    exam: "Cuadrante SNP + SG.",
    colorGroup: "#205b76"
  },
  {
    id: 19,
    label: "Nervios",
    sublabel: "SNP + SB",
    category: "Neurona y Matriz",
    group: "neurona",
    desc: "Conjuntos de axones y fibras nerviosas (Sustancia Blanca) que recorren el Sistema Nervioso Periférico (SNP).",
    exam: "Cuadrante SNP + SB.",
    colorGroup: "#205b76"
  },

  // 4. Meninges y Líquido Cefalorraquídeo
  {
    id: 20,
    label: "Meninges",
    sublabel: "Capas protectoras",
    category: "Meninges y LCR",
    group: "meninges",
    desc: "Capas de tejido conectivo protector: Duramadre, Aracnoides y Piamadre. En los apuntes: 'Son las capas protectoras del SNP'.",
    exam: "Tres capas: Duramadre (adherida a hueso), Aracnoides (vellosidades y LCR), Piamadre (en contacto con tejido nervioso).",
    colorGroup: "#6d4304"
  },
  {
    id: 21,
    label: "Dura madre",
    sublabel: "Capa externa y rígida",
    category: "Meninges y LCR",
    group: "meninges",
    desc: "La parte más extensa y rígida de las meninges, adherida directamente a la superficie ósea del cráneo.",
    exam: "La más extensa y rígida, adherida al hueso.",
    colorGroup: "#6d4304"
  },
  {
    id: 22,
    label: "Aracnoides",
    sublabel: "Capa intermedia",
    category: "Meninges y LCR",
    group: "meninges",
    desc: "Capa intermedia con vellosidades donde circula el líquido cefalorraquídeo rodeando el cerebro y médula para evitar que toque el hueso.",
    exam: "Vellosidades donde circula LCR; evita que el encéfalo y médula toquen el hueso.",
    colorGroup: "#6d4304"
  },
  {
    id: 23,
    label: "Piamadre",
    sublabel: "Capa interna suave",
    category: "Meninges y LCR",
    group: "meninges",
    desc: "Capa interna que se encuentra en íntimo contacto con el tejido nervioso; se caracteriza por su suavidad y delgadez.",
    exam: "En contacto con tejido nervioso; suave y delgada.",
    colorGroup: "#6d4304"
  },
  {
    id: 24,
    label: "Líquido Céfalo-raquídeo",
    sublabel: "Nutrición y amortiguación",
    category: "Meninges y LCR",
    group: "meninges",
    desc: "Fluido que rodea al SNC con 3 funciones clave: nutricionales, recolección de deshechos y amortiguadora.",
    exam: "Producido en ventrículos por el plexo coroideo; 3 funciones: nutrición, desechos y amortiguador.",
    colorGroup: "#6d4304"
  },
  {
    id: 25,
    label: "4 Ventrículos",
    sublabel: "Plexo Coroideo",
    category: "Meninges y LCR",
    group: "meninges",
    desc: "Existen 4 ventrículos: 2 laterales, 3er ventrículo y el 4to ventrículo en la región medial del cerebro.",
    exam: "2 laterales + 3er ventrículo + 4to ventrículo en región medial. Producción en plexo coroideo.",
    colorGroup: "#6d4304"
  },
  {
    id: 26,
    label: "Circuito del LCR",
    sublabel: "Agujero de Maguendi a Sangre",
    category: "Meninges y LCR",
    group: "meninges",
    desc: "Recorrido: Se produce en los 4 ventrículos -> Sale por agujero de Maguendi hacia el espacio aracnoideo -> Nutre y recolecta deshechos -> Es absorbido por granulaciones aracnoideas -> Se arroja a sangre venosa.",
    exam: "Ciclo: 4 ventrículos -> Agujero de Maguendi -> Aracnoides -> Granulaciones aracnoideas -> Sangre venosa.",
    colorGroup: "#6d4304"
  }
];

export const neuroEdges: NeuroEdge[] = [
  // Planimetría y cortes
  { from: 1, to: 2, label: "Divide Izq/Der", arrows: "to" },
  { from: 1, to: 3, label: "Paralelo al Sagital", arrows: "to" },
  { from: 1, to: 4, label: "Anterior/Posterior", arrows: "to" },
  { from: 1, to: 5, label: "Dorsal/Ventral", arrows: "to" },
  { from: 1, to: 6, label: "Ejes Anatómicos", arrows: "to" },

  // Cisuras y lóbulos
  { from: 1, to: 7, label: "Límites anatómicos", arrows: "to" },
  { from: 7, to: 8, label: "Rolando", arrows: "to" },
  { from: 7, to: 9, label: "Longitudinal", arrows: "to" },
  { from: 7, to: 10, label: "Silvio", arrows: "to" },
  { from: 8, to: 11, label: "Frontal vs Parietal", arrows: "to" },
  { from: 10, to: 11, label: "Delimita Temporal", arrows: "to" },

  // Neurona y tejidos
  { from: 12, to: 13, label: "Cuerpos celulares", arrows: "to" },
  { from: 12, to: 14, label: "Somas y axones", arrows: "to" },
  { from: 13, to: 15, label: "Eje SG", arrows: "to" },
  { from: 14, to: 15, label: "Eje SB", arrows: "to" },
  { from: 15, to: 16, label: "SNC + SG", arrows: "to" },
  { from: 15, to: 17, label: "SNC + SB", arrows: "to" },
  { from: 15, to: 18, label: "SNP + SG", arrows: "to" },
  { from: 15, to: 19, label: "SNP + SB", arrows: "to" },

  // Meninges y LCR
  { from: 20, to: 21, label: "Externa / Hueso", arrows: "to" },
  { from: 20, to: 22, label: "Intermedia / Vellosidades", arrows: "to" },
  { from: 20, to: 23, label: "Interna / Tejido Nervioso", arrows: "to" },
  { from: 22, to: 24, label: "Circula en Aracnoides", arrows: "to;from" },
  { from: 24, to: 25, label: "Plexo Coroideo", arrows: "to;from" },
  { from: 25, to: 26, label: "Genera el Flujo", arrows: "to" },
  { from: 26, to: 22, label: "Retorno a Granulaciones", arrows: "to" }
];

export const planesData: PlaneItem[] = [
  {
    id: "sagital",
    name: "Corte Sagital",
    axis: "Línea media (Izquierda / Derecha)",
    definition: "Línea media que divide el cerebro en mitad izquierda y mitad derecha.",
    note: "El corte Sagital es la referencia central del plano neuroanatómico.",
    color: "#2b553c"
  },
  {
    id: "parasagital",
    name: "Corte Parasagital",
    axis: "Paralelo a la línea media",
    definition: "Sin ubicación establecida fija, pero se realiza de manera paralela a la línea media.",
    note: "Mantiene la orientación sagital desplazado hacia un hemisferio u otro.",
    color: "#436d53"
  },
  {
    id: "coronal",
    name: "Corte Coronal",
    axis: "Plano frontal (Anterior / Posterior)",
    definition: "Línea que separa al cerebro en mitad anterior y mitad posterior.",
    note: "También denominado plano frontal; permite visualizar ambos hemisferios de frente.",
    color: "#944920"
  },
  {
    id: "transversal",
    name: "Corte Transversal",
    axis: "Plano horizontal (Dorsal / Ventral)",
    definition: "Línea que separa al cerebro en Dorsal (arriba) y Ventral (abajo).",
    note: "Corte horizontal tradicional del encéfalo en individuo cuadrúpedo.",
    color: "#205b76"
  }
];

export const quadTermsData: QuadOrientationTerm[] = [
  {
    term: "Dorsal",
    meaning: "Arriba",
    opposite: "Ventral (Abajo)",
    example: "Hacia la parte superior o lomo del encéfalo / columna."
  },
  {
    term: "Ventral",
    meaning: "Abajo",
    opposite: "Dorsal (Arriba)",
    example: "Hacia la base del cerebro o vientre del cuadrúpedo."
  },
  {
    term: "Facial",
    meaning: "En frente",
    opposite: "Caudal (Atrás)",
    example: "Hacia el rostro o parte frontal del cráneo (anterior)."
  },
  {
    term: "Caudal",
    meaning: "Atrás",
    opposite: "Facial (En frente)",
    example: "Hacia la cola o región posterior occipital."
  },
  {
    term: "Medial",
    meaning: "Línea media",
    opposite: "Lateral (A los lados)",
    example: "Hacia el centro o plano sagital medio."
  },
  {
    term: "Lateral",
    meaning: "A los lados",
    opposite: "Medial (Línea media)",
    example: "Hacia los extremos exteriores o flancos del encéfalo."
  },
  {
    term: "Proximal",
    meaning: "Cerca de",
    opposite: "Distal (Lejos de)",
    example: "Puntos o estructuras cercanas al punto de origen o centro."
  },
  {
    term: "Distal",
    meaning: "Lejos de",
    opposite: "Proximal (Cerca de)",
    example: "Puntos o estructuras alejadas del centro u origen."
  }
];

export const lobesAndFissuresData = {
  fissures: [
    {
      name: "Surco Central de Rolando",
      role: "Separa el lóbulo frontal del lóbulo parietal",
      location: "Discurre en la superficie dorso-lateral del encéfalo."
    },
    {
      name: "Surco Longitudinal",
      role: "Cisura interhemisférica central",
      location: "Divide el hemisferio cerebral izquierdo del derecho en la línea media."
    },
    {
      name: "Surco Lateral de Silvio",
      role: "Delimita el lóbulo temporal inferiormente",
      location: "Separa el lóbulo temporal por abajo de los lóbulos frontal y parietal arriba."
    }
  ],
  lobes: [
    {
      name: "Lóbulo Frontal",
      colorTag: "#16a34a",
      position: "Región anterior (Facial)",
      boundary: "Anterior al Surco Central de Rolando y superior al Surco Lateral de Silvio."
    },
    {
      name: "Lóbulo Parietal",
      colorTag: "#ec4899",
      position: "Región superior media",
      boundary: "Posterior al Surco Central de Rolando y por encima del Surco Lateral de Silvio."
    },
    {
      name: "Lóbulo Occipital",
      colorTag: "#eab308",
      position: "Región posterior (Caudal)",
      boundary: "Ubicado en el polo posterior del cerebro."
    },
    {
      name: "Lóbulo Temporal",
      colorTag: "#d946ef",
      position: "Región lateral inferior (Ventral)",
      boundary: "Ubicado por debajo del Surco Lateral de Silvio."
    }
  ]
};

export const neuronPartsData = [
  {
    id: "dendritas",
    name: "Las dendritas",
    description: "Prolongaciones ramificadas que emergen del cuerpo celular (soma).",
    examHighlight: "Estructuras receptoras de las señales sinápticas."
  },
  {
    id: "nucleo",
    name: "El núcleo",
    description: "Ubicado en el interior del soma, contiene el material genético celular.",
    examHighlight: "Centro regulador celular y genético."
  },
  {
    id: "soma",
    name: "El soma (cuerpo celular)",
    description: "Cuerpo de la neurona que alberga el núcleo y citoplasma principal.",
    examHighlight: "Su concentración forma la Sustancia Gris (SG)."
  },
  {
    id: "mielina",
    name: "Las capas de mielina",
    description: "Vainas lipídicas aislantes que envuelven el axón en segmentos.",
    examHighlight: "Acelera la conducción eléctrica de los impulsos."
  },
  {
    id: "axon",
    name: "El axón",
    description: "Prolongación larga que conduce los impulsos nerviosos desde el soma hacia las terminales.",
    examHighlight: "Su concentración agrupada constituye la Sustancia Blanca (SB)."
  },
  {
    id: "sinapsis",
    name: "La sinapsis",
    description: "Región de unión y comunicación funcional donde se transmiten los neurotransmisores a la siguiente célula.",
    examHighlight: "Terminal del impulso nervioso."
  }
];

export const matrixCellsData: MatrixCell[] = [
  {
    tissue: "SG",
    system: "SNC",
    structure: "Núcleos",
    definition: "Concentración de cuerpos neuronales en el Sistema Nervioso Central.",
    description: "Conjuntos o acúmulos de somas neuronales en el cerebro y médula espinal."
  },
  {
    tissue: "SB",
    system: "SNC",
    structure: "Fascículo / Tracto / Vía o AS",
    definition: "Concentración de axones agrupados en el Sistema Nervioso Central.",
    description: "Vías o haces de fibras nerviosas que conducen información dentro del encéfalo y médula."
  },
  {
    tissue: "SG",
    system: "SNP",
    structure: "Ganglios",
    definition: "Concentración de cuerpos neuronales en el Sistema Nervioso Periférico.",
    description: "Nódulos fuera del encéfalo y la médula donde residen cuerpos de neuronas sensoriales y autonómicas."
  },
  {
    tissue: "SB",
    system: "SNP",
    structure: "Nervios",
    definition: "Concentración de axones y fibras nerviosas en el Sistema Nervioso Periférico.",
    description: "Cordones que transmiten señales entre el SNC y los órganos, músculos y receptores periféricos."
  }
];

export const meningesData: MeningeLayer[] = [
  {
    name: "Dura madre",
    depth: "Externa",
    characteristics: "La parte más extensa y rígida de las tres capas protectoras.",
    relation: "Se encuentra adherida directamente al hueso craneal y canal raquídeo.",
    color: "#6d4304"
  },
  {
    name: "Aracnoides",
    depth: "Intermedia",
    characteristics: "Una capa intermedia con vellosidades donde circula el líquido cefalorraquídeo.",
    relation: "Rodea el cerebro y médula para evitar que toque el hueso.",
    color: "#944920"
  },
  {
    name: "Piamadre",
    depth: "Interna",
    characteristics: "Se caracteriza por su suavidad y delgadez.",
    relation: "Está en contacto íntimo y directo con el tejido nervioso.",
    color: "#2b553c"
  }
];

export const lcrStepsData: LcrStep[] = [
  {
    step: 1,
    title: "Producción en los 4 ventrículos",
    structure: "Plexo coroideo",
    description: "El líquido céfalo-raquídeo se sintetiza continuamente en los 4 ventrículos cerebrales (2 laterales, 3er ventrículo y 4to ventrículo en región medial) a partir del plexo coroideo."
  },
  {
    step: 2,
    title: "Salida al espacio aracnoideo",
    structure: "Agujero de Maguendi",
    description: "El LCR sale desde el sistema ventricular hacia el espacio aracnoideo a través del agujero de Maguendi."
  },
  {
    step: 3,
    title: "Protección, nutrición y limpieza del SNC",
    structure: "Espacio aracnoideo",
    description: "Rodea el cerebro y la médula espinal (SNC) desempeñando 3 funciones esenciales: nutricionales, recolección de deshechos y amortiguadora."
  },
  {
    step: 4,
    title: "Absorción aracnoidea",
    structure: "Granulaciones aracnoideas",
    description: "El fluido es filtrado y absorbido por las granulaciones aracnoideas en la parte superior del encéfalo."
  },
  {
    step: 5,
    title: "Drenaje y reinicio del ciclo",
    structure: "Sangre venosa",
    description: "Se arroja al torrente de sangre venosa para su limpieza metabólica y continuación del ciclo fisiológico."
  }
];

export const flashcardsData: Flashcard[] = [
  {
    id: "fc-1",
    category: "Planimetría",
    question: "¿Qué es el Corte Sagital y qué divide?",
    answer: "Es la línea media que divide el cerebro exactamente en mitad izquierda y mitad derecha.",
    examNote: "Término clave de examen: Línea media, mitad izquierda y derecha."
  },
  {
    id: "fc-2",
    category: "Planimetría",
    question: "¿Qué es el Corte Parasagital según los apuntes?",
    answer: "Es un corte sin ubicación establecida fija, pero que se realiza de manera estrictamente paralela a la línea media.",
    examNote: "Regla mnemotécnica: 'Para' = al lado / paralelo a la línea media sagital."
  },
  {
    id: "fc-3",
    category: "Planimetría",
    question: "¿Qué es el Corte Coronal?",
    answer: "Línea o plano que separa al cerebro en mitad anterior y mitad posterior.",
    examNote: "Palabra clave: Mitad anterior y mitad posterior."
  },
  {
    id: "fc-4",
    category: "Planimetría",
    question: "¿Qué es el Corte Transversal?",
    answer: "Línea o plano horizontal que separa al cerebro en Dorsal (arriba) y Ventral (abajo).",
    examNote: "División: Dorsal vs Ventral."
  },
  {
    id: "fc-5",
    category: "Terminología Cuadrúpeda",
    question: "¿Qué significan Dorsal y Ventral en individuos cuadrúpedos?",
    answer: "• Dorsal = Arriba\n• Ventral = Abajo",
    examNote: "Dorsal: arriba / Ventral: abajo."
  },
  {
    id: "fc-6",
    category: "Terminología Cuadrúpeda",
    question: "¿Qué significan Facial y Caudal en individuos cuadrúpedos?",
    answer: "• Facial = En frente\n• Caudal = Atrás",
    examNote: "Facial: en frente / Caudal: atrás."
  },
  {
    id: "fc-7",
    category: "Terminología Cuadrúpeda",
    question: "¿Qué significan Medial y Lateral?",
    answer: "• Medial = Línea media\n• Lateral = A los lados",
    examNote: "Medial: centro o línea media / Lateral: hacia los lados."
  },
  {
    id: "fc-8",
    category: "Terminología Cuadrúpeda",
    question: "¿Qué significan Proximal y Distal?",
    answer: "• Proximal = Cerca de\n• Distal = Lejos de",
    examNote: "Proximal: cerca / Distal: lejos."
  },
  {
    id: "fc-9",
    category: "Cisuras y Lóbulos",
    question: "¿Cuáles son las tres cisuras importantes de la clase?",
    answer: "1. Surco central de Rolando\n2. Surco Longitudinal\n3. Surco Lateral de Silvio",
    examNote: "Aprenderse las tres cisuras principales de los apuntes."
  },
  {
    id: "fc-10",
    category: "Cisuras y Lóbulos",
    question: "¿Qué función anatómica tienen el Surco Central de Rolando y el Surco Lateral de Silvio?",
    answer: "• Surco Central de Rolando: Separa el lóbulo frontal del parietal.\n• Surco Lateral de Silvio: Delimita el lóbulo temporal por su parte superior respecto al frontal y parietal.",
    examNote: "Límites claros entre lóbulos."
  },
  {
    id: "fc-11",
    category: "Cisuras y Lóbulos",
    question: "¿Cuáles son los 4 lóbulos cerebrales identificados en el diagrama?",
    answer: "1. Lóbulo Frontal\n2. Lóbulo Parietal\n3. Lóbulo Occipital\n4. Lóbulo Temporal",
    examNote: "Frontal (anterior), Parietal (superior), Occipital (posterior), Temporal (inferior)."
  },
  {
    id: "fc-12",
    category: "Neurona",
    question: "¿Cuáles son las 6 partes de la neurona señaladas en el diagrama de clase?",
    answer: "1. Las dendritas\n2. El núcleo\n3. El soma (cuerpo celular)\n4. El axón\n5. Las capas de mielina\n6. La sinapsis",
    examNote: "Identificación de partes según el esquema gráfico de clase."
  },
  {
    id: "fc-13",
    category: "Sustancias Cerebrales",
    question: "¿Qué es la Sustancia Gris (SG) según los apuntes?",
    answer: "Concentración de cuerpos neuronales.",
    examNote: "Definición textual: Concentración de cuerpos neuronales."
  },
  {
    id: "fc-14",
    category: "Sustancias Cerebrales",
    question: "¿Qué es la Sustancia Blanca (SB) según los apuntes?",
    answer: "Concentración de somas y axones.",
    examNote: "Definición textual del apunte: Concentración de somas y axones."
  },
  {
    id: "fc-15",
    category: "Matriz Terminológica",
    question: "¿Qué estructura es Sustancia Gris (SG) en el Sistema Nervioso Central (SNC)?",
    answer: "Núcleos.",
    examNote: "SNC + SG = Núcleos."
  },
  {
    id: "fc-16",
    category: "Matriz Terminológica",
    question: "¿Qué estructuras corresponden a Sustancia Blanca (SB) en el Sistema Nervioso Central (SNC)?",
    answer: "Fascículo, Tracto, Vía o AS.",
    examNote: "SNC + SB = Fascículo / Tracto / Vía o AS."
  },
  {
    id: "fc-17",
    category: "Matriz Terminológica",
    question: "¿Qué estructura es Sustancia Gris (SG) en el Sistema Nervioso Periférico (SNP)?",
    answer: "Ganglios.",
    examNote: "SNP + SG = Ganglios."
  },
  {
    id: "fc-18",
    category: "Matriz Terminológica",
    question: "¿Qué estructura es Sustancia Blanca (SB) en el Sistema Nervioso Periférico (SNP)?",
    answer: "Nervios.",
    examNote: "SNP + SB = Nervios."
  },
  {
    id: "fc-19",
    category: "Meninges",
    question: "¿De qué tres capas están compuestas las Meninges y cómo las define el apunte?",
    answer: "Compuestas por:\n1. Dura madre\n2. Aracnoides\n3. Piamadre\n\nNota de clase: 'Son las capas protectoras del SNP'.",
    examNote: "Tríada meníngea: Duramadre, Aracnoides, Piamadre."
  },
  {
    id: "fc-20",
    category: "Meninges",
    question: "¿Cuáles son las características individuales de cada meninge?",
    answer: "• Dura madre: La parte más extensa y rígida, adherida al hueso.\n• Aracnoides: Capa intermedia con vellosidades donde circula líquido cefalorraquídeo rodeando cerebro y médula para evitar que toque el hueso.\n• Piamadre: En contacto con el tejido nervioso, caracterizada por su suavidad y delgadez.",
    examNote: "Duramadre (rígida/hueso), Aracnoides (LCR/evita contacto óseo), Piamadre (delgada/tejido nervioso)."
  },
  {
    id: "fc-21",
    category: "Líquido Céfalo-raquídeo",
    question: "¿Dónde se produce el Líquido Céfalo-raquídeo y cuántos ventrículos hay?",
    answer: "Se produce en los ventrículos a partir del PLEXO COROIDEO.\n\nExisten 4 ventrículos:\n• 2 ventrículos laterales\n• 3er ventrículo\n• 4to ventrículo en la región medial del cerebro.",
    examNote: "Plexo coroideo en 4 ventrículos (2 laterales, 3º y 4º medial)."
  },
  {
    id: "fc-22",
    category: "Líquido Céfalo-raquídeo",
    question: "¿Cuáles son las tres funciones del Líquido Céfalo-raquídeo al rodear al SNC?",
    answer: "1. Nutricionales\n2. De recolección de deshechos\n3. Amortiguadora",
    examNote: "Tríada funcional del LCR: Nutrición, Recolección de deshechos y Amortiguación."
  },
  {
    id: "fc-23",
    category: "Líquido Céfalo-raquídeo",
    question: "¿Cuál es el ciclo completo del Líquido Céfalo-raquídeo según los apuntes?",
    answer: "1. Se produce en los 4 ventrículos a partir del plexo coroideo.\n2. Sale por el agujero de maguendi hacia el aracnoideo.\n3. Nutre y recolecta deshechos rodeando al SNC.\n4. Es absorbido por granulaciones aracnoideas.\n5. Se arroja al torrente de sangre venosa para su limpieza y ciclo.",
    examNote: "Ciclo: 4 Ventrículos -> Agujero de Maguendi -> Espacio Aracnoideo -> Granulaciones Aracnoideas -> Sangre Venosa."
  }
];
