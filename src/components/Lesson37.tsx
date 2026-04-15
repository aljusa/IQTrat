import React from 'react';
import { Shield, Settings, Activity, Layers, Expand, AlertTriangle, Scale } from 'lucide-react';

// --- Diagramas SVG Personalizados para cada sección ---

const IntroDiagram = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full drop-shadow-md">
    <defs>
      <linearGradient id="nitrided-layer" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
        <stop offset="20%" stopColor="#93c5fd" stopOpacity="0.2" />
        <stop offset="80%" stopColor="#93c5fd" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
      </linearGradient>
    </defs>
    {/* Base material */}
    <rect x="20" y="40" width="160" height="40" rx="4" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />
    {/* Nitrided layer */}
    <rect x="20" y="40" width="160" height="40" rx="4" fill="url(#nitrided-layer)" />
    
    {/* Load arrows */}
    <g stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M100 10 L100 30" />
      <polygon points="95,25 100,30 105,25" fill="#ef4444" />
      
      <path d="M40 110 L40 90" />
      <polygon points="35,95 40,90 45,95" fill="#ef4444" />
      
      <path d="M160 110 L160 90" />
      <polygon points="155,95 160,90 165,95" fill="#ef4444" />
    </g>
    <text x="100" y="65" textAnchor="middle" fontSize="10" fill="#374151" fontWeight="bold">NÚCLEO TENAZ</text>
    <text x="100" y="35" textAnchor="middle" fontSize="9" fill="#1d4ed8" fontWeight="bold">CAPA DURA SUPERFICIAL</text>
  </svg>
);

const DepthGraph = () => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    {/* Axes */}
    <line x1="30" y1="120" x2="180" y2="120" stroke="#6b7280" strokeWidth="2" />
    <line x1="30" y1="120" x2="30" y2="20" stroke="#6b7280" strokeWidth="2" />
    <text x="105" y="140" textAnchor="middle" fontSize="10" fill="#4b5563">Profundidad (mm)</text>
    <text x="15" y="70" textAnchor="middle" fontSize="10" fill="#4b5563" transform="rotate(-90 15 70)">Dureza (HV)</text>
    
    {/* Hardness Curve */}
    <path d="M 30 30 Q 70 30, 100 80 T 170 100" fill="none" stroke="#2563eb" strokeWidth="3" />
    
    {/* Critical Hardness Line */}
    <line x1="30" y1="65" x2="180" y2="65" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" />
    <text x="175" y="60" textAnchor="end" fontSize="8" fill="#ef4444">Dureza Crítica</text>
    
    {/* Depth markers */}
    <line x1="83" y1="65" x2="83" y2="120" stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 2" />
    <text x="80" y="115" textAnchor="end" fontSize="8" fill="#10b981" transform="rotate(-45 80 115)">Prof. Efectiva</text>
    
    <line x1="140" y1="95" x2="140" y2="120" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
    <text x="137" y="115" textAnchor="end" fontSize="8" fill="#f59e0b" transform="rotate(-45 137 115)">Prof. Total</text>
  </svg>
);

const CompoundZoneDiag = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full">
    {/* Óptima */}
    <g transform="translate(10, 20)">
      <text x="40" y="-5" textAnchor="middle" fontSize="10" fill="#059669" fontWeight="bold">ÓPTIMA</text>
      <rect x="0" y="0" width="80" height="80" fill="#e5e7eb" rx="2" />
      <rect x="0" y="0" width="80" height="10" fill="#1d4ed8" rx="2" />
      <rect x="0" y="10" width="80" height="20" fill="#93c5fd" />
      <text x="40" y="45" textAnchor="middle" fontSize="8" fill="#4b5563">Resistente</text>
    </g>
    
    {/* Excesiva */}
    <g transform="translate(110, 20)">
      <text x="40" y="-5" textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="bold">EXCESIVA</text>
      <rect x="0" y="0" width="80" height="80" fill="#e5e7eb" rx="2" />
      <rect x="0" y="0" width="80" height="30" fill="#1e3a8a" rx="2" />
      <rect x="0" y="30" width="80" height="15" fill="#93c5fd" />
      {/* Cracks */}
      <path d="M 20 0 L 25 15 L 22 25" stroke="#ef4444" strokeWidth="1.5" fill="none" />
      <path d="M 60 0 L 55 10 L 62 20 L 58 30" stroke="#ef4444" strokeWidth="1.5" fill="none" />
      <text x="40" y="55" textAnchor="middle" fontSize="8" fill="#4b5563">Frágil / Grietas</text>
    </g>
  </svg>
);

const DimensionalDiag = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full">
    {/* Original shape (dashed) */}
    <rect x="50" y="30" width="100" height="60" fill="none" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4 4" rx="4" />
    <text x="100" y="60" textAnchor="middle" fontSize="10" fill="#6b7280">Antes</text>
    
    {/* Nitrided shape (expanded) */}
    <rect x="46" y="26" width="108" height="68" fill="none" stroke="#2563eb" strokeWidth="2" rx="4" />
    <text x="100" y="75" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontWeight="bold">Después</text>
    
    {/* Dimension indicators */}
    <g stroke="#ef4444" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 30 30 L 50 30" strokeDasharray="2 2"/>
      <path d="M 30 26 L 46 26" strokeDasharray="2 2"/>
      <path d="M 35 30 L 35 26" />
      <polygon points="33,28 35,26 37,28" fill="#ef4444" />
      
      <text x="25" y="32" textAnchor="end" fontSize="8" fill="#ef4444">Δv</text>
    </g>
    
    <g stroke="#10b981" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
       <path d="M 150 50 L 170 50" strokeDasharray="2 2"/>
       <path d="M 154 50 L 160 50" />
       <polygon points="152,50 156,48 156,52" fill="#10b981" />
       <text x="175" y="53" textAnchor="start" fontSize="8" fill="#10b981">Expansión</text>
    </g>
  </svg>
);

const FatigueDiag = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full">
    {/* Surface */}
    <rect x="20" y="40" width="160" height="60" fill="#e5e7eb" rx="2" />
    <rect x="20" y="40" width="160" height="15" fill="#bfdbfe" rx="2" />
    
    {/* Compressive stresses arrows */}
    <g stroke="#2563eb" strokeWidth="1.5">
      <path d="M 30 47 L 50 47" /><polygon points="48,45 52,47 48,49" fill="#2563eb" />
      <path d="M 70 47 L 50 47" /><polygon points="52,45 48,47 52,49" fill="#2563eb" />
      
      <path d="M 130 47 L 150 47" /><polygon points="148,45 152,47 148,49" fill="#2563eb" />
      <path d="M 170 47 L 150 47" /><polygon points="152,45 148,47 152,49" fill="#2563eb" />
    </g>
    <text x="100" y="30" textAnchor="middle" fontSize="9" fill="#1d4ed8" fontWeight="bold">TENSIONES COMPRESIVAS</text>
    
    {/* Crack stopped */}
    <path d="M 100 40 L 102 48 L 98 52" stroke="#ef4444" strokeWidth="2" fill="none" />
    <circle cx="98" cy="52" r="3" fill="#ef4444" />
    <text x="100" y="65" textAnchor="middle" fontSize="8" fill="#ef4444">Iniciación retardada</text>
  </svg>
);

const InteractionDiag = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full">
    {/* Links */}
    <g stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="3 3">
      <line x1="100" y1="60" x2="50" y2="30" />
      <line x1="100" y1="60" x2="150" y2="30" />
      <line x1="100" y1="60" x2="50" y2="90" />
      <line x1="100" y1="60" x2="150" y2="90" />
    </g>
    
    {/* Nodes */}
    <circle cx="100" cy="60" r="18" fill="#3b82f6" />
    <text x="100" y="63" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">NITRURACIÓN</text>
    
    <circle cx="50" cy="30" r="14" fill="#f3f4f6" stroke="#4b5563" strokeWidth="1.5" />
    <text x="50" y="32" textAnchor="middle" fontSize="6" fill="#1f2937">Espesor</text>

    <circle cx="150" cy="30" r="14" fill="#f3f4f6" stroke="#4b5563" strokeWidth="1.5" />
    <text x="150" y="32" textAnchor="middle" fontSize="6" fill="#1f2937">Fases</text>
    
    <circle cx="50" cy="90" r="14" fill="#f3f4f6" stroke="#4b5563" strokeWidth="1.5" />
    <text x="50" y="92" textAnchor="middle" fontSize="6" fill="#1f2937">Tensiones</text>

    <circle cx="150" cy="90" r="14" fill="#f3f4f6" stroke="#4b5563" strokeWidth="1.5" />
    <text x="150" y="92" textAnchor="middle" fontSize="6" fill="#1f2937">Servicio</text>
  </svg>
);

const BalanceDiag = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full">
    {/* Base */}
    <polygon points="90,110 110,110 100,70" fill="#6b7280" />
    <line x1="80" y1="110" x2="120" y2="110" stroke="#4b5563" strokeWidth="3" />
    
    {/* Beam */}
    <line x1="40" y1="70" x2="160" y2="70" stroke="#374151" strokeWidth="4" />
    <circle cx="100" cy="70" r="4" fill="#111827" />
    
    {/* Left pan (Beneficios) */}
    <line x1="40" y1="70" x2="30" y2="90" stroke="#9ca3af" strokeWidth="1.5" />
    <line x1="40" y1="70" x2="50" y2="90" stroke="#9ca3af" strokeWidth="1.5" />
    <path d="M 25 90 Q 40 100 55 90 Z" fill="#10b981" />
    <text x="40" y="105" textAnchor="middle" fontSize="8" fill="#059669" fontWeight="bold">BENEFICIOS</text>
    <text x="40" y="60" textAnchor="middle" fontSize="7" fill="#374151">Dureza/Fatiga</text>
    
    {/* Right pan (Riesgos) */}
    <line x1="160" y1="70" x2="150" y2="90" stroke="#9ca3af" strokeWidth="1.5" />
    <line x1="160" y1="70" x2="170" y2="90" stroke="#9ca3af" strokeWidth="1.5" />
    <path d="M 145 90 Q 160 100 175 90 Z" fill="#ef4444" />
    <text x="160" y="105" textAnchor="middle" fontSize="8" fill="#dc2626" fontWeight="bold">RIESGOS</text>
    <text x="160" y="60" textAnchor="middle" fontSize="7" fill="#374151">Fragilidad</text>
  </svg>
);

// --- Contenido de Datos Estructurado ---

const sectionsData = [
  {
    id: 1,
    title: "Introducción a los efectos de la nitruración",
    icon: <Settings className="text-blue-500 w-6 h-6" />,
    explanation: "La nitruración no solo modifica la superficie de un material, sino que también influye en su comportamiento mecánico global. Estos efectos están relacionados con la formación de capas, la generación de tensiones internas y los cambios en la microestructura.",
    VisualComponent: IntroDiagram
  },
  {
    id: 2,
    title: "Profundidad de la capa nitrurada",
    icon: <Layers className="text-indigo-500 w-6 h-6" />,
    explanation: "La capa no es uniforme. Se distingue la profundidad total (zona afectada por difusión) de la profundidad efectiva (región donde la dureza supera el valor crítico). Esta distinción es fundamental para el diseño mecánico.",
    VisualComponent: DepthGraph
  },
  {
    id: 3,
    title: "Importancia de la zona compuesta",
    icon: <Shield className="text-emerald-500 w-6 h-6" />,
    explanation: "Formada por nitruros en la parte más externa. Mejora la resistencia a la corrosión y da alta dureza superficial, pero puede volverse frágil si su espesor es excesivo. Su control evita fallas prematuras.",
    VisualComponent: CompoundZoneDiag
  },
  {
    id: 4,
    title: "Cambios dimensionales",
    icon: <Expand className="text-amber-500 w-6 h-6" />,
    explanation: "Se produce un aumento de volumen superficial por la incorporación de nitrógeno. Aunque son reducidos, estos cambios dimensionales pueden afectar las tolerancias en componentes de alta precisión.",
    VisualComponent: DimensionalDiag
  },
  {
    id: 5,
    title: "Fatiga y tensiones internas",
    icon: <Activity className="text-red-500 w-6 h-6" />,
    explanation: "Genera tensiones residuales compresivas en la superficie que mejoran la fatiga de alto ciclo y retardan la iniciación de grietas. El equilibrio entre dureza y tensiones es clave para el rendimiento.",
    VisualComponent: FatigueDiag
  },
  {
    id: 6,
    title: "Interacción entre propiedades",
    icon: <Settings className="text-purple-500 w-6 h-6" />,
    explanation: "Las propiedades no actúan aisladas. Hay una interacción constante entre el espesor de la capa, las fases formadas, la distribución de tensiones y las condiciones de servicio final del componente.",
    VisualComponent: InteractionDiag
  },
  {
    id: 7,
    title: "Balance entre beneficios y control",
    icon: <Scale className="text-gray-700 w-6 h-6" />,
    explanation: "El éxito del tratamiento radica en lograr un equilibrio preciso. Se deben maximizar las propiedades (dureza, desgaste, fatiga) minimizando al mismo tiempo los riesgos como fragilidad y desviaciones dimensionales.",
    VisualComponent: BalanceDiag
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Efectos de la <span className="text-blue-600">Nitruración</span>
          </h1>

        </header>

        {/* Content Grid */}
        <div className="space-y-8">
          {sectionsData.map((section, index) => (
            <div 
              key={section.id} 
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-200 overflow-hidden"
            >
              <div className="md:flex">
                
                {/* Text Content */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-slate-100 rounded-lg">
                      {section.icon}
                    </div>
                    <h2 className="text-xl font-bold text-slate-800 leading-tight">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-[1.05rem]">
                    {section.explanation}
                  </p>
                </div>

                {/* Visual Representation */}
                <div className="md:w-1/2 bg-slate-50 p-6 flex items-center justify-center border-t md:border-t-0 md:border-l border-slate-100 relative min-h-[250px]">
               
                  <div className="w-full max-w-[300px] aspect-video">
                    <section.VisualComponent />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
        
 

      </div>
    </div>
  );
}