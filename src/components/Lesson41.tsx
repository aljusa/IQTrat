import React from 'react';
import { Settings, Info, Leaf, AlertTriangle, ArrowRight, Activity, ThermometerSun, Wind, Zap } from 'lucide-react';

// --- Visual Components ---

// 1. Esquema Comparativo (Tabla de 3 columnas)
const ComparativeScheme = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
      <ThermometerSun className="text-red-500 w-10 h-10 mb-2" />
      <h4 className="font-bold text-red-800">Baño de Sales</h4>
      <p className="text-sm text-gray-700 mt-2"><strong>Medio:</strong> Líquido (Sales fundidas)</p>
      <p className="text-sm text-gray-700"><strong>Control:</strong> Básico</p>
      <p className="text-sm text-red-600 font-semibold mt-2">Impacto Ambiental: Alto</p>
    </div>
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
      <Wind className="text-yellow-600 w-10 h-10 mb-2" />
      <h4 className="font-bold text-yellow-800">Gaseosa</h4>
      <p className="text-sm text-gray-700 mt-2"><strong>Medio:</strong> Gases (NH₃, CO, CO₂)</p>
      <p className="text-sm text-gray-700"><strong>Control:</strong> Intermedio a Alto</p>
      <p className="text-sm text-yellow-700 font-semibold mt-2">Impacto Ambiental: Moderado</p>
    </div>
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
      <Zap className="text-green-500 w-10 h-10 mb-2" />
      <h4 className="font-bold text-green-800">Plasma</h4>
      <p className="text-sm text-gray-700 mt-2"><strong>Medio:</strong> Plasma (Gases ionizados)</p>
      <p className="text-sm text-gray-700"><strong>Control:</strong> Muy Preciso</p>
      <p className="text-sm text-green-600 font-semibold mt-2">Impacto Ambiental: Muy Bajo</p>
    </div>
  </div>
);

// 2. Diagrama de Cuba de Sales
const SaltBathDiagram = () => (
  <div className="flex flex-col items-center justify-center bg-slate-50 p-6 rounded-lg w-full h-full border border-slate-200">
    <svg viewBox="0 0 200 150" className="w-full max-w-[250px] drop-shadow-md">
      {/* Cuba */}
      <path d="M 40 20 L 40 130 C 40 140 50 140 60 140 L 140 140 C 150 140 160 140 160 130 L 160 20" fill="none" stroke="#475569" strokeWidth="4" />
      {/* Sales fundidas (Líquido) */}
      <path d="M 42 60 Q 70 70 100 60 T 158 60 L 158 135 C 158 138 150 138 140 138 L 60 138 C 50 138 42 138 42 135 Z" fill="#ef4444" opacity="0.8" className="animate-pulse" />
      {/* Pieza Sumergida */}
      <rect x="85" y="40" width="30" height="70" rx="3" fill="#94a3b8" stroke="#334155" strokeWidth="2" />
      <circle cx="100" cy="50" r="4" fill="#334155" />
      {/* Flechas de flujo de calor e interacción */}
      <path d="M 60 90 L 80 90" stroke="white" strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M 140 90 L 120 90" stroke="white" strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M 100 120 L 100 115" stroke="white" strokeWidth="2" markerEnd="url(#arrow)" />
      {/* Etiquetas */}
      <text x="50" y="110" fontSize="10" fill="white" fontWeight="bold">CNO⁻ / CO₃²⁻</text>
      <text x="100" y="15" fontSize="10" fill="#334155" textAnchor="middle" fontWeight="bold">Pieza (Acero)</text>
      
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="white" />
        </marker>
      </defs>
    </svg>
    <p className="text-xs text-slate-500 mt-4 text-center">Interacción química y transferencia térmica en baño de sales a alta temperatura.</p>
  </div>
);

// 3. Horno Gaseoso
const GasFurnaceDiagram = () => (
  <div className="flex flex-col items-center justify-center bg-slate-50 p-6 rounded-lg w-full h-full border border-slate-200">
    <svg viewBox="0 0 200 150" className="w-full max-w-[250px] drop-shadow-md">
      {/* Horno */}
      <rect x="20" y="20" width="160" height="110" rx="5" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" />
      {/* Entrada de Gases */}
      <path d="M 20 40 L 0 40" stroke="#0284c7" strokeWidth="4" />
      <path d="M 20 110 L 0 110" stroke="#0284c7" strokeWidth="4" />
      {/* Salida de Gases */}
      <path d="M 180 75 L 200 75" stroke="#64748b" strokeWidth="4" strokeDasharray="2,2" />
      
      {/* Pieza */}
      <polygon points="80,50 120,50 120,100 80,100" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
      
      {/* Flujo de Gases y Difusión */}
      <path d="M 30 40 Q 60 40 75 55" stroke="#0284c7" strokeWidth="1.5" fill="none" markerEnd="url(#blue-arrow)" />
      <path d="M 30 110 Q 60 110 75 95" stroke="#ea580c" strokeWidth="1.5" fill="none" markerEnd="url(#orange-arrow)" />
      
      {/* Etiquetas */}
      <text x="5" y="35" fontSize="8" fill="#0284c7" fontWeight="bold">NH₃</text>
      <text x="5" y="105" fontSize="8" fill="#ea580c" fontWeight="bold">CO / CO₂</text>
      <text x="180" y="65" fontSize="8" fill="#64748b">Emisiones</text>
      
      {/* Puntos de difusión */}
      <circle cx="82" cy="60" r="1" fill="#0284c7" />
      <circle cx="82" cy="70" r="1" fill="#ea580c" />
      <circle cx="82" cy="80" r="1" fill="#0284c7" />
      <circle cx="82" cy="90" r="1" fill="#ea580c" />

      <defs>
        <marker id="blue-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0284c7" />
        </marker>
        <marker id="orange-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#ea580c" />
        </marker>
      </defs>
    </svg>
    <p className="text-xs text-slate-500 mt-4 text-center">Atmósfera controlada con gases difundiéndose en la superficie de la pieza.</p>
  </div>
);

// 4. Cámara de Plasma
const PlasmaChamberDiagram = () => (
  <div className="flex flex-col items-center justify-center bg-slate-900 p-6 rounded-lg w-full h-full border border-slate-700">
    <svg viewBox="0 0 200 150" className="w-full max-w-[250px]">
      {/* Cámara de Vacío */}
      <ellipse cx="100" cy="75" rx="80" ry="60" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="4,4" />
      
      {/* Pieza Cátodo */}
      <rect x="90" y="40" width="20" height="70" rx="2" fill="#94a3b8" />
      <path d="M 100 40 L 100 20" stroke="#ef4444" strokeWidth="2" />
      <text x="105" y="25" fontSize="12" fill="#ef4444" fontWeight="bold">-</text>
      
      {/* Resplandor de Plasma */}
      <rect x="86" y="36" width="28" height="78" rx="4" fill="none" stroke="#a855f7" strokeWidth="4" opacity="0.6" className="animate-pulse" filter="url(#glow)" />
      <rect x="82" y="32" width="36" height="86" rx="6" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.4" className="animate-pulse" />
      
      {/* Iones en el plasma */}
      <circle cx="70" cy="50" r="3" fill="#60a5fa" />
      <text x="67" y="48" fontSize="6" fill="white">+</text>
      <circle cx="130" cy="80" r="3" fill="#60a5fa" />
      <text x="127" y="78" fontSize="6" fill="white">+</text>
      <circle cx="60" cy="100" r="3" fill="#60a5fa" />
      <text x="57" y="98" fontSize="6" fill="white">+</text>
      <circle cx="140" cy="60" r="3" fill="#60a5fa" />
      <text x="137" y="58" fontSize="6" fill="white">+</text>
      
      {/* Flechas de bombardeo iónico */}
      <path d="M 75 50 L 85 50" stroke="#60a5fa" strokeWidth="1" markerEnd="url(#ion-arrow)" />
      <path d="M 125 80 L 115 80" stroke="#60a5fa" strokeWidth="1" markerEnd="url(#ion-arrow)" />

      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <marker id="ion-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="3" markerHeight="3" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#60a5fa" />
        </marker>
      </defs>
    </svg>
    <p className="text-xs text-slate-300 mt-4 text-center">Cámara de vacío. La pieza actúa como cátodo, atrayendo iones del resplandor de plasma.</p>
  </div>
);

// 5. Semáforo Ambiental
const EnvironmentalImpactScale = () => (
  <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg w-full shadow-sm border border-slate-200 gap-6">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.6)] flex items-center justify-center mb-3">
        <AlertTriangle className="text-white w-8 h-8" />
      </div>
      <h4 className="font-bold text-slate-800 text-center">Baño de Sales</h4>
      <p className="text-xs text-slate-500 text-center max-w-[120px]">Más contaminante. Residuos tóxicos.</p>
    </div>
    
    <div className="hidden md:block w-full h-1 bg-slate-200 relative">
      <div className="absolute right-0 top-[-4px] w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[10px] border-l-slate-300"></div>
    </div>

    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.6)] flex items-center justify-center mb-3">
        <Activity className="text-white w-8 h-8" />
      </div>
      <h4 className="font-bold text-slate-800 text-center">Gaseosa</h4>
      <p className="text-xs text-slate-500 text-center max-w-[120px]">Impacto intermedio. Emisiones relevantes.</p>
    </div>

    <div className="hidden md:block w-full h-1 bg-slate-200 relative">
      <div className="absolute right-0 top-[-4px] w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[10px] border-l-slate-300"></div>
    </div>

    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] flex items-center justify-center mb-3">
        <Leaf className="text-white w-8 h-8" />
      </div>
      <h4 className="font-bold text-slate-800 text-center">Plasma</h4>
      <p className="text-xs text-slate-500 text-center max-w-[120px]">La más limpia y sostenible.</p>
    </div>
  </div>
);

// 6. Línea de Tiempo
const Timeline = () => (
  <div className="w-full relative py-10 px-4">
    <div className="absolute left-1/2 md:left-auto md:top-1/2 w-1 md:w-full h-full md:h-1 bg-slate-300 transform -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 z-0"></div>
    
    <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-0">
      
      {/* Nodo 1 */}
      <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md border-t-4 border-red-500 w-full md:w-64">
        <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3 shadow-lg z-10">1</div>
        <h4 className="font-bold text-slate-800 mb-1">Baño de Sales</h4>
        <p className="text-sm text-slate-600 text-center">Tecnología histórica. Rápida pero con impacto ecológico severo.</p>
        <span className="mt-2 text-xs font-semibold text-red-500 bg-red-50 px-2 py-1 rounded-full">- Control / + Contaminación</span>
      </div>

      {/* Nodo 2 */}
      <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md border-t-4 border-yellow-400 w-full md:w-64">
        <div className="bg-yellow-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3 shadow-lg z-10">2</div>
        <h4 className="font-bold text-slate-800 mb-1">Gaseosa</h4>
        <p className="text-sm text-slate-600 text-center">Transición industrial. Atmósferas limpias pero con gestión de gases.</p>
        <span className="mt-2 text-xs font-semibold text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">= Control / = Contaminación</span>
      </div>

      {/* Nodo 3 */}
      <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md border-t-4 border-green-500 w-full md:w-64">
        <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3 shadow-lg z-10">3</div>
        <h4 className="font-bold text-slate-800 mb-1">Plasma</h4>
        <p className="text-sm text-slate-600 text-center">Vanguardia sostenible. Precisión energética con nulas emisiones.</p>
        <span className="mt-2 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">+ Control / - Contaminación</span>
      </div>

    </div>
  </div>
);

// --- Contenedor de Sección Reutilizable ---
const ConceptSection = ({ title, text, VisualComponent, index }) => {
  const isEven = index % 2 === 0;
  return (
    <section className="mb-16 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="bg-slate-50 border-b border-slate-100 p-6 flex items-center gap-3">
        <div className="bg-blue-600 text-white p-2 rounded-lg">
          <Settings size={20} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
      </div>
      
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} p-6 gap-8 items-center`}>
        {/* Explicación Académica */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
            <Info size={18} />
            <h3>Explicación del Concepto</h3>
          </div>
          {text.map((paragraph, i) => (
            <p key={i} className="text-slate-600 leading-relaxed text-justify">
              {paragraph}
            </p>
          ))}
        </div>
        
        {/* Sugerencia Visual Renderizada */}
        <div className="flex-1 w-full flex flex-col items-center">
           <div className="w-full bg-slate-50 p-4 rounded-xl border border-dashed border-slate-300">
             <h3 className="text-sm text-slate-500 font-semibold mb-4 text-center uppercase tracking-wider">Representación Visual</h3>
             <div className="flex justify-center w-full">
               {VisualComponent}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};


// --- Main Application ---
export default function App() {
  const sectionsData = [
    {
      title: "Introducción a las tecnologías disponibles",
      text: [
        "La nitrocarburización puede llevarse a cabo mediante distintas tecnologías que difieren en su forma de suministrar carbono y nitrógeno, así como en su eficiencia, control del proceso e impacto ambiental.",
        "La elección del método depende de los requerimientos técnicos, económicos y regulatorios de cada aplicación industrial."
      ],
      visual: <ComparativeScheme />
    },
    {
      title: "Nitrocarburización en baño de sales",
      text: [
        "Este método se basa en el uso de sales fundidas, principalmente cianatos y carbonatos, que actúan como medio de transferencia y fuente de elementos difusivos. La pieza se sumerge en el baño a alta temperatura, lo que permite una transferencia térmica muy eficiente.",
        "Entre sus características destacan la rapidez del tratamiento y su amplia adopción histórica en la industria debido a su simplicidad operativa.",
        "Sin embargo, presenta desventajas importantes: las sales empleadas son altamente tóxicas, generan residuos peligrosos y requieren estrictos protocolos de manejo y disposición, lo que implica un elevado impacto ambiental."
      ],
      visual: <SaltBathDiagram />
    },
    {
      title: "Nitrocarburización gaseosa",
      text: [
        "En este proceso se emplean atmósferas controladas que contienen amoniaco (NH₃) como fuente de nitrógeno y gases ricos en carbono como CO, CO₂ o CH₄. La descomposición de estos gases en la superficie permite la difusión de los elementos hacia el material.",
        "Esta tecnología ofrece un entorno más limpio que el baño de sales y permite un mayor control de la composición química de la atmósfera, lo que mejora la reproducibilidad del tratamiento.",
        "No obstante, requiere sistemas de control más complejos y genera emisiones contaminantes, especialmente compuestos de carbono y nitrógeno, que deben ser gestionados adecuadamente."
      ],
      visual: <GasFurnaceDiagram />
    },
    {
      title: "Nitrocarburización por plasma",
      text: [
        "La nitrocarburización por plasma (o iónica) se realiza en condiciones de baja presión mediante descargas eléctricas que ionizan los gases presentes. Esto genera un plasma que activa la superficie del material y favorece la difusión de nitrógeno y carbono.",
        "Entre sus principales ventajas se encuentran una alta eficiencia energética, un control preciso del proceso, menor consumo de gases y una excelente uniformidad, incluso en geometrías complejas.",
        "Desde el punto de vista ambiental, representa la opción más limpia: reduce drásticamente las emisiones contaminantes, con niveles de CO y CO₂ hasta miles de veces menores y una disminución significativa de NOx."
      ],
      visual: <PlasmaChamberDiagram />
    },
    {
      title: "Comparación del impacto ambiental",
      text: [
        "Las tres tecnologías pueden ordenarse según su impacto ambiental:",
        "• El baño de sales es el más contaminante debido a la toxicidad y gestión de residuos.",
        "• El proceso gaseoso presenta un impacto intermedio, con emisiones controlables pero relevantes.",
        "• El plasma es la alternativa más limpia y sostenible, gracias a su eficiencia y bajas emisiones.",
        "Esta comparación refleja la tendencia industrial hacia tecnologías más responsables con el medio ambiente."
      ],
      visual: <EnvironmentalImpactScale />
    },
    {
      title: "Evolución tecnológica y sostenibilidad",
      text: [
        "El desarrollo de tecnologías de nitrocarburización ha estado impulsado por la necesidad de equilibrar rendimiento técnico y sostenibilidad ambiental. En este contexto, la tecnología por plasma se posiciona como la opción más avanzada, al ofrecer mejoras tanto en calidad del tratamiento como en reducción del impacto ecológico."
      ],
      visual: <Timeline />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-blue-900 text-white py-16 px-6 text-center shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-blue-800/50 px-4 py-2 rounded-full text-blue-200 text-sm font-semibold mb-6">
            <Leaf size={16} />
            Módulo Educativo Interactivo
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Tecnologías de Nitrocarburización y su Impacto Ambiental
          </h1>
          <p className="text-xl text-blue-200 font-light max-w-2xl mx-auto">
            Análisis comparativo de métodos industriales, desde el baño de sales hasta el plasma iónico, enfocado en sostenibilidad y eficiencia.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {sectionsData.map((section, idx) => (
          <ConceptSection 
            key={idx}
            index={idx}
            title={section.title}
            text={section.text}
            VisualComponent={section.visual}
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center border-t border-slate-800">
        <p className="text-sm">
          Generado con enfoque educativo por <span className="text-blue-400 font-semibold">Ideastoweb</span>.
        </p>
      </footer>
    </div>
  );
}