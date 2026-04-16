import React from 'react';
import { 
  Flame, 
  Layers, 
  ThermometerSun, 
  Grid3X3, 
  Shield, 
  TableProperties, 
  Network 
} from 'lucide-react';

// --- Componentes Visuales (Diagramas) ---

const FurnaceDiagram = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-200">
    <svg viewBox="0 0 400 250" className="w-full max-w-md h-auto">
      {/* Horno */}
      <rect x="50" y="20" width="300" height="200" rx="10" fill="#cbd5e1" stroke="#64748b" strokeWidth="4" />
      <rect x="60" y="30" width="280" height="180" rx="5" fill="#f8fafc" />
      
      {/* Calor / Resistencias */}
      <path d="M 70 200 Q 100 180 130 200 T 190 200 T 250 200 T 310 200" fill="none" stroke="#ef4444" strokeWidth="6" strokeLinecap="round"/>
      <path d="M 70 40 Q 100 60 130 40 T 190 40 T 250 40 T 310 40" fill="none" stroke="#ef4444" strokeWidth="6" strokeLinecap="round"/>

      {/* Pieza Metálica */}
      <rect x="140" y="90" width="120" height="60" rx="4" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
      <text x="200" y="125" textAnchor="middle" fill="white" className="text-sm font-bold font-sans">Acero</text>

      {/* Flujo de Carbono (Rojo) */}
      <g stroke="#dc2626" fill="#dc2626">
        <path d="M 100 120 L 130 120" strokeWidth="3" markerEnd="url(#arrowhead-red)" />
        <circle cx="90" cy="120" r="6" />
        <text x="90" y="105" textAnchor="middle" fill="#dc2626" className="text-xs font-bold font-sans">C</text>
      </g>

      {/* Flujo de Nitrógeno (Azul) */}
      <g stroke="#2563eb" fill="#2563eb">
        <path d="M 300 120 L 270 120" strokeWidth="3" markerEnd="url(#arrowhead-blue)" />
        <circle cx="310" cy="120" r="6" />
        <text x="310" y="105" textAnchor="middle" fill="#2563eb" className="text-xs font-bold font-sans">N</text>
      </g>

      {/* Definición de flechas */}
      <defs>
        <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#dc2626" />
        </marker>
        <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#2563eb" />
        </marker>
      </defs>
    </svg>
    <p className="mt-4 text-sm text-slate-500 italic">Difusión de gases en el horno a alta temperatura.</p>
  </div>
);

const BeforeAfterDiagram = () => (
  <div className="flex flex-col sm:flex-row items-center justify-center gap-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
    <div className="text-center">
      <div className="w-32 h-32 bg-slate-300 rounded-md border-2 border-slate-400 mx-auto flex items-center justify-center mb-2 shadow-inner">
        <span className="text-slate-600 font-medium">Acero Base</span>
      </div>
      <span className="font-semibold text-slate-700">Antes</span>
    </div>
    <div className="text-slate-400">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
    </div>
    <div className="text-center">
      <div className="w-32 h-32 bg-slate-300 rounded-md border-2 border-slate-400 mx-auto relative overflow-hidden shadow-inner flex items-center justify-center mb-2">
        {/* Capa endurecida simulada con un gradiente */}
        <div className="absolute top-0 left-0 right-0 bottom-0 border-[8px] border-indigo-500/80 rounded-md pointer-events-none"></div>
        <span className="text-slate-600 font-medium relative z-10">Acero Base</span>
      </div>
      <span className="font-semibold text-slate-700">Después</span>
      <p className="text-xs text-indigo-600 mt-1 font-medium">Capa Modificada (C+N)</p>
    </div>
  </div>
);

const TemperatureGraph = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-200">
    <svg viewBox="0 0 400 220" className="w-full max-w-md h-auto">
      {/* Ejes */}
      <line x1="40" y1="180" x2="380" y2="180" stroke="#64748b" strokeWidth="2" />
      <line x1="40" y1="20" x2="40" y2="180" stroke="#64748b" strokeWidth="2" />
      
      {/* Zona Austenítica (Highlight) */}
      <rect x="40" y="40" width="340" height="60" fill="#fef08a" opacity="0.4" />
      <text x="210" y="75" textAnchor="middle" fill="#ca8a04" className="text-sm font-bold">Fase Austenítica (Alta disolución de C y N)</text>

      {/* Curva de calentamiento */}
      <path d="M 40 180 Q 100 180 150 70 T 360 70" fill="none" stroke="#ef4444" strokeWidth="3" />

      {/* Marcas Y (Temperatura) */}
      <text x="30" y="45" textAnchor="end" className="text-xs fill-slate-600">940°C</text>
      <line x1="35" y1="40" x2="40" y2="40" stroke="#64748b" strokeWidth="2" />
      
      <text x="30" y="105" textAnchor="end" className="text-xs fill-slate-600">800°C</text>
      <line x1="35" y1="100" x2="40" y2="100" stroke="#64748b" strokeWidth="2" />

      {/* Etiquetas Ejes */}
      <text x="210" y="210" textAnchor="middle" className="text-sm font-semibold fill-slate-700">Tiempo</text>
      <text x="15" y="100" transform="rotate(-90 15 100)" textAnchor="middle" className="text-sm font-semibold fill-slate-700">Temperatura</text>
    </svg>
  </div>
);

const LatticeDiagram = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-200">
    <div className="relative w-64 h-64 bg-white border-2 border-slate-200 shadow-sm overflow-hidden">
      {/* Red de Hierro */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 p-2">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="bg-slate-300 rounded-full w-full h-full flex items-center justify-center border border-slate-400">
            <span className="text-[10px] text-slate-500 font-bold">Fe</span>
          </div>
        ))}
      </div>
      
      {/* Átomos de C y N difundiendo (Intersticiales) */}
      <div className="absolute top-[18%] left-[20%] w-4 h-4 bg-red-500 rounded-full border border-red-700 shadow-sm flex items-center justify-center">
        <span className="text-[8px] text-white">C</span>
      </div>
      <div className="absolute top-[43%] left-[45%] w-4 h-4 bg-blue-500 rounded-full border border-blue-700 shadow-sm flex items-center justify-center">
        <span className="text-[8px] text-white">N</span>
      </div>
      <div className="absolute top-[68%] left-[20%] w-4 h-4 bg-red-500 rounded-full border border-red-700 shadow-sm flex items-center justify-center">
        <span className="text-[8px] text-white">C</span>
      </div>
      <div className="absolute top-[18%] left-[70%] w-4 h-4 bg-blue-500 rounded-full border border-blue-700 shadow-sm flex items-center justify-center">
        <span className="text-[8px] text-white">N</span>
      </div>

      {/* Flechas de movimiento */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
        <path d="M 52 10 L 52 40" stroke="#475569" strokeWidth="2" strokeDasharray="4" markerEnd="url(#arrow-small)" />
        <path d="M 180 10 L 180 40" stroke="#475569" strokeWidth="2" strokeDasharray="4" markerEnd="url(#arrow-small)" />
        <path d="M 116 80 L 116 100" stroke="#475569" strokeWidth="2" strokeDasharray="4" markerEnd="url(#arrow-small)" />
        <defs>
          <marker id="arrow-small" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="#475569" />
          </marker>
        </defs>
      </svg>
    </div>
    <div className="flex gap-4 mt-4 text-sm font-medium">
      <span className="flex items-center gap-1"><span className="w-3 h-3 bg-slate-300 rounded-full inline-block border border-slate-400"></span> Hierro</span>
      <span className="flex items-center gap-1"><span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span> Carbono</span>
      <span className="flex items-center gap-1"><span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span> Nitrógeno</span>
    </div>
  </div>
);

const CrossSectionDiagram = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
    <div className="relative w-64 h-48 transform -skew-x-12 rotate-3 drop-shadow-xl transition-transform hover:scale-105">
      {/* Núcleo Tenaz */}
      <div className="absolute inset-0 bg-slate-300 border-4 border-slate-400 rounded-lg flex items-center justify-center shadow-inner">
         <span className="font-bold text-slate-600 text-lg tracking-widest rotate-12 skew-x-12">NÚCLEO TENAZ</span>
      </div>
      {/* Capa Endurecida Superficial */}
      <div className="absolute inset-0 border-[12px] border-indigo-700 rounded-lg opacity-90 pointer-events-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"></div>
      
      {/* Etiquetas descriptivas fuera de la perspectiva */}
      <div className="absolute -top-6 -left-8 bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1 transform skew-x-12 -rotate-3">
        Capa Superficial Dura
      </div>
    </div>
  </div>
);

const ComparisonTable = () => (
  <div className="overflow-x-auto w-full bg-white rounded-xl border border-slate-200 shadow-sm">
    <table className="w-full text-sm text-left">
      <thead className="bg-slate-100 text-slate-700">
        <tr>
          <th className="px-6 py-3 font-semibold">Tratamiento</th>
          <th className="px-6 py-3 font-semibold">Elementos</th>
          <th className="px-6 py-3 font-semibold">Temperatura</th>
          <th className="px-6 py-3 font-semibold">Fase del Acero</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200">
        <tr className="hover:bg-slate-50">
          <td className="px-6 py-4 font-medium text-slate-800">Carburización</td>
          <td className="px-6 py-4"><span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">Carbono</span></td>
          <td className="px-6 py-4">850 - 950 °C</td>
          <td className="px-6 py-4">Austenítica</td>
        </tr>
        <tr className="hover:bg-slate-50">
          <td className="px-6 py-4 font-medium text-slate-800">Nitruración</td>
          <td className="px-6 py-4"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">Nitrógeno</span></td>
          <td className="px-6 py-4">500 - 550 °C</td>
          <td className="px-6 py-4">Ferrítica</td>
        </tr>
        <tr className="hover:bg-slate-50">
          <td className="px-6 py-4 font-medium text-slate-800">Nitrocarburización</td>
          <td className="px-6 py-4">
             <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-bold">C + N</span>
          </td>
          <td className="px-6 py-4">550 - 580 °C</td>
          <td className="px-6 py-4">Ferrítica</td>
        </tr>
        <tr className="bg-indigo-50 hover:bg-indigo-100 border-l-4 border-indigo-600">
          <td className="px-6 py-4 font-bold text-indigo-900">Carbonitruración</td>
          <td className="px-6 py-4">
             <span className="bg-indigo-200 text-indigo-800 px-2 py-1 rounded text-xs font-bold">C + N</span>
          </td>
          <td className="px-6 py-4 font-medium text-indigo-900">800 - 940 °C</td>
          <td className="px-6 py-4 font-medium text-indigo-900">Austenítica</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const IntegrationFlowchart = () => (
  <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-indigo-900 text-white rounded-xl shadow-lg">
    <div className="flex flex-col items-center text-center p-4 bg-indigo-800/50 rounded-lg flex-1 w-full border border-indigo-700">
      <div className="bg-indigo-500 p-3 rounded-full mb-3 shadow-md">
        <Flame className="w-6 h-6 text-white" />
      </div>
      <h4 className="font-bold mb-1">1. Proceso</h4>
      <p className="text-xs text-indigo-200">Adición de C y N a 800-940°C en fase austenítica.</p>
    </div>
    
    <div className="hidden md:block text-indigo-400">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
    </div>
    <div className="md:hidden text-indigo-400">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
    </div>

    <div className="flex flex-col items-center text-center p-4 bg-indigo-800/50 rounded-lg flex-1 w-full border border-indigo-700">
      <div className="bg-indigo-500 p-3 rounded-full mb-3 shadow-md">
        <Grid3X3 className="w-6 h-6 text-white" />
      </div>
      <h4 className="font-bold mb-1">2. Microestructura</h4>
      <p className="text-xs text-indigo-200">Formación de nuevas fases endurecidas en superficie.</p>
    </div>

    <div className="hidden md:block text-indigo-400">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
    </div>
    <div className="md:hidden text-indigo-400">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
    </div>

    <div className="flex flex-col items-center text-center p-4 bg-indigo-800/50 rounded-lg flex-1 w-full border border-indigo-700">
      <div className="bg-indigo-500 p-3 rounded-full mb-3 shadow-md">
        <Shield className="w-6 h-6 text-white" />
      </div>
      <h4 className="font-bold mb-1">3. Propiedades</h4>
      <p className="text-xs text-indigo-200">Alta dureza y desgaste con un núcleo tenaz.</p>
    </div>
  </div>
);

// --- Estructura de Datos del Contenido Académico ---

const contentData = [
  {
    id: 1,
    title: "Introducción al tema",
    icon: <Flame className="w-6 h-6 text-orange-500" />,
    explanation: "La carbonitruración es un tratamiento termoquímico aplicado a aceros cuyo objetivo es mejorar las propiedades superficiales sin alterar significativamente el núcleo del material. Este proceso combina la incorporación de carbono y nitrógeno para lograr una superficie más dura y resistente al desgaste.",
    visualSuggestion: "Un esquema general del proceso donde se observe una pieza metálica dentro de un horno, con flechas que indiquen la entrada de carbono y nitrógeno hacia la superficie.",
    visualComponent: <FurnaceDiagram />
  },
  {
    id: 2,
    title: "Definición de carbonitruración",
    icon: <Layers className="w-6 h-6 text-indigo-500" />,
    explanation: "Consiste en la difusión simultánea de carbono y nitrógeno en la superficie del acero a altas temperaturas, modificando su composición química y microestructura superficial. A diferencia de otros tratamientos, combina los efectos de ambos elementos en un solo proceso.",
    visualSuggestion: "Un diagrama comparativo de la superficie antes y después del tratamiento, mostrando una capa modificada con distinta composición química.",
    visualComponent: <BeforeAfterDiagram />
  },
  {
    id: 3,
    title: "Condiciones del proceso",
    icon: <ThermometerSun className="w-6 h-6 text-red-500" />,
    explanation: "Este tratamiento se realiza típicamente entre 800 y 940 °C, en condiciones donde el acero se encuentra en estado austenítico. En este estado, el material tiene mayor capacidad para disolver carbono y nitrógeno en su estructura cristalina.",
    visualSuggestion: "Un gráfico temperatura–estructura del acero que destaque la región austenítica y su relación con la absorción de elementos.",
    visualComponent: <TemperatureGraph />
  },
  {
    id: 4,
    title: "Mecanismo de incorporación de elementos",
    icon: <Grid3X3 className="w-6 h-6 text-teal-500" />,
    explanation: "El proceso se basa en la descomposición de gases ricos en carbono y nitrógeno, cuyos átomos son absorbidos por la superficie metálica y posteriormente difunden hacia el interior. Este fenómeno ocurre mediante difusión en la red cristalina del metal.",
    visualSuggestion: "Una representación microscópica de la red cristalina del acero con átomos de carbono y nitrógeno moviéndose hacia el interior.",
    visualComponent: <LatticeDiagram />
  },
  {
    id: 5,
    title: "Formación de capas endurecidas",
    icon: <Shield className="w-6 h-6 text-slate-700" />,
    explanation: "Como resultado de la difusión, se generan nuevas fases endurecidas en la superficie del acero. Estas fases incrementan la dureza y la resistencia al desgaste, manteniendo un núcleo más tenaz y resistente a impactos.",
    visualSuggestion: "Un corte transversal del material donde se distinga claramente la capa superficial endurecida y el núcleo interno.",
    visualComponent: <CrossSectionDiagram />
  },
  {
    id: 6,
    title: "Relación con otros tratamientos",
    icon: <TableProperties className="w-6 h-6 text-blue-500" />,
    explanation: "La carbonitruración se relaciona con procesos como la carburización (solo C), la nitruración (solo N) y la nitrocarburización (C y N a menor temp.). Su característica distintiva es la combinación de ambos elementos en condiciones austeníticas.",
    visualSuggestion: "Una tabla comparativa simplificada que muestre los tratamientos, los elementos involucrados y las condiciones de operación.",
    visualComponent: <ComparisonTable />
  },
  {
    id: 7,
    title: "Cierre conceptual",
    icon: <Network className="w-6 h-6 text-purple-500" />,
    explanation: "Es un proceso clave en la ingeniería de superficies, ya que permite optimizar simultáneamente la dureza, la resistencia al desgaste y la tenacidad del material. Su valor radica en la combinación controlada de carbono y nitrógeno en condiciones específicas.",
    visualSuggestion: "Un esquema integrador que relacione proceso → microestructura → propiedades mecánicas obtenidas.",
    visualComponent: <IntegrationFlowchart />
  }
];

// --- Componente Principal ---

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-indigo-200">
      
      {/* Cabecera / Hero */}
      <header className="bg-indigo-900 text-white py-16 px-6 shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Fundamentos de la Carbonitruración</h1>
      
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-5xl mx-auto py-12 px-6">
        <div className="grid gap-12">
          {contentData.map((section, index) => (
            <section 
              key={section.id} 
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col lg:flex-row hover:shadow-md transition-shadow duration-300"
            >
              {/* Sección de Texto */}
              <div className="p-8 lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">
                    <span className="text-slate-400 mr-2 text-xl">{index + 1}.</span> 
                    {section.title}
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                  {section.explanation}
                </p>
            
              </div>
              
              {/* Sección Visual */}
              <div className="bg-slate-100 p-8 lg:w-1/2 border-t lg:border-t-0 lg:border-l border-slate-200 flex items-center justify-center">
                <div className="w-full">
                  {section.visualComponent}
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>

    
    </div>
  );
}