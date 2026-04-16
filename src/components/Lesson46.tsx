import React from 'react';
import { Layers, Activity, Shield, TrendingDown, Target, Zap, Cpu, ArrowRight } from 'lucide-react';

// --- Visual Components (SVGs & Tailwind) ---

const FlowChartVisual = () => (
  <div className="flex flex-col items-center justify-center h-full space-y-4 py-6 w-full">
    <div className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md w-4/5 text-center font-medium">
      Tratamiento Térmico (Carburización)
    </div>
    <ArrowRight className="text-blue-400 rotate-90" size={24} />
    <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md w-4/5 text-center font-medium">
      Microestructura
    </div>
    <ArrowRight className="text-indigo-400 rotate-90" size={24} />
    <div className="bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-md w-4/5 text-center font-medium">
      Propiedades Mecánicas
    </div>
  </div>
);

const CrossSectionVisual = () => (
  <div className="flex items-center justify-center h-full py-6">
    <svg viewBox="0 0 100 100" className="w-48 h-48 drop-shadow-xl">
      <defs>
        <radialGradient id="carbonGradient" cx="50%" cy="50%" r="50%">
          <stop offset="40%" stopColor="#cbd5e1" /> {/* Light core */}
          <stop offset="80%" stopColor="#64748b" /> {/* Transition */}
          <stop offset="100%" stopColor="#0f172a" /> {/* Dark surface */}
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#carbonGradient)" />
      <text x="50" y="55" fontSize="8" textAnchor="middle" fill="#334155" fontWeight="bold">NÚCLEO</text>
      <text x="50" y="12" fontSize="6" textAnchor="middle" fill="#f8fafc">SUPERFICIE (ALTO C)</text>
    </svg>
  </div>
);

const ChartVisual = ({ title, yLabel, color }) => (
  <div className="flex flex-col items-center justify-center h-full w-full p-4">
    <span className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">{title}</span>
    <svg viewBox="0 0 100 100" className="w-full h-40 max-w-[200px]">
      {/* Axes */}
      <line x1="10" y1="10" x2="10" y2="90" stroke="#94a3b8" strokeWidth="2" />
      <line x1="10" y1="90" x2="90" y2="90" stroke="#94a3b8" strokeWidth="2" />
      {/* Labels */}
      <text x="5" y="50" fontSize="6" fill="#64748b" transform="rotate(-90 5,50)" textAnchor="middle">{yLabel}</text>
      <text x="50" y="98" fontSize="6" fill="#64748b" textAnchor="middle">Profundidad</text>
      {/* Curve */}
      <path d="M 12 20 Q 30 20 50 50 T 88 88" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  </div>
);

const MicrostructureVisual = () => (
  <div className="flex items-center justify-center h-full space-x-2 py-4 w-full">
    {/* Martensite (Surface) */}
    <div className="flex flex-col items-center w-1/2">
      <span className="text-xs font-semibold text-gray-600 mb-1">Superficie (Martensita)</span>
      <div className="w-full h-32 bg-slate-800 rounded-md overflow-hidden relative border-2 border-slate-700">
        <svg width="100%" height="100%" className="absolute inset-0 opacity-60">
          <path d="M10 10 L40 50 M20 0 L50 60 M0 30 L60 20 M30 80 L80 10 M50 100 L90 40 M10 80 L60 90 M70 0 L100 80" stroke="#94a3b8" strokeWidth="2" />
        </svg>
      </div>
    </div>
    {/* Ferrite/Pearlite (Core) */}
    <div className="flex flex-col items-center w-1/2">
      <span className="text-xs font-semibold text-gray-600 mb-1">Núcleo (Ferrita/Perlita)</span>
      <div className="w-full h-32 bg-slate-300 rounded-md overflow-hidden relative border-2 border-slate-400">
        <svg width="100%" height="100%" className="absolute inset-0 opacity-50">
           <circle cx="20" cy="20" r="10" fill="#f8fafc" stroke="#94a3b8"/>
           <circle cx="60" cy="30" r="15" fill="#f8fafc" stroke="#94a3b8"/>
           <circle cx="30" cy="60" r="12" fill="#f8fafc" stroke="#94a3b8"/>
           <circle cx="70" cy="70" r="18" fill="#f8fafc" stroke="#94a3b8"/>
           <circle cx="90" cy="15" r="8" fill="#f8fafc" stroke="#94a3b8"/>
        </svg>
      </div>
    </div>
  </div>
);

const WearVisual = () => (
  <div className="flex flex-col items-center justify-center h-full w-full py-2 space-y-4">
    {/* Soft Surface */}
    <div className="w-full max-w-[250px] flex items-center justify-between">
      <div className="text-xs font-medium text-gray-500 w-24">Sin Tratar</div>
      <div className="relative w-40 h-12 bg-slate-300 rounded-b-md border-t-4 border-dashed border-slate-500">
        <div className="absolute -top-3 left-4 w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
        <div className="absolute -top-4 left-16 w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        <div className="absolute -top-2 left-24 w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
      </div>
    </div>
    {/* Hard Surface */}
    <div className="w-full max-w-[250px] flex items-center justify-between">
      <div className="text-xs font-medium text-blue-600 w-24">Carburizado</div>
      <div className="w-40 h-12 bg-slate-300 rounded-b-md border-t-4 border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-transparent h-4"></div>
      </div>
    </div>
  </div>
);

const FatigueVisual = () => (
  <div className="flex justify-center items-center h-full gap-4 w-full p-4">
    <div className="w-1/2 flex flex-col items-center">
      <div className="w-20 h-24 bg-slate-300 rounded-sm relative border-t-2 border-red-400">
        <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-12">
          <path d="M 4 0 L 6 10 L 3 15 L 7 25 L 4 35 L 5 45" fill="none" stroke="#ef4444" strokeWidth="2" />
        </svg>
      </div>
      <span className="text-[10px] mt-2 text-center">Falla Rápida<br/>(Grieta Profunda)</span>
    </div>
    <div className="w-1/2 flex flex-col items-center">
      <div className="w-20 h-24 bg-slate-300 rounded-sm relative border-t-8 border-slate-800">
        <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-4">
          <path d="M 4 0 L 5 5" fill="none" stroke="#ef4444" strokeWidth="1" />
        </svg>
      </div>
      <span className="text-[10px] mt-2 text-center text-blue-700 font-medium">Alta Resistencia<br/>(Grieta Retenida)</span>
    </div>
  </div>
);

const CyclicLoadVisual = () => (
  <div className="flex items-center justify-center h-full w-full py-4">
     <svg viewBox="0 0 100 100" className="w-48 h-48">
        {/* Load Arrows */}
        <path d="M 30 10 L 30 25 M 25 20 L 30 25 L 35 20" fill="none" stroke="#ef4444" strokeWidth="2"/>
        <path d="M 50 5 L 50 25 M 45 20 L 50 25 L 55 20" fill="none" stroke="#ef4444" strokeWidth="2"/>
        <path d="M 70 10 L 70 25 M 65 20 L 70 25 L 75 20" fill="none" stroke="#ef4444" strokeWidth="2"/>
        
        {/* Material Block */}
        <rect x="10" y="25" width="80" height="60" rx="4" fill="#cbd5e1" />
        <rect x="10" y="25" width="80" height="15" rx="4" fill="#1e293b" />
        
        {/* Energy Dissipation (Waves in core) */}
        <path d="M 30 50 Q 50 70 70 50" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M 20 60 Q 50 90 80 60" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2 2" />
        
        {/* Labels */}
        <text x="50" y="35" fontSize="5" fill="#fff" textAnchor="middle">Superficie Resiste</text>
        <text x="50" y="65" fontSize="5" fill="#475569" textAnchor="middle">Núcleo Disipa Energía</text>
     </svg>
  </div>
);

const SummaryVisual = () => (
  <div className="flex flex-col items-center justify-center h-full w-full space-y-2 p-2">
    <div className="w-full bg-slate-800 text-white rounded-t-lg p-3 text-center border-b-2 border-emerald-400">
      <div className="text-xs font-bold uppercase tracking-widest text-slate-300">Superficie Endurecida</div>
      <div className="text-sm">Martensita + Carburos</div>
      <div className="text-xs text-emerald-300 mt-1">✓ Alta Dureza ✓ Resistencia al Desgaste</div>
    </div>
    <div className="w-full bg-slate-300 text-slate-800 rounded-b-lg p-4 text-center">
      <div className="text-xs font-bold uppercase tracking-widest text-slate-600">Núcleo Tenaz</div>
      <div className="text-sm">Ferrita + Perlita</div>
      <div className="text-xs text-blue-600 mt-1">✓ Ductilidad ✓ Absorción de Impactos</div>
    </div>
  </div>
);


// --- Main Application Component ---

export default function App() {
  const sections = [
    {
      title: "Introducción a la relación microestructura–propiedades",
      text: "En los materiales metálicos, las propiedades mecánicas dependen directamente de su microestructura. La carburización actúa precisamente sobre este nivel, modificando la distribución del carbono y, con ello, las fases presentes en el material.",
      icon: <Activity className="text-blue-500" />,
      visual: <FlowChartVisual />
    },
    {
      title: "Formación de la zona superficial enriquecida en carbono",
      text: "Durante la carburización, el carbono se concentra en la superficie del material, generando una capa externa con mayor contenido de carbono que el núcleo. Esta zona es la base de las propiedades mejoradas del material.",
      icon: <Layers className="text-indigo-500" />,
      visual: <CrossSectionVisual />
    },
    {
      title: "Gradiente de concentración de carbono",
      text: "El carbono no se distribuye de manera uniforme, sino que forma un gradiente: su concentración es máxima en la superficie y disminuye progresivamente hacia el interior. Este gradiente es clave para lograr una transición suave de propiedades.",
      icon: <TrendingDown className="text-emerald-500" />,
      visual: <ChartVisual title="Perfil de Carbono" yLabel="% Carbono" color="#10b981" />
    },
    {
      title: "Transformaciones microestructurales tras el enfriamiento",
      text: "Después de la carburización, el enfriamiento (generalmente por temple) transforma la capa rica en carbono en estructuras duras como la martensita. En algunos casos también pueden formarse carburos. El núcleo, con menor contenido de carbono, desarrolla estructuras más dúctiles.",
      icon: <Cpu className="text-purple-500" />,
      visual: <MicrostructureVisual />
    },
    {
      title: "Perfil de dureza en el material",
      text: "Como resultado del gradiente de carbono y las transformaciones microestructurales, la dureza del material no es uniforme. Es máxima en la superficie y disminuye gradualmente hacia el interior.",
      icon: <Target className="text-red-500" />,
      visual: <ChartVisual title="Perfil de Dureza" yLabel="Dureza (HRC)" color="#ef4444" />
    },
    {
      title: "Relación entre microestructura y resistencia al desgaste",
      text: "La presencia de martensita y/o carburos en la superficie proporciona una alta dureza, lo que reduce el desgaste por fricción. Esto es especialmente importante en componentes sometidos a contacto continuo.",
      icon: <Shield className="text-orange-500" />,
      visual: <WearVisual />
    },
    {
      title: "Mejora de la resistencia a la fatiga",
      text: "El núcleo tenaz combinado con una superficie endurecida permite al material soportar esfuerzos cíclicos sin fallar prematuramente. La capa superficial protege contra la iniciación de grietas.",
      icon: <Zap className="text-yellow-500" />,
      visual: <FatigueVisual />
    },
    {
      title: "Comportamiento bajo cargas cíclicas",
      text: "La combinación de dureza superficial y ductilidad interna permite que el material absorba impactos y distribuya esfuerzos sin fracturarse. Esto es clave en piezas sometidas a cargas variables.",
      icon: <Activity className="text-teal-500" />,
      visual: <CyclicLoadVisual />
    },
    {
      title: "Importancia de la microestructura en el rendimiento final",
      text: "La carburización no solo añade carbono, sino que diseña una microestructura funcional: una capa externa resistente y un núcleo capaz de soportar deformaciones. Esta ingeniería microestructural es esencial en aplicaciones industriales exigentes.",
      icon: <Target className="text-blue-700" />,
      visual: <SummaryVisual />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-slate-900 text-white py-12 px-6 shadow-lg border-b-4 border-blue-500">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Microestructura y propiedades <br className="hidden md:block"/> resultantes de la carburización
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 overflow-hidden flex flex-col ${index === sections.length - 1 ? 'md:col-span-2' : ''}`}
            >
              {/* Text Area */}
              <div className="p-6 md:p-8 flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-slate-800 leading-tight">
                    {section.title}
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {section.text}
                </p>
              </div>

              {/* Visual Area */}
              <div className="bg-slate-50 border-t border-slate-100 h-64 flex items-center justify-center p-4">
                {section.visual}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}