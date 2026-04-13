import React, { useState } from 'react';
import { Settings, CircleDot, Wrench, ThermometerSun, ChevronDown, ChevronUp, Beaker, ArrowDownToLine, Flame } from 'lucide-react';

// --- VISUAL COMPONENTS (Generated based on suggestions) ---

const CrossSectionVisual = () => (
  <div className="w-full h-64 flex items-center justify-center bg-slate-50 rounded-xl border border-slate-200">
    <svg viewBox="0 0 240 240" className="w-full h-full max-w-[200px]">
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: '#94a3b8', stopOpacity: 1 }} />
          <stop offset="70%" style={{ stopColor: '#64748b', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0f172a', stopOpacity: 1 }} />
        </radialGradient>
      </defs>
      {/* Outer treated layer */}
      <rect x="20" y="20" width="200" height="200" rx="20" fill="url(#grad1)" stroke="#1e293b" strokeWidth="4" />
      {/* Inner core */}
      <rect x="50" y="50" width="140" height="140" rx="10" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
      
      {/* Labels */}
      <text x="120" y="125" textAnchor="middle" className="text-sm font-bold font-sans" fill="#334155">Núcleo</text>
      <text x="120" y="140" textAnchor="middle" className="text-xs font-sans" fill="#475569">(Dúctil / No tratado)</text>
      
      <text x="120" y="40" textAnchor="middle" className="text-xs font-bold font-sans" fill="#f8fafc">Superficie Carburizada</text>
      <text x="120" y="215" textAnchor="middle" className="text-xs font-bold font-sans" fill="#f8fafc">(Alta dureza)</text>
    </svg>
  </div>
);

const DiffusionVisual = () => {
  const feAtoms = Array.from({ length: 25 });
  const cAtoms = Array.from({ length: 12 });

  return (
    <div className="w-full h-64 flex flex-col items-center justify-center bg-slate-50 rounded-xl border border-slate-200 relative overflow-hidden">
      <div className="absolute top-2 w-full text-center text-xs font-bold text-blue-600 flex justify-center items-center gap-2">
        <ArrowDownToLine size={16} /> Flujo de Carbono
      </div>
      <svg viewBox="0 0 200 200" className="w-full h-full mt-4">
        {/* Iron Lattice */}
        {feAtoms.map((_, i) => {
          const row = Math.floor(i / 5);
          const col = i % 5;
          return (
            <circle key={`fe-${i}`} cx={30 + col * 35} cy={40 + row * 35} r="14" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
          );
        })}
        {/* Diffusing Carbon Atoms */}
        {cAtoms.map((_, i) => {
          const row = Math.floor(i / 4);
          const col = i % 4;
          // Position them interstitially, mostly at the top
          return (
            <circle 
              key={`c-${i}`} 
              cx={47 + col * 35} 
              cy={25 + row * 30 + (Math.random() * 10)} 
              r="6" 
              fill="#1e293b" 
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          );
        })}
      </svg>
      <div className="absolute bottom-2 w-full text-center text-xs text-slate-500">
        <span className="inline-block w-3 h-3 bg-slate-300 rounded-full border border-slate-500 mr-1"></span> Átomo de Hierro (Fe) &nbsp;
        <span className="inline-block w-2 h-2 bg-slate-800 rounded-full mr-1"></span> Átomo de Carbono (C)
      </div>
    </div>
  );
};

const PhaseDiagramVisual = () => (
  <div className="w-full h-64 flex items-center justify-center bg-white rounded-xl border border-slate-200 p-4">
    <svg viewBox="0 0 300 200" className="w-full h-full font-sans">
      {/* Axes */}
      <line x1="40" y1="170" x2="280" y2="170" stroke="#334155" strokeWidth="2" />
      <line x1="40" y1="170" x2="40" y2="20" stroke="#334155" strokeWidth="2" />
      
      {/* Labels */}
      <text x="160" y="195" textAnchor="middle" className="text-xs" fill="#475569">% Carbono</text>
      <text x="15" y="95" textAnchor="middle" transform="rotate(-90 15 95)" className="text-xs" fill="#475569">Temperatura (°C)</text>
      
      {/* Austenite Region Shading */}
      <path d="M 40,120 Q 120,60 200,20 L 40,20 Z" fill="#fef08a" opacity="0.3" />
      
      {/* Highlighted Carburization Range (900-950) */}
      <rect x="40" y="40" width="160" height="25" fill="#fca5a5" opacity="0.5" />
      <text x="120" y="56" textAnchor="middle" className="text-xs font-bold" fill="#991b1b">Rango de Carburización (900-950°C)</text>
      
      {/* Phase Lines */}
      <path d="M 40,120 Q 120,60 200,20" fill="none" stroke="#dc2626" strokeWidth="2" />
      <line x1="40" y1="120" x2="280" y2="120" stroke="#2563eb" strokeWidth="2" strokeDasharray="4" />
      
      {/* Temp Markers */}
      <text x="35" y="125" textAnchor="end" className="text-[10px]" fill="#64748b">727</text>
      <text x="35" y="65" textAnchor="end" className="text-[10px]" fill="#64748b">900</text>
      <text x="35" y="45" textAnchor="end" className="text-[10px]" fill="#64748b">950</text>
      
      <text x="100" y="90" className="text-sm font-bold" fill="#ca8a04">Austenita (γ)</text>
      <text x="100" y="150" className="text-sm font-bold" fill="#2563eb">Ferrita (α) + Perlita</text>
    </svg>
  </div>
);

const FurnaceVisual = () => (
  <div className="w-full h-64 flex items-center justify-center bg-slate-800 rounded-xl border border-slate-700 relative overflow-hidden">
    <div className="absolute top-4 w-full flex justify-center">
      <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
        <Flame size={14} /> Atmósfera Rica en Carbono (Gas CH₄ / CO)
      </div>
    </div>
    <svg viewBox="0 0 240 240" className="w-full h-full mt-4">
      {/* Heat waves */}
      <path d="M 40,200 Q 50,180 40,160 T 40,120" fill="none" stroke="#f97316" strokeWidth="2" opacity="0.5" className="animate-pulse"/>
      <path d="M 200,200 Q 190,180 200,160 T 200,120" fill="none" stroke="#f97316" strokeWidth="2" opacity="0.5" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
      
      {/* Metal Piece */}
      <rect x="60" y="140" width="120" height="60" rx="5" fill="#94a3b8" />
      <rect x="60" y="140" width="120" height="10" fill="#facc15" opacity="0.8" /> {/* Active surface */}
      
      {/* Molecules splitting */}
      <text x="120" y="80" textAnchor="middle" className="text-sm font-bold font-mono" fill="#e2e8f0">CH₄ → C + 2H₂</text>
      
      {/* Arrows down */}
      <path d="M 100,90 L 100,125" fill="none" stroke="#facc15" strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M 140,90 L 140,125" fill="none" stroke="#facc15" strokeWidth="2" markerEnd="url(#arrow)" />
      
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#facc15" />
        </marker>
      </defs>
    </svg>
  </div>
);

const ConcentrationProfileVisual = () => (
  <div className="w-full h-64 flex items-center justify-center bg-white rounded-xl border border-slate-200 p-4 relative">
    <svg viewBox="0 0 300 200" className="w-full h-full font-sans">
      {/* Axes */}
      <line x1="50" y1="160" x2="280" y2="160" stroke="#334155" strokeWidth="2" />
      <line x1="50" y1="160" x2="50" y2="20" stroke="#334155" strokeWidth="2" />
      
      {/* Labels */}
      <text x="165" y="190" textAnchor="middle" className="text-xs font-bold" fill="#475569">Profundidad desde la superficie (mm)</text>
      <text x="20" y="90" textAnchor="middle" transform="rotate(-90 20 90)" className="text-xs font-bold" fill="#475569">% Concentración de Carbono</text>
      
      {/* Data Curve - Exponential Decay */}
      <path d="M 50,30 Q 100,140 260,150" fill="none" stroke="#2563eb" strokeWidth="4" />
      
      {/* Shaded Area under curve */}
      <path d="M 50,30 Q 100,140 260,150 L 260,160 L 50,160 Z" fill="#bfdbfe" opacity="0.4" />
      
      {/* Annotations */}
      <circle cx="50" cy="30" r="5" fill="#1d4ed8" />
      <text x="60" y="25" className="text-[10px]" fill="#1e293b">Alta (Superficie)</text>
      
      <circle cx="260" cy="150" r="5" fill="#1d4ed8" />
      <text x="200" y="140" className="text-[10px]" fill="#1e293b">Baja (Núcleo original)</text>
    </svg>
  </div>
);

const MicrostructureVisual = () => (
  <div className="w-full h-64 flex gap-2 bg-slate-50 rounded-xl border border-slate-200 p-2 relative">
    {/* Martensite Side (Surface) */}
    <div className="flex-1 border-r border-slate-300 relative overflow-hidden bg-slate-200 rounded-l-lg">
      <div className="absolute top-2 left-0 w-full text-center text-xs font-bold bg-white/80 py-1 z-10">
        Superficie (Martensita)
      </div>
      <svg viewBox="0 0 100 100" className="w-full h-full mt-4" preserveAspectRatio="none">
        {/* Needle-like structure */}
        {Array.from({length: 40}).map((_, i) => (
          <line 
            key={i}
            x1={Math.random() * 100} 
            y1={Math.random() * 100} 
            x2={Math.random() * 100} 
            y2={Math.random() * 100} 
            stroke="#1e293b" 
            strokeWidth={1 + Math.random()} 
            opacity="0.8"
          />
        ))}
        {Array.from({length: 15}).map((_, i) => (
          <polygon 
            key={`p-${i}`}
            points={`${Math.random()*100},${Math.random()*100} ${Math.random()*100},${Math.random()*100} ${Math.random()*100},${Math.random()*100}`}
            fill="#64748b"
            opacity="0.3"
          />
        ))}
      </svg>
      <div className="absolute bottom-2 left-0 w-full text-center text-[10px] text-slate-800 font-semibold">Densa / Acicular / Dura</div>
    </div>
    
    {/* Ferrite/Pearlite Side (Core) */}
    <div className="flex-1 relative overflow-hidden bg-slate-100 rounded-r-lg">
      <div className="absolute top-2 left-0 w-full text-center text-xs font-bold bg-white/80 py-1 z-10">
        Núcleo (Ferrita/Perlita)
      </div>
      <svg viewBox="0 0 100 100" className="w-full h-full mt-4" preserveAspectRatio="none">
        {/* Grain structure */}
        {Array.from({length: 20}).map((_, i) => (
          <circle 
            key={i}
            cx={Math.random() * 100} 
            cy={Math.random() * 100} 
            r={5 + Math.random() * 15} 
            fill={Math.random() > 0.5 ? "#f1f5f9" : "#cbd5e1"} 
            stroke="#94a3b8" 
            strokeWidth="1"
          />
        ))}
        {/* Pearlite lines inside some grains */}
        <path d="M 20,20 L 30,30 M 22,18 L 32,28 M 18,22 L 28,32" stroke="#475569" strokeWidth="0.5"/>
        <path d="M 70,70 L 80,60 M 72,72 L 82,62 M 68,68 L 78,58" stroke="#475569" strokeWidth="0.5"/>
      </svg>
      <div className="absolute bottom-2 left-0 w-full text-center text-[10px] text-slate-600 font-semibold">Granular / Abierta / Dúctil</div>
    </div>
  </div>
);

const GearPropertiesVisual = () => (
  <div className="w-full h-64 flex items-center justify-center bg-slate-50 rounded-xl border border-slate-200 relative">
    <Settings size={120} className="text-slate-300 drop-shadow-md" strokeWidth={1} />
    <Settings size={120} className="text-slate-800 absolute" strokeWidth={1} style={{ clipPath: 'circle(55px at center)' }} />
    
    {/* Annotations */}
    <div className="absolute top-8 left-8 flex items-center gap-1">
      <div className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded border border-red-200">Dientes: Alta Dureza</div>
      <svg width="40" height="40" className="pointer-events-none"><line x1="0" y1="20" x2="35" y2="35" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrow-red)"/></svg>
    </div>
    
    <div className="absolute bottom-8 right-8 flex items-center gap-1">
      <svg width="40" height="40" className="pointer-events-none"><line x1="40" y1="20" x2="5" y2="5" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrow-blue)"/></svg>
      <div className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded border border-blue-200">Núcleo: Alta Tenacidad</div>
    </div>

    <defs>
      <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626" /></marker>
      <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb" /></marker>
    </defs>
  </div>
);

const ApplicationsVisual = () => (
  <div className="w-full h-64 grid grid-cols-2 gap-2 bg-slate-50 rounded-xl border border-slate-200 p-3">
    <div className="bg-white border border-slate-200 rounded-lg flex flex-col items-center justify-center p-2 shadow-sm">
      <Settings size={32} className="text-indigo-600 mb-2" />
      <h4 className="text-sm font-bold text-slate-800">Engranajes</h4>
      <p className="text-[10px] text-center text-slate-500 mt-1">Dureza en dientes (fricción), núcleo resistente a fatiga.</p>
    </div>
    <div className="bg-white border border-slate-200 rounded-lg flex flex-col items-center justify-center p-2 shadow-sm">
      <CircleDot size={32} className="text-emerald-600 mb-2" />
      <h4 className="text-sm font-bold text-slate-800">Rodamientos</h4>
      <p className="text-[10px] text-center text-slate-500 mt-1">Superficie antidesgaste para cargas cíclicas constantes.</p>
    </div>
    <div className="bg-white border border-slate-200 rounded-lg flex flex-col items-center justify-center p-2 shadow-sm col-span-2 flex-row gap-4">
      <Wrench size={32} className="text-amber-600" />
      <div>
        <h4 className="text-sm font-bold text-slate-800">Ejes y Componentes Mecánicos</h4>
        <p className="text-[10px] text-slate-500 mt-1">Resistencia externa a la abrasión mientras soportan torsión interna sin fracturarse.</p>
      </div>
    </div>
  </div>
);

// --- DATA STRUCTURE ---

const lessonData = [
  {
    id: 'intro',
    title: 'Introducción al concepto de carburización',
    explanation: 'La carburización es un tratamiento termoquímico aplicado principalmente a aceros con bajo contenido de carbono. Su objetivo es modificar selectivamente la composición química de la superficie sin alterar significativamente el interior del material. Esto permite optimizar propiedades mecánicas específicas según la zona del componente.',
    visualSuggestionText: 'Un esquema de una pieza metálica en corte transversal donde se diferencie claramente la superficie (zona tratada) y el núcleo (zona no tratada), usando colores distintos para resaltar la modificación superficial.',
    VisualComponent: CrossSectionVisual
  },
  {
    id: 'definicion',
    title: 'Definición del proceso de carburización',
    explanation: 'La carburización consiste en la incorporación de carbono en la superficie de un material mediante un proceso de difusión a alta temperatura. El resultado es una capa superficial enriquecida en carbono que, tras tratamientos posteriores, adquiere alta dureza, mientras el núcleo conserva su ductilidad.',
    visualSuggestionText: 'Un diagrama que muestre átomos de carbono penetrando desde la superficie hacia el interior de una red cristalina metálica, representando el proceso de difusión.',
    VisualComponent: DiffusionVisual
  },
  {
    id: 'condiciones',
    title: 'Condiciones térmicas y estado del material',
    explanation: 'El proceso se realiza típicamente entre 900 y 950 °C, temperatura a la cual el acero se encuentra en fase austenítica. En este estado, la estructura cristalina permite una mayor movilidad de los átomos de carbono, facilitando su difusión hacia el interior del material.',
    visualSuggestionText: 'Una gráfica temperatura vs. fases del acero (diagrama simplificado hierro-carbono) donde se destaque la región austenítica y el rango de temperaturas de carburización.',
    VisualComponent: PhaseDiagramVisual
  },
  {
    id: 'mec1',
    title: 'Mecanismo del proceso (Parte 1: Generación y absorción)',
    explanation: 'El proceso inicia con la descomposición de sustancias ricas en carbono (como gases o sólidos). Estos liberan átomos de carbono que son absorbidos por la superficie del metal, estableciendo una alta concentración superficial.',
    visualSuggestionText: 'Un esquema que muestre un horno con atmósfera rica en carbono y reacciones químicas en la superficie del metal, indicando la liberación y absorción de carbono.',
    VisualComponent: FurnaceVisual
  },
  {
    id: 'mec2',
    title: 'Mecanismo del proceso (Parte 2: Difusión)',
    explanation: 'Una vez absorbido, el carbono se difunde desde la superficie hacia el interior del material debido a un gradiente de concentración. Este fenómeno sigue leyes de difusión y depende del tiempo y la temperatura del tratamiento.',
    visualSuggestionText: 'Un perfil de concentración de carbono vs. profundidad que muestre cómo disminuye la concentración desde la superficie hacia el núcleo.',
    VisualComponent: ConcentrationProfileVisual
  },
  {
    id: 'micro',
    title: 'Transformaciones microestructurales posteriores',
    explanation: 'Después de la carburización, el material suele someterse a un enfriamiento controlado (temple), que transforma la capa enriquecida en carbono en una microestructura dura, como la martensita, mientras el núcleo mantiene estructuras más dúctiles.',
    visualSuggestionText: 'Una comparación de microestructuras: martensita en la superficie (estructura más densa) y ferrita/perlita en el núcleo (estructura más abierta).',
    VisualComponent: MicrostructureVisual
  },
  {
    id: 'resultados',
    title: 'Resultados del tratamiento en propiedades mecánicas',
    explanation: 'La carburización produce una combinación de propiedades diferenciadas:\n\n• La superficie adquiere alta dureza y resistencia al desgaste.\n• El núcleo mantiene buena tenacidad y resistencia a impactos y fatiga.\n\nEsta combinación es clave en componentes sometidos a esfuerzos mecánicos complejos.',
    visualSuggestionText: 'Una ilustración de un engranaje donde se destaquen las zonas de contacto (superficie endurecida) y el interior resistente, con etiquetas de propiedades mecánicas.',
    VisualComponent: GearPropertiesVisual
  },
  {
    id: 'importancia',
    title: 'Importancia de la carburización en ingeniería',
    explanation: 'Este tratamiento permite combinar propiedades que normalmente son excluyentes: dureza superficial y ductilidad interna. Por ello, es ampliamente utilizado en la fabricación de piezas como engranajes, ejes y componentes sometidos a fricción y carga cíclica.',
    visualSuggestionText: 'Un collage de aplicaciones industriales (engranajes, ejes, rodamientos) con indicaciones de dónde actúa la carburización en cada caso.',
    VisualComponent: ApplicationsVisual
  }
];

// --- MAIN APP COMPONENT ---

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans pb-12">
      {/* Header */}
      <header className="bg-indigo-900 text-white py-12 px-6 shadow-md mb-8">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <Beaker size={48} className="text-indigo-300" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Lección: Fundamentos de la Carburización</h1>
            <p className="text-indigo-200 mt-2 text-lg">Módulo de Tratamientos Termoquímicos y Ciencia de Materiales</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 grid gap-8">
        {lessonData.map((section, index) => (
          <SectionCard key={section.id} section={section} index={index + 1} />
        ))}
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 mt-16 text-center text-slate-500 text-sm">
        <p>Material educativo interactivo generado para el estudio de tratamientos térmicos.</p>
      </footer>
    </div>
  );
}

// --- SUBCOMPONENTS ---

const SectionCard = ({ section, index }) => {
  const [showSuggestion, setShowSuggestion] = useState(false);
  const { title, explanation, visualSuggestionText, VisualComponent } = section;

  return (
    <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
      {/* Text Area */}
      <div className="p-6 md:w-1/2 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm">
            {index}
          </span>
          <h2 className="text-xl font-bold text-slate-800 leading-tight">{title}</h2>
        </div>
        
        <div className="prose prose-slate prose-sm text-slate-600 mb-6 whitespace-pre-line">
          {explanation}
        </div>

        {/* Expandable Visual Suggestion Original Text */}
        <div className="mt-auto">
          <button 
            onClick={() => setShowSuggestion(!showSuggestion)}
            className="flex items-center justify-between w-full text-left text-xs font-semibold text-slate-500 bg-slate-50 p-2 rounded hover:bg-slate-100 transition-colors"
          >
            <span>Ver sugerencia visual original</span>
            {showSuggestion ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          {showSuggestion && (
            <div className="text-xs text-slate-600 bg-slate-50 p-3 mt-1 rounded border border-slate-100 italic">
              "{visualSuggestionText}"
            </div>
          )}
        </div>
      </div>

      {/* Visual Area */}
      <div className="p-6 md:w-1/2 flex flex-col items-center justify-center bg-slate-50/50">
        <div className="w-full relative">
          <div className="absolute -top-3 left-0 bg-indigo-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded shadow-sm z-10">
            Representación Visual
          </div>
          <VisualComponent />
        </div>
      </div>
    </article>
  );
};