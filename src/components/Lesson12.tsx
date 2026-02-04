import React, { useState, useEffect } from 'react';
import { 
  Microscope, 
  Scaling, 
  Layers, 
  Activity, 
  Thermometer, 
  Info 
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  BarChart, 
  Bar
} from 'recharts';

// --- TIPOS E INTERFACES ---

interface TabData {
  id: string;
  label: string;
  icon: React.ElementType;
  title: string;
  description: string;
  type: 'static' | 'comparison' | 'phases' | 'dynamic' | 'interactive';
}

// --- DATOS DEL CONTENIDO ---

const TABS: TabData[] = [
  {
    id: 'intro',
    label: 'Microestructura',
    icon: Microscope,
    title: 'Introducción a la Microestructura',
    description: 'La microestructura de un metal se compone de granos (cristales individuales), límites de grano (interfaces entre cristales) y fases (regiones con estructura química/física distinta). Estos elementos definen las propiedades del material.',
    type: 'static'
  },
  {
    id: 'size',
    label: 'Tamaño de Grano',
    icon: Scaling,
    title: 'Comparativa: Grano Fino vs. Grano Grueso',
    description: 'El tamaño del grano influye directamente en las propiedades mecánicas (Ley de Hall-Petch). Los granos finos ofrecen más obstáculos al movimiento de dislocaciones, aumentando la resistencia y, a menudo, la tenacidad.',
    type: 'comparison'
  },
  {
    id: 'phases',
    label: 'Fases',
    icon: Layers,
    title: 'Fases y Propiedades Mecánicas',
    description: 'Las diferentes fases (como ferrita, cementita o martensita en aceros) tienen propiedades distintas. La distribución y cantidad de estas fases determinan si el material es duro, frágil, blando o dúctil.',
    type: 'phases'
  },
  {
    id: 'dislocation',
    label: 'Dislocaciones',
    icon: Activity,
    title: 'Dinámica de Dislocaciones',
    description: 'La deformación plástica ocurre por el movimiento de defectos cristalinos llamados dislocaciones. Los límites de grano y los precipitados actúan como barreras, frenando este movimiento y endureciendo el material.',
    type: 'dynamic'
  },
  {
    id: 'heat',
    label: 'Tratamientos',
    icon: Thermometer,
    title: 'Tratamientos Térmicos (Interactivo)',
    description: 'Ajusta la temperatura de recocido para ver cómo cambia la microestructura y, consecuentemente, las propiedades mecánicas. A mayor temperatura y tiempo, los granos crecen, reduciendo la resistencia pero aumentando la ductilidad.',
    type: 'interactive'
  }
];

// --- COMPONENTES DE VISUALIZACIÓN ---

const GrainStructureSVG = ({ density = 'medium', showPhases = false }: { density?: 'fine' | 'medium' | 'coarse', showPhases?: boolean }) => {
  // Simulación simplificada de estructura de granos usando Voronoi "manual" con paths
  const finePaths = [
    "M10,10 L40,15 L50,40 L20,45 Z", "M40,15 L90,10 L85,45 L50,40 Z", "M90,10 L140,15 L130,50 L85,45 Z", "M140,15 L190,20 L180,60 L130,50 Z",
    "M10,100 L20,45 L50,40 L60,90 Z", "M50,40 L85,45 L80,95 L60,90 Z", "M85,45 L130,50 L120,100 L80,95 Z", "M130,50 L180,60 L190,110 L120,100 Z"
  ];
  
  const coarsePaths = [
    "M10,10 L90,20 L80,90 L20,100 Z", 
    "M90,20 L190,10 L180,110 L80,90 Z"
  ];

  const paths = density === 'fine' ? finePaths : (density === 'coarse' ? coarsePaths : finePaths.slice(0, 4).concat(coarsePaths[0]));

  return (
    <svg viewBox="0 0 200 120" className="w-full h-full bg-slate-100 rounded-lg border border-slate-300">
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeOpacity="0.05"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      
      {paths.map((d, i) => (
        <g key={i}>
          <path 
            d={d} 
            fill={density === 'coarse' ? '#e2e8f0' : '#cbd5e1'} 
            stroke="#475569" 
            strokeWidth="2"
            className="hover:fill-blue-200 transition-colors duration-300"
          />
          {/* Etiquetas de Granos */}
          {density === 'medium' && i === 0 && (
            <text x="25" y="30" fontSize="8" fill="#334155" className="font-sans font-bold">Grano A</text>
          )}
        </g>
      ))}

      {/* Límites de Grano (Highlight) */}
      {density === 'medium' && (
        <>
          <circle cx="50" cy="40" r="4" fill="none" stroke="#ef4444" strokeWidth="2" />
          <text x="58" y="38" fontSize="8" fill="#ef4444" className="font-sans font-bold">Límite</text>
        </>
      )}

      {/* Fases (Precipitados) */}
      {showPhases && (
        <g>
          <circle cx="30" cy="30" r="3" fill="#1e293b" />
          <circle cx="70" cy="70" r="4" fill="#1e293b" />
          <circle cx="110" cy="40" r="2" fill="#1e293b" />
          <circle cx="150" cy="80" r="5" fill="#1e293b" />
          <text x="158" y="80" fontSize="8" fill="#1e293b" className="font-sans font-bold">Fase 2 (Dura)</text>
          <path d="M10,10 L40,15 L50,40 L20,45 Z" fill="none" stroke="#1e293b" strokeDasharray="2,2" />
          <text x="15" y="60" fontSize="8" fill="#475569" className="font-sans">Matriz (Blanda)</text>
        </g>
      )}
    </svg>
  );
};

const DislocationAnimation = () => {
  return (
    <div className="relative w-full h-64 bg-slate-100 rounded-lg overflow-hidden border border-slate-300 grid place-items-center">
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-6 gap-2 p-4">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} className={`w-3 h-3 rounded-full ${i % 10 === 5 ? 'bg-red-400' : 'bg-slate-400'}`}></div>
        ))}
      </div>
      
      {/* Representación de la dislocación moviéndose */}
      <div className="absolute top-4 bottom-4 w-1 bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)] animate-dislocation-move">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
          Dislocación
        </div>
      </div>

      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 text-center bg-white/80 p-2 rounded border border-red-300">
        <p className="text-xs font-bold text-red-600">Obstáculo (Límite/Fase)</p>
        <p className="text-[10px] text-slate-600">Bloquea el movimiento</p>
      </div>

      <style>{`
        @keyframes moveRight {
          0% { left: 10%; }
          50% { left: 50%; } /* Se detiene en el obstáculo */
          60% { left: 50%; }
          100% { left: 10%; }
        }
        .animate-dislocation-move {
          animation: moveRight 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

const InteractiveHeatTreatment = () => {
  const [temp, setTemp] = useState(500);
  
  // Datos simulados basados en la temperatura
  const data = [
    { name: 'Sin Tratar', resistencia: 800, ductilidad: 10 },
    { name: 'Tratado', resistencia: 800 - (temp - 300) * 1.2, ductilidad: 10 + (temp - 300) * 0.15 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
      <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-center">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Temperatura de Recocido: {temp}°C
        </label>
        <input 
          type="range" 
          min="300" 
          max="900" 
          step="10" 
          value={temp} 
          onChange={(e) => setTemp(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div className="mt-6 text-center">
            <GrainStructureSVG density={temp < 500 ? 'fine' : (temp < 750 ? 'medium' : 'coarse')} />
            <p className="mt-2 text-xs text-slate-500 font-mono">
              Estructura de grano simulada a {temp}°C
            </p>
        </div>
      </div>

      <div className="h-64 md:h-auto bg-white p-2 rounded-lg border border-slate-200">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" hide />
            <YAxis yAxisId="left" orientation="left" stroke="#2563eb" label={{ value: 'Resistencia (MPa)', angle: -90, position: 'insideLeft' }} domain={[0, 1000]} />
            <YAxis yAxisId="right" orientation="right" stroke="#16a34a" label={{ value: 'Ductilidad (%)', angle: 90, position: 'insideRight' }} domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="resistencia" stroke="#2563eb" strokeWidth={3} name="Resistencia" />
            <Line yAxisId="right" type="monotone" dataKey="ductilidad" stroke="#16a34a" strokeWidth={3} name="Ductilidad" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const ComparisonChart = () => {
  const data = [
    { name: 'Grano Fino', resistencia: 650, ductilidad: 40 },
    { name: 'Grano Grueso', resistencia: 400, ductilidad: 25 }, // Simplificación: Grano grueso suele tener menos resistencia, ductilidad varía pero suele ser menor impacto que resistencia en Hall-Petch
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
      <div className="flex flex-col gap-2">
         <div className="flex-1">
             <p className="text-center text-sm font-bold mb-1">Estructura Fina</p>
             <div className="h-32"><GrainStructureSVG density="fine" /></div>
         </div>
         <div className="flex-1">
             <p className="text-center text-sm font-bold mb-1">Estructura Gruesa</p>
             <div className="h-32"><GrainStructureSVG density="coarse" /></div>
         </div>
      </div>
      <div className="bg-white p-2 rounded-lg border border-slate-200">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={80} style={{ fontSize: '12px' }}/>
              <Tooltip />
              <Legend />
              <Bar dataKey="resistencia" fill="#2563eb" name="Resistencia (MPa)" radius={[0, 4, 4, 0]} barSize={20} />
              <Bar dataKey="ductilidad" fill="#16a34a" name="Ductilidad (%)" radius={[0, 4, 4, 0]} barSize={20} />
            </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// --- COMPONENTES UI ESTRUCTURALES ---

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

const TabButton = ({ isActive, onClick, icon: Icon, label }: { isActive: boolean, onClick: () => void, icon: any, label: string }) => (
  <button
    onClick={onClick}
    className={`
      flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-200 outline-none
      ${isActive 
        ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600' 
        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-b-2 border-transparent'}
    `}
  >
    <Icon size={18} />
    <span>{label}</span>
  </button>
);

// --- COMPONENTE PRINCIPAL (Diagram Render Switcher) ---

const DiagramRender = ({ type }: { type: string }) => {
  switch (type) {
    case 'static':
      return (
        <div className="h-full p-6 flex flex-col items-center justify-center bg-slate-50">
           <div className="w-full max-w-lg h-64">
             <GrainStructureSVG density="medium" />
           </div>
           <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-lg">
              <div className="flex items-center gap-2 text-xs text-slate-600 bg-white p-2 rounded shadow-sm border border-slate-200">
                 <div className="w-3 h-3 bg-slate-300 border border-slate-500 rounded-sm"></div>
                 <span>Grano</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600 bg-white p-2 rounded shadow-sm border border-slate-200">
                 <div className="w-3 h-3 border-2 border-red-500 rounded-full"></div>
                 <span>Límite</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600 bg-white p-2 rounded shadow-sm border border-slate-200">
                 <div className="w-3 h-3 bg-slate-100 border border-dashed border-slate-800 rounded-sm"></div>
                 <span>Matriz</span>
              </div>
           </div>
        </div>
      );
    case 'comparison':
      return (
        <div className="h-full p-4 bg-slate-50">
          <ComparisonChart />
        </div>
      );
    case 'phases':
      return (
        <div className="h-full p-6 flex flex-col items-center justify-center bg-slate-50">
           <div className="w-full max-w-lg h-64">
             <GrainStructureSVG density="medium" showPhases={true} />
           </div>
           <p className="mt-4 text-center text-slate-600 text-sm italic max-w-md">
             Las partículas oscuras representan una segunda fase (ej. Carburos) dispersa en la matriz más clara. Estas fases actúan como refuerzos estructurales.
           </p>
        </div>
      );
    case 'dynamic':
      return (
        <div className="h-full p-6 bg-slate-50 flex flex-col justify-center">
          <DislocationAnimation />
          <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded text-xs text-blue-800 flex gap-2">
            <Info size={16} className="shrink-0" />
            <p>Observa cómo la línea azul (dislocación) se mueve a través de la red cristalina hasta que encuentra un obstáculo, lo que requiere más energía para continuar.</p>
          </div>
        </div>
      );
    case 'interactive':
      return (
        <div className="h-full p-6 bg-slate-50">
          <InteractiveHeatTreatment />
        </div>
      );
    default:
      return null;
  }
};

// --- LAYOUT PRINCIPAL ---

const App = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = TABS[activeTabIndex];

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 p-4 md:p-8">
      
      {/* GRID LAYOUT CONTAINER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 auto-rows-min">
        
        {/* HEADER AREA */}
        <header className="grid gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight flex items-center gap-3">
              <span className="p-2 bg-blue-600 text-white rounded-lg shadow-md">
                <Microscope size={24} />
              </span>
              Ciencia de Materiales: Microestructuras
            </h1>
          </div>

          {/* TAB NAVIGATION (Grid Flow Col for horizontal scrolling if needed) */}
          <nav className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-x-auto">
            <div className="grid grid-flow-col auto-cols-max min-w-full">
              {TABS.map((tab, index) => (
                <TabButton 
                  key={tab.id}
                  isActive={activeTabIndex === index}
                  onClick={() => setActiveTabIndex(index)}
                  icon={tab.icon}
                  label={tab.label}
                />
              ))}
            </div>
          </nav>
        </header>

        {/* CONTENT AREA: 12 Column Grid */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* INFO PANEL (Left/Top) */}
          <Card className="lg:col-span-4 h-full">
            <div className="p-6 h-full flex flex-col bg-white">
              <div className="mb-4 pb-4 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-800 mb-1">{activeTab.title}</h2>
                <span className="inline-block px-2 py-1 bg-slate-100 text-slate-500 text-xs font-semibold uppercase tracking-wide rounded">
                   Sección {activeTabIndex + 1} de {TABS.length}
                </span>
              </div>
              
              <div className="prose prose-slate prose-sm text-slate-600 leading-relaxed">
                <p>{activeTab.description}</p>
                <div className="mt-6 p-4 bg-blue-50/50 rounded-lg border border-blue-100">
                  <h4 className="text-blue-800 font-semibold mb-2 text-xs uppercase">Concepto Clave</h4>
                  <p className="text-blue-700/80 text-xs">
                    {activeTab.type === 'static' && "Los granos son la unidad fundamental."}
                    {activeTab.type === 'comparison' && "Menor grano = Más obstáculos = Mayor resistencia."}
                    {activeTab.type === 'phases' && "Las aleaciones no son homogéneas; sus fases dictan el comportamiento."}
                    {activeTab.type === 'dynamic' && "La deformación es movimiento atómico organizado."}
                    {activeTab.type === 'interactive' && "El calor es la herramienta para manipular la estructura."}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* DIAGRAM PANEL (Right/Bottom) */}
          <Card className="lg:col-span-8 min-h-[400px] lg:h-[500px]">
             <div className="h-full flex flex-col">
               <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 flex justify-between items-center">
                 <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Visualización</span>
                 {activeTab.type === 'interactive' && (
                    <span className="flex items-center gap-1 text-xs text-blue-600 font-bold">
                       <Activity size={12} /> Interactuar
                    </span>
                 )}
               </div>
               <div className="flex-1 overflow-hidden relative">
                 <DiagramRender type={activeTab.type} />
               </div>
             </div>
          </Card>

        </main>

      </div>
    </div>
  );
};

export default App;