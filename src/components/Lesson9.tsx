import React, { useState, useEffect } from 'react';
import { Layers, Activity, Microscope, ArrowRightLeft, BarChart3, Info } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

/**
 * --- TIPOS Y DEFINICIONES ---
 */

type TabId = 'static-mono' | 'static-micro' | 'static-comp' | 'dynamic-trans' | 'inter-prop';

interface LessonSection {
  id: TabId;
  title: string;
  shortTitle: string;
  icon: React.ReactNode;
  description: string;
  details: string;
}

const LESSON_DATA: LessonSection[] = [
  {
    id: 'static-mono',
    title: 'Fase Homogénea (Monofásica)',
    shortTitle: 'Fase Única',
    icon: <Layers className="w-4 h-4" />,
    description: 'Representación de un material con una sola región homogénea claramente identificada como una fase.',
    details: 'En termodinámica y ciencia de materiales, una fase es una región del espacio (un sistema termodinámico), a lo largo de la cual todas las propiedades físicas de un material son esencialmente uniformes. Aquí vemos un bloque continuo de material puro.'
  },
  {
    id: 'static-micro',
    title: 'Microestructura Uniforme',
    shortTitle: 'Microestructura',
    icon: <Microscope className="w-4 h-4" />,
    description: 'Microestructura uniforme correspondiente a un material monofásico, mostrando una única fase continua.',
    details: 'Aunque el material es monofásico, a nivel microscópico está compuesto por granos. Sin embargo, todos los granos tienen la misma composición química y estructura cristalina. Las líneas representan los límites de grano.'
  },
  {
    id: 'static-comp',
    title: 'Comparativa Mono vs Multi',
    shortTitle: 'Comparativa',
    icon: <ArrowRightLeft className="w-4 h-4" />,
    description: 'Comparación visual entre una microestructura monofásica y una multifásica para destacar la coexistencia de fases.',
    details: 'A la izquierda, granos uniformes (fase α). A la derecha, vemos una estructura bifásica donde coexisten la fase matriz (α) y precipitados de una segunda fase (β, en oscuro), lo que altera las propiedades del material.'
  },
  {
    id: 'dynamic-trans',
    title: 'Transformación de Fases',
    shortTitle: 'Transformación',
    icon: <Activity className="w-4 h-4" />,
    description: 'Animación que muestra la aparición y crecimiento de precipitados durante un tratamiento térmico.',
    details: 'Durante el enfriamiento o envejecimiento, la solubilidad del soluto disminuye, forzando la precipitación de la segunda fase. Observa cómo los núcleos crecen con el tiempo (simulado).'
  },
  {
    id: 'inter-prop',
    title: 'Propiedades vs. Fases',
    shortTitle: 'Propiedades',
    icon: <BarChart3 className="w-4 h-4" />,
    description: 'Relación entre la proporción de fases presentes y las propiedades mecánicas finales.',
    details: 'Aumentar la fracción de la segunda fase dura suele incrementar la resistencia mecánica (Límite elástico) pero disminuir la ductilidad. Mueve el cursor sobre la gráfica para ver valores exactos.'
  }
];

/**
 * --- COMPONENTES UI BASE (Grid System) ---
 */

const Card: React.FC<{ children: React.ReactNode; className?: string; title?: string }> = ({ children, className = '', title }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {title && (
      <div className="bg-slate-50 border-b border-slate-100 p-4">
        <h3 className="font-semibold text-slate-700">{title}</h3>
      </div>
    )}
    <div className="p-6 h-full">
      {children}
    </div>
  </div>
);

/**
 * --- COMPONENTES DE VISUALIZACIÓN (DIAGRAM RENDERS) ---
 */

// 1. Bloque Monofásico Simple
const MonophasicBlock = () => (
  <div className="w-full h-64 bg-blue-100 border-2 border-blue-300 rounded-lg grid place-items-center relative">
    <span className="text-blue-800 font-bold text-xl bg-white/50 px-4 py-2 rounded backdrop-blur-sm">Fase α (Alfa)</span>
    <div className="absolute bottom-2 right-2 text-xs text-blue-500">Región Homogénea</div>
  </div>
);

// 2. Microestructura de Granos (SVG)
const GrainStructure = ({ multi = false }: { multi?: boolean }) => {
  // Simulación simple de granos voronoi-esque usando paths SVG
  return (
    <svg viewBox="0 0 200 150" className="w-full h-full bg-slate-50 border border-slate-300 rounded shadow-inner">
      <defs>
        <pattern id="grain-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
           <path d="M0 20 L20 0 M10 0 L10 20 M0 10 L20 10" stroke="#cbd5e1" strokeWidth="0.5" fill="none"/>
        </pattern>
      </defs>
      
      {/* Granos base */}
      <g stroke="#64748b" strokeWidth="2" fill="url(#grain-pattern)">
        <path d="M10,10 L90,20 L110,80 L40,90 Z" fill="#e2e8f0" />
        <path d="M90,20 L190,10 L180,70 L110,80 Z" fill="#f1f5f9" />
        <path d="M40,90 L110,80 L100,140 L20,130 Z" fill="#f8fafc" />
        <path d="M110,80 L180,70 L190,140 L100,140 Z" fill="#e2e8f0" />
      </g>
      
      {/* Texto Etiquetas */}
      <text x="50" y="50" fontSize="8" fill="#475569" textAnchor="middle">Grano 1</text>
      <text x="150" y="40" fontSize="8" fill="#475569" textAnchor="middle">Grano 2</text>
      
      {/* Segunda Fase (Solo si es multi) */}
      {multi && (
        <g fill="#1e293b" stroke="none">
           <circle cx="90" cy="20" r="4" />
           <circle cx="110" cy="80" r="5" />
           <circle cx="180" cy="70" r="3" />
           <circle cx="60" cy="50" r="2.5" />
           <circle cx="140" cy="100" r="4" />
        </g>
      )}
    </svg>
  );
};

// 3. Comparativa (Grid interno)
const ComparativeView = () => (
  <div className="grid grid-cols-2 gap-4 h-64">
    <div className="grid grid-rows-[1fr_auto] gap-2">
      <div className="border border-slate-200 rounded overflow-hidden">
        <GrainStructure multi={false} />
      </div>
      <p className="text-center text-sm font-semibold text-slate-600">Monofásico (Solo α)</p>
    </div>
    <div className="grid grid-rows-[1fr_auto] gap-2">
      <div className="border border-slate-200 rounded overflow-hidden relative">
        <GrainStructure multi={true} />
        <div className="absolute top-2 right-2 bg-slate-800 text-white text-[10px] px-1 rounded">Partículas β</div>
      </div>
      <p className="text-center text-sm font-semibold text-slate-600">Bifásico (Matriz α + Fase β)</p>
    </div>
  </div>
);

// 4. Transformación Dinámica
const PhaseTransformation = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-64 grid grid-rows-[1fr_auto] gap-4">
      <div className="relative border border-slate-300 bg-slate-100 rounded-lg overflow-hidden grid place-items-center">
        {/* Fondo Matriz */}
        <div className="absolute inset-0 bg-blue-50"></div>
        
        {/* Precipitados creciendo */}
        {[...Array(8)].map((_, i) => {
          // Posiciones pseudo-aleatorias fijas
          const left = [20, 70, 40, 80, 30, 60, 85, 15][i];
          const top = [30, 20, 70, 60, 50, 80, 40, 80][i];
          const delay = i * 5; // Retraso en aparición
          
          // Lógica de tamaño basada en progreso
          let size = 0;
          if (progress > delay) {
            size = Math.min((progress - delay) * 0.5, 20); // Max tamaño 20px
          }

          return (
            <div
              key={i}
              className="absolute rounded-full bg-slate-800 transition-all duration-75 shadow-sm"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                transform: 'translate(-50%, -50%)',
                opacity: size > 0 ? 1 : 0
              }}
            />
          );
        })}
        
        <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-xs text-slate-600 backdrop-blur">
          Tiempo: {progress.toFixed(0)} u.t.
        </div>
      </div>
      
      {/* Barra de Progreso */}
      <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
        <span className="text-xs font-bold text-slate-500">Estado:</span>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

// 5. Gráfico de Propiedades (Recharts)
const PropertyChart = () => {
  const data = [
    { fase: 0, resistencia: 200, ductilidad: 40 },
    { fase: 10, resistencia: 250, ductilidad: 35 },
    { fase: 20, resistencia: 320, ductilidad: 28 },
    { fase: 30, resistencia: 400, ductilidad: 20 },
    { fase: 40, resistencia: 450, ductilidad: 12 },
    { fase: 50, resistencia: 480, ductilidad: 5 },
  ];

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis 
            dataKey="fase" 
            label={{ value: '% Segunda Fase', position: 'insideBottomRight', offset: -5 }} 
            stroke="#64748b"
          />
          <YAxis stroke="#64748b" />
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend wrapperStyle={{ paddingTop: '10px' }} />
          <Line 
            type="monotone" 
            dataKey="resistencia" 
            stroke="#2563eb" 
            name="Resistencia (MPa)" 
            strokeWidth={3}
            dot={{ r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="ductilidad" 
            stroke="#10b981" 
            name="Ductilidad (%)" 
            strokeWidth={3} 
          />
          <ReferenceLine x={30} stroke="red" strokeDasharray="3 3" label="Óptimo Industrial" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

/**
 * --- COMPONENTE PRINCIPAL (LAYOUT & LOGIC) ---
 */

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('static-mono');
  
  // Encontrar datos de la pestaña activa
  const currentData = LESSON_DATA.find(d => d.id === activeTab) || LESSON_DATA[0];

  // Renderizar contenido dinámico según la pestaña
  const renderDiagram = () => {
    switch (activeTab) {
      case 'static-mono': return <MonophasicBlock />;
      case 'static-micro': return <div className="h-64"><GrainStructure /></div>;
      case 'static-comp': return <ComparativeView />;
      case 'dynamic-trans': return <PhaseTransformation />;
      case 'inter-prop': return <PropertyChart />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
      {/* LAYOUT PRINCIPAL - CSS GRID ONLY 
        Definimos un grid de 12 columnas.
        Evitamos Flexbox para la estructura mayor.
      */}
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
        
        {/* HEADER: Título y Navegación Global (Logo, etc) */}
        <header className="col-span-12 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="grid grid-flow-col gap-3 items-center w-max">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Layers size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 tracking-tight">Ciencia de Materiales</h1>
              <p className="text-sm text-slate-500">Módulo: Diagramas de Fases y Microestructuras</p>
            </div>
          </div>
          {/* Espacio vacío o navegación secundaria si fuera necesario */}
          <div className="justify-self-end hidden md:block text-slate-400 text-sm">
            v1.0.4 | DiagramtoReact
          </div>
        </header>

        {/* NAVEGACIÓN (TABS) */}
        <nav className="col-span-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-slate-200/50 p-1 rounded-xl">
            {LESSON_DATA.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  grid grid-flow-col gap-2 items-center justify-center p-3 rounded-lg text-sm font-medium transition-all duration-200
                  ${activeTab === tab.id 
                    ? 'bg-white text-blue-600 shadow-sm ring-1 ring-slate-200' 
                    : 'text-slate-600 hover:bg-slate-200/50 hover:text-slate-900'}
                `}
              >
                <span className="opacity-75">{tab.icon}</span>
                <span className="hidden md:inline">{tab.shortTitle}</span>
                <span className="md:hidden">{tab.shortTitle.slice(0, 4)}.</span>
              </button>
            ))}
          </div>
        </nav>

        {/* MAIN CONTENT AREA */}
        <main className="col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* PANEL IZQUIERDO: Información Textual */}
          <section className="lg:col-span-4 grid gap-6 content-start">
            <Card title="Concepto Teórico" className="h-full">
              <div className="grid gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">{currentData.title}</h2>
                  <div className="h-1 w-12 bg-blue-500 rounded-full mb-4"></div>
                  <p className="text-slate-600 leading-relaxed">
                    {currentData.description}
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <div className="grid grid-flow-col gap-2 justify-start items-start">
                    <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-800">
                      {currentData.details}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* PANEL DERECHO: Renderizado del Diagrama */}
          <section className="lg:col-span-8">
            <Card title="Visualización Interactiva" className="h-full min-h-[400px]">
              <div className="grid h-full content-center">
                {/* Contenedor del Diagrama */}
                <div className="w-full bg-slate-50 rounded-xl border border-slate-100 p-6 md:p-8">
                  {renderDiagram()}
                </div>
                
                {/* Leyenda Contextual (Aparece bajo el diagrama) */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-white rounded shadow-sm border border-slate-100">
                    <span className="block text-xs uppercase tracking-wide text-slate-400 font-bold mb-1">Tipo de Vista</span>
                    <span className="text-sm font-medium text-slate-700">
                      {activeTab.includes('static') ? 'Estática' : activeTab.includes('dynamic') ? 'Animación' : 'Gráfico de Datos'}
                    </span>
                  </div>
                  <div className="p-3 bg-white rounded shadow-sm border border-slate-100">
                     <span className="block text-xs uppercase tracking-wide text-slate-400 font-bold mb-1">Enfoque</span>
                     <span className="text-sm font-medium text-slate-700">
                        {activeTab === 'inter-prop' ? 'Mecánico' : 'Microestructural'}
                     </span>
                  </div>
                   <div className="p-3 bg-white rounded shadow-sm border border-slate-100">
                     <span className="block text-xs uppercase tracking-wide text-slate-400 font-bold mb-1">Componentes</span>
                     <span className="text-sm font-medium text-slate-700">
                        {activeTab === 'static-mono' || activeTab === 'static-micro' ? '1 Fase' : '2+ Fases'}
                     </span>
                  </div>
                </div>
              </div>
            </Card>
          </section>

        </main>

      </div>
    </div>
  );
};

export default App;