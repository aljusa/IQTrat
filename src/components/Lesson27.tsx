import React, { useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ReferenceLine, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { Activity, Thermometer, Clock, Wind, Maximize, Target, Layers, ArrowRight } from 'lucide-react';

// --- TYPES & INTERFACES ---

interface LessonSection {
  id: string;
  tabLabel: string;
  icon: React.ElementType;
  title: string;
  description: string;
  diagramType: 'flowchart' | 'heating-graph' | 'hetero-homo-svg' | 'holding-graph' | 'uniformity-svg' | 'cooling-svg' | 'austenite-pearlite-svg' | 'grains-svg' | 'full-process-graph';
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface LessonLayoutProps {
  title: string;
  sections: LessonSection[];
  activeSectionId: string;
  onTabChange: (id: string) => void;
}

interface DiagramRenderProps {
  type: LessonSection['diagramType'];
}

// --- DATA ---

const LESSON_DATA: LessonSection[] = [
  {
    id: 'intro',
    tabLabel: 'Introducción',
    icon: Activity,
    title: 'Introducción a las etapas de la normalizado',
    description: 'El proceso de normalizado se lleva a cabo mediante una secuencia de etapas térmicas claramente definidas. Cada una cumple una función específica en la transformación de la microestructura del acero, permitiendo obtener resultados consistentes y reproducibles.',
    diagramType: 'flowchart'
  },
  {
    id: 'heating',
    tabLabel: 'Calentamiento',
    icon: Thermometer,
    title: 'Etapa de calentamiento',
    description: 'En esta etapa, el acero se calienta a una temperatura entre 30 °C y 80 °C por encima de su temperatura crítica. Este incremento asegura la transformación completa de la estructura interna, llevando el material a una fase adecuada para su posterior refinamiento.',
    diagramType: 'heating-graph'
  },
  {
    id: 'heating-rationale',
    tabLabel: 'Fundamento',
    icon: Target,
    title: 'Fundamento del calentamiento',
    description: 'El objetivo del calentamiento es transformar la estructura previa del acero en una fase más homogénea (austenita), eliminando irregularidades internas. Esta condición es necesaria para que el enfriamiento posterior genere una microestructura uniforme.',
    diagramType: 'hetero-homo-svg'
  },
  {
    id: 'holding',
    tabLabel: 'Mantenimiento',
    icon: Clock,
    title: 'Etapa de mantenimiento',
    description: 'Una vez alcanzada la temperatura adecuada, el material se mantiene durante un tiempo determinado. Este periodo permite que toda la pieza, desde la superficie hasta el núcleo, alcance condiciones térmicas homogéneas.',
    diagramType: 'holding-graph'
  },
  {
    id: 'holding-importance',
    tabLabel: 'Importancia',
    icon: Maximize,
    title: 'Importancia del mantenimiento',
    description: 'El mantenimiento asegura que no existan diferencias estructurales dentro de la pieza. Sin este paso, podrían generarse zonas con propiedades distintas, afectando el desempeño mecánico del material.',
    diagramType: 'uniformity-svg'
  },
  {
    id: 'cooling',
    tabLabel: 'Enfriamiento',
    icon: Wind,
    title: 'Etapa de enfriamiento',
    description: 'El enfriamiento se realiza al aire libre, sin intervención de medios externos. Este enfriamiento natural ocurre a una velocidad moderada, lo que favorece la formación de una estructura equilibrada.',
    diagramType: 'cooling-svg'
  },
  {
    id: 'cooling-effect',
    tabLabel: 'Efecto microestructural',
    icon: Layers,
    title: 'Efecto del enfriamiento en la microestructura',
    description: 'Durante el enfriamiento, la austenita se transforma en una estructura más fina y uniforme, generalmente perlítica. Este tipo de estructura proporciona un buen equilibrio entre resistencia y ductilidad.',
    diagramType: 'austenite-pearlite-svg'
  },
  {
    id: 'transformations',
    tabLabel: 'Transformaciones',
    icon: Activity,
    title: 'Transformaciones estructurales globales',
    description: 'El resultado final del proceso es una microestructura refinada, con granos más pequeños y distribución uniforme. Esto mejora la resistencia mecánica, la tenacidad y la estabilidad del acero frente a esfuerzos.',
    diagramType: 'grains-svg'
  },
  {
    id: 'integral',
    tabLabel: 'Visión Integral',
    icon: Target,
    title: 'Importancia integral del proceso',
    description: 'Cada etapa de la normalizado es esencial y está interrelacionada. El éxito del tratamiento depende del control adecuado de temperatura, tiempo y enfriamiento, lo que permite obtener un material confiable y con propiedades optimizadas.',
    diagramType: 'full-process-graph'
  }
];

// --- CHART DATA ---

const baseData = [
  { time: 0, temp: 20, stage: 'Inicio' },
  { time: 20, temp: 400, stage: 'Calentamiento' },
  { time: 40, temp: 800, stage: 'Calentamiento' },
  { time: 60, temp: 800, stage: 'Mantenimiento' },
  { time: 80, temp: 800, stage: 'Mantenimiento' },
  { time: 100, temp: 500, stage: 'Enfriamiento' },
  { time: 120, temp: 200, stage: 'Enfriamiento' },
  { time: 140, temp: 20, stage: 'Fin' },
];

const criticalTemp = 727; // Temperatura crítica típica del acero (A1)

// --- COMPONENTS ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`grid bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="grid grid-rows-[auto_auto] gap-1 bg-white p-3 border border-slate-200 shadow-md rounded-md text-sm">
        <p className="font-semibold text-slate-700">{`Tiempo: ${label} min`}</p>
        <p className="text-blue-600">{`Temperatura: ${payload[0].value}°C`}</p>
        <p className="text-slate-500 text-xs">{payload[0].payload.stage}</p>
      </div>
    );
  }
  return null;
};

const DiagramRender: React.FC<DiagramRenderProps> = ({ type }) => {
  switch (type) {
    case 'flowchart':
      return (
        <div className="grid place-content-center w-full h-full min-h-[300px] p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center w-full max-w-3xl">
            <div className="grid grid-rows-[auto_auto] gap-2 place-items-center bg-orange-50 p-4 border-2 border-orange-200 rounded-lg text-orange-700">
              <Thermometer size={32} />
              <span className="font-bold text-lg">Calentamiento</span>
              <span className="text-xs text-center">Superar temp. crítica</span>
            </div>
            <div className="grid grid-rows-[auto_auto] gap-2 place-items-center bg-blue-50 p-4 border-2 border-blue-200 rounded-lg text-blue-700">
              <Clock size={32} />
              <span className="font-bold text-lg">Mantenimiento</span>
              <span className="text-xs text-center">Homogeneización térmica</span>
            </div>
            <div className="grid grid-rows-[auto_auto] gap-2 place-items-center bg-teal-50 p-4 border-2 border-teal-200 rounded-lg text-teal-700">
              <Wind size={32} />
              <span className="font-bold text-lg">Enfriamiento</span>
              <span className="text-xs text-center">Aire libre (natural)</span>
            </div>
          </div>
        </div>
      );

    case 'heating-graph':
      return (
        <div className="grid w-full h-[400px] p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={baseData.slice(0, 3)} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="time" label={{ value: 'Tiempo', position: 'insideBottomRight', offset: -10 }} />
              <YAxis domain={[0, 1000]} label={{ value: 'Temperatura (°C)', angle: -90, position: 'insideLeft' }} />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine y={criticalTemp} stroke="#ef4444" strokeDasharray="5 5" label={{ position: 'top', value: 'Temp. Crítica', fill: '#ef4444', fontSize: 12 }} />
              <Line type="monotone" dataKey="temp" stroke="#f97316" strokeWidth={4} dot={{ r: 6, fill: '#f97316' }} animationDuration={1500} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );

    case 'hetero-homo-svg':
      return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center justify-items-center w-full h-full min-h-[300px] p-6">
          <div className="grid grid-rows-[auto_1fr] gap-4 justify-items-center">
            <h4 className="font-semibold text-slate-600">Estructura Inicial (Heterogénea)</h4>
            <svg width="150" height="150" viewBox="0 0 100 100" className="bg-slate-100 border-2 border-slate-300 rounded-md">
              <path d="M10,10 L40,20 L30,50 Z" fill="#94a3b8" />
              <circle cx="70" cy="30" r="15" fill="#64748b" />
              <rect x="50" y="60" width="30" height="20" fill="#cbd5e1" />
              <path d="M20,70 L40,90 L10,90 Z" fill="#475569" />
              <circle cx="80" cy="80" r="10" fill="#94a3b8" />
            </svg>
          </div>
          <ArrowRight className="text-slate-400 hidden md:block" size={40} />
          <div className="grid grid-rows-[auto_1fr] gap-4 justify-items-center">
            <h4 className="font-semibold text-orange-600">Fase Austenítica (Homogénea)</h4>
            <svg width="150" height="150" viewBox="0 0 100 100" className="bg-orange-50 border-2 border-orange-300 rounded-md">
              {[...Array(25)].map((_, i) => (
                <circle 
                  key={i} 
                  cx={(i % 5) * 20 + 10} 
                  cy={Math.floor(i / 5) * 20 + 10} 
                  r="8" 
                  fill="#f97316" 
                  opacity={0.8 + Math.random() * 0.2}
                />
              ))}
            </svg>
          </div>
        </div>
      );

    case 'holding-graph':
      return (
        <div className="grid w-full h-[400px] p-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={baseData.slice(2, 5)} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="time" domain={[40, 80]} type="number" label={{ value: 'Tiempo', position: 'insideBottomRight', offset: -10 }} />
              <YAxis domain={[0, 1000]} label={{ value: 'Temperatura (°C)', angle: -90, position: 'insideLeft' }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="temp" stroke="#3b82f6" strokeWidth={4} fillOpacity={1} fill="url(#colorTemp)" animationDuration={1500} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      );

    case 'uniformity-svg':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center w-full h-full min-h-[300px] p-6">
          <div className="grid grid-rows-[auto_1fr] gap-4 justify-items-center w-full">
            <h4 className="font-semibold text-red-600 text-center">Sin mantenimiento adecuado<br/><span className="text-sm font-normal text-slate-500">(Gradiente térmico interno)</span></h4>
            <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-orange-200 via-red-500 to-orange-800 border-4 border-slate-300 shadow-inner grid place-content-center relative">
              <span className="bg-white/80 px-2 py-1 rounded text-xs font-bold absolute top-4 left-4 text-orange-800">Frío</span>
              <span className="bg-white/80 px-2 py-1 rounded text-xs font-bold absolute bottom-4 right-4 text-red-900">Caliente</span>
            </div>
          </div>
          <div className="grid grid-rows-[auto_1fr] gap-4 justify-items-center w-full">
            <h4 className="font-semibold text-blue-600 text-center">Con mantenimiento adecuado<br/><span className="text-sm font-normal text-slate-500">(Homogeneidad térmica)</span></h4>
            <div className="w-48 h-48 rounded-full bg-red-500 border-4 border-slate-300 shadow-inner grid place-content-center">
               <span className="bg-white/80 px-2 py-1 rounded text-sm font-bold text-red-700">Temperatura Uniforme</span>
            </div>
          </div>
        </div>
      );

    case 'cooling-svg':
      return (
        <div className="grid place-content-center w-full h-full min-h-[300px] p-6 relative">
           <div className="relative grid place-items-center w-64 h-64">
              {/* Pieza metálica */}
              <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-orange-600 rounded-md shadow-lg border border-red-700 z-10 grid place-content-center">
                 <span className="text-white font-bold text-sm">Acero Caliente</span>
              </div>
              
              {/* Flechas de calor */}
              <svg className="absolute inset-0 w-full h-full z-0 animate-pulse" viewBox="0 0 100 100">
                <path d="M 50 10 Q 60 5 50 0" stroke="#94a3b8" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                <path d="M 50 90 Q 40 95 50 100" stroke="#94a3b8" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                <path d="M 10 50 Q 5 40 0 50" stroke="#94a3b8" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                <path d="M 90 50 Q 95 60 100 50" stroke="#94a3b8" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                
                <path d="M 20 20 Q 10 10 15 5" stroke="#94a3b8" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                <path d="M 80 20 Q 90 10 85 5" stroke="#94a3b8" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                <path d="M 20 80 Q 10 90 15 95" stroke="#94a3b8" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                <path d="M 80 80 Q 90 90 85 95" stroke="#94a3b8" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>

                <defs>
                  <marker id="arrowhead" markerWidth="5" markerHeight="4" refX="0" refY="2" orient="auto">
                    <polygon points="0 0, 5 2, 0 4" fill="#94a3b8" />
                  </marker>
                </defs>
              </svg>

              <div className="absolute -right-12 top-0 grid grid-flow-col gap-2 items-center text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                <Wind size={16} /> <span className="text-xs font-semibold">Aire Natural</span>
              </div>
           </div>
        </div>
      );

    case 'austenite-pearlite-svg':
      return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center justify-items-center w-full h-full min-h-[300px] p-6">
          <div className="grid grid-rows-[auto_1fr] gap-4 justify-items-center">
            <h4 className="font-semibold text-orange-600">Austenita<br/><span className="text-sm font-normal text-slate-500">(Alta temperatura)</span></h4>
            <svg width="150" height="150" viewBox="0 0 100 100" className="bg-orange-50 border-2 border-orange-300 rounded-full">
              <path d="M50,0 L100,50 L50,100 L0,50 Z" fill="none" stroke="#ea580c" strokeWidth="2" />
              <path d="M0,0 L100,100 M100,0 L0,100 M50,0 L50,100 M0,50 L100,50" stroke="#ea580c" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>
          <div className="grid grid-rows-[auto_auto] gap-2 place-items-center">
             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Enfriamiento</span>
             <ArrowRight className="text-blue-400 hidden md:block" size={40} />
          </div>
          <div className="grid grid-rows-[auto_1fr] gap-4 justify-items-center">
            <h4 className="font-semibold text-slate-700">Perlita (Fina)<br/><span className="text-sm font-normal text-slate-500">(Temperatura ambiente)</span></h4>
            <svg width="150" height="150" viewBox="0 0 100 100" className="bg-slate-100 border-2 border-slate-400 rounded-full overflow-hidden">
               {/* Simulación de estructura laminar de la perlita */}
               {[...Array(20)].map((_, i) => (
                  <line key={i} x1="-20" y1={i * 8} x2="120" y2={i * 8 + 20} stroke={i % 2 === 0 ? '#475569' : '#94a3b8'} strokeWidth="4" />
               ))}
               <circle cx="50" cy="50" r="50" fill="none" stroke="#94a3b8" strokeWidth="4" />
            </svg>
          </div>
        </div>
      );

    case 'grains-svg':
      return (
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center w-full h-full min-h-[300px] p-6">
          <div className="grid grid-rows-[auto_1fr] gap-4 justify-items-center w-full">
            <h4 className="font-semibold text-slate-600 text-center">Antes de normalizar<br/><span className="text-sm font-normal text-slate-500">(Granos gruesos, menor tenacidad)</span></h4>
            <svg width="200" height="200" viewBox="0 0 100 100" className="bg-white border-2 border-slate-300 rounded-md">
               <path d="M0,0 L40,10 L30,50 L0,60 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1"/>
               <path d="M40,10 L100,0 L90,60 L30,50 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1"/>
               <path d="M0,60 L30,50 L50,100 L0,100 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1"/>
               <path d="M30,50 L90,60 L100,100 L50,100 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1"/>
            </svg>
          </div>
          <div className="grid grid-rows-[auto_1fr] gap-4 justify-items-center w-full">
            <h4 className="font-semibold text-teal-600 text-center">Después de normalizar<br/><span className="text-sm font-normal text-slate-500">(Granos finos, alta tenacidad y resistencia)</span></h4>
            <svg width="200" height="200" viewBox="0 0 100 100" className="bg-white border-2 border-teal-300 rounded-md">
               {/* Generación de cuadricula para simular granos finos */}
               {[...Array(10)].map((_, r) => (
                  [...Array(10)].map((_, c) => (
                     <rect key={`${r}-${c}`} x={c * 10} y={r * 10} width="10" height="10" 
                           fill={['#ccfbf1', '#99f6e4', '#5eead4', '#f0fdfa'][Math.floor(Math.random() * 4)]} 
                           stroke="#14b8a6" strokeWidth="0.5" />
                  ))
               ))}
            </svg>
          </div>
        </div>
      );

    case 'full-process-graph':
      return (
        <div className="grid w-full h-[400px] p-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={baseData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="colorIntegral" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="time" label={{ value: 'Tiempo (Ciclo Completo)', position: 'insideBottomRight', offset: -10 }} />
              <YAxis domain={[0, 1000]} label={{ value: 'Temperatura (°C)', angle: -90, position: 'insideLeft' }} />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine y={criticalTemp} stroke="#ef4444" strokeDasharray="5 5" label={{ position: 'top', value: 'Temp. Crítica', fill: '#ef4444', fontSize: 12 }} />
              
              {/* Zonas sombreadas indicativas */}
              <ReferenceLine x={40} stroke="#cbd5e1" strokeDasharray="3 3" />
              <ReferenceLine x={80} stroke="#cbd5e1" strokeDasharray="3 3" />

              <Area type="monotone" dataKey="temp" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorIntegral)" animationDuration={2000} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      );

    default:
      return <div className="grid place-content-center h-full text-slate-400">Diagrama no disponible</div>;
  }
};

const LessonLayout: React.FC<LessonLayoutProps> = ({ title, sections, activeSectionId, onTabChange }) => {
  const activeSection = sections.find(s => s.id === activeSectionId) || sections[0];

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* HEADER & NAV */}
      <header className="grid grid-rows-[auto_auto] gap-4 p-6 bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="grid grid-cols-[auto_1fr] items-center gap-3">
          <div className="grid place-content-center w-10 h-10 bg-blue-600 text-white rounded-lg">
            <Activity size={24} />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">{title}</h1>
        </div>
        
        {/* TAB NAVIGATION (Exclusivamente CSS Grid) */}
        <nav className="grid grid-flow-col auto-cols-max gap-2 overflow-x-auto pb-2 scrollbar-hide border-t border-slate-100 pt-4">
          {sections.map((section) => {
            const isActive = section.id === activeSectionId;
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => onTabChange(section.id)}
                className={`grid grid-cols-[auto_1fr] items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap outline-none
                  ${isActive 
                    ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm' 
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-200'
                  }
                `}
                aria-selected={isActive}
                role="tab"
              >
                <Icon size={16} className={isActive ? 'text-blue-600' : 'text-slate-400'} />
                {section.tabLabel}
              </button>
            );
          })}
        </nav>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="grid p-6 gap-6 grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto w-full items-start">
        
        {/* TEXT PANEL */}
        <div className="lg:col-span-4 grid gap-6 content-start">
          <Card className="p-6 grid gap-4 border-t-4 border-t-blue-500">
            <div className="grid grid-cols-[auto_1fr] gap-3 items-center border-b border-slate-100 pb-4">
               <div className="grid place-content-center p-2 bg-slate-100 rounded-md text-slate-600">
                  <activeSection.icon size={24} />
               </div>
               <h2 className="text-xl font-bold text-slate-800 leading-tight">
                {activeSection.title}
               </h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-base">
              {activeSection.description}
            </p>
          </Card>
        </div>

        {/* DIAGRAM PANEL */}
        <div className="lg:col-span-8 grid h-full">
          <Card className="grid grid-rows-[auto_1fr] h-full min-h-[450px]">
            
            <div className="grid place-items-center bg-white p-2">
               <DiagramRender type={activeSection.diagramType} />
            </div>
          </Card>
        </div>

      </main>
    </div>
  );
};

// --- APP ENTRY POINT ---

export default function App() {
  const [activeTab, setActiveTab] = useState<string>(LESSON_DATA[0].id);

  return (
    <LessonLayout 
      title="Proceso de normalizado del Acero"
      sections={LESSON_DATA}
      activeSectionId={activeTab}
      onTabChange={setActiveTab}
    />
  );
}