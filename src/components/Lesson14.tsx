import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar, Legend, ReferenceLine } from 'recharts';
import { Activity, ArrowRight, Layers, Thermometer, Factory, Microscope, Settings, Info } from 'lucide-react';

// --- Types & Interfaces ---

interface TabData {
  id: string;
  label: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  type: 'chart' | 'schema' | 'dynamic-micro' | 'comparison' | 'flow';
}

// --- Data Definitions ---

const TABS: TabData[] = [
  {
    id: 'cycle',
    label: 'Ciclo Térmico',
    icon: <Thermometer size={18} />,
    title: 'Ciclo Temperatura-Tiempo',
    description: 'Representación del ciclo térmico ideal. Se observa un calentamiento gradual para evitar choques térmicos, una etapa de mantenimiento (sostenimiento) para homogeneizar la temperatura en toda la pieza, y un enfriamiento controlado dentro del horno.',
    type: 'chart'
  },
  {
    id: 'schema',
    label: 'Objetivos y Efectos',
    icon: <Layers size={18} />,
    title: 'Relación Objetivos-Efectos',
    description: 'Esquema lógico que conecta los propósitos industriales del tratamiento (izquierda) con los cambios físicos que ocurren dentro del material (derecha).',
    type: 'schema'
  },
  {
    id: 'micro',
    label: 'Microestructura',
    icon: <Microscope size={18} />,
    title: 'Evolución Microestructural Dinámica',
    description: 'Simulación del cambio en la estructura de grano. Durante el mantenimiento y enfriamiento lento, los granos tensionados se recristalizan y crecen de forma equiaxial, eliminando defectos.',
    type: 'dynamic-micro'
  },
  {
    id: 'compare',
    label: 'Propiedades',
    icon: <Activity size={18} />,
    title: 'Comparativa de Propiedades Mecánicas',
    description: 'Impacto del tratamiento en el rendimiento del material. Se sacrifica ligeramente la resistencia mecánica (dureza) a cambio de una ganancia significativa en ductilidad y tenacidad.',
    type: 'comparison'
  },
  {
    id: 'flow',
    label: 'Proceso Industrial',
    icon: <Factory size={18} />,
    title: 'Flujo de Fabricación',
    description: 'Ubicación estratégica del tratamiento térmico en la línea de producción. Actúa como un paso intermedio crítico para preparar el material antes del mecanizado final o uso.',
    type: 'flow'
  }
];

// Datos para el gráfico de líneas (Ciclo Térmico)
const CYCLE_DATA = [
  { time: 0, temp: 25, label: 'Inicio' },
  { time: 10, temp: 300, label: 'Calentamiento' },
  { time: 20, temp: 650, label: 'Calentamiento' },
  { time: 30, temp: 720, label: 'Mantenimiento' },
  { time: 40, temp: 720, label: 'Mantenimiento' },
  { time: 50, temp: 720, label: 'Mantenimiento' },
  { time: 60, temp: 500, label: 'Enfriamiento Lento' },
  { time: 70, temp: 300, label: 'Enfriamiento Lento' },
  { time: 80, temp: 100, label: 'Salida' },
  { time: 90, temp: 25, label: 'Final' },
];

// Datos para el gráfico de barras (Comparativa)
const COMPARISON_DATA = [
  { name: 'Dureza (HB)', antes: 220, despues: 160 },
  { name: 'Ductilidad (%)', antes: 12, despues: 35 },
  { name: 'Tensión Residual', antes: 100, despues: 10 }, // Normalizado para visualización
];

// --- Components ---

const Card: React.FC<{ title?: string; children: React.ReactNode; className?: string }> = ({ title, children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {title && (
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
        <h3 className="font-semibold text-slate-800">{title}</h3>
      </div>
    )}
    <div className="p-6">
      {children}
    </div>
  </div>
);

// Visualizador 1: Ciclo Térmico (Recharts)
const ThermalCycleChart: React.FC = () => (
  <div className="h-96 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={CYCLE_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis 
          dataKey="time" 
          label={{ value: 'Tiempo (min)', position: 'insideBottomRight', offset: -10 }} 
          stroke="#64748b"
        />
        <YAxis 
          label={{ value: 'Temperatura (°C)', angle: -90, position: 'insideLeft' }} 
          stroke="#64748b"
        />
        <RechartsTooltip 
          contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
        />
        <ReferenceLine x={25} stroke="#cbd5e1" strokeDasharray="3 3" label="Calentamiento" />
        <ReferenceLine x={40} stroke="#ef4444" strokeDasharray="3 3" label="Mantenimiento" />
        <ReferenceLine x={70} stroke="#3b82f6" strokeDasharray="3 3" label="Enfriamiento" />
        <Line 
          type="monotone" 
          dataKey="temp" 
          stroke="#f97316" 
          strokeWidth={3} 
          dot={{ r: 4, strokeWidth: 2 }} 
          activeDot={{ r: 8 }} 
          animationDuration={2000}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

// Visualizador 2: Esquema Objetivos vs Efectos (CSS Grid)
const GoalsSchema: React.FC = () => {
  const items = [
    { goal: 'Homogeneización', effect: 'Distribución uniforme de carbono' },
    { goal: 'Alivio de Tensiones', effect: 'Eliminación de dislocaciones' },
    { goal: 'Mejora de Ductilidad', effect: 'Recristalización de granos' },
    { goal: 'Ablandamiento', effect: 'Transformación de fases duras' },
  ];

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center h-full">
      <div className="space-y-4">
        <h4 className="text-center font-bold text-slate-700 mb-6">OBJETIVOS</h4>
        {items.map((item, idx) => (
          <div key={`g-${idx}`} className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded shadow-sm text-sm font-medium text-indigo-900">
            {item.goal}
          </div>
        ))}
      </div>
      
      <div className="flex flex-col justify-around h-full py-12">
        {items.map((_, idx) => (
          <ArrowRight key={`a-${idx}`} className="text-slate-400 animate-pulse" />
        ))}
      </div>

      <div className="space-y-4">
        <h4 className="text-center font-bold text-slate-700 mb-6">EFECTOS MICROESTRUCTURALES</h4>
        {items.map((item, idx) => (
          <div key={`e-${idx}`} className="bg-emerald-50 border-r-4 border-emerald-500 p-4 rounded shadow-sm text-sm font-medium text-emerald-900 text-right">
            {item.effect}
          </div>
        ))}
      </div>
    </div>
  );
};

// Visualizador 3: Microestructura Dinámica (Canvas/SVG Animation simulation)
const MicrostructureEvolution: React.FC = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getStageInfo = (s: number) => {
    switch(s) {
      case 0: return { label: 'Fase Inicial (Deformada)', desc: 'Granos alargados, alta densidad de dislocaciones.' };
      case 1: return { label: 'Recristalización', desc: 'Nucleación de nuevos granos libres de tensión.' };
      case 2: return { label: 'Crecimiento de Grano', desc: 'Estructura equiaxial, dúctil y estable.' };
      default: return { label: '', desc: '' };
    }
  };

  const info = getStageInfo(stage);

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-6">
      <div className="relative w-64 h-64 bg-slate-200 border-4 border-slate-800 rounded-full overflow-hidden shadow-inner transition-all duration-500">
        {/* Simulación visual basada en SVG pattern */}
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <defs>
            <pattern id="grains-0" width="20" height="10" patternUnits="userSpaceOnUse">
              <path d="M0,5 Q10,0 20,5 T40,5" stroke="#475569" strokeWidth="0.5" fill="none" />
              <path d="M5,0 V10 M15,0 V10" stroke="#475569" strokeWidth="0.5" fill="none" />
            </pattern>
            <pattern id="grains-1" width="15" height="15" patternUnits="userSpaceOnUse">
              <circle cx="7.5" cy="7.5" r="3" fill="#94a3b8" opacity="0.5" />
              <path d="M0,0 L15,15 M15,0 L0,15" stroke="#475569" strokeWidth="0.5" opacity="0.3" />
            </pattern>
            <pattern id="grains-2" width="25" height="25" patternUnits="userSpaceOnUse">
              <path d="M0,0 L25,0 L25,25 L0,25 Z" stroke="#475569" strokeWidth="1" fill="#cbd5e1" />
              <circle cx="12.5" cy="12.5" r="5" fill="#e2e8f0" />
            </pattern>
          </defs>
          
          <rect width="100%" height="100%" fill={`url(#grains-${stage})`} className="transition-all duration-1000" />
        </svg>
        
        {/* Overlay de temperatura simulada */}
        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${stage === 1 ? 'bg-orange-500/20' : 'bg-transparent'}`} />
      </div>

      <div className="text-center max-w-md">
        <h4 className="text-xl font-bold text-slate-800 transition-all">{info.label}</h4>
        <p className="text-slate-600 mt-2">{info.desc}</p>
        <div className="flex gap-2 justify-center mt-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`h-2 w-8 rounded-full transition-colors ${i === stage ? 'bg-blue-600' : 'bg-slate-300'}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Visualizador 4: Comparativa (Recharts Bar)
const PropertiesComparison: React.FC = () => (
  <div className="h-96 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={COMPARISON_DATA}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <RechartsTooltip cursor={{fill: '#f1f5f9'}} />
        <Legend />
        <Bar dataKey="antes" name="Antes del Tratamiento" fill="#94a3b8" radius={[4, 4, 0, 0]} />
        <Bar dataKey="despues" name="Después del Tratamiento" fill="#4f46e5" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
    <div className="text-center text-xs text-slate-500 mt-2">
      *Valores normalizados para comparación visual
    </div>
  </div>
);

// Visualizador 5: Flujo Industrial (Animated Steps)
const IndustrialFlow: React.FC = () => {
  const steps = [
    { id: 1, name: 'Fundición / Forja', icon: <Factory /> },
    { id: 2, name: 'Mecanizado Desbaste', icon: <Settings /> },
    { id: 3, name: 'TRATAMIENTO TÉRMICO', icon: <Thermometer />, highlight: true },
    { id: 4, name: 'Mecanizado Final', icon: <Settings /> },
    { id: 5, name: 'Control Calidad', icon: <Activity /> },
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="grid grid-cols-5 gap-4 w-full">
        {steps.map((step, idx) => (
          <div key={step.id} className={`flex flex-col items-center transition-all duration-500 ${idx === activeStep ? 'scale-110' : 'opacity-60'}`}>
            <div className={`
              w-16 h-16 rounded-full flex items-center justify-center mb-3 border-4 shadow-sm
              ${step.highlight 
                ? (idx === activeStep ? 'bg-orange-100 border-orange-500 text-orange-600' : 'bg-white border-orange-300 text-orange-400') 
                : (idx === activeStep ? 'bg-blue-50 border-blue-500 text-blue-600' : 'bg-white border-slate-200 text-slate-400')
              }
            `}>
              {step.icon}
            </div>
            <span className={`text-xs text-center font-bold px-2 ${step.highlight ? 'text-orange-700' : 'text-slate-600'}`}>
              {step.name}
            </span>
            {idx < steps.length - 1 && (
              <div className="absolute transform translate-x-20 translate-y-8">
                 <ArrowRight size={16} className="text-slate-300" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-12 p-4 bg-slate-50 rounded-lg border border-slate-200 max-w-2xl text-center">
        <p className="text-slate-700">
          El tratamiento térmico (Paso 3) es crucial para restaurar la microestructura tras el desbaste inicial, permitiendo que el mecanizado final sea preciso y el producto final duradero.
        </p>
      </div>
    </div>
  );
};

// --- Layout Components ---

const Header: React.FC = () => (
  <header className="col-span-12 bg-slate-900 text-white p-6 rounded-xl shadow-md flex items-center justify-between">
    <div>
      <h1 className="text-2xl font-bold tracking-tight">Análisis de Tratamientos Térmicos</h1>
      <p className="text-slate-400 text-sm mt-1">Módulo educativo interactivo: Recocido y Normalizado</p>
    </div>
    <div className="hidden md:flex items-center gap-2 text-xs font-mono bg-slate-800 px-3 py-1 rounded">
      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
      DIAGRAMTOREACT SYSTEM v1.0
    </div>
  </header>
);

const NavigationTabs: React.FC<{ activeTab: string; onTabChange: (id: string) => void }> = ({ activeTab, onTabChange }) => (
  <nav className="col-span-12 bg-white rounded-xl shadow-sm border border-slate-200 p-1">
    <div className="grid grid-cols-5 gap-1">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            flex flex-col md:flex-row items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-200 text-sm font-medium
            ${activeTab === tab.id 
              ? 'bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-200' 
              : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'}
          `}
        >
          {tab.icon}
          <span className="hidden md:inline">{tab.label}</span>
        </button>
      ))}
    </div>
  </nav>
);

// --- Main Application Component ---

const App: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('cycle');

  // Helper to find current tab data
  const currentTab = TABS.find(t => t.id === activeTabId) || TABS[0];

  const renderContent = () => {
    switch (currentTab.type) {
      case 'chart': return <ThermalCycleChart />;
      case 'schema': return <GoalsSchema />;
      case 'dynamic-micro': return <MicrostructureEvolution />;
      case 'comparison': return <PropertiesComparison />;
      case 'flow': return <IndustrialFlow />;
      default: return <div>Select a tab</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 font-sans text-slate-900">
      {/* CSS Grid Layout: 12 Columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
        
        <Header />
        
        <NavigationTabs activeTab={activeTabId} onTabChange={setActiveTabId} />

        {/* Content Section: Info Panel (Left/Top) */}
        <div className="col-span-12 lg:col-span-4 h-full">
          <Card className="h-full flex flex-col">
            <div className="mb-4 text-blue-600">
              {currentTab.icon}
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">{currentTab.title}</h2>
            <div className="prose prose-slate prose-sm flex-grow">
              <p className="leading-relaxed text-slate-600">
                {currentTab.description}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-start gap-3">
              <Info className="text-blue-500 flex-shrink-0 mt-1" size={16} />
              <p className="text-xs text-slate-500">
                Utilice las pestañas superiores para navegar entre las diferentes vistas analíticas del proceso.
              </p>
            </div>
          </Card>
        </div>

        {/* Content Section: Diagram Render (Right/Bottom) */}
        <div className="col-span-12 lg:col-span-8 h-[500px] lg:h-auto min-h-[500px]">
          <Card title="Visualización Interactiva" className="h-full flex flex-col">
            <div className="flex-grow flex items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-100 relative overflow-hidden">
               {renderContent()}
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default App;