import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Droplets, Wind, AlertTriangle, Thermometer, ShieldCheck, Factory, Activity } from 'lucide-react';

// --- Types & Interfaces ---

interface TabData {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface LessonLayoutProps {
  title: string;
  tabs: TabData[];
  activeTabId: string;
  onTabChange: (id: string) => void;
  children: React.ReactNode;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

// --- Data Definitions ---

const LESSON_TABS: TabData[] = [
  {
    id: 'intro',
    label: 'Introducción',
    title: 'Variables del Medio de Enfriamiento',
    description: 'El medio de enfriamiento influye directamente en la velocidad de extracción de calor, determinando la dureza final, el riesgo de deformación y la probabilidad de grietas. La elección depende del material y la geometría.',
    icon: <Activity className="w-4 h-4" />
  },
  {
    id: 'water',
    label: 'Agua',
    title: 'Temple en Agua: Alta Severidad',
    description: 'El agua es un medio de alta severidad que enfría muy rápidamente. Produce elevadas durezas, pero incrementa drásticamente el riesgo de tensiones internas, deformaciones y grietas, especialmente en piezas complejas.',
    icon: <Droplets className="w-4 h-4 text-blue-400" />
  },
  {
    id: 'oil',
    label: 'Aceite',
    title: 'Temple en Aceite: Equilibrio',
    description: 'El aceite enfría más lentamente que el agua, ofreciendo un temple menos severo. Se utiliza para buscar un equilibrio entre endurecimiento suficiente y menor probabilidad de fractura o deformación.',
    icon: <Droplets className="w-4 h-4 text-amber-500" />
  },
  {
    id: 'comparison',
    label: 'Agua vs Aceite',
    title: 'Comparativa de Medios Líquidos',
    description: 'La elección entre agua y aceite implica balancear la máxima dureza frente a la seguridad del proceso. El aceite reduce el riesgo de defectos a costa de una velocidad de enfriamiento menor.',
    icon: <ShieldCheck className="w-4 h-4 text-green-500" />
  },
  {
    id: 'air',
    label: 'Aire',
    title: 'Temple en Aire: Enfriamiento Lento',
    description: 'Empleado en templados menos severos para aceros aleados diseñados para endurecerse con bajas velocidades de enfriamiento. Reduce drásticamente el riesgo de deformaciones bruscas y choque térmico.',
    icon: <Wind className="w-4 h-4 text-gray-300" />
  },
  {
    id: 'advanced',
    label: 'Medios Avanzados',
    title: 'Sales y Polímeros',
    description: 'Las sales fundidas y soluciones poliméricas permiten controlar de forma precisa la velocidad de enfriamiento. Ideales para repetibilidad del proceso y ajuste fino de condiciones térmicas en la industria.',
    icon: <Factory className="w-4 h-4 text-purple-400" />
  }
];

const COMPARISON_DATA = [
  { metrica: 'Velocidad de Enfriamiento', Agua: 100, Aceite: 40 },
  { metrica: 'Dureza Obtenida (General)', Agua: 95, Aceite: 70 },
  { metrica: 'Riesgo de Grietas', Agua: 90, Aceite: 25 },
  { metrica: 'Estabilidad Dimensional', Agua: 20, Aceite: 80 },
];

// --- Components ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`grid bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

const LessonLayout: React.FC<LessonLayoutProps> = ({ title, tabs, activeTabId, onTabChange, children }) => {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen w-full bg-slate-50 font-sans text-slate-800">
      {/* Header & Nav */}
      <header className="grid grid-rows-[auto_auto] bg-slate-900 text-white shadow-lg z-10">
        <div className="grid items-center px-6 py-4 border-b border-slate-700">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        </div>
        <nav className="grid grid-flow-col justify-start overflow-x-auto bg-slate-800 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`grid grid-flow-col gap-2 items-center px-6 py-3 text-sm font-medium transition-colors border-b-2 outline-none
                ${activeTabId === tab.id 
                  ? 'border-blue-400 bg-slate-700 text-blue-300' 
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
                }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="grid p-6 overflow-y-auto place-items-start">
        <div className="grid grid-rows-[auto_auto_1fr] gap-6 w-full max-w-6xl mx-auto h-full">
          {children}
        </div>
      </main>
    </div>
  );
};

// --- Renderers for each Tab ---

const IntroDiagram = () => (
  <Card className="p-8 grid place-items-center min-h-[400px] bg-slate-50">
    <div className="grid grid-rows-[auto_auto_auto] gap-8 w-full max-w-3xl">
      <div className="grid place-items-center p-4 bg-slate-800 text-white rounded-md shadow-md text-lg font-bold">
        Medio de Enfriamiento
      </div>
      
      <div className="grid grid-cols-3 gap-4 place-items-center">
        <div className="grid h-full border-r-2 border-slate-300 w-full"></div>
        <div className="grid place-items-center p-3 bg-blue-100 border-2 border-blue-300 rounded-md font-semibold text-blue-800 w-full text-center">
          Velocidad de Extracción de Calor
        </div>
        <div className="grid h-full border-l-2 border-slate-300 w-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="grid grid-rows-[auto_1fr] gap-2 p-4 bg-white border border-slate-200 rounded-md shadow-sm text-center">
          <span className="font-bold text-slate-700 border-b pb-2">Dureza Final</span>
          <span className="text-sm text-slate-500 pt-2">Dependencia directa de la tasa de enfriamiento.</span>
        </div>
        <div className="grid grid-rows-[auto_1fr] gap-2 p-4 bg-white border border-slate-200 rounded-md shadow-sm text-center">
          <span className="font-bold text-slate-700 border-b pb-2">Riesgo de Deformación</span>
          <span className="text-sm text-slate-500 pt-2">Aumenta con gradientes térmicos severos.</span>
        </div>
        <div className="grid grid-rows-[auto_1fr] gap-2 p-4 bg-white border border-slate-200 rounded-md shadow-sm text-center">
          <span className="font-bold text-slate-700 border-b pb-2">Probabilidad de Grietas</span>
          <span className="text-sm text-slate-500 pt-2">Crítico en geometrías complejas y enfriamiento drástico.</span>
        </div>
      </div>
    </div>
  </Card>
);

const WaterDiagram = () => (
  <Card className="p-8 grid place-items-center min-h-[400px] bg-blue-50/50">
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 w-full max-w-4xl">
      <div className="grid place-items-center p-8 bg-blue-600 text-white rounded-lg shadow-lg">
        <Droplets className="w-24 h-24 mb-4" />
        <h2 className="text-3xl font-bold tracking-wider uppercase">Agua</h2>
      </div>
      <div className="grid grid-rows-2 gap-4">
        <div className="grid grid-cols-[auto_1fr] gap-4 items-center p-4 bg-white border-l-4 border-blue-500 rounded shadow-sm">
          <Thermometer className="w-8 h-8 text-blue-500" />
          <div className="grid">
            <span className="font-bold text-lg text-slate-800">Enfriamiento Muy Rápido</span>
            <span className="text-slate-600 text-sm">Alta severidad que asegura la máxima extracción de calor.</span>
          </div>
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-4 items-center p-4 bg-white border-l-4 border-red-500 rounded shadow-sm">
          <AlertTriangle className="w-8 h-8 text-red-500" />
          <div className="grid">
            <span className="font-bold text-lg text-slate-800">Alto Riesgo de Agrietamiento</span>
            <span className="text-slate-600 text-sm">Genera tensiones internas masivas; peligroso en piezas gruesas.</span>
          </div>
        </div>
      </div>
    </div>
  </Card>
);

const OilDiagram = () => (
  <Card className="p-8 grid place-items-center min-h-[400px] bg-amber-50/50">
    <div className="grid gap-8 w-full max-w-3xl text-center">
      <div className="grid place-items-center">
        <div className="grid place-items-center w-32 h-32 bg-amber-500 rounded-full shadow-lg text-white mb-6">
          <Droplets className="w-16 h-16" />
        </div>
        <h2 className="text-2xl font-bold text-amber-900">Medio: Aceite</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-6 relative">
        <div className="grid place-items-center p-6 bg-white rounded-lg shadow border border-amber-200">
          <span className="text-green-600 font-bold text-lg mb-2">Mayor Control</span>
          <span className="text-sm text-slate-600">Velocidad térmica moderada, previniendo choques extremos.</span>
        </div>
        <div className="grid place-items-center p-6 bg-white rounded-lg shadow border border-amber-200">
          <span className="text-blue-600 font-bold text-lg mb-2">Menor Severidad</span>
          <span className="text-sm text-slate-600">Balance ideal para evitar fracturas manteniendo dureza aceptable.</span>
        </div>
        {/* Metaphorical Scale Line */}
        <div className="absolute top-1/2 left-1/4 right-1/4 h-1 bg-amber-300 -z-10 transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-4 h-16 bg-amber-400 -z-10 transform -translate-x-1/2 -translate-y-1/2 rounded"></div>
      </div>
    </div>
  </Card>
);

const ComparisonDiagram = () => (
  <Card className="p-6 grid grid-rows-[auto_1fr] min-h-[450px]">
    <div className="grid place-items-center mb-6">
      <h3 className="text-lg font-bold text-slate-700">Análisis Comparativo Relativo (0-100)</h3>
    </div>
    <div className="w-full h-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={COMPARISON_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="metrica" tick={{ fill: '#475569', fontSize: 12 }} />
          <YAxis tick={{ fill: '#475569' }} />
          <Tooltip 
            cursor={{ fill: '#f1f5f9' }}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Bar dataKey="Agua" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Agua (Severo)" />
          <Bar dataKey="Aceite" fill="#f59e0b" radius={[4, 4, 0, 0]} name="Aceite (Moderado)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </Card>
);

const AirDiagram = () => (
  <Card className="p-8 grid place-items-center min-h-[400px] bg-slate-100">
    <div className="grid gap-6 w-full max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="grid grid-rows-[auto_1fr] place-items-center p-6 bg-white rounded-xl shadow-sm border border-slate-200">
          <Wind className="w-12 h-12 text-slate-400 mb-4" />
          <h4 className="font-bold text-slate-700 text-center">Aire</h4>
          <p className="text-xs text-slate-500 text-center mt-2">Medio gaseoso estándar</p>
        </div>
        
        <div className="grid grid-rows-[auto_1fr] place-items-center p-6 bg-white rounded-xl shadow-sm border border-blue-200">
          <Activity className="w-12 h-12 text-blue-400 mb-4" />
          <h4 className="font-bold text-slate-700 text-center">Enfriamiento Lento</h4>
          <p className="text-xs text-slate-500 text-center mt-2">Baja tasa de extracción de calor</p>
        </div>

        <div className="grid grid-rows-[auto_1fr] place-items-center p-6 bg-white rounded-xl shadow-sm border border-green-200">
          <ShieldCheck className="w-12 h-12 text-green-500 mb-4" />
          <h4 className="font-bold text-slate-700 text-center">Menor Choque Térmico</h4>
          <p className="text-xs text-slate-500 text-center mt-2">Protege aceros de alta aleación</p>
        </div>
      </div>
      <div className="grid p-4 bg-slate-800 text-white rounded-lg text-center shadow-inner mt-4">
        <span className="text-sm font-medium">Recomendado exclusivamente para aceros autotemplables o de alta aleación diseñados para este fin.</span>
      </div>
    </div>
  </Card>
);

const AdvancedDiagram = () => (
  <Card className="p-8 grid place-items-center min-h-[400px] bg-slate-900 text-slate-200">
    <div className="grid grid-rows-[auto_1fr] gap-8 w-full max-w-4xl">
      <div className="grid text-center">
        <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
          <Factory className="w-6 h-6 text-purple-400" />
          Entorno Industrial Avanzado
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tanque de Sales */}
        <div className="grid grid-rows-[auto_1fr] p-6 bg-slate-800 border-2 border-orange-500/50 rounded-lg relative overflow-hidden">
          <div className="grid place-items-center absolute top-2 right-2 w-10 h-10 bg-slate-900 rounded-full border border-slate-600">
             <Thermometer className="w-5 h-5 text-orange-400" />
          </div>
          <h4 className="text-xl font-bold text-orange-400 mb-4 border-b border-slate-700 pb-2">Sales Fundidas</h4>
          <div className="grid gap-2 text-sm text-slate-300">
            <p>• Control térmico isotérmico exacto.</p>
            <p>• Minimiza gradientes de temperatura núcleo-superficie.</p>
            <p>• Ideal para procesos de austempering y martempering.</p>
          </div>
        </div>

        {/* Tanque de Polímeros */}
        <div className="grid grid-rows-[auto_1fr] p-6 bg-slate-800 border-2 border-purple-500/50 rounded-lg relative overflow-hidden">
           <div className="grid place-items-center absolute top-2 right-2 w-10 h-10 bg-slate-900 rounded-full border border-slate-600">
             <SettingsIcon className="w-5 h-5 text-purple-400" />
          </div>
          <h4 className="text-xl font-bold text-purple-400 mb-4 border-b border-slate-700 pb-2">Soluciones Poliméricas</h4>
          <div className="grid gap-2 text-sm text-slate-300">
            <p>• Velocidad ajustable modificando la concentración.</p>
            <p>• Puente de severidad entre agua y aceite.</p>
            <p>• Alta repetibilidad y menor riesgo de incendio que el aceite.</p>
          </div>
        </div>
      </div>
    </div>
  </Card>
);

// Helper Icon for Advanced
const SettingsIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);


// --- Main Application ---

export default function App() {
  const [activeTabId, setActiveTabId] = useState<string>(LESSON_TABS[0].id);

  const activeTabData = LESSON_TABS.find(tab => tab.id === activeTabId) || LESSON_TABS[0];

  const renderActiveDiagram = () => {
    switch (activeTabId) {
      case 'intro': return <IntroDiagram />;
      case 'water': return <WaterDiagram />;
      case 'oil': return <OilDiagram />;
      case 'comparison': return <ComparisonDiagram />;
      case 'air': return <AirDiagram />;
      case 'advanced': return <AdvancedDiagram />;
      default: return null;
    }
  };

  return (
    <LessonLayout
      title="Medios de Enfriamiento"
      tabs={LESSON_TABS}
      activeTabId={activeTabId}
      onTabChange={setActiveTabId}
    >
      {/* Section 1: Diagram Title */}
      <div className="grid border-b border-slate-200 pb-2">
        <h2 className="text-2xl font-bold text-slate-800">{activeTabData.title}</h2>
      </div>

      {/* Section 2: Diagram Description */}
      <div className="grid">
        <p className="text-slate-600 leading-relaxed text-lg">
          {activeTabData.description}
        </p>
      </div>

      {/* Section 3: Diagram Render */}
      <div className="grid h-full w-full">
        {renderActiveDiagram()}
      </div>
    </LessonLayout>
  );
}