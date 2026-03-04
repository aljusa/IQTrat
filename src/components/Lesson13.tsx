import React, { useState, useEffect } from 'react';
import { 
  Flame, 
  Layers, 
 
  ArrowDownCircle, 
  Info,
  Settings,
  ShieldCheck
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line,
 
} from 'recharts';

// --- Types & Interfaces ---

interface TabData {
  id: string;
  label: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  type: 'schema' | 'comparison' | 'dynamic' | 'interactive' | 'static-trend';
}

// --- Data for Visualizations ---

const comparisonData = [
  { name: 'Antes del Recocido', Dureza: 85, Ductilidad: 20 },
  { name: 'Después del Recocido', Dureza: 40, Ductilidad: 90 },
];

const stressData = [
  { time: '0h', tension: 100 },
  { time: '1h', tension: 80 },
  { time: '2h', tension: 50 },
  { time: '3h', tension: 25 },
  { time: '4h', tension: 10 },
  { time: '5h', tension: 5 },
];

// --- Sub-Components ---

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

// 1. Diagrama Estático: Clasificación (Grid Based Schema)
const ClassificationSchema = () => {
  return (
    <div className="w-full h-96 p-4 bg-slate-50 rounded-lg border border-slate-200 overflow-y-auto">
      <div className="grid gap-6 text-center">
        {/* Root */}
        <div className="grid justify-center">
          <div className="bg-blue-600 text-white p-3 rounded-lg font-bold shadow-md w-64">
            Tratamientos Térmicos
          </div>
        </div>
        
        {/* Connector */}
        <div className="grid justify-center h-4 relative">
             <div className="w-0.5 h-full bg-slate-400 absolute left-1/2 transform -translate-x-1/2"></div>
        </div>

        {/* Branches */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 relative">
           {/* Branch Line logic roughly simulated with borders for simplicity in pure grid */}
           
           <Card className="p-4 bg-blue-50 border-l-4 border-blue-500">
             <h3 className="font-bold text-blue-800 mb-2">Sin Cambio de Composición</h3>
             <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-white p-2 rounded shadow-sm border">Recocido</div>
                <div className="bg-white p-2 rounded shadow-sm border">Normalizado</div>
                <div className="bg-white p-2 rounded shadow-sm border">Temple</div>
                <div className="bg-white p-2 rounded shadow-sm border">Revenido</div>
             </div>
           </Card>

           <Card className="p-4 bg-purple-50 border-l-4 border-purple-500">
             <h3 className="font-bold text-purple-800 mb-2">Termoquímicos (Con cambio)</h3>
             <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-white p-2 rounded shadow-sm border">Cementación</div>
                <div className="bg-white p-2 rounded shadow-sm border">Nitruración</div>
                <div className="bg-white p-2 rounded shadow-sm border">Cianuración</div>
                <div className="bg-white p-2 rounded shadow-sm border">Carbonitruración</div>
             </div>
           </Card>
        </div>
      </div>
    </div>
  );
};

// 2. Diagrama Comparativo (Recharts)
const SofteningChart = () => (
  <div className="h-80 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={comparisonData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip cursor={{fill: 'transparent'}} />
        <Legend />
        <Bar dataKey="Dureza" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Dureza (Rockwell C)" />
        <Bar dataKey="Ductilidad" fill="#10b981" radius={[4, 4, 0, 0]} name="Ductilidad (%)" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

// 3. Diagrama Dinámico: Microestructura
const HardeningSimulation = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getPhaseStyles = (p: number) => {
    if (p === 0) return { bg: 'bg-orange-500', text: 'Austenita (Alta Temp)', structure: 'grid-cols-3 gap-1 opacity-90' }; // Caliente
    if (p === 1) return { bg: 'bg-blue-400', text: 'Enfriamiento Rápido', structure: 'grid-cols-6 gap-0.5 opacity-100' }; // Enfriando
    return { bg: 'bg-slate-700', text: 'Martensita (Duro/Frágil)', structure: 'grid-cols-12 gap-px' }; // Templado
  };

  const currentStyle = getPhaseStyles(phase);

  return (
    <div className="w-full h-80 bg-slate-100 rounded-lg p-6 relative overflow-hidden grid content-center justify-center">
      <div className="absolute top-4 left-4 bg-white/90 p-2 rounded shadow-sm z-10">
        <span className="font-bold text-slate-700">Estado: </span> 
        <span className={`${phase === 0 ? 'text-orange-600' : phase === 1 ? 'text-blue-600' : 'text-slate-800'}`}>
          {currentStyle.text}
        </span>
      </div>
      
      <div className={`w-64 h-64 ${currentStyle.bg} transition-colors duration-1000 rounded-full p-4 shadow-xl grid ${currentStyle.structure} content-center justify-center overflow-hidden border-4 border-slate-300`}>
        {/* Simulated Grains/Crystals */}
        {Array.from({ length: 36 }).map((_, i) => (
          <div 
            key={i} 
            className={`bg-white/30 rounded-full transition-all duration-1000 ${phase === 2 ? 'w-full h-full rounded-none rotate-45 transform scale-150' : 'w-4 h-4'}`}
          />
        ))}
      </div>

      {phase === 1 && (
        <div className="absolute inset-0 pointer-events-none grid grid-cols-10 opacity-30">
           {Array.from({length: 20}).map((_, i) => (
             <div key={i} className="h-full w-0.5 bg-blue-300 animate-pulse transform translate-y-4"></div>
           ))}
        </div>
      )}
    </div>
  );
};

// 4. Diagrama Interactivo: Ciclos Térmicos (Revenido)
const InteractiveTempering = () => {
  const [temp, setTemp] = useState(400);

  // Simple linear simulation data based on temperature
  const toughness = Math.min(100, (temp / 700) * 100);
  const hardness = Math.max(20, 100 - (temp / 700) * 60);

  const data = [
    { name: 'Propiedades', value: toughness, type: 'Tenacidad', fill: '#10b981' },
    { name: 'Propiedades', value: hardness, type: 'Dureza', fill: '#ef4444' },
  ];

  return (
    <div className="grid gap-6">
      <div className="grid grid-flow-col gap-4 items-center bg-slate-50 p-4 rounded-lg border border-slate-200">
        <label className="font-semibold text-slate-700 w-32">Temp. Revenido:</label>
        <input 
          type="range" 
          min="200" 
          max="700" 
          step="50"
          value={temp} 
          onChange={(e) => setTemp(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <span className="font-mono bg-white px-3 py-1 rounded border min-w-[80px] text-center">{temp}°C</span>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" data={data} barSize={40}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} />
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis type="category" dataKey="type" width={80} />
            <Tooltip />
            <Bar dataKey="value" radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <CartesianGrid key={`cell-${index}`} stroke={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-center text-sm">
        <div className="p-2 bg-green-50 text-green-800 rounded">
          Tenacidad: <span className="font-bold">{Math.round(toughness)}%</span>
        </div>
        <div className="p-2 bg-red-50 text-red-800 rounded">
          Dureza Residual: <span className="font-bold">{Math.round(hardness)} HRC (Sim)</span>
        </div>
      </div>
    </div>
  );
};

// 5. Diagrama Estático: Alivio de Tensiones
const StressReliefChart = () => (
  <div className="h-80 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={stressData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" label={{ value: 'Tiempo de Tratamiento', position: 'insideBottom', offset: -5 }} />
        <YAxis label={{ value: '% Tensiones Internas', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Line 
          type="monotone" 
          dataKey="tension" 
          stroke="#6366f1" 
          strokeWidth={3} 
          dot={{ r: 6, fill: '#6366f1', strokeWidth: 2, stroke: '#fff' }} 
          activeDot={{ r: 8 }} 
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

// --- Main Layout Component ---

const LessonLayout = ({ 
  title, 
  activeTabId, 
  tabs, 
  onTabChange, 
  children 
}: { 
  title: string; 
  activeTabId: string; 
  tabs: TabData[]; 
  onTabChange: (id: string) => void;
  children: React.ReactNode; 
}) => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans grid grid-rows-[auto_auto_1fr]">
      {/* 1. Header Area */}
      <header className="bg-slate-900 text-white p-4 shadow-md grid grid-cols-[auto_1fr] items-center gap-4">
        <div className="p-2 bg-blue-600 rounded-lg">
          <Layers className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-slate-400 text-xs uppercase tracking-wider">Módulo Educativo Interactivo</p>
        </div>
      </header>

      {/* 2. Tabs Navigation (No Buttons) */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-20 overflow-x-auto">
        <ul className="grid grid-flow-col auto-cols-max gap-1 p-2 min-w-max justify-center md:justify-start">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => onTabChange(tab.id)}
                className={`
                  grid grid-flow-col items-center gap-2 px-4 py-3 rounded-md transition-all duration-200 text-sm font-medium
                  ${activeTabId === tab.id 
                    ? 'bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-200' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                  }
                `}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* 3. Main Content Area */}
      <main className="p-4 md:p-8 max-w-7xl w-full mx-auto grid">
        {children}
      </main>
    </div>
  );
};

// --- Application Component ---

const App = () => {
  const [activeTab, setActiveTab] = useState<string>('classification');

  const tabs: TabData[] = [
    {
      id: 'classification',
      label: 'Clasificación',
      icon: <Layers size={18} />,
      title: 'Criterios de Clasificación',
      description: 'Los tratamientos térmicos se organizan principalmente por su objetivo final y si implican cambios en la composición química del material.',
      type: 'schema'
    },
    {
      id: 'softening',
      label: 'Ablandamiento',
      icon: <ArrowDownCircle size={18} />,
      title: 'Procesos de Ablandamiento (Recocido)',
      description: 'El recocido busca regenerar la estructura, eliminar tensiones y reducir la dureza para facilitar el mecanizado.',
      type: 'comparison'
    },
    {
      id: 'hardening',
      label: 'Endurecimiento',
      icon: <Flame size={18} />,
      title: 'Endurecimiento por Temple',
      description: 'El enfriamiento drástico congela una estructura inestable (Martensita), aumentando dramáticamente la dureza.',
      type: 'dynamic'
    },
    {
      id: 'improvement',
      label: 'Mejora',
      icon: <Settings size={18} />,
      title: 'Ciclos de Mejora (Revenido)',
      description: 'El revenido es crítico tras el temple. Sacrifica un poco de dureza para recuperar tenacidad y evitar fracturas frágiles.',
      type: 'interactive'
    },
    {
      id: 'stress',
      label: 'Alivio Tensiones',
      icon: <ShieldCheck size={18} />,
      title: 'Estabilización de Materiales',
      description: 'Tratamiento subcrítico que elimina tensiones residuales de soldadura o mecanizado sin alterar significativamente las propiedades mecánicas.',
      type: 'static-trend'
    }
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  const renderContent = () => {
    switch (currentTab.type) {
      case 'schema': return <ClassificationSchema />;
      case 'comparison': return <SofteningChart />;
      case 'dynamic': return <HardeningSimulation />;
      case 'interactive': return <InteractiveTempering />;
      case 'static-trend': return <StressReliefChart />;
      default: return <div>Seleccione un tema</div>;
    }
  };

  return (
    <LessonLayout 
      title="Fundamentos de Tratamientos Térmicos" 
      activeTabId={activeTab} 
      tabs={tabs} 
      onTabChange={setActiveTab}
    >
      <div className="grid gap-6 animate-in fade-in duration-500">
        {/* Section: Diagram Title */}
        <div className="border-b pb-4 border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            {currentTab.title}
          </h2>
        </div>

        {/* Section: Diagram Description */}
        <div className="bg-slate-50 border border-slate-100 p-4 rounded-lg text-slate-600 leading-relaxed grid grid-cols-[auto_1fr] gap-3">
          <Info className="text-blue-500 flex-shrink-0 mt-1" size={20} />
          <p>{currentTab.description}</p>
        </div>

        {/* Section: Diagram Render */}
        <Card className="p-6 bg-white min-h-[400px] grid items-center">
            {renderContent()}
        </Card>
      </div>
    </LessonLayout>
  );
};

export default App;