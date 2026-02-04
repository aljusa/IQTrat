import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, 
  BarChart, Bar, Legend, ReferenceLine
} from 'recharts';
import { Layers, Activity, ArrowRight, Settings, Thermometer, Hammer } from 'lucide-react';

// --- TIPOS E INTERFACES ---

interface TabData {
  id: string;
  label: string;
  title: string;
  description: string;
  type: 'static' | 'dynamic' | 'interactive';
  icon: React.ReactNode;
}

// --- DATOS MOCK Y CONFIGURACIÓN ---

const TABS: TabData[] = [
  {
    id: 'mejora-static',
    label: 'Proceso de Mejora',
    title: 'Secuencia de Tratamiento de Mejora',
    description: 'Diagrama estático que ilustra el flujo desde el endurecimiento inicial hasta la obtención de propiedades mecánicas equilibradas mediante el ajuste térmico.',
    type: 'static',
    icon: <Layers size={18} />
  },
  {
    id: 'micro-dynamic',
    label: 'Microestructura',
    title: 'Transición de Microestructura',
    description: 'Representación dinámica de la reorganización cristalina. Observa cómo la estructura tensa y quebradiza se transforma en una matriz más estable y tenaz.',
    type: 'dynamic',
    icon: <Activity size={18} />
  },
  {
    id: 'tensions-static',
    label: 'Alivio de Tensiones',
    title: 'Comparativa de Tensiones Internas',
    description: 'Análisis cuantitativo de las tensiones residuales en el material antes y después del tratamiento térmico de alivio.',
    type: 'static',
    icon: <Thermometer size={18} />
  },
  {
    id: 'relaxation-dynamic',
    label: 'Relajación Progresiva',
    title: 'Curva de Relajación',
    description: 'Gráfico dinámico que muestra la caída de la tensión interna (MPa) en función del tiempo y la temperatura mantenida.',
    type: 'dynamic',
    icon: <Activity size={18} />
  },
  {
    id: 'cycle-interactive',
    label: 'Ciclo Industrial',
    title: 'Ciclo de Fabricación Interactivo',
    description: 'Explora las etapas de fabricación. Haz clic en cada fase para ver su posición relativa y función dentro del ciclo completo.',
    type: 'interactive',
    icon: <Settings size={18} />
  }
];

// --- COMPONENTES DE UI GENÉRICOS ---

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

// --- COMPONENTES DE DIAGRAMAS ESPECÍFICOS ---

// 1. Diagrama Estático: Flujo de Mejora
const StaticImprovementFlow = () => {
  return (
    <div className="w-full h-64 p-6 grid grid-cols-1 md:grid-cols-5 items-center gap-4 text-center">
      
      {/* Etapa 1 */}
      <div className="bg-slate-100 border-2 border-slate-300 p-4 rounded-lg grid gap-2 justify-items-center">
        <div className="bg-slate-800 text-white p-2 rounded-full"><Hammer size={20}/></div>
        <span className="font-bold text-slate-700">Endurecimiento</span>
        <span className="text-xs text-slate-500">Alta dureza, fragilidad</span>
      </div>

      {/* Flecha */}
      <div className="hidden md:grid justify-items-center text-slate-400">
        <ArrowRight size={32} />
      </div>

      {/* Etapa 2 */}
      <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-lg grid gap-2 justify-items-center relative">
        <div className="absolute -top-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full uppercase font-bold tracking-wider">Tratamiento</div>
        <div className="bg-blue-600 text-white p-2 rounded-full"><Thermometer size={20}/></div>
        <span className="font-bold text-blue-800">Mejora Térmica</span>
        <span className="text-xs text-blue-600">Ajuste de temperatura</span>
      </div>

      {/* Flecha */}
      <div className="hidden md:grid justify-items-center text-slate-400">
        <ArrowRight size={32} />
      </div>

      {/* Etapa 3 */}
      <div className="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-lg grid gap-2 justify-items-center">
        <div className="bg-emerald-600 text-white p-2 rounded-full"><Settings size={20}/></div>
        <span className="font-bold text-emerald-800">Propiedades Equilibradas</span>
        <span className="text-xs text-emerald-600">Tenacidad + Resistencia</span>
      </div>
    </div>
  );
};

// 2. Diagrama Dinámico: Microestructura
const DynamicMicrostructure = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage(prev => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-80 bg-slate-50 p-6 relative overflow-hidden grid place-items-center">
      <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded shadow text-sm font-semibold text-slate-600">
        Estado: {stage === 0 ? 'Microestructura Tensa (Endurecida)' : 'Microestructura Relajada (Mejorada)'}
      </div>
      
      {/* Contenedor de Granos */}
      <div 
        className="grid gap-2 transition-all duration-1000 ease-in-out"
        style={{
          gridTemplateColumns: `repeat(8, 1fr)`,
          width: '80%',
          maxWidth: '400px'
        }}
      >
        {Array.from({ length: 32 }).map((_, i) => (
          <div
            key={i}
            className={`
              rounded-sm transition-all duration-[2000ms] ease-in-out
              ${stage === 0 
                ? 'bg-slate-700 border-slate-800 rotate-[var(--r)] scale-90' 
                : 'bg-emerald-500 border-emerald-600 rotate-0 scale-100 rounded-md'}
            `}
            style={{
              height: '30px',
              // @ts-ignore custom property for randomization
              '--r': `${Math.random() * 45 - 22}deg`,
              borderWidth: '2px',
              opacity: stage === 0 ? 0.9 : 0.7
            }}
          />
        ))}
      </div>
      
      {stage === 0 && (
        <div className="absolute bottom-4 text-slate-500 text-sm animate-pulse">Aplicando calor...</div>
      )}
    </div>
  );
};

// 3. Diagrama Estático: Tensiones (Gráfico Barras)
const StaticTensions = () => {
  const data = [
    { name: 'Tensión Superficial', antes: 850, despues: 200 },
    { name: 'Tensión Núcleo', antes: 400, despues: 120 },
    { name: 'Riesgo Fisura', antes: 95, despues: 15 },
  ];

  return (
    <div className="w-full h-80 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" domain={[0, 1000]} />
          <YAxis dataKey="name" type="category" width={100} tick={{fontSize: 12}} />
          <RechartsTooltip cursor={{fill: 'transparent'}} />
          <Legend />
          <Bar dataKey="antes" name="Antes (MPa/%)" fill="#ef4444" radius={[0, 4, 4, 0]} barSize={20} />
          <Bar dataKey="despues" name="Después (MPa/%)" fill="#10b981" radius={[0, 4, 4, 0]} barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// 4. Diagrama Dinámico: Relajación (Gráfico Línea Animado)
const DynamicRelaxation = () => {
  const fullData = Array.from({ length: 20 }, (_, i) => ({
    time: i * 10,
    tension: Math.max(100, 1000 * Math.exp(-0.15 * i) + 50)
  }));

  const [visibleData, setVisibleData] = useState<any[]>([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullData.length) {
        setVisibleData(prev => [...prev, fullData[index]]);
        index++;
      } else {
        setTimeout(() => setVisibleData([]), 2000); // Reset
        index = 0;
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-80 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={visibleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" label={{ value: 'Tiempo (min)', position: 'insideBottom', offset: -5 }} />
          <YAxis domain={[0, 1200]} label={{ value: 'Tensión (MPa)', angle: -90, position: 'insideLeft' }} />
          <RechartsTooltip />
          <Line 
            type="monotone" 
            dataKey="tension" 
            stroke="#3b82f6" 
            strokeWidth={3} 
            dot={false}
            animationDuration={0}
          />
          <ReferenceLine y={200} label="Nivel Seguro" stroke="green" strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// 5. Diagrama Interactivo: Ciclo Industrial
const InteractiveCycle = () => {
  const steps = [
    { id: 1, label: 'Fundición / Forja', desc: 'Creación de la forma base. Genera altas tensiones.' },
    { id: 2, label: 'Mecanizado Desbaste', desc: 'Eliminación de material sobrante. Libera tensiones de forma descontrolada.' },
    { id: 3, label: 'Tratamiento Térmico', desc: 'Punto CRÍTICO: Alivio de tensiones o mejora para estabilizar.', highlight: true },
    { id: 4, label: 'Mecanizado Final', desc: 'Acabado de precisión. Requiere material estable.' },
    { id: 5, label: 'Uso Final', desc: 'Componente en servicio bajo carga real.' }
  ];

  const [activeStep, setActiveStep] = useState<number | null>(3);

  return (
    <div className="w-full h-auto p-6 grid gap-6">
      {/* Botones de Pasos */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(step.id)}
            className={`
              p-3 rounded-lg text-sm font-bold border-b-4 transition-all
              ${activeStep === step.id 
                ? 'bg-blue-600 text-white border-blue-800 translate-y-1' 
                : 'bg-slate-100 text-slate-600 border-slate-300 hover:bg-slate-200'}
            `}
          >
            {step.id}. {step.label}
          </button>
        ))}
      </div>

      {/* Panel de Detalle */}
      <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg min-h-[140px] grid place-items-center text-center">
        {activeStep ? (
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              {steps.find(s => s.id === activeStep)?.label}
            </h3>
            <p className="text-slate-600 max-w-lg mx-auto leading-relaxed">
              {steps.find(s => s.id === activeStep)?.desc}
            </p>
            {steps.find(s => s.id === activeStep)?.highlight && (
              <span className="inline-block mt-4 px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full border border-amber-200">
                ★ Etapa Clave para Visualización
              </span>
            )}
          </div>
        ) : (
          <span className="text-slate-400">Selecciona una etapa del ciclo</span>
        )}
      </div>
    </div>
  );
};

// --- RENDERIZADOR PRINCIPAL DE DIAGRAMAS ---

const DiagramRender: React.FC<{ activeTabId: string }> = ({ activeTabId }) => {
  switch (activeTabId) {
    case 'mejora-static': return <StaticImprovementFlow />;
    case 'micro-dynamic': return <DynamicMicrostructure />;
    case 'tensions-static': return <StaticTensions />;
    case 'relaxation-dynamic': return <DynamicRelaxation />;
    case 'cycle-interactive': return <InteractiveCycle />;
    default: return <div>Seleccione un diagrama</div>;
  }
};

// --- LAYOUT ESTRUCTURAL ---

const LessonLayout: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(TABS[0].id);
  const activeTab = TABS.find(t => t.id === activeTabId) || TABS[0];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 p-4 md:p-8 font-sans" 
         style={{ 
           display: 'grid', 
           gridTemplateRows: 'auto 1fr', 
           gap: '2rem',
           maxWidth: '1200px',
           margin: '0 auto'
         }}>
      
      {/* 1. Header Area */}
      <header style={{ display: 'grid', gap: '1.5rem' }}>
        <div className="border-b border-slate-300 pb-4">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Visualización de Tratamientos Térmicos
          </h1>
          <p className="text-slate-500 mt-1 text-sm md:text-base">
            Módulo educativo sobre mejora de materiales y alivio de tensiones.
          </p>
        </div>

        {/* Navigation Tabs (CSS Grid) */}
        <nav className="w-full overflow-x-auto pb-2">
           <div style={{ 
             display: 'grid', 
             gridAutoFlow: 'column', 
             gridAutoColumns: 'minmax(140px, 1fr)', 
             gap: '0.5rem' 
           }}>
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`
                  flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all
                  ${activeTabId === tab.id 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'}
                `}
              >
                {tab.icon}
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* 2. Main Content Area */}
      <main style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr', 
        gridTemplateRows: 'auto 1fr',
        gap: '1.5rem' 
      }}>
        
        {/* Panel de Texto */}
        <Card className="p-6 border-l-4 border-l-blue-500">
          <div className="flex justify-between items-start mb-2">
             <h2 className="text-xl font-bold text-slate-800">{activeTab.title}</h2>
             <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wide
               ${activeTab.type === 'static' ? 'bg-gray-100 text-gray-600' : ''}
               ${activeTab.type === 'dynamic' ? 'bg-purple-100 text-purple-600' : ''}
               ${activeTab.type === 'interactive' ? 'bg-amber-100 text-amber-600' : ''}
             `}>
               {activeTab.type}
             </span>
          </div>
          <p className="text-slate-600 leading-relaxed text-lg">
            {activeTab.description}
          </p>
        </Card>

        {/* Panel de Visualización */}
        <Card className="min-h-[400px] bg-white grid place-items-center">
          <div className="w-full h-full">
            <DiagramRender activeTabId={activeTabId} />
          </div>
        </Card>

      </main>
    </div>
  );
};

// --- APP ENTRY POINT ---

export default function App() {
  return <LessonLayout />;
}