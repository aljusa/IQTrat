import React, { useState, useMemo, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer, Legend } from 'recharts';
import { Layers, Activity, Clock } from 'lucide-react';

// ==========================================
// TYPES & INTERFACES
// ==========================================
interface TabDefinition {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface LessonLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  tabs: TabDefinition[];
  onTabChange: (id: string) => void;
  title: string;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface DiagramSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

// ==========================================
// CORE LAYOUT COMPONENTS (Strict CSS Grid)
// ==========================================

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`grid bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

const LessonLayout: React.FC<LessonLayoutProps> = ({ children, activeTab, tabs, onTabChange, title }) => (
  <div className="grid grid-rows-[auto_1fr] h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
    {/* Header con Title y Nav */}
    <header className="grid grid-rows-[auto_auto] gap-4 px-8 pt-8 pb-0 bg-white border-b border-slate-200 shadow-sm z-10">
      <div className="grid grid-cols-[auto_1fr] gap-3 place-items-center justify-self-start">
        <div className="grid place-items-center w-10 h-10 bg-blue-600 text-white rounded-lg shadow-inner">
          <Layers size={24} />
        </div>
        <h1 className="grid text-2xl font-bold text-slate-800 m-0 tracking-tight">
          {title}
        </h1>
      </div>
      
      {/* Sistema de Pestañas (Tabs) usando Grid flow */}
      <nav className="grid grid-flow-col auto-cols-max gap-2 mt-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`grid grid-flow-col auto-cols-max gap-2 place-items-center px-5 py-3 border-b-2 font-medium transition-all duration-200 outline-none
                ${isActive 
                  ? 'border-blue-600 text-blue-700 bg-blue-50/50' 
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                }`}
            >
              <span className="grid place-items-center">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </header>

    {/* Main Content Area */}
    <main className="grid p-8 overflow-y-auto place-items-start justify-center content-start">
      <div className="grid w-full max-w-6xl w-[90vw]">
        {children}
      </div>
    </main>
  </div>
);

const DiagramSection: React.FC<DiagramSectionProps> = ({ title, description, children }) => (
  <Card className="grid p-8 gap-6">
    <div className="grid gap-2 border-b border-slate-100 pb-4">
      <h2 className="grid text-xl font-bold text-slate-800">{title}</h2>
      <p className="grid text-slate-600 leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </div>
    <div className="grid">
      {children}
    </div>
  </Card>
);

// ==========================================
// DIAGRAM COMPONENTS
// ==========================================

// 1. Diagrama Hierro-Carbono (Interactivo con Recharts)
const FeCDiagram: React.FC = () => {
  const [carbon, setCarbon] = useState<number>(0.4);

  // Generación de datos estáticos para las líneas del diagrama
  const chartData = useMemo(() => {
    const data = [];
    for (let c = 0; c <= 5.0; c += 0.05) {
      const x = parseFloat(c.toFixed(2));
      let ac3 = null;
      let acm = null;
      const ac1 = 727;
      
      if (x <= 0.76) {
        ac3 = 912 - ((912 - 727) / 0.76) * x;
      }
      if (x >= 0.76 && x <= 4.3) {
        acm = 727 + ((1147 - 727) / (4.3 - 0.76)) * (x - 0.76);
      }

      data.push({
        carbon: x,
        Ac1: ac1,
        Ac3: ac3,
        Acm: acm,
        Eutectica: x >= 2.14 ? 1147 : null,
      });
    }
    return data;
  }, []);

  // Determinación de fases basada en el % de Carbono
  const getPhaseInfo = (c: number) => {
    if (c < 0.022) return { name: "Ferrita (α)", desc: "Hierro casi puro, estructura BCC. Muy dúctil y maleable." };
    if (c < 0.76) return { name: "Acero Hipoeutectoide (Ferrita + Perlita)", desc: "Combinación de ferrita proeutectoide y perlita. Balance ideal de tenacidad y resistencia." };
    if (Math.abs(c - 0.76) < 0.05) return { name: "Acero Eutectoide (100% Perlita)", desc: "Estructura laminar de ferrita y cementita. Alta resistencia." };
    if (c <= 2.14) return { name: "Acero Hipereutectoide (Cementita + Perlita)", desc: "Cementita en los límites de grano. Muy duro pero frágil." };
    return { name: "Fundición Blanca (Ledeubrita)", desc: "Aleación con más de 2.14% de C. Extremadamente dura y quebradiza." };
  };

  const phase = getPhaseInfo(carbon);

  return (
    <DiagramSection
      title="Diagrama de Fases Hierro-Carbono (Fe-C)"
      description="Selecciona un porcentaje de carbono utilizando el control deslizante para visualizar las líneas de transformación críticas (Ac₁, Ac₃ y Acm) y comprender la microestructura resultante a temperatura ambiente."
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
        {/* Render del Diagrama */}
        <div className="grid h-[450px] bg-slate-50 p-4 rounded-lg border border-slate-200">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="carbon" 
                type="number" 
                domain={[0, 5]} 
                tickCount={11}
                label={{ value: "Porcentaje de Carbono (% C)", position: 'bottom', offset: 0 }} 
              />
              <YAxis 
                domain={[400, 1200]} 
                label={{ value: "Temperatura (°C)", angle: -90, position: 'left' }} 
              />
              <Tooltip 
               
                labelFormatter={(label) => `Carbono: ${label}%`}
              />
              <Legend verticalAlign="top" height={36}/>
              
              <Line type="monotone" dataKey="Ac3" stroke="#ef4444" strokeWidth={2} dot={false} name="Línea Ac3 (Límite Austenita/Ferrita)" />
              <Line type="monotone" dataKey="Acm" stroke="#f59e0b" strokeWidth={2} dot={false} name="Línea Acm (Límite Austenita/Cementita)" />
              <Line type="monotone" dataKey="Ac1" stroke="#3b82f6" strokeWidth={2} dot={false} name="Línea Ac1 (Eutectoide)" />
              <Line type="monotone" dataKey="Eutectica" stroke="#10b981" strokeWidth={2} dot={false} name="Línea Eutéctica" />
              
              <ReferenceLine x={carbon} stroke="#6366f1" strokeDasharray="5 5" strokeWidth={2}>
                 {/* Custom label implementation could go here via Recharts, but UI handles it better */}
              </ReferenceLine>
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Panel de Control interactivo */}
        <div className="grid grid-rows-[auto_1fr] gap-6 p-6 bg-slate-50 border border-slate-200 rounded-lg content-start">
          <div className="grid gap-3">
            <label className="grid grid-cols-[1fr_auto] font-semibold text-slate-700">
              <span>Contenido de Carbono:</span>
              <span className="text-blue-600 font-bold">{carbon.toFixed(2)} %</span>
            </label>
            <input 
              type="range" 
              min="0.01" 
              max="4.5" 
              step="0.01" 
              value={carbon} 
              onChange={(e) => setCarbon(parseFloat(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          <div className="grid gap-3 p-4 bg-white border border-blue-100 rounded-lg shadow-sm">
            <h3 className="grid text-sm uppercase tracking-wider text-slate-500 font-bold">Microestructura Final</h3>
            <p className="grid text-lg font-bold text-slate-800">{phase.name}</p>
            <p className="grid text-sm text-slate-600">{phase.desc}</p>
          </div>
        </div>
      </div>
    </DiagramSection>
  );
};

// 2. Crecimiento Dinámico de Grano (Animación SVG)
const GrainGrowth: React.FC = () => {
  const [time, setTime] = useState<number>(0);

  // Control automático de tiempo opcional
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setTime((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Escalamos el tamaño del patrón para simular el crecimiento/coalescencia de granos
  const scale = 1 + (time / 15);
  // Invertimos el grosor del borde para que no se ensanche al hacer zoom
  const strokeWidth = 1.5 / scale;

  return (
    <DiagramSection
      title="Crecimiento Progresivo de Grano"
      description="Observa cómo aumenta el tamaño promedio del grano a medida que se prolonga el tiempo de mantenimiento a temperatura constante. Los granos más grandes absorben a los más pequeños reduciendo la energía superficial."
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
        
        {/* Render del Diagrama SVG */}
        <div className="grid h-[400px] w-full bg-slate-200 rounded-lg border border-slate-300 overflow-hidden relative shadow-inner">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern 
                id="grain-pattern" 
                width="80" 
                height="80" 
                patternUnits="userSpaceOnUse" 
                patternTransform={`scale(${scale})`}
              >
                {/* Geometría procedural tipo Voronoi simplificada */}
                <path d="M0,0 L35,15 L40,45 L10,35 Z" fill="#cbd5e1" stroke="#475569" strokeWidth={strokeWidth} />
                <path d="M35,15 L80,0 L70,55 L40,45 Z" fill="#e2e8f0" stroke="#475569" strokeWidth={strokeWidth} />
                <path d="M10,35 L40,45 L45,80 L0,75 Z" fill="#f1f5f9" stroke="#475569" strokeWidth={strokeWidth} />
                <path d="M40,45 L70,55 L80,80 L45,80 Z" fill="#cbd5e1" stroke="#475569" strokeWidth={strokeWidth} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grain-pattern)" />
          </svg>
          
          {/* Overlay de Datos en el gráfico */}
          <div className="absolute bottom-4 right-4 grid gap-1 bg-white/90 p-3 rounded-md shadow-sm border border-slate-200">
            <span className="grid text-xs text-slate-500 font-bold uppercase">Tamaño Relativo</span>
            <span className="grid text-xl font-bold text-slate-800">{(scale).toFixed(1)}x</span>
          </div>
        </div>

        {/* Panel de Control */}
        <div className="grid grid-rows-[auto_auto_1fr] gap-6 p-6 bg-slate-50 border border-slate-200 rounded-lg content-start">
          <div className="grid gap-3">
            <label className="grid grid-cols-[1fr_auto] font-semibold text-slate-700">
              <span>Tiempo de Mantenimiento:</span>
              <span className="text-blue-600 font-bold">{Math.floor(time)} min</span>
            </label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              step="1" 
              value={time} 
              onChange={(e) => {
                setTime(parseFloat(e.target.value));
                setIsPlaying(false);
              }}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className={`grid place-items-center py-2 px-4 rounded-md font-bold transition-colors border
              ${isPlaying 
                ? 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100' 
                : 'bg-blue-600 text-white border-blue-700 hover:bg-blue-700'
              }`}
          >
            {isPlaying ? 'Pausar Animación' : 'Iniciar Animación'}
          </button>

          <div className="grid gap-2 p-4 mt-4 bg-yellow-50 text-yellow-800 border border-yellow-200 rounded-lg text-sm self-start">
            <strong>Impacto Mecánico:</strong>
            A mayor tamaño de grano, disminuye la resistencia a la fluencia (Efecto Hall-Petch) y se reduce la tenacidad del material.
          </div>
        </div>
      </div>
    </DiagramSection>
  );
};

// 3. Diagrama TTT Dinámico (Curvas Temperatura-Tiempo-Transformación)
type CoolingRate = 'slow' | 'medium' | 'fast';

const TTTDiagram: React.FC = () => {
  const [rate, setRate] = useState<CoolingRate>('slow');

  // Datos para renderizar información según la trayectoria
  const infoMap = {
    slow: {
      title: "Enfriamiento Lento (Horno)",
      result: "Perlita Gruesa",
      props: "Alta ductilidad, baja dureza. Ideal para maquinado.",
      pathD: "M 0,20 L 320,380",
      color: "#10b981" // Verde
    },
    medium: {
      title: "Enfriamiento Medio (Aire)",
      result: "Perlita Fina / Bainita",
      props: "Balance adecuado entre resistencia y tenacidad.",
      pathD: "M 0,20 L 160,380",
      color: "#f59e0b" // Naranja
    },
    fast: {
      title: "Enfriamiento Rápido (Temple al Agua)",
      result: "Martensita",
      props: "Extrema dureza, muy frágil. Requiere revenido posterior.",
      pathD: "M 0,20 L 40,380",
      color: "#ef4444" // Rojo
    }
  };

  return (
    <DiagramSection
      title="Diagrama TTT (Curva de la 'S')"
      description="Compara distintas trayectorias de enfriamiento continuo desde la región austenítica. Observa cómo la velocidad de enfriamiento esquiva o atraviesa la 'nariz' de la curva, determinando la microestructura final."
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
        
        {/* Render del Diagrama SVG TTT */}
        <div className="grid h-[450px] w-full bg-[#f8fafc] border border-slate-200 rounded-lg p-4">
          <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="none">
            {/* Grid base */}
            <g stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4">
              {[50, 100, 150, 200, 250, 300, 350].map(y => <line key={y} x1="0" y1={y} x2="400" y2={y} />)}
              {[100, 200, 300].map(x => <line key={x} x1={x} y1="0" x2={x} y2="400" />)}
            </g>

            {/* Ejes */}
            <line x1="0" y1="400" x2="400" y2="400" stroke="#333" strokeWidth="2" />
            <line x1="0" y1="0" x2="0" y2="400" stroke="#333" strokeWidth="2" />
            
            {/* Curvas C (Inicio y Fin de Transformación) */}
            {/* Inicio (1% transformado) */}
            <path d="M 150,40 Q 50,150 200,280" fill="none" stroke="#64748b" strokeWidth="3" />
            {/* Fin (99% transformado) */}
            <path d="M 220,40 Q 120,150 320,280" fill="none" stroke="#64748b" strokeWidth="3" strokeDasharray="5 5" />
            
            {/* Líneas Ms y Mf (Martensite start/finish) */}
            <line x1="0" y1="280" x2="400" y2="280" stroke="#94a3b8" strokeWidth="2" strokeDasharray="8 4" />
            <text x="380" y="275" fontSize="12" fill="#64748b" textAnchor="end" fontWeight="bold">Ms</text>
            
            <line x1="0" y1="340" x2="400" y2="340" stroke="#94a3b8" strokeWidth="2" strokeDasharray="8 4" />
            <text x="380" y="335" fontSize="12" fill="#64748b" textAnchor="end" fontWeight="bold">Mf</text>

            {/* Etiquetas de las regiones */}
            <text x="250" y="80" fontSize="14" fill="#64748b" fontWeight="bold">Austenita</text>
            <text x="320" y="140" fontSize="14" fill="#64748b" fontWeight="bold">Perlita</text>
            <text x="320" y="240" fontSize="14" fill="#64748b" fontWeight="bold">Bainita</text>
            <text x="200" y="380" fontSize="14" fill="#64748b" fontWeight="bold">Martensita</text>

            {/* Trayectoria de enfriamiento dinámica */}
            <path 
              d={infoMap[rate].pathD} 
              fill="none" 
              stroke={infoMap[rate].color} 
              strokeWidth="4" 
              markerEnd="url(#arrowhead)"
              className="transition-all duration-500 ease-in-out"
            />

            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill={infoMap[rate].color} className="transition-all duration-500" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* Panel de Control de Trayectorias */}
        <div className="grid grid-rows-[auto_1fr] gap-6 p-6 bg-slate-50 border border-slate-200 rounded-lg">
          <div className="grid gap-3">
            <h3 className="grid font-semibold text-slate-700">Seleccionar Velocidad de Enfriamiento:</h3>
            <div className="grid gap-2">
              <button 
                onClick={() => setRate('slow')}
                className={`grid grid-cols-[auto_1fr] gap-3 place-items-center p-3 rounded border text-left transition-colors
                  ${rate === 'slow' ? 'bg-emerald-50 border-emerald-500 text-emerald-800' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
              >
                <div className={`w-3 h-3 rounded-full ${rate === 'slow' ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
                <span className="font-medium">Lento (En Horno)</span>
              </button>
              
              <button 
                onClick={() => setRate('medium')}
                className={`grid grid-cols-[auto_1fr] gap-3 place-items-center p-3 rounded border text-left transition-colors
                  ${rate === 'medium' ? 'bg-amber-50 border-amber-500 text-amber-800' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
              >
                <div className={`w-3 h-3 rounded-full ${rate === 'medium' ? 'bg-amber-500' : 'bg-slate-300'}`}></div>
                <span className="font-medium">Medio (Al Aire)</span>
              </button>
              
              <button 
                onClick={() => setRate('fast')}
                className={`grid grid-cols-[auto_1fr] gap-3 place-items-center p-3 rounded border text-left transition-colors
                  ${rate === 'fast' ? 'bg-red-50 border-red-500 text-red-800' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
              >
                <div className={`w-3 h-3 rounded-full ${rate === 'fast' ? 'bg-red-500' : 'bg-slate-300'}`}></div>
                <span className="font-medium">Rápido (Temple en Agua)</span>
              </button>
            </div>
          </div>

          <div className="grid gap-2 p-5 bg-white border border-slate-200 shadow-sm rounded-lg self-end content-start">
            <h4 className="grid text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Resultado de la Transformación</h4>
            <span className="grid text-xl font-bold text-slate-800" style={{ color: infoMap[rate].color }}>
              {infoMap[rate].result}
            </span>
            <p className="grid text-sm text-slate-600 mt-2">
              {infoMap[rate].props}
            </p>
          </div>
        </div>

      </div>
    </DiagramSection>
  );
};

// ==========================================
// MAIN APPLICATION COMPONENT
// ==========================================
export default function App() {
  const [activeTab, setActiveTab] = useState<string>('fe-c');

  const tabs: TabDefinition[] = [
    { id: 'fe-c', label: 'Diagrama Fe-C', icon: <Activity size={18} /> },
    { id: 'grain', label: 'Crecimiento de Grano', icon: <Layers size={18} /> },
    { id: 'ttt', label: 'Diagrama TTT', icon: <Clock size={18} /> },
  ];

  return (
    <LessonLayout 
      activeTab={activeTab} 
      tabs={tabs} 
      onTabChange={setActiveTab}
      title="Laboratorio Virtual de Metalurgia"
    >
      {/* Switcher condicional basado en la pestaña activa */}
      {activeTab === 'fe-c' && <FeCDiagram />}
      {activeTab === 'grain' && <GrainGrowth />}
      {activeTab === 'ttt' && <TTTDiagram />}
    </LessonLayout>
  );
}