import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Microscope, Thermometer, Clock, Snowflake, Activity, Info } from 'lucide-react';

// --- Tipos e Interfaces ---

interface SectionData {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: React.ElementType;
  type: 'static' | 'dynamic-heat' | 'dynamic-hold' | 'comparative' | 'interactive';
}

// --- Datos del Contenido ---

const SECTIONS: SectionData[] = [
  {
    id: 'intro',
    title: 'Transformación Microestructural Inicial',
    shortTitle: 'Inicio',
    description: 'Comparación estática entre una microestructura base (Ferrita-Perlita) y el inicio de la austenización. Observa cómo los límites de grano comienzan a cambiar.',
    icon: Microscope,
    type: 'static'
  },
  {
    id: 'heating',
    title: 'Calentamiento: Disolución de Fases',
    shortTitle: 'Calentamiento',
    description: 'Diagrama dinámico. Mueve el control de temperatura para observar cómo la solubilidad del carbono aumenta y la estructura se homogeneiza hacia la fase Austanita.',
    icon: Thermometer,
    type: 'dynamic-heat'
  },
  {
    id: 'holding',
    title: 'Mantenimiento: Difusión Atómica',
    shortTitle: 'Mantenimiento',
    description: 'Visualización de la difusión del Carbono durante el tiempo a temperatura constante. La estructura se estabiliza eliminando gradientes de concentración.',
    icon: Clock,
    type: 'dynamic-hold'
  },
  {
    id: 'cooling',
    title: 'Enfriamiento: Lento vs Rápido',
    shortTitle: 'Enfriamiento',
    description: 'Comparativa crítica. El enfriamiento lento permite la formación de granos grandes (baja energía), mientras que el rápido "congela" la estructura generando Martensita (alta tensión).',
    icon: Snowflake,
    type: 'comparative'
  },
  {
    id: 'properties',
    title: 'Propiedades Mecánicas Resultantes',
    shortTitle: 'Propiedades',
    description: 'Interactúa con los diferentes tratamientos para ver cómo la transformación microestructural impacta directamente en la dureza, resistencia y ductilidad.',
    icon: Activity,
    type: 'interactive'
  }
];

// --- Componentes de UI Base (Grid Based) ---

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

// --- Componentes de Visualización Específicos ---

// 1. Estático: Microestructura
const StaticMicrostructure = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-64 w-full">
    <div className="relative bg-slate-100 rounded-full border-4 border-slate-300 w-64 h-64 mx-auto overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-60">
        <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="#334155" strokeWidth="2" />
        <path d="M50,0 Q75,25 50,50 T50,100" fill="none" stroke="#334155" strokeWidth="2" />
        <circle cx="25" cy="25" r="5" fill="#94a3b8" />
        <circle cx="75" cy="75" r="8" fill="#475569" />
      </svg>
      <div className="absolute bottom-4 left-0 right-0 text-center font-bold text-slate-600 bg-white/80 py-1">Estado Inicial</div>
    </div>
    <div className="relative bg-orange-50 rounded-full border-4 border-orange-200 w-64 h-64 mx-auto overflow-hidden">
       <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
       <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-60">
        <path d="M10,10 L90,90 M90,10 L10,90" stroke="#f97316" strokeWidth="1" strokeDasharray="4 2"/>
        <circle cx="50" cy="50" r="15" fill="#fdba74" opacity="0.5" />
      </svg>
      <div className="absolute bottom-4 left-0 right-0 text-center font-bold text-orange-700 bg-white/80 py-1">Transformado</div>
    </div>
  </div>
);

// 2. Dinámico: Calentamiento (Gráfico Interactivo)
const DynamicHeating = () => {
  const [temp, setTemp] = useState(0); // 0 to 100%

  const data = useMemo(() => {
    // Generamos datos basados en la "temperatura" actual simulada
    const currentTemp = 700 + (temp * 3); // 700C a 1000C
    return [
      { name: '700°C', Solubilidad: 10, Homogeneidad: 5 },
      { name: '800°C', Solubilidad: 30, Homogeneidad: 20 },
      { name: '900°C', Solubilidad: 80, Homogeneidad: 60 },
      { name: '1000°C', Solubilidad: 95, Homogeneidad: 90 },
    ].map(point => ({
      ...point,
      // Filtro visual simple: si la temp simulada es menor al punto, mostramos 0 para efecto de progreso
      ValActual: parseInt(point.name) <= currentTemp ? point.Solubilidad : 0
    }));
  }, [temp]);

  return (
    <div className="w-full h-full grid grid-rows-[auto_1fr] gap-4">
      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
        <span className="font-semibold text-slate-600">Temperatura: {700 + Math.round(temp * 3)}°C</span>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={temp} 
          onChange={(e) => setTemp(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <span className="text-xs text-slate-400">Deslizar para calentar</span>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Solubilidad" stroke="#cbd5e1" strokeWidth={2} dot={false} name="Teórico" />
            <Line type="monotone" dataKey="ValActual" stroke="#ea580c" strokeWidth={3} activeDot={{ r: 8 }} name="Estado Actual" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// 3. Dinámico: Difusión (Simulación Visual)
const DynamicDiffusion = () => {
  const [time, setTime] = useState(0);

  // Generamos una grilla de "átomos"
  // A medida que aumenta el tiempo, los colores se mezclan (randomización controlada)
  const atoms = useMemo(() => {
    const grid = [];
    const size = 10; 
    for (let i = 0; i < size * size; i++) {
      const row = Math.floor(i / size);
      // Estado inicial: Mitad superior Tipo A, Mitad inferior Tipo B
      const isTypeA = row < size / 2;
      
      // Probabilidad de mezcla basada en el tiempo
      const mixProbability = time / 100;
      const isMixed = Math.random() < mixProbability;
      
      let color = isTypeA ? 'bg-blue-500' : 'bg-yellow-500';
      if (isMixed) {
         // Si se mezcla, invertimos el color original visualmente
         color = isTypeA ? 'bg-yellow-500' : 'bg-blue-500';
      }
      
      grid.push(<div key={i} className={`w-full h-full rounded-full transition-colors duration-500 ${color} opacity-80 shadow-sm`} />);
    }
    return grid;
  }, [time]);

  return (
    <div className="grid grid-rows-[auto_1fr] gap-6 h-full">
       <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 grid grid-cols-[auto_1fr] gap-4 items-center">
        <span className="font-semibold text-slate-600">Tiempo de Mantenimiento: {time} min</span>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={time} 
          onChange={(e) => setTime(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
        />
      </div>
      <div className="aspect-square max-h-64 mx-auto grid grid-cols-10 gap-1 p-4 bg-slate-900 rounded-lg shadow-inner">
        {atoms}
      </div>
      <p className="text-center text-sm text-slate-500 mt-2">
        {time < 30 ? 'Alta segregación de fases.' : time < 80 ? 'Difusión en proceso...' : 'Homogeneización completa.'}
      </p>
    </div>
  );
};

// 4. Comparativo: Enfriamiento
const ComparativeCooling = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center">
    {/* Enfriamiento Lento */}
    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-center group hover:shadow-md transition-all">
      <h3 className="font-bold text-blue-800 mb-4">Enfriamiento Lento (Horno)</h3>
      <div className="w-40 h-40 mx-auto bg-white rounded-full border-2 border-blue-200 relative overflow-hidden mb-4">
        {/* Representación de Granos Grandes */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M10,10 Q50,50 90,10 M10,50 Q50,50 90,50 M10,90 Q50,50 90,90" stroke="#94a3b8" fill="none" strokeWidth="1" />
        </svg>
      </div>
      <ul className="text-sm text-blue-700 text-left space-y-1">
        <li>• Estructura: Perlita Gruesa</li>
        <li>• Dureza: Baja</li>
        <li>• Ductilidad: Alta</li>
      </ul>
    </div>

    {/* Enfriamiento Rápido */}
    <div className="bg-red-50 p-6 rounded-lg border border-red-100 text-center group hover:shadow-md transition-all">
      <h3 className="font-bold text-red-800 mb-4">Enfriamiento Rápido (Agua)</h3>
      <div className="w-40 h-40 mx-auto bg-white rounded-full border-2 border-red-200 relative overflow-hidden mb-4">
         {/* Representación de Agujas (Martensita) */}
         <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M20,20 L80,80 M80,20 L20,80 M50,0 L50,100 M0,50 L100,50 M30,10 L70,90" stroke="#ef4444" fill="none" strokeWidth="2" />
        </svg>
      </div>
      <ul className="text-sm text-red-700 text-left space-y-1">
        <li>• Estructura: Martensita</li>
        <li>• Dureza: Extrema</li>
        <li>• Ductilidad: Muy Baja (Frágil)</li>
      </ul>
    </div>
  </div>
);

// 5. Interactivo: Propiedades
const InteractiveProperties = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<'recocido' | 'temple'>('temple');

  const data = [
    { subject: 'Dureza', A: selectedTreatment === 'temple' ? 95 : 40, fullMark: 100 },
    { subject: 'Resistencia', A: selectedTreatment === 'temple' ? 90 : 50, fullMark: 100 },
    { subject: 'Ductilidad', A: selectedTreatment === 'temple' ? 10 : 90, fullMark: 100 },
    { subject: 'Tenacidad', A: selectedTreatment === 'temple' ? 20 : 80, fullMark: 100 },
    { subject: 'Maquinabilidad', A: selectedTreatment === 'temple' ? 15 : 85, fullMark: 100 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-center h-full">
      <div className="space-y-4">
        <p className="text-sm text-slate-500 mb-4">Seleccione un tratamiento para ver el impacto en las propiedades mecánicas:</p>
        <button
          onClick={() => setSelectedTreatment('recocido')}
          className={`w-full p-4 rounded-lg border text-left transition-all ${
            selectedTreatment === 'recocido' 
            ? 'bg-blue-100 border-blue-400 text-blue-900 ring-2 ring-blue-200' 
            : 'bg-white border-slate-200 hover:bg-slate-50'
          }`}
        >
          <div className="font-bold">Recocido</div>
          <div className="text-xs opacity-75">Enfriamiento lento, alivio de tensiones.</div>
        </button>
        <button
          onClick={() => setSelectedTreatment('temple')}
          className={`w-full p-4 rounded-lg border text-left transition-all ${
            selectedTreatment === 'temple' 
            ? 'bg-red-100 border-red-400 text-red-900 ring-2 ring-red-200' 
            : 'bg-white border-slate-200 hover:bg-slate-50'
          }`}
        >
          <div className="font-bold">Temple</div>
          <div className="text-xs opacity-75">Enfriamiento brusco, alta dureza.</div>
        </button>
      </div>
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              name={selectedTreatment}
              dataKey="A"
              stroke={selectedTreatment === 'temple' ? '#ef4444' : '#3b82f6'}
              fill={selectedTreatment === 'temple' ? '#ef4444' : '#3b82f6'}
              fillOpacity={0.5}
            />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// --- Componente Principal de Renderizado ---

const DiagramRender: React.FC<{ type: SectionData['type'] }> = ({ type }) => {
  switch (type) {
    case 'static': return <StaticMicrostructure />;
    case 'dynamic-heat': return <DynamicHeating />;
    case 'dynamic-hold': return <DynamicDiffusion />;
    case 'comparative': return <ComparativeCooling />;
    case 'interactive': return <InteractiveProperties />;
    default: return <div className="p-4 text-red-500">Diagram type not implemented</div>;
  }
};

// --- Componente de Navegación (Tabs) ---

interface HeaderProps {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 mb-8 border-b border-slate-200 pb-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-200">
          <Activity className="text-white w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Metallurgy<span className="text-indigo-600">Viz</span></h1>
          <p className="text-xs text-slate-500 font-medium">Módulo: Microestructuras</p>
        </div>
      </div>

      {/* Grid para Tabs: Reemplazando Flexbox */}
      <nav className="grid grid-flow-col auto-cols-fr gap-2 w-full overflow-x-auto pb-1 lg:pb-0">
        {SECTIONS.map((section, index) => {
          const Icon = section.icon;
          const isActive = activeTab === index;
          return (
            <button
              key={section.id}
              onClick={() => setActiveTab(index)}
              className={`
                group relative flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200
                ${isActive ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-slate-50 text-slate-500 hover:text-slate-700'}
              `}
            >
              <Icon className={`w-5 h-5 mb-1 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
              <span className={`text-xs font-semibold whitespace-nowrap ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                {section.shortTitle}
              </span>
              {isActive && (
                <span className="absolute bottom-0 w-8 h-1 bg-indigo-500 rounded-t-full" />
              )}
            </button>
          );
        })}
      </nav>
    </header>
  );
};

// --- Componente Layout Principal ---

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const currentSection = SECTIONS[activeTab];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header & Nav */}
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Grid Layout */}
        <main className="grid grid-cols-1 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {/* Seccion 1: Título y Descripción */}
          <section className="grid grid-cols-1 gap-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 bg-indigo-50 px-2 py-1 rounded">
                Paso {activeTab + 1} de {SECTIONS.length}
              </span>
              <h2 className="text-2xl font-bold text-slate-900">{currentSection.title}</h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
              {currentSection.description}
            </p>
          </section>

          {/* Seccion 2: Renderizado del Diagrama */}
          <Card className="min-h-[400px] p-6 bg-white border-t-4 border-t-indigo-500">
            <div className="h-full w-full">
              <DiagramRender type={currentSection.type} />
            </div>
          </Card>

          {/* Footer Informativo (Grid) */}
          <div className="grid grid-cols-[auto_1fr] gap-4 p-4 bg-indigo-900 text-white rounded-lg items-start opacity-90">
            <Info className="w-5 h-5 text-indigo-300 mt-1" />
            <p className="text-sm leading-relaxed">
              <strong>Nota Técnica:</strong> Los diagramas presentados son simplificaciones didácticas. 
              En la práctica real, factores como la composición exacta de la aleación, las impurezas y 
              la geometría de la pieza influyen drásticamente en la cinética de las transformaciones de fase.
            </p>
          </div>

        </main>
      </div>
    </div>
  );
}