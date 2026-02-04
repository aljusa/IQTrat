import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceArea, BarChart, Bar, Cell } from 'recharts';
import { Activity, Thermometer, Microscope, Settings, Factory, Info } from 'lucide-react';
import DivCarousel from '../assets/DivCarousel';

// --- Types & Interfaces ---

interface TabData {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortLabel: string;
  description: React.ReactNode;
  component: React.ReactNode;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

// --- Shared Components ---

const Card: React.FC<CardProps> = ({ children, className = "", title }) => (
  <div className={`bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col ${className}`}>
    {title && (
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
        <h3 className="font-semibold text-slate-800">{title}</h3>
      </div>
    )}
    <div className="p-6 h-full">
      {children}
    </div>
  </div>
);

// --- Section 1: Curva Temperatura-Tiempo (Estático) ---

const TempTimeCurve = () => {
  const data = [
    { time: 0, temp: 20, stage: 'Inicio' },
    { time: 20, temp: 850, stage: 'Calentamiento' },
    { time: 50, temp: 850, stage: 'Mantenimiento' },
    { time: 80, temp: 20, stage: 'Enfriamiento' },
  ];

  return (
    <div className="h-full w-full grid grid-rows-[auto_1fr] gap-4">
      <div className="text-slate-600 text-sm mb-2">
        <p>Esta curva representa el ciclo estándar de un tratamiento térmico. Observa las tres fases críticas definidas por las áreas sombreadas.</p>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="time" label={{ value: 'Tiempo (min)', position: 'insideBottomRight', offset: -5 }} />
            <YAxis label={{ value: 'Temp (°C)', angle: -90, position: 'insideLeft' }} domain={[0, 1000]} />
            <Tooltip />
            
            <ReferenceArea x1={0} x2={20} strokeOpacity={0.3} fill="#fee2e2" label="Calentamiento" />
            <ReferenceArea x1={20} x2={50} strokeOpacity={0.3} fill="#ffedd5" label="Mantenimiento" />
            <ReferenceArea x1={50} x2={80} strokeOpacity={0.3} fill="#dbeafe" label="Enfriamiento" />
            
            <Line type="monotone" dataKey="temp" stroke="#dc2626" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-3 gap-4 text-center text-sm mt-4">
        <div className="p-2 bg-red-50 rounded border border-red-100">
          <span className="font-bold block text-red-700">1. Calentamiento</span>
          Elevar Tº hasta austenización.
        </div>
        <div className="p-2 bg-orange-50 rounded border border-orange-100">
          <span className="font-bold block text-orange-700">2. Mantenimiento</span>
          Homogeneizar la estructura.
        </div>
        <div className="p-2 bg-blue-50 rounded border border-blue-100">
          <span className="font-bold block text-blue-700">3. Enfriamiento</span>
          Define la dureza final.
        </div>
      </div>
    </div>
  );
};

// --- Section 2: Comparación de Curvas (Dinámico/Animado simulado) ---

const CoolingComparison = () => {
  const data = Array.from({ length: 61 }, (_, i) => {
    const t = i;
    // Fórmulas simplificadas de enfriamiento de Newton
    return {
      time: t,
      Horno: Math.max(25, 850 * Math.exp(-0.02 * t)), // Lento
      Aire: Math.max(25, 850 * Math.exp(-0.08 * t)), // Medio
      Agua: Math.max(25, 850 * Math.exp(-0.25 * t)), // Rápido
    };
  });

  return (
    <div className="h-full w-full grid grid-rows-[auto_1fr] gap-4">
      <div className="grid grid-cols-3 gap-2 mb-4">
         <div className="flex items-center gap-2 text-sm text-slate-600"><div className="w-3 h-3 bg-red-500 rounded-full"></div>Enfriamiento en Horno (Recocido)</div>
         <div className="flex items-center gap-2 text-sm text-slate-600"><div className="w-3 h-3 bg-yellow-500 rounded-full"></div>Enfriamiento en Aire (Normalizado)</div>
         <div className="flex items-center gap-2 text-sm text-slate-600"><div className="w-3 h-3 bg-blue-500 rounded-full"></div>Enfriamiento en Agua (Temple)</div>
      </div>
      
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" label={{ value: 'Tiempo', position: 'insideBottomRight', offset: 0 }} />
            <YAxis label={{ value: 'Temp (°C)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line type="monotone" dataKey="Horno" stroke="#ef4444" strokeWidth={2} dot={false} animationDuration={2000} />
            <Line type="monotone" dataKey="Aire" stroke="#eab308" strokeWidth={2} dot={false} animationDuration={2000} />
            <Line type="monotone" dataKey="Agua" stroke="#3b82f6" strokeWidth={2} dot={false} animationDuration={2000} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// --- Section 3: Microestructuras (Visualización Estática) ---

const MicrostructureView = () => {
  return (
    <div className="h-full w-full grid grid-cols-2 gap-8 items-center">
      {/* Lento */}
      <Card title="Enfriamiento Lento (Horno)" className="h-full">
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <svg viewBox="0 0 200 200" className="w-48 h-48 bg-slate-100 rounded-full border-4 border-slate-300">
            {/* Granos grandes y toscos */}
            <path d="M10,100 Q50,50 100,10 T190,100" fill="none" stroke="#64748b" strokeWidth="2" />
            <path d="M10,100 Q50,150 100,190 T190,100" fill="none" stroke="#64748b" strokeWidth="2" />
            <path d="M100,10 L100,190" fill="none" stroke="#64748b" strokeWidth="2" />
            <path d="M50,50 L150,150" fill="none" stroke="#64748b" strokeWidth="2" />
             <text x="100" y="100" textAnchor="middle" fill="#475569" className="text-xs">Granos Grandes</text>
             <text x="100" y="120" textAnchor="middle" fill="#475569" className="text-xs">(Perlita Gruesa)</text>
          </svg>
          <div className="text-center text-sm text-slate-600">
            <p className="font-bold">Estructura Blanda y Dúctil</p>
            <p>Los átomos tienen tiempo de difundirse y organizarse.</p>
          </div>
        </div>
      </Card>

      {/* Rápido */}
      <Card title="Enfriamiento Rápido (Agua)" className="h-full">
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <svg viewBox="0 0 200 200" className="w-48 h-48 bg-slate-100 rounded-full border-4 border-blue-300">
            {/* Estructura acicular (agujas) - Martensita */}
            <defs>
              <pattern id="martensite" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="20" y2="20" stroke="#3b82f6" strokeWidth="1" />
                <line x1="20" y1="0" x2="0" y2="20" stroke="#3b82f6" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#martensite)" />
             <text x="100" y="90" textAnchor="middle" fill="#1e3a8a" className="text-xs font-bold bg-white/70">Estructura Acicular</text>
             <text x="100" y="110" textAnchor="middle" fill="#1e3a8a" className="text-xs bg-white/70">(Martensita)</text>
          </svg>
          <div className="text-center text-sm text-slate-600">
            <p className="font-bold">Estructura Dura y Frágil</p>
            <p>El carbono queda atrapado en la red cristalina distorsionada.</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

// --- Section 4: Interactivo - Velocidad vs Propiedades ---

const InteractiveProperties = () => {
  const [coolingRate, setCoolingRate] = useState(50); // 0 a 100

  // Simulación simple de propiedades basadas en velocidad
  // Dureza sube con velocidad, Ductilidad baja con velocidad
  const hardness = Math.round(20 + (coolingRate * 0.6)); // HRC aprox scale
  const ductility = Math.round(100 - (coolingRate * 0.8)); // % arbitrario

  const chartData = [
    { name: 'Dureza (HRC)', value: hardness, fill: '#ef4444' },
    { name: 'Ductilidad (%)', value: ductility, fill: '#3b82f6' },
  ];

  return (
    <div className="h-full grid grid-cols-[1fr_2fr] gap-8">
      <div className="flex flex-col justify-center space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Velocidad de Enfriamiento</label>
          <input
            type="range"
            min="0"
            max="100"
            value={coolingRate}
            onChange={(e) => setCoolingRate(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-2">
            <span>Lento (Horno)</span>
            <span>Rápido (Agua Salada)</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center p-3 bg-white rounded shadow-sm border-l-4 border-red-500">
            <span className="text-slate-600 font-medium">Dureza Est.</span>
            <span className="text-xl font-bold text-red-600">{hardness} HRC</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded shadow-sm border-l-4 border-blue-500">
            <span className="text-slate-600 font-medium">Ductilidad Est.</span>
            <span className="text-xl font-bold text-blue-600">{ductility} %</span>
          </div>
        </div>
        
        <div className="text-xs text-slate-500 italic mt-4">
          * Valores aproximados para fines educativos en aceros al carbono.
        </div>
      </div>

      <div className="h-full flex flex-col">
        <h4 className="text-center text-slate-600 font-medium mb-4">Impacto en Propiedades Mecánicas</h4>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} layout="vertical" margin={{ left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} />
            <XAxis type="number" domain={[0, 100]} />
            <YAxis dataKey="name" type="category" width={100} tick={{fontSize: 12}} />
            <Tooltip cursor={{fill: 'transparent'}} />
            <Bar dataKey="value" barSize={40} radius={[0, 4, 4, 0]}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// --- Section 5: Proceso Industrial (Visualización de Flujo) ---

const IndustrialProcess = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-slate-50 rounded-xl border border-slate-200 p-8 relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="relative z-10 flex items-center justify-between w-full max-w-4xl gap-4">
        
        {/* Paso 1: Horno */}
        <div className="flex flex-col items-center group">
          <div className="w-24 h-32 bg-orange-100 border-2 border-orange-400 rounded-t-full relative flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <Thermometer className="w-10 h-10 text-orange-600 animate-pulse" />
            <div className="absolute -bottom-2 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent blur-sm"></div>
          </div>
          <div className="mt-4 text-center">
            <h4 className="font-bold text-slate-800">1. Horno</h4>
            <span className="text-xs text-slate-500">Austenización (900°C)</span>
          </div>
        </div>

        {/* Flecha Animada 1 */}
        <div className="flex-1 h-2 bg-slate-200 rounded relative overflow-hidden">
           <div className="absolute top-0 left-0 h-full w-1/3 bg-orange-400 animate-[slideRight_2s_linear_infinite] opacity-50"></div>
        </div>

        {/* Paso 2: Transferencia */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-slate-100 border-2 border-slate-400 rounded-lg flex items-center justify-center shadow-md">
            <Activity className="w-10 h-10 text-slate-600" />
          </div>
           <div className="mt-4 text-center">
            <h4 className="font-bold text-slate-800">2. Control</h4>
            <span className="text-xs text-slate-500">Monitoreo de Tiempo</span>
          </div>
        </div>

        {/* Flecha Animada 2 */}
        <div className="flex-1 h-2 bg-slate-200 rounded relative overflow-hidden">
           <div className="absolute top-0 left-0 h-full w-1/3 bg-blue-400 animate-[slideRight_1.5s_linear_infinite] opacity-50"></div>
        </div>

        {/* Paso 3: Tanque de Temple */}
        <div className="flex flex-col items-center group">
          <div className="w-32 h-24 bg-blue-100 border-b-4 border-l-2 border-r-2 border-blue-500 rounded-b-xl relative flex items-end justify-center pb-2 shadow-lg group-hover:scale-105 transition-transform duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-blue-200 opacity-30 animate-wave"></div>
            <Factory className="w-10 h-10 text-blue-700 z-10" />
          </div>
          <div className="mt-4 text-center">
            <h4 className="font-bold text-slate-800">3. Tanque</h4>
            <span className="text-xs text-slate-500">Medio de Enfriamiento</span>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
};

// --- Main Layout & App Structure ---

const LessonLayout: React.FC<{
  tabs: TabData[];
  activeTabId: string;
  onTabChange: (id: string) => void;
}> = ({ tabs, activeTabId, onTabChange }) => {
  
  const activeContent = tabs.find(t => t.id === activeTabId) || tabs[0];

  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 font-sans grid grid-rows-[auto_auto_1fr] overflow-hidden">
      
      {/* Header Area (Grid Area 1) */}
      <header className="bg-slate-900 text-white px-6 py-4 shadow-md z-10 grid grid-cols-[auto_1fr] items-center gap-4">
        <div className="p-2 bg-indigo-500 rounded-lg">
          <Settings className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight">Tiempo y velocidad de enfriamiento</h1>
         
        </div>
      </header>

      {/* Tabs Navigation (Grid Area 2) */}
      <nav className="bg-white grid grid-cols-5 border-b border-slate-200 px-6 pt-2">
          {tabs.map((tab) => (
              <button
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-t-lg transition-colors duration-200 border-t border-l border-r ${
                  activeTabId === tab.id
                    ? 'bg-slate-50 border-slate-200 border-b-transparent text-indigo-600 relative top-[1px]'
                    : 'bg-white border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                }`}
              >
                {React.cloneElement(tab.icon as React.ReactElement, { size: 16 })}
                {tab.shortLabel}
              </button>
          ))}
       
      </nav>

      {/* Main Content Area (Grid Area 3) */}
      <main className="p-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto h-full grid grid-rows-[auto_auto_1fr] gap-6">
          
          {/* Content Title */}
          <div className="flex items-center gap-3">
             <div className="bg-indigo-100 p-2 rounded-full text-indigo-600">
               {activeContent.icon}
             </div>
             <h2 className="text-2xl font-bold text-slate-800">{activeContent.title}</h2>
          </div>

          {/* Description Panel */}
          <div className="bg-blue-50 border border-blue-100 text-blue-900 p-4 rounded-lg flex gap-3 items-start">
            <Info className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="leading-relaxed">{activeContent.description}</p>
          </div>

          {/* Diagram Render Area */}
          <Card className="min-h-[400px] shadow-md border-slate-200">
            {activeContent.component}
          </Card>
        </div>
      </main>
    </div>
  );
};

// --- App Component ---

const App = () => {
  const [activeTab, setActiveTab] = useState('curve');

  const tabs: TabData[] = [
    {
      id: 'curve',
      shortLabel: 'Curva T-t',
      title: 'Curva Temperatura-Tiempo',
      icon: <Activity />,
      description: (
      <DivCarousel>
     
          <p>En los tratamientos térmicos, la <strong>temperatura por sí sola no determina</strong> el resultado final. 
            <br />El <strong>tiempo de permanencia</strong> y la <strong>velocidad de enfriamiento</strong> influyen directamente en cómo se reorganiza la estructura interna del metal. 
            <br />Dos piezas del <strong>mismo material</strong>, calentadas a la <strong>misma temperatura</strong>, pueden adquirir <strong>propiedades</strong> completamente <strong>distintas</strong> dependiendo de cuánto <strong>tiempo</strong> permanezcan calientes y de qué tan <strong>rápido</strong> se enfríen.
          <br /> En esta lección se analiza <strong>cómo estas variables gobiernan la evolución microestructural</strong> y las propiedades mecánicas finales de los metales.</p>

            
          <p>El tiempo en un tratamiento térmico se divide en tres etapas fundamentales: el <strong>calentamiento</strong>, el <strong>mantenimiento</strong> a la temperatura objetivo y el <strong>enfriamiento</strong>.
          <br /> Durante el <strong>mantenimiento</strong>, los <strong>átomos</strong> del material tienen oportunidad de <strong>difundirse</strong> y <strong>reorganizarse</strong>, permitiendo que las <strong>transformaciones internas</strong> ocurran de forma homogénea.</p>
          <div>  <p><strong>Aspectos clave del tiempo de tratamiento:</strong></p>
          <ul>
            <li>Tiempo de calentamiento: asegura que toda la pieza alcance la temperatura deseada.</li>
            <li>Tiempo de mantenimiento: permite la difusión y transformación interna.</li>
            <li>Tiempo de enfriamiento: condiciona la estructura final.</li>
          </ul></div>
          <p>Un tiempo insuficiente puede dejar transformaciones incompletas, mientras que un tiempo excesivo puede provocar crecimiento de grano, reduciendo la resistencia mecánica.</p>
        
        
      </DivCarousel>
    ),
      component: <TempTimeCurve />
    },
    {
      id: 'comparison',
      shortLabel: 'Tipos de Enfriamiento',
      title: 'Comparación de Curvas de Enfriamiento',
      icon: <Thermometer />,
      description: (
      <DivCarousel>
      
          <p>La <strong>velocidad de enfriamiento</strong> describe qué tan rápido el <strong>material pierde calor después del calentamiento</strong>. 
          <br />Esta velocidad <strong>depende</strong> del <strong>medio utilizado</strong> y del <strong>tamaño de la pieza</strong>. 
          <br />A <strong>mayor velocidad</strong> de enfriamiento, <strong>menor tiempo tienen los átomos para reorganizarse</strong> en estructuras estables.
          <br />
          Por ello, <strong>un mismo metal puede desarrollar microestructuras distintas al enfriarse</strong> en el <strong>horno</strong>, al <strong>aire</strong> o en un <strong>líquido</strong>.</p>
          <div> <p><strong>Tipos comunes de enfriamiento:</strong></p>
          <ul>
            <li><strong>Lento</strong>: dentro del horno.</li>
            <li><strong>Moderado</strong>: al aire.</li>
            <li><strong>Rápido</strong>: en agua, aceite u otros líquidos.</li>
          </ul>
    </div>
         
      </DivCarousel>
    ),
      component: <CoolingComparison />
    },
    {
      id: 'micro',
      shortLabel: 'Microestructura',
      title: 'Impacto en la Microestructura',
      icon: <Microscope />,
      description: (
      <DivCarousel>
     
          <p>La <strong>velocidad de enfriamiento</strong> determina qué <strong>fases se forman</strong> y cómo se <strong>organizan los granos</strong> del metal. 
            <br />En enfriamientos <strong>lentos</strong>, los átomos pueden acomodarse en estructuras más <strong>ordenadas</strong> y <strong>estables</strong>. <br />En enfriamientos <strong>rápidos</strong>, la reorganización se “congela”, dando lugar a estructuras más <strong>duras</strong> pero <strong>menos estables</strong>.
            
           </p>
            <div>     <p>
               De esta manera, el <strong>enfriamiento</strong> actúa como un <strong>regulador directo de la microestructura</strong>.
               <br />
              <strong>Efectos microestructurales del enfriamiento:</strong></p>
          <ul>
            <li>Tipo de fases formadas.</li>
            <li>Tamaño y forma de grano.</li>
            <li>Nivel de orden interno del material.</li>
          </ul></div>
     
       
      </DivCarousel>
    ),
      component: <MicrostructureView />
    },
    {
      id: 'props',
      shortLabel: 'Propiedades',
      title: 'Relación Velocidad vs. Propiedades',
      icon: <Settings />,
      description: (
      <DivCarousel>
      
          <p>Las <strong>propiedades mecánicas</strong> finales del metal son una <strong>consecuencia directa de la microestructura </strong>generada. 
          <br />Enfriamientos <strong>rápidos</strong> suelen producir materiales más <strong>duros</strong> y <strong>resistentes</strong>, pero con menor ductilidad. <br /> En cambio, enfriamientos <strong>lentos</strong> favorecen la <strong>ductilidad</strong> y la <strong>tenacidad</strong>.
            <br />Las <strong>velocidades intermedias</strong> permiten <strong>equilibrar</strong><strong> estas propiedades</strong> según la aplicación requerida.</p>
         <div> <p><strong>Relación general entre enfriamiento y propiedades:</strong></p>
          <ul>
            <li>Enfriamiento rápido → mayor dureza y resistencia.</li>
            <li>Enfriamiento lento → mayor ductilidad y tenacidad.</li>
            <li>Enfriamiento intermedio → compromiso entre ambas.</li>
          </ul></div>
          
    
      </DivCarousel>
    ),
      component: <InteractiveProperties />
    },
    {
      id: 'process',
      shortLabel: 'Proceso Industrial',
      title: 'Flujo de Control Térmico',
      icon: <Factory />,
      description: (
      <DivCarousel>
      
          <p>En el ámbito industrial, <strong>controlar</strong> con precisión el tiempo y la velocidad de enfriamiento es esencial para obtener <strong>resultados repetibles</strong>. <br /> Esto se logra mediante <strong>hornos con control automático</strong>, selección adecuada de <strong>medios de enfriamiento</strong> y procedimientos estandarizados.</p>
          <div> <p>Una mala gestión de estas variables puede provocar <strong>defectos internos</strong>, <strong>deformaciones</strong> o <strong>fallas prematuras</strong> en servicio.</p>
         <p><strong>Herramientas de control industrial:</strong></p>
          <ul>
            <li>Hornos programables.</li>
            <li>Medios de enfriamiento específicos.</li>
            <li>Protocolos de operación estandarizados.</li>
          </ul></div>
          
       
      </DivCarousel>
    ),
      component: <IndustrialProcess />
    }
  ];

  return (
    <LessonLayout 
      tabs={tabs} 
      activeTabId={activeTab} 
      onTabChange={setActiveTab} 
    />
  );
};

export default App;