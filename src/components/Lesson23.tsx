import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  ComposedChart
} from 'recharts';

// --- DEFINICIONES DE TIPOS ---

interface QuarkData {
  id: number;
  title: string;
  type: 'Q-con' | 'Q-def' | 'Q-ctx';
  explanation: string;
  diagramTitle: string;
}

// --- DATOS DE LA LECCIÓN ---

const lessonData: QuarkData[] = [
  {
    id: 1,
    title: 'Introducción al Revenido',
    type: 'Q-con',
    explanation: 'El temple confiere al acero una alta dureza mediante la formación de estructuras como la martensita, pero también introduce fragilidad y tensiones internas. El revenido se entiende como el proceso complementario que permite equilibrar estas propiedades, transformando un material extremadamente duro pero quebradizo en uno útil para aplicaciones reales.',
    diagramTitle: 'Impacto Estructural: Antes y Después'
  },
  {
    id: 2,
    title: 'Definición de Revenido',
    type: 'Q-def',
    explanation: 'El revenido es un tratamiento térmico aplicado a aceros previamente templados que consiste en calentarlos a una temperatura inferior al punto crítico, mantenerlos durante un tiempo determinado y enfriarlos de manera controlada. Este proceso modifica la microestructura sin revertir completamente los efectos del temple.',
    diagramTitle: 'Curva Térmica del Tratamiento'
  },
  {
    id: 3,
    title: 'Alivio de Tensiones',
    type: 'Q-con',
    explanation: 'Durante el temple se generan tensiones internas debido a los cambios bruscos de temperatura y transformación estructural. El revenido permite redistribuir y reducir estas tensiones, disminuyendo el riesgo de deformaciones o fracturas espontáneas.',
    diagramTitle: 'Redistribución de Tensiones Internas'
  },
  {
    id: 4,
    title: 'Reducción de Fragilidad',
    type: 'Q-con',
    explanation: 'La martensita formada en el temple es muy dura pero también frágil. El revenido modifica parcialmente esta estructura, permitiendo que el material absorba energía antes de fracturarse, es decir, reduce su fragilidad.',
    diagramTitle: 'Comportamiento ante Impacto: Frágil vs Dúctil'
  },
  {
    id: 5,
    title: 'Mejora de la Tenacidad',
    type: 'Q-def',
    explanation: 'La tenacidad es la capacidad de un material para absorber energía antes de fracturarse. El revenido incrementa esta propiedad al permitir una microestructura más equilibrada, combinando resistencia y ductilidad.',
    diagramTitle: 'Curva Esfuerzo-Deformación Comparativa'
  },
  {
    id: 6,
    title: 'Ajuste de la Dureza',
    type: 'Q-con',
    explanation: 'El revenido permite ajustar la dureza del acero según la temperatura aplicada: a mayor temperatura de revenido, menor dureza pero mayor ductilidad. Esto posibilita adaptar el material a distintas aplicaciones industriales.',
    diagramTitle: 'Relación Temperatura de Revenido vs Dureza'
  },
  {
    id: 7,
    title: 'Momento de Aplicación',
    type: 'Q-ctx',
    explanation: 'El revenido se realiza inmediatamente después del temple para evitar fallas estructurales. Si el acero templado permanece sin revenido, las tensiones internas pueden provocar grietas o fracturas incluso sin carga externa.',
    diagramTitle: 'Línea de Tiempo Crítica del Proceso'
  },
  {
    id: 8,
    title: 'Función Integral',
    type: 'Q-con',
    explanation: 'El revenido es un proceso esencial que convierte la dureza extrema obtenida en el temple en una combinación equilibrada de propiedades mecánicas. Sin este tratamiento, el acero templado sería poco funcional en la mayoría de aplicaciones prácticas.',
    diagramTitle: 'Mapa Conceptual de Propiedades'
  }
];

// --- COMPONENTES UI BASE ---

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`grid grid-rows-[auto_1fr] rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden ${className}`}>
    {children}
  </div>
);

// --- COMPONENTES DE VISUALIZACIÓN ESPECÍFICOS ---

const VisualBeforeAfter: React.FC = () => (
  <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center h-full p-8 bg-slate-50">
    <div className="grid grid-rows-[1fr_auto] gap-4 place-items-center text-center">
      <div className="grid w-32 h-32 bg-slate-800 rounded-md relative overflow-hidden shadow-lg border-2 border-slate-700">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full stroke-red-500 fill-none" strokeWidth="2">
          <path d="M 20 0 L 30 30 L 10 50 L 40 80 L 35 100" />
          <path d="M 70 0 L 60 40 L 80 60 L 65 100" />
          <path d="M 0 40 L 40 50 L 20 70" />
        </svg>
      </div>
      <span className="font-semibold text-slate-700 text-sm bg-red-100 text-red-800 px-3 py-1 rounded">Acero Templado (Frágil)</span>
    </div>
    
    <div className="grid place-items-center">
      <div className="text-4xl text-blue-500 font-black">→</div>
      <span className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wider">Revenido</span>
    </div>

    <div className="grid grid-rows-[1fr_auto] gap-4 place-items-center text-center">
      <div className="grid w-32 h-32 bg-slate-600 rounded-md relative shadow-md border-2 border-slate-500">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full stroke-slate-400/30 fill-none" strokeWidth="2">
            <rect x="10" y="10" width="80" height="80" rx="5" />
            <circle cx="50" cy="50" r="20" />
        </svg>
      </div>
      <span className="font-semibold text-slate-700 text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded">Acero Revenido (Estable)</span>
    </div>
  </div>
);

const VisualThermalCurve: React.FC = () => {
  const data = [
    { fase: 'Inicio', temp: 20 },
    { fase: 'Calentamiento', temp: 850 },
    { fase: 'Temple', temp: 850 },
    { fase: 'Enf. Brusco', temp: 50 },
    { fase: 'Calent. Rev.', temp: 450 },
    { fase: 'Meseta Rev.', temp: 450 },
    { fase: 'Enf. Controlado', temp: 20 }
  ];

  return (
    <div className="grid w-full h-64 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="fase" tick={{fontSize: 10}} interval={0} angle={-15} textAnchor="end" height={50} />
          <YAxis label={{ value: 'Temperatura (°C)', angle: -90, position: 'insideLeft', style: {fontSize: 12} }} />
          <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}/>
          <Area type="monotone" dataKey="temp" stroke="#ef4444" fillOpacity={1} fill="url(#colorTemp)" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const VisualStressRelief: React.FC = () => (
  <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-center justify-items-center h-full p-6 bg-white">
    <div className="grid relative w-40 h-40 bg-slate-200 border-4 border-slate-800 rounded-lg overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-1 p-1">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={`stress-${i}`} className="bg-red-500 transform rotate-12 origin-center" style={{ scale: Math.random() * 1.5 + 0.5 }}></div>
        ))}
      </div>
      <div className="absolute bottom-2 left-0 right-0 text-center bg-white/80 font-bold text-xs p-1">Altas Tensiones</div>
    </div>
    
    <div className="grid text-3xl text-slate-400 font-bold">→</div>

    <div className="grid relative w-40 h-40 bg-slate-200 border-4 border-slate-600 rounded-lg overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-1 grid-rows-5 gap-2 p-2 place-items-stretch">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={`calm-${i}`} className="bg-blue-400 rounded-full h-2 w-full self-center opacity-70"></div>
        ))}
      </div>
      <div className="absolute bottom-2 left-0 right-0 text-center bg-white/80 font-bold text-xs p-1">Tensiones Aliviadas</div>
    </div>
  </div>
);

const VisualBrittleness: React.FC = () => (
  <div className="grid grid-cols-[1fr_1fr] gap-8 h-full p-8">
    <div className="grid grid-rows-[1fr_auto] gap-4 place-items-center border-2 border-dashed border-red-300 bg-red-50 p-6 rounded-xl">
      <div className="grid relative w-24 h-24">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-slate-800">
           <polygon points="10,10 40,50 20,90 10,60" />
           <polygon points="50,10 90,30 60,60" />
           <polygon points="70,70 90,90 40,90 50,75" />
        </svg>
      </div>
      <div className="grid text-center">
        <span className="font-bold text-red-800">Martensita sin revenir</span>
        <span className="text-xs text-red-600">Fractura frágil bajo impacto</span>
      </div>
    </div>

    <div className="grid grid-rows-[1fr_auto] gap-4 place-items-center border-2 border-dashed border-green-300 bg-green-50 p-6 rounded-xl">
      <div className="grid relative w-24 h-24">
         <svg viewBox="0 0 100 100" className="w-full h-full fill-slate-600">
           <path d="M 10 20 Q 50 50 90 20 L 90 80 Q 50 100 10 80 Z" />
        </svg>
      </div>
      <div className="grid text-center">
        <span className="font-bold text-green-800">Estructura Revenida</span>
        <span className="text-xs text-green-600">Deformación antes de rotura</span>
      </div>
    </div>
  </div>
);

const VisualStressStrain: React.FC = () => {
  const data = [
    { deformacion: 0, templado: 0, revenido: 0 },
    { deformacion: 2, templado: 800, revenido: 600 },
    { deformacion: 4, templado: 1200, revenido: 900 },
    { deformacion: 5, templado: 1300, revenido: null }, // Templado rompe aquí
    { deformacion: 8, templado: null, revenido: 1000 },
    { deformacion: 12, templado: null, revenido: 1050 },
    { deformacion: 16, templado: null, revenido: 950 }  // Revenido rompe más tarde
  ];

  return (
    <div className="grid w-full h-64 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="deformacion" label={{ value: 'Deformación (Ductilidad)', position: 'insideBottom', offset: -10 }} />
          <YAxis label={{ value: 'Esfuerzo (Resistencia)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
          <Line type="monotone" dataKey="templado" name="Acero Templado" stroke="#ef4444" strokeWidth={3} dot={{r: 4, fill: '#ef4444'}} connectNulls={false} />
          <Line type="monotone" dataKey="revenido" name="Acero Revenido" stroke="#10b981" strokeWidth={3} dot={{r: 4, fill: '#10b981'}} connectNulls={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

const VisualHardnessTemp: React.FC = () => {
  const data = [
    { temp: 150, dureza: 64, tenacidad: 10 },
    { temp: 250, dureza: 58, tenacidad: 25 },
    { temp: 350, dureza: 52, tenacidad: 45 },
    { temp: 450, dureza: 46, tenacidad: 70 },
    { temp: 550, dureza: 38, tenacidad: 95 },
    { temp: 650, dureza: 28, tenacidad: 120 },
  ];

  return (
    <div className="grid w-full h-64 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="temp" label={{ value: 'Temperatura de Revenido (°C)', position: 'insideBottom', offset: -10 }} />
          <YAxis yAxisId="left" label={{ value: 'Dureza (HRC)', angle: -90, position: 'insideLeft' }} />
          <YAxis yAxisId="right" orientation="right" label={{ value: 'Tenacidad (Impacto)', angle: 90, position: 'insideRight' }} />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line yAxisId="left" type="monotone" dataKey="dureza" name="Dureza" stroke="#ef4444" strokeWidth={3} activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="tenacidad" name="Tenacidad" stroke="#3b82f6" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const VisualTimeline: React.FC = () => (
  <div className="grid grid-rows-[auto_1fr_auto] h-full p-8 gap-6 place-items-center bg-slate-50">
    <h3 className="text-lg font-bold text-slate-700">Secuencia Operativa</h3>
    <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center w-full max-w-2xl gap-2">
      <div className="grid bg-red-600 text-white p-4 rounded-lg text-center shadow-md font-semibold">1. Temple</div>
      <div className="grid h-1 bg-slate-300 w-full relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">⚠️</div>
      </div>
      <div className="grid bg-yellow-400 text-yellow-900 p-4 rounded-lg text-center shadow-md font-semibold text-sm border-2 border-dashed border-yellow-600">Riesgo de<br/>Grietas</div>
      <div className="grid h-1 bg-slate-300 w-full relative">
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-black text-slate-500">→</div>
      </div>
      <div className="grid bg-blue-600 text-white p-4 rounded-lg text-center shadow-md font-semibold">2. Revenido<br/><span className="text-xs font-normal">Inmediato</span></div>
    </div>
    <p className="text-sm text-slate-500 italic text-center">El lapso entre temple y revenido debe ser mínimo para evitar fallas catastróficas inducidas por tensiones.</p>
  </div>
);

const VisualConceptMap: React.FC = () => (
  <div className="grid grid-cols-[1fr_auto_1.5fr] gap-4 items-center h-full p-6 bg-white">
    <div className="grid grid-rows-[auto_auto] gap-2 border-2 border-red-200 rounded-xl bg-red-50 p-4 text-center">
      <div className="font-bold text-red-900 text-lg">Temple</div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <span className="bg-red-200 text-red-800 p-1 rounded font-semibold">Alta Dureza</span>
        <span className="bg-red-200 text-red-800 p-1 rounded font-semibold">Fragilidad</span>
      </div>
    </div>
    
    <div className="grid text-3xl font-black text-slate-300">→</div>

    <div className="grid grid-rows-[auto_auto] gap-2 border-2 border-blue-200 rounded-xl bg-blue-50 p-4 text-center">
      <div className="font-bold text-blue-900 text-lg">Revenido</div>
      <div className="grid grid-cols-3 gap-2 text-xs mt-2">
        <span className="bg-blue-200 text-blue-800 p-1 rounded font-semibold">Dureza Ajustada</span>
        <span className="bg-green-200 text-green-800 p-1 rounded font-semibold">Alta Tenacidad</span>
        <span className="bg-purple-200 text-purple-800 p-1 rounded font-semibold">Estabilidad</span>
      </div>
      <div className="mt-2 text-sm text-slate-600 italic border-t border-blue-200 pt-2">
        Material Óptimo para Uso Industrial
      </div>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL RENDERIZADOR DEL DIAGRAMA ---

const DiagramRender: React.FC<{ quarkId: number }> = ({ quarkId }) => {
  switch (quarkId) {
    case 1: return <VisualBeforeAfter />;
    case 2: return <VisualThermalCurve />;
    case 3: return <VisualStressRelief />;
    case 4: return <VisualBrittleness />;
    case 5: return <VisualStressStrain />;
    case 6: return <VisualHardnessTemp />;
    case 7: return <VisualTimeline />;
    case 8: return <VisualConceptMap />;
    default: return <div className="grid place-items-center h-full bg-slate-100 text-slate-400">Sin visualización disponible</div>;
  }
};

// --- LAYOUT ESTRUCTURAL (CSS Grid Estricto) ---

const LessonLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const activeQuark = lessonData[activeTab];

  return (
    <div className="grid grid-rows-[auto_auto_1fr] min-h-screen bg-slate-100 font-sans text-slate-800">
      
      {/* 1. Header (Title) */}
      <header className="grid place-items-start px-8 py-6 bg-slate-900 text-white shadow-md">
        <div className="grid gap-1">
          <h1 className="text-3xl font-black tracking-tight text-white">Fundamentos del Revenido</h1>
        </div>
      </header>

      {/* 2. Nav (Tabs System via Grid) */}
      <nav className="grid grid-cols-4 border-b border-slate-300 bg-white px-6 py-0 shadow-sm  top-0 z-10 ">
       
          {lessonData.map((quark, index) => (
            <button
              key={quark.id}
              onClick={() => setActiveTab(index)}
              className={`grid place-items-center px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 border-b-2
                ${activeTab === index 
                  ? 'bg-blue-50 text-blue-700 border-blue-600 shadow-inner' 
                  : 'bg-transparent text-slate-500 hover:bg-slate-100 border-transparent hover:text-slate-800'
                }`}
            >
              {quark.title.split(':')[0]}
            </button>
          ))}
      </nav>

      {/* 3. Main Content Area */}
      <main className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 p-6 lg:p-8 overflow-y-auto items-start">
        
        {/* Panel Izquierdo: Explicación Teórica */}
        <Card className="h-full">
          <div className="grid gap-4 p-6 bg-white">
            <div className="grid grid-cols-[auto_1fr] gap-3 items-center border-b border-slate-100 pb-4">
              
              <h2 className="text-xl font-bold text-slate-800 leading-tight">{activeQuark.title}</h2>
            </div>
            
            <div className="grid pt-2">
              <p className="text-base text-slate-600 leading-relaxed">
                {activeQuark.explanation}
              </p>
            </div>
          </div>
        </Card>

        {/* Panel Derecho: Diagram Render Area */}
        <Card className="h-full min-h-[400px]">
          {/* Diagram Title & Description */}
          <div className="grid border-b border-slate-200 bg-slate-50 p-4">
             <h3 className="text-md font-bold text-slate-700 flex items-center gap-2">
               <span className="grid place-items-center w-6 h-6 rounded-full bg-blue-200 text-blue-700 text-xs">📊</span>
               {activeQuark.diagramTitle}
             </h3>
          </div>
          
          {/* Diagram Render Component */}
          <div className="grid place-items-center h-full bg-white relative p-2 overflow-hidden">
             <DiagramRender quarkId={activeQuark.id} />
          </div>
        </Card>

      </main>
    </div>
  );
};

export default LessonLayout;