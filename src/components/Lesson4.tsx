import React, { useState, useEffect } from 'react';
import { Layers, Thermometer, Activity, Grid as GridIcon, Zap, Minimize2, GitMerge } from 'lucide-react';
import DivCarousel from '../assets/DivCarousel';

// --- DEFINICIÓN DE TIPOS ---

interface SectionData {
  id: string;
  title: string;
  shortTitle: string;
  description:  React.ReactNode;
  icon: React.ReactNode;
}

// --- DATOS DEL CONTENIDO ---

const sections: SectionData[] = [
  {
    id: 'levels',
    title: 'Introducción',
    shortTitle: 'Macro/Micro/Atómico',
    description: (
      <DivCarousel>
        
          <p>Los <strong>tratamientos térmicos</strong> se apoyan en <strong>fenómenos físicos</strong> que ocurren a escala atómica y cristalina cuando un metal es sometido a cambios de temperatura. <br /> Para entender por qué un tratamiento térmico modifica las propiedades de un material, es indispensable analizar cómo <strong>responden sus átomos al aporte de energía térmica</strong>.</p>
          <p>Esta lección aborda los <strong>fundamentos físicos esenciales que explican</strong> el comportamiento de los metales durante las etapas de <strong>calentamiento</strong>, <strong>mantenimiento</strong> y <strong>enfriamiento</strong>.</p>
        
        
      </DivCarousel>
    ),
    icon: <Layers className="w-4 h-4" />
  },
  {
    id: 'vibration',
    title: 'Energía térmica y movimiento atómico',
    shortTitle: 'Vibración Atómica',
    description: (<DivCarousel>
        
          <p>Ahora veremos cómo la <strong>temperatura</strong> está directamente relacionada con la <strong>energía térmica</strong> de un material.</p>
           <div><p>A <strong>mayor temperatura</strong>, <strong>mayor es la energía</strong> disponible en los átomos del metal.</p><ul>
            <li>Los átomos <strong>vibran</strong> con mayor <strong>intensidad</strong>.</li>
            <li>Se <strong>incrementa</strong> su <strong>movilidad</strong> dentro de la red cristalina.</li>
            <li>Se <strong>facilita</strong> la <strong>reorganización</strong> <strong>estructural</strong> interna.</li>
          </ul></div> 
          
          <p>Este aumento de energía es el <strong>punto de partida</strong> para que ocurran los <strong>cambios microestructurales</strong> asociados a los tratamientos térmicos.</p>
   
        
      </DivCarousel>),
    icon: <Activity className="w-4 h-4" />
  },
  {
    id: 'diffusion',
    title: 'Difusión atómica en estado sólido',
    shortTitle: 'Difusión',
    description: (
      <DivCarousel>
        
          <p>En esta sección veremos el papel de la <strong>difusión atómica</strong>, uno de los fenómenos físicos más importantes en los tratamientos térmicos. La difusión consiste en el <strong>desplazamiento de átomos dentro del sólido</strong>.</p>
          
          <div><p>La difusión consiste en el desplazamiento de átomos dentro del sólido.</p>
          <p>Durante un tratamiento térmico, la <strong>difusión</strong>:</p>
          <ul>
            <li>Permite que los <strong>átomos ocupen posiciones más estables</strong>.</li>
            <li>Favorece la <strong>formación o disolución de fases internas</strong>.</li>
            <li>Contribuye a la <strong>homogeneización de la microestructura</strong>.</li>
          </ul></div>
          <div> <p>La <strong>velocidad de difusión</strong> depende principalmente de:</p>
          <ul>
            <li>La <strong>temperatura</strong> (a mayor temperatura, mayor difusión).</li>
            <li>El tiempo de <strong>mantenimiento</strong>.</li>
          </ul></div>
              </DivCarousel>
    ),
    icon: <GitMerge className="w-4 h-4" />
  },
  {
    id: 'distortion',
    title: 'Red cristalina y estabilidad estructural',
    shortTitle: 'Distorsión',
    description: (
      <DivCarousel>
        
          <p>Ahora veremos cómo la estructura cristalina de los metales responde a los cambios térmicos. Los metales están formados por átomos ordenados en redes cristalinas.</p>
          <p>A determinadas temperaturas:</p>
          <ul>
            <li>La red cristalina puede distorsionarse.</li>
            <li>Pueden producirse cambios en la estructura interna.</li>
            <li>El material tiende a configuraciones más estables energéticamente.</li>
          </ul>
          <p>Los tratamientos térmicos aprovechan estas condiciones para inducir estructuras cristalinas más adecuadas a los requerimientos mecánicos y funcionales.</p>
        
        
      </DivCarousel>
    ),
    icon: <GridIcon className="w-4 h-4" />
  },
  {
    id: 'phase-change',
    title: 'Transformaciones de fase',
    shortTitle: 'Cambio de Fase',
    description: (
      <DivCarousel>
        
          <p>Una <strong>fase</strong> es una <strong>región del material con propiedades físicas y químicas uniformes</strong>.</p>
          <div><p>Durante un tratamiento térmico:</p>
          <ul>
            <li>El metal puede <strong>transformarse de una fase a otra</strong>.</li>
            <li>Estas <strong>transformaciones dependen de la temperatura y del tiempo</strong>.</li>
            <li>Las <strong>nuevas fases presentan propiedades distintas</strong>.</li>
          </ul></div>
          <div><p>Las transformaciones de fase explican muchos de los cambios observados en:</p>
          <ul>
            <li><strong>Dureza</strong></li>
            <li><strong>Resistencia</strong></li>
            <li><strong>Ductilidad</strong></li>
          </ul></div>
          
        
        
      </DivCarousel>
    ),
    icon: <Zap className="w-4 h-4" />
  },
  {
    id: 'equilibrium',
    title: 'Equilibrio vs. No Equilibrio',
    shortTitle: 'Enfriamiento',
    description: (
      <DivCarousel>
        <div><p><strong>No todos los tratamientos térmicos</strong> buscan llevar al material a un estado de equilibrio interno. Dependiendo del objetivo:</p>
          <ul>
            <li>Algunos tratamientos <strong>permiten alcanzar un estado estable.</strong></li>
            <li>Otros generan <strong>estructuras fuera del equilibrio</strong> (metastables).</li>
          </ul></div>
          
          <p>El control del <strong>calentamiento</strong>, el tiempo de <strong>mantenimiento</strong> y la velocidad de <strong>enfriamiento</strong> determina si el metal evoluciona hacia el equilibrio o conserva <strong>estructuras especiales</strong> con <strong>propiedades específicas</strong>.</p>
  
      </DivCarousel>
    ),
    icon: <Minimize2 className="w-4 h-4" />
  },
  {
    id: 'summary',
    title: 'Integración Conceptual',
    shortTitle: 'Resumen',
    description: (
      <DivCarousel>
          <p>Los fundamentos físicos de los tratamientos térmicos se basan en la interacción entre <strong>energía térmica</strong>, <strong>movimiento atómico</strong>, <strong>difusión</strong> y <strong>transformaciones de fase</strong>. 
          <br />
          Estos fenómenos explican cómo y por qué los metales modifican su microestructura al ser sometidos a ciclos térmicos controlados.</p>
         
     
      </DivCarousel>
    ),
    icon: <Thermometer className="w-4 h-4" />
  }
];

// --- COMPONENTES UI BASE ---

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

// --- COMPONENTES DE DIAGRAMAS (Visualizaciones) ---

// 1. Niveles (Estático)
const LevelsDiagram = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full items-center p-6 bg-slate-50">
    <div className="text-center">
      <div className="h-32 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-red-600/50 to-transparent"></div>
        <span className="text-white font-bold text-xl relative z-10">Metal (Barra)</span>
      </div>
      <p className="mt-2 font-semibold text-slate-700">Macroscópico</p>
      <p className="text-xs text-slate-500">Visible a simple vista</p>
    </div>
    <div className="text-center relative">
       {/* Arrow connector for visual flow */}
       <div className="hidden md:block absolute top-1/2 -left-3 w-6 h-0.5 bg-slate-300"></div>
      <div className="h-32 bg-slate-200 rounded-lg border-2 border-slate-300 flex items-center justify-center overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <path d="M0,0 L40,20 L60,0 L100,30 L100,80 L70,100 L20,90 L0,50 Z" fill="none" stroke="#64748b" strokeWidth="1" />
          <path d="M40,20 L50,60 L20,90" fill="none" stroke="#64748b" strokeWidth="1" />
          <path d="M50,60 L70,100" fill="none" stroke="#64748b" strokeWidth="1" />
          <path d="M50,60 L100,30" fill="none" stroke="#64748b" strokeWidth="1" />
        </svg>
      </div>
      <p className="mt-2 font-semibold text-slate-700">Microscópico</p>
      <p className="text-xs text-slate-500">Granos y Fronteras</p>
    </div>
    <div className="text-center relative">
      <div className="hidden md:block absolute top-1/2 -left-3 w-6 h-0.5 bg-slate-300"></div>
      <div className="h-32 bg-slate-800 rounded-lg flex items-center justify-center">
        <div className="grid grid-cols-4 gap-1">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-blue-400"></div>
          ))}
        </div>
      </div>
      <p className="mt-2 font-semibold text-slate-700">Atómico</p>
      <p className="text-xs text-slate-500">Red Cristalina</p>
    </div>
  </div>
);

// 2. Vibración (Dinámico)
const VibrationDiagram = () => {
  const [temp, setTemp] = useState<'low' | 'high'>('low');

  return (
    <div className="flex flex-col h-full bg-slate-900 p-6 items-center justify-center text-white">
      <div className="flex gap-4 mb-6">
        <button 
          onClick={() => setTemp('low')}
          className={`px-4 py-2 rounded ${temp === 'low' ? 'bg-blue-600' : 'bg-slate-700'}`}
        >
          Baja Temperatura
        </button>
        <button 
          onClick={() => setTemp('high')}
          className={`px-4 py-2 rounded ${temp === 'high' ? 'bg-red-600' : 'bg-slate-700'}`}
        >
          Alta Temperatura
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4 p-8 bg-slate-800 rounded-xl border border-slate-700">
        {[...Array(25)].map((_, i) => (
          <div 
            key={i}
            className={`w-4 h-4 rounded-full ${temp === 'low' ? 'bg-blue-400' : 'bg-red-500'}`}
            style={{
              animation: `vibrate ${temp === 'low' ? '2s' : '0.2s'} infinite linear`
            }}
          />
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-400">
        {temp === 'low' 
          ? 'Baja energía cinética. Los átomos oscilan levemente.' 
          : 'Alta energía cinética. Oscilaciones violentas facilitan la difusión.'}
      </p>
      <style>{`
        @keyframes vibrate {
          0% { transform: translate(0, 0); }
          25% { transform: translate(1px, 1px); }
          50% { transform: translate(0, -1px); }
          75% { transform: translate(-1px, 0); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </div>
  );
};

// 3. Difusión (Dinámico)
const DiffusionDiagram = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Simulación simplificada de movimiento de un átomo (rojo)
  const getPosition = (s: number) => {
    switch(s) {
      case 0: return 'translate-x-0 translate-y-0';
      case 1: return 'translate-x-12 translate-y-0';
      case 2: return 'translate-x-12 translate-y-12';
      case 3: return 'translate-x-24 translate-y-12';
      default: return '';
    }
  };

  return (
    <div className="h-full bg-slate-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="relative p-4">
        {/* Lattice Grid */}
        <div className="grid grid-cols-6 gap-6">
          {[...Array(24)].map((_, i) => (
             <div key={i} className="w-6 h-6 rounded-full bg-slate-300 border border-slate-400"></div>
          ))}
        </div>
        
        {/* Moving Atom */}
        <div 
          className={`absolute top-4 left-4 w-6 h-6 rounded-full bg-orange-600 border-2 border-orange-800 shadow-lg transition-transform duration-1000 ease-in-out z-10 ${getPosition(step)}`}
        >
          <div className="w-full h-full animate-pulse opacity-50 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <h4 className="font-bold text-slate-700">Mecanismo de Difusión</h4>
        <p className="text-sm text-slate-500">El átomo naranja aprovecha las vacantes y la energía térmica para moverse a través de la red.</p>
      </div>
    </div>
  );
};

// 4. Distorsión (Estático)
const DistortionDiagram = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center p-8 bg-white">
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-4 gap-2 mb-4 p-4 border border-slate-200 rounded-lg">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-400 bg-slate-100"></div>
        ))}
      </div>
      <p className="font-semibold text-green-600">Red Perfecta</p>
      <p className="text-xs text-slate-500 text-center">Baja energía, estructura relajada.</p>
    </div>

    <div className="flex flex-col items-center">
      <div className="relative mb-4 p-4 border border-slate-200 rounded-lg bg-orange-50/50">
        {/* Simulated Distorted Grid using absolute positioning logic relative to a container would be complex, simplified grid with one large atom */}
        <div className="grid grid-cols-4 gap-2 relative">
           {[...Array(16)].map((_, i) => {
             if (i === 5) return <div key={i} className="w-10 h-10 -ml-1 -mt-1 rounded-full bg-red-500 border-2 border-red-700 z-10"></div>;
             return <div key={i} className={`w-8 h-8 rounded-full border-2 border-slate-400 bg-slate-100 ${i === 6 || i === 9 || i === 1 ? 'scale-90 bg-slate-200' : ''}`}></div>;
           })}
        </div>
      </div>
      <p className="font-semibold text-red-600">Red Distorsionada</p>
      <p className="text-xs text-slate-500 text-center">Átomo intersticial o sustitucional grande genera tensión (Stress Field).</p>
    </div>
  </div>
);

// 5. Cambio de Fase (Dinámico)
const PhaseChangeDiagram = () => {
  const [temperature, setTemperature] = useState(30);

  // Simple logic: Low temp = Tight Grid (BCC approx), High Temp = Loose Grid (FCC approx/Liquid-ish)
  // For visual simplicity: Blue Square -> Red Circle transition
  
  const isTransformed = temperature > 70;
  
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 bg-slate-50">
      <div className="w-full max-w-xs mb-8">
        <label className="text-sm font-bold text-slate-700 mb-2 block">Temperatura: {temperature * 10}°C</label>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={temperature} 
          onChange={(e) => setTemperature(parseInt(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
        />
      </div>

      <div className="relative w-64 h-64 border-4 border-slate-300 rounded-xl flex items-center justify-center bg-white transition-colors duration-500"
           style={{ backgroundColor: isTransformed ? '#fff7ed' : '#f8fafc' }}>
        
        <div 
          className={`transition-all duration-700 ease-in-out grid gap-1`}
          style={{
             gridTemplateColumns: isTransformed ? 'repeat(5, 1fr)' : 'repeat(4, 1fr)',
             width: isTransformed ? '160px' : '140px',
             transform: isTransformed ? 'rotate(45deg)' : 'rotate(0deg)'
          }}
        >
           {[...Array(isTransformed ? 25 : 16)].map((_, i) => (
             <div 
              key={i} 
              className={`w-6 h-6 rounded-full transition-colors duration-500 ${isTransformed ? 'bg-orange-500' : 'bg-slate-600'}`}
             ></div>
           ))}
        </div>
        
        <div className="absolute bottom-2 right-2 text-xs font-mono bg-slate-100 px-2 py-1 rounded">
          Fase: {isTransformed ? 'Austenita (FCC)' : 'Ferrita (BCC)'}
        </div>
      </div>
    </div>
  );
};

// 6. Equilibrio (Estático)
const EquilibriumDiagram = () => (
  <div className="grid grid-rows-2 h-full">
    <div className="p-4 bg-blue-50 border-b border-blue-100 flex items-center justify-between">
      <div>
        <h4 className="font-bold text-blue-800">Enfriamiento Lento (Equilibrio)</h4>
        <p className="text-xs text-blue-600 max-w-xs">Los átomos tienen tiempo de organizarse en estructuras laminares o globulares perfectas.</p>
      </div>
      <div className="bg-white p-2 border border-blue-200 rounded grid grid-cols-4 gap-1 w-32">
        {[...Array(12)].map((_,i) => <div key={i} className="h-2 w-full bg-blue-400 rounded-full"></div>)}
      </div>
    </div>
    
    <div className="p-4 bg-red-50 flex items-center justify-between">
      <div>
        <h4 className="font-bold text-red-800">Enfriamiento Rápido (Temple)</h4>
        <p className="text-xs text-red-600 max-w-xs">Átomos atrapados. Estructura acicular (agujas), alta tensión interna y dureza.</p>
      </div>
      <div className="bg-white p-2 border border-red-200 rounded w-32 h-20 relative overflow-hidden">
        {/* Simulated Martensite Needles */}
        <div className="absolute top-2 left-0 w-full h-1 bg-red-400 rotate-12"></div>
        <div className="absolute top-6 left-[-10px] w-full h-1 bg-red-400 -rotate-12"></div>
        <div className="absolute top-10 left-2 w-full h-1 bg-red-400 rotate-45"></div>
        <div className="absolute top-4 right-[-10px] w-full h-1 bg-red-400 -rotate-45"></div>
      </div>
    </div>
  </div>
);

// 7. Resumen (Diagrama de Flujo Estático)
const SummaryDiagram = () => (
  <div className="h-full flex items-center justify-center bg-slate-50 p-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl text-center items-center">
      
      <div className="p-4 bg-white border-l-4 border-orange-500 shadow-sm rounded">
        <Thermometer className="w-8 h-8 text-orange-500 mx-auto mb-2" />
        <h3 className="font-bold text-slate-800">Energía Térmica</h3>
        <p className="text-xs text-slate-500">Temperatura + Tiempo</p>
      </div>

      <div className="hidden md:flex justify-center">
        <div className="h-1 w-full bg-slate-300 relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-300 rotate-45"></div>
        </div>
      </div>

      <div className="p-4 bg-white border-l-4 border-blue-500 shadow-sm rounded">
        <Activity className="w-8 h-8 text-blue-500 mx-auto mb-2" />
        <h3 className="font-bold text-slate-800">Procesos Físicos</h3>
        <p className="text-xs text-slate-500">Vibración, Difusión, Cambio de Fase</p>
      </div>

      <div className="hidden md:flex justify-center col-span-3 md:col-span-1 md:col-start-2 md:row-start-2">
         <div className="h-8 w-1 bg-slate-300 mx-auto"></div>
      </div>

      <div className="col-span-1 md:col-span-3 p-4 bg-slate-800 text-white rounded-lg shadow-lg md:row-start-3">
        <h3 className="font-bold text-lg">Nueva Microestructura</h3>
        <p className="text-sm text-slate-300">Propiedades Mecánicas Modificadas (Dureza, Tenacidad, Ductilidad)</p>
      </div>

    </div>
  </div>
);

// --- COMPONENTE RENDERIZADOR PRINCIPAL ---

const DiagramRender: React.FC<{ sectionId: string }> = ({ sectionId }) => {
  switch (sectionId) {
    case 'levels': return <LevelsDiagram />;
    case 'vibration': return <VibrationDiagram />;
    case 'diffusion': return <DiffusionDiagram />;
    case 'distortion': return <DistortionDiagram />;
    case 'phase-change': return <PhaseChangeDiagram />;
    case 'equilibrium': return <EquilibriumDiagram />;
    case 'summary': return <SummaryDiagram />;
    default: return <div className="p-4">Seleccione una sección</div>;
  }
};

// --- LAYOUT ESTRUCTURAL (CSS Grid Only) ---

const LessonLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeData = sections[activeTab];

  return (
    <div className="bg-slate-100 font-sans text-slate-900" style={{
      display: 'grid',
      gridTemplateRows: 'auto auto 1fr', // Header, Tabs, Content
      
    }}>
      
      {/* 1. HEADER */}
      <header className="bg-slate-900 text-white p-4 border-b border-slate-700" style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <div className="p-2 bg-orange-600 rounded-lg">
          <Thermometer className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight">Fundamentos físicos de los tratamientos térmicos</h1>
          
        </div>
     
      </header>

      {/* 2. TABS NAVIGATION */}
      <nav className="bg-white border-b border-slate-200 overflow-x-auto" style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${sections.length}, minmax(120px, 1fr))`,
      }}>
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => setActiveTab(index)}
            className={`
              p-3 text-sm font-medium transition-colors duration-200 flex flex-col items-center justify-center gap-2 border-r border-slate-100 last:border-r-0 hover:bg-slate-50
              ${activeTab === index 
                ? 'bg-slate-50 text-orange-600 border-b-2 border-b-orange-600' 
                : 'text-slate-500 hover:text-slate-700 border-b-2 border-b-transparent'}
            `}
          >
            <span className={activeTab === index ? 'opacity-100' : 'opacity-70'}>
              {section.icon}
            </span>
            <span className="whitespace-nowrap">{section.shortTitle}</span>
          </button>
        ))}
      </nav>

      {/* 3. MAIN CONTENT AREA */}
      <main className="p-4 sm:p-6 grid gap-2" >
        
        {/* Diagram Title & Meta (Full Width) */}
        <div className="col-span-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-1">{activeData.title}</h2>
          <div className="h-1 w-24 bg-orange-500 rounded"></div>
        </div>

        {/* Left Column: Description */}
        <div className="col-span-12 lg:col-span-4 ">
           <Card className=" p-6 bg-white flex flex-col justify-center">
              
              <p className="text-slate-600 leading-relaxed text-lg">
                {activeData.description}
              </p>
        
           </Card>
        </div>

        {/* Right Column: Diagram Render */}
        <div className="col-span-12 lg:col-span-8 min-h-[400px]">
          <Card className="h-full border-2 border-slate-100 bg-slate-50 overflow-hidden relative">
                    <DiagramRender sectionId={activeData.id} />
          </Card>
        </div>

      </main>
    </div>
  );
};

export default LessonLayout;