import React from 'react';
import { 
  Zap, 
  Thermometer, 
  Gauge, 
  Car, 
  Plane, 
  Wrench, 
  Flame, 
  Cpu,
  ArrowRight,
  ShieldCheck,
  Target
} from 'lucide-react';

// --- Componentes Visuales Especializados (Diagramas) ---

const TimelineVisual = () => (
  <div className="w-full flex flex-col md:flex-row items-center justify-between relative py-10">
    <div className="absolute hidden md:block h-1 bg-slate-300 w-full top-1/2 -translate-y-1/2 z-0"></div>
    {[
      { year: "Fase 1", title: "Empírico en Aceros", desc: "Nitruración clásica" },
      { year: "Fase 2", title: "Control Tecnológico", desc: "Introducción del plasma" },
      { year: "Fase 3", title: "Nuevos Materiales", desc: "Aluminio y aleaciones" }
    ].map((item, i) => (
      <div key={i} className="z-10 flex flex-col items-center bg-white p-4 rounded-xl shadow-lg border border-slate-100 w-full md:w-1/3 mx-2 mb-4 md:mb-0">
        <div className="bg-blue-600 text-white font-bold py-1 px-3 rounded-full mb-3 text-sm">
          {item.year}
        </div>
        <h4 className="font-bold text-slate-800 text-center">{item.title}</h4>
        <p className="text-xs text-slate-500 text-center mt-1">{item.desc}</p>
      </div>
    ))}
  </div>
);

const GearVisual = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-200">
    <svg viewBox="0 0 100 100" className="w-48 h-48 animate-[spin_20s_linear_infinite]">
      <defs>
        <radialGradient id="gearGradient" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="#93c5fd" /> {/* Núcleo dúctil */}
          <stop offset="90%" stopColor="#1e3a8a" /> {/* Capa endurecida */}
        </radialGradient>
      </defs>
      <g stroke="#0f172a" strokeWidth="2">
        {/* Dientes del engranaje */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <rect 
            key={angle} x="42" y="5" width="16" height="90" 
            transform={`rotate(${angle} 50 50)`} 
            fill="#1e3a8a" rx="2" 
          />
        ))}
        {/* Cuerpo del engranaje con gradiente */}
        <circle cx="50" cy="50" r="35" fill="url(#gearGradient)" />
        {/* Eje central */}
        <circle cx="50" cy="50" r="10" fill="#f8fafc" />
      </g>
    </svg>
    <div className="mt-6 flex gap-4 text-sm">
      <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-300 rounded-full"></div> Núcleo Dúctil</div>
      <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-900 rounded-full"></div> Capa Endurecida</div>
    </div>
  </div>
);

const ComparisonVisual = () => (
  <div className="flex flex-col md:flex-row gap-6 w-full">
    <div className="flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center">
      <h4 className="text-red-600 font-bold mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
        <Flame size={16}/> Técnicas Iniciales
      </h4>
      <svg viewBox="0 0 200 100" className="w-full h-32">
        <path d="M 0 50 Q 30 20, 60 60 T 130 40 T 200 55 L 200 100 L 0 100 Z" fill="#e2e8f0" />
        <path d="M 0 50 Q 30 20, 60 60 T 130 40 T 200 55" fill="none" stroke="#ef4444" strokeWidth="6" />
        <text x="100" y="85" textAnchor="middle" fontSize="12" fill="#64748b">Capa irregular y variable</text>
      </svg>
    </div>
    <div className="flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center">
      <h4 className="text-green-600 font-bold mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
        <Target size={16}/> Tratamiento Ideal
      </h4>
      <svg viewBox="0 0 200 100" className="w-full h-32">
        <path d="M 0 40 L 200 40 L 200 100 L 0 100 Z" fill="#e2e8f0" />
        <path d="M 0 40 L 200 40" fill="none" stroke="#22c55e" strokeWidth="6" />
        <text x="100" y="85" textAnchor="middle" fontSize="12" fill="#64748b">Profundidad uniforme</text>
      </svg>
    </div>
  </div>
);

const ReactorVisual = () => (
  <div className="relative border-4 border-slate-700 bg-slate-800 rounded-2xl h-64 w-full flex items-center justify-center overflow-hidden shadow-2xl">
    {/* Plasma brillando */}
    <div className="absolute inset-4 bg-purple-500/20 animate-pulse rounded-xl flex items-center justify-center border border-purple-500/30">
      <div className="flex flex-col items-center">
        <Zap className="text-purple-400 w-16 h-16 animate-bounce" />
        <span className="text-purple-300 font-mono mt-2 tracking-widest">PLASMA ACTIVO</span>
      </div>
    </div>
    {/* Panel de Control UI */}
    <div className="absolute top-4 left-4 flex flex-col gap-3">
      <div className="bg-slate-900/80 text-green-400 font-mono px-3 py-2 text-xs rounded border border-slate-600 shadow flex items-center backdrop-blur-sm">
        <Thermometer size={16} className="mr-2"/> Temp: 520°C
      </div>
      <div className="bg-slate-900/80 text-blue-400 font-mono px-3 py-2 text-xs rounded border border-slate-600 shadow flex items-center backdrop-blur-sm">
        <Gauge size={16} className="mr-2"/> Presión: 2.5 mbar
      </div>
      <div className="bg-slate-900/80 text-yellow-400 font-mono px-3 py-2 text-xs rounded border border-slate-600 shadow flex items-center backdrop-blur-sm">
        <Cpu size={16} className="mr-2"/> Gas: N2 + H2
      </div>
    </div>
  </div>
);

const MaterialsVisual = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
    {[
      { title: "Aceros", base: "Fe + C", layer: "Nitruración (N)", color: "border-blue-500", bg: "bg-blue-50" },
      { title: "Metales No Férreos", base: "Aluminio (Al)", layer: "Capa de Óxido/Nitro", color: "border-teal-500", bg: "bg-teal-50" },
      { title: "Aleaciones Avanzadas", base: "Titanio / Níquel", layer: "Boro / Cromo", color: "border-purple-500", bg: "bg-purple-50" }
    ].map((mat, i) => (
      <div key={i} className={`flex flex-col bg-white rounded-xl overflow-hidden border-2 ${mat.color} shadow-sm`}>
        <div className={`${mat.bg} p-4 flex flex-col items-center justify-center min-h-[100px] border-b ${mat.color}`}>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Capa Modificada</span>
          <span className="font-bold text-slate-800 text-center">{mat.layer}</span>
        </div>
        <div className="p-6 flex flex-col items-center justify-center bg-slate-100 min-h-[120px]">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Material Base</span>
          <span className="font-bold text-slate-600 text-lg">{mat.base}</span>
          <span className="mt-2 text-sm text-slate-500 italic">{mat.title}</span>
        </div>
      </div>
    ))}
  </div>
);

const CollageVisual = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
    <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-xl text-white flex flex-col items-center justify-center shadow-lg transform transition hover:scale-105">
      <Car size={40} className="mb-3 opacity-90" />
      <h4 className="font-bold text-center">Automoción</h4>
      <p className="text-xs text-blue-100 text-center mt-2">Motores y engranajes</p>
    </div>
    <div className="bg-gradient-to-br from-slate-600 to-slate-800 p-6 rounded-xl text-white flex flex-col items-center justify-center shadow-lg transform transition hover:scale-105">
      <Plane size={40} className="mb-3 opacity-90" />
      <h4 className="font-bold text-center">Aeronáutica</h4>
      <p className="text-xs text-slate-200 text-center mt-2">Turbinas alta resistencia</p>
    </div>
    <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-xl text-white flex flex-col items-center justify-center shadow-lg transform transition hover:scale-105 col-span-2 md:col-span-1">
      <Wrench size={40} className="mb-3 opacity-90" />
      <h4 className="font-bold text-center">Manufactura</h4>
      <p className="text-xs text-orange-100 text-center mt-2">Herramientas de precisión</p>
    </div>
  </div>
);

const BeforeAfterVisual = () => (
  <div className="flex flex-col md:flex-row w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
    <div className="flex-1 bg-amber-50 p-8 flex flex-col items-center justify-center text-amber-900 border-b md:border-b-0 md:border-r border-amber-200">
      <div className="bg-amber-100 p-4 rounded-full mb-4">
        <Flame size={48} className="text-amber-600" />
      </div>
      <h3 className="font-black text-2xl mb-2">Empírico</h3>
      <p className="text-center text-sm opacity-80">Procesos basados en prueba y error, dependientes de la experiencia del operador y hornos tradicionales.</p>
    </div>
    <div className="flex-1 bg-indigo-50 p-8 flex flex-col items-center justify-center text-indigo-900">
      <div className="bg-indigo-100 p-4 rounded-full mb-4 relative">
        <Cpu size={48} className="text-indigo-600" />
        <ShieldCheck size={24} className="text-green-500 absolute -bottom-2 -right-2 bg-white rounded-full" />
      </div>
      <h3 className="font-black text-2xl mb-2">Controlado</h3>
      <p className="text-center text-sm opacity-80">Automatización, monitoreo en tiempo real, atmósferas de plasma y exactitud nanométrica.</p>
    </div>
  </div>
);

// --- Estructura Principal de la Aplicación ---

export default function App() {
  const content = [
    {
      title: "Introducción a la evolución de los tratamientos termoquímicos",
      text: "La evolución de los tratamientos termoquímicos ha estado impulsada por las demandas de la industria, especialmente en sectores donde los materiales están sometidos a condiciones extremas. A lo largo del tiempo, estos procesos han pasado de ser técnicas empíricas aplicadas a aceros a convertirse en tecnologías altamente controladas y adaptables a diversos materiales.",
      Visual: TimelineVisual
    },
    {
      title: "Primeras aplicaciones en aceros",
      text: "En sus inicios, se desarrollaron principalmente para aceros en componentes mecánicos por su disponibilidad, costo y capacidad de modificar propiedades. Destacan la nitruración, carburización y nitrocarburización. Estos permitían endurecer la superficie sin comprometer la tenacidad del núcleo, mejorando la resistencia al desgaste.",
      Visual: GearVisual
    },
    {
      title: "Limitaciones de las técnicas iniciales",
      text: "Presentaban limitaciones como un control reducido sobre la composición química del entorno y la profundidad del tratamiento, generando variaciones y menor reproducibilidad. Eran procesos largos que dependían en gran medida de la experiencia operativa más que de parámetros estrictamente controlados.",
      Visual: ComparisonVisual
    },
    {
      title: "Desarrollo de nuevas técnicas",
      text: "La tecnología introdujo mejoras para un control preciso de temperatura, tiempo y medio. Se desarrollaron la nitruración por plasma, procesos con atmósferas controladas y tratamientos híbridos. Estas innovaciones mejoraron radicalmente la uniformidad de las capas tratadas y la repetibilidad.",
      Visual: ReactorVisual
    },
    {
      title: "Expansión hacia nuevos materiales",
      text: "Los tratamientos se extendieron más allá de los aceros hacia metales no ferrosos (aluminio), aleaciones avanzadas y materiales refractarios. Se incorporaron nuevos elementos difusores como boro, cromo y aluminio, ampliando enormemente las posibilidades de modificación superficial.",
      Visual: MaterialsVisual
    },
    {
      title: "Impacto en la ingeniería moderna",
      text: "La evolución ha permitido diseñar superficies con propiedades altamente específicas para condiciones de operación extremas. El impacto es crítico en sectores como la automoción, la aeronáutica y la manufactura avanzada, garantizando la confiabilidad y durabilidad de las piezas.",
      Visual: CollageVisual
    },
    {
      title: "De lo empírico a lo controlado",
      text: "El desarrollo histórico refleja una transición desde métodos empíricos hacia procesos altamente controlados y científicos. Esta evolución ha permitido mejorar materiales tradicionales y adaptarse a las nuevas demandas tecnológicas de la ingeniería moderna.",
      Visual: BeforeAfterVisual
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* Header */}
      <header className="bg-slate-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
             <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                   <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
         
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Tratamientos Termoquímicos
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-16 px-6 space-y-32">
        {content.map((section, index) => {
          const VisualComponent = section.Visual;
          const isEven = index % 2 === 0;

          return (
            <section key={index} className={`flex flex-col gap-12 items-center ${index === 0 || index === content.length - 1 ? '' : 'lg:flex-row'}`}>
              
              {/* Text Block */}
              <div className={`flex-1 ${!isEven && index !== 0 && index !== content.length - 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold">
                    {index + 1}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                    {section.title}
                  </h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed pl-14">
                  {section.text}
                </p>
              </div>

              {/* Visual Block */}
              <div className="flex-1 w-full mt-8 lg:mt-0 flex justify-center">
                <VisualComponent />
              </div>

            </section>
          );
        })}
      </main>

    </div>
  );
}