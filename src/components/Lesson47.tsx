import React from 'react';
import { 
  Car, 
  Settings, 
  Wrench, 
  Activity, 
  TrendingUp, 
  ShieldAlert, 
  ShieldCheck,
  ArrowRightCircle
} from 'lucide-react';

// --- DATOS DEL CONTENIDO ACADÉMICO ---
const lessons = [
  {
    id: 'intro',
    title: 'Introducción a las aplicaciones de la carburización',
    explanation: 'La carburización se emplea en sectores industriales donde los componentes están sometidos a fricción, contacto repetitivo y cargas mecánicas elevadas. Su valor radica en proporcionar una superficie resistente al desgaste sin sacrificar la integridad estructural del núcleo.',
    visualIdea: 'Un esquema de diferentes industrias (automotriz, maquinaria, transmisión) conectadas a componentes metálicos tratados, destacando la superficie endurecida.',
  },
  {
    id: 'engranajes',
    title: 'Aplicación en engranajes',
    explanation: 'Los engranajes son uno de los ejemplos más representativos del uso de la carburización. Estos componentes requieren una superficie muy dura para resistir el desgaste por contacto continuo entre dientes, mientras que el núcleo debe ser tenaz para soportar cargas e impactos.',
    visualIdea: 'Un engranaje en corte donde se resalte la capa superficial endurecida en los dientes y un núcleo más dúctil en el interior.',
  },
  {
    id: 'ejes',
    title: 'Aplicación en ejes',
    explanation: 'Los ejes transmiten torque y están sometidos a esfuerzos combinados de torsión y flexión. La carburización permite endurecer su superficie, reduciendo el desgaste en zonas de contacto, mientras el núcleo conserva la capacidad de resistir deformaciones sin fracturarse.',
    visualIdea: 'Un eje mecánico con zonas de contacto señaladas, mostrando la capa superficial endurecida y el núcleo resistente.',
  },
  {
    id: 'rodamientos',
    title: 'Aplicación en rodamientos',
    explanation: 'En los rodamientos, las superficies están en contacto constante y sometidas a cargas cíclicas. La carburización mejora la resistencia al desgaste y a la fatiga de contacto, prolongando la vida útil del componente.',
    visualIdea: 'Un rodamiento en sección donde se destaquen las pistas y elementos rodantes con una capa superficial endurecida.',
  },
  {
    id: 'pinones',
    title: 'Aplicación en piñones',
    explanation: 'Los piñones, al igual que los engranajes, requieren una alta resistencia superficial para soportar la transmisión de movimiento y evitar el deterioro de los dientes. La carburización asegura precisión y durabilidad en su funcionamiento.',
    visualIdea: 'Un piñón engranado con otro elemento, destacando las zonas de contacto donde actúa la capa carburizada.',
  },
  {
    id: 'automotriz',
    title: 'Aplicaciones en componentes automotrices',
    explanation: 'En la industria automotriz, la carburización se utiliza en múltiples piezas como engranajes de transmisión, árboles de levas y componentes del sistema de dirección. Estas piezas requieren alta resistencia al desgaste y fiabilidad bajo cargas cíclicas.',
    visualIdea: 'Un esquema de un sistema de transmisión automotriz con varias piezas señaladas donde se aplica carburización.',
  },
  {
    id: 'maquinaria',
    title: 'Importancia en maquinaria pesada',
    explanation: 'En maquinaria industrial y equipos pesados, los componentes están sometidos a condiciones extremas de carga y fricción. La carburización permite aumentar la durabilidad y reducir el mantenimiento de estas piezas.',
    visualIdea: 'Una máquina industrial con componentes críticos resaltados y etiquetados como tratados por carburización.',
  },
  {
    id: 'transmision',
    title: 'Uso en sistemas de transmisión',
    explanation: 'Los sistemas de transmisión de potencia dependen de componentes que interactúan continuamente. La carburización mejora la eficiencia operativa al reducir el desgaste y mantener la precisión dimensional de las piezas.',
    visualIdea: 'Un diagrama de un sistema de transmisión con flechas de movimiento y componentes clave resaltados con capas endurecidas.',
  },
  {
    id: 'estrategia',
    title: 'Importancia estratégica en la industria',
    explanation: 'La carburización es un proceso clave para mejorar el rendimiento y la vida útil de componentes críticos. Su aplicación permite diseñar piezas más ligeras, eficientes y duraderas, optimizando costos y desempeño en múltiples sectores industriales.',
    visualIdea: 'Un esquema comparativo entre un componente sin tratamiento y uno carburizado, con indicadores de rendimiento.',
  }
];

// --- COMPONENTES VISUALES GENERADOS (Diagramas SVG) ---

const VisualIntro = () => (
  <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-slate-50 rounded-xl">
    <div className="relative w-full max-w-sm aspect-video">
      {/* Central Node */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full shadow-lg z-10 flex flex-col items-center">
        <Settings size={32} />
        <span className="text-xs font-bold mt-1 text-center">Pieza<br/>Carburizada</span>
      </div>
      
      {/* Lines connecting */}
      <svg className="absolute inset-0 w-full h-full text-slate-300 z-0">
        <line x1="50%" y1="50%" x2="20%" y2="25%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
      </svg>

      {/* Industry Nodes */}
      <div className="absolute top-[10%] left-[10%] bg-white p-2 rounded-lg shadow border border-slate-200 flex items-center gap-2">
        <Car size={20} className="text-slate-600" />
        <span className="text-xs font-semibold text-slate-700">Automotriz</span>
      </div>
      <div className="absolute top-[10%] right-[10%] bg-white p-2 rounded-lg shadow border border-slate-200 flex items-center gap-2">
        <Wrench size={20} className="text-slate-600" />
        <span className="text-xs font-semibold text-slate-700">Maquinaria</span>
      </div>
      <div className="absolute bottom-[5%] left-[30%] bg-white p-2 rounded-lg shadow border border-slate-200 flex items-center gap-2">
        <Activity size={20} className="text-slate-600" />
        <span className="text-xs font-semibold text-slate-700">Transmisión</span>
      </div>
    </div>
  </div>
);

const VisualEngranaje = () => (
  <div className="flex flex-col items-center justify-center w-full h-full bg-slate-900 rounded-xl p-4 relative overflow-hidden">
    <svg viewBox="0 0 100 100" className="w-48 h-48 drop-shadow-2xl">
      <defs>
        {/* Core Gradient */}
        <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#475569" />
        </radialGradient>
      </defs>
      
      {/* Gear Base (Teeth + Outer ring hardened) */}
      <path 
        d="M50 5 L55 15 A40 40 0 0 1 65 20 L75 15 L80 25 L72 32 A40 40 0 0 1 80 43 L92 45 L90 55 L80 57 A40 40 0 0 1 72 68 L80 75 L70 85 L62 78 A40 40 0 0 1 50 82 L48 95 L38 92 L42 82 A40 40 0 0 1 30 76 L22 84 L15 75 L22 66 A40 40 0 0 1 18 55 L5 52 L8 42 L18 45 A40 40 0 0 1 25 32 L15 25 L25 15 L32 22 A40 40 0 0 1 45 18 Z" 
        fill="url(#coreGrad)"
        stroke="#f97316" // Orange for carburized layer
        strokeWidth="4" 
        strokeLinejoin="round"
      />
      {/* Inner hole */}
      <circle cx="50" cy="50" r="15" fill="#0f172a" />
    </svg>
    <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded">Capa Dura (Carburizada)</div>
    <div className="absolute bottom-4 left-4 bg-slate-500 text-white text-xs px-2 py-1 rounded">Núcleo Tenaz</div>
  </div>
);

const VisualEjes = () => (
  <div className="flex flex-col items-center justify-center w-full h-full bg-slate-50 rounded-xl p-4">
    <div className="relative w-full max-w-md h-32 flex items-center justify-center">
      <svg viewBox="0 0 300 100" className="w-full h-full">
        {/* Main Shaft (Core) */}
        <rect x="20" y="30" width="260" height="40" rx="5" fill="#cbd5e1" />
        {/* Carburized Contact Zones */}
        <rect x="40" y="28" width="40" height="44" rx="2" fill="none" stroke="#f97316" strokeWidth="4" strokeDasharray="2 2" />
        <rect x="220" y="28" width="40" height="44" rx="2" fill="none" stroke="#f97316" strokeWidth="4" strokeDasharray="2 2" />
        
        {/* Core color */}
        <rect x="40" y="30" width="40" height="40" rx="2" fill="#f97316" fillOpacity="0.8" />
        <rect x="220" y="30" width="40" height="40" rx="2" fill="#f97316" fillOpacity="0.8" />
      </svg>
      <div className="absolute top-2 flex justify-between w-full px-12">
        <span className="text-[10px] bg-orange-100 text-orange-800 px-1 rounded font-bold border border-orange-300">Zona de Contacto (Dura)</span>
        <span className="text-[10px] bg-orange-100 text-orange-800 px-1 rounded font-bold border border-orange-300">Zona de Contacto (Dura)</span>
      </div>
      <div className="absolute bottom-2">
        <span className="text-xs text-slate-600 font-semibold bg-white px-2 py-1 rounded-full shadow">Núcleo Resistente a Flexión</span>
      </div>
    </div>
  </div>
);

const VisualRodamientos = () => (
  <div className="flex flex-col items-center justify-center w-full h-full bg-slate-900 rounded-xl p-4">
    <svg viewBox="0 0 100 100" className="w-48 h-48">
      {/* Outer Race */}
      <circle cx="50" cy="50" r="45" fill="none" stroke="#64748b" strokeWidth="10" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="#f97316" strokeWidth="2" /> {/* Inner surface of outer race carburized */}
      
      {/* Inner Race */}
      <circle cx="50" cy="50" r="25" fill="none" stroke="#64748b" strokeWidth="10" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="#f97316" strokeWidth="2" /> {/* Outer surface of inner race carburized */}
      
      {/* Ball Bearings */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 50 + 35 * Math.cos(rad);
        const cy = 50 + 35 * Math.sin(rad);
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r="6" fill="#cbd5e1" />
            <circle cx={cx} cy={cy} r="6" fill="none" stroke="#f97316" strokeWidth="1.5" />
          </g>
        );
      })}
    </svg>
    <div className="mt-4 flex flex-wrap gap-2 justify-center">
      <span className="text-xs text-orange-400 border border-orange-400 px-2 py-1 rounded">Superficie Rodante Endurecida</span>
    </div>
  </div>
);

const VisualPinones = () => (
  <div className="flex flex-col items-center justify-center w-full h-full bg-slate-50 rounded-xl p-4 relative">
    <div className="flex items-center justify-center transform -rotate-12">
      <Settings size={80} className="text-slate-400 animate-[spin_10s_linear_infinite]" strokeWidth={1} />
      <Settings size={56} className="text-slate-600 -ml-4 animate-[spin_7s_linear_infinite_reverse]" strokeWidth={1.5} />
    </div>
    <div className="absolute mt-8 inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-12 h-12 rounded-full border-4 border-orange-500 opacity-50 animate-ping"></div>
      <div className="absolute bg-white px-2 py-1 rounded shadow-md border border-orange-200 text-xs text-orange-700 font-bold ml-32 mt-16">
        Contacto de Dientes Tratados
      </div>
    </div>
  </div>
);

const VisualAutomotriz = () => (
  <div className="flex flex-col items-center justify-center w-full h-full bg-slate-100 rounded-xl p-4 relative">
    <Car size={120} className="text-slate-300 absolute" />
    <div className="z-10 grid grid-cols-2 gap-4 w-full px-8 mt-12">
      <div className="bg-white p-2 rounded shadow border-l-4 border-orange-500 text-center">
        <span className="text-xs font-bold text-slate-700">Árbol de levas</span>
      </div>
      <div className="bg-white p-2 rounded shadow border-l-4 border-orange-500 text-center">
        <span className="text-xs font-bold text-slate-700">Transmisión</span>
      </div>
      <div className="col-span-2 bg-white p-2 rounded shadow border-l-4 border-orange-500 text-center mx-8">
        <span className="text-xs font-bold text-slate-700">Sistema de Dirección</span>
      </div>
    </div>
  </div>
);

const VisualMaquinaria = () => (
  <div className="flex flex-col items-center justify-center w-full h-full bg-slate-900 rounded-xl p-4 text-white">
    <div className="flex items-end gap-2">
      <div className="w-16 h-24 bg-yellow-500 rounded-t-lg relative">
        <div className="absolute bottom-2 left-2 w-12 h-12 bg-slate-800 rounded-full"></div>
      </div>
      {/* Arm with joints */}
      <div className="w-32 h-4 bg-yellow-500 transform -rotate-45 origin-bottom-left relative">
        {/* Joint 1 (Carburized) */}
        <div className="absolute left-0 -top-2 w-8 h-8 rounded-full bg-slate-700 border-4 border-orange-500 flex items-center justify-center">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
        </div>
        {/* Joint 2 (Carburized) */}
        <div className="absolute right-0 -top-2 w-8 h-8 rounded-full bg-slate-700 border-4 border-orange-500 flex items-center justify-center">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
        </div>
      </div>
      <div className="w-16 h-12 border-4 border-yellow-500 rounded-b-xl -ml-8 mb-16"></div>
    </div>
    <div className="mt-8 text-center text-xs text-slate-300">
      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
      Bulones y articulaciones carburizadas (Alta carga)
    </div>
  </div>
);

const VisualTransmision = () => (
  <div className="flex flex-col items-center justify-center w-full h-full bg-slate-50 rounded-xl p-4">
    <div className="flex items-center w-full max-w-sm justify-between px-4">
      <div className="flex flex-col items-center">
        <span className="text-[10px] text-slate-500 mb-1">Entrada</span>
        <ArrowRightCircle className="text-blue-500 mb-2 animate-pulse" />
        <div className="w-12 h-16 bg-slate-300 border-x-4 border-orange-500 rounded-sm"></div>
      </div>
      
      <div className="w-24 h-2 bg-slate-400"></div>
      
      <div className="flex flex-col items-center">
        <div className="w-16 h-24 bg-slate-300 border-x-4 border-orange-500 rounded-sm"></div>
      </div>

      <div className="w-24 h-2 bg-slate-400"></div>

      <div className="flex flex-col items-center">
        <span className="text-[10px] text-slate-500 mb-1">Salida</span>
        <ArrowRightCircle className="text-blue-500 mb-2 animate-pulse" />
        <div className="w-10 h-12 bg-slate-300 border-x-4 border-orange-500 rounded-sm"></div>
      </div>
    </div>
    <div className="mt-4 bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full border border-orange-300">
      Superficies de interacción con desgaste reducido
    </div>
  </div>
);

const VisualEstrategia = () => (
  <div className="flex items-center justify-center w-full h-full bg-white rounded-xl p-4 border border-slate-100 shadow-inner">
    <div className="grid grid-cols-2 gap-8 w-full max-w-md">
      {/* Componente Sin Tratar */}
      <div className="flex flex-col items-center">
        <ShieldAlert size={48} className="text-red-400 mb-4" />
        <div className="w-full bg-slate-200 h-32 rounded-t flex items-end justify-center pb-2">
          <div className="w-12 bg-red-400 h-1/3 rounded-t transition-all"></div>
        </div>
        <span className="text-xs font-bold text-slate-600 mt-2 text-center">Sin Tratamiento</span>
        <span className="text-[10px] text-red-500 text-center">Mayor desgaste<br/>Baja vida útil</span>
      </div>

      {/* Componente Carburizado */}
      <div className="flex flex-col items-center">
        <ShieldCheck size={48} className="text-green-500 mb-4" />
        <div className="w-full bg-slate-200 h-32 rounded-t flex items-end justify-center pb-2">
          <div className="w-12 bg-green-500 h-full rounded-t transition-all"></div>
        </div>
        <span className="text-xs font-bold text-slate-600 mt-2 text-center">Carburizado</span>
        <span className="text-[10px] text-green-600 text-center">Alta eficiencia<br/>Larga durabilidad</span>
      </div>
    </div>
  </div>
);

// Mapeo dinámico de visualizadores
const getVisualizer = (id) => {
  switch (id) {
    case 'intro': return <VisualIntro />;
    case 'engranajes': return <VisualEngranaje />;
    case 'ejes': return <VisualEjes />;
    case 'rodamientos': return <VisualRodamientos />;
    case 'pinones': return <VisualPinones />;
    case 'automotriz': return <VisualAutomotriz />;
    case 'maquinaria': return <VisualMaquinaria />;
    case 'transmision': return <VisualTransmision />;
    case 'estrategia': return <VisualEstrategia />;
    default: return <div className="p-4 text-center text-slate-400">Sin diagrama</div>;
  }
};

// --- COMPONENTE PRINCIPAL (Layout de la Web) ---
export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-orange-200 selection:text-orange-900">
      
      {/* HEADER */}
      <header className="bg-slate-900 text-white py-12 px-6 md:px-12 lg:px-24 border-b-4 border-orange-500">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="p-4 bg-orange-500 rounded-2xl shadow-lg">
            <TrendingUp size={48} className="text-white" />
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              Aplicaciones Industriales de la <span className="text-orange-400">Carburización</span>
            </h1>
         
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="py-12 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="flex flex-col gap-12">
          
          {lessons.map((lesson, index) => (
            <section 
              key={lesson.id} 
              className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-200 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Texto Explicativo (Mitad Izquierda) */}
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-orange-100 text-orange-600 font-bold rounded-full shrink-0">
                    {index + 1}
                  </span>
                  <h2 className="text-2xl font-bold text-slate-800 leading-tight">
                    {lesson.title}
                  </h2>
                </div>
                
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  {lesson.explanation}
                </p>

              </div>

              {/* Diagrama Visual (Mitad Derecha) */}
              <div className="w-full md:w-5/12 lg:w-1/2 p-6 bg-slate-50 border-t md:border-t-0 md:border-l border-slate-100 flex items-center justify-center min-h-[300px]">
                {getVisualizer(lesson.id)}
              </div>
            </section>
          ))}

        </div>
      </main>
    </div>
  );
}