import React, { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceArea, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';

// --- DEFINICIÓN DE TIPOS ---

interface LessonData {
  id: number;
  title: string;
  description: string;
  diagramType: string;
}

interface LayoutProps {
  children: React.ReactNode;
  activeTab: number;
  setActiveTab: (id: number) => void;
  lessons: LessonData[];
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

// --- DATOS DE LA LECCIÓN ---

const lessonContent: LessonData[] = [
  {
    id: 0,
    title: "Introducción a las consideraciones prácticas",
    description: "La aplicación efectiva de la normalización requiere el control preciso de diversas variables del proceso. Estos factores determinan la calidad de la microestructura final y, por lo tanto, las propiedades mecánicas del acero.",
    diagramType: "intro-flow"
  },
  {
    id: 1,
    title: "Control de la temperatura",
    description: "La temperatura debe mantenerse dentro de un rango específico por encima del punto crítico del acero. Un control inadecuado puede impedir la transformación completa o generar estructuras no deseadas.",
    diagramType: "temp-control"
  },
  {
    id: 2,
    title: "Importancia del control térmico",
    description: "Un exceso o defecto de temperatura afecta directamente la microestructura. Temperaturas bajas pueden dejar fases sin transformar, mientras que temperaturas excesivas pueden dañar la estructura interna.",
    diagramType: "microstructure-compare"
  },
  {
    id: 3,
    title: "Tiempo de permanencia",
    description: "El tiempo durante el cual el material se mantiene a la temperatura de tratamiento debe ser suficiente para que toda la pieza alcance condiciones homogéneas. Este tiempo depende del tamaño, la forma y la composición del acero.",
    diagramType: "time-size"
  },
  {
    id: 4,
    title: "Condiciones de enfriamiento",
    description: "El enfriamiento debe realizarse al aire de manera uniforme. Variaciones en la velocidad de enfriamiento pueden provocar diferencias estructurales dentro de la pieza.",
    diagramType: "cooling-airflow"
  },
  {
    id: 5,
    title: "Error común — sobrecalentamiento",
    description: "El sobrecalentamiento provoca un crecimiento excesivo del tamaño de grano, lo que reduce la resistencia y la tenacidad del material.",
    diagramType: "grain-size"
  },
  {
    id: 6,
    title: "Error común — enfriamiento irregular",
    description: "Cuando el enfriamiento no es uniforme, se generan tensiones internas y deformaciones. Esto afecta la estabilidad dimensional y la integridad del material.",
    diagramType: "deformation"
  },
  {
    id: 7,
    title: "Error común — falta de homogeneidad",
    description: "La falta de control en el calentamiento o en el tiempo de mantenimiento puede generar estructuras internas no uniformes, afectando el comportamiento mecánico del acero.",
    diagramType: "homogeneity"
  },
  {
    id: 8,
    title: "Integración de las variables del proceso",
    description: "El éxito de la normalización depende de la correcta combinación de temperatura, tiempo y condiciones de enfriamiento. Estas variables actúan de forma interdependiente para lograr una microestructura óptima.",
    diagramType: "integration-triangle"
  },
  {
    id: 9,
    title: "Importancia de la correcta aplicación",
    description: "Un control adecuado del proceso garantiza un material con propiedades mecánicas óptimas, listo para su uso o para tratamientos térmicos posteriores. La precisión en la ejecución es clave para asegurar calidad y confiabilidad.",
    diagramType: "conclusion-flow"
  }
];

// --- COMPONENTES BASE ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`grid bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

const LessonLayout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab, lessons }) => {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* Header & Nav usando estrictamente CSS Grid */}
      <header className="grid grid-rows-[auto_auto] bg-slate-900 shadow-md">
        <div className="grid px-6 py-4 border-b border-slate-700">
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Consideraciones Prácticas de Normalización
          </h1>
          <p className="text-slate-400 text-sm mt-1">Tratamientos Térmicos del Acero</p>
        </div>
        
        <nav className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-[1px] bg-slate-800">
          {lessons.map((lesson, index) => (
            <button
              key={lesson.id}
              onClick={() => setActiveTab(index)}
              className={`grid place-items-center text-center p-3 text-xs md:text-sm font-medium transition-colors duration-200 ${
                activeTab === index 
                  ? 'bg-blue-600 text-white shadow-[inset_0_-4px_0_0_#60A5FA]' 
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <span className="line-clamp-2 leading-tight">{index + 1}. {lesson.title.split('—')[0]}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="grid p-4 md:p-8 lg:p-12 place-items-start">
        <div className="grid w-full max-w-5xl mx-auto">
          {children}
        </div>
      </main>

    </div>
  );
};

// --- VISUALIZACIONES ESPECÍFICAS (DiagramRenderer) ---

const tempChartData = [
  { time: 0, temp: 20 },
  { time: 20, temp: 400 },
  { time: 40, temp: 700 },
  { time: 60, temp: 900 },  // Zona óptima
  { time: 80, temp: 900 },  // Mantenimiento
  { time: 100, temp: 900 },
  { time: 120, temp: 600 }, // Enfriamiento
  { time: 140, temp: 300 },
  { time: 160, temp: 20 }
];

const timeSizeData = [
  { size: 'Pequeño (10mm)', time: 30 },
  { size: 'Medio (50mm)', time: 60 },
  { size: 'Grande (150mm)', time: 120 },
];

const DiagramRenderer: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'intro-flow':
      return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center p-8 bg-slate-50 rounded-lg">
          <div className="grid grid-rows-3 gap-4">
            <div className="grid place-items-center p-4 bg-blue-100 border-2 border-blue-400 rounded-lg text-blue-900 font-bold shadow-sm">Temperatura</div>
            <div className="grid place-items-center p-4 bg-blue-100 border-2 border-blue-400 rounded-lg text-blue-900 font-bold shadow-sm">Tiempo</div>
            <div className="grid place-items-center p-4 bg-blue-100 border-2 border-blue-400 rounded-lg text-blue-900 font-bold shadow-sm">Enfriamiento</div>
          </div>
          <div className="grid place-items-center text-4xl text-slate-400 font-bold">➔</div>
          <div className="grid place-items-center p-8 bg-emerald-100 border-2 border-emerald-500 rounded-xl text-emerald-900 font-bold text-xl shadow-md text-center">
            Microestructura Óptima<br/><span className="text-sm font-normal text-emerald-700 mt-2 block">Propiedades Mecánicas Ideales</span>
          </div>
        </div>
      );
      
    case 'temp-control':
      return (
        <div className="grid h-80 w-full p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={tempChartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="time" label={{ value: 'Tiempo (min)', position: 'insideBottom', offset: -10 }} />
              <YAxis label={{ value: 'Temperatura (°C)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <ReferenceArea y1={850} y2={950} fill="#10B981" fillOpacity={0.2} strokeOpacity={0} />
              <text x="50%" y="15%" textAnchor="middle" fill="#047857" fontWeight="bold">Rango Óptimo de Normalización</text>
              <Line type="monotone" dataKey="temp" stroke="#2563EB" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );

    case 'microstructure-compare':
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          <div className="grid grid-rows-[auto_1fr] gap-4">
            <h4 className="text-center font-bold text-slate-600">Temp. Insuficiente</h4>
            <div className="grid place-items-center p-4 border-2 border-slate-300 bg-white rounded-full aspect-square relative overflow-hidden">
               <svg viewBox="0 0 100 100" className="w-full h-full text-slate-400">
                  <pattern id="p1" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect width="20" height="20" fill="none" />
                    <circle cx="10" cy="10" r="8" fill="currentColor" opacity="0.4"/>
                    <circle cx="5" cy="5" r="3" fill="#ef4444" />
                  </pattern>
                  <rect width="100" height="100" fill="url(#p1)" />
               </svg>
               <span className="absolute bottom-4 bg-white/80 px-2 rounded text-xs font-bold text-red-600">Fases sin transformar</span>
            </div>
          </div>
          <div className="grid grid-rows-[auto_1fr] gap-4">
            <h4 className="text-center font-bold text-emerald-600">Temp. Óptima</h4>
            <div className="grid place-items-center p-4 border-2 border-emerald-400 bg-white rounded-full aspect-square relative overflow-hidden shadow-[0_0_15px_rgba(16,185,129,0.2)]">
               <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-600">
                  <pattern id="p2" width="15" height="15" patternUnits="userSpaceOnUse">
                    <circle cx="7.5" cy="7.5" r="6" fill="currentColor" opacity="0.8"/>
                  </pattern>
                  <rect width="100" height="100" fill="url(#p2)" />
               </svg>
               <span className="absolute bottom-4 bg-white/80 px-2 rounded text-xs font-bold text-emerald-700">Estructura Fina y Homogénea</span>
            </div>
          </div>
          <div className="grid grid-rows-[auto_1fr] gap-4">
            <h4 className="text-center font-bold text-slate-600">Temp. Excesiva</h4>
            <div className="grid place-items-center p-4 border-2 border-slate-300 bg-white rounded-full aspect-square relative overflow-hidden">
               <svg viewBox="0 0 100 100" className="w-full h-full text-amber-600">
                  <pattern id="p3" width="40" height="40" patternUnits="userSpaceOnUse">
                    <polygon points="20,0 40,20 20,40 0,20" fill="currentColor" opacity="0.6" stroke="white" strokeWidth="2"/>
                  </pattern>
                  <rect width="100" height="100" fill="url(#p3)" />
               </svg>
               <span className="absolute bottom-4 bg-white/80 px-2 rounded text-xs font-bold text-amber-700">Crecimiento de grano</span>
            </div>
          </div>
        </div>
      );

    case 'time-size':
      return (
        <div className="grid h-80 w-full p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={timeSizeData} layout="vertical" margin={{ top: 20, right: 30, left: 100, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" label={{ value: 'Tiempo de Mantenimiento (minutos)', position: 'insideBottom', offset: -10 }} />
              <YAxis dataKey="size" type="category" width={120} />
              <Tooltip cursor={{fill: 'transparent'}} />
              <Bar dataKey="time" fill="#3B82F6" radius={[0, 4, 4, 0]}>
                {timeSizeData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#93C5FD' : index === 1 ? '#3B82F6' : '#1E3A8A'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      );

    case 'cooling-airflow':
      return (
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div className="grid border-2 border-emerald-200 rounded-xl p-6 bg-emerald-50">
              <h4 className="text-center font-bold text-emerald-700 mb-6">Enfriamiento Uniforme (Correcto)</h4>
              <div className="grid place-items-center relative h-48">
                 <div className="w-32 h-32 bg-slate-700 rounded-md shadow-lg z-10"></div>
                 {/* Flechas de aire uniformes */}
                 <div className="absolute inset-0 flex justify-between items-center px-4">
                    <span className="text-emerald-500 text-3xl font-bold animate-pulse">→</span>
                    <span className="text-emerald-500 text-3xl font-bold animate-pulse">←</span>
                 </div>
                 <div className="absolute inset-0 flex flex-col justify-between items-center py-4">
                    <span className="text-emerald-500 text-3xl font-bold animate-pulse">↓</span>
                    <span className="text-emerald-500 text-3xl font-bold animate-pulse">↑</span>
                 </div>
              </div>
            </div>
            <div className="grid border-2 border-red-200 rounded-xl p-6 bg-red-50">
              <h4 className="text-center font-bold text-red-700 mb-6">Enfriamiento Irregular (Incorrecto)</h4>
              <div className="grid place-items-center relative h-48">
                 <div className="w-32 h-32 bg-slate-700 rounded-md shadow-lg z-10"></div>
                 {/* Flechas de aire caóticas */}
                 <div className="absolute top-4 left-4 text-red-500 text-4xl font-bold rotate-45">→</div>
                 <div className="absolute bottom-10 right-2 text-red-500 text-2xl font-bold -rotate-12">←</div>
                 <div className="absolute top-1/2 left-8 text-red-500 text-xl font-bold">→</div>
                 <div className="absolute text-slate-400 bottom-2 text-sm text-center w-full">Flujo bloqueado en una cara</div>
              </div>
            </div>
         </div>
      );

    case 'grain-size':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
           <div className="grid gap-2">
              <div className="grid place-items-center h-48 bg-slate-100 border-4 border-emerald-500 rounded-lg overflow-hidden relative">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="fine-grain" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M5,0 L10,5 L5,10 L0,5 Z" fill="none" stroke="#059669" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#fine-grain)" />
                </svg>
              </div>
              <p className="text-center font-bold text-emerald-700">Grano Fino (Alta Tenacidad)</p>
           </div>
           <div className="grid gap-2">
              <div className="grid place-items-center h-48 bg-slate-100 border-4 border-red-500 rounded-lg overflow-hidden relative">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="coarse-grain" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M20,0 L40,20 L20,40 L0,20 Z" fill="none" stroke="#DC2626" strokeWidth="2"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#coarse-grain)" />
                </svg>
              </div>
              <p className="text-center font-bold text-red-700">Grano Grueso (Frágil / Sobrecalentado)</p>
           </div>
        </div>
      );

    case 'deformation':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="grid gap-4 place-items-center">
               <div className="grid w-48 h-12 bg-slate-700 border-l-8 border-emerald-500 shadow-md"></div>
               <p className="text-emerald-700 font-bold text-center">Pieza Íntegra (Enfriamiento Uniforme)</p>
            </div>
            <div className="grid gap-4 place-items-center">
               <div className="grid w-48 h-12 bg-slate-700 border-l-8 border-red-500 shadow-md relative" style={{ transform: 'skewY(-10deg) curve', borderRadius: '10px 40px 10px 40px' }}>
                 <div className="absolute -top-6 -right-4 text-red-500 text-xs font-bold bg-white px-2 py-1 rounded shadow border border-red-200">Zona de tensión</div>
               </div>
               <p className="text-red-700 font-bold text-center mt-4">Pieza Deformada (Tensiones Internas)</p>
            </div>
        </div>
      );

    case 'homogeneity':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
           <div className="grid gap-2">
              <div className="grid place-items-center h-48 rounded-lg overflow-hidden border-2 border-emerald-500 bg-blue-100">
                <span className="text-emerald-800 font-bold">Estructura Uniforme</span>
              </div>
              <p className="text-center text-sm text-slate-500">Control estricto de T y t</p>
           </div>
           <div className="grid gap-2">
              <div className="grid h-48 rounded-lg overflow-hidden border-2 border-red-500" style={{ background: 'linear-gradient(45deg, #DBEAFE 0%, #93C5FD 40%, #1E3A8A 100%)' }}>
                 <div className="grid place-items-center h-full w-full bg-white/30 backdrop-blur-sm">
                    <span className="text-red-900 font-bold bg-white/80 px-3 py-1 rounded">Estructura Heterogénea</span>
                 </div>
              </div>
              <p className="text-center text-sm text-slate-500">Falta de control (gradiente térmico interior-exterior)</p>
           </div>
        </div>
      );

    case 'integration-triangle':
      return (
        <div className="grid place-items-center p-8 h-80">
          <svg viewBox="0 0 200 180" className="w-full max-w-sm h-full">
            <polygon points="100,20 180,160 20,160" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="3" />
            <circle cx="100" cy="20" r="10" fill="#2563EB" />
            <text x="100" y="8" textAnchor="middle" fill="#1E3A8A" fontSize="12" fontWeight="bold">Temperatura</text>
            
            <circle cx="180" cy="160" r="10" fill="#2563EB" />
            <text x="180" y="180" textAnchor="middle" fill="#1E3A8A" fontSize="12" fontWeight="bold">Tiempo</text>
            
            <circle cx="20" cy="160" r="10" fill="#2563EB" />
            <text x="20" y="180" textAnchor="middle" fill="#1E3A8A" fontSize="12" fontWeight="bold">Enfriamiento</text>

            <circle cx="100" cy="115" r="30" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="2" strokeDasharray="4" />
            <text x="100" y="118" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="bold">Microestructura</text>
            <text x="100" y="130" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="bold">Óptima</text>
          </svg>
        </div>
      );

    case 'conclusion-flow':
      return (
        <div className="grid place-items-center p-8 bg-slate-900 rounded-xl text-white">
           <div className="grid grid-rows-[auto_auto_auto] gap-6 w-full max-w-md">
              <div className="grid place-items-center p-4 bg-slate-800 border border-slate-600 rounded shadow-inner">
                 <span className="font-bold text-blue-400">Control Preciso del Proceso</span>
                 <span className="text-xs text-slate-400 mt-1">(T, t, Aire)</span>
              </div>
              <div className="grid place-items-center text-2xl text-slate-500">↓</div>
              <div className="grid place-items-center p-6 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg shadow-lg border border-emerald-400">
                 <span className="font-bold text-xl text-white drop-shadow-md">Material Confiable</span>
                 <span className="text-sm text-emerald-100 mt-2 font-medium">Propiedades Mecánicas Garantizadas</span>
              </div>
           </div>
        </div>
      );

    default:
      return <div className="grid place-items-center h-48 bg-slate-100 text-slate-400">Diagrama no disponible</div>;
  }
};

// --- APLICACIÓN PRINCIPAL ---

export default function App() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentLesson = lessonContent[activeTab];

  return (
    <LessonLayout activeTab={activeTab} setActiveTab={setActiveTab} lessons={lessonContent}>
      
      {/* Contenedor principal usando Grid */}
      <div className="grid gap-6 animation-fade-in w-full">
        
        {/* Cabecera del Panel */}
        <div className="grid gap-2 border-b border-slate-200 pb-4">
          <h2 className="text-3xl font-extrabold text-slate-800">
            {currentLesson.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
            {currentLesson.description}
          </p>
        </div>

        {/* Área de Visualización */}
        <Card className="grid mt-4">
     
          <div className="grid place-items-center p-4 md:p-8 bg-white min-h-[400px]">
            <DiagramRenderer type={currentLesson.diagramType} />
          </div>
        </Card>
        
        {/* Pie de Panel Estático (Opcional - Info adicional) */}
        <div className="grid grid-cols-[auto_1fr] gap-3 items-center mt-4 bg-blue-50 p-4 rounded-lg border border-blue-100">
          <div className="grid place-items-center w-8 h-8 bg-blue-200 text-blue-700 font-bold rounded-full">!</div>
          <p className="text-sm text-blue-900">
            Navegue por las pestañas superiores para explorar los diferentes aspectos y consideraciones del proceso de normalización.
          </p>
        </div>

      </div>

    </LessonLayout>
  );
}