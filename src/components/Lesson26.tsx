import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceArea
} from 'recharts';

// --- Types & Interfaces ---
interface SectionData {
  id: string;
  tabTitle: string;
  diagramTitle: string;
  description: string;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface DiagramRenderProps {
  activeIndex: number;
}

// --- Data Definition ---
const lessonSections: SectionData[] = [
  {
    id: 'intro',
    tabTitle: 'Introducción',
    diagramTitle: 'Esquema General del Tratamiento Térmico',
    description: 'La normalizado es un tratamiento térmico aplicado principalmente a aceros con el fin de mejorar su estructura interna. Este proceso es fundamental en la metalurgia porque permite obtener materiales con propiedades mecánicas más consistentes y confiables. Su alcance se centra en modificar la microestructura del acero mediante control térmico.'
  },
  {
    id: 'definicion',
    tabTitle: 'Definición',
    diagramTitle: 'Curva Temperatura-Tiempo de normalizado',
    description: 'La normalizado consiste en calentar el acero a una temperatura superior a su punto crítico y posteriormente dejarlo enfriar al aire. Este enfriamiento no es forzado, lo que permite una transformación estructural más uniforme que en otros tratamientos térmicos.'
  },
  {
    id: 'objetivo',
    tabTitle: 'Objetivo',
    diagramTitle: 'Refinamiento del Grano Estructural',
    description: 'El propósito principal de la normalizado es homogeneizar la estructura interna del acero y refinar el tamaño de grano. Esto se traduce en mejores propiedades mecánicas, como mayor resistencia y tenacidad, además de una mayor uniformidad en el comportamiento del material.'
  },
  {
    id: 'calentamiento',
    tabTitle: 'Calentamiento',
    diagramTitle: 'Distribución Uniforme de Calor en Horno',
    description: 'Durante la normalizado, el acero se calienta de manera uniforme para evitar la generación de tensiones internas o deformaciones. Este control es esencial para asegurar que toda la pieza responda de forma homogénea al tratamiento.'
  },
  {
    id: 'mantenimiento',
    tabTitle: 'Mantenimiento',
    diagramTitle: 'Fase de Estabilización Térmica',
    description: 'Una vez alcanzada la temperatura adecuada, el material se mantiene durante un tiempo específico. Este periodo permite que toda la estructura interna del acero se estabilice térmicamente, garantizando uniformidad en toda la pieza.'
  },
  {
    id: 'enfriamiento',
    tabTitle: 'Enfriamiento',
    diagramTitle: 'Disipación Natural de Calor',
    description: 'El enfriamiento se realiza al aire libre sin aplicar medios externos de enfriamiento. Esto genera una velocidad moderada que favorece la formación de una estructura equilibrada y uniforme.'
  },
  {
    id: 'acero-carbono',
    tabTitle: 'Aceros al Carbono',
    diagramTitle: 'Aplicaciones Industriales Comunes',
    description: 'Los aceros al carbono son los materiales más comúnmente sometidos a normalizado debido a su uso extendido en la industria. Este tratamiento mejora su resistencia mecánica y su uniformidad estructural.'
  },
  {
    id: 'baja-aleacion',
    tabTitle: 'Baja Aleación',
    diagramTitle: 'Mejora en Uniformidad Estructural',
    description: 'Los aceros de baja aleación también se benefician de la normalizado, ya que este proceso mejora su resistencia y reduce irregularidades estructurales, haciéndolos más adecuados para aplicaciones exigentes.'
  },
  {
    id: 'importancia',
    tabTitle: 'Importancia',
    diagramTitle: 'Flujo de Procesamiento Industrial',
    description: 'La normalizado permite obtener un acero con estructura uniforme y propiedades mejoradas, lo que lo hace apto para aplicaciones exigentes o como etapa previa a otros tratamientos térmicos. Es un proceso clave para garantizar calidad y desempeño en componentes metálicos.'
  }
];

const chartDataFull = [
  { time: 0, temp: 25, stage: 'Inicio' },
  { time: 2, temp: 950, stage: 'Calentamiento' },
  { time: 4, temp: 950, stage: 'Mantenimiento' },
  { time: 10, temp: 25, stage: 'Enfriamiento al Aire' },
];

const chartDataHolding = [
  { time: 2, temp: 950, stage: 'Inicio Mantenimiento' },
  { time: 2.5, temp: 950, stage: 'Estabilización' },
  { time: 3, temp: 950, stage: 'Estabilización' },
  { time: 3.5, temp: 950, stage: 'Estabilización' },
  { time: 4, temp: 950, stage: 'Fin Mantenimiento' },
];

// --- Sub-components ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden ${className}`}>
    {children}
  </div>
);

const DiagramRender: React.FC<DiagramRenderProps> = ({ activeIndex }) => {
  // Contenedor principal del diagrama que utiliza CSS Grid para centrar el contenido
  const renderContainerClass = "grid place-items-center w-full h-full min-h-[400px] p-6 bg-slate-50 rounded-lg border border-slate-100";

  switch (activeIndex) {
    case 0: // Introducción - 3 etapas
      return (
        <div className={renderContainerClass}>
          <svg viewBox="0 0 600 200" className="w-full h-full max-w-3xl">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
              </marker>
            </defs>
            <rect x="50" y="60" width="120" height="80" rx="8" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
            <text x="110" y="105" textAnchor="middle" fill="#7f1d1d" fontWeight="bold" fontSize="14">Calentamiento</text>
            
            <line x1="180" y1="100" x2="240" y2="100" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrow)" />
            
            <rect x="250" y="60" width="120" height="80" rx="8" fill="#fdba74" stroke="#f97316" strokeWidth="2" />
            <text x="310" y="105" textAnchor="middle" fill="#7c2d12" fontWeight="bold" fontSize="14">Mantenimiento</text>

            <line x1="380" y1="100" x2="440" y2="100" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrow)" />
            
            <rect x="450" y="60" width="120" height="80" rx="8" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2" />
            <text x="510" y="105" textAnchor="middle" fill="#1e3a8a" fontWeight="bold" fontSize="14">Enfriamiento</text>
          </svg>
        </div>
      );

    case 1: // Definición - Gráfico Temperatura-Tiempo
      return (
        <div className={renderContainerClass}>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={chartDataFull} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="time" label={{ value: 'Tiempo (horas)', position: 'insideBottom', offset: -10 }} />
              <YAxis label={{ value: 'Temperatura (°C)', angle: -90, position: 'insideLeft', offset: 10 }} domain={[0, 1100]} />
             
              <ReferenceArea y1={800} y2={1000} fill="#fca5a5" fillOpacity={0.2} />
              <Line type="monotone" dataKey="temp" stroke="#ef4444" strokeWidth={3} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );

    case 2: // Objetivo - Comparación de Grano
      return (
        <div className={renderContainerClass}>
          <svg viewBox="0 0 600 300" className="w-full h-full max-w-2xl">
            <g transform="translate(50, 50)">
              <rect x="0" y="0" width="200" height="200" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2"/>
              <text x="100" y="-15" textAnchor="middle" fill="#334155" fontWeight="bold">Estructura Inicial</text>
              <circle cx="60" cy="60" r="45" fill="none" stroke="#64748b" strokeWidth="2" />
              <circle cx="140" cy="80" r="50" fill="none" stroke="#64748b" strokeWidth="2" />
              <circle cx="80" cy="150" r="40" fill="none" stroke="#64748b" strokeWidth="2" />
              <text x="100" y="100" textAnchor="middle" fill="#64748b" fontSize="12">Grano Grueso</text>
            </g>
            
            <g transform="translate(270, 140)">
              <line x1="0" y1="0" x2="60" y2="0" stroke="#3b82f6" strokeWidth="4" markerEnd="url(#arrow)" />
            </g>

            <g transform="translate(350, 50)">
              <rect x="0" y="0" width="200" height="200" fill="#f8fafc" stroke="#3b82f6" strokeWidth="2"/>
              <text x="100" y="-15" textAnchor="middle" fill="#1e40af" fontWeight="bold">Estructura Normalizada</text>
              {Array.from({length: 25}).map((_, i) => (
                <circle 
                  key={i} 
                  cx={30 + (i % 5) * 35} 
                  cy={30 + Math.floor(i / 5) * 35} 
                  r="15" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="1.5" 
                />
              ))}
              <text x="100" y="105" textAnchor="middle" fill="#1e3a8a" fontSize="12" fontWeight="bold">Grano Fino y Homogéneo</text>
            </g>
          </svg>
        </div>
      );

    case 3: // Calentamiento - Horno
      return (
        <div className={renderContainerClass}>
          <svg viewBox="0 0 400 300" className="w-full h-full max-w-md">
            <defs>
              <radialGradient id="heat" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="60%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#b91c1c" />
              </radialGradient>
            </defs>
            <rect x="50" y="50" width="300" height="200" rx="15" fill="#334155" stroke="#0f172a" strokeWidth="4" />
            <rect x="70" y="70" width="260" height="160" rx="5" fill="url(#heat)" />
            <rect x="150" y="120" width="100" height="60" fill="#1e293b" />
            <text x="200" y="155" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="bold">Pieza de Acero</text>
            <text x="200" y="260" textAnchor="middle" fill="#475569" fontSize="16" fontWeight="bold">Horno a Temperatura Uniforme</text>
          </svg>
        </div>
      );

    case 4: // Mantenimiento - Gráfico Zoom
      return (
        <div className={renderContainerClass}>
           <ResponsiveContainer width="100%" height={350}>
            <LineChart data={chartDataHolding} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="time" label={{ value: 'Tiempo (horas)', position: 'insideBottom', offset: -10 }} domain={[1.5, 4.5]} type="number" />
              <YAxis label={{ value: 'Temperatura (°C)', angle: -90, position: 'insideLeft', offset: 10 }} domain={[900, 1000]} />
              <ReferenceArea x1={2} x2={4} fill="#fdba74" fillOpacity={0.3} />
              <Line type="stepAfter" dataKey="temp" stroke="#f97316" strokeWidth={4} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );

    case 5: // Enfriamiento - Disipación de calor
      return (
        <div className={renderContainerClass}>
          <svg viewBox="0 0 400 300" className="w-full h-full max-w-md">
            <rect x="150" y="100" width="100" height="100" fill="#94a3b8" stroke="#475569" strokeWidth="3" />
            <text x="200" y="155" textAnchor="middle" fill="#1e293b" fontWeight="bold">Acero</text>
            
            {/* Flechas de disipación */}
            <g stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow)" fill="none">
              <path d="M 140 120 Q 100 100 80 80" />
              <path d="M 140 180 Q 100 200 80 220" />
              <path d="M 260 120 Q 300 100 320 80" />
              <path d="M 260 180 Q 300 200 320 220" />
              <path d="M 200 90 L 200 40" />
              <path d="M 200 210 L 200 260" />
            </g>
            <text x="200" y="280" textAnchor="middle" fill="#3b82f6" fontWeight="bold">Disipación Moderada al Aire Libre</text>
          </svg>
        </div>
      );

    case 6: // Aceros al Carbono - Engranaje
      return (
        <div className={renderContainerClass}>
          <svg viewBox="0 0 200 200" className="w-full h-full max-w-xs">
            <g transform="translate(100, 100)" fill="#64748b" stroke="#334155" strokeWidth="2">
              <circle cx="0" cy="0" r="60" />
              <circle cx="0" cy="0" r="20" fill="#f8fafc" />
              {Array.from({length: 8}).map((_, i) => (
                <polygon 
                  key={i} 
                  points="-15,-60 15,-60 10,-80 -10,-80" 
                  transform={`rotate(${i * 45})`} 
                />
              ))}
            </g>
            <text x="100" y="195" textAnchor="middle" fill="#1e293b" fontWeight="bold">Engranaje (Acero al Carbono)</text>
          </svg>
        </div>
      );

    case 7: // Baja Aleación - Mejora estructural
      return (
         <div className={renderContainerClass}>
           <svg viewBox="0 0 500 200" className="w-full h-full max-w-2xl">
              <rect x="50" y="40" width="150" height="120" fill="#cbd5e1" stroke="#475569" strokeWidth="2" strokeDasharray="5,5" />
              <text x="125" y="100" textAnchor="middle" fill="#334155" fontSize="12">Segregación y</text>
              <text x="125" y="120" textAnchor="middle" fill="#334155" fontSize="12">Tensiones Residuales</text>
              
              <path d="M 220 100 L 280 100" stroke="#10b981" strokeWidth="4" markerEnd="url(#arrow)" />
              <text x="250" y="90" textAnchor="middle" fill="#059669" fontSize="12" fontWeight="bold">normalizado</text>
              
              <rect x="300" y="40" width="150" height="120" fill="#e2e8f0" stroke="#0f172a" strokeWidth="3" />
              <circle cx="375" cy="100" r="30" fill="none" stroke="#334155" strokeWidth="2" />
              <text x="375" y="105" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">Matriz Uniforme</text>
           </svg>
         </div>
      );

    case 8: // Importancia - Diagrama de Flujo
      return (
        <div className={renderContainerClass}>
          <svg viewBox="0 0 600 200" className="w-full h-full max-w-3xl">
            <rect x="20" y="80" width="120" height="40" rx="4" fill="#e2e8f0" stroke="#64748b" />
            <text x="80" y="105" textAnchor="middle" fill="#334155" fontSize="12">Forja / Laminado</text>
            
            <line x1="140" y1="100" x2="190" y2="100" stroke="#334155" strokeWidth="2" markerEnd="url(#arrow)" />
            
            <rect x="200" y="70" width="160" height="60" rx="4" fill="#10b981" stroke="#047857" strokeWidth="2" />
            <text x="280" y="105" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="14">normalizado</text>

            <line x1="360" y1="100" x2="410" y2="100" stroke="#334155" strokeWidth="2" markerEnd="url(#arrow)" />
            
            <g transform="translate(420, 50)">
               <rect x="0" y="0" width="140" height="30" rx="4" fill="#bae6fd" stroke="#0284c7" />
               <text x="70" y="20" textAnchor="middle" fill="#0c4a6e" fontSize="12">Templado / Revenido</text>

               <rect x="0" y="70" width="140" height="30" rx="4" fill="#fde047" stroke="#ca8a04" />
               <text x="70" y="90" textAnchor="middle" fill="#713f12" fontSize="12">Mecanizado Final</text>
            </g>

            <path d="M 400 100 L 400 65 L 415 65" stroke="#334155" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
            <path d="M 400 100 L 400 135 L 415 135" stroke="#334155" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};

// --- Main Application Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const currentSection = lessonSections[activeTab];

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen bg-slate-100 font-sans text-slate-800">
      
      {/* HEADER: Título y Navegación */}
      <header className="grid grid-rows-[auto_auto] gap-4 bg-slate-900 text-white p-6 shadow-md">
        <div className="grid place-items-center">
          <h1 className="text-3xl font-extrabold tracking-tight">normalizado de Aceros</h1>
          <p className="text-slate-400 mt-2 text-sm">Tratamiento Térmico y Modificación Estructural</p>
        </div>
        
        {/* TAB NAVIGATION: CSS Grid Exclusivamente */}
        <nav className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2 mt-4">
          {lessonSections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(index)}
              className={`grid place-items-center py-2 px-3 text-xs font-semibold rounded-t-md transition-colors border-b-4 ${
                activeTab === index 
                  ? 'bg-slate-800 border-blue-500 text-white' 
                  : 'bg-slate-900 border-transparent text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              {section.tabTitle}
            </button>
          ))}
        </nav>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="grid grid-cols-1 place-content-start gap-6 p-6 md:p-10 max-w-7xl mx-auto w-full">
        
        <Card className="grid grid-cols-1 gap-6 p-8">
          
          {/* Título y Descripción de la Sección */}
          <div className="grid grid-cols-1 gap-4 border-b border-slate-200 pb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              {currentSection.diagramTitle}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {currentSection.description}
            </p>
          </div>

          {/* Renderizado del Diagrama/Gráfico */}
          <div className="grid grid-cols-1">
            <DiagramRender activeIndex={activeTab} />
          </div>
          
        </Card>
      </main>

    </div>
  );
}