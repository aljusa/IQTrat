import React, { useState, useEffect } from 'react';
import { 
  Flame, 
  Wind, 
  Shield, 
  Activity, 
  Factory, 
  Settings, 
  Thermometer, 
  PlayCircle,
  StopCircle,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar 
} from 'recharts';
import DivCarousel from '../assets/DivCarousel';

// --- TIPOS Y INTERFACES ---

interface SectionData {
  id: string;
  shortTitle: string;
  title: string;
  description: React.ReactNode;
  type: 'static' | 'dynamic' | 'interactive';
}

// --- DATOS DEL CURSO ---

const SECTIONS: SectionData[] = [
  {
    id: 'concept',
    shortTitle: 'Concepto',
    title: 'El Concepto de Atmósfera',
    description:(
      <DivCarousel>
      
          <p>La atmósfera de tratamiento térmico es el conjunto de gases o condiciones ambientales presentes dentro del horno durante el proceso. Su función principal es controlar las reacciones químicas que pueden ocurrir entre el metal y su entorno a altas temperaturas.</p>
          <p>Una atmósfera adecuada protege la superficie del material y asegura que el tratamiento térmico cumpla su propósito sin efectos secundarios indeseados.</p>
          <p><strong>Funciones principales de la atmósfera:</strong></p>
          <ul>
            <li>Proteger la superficie del metal.</li>
            <li>Evitar reacciones químicas no deseadas.</li>
            <li>Favorecer condiciones específicas del tratamiento.</li>
          </ul>
     
      </DivCarousel>
    ),
    type: 'static'
  },
  {
    id: 'interaction',
    shortTitle: 'Interacción',
    title: 'Interacción Metal-Atmósfera',
    description: (
        <DivCarousel>
    
          <p>A temperaturas elevadas, los metales reaccionan con facilidad con gases como el oxígeno, el hidrógeno o el dióxido de carbono. Estas reacciones pueden alterar la superficie y, en algunos casos, la composición del material.</p>
          <p>El uso de atmósferas controladas reduce estas interacciones, manteniendo la integridad superficial del metal durante el proceso térmico.</p>
          <p><strong>Efectos comunes de una atmósfera no controlada:</strong></p>
          <ul>
            <li>Oxidación superficial.</li>
            <li>Descarburación en aceros.</li>
            <li>Cambios en la composición química superficial.</li>
          </ul>
        
      </DivCarousel>
    ),
    type: 'dynamic'
  },
  {
    id: 'oxidizing',
    shortTitle: 'Oxidante',
    title: 'Atmósfera Oxidante',
    description: (
      <DivCarousel>
      
          <p>Contiene oxígeno y favorece la formación de óxidos en la superficie. Generalmente se evita, excepto en procesos donde la oxidación es parte del objetivo.</p>
     
      </DivCarousel>
    ),
    type: 'static'
  },
  {
    id: 'neutral',
    shortTitle: 'Neutra',
    title: 'Atmósfera Neutra',
    description: (
      <DivCarousel>
     
          <p>No reacciona de forma significativa con el metal. Se utiliza para proteger la superficie durante el calentamiento y el enfriamiento.</p>
      
      </DivCarousel>
    ),
    type: 'static'
  },
  {
    id: 'reducing',
    shortTitle: 'Reductora',
    title: 'Atmósfera Reductora',
    description: 'Una atmósfera rica en Hidrógeno o CO puede eliminar óxidos existentes. Observe cómo la capa de óxido desaparece progresivamente durante el proceso.',
    type: 'dynamic'
  },
  {
    id: 'vacuum',
    shortTitle: 'Aire vs Vacío',
    title: 'Comparativa: Aire vs. Vacío',
    description: 'Interactúe para ver la diferencia drástica en el acabado superficial. El vacío elimina todos los gases, previniendo cualquier reacción superficial.',
    type: 'interactive'
  },
  {
    id: 'process',
    shortTitle: 'Proceso',
    title: 'Control de Gases Industrial',
    description: 'El flujo de gases debe ser constante y monitoreado. Diagrama del flujo desde los tanques, pasando por el mezclador, hacia el horno y la salida de gases quemados.',
    type: 'dynamic'
  },
  {
    id: 'quality',
    shortTitle: 'Datos',
    title: 'Calidad y Estabilidad',
    description: 'Análisis comparativo del impacto de diferentes atmósferas en la calidad superficial, costo y estabilidad del proceso.',
    type: 'interactive'
  }
];

const CHART_DATA = [
  { subject: 'Aire (Sin Control)', A: 20, B: 90, fullMark: 100 },
  { subject: 'Exotérmica', A: 60, B: 70, fullMark: 100 },
  { subject: 'Endotérmica', A: 80, B: 50, fullMark: 100 },
  { subject: 'Vacío', A: 98, B: 20, fullMark: 100 },
  { subject: 'Nitrógeno/H2', A: 90, B: 40, fullMark: 100 },
];

// --- COMPONENTES UI BASE ---

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

// --- COMPONENTES DE DIAGRAMAS (RENDERS) ---

const FurnaceBase = ({ children, type = 'normal' }: { children: React.ReactNode, type?: 'vacuum' | 'normal' }) => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    {/* Paredes del Horno */}
    <defs>
      <linearGradient id="furnaceWall" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#475569" />
        <stop offset="50%" stopColor="#334155" />
        <stop offset="100%" stopColor="#1e293b" />
      </linearGradient>
      <pattern id="insulation" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M0 10L10 0M-2 2L2 -2M8 12L12 8" stroke="#64748b" strokeWidth="1" />
      </pattern>
    </defs>
    
    {/* Estructura Exterior */}
    <rect x="20" y="20" width="360" height="160" rx="4" fill="url(#furnaceWall)" />
    <rect x="30" y="30" width="340" height="140" rx="2" fill="url(#insulation)" />
    
    {/* Cámara Interior */}
    <rect x="40" y="40" width="320" height="120" fill="#0f172a" />
    
    {/* Elementos Calefactores (Coils) */}
    <path d="M50 50 Q60 50 60 60 T70 50 T80 50 T90 50 T100 50" stroke="#ef4444" strokeWidth="2" fill="none" className="animate-pulse" />
    <path d="M300 150 Q310 150 310 140 T320 150 T330 150 T340 150 T350 150" stroke="#ef4444" strokeWidth="2" fill="none" className="animate-pulse" />

    {children}
  </svg>
);

const StaticFurnace = () => (
  <FurnaceBase>
    {/* Gas Particles (Static Representation) */}
    <circle cx="200" cy="100" r="30" fill="#94a3b8" stroke="#e2e8f0" strokeWidth="2" />
    <text x="200" y="105" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">METAL</text>
    
    {/* Atmosphere Barrier Concept */}
    <circle cx="200" cy="100" r="45" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />
    <text x="200" y="45" textAnchor="middle" fill="#3b82f6" fontSize="12">Atmósfera (Barrera)</text>
    
    {/* Gas Molecules */}
    {[...Array(12)].map((_, i) => (
      <circle 
        key={i}
        cx={200 + 50 * Math.cos(i * 30 * Math.PI / 180)} 
        cy={100 + 50 * Math.sin(i * 30 * Math.PI / 180)} 
        r="3" 
        fill="#60a5fa"
      />
    ))}
  </FurnaceBase>
);

const MetalInteraction = () => {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setFrame(f => (f + 1) % 60), 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 h-full">
      <div className="relative bg-slate-100 rounded border border-slate-300 flex flex-col items-center justify-center p-4">
        <h4 className="absolute top-2 left-2 text-xs font-bold text-red-600">SIN ATMÓSFERA</h4>
        <svg width="150" height="150" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="20" fill="#94a3b8" />
          {/* Oxygen attacking */}
          {[0, 90, 180, 270].map((angle, i) => {
            const progress = (frame + i * 15) % 60;
            const dist = 50 - (progress / 60) * 30; 
            return dist > 20 ? (
              <circle 
                key={i} 
                cx={50 + dist * Math.cos(angle * Math.PI/180)}
                cy={50 + dist * Math.sin(angle * Math.PI/180)}
                r="3" fill="#ef4444" 
              />
            ) : null;
          })}
          <circle cx="50" cy="50" r="21" fill="none" stroke="#ef4444" strokeWidth={frame % 20 > 10 ? 2 : 0} opacity="0.5" />
        </svg>
      </div>
      <div className="relative bg-slate-100 rounded border border-slate-300 flex flex-col items-center justify-center p-4">
        <h4 className="absolute top-2 left-2 text-xs font-bold text-blue-600">ATMÓSFERA CONTROLADA</h4>
        <svg width="150" height="150" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="20" fill="#94a3b8" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.5" />
          {/* Shield particles bouncing */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
             <circle 
             key={i} 
             cx={50 + 30 * Math.cos((angle + frame) * Math.PI/180)}
             cy={50 + 30 * Math.sin((angle + frame) * Math.PI/180)}
             r="2" fill="#3b82f6" 
           />
          ))}
        </svg>
      </div>
    </div>
  );
};

const OxidationStatic = () => (
  <div className="flex items-center justify-center h-full bg-slate-50">
    <svg width="300" height="200" viewBox="0 0 300 200">
      <defs>
        <filter id="roughness">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" />
          <feDisplacementMap in="SourceGraphic" scale="5" />
        </filter>
      </defs>
      <rect x="100" y="80" width="100" height="60" fill="#94a3b8" />
      {/* Oxide Layer */}
      <path d="M98 78 H202 V142 H98 Z" fill="none" stroke="#7f1d1d" strokeWidth="4" />
      <rect x="95" y="75" width="110" height="70" fill="#b91c1c" opacity="0.4" filter="url(#roughness)" />
      
      <text x="150" y="180" textAnchor="middle" className="text-sm font-bold fill-red-800">Capa de Óxido (Cascarilla)</text>
      <text x="150" y="60" textAnchor="middle" className="text-xs fill-slate-500">Atmósfera con O₂ / H₂O / CO₂</text>
    </svg>
  </div>
);

const NeutralStatic = () => (
  <div className="flex items-center justify-center h-full bg-slate-50">
    <svg width="300" height="200" viewBox="0 0 300 200">
      <rect x="100" y="80" width="100" height="60" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
      <text x="150" y="115" textAnchor="middle" className="text-sm font-bold fill-slate-600">METAL LIMPIO</text>
      
      {/* Neutral Particles */}
      {[...Array(20)].map((_, i) => (
        <circle 
          key={i}
          cx={Math.random() * 280 + 10}
          cy={Math.random() * 180 + 10}
          r="2"
          fill="#94a3b8"
          opacity="0.5"
        />
      ))}
      <text x="150" y="180" textAnchor="middle" className="text-sm font-bold fill-slate-600">Superficie Intacta</text>
      <text x="150" y="60" textAnchor="middle" className="text-xs fill-slate-500">Atmósfera Inerte (N₂ / Ar)</text>
    </svg>
  </div>
);

const ReductionDynamic = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => p >= 100 ? 0 : p + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const oxideOpacity = 1 - (progress / 100);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <svg width="300" height="150" viewBox="0 0 300 150">
        {/* Metal Core */}
        <rect x="100" y="50" width="100" height="50" fill="#cbd5e1" />
        <text x="150" y="80" textAnchor="middle" fontSize="10" fill="#334155">METAL BASE</text>

        {/* Oxide Layer shrinking */}
        <rect 
          x="95" y="45" width="110" height="60" 
          fill="#7f1d1d" 
          opacity={oxideOpacity * 0.6}
        />
        
        {/* H2 Particles attacking oxide */}
        {[...Array(5)].map((_, i) => (
          <circle 
            key={i}
            cx={95 - (progress % 20) + Math.random() * 10}
            cy={45 + i * 10}
            r="2"
            fill="#3b82f6"
          />
        ))}
      </svg>
      <div className="w-64 bg-gray-200 rounded-full h-2.5 mt-4">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-xs text-slate-500 mt-2">Reducción de óxidos: {Math.round(progress)}%</p>
    </div>
  );
};

const VacuumInteractive = () => {
  const [isVacuum, setIsVacuum] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
      <div className="flex flex-col items-center justify-center p-4">
        <button 
          onClick={() => setIsVacuum(!isVacuum)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
            isVacuum 
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' 
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          {isVacuum ? <StopCircle size={20}/> : <PlayCircle size={20}/>}
          {isVacuum ? 'Apagar Bomba de Vacío' : 'Activar Vacío'}
        </button>
        <p className="mt-4 text-sm text-center text-slate-600">
          Estado: <strong>{isVacuum ? 'Vacío Profundo (10⁻³ mbar)' : 'Aire Atmosférico'}</strong>
        </p>
      </div>

      <div className="relative bg-slate-900 rounded-lg overflow-hidden flex items-center justify-center border-4 border-slate-700">
        {/* Metal Piece */}
        <div className={`w-24 h-24 rounded transition-colors duration-1000 flex items-center justify-center
          ${isVacuum ? 'bg-slate-300 shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'bg-amber-800'}`}>
          <span className="text-xs font-bold opacity-50">{isVacuum ? 'BRILLANTE' : 'OXIDADO'}</span>
        </div>

        {/* Particles */}
        {!isVacuum && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(40)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-1 h-1 bg-white opacity-20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ProcessFlow = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <svg viewBox="0 0 500 200" className="w-full h-full">
      {/* Gas Tanks */}
      <rect x="10" y="50" width="30" height="80" rx="5" fill="#3b82f6" />
      <rect x="50" y="50" width="30" height="80" rx="5" fill="#ef4444" />
      <text x="45" y="145" textAnchor="middle" fontSize="10" fill="#64748b">Gases</text>

      {/* Piping */}
      <path d="M25 50 V40 H100" stroke="#94a3b8" strokeWidth="2" fill="none" />
      <path d="M65 50 V30 H100" stroke="#94a3b8" strokeWidth="2" fill="none" />

      {/* Mixer/Control Panel */}
      <rect x="100" y="20" width="40" height="40" fill="#e2e8f0" stroke="#64748b" />
      <circle cx="120" cy="40" r="10" fill="none" stroke="#64748b" />
      <path d="M120 40 L125 35" stroke="#ef4444" strokeWidth="2" />

      {/* To Furnace */}
      <path d="M140 40 H200" stroke="#94a3b8" strokeWidth="4" strokeDasharray="4 2" className="animate-pulse" />
      <text x="170" y="30" textAnchor="middle" fontSize="10" fill="#64748b">Mezcla</text>

      {/* Furnace */}
      <rect x="200" y="20" width="200" height="120" rx="4" fill="#1e293b" />
      <rect x="220" y="40" width="160" height="80" fill="#0f172a" />
      <circle cx="300" cy="80" r="20" fill="#f59e0b" className="animate-pulse">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Exhaust */}
      <path d="M400 60 H450 V20" stroke="#94a3b8" strokeWidth="2" fill="none" />
      <path d="M450 20 L445 25 M450 20 L455 25" stroke="#94a3b8" strokeWidth="2" />
      <text x="450" y="15" textAnchor="middle" fontSize="10" fill="#64748b">Salida</text>
    </svg>
  </div>
);

const DataChart = () => (
  <div className="w-full h-full p-2">
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={CHART_DATA}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar
          name="Calidad Superficial"
          dataKey="A"
          stroke="#3b82f6"
          fill="#3b82f6"
          fillOpacity={0.6}
        />
        <Tooltip />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  </div>
);

const DiagramRender: React.FC<{ type: string; id: string }> = ({ id }) => {
  switch (id) {
    case 'concept': return <StaticFurnace />;
    case 'interaction': return <MetalInteraction />;
    case 'oxidizing': return <OxidationStatic />;
    case 'neutral': return <NeutralStatic />;
    case 'reducing': return <ReductionDynamic />;
    case 'vacuum': return <VacuumInteractive />;
    case 'process': return <ProcessFlow />;
    case 'quality': return <DataChart />;
    default: return <div className="flex items-center justify-center h-full text-slate-400">Diagrama no disponible</div>;
  }
};

// --- COMPONENTE DE LAYOUT (CSS GRID) ---

const LessonLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentSection = SECTIONS[activeTab];

  return (
    <div 
      className="w-full min-h-screen bg-slate-50 text-slate-800 font-sans"
      style={{
        display: 'grid',
        gridTemplateAreas: `
          "header header"
          "nav nav"
          "content content"
        `,
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto auto 1fr',
        gap: '1rem',
        padding: '1.5rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      {/* HEADER AREA */}
      <header style={{ gridArea: 'header' }} className="flex items-center gap-3 pb-4 border-b border-slate-200">
        <div className="p-3 bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-200">
          <Factory size={28} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Atmósferas de tratamiento térmico</h1>
         
        </div>
      </header>

      {/* NAV AREA (TABS) */}
      <nav style={{ gridArea: 'nav' }} className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
        {SECTIONS.map((section, index) => {
          const isActive = activeTab === index;
          return (
            <button
              key={section.id}
              onClick={() => setActiveTab(index)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2
                ${isActive 
                  ? 'bg-white text-blue-600 shadow-md border-blue-100 ring-1 ring-blue-500' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-transparent'}
              `}
            >
              {index + 1}. {section.shortTitle}
            </button>
          );
        })}
      </nav>

      {/* CONTENT AREA */}
      <main style={{ gridArea: 'content' }} className="h-full">
        <div className='grid gap-4'
        >
          {/* Panel de Texto */}
          <Card className="flex flex-col h-full min-h-[300px]">
            <div className="p-6 border-b border-slate-100 bg-slate-50/50">
              
              <h2 className="text-xl font-bold text-slate-800">{currentSection.title}</h2>
            </div>
            <div className="p-6 flex-grow">
              <p className="text-slate-600 leading-relaxed text-lg">
                {currentSection.description}
              </p>
              
           
            </div>
          </Card>

          {/* Panel de Diagrama */}
          <Card className="h-[400px] md:h-auto bg-slate-50 relative">
            
             <div className="w-full h-full p-4 flex items-center justify-center">
               <DiagramRender id={currentSection.id} type={currentSection.type} />
             </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

// --- APP ENTRY POINT ---

export default function App() {
  return <LessonLayout />;
}