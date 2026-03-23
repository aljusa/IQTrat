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
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  ZAxis,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';
import { Settings, Maximize, Activity, Shield, LayoutGrid, Minimize2, GitCompare, ArrowRight, Target } from 'lucide-react';

// --- DEFINICIONES DE TIPOS ---
interface SectionData {
  id: string;
  tabTitle: string;
  icon: React.ElementType;
  title: string;
  description: string;
  diagramTitle: string;
}

// --- DATOS DE CONTENIDO ---
const lessonData: SectionData[] = [
  {
    id: 'intro',
    tabTitle: 'Introducción',
    icon: Settings,
    title: 'Introducción a los efectos de la normalización',
    description: 'La normalización produce cambios significativos en la microestructura del acero, lo que impacta directamente en sus propiedades mecánicas. Estos efectos permiten mejorar el desempeño del material en aplicaciones industriales donde se requiere confiabilidad y uniformidad.',
    diagramTitle: 'Esquema Causa-Efecto de la Normalización'
  },
  {
    id: 'grano',
    tabTitle: 'Tamaño de Grano',
    icon: Minimize2,
    title: 'Refinamiento del tamaño de grano',
    description: 'Uno de los efectos más importantes es la reducción del tamaño de grano. Un grano más fino incrementa la resistencia del material, ya que dificulta el movimiento de dislocaciones dentro de la estructura cristalina.',
    diagramTitle: 'Comparación Microscópica: Grano Grueso vs Grano Fino'
  },
  {
    id: 'resistencia',
    tabTitle: 'Resistencia',
    icon: Activity,
    title: 'Aumento de la resistencia mecánica',
    description: 'La normalización mejora la capacidad del acero para soportar cargas sin sufrir deformaciones permanentes. Esto se debe al refinamiento estructural y a la distribución uniforme de fases en el material.',
    diagramTitle: 'Diagrama Esfuerzo-Deformación'
  },
  {
    id: 'tenacidad',
    tabTitle: 'Tenacidad',
    icon: Shield,
    title: 'Mejora de la tenacidad',
    description: 'El acero normalizado presenta mayor tenacidad, es decir, puede absorber más energía antes de fracturarse. Esto lo hace más resistente a impactos y fallas súbitas.',
    diagramTitle: 'Energía Absorbida en Ensayo de Impacto'
  },
  {
    id: 'uniformidad',
    tabTitle: 'Uniformidad',
    icon: LayoutGrid,
    title: 'Incremento de la uniformidad estructural',
    description: 'La normalización genera una estructura homogénea en toda la pieza, eliminando variaciones internas. Esto garantiza un comportamiento mecánico más predecible.',
    diagramTitle: 'Distribución Microestructural: Heterogénea vs Homogénea'
  },
  {
    id: 'tensiones',
    tabTitle: 'Tensiones',
    icon: Maximize,
    title: 'Eliminación de tensiones internas',
    description: 'El tratamiento reduce tensiones residuales generadas por procesos previos como fundición, laminado o soldadura. Esto disminuye el riesgo de deformaciones o fallas durante el uso.',
    diagramTitle: 'Alivio de Tensiones Residuales'
  },
  {
    id: 'recocido',
    tabTitle: 'Vs Recocido',
    icon: GitCompare,
    title: 'Comparación con el recocido',
    description: 'En comparación con el recocido, la normalización produce un material más duro y resistente, debido a su enfriamiento más rápido (al aire) y a la formación de una microestructura más fina.',
    diagramTitle: 'Tabla Comparativa: Normalización vs Recocido'
  },
  {
    id: 'temple',
    tabTitle: 'Vs Temple',
    icon: ArrowRight,
    title: 'Comparación con el temple',
    description: 'A diferencia del temple, la normalización no alcanza niveles extremos de dureza. Sin embargo, ofrece una mejor combinación entre resistencia y ductilidad, evitando fragilidad excesiva.',
    diagramTitle: 'Gráfico Comparativo: Dureza vs Ductilidad'
  },
  {
    id: 'equilibrio',
    tabTitle: 'Equilibrio Final',
    icon: Target,
    title: 'Equilibrio de propiedades finales',
    description: 'El resultado global de la normalización es un material con un balance adecuado entre resistencia, tenacidad y ductilidad. Esta combinación lo hace ideal para múltiples aplicaciones industriales y como etapa previa a otros tratamientos.',
    diagramTitle: 'Balance Multidimensional de Propiedades'
  }
];

// --- COMPONENTES BASE ---
interface CardProps {
  children: React.ReactNode;
  className?: string;
}
const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`grid bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

// --- COMPONENTES DE VISUALIZACIÓN ESPECÍFICOS ---

const IntroDiagram = () => (
  <div className="grid place-items-center h-full w-full bg-slate-50 p-6">
    <svg viewBox="0 0 600 300" className="w-full max-w-2xl h-auto drop-shadow-md">
      {/* Bloque Principal */}
      <rect x="200" y="20" width="200" height="60" rx="8" fill="#3b82f6" />
      <text x="300" y="55" fill="white" fontSize="18" fontWeight="bold" textAnchor="middle">Proceso de Normalización</text>
      
      {/* Flechas */}
      <path d="M 300 80 L 300 120" stroke="#64748b" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M 300 120 L 150 120 L 150 150" stroke="#64748b" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M 300 120 L 450 120 L 450 150" stroke="#64748b" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      
      {/* Bloques de Efecto */}
      <rect x="50" y="150" width="200" height="60" rx="8" fill="#10b981" />
      <text x="150" y="185" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">Cambios Microestructurales</text>

      <rect x="350" y="150" width="200" height="60" rx="8" fill="#f59e0b" />
      <text x="450" y="185" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">Mejora de Propiedades</text>
      
      {/* Definición de marcador de flecha */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
        </marker>
      </defs>
    </svg>
  </div>
);

const GrainDiagram = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full place-items-center p-6 bg-slate-50">
    <div className="grid gap-4 justify-items-center">
      <h4 className="text-slate-700 font-semibold">Grano Grueso (Sin Normalizar)</h4>
      <svg viewBox="0 0 200 200" className="w-48 h-48 border-4 border-slate-300 rounded-full bg-slate-200">
        <path d="M 0,100 Q 50,80 100,120 T 200,80 M 80,0 Q 100,50 80,100 T 120,200 M 100,120 Q 150,150 200,160" stroke="#475569" strokeWidth="4" fill="none" />
        <circle cx="50" cy="50" r="4" fill="#334155" />
        <circle cx="150" cy="40" r="4" fill="#334155" />
        <circle cx="60" cy="150" r="4" fill="#334155" />
        <circle cx="160" cy="140" r="4" fill="#334155" />
      </svg>
    </div>
    <div className="grid gap-4 justify-items-center">
      <h4 className="text-emerald-700 font-semibold">Grano Fino (Normalizado)</h4>
      <svg viewBox="0 0 200 200" className="w-48 h-48 border-4 border-emerald-400 rounded-full bg-emerald-50">
        <path d="M 0,40 Q 20,30 40,50 T 80,40 T 120,60 T 160,30 T 200,50 M 0,80 Q 30,90 60,70 T 120,90 T 180,80 T 200,100 M 0,120 Q 40,110 80,130 T 140,110 T 200,130 M 0,160 Q 50,150 100,170 T 150,150 T 200,170 M 40,0 L 50,200 M 80,0 L 90,200 M 120,0 L 110,200 M 160,0 L 170,200" stroke="#059669" strokeWidth="2" fill="none" opacity="0.6"/>
        <path d="M 20,0 L 30,200 M 60,0 L 70,200 M 100,0 L 110,200 M 140,0 L 130,200 M 180,0 L 190,200" stroke="#059669" strokeWidth="2" fill="none" opacity="0.6"/>
      </svg>
    </div>
  </div>
);

const ResistanceChart = () => {
  const data = [
    { def: 0, norm: 0, base: 0 },
    { def: 1, norm: 250, base: 180 },
    { def: 2, norm: 480, base: 320 },
    { def: 2.5, norm: 500, base: 340 }, // Punto de fluencia normalizado
    { def: 3, norm: 520, base: 350 }, // Punto de fluencia base
    { def: 4, norm: 540, base: 360 },
    { def: 5, norm: 560, base: 380 },
    { def: 6, norm: 550, base: 370 }, // Ruptura
  ];

  return (
    <div className="h-80 w-full p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
          <XAxis dataKey="def" label={{ value: 'Deformación (ε)', position: 'bottom' }} />
          <YAxis label={{ value: 'Esfuerzo (MPa)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
          <Line type="monotone" dataKey="norm" name="Acero Normalizado" stroke="#10b981" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="base" name="Acero Sin Tratar" stroke="#94a3b8" strokeWidth={3} dot={false} strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const ToughnessChart = () => {
  const data = [
    { name: 'Sin Normalizar', Energia: 25, fill: '#94a3b8' },
    { name: 'Normalizado', Energia: 85, fill: '#3b82f6' },
  ];

  return (
    <div className="h-80 w-full p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Energía Absorbida (Joules)', angle: -90, position: 'insideLeft' }} />
          <Tooltip cursor={{fill: 'transparent'}}/>
          <Bar dataKey="Energia" radius={[4, 4, 0, 0]} barSize={80} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const UniformityDiagram = () => {
  const cells = Array.from({ length: 100 }, (_, i) => i);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full place-items-center p-6 bg-slate-50">
      <div className="grid gap-4 justify-items-center w-full max-w-xs">
        <h4 className="text-slate-700 font-semibold">Estructura Heterogénea</h4>
        <div className="grid grid-cols-10 gap-1 w-full aspect-square border-2 border-slate-300 p-1 bg-white">
          {cells.map((i) => (
            <div key={`het-${i}`} className={`w-full h-full ${Math.random() > 0.5 ? 'bg-slate-300' : Math.random() > 0.5 ? 'bg-slate-700' : 'bg-slate-500'}`}></div>
          ))}
        </div>
      </div>
      <div className="grid gap-4 justify-items-center w-full max-w-xs">
        <h4 className="text-blue-700 font-semibold">Estructura Homogénea (Normalizada)</h4>
        <div className="grid grid-cols-10 gap-1 w-full aspect-square border-2 border-blue-300 p-1 bg-white">
          {cells.map((i) => (
             <div key={`hom-${i}`} className={`w-full h-full bg-blue-500 opacity-${Math.random() > 0.8 ? '90' : '100'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StressDiagram = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full place-items-center p-6 bg-slate-50">
    <div className="grid gap-4 justify-items-center">
      <h4 className="text-rose-600 font-semibold">Pieza con Tensiones Internas</h4>
      <svg viewBox="0 0 200 200" className="w-48 h-48 bg-white border border-slate-200 rounded-lg shadow-sm">
        <rect x="40" y="40" width="120" height="120" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="4" />
        {/* Flechas de tensión irregulares */}
        <path d="M 60 60 L 90 90" stroke="#e11d48" strokeWidth="3" markerEnd="url(#arrow-red)" />
        <path d="M 140 60 L 110 90" stroke="#e11d48" strokeWidth="3" markerEnd="url(#arrow-red)" />
        <path d="M 60 140 L 90 110" stroke="#e11d48" strokeWidth="3" markerEnd="url(#arrow-red)" />
        <path d="M 140 140 L 110 110" stroke="#e11d48" strokeWidth="3" markerEnd="url(#arrow-red)" />
        <path d="M 100 40 L 100 70" stroke="#e11d48" strokeWidth="3" markerEnd="url(#arrow-red)" />
      </svg>
    </div>
    <div className="grid gap-4 justify-items-center">
      <h4 className="text-teal-600 font-semibold">Pieza Normalizada (Aliviada)</h4>
      <svg viewBox="0 0 200 200" className="w-48 h-48 bg-white border border-slate-200 rounded-lg shadow-sm">
        <rect x="40" y="40" width="120" height="120" fill="#f0fdfa" stroke="#99f6e4" strokeWidth="4" />
        {/* Estructura cristalina relajada - pequeños puntos ordenados */}
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1.5" fill="#0d9488" opacity="0.4" />
        </pattern>
        <rect x="40" y="40" width="120" height="120" fill="url(#dots)" />
      </svg>
    </div>
    <defs>
      <marker id="arrow-red" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
        <polygon points="0 0, 6 2, 0 4" fill="#e11d48" />
      </marker>
    </defs>
  </div>
);

const ComparisonTable = () => (
  <div className="grid place-items-center p-6 h-full w-full overflow-x-auto">
    <table className="w-full max-w-2xl border-collapse bg-white shadow-sm border border-slate-200 text-left">
      <thead className="bg-slate-100 border-b border-slate-200">
        <tr>
          <th className="p-4 font-semibold text-slate-700">Característica</th>
          <th className="p-4 font-semibold text-blue-700">Normalización</th>
          <th className="p-4 font-semibold text-slate-500">Recocido (Completo)</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200">
        <tr className="hover:bg-slate-50 transition-colors">
          <td className="p-4 font-medium text-slate-700">Velocidad de Enfriamiento</td>
          <td className="p-4 text-blue-800 bg-blue-50/30">Media (al aire)</td>
          <td className="p-4 text-slate-600">Lenta (en horno)</td>
        </tr>
        <tr className="hover:bg-slate-50 transition-colors">
          <td className="p-4 font-medium text-slate-700">Tamaño de Grano Final</td>
          <td className="p-4 text-blue-800 bg-blue-50/30">Más Fino</td>
          <td className="p-4 text-slate-600">Más Grueso</td>
        </tr>
        <tr className="hover:bg-slate-50 transition-colors">
          <td className="p-4 font-medium text-slate-700">Dureza y Resistencia</td>
          <td className="p-4 text-blue-800 bg-blue-50/30">Mayor</td>
          <td className="p-4 text-slate-600">Menor</td>
        </tr>
        <tr className="hover:bg-slate-50 transition-colors">
          <td className="p-4 font-medium text-slate-700">Maquinabilidad</td>
          <td className="p-4 text-blue-800 bg-blue-50/30">Buena (aceros bajo/medio C)</td>
          <td className="p-4 text-slate-600">Mejor (aceros alto C)</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const TempleComparisonChart = () => {
  const data = [
    { Tratamiento: 'Recocido', Ductilidad: 90, Dureza: 30, size: 400, fill: '#94a3b8' },
    { Tratamiento: 'Normalización', Ductilidad: 65, Dureza: 60, size: 600, fill: '#3b82f6' },
    { Tratamiento: 'Temple', Ductilidad: 15, Dureza: 95, size: 400, fill: '#ef4444' },
  ];

  return (
    <div className="h-80 w-full p-4">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.4} />
          <XAxis type="number" dataKey="Ductilidad" name="Ductilidad" label={{ value: 'Ductilidad (%)', position: 'bottom' }} domain={[0, 100]} />
          <YAxis type="number" dataKey="Dureza" name="Dureza" label={{ value: 'Dureza (HRC aprox)', angle: -90, position: 'insideLeft' }} domain={[0, 100]} />
          <ZAxis type="number" dataKey="size" range={[200, 600]} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Tratamientos Térmicos" data={data}>
            {data.map((entry, index) => (
               <circle key={`cell-${index}`} cx={0} cy={0} r={10} fill={entry.fill} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

const BalanceRadarChart = () => {
  const data = [
    { subject: 'Resistencia', Base: 40, Normalizado: 75, fullMark: 100 },
    { subject: 'Dureza', Base: 30, Normalizado: 65, fullMark: 100 },
    { subject: 'Tenacidad', Base: 50, Normalizado: 85, fullMark: 100 },
    { subject: 'Ductilidad', Base: 80, Normalizado: 60, fullMark: 100 },
    { subject: 'Uniformidad', Base: 30, Normalizado: 90, fullMark: 100 },
    { subject: 'Estabilidad', Base: 40, Normalizado: 85, fullMark: 100 },
  ];

  return (
    <div className="h-80 w-full p-4">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#e2e8f0" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 12, fontWeight: 500 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar name="Acero Base" dataKey="Base" stroke="#94a3b8" fill="#cbd5e1" fillOpacity={0.4} />
          <Radar name="Acero Normalizado" dataKey="Normalizado" stroke="#3b82f6" fill="#60a5fa" fillOpacity={0.5} />
          <Legend verticalAlign="bottom" />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

const DiagramRender: React.FC<{ activeTabId: string }> = ({ activeTabId }) => {
  switch (activeTabId) {
    case 'intro': return <IntroDiagram />;
    case 'grano': return <GrainDiagram />;
    case 'resistencia': return <ResistanceChart />;
    case 'tenacidad': return <ToughnessChart />;
    case 'uniformidad': return <UniformityDiagram />;
    case 'tensiones': return <StressDiagram />;
    case 'recocido': return <ComparisonTable />;
    case 'temple': return <TempleComparisonChart />;
    case 'equilibrio': return <BalanceRadarChart />;
    default: return <IntroDiagram />;
  }
};

// --- LAYOUT PRINCIPAL ---
const LessonLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(lessonData[0].id);
  
  const currentSection = lessonData.find(s => s.id === activeTab) || lessonData[0];

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen bg-slate-100 font-sans text-slate-800">
      
      {/* HEADER & TABS NAVIGATION */}
      <header className="grid grid-rows-[auto_auto] bg-white border-b border-slate-200 shadow-sm sticky top-0 z-10">
        <div className="grid p-6 pb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Efectos de la Normalización del Acero
          </h1>
        
        </div>
        
        <nav className="grid grid-flow-col auto-cols-max gap-2 px-6 overflow-x-auto border-t border-slate-100 pt-2 pb-2 custom-scrollbar">
          {lessonData.map((section) => {
            const Icon = section.icon;
            const isActive = activeTab === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`grid grid-flow-col items-center gap-2 px-4 py-2.5 rounded-t-lg font-medium text-sm transition-all border-b-2
                  ${isActive 
                    ? 'border-blue-600 text-blue-700 bg-blue-50/50' 
                    : 'border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                type="button"
                aria-selected={isActive}
              >
                <Icon size={16} className={isActive ? 'text-blue-600' : 'text-slate-400'} />
                {section.tabTitle}
              </button>
            );
          })}
        </nav>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 lg:p-8 overflow-y-auto">
        
        {/* TEXT PANEL */}
        <section className="grid lg:col-span-4 content-start gap-6">
          <Card className="p-8 border-l-4 border-l-blue-600 h-full">
            <div className="grid gap-6">
              <div className="grid gap-2">
               
                <h2 className="text-2xl font-bold text-slate-900">
                  {currentSection.title}
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                {currentSection.description}
              </p>
            </div>
          </Card>
        </section>

        {/* DIAGRAM PANEL */}
        <section className="grid lg:col-span-8 content-start h-full min-h-[400px]">
          <Card className="grid grid-rows-[auto_1fr] h-full bg-white">
            <div className="grid p-6 border-b border-slate-100 bg-slate-50/50">
              <h3 className="text-lg font-semibold text-slate-800 grid grid-flow-col justify-start gap-2 items-center">
                <LayoutGrid size={18} className="text-slate-400" />
                {currentSection.diagramTitle}
              </h3>
            </div>
            <div className="grid place-items-center w-full h-full p-2 bg-white">
              <DiagramRender activeTabId={currentSection.id} />
            </div>
          </Card>
        </section>

      </main>
      
      {/* Estilos globales para la scrollbar de los tabs */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}} />
    </div>
  );
};

export default function App() {
  return <LessonLayout />;
}