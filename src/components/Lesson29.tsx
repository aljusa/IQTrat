import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend
} from 'recharts';
import { LayoutGrid, Layers, Settings, ArrowRight, TrendingUp, ShieldAlert, Globe } from 'lucide-react';

// --- TIPOS E INTERFACES ---

type SectionId = 
  | 'intro' | 'estructurales' | 'mecanicos' | 'engranajes' | 'preparacion' 
  | 'costo' | 'simplicidad' | 'mejora' | 'dureza' | 'material' | 'global';

interface LessonSection {
  id: SectionId;
  tabTitle: string;
  diagramTitle: string;
  description: string;
  icon: React.ReactNode;
}

interface LayoutProps {
  children: React.ReactNode;
  activeSection: SectionId;
  sections: LessonSection[];
  onTabChange: (id: SectionId) => void;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

// --- DATOS DE LA LECCIÓN ---

const LESSON_DATA: LessonSection[] = [
  {
    id: 'intro',
    tabTitle: 'Introducción',
    diagramTitle: 'Distribución Industrial de la Normalización',
    description: 'La normalización es un tratamiento térmico ampliamente utilizado en la industria metalúrgica debido a su capacidad para mejorar las propiedades del acero con un costo relativamente bajo. Su aplicación abarca múltiples sectores donde se requiere un equilibrio entre resistencia, uniformidad y confiabilidad.',
    icon: <Globe className="w-4 h-4" />
  },
  {
    id: 'estructurales',
    tabTitle: 'Estructurales',
    diagramTitle: 'Aplicación en Piezas Estructurales',
    description: 'La normalización se emplea en la fabricación de componentes estructurales que requieren buena resistencia mecánica y uniformidad interna, como vigas, perfiles y soportes.',
    icon: <LayoutGrid className="w-4 h-4" />
  },
  {
    id: 'mecanicos',
    tabTitle: 'Mecánicos',
    diagramTitle: 'Componentes Sometidos a Esfuerzo',
    description: 'Muchos componentes mecánicos sometidos a esfuerzos constantes, como bielas o soportes, son normalizados para mejorar su desempeño y durabilidad en servicio.',
    icon: <Settings className="w-4 h-4" />
  },
  {
    id: 'engranajes',
    tabTitle: 'Engranajes y Ejes',
    diagramTitle: 'Transmisión de Movimiento y Carga',
    description: 'Los engranajes y ejes requieren una combinación de resistencia y tenacidad. La normalización permite obtener propiedades adecuadas para la transmisión de movimiento y carga sin comprometer la integridad del material.',
    icon: <Settings className="w-4 h-4" />
  },
  {
    id: 'preparacion',
    tabTitle: 'Preparación',
    diagramTitle: 'Secuencia de Tratamientos Térmicos',
    description: 'La normalización se utiliza frecuentemente como tratamiento previo al temple o al revenido. Al homogeneizar la estructura del acero, mejora la efectividad de los tratamientos posteriores.',
    icon: <Layers className="w-4 h-4" />
  },
  {
    id: 'costo',
    tabTitle: 'Bajo Costo',
    diagramTitle: 'Comparativa de Costos Operativos',
    description: 'Uno de los principales beneficios de la normalización es su bajo costo operativo, ya que no requiere equipos sofisticados ni medios especiales de enfriamiento.',
    icon: <TrendingUp className="w-4 h-4" />
  },
  {
    id: 'simplicidad',
    tabTitle: 'Simplicidad',
    diagramTitle: 'Ciclo Térmico Simplificado',
    description: 'El proceso de normalización es relativamente sencillo de aplicar, lo que facilita su implementación en diversos entornos industriales sin necesidad de alta complejidad técnica.',
    icon: <TrendingUp className="w-4 h-4" />
  },
  {
    id: 'mejora',
    tabTitle: 'Mejora Integral',
    diagramTitle: 'Optimización de Propiedades Mecánicas',
    description: 'La normalización mejora de forma general la calidad del acero, optimizando su estructura interna y sus propiedades mecánicas sin generar fragilidad excesiva.',
    icon: <TrendingUp className="w-4 h-4" />
  },
  {
    id: 'dureza',
    tabTitle: 'Limitación: Dureza',
    diagramTitle: 'Escala Comparativa de Dureza',
    description: 'Este tratamiento no permite alcanzar niveles de dureza muy altos, por lo que no es adecuado en aplicaciones donde se requiere máxima resistencia al desgaste.',
    icon: <ShieldAlert className="w-4 h-4" />
  },
  {
    id: 'material',
    tabTitle: 'Limitación: Material',
    diagramTitle: 'Aptitud según el Tipo de Acero',
    description: 'No todos los aceros responden de la misma manera a la normalización. Algunos aceros especiales requieren tratamientos térmicos más específicos para alcanzar propiedades deseadas.',
    icon: <ShieldAlert className="w-4 h-4" />
  },
  {
    id: 'global',
    tabTitle: 'Importancia Global',
    diagramTitle: 'El Equilibrio de la Normalización',
    description: 'La normalización es un proceso versátil que mejora significativamente la calidad del acero y facilita su uso en múltiples aplicaciones industriales. Su equilibrio entre eficiencia, costo y resultados la convierte en una herramienta clave en la ingeniería de materiales.',
    icon: <Globe className="w-4 h-4" />
  }
];

// --- COMPONENTES BASE (LAYOUT & UI) ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-md border border-slate-200 grid ${className}`}>
    {children}
  </div>
);

const LessonLayout: React.FC<LayoutProps> = ({ children, activeSection, sections, onTabChange }) => {
  return (
    <div className="min-h-screen bg-slate-50 grid grid-rows-[auto_1fr] font-sans text-slate-800">
      {/* HEADER WITH NAV - CSS GRID ONLY */}
      <header className="bg-slate-900 text-white grid grid-rows-[auto_auto] shadow-lg sticky top-0 z-10">
        <div className="p-5 grid gap-1 border-b border-slate-700">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Aplicaciones de la Normalización</h1>
          <p className="text-slate-400 text-sm">Tratamientos Térmicos del Acero</p>
        </div>
        
        {/* TABS NAVIGATION - HORIZONTAL GRID */}
        <nav className="grid grid-flow-col auto-cols-max overflow-x-auto p-2 gap-2 custom-scrollbar bg-slate-800/50">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onTabChange(section.id)}
              className={`
                grid grid-flow-col gap-2 place-items-center px-4 py-3 rounded-md text-sm font-medium transition-all whitespace-nowrap
                ${activeSection === section.id 
                  ? 'bg-blue-600 text-white shadow-inner' 
                  : 'bg-transparent text-slate-300 hover:bg-slate-700 hover:text-white'}
              `}
            >
              {section.icon}
              {section.tabTitle}
            </button>
          ))}
        </nav>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="p-4 md:p-8 grid place-items-start max-w-6xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
};

// --- COMPONENTES DE VISUALIZACIÓN (DIAGRAM RENDERERS) ---

const DiagramRender: React.FC<{ sectionId: SectionId }> = ({ sectionId }) => {
  // Contenedor principal del diagrama usando CSS Grid
  const renderWrapper = (content: React.ReactNode) => (
    <div className="h-80 md:h-[400px] w-full grid place-items-center bg-slate-50/50 rounded-lg border border-slate-100 p-4">
      {content}
    </div>
  );

  switch (sectionId) {
    case 'intro':
      const pieData = [
        { name: 'Construcción', value: 45, color: '#3b82f6' },
        { name: 'Maquinaria', value: 35, color: '#10b981' },
        { name: 'Manufactura', value: 20, color: '#6366f1' }
      ];
      return renderWrapper(
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={120} paddingAngle={5} dataKey="value">
              {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
            </Pie>
            <RechartsTooltip formatter={(value) => `${value}%`} />
            <Legend verticalAlign="bottom" height={36}/>
          </PieChart>
        </ResponsiveContainer>
      );

    case 'estructurales':
      return renderWrapper(
        <svg viewBox="0 0 400 300" className="w-full h-full max-w-md">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
            </pattern>
            <linearGradient id="metal" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#grid)" />
          {/* Viga I */}
          <g transform="translate(100, 50)">
            <path d="M 0 0 H 200 V 20 H 120 V 160 H 200 V 180 H 0 V 160 H 80 V 20 H 0 Z" fill="url(#metal)" stroke="#475569" strokeWidth="2"/>
            {/* Indicadores de resistencia */}
            <path d="M 100 -20 V -40 M 80 -30 L 100 -20 L 120 -30" fill="none" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrow)"/>
            <text x="100" y="-50" textAnchor="middle" fill="#ef4444" fontSize="14" fontWeight="bold">Carga Uniforme</text>
            <circle cx="100" cy="90" r="40" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5"/>
            <text x="100" y="95" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">Estructura Homogénea</text>
          </g>
        </svg>
      );

    case 'mecanicos':
      return renderWrapper(
        <svg viewBox="0 0 400 300" className="w-full h-full max-w-md">
          <rect width="400" height="300" fill="#f8fafc" rx="8" />
          {/* Biela estilizada */}
          <g transform="translate(100, 150) rotate(-15)">
            <circle cx="0" cy="0" r="30" fill="#cbd5e1" stroke="#475569" strokeWidth="4"/>
            <circle cx="0" cy="0" r="15" fill="#f1f5f9" stroke="#475569" strokeWidth="2"/>
            <rect x="25" y="-15" width="150" height="30" fill="#cbd5e1" stroke="#475569" strokeWidth="4"/>
            <circle cx="200" cy="0" r="40" fill="#cbd5e1" stroke="#475569" strokeWidth="4"/>
            <circle cx="200" cy="0" r="25" fill="#f1f5f9" stroke="#475569" strokeWidth="2"/>
            
            {/* Esfuerzos */}
            <path d="M -40 0 H -70 M -55 -10 L -40 0 L -55 10" fill="none" stroke="#ef4444" strokeWidth="3"/>
            <path d="M 250 0 H 280 M 265 -10 L 280 0 L 265 10" fill="none" stroke="#ef4444" strokeWidth="3"/>
            <text x="100" y="-30" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="bold">Fatiga Cíclica</text>
          </g>
        </svg>
      );

    case 'engranajes':
      return renderWrapper(
        <svg viewBox="0 0 400 300" className="w-full h-full max-w-md">
          <g transform="translate(150, 150)">
            <circle cx="0" cy="0" r="60" fill="#94a3b8" stroke="#334155" strokeWidth="3" strokeDasharray="20,10"/>
            <circle cx="0" cy="0" r="20" fill="#f1f5f9" stroke="#334155" strokeWidth="2"/>
            <text x="0" y="-75" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">Tenacidad Interna</text>
          </g>
          <g transform="translate(260, 150)">
             <circle cx="0" cy="0" r="40" fill="#cbd5e1" stroke="#334155" strokeWidth="3" strokeDasharray="15,8"/>
             <circle cx="0" cy="0" r="15" fill="#f1f5f9" stroke="#334155" strokeWidth="2"/>
          </g>
          {/* Highlight Contact Zone */}
          <circle cx="210" cy="150" r="25" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="2" strokeDasharray="4"/>
          <text x="210" y="110" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold">Zona de Desgaste</text>
        </svg>
      );

    case 'preparacion':
      return renderWrapper(
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 w-full px-8 place-items-center">
          <div className="bg-blue-100 border-2 border-blue-500 rounded-lg p-4 grid gap-2 place-items-center w-full text-center">
            <span className="font-bold text-blue-800">Normalizado</span>
            <span className="text-xs text-blue-600">Homogeneiza el grano</span>
          </div>
          <ArrowRight className="text-slate-400 w-8 h-8" />
          <div className="bg-orange-100 border-2 border-orange-500 rounded-lg p-4 grid gap-2 place-items-center w-full text-center">
            <span className="font-bold text-orange-800">Temple</span>
            <span className="text-xs text-orange-600">Aumenta dureza</span>
          </div>
          <ArrowRight className="text-slate-400 w-8 h-8" />
          <div className="bg-emerald-100 border-2 border-emerald-500 rounded-lg p-4 grid gap-2 place-items-center w-full text-center">
            <span className="font-bold text-emerald-800">Revenido</span>
            <span className="text-xs text-emerald-600">Ajusta tenacidad</span>
          </div>
        </div>
      );

    case 'costo':
      const costData = [
        { name: 'Normalizado', costo: 30, color: '#3b82f6' },
        { name: 'Recocido', costo: 45, color: '#f59e0b' },
        { name: 'Temple + Revenido', costo: 85, color: '#ef4444' },
      ];
      return renderWrapper(
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={costData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Índice de Costo Relativo', angle: -90, position: 'insideLeft' }} />
            <RechartsTooltip cursor={{fill: 'transparent'}} />
            <Bar dataKey="costo" radius={[4, 4, 0, 0]}>
              {costData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      );

    case 'simplicidad':
      const tempProfile = [
        { time: 0, temp: 20 },
        { time: 2, temp: 900 },
        { time: 4, temp: 900 },
        { time: 8, temp: 20 },
      ];
      return renderWrapper(
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={tempProfile} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" label={{ value: 'Tiempo (Horas)', position: 'insideBottom', offset: -10 }} />
            <YAxis domain={[0, 1000]} label={{ value: 'Temperatura (°C)', angle: -90, position: 'insideLeft' }} />
            <RechartsTooltip />
            <Line type="monotone" dataKey="temp" stroke="#ef4444" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
            {/* Custom annotations could go here, simulating with CSS grid instead outside if needed */}
          </LineChart>
        </ResponsiveContainer>
      );

    case 'mejora':
      const radarData = [
        { subject: 'Resistencia', original: 50, normalizado: 80 },
        { subject: 'Tenacidad', original: 40, normalizado: 75 },
        { subject: 'Maquinabilidad', original: 60, normalizado: 85 },
        { subject: 'Uniformidad', original: 30, normalizado: 90 },
        { subject: 'Dureza', original: 45, normalizado: 65 },
      ];
      return renderWrapper(
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar name="Acero Bruto" dataKey="original" stroke="#94a3b8" fill="#cbd5e1" fillOpacity={0.5} />
            <Radar name="Acero Normalizado" dataKey="normalizado" stroke="#3b82f6" fill="#60a5fa" fillOpacity={0.6} />
            <Legend />
            <RechartsTooltip />
          </RadarChart>
        </ResponsiveContainer>
      );

    case 'dureza':
      const durezaData = [
        { name: 'Recocido', dureza: 150 },
        { name: 'Normalizado', dureza: 200 },
        { name: 'Temple', dureza: 600 },
      ];
      return renderWrapper(
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={durezaData} layout="vertical" margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" domain={[0, 700]} label={{ value: 'Dureza Brinell (HB aprox.)', position: 'insideBottom', offset: -5 }} />
            <YAxis type="category" dataKey="name" />
            <RechartsTooltip cursor={{fill: '#f1f5f9'}} />
            <Bar dataKey="dureza" fill="#6366f1" radius={[0, 4, 4, 0]} barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      );

    case 'material':
      return renderWrapper(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4 h-full content-center">
          <div className="grid grid-rows-[auto_1fr] gap-2 p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-center">
            <h4 className="font-bold text-emerald-800">Acero Bajo Carbono</h4>
            <p className="text-sm text-emerald-600 self-center">Excelente respuesta. Refina el grano estructural.</p>
          </div>
          <div className="grid grid-rows-[auto_1fr] gap-2 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <h4 className="font-bold text-blue-800">Acero Medio Carbono</h4>
            <p className="text-sm text-blue-600 self-center">Ideal. Equilibra resistencia y maquinabilidad.</p>
          </div>
          <div className="grid grid-rows-[auto_1fr] gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
            <h4 className="font-bold text-red-800">Acero Alta Aleación</h4>
            <p className="text-sm text-red-600 self-center">Limitado. Puede templarse al aire en lugar de normalizarse.</p>
          </div>
        </div>
      );

    case 'global':
      return renderWrapper(
        <div className="grid place-items-center w-full h-full relative">
           <div className="w-32 h-32 bg-blue-600 text-white rounded-full grid place-items-center text-center font-bold z-10 shadow-lg p-4">
             Normalización
           </div>
           {/* Nodos Conectados simulados con CSS Grid absoluto */}
           <div className="absolute top-10 left-10 md:left-32 bg-white p-2 text-sm rounded shadow border border-slate-200 font-semibold text-slate-700">Eficiencia</div>
           <div className="absolute bottom-10 left-10 md:left-32 bg-white p-2 text-sm rounded shadow border border-slate-200 font-semibold text-slate-700">Bajo Costo</div>
           <div className="absolute top-10 right-10 md:right-32 bg-white p-2 text-sm rounded shadow border border-slate-200 font-semibold text-slate-700">Resistencia</div>
           <div className="absolute bottom-10 right-10 md:right-32 bg-white p-2 text-sm rounded shadow border border-slate-200 font-semibold text-slate-700">Versatilidad</div>
           {/* Conectores SVG de fondo */}
           <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
             <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4"/>
             <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4"/>
             <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4"/>
             <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4"/>
           </svg>
        </div>
      );

    default:
      return null;
  }
};

// --- APLICACIÓN PRINCIPAL ---

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('intro');

  const currentSectionData = LESSON_DATA.find(s => s.id === activeSection)!;

  return (
    <LessonLayout 
      sections={LESSON_DATA} 
      activeSection={activeSection} 
      onTabChange={setActiveSection}
    >
      {/* El contenedor principal del contenido usa CSS Grid exclusivamente 
        definiendo una única columna para mantener la estructura vertical 
      */}
      <div className="grid grid-cols-1 gap-6 w-full animate-in fade-in zoom-in-95 duration-300">
        
        {/* PANEL DE EXPLICACIÓN (TEXTO) */}
        <Card className="grid-rows-[auto_auto] gap-4">
          <div className="grid gap-2 border-b border-slate-100 pb-4">
             <h2 className="text-2xl font-bold text-slate-800">{currentSectionData.diagramTitle}</h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-lg">
            {currentSectionData.description}
          </p>
        </Card>

        {/* PANEL DEL DIAGRAMA */}
        <Card className="grid-rows-[auto_1fr] gap-4 h-full min-h-[400px]">
         
          <div className="grid place-items-center w-full h-full">
            <DiagramRender sectionId={currentSectionData.id} />
          </div>
        </Card>
        
      </div>
    </LessonLayout>
  );
}