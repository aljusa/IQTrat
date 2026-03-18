import React, { useState } from 'react';
import { Flame, Snowflake, ShieldAlert, GitCompare, Zap, Settings, ArrowRight, ArrowDown } from 'lucide-react';

// --- Types & Interfaces ---
interface LessonSection {
  id: string;
  tabLabel: string;
  icon: React.ReactNode;
  diagramTitle: string;
  description: string;
  renderComponent: React.FC;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface LessonLayoutProps {
  title: string;
  sections: LessonSection[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

// --- Data Visualization Components (Diagram Renders) ---

const AusteniteDiagram: React.FC = () => (
  <div className="grid place-items-center w-full h-full min-h-[300px] bg-red-50 rounded-xl border border-red-100 p-8">
    <div className="grid grid-rows-[auto_auto] gap-4 place-items-center p-8 bg-white shadow-lg rounded-2xl border-2 border-red-200 w-full max-w-md text-center">
      <h3 className="text-3xl font-extrabold text-red-600 tracking-tight">Austenita</h3>
      <div className="grid gap-2 place-items-center">
        <span className="bg-red-100 text-red-800 text-sm font-semibold px-4 py-1.5 rounded-full">
          Fase Inicial (Alta Temperatura)
        </span>
        <p className="text-slate-600 mt-2 font-medium">
          Alta capacidad de disolución de carbono en su estructura cristalina.
        </p>
      </div>
    </div>
  </div>
);

const TransformationDiagram: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 place-items-center w-full min-h-[300px] bg-slate-50 p-8 rounded-xl">
    {/* Austenita */}
    <div className="grid place-items-center p-6 bg-red-100 rounded-xl border-2 border-red-300 w-full aspect-square max-w-[200px] text-center shadow-md">
      <Flame className="w-12 h-12 text-red-500 mb-2" />
      <span className="font-bold text-red-700 text-lg">Austenita</span>
      <span className="text-xs text-red-600 mt-1">Alta T°</span>
    </div>

    {/* Flecha de Enfriamiento Rápido */}
    <div className="grid grid-rows-[auto_auto] place-items-center gap-2">
      <span className="text-blue-600 font-bold text-sm bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
        Enfriamiento Rápido
      </span>
      <div className="grid md:hidden place-items-center">
        <ArrowDown className="w-8 h-8 text-blue-500 animate-bounce" />
      </div>
      <div className="hidden md:grid place-items-center">
        <ArrowRight className="w-12 h-12 text-blue-500 animate-pulse" />
      </div>
      <Snowflake className="w-6 h-6 text-blue-400" />
    </div>

    {/* Martensita */}
    <div className="grid place-items-center p-6 bg-blue-100 rounded-xl border-2 border-blue-300 w-full aspect-square max-w-[200px] text-center shadow-md">
      <ShieldAlert className="w-12 h-12 text-blue-600 mb-2" />
      <span className="font-bold text-blue-800 text-lg">Martensita</span>
      <span className="text-xs text-blue-700 mt-1">Estructura Endurecida</span>
    </div>
  </div>
);

const MartensiteDiagram: React.FC = () => (
  <div className="grid place-items-center w-full min-h-[300px] bg-blue-50 p-8 rounded-xl border border-blue-100">
    <div className="grid grid-rows-[auto_1fr] gap-8 w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600">
      <h3 className="text-3xl font-black text-center text-slate-800 uppercase tracking-widest">Martensita</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="grid grid-rows-[auto_1fr] place-items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200 text-center">
          <div className="grid place-items-center w-12 h-12 bg-indigo-100 rounded-full">
            <ShieldAlert className="w-6 h-6 text-indigo-600" />
          </div>
          <span className="font-bold text-slate-800">Alta Dureza</span>
        </div>
        
        <div className="grid grid-rows-[auto_1fr] place-items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200 text-center">
          <div className="grid place-items-center w-12 h-12 bg-orange-100 rounded-full">
            <GitCompare className="w-6 h-6 text-orange-600" />
          </div>
          <span className="font-bold text-slate-800">Baja Ductilidad</span>
        </div>
        
        <div className="grid grid-rows-[auto_1fr] place-items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200 text-center">
          <div className="grid place-items-center w-12 h-12 bg-red-100 rounded-full">
            <Zap className="w-6 h-6 text-red-600" />
          </div>
          <span className="font-bold text-slate-800">Tendencia a Fragilidad</span>
        </div>
      </div>
    </div>
  </div>
);

const ComparisonDiagram: React.FC = () => (
  <div className="grid place-items-center w-full min-h-[300px]">
    <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-3xl rounded-xl overflow-hidden shadow-lg border border-slate-200">
      {/* Austenita Column */}
      <div className="grid grid-rows-[auto_1fr] bg-red-50 p-6">
        <h4 className="text-xl font-bold text-red-700 border-b-2 border-red-200 pb-3 mb-4 text-center">Austenita</h4>
        <ul className="grid gap-4 text-sm text-slate-700">
          <li className="grid grid-cols-[auto_1fr] gap-3 items-start">
            <span className="grid place-items-center w-5 h-5 rounded-full bg-red-200 text-red-800 text-xs font-bold mt-0.5">1</span>
            <span>Estable a altas temperaturas.</span>
          </li>
          <li className="grid grid-cols-[auto_1fr] gap-3 items-start">
            <span className="grid place-items-center w-5 h-5 rounded-full bg-red-200 text-red-800 text-xs font-bold mt-0.5">2</span>
            <span>Permite redistribuir grandes cantidades de carbono.</span>
          </li>
          <li className="grid grid-cols-[auto_1fr] gap-3 items-start">
            <span className="grid place-items-center w-5 h-5 rounded-full bg-red-200 text-red-800 text-xs font-bold mt-0.5">3</span>
            <span>Estructura base (punto de partida).</span>
          </li>
        </ul>
      </div>

      {/* Martensita Column */}
      <div className="grid grid-rows-[auto_1fr] bg-blue-50 p-6">
        <h4 className="text-xl font-bold text-blue-800 border-b-2 border-blue-200 pb-3 mb-4 text-center">Martensita</h4>
        <ul className="grid gap-4 text-sm text-slate-700">
          <li className="grid grid-cols-[auto_1fr] gap-3 items-start">
            <span className="grid place-items-center w-5 h-5 rounded-full bg-blue-200 text-blue-800 text-xs font-bold mt-0.5">1</span>
            <span>Generada por enfriamiento brusco.</span>
          </li>
          <li className="grid grid-cols-[auto_1fr] gap-3 items-start">
            <span className="grid place-items-center w-5 h-5 rounded-full bg-blue-200 text-blue-800 text-xs font-bold mt-0.5">2</span>
            <span>Estructura sobresaturada de carbono, no hay tiempo para redistribución.</span>
          </li>
          <li className="grid grid-cols-[auto_1fr] gap-3 items-start">
            <span className="grid place-items-center w-5 h-5 rounded-full bg-blue-200 text-blue-800 text-xs font-bold mt-0.5">3</span>
            <span>Altamente endurecida y con tensiones internas.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const StressDiagram: React.FC = () => (
  <div className="grid place-items-center w-full min-h-[300px] bg-slate-900 p-8 rounded-xl relative overflow-hidden">
    <div className="grid place-items-center relative w-64 h-64 bg-slate-700 rounded-sm border-4 border-slate-500 shadow-2xl z-10">
      <span className="text-slate-300 font-bold tracking-widest uppercase mb-8">Pieza de Acero</span>
      
      {/* Flechas de Tensión Interna - Utilizando Grid para el posicionamiento */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 w-full px-4">
          <div className="grid place-items-end"><ArrowRight className="text-red-500 w-8 h-8" /></div>
          <div className="w-4 h-4 rounded-full bg-red-500 animate-ping"></div>
          <div className="grid place-items-start"><ArrowRight className="text-red-500 w-8 h-8 rotate-180" /></div>
        </div>
      </div>
      
      <div className="absolute inset-0 grid place-items-center pointer-events-none rotate-90">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 w-full px-4">
          <div className="grid place-items-end"><ArrowRight className="text-orange-500 w-8 h-8" /></div>
          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
          <div className="grid place-items-start"><ArrowRight className="text-orange-500 w-8 h-8 rotate-180" /></div>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-6 left-0 right-0 grid place-items-center">
       <span className="bg-red-500/20 text-red-200 px-4 py-1.5 rounded-full text-sm font-medium border border-red-500/30 backdrop-blur-sm">
         Contracción desigual = Tensiones Acumuladas
       </span>
    </div>
  </div>
);

const TemperingDiagram: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 place-items-center w-full min-h-[300px] bg-purple-50 p-8 rounded-xl border border-purple-100">
     {/* Fase Temple */}
     <div className="grid grid-rows-[auto_1fr] gap-3 place-items-center p-6 bg-white rounded-xl border-2 border-slate-300 shadow-sm w-full max-w-[220px] text-center">
      <Zap className="w-10 h-10 text-slate-700" />
      <span className="font-bold text-slate-800 text-lg">Temple</span>
      <p className="text-xs text-slate-500 leading-tight">Máxima dureza,<br/>alta fragilidad y tensiones.</p>
    </div>

    {/* Flecha de Proceso */}
    <div className="grid grid-rows-[auto_auto] place-items-center gap-2">
      <span className="text-purple-700 font-bold text-xs bg-purple-200 px-3 py-1 rounded-full uppercase tracking-wider text-center">
        Tratamiento Térmico<br/>Posterior (Calentamiento leve)
      </span>
      <div className="grid md:hidden place-items-center">
        <ArrowDown className="w-6 h-6 text-purple-500" />
      </div>
      <div className="hidden md:grid place-items-center">
        <ArrowRight className="w-8 h-8 text-purple-500" />
      </div>
    </div>

    {/* Fase Revenido */}
    <div className="grid grid-rows-[auto_1fr] gap-3 place-items-center p-6 bg-purple-100 rounded-xl border-2 border-purple-400 shadow-md w-full max-w-[220px] text-center">
      <Settings className="w-10 h-10 text-purple-700" />
      <span className="font-bold text-purple-900 text-lg">Revenido</span>
      <p className="text-xs text-purple-700 leading-tight">Dureza conservada,<br/>fragilidad y tensiones reducidas.</p>
    </div>
  </div>
);


// --- Content Data ---
const lessonSections: LessonSection[] = [
  {
    id: 'austenita',
    tabLabel: '1. Austenita',
    icon: <Flame className="w-4 h-4" />,
    diagramTitle: 'Formación de la Austenita',
    description: 'Durante el calentamiento del acero, su estructura puede transformarse en austenita, una fase capaz de disolver más carbono que otras estructuras del acero a temperatura ambiente. Esta fase es esencial porque constituye el punto de partida microestructural del temple.',
    renderComponent: AusteniteDiagram,
  },
  {
    id: 'transformacion',
    tabLabel: '2. Transformación',
    icon: <Snowflake className="w-4 h-4" />,
    diagramTitle: 'Cinética de Enfriamiento',
    description: 'La austenita es importante porque su transformación posterior depende de la velocidad de enfriamiento. Si el enfriamiento es suficientemente rápido, no da tiempo a que se formen estructuras de equilibrio y aparece una fase mucho más dura: la martensita.',
    renderComponent: TransformationDiagram,
  },
  {
    id: 'martensita',
    tabLabel: '3. Martensita',
    icon: <ShieldAlert className="w-4 h-4" />,
    diagramTitle: 'Propiedades de la Martensita',
    description: 'La martensita es la microestructura característica del acero templado. Se distingue por su alta dureza, pero también por su baja ductilidad y su tendencia a la fragilidad si no se complementa con tratamientos posteriores.',
    renderComponent: MartensiteDiagram,
  },
  {
    id: 'comparacion',
    tabLabel: '4. Comparación',
    icon: <GitCompare className="w-4 h-4" />,
    diagramTitle: 'Austenita vs Martensita',
    description: 'La austenita y la martensita representan estados muy distintos del acero: la primera es estable a alta temperatura y permite redistribuir carbono, mientras que la segunda es una estructura endurecida generada por el enfriamiento brusco. Compararlas ayuda a entender por qué el temple cambia tanto las propiedades del material.',
    renderComponent: ComparisonDiagram,
  },
  {
    id: 'tensiones',
    tabLabel: '5. Tensiones',
    icon: <Zap className="w-4 h-4" />,
    diagramTitle: 'Generación de Tensiones Internas',
    description: 'El enfriamiento rápido también genera tensiones internas, porque las distintas zonas de la pieza pueden contraerse de manera desigual. Estas tensiones explican la aparición de deformaciones o grietas cuando el temple no se controla adecuadamente.',
    renderComponent: StressDiagram,
  },
  {
    id: 'revenido',
    tabLabel: '6. Revenido',
    icon: <Settings className="w-4 h-4" />,
    diagramTitle: 'Ajuste de Propiedades',
    description: 'Debido a la fragilidad y a las tensiones residuales que puede dejar el temple, en la práctica industrial suele aplicarse después un revenido. Esto permite conservar parte de la dureza obtenida, reduciendo al mismo tiempo la fragilidad del acero.',
    renderComponent: TemperingDiagram,
  }
];

// --- Core UI Components ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`grid bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

const LessonLayout: React.FC<LessonLayoutProps> = ({ title, sections, activeTab, onTabChange }) => {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen bg-slate-100 font-sans w-full">
      {/* Header & Navigation */}
      <header className="grid grid-rows-[auto_auto] bg-slate-900 text-white shadow-md sticky top-0 z-50">
        <div className="grid p-6 place-content-center border-b border-slate-800">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-center">{title}</h1>
        </div>
        
        {/* Navigation Tabs - Strict Grid Implementation */}
        <nav className="grid grid-flow-col auto-cols-fr overflow-x-auto overflow-y-hidden border-b-4 border-slate-900">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => onTabChange(index)}
              className={`grid grid-cols-[auto_1fr] gap-2 place-content-center p-4 text-sm font-semibold transition-all whitespace-nowrap border-b-4 ${
                activeTab === index 
                  ? 'bg-slate-800 border-blue-500 text-white' 
                  : 'bg-slate-900 border-transparent text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <div className="grid place-items-center">{section.icon}</div>
              <span>{section.tabLabel}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="grid place-items-start p-4 md:p-8 overflow-y-auto">
        <div className="grid w-full max-w-5xl mx-auto">
          <Card>
            {/* Header section of the Card */}
            <div className="grid grid-rows-[auto_auto] gap-4 p-8 border-b border-slate-100 bg-white">
              <h2 className="text-3xl font-bold text-slate-800 tracking-tight">
                {sections[activeTab].diagramTitle}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                {sections[activeTab].description}
              </p>
            </div>
            
            {/* Render Component Area */}
            <div className="grid place-items-center p-4 md:p-8 bg-slate-50">
              {React.createElement(sections[activeTab].renderComponent)}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <LessonLayout 
      title="Cambios Microestructurales en el Temple"
      sections={lessonSections}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );
}