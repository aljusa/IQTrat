import React, { useState } from 'react';
import { Thermometer, Layers, Clock, Shield, Settings, Activity } from 'lucide-react';

// --- TIPOS E INTERFACES ---

interface LessonSection {
  id: string;
  tabTitle: string;
  icon: React.ReactNode;
  diagramTitle: string;
  diagramDescription: string;
  RenderComponent: React.FC;
}

// --- COMPONENTES BASE ---

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`grid bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

// --- COMPONENTES DE DIAGRAMAS (RENDER COMPONENTS) ---

const Diagram1Concepto: React.FC = () => (
  <div className="grid w-full h-full min-h-[400px] place-items-center bg-slate-50 p-4">
    <svg viewBox="0 0 400 300" className="w-full max-w-lg drop-shadow-sm">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
        </marker>
      </defs>
      {/* Líneas conectoras */}
      <line x1="200" y1="150" x2="200" y2="50" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="200" y1="150" x2="80" y2="220" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="200" y1="150" x2="320" y2="220" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
      
      {/* Nodos exteriores */}
      <circle cx="200" cy="50" r="40" fill="#fff" stroke="#ef4444" strokeWidth="3" />
      <text x="200" y="55" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">Calentamiento</text>
      
      <circle cx="80" cy="220" r="40" fill="#fff" stroke="#f59e0b" strokeWidth="3" />
      <text x="80" y="225" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">Permanencia</text>
      
      <circle cx="320" cy="220" r="40" fill="#fff" stroke="#3b82f6" strokeWidth="3" />
      <text x="320" y="220" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">Enfriamiento</text>
      <text x="320" y="235" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">Rápido</text>

      {/* Nodo Central */}
      <rect x="140" y="120" width="120" height="60" rx="8" fill="#1e293b" />
      <text x="200" y="155" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold">TEMPLE</text>
    </svg>
  </div>
);

const Diagram2Proposito: React.FC = () => (
  <div className="grid w-full h-full min-h-[400px] place-items-center bg-slate-50 p-4">
    <svg viewBox="0 0 500 350" className="w-full max-w-xl">
      <defs>
        <marker id="arrow2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
        </marker>
      </defs>
      
      {/* Nivel 1 a 2 */}
      <line x1="250" y1="60" x2="250" y2="120" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow2)" />
      
      {/* Nivel 2 a 3 */}
      <path d="M 250 180 L 250 220 L 100 220 L 100 250" fill="none" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow2)" />
      <path d="M 250 180 L 250 250" fill="none" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow2)" />
      <path d="M 250 180 L 250 220 L 400 220 L 400 250" fill="none" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow2)" />

      {/* Cajas Nivel 1 */}
      <rect x="180" y="20" width="140" height="40" rx="6" fill="#1e293b" />
      <text x="250" y="45" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">Proceso: Temple</text>

      {/* Cajas Nivel 2 */}
      <rect x="150" y="120" width="200" height="60" rx="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2"/>
      <text x="250" y="155" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="bold">Alteración de</text>
      <text x="250" y="172" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="bold">Microestructura</text>

      {/* Cajas Nivel 3 */}
      <rect x="40" y="250" width="120" height="50" rx="6" fill="#ecfdf5" stroke="#10b981" strokeWidth="2"/>
      <text x="100" y="280" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">Mayor Dureza</text>

      <rect x="190" y="250" width="120" height="50" rx="6" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2"/>
      <text x="250" y="273" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">Resistencia</text>
      <text x="250" y="288" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">Mecánica</text>

      <rect x="340" y="250" width="120" height="50" rx="6" fill="#fef2f2" stroke="#ef4444" strokeWidth="2"/>
      <text x="400" y="273" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="bold">Resistencia</text>
      <text x="400" y="288" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="bold">al Desgaste</text>
    </svg>
  </div>
);

const Diagram3Etapas: React.FC = () => (
  <div className="grid w-full h-full min-h-[400px] place-items-center bg-slate-50 p-4">
    <div className="grid w-full max-w-2xl relative">
      <svg viewBox="0 0 600 300" className="w-full">
        {/* Ejes */}
        <line x1="50" y1="250" x2="550" y2="250" stroke="#94a3b8" strokeWidth="2" />
        <line x1="50" y1="250" x2="50" y2="30" stroke="#94a3b8" strokeWidth="2" />
        <text x="30" y="40" fill="#64748b" fontSize="12" transform="rotate(-90 30 40)">Temperatura (°C)</text>
        <text x="500" y="270" fill="#64748b" fontSize="12">Tiempo (t)</text>

        {/* Gráfico de línea */}
        <path d="M 50 250 L 200 80 L 400 80 L 450 250" fill="none" stroke="#ef4444" strokeWidth="4" />
        
        {/* Áreas sombreadas o indicativas */}
        <rect x="50" y="80" width="150" height="170" fill="#fca5a5" opacity="0.2" />
        <rect x="200" y="80" width="200" height="170" fill="#fcd34d" opacity="0.2" />
        <rect x="400" y="80" width="50" height="170" fill="#93c5fd" opacity="0.2" />

        {/* Textos de etapas */}
        <text x="125" y="160" textAnchor="middle" fill="#b91c1c" fontSize="14" fontWeight="bold">1. Calentamiento</text>
        <text x="300" y="160" textAnchor="middle" fill="#d97706" fontSize="14" fontWeight="bold">2. Permanencia</text>
        <text x="425" y="150" textAnchor="middle" fill="#1d4ed8" fontSize="12" fontWeight="bold">3. Enfriamiento</text>
        <text x="425" y="165" textAnchor="middle" fill="#1d4ed8" fontSize="12" fontWeight="bold">Rápido</text>

        {/* Puntos de control */}
        <circle cx="200" cy="80" r="4" fill="#1e293b" />
        <circle cx="400" cy="80" r="4" fill="#1e293b" />
      </svg>
    </div>
  </div>
);

const Diagram4Materiales: React.FC = () => (
  <div className="grid w-full h-full min-h-[400px] place-items-center bg-slate-50 p-6">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
      <div className="grid grid-rows-[auto_1fr] border-t-4 border-blue-600 bg-white p-6 rounded shadow-sm text-center gap-4">
        <div className="grid place-items-center h-12 w-12 rounded-full bg-blue-100 mx-auto">
          <Layers className="text-blue-600" />
        </div>
        <div>
          <h3 className="font-bold text-slate-800 mb-2">Aceros al Carbono</h3>
          <p className="text-sm text-slate-600">Dependen críticamente de su % de carbono (típicamente {'>'}0.3%) para lograr buena dureza.</p>
        </div>
      </div>
      
      <div className="grid grid-rows-[auto_1fr] border-t-4 border-indigo-600 bg-white p-6 rounded shadow-sm text-center gap-4">
        <div className="grid place-items-center h-12 w-12 rounded-full bg-indigo-100 mx-auto">
          <Shield className="text-indigo-600" />
        </div>
        <div>
          <h3 className="font-bold text-slate-800 mb-2">Aceros Aleados</h3>
          <p className="text-sm text-slate-600">Elementos como Cr, Ni, Mo mejoran la templabilidad, permitiendo enfriamientos menos drásticos.</p>
        </div>
      </div>

      <div className="grid grid-rows-[auto_1fr] border-t-4 border-slate-600 bg-white p-6 rounded shadow-sm text-center gap-4">
        <div className="grid place-items-center h-12 w-12 rounded-full bg-slate-100 mx-auto">
          <Settings className="text-slate-600" />
        </div>
        <div>
          <h3 className="font-bold text-slate-800 mb-2">Fundiciones Especiales</h3>
          <p className="text-sm text-slate-600">Algunas fundiciones (ej. nodulares o blancas) se someten a temple para aplicaciones de alto desgaste.</p>
        </div>
      </div>
    </div>
  </div>
);

const Diagram5Contexto: React.FC = () => (
  <div className="grid w-full h-full min-h-[400px] place-items-center bg-slate-50 p-4">
    <svg viewBox="0 0 500 200" className="w-full max-w-2xl">
      <defs>
        <marker id="arrow3" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#334155" />
        </marker>
      </defs>

      <rect x="20" y="70" width="140" height="60" rx="8" fill="#e2e8f0" stroke="#64748b" strokeWidth="2"/>
      <text x="90" y="95" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">Ciclo Térmico</text>
      <text x="90" y="115" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">Anterior</text>

      <line x1="160" y1="100" x2="200" y2="100" stroke="#334155" strokeWidth="2" markerEnd="url(#arrow3)" />

      <rect x="210" y="60" width="120" height="80" rx="8" fill="#1e293b" />
      <text x="270" y="105" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">TEMPLE</text>

      <line x1="330" y1="100" x2="370" y2="100" stroke="#334155" strokeWidth="2" markerEnd="url(#arrow3)" />

      <rect x="380" y="70" width="100" height="60" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
      <text x="430" y="105" textAnchor="middle" fill="#92400e" fontSize="14" fontWeight="bold">REVENIDO</text>

      <text x="350" y="180" textAnchor="middle" fill="#64748b" fontSize="12" fontStyle="italic">
        *El temple casi siempre requiere un revenido posterior para aliviar tensiones.
      </text>
    </svg>
  </div>
);

// --- DATOS DE LA LECCIÓN ---

const lessonData: LessonSection[] = [
  {
    id: 'concepto',
    tabTitle: 'Concepto',
    icon: <Thermometer size={18} />,
    diagramTitle: '¿Qué es el Temple?',
    diagramDescription: 'El temple es un tratamiento térmico aplicado principalmente a los aceros para modificar sus propiedades mecánicas mediante un ciclo específico. Su rasgo distintivo es que el enfriamiento ocurre con suficiente velocidad como para transformar la estructura interna del material, evitando que regrese a sus fases blandas originarias.',
    RenderComponent: Diagram1Concepto
  },
  {
    id: 'proposito',
    tabTitle: 'Propósito',
    icon: <Activity size={18} />,
    diagramTitle: 'Objetivo Principal y Propiedades',
    diagramDescription: 'El propósito central del temple es aumentar la dureza y la resistencia mecánica del acero. Esto se logra porque el tratamiento altera la microestructura del material a nivel atómico (formando estructuras duras como la martensita), lo que cambia radicalmente su comportamiento frente al desgaste, la deformación y los esfuerzos mecánicos.',
    RenderComponent: Diagram2Proposito
  },
  {
    id: 'etapas',
    tabTitle: 'Etapas Operativas',
    icon: <Clock size={18} />,
    diagramTitle: 'Secuencia del Proceso de Temple',
    diagramDescription: 'El temple se ejecuta operativamente en tres acciones básicas que deben controlarse con extrema precisión temporal y térmica: 1) Se calienta el acero hasta la temperatura de austenitización, 2) Se mantiene el tiempo necesario para homogeneizar toda la estructura interna de la pieza, y 3) Se enfría rápidamente sumergiéndolo en un medio adecuado (agua, aceite, polímeros o aire).',
    RenderComponent: Diagram3Etapas
  },
  {
    id: 'materiales',
    tabTitle: 'Materiales Aplicables',
    icon: <Layers size={18} />,
    diagramTitle: 'Aleaciones Susceptibles al Temple',
    diagramDescription: 'El temple no aplica a cualquier metal. Se utiliza sobre todo en aceros al carbono (generalmente de medio y alto carbono), aceros aleados, y en ciertos casos particulares a fundiciones. Su efectividad depende directamente de la "templabilidad" del material, condicionada fuertemente por su contenido de carbono y aleantes.',
    RenderComponent: Diagram4Materiales
  },
  {
    id: 'contexto',
    tabTitle: 'Contexto Metalúrgico',
    icon: <Settings size={18} />,
    diagramTitle: 'El Temple dentro del Ciclo Térmico',
    diagramDescription: 'El temple no es un fin en sí mismo, sino una técnica de ingeniería de materiales. Debido a que el enfriamiento rápido genera una estructura extremadamente dura pero también muy frágil y con altas tensiones internas, el temple casi obligatoriamente debe ir seguido de un proceso complementario llamado Revenido para dotar a la pieza de tenacidad.',
    RenderComponent: Diagram5Contexto
  }
];

// --- COMPONENTE PRINCIPAL (LAYOUT & ESTADO) ---

export default function App() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeSection = lessonData[activeTab];

  return (
    <div className="grid grid-rows-[auto_1fr] h-screen w-full bg-slate-100 font-sans overflow-hidden">
      
      {/* HEADER & NAVEGACIÓN (TABS) */}
      <header className="grid grid-rows-[auto_auto] gap-4 p-4 md:px-8 md:pt-6 pb-0 bg-white shadow-sm z-10">
        <div className="grid grid-cols-[auto_1fr] items-center gap-3">
          <div className="grid place-items-center h-10 w-10 bg-blue-600 rounded-lg text-white">
            <Thermometer size={24} />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            Fundamentos del Temple
          </h1>
        </div>
        
        <nav className="grid grid-cols-2 md:grid-cols-5 gap-2 pb-0">
          {lessonData.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(index)}
              className={`grid grid-cols-[auto_1fr] items-center justify-center gap-2 py-3 px-2 border-b-4 transition-colors duration-200 outline-none
                ${activeTab === index 
                  ? 'border-blue-600 text-blue-700 bg-blue-50/50' 
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                }`}
            >
              <span className={activeTab === index ? 'text-blue-600' : 'text-slate-400'}>
                {section.icon}
              </span>
              <span className="font-semibold text-sm truncate text-left">
                {section.tabTitle}
              </span>
            </button>
          ))}
        </nav>
      </header>

      {/* MAIN CONTENT (LESSON LAYOUT) */}
      <main className="grid p-4 md:p-8 overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-max lg:h-full max-w-7xl mx-auto w-full">
          
          {/* Panel Izquierdo: Descripción */}
          <div className="grid grid-cols-1 lg:col-span-4 h-max">
            <Card className="p-6 grid grid-rows-[auto_1fr] gap-4">
              <div className="grid gap-1">
               
                <h2 className="text-2xl font-bold text-slate-800">
                  {activeSection.diagramTitle}
                </h2>
              </div>
              <div className="grid">
                <p className="text-slate-600 leading-relaxed text-base">
                  {activeSection.diagramDescription}
                </p>
              </div>
            </Card>
          </div>

          {/* Panel Derecho: Visualización de Datos / Diagrama */}
          <div className="grid grid-cols-1 lg:col-span-8 h-full min-h-[400px]">
            <Card className="overflow-hidden grid grid-rows-[1fr]">
              <activeSection.RenderComponent />
            </Card>
          </div>

        </div>
      </main>
    </div>
  );
}