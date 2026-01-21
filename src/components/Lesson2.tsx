import React, { useState } from 'react';
import { 
  Activity, 
  BarChart2, 
  Layers, 
  Settings, 
  TrendingUp, 
  DollarSign, 
  ShieldCheck, 
  Hammer, 
  Plane, 
  Car, 
  Building, 
  Zap,  
} from 'lucide-react';
import DivCarousel from '../assets/DivCarousel';

// --- Tipos ---
type TabId = 
  | 'contexto' 
  | 'comparativo' 
  | 'servicio' 
  | 'mecanico' 
  | 'ingenieria' 
  | 'costo' 
  | 'integrador';

interface TabData {
  id: TabId;
  label: string;
  icon: React.ElementType;
  title: string;
  type: 'Estático' | 'Dinámico' | 'Interactivo';
  content: React.ReactNode;
}

const TABS: TabData[] = [
  { id: 'contexto', label: 'Contexto', icon: Layers, title: 'Introducción', type: 'Estático',
     content: (
    <DivCarousel><p>A continuación veremos por qué, en la práctica ingenieril, no basta con seleccionar un material adecuado: también es indispensable asegurar que posea las propiedades necesarias para trabajar de forma segura y eficiente.</p>
        <p>Los tratamientos térmicos permiten adaptar los metales a condiciones específicas de servicio, convirtiéndose en un recurso transversal a múltiples ramas de la ingeniería.</p>
        <p>Esta lección analiza por qué son fundamentales, cómo influyen en el rendimiento de los componentes y qué consecuencias tendría su ausencia en aplicaciones reales.</p></DivCarousel>
        
    ) },
  { id: 'comparativo', label: 'Propiedades', icon: BarChart2, title: 'Optimización de las propiedades mecánicas', type: 'Estático', 
    content: (<DivCarousel>
      <p>Es posible ajustar propiedades mecánicas sin cambiar la composición química del metal. Mediante combinaciones controladas de <strong>temperatura</strong>, <strong>tiempo</strong> y <strong>enfriamiento</strong>, se logran perfiles de propiedades a la medida de la aplicación.</p>
        
        <div>
        <strong>Propiedades que pueden optimizarse:</strong>
        <ul>
          <li>Resistencia mecánica</li>
          <li>Dureza</li>
          <li>Ductilidad</li>
          <li>Tenacidad</li>
        </ul>
        Esta flexibilidad permite usar un mismo material base en aplicaciones muy distintas variando únicamente el tratamiento térmico.
      </div>
    </DivCarousel> )},
  { id: 'servicio', label: 'Desempeño', icon: Activity, title: 'Mejora del desempeño en servicio', type: 'Dinámico',
     content: (<DivCarousel>
       
        
        <p>Los tratamientos térmicos impactan directamente en el <strong>comportamiento de las piezas</strong> durante su uso real. Los componentes metálicos enfrentan <strong>cargas cíclicas</strong>, <strong>impactos</strong>, <strong>vibraciones</strong>, <strong>variaciones térmicas</strong> y <strong>ambientes agresivos</strong>.</p>
        <div>
          <p>Con un <strong>tratamiento térmico</strong> adecuado se puede:</p>
        <ul>
          <li><strong>Reducir</strong> el <strong>desgaste</strong> superficial.</li>
          <li><strong>Aumentar</strong> la <strong>resistencia</strong> a la fatiga.</li>
          <li><strong>Minimizar</strong> la <strong>deformación</strong> en uso prolongado.</li>
          <li><strong>Mejorar</strong> la <strong>estabilidad</strong> dimensional.</li>
        </ul>
        El resultado es un desempeño más confiable y predecible a lo largo de la vida útil del componente.
      </div>
     </DivCarousel>) },
  { id: 'mecanico', label: 'Mecánica', icon: Settings, title: 'Importancia en la seguridad estructural', type: 'Estático',
     content: 
    (
      <DivCarousel>
      <p>En ingeniería, muchas <strong>piezas críticas no pueden fallar</strong> de forma súbita <strong>sin consecuencias graves</strong>.</p>
         <div>
        Los <strong>tratamientos térmicos</strong> permiten:
        <ul>
          <li><strong>Evitar fallas</strong> frágiles.</li>
          <li><strong>Controlar el equilibrio</strong> entre dureza y tenacidad.</li>
          <li><strong>Reducir el riesgo</strong> de rupturas inesperadas.</li>
        </ul>
        Al controlar la microestructura, se <strong>disminuye la probabilidad de accidentes</strong>, protegiendo tanto a las personas como a los equipos.
      </div>
      </DivCarousel>
    ) },
  { id: 'ingenieria', label: 'Ingeniería', icon: Hammer, title: 'Aplicación en diferentes áreas de la ingeniería', type: 'Interactivo',
     content: 
    (<DivCarousel>
        
        <p>En esta sección se muestra cómo los tratamientos térmicos son esenciales en múltiples disciplinas, formando parte del proceso normal de fabricación de componentes críticos.</p>  
        <div>
        <strong>Principales áreas de aplicación:</strong>
        <ul>
          <li>Ingeniería <strong>mecánica</strong>: engranajes, resortes, ejes y herramientas.</li>
          <li>Ingeniería <strong>automotriz</strong>: motor, transmisión y suspensión.</li>
          <li>Ingeniería <strong>aeroespacial</strong>: piezas sometidas a altas cargas y temperaturas.</li>
          <li>Ingeniería <strong>industrial</strong>: maquinaria, moldes y equipos de producción.</li>
          <li>Ingeniería <strong>metalúrgica</strong>: desarrollo y mejora de materiales metálicos.</li>
        </ul>
      </div>
    </DivCarousel>) },
  { id: 'costo', label: 'Costo-Beneficio', icon: DollarSign, title: "Impacto económico y productivo", type: 'Estático', 
    content: 
  (
    <DivCarousel>
      <p>La importancia de los tratamientos térmicos no es solo técnica, sino también económica. En el ámbito industrial, una elección adecuada del tratamiento térmico se traduce en beneficios directos.</p>
        <div>

        <strong>Impactos clave:</strong>
        <ul>
          <li><strong>Prolongación de la vida útil</strong> de los componentes.</li>
          <li><strong>Reducción de costos</strong> de mantenimiento y reemplazo.</li>
          <li><strong>Mayor confiabilidad</strong> del producto final.</li>
          <li><strong>Incremento de la competitividad</strong> del proceso productivo.</li>
        </ul>
        Un tratamiento térmico bien seleccionado puede representar una ventaja técnica y económica significativa.
      </div>
    </DivCarousel>
  ) },
  { id: 'integrador', label: 'Integrador', icon: ShieldCheck, title: 'Cierre de la lección', type: 'Estático',
     content: (
      <DivCarousel>
        <p>Los tratamientos térmicos desempeñan un papel estratégico en la ingeniería al permitir que los materiales metálicos alcancen el nivel de desempeño requerido para aplicaciones exigentes. Su relevancia se manifiesta en la optimización de propiedades, la seguridad estructural, la eficiencia operativa y la sostenibilidad económica de los sistemas ingenieriles.</p>
        <p>   Esta comprensión de su importancia prepara el camino para analizar, en la siguiente lección, los objetivos específicos que se persiguen al aplicar tratamientos térmicos a los metales.</p>
     
    
      </DivCarousel>
     ) },
];

// --- Componentes de los Diagramas ---

// 1. Contexto (Flujo)
const ContextDiagram = () => (
  <div className="w-full h-64 grid grid-cols-7 gap-4 items-center justify-items-center bg-slate-50 p-6 rounded-lg border border-slate-200">
    {[
      { step: 'Material Base', color: 'bg-slate-300' },
      { step: 'Tratamiento Térmico', color: 'bg-orange-400 text-white' },
      { step: 'Propiedades Finales', color: 'bg-blue-500 text-white' },
      { step: 'Desempeño en Servicio', color: 'bg-green-600 text-white' }
    ].map((item, idx) => (
      <div key={idx} className="contents">
        <div className={`${item.color} w-32 h-32 grid place-items-center p-4 rounded-lg shadow-md text-center font-bold text-sm md:text-base transition-transform hover:scale-105`}>
          {item.step}
        </div>
        {idx < 3 && (
          <div className="text-slate-400 hidden md:block">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        )}
      </div>
    ))}
    {/* Versión móvil de las flechas (apiladas en CSS grid si fuera necesario, aquí simplificado para desktop-first responsive) */}
  </div>
);

// 2. Comparativo (Barras)
const ComparativeDiagram = () => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Caso A: Recocido */}
      <div className="grid gap-2">
        <h4 className="font-bold text-center text-slate-700">Recocido (Blando)</h4>
        <div className="h-48 grid grid-cols-2 gap-2 items-end border-b-2 border-slate-300 pb-1">
          <div className="bg-blue-300 w-full h-[20%] rounded-t relative group">
            <span className="absolute -top-6 left-0 right-0 text-center text-xs">Dureza</span>
          </div>
          <div className="bg-green-300 w-full h-[90%] rounded-t relative group">
            <span className="absolute -top-6 left-0 right-0 text-center text-xs">Ductilidad</span>
          </div>
        </div>
      </div>

      {/* Caso B: Normalizado */}
      <div className="grid gap-2">
        <h4 className="font-bold text-center text-slate-700">Normalizado (Medio)</h4>
        <div className="h-48 grid grid-cols-2 gap-2 items-end border-b-2 border-slate-300 pb-1">
          <div className="bg-blue-500 w-full h-[50%] rounded-t relative">
             <span className="absolute -top-6 left-0 right-0 text-center text-xs">Dureza</span>
          </div>
          <div className="bg-green-500 w-full h-[60%] rounded-t relative">
             <span className="absolute -top-6 left-0 right-0 text-center text-xs">Ductilidad</span>
          </div>
        </div>
      </div>

      {/* Caso C: Templado */}
      <div className="grid gap-2">
        <h4 className="font-bold text-center text-slate-700">Templado (Duro)</h4>
        <div className="h-48 grid grid-cols-2 gap-2 items-end border-b-2 border-slate-300 pb-1">
          <div className="bg-blue-800 w-full h-[95%] rounded-t relative">
             <span className="absolute -top-6 left-0 right-0 text-center text-xs">Dureza</span>
          </div>
          <div className="bg-green-800 w-full h-[15%] rounded-t relative">
             <span className="absolute -top-6 left-0 right-0 text-center text-xs">Ductilidad</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// 3. Desempeño (Gráfico de línea simulado)
const PerformanceDiagram = () => (
  <div className="relative h-64 w-full bg-slate-50 rounded-lg p-4 overflow-hidden shadow-inner">
    {/* Ejes */}
    <div className="absolute left-4 top-4 bottom-8 w-0.5 bg-slate-600"></div>
    <div className="absolute left-4 right-4 bottom-8 h-0.5 bg-slate-600"></div>
    <span className="absolute left-6 top-4 text-xs text-slate-900">Desempeño / Integridad</span>
    <span className="absolute right-4 bottom-4 text-xs text-slate-900">Tiempo de Uso</span>

    {/* Línea No Tratada (Decae rápido) */}
    <svg className="absolute inset-0 h-full w-full pointer-events-none p-4 pb-8 pl-4">
      <path d="M0,50 Q100,60 200,150 T400,250" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="5,5" />
      <text x="270" y="200" fill="#ef4444" fontSize="12" fontWeight="bold">Sin Tratamiento (Desgaste Rápido)</text>
    </svg>

    {/* Línea Tratada (Estable) */}
    <svg className="absolute inset-0 h-full w-full pointer-events-none p-4 pb-8 pl-4">
      <path d="M0,20 Q200,25 400,40 T800,50" fill="none" stroke="#22c55e" strokeWidth="3" />
      <text x="400" y="30" fill="#22c55e" fontSize="12" fontWeight="bold">Con Tratamiento Térmico (Vida Extendida)</text>
    </svg>
  </div>
);

// 4. Mecánico (Curvas Esfuerzo-Deformación)
const MechanicalDiagram = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Frágil */}
    <div className="bg-white p-4 rounded border border-slate-200 text-center">
      <h4 className="font-bold text-red-600 mb-2">Comportamiento Frágil</h4>
      <p className="text-xs text-slate-500 mb-4">Alta dureza, ruptura abrupta sin deformación previa.</p>
      <div className="relative h-48 w-full border-l-2 border-b-2 border-slate-400 bg-slate-50">
        <svg className="h-full w-full overflow-visible">
          {/* Curva empinada y corta */}
          <path d="M0,190 L60,20" fill="none" stroke="#dc2626" strokeWidth="3" />
          <circle cx="60" cy="20" r="4" fill="#dc2626" />
          <text x="65" y="20" fontSize="10" fill="#dc2626">Ruptura</text>
        </svg>
      </div>
    </div>

    {/* Dúctil */}
    <div className="bg-white p-4 rounded border border-slate-200 text-center">
      <h4 className="font-bold text-blue-600 mb-2">Comportamiento Dúctil</h4>
      <p className="text-xs text-slate-500 mb-4">Tenaz, deformación plástica considerable antes de fallar.</p>
      <div className="relative h-48 w-full border-l-2 border-b-2 border-slate-400 bg-slate-50">
        <svg className="h-full w-full overflow-visible">
          {/* Curva larga */}
          <path d="M0,190 Q50,40 100,40 T200,90" fill="none" stroke="#2563eb" strokeWidth="3" />
          <circle cx="200" cy="90" r="4" fill="#2563eb" />
          <text x="205" y="90" fontSize="10" fill="#2563eb">Ruptura</text>
        </svg>
      </div>
    </div>
  </div>
);

// 5. Interactivo (Áreas de Ingeniería)
const EngineeringDiagram = () => {
  const [activeArea, setActiveArea] = useState<string | null>(null);

  const areas = [
    { id: 'civil', name: 'Civil', icon: Building, color: 'bg-amber-500', details: 'Estructuras de puentes, vigas de acero de alta resistencia.' },
    { id: 'auto', name: 'Automotriz', icon: Car, color: 'bg-red-500', details: 'Engranajes de transmisión, cigüeñales endurecidos superficialmente.' },
    { id: 'aero', name: 'Aeroespacial', icon: Plane, color: 'bg-sky-500', details: 'Álabes de turbina, trenes de aterrizaje de alta tenacidad.' },
    { id: 'energy', name: 'Energía', icon: Zap, color: 'bg-green-500', details: 'Tuberías de presión, componentes de reactores nucleares.' },
  ];

  return (
    <div className="grid grid-rows-[auto_1fr] gap-6">
      <p className="text-sm text-slate-500 italic text-center">Selecciona un área para ver ejemplos:</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {areas.map((area) => (
          <button
            key={area.id}
            onClick={() => setActiveArea(area.id)}
            className={`p-4 rounded-lg shadow-sm transition-all grid place-items-center gap-2 border-2 ${activeArea === area.id ? 'border-blue-500 bg-blue-50' : 'border-transparent bg-white hover:bg-slate-50'}`}
          >
            <div className={`p-3 rounded-full text-white ${area.color}`}>
              <area.icon size={24} />
            </div>
            <span className="font-semibold text-slate-700">{area.name}</span>
          </button>
        ))}
      </div>
      
      <div className="bg-slate-100 rounded-lg p-6 min-h-[100px] grid place-items-center">
        {activeArea ? (
          <div className="text-center animate-in fade-in zoom-in duration-300">
            <h3 className="text-xl font-bold text-slate-800 mb-2">{areas.find(a => a.id === activeArea)?.name}</h3>
            <p className="text-lg text-slate-600">{areas.find(a => a.id === activeArea)?.details}</p>
          </div>
        ) : (
          <span className="text-slate-400">Esperando selección...</span>
        )}
      </div>
    </div>
  );
};

// 6. Costo-Beneficio
const CostBenefitDiagram = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
    {/* Inversión */}
    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-400 grid gap-4">
      <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
        <div className="p-3 bg-orange-100 rounded-full text-orange-600 w-fit">
          <DollarSign size={32} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-800">Costo Inicial</h3>
          <p className="text-slate-600">Inversión en Tratamiento Térmico</p>
        </div>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2.5">
        <div className="bg-orange-400 h-2.5 rounded-full" style={{ width: '30%' }}></div>
      </div>
      <p className="text-xs text-slate-500 text-right">30% Costo Adicional</p>
    </div>

    {/* Beneficio */}
    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500 grid gap-4">
      <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
        <div className="p-3 bg-green-100 rounded-full text-green-600 w-fit">
          <TrendingUp size={32} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-800">Retorno (ROI)</h3>
          <p className="text-slate-600">Ahorro por fallas y mantenimiento</p>
        </div>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2.5">
        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
      </div>
      <p className="text-xs text-slate-500 text-right">85% Ahorro a Largo Plazo</p>
    </div>

    <div className="md:col-span-2 bg-blue-50 p-4 rounded text-center text-blue-800 font-medium">
      Conclusión: El aumento en la vida útil de la pieza supera exponencialmente el costo del proceso.
    </div>
  </div>
);

// 7. Integrador (Mind Map)
const IntegratorDiagram = () => (
  <div className="relative h-96 w-full bg-white rounded-lg border border-slate-200 p-4 grid place-items-center">
    {/* Centro */}
    <div className="z-10 bg-slate-800 text-white p-6 rounded-full shadow-xl w-40 h-40 grid place-items-center text-center font-bold">
      TRATAMIENTO TÉRMICO
    </div>

    {/* Nodos Satélites - Posicionados con Absolute para simular red */}
    {/* Nota: Usamos grid en el contenedor padre para centrar el main, y absolute para los satélites visuales */}
    
    {/* Top Left */}
    <div className="absolute top-8 left-8 md:top-16 md:left-24 bg-blue-100 p-3 rounded-lg border border-blue-300 shadow-sm w-32 text-center">
      <span className="block font-bold text-blue-800 text-sm">Propiedades</span>
      <span className="text-xs text-blue-600">Dureza, Tenacidad</span>
    </div>
    <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-slate-300 -translate-x-full -translate-y-16 -rotate-45 origin-right -z-0"></div>

    {/* Top Right */}
    <div className="absolute top-8 right-8 md:top-16 md:right-24 bg-green-100 p-3 rounded-lg border border-green-300 shadow-sm w-32 text-center">
      <span className="block font-bold text-green-800 text-sm">Economía</span>
      <span className="text-xs text-green-600">Menos reemplazos</span>
    </div>
    <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-slate-300 -translate-y-16 rotate-45 origin-left -z-0"></div>

    {/* Bottom Left */}
    <div className="absolute bottom-8 left-8 md:bottom-16 md:left-24 bg-red-100 p-3 rounded-lg border border-red-300 shadow-sm w-32 text-center">
      <span className="block font-bold text-red-800 text-sm">Seguridad</span>
      <span className="text-xs text-red-600">Prevención de fallas</span>
    </div>
    <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-slate-300 -translate-x-full translate-y-16 rotate-45 origin-right -z-0"></div>

    {/* Bottom Right */}
    <div className="absolute bottom-8 right-8 md:bottom-16 md:right-24 bg-amber-100 p-3 rounded-lg border border-amber-300 shadow-sm w-32 text-center">
      <span className="block font-bold text-amber-800 text-sm">Desempeño</span>
      <span className="text-xs text-amber-600">Eficiencia operativa</span>
    </div>
    <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-slate-300 translate-y-16 -rotate-45 origin-left -z-0"></div>
  </div>
);

// --- Componente Principal ---

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('contexto');

  // Encontrar datos de la pestaña activa
  const activeData = TABS.find(t => t.id === activeTab)!;

  const renderContent = () => {
    switch (activeTab) {
      case 'contexto': return <ContextDiagram />;
      case 'comparativo': return <ComparativeDiagram />;
      case 'servicio': return <PerformanceDiagram />;
      case 'mecanico': return <MechanicalDiagram />;
      case 'ingenieria': return <EngineeringDiagram />;
      case 'costo': return <CostBenefitDiagram />;
      case 'integrador': return <IntegratorDiagram />;
      default: return <div>Seleccione una opción</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans grid grid-rows-[auto_1fr] gap-4 pb-8">
      
      {/* Header y Navegación (Grid System) */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto p-4">
          <h1 className="text-2xl font-bold text-slate-800 mb-4 text-center">Importancia de los tratamientos térmicos en la ingeniería</h1>
          
          {/* Grid de Pestañas */}
          <nav className="grid grid-cols-7 gap-2">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex flex-col items-center justify-center p-3 rounded-md transition-all duration-200 text-sm font-medium
                    ${isActive 
                      ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'}
                  `}
                >
                  <Icon size={20} className="mb-1" />
                  <span className="text-xs text-center">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Área de Contenido Principal (Grid Centrado) */}
      <main className="max-w-5xl mx-auto w-full p-4 grid gap-6 content-start">
        
        {/* Panel de Información */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 grid gap-2">
          <div className="justify-start items-center">
            
            <h2 className="text-2xl font-bold text-slate-800">{activeData.title}</h2>
            {activeData.content}
            
          </div>
          
        </div>

        {/* Panel del Diagrama */}
        <section className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 min-h-[400px] grid content-center">
          {renderContent()}
        </section>

      </main>
    </div>
  );
}