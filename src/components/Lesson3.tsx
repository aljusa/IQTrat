import React, { useState, useEffect } from 'react';
import { 
  Anvil, 
  ArrowRight, 
  Activity, 
  Layers, 
  Minimize2, 
  Maximize2, 
  Settings, 
  Thermometer, 
  ShieldCheck, 
   
} from 'lucide-react';

// --- Componentes de Diagramas (Visualizaciones) ---
// MOVIDOS FUERA DEL COMPONENTE APP PARA EVITAR ERRORES DE HOOKS

// 1. Diagrama estático general de objetivos
const GeneralObjectivesDiagram: React.FC = () => (
  <div className="w-full h-64 bg-slate-50 border-2 border-slate-200 rounded-lg p-4 grid grid-cols-3 gap-4 place-items-center relative overflow-hidden">
    {/* Nodos */}
    <div className="z-10 bg-blue-100 p-4 rounded-lg border border-blue-300 text-center grid place-items-center">
      <Settings className="w-8 h-8 text-blue-600 mb-2" />
      <span className="text-sm font-bold text-blue-800">Uso Final</span>
    </div>
    
    <div className="z-10 text-slate-400">
      <ArrowRight className="w-8 h-8" />
    </div>

    <div className="z-10 bg-emerald-100 p-4 rounded-lg border border-emerald-300 text-center grid place-items-center">
      <ShieldCheck className="w-8 h-8 text-emerald-600 mb-2" />
      <span className="text-sm font-bold text-emerald-800">Propiedad Requerida</span>
    </div>

    {/* Conexión inferior */}
    <div className="col-span-3 w-full grid grid-cols-1 place-items-center mt-4">
      <div className="bg-orange-100 px-6 py-2 rounded-full border border-orange-300 text-orange-800 font-semibold text-sm">
        Tratamiento Térmico (El Puente)
      </div>
    </div>
    
    {/* Líneas decorativas SVG */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
      <line x1="20%" y1="30%" x2="50%" y2="80%" stroke="black" strokeWidth="2" strokeDasharray="5,5" />
      <line x1="80%" y1="30%" x2="50%" y2="80%" stroke="black" strokeWidth="2" strokeDasharray="5,5" />
    </svg>
  </div>
);

// 2. Diagrama estático comparativo de propiedades
const PropertiesComparisionDiagram: React.FC = () => (
  <div className="w-full h-64 bg-white p-6 rounded-lg border border-slate-200 grid grid-cols-2 gap-8 items-end">
    {/* Antes */}
    <div className="grid gap-2 justify-items-center w-full">
      <div className="w-full grid grid-cols-2 gap-2 h-32 items-end">
        <div className="bg-slate-300 h-[40%] w-full rounded-t relative group">
          <span className="absolute -top-6 left-0 w-full text-center text-xs font-bold text-slate-500">Dureza</span>
        </div>
        <div className="bg-blue-300 h-[80%] w-full rounded-t relative group">
            <span className="absolute -top-6 left-0 w-full text-center text-xs font-bold text-blue-500">Ductilidad</span>
        </div>
      </div>
      <span className="font-semibold text-slate-600 border-t border-slate-300 w-full text-center pt-2">Metal Base</span>
    </div>

    {/* Después */}
    <div className="grid gap-2 justify-items-center w-full">
      <div className="w-full grid grid-cols-2 gap-2 h-32 items-end">
        <div className="bg-slate-600 h-[90%] w-full rounded-t relative">
          <span className="absolute -top-6 left-0 w-full text-center text-xs font-bold text-slate-800">Dureza</span>
        </div>
        <div className="bg-blue-600 h-[30%] w-full rounded-t relative">
            <span className="absolute -top-6 left-0 w-full text-center text-xs font-bold text-blue-800">Ductilidad</span>
        </div>
      </div>
      <span className="font-semibold text-slate-600 border-t border-slate-300 w-full text-center pt-2">Tratado Térmicamente</span>
    </div>
  </div>
);

// 3. Diagrama estático de microestructura
const MicrostructureDiagram: React.FC = () => (
  <div className="w-full h-64 grid grid-cols-2 gap-4">
    {/* Grano Grueso */}
    <div className="border-4 border-slate-300 rounded-full bg-slate-50 overflow-hidden relative grid place-items-center">
      <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 opacity-50">
          <path d="M0,0 L40,20 L60,0 L100,20 L100,60 L70,100 L20,80 L0,50 Z" fill="none" stroke="#94a3b8" strokeWidth="1" />
          <path d="M40,20 L50,50 L20,80" fill="none" stroke="#94a3b8" strokeWidth="1" />
          <path d="M60,0 L50,50 L70,100" fill="none" stroke="#94a3b8" strokeWidth="1" />
          <path d="M100,60 L50,50" fill="none" stroke="#94a3b8" strokeWidth="1" />
      </svg>
      <div className="bg-slate-800/80 text-white px-2 py-1 rounded text-xs z-10 text-center">
        Grano Grueso<br/>(Menor Resistencia)
      </div>
    </div>

    {/* Grano Fino */}
    <div className="border-4 border-indigo-300 rounded-full bg-indigo-50 overflow-hidden relative grid place-items-center">
        <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 opacity-50">
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#6366f1" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
      </svg>
      <div className="bg-indigo-800/80 text-white px-2 py-1 rounded text-xs z-10 text-center">
        Grano Fino<br/>(Mayor Resistencia)
      </div>
    </div>
  </div>
);

// 4. Diagrama dinámico de tensiones internas
const InternalStressDiagram: React.FC = () => {
  // Simulación simple de estado visual
  const [treated, setTreated] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTreated(t => !t), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-64 bg-slate-900 rounded-lg p-6 grid grid-rows-[auto_1fr] gap-4">
      <div className="text-center text-white text-sm">
        Estado: <span className={treated ? "text-emerald-400 font-bold" : "text-red-400 font-bold"}>
          {treated ? "Tratamiento de Alivio Aplicado" : "Bajo Tensión (Fabricación)"}
        </span>
      </div>
      
      <div className="relative w-full h-full bg-slate-700 rounded grid place-items-center overflow-hidden">
        {/* Bloque de Metal */}
        <div className={`w-32 h-32 bg-slate-400 rounded transition-all duration-1000 grid place-items-center z-10 ${treated ? 'scale-100' : 'scale-95'}`}>
          <Anvil className="text-slate-600 w-12 h-12" />
        </div>

        {/* Flechas de Tensión (Animadas) */}
        {!treated && (
          <>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 animate-bounce text-red-500 font-bold">↓↓↓</div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce text-red-500 font-bold">↑↑↑</div>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 animate-pulse text-red-500 font-bold">→→→</div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 animate-pulse text-red-500 font-bold">←←←</div>
          </>
        )}

        {/* Efecto de Alivio */}
        {treated && (
          <div className="absolute inset-0 bg-emerald-500/20 animate-pulse grid place-items-center">
              <span className="text-emerald-300 font-bold text-lg">Estructura Relajada</span>
          </div>
        )}
      </div>
    </div>
  );
};

// 5. Diagrama dinámico de comportamiento en servicio
const ServiceBehaviorDiagram: React.FC = () => {
  // Animación simple con CSS
  return (
    <div className="w-full h-64 bg-slate-50 border border-slate-200 rounded-lg p-4 relative overflow-hidden">
      <h4 className="text-xs font-bold text-slate-500 mb-2">Desempeño vs Tiempo</h4>
      
      <svg viewBox="0 0 400 200" className="w-full h-full">
        {/* Ejes */}
        <line x1="20" y1="180" x2="380" y2="180" stroke="#94a3b8" strokeWidth="2" />
        <line x1="20" y1="180" x2="20" y2="20" stroke="#94a3b8" strokeWidth="2" />
        
        <text x="340" y="195" fontSize="12" fill="#64748b">Tiempo</text>
        <text x="25" y="30" fontSize="12" fill="#64748b">Vida Útil</text>

        {/* Línea Sin Tratamiento (Decae rápido) */}
        <path d="M 20 50 Q 150 60 200 180" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="5,5" />
        <text x="100" y="120" fontSize="10" fill="#ef4444">Sin Tratamiento (Falla prematura)</text>

        {/* Línea Con Tratamiento (Estable) */}
        <path d="M 20 50 C 150 50, 300 50, 380 100" fill="none" stroke="#10b981" strokeWidth="3">
          <animate attributeName="stroke-dasharray" from="0, 400" to="400, 0" dur="3s" repeatCount="indefinite" />
        </path>
        <text x="250" y="70" fontSize="10" fill="#059669" fontWeight="bold">Tratado (Larga duración)</text>

        {/* Indicador de momento actual */}
        <circle cx="20" cy="50" r="4" fill="#3b82f6">
          <animate attributeName="cx" values="20;380" dur="3s" repeatCount="indefinite" />
          <animate attributeName="cy" values="50;100" keyTimes="0;1" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1" />
        </circle>
      </svg>
    </div>
  );
};

// 6. Diagrama estático de flujo de fabricación
const ManufacturingFlowDiagram: React.FC = () => (
  <div className="w-full h-64 grid grid-cols-4 gap-2 items-center">
    {[
      { icon: <Layers />, label: "Fundición", color: "bg-slate-200" },
      { icon: <Settings />, label: "Mecanizado", color: "bg-slate-300" },
      { icon: <Thermometer />, label: "Tratamiento Térmico", color: "bg-orange-100 border-2 border-orange-400 animate-pulse" },
      { icon: <ShieldCheck />, label: "Acabado", color: "bg-slate-200" }
    ].map((step, idx) => (
      <React.Fragment key={idx}>
        <div className={`${step.color} h-32 rounded-lg p-2 grid place-items-center text-center shadow-sm`}>
          <div className="text-slate-700">{step.icon}</div>
          <span className="text-xs font-bold mt-2 text-slate-800">{step.label}</span>
        </div>
        {idx < 3 && (
          <div className="absolute left-[25%] hidden"> {/* Spacer for layout logic if needed, but grid gap handles it */} </div>
        )}
      </React.Fragment>
    ))}
    
    {/* Flechas superpuestas visualmente con Grid */}
    <div className="col-span-4 row-start-1 grid grid-cols-4 pointer-events-none h-full items-center">
        <div className="col-start-1 border-b-4 border-slate-300/50 translate-x-1/2"></div>
        <div className="col-start-2 border-b-4 border-slate-300/50 translate-x-1/2"></div>
        <div className="col-start-3 border-b-4 border-slate-300/50 translate-x-1/2"></div>
    </div>
  </div>
);

// 7. Diagrama estático integrador
const IntegratorDiagram: React.FC = () => (
  <div className="w-full h-64 bg-slate-800 rounded-lg p-4 relative grid place-items-center">
    <div className="grid grid-cols-3 grid-rows-3 w-full h-full gap-4">
      {/* Centro */}
      <div className="col-start-2 row-start-2 bg-white rounded-full grid place-items-center z-20 shadow-lg border-4 border-orange-500">
        <div className="text-center">
          <Thermometer className="w-6 h-6 mx-auto text-orange-600" />
          <span className="text-[10px] font-bold block">Tratamiento</span>
        </div>
      </div>

      {/* Satélites */}
      <div className="col-start-1 row-start-1 bg-blue-100 rounded p-2 grid place-items-center text-[10px] font-bold text-center z-10 opacity-90">
        Microestructura
      </div>
      <div className="col-start-3 row-start-1 bg-emerald-100 rounded p-2 grid place-items-center text-[10px] font-bold text-center z-10 opacity-90">
        Propiedades
      </div>
      <div className="col-start-1 row-start-3 bg-purple-100 rounded p-2 grid place-items-center text-[10px] font-bold text-center z-10 opacity-90">
        Fabricación
      </div>
      <div className="col-start-3 row-start-3 bg-red-100 rounded p-2 grid place-items-center text-[10px] font-bold text-center z-10 opacity-90">
        Servicio
      </div>

      {/* Conectores SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="white" strokeWidth="2" opacity="0.5" />
        <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="white" strokeWidth="2" opacity="0.5" />
        <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="white" strokeWidth="2" opacity="0.5" />
        <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="white" strokeWidth="2" opacity="0.5" />
      </svg>
    </div>
  </div>
);


// Definición de tipos para los datos de las secciones
interface SectionData {
  id: string;
  title: string;
  shortTitle: string;
  type: 'Estático' | 'Dinámico';
  purpose: string;
  description: string;
  Component: React.FC; // Cambiado de renderDiagram a Component
}

const Lesson3: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Datos principales
  const sections: SectionData[] = [
    {
      id: 'obj-gen',
      title: 'Objetivos Generales',
      shortTitle: 'Objetivos',
      type: 'Estático',
      purpose: 'Relacionar el uso final con el objetivo y propiedades.',
      description: 'El tratamiento térmico no es un fin en sí mismo, sino un medio para adaptar un material a una función específica. Este diagrama muestra el flujo lógico desde la necesidad del componente hasta la obtención de las propiedades mecánicas requeridas mediante el proceso térmico.',
      Component: GeneralObjectivesDiagram
    },
    {
      id: 'prop-mec',
      title: 'Propiedades Mecánicas',
      shortTitle: 'Propiedades',
      type: 'Estático',
      purpose: 'Mostrar cambios en propiedades antes y después.',
      description: 'Comparación directa de un metal base versus uno tratado. Generalmente, existe un compromiso (trade-off): al aumentar la dureza y resistencia, suele disminuir la ductilidad. El tratamiento busca el equilibrio óptimo.',
      Component: PropertiesComparisionDiagram
    },
    {
      id: 'micro',
      title: 'Microestructura',
      shortTitle: 'Microestructura',
      type: 'Estático',
      purpose: 'Comparar grano fino vs grano grueso.',
      description: 'La estructura interna define las propiedades externas. Un grano fino (derecha) ofrece más barreras al movimiento de dislocaciones, aumentando la resistencia y tenacidad, a diferencia de un grano grueso (izquierda).',
      Component: MicrostructureDiagram
    },
    {
      id: 'tensiones',
      title: 'Tensiones Internas',
      shortTitle: 'Tensiones',
      type: 'Dinámico',
      purpose: 'Generación y alivio de tensiones.',
      description: 'Durante la conformación mecánica o soldadura, se acumulan tensiones residuales (rojo). El recocido o alivio de tensiones permite que la red atómica se relaje (verde), evitando distorsiones o fallas futuras.',
      Component: InternalStressDiagram
    },
    {
      id: 'servicio',
      title: 'Comportamiento en Servicio',
      shortTitle: 'Servicio',
      type: 'Dinámico',
      purpose: 'Comparar desempeño en vida útil.',
      description: 'Gráfico tiempo-desempeño. La línea punteada roja representa un componente que falla prematuramente por fatiga o desgaste. La línea verde muestra cómo el tratamiento extiende la vida útil bajo condiciones reales de carga.',
      Component: ServiceBehaviorDiagram
    },
    {
      id: 'flujo',
      title: 'Flujo de Fabricación',
      shortTitle: 'Flujo',
      type: 'Estático',
      purpose: 'Etapa dentro del proceso global.',
      description: 'El tratamiento térmico es un eslabón crítico. Si se hace demasiado pronto, el mecanizado posterior puede ser difícil; si se hace tarde, se pueden perder tolerancias dimensionales. Su ubicación en el flujo es estratégica.',
      Component: ManufacturingFlowDiagram
    },
    {
      id: 'integrador',
      title: 'Visión Integradora',
      shortTitle: 'Integrador',
      type: 'Estático',
      purpose: 'Conexión global de objetivos y efectos.',
      description: 'Una vista holística. El tratamiento térmico es el núcleo que conecta la ciencia de materiales (microestructura) con la ingeniería de manufactura y la fiabilidad del producto final en servicio.',
      Component: IntegratorDiagram
    },
  ];

  // Componente Activo
  const ActiveComponent = sections[activeTab].Component;

  return (
    <div className="w-full h-screen bg-slate-100 text-slate-800 font-sans overflow-hidden grid grid-rows-[auto_1fr]">
      {/* Header / Navigation Tabs */}
      <header className="bg-slate-900 text-white shadow-lg z-10">
        <div className="p-4 border-b border-slate-700">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Thermometer className="text-orange-500" />
            Visualizador de Tratamientos Térmicos
          </h1>
        </div>
        
        {/* Grid de Pestañas - NO FLEX */}
        <nav className="w-full grid grid-cols-4 md:grid-cols-7 gap-1 p-1 bg-slate-800">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(index)}
              className={`
                py-3 px-2 text-xs md:text-sm font-medium transition-all duration-200 relative
                grid place-items-center text-center h-full
                ${activeTab === index 
                  ? 'bg-slate-100 text-slate-900 rounded-t-sm shadow-[0_-2px_0_0_#f97316_inset]' 
                  : 'text-slate-400 hover:bg-slate-700 hover:text-white'}
              `}
            >
              {section.shortTitle}
              {activeTab === index && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></div>
              )}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content Panel Area */}
      <main className="w-full h-full overflow-y-auto p-4 md:p-8 grid place-items-center">
        <div className="w-full max-w-5xl h-full grid grid-rows-[auto_1fr] gap-6">
          
          {/* Título y Badge del Panel Activo */}
          <div className="border-b border-slate-300 pb-4 grid grid-cols-[1fr_auto] items-center gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                {sections[activeTab].title}
              </h2>
              <p className="text-slate-500 mt-1 flex items-center gap-2">
                <Activity size={16} />
                {sections[activeTab].purpose}
              </p>
            </div>
            <span className={`
              px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider border
              ${sections[activeTab].type === 'Dinámico' 
                ? 'bg-purple-100 text-purple-700 border-purple-200' 
                : 'bg-blue-100 text-blue-700 border-blue-200'}
            `}>
              Diagrama {sections[activeTab].type}
            </span>
          </div>

          {/* Grid de Contenido: Texto (Izq/Arriba) + Visualización (Der/Abajo) */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 h-full content-start">
            
            {/* Columna de Texto */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-fit">
              <h3 className="text-lg font-semibold mb-4 text-slate-700 flex items-center gap-2">
                <Minimize2 className="w-4 h-4" /> Descripción Detallada
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {sections[activeTab].description}
              </p>
              
              <div className="mt-6 p-4 bg-slate-50 rounded border border-slate-100">
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Claves de interpretación</h4>
                <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                  <li>Observa la relación causa-efecto.</li>
                  {sections[activeTab].type === 'Dinámico' ? (
                    <li>Nota cómo cambia el estado con el tiempo (animación).</li>
                  ) : (
                    <li>Compara los estados inicial y final.</li>
                  )}
                </ul>
              </div>
            </div>

            {/* Columna de Visualización */}
            <div className="bg-white p-2 rounded-xl shadow-lg border-2 border-slate-100 grid place-items-center relative">
              <div className="absolute top-4 right-4 text-slate-300">
                <Maximize2 className="w-5 h-5" />
              </div>
              <div className="w-full p-4">
                <ActiveComponent />
              </div>
              <div className="w-full bg-slate-50 p-2 text-center border-t border-slate-100 text-xs text-slate-400 italic">
                Representación visual interactiva: {sections[activeTab].title}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Lesson3;