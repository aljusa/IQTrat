import React, { useState } from 'react';
import { 
  Flame, 
  Hammer, 
  Microscope, 
  ShieldCheck, 
  Activity, 
  Factory, 
  Network,
  
  ChevronRight,
  Target,
  ArrowRight
} from 'lucide-react';
import DivCarousel from '../assets/DivCarousel';

/**
 * TIPOS Y DEFINICIONES
 */

type SectionId = 
  | 'general' 
  | 'mechanical' 
  | 'microstructure' 
  | 'stress' 
  | 'service' 
  | 'process' 
  | 'integrator';

interface SectionData {
  id: SectionId;
  title: string;
  icon: React.ElementType;
  description: React.ReactNode;
  details: string[];
}

const SECTIONS: SectionData[] = [
  {
    id: 'general',
    title: 'Introducción',
    icon: Network,
    description: 
    (<DivCarousel>
     
       <p>Los tratamientos térmicos <strong>no se aplican de manera arbitraria</strong>. Cada uno responde a objetivos técnicos bien definidos que dependen de la función que desempeñará la pieza metálica. <br />En esta lección se analiza <strong>por qué se selecciona un tratamiento térmico específico</strong> y qué resultados se esperan obtener en términos de propiedades y desempeño del material.</p>  
   
    </DivCarousel>),
    details: [
      'Entrada: Material Base',
      'Proceso: Ciclos de Calentamiento/Enfriamiento',
      'Objetivo: Modificación estructural',
      'Salida: Propiedades Mejoradas'
    ]
  },
  {
    id: 'mechanical',
    title: 'Modificar las propiedades mecánicas',
    icon: Hammer,
    description: (
      <DivCarousel>
        <p>Uno de los <strong>objetivos principales</strong> de los tratamientos térmicos es <strong>ajustar las propiedades mecánicas</strong> del metal para adecuarlo a una aplicación específica.
        <br />
        Mediante el control de la temperatura y el enfriamiento, es posible cambiar el comportamiento del material frente a esfuerzos.</p> 
        <div><strong>Entre las modificaciones más comunes se encuentran:</strong>
        <ul>
          <li>Incrementar la dureza para resistir el desgaste.</li>
          <li>Aumentar la resistencia mecánica frente a cargas elevadas.</li>
          <li>Mejorar la ductilidad para permitir deformaciones sin fractura.</li>
          <li>Incrementar la tenacidad para absorber energía antes de fallar.</li>
        </ul>
        Estas variaciones permiten que un mismo material tenga usos muy diferentes según el tratamiento aplicado.</div>
        </DivCarousel>
    ),
    details: [
      'Aumento significativo de Dureza',
      'Incremento de Resistencia a la Tracción',
      'Variación controlada de la Ductilidad'
    ]
  },
  {
    id: 'microstructure',
    title: 'Controlar la microestructura del metal',
    icon: Microscope,
    description: 
    (
      <DivCarousel>
        <p>Los tratamientos térmicos también buscan modificar la microestructura interna del metal. Esto implica cambios en la forma en que los átomos y las fases se organizan internamente.</p>
        <div> <strong>Al controlar la microestructura, se puede influir directamente en:</strong>
        <ul>
          <li>El tamaño de grano.</li>
          <li>La distribución de fases internas.</li>
          <li>La homogeneidad del material.</li>
        </ul>
        Una microestructura adecuada permite lograr un equilibrio óptimo entre resistencia y ductilidad, mejorando el desempeño general del metal.</div>
       </DivCarousel>
        
    )
    ,
    details: [
      'Recristalización',
      'Crecimiento de Grano',
      'Transformación de Fases (Austenita -> Martensita)'
    ]
  },
  {
    id: 'stress',
    title: 'Eliminar tensiones internas',
    icon: Activity,
    description: 
    (
      <DivCarousel>
        <p>         Ahora veremos que durante procesos como la fundición, laminación, forjado o mecanizado, los metales pueden acumular tensiones internas que afectan su estabilidad.
</p>
        <div> <strong>Estas tensiones pueden provocar:</strong>
        <ul>
          <li>Deformaciones inesperadas.</li>
          <li>Aparición de grietas.</li>
          <li>Fallas prematuras durante el servicio.</li>
        </ul>
        Uno de los objetivos clave del tratamiento térmico es aliviar o eliminar estas tensiones, mejorando la estabilidad dimensional y la confiabilidad del componente.
      
      </div>
        
      </DivCarousel>
    ),
    details: [
      'Estado Inicial: Alta tensión residual',
      'Mecanismo: Difusión atómica',
      'Estado Final: Essectionilidad dimensional'
    ]
  },
  {
    id: 'service',
    title: 'Mejorar el comportamiento en servicio',
    icon: ShieldCheck,
    description: 
    (
      <DivCarousel>
        <p>los metales tratados térmicamente presentan un mejor desempeño bajo condiciones reales de uso. <br /> El tratamiento se selecciona pensando en las exigencias que enfrentará la pieza durante su vida útil.</p>
        <div><strong>Esto incluye:</strong>
        <ul>
          <li>Mayor resistencia al desgaste y a la fatiga.</li>
          <li>Mejor respuesta ante impactos.</li>
          <li>Mayor estabilidad frente a cambios de temperatura.</li>
        </ul>
        El objetivo final es garantizar que el material cumpla su función durante el tiempo previsto, reduciendo el riesgo de fallas críticas.</div>
        
    
      </DivCarousel>
    ),
    details: [
      'Resistencia al Desgaste',
      'Tenacidad al Impacto',
      'Comportamiento a Fatiga'
    ]
  },
  {
    id: 'process',
    title: 'Facilitar procesos de fabricación posteriores',
    icon: Factory,
    description:
    <DivCarousel>
      <p> Finalmente veremos que algunos tratamientos térmicos se aplican antes del uso final del material, con el propósito de facilitar etapas posteriores del proceso productivo.</p>
      <div>    <strong>Por ejemplo:</strong>
        <ul>
          <li>Aumentar la ductilidad para facilitar el conformado.</li>
          <li>Reducir la dureza para mejorar la maquinabilidad.</li>
          <li>Homogeneizar la estructura antes de otros tratamientos.</li>
        </ul>
        De esta manera, el tratamiento térmico optimiza tanto el proceso de fabricación como el desempeño final del producto.
     </div>
    
    </DivCarousel>
    ,
    details: [
      'Pre-mecanizado',
      'Tratamiento Térmico',
      'Acabado Final'
    ]
  },
  {
    id: 'integrator',
    title: 'Cierre de la lección',
    icon: Target,
    description: 
    (
<DivCarousel>
  <p> Los objetivos de los tratamientos térmicos abarcan desde la mejora de propiedades mecánicas hasta el control de la microestructura y la eliminación de tensiones internas. <br />Cada tratamiento responde a una necesidad específica, relacionada con el uso final del material y las condiciones de servicio.</p>
 <p>Con esta base conceptual, el siguiente paso será estudiar los principios físicos que explican cómo la temperatura, el tiempo y el enfriamiento influyen en el comportamiento de los metales.</p>
        
        
      
</DivCarousel>

    ),
    details: [
      'Sinergia de propiedades',
      'Optimización de costos',
      'Ciclo de vida del producto'
    ]
  }
];

/**
 * COMPONENTES DE DIAGRAMAS (RENDERIZADO VISUAL)
 */

const DiagramGeneral = () => (
  <div className="w-full h-64 bg-slate-50 border border-slate-200 rounded-lg p-4 grid place-items-center">
    <svg viewBox="0 0 400 150" className="w-full h-full">
      {/* Nodos */}
      <rect x="20" y="55" width="80" height="40" rx="4" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
      <text x="60" y="80" textAnchor="middle" className="text-xs fill-slate-700 font-bold">Tratamiento</text>
      
      <path d="M100 75 L140 75" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
      
      <rect x="140" y="55" width="100" height="40" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
      <text x="190" y="80" textAnchor="middle" className="text-xs fill-blue-800 font-bold">Objetivos Téc.</text>
      
      <path d="M240 75 L280 75" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
      
      <rect x="280" y="55" width="100" height="40" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
      <text x="330" y="80" textAnchor="middle" className="text-xs fill-green-800 font-bold">Propiedades</text>
      
      {/* Definición de flecha */}
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#94a3b8" />
        </marker>
      </defs>
    </svg>
  </div>
);

const DiagramMechanical = () => (
    <div className="w-full max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-xl p-6">

      <div className="grid grid-cols-2 gap-10">

        {/* ================= ANTES ================= */}
        <div>
          <h3 className="text-sm font-semibold text-slate-500 text-center mb-4 tracking-wide">
            ANTES
          </h3>

          {/* Área del gráfico */}
          <div className="relative h-44 grid grid-cols-3 gap-6 items-end border-b border-slate-300 pb-2">

            <div className="relative h-full">
              <div
                className="absolute bottom-0 w-full bg-slate-400 rounded-t-lg transition-all duration-700"
                style={{ height: "40%" }}
              />
            </div>

            <div className="relative h-full">
              <div
                className="absolute bottom-0 w-full bg-slate-500 rounded-t-lg transition-all duration-700"
                style={{ height: "50%" }}
              />
            </div>

            <div className="relative h-full">
              <div
                className="absolute bottom-0 w-full bg-blue-400 rounded-t-lg transition-all duration-700"
                style={{ height: "80%" }}
              />
            </div>
          </div>

          {/* Labels */}
          <div className="grid grid-cols-3 gap-6 mt-2 text-[11px] text-slate-500 text-center">
            <span>Dureza</span>
            <span>Resistencia</span>
            <span>Ductilidad</span>
          </div>

          <p className="text-xs text-slate-400 text-center mt-3">
            Metal base
          </p>
        </div>

        {/* ================= DESPUÉS ================= */}
        <div>
          <h3 className="text-sm font-semibold text-orange-600 text-center mb-4 tracking-wide">
            DESPUÉS
          </h3>

          {/* Área del gráfico */}
          <div className="relative h-44 grid grid-cols-3 gap-6 items-end border-b border-slate-300 pb-2">

            <div className="relative h-full">
              <div
                className="absolute bottom-0 w-full bg-orange-500 rounded-t-lg transition-all duration-700"
                style={{ height: "90%" }}
              />
            </div>

            <div className="relative h-full">
              <div
                className="absolute bottom-0 w-full bg-orange-400 rounded-t-lg transition-all duration-700"
                style={{ height: "85%" }}
              />
            </div>

            <div className="relative h-full">
              <div
                className="absolute bottom-0 w-full bg-slate-300 rounded-t-lg transition-all duration-700"
                style={{ height: "30%" }}
              />
            </div>
          </div>

          {/* Labels */}
          <div className="grid grid-cols-3 gap-6 mt-2 text-[11px] text-slate-500 text-center">
            <span>Dureza</span>
            <span>Resistencia</span>
            <span>Ductilidad</span>
          </div>

          <p className="text-xs text-slate-400 text-center mt-3">
            Tratado térmicamente
          </p>
        </div>

      </div>
    </div>
);

const DiagramMicrostructure = () => (
  <div className="w-full max-w-3xl mx-auto">
      {/* Tarjeta Principal */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 relative overflow-hidden">
        
        {/* Cabecera sutil */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-200 via-orange-400 to-orange-600"></div>
        <h3 className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-8 text-center">
          Proceso de Sinterización
        </h3>

        {/* Contenedor del Flujo */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          
          {/* ETAPA 1: Grano Fino (Estado Inicial) */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-slate-200 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="w-32 h-32 rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center shadow-inner relative overflow-hidden">
                {/* Visualización de partículas pequeñas */}
                <div className="grid grid-cols-4 gap-2 p-4">
                  {[...Array(12)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-3 h-3 rounded-full bg-slate-300 shadow-sm"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center">
              <span className="block font-bold text-slate-700">Grano Fino</span>
              <span className="text-xs text-slate-400">Estado Inicial</span>
            </div>
          </div>

          {/* CONECTOR: Proceso (Calor + Tiempo) */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 relative">
            {/* Línea de fondo */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10 hidden md:block"></div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center shadow-md border border-orange-100 animate-pulse">
                <Flame size={28} fill="currentColor" className="fill-orange-500/20" />
              </div>
              <div className="text-center bg-white px-2">
                <span className="text-xs font-bold text-orange-600 uppercase">Calor + Tiempo</span>
                <div className="flex justify-center mt-1 text-slate-300">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* ETAPA 2: Grano Transformado (Estado Final) */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-orange-200 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="w-32 h-32 rounded-full bg-orange-50/50 border-2 border-orange-200 flex items-center justify-center shadow-sm relative">
                {/* Visualización de granos unidos/crecidos */}
                <div className="grid grid-cols-2 gap-1 relative">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-lg border border-orange-300 bg-orange-400/20 backdrop-blur-sm transform rotate-6 shadow-sm flex items-center justify-center"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-white/40 to-transparent"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center">
              <span className="block font-bold text-slate-700">Cristalizado</span>
              <span className="text-xs text-orange-500 font-medium">Transformación Completa</span>
            </div>
          </div>

        </div>
      </div>
    </div>
);

const DiagramStress = () => (
  <div className="w-full h-64 bg-white border border-slate-200 rounded-lg p-4 grid grid-rows-[1fr_auto_1fr] gap-4">
    <div className="grid grid-cols-2 gap-4">
      {/* Pieza con Tensión */}
      <div className="relative rounded border border-slate-300 h-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-300 to-slate-200 opacity-80"></div>
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-bold text-white drop-shadow-md">Tensión Alta</span>
        </div>
        {/* Vectores de tensión abstractos */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <path d="M10,10 L30,30 M50,10 L10,50" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      {/* Pieza Aliviada */}
      <div className="relative rounded border border-slate-300 h-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-200 to-slate-100 opacity-80"></div>
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-bold text-blue-900 drop-shadow-sm">Aliviada</span>
        </div>
      </div>
    </div>
    
    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden grid place-items-center">
        <div className="w-full h-full bg-gradient-to-r from-red-500 to-blue-400"></div>
    </div>

    <div className="grid grid-cols-1 place-items-center">
        <p className="text-xs text-slate-500 text-center max-w-md">
            El gráfico superior muestra la transición energética interna. El calentamiento controlado permite la reordenación atómica, eliminando los campos de tensión residuales representados en rojo.
        </p>
    </div>
  </div>
);

const DiagramService = () => (
  <div className="w-full h-64 bg-slate-50 border border-slate-200 rounded-lg p-4 grid grid-cols-3 gap-4 place-items-center">
    {[
      { label: 'Carga', val: '85%', color: 'bg-indigo-500' },
      { label: 'Impacto', val: '60%', color: 'bg-emerald-500' },
      { label: 'Fatiga', val: '92%', color: 'bg-rose-500' }
    ].map((item, idx) => (
      <div key={idx} className="w-full h-full bg-white rounded shadow-sm grid grid-rows-[1fr_auto] p-4 border border-slate-100">
        <div className="w-full bg-slate-100 rounded-full relative mx-auto w-4/5 h-32 overflow-hidden">
           <div className={`absolute bottom-0 left-0 w-full ${item.color} transition-all duration-1000`} style={{ height: item.val }}></div>
           <div className="absolute inset-0 grid place-items-center text-slate-800 font-bold mix-blend-multiply">{item.val}</div>
        </div>
        <div className="text-center mt-2 font-semibold text-slate-600">{item.label}</div>
      </div>
    ))}
  </div>
);

const DiagramProcess = () => (
  <div className="w-full h-64 bg-slate-50 border border-slate-200 rounded-lg p-6">
    <div className="h-full w-full grid grid-cols-[1fr_auto_1fr_auto_1fr] place-items-center">
        
        <div className="text-center group">
            <div className="w-16 h-16 rounded-full bg-slate-200 grid place-items-center mb-2 group-hover:bg-slate-300 transition-colors">
                <Factory className="text-slate-600" />
            </div>
            <span className="text-xs font-bold text-slate-600">Forja/Fundición</span>
        </div>

        <ChevronRight className="text-slate-300" />

        <div className="text-center group">
            <div className="w-20 h-20 rounded-full bg-orange-100 border-4 border-orange-500 grid place-items-center mb-2 shadow-lg scale-110">
                <Flame className="text-orange-600" size={32} />
            </div>
            <span className="text-sm font-bold text-orange-700">Tratamiento T.</span>
        </div>

        <ChevronRight className="text-slate-300" />

        <div className="text-center group">
            <div className="w-16 h-16 rounded-full bg-slate-200 grid place-items-center mb-2 group-hover:bg-slate-300 transition-colors">
                <Target className="text-slate-600" />
            </div>
            <span className="text-xs font-bold text-slate-600">Mecanizado Final</span>
        </div>

    </div>
  </div>
);

const DiagramIntegrator = () => (
    <div className="w-full h-64 bg-slate-50 border border-slate-200 rounded-lg relative overflow-hidden grid place-items-center">
       <svg viewBox="0 0 300 200" className="w-full h-full max-w-md">
           {/* Center */}
           <circle cx="150" cy="100" r="30" fill="#f97316" className="opacity-20 animate-pulse" />
           <circle cx="150" cy="100" r="20" fill="#ea580c" />
           <text x="150" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">OBJETIVO</text>

           {/* Nodes */}
           <g transform="translate(150, 100)">
               {/* Top */}
               <line x1="0" y1="-20" x2="0" y2="-60" stroke="#94a3b8" strokeWidth="2" />
               <circle cx="0" cy="-70" r="15" fill="#3b82f6" />
               <text x="0" y="-67" textAnchor="middle" fill="white" fontSize="8">Dureza</text>

               {/* Right Bottom */}
               <line x1="18" y1="10" x2="52" y2="30" stroke="#94a3b8" strokeWidth="2" />
               <circle cx="60" cy="35" r="15" fill="#10b981" />
               <text x="60" y="38" textAnchor="middle" fill="white" fontSize="8">Tenaz</text>

               {/* Left Bottom */}
               <line x1="-18" y1="10" x2="-52" y2="30" stroke="#94a3b8" strokeWidth="2" />
               <circle cx="-60" cy="35" r="15" fill="#8b5cf6" />
               <text x="-60" y="38" textAnchor="middle" fill="white" fontSize="8">Costos</text>
           </g>
       </svg>

    </div>
);

/**
 * COMPONENTE PRINCIPAL DE LA LECCIÓN
 */

const LessonLayout = () => {
  const [activesection, setActivesection] = useState<SectionId>('general');

  const activeContent = SECTIONS.find(s => s.id === activesection) || SECTIONS[0];

  const renderDiagram = () => {
    switch (activesection) {
      case 'general': return <DiagramGeneral />;
      case 'mechanical': return <DiagramMechanical />;
      case 'microstructure': return <DiagramMicrostructure />;
      case 'stress': return <DiagramStress />;
      case 'service': return <DiagramService />;
      case 'process': return <DiagramProcess />;
      case 'integrator': return <DiagramIntegrator />;
      default: return <div className="p-4">Diagrama no disponible</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 grid grid-rows-[auto_auto_1fr] overflow-hidden max-w-6xl mx-auto shadow-2xl my-4 rounded-xl border border-slate-300">
      
       {/* Header y Navegación (Grid System) */}
      <header className="bg-white border-b border-slate-200 top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto p-4">
          <h1 className="text-2xl font-bold text-slate-800 mb-4 text-center">Objetivos de los tratamientos térmicos en los metales</h1>
          {/* Grid de Pestañas */}
          <nav className="grid grid-cols-7 gap-2">
            {SECTIONS.map((section) => {
              const Icon = section.icon;
              const isActive = activesection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActivesection(section.id)}
                  className={`
                    flex flex-col items-center justify-center p-3 rounded-md transition-all duration-200 text-sm font-medium
                    ${isActive 
                      ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'}
                  `}
                >
                  <Icon size={20} className="mb-1" />
                </button>
              );
            })}
          </nav>
        </div>
      </header>


      {/* MAIN CONTENT AREA: GRID CELL 3 */}
      <main className="bg-slate-50 p-6 lg:p-8 grid place-items-start h-full">
        
        {/* Card Container - GRID Layout interno */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 w-full max-w-5xl mx-auto  overflow-hidden h-full lg:h-auto">
          
          {/* Columna Izquierda: Texto e Info */}

           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 grid gap-2">
          <div className="justify-start items-center">
            
            <h2 className="text-2xl font-bold text-slate-800">{activeContent.title}</h2>
            {activeContent.description}
            
          </div>   {renderDiagram()}
          
        </div>

   
            
        


        </div>
      </main>
    </div>
  );
};

export default LessonLayout;
