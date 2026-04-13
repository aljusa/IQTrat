import React, { useState } from 'react';
import { BookOpen, ChevronRight, Settings, Activity, Thermometer, Shield, Cpu, Zap, Maximize, Layers, GitMerge } from 'lucide-react';

// --- VISUAL COMPONENTS FOR EACH SECTION ---

const TimelineVisual = () => (
  <div className="flex flex-col md:flex-row items-center justify-between w-full p-4 bg-slate-50 rounded-lg">
    <div className="flex flex-col items-center text-center max-w-[120px]">
      <div className="w-16 h-16 rounded-full bg-slate-300 flex items-center justify-center mb-2 shadow-sm">
        <span className="font-bold text-slate-600">S. XX</span>
      </div>
      <p className="text-xs font-semibold">Aceros Tradicionales</p>
    </div>
    <div className="h-8 w-1 md:h-1 md:w-full bg-blue-300 flex-1 mx-2 relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ChevronRight className="text-blue-500 hidden md:block" />
      </div>
    </div>
    <div className="flex flex-col items-center text-center max-w-[120px]">
      <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center mb-2 shadow-sm border-2 border-blue-400">
        <Settings className="text-blue-600" />
      </div>
      <p className="text-xs font-semibold text-blue-800">Mejoras de Proceso</p>
    </div>
    <div className="h-8 w-1 md:h-1 md:w-full bg-indigo-400 flex-1 mx-2 relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ChevronRight className="text-indigo-600 hidden md:block" />
      </div>
    </div>
    <div className="flex flex-col items-center text-center max-w-[120px]">
      <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center mb-2 shadow-lg shadow-indigo-200">
        <Zap className="text-white" />
      </div>
      <p className="text-xs font-bold text-indigo-700">Materiales Avanzados</p>
    </div>
  </div>
);

const StainlessSteelVisual = () => (
  <div className="flex flex-col md:flex-row justify-center gap-8 w-full p-6 bg-slate-50 rounded-lg">
    <div className="flex flex-col items-center">
      <h4 className="text-sm font-bold text-slate-500 mb-2">Sin Tratar</h4>
      <div className="w-32 h-32 bg-slate-200 border-2 border-slate-300 rounded-md relative flex items-center justify-center overflow-hidden">
        <div className="text-center z-10">
          <p className="text-lg font-black text-slate-600">~200 HV</p>
          <p className="text-xs text-slate-500 mt-1">Dureza Base</p>
        </div>
      </div>
      <p className="text-xs text-green-600 font-semibold mt-2 flex items-center gap-1">
        <Shield size={12}/> Alta Resistencia a Corrosión
      </p>
    </div>
    <div className="flex flex-col items-center">
      <h4 className="text-sm font-bold text-indigo-700 mb-2">Carburizado (Baja Temp.)</h4>
      <div className="w-32 h-32 bg-slate-200 border-4 border-indigo-500 rounded-md relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-indigo-500 opacity-20"></div>
        <div className="absolute top-0 w-full h-2 bg-indigo-600"></div>
        <div className="absolute bottom-0 w-full h-2 bg-indigo-600"></div>
        <div className="absolute left-0 h-full w-2 bg-indigo-600"></div>
        <div className="absolute right-0 h-full w-2 bg-indigo-600"></div>
        <div className="text-center z-10">
          <p className="text-lg font-black text-indigo-800">~1000 HV</p>
          <p className="text-xs text-indigo-700 mt-1">Superficie Endurecida</p>
        </div>
      </div>
      <p className="text-xs text-green-600 font-semibold mt-2 flex items-center gap-1">
        <Shield size={12}/> Alta Resistencia a Corrosión
      </p>
    </div>
  </div>
);

const LowTempGraphVisual = () => (
  <div className="w-full bg-white p-4 rounded-lg border border-slate-200">
    <h4 className="text-xs font-bold text-center mb-4 text-slate-600">Temperatura vs Efectos Microestructurales</h4>
    <div className="relative h-48 w-full border-l-2 border-b-2 border-slate-400 pl-2 pb-2 flex items-end">
      {/* Y Axis Label */}
      <div className="absolute -left-6 bottom-1/2 transform -rotate-90 text-xs font-semibold text-slate-500">
        Temperatura
      </div>
      {/* X Axis Label */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-slate-500">
        Tiempo de Tratamiento
      </div>
      
      {/* High Temp Zone */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-red-100 opacity-50 rounded-tr-md flex items-center justify-center">
        <span className="text-red-600 text-xs font-bold">Riesgo: Fases Indeseadas (Precipitación)</span>
      </div>
      
      {/* Low Temp Zone */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-green-50 rounded-br-md flex items-center justify-center border-t-2 border-dashed border-slate-300">
        <span className="text-green-700 text-xs font-bold">Zona Segura: Difusión Pura (Sin alteración)</span>
      </div>
      
      {/* Process Line */}
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <path d="M 0 80 Q 50 80 100 80 L 300 80" stroke="#047857" strokeWidth="4" fill="none" strokeDasharray="5,5" className="animate-pulse"/>
        <path d="M 0 20 Q 50 20 100 20 L 300 20" stroke="#DC2626" strokeWidth="2" fill="none" opacity="0.3"/>
      </svg>
    </div>
  </div>
);

const PlasmaVisual = () => (
  <div className="w-full h-64 bg-slate-900 rounded-xl relative overflow-hidden flex flex-col items-center justify-end pb-8 border-4 border-slate-700">
    <div className="absolute top-4 text-center text-cyan-400 text-xs font-mono tracking-widest">CÁMARA DE VACÍO / PLASMA</div>
    
    {/* Plasma Glow */}
    <div className="absolute top-1/4 w-3/4 h-32 bg-fuchsia-600 blur-3xl opacity-40 rounded-full animate-pulse"></div>
    <div className="absolute top-1/4 w-1/2 h-24 bg-cyan-400 blur-2xl opacity-50 rounded-full"></div>
    
    {/* Ions raining down */}
    <div className="absolute inset-0 flex justify-center gap-8 top-12">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className={`w-1 h-16 bg-gradient-to-b from-transparent to-cyan-300 opacity-80 animate-bounce`} style={{animationDelay: `${i * 0.2}s`}}></div>
      ))}
    </div>
    
    {/* Material Base */}
    <div className="w-3/4 h-12 bg-slate-500 rounded-t-lg relative border-t-4 border-cyan-400 z-10 flex items-center justify-center">
      <span className="text-white text-xs font-bold">Superficie del Material (Difusión de C)</span>
    </div>
  </div>
);

const SuperplasticVisual = () => (
  <div className="w-full h-56 bg-slate-100 rounded-lg flex items-center justify-center relative p-8">
    <div className="flex gap-4 items-center w-full max-w-md">
      {/* Press Top */}
      <div className="flex-1 flex flex-col items-center">
        <div className="w-16 h-8 bg-slate-700 rounded-t-md animate-bounce flex items-center justify-center text-white text-xs">Fuerza</div>
        <div className="w-4 h-8 bg-slate-400"></div>
        {/* Deforming block */}
        <div className="w-24 h-16 bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-400 rounded-3xl flex items-center justify-center border-4 border-orange-600 shadow-lg shadow-orange-200 transform transition-transform duration-1000 hover:scale-x-125">
          <span className="text-xs font-bold text-white text-center leading-tight">Deformación +<br/>Carburización</span>
        </div>
        <div className="w-4 h-8 bg-slate-400"></div>
        <div className="w-16 h-8 bg-slate-700 rounded-b-md flex items-center justify-center text-white text-xs">Fuerza</div>
      </div>
    </div>
    <div className="absolute bottom-2 right-4 text-xs text-slate-400 italic">Pasa el ratón sobre la pieza para ver la deformación</div>
  </div>
);

const TitaniumVisual = () => (
  <div className="flex gap-4 w-full justify-center">
    <div className="flex-1 bg-slate-50 rounded-lg p-4 border border-slate-200">
      <h4 className="text-sm font-bold text-slate-500 text-center mb-4">Titanio Sin Tratar</h4>
      <div className="h-32 w-full bg-slate-300 relative rounded overflow-hidden">
        {/* Jagged top representing wear */}
        <div className="absolute top-0 w-full h-4 bg-slate-100">
          <svg preserveAspectRatio="none" viewBox="0 0 100 100" className="h-full w-full" fill="#cbd5e1">
            <polygon points="0,0 100,0 100,100 90,20 80,80 70,10 60,90 50,30 40,70 30,10 20,80 10,20 0,100" />
          </svg>
        </div>
        <div className="absolute bottom-4 left-0 w-full text-center">
          <span className="text-xs font-bold text-slate-600 bg-white px-2 py-1 rounded">Alto Desgaste</span>
        </div>
      </div>
    </div>
    <div className="flex-1 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
      <h4 className="text-sm font-bold text-indigo-800 text-center mb-4">Titanio Carburizado</h4>
      <div className="h-32 w-full bg-slate-300 relative rounded overflow-hidden">
        {/* Smooth, hard top representing resistance */}
        <div className="absolute top-0 w-full h-8 bg-indigo-600 shadow-inner"></div>
        <div className="absolute bottom-4 left-0 w-full text-center">
          <span className="text-xs font-bold text-indigo-700 bg-white px-2 py-1 rounded">Resistencia Extrema</span>
        </div>
      </div>
    </div>
  </div>
);

const SiliconVisual = () => (
  <div className="w-full h-64 bg-slate-900 rounded-lg relative overflow-hidden flex flex-col justify-center items-center">
    {/* Silicon Substrate grid */}
    <div className="absolute bottom-0 w-full h-1/2 opacity-30" 
         style={{backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
    </div>
    
    {/* Graphene Hexagons overlay */}
    <div className="absolute top-4 w-full h-1/2 flex flex-wrap justify-center content-center opacity-80"
         style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'69.28203230275509\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M40 17.32050807568877l-20 11.547005383792516L0 17.32050807568877V-5.773502691896258l20-11.547005383792516 20 11.547005383792516V17.32050807568877zm0 46.188021538255084l-20 11.547005383792516-20-11.547005383792516V40.41451346256631l20-11.547005383792516 20 11.547005383792516v23.094010767585035z\' fill=\'none\' stroke=\'%23f59e0b\' stroke-width=\'2\'/%3E%3C/svg%3E")'}}>
    </div>

    <div className="z-10 bg-black bg-opacity-70 p-4 rounded text-center border border-slate-700">
      <div className="text-yellow-400 font-bold text-sm mb-1 flex items-center justify-center gap-2"><Layers size={16}/> Capa de Grafeno (C)</div>
      <div className="h-px w-full bg-slate-500 my-2"></div>
      <div className="text-cyan-400 font-bold text-sm flex items-center justify-center gap-2"><Cpu size={16}/> Sustrato de Silicio (Si)</div>
    </div>
  </div>
);

const MicroTechVisual = () => (
  <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center p-4">
    <div className="relative w-48 h-48 bg-slate-800 rounded-xl shadow-2xl border-4 border-slate-900 flex items-center justify-center">
      {/* Pins */}
      <div className="absolute -top-3 left-4 w-4 h-4 bg-yellow-500 rounded-t-sm"></div>
      <div className="absolute -top-3 left-12 w-4 h-4 bg-yellow-500 rounded-t-sm"></div>
      <div className="absolute -top-3 right-12 w-4 h-4 bg-yellow-500 rounded-t-sm"></div>
      <div className="absolute -top-3 right-4 w-4 h-4 bg-yellow-500 rounded-t-sm"></div>
      
      <div className="absolute -bottom-3 left-4 w-4 h-4 bg-yellow-500 rounded-b-sm"></div>
      <div className="absolute -bottom-3 left-12 w-4 h-4 bg-yellow-500 rounded-b-sm"></div>
      <div className="absolute -bottom-3 right-12 w-4 h-4 bg-yellow-500 rounded-b-sm"></div>
      <div className="absolute -bottom-3 right-4 w-4 h-4 bg-yellow-500 rounded-b-sm"></div>

      {/* Chip core with glowing border representing carburized functional layer */}
      <div className="w-24 h-24 bg-slate-700 rounded-md border-2 border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.5)] flex items-center justify-center">
         <Activity className="text-green-400 opacity-50" size={32}/>
      </div>
      <div className="absolute bottom-2 text-[10px] text-green-400 font-mono">CAPA MODIFICADA A NANOESCALA</div>
    </div>
  </div>
);

const ControlSystemVisual = () => (
  <div className="w-full bg-slate-800 rounded-xl p-6 shadow-inner text-white font-mono">
    <h4 className="text-center text-cyan-400 text-sm mb-6 border-b border-slate-700 pb-2">SISTEMA DE CONTROL HÍBRIDO (EN TIEMPO REAL)</h4>
    <div className="grid grid-cols-3 gap-4">
      {/* Sensor 1 */}
      <div className="bg-slate-900 p-4 rounded-lg flex flex-col items-center border border-slate-700">
        <Thermometer className="text-red-400 mb-2" />
        <span className="text-xs text-slate-400">Temp</span>
        <span className="text-xl font-bold text-red-400">420°C</span>
      </div>
      {/* Sensor 2 */}
      <div className="bg-slate-900 p-4 rounded-lg flex flex-col items-center border border-slate-700">
        <Activity className="text-green-400 mb-2" />
        <span className="text-xs text-slate-400">Potencial C</span>
        <span className="text-xl font-bold text-green-400">0.85%</span>
      </div>
      {/* Sensor 3 */}
      <div className="bg-slate-900 p-4 rounded-lg flex flex-col items-center border border-slate-700">
        <Settings className="text-blue-400 mb-2 animate-spin-slow" />
        <span className="text-xs text-slate-400">Flujo Gas</span>
        <span className="text-xl font-bold text-blue-400">12L/m</span>
      </div>
    </div>
    <div className="mt-6 bg-slate-900 h-2 w-full rounded-full overflow-hidden border border-slate-700">
      <div className="h-full bg-cyan-500 w-3/4 animate-pulse"></div>
    </div>
    <p className="text-center text-[10px] text-slate-500 mt-2">OPTIMIZACIÓN DE PROCESO ACTIVA</p>
  </div>
);

const NetworkVisual = () => (
  <div className="w-full flex justify-center items-center p-8 bg-slate-50 rounded-lg">
    <div className="relative w-full max-w-lg h-64 flex items-center justify-center">
      {/* Central Node */}
      <div className="z-10 w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-xl border-4 border-indigo-200">
        Carburización
      </div>
      
      {/* Branches Left (Materials) */}
      <div className="absolute left-0 top-1/4 bg-slate-200 px-3 py-1 rounded text-xs font-bold text-slate-700 border border-slate-300">Acero</div>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate-200 px-3 py-1 rounded text-xs font-bold text-slate-700 border border-slate-300">Titanio</div>
      <div className="absolute left-0 bottom-1/4 bg-slate-200 px-3 py-1 rounded text-xs font-bold text-slate-700 border border-slate-300">Silicio</div>
      
      {/* Lines Left */}
      <svg className="absolute inset-0 w-full h-full" style={{zIndex: 0}}>
        <path d="M 60 40 Q 150 40 250 128" stroke="#cbd5e1" strokeWidth="2" fill="none"/>
        <path d="M 60 128 L 250 128" stroke="#cbd5e1" strokeWidth="2" fill="none"/>
        <path d="M 60 216 Q 150 216 250 128" stroke="#cbd5e1" strokeWidth="2" fill="none"/>
        
        {/* Lines Right */}
        <path d="M 250 128 Q 350 40 440 40" stroke="#a5b4fc" strokeWidth="2" fill="none" strokeDasharray="4"/>
        <path d="M 250 128 Q 350 128 440 128" stroke="#a5b4fc" strokeWidth="2" fill="none" strokeDasharray="4"/>
        <path d="M 250 128 Q 350 216 440 216" stroke="#a5b4fc" strokeWidth="2" fill="none" strokeDasharray="4"/>
      </svg>

      {/* Branches Right (Applications) */}
      <div className="absolute right-0 top-1/4 bg-blue-100 px-3 py-1 rounded text-xs font-bold text-blue-800 border border-blue-200">Industria Pesada</div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-100 px-3 py-1 rounded text-xs font-bold text-blue-800 border border-blue-200">Aeroespacial</div>
      <div className="absolute right-0 bottom-1/4 bg-blue-100 px-3 py-1 rounded text-xs font-bold text-blue-800 border border-blue-200">Microelectrónica</div>
    </div>
  </div>
);


// --- CONTENT DATA ---

const lessonContent = [
  {
    id: "intro",
    title: "Introducción a la evolución de la carburización",
    explanation: "La carburización ha evolucionado significativamente, pasando de ser un proceso aplicado casi exclusivamente a aceros convencionales a una tecnología adaptable a materiales avanzados. Este progreso responde a nuevas demandas industriales en términos de precisión, durabilidad y funcionalidad.",
    visualText: "Línea de tiempo que muestra la evolución desde la carburización tradicional de aceros hasta su aplicación en materiales avanzados y tecnologías modernas.",
    VisualComponent: TimelineVisual
  },
  {
    id: "aceros-inoxidables",
    title: "Carburización en aceros inoxidables",
    explanation: "Los aceros inoxidables, tradicionalmente difíciles de carburizar debido a su sensibilidad a la corrosión, ahora pueden tratarse mediante procesos de baja temperatura. Estos métodos permiten aumentar notablemente la dureza superficial (desde ~200 HV hasta ~1000 HV) gracias a la formación de estructuras enriquecidas en carbono sin precipitación perjudicial de carburos, sin comprometer la resistencia a la corrosión.",
    visualText: "Comparación de dos superficies de acero inoxidable: una sin tratar (menor dureza) y otra carburizada a baja temperatura (mayor dureza), con indicadores de dureza y resistencia a la corrosión.",
    VisualComponent: StainlessSteelVisual
  },
  {
    id: "baja-temperatura",
    title: "Carburización a baja temperatura",
    explanation: "Los procesos a baja temperatura permiten la difusión de carbono sin alterar significativamente la microestructura base ni formar fases indeseadas. Esto es clave en materiales sensibles donde se busca mejorar propiedades superficiales sin degradar otras características.",
    visualText: "Gráfica comparativa de temperatura vs. efectos microestructurales, mostrando cómo los procesos a baja temperatura evitan transformaciones perjudiciales.",
    VisualComponent: LowTempGraphVisual
  },
  {
    id: "plasma",
    title: "Carburización por plasma",
    explanation: "Utiliza descargas eléctricas en gases a baja presión para activar las especies químicas. Esto mejora la eficiencia del proceso, permite mayor control, reduce tiempos de tratamiento y facilita una carburización más uniforme y limpia.",
    visualText: "Esquema de una cámara de vacío con plasma, donde se ven iones impactando la superficie del material y favoreciendo la difusión de carbono.",
    VisualComponent: PlasmaVisual
  },
  {
    id: "superplastica",
    title: "Procesos combinados con deformación superplástica",
    explanation: "En desarrollos recientes, la carburización se combina con deformación superplástica, permitiendo modificar simultáneamente la forma y las propiedades del material. Esto abre nuevas posibilidades en la fabricación de componentes complejos.",
    visualText: "Diagrama que muestra una pieza deformándose mientras se somete a un tratamiento superficial, integrando ambos procesos.",
    VisualComponent: SuperplasticVisual
  },
  {
    id: "titanio",
    title: "Aplicaciones en aleaciones de titanio",
    explanation: "Las aleaciones de titanio, conocidas por su alta resistencia y bajo peso, pueden beneficiarse de la carburización para mejorar su resistencia al desgaste, abordando así una de sus limitaciones principales.",
    visualText: "Comparación entre una superficie de titanio sin tratar (con desgaste visible) y otra carburizada (más resistente), destacando la mejora superficial.",
    VisualComponent: TitaniumVisual
  },
  {
    id: "silicio",
    title: "Carburización en silicio y materiales avanzados",
    explanation: "En materiales como el silicio, la incorporación de carbono puede dar lugar a estructuras avanzadas como el grafeno. Esto conecta la carburización con aplicaciones pioneras en microelectrónica y nanotecnología.",
    visualText: "Esquema a escala nanométrica mostrando una red de silicio con la formación de capas de grafeno en la superficie.",
    VisualComponent: SiliconVisual
  },
  {
    id: "microfabricacion",
    title: "Aplicaciones en microfabricación y tecnología avanzada",
    explanation: "La carburización moderna se extiende a la fabricación de dispositivos electrónicos, sistemas energéticos y materiales funcionales. Su precisión permite modificar propiedades a micro y nanoescala con exactitud.",
    visualText: "Representación de microcomponentes electrónicos donde se resaltan capas superficiales modificadas mediante carburización.",
    VisualComponent: MicroTechVisual
  },
  {
    id: "tendencias",
    title: "Tendencias actuales en carburización",
    explanation: "Las tendencias incluyen procesos híbridos que combinan diferentes tratamientos superficiales, mayor control del potencial de carbono mediante sistemas automatizados y su integración en tecnologías emergentes como energía y electrónica para mejorar la eficiencia y sostenibilidad.",
    visualText: "Diagrama de un sistema de control avanzado con sensores y variables (temperatura, gases, tiempo) regulando el proceso en tiempo real.",
    VisualComponent: ControlSystemVisual
  },
  {
    id: "expansion",
    title: "Expansión del campo de aplicación",
    explanation: "La carburización ha dejado de ser una técnica limitada a aceros tradicionales, extendiéndose hacia materiales avanzados y aplicaciones de alta tecnología. Esto la posiciona como una herramienta clave en la ingeniería moderna.",
    visualText: "Esquema global que conecta distintos materiales (acero, titanio, silicio) con sus aplicaciones (industria, aeroespacial, electrónica), mostrando la versatilidad del proceso.",
    VisualComponent: NetworkVisual
  }
];


// --- MAIN APP COMPONENT ---

export default function App() {
  const [activeSection, setActiveSection] = useState(lessonContent[0].id);

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 flex flex-col">
      {/* Header */}
      <header className="bg-indigo-700 text-white p-6 shadow-md z-10 sticky top-0">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <div className="p-3 bg-white bg-opacity-20 rounded-lg">
            <BookOpen size={28} className="text-indigo-100" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Avances en Carburización de Materiales Modernos</h1>
            <p className="text-indigo-200 text-sm mt-1">Módulo Interactivo Educativo</p>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-6xl mx-auto w-full flex flex-col md:flex-row p-4 gap-6 relative">
        
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-xl shadow-sm border border-slate-200 p-4 h-fit sticky top-28 overflow-y-auto max-h-[80vh]">
          <h2 className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-wider">Índice de Contenidos</h2>
          <nav className="flex flex-col gap-2">
            {lessonContent.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`text-left p-3 rounded-lg text-sm transition-all flex items-start gap-3 ${
                  activeSection === item.id 
                  ? 'bg-indigo-50 border-l-4 border-indigo-600 text-indigo-800 font-semibold' 
                  : 'hover:bg-slate-50 text-slate-600 border-l-4 border-transparent'
                }`}
              >
                <span className="bg-slate-200 text-slate-500 rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                {item.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col gap-8 pb-20">
          {lessonContent.map((section, index) => (
            <article 
              key={section.id} 
              id={section.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group"
              onMouseEnter={() => setActiveSection(section.id)}
            >
              {/* Section Header */}
              <div className="bg-slate-50 border-b border-slate-100 p-6 flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <h2 className="text-xl font-bold text-slate-800">{section.title}</h2>
              </div>

              <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-start">
                {/* Explanation Context */}
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Explicación</h3>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {section.explanation}
                  </p>
                </div>

                {/* Visual Representation */}
                <div className="w-full lg:w-5/12 flex flex-col gap-3">
                  <div className="bg-slate-100 p-1 rounded-xl">
                    <section.VisualComponent />
                  </div>
                  <div className="flex items-start gap-2 text-slate-500 bg-slate-50 p-3 rounded-lg text-xs italic">
                    <Maximize size={16} className="text-indigo-400 flex-shrink-0 mt-0.5"/>
                    <p><strong>Sugerencia Visual Integrada:</strong> {section.visualText}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </main>
        
      </div>
    </div>
  );
}