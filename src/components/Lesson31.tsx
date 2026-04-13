 import React from 'react';
import { 
  ArrowDown, 
  ThermometerSun, 
  Zap, 
  Layers, 
  Activity, 
  Droplets, 
  Shield, 
  Settings, 
  Wrench, 
  Car,
  ChevronRight,
  TrendingUp,
  FlaskConical,
  ArrowRight
} from 'lucide-react';

// --- COMPONENTES VISUALES (Diagramas) ---

const CrossSectionDiagram = () => (
  <div className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
    <div className="relative w-48 h-48 rounded-full border-[12px] border-blue-500 bg-slate-300 flex items-center justify-center shadow-lg">
      <span className="text-slate-700 font-bold text-lg z-10">Núcleo</span>
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-semibold whitespace-nowrap">
        Capa Modificada
      </div>
    </div>
  </div>
);

const InteractionDiagram = () => (
  <div className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
    <div className="flex justify-around w-full max-w-sm mb-4">
      <div className="flex flex-col items-center text-orange-500 animate-bounce">
        <Activity size={24} />
        <span className="text-xs font-semibold mt-1">Fricción</span>
        <ArrowDown size={20} className="mt-1" />
      </div>
      <div className="flex flex-col items-center text-blue-400 animate-bounce" style={{ animationDelay: '0.2s' }}>
        <Droplets size={24} />
        <span className="text-xs font-semibold mt-1">Humedad</span>
        <ArrowDown size={20} className="mt-1" />
      </div>
      <div className="flex flex-col items-center text-slate-600 animate-bounce" style={{ animationDelay: '0.4s' }}>
        <Settings size={24} />
        <span className="text-xs font-semibold mt-1">Carga</span>
        <ArrowDown size={20} className="mt-1" />
      </div>
    </div>
    <div className="w-full max-w-sm h-16 bg-blue-500 rounded-t-lg border-b-4 border-blue-700 flex items-center justify-center text-white font-bold shadow-md">
      Superficie en Contacto
    </div>
    <div className="w-full max-w-sm h-24 bg-slate-300 rounded-b-lg flex items-center justify-center text-slate-600 font-semibold shadow-md">
      Interior del Material
    </div>
  </div>
);

const ComparisonDiagram = () => (
  <div className="flex flex-col sm:flex-row items-center justify-center gap-8 p-8 bg-slate-50 rounded-2xl border border-slate-100">
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 bg-slate-400 rounded-lg flex items-center justify-center shadow-md">
        <span className="text-white font-bold text-center px-2">Material<br/>Homogéneo</span>
      </div>
      <p className="mt-3 text-sm font-medium text-slate-500">Mismas propiedades en todo el volumen</p>
    </div>
    <div className="hidden sm:block text-slate-300"><ChevronRight size={32} /></div>
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 bg-slate-300 border-8 border-blue-600 rounded-lg flex items-center justify-center shadow-md relative">
        <span className="text-slate-700 font-bold text-center px-2 z-10">Núcleo<br/>Tenaz</span>
        <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 text-[10px] px-1 rounded -mt-2 -mr-4 font-bold border border-blue-300">
          Superficie Dura
        </div>
      </div>
      <p className="mt-3 text-sm font-medium text-blue-600">Propiedades combinadas</p>
    </div>
  </div>
);

const FurnaceDiagram = () => (
  <div className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-orange-100/50 to-transparent"></div>
    <div className="w-full max-w-md border-4 border-slate-700 rounded-t-full h-48 relative flex items-end justify-center pb-8 bg-orange-50 shadow-inner">
      <div className="absolute top-4 text-orange-600 flex items-center gap-2 font-bold bg-white/80 px-3 py-1 rounded-full text-sm">
        <ThermometerSun size={18} /> Alta Temperatura
      </div>
      
      {/* Atomos activos */}
      <div className="absolute inset-0 flex justify-center items-center">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`absolute w-3 h-3 bg-red-500 rounded-full animate-ping opacity-75`} 
               style={{ 
                 top: `${20 + Math.random() * 40}%`, 
                 left: `${10 + Math.random() * 80}%`,
                 animationDuration: `${1.5 + Math.random()}s`
               }}>
          </div>
        ))}
      </div>

      <div className="w-32 h-20 bg-slate-400 rounded relative z-10 border-t-4 border-blue-500 flex items-center justify-center">
         <span className="text-white text-xs font-bold">Material</span>
         {/* Flechas de difusión */}
         <div className="absolute -top-6 w-full flex justify-around px-2">
            <ArrowDown size={16} className="text-red-600" />
            <ArrowDown size={16} className="text-red-600" />
            <ArrowDown size={16} className="text-red-600" />
         </div>
      </div>
    </div>
  </div>
);

const ProcessFlowDiagram = () => {
  const steps = [
    { icon: <FlaskConical size={24}/>, title: "Descomposición", color: "text-purple-500", bg: "bg-purple-100" },
    { icon: <Zap size={24}/>, title: "Átomos Activos", color: "text-amber-500", bg: "bg-amber-100" },
    { icon: <ArrowDown size={24}/>, title: "Absorción", color: "text-blue-500", bg: "bg-blue-100" },
    { icon: <TrendingUp size={24}/>, title: "Difusión", color: "text-teal-500", bg: "bg-teal-100" },
    { icon: <Layers size={24}/>, title: "Nuevas Fases", color: "text-indigo-500", bg: "bg-indigo-100" }
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 gap-4 overflow-x-auto">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center min-w-[90px]">
            <div className={`w-14 h-14 ${step.bg} ${step.color} rounded-full flex items-center justify-center mb-2 shadow-sm`}>
              {step.icon}
            </div>
            <span className="text-[11px] font-bold text-slate-700 text-center">{step.title}</span>
          </div>
          {index < steps.length - 1 && (
            <ArrowRight className="hidden sm:block text-slate-300 min-w-[20px]" size={20} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const ChartDiagram = () => (
  <div className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
    <div className="flex items-end gap-6 sm:gap-12 h-48 border-b-2 border-slate-300 pb-2">
      {/* Grupo 1 */}
      <div className="flex items-end gap-2">
        <div className="flex flex-col items-center">
          <div className="w-8 sm:w-12 h-16 bg-slate-300 rounded-t-sm"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 sm:w-12 h-40 bg-blue-500 rounded-t-sm relative group">
            <div className="absolute -top-8 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Dureza Mejorada</div>
          </div>
        </div>
      </div>
      {/* Grupo 2 */}
      <div className="flex items-end gap-2">
        <div className="flex flex-col items-center">
          <div className="w-8 sm:w-12 h-12 bg-slate-300 rounded-t-sm"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 sm:w-12 h-32 bg-blue-500 rounded-t-sm relative group">
             <div className="absolute -top-8 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Resistencia al Desgaste</div>
          </div>
        </div>
      </div>
      {/* Grupo 3 */}
      <div className="flex items-end gap-2">
        <div className="flex flex-col items-center">
          <div className="w-8 sm:w-12 h-20 bg-slate-300 rounded-t-sm"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 sm:w-12 h-44 bg-blue-500 rounded-t-sm relative group">
             <div className="absolute -top-8 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Protección Anticorrosiva</div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-between w-full max-w-[350px] mt-4 px-4">
      <span className="text-xs font-bold text-slate-600 text-center w-20">Dureza</span>
      <span className="text-xs font-bold text-slate-600 text-center w-20">Desgaste</span>
      <span className="text-xs font-bold text-slate-600 text-center w-20">Corrosión</span>
    </div>
    <div className="flex gap-4 mt-6">
      <div className="flex items-center gap-2"><div className="w-3 h-3 bg-slate-300"></div><span className="text-xs text-slate-500">Sin Tratar</span></div>
      <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500"></div><span className="text-xs text-slate-500">Tratado</span></div>
    </div>
  </div>
);

const WearComparisonDiagram = () => (
  <div className="flex flex-col sm:flex-row items-center justify-center gap-8 p-8 bg-slate-50 rounded-2xl border border-slate-100">
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 bg-slate-300 rounded-lg relative overflow-hidden flex items-center justify-center shadow-md">
        {/* Simulación de desgaste/rotura */}
        <div className="absolute top-0 left-0 w-full h-4 bg-red-400" style={{ clipPath: 'polygon(0% 0%, 10% 100%, 20% 0%, 30% 100%, 40% 0%, 50% 100%, 60% 0%, 70% 100%, 80% 0%, 90% 100%, 100% 0%)' }}></div>
        <span className="text-slate-600 font-bold mt-2">Falla<br/>Superficial</span>
      </div>
      <p className="mt-3 text-sm font-bold text-red-500 flex items-center gap-1"><Shield size={16} /> Vulnerable</p>
    </div>
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 bg-slate-300 border-t-[6px] border-green-500 rounded-lg relative flex items-center justify-center shadow-md">
        <span className="text-slate-600 font-bold">Integridad<br/>Mantenida</span>
        <div className="absolute -top-3 -right-3 bg-green-500 text-white rounded-full p-1"><Shield size={16}/></div>
      </div>
      <p className="mt-3 text-sm font-bold text-green-600 flex items-center gap-1"><Shield size={16} /> Protegido</p>
    </div>
  </div>
);

const ApplicationsCollage = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
      <Settings size={40} className="text-indigo-600 mb-3" />
      <h4 className="font-bold text-slate-800 text-sm">Engranajes</h4>
      <p className="text-xs text-slate-500 mt-1">Resistencia a la fatiga y fricción</p>
    </div>
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
      <Wrench size={40} className="text-indigo-600 mb-3" />
      <h4 className="font-bold text-slate-800 text-sm">Herramientas</h4>
      <p className="text-xs text-slate-500 mt-1">Mayor vida útil de corte</p>
    </div>
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
      <Car size={40} className="text-indigo-600 mb-3" />
      <h4 className="font-bold text-slate-800 text-sm">Automotriz</h4>
      <p className="text-xs text-slate-500 mt-1">Motores y transmisiones</p>
    </div>
  </div>
);

// --- COMPONENTE DE SECCIÓN ---
const Section = ({ number, title, explanation, visualSuggestionText, DiagramComponent }) => (
  <section className="mb-16 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
    <div className="p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">
          {number}
        </div>
        <h2 className="text-2xl font-bold text-slate-800 leading-tight">{title}</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        <div className="space-y-4">
          <div className="prose prose-slate prose-p:leading-relaxed">
            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Explicación</h3>
            {explanation.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-slate-600">{paragraph}</p>
            ))}
          </div>
          
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-100 mt-6">
            <h3 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1 flex items-center gap-1">
              Sugerencia Visual Extraída
            </h3>
            <p className="text-sm text-amber-900 italic">"{visualSuggestionText}"</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4 text-center lg:text-left">
            Representación Visual Generada
          </h3>
          <DiagramComponent />
        </div>
      </div>
    </div>
  </section>
);

// --- APLICACIÓN PRINCIPAL ---
export default function App() {
  const content = [
    {
      title: "Introducción a la ingeniería de superficies",
      explanation: "La ingeniería de superficies es una rama de la ingeniería de materiales que se enfoca en modificar únicamente la capa externa de un material, manteniendo prácticamente intactas sus propiedades internas. Este enfoque permite mejorar el desempeño del material en condiciones de uso reales, donde la interacción con el entorno ocurre principalmente en la superficie.",
      visualSuggestionText: "Un esquema de un material en corte transversal donde se distingan claramente dos zonas: el núcleo (interior) y la capa superficial modificada. La imagen debe resaltar que solo la superficie cambia, mientras el interior permanece igual.",
      diagram: CrossSectionDiagram
    },
    {
      title: "Concepto de ingeniería de superficies",
      explanation: "La ingeniería de superficies comprende un conjunto de técnicas destinadas a mejorar propiedades funcionales específicas en la capa externa de un material. Estas propiedades pueden incluir dureza, resistencia al desgaste, resistencia a la corrosión, conductividad eléctrica o comportamiento magnético.\n\nEl fundamento de este campo radica en que la superficie es la primera región que entra en contacto con el entorno, por lo que su modificación tiene un impacto directo en el rendimiento y la durabilidad del componente.",
      visualSuggestionText: "Un diagrama que muestre una superficie en contacto con agentes externos (fricción, humedad, carga mecánica), destacando cómo estas interacciones afectan principalmente la capa superficial.",
      diagram: InteractionDiagram
    },
    {
      title: "Principio de modificación superficial",
      explanation: "La modificación superficial se basa en la idea de optimizar el comportamiento del material sin reemplazarlo completamente. En lugar de fabricar un material totalmente nuevo, se ajustan solo las características de su superficie para cumplir con requisitos específicos.\n\nEsto permite combinar propiedades: un núcleo tenaz (resistente a fractura) con una superficie dura (resistente al desgaste), logrando un mejor desempeño global.",
      visualSuggestionText: "Una comparación entre dos materiales: uno homogéneo y otro con superficie tratada, mostrando cómo el segundo combina dureza superficial con un núcleo más dúctil.",
      diagram: ComparisonDiagram
    },
    {
      title: "Tratamientos termoquímicos",
      explanation: "Los tratamientos termoquímicos son procesos fundamentales dentro de la ingeniería de superficies. Consisten en introducir elementos químicos (como carbono, nitrógeno o boro) en la superficie del material mediante difusión, generalmente a altas temperaturas.\n\nEste proceso altera la composición química de la capa superficial, generando nuevas propiedades sin afectar significativamente el interior del material.",
      visualSuggestionText: "Un esquema de un horno o entorno de tratamiento donde se observe el material expuesto a un medio rico en átomos activos, con flechas indicando la penetración de estos hacia la superficie.",
      diagram: FurnaceDiagram
    },
    {
      title: "Etapas del proceso termoquímico",
      explanation: "El proceso termoquímico ocurre en varias etapas consecutivas:\n\n1. Descomposición de sustancias químicas en el medio (sólido, líquido o gaseoso).\n2. Generación de átomos activos.\n3. Absorción de estos átomos en la superficie del material.\n4. Difusión de los átomos hacia el interior.\n5. Formación de nuevas fases o cambios en la microestructura.\n\nEstas etapas permiten modificar gradualmente la composición y estructura de la superficie.",
      visualSuggestionText: "Un diagrama secuencial tipo “flujo de proceso” con cinco pasos, donde cada etapa esté representada con iconos o esquemas simples que ilustren la progresión del tratamiento.",
      diagram: ProcessFlowDiagram
    },
    {
      title: "Efectos de la modificación superficial",
      explanation: "Como resultado de los tratamientos termoquímicos, la capa superficial adquiere propiedades mejoradas como:\n\n• Mayor dureza\n• Mayor resistencia al desgaste\n• Mayor resistencia a la corrosión\n\nEstas mejoras incrementan significativamente el desempeño del material en aplicaciones exigentes.",
      visualSuggestionText: "Una gráfica comparativa o tabla que muestre las propiedades antes y después del tratamiento, destacando los incrementos en dureza y resistencia.",
      diagram: ChartDiagram
    },
    {
      title: "Importancia de la capa superficial",
      explanation: "La mayoría de las fallas en componentes mecánicos se originan en la superficie debido a fenómenos como fricción, fatiga o corrosión. Por ello, reforzar esta zona resulta clave para mejorar la confiabilidad de los sistemas.\n\nLa ingeniería de superficies permite:\n\n• Aumentar la vida útil de las piezas\n• Reducir costos de mantenimiento\n• Mejorar el rendimiento en condiciones severas",
      visualSuggestionText: "Una ilustración de una pieza mecánica sometida a desgaste superficial, comparada con otra tratada que presenta menor daño tras el uso.",
      diagram: WearComparisonDiagram
    },
    {
      title: "Cierre: relevancia en la ingeniería moderna",
      explanation: "La ingeniería de superficies ofrece una estrategia eficiente para adaptar materiales a condiciones específicas sin modificar su estructura interna. Los tratamientos termoquímicos, basados en la difusión de átomos, constituyen una herramienta clave para mejorar propiedades críticas de los materiales.\n\nEste enfoque es ampliamente utilizado en la industria debido a su capacidad para optimizar el rendimiento, prolongar la vida útil y reducir costos operativos.",
      visualSuggestionText: "Un collage de aplicaciones industriales (engranajes, herramientas de corte, componentes automotrices) donde se resalte el uso de tratamientos superficiales en cada caso.",
      diagram: ApplicationsCollage
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 pb-20">
      {/* Header / Hero */}
      <header className="bg-slate-900 text-white py-16 px-6 text-center shadow-lg mb-12">
        <div className="max-w-4xl mx-auto">
          <Layers className="mx-auto mb-6 text-blue-400" size={64} />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Ingeniería de Superficies
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Una guía interactiva sobre cómo la modificación de la capa externa de los materiales revoluciona la industria moderna.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-slate-500">
            Explora a continuación los conceptos fundamentales, los procesos termoquímicos involucrados y el impacto de estos tratamientos en la ingeniería actual. Cada sección incluye un diagrama explicativo basado en conceptos académicos.
          </p>
        </div>

        {content.map((section, index) => (
          <Section 
            key={index}
            number={index + 1}
            title={section.title}
            explanation={section.explanation}
            visualSuggestionText={section.visualSuggestionText}
            DiagramComponent={section.diagram}
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200 py-8 text-center text-slate-500">
        <p className="text-sm font-medium">
          Transformación educativa generada a partir de textos académicos.
        </p>
      </footer>
    </div>
  );
}