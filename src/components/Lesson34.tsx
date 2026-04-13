import React from 'react';
import { Settings, Shield, Maximize, Activity, Thermometer, ChevronsDown, Wrench } from 'lucide-react';

// --- VISUALIZACIONES (Componentes específicos para cada sección) ---

// 1. Introducción: Esquema de pieza metálica
const IntroVisual = () => (
  <div className="relative w-full h-48 bg-slate-200 rounded-lg overflow-hidden border-2 border-slate-300 shadow-inner flex flex-col">
    {/* Capa modificada */}
    <div className="h-8 bg-gradient-to-b from-indigo-500 to-indigo-300 w-full flex items-center justify-center relative">
      <span className="text-white text-xs font-bold tracking-wider z-10">CAPA ENRIQUECIDA CON NITRÓGENO</span>
    </div>
    {/* Núcleo */}
    <div className="flex-1 w-full flex items-center justify-center bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjYmQ1ZTEiLz48L3N2Zz4=')]">
      <span className="text-slate-500 font-semibold text-lg bg-white/80 px-4 py-1 rounded-full">Núcleo Intacto (Metal Base)</span>
    </div>
  </div>
);

// 2. Concepto: Diagrama a nivel atómico
const AtomicVisual = () => {
  const feAtoms = Array.from({ length: 24 });
  return (
    <div className="w-full h-48 bg-white rounded-lg border border-slate-200 p-4 relative overflow-hidden flex items-center justify-center">
      <div className="grid grid-cols-6 gap-3 relative">
        {feAtoms.map((_, i) => (
          <div key={i} className="w-8 h-8 rounded-full bg-slate-300 border-2 border-slate-400 flex items-center justify-center shadow-sm">
            <span className="text-[10px] font-bold text-slate-500">Fe</span>
          </div>
        ))}
        {/* Átomos de Nitrógeno intersticiales */}
        <div className="absolute top-2 left-6 w-4 h-4 rounded-full bg-blue-500 border border-blue-700 shadow-md flex items-center justify-center animate-bounce">
          <span className="text-[8px] font-bold text-white">N</span>
        </div>
        <div className="absolute top-10 left-[88px] w-4 h-4 rounded-full bg-blue-500 border border-blue-700 shadow-md flex items-center justify-center">
          <span className="text-[8px] font-bold text-white">N</span>
        </div>
        <div className="absolute top-3 right-16 w-4 h-4 rounded-full bg-blue-500 border border-blue-700 shadow-md flex items-center justify-center animate-pulse">
          <span className="text-[8px] font-bold text-white">N</span>
        </div>
        <div className="absolute top-12 right-4 w-4 h-4 rounded-full bg-blue-500 border border-blue-700 shadow-md flex items-center justify-center">
          <span className="text-[8px] font-bold text-white">N</span>
        </div>
      </div>
      <div className="absolute bottom-2 left-2 flex gap-4 text-xs">
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-slate-300 rounded-full border border-slate-400"></div> Hierro (Fe)</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-500 rounded-full border border-blue-700"></div> Nitrógeno (N)</div>
      </div>
    </div>
  );
};

// 3. Mecanismo: Gráfica de concentración
const GraphVisual = () => (
  <div className="w-full h-48 bg-white rounded-lg border border-slate-200 p-4 flex flex-col relative">
    <span className="text-xs font-semibold text-slate-500 absolute top-2 left-2 rotate-90 origin-top-left translate-x-2 translate-y-6">Concentración de N</span>
    <span className="text-xs font-semibold text-slate-500 absolute bottom-1 right-4">Profundidad</span>
    <div className="flex-1 ml-6 mb-4 border-l-2 border-b-2 border-slate-800 relative">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Curva de difusión */}
        <path 
          d="M 0 5 Q 20 10, 40 40 T 100 95" 
          fill="none" 
          stroke="#4f46e5" 
          strokeWidth="3" 
          className="drop-shadow-md"
        />
        {/* Área bajo la curva */}
        <path 
          d="M 0 5 Q 20 10, 40 40 T 100 95 L 100 100 L 0 100 Z" 
          fill="url(#grad)" 
          opacity="0.2"
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
);

// 4. Propósito: Tabla comparativa
const TableVisual = () => (
  <div className="w-full overflow-hidden rounded-lg border border-slate-200">
    <table className="w-full text-sm text-left">
      <thead className="bg-slate-100 text-slate-600 font-bold">
        <tr>
          <th className="px-4 py-3">Propiedad</th>
          <th className="px-4 py-3">Antes (Núcleo)</th>
          <th className="px-4 py-3 text-indigo-700">Después (Superficie)</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200">
        <tr className="bg-white">
          <td className="px-4 py-2 font-medium">Dureza</td>
          <td className="px-4 py-2 text-slate-500">Media</td>
          <td className="px-4 py-2 text-indigo-600 font-bold">Muy Alta (hasta 1200 HV)</td>
        </tr>
        <tr className="bg-slate-50">
          <td className="px-4 py-2 font-medium">Resistencia al desgaste</td>
          <td className="px-4 py-2 text-slate-500">Baja</td>
          <td className="px-4 py-2 text-indigo-600 font-bold">Excelente</td>
        </tr>
        <tr className="bg-white">
          <td className="px-4 py-2 font-medium">Resistencia a fatiga</td>
          <td className="px-4 py-2 text-slate-500">Base</td>
          <td className="px-4 py-2 text-indigo-600 font-bold">Incrementada (+20-30%)</td>
        </tr>
      </tbody>
    </table>
  </div>
);

// 5. Formación: Corte transversal detallado
const LayerVisual = () => (
  <div className="w-full h-48 rounded-lg overflow-hidden border border-slate-300 flex flex-col font-sans">
    <div className="h-[20%] bg-indigo-800 text-indigo-100 flex items-center px-4 relative group cursor-pointer transition-all hover:h-[30%]">
      <div className="font-bold text-sm">Zona Compuesta (Capa Blanca)</div>
      <div className="absolute right-4 text-xs opacity-80 group-hover:opacity-100">~10 - 20 µm (Nitruros)</div>
    </div>
    <div className="h-[40%] bg-gradient-to-b from-indigo-400 to-indigo-100 flex items-center px-4 relative group cursor-pointer transition-all hover:h-[50%]">
      <div className="font-semibold text-indigo-900 text-sm">Zona de Difusión</div>
      <div className="absolute right-4 text-xs text-indigo-800 opacity-80 group-hover:opacity-100">~100 - 300 µm (N disuelto)</div>
    </div>
    <div className="flex-1 bg-slate-200 flex items-center px-4 relative">
      <div className="font-medium text-slate-600 text-sm">Material Base (Núcleo)</div>
    </div>
  </div>
);

// 6. Características: Esquema comparativo
const ComparisonVisual = () => (
  <div className="w-full flex flex-col sm:flex-row gap-4 h-full">
    <div className="flex-1 bg-indigo-50 rounded-lg p-4 border border-indigo-200 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 p-2 text-indigo-300"><Thermometer size={40} /></div>
      <h4 className="font-bold text-indigo-800 mb-2">Nitruración</h4>
      <ul className="text-xs space-y-2 text-indigo-900/80">
        <li className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Baja temperatura (500-550°C)</li>
        <li className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Estado Ferrítico (sin fase)</li>
        <li className="flex items-center gap-1 font-bold"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Mínima distorsión</li>
      </ul>
    </div>
    <div className="flex-1 bg-rose-50 rounded-lg p-4 border border-rose-200 shadow-sm relative overflow-hidden opacity-80 grayscale-[30%]">
      <div className="absolute top-0 right-0 p-2 text-rose-300"><Activity size={40} /></div>
      <h4 className="font-bold text-rose-800 mb-2">Otros (ej. Carburización)</h4>
      <ul className="text-xs space-y-2 text-rose-900/80">
        <li className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Alta temperatura (850-950°C)</li>
        <li className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Transformación Austenítica</li>
        <li className="flex items-center gap-1 font-bold"><div className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Mayor riesgo de distorsión</li>
      </ul>
    </div>
  </div>
);

// 7. Cierre: Aplicaciones industriales
const ApplicationVisual = () => (
  <div className="w-full h-48 bg-slate-800 rounded-lg p-4 flex items-center justify-around relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent" />
    
    <div className="flex flex-col items-center z-10 group">
      <div className="relative">
        <Settings className="text-slate-300 w-16 h-16 transition-transform group-hover:rotate-90 duration-1000" />
        <div className="absolute inset-0 border-2 border-indigo-400 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(129,140,248,0.8)]" />
      </div>
      <span className="text-indigo-300 text-xs mt-3 font-semibold tracking-wider">ENGRANAJES</span>
    </div>

    <div className="flex flex-col items-center z-10 group">
      <div className="relative">
        <Maximize className="text-slate-300 w-16 h-16 transition-transform group-hover:scale-110 duration-500" />
        <div className="absolute inset-0 border-2 border-indigo-400 rounded-md scale-125 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(129,140,248,0.8)]" />
      </div>
      <span className="text-indigo-300 text-xs mt-3 font-semibold tracking-wider">MOLDES</span>
    </div>

    <div className="flex flex-col items-center z-10 group">
      <div className="relative">
        <Wrench className="text-slate-300 w-16 h-16 transition-transform group-hover:-rotate-12 duration-300" />
        <div className="absolute inset-0 border-2 border-indigo-400 rounded-lg scale-110 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(129,140,248,0.8)]" />
      </div>
      <span className="text-indigo-300 text-xs mt-3 font-semibold tracking-wider">HERRAMIENTAS</span>
    </div>
  </div>
);

// --- COMPONENTE DE SECCIÓN REUTILIZABLE ---

const ContentSection = ({ title, content, VisualComponent, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <section className={`py-12 ${isEven ? 'bg-white' : 'bg-slate-50'}`}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-center">
        
        {/* Contenido de texto */}
        <div className={`flex-1 space-y-4 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm">
              {index + 1}
            </span>
            <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
          </div>
          <div className="text-slate-600 leading-relaxed space-y-3">
            {content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Sugerencia Visual */}
        <div className={`w-full md:w-5/12 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
          <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
       
            {VisualComponent && <VisualComponent />}
          </div>
        </div>

      </div>
    </section>
  );
};

// --- APLICACIÓN PRINCIPAL ---

export default function App() {
  const sections = [
    {
      title: "Introducción a la nitruración",
      content: [
        "La nitruración es uno de los tratamientos termoquímicos más relevantes en la ingeniería de materiales, especialmente por su capacidad de mejorar propiedades superficiales sin alterar significativamente el núcleo del material.",
        "Su uso es común en componentes que requieren alta resistencia al desgaste y larga vida útil."
      ],
      visual: IntroVisual
    },
    {
      title: "Concepto de nitruración",
      content: [
        "La nitruración es un tratamiento termoquímico basado en la difusión de nitrógeno hacia la superficie de un metal, generalmente acero, a temperaturas elevadas pero por debajo del punto de transformación de fase.",
        "Este proceso ocurre en estado sólido, lo que significa que no hay fusión del material durante el tratamiento. El nitrógeno se incorpora en la red cristalina del metal, modificando su estructura superficial."
      ],
      visual: AtomicVisual
    },
    {
      title: "Mecanismo de difusión del nitrógeno",
      content: [
        "Durante la nitruración, el nitrógeno se disocia en la superficie del material y posteriormente difunde hacia el interior. Este fenómeno depende de factores como la temperatura, el tiempo y la composición del material.",
        "La difusión genera una capa superficial con una concentración de nitrógeno decreciente hacia el interior, formando un perfil gradual de composición."
      ],
      visual: GraphVisual
    },
    {
      title: "Propósito del proceso",
      content: [
        "El objetivo principal de la nitruración es mejorar propiedades funcionales críticas en la superficie del material. Entre las más importantes se encuentran el incremento de dureza, resistencia al desgaste, corrosión y fatiga.",
        "Estas mejoras se deben a la formación de compuestos duros y estables en la capa superficial."
      ],
      visual: TableVisual
    },
    {
      title: "Formación de la capa nitrurada",
      content: [
        "Como resultado del proceso, se forma una capa superficial enriquecida en nitrógeno, típicamente con espesores entre 200 y 300 µm.",
        "Esta capa incluye una zona compuesta (con nitruros) en el exterior y una zona de difusión (con nitrógeno disuelto) hacia el interior, contribuyendo conjuntamente a las propiedades mejoradas."
      ],
      visual: LayerVisual
    },
    {
      title: "Características distintivas",
      content: [
        "La nitruración se distingue por realizarse en estado ferrítico, sin transformación de fase principal ni requerir tratamientos térmicos posteriores.",
        "Produce una mínima distorsión dimensional y permite un buen control del espesor de la capa, lo que la hace ideal para piezas de alta precisión."
      ],
      visual: ComparisonVisual
    },
    {
      title: "Importancia en ingeniería de superficies",
      content: [
        "Es un proceso clave debido a su eficiencia para mejorar propiedades sin comprometer la integridad estructural del material base.",
        "Su aplicación permite extender la vida útil de componentes críticos y optimizar su desempeño bajo condiciones exigentes en la industria."
      ],
      visual: ApplicationVisual
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header / Hero Section */}
      <header className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-slate-900 opacity-90 z-0" />
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] z-0" />
        
        <div className="max-w-5xl mx-auto px-6 py-20 relative z-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-indigo-500/20 text-indigo-300 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-indigo-400/30">
            <Shield size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Nitruración: Tratamiento Termoquímico
          </h1>
        
          <div className="mt-10 animate-bounce text-indigo-400">
            <ChevronsDown size={28} />
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main>
        {sections.map((section, index) => (
          <ContentSection
            key={index}
            index={index}
            title={section.title}
            content={section.content}
            VisualComponent={section.visual}
          />
        ))}
      </main>
    </div>
  );
}