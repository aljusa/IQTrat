import React from 'react';
import { Search, Layers, Activity, TrendingDown, ShieldCheck, Zap } from 'lucide-react';

// --- COMPONENTES VISUALES ---

const VisualIntro = () => (
  <div className="relative w-full h-64 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 shadow-inner flex items-center justify-center p-4">
    {/* Capas del material */}
    <div className="absolute bottom-0 w-full h-1/2 bg-slate-300"></div>
    <div className="absolute top-1/4 w-full h-1/4 bg-gradient-to-b from-slate-400 to-slate-300"></div>
    <div className="absolute top-8 w-full h-1/6 bg-indigo-900"></div>
    
    {/* Lupa y zoom */}
    <div className="relative z-10 flex flex-col items-center transform -translate-y-4 -translate-x-12">
      <div className="w-32 h-32 rounded-full border-4 border-white bg-slate-800 shadow-xl overflow-hidden relative flex flex-wrap gap-1 p-2 justify-center items-center">
        {/* Simulación de microestructura dentro de la lupa */}
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-6 h-6 bg-indigo-400 rounded-sm transform rotate-45 opacity-80"></div>
        ))}
        <div className="absolute inset-0 shadow-inner rounded-full pointer-events-none border-2 border-indigo-300/30"></div>
      </div>
      <div className="h-16 w-2 bg-slate-400 absolute top-full -mt-2 -rotate-45 origin-top left-1/2"></div>
    </div>
    
    <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 text-xs font-semibold rounded shadow-sm text-slate-700">
      Ampliación de superficie
    </div>
  </div>
);

const VisualLayers = () => (
  <div className="w-full h-64 flex items-end p-6 bg-white rounded-xl border border-slate-200">
    <div className="w-16 h-full border-l-2 border-b-2 border-slate-400 relative mr-4">
      <span className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold text-slate-500 tracking-widest">SUPERFICIE</span>
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500 tracking-widest">INTERIOR</span>
    </div>
    <div className="flex-1 h-full flex flex-col justify-start rounded-lg overflow-hidden shadow-md">
      <div className="h-12 w-full bg-indigo-900 flex items-center px-4 relative group">
        <span className="text-white font-bold text-sm">Capa Compuesta</span>
        <div className="absolute right-4 text-indigo-200 text-xs opacity-0 group-hover:opacity-100 transition-opacity">~10-20 µm</div>
      </div>
      <div className="h-32 w-full bg-gradient-to-b from-indigo-600 to-slate-200 flex items-center px-4 relative group border-t border-indigo-400/30">
        <span className="text-white font-bold text-sm">Zona de Difusión</span>
        <div className="absolute right-4 text-indigo-100 text-xs opacity-0 group-hover:opacity-100 transition-opacity">~0.1-1 mm</div>
      </div>
      <div className="flex-1 w-full bg-slate-200 flex items-center px-4 relative border-t border-slate-300">
        <span className="text-slate-600 font-bold text-sm">Núcleo (Metal Base)</span>
      </div>
    </div>
  </div>
);

const VisualPhases = () => (
  <div className="w-full h-64 bg-slate-50 rounded-xl border border-slate-200 p-4 flex flex-col">
    <div className="flex-1 relative overflow-hidden rounded-lg bg-white border border-slate-100 flex flex-wrap p-2 gap-1 content-center justify-center shadow-inner">
      {/* Granos simulados */}
      {[...Array(24)].map((_, i) => {
        const type = i % 3 === 0 ? 'bg-indigo-600' : i % 2 === 0 ? 'bg-blue-400' : 'bg-slate-700';
        const shape = i % 2 === 0 ? 'rounded-tl-lg rounded-br-lg' : 'rounded-tr-lg rounded-bl-lg';
        return <div key={i} className={`w-12 h-12 ${type} ${shape} opacity-90 transform hover:scale-105 transition-transform cursor-pointer border border-white/20`} />
      })}
    </div>
    <div className="mt-4 flex justify-center gap-6 text-sm">
      <div className="flex items-center gap-2"><div className="w-3 h-3 bg-indigo-600 rounded-sm"></div><span className="font-mono font-semibold text-slate-700">ε-Fe₃(N,C)</span></div>
      <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-400 rounded-sm"></div><span className="font-mono font-semibold text-slate-700">γ’-Fe₄(N,C)</span></div>
      <div className="flex items-center gap-2"><div className="w-3 h-3 bg-slate-700 rounded-sm"></div><span className="font-mono font-semibold text-slate-700">Cementita</span></div>
    </div>
  </div>
);

const VisualEvolution = () => (
  <div className="w-full h-64 bg-white rounded-xl border border-slate-200 flex items-center justify-center p-6 gap-2 md:gap-6">
    {/* Etapa 1 */}
    <div className="flex flex-col items-center w-1/3">
      <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-slate-200">C</div>
      <span className="mt-4 text-sm font-semibold text-center text-slate-700">1. Rico en Carbono<br/><span className="text-xs text-slate-500 font-normal">(Cementita)</span></span>
    </div>
    
    <div className="text-slate-300 hidden md:block">➔</div>
    
    {/* Etapa 2 */}
    <div className="flex flex-col items-center w-1/3">
      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-slate-800 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-indigo-100">C+N</div>
      <span className="mt-4 text-sm font-semibold text-center text-slate-700">2. Incorporación<br/><span className="text-xs text-slate-500 font-normal">(Mezcla)</span></span>
    </div>
    
    <div className="text-indigo-300 hidden md:block">➔</div>
    
    {/* Etapa 3 */}
    <div className="flex flex-col items-center w-1/3">
      <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-indigo-200 border-4 border-white">N(C)</div>
      <span className="mt-4 text-sm font-semibold text-center text-slate-700">3. Estabilidad<br/><span className="text-xs text-indigo-500 font-normal">(Fases ε y γ’)</span></span>
    </div>
  </div>
);

const VisualGraph = () => (
  <div className="w-full h-64 bg-white rounded-xl border border-slate-200 p-6 relative">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold text-slate-500">Concentración (%)</div>
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500">Profundidad (Superficie → Interior)</div>
    
    <svg className="w-full h-full pb-4 pl-6" viewBox="0 0 100 100" preserveAspectRatio="none">
      {/* Ejes */}
      <line x1="0" y1="100" x2="100" y2="100" stroke="#cbd5e1" strokeWidth="2" />
      <line x1="0" y1="0" x2="0" y2="100" stroke="#cbd5e1" strokeWidth="2" />
      
      {/* Curva Nitrógeno */}
      <path d="M 0 10 Q 10 10, 30 50 T 90 95" fill="none" stroke="#4f46e5" strokeWidth="3" className="drop-shadow-sm" />
      {/* Curva Carbono */}
      <path d="M 0 40 Q 20 40, 50 70 T 90 90" fill="none" stroke="#334155" strokeWidth="3" strokeDasharray="4" className="drop-shadow-sm" />
    </svg>
    
    <div className="absolute top-6 right-6 bg-white/80 p-2 rounded border border-slate-100 shadow-sm text-xs">
      <div className="flex items-center gap-2"><div className="w-4 h-1 bg-indigo-600"></div> Nitrógeno (N)</div>
      <div className="flex items-center gap-2 mt-1"><div className="w-4 h-1 border-t-2 border-slate-700 border-dashed"></div> Carbono (C)</div>
    </div>
  </div>
);

const VisualProperties = () => (
  <div className="w-full h-64 bg-slate-50 rounded-xl border border-slate-200 p-4 flex flex-col md:flex-row items-center justify-center gap-4">
    <div className="flex flex-col gap-4 w-full md:w-5/12">
      <div className="bg-indigo-900 text-white p-3 rounded-lg text-center shadow-md border-l-4 border-indigo-400">
        <h4 className="font-bold text-sm">Capa Compuesta</h4>
      </div>
      <div className="bg-indigo-600 text-white p-3 rounded-lg text-center shadow-md border-l-4 border-indigo-300">
        <h4 className="font-bold text-sm">Zona de Difusión</h4>
      </div>
    </div>
    
    <div className="hidden md:flex flex-col gap-4 text-slate-400 justify-center">
      <div className="h-10 flex items-center">➔</div>
      <div className="h-10 flex items-center">➔</div>
    </div>
    
    <div className="flex flex-col gap-2 w-full md:w-6/12">
      <div className="bg-white p-2 rounded border border-slate-200 flex items-center gap-3 shadow-sm">
        <ShieldCheck className="text-indigo-600 w-5 h-5" />
        <span className="text-sm font-medium text-slate-700">Alta Dureza y Resistencia al desgaste</span>
      </div>
      <div className="bg-white p-2 rounded border border-slate-200 flex items-center gap-3 shadow-sm">
        <Activity className="text-emerald-600 w-5 h-5" />
        <span className="text-sm font-medium text-slate-700">Soporte Mecánico (evita fracturas)</span>
      </div>
      <div className="bg-white p-2 rounded border border-slate-200 flex items-center gap-3 shadow-sm">
        <TrendingDown className="text-blue-500 w-5 h-5" />
        <span className="text-sm font-medium text-slate-700">Resistencia a la Corrosión y Fricción</span>
      </div>
    </div>
  </div>
);

const VisualCarbonitrides = () => (
  <div className="w-full h-64 bg-slate-900 rounded-xl border-4 border-slate-800 overflow-hidden relative flex items-center justify-center p-4">
    {/* Fondo matriz */}
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 via-slate-800 to-slate-900"></div>
    
    {/* Partículas brillantes de carbonitruros */}
    <div className="relative z-10 w-full h-full flex flex-wrap gap-2 justify-center items-center p-4">
      {[...Array(15)].map((_, i) => (
        <div 
          key={i} 
          className={`rounded-full bg-indigo-400 shadow-[0_0_15px_rgba(129,140,248,0.8)] border border-indigo-200`}
          style={{
            width: `${Math.random() * 30 + 10}px`,
            height: `${Math.random() * 30 + 10}px`,
            opacity: Math.random() * 0.5 + 0.5,
            transform: `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px)`
          }}
        ></div>
      ))}
    </div>
    
    <div className="absolute bottom-3 left-3 right-3 text-center">
      <span className="bg-slate-800/80 text-indigo-200 text-xs px-3 py-1 rounded-full font-medium border border-indigo-500/30 backdrop-blur-sm">
        Refuerzo superficial activo
      </span>
    </div>
  </div>
);

// --- COMPONENTE DE SECCIÓN ---

const Section = ({ number, title, text, VisualComponent, isReversed }) => (
  <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center py-12 border-b border-slate-100 last:border-0`}>
    <div className="w-full lg:w-1/2 space-y-4">
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm">
          {number}
        </span>
        <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
      </div>
      <div className="text-slate-600 leading-relaxed space-y-3">
        {text}
      </div>
    </div>
    <div className="w-full lg:w-1/2">
      <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
        <VisualComponent />
      </div>
    </div>
  </div>
);

// --- APLICACIÓN PRINCIPAL ---

export default function App() {
  const sections = [
    {
      title: "Introducción a la transformación microestructural",
      text: (
        <>
          <p>La nitrocarburización no solo modifica la composición química superficial, sino que induce cambios microestructurales que son determinantes para las propiedades finales del material.</p>
          <p>Estas transformaciones ocurren principalmente en las capas más externas del acero y definen su comportamiento frente al <strong>desgaste, la fricción y la corrosión</strong>.</p>
        </>
      ),
      visual: VisualIntro
    },
    {
      title: "Formación de las capas superficiales",
      text: (
        <>
          <p>Como resultado del proceso, se desarrollan dos zonas bien diferenciadas:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Capa compuesta (zona superficial):</strong> capa delgada donde se forman nuevas fases.</li>
            <li><strong>Zona de difusión (subsuperficial):</strong> región donde los elementos difundidos se disuelven en la matriz del material.</li>
          </ul>
          <p>Esta estructura en capas es característica de los tratamientos termoquímicos y permite combinar dureza superficial con tenacidad interna.</p>
        </>
      ),
      visual: VisualLayers
    },
    {
      title: "Fases presentes en la capa compuesta",
      text: (
        <>
          <p>La capa compuesta está formada principalmente por carbonitruros de hierro, resultado de la interacción simultánea del carbono y el nitrógeno. Las fases más comunes son:</p>
          <ul className="list-disc pl-5 font-mono text-sm bg-slate-50 p-3 rounded border border-slate-100 space-y-1">
            <li>ε-Fe₃(N,C)</li>
            <li>γ’-Fe₄(N,C)</li>
            <li>Cementita (Fe₃C) <span className="font-sans text-slate-500 text-xs italic">- en ciertas condiciones</span></li>
          </ul>
          <p>Estas fases presentan alta dureza y estabilidad, lo que explica la mejora en propiedades superficiales.</p>
        </>
      ),
      visual: VisualPhases
    },
    {
      title: "Evolución microestructural durante el proceso",
      text: (
        <>
          <p>La formación de la microestructura sigue una secuencia progresiva, gobernada por la solubilidad del nitrógeno y las diferencias de difusión:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Inicialmente, se favorece la formación de cementita, rica en carbono.</li>
            <li>Posteriormente, aumenta la incorporación de nitrógeno.</li>
            <li>Finalmente, se desarrollan carbonitruros más estables como ε y γ’.</li>
          </ol>
          <p>Como resultado, la composición y las fases cambian gradualmente con el tiempo y la profundidad.</p>
        </>
      ),
      visual: VisualEvolution
    },
    {
      title: "Características de la zona de difusión",
      text: (
        <>
          <p>Por debajo de la capa compuesta se encuentra la zona de difusión, un área vital de transición entre la superficie endurecida y el núcleo:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>El carbono y el nitrógeno se disuelven en la ferrita.</li>
            <li>Se establecen gradientes de concentración decrecientes hacia el interior.</li>
            <li>Se incrementa la resistencia mecánica sin generar una fragilidad excesiva.</li>
          </ul>
        </>
      ),
      visual: VisualGraph
    },
    {
      title: "Relación entre microestructura y propiedades",
      text: (
        <>
          <p>La microestructura generada tiene un impacto directo en el desempeño del material:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>La <strong>capa compuesta</strong> proporciona alta dureza y resistencia al desgaste.</li>
            <li>La <strong>zona de difusión</strong> aporta soporte mecánico y reduce el riesgo de fractura.</li>
            <li>La combinación de fases mejora la <strong>resistencia a la corrosión y reduce la fricción</strong>.</li>
          </ul>
          <p className="bg-indigo-50 text-indigo-800 p-3 rounded text-sm mt-2 border border-indigo-100">
            Un control adecuado del proceso permite optimizar este equilibrio y evitar problemas como fragilidad o desprendimiento de la capa.
          </p>
        </>
      ),
      visual: VisualProperties
    },
    {
      title: "Importancia de los carbonitruros en el proceso",
      text: (
        <>
          <p>La formación de carbonitruros es el <strong>núcleo de la nitrocarburización</strong>, ya que estas fases son responsables de las mejoras funcionales del material.</p>
          <p>Su composición química, distribución espacial y el espesor alcanzado determinan directamente la calidad, el desempeño y la viabilidad del tratamiento térmico aplicado.</p>
        </>
      ),
      visual: VisualCarbonitrides
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-indigo-200 selection:text-indigo-900">
      
      {/* HEADER */}
      <header className="bg-indigo-900 text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
          <Zap className="w-12 h-12 text-indigo-400 mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Microestructura en la Nitrocarburización
          </h1>
          
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 md:p-12 -mt-12 relative z-20 border border-slate-100">
          {sections.map((section, index) => (
            <Section 
              key={index}
              number={index + 1}
              title={section.title}
              text={section.text}
              VisualComponent={section.visual}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </main>


    </div>
  );
}