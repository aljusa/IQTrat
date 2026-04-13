import React, { useState } from 'react';
import { 
  Settings, 
  Search, 
  Cpu, 
  Battery, 
  Zap, 
  SlidersHorizontal,
  Factory,
  Leaf,
  BarChart3,
  MonitorSmartphone,
  Microscope,
  Layers,
  Atom
} from 'lucide-react';

// --- COMPONENTES VISUALES (DIAGRAMAS) ---

const MacroMicroDiagram = () => (
  <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-slate-50 rounded-xl border border-slate-200 shadow-inner">
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 bg-slate-200 rounded-full flex items-center justify-center shadow-md">
        <Settings size={64} className="text-slate-600 animate-[spin_10s_linear_infinite]" />
      </div>
      <p className="mt-3 font-semibold text-slate-700">Macroescala</p>
      <p className="text-xs text-slate-500">Pieza Industrial</p>
    </div>
    
    <div className="flex flex-col items-center text-blue-500">
      <Search size={40} className="mb-2" />
      <div className="w-full h-1 bg-blue-300 rounded"></div>
    </div>

    <div className="flex flex-col items-center">
      <div className="w-48 h-32 rounded-lg border-4 border-blue-200 relative overflow-hidden shadow-md flex flex-col">
        <div className="h-1/3 bg-blue-600/80 flex items-center justify-center border-b border-blue-800 relative">
           <span className="text-white text-xs font-bold z-10">Capa Modificada</span>
           {/* Patrón microestructural simple */}
           <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '10px 10px' }}></div>
        </div>
        <div className="h-2/3 bg-slate-300 flex items-center justify-center relative">
          <span className="text-slate-600 text-xs font-bold z-10">Sustrato Base</span>
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>
        </div>
      </div>
      <p className="mt-3 font-semibold text-slate-700">Microescala</p>
      <p className="text-xs text-slate-500">Superficie Ampliada</p>
    </div>
  </div>
);

const MultiLayerDiagram = () => (
  <div className="flex justify-center p-8 bg-slate-50 rounded-xl border border-slate-200">
    <div className="w-full max-w-md flex flex-col gap-1">
      <div className="bg-indigo-500 h-12 rounded-t-lg flex items-center justify-center text-white font-medium shadow-sm transition-transform hover:-translate-y-1">
        Recubrimiento Adicional (Ej. Láser/PVD)
      </div>
      <div className="bg-blue-400 h-16 flex items-center justify-center text-white font-medium shadow-sm relative overflow-hidden transition-transform hover:-translate-y-1">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 20px)' }}></div>
        <span className="z-10 text-shadow">Zona Tratada por Difusión</span>
      </div>
      <div className="bg-slate-400 h-24 rounded-b-lg flex items-center justify-center text-white font-medium shadow-sm transition-transform hover:-translate-y-1">
        Material Base (Aleación compleja / Alta resistencia)
      </div>
    </div>
  </div>
);

const TechDevicesDiagram = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-slate-50 rounded-xl border border-slate-200">
    {[
      { icon: Cpu, name: "Microfabricación", desc: "Microchips y semiconductores" },
      { icon: Zap, name: "Electrónica", desc: "Sensores y contactos" },
      { icon: Battery, name: "Sistemas Energéticos", desc: "Celdas de combustible" }
    ].map((item, idx) => (
      <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-t-blue-500 hover:shadow-lg transition-shadow relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
        <item.icon size={48} className="text-slate-700 mb-4" />
        <h4 className="font-bold text-lg text-slate-800">{item.name}</h4>
        <p className="text-sm text-slate-500 mt-2">{item.desc}</p>
        <div className="mt-4 text-xs font-semibold text-blue-600 bg-blue-50 p-2 rounded border border-blue-100">
          Superficie Funcional Optimizada
        </div>
      </div>
    ))}
  </div>
);

const MaterialDesignDiagram = () => {
  const [hardness, setHardness] = useState(80);
  const [conductivity, setConductivity] = useState(60);
  const [resistance, setResistance] = useState(90);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 bg-slate-50 rounded-xl border border-slate-200">
      <div className="flex-1 flex flex-col gap-6 justify-center">
        <div>
          <div className="flex justify-between text-sm font-medium text-slate-700 mb-1">
            <span>Dureza Superficial</span>
            <span>{hardness}%</span>
          </div>
      <input
  type="range"
  min="0"
  max="100"
  value={hardness}
  onChange={(e) => setHardness(Number(e.target.value))}
  className="w-full accent-indigo-600"
/>
        </div>
        <div>
          <div className="flex justify-between text-sm font-medium text-slate-700 mb-1">
            <span>Conductividad</span>
            <span>{conductivity}%</span>
          </div>
<input
  type="range"
  min="0"
  max="100"
  value={hardness}
  onChange={(e) => setHardness(Number(e.target.value))}
  className="w-full accent-indigo-600"
/>
        </div>
        <div>
          <div className="flex justify-between text-sm font-medium text-slate-700 mb-1">
            <span>Resistencia Química</span>
            <span>{resistance}%</span>
          </div>
<input
  type="range"
  min="0"
  max="100"
  value={hardness}
  onChange={(e) => setHardness(Number(e.target.value))}
  className="w-full accent-indigo-600"
/>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-48 h-48 rounded-xl shadow-2xl overflow-hidden" 
             style={{ 
               backgroundColor: `hsl(210, ${conductivity}%, 50%)`,
               boxShadow: `inset 0 0 ${hardness}px rgba(0,0,0,0.5)`,
               border: `${resistance / 10}px solid rgba(255,255,255,0.8)`
             }}>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-center p-4 drop-shadow-md">
            Material "A Medida"
          </div>
        </div>
      </div>
    </div>
  );
};

const TrendsDiagram = () => (
  <div className="relative p-12 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center h-80">
    <div className="absolute w-64 h-64 border-2 border-dashed border-slate-300 rounded-full animate-[spin_40s_linear_infinite]"></div>
    
    {/* Center */}
    <div className="bg-white p-6 rounded-full shadow-lg z-10 border-4 border-indigo-100 flex flex-col items-center">
      <Factory size={48} className="text-indigo-600 mb-2" />
      <span className="text-xs font-bold text-indigo-900 text-center leading-tight">Proceso<br/>Termoquímico</span>
    </div>

    {/* Orbiting Elements */}
    <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-emerald-100 p-3 rounded-full shadow border border-emerald-200 flex items-center gap-2">
      <Leaf size={20} className="text-emerald-600" />
      <span className="text-xs font-semibold text-emerald-800">Sostenibilidad</span>
    </div>
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-blue-100 p-3 rounded-full shadow border border-blue-200 flex items-center gap-2">
      <BarChart3 size={20} className="text-blue-600" />
      <span className="text-xs font-semibold text-blue-800">Alta Eficiencia</span>
    </div>
    <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-purple-100 p-3 rounded-full shadow border border-purple-200 flex items-center gap-2">
      <MonitorSmartphone size={20} className="text-purple-600" />
      <span className="text-xs font-semibold text-purple-800">Control Digital</span>
    </div>
    <div className="absolute right-8 top-1/2 -translate-y-1/2 bg-amber-100 p-3 rounded-full shadow border border-amber-200 flex items-center gap-2">
      <SlidersHorizontal size={20} className="text-amber-600" />
      <span className="text-xs font-semibold text-amber-800">Precisión</span>
    </div>
  </div>
);

const GradientMaterialDiagram = () => (
  <div className="flex flex-col items-center p-8 bg-slate-50 rounded-xl border border-slate-200">
    <div className="w-full max-w-2xl">
      <div className="h-32 w-full rounded-lg shadow-md relative" style={{ background: 'linear-gradient(to bottom, #1e3a8a 0%, #3b82f6 30%, #94a3b8 100%)' }}>
        <div className="absolute top-2 left-4 text-white text-xs font-bold">Superficie (Alta Dureza)</div>
        <div className="absolute bottom-2 left-4 text-slate-800 text-xs font-bold">Núcleo (Alta Tenacidad)</div>
        
        {/* Overlay graph */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <path d="M 0,10 Q 50,10 100,50 T 200,100 T 400,120 L 400,130 L 0,130 Z" fill="rgba(255,255,255,0.1)" />
          <path d="M 0,10 Q 50,10 100,50 T 200,100 T 800,120" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="3" strokeDasharray="5,5" />
        </svg>
      </div>
      <div className="flex justify-between mt-2 text-xs text-slate-500 px-4">
        <span>Transición Suave (Sin capas abruptas)</span>
      </div>
    </div>
  </div>
);

const CollageDiagram = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
    {[
      { title: "Nanotecnología", icon: Microscope, color: "bg-purple-100 text-purple-700" },
      { title: "Energía Limpia", icon: Leaf, color: "bg-emerald-100 text-emerald-700" },
      { title: "Electrónica Avanzada", icon: Cpu, color: "bg-blue-100 text-blue-700" },
      { title: "Ingeniería de Materiales", icon: Atom, color: "bg-indigo-100 text-indigo-700" },
    ].map((item, idx) => (
      <div key={idx} className={`p-4 rounded-xl flex flex-col items-center justify-center text-center gap-3 relative overflow-hidden group ${item.color}`}>
        <div className="absolute inset-0 bg-white/40 group-hover:bg-transparent transition-colors"></div>
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-50"></div>
        <item.icon size={36} className="relative z-10 drop-shadow-sm" />
        <span className="font-semibold text-sm relative z-10">{item.title}</span>
      </div>
    ))}
    <div className="col-span-2 md:col-span-4 mt-2 text-center p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white shadow-lg">
      <h4 className="font-bold text-lg flex items-center justify-center gap-2">
        <Layers size={24} />
        Superficies Modificadas: El Elemento Común
      </h4>
      <p className="text-sm text-blue-100 mt-1">El pilar en la evolución de soluciones innovadoras.</p>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL (PÁGINA WEB) ---

export default function App() {
  const sections = [
    {
      id: "introduccion",
      title: "Introducción a las aplicaciones actuales",
      explanation: "En la actualidad, los tratamientos termoquímicos han trascendido su uso tradicional en la industria pesada para integrarse en tecnologías avanzadas que requieren precisión a escala microscópica. Esta evolución refleja la necesidad de controlar no solo las propiedades macroscópicas, sino también la estructura y composición a niveles cada vez más finos.",
      VisualComponent: MacroMicroDiagram
    },
    {
      id: "materiales-avanzados",
      title: "Aplicaciones en materiales avanzados",
      explanation: "Hoy en día, los tratamientos termoquímicos se aplican en materiales diseñados para condiciones extremas o funciones específicas. Entre ellos se incluyen aleaciones con composiciones complejas, materiales de alta resistencia y componentes de alto desempeño. Además, es común su uso en procesos híbridos que combinan la difusión de elementos con técnicas como recubrimientos superficiales o tratamientos mediante láser. Esta combinación permite obtener propiedades más específicas y optimizadas.",
      VisualComponent: MultiLayerDiagram
    },
    {
      id: "nuevas-tecnologias",
      title: "Integración en nuevas tecnologías",
      explanation: "Los avances tecnológicos han permitido incorporar los tratamientos termoquímicos en sectores innovadores donde la precisión es crítica. Entre las principales áreas destacan la microfabricación, la electrónica, las celdas de combustible y los dispositivos de alta precisión. En estos contextos, la modificación superficial influye directamente en propiedades funcionales como la conductividad, la resistencia química o la estabilidad térmica.",
      VisualComponent: TechDevicesDiagram
    },
    {
      id: "desarrollo-tecnologico",
      title: "Función en el desarrollo tecnológico",
      explanation: "La ingeniería de superficies no solo mejora materiales existentes, sino que también habilita el desarrollo de nuevas tecnologías. La posibilidad de diseñar superficies con propiedades específicas permite crear materiales “a medida” para aplicaciones altamente especializadas. Esto convierte a los tratamientos termoquímicos en una herramienta estratégica dentro de la innovación tecnológica.",
      VisualComponent: MaterialDesignDiagram
    },
    {
      id: "tendencias",
      title: "Tendencias actuales en tratamientos termoquímicos",
      explanation: "Las tendencias modernas en este campo se orientan hacia una mayor eficiencia, sostenibilidad y precisión. Entre las más relevantes se encuentran procesos más controlados y reproducibles, reducción del impacto ambiental, integración con sistemas digitales y automatizados, y el desarrollo de materiales funcionalmente gradientes. Estos avances buscan adaptar los materiales a entornos cada vez más exigentes, manteniendo un equilibrio entre rendimiento y sostenibilidad.",
      VisualComponent: TrendsDiagram
    },
    {
      id: "gradientes",
      title: "Materiales funcionalmente gradientes",
      explanation: "Una de las innovaciones más importantes es el desarrollo de materiales funcionalmente gradientes, en los cuales las propiedades cambian progresivamente desde la superficie hacia el interior. Esto permite evitar transiciones bruscas entre capas, mejorando la resistencia mecánica y la estabilidad del material.",
      VisualComponent: GradientMaterialDiagram
    },
    {
      id: "cierre",
      title: "Cierre: relevancia en la ingeniería contemporánea",
      explanation: "Los tratamientos termoquímicos se han consolidado como herramientas esenciales en la ingeniería moderna. Su capacidad para adaptarse a materiales avanzados y tecnologías emergentes demuestra su papel clave en el desarrollo de soluciones innovadoras. Lejos de ser técnicas tradicionales, hoy constituyen un pilar en la evolución tecnológica, permitiendo diseñar materiales más eficientes, duraderos y especializados.",
      VisualComponent: CollageDiagram
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* HEADER */}
      <header className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white py-16 px-6 sm:px-12 lg:px-24 border-b-4 border-blue-500 shadow-md">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Tratamientos Termoquímicos Modernos
          </h1>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-5xl mx-auto py-12 px-6 sm:px-12">
        <div className="space-y-20">
          {sections.map((section, index) => (
            <section key={section.id} className="scroll-mt-12 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl shadow-sm border border-blue-200">
                  {index + 1}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-b-2 border-transparent group-hover:border-blue-200 transition-colors pb-1">
                  {section.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-lg leading-relaxed text-slate-600 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  {section.explanation.split('. ').map((sentence, i, arr) => (
                    <span key={i}>
                      {sentence}{i !== arr.length - 1 ? '. ' : ''}
                    </span>
                  ))}
                </div>
                
                <div className="lg:col-span-7">
                  <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                    <section.VisualComponent />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>

  
    </div>
  );
}