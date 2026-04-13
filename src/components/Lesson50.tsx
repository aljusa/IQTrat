import React from 'react';
import { Thermometer, ArrowRight, Box, Droplet, Cloud, Info, Settings, Zap, Layers, BarChart3 } from 'lucide-react';

const App = () => {
  const sections = [
    {
      id: 1,
      title: "Introducción al Proceso",
      icon: <Info className="w-6 h-6 text-blue-600" />,
      explanation: "La borurización es un tratamiento termoquímico de superficie que consiste en la difusión de átomos de boro en un material metálico a altas temperaturas, con el objetivo de modificar únicamente su capa superficial.",
      visualTitle: "Esquema de Modificación Superficial",
      visual: (
        <svg viewBox="0 0 200 100" className="w-full h-48 drop-shadow-md">
          <rect x="10" y="10" width="180" height="80" fill="#e5e7eb" rx="8" />
          <rect x="10" y="10" width="180" height="80" fill="none" stroke="#ea580c" strokeWidth="12" rx="8" />
          <text x="100" y="55" textAnchor="middle" fill="#374151" fontSize="14" fontWeight="bold">Núcleo (Sin cambio)</text>
          <text x="100" y="22" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Capa Externa Tratada (Borurada)</text>
        </svg>
      )
    },
    {
      id: 2,
      title: "Naturaleza Termoquímica del Proceso",
      icon: <Thermometer className="w-6 h-6 text-orange-600" />,
      explanation: "La borurización es un proceso de difusión térmica: el boro se introduce en la superficie del metal mediante energía térmica, típicamente en un rango de 840 a 1050 °C.",
      visualTitle: "Diagrama de Difusión Térmica",
      visual: (
        <svg viewBox="0 0 200 100" className="w-full h-48 drop-shadow-md rounded-lg overflow-hidden">
          <defs>
            <linearGradient id="gradTherm" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ea580c" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#e5e7eb" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="200" height="100" fill="url(#gradTherm)" />
          {/* Simulated Boron Atoms (Gradient of density) */}
          {[...Array(40)].map((_, i) => (
            <circle key={`top-${i}`} cx={Math.random() * 200} cy={Math.random() * 30} r="2" fill="#ffffff" opacity="0.9" />
          ))}
          {[...Array(20)].map((_, i) => (
            <circle key={`mid-${i}`} cx={Math.random() * 200} cy={30 + Math.random() * 30} r="1.5" fill="#ffffff" opacity="0.6" />
          ))}
          {[...Array(5)].map((_, i) => (
            <circle key={`bot-${i}`} cx={Math.random() * 200} cy={60 + Math.random() * 30} r="1" fill="#ffffff" opacity="0.3" />
          ))}
          <text x="100" y="50" textAnchor="middle" fill="#1f2937" fontSize="12" fontWeight="bold" className="bg-white/50 px-2 py-1 rounded">840 °C - 1050 °C</text>
        </svg>
      )
    },
    {
      id: 3,
      title: "Formación de Boruros Metálicos",
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      explanation: "Durante el proceso, el boro reacciona con el metal base formando compuestos llamados boruros, que son responsables de las propiedades mejoradas del material.",
      visualTitle: "Representación Molecular Simplificada",
      visual: (
        <div className="flex justify-center items-center h-48 bg-slate-50 rounded-lg drop-shadow-sm border border-slate-200">
          <svg viewBox="0 0 200 100" className="w-full h-full">
            {/* Bonds */}
            <line x1="60" y1="50" x2="100" y2="30" stroke="#94a3b8" strokeWidth="3" />
            <line x1="60" y1="50" x2="100" y2="70" stroke="#94a3b8" strokeWidth="3" />
            <line x1="140" y1="50" x2="100" y2="30" stroke="#94a3b8" strokeWidth="3" />
            <line x1="140" y1="50" x2="100" y2="70" stroke="#94a3b8" strokeWidth="3" />
            <line x1="100" y1="30" x2="100" y2="70" stroke="#94a3b8" strokeWidth="3" />
            
            {/* Iron Atoms */}
            <circle cx="60" cy="50" r="15" fill="#64748b" />
            <text x="60" y="54" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Fe</text>
            <circle cx="140" cy="50" r="15" fill="#64748b" />
            <text x="140" y="54" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Fe</text>
            
            {/* Boron Atoms */}
            <circle cx="100" cy="30" r="10" fill="#ea580c" />
            <text x="100" y="34" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">B</text>
            <circle cx="100" cy="70" r="10" fill="#ea580c" />
            <text x="100" y="74" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">B</text>
          </svg>
        </div>
      )
    },
    {
      id: 4,
      title: "Tipos de Boruros en Aceros",
      icon: <Layers className="w-6 h-6 text-indigo-600" />,
      explanation: "En los aceros se forman principalmente dos fases. La fase FeB (mayor dureza, pero más frágil) y la fase Fe₂B (menor fragilidad, más estable y deseable).",
      visualTitle: "Comparación de Fases",
      visual: (
        <div className="flex h-48 gap-4">
          <div className="flex-1 bg-red-100 rounded-lg p-4 border-2 border-red-300 flex flex-col justify-center items-center text-center shadow-inner">
            <h4 className="font-bold text-2xl text-red-700 mb-2">FeB</h4>
            <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm font-semibold mb-1">+++ Más Duro</span>
            <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">--- Más Frágil</span>
          </div>
          <div className="flex-1 bg-green-100 rounded-lg p-4 border-2 border-green-300 flex flex-col justify-center items-center text-center shadow-inner">
            <h4 className="font-bold text-2xl text-green-700 mb-2">Fe₂B</h4>
            <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-1">+ Menos Frágil</span>
            <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">++ Más Estable</span>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Relación entre Fases y Desempeño",
      icon: <Settings className="w-6 h-6 text-slate-600" />,
      explanation: "La presencia predominante de Fe₂B es generalmente preferida, ya que ofrece un mejor equilibrio entre dureza y resistencia mecánica sin comprometer la integridad estructural.",
      visualTitle: "Balanza de Desempeño (Equilibrio Ideal)",
      visual: (
        <div className="flex justify-center items-center h-48 bg-blue-50 rounded-lg drop-shadow-sm border border-blue-100">
          <svg viewBox="0 0 200 120" className="w-full h-full">
            {/* Base of seesaw */}
            <polygon points="90,100 110,100 100,70" fill="#475569" />
            <line x1="80" y1="100" x2="120" y2="100" stroke="#334155" strokeWidth="4" />
            {/* Board of seesaw (Balanced for Fe2B) */}
            <line x1="40" y1="70" x2="160" y2="70" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
            {/* Weights */}
            <rect x="45" y="40" width="30" height="30" fill="#3b82f6" rx="4" />
            <text x="60" y="58" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Dureza</text>
            
            <rect x="125" y="40" width="30" height="30" fill="#10b981" rx="4" />
            <text x="140" y="58" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Resistencia</text>

            <text x="100" y="20" textAnchor="middle" fill="#047857" fontSize="14" fontWeight="bold">Fase Fe₂B (Equilibrio Ideal)</text>
          </svg>
        </div>
      )
    },
    {
      id: 6,
      title: "Morfología de la Capa Borurada",
      icon: <Layers className="w-6 h-6 text-amber-700" />,
      explanation: "La capa formada presenta una morfología característica en forma de “dientes de sierra”, lo que mejora su adherencia al material base.",
      visualTitle: "Corte Transversal: Morfología Dientes de Sierra",
      visual: (
        <svg viewBox="0 0 200 100" className="w-full h-48 drop-shadow-md rounded-lg overflow-hidden border border-slate-300">
          <rect x="0" y="0" width="200" height="100" fill="#cbd5e1" />
          <path 
            d="M0,0 L0,40 L15,65 L30,35 L45,70 L60,40 L75,75 L90,30 L105,65 L120,40 L135,70 L150,35 L165,75 L180,40 L195,65 L200,45 L200,0 Z" 
            fill="#ea580c" 
          />
          <text x="100" y="20" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Capa Borurada</text>
          <text x="100" y="90" textAnchor="middle" fill="#334155" fontSize="12" fontWeight="bold">Sustrato Metálico (Núcleo)</text>
        </svg>
      )
    },
    {
      id: 7,
      title: "Medios de Borurización",
      icon: <Box className="w-6 h-6 text-teal-600" />,
      explanation: "El proceso puede realizarse en distintos medios: Sólido (polvos), Líquido (sales fundidas), o Gaseoso. Cada uno afecta la velocidad de difusión y la microestructura final.",
      visualTitle: "Comparativa de Medios de Tratamiento",
      visual: (
        <div className="grid grid-cols-3 gap-2 h-48 text-center">
          <div className="bg-stone-100 rounded flex flex-col items-center justify-center p-2 border border-stone-300">
            <Box className="w-12 h-12 text-stone-600 mb-2" />
            <h5 className="font-bold text-stone-800">Sólido</h5>
            <p className="text-xs text-stone-600">(Polvos y pastas)</p>
          </div>
          <div className="bg-blue-100 rounded flex flex-col items-center justify-center p-2 border border-blue-300">
            <Droplet className="w-12 h-12 text-blue-600 mb-2" />
            <h5 className="font-bold text-blue-800">Líquido</h5>
            <p className="text-xs text-blue-600">(Sales fundidas)</p>
          </div>
          <div className="bg-sky-100 rounded flex flex-col items-center justify-center p-2 border border-sky-300">
            <Cloud className="w-12 h-12 text-sky-600 mb-2" />
            <h5 className="font-bold text-sky-800">Gaseoso</h5>
            <p className="text-xs text-sky-600">(Gases reactivos)</p>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Influencia del Medio en el Resultado",
      icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
      explanation: "El medio seleccionado influye directamente en la profundidad de la capa, la uniformidad y la composición microestructural.",
      visualTitle: "Profundidad de Capa vs Medio (Conceptual)",
      visual: (
        <div className="flex items-end justify-around h-48 bg-white rounded-lg p-4 drop-shadow-sm border border-slate-200">
          <div className="flex flex-col items-center w-1/3">
            <div className="w-12 bg-stone-400 rounded-t-md relative group transition-all duration-300" style={{height: '60px'}}>
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500">Media</span>
            </div>
            <span className="mt-2 text-sm font-semibold text-slate-700">Sólido</span>
          </div>
          <div className="flex flex-col items-center w-1/3">
            <div className="w-12 bg-blue-500 rounded-t-md relative group transition-all duration-300" style={{height: '90px'}}>
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-600">Alta</span>
            </div>
            <span className="mt-2 text-sm font-semibold text-slate-700">Líquido</span>
          </div>
          <div className="flex flex-col items-center w-1/3">
            <div className="w-12 bg-sky-400 rounded-t-md relative group transition-all duration-300" style={{height: '120px'}}>
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-sky-600">Muy Alta</span>
            </div>
            <span className="mt-2 text-sm font-semibold text-slate-700">Gaseoso</span>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "Síntesis del Proceso",
      icon: <ArrowRight className="w-6 h-6 text-emerald-600" />,
      explanation: "La borurización es un proceso controlado de difusión que transforma la superficie del metal en una capa altamente resistente mediante la formación de boruros.",
      visualTitle: "Diagrama de Flujo del Proceso",
      visual: (
        <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-48 bg-emerald-50 p-4 rounded-lg border border-emerald-200 gap-2">
          <div className="bg-white p-3 rounded shadow text-center flex-1 w-full md:w-auto border-t-4 border-orange-500">
            <span className="text-sm font-bold text-slate-700">1. Aplicación<br/>de Calor</span>
          </div>
          <ArrowRight className="w-6 h-6 text-emerald-600 hidden md:block" />
          <div className="bg-white p-3 rounded shadow text-center flex-1 w-full md:w-auto border-t-4 border-blue-500">
            <span className="text-sm font-bold text-slate-700">2. Difusión<br/>de Boro</span>
          </div>
          <ArrowRight className="w-6 h-6 text-emerald-600 hidden md:block" />
          <div className="bg-white p-3 rounded shadow text-center flex-1 w-full md:w-auto border-t-4 border-yellow-500">
            <span className="text-sm font-bold text-slate-700">3. Formación<br/>de Boruros</span>
          </div>
          <ArrowRight className="w-6 h-6 text-emerald-600 hidden md:block" />
          <div className="bg-white p-3 rounded shadow text-center flex-1 w-full md:w-auto border-t-4 border-green-500">
            <span className="text-sm font-bold text-slate-700">4. Mejora de<br/>Propiedades</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans p-4 md:p-8">
      <header className="max-w-5xl mx-auto mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Fundamentos de la Borurización
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Guía interactiva sobre el tratamiento termoquímico de superficies mediante la difusión de átomos de boro.
        </p>
      </header>

      <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <article 
            key={section.id} 
            className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col ${index === sections.length - 1 ? 'md:col-span-2' : ''}`}
          >
            <div className="p-6 flex-1 flex flex-col border-b border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-50 rounded-lg shadow-sm border border-slate-100">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-slate-800 leading-tight">
                  {section.id}. {section.title}
                </h2>
              </div>
              <div className="mb-4 flex-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Explicación</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {section.explanation}
                </p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <span>Representación Visual</span>
                <span className="h-px flex-1 bg-slate-200"></span>
              </h3>
              <div className="mb-2 text-sm font-medium text-slate-700 text-center">
                {section.visualTitle}
              </div>
              <div className="w-full">
                {section.visual}
              </div>
            </div>
          </article>
        ))}
      </main>

      <footer className="max-w-5xl mx-auto mt-12 py-6 border-t border-slate-300 text-center text-slate-500 text-sm">
        <p>Módulo Educativo de Ingeniería de Materiales • Generado Dinámicamente</p>
      </footer>
    </div>
  );
};

export default App;