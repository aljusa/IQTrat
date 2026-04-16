import React from 'react';
import { 
  ArrowRight, 
  ArrowDownCircle, 
  Layers, 
  Settings, 
  Zap, 
  Box, 
  Droplet, 
  Wind,
  BarChart3,
  GitMerge,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

// --- COMPONENTES VISUALES (DIAGRAMAS) ---

const Visual1Intro = () => (
  <div className="w-full h-48 bg-slate-100 rounded-lg flex items-center justify-center p-4">
    <svg viewBox="0 0 200 100" className="w-full h-full max-w-xs drop-shadow-md">
      <defs>
        <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="20%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
      </defs>
      {/* Núcleo de acero */}
      <rect x="20" y="30" width="160" height="60" fill="#475569" rx="4" />
      <text x="100" y="65" fill="white" fontSize="12" textAnchor="middle" fontWeight="bold">Núcleo (Acero)</text>
      {/* Capa de cromizado */}
      <rect x="16" y="20" width="168" height="20" fill="url(#chromeGrad)" rx="4" />
      <text x="100" y="34" fill="#1e293b" fontSize="10" textAnchor="middle" fontWeight="bold">Capa Cromizada</text>
      {/* Indicadores */}
      <path d="M 10 30 L 10 20 L 16 20" fill="none" stroke="#3b82f6" strokeWidth="2" />
      <text x="10" y="15" fill="#3b82f6" fontSize="8">Superficie enriquecida</text>
    </svg>
  </div>
);

const Visual2Naturaleza = () => (
  <div className="w-full h-48 bg-slate-100 rounded-lg flex relative overflow-hidden items-center justify-center">
    <svg viewBox="0 0 200 120" className="w-full h-full">
      {/* Material base */}
      <rect x="0" y="40" width="200" height="80" fill="#cbd5e1" />
      <text x="100" y="100" fill="#64748b" fontSize="14" textAnchor="middle">Material Base</text>
      
      {/* Átomos de Cromo en la superficie y difundiendo */}
      <circle cx="40" cy="20" r="6" fill="#3b82f6" className="animate-bounce" style={{animationDelay: '0s'}} />
      <circle cx="80" cy="15" r="6" fill="#3b82f6" className="animate-bounce" style={{animationDelay: '0.2s'}} />
      <circle cx="120" cy="25" r="6" fill="#3b82f6" className="animate-bounce" style={{animationDelay: '0.4s'}} />
      <circle cx="160" cy="18" r="6" fill="#3b82f6" className="animate-bounce" style={{animationDelay: '0.1s'}} />

      {/* Átomos difundidos (estáticos pero profundos) */}
      <circle cx="50" cy="55" r="5" fill="#2563eb" opacity="0.8" />
      <circle cx="100" cy="50" r="5" fill="#2563eb" opacity="0.9" />
      <circle cx="150" cy="65" r="5" fill="#2563eb" opacity="0.6" />
      <circle cx="75" cy="75" r="4" fill="#1d4ed8" opacity="0.5" />
      <circle cx="130" cy="80" r="4" fill="#1d4ed8" opacity="0.4" />

      {/* Flechas de difusión */}
      <path d="M 40 30 L 40 45" fill="none" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M 120 35 L 120 50" fill="none" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />
      
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
        </marker>
      </defs>
    </svg>
  </div>
);

const Visual3Diferencia = () => (
  <div className="w-full h-48 bg-slate-100 rounded-lg flex items-center justify-center p-4 gap-4">
    {/* Difusión */}
    <div className="flex-1 h-full flex flex-col items-center">
      <span className="text-xs font-bold mb-2 text-slate-600">Difusión (Cromizado)</span>
      <svg viewBox="0 0 100 100" className="w-full h-24">
        <defs>
          <linearGradient id="diffGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="40%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
        </defs>
        <rect x="10" y="10" width="80" height="80" fill="url(#diffGrad)" rx="4" />
        <text x="50" y="55" fill="white" fontSize="10" textAnchor="middle">Unión Metalúrgica</text>
      </svg>
      <span className="text-[10px] mt-1 text-green-600 flex items-center"><CheckCircle2 className="w-3 h-3 mr-1"/> Adherido</span>
    </div>
    {/* Recubrimiento */}
    <div className="flex-1 h-full flex flex-col items-center">
      <span className="text-xs font-bold mb-2 text-slate-600">Recubrimiento</span>
      <svg viewBox="0 0 100 100" className="w-full h-24 overflow-visible">
        <rect x="10" y="40" width="80" height="50" fill="#94a3b8" rx="4" />
        {/* Capa desprendiéndose */}
        <path d="M 10 40 L 50 40 Q 70 20 90 10 L 90 20 Q 70 30 50 45 L 10 45 Z" fill="#3b82f6" />
        <text x="40" y="70" fill="white" fontSize="10" textAnchor="middle">Sustrato</text>
      </svg>
      <span className="text-[10px] mt-1 text-red-500 flex items-center">Riesgo de desprendimiento</span>
    </div>
  </div>
);

const Visual4Etapas = () => (
  <div className="w-full h-48 bg-slate-100 rounded-lg flex items-center justify-center p-4">
    <div className="flex items-center space-x-2 md:space-x-4 w-full max-w-md">
      <div className="flex-1 bg-white p-3 rounded-lg shadow border border-slate-200 text-center relative">
        <Layers className="w-6 h-6 mx-auto text-blue-500 mb-1" />
        <p className="text-[10px] font-bold">1. Depósito</p>
      </div>
      <ArrowRight className="text-slate-400 w-6 h-6 shrink-0" />
      <div className="flex-1 bg-white p-3 rounded-lg shadow border border-slate-200 text-center relative">
        <GitMerge className="w-6 h-6 mx-auto text-indigo-500 mb-1" />
        <p className="text-[10px] font-bold">2. Difusión</p>
      </div>
      <ArrowRight className="text-slate-400 w-6 h-6 shrink-0" />
      <div className="flex-1 bg-white p-3 rounded-lg shadow border border-slate-200 text-center relative">
        <Settings className="w-6 h-6 mx-auto text-purple-500 mb-1" />
        <p className="text-[10px] font-bold">3. Reacción</p>
      </div>
    </div>
  </div>
);

const Visual5Compuestos = () => (
  <div className="w-full h-48 bg-slate-100 rounded-lg flex items-center justify-center overflow-hidden">
    <svg viewBox="0 0 200 120" className="w-full h-full max-w-sm">
      <rect x="0" y="20" width="200" height="100" fill="#e2e8f0" />
      <rect x="0" y="20" width="200" height="40" fill="#93c5fd" opacity="0.5" />
      {/* Carburos de cromo representados como hexágonos/diamantes oscuros */}
      <polygon points="30,30 35,25 40,30 35,35" fill="#1e293b" />
      <polygon points="60,40 65,35 70,40 65,45" fill="#1e293b" />
      <polygon points="90,28 95,23 100,28 95,33" fill="#1e293b" />
      <polygon points="120,45 125,40 130,45 125,50" fill="#1e293b" />
      <polygon points="150,30 155,25 160,30 155,35" fill="#1e293b" />
      <polygon points="175,40 180,35 185,40 180,45" fill="#1e293b" />
      <polygon points="45,50 50,45 55,50 50,55" fill="#1e293b" />
      <polygon points="105,52 110,47 115,52 110,57" fill="#1e293b" />
      
      {/* Callout */}
      <path d="M 80 15 L 95 25" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="2,2"/>
      <text x="80" y="10" fill="#1e293b" fontSize="10" textAnchor="middle" fontWeight="bold">Carburos de Cromo (Alta Dureza)</text>
      <text x="100" y="90" fill="#64748b" fontSize="14" textAnchor="middle">Sustrato de Acero</text>
    </svg>
  </div>
);

const Visual6Medios = () => (
  <div className="w-full h-48 bg-slate-100 rounded-lg flex items-center justify-center p-4 gap-4">
    <div className="flex flex-col items-center justify-center bg-white w-24 h-28 rounded-xl shadow-sm border-2 border-amber-100 hover:scale-105 transition-transform">
      <Box className="w-8 h-8 text-amber-600 mb-2" />
      <span className="text-xs font-bold text-center">Polvo</span>
      <span className="text-[9px] text-slate-500 text-center">(Caja)</span>
    </div>
    <div className="flex flex-col items-center justify-center bg-white w-24 h-28 rounded-xl shadow-sm border-2 border-blue-100 hover:scale-105 transition-transform">
      <Droplet className="w-8 h-8 text-blue-500 mb-2" />
      <span className="text-xs font-bold text-center">Líquido</span>
      <span className="text-[9px] text-slate-500 text-center">(Baño de Sales)</span>
    </div>
    <div className="flex flex-col items-center justify-center bg-white w-24 h-28 rounded-xl shadow-sm border-2 border-cyan-100 hover:scale-105 transition-transform">
      <Wind className="w-8 h-8 text-cyan-500 mb-2" />
      <span className="text-xs font-bold text-center">Lecho</span>
      <span className="text-[9px] text-slate-500 text-center">(Fluidizado)</span>
    </div>
  </div>
);

const Visual7Influencia = () => (
  <div className="w-full h-48 bg-slate-100 rounded-lg flex items-end justify-center p-6 pb-8 relative">
    <div className="absolute top-4 left-4 text-xs font-bold text-slate-500 flex items-center">
      <BarChart3 className="w-4 h-4 mr-1"/> Espesor de Capa
    </div>
    <div className="flex items-end gap-6 h-full mt-8">
      {/* Polvo */}
      <div className="flex flex-col items-center">
        <div className="w-12 bg-amber-400 rounded-t-md h-16 animate-pulse"></div>
        <span className="text-[10px] mt-2 font-semibold">Polvo</span>
      </div>
      {/* Baño */}
      <div className="flex flex-col items-center">
        <div className="w-12 bg-blue-500 rounded-t-md h-20 animate-pulse" style={{animationDelay: '0.2s'}}></div>
        <span className="text-[10px] mt-2 font-semibold">Baño</span>
      </div>
      {/* Lecho */}
      <div className="flex flex-col items-center">
        <div className="w-12 bg-cyan-500 rounded-t-md h-28 animate-pulse" style={{animationDelay: '0.4s'}}></div>
        <span className="text-[10px] mt-2 font-semibold">Lecho Fluid.</span>
      </div>
    </div>
  </div>
);

const Visual8Gradiente = () => (
  <div className="w-full h-48 bg-slate-100 rounded-lg flex flex-col items-center justify-center p-4">
    <div className="w-full max-w-sm h-16 rounded-full bg-gradient-to-r from-blue-700 via-blue-400 to-slate-200 border border-slate-300 shadow-inner relative">
      <div className="absolute -top-6 left-0 text-xs font-bold text-blue-700">Alta Concentración (Superficie)</div>
      <div className="absolute -top-6 right-0 text-xs font-bold text-slate-500">Baja (Interior)</div>
    </div>
    <div className="flex justify-between w-full max-w-sm mt-4 text-[10px] text-slate-500">
      <span>Átomos de Cromo</span>
      <ArrowRight className="w-4 h-4" />
      <span>Dirección de Difusión</span>
    </div>
  </div>
);

const Visual9Factores = () => (
  <div className="w-full h-48 bg-slate-100 rounded-lg flex items-center justify-center relative p-2">
    <svg viewBox="0 0 200 150" className="w-full h-full">
      {/* Líneas conectoras */}
      <line x1="100" y1="75" x2="50" y2="35" stroke="#94a3b8" strokeWidth="2" />
      <line x1="100" y1="75" x2="150" y2="35" stroke="#94a3b8" strokeWidth="2" />
      <line x1="100" y1="75" x2="50" y2="115" stroke="#94a3b8" strokeWidth="2" />
      <line x1="100" y1="75" x2="150" y2="115" stroke="#94a3b8" strokeWidth="2" />
      
      {/* Nodos Periféricos */}
      <rect x="20" y="20" width="60" height="30" rx="4" fill="white" stroke="#cbd5e1" />
      <text x="50" y="39" fontSize="9" textAnchor="middle" fill="#334155">Temperatura</text>

      <rect x="120" y="20" width="60" height="30" rx="4" fill="white" stroke="#cbd5e1" />
      <text x="150" y="39" fontSize="9" textAnchor="middle" fill="#334155">Tiempo</text>

      <rect x="20" y="100" width="60" height="30" rx="4" fill="white" stroke="#cbd5e1" />
      <text x="50" y="115" fontSize="8" textAnchor="middle" fill="#334155">Composición</text>
      <text x="50" y="125" fontSize="8" textAnchor="middle" fill="#334155">Material</text>

      <rect x="120" y="100" width="60" height="30" rx="4" fill="white" stroke="#cbd5e1" />
      <text x="150" y="115" fontSize="8" textAnchor="middle" fill="#334155">Tamaño de</text>
      <text x="150" y="125" fontSize="8" textAnchor="middle" fill="#334155">Grano</text>

      {/* Nodo Central */}
      <circle cx="100" cy="75" r="25" fill="#3b82f6" />
      <text x="100" y="78" fontSize="10" fontWeight="bold" textAnchor="middle" fill="white">DIFUSIÓN</text>
    </svg>
  </div>
);

const Visual10Crecimiento = () => (
  <div className="w-full h-48 bg-slate-100 rounded-lg flex items-center justify-center p-4">
    <svg viewBox="0 0 200 120" className="w-full h-full max-w-sm">
      {/* Ejes */}
      <line x1="20" y1="100" x2="180" y2="100" stroke="#64748b" strokeWidth="2" />
      <line x1="20" y1="20" x2="20" y2="100" stroke="#64748b" strokeWidth="2" />
      
      {/* Etiquetas Ejes */}
      <text x="100" y="115" fontSize="10" fill="#64748b" textAnchor="middle">Tiempo (t)</text>
      <text x="10" y="60" fontSize="10" fill="#64748b" transform="rotate(-90 10 60)" textAnchor="middle">Espesor (e)</text>

      {/* Curva Parabólica y = sqrt(x) aprox */}
      <path d="M 20 100 Q 60 40 170 30" fill="none" stroke="#2563eb" strokeWidth="3" className="stroke-dasharray-100 animate-draw" />
      
      {/* Formula */}
      <text x="120" y="45" fontSize="12" fill="#2563eb" fontWeight="bold" fontStyle="italic">e ≈ k√t</text>
    </svg>
  </div>
);

const Visual11Sintesis = () => (
  <div className="w-full h-48 bg-slate-100 rounded-lg flex items-center justify-center p-2 overflow-x-auto">
    <div className="flex items-center min-w-max space-x-2 px-4">
      <div className="bg-red-100 border border-red-300 text-red-800 p-2 rounded shadow-sm flex flex-col items-center w-24">
        <Zap className="w-5 h-5 mb-1" />
        <span className="text-[9px] text-center font-bold">Aplicación Térmica</span>
      </div>
      <ArrowRight className="text-slate-400 w-4 h-4" />
      
      <div className="bg-blue-100 border border-blue-300 text-blue-800 p-2 rounded shadow-sm flex flex-col items-center w-24">
        <ArrowDownCircle className="w-5 h-5 mb-1" />
        <span className="text-[9px] text-center font-bold">Difusión de Cromo</span>
      </div>
      <ArrowRight className="text-slate-400 w-4 h-4" />
      
      <div className="bg-slate-200 border border-slate-400 text-slate-800 p-2 rounded shadow-sm flex flex-col items-center w-24">
        <Settings className="w-5 h-5 mb-1" />
        <span className="text-[9px] text-center font-bold">Formación Carburos</span>
      </div>
      <ArrowRight className="text-slate-400 w-4 h-4" />
      
      <div className="bg-green-100 border border-green-300 text-green-800 p-2 rounded shadow-sm flex flex-col items-center w-24">
        <TrendingUp className="w-5 h-5 mb-1" />
        <span className="text-[9px] text-center font-bold">Mejora Propiedades</span>
      </div>
    </div>
  </div>
);


// --- ESTRUCTURA DE DATOS ---

const contentData = [
  {
    id: 1,
    title: "Introducción al cromizado",
    explanation: "El cromizado es un tratamiento termoquímico de superficie que introduce átomos de cromo en un material metálico para mejorar propiedades como la resistencia al desgaste y a la corrosión.",
    VisualComponent: Visual1Intro
  },
  {
    id: 2,
    title: "Naturaleza del proceso",
    explanation: "El cromizado es un proceso de difusión térmica en el cual los átomos de cromo penetran en la superficie del material base, generalmente acero, modificando su composición superficial.",
    VisualComponent: Visual2Naturaleza
  },
  {
    id: 3,
    title: "Diferencia con recubrimientos",
    explanation: "A diferencia de los recubrimientos convencionales, el cromizado genera una capa unida metalúrgicamente al sustrato, lo que mejora su adherencia y estabilidad evitando desprendimientos.",
    VisualComponent: Visual3Diferencia
  },
  {
    id: 4,
    title: "Etapas del proceso",
    explanation: "El cromizado ocurre en tres etapas secuenciales fundamentales: (1) Depósito de cromo en la superficie, (2) Difusión del cromo hacia el interior del material, y (3) Reacción con el material base.",
    VisualComponent: Visual4Etapas
  },
  {
    id: 5,
    title: "Formación de compuestos",
    explanation: "Durante el proceso, el cromo reacciona con el carbono presente en el acero formando carburos de cromo. Estas partículas de alta dureza son las principales responsables de la mejora en las propiedades mecánicas.",
    VisualComponent: Visual5Compuestos
  },
  {
    id: 6,
    title: "Medios de cromizado",
    explanation: "El proceso puede realizarse en distintos medios: Polvo (cementación en caja), Baño de sales (líquido) o Lecho fluidizado (partículas en suspensión). Cada medio influye en la eficiencia del proceso.",
    VisualComponent: Visual6Medios
  },
  {
    id: 7,
    title: "Influencia del medio en la capa",
    explanation: "El medio de tratamiento utilizado afecta variables críticas del resultado final, tales como: la velocidad de difusión de los átomos, la uniformidad de la capa generada y el espesor máximo alcanzado.",
    VisualComponent: Visual7Influencia
  },
  {
    id: 8,
    title: "Base científica: La difusión",
    explanation: "La difusión es el principio fundamental. Consiste en el movimiento termodinámico de átomos desde zonas de alta concentración (la superficie enriquecida) hacia zonas de menor concentración (el núcleo del material).",
    VisualComponent: Visual8Gradiente
  },
  {
    id: 9,
    title: "Factores que afectan la difusión",
    explanation: "La eficiencia y profundidad de la difusión del cromo dependen directamente de: la temperatura del proceso, el tiempo de tratamiento, la composición química del material base y su tamaño de grano.",
    VisualComponent: Visual9Factores
  },
  {
    id: 10,
    title: "Crecimiento de la capa",
    explanation: "El crecimiento de la capa cromizada obedece a una ley parabólica. Esto es característico de los procesos controlados por difusión: el espesor aumenta con el tiempo, pero a un ritmo cada vez más lento.",
    VisualComponent: Visual10Crecimiento
  },
  {
    id: 11,
    title: "Síntesis del proceso",
    explanation: "El cromizado es un proceso de modificación superficial basado en la difusión. Genera una capa resistente, firmemente adherida y funcional, sin alterar de forma significativa las propiedades del núcleo del material.",
    VisualComponent: Visual11Sintesis
  }
];


// --- COMPONENTE PRINCIPAL ---

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200">
      
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-12 px-6 shadow-lg mb-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Fundamentos del Cromizado
          </h1>
     
        </div>
      </header>

      {/* Contenido Principal - Grid de tarjetas */}
      <main className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contentData.map((section, index) => (
            <div 
              key={section.id} 
              className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 overflow-hidden flex flex-col
                ${index === contentData.length - 1 ? 'md:col-span-2' : ''}
              `}
            >
              {/* Sección Visual Superior */}
              <div className="p-4 border-b border-slate-50">
                <section.VisualComponent />
              </div>

              {/* Contenido Textual Inferior */}
              <div className="p-6 flex flex-col grow">
                <div className="flex items-center gap-3 mb-3">
                 
                  <h2 className="text-xl font-bold text-slate-800 leading-tight">
                    {section.title}
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {section.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}