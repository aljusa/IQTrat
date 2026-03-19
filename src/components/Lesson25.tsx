import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// --- TYPES & INTERFACES ---

interface SectionData {
  id: number;
  tabTitle: string;
  title: string;
  description: string;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface LessonLayoutProps {
  section: SectionData;
}

// --- DATA ---

const LESSON_DATA: SectionData[] = [
  {
    id: 0,
    tabTitle: 'Introducción',
    title: 'Introducción a los Cambios Microestructurales',
    description: 'El revenido no solo modifica propiedades visibles del acero, sino que actúa a nivel microscópico, transformando su estructura interna. Estos cambios microestructurales son los responsables directos de la mejora en tenacidad, reducción de fragilidad y ajuste de dureza.',
  },
  {
    id: 1,
    tabTitle: 'Martensita',
    title: 'Martensita: Estado Inicial',
    description: 'La martensita es una fase del acero formada durante el temple, caracterizada por su alta dureza y elevada fragilidad. Presenta una estructura cristalina distorsionada que almacena gran cantidad de energía interna.',
  },
  {
    id: 2,
    tabTitle: 'Transformación',
    title: 'Transformación de la Martensita',
    description: 'Durante el revenido, la martensita se descompone parcialmente en ferrita y cementita. Este proceso reduce la distorsión de la red cristalina y genera una estructura más estable y menos frágil.',
  },
  {
    id: 3,
    tabTitle: 'Ferrita y Cementita',
    title: 'Ferrita y Cementita',
    description: 'La ferrita es una fase blanda y dúctil del acero, mientras que la cementita es dura y frágil. La combinación de ambas durante el revenido permite equilibrar propiedades mecánicas, integrando resistencia y ductilidad.',
  },
  {
    id: 4,
    tabTitle: 'Alivio de Tensiones',
    title: 'Alivio de Tensiones Internas',
    description: 'El calor aplicado durante el revenido permite que los átomos se reorganicen, reduciendo las tensiones internas generadas en el temple. Esto disminuye significativamente el riesgo de grietas o fallas estructurales.',
  },
  {
    id: 5,
    tabTitle: 'Temp. vs Dureza',
    title: 'Relación: Temperatura y Dureza',
    description: 'A bajas temperaturas de revenido, la transformación microestructural es limitada, por lo que el acero conserva alta dureza. A medida que la temperatura aumenta, la descomposición de la martensita es mayor y la dureza disminuye.',
  },
  {
    id: 6,
    tabTitle: 'Temp. vs Tenacidad',
    title: 'Relación: Temperatura y Tenacidad',
    description: 'El incremento de la temperatura de revenido favorece la formación de estructuras más estables, aumentando la tenacidad. Esto permite al material absorber más energía antes de fracturarse.',
  },
  {
    id: 7,
    tabTitle: 'Relación Integral',
    title: 'Relación Integral Propiedades–Temperatura',
    description: 'Existe una relación inversa entre dureza y tenacidad durante el revenido: al aumentar la temperatura, la dureza disminuye mientras la tenacidad aumenta. Este compromiso permite seleccionar condiciones según la aplicación.',
  },
  {
    id: 8,
    tabTitle: 'Herr. de Corte',
    title: 'Aplicación: Herramientas de Corte',
    description: 'Las herramientas de corte requieren alta dureza para resistir el desgaste. Por ello, se emplea un revenido a baja temperatura, conservando la mayor parte de la dureza obtenida en el temple.',
  },
  {
    id: 9,
    tabTitle: 'Resortes',
    title: 'Aplicación: Resortes',
    description: 'Los resortes necesitan elasticidad y resistencia a la deformación repetida. Se aplica un revenido a temperatura media para lograr un equilibrio entre dureza y flexibilidad.',
  },
  {
    id: 10,
    tabTitle: 'Comp. Estructurales',
    title: 'Aplicación: Componentes Estructurales',
    description: 'Los componentes estructurales requieren alta tenacidad para soportar impactos y cargas dinámicas. Por ello, se utiliza un revenido a alta temperatura que favorece la ductilidad y resistencia al choque.',
  },
  {
    id: 11,
    tabTitle: 'Cierre',
    title: 'Cierre: Microestructura y Función',
    description: 'El revenido transforma la microestructura del acero para ajustar sus propiedades mecánicas. Esta relación directa entre estructura interna y comportamiento externo permite diseñar materiales adecuados para distintas aplicaciones industriales.',
  },
];

const CHART_DATA = [
  { temp: 100, dureza: 65, tenacidad: 10 },
  { temp: 200, dureza: 60, tenacidad: 15 },
  { temp: 300, dureza: 52, tenacidad: 25 },
  { temp: 400, dureza: 45, tenacidad: 40 },
  { temp: 500, dureza: 35, tenacidad: 65 },
  { temp: 600, dureza: 25, tenacidad: 85 },
];

// --- COMPONENTS ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`grid bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

// Renders the specific diagram based on the current section ID
const DiagramRender: React.FC<{ sectionId: number }> = ({ sectionId }) => {
  switch (sectionId) {
    case 0: // Introducción
      return (
        <div className="grid grid-rows-2 gap-4 h-full p-4 place-items-center bg-slate-50">
          <div className="grid place-items-center text-center w-full max-w-sm p-4 bg-blue-100 rounded-lg border-2 border-blue-300">
            <h4 className="font-bold text-blue-800 mb-2">Macro-escala</h4>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="grid place-items-center p-2 bg-white rounded shadow-sm">Dureza</div>
              <div className="grid place-items-center p-2 bg-white rounded shadow-sm">Tenacidad</div>
            </div>
          </div>
          <div className="grid place-items-center text-slate-400 text-2xl font-bold">↑ Causa - Efecto ↓</div>
          <div className="grid place-items-center text-center w-full max-w-sm p-4 bg-emerald-100 rounded-lg border-2 border-emerald-300">
            <h4 className="font-bold text-emerald-800 mb-2">Micro-escala</h4>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="grid place-items-center p-2 bg-white rounded shadow-sm text-sm">Martensita</div>
              <div className="grid place-items-center p-2 bg-white rounded shadow-sm text-sm">Ferrita + Cementita</div>
            </div>
          </div>
        </div>
      );
    case 1: // Martensita
      return (
        <div className="grid place-items-center h-full p-6 bg-red-50">
          <div className="grid grid-rows-[auto_1fr] gap-6 w-full max-w-md place-items-center">
            <div className="grid bg-red-600 text-white p-4 rounded-md w-full text-center font-bold shadow-lg">
              ESTRUCTURA DISTORSIONADA (Alta Energía)
            </div>
            {/* Representación de red cristalina deformada BCT */}
            <svg width="200" height="200" viewBox="0 0 100 100" className="drop-shadow-xl">
              <polygon points="20,10 80,10 90,30 30,30" fill="none" stroke="#dc2626" strokeWidth="2" />
              <polygon points="20,70 80,70 90,90 30,90" fill="none" stroke="#dc2626" strokeWidth="2" />
              <line x1="20" y1="10" x2="20" y2="70" stroke="#dc2626" strokeWidth="2" />
              <line x1="80" y1="10" x2="80" y2="70" stroke="#dc2626" strokeWidth="2" />
              <line x1="90" y1="30" x2="90" y2="90" stroke="#dc2626" strokeWidth="2" />
              <line x1="30" y1="30" x2="30" y2="90" stroke="#dc2626" strokeWidth="2" />
              {/* Átomo intersticial deformando */}
              <circle cx="55" cy="50" r="8" fill="#991b1b" />
              <circle cx="20" cy="10" r="4" fill="#ef4444" />
              <circle cx="80" cy="10" r="4" fill="#ef4444" />
              <circle cx="90" cy="30" r="4" fill="#ef4444" />
              <circle cx="30" cy="30" r="4" fill="#ef4444" />
              <circle cx="20" cy="70" r="4" fill="#ef4444" />
              <circle cx="80" cy="70" r="4" fill="#ef4444" />
              <circle cx="90" cy="90" r="4" fill="#ef4444" />
              <circle cx="30" cy="90" r="4" fill="#ef4444" />
            </svg>
            <div className="grid text-center text-red-800 font-medium">Red Tetragonal Centrada en el Cuerpo (BCT) sobresaturada de carbono.</div>
          </div>
        </div>
      );
    case 2: // Transformación
      return (
        <div className="grid grid-cols-1 place-items-center h-full p-4 bg-slate-50">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 w-full max-w-2xl place-items-center">
            <div className="grid place-items-center p-6 bg-red-100 border-2 border-red-400 rounded-xl w-full text-center">
              <h3 className="font-bold text-red-700 mb-2">Martensita</h3>
              <p className="text-sm text-red-600">Fase única, distorsionada</p>
            </div>
            <div className="grid place-items-center text-slate-500 font-bold text-xl">
              → <span className="text-xs block mt-1">+ Temperatura</span>
            </div>
            <div className="grid grid-rows-2 gap-2 w-full">
              <div className="grid place-items-center p-4 bg-blue-100 border-2 border-blue-400 rounded-lg text-center">
                <h3 className="font-bold text-blue-700">Ferrita (α)</h3>
              </div>
              <div className="grid place-items-center p-4 bg-gray-200 border-2 border-gray-400 rounded-lg text-center">
                <h3 className="font-bold text-gray-700">Cementita (Fe₃C)</h3>
              </div>
            </div>
          </div>
        </div>
      );
    case 3: // Ferrita y Cementita
      return (
        <div className="grid place-items-center h-full p-6 bg-slate-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
             <Card className="border-blue-300">
               <div className="grid grid-rows-[auto_1fr] h-full">
                 <div className="grid place-items-center bg-blue-500 p-3 text-white font-bold text-lg">Ferrita</div>
                 <div className="grid gap-3 p-6 place-items-center bg-blue-50 text-blue-900 text-center">
                   <div className="grid w-16 h-16 rounded-full bg-blue-200 border-4 border-blue-400 place-items-center text-2xl">☁️</div>
                   <ul className="grid gap-2 text-sm text-left list-disc pl-4">
                     <li>Estructura cúbica estable (BCC).</li>
                     <li>Alta ductilidad y maleabilidad.</li>
                     <li>Muy baja dureza.</li>
                   </ul>
                 </div>
               </div>
             </Card>
             <Card className="border-gray-400">
               <div className="grid grid-rows-[auto_1fr] h-full">
                 <div className="grid place-items-center bg-gray-700 p-3 text-white font-bold text-lg">Cementita</div>
                 <div className="grid gap-3 p-6 place-items-center bg-gray-100 text-gray-900 text-center">
                   <div className="grid w-16 h-16 rounded bg-gray-300 border-4 border-gray-500 place-items-center text-2xl">💎</div>
                   <ul className="grid gap-2 text-sm text-left list-disc pl-4">
                     <li>Compuesto intermetálico (Fe₃C).</li>
                     <li>Extremadamente dura.</li>
                     <li>Alta fragilidad.</li>
                   </ul>
                 </div>
               </div>
             </Card>
          </div>
        </div>
      );
    case 4: // Alivio de Tensiones
      return (
         <div className="grid place-items-center h-full p-6 bg-slate-50">
          <div className="grid grid-rows-[1fr_auto_1fr] gap-4 w-full max-w-md place-items-center">
            <div className="grid w-full p-4 bg-orange-100 border border-orange-300 rounded-lg place-items-center relative overflow-hidden">
               <div className="grid absolute top-2 left-2 text-xs font-bold text-orange-600">Antes del Revenido</div>
               <svg width="150" height="100" viewBox="0 0 150 100">
                  <path d="M10,20 Q40,5 75,30 T140,20" fill="none" stroke="#ea580c" strokeWidth="3" />
                  <path d="M10,50 Q50,20 75,60 T140,50" fill="none" stroke="#ea580c" strokeWidth="3" />
                  <path d="M10,80 Q30,95 75,70 T140,80" fill="none" stroke="#ea580c" strokeWidth="3" />
               </svg>
               <span className="text-orange-700 font-semibold mt-2">Red Tensionada</span>
            </div>
            <div className="grid text-3xl text-slate-400">↓</div>
            <div className="grid w-full p-4 bg-emerald-100 border border-emerald-300 rounded-lg place-items-center relative overflow-hidden">
               <div className="grid absolute top-2 left-2 text-xs font-bold text-emerald-600">Después del Revenido</div>
               <svg width="150" height="100" viewBox="0 0 150 100">
                  <line x1="10" y1="20" x2="140" y2="20" stroke="#059669" strokeWidth="3" />
                  <line x1="10" y1="50" x2="140" y2="50" stroke="#059669" strokeWidth="3" />
                  <line x1="10" y1="80" x2="140" y2="80" stroke="#059669" strokeWidth="3" />
               </svg>
               <span className="text-emerald-700 font-semibold mt-2">Red Relajada</span>
            </div>
          </div>
        </div>
      );
    case 5: // Temperatura vs Dureza
      return (
        <div className="grid p-6 h-full w-full bg-white place-items-center min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={CHART_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="temp" label={{ value: 'Temperatura de Revenido (°C)', position: 'insideBottom', offset: -10 }} />
              <YAxis label={{ value: 'Dureza (HRC)', angle: -90, position: 'insideLeft' }} domain={[20, 70]} />
              <Tooltip />
              <Line type="monotone" dataKey="dureza" stroke="#dc2626" strokeWidth={3} dot={{ r: 6 }} name="Dureza" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
    case 6: // Temperatura vs Tenacidad
      return (
        <div className="grid p-6 h-full w-full bg-white place-items-center min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={CHART_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="temp" label={{ value: 'Temperatura de Revenido (°C)', position: 'insideBottom', offset: -10 }} />
              <YAxis label={{ value: 'Tenacidad (Impacto J)', angle: -90, position: 'insideLeft' }} domain={[0, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="tenacidad" stroke="#2563eb" strokeWidth={3} dot={{ r: 6 }} name="Tenacidad" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
    case 7: // Relación Integral
      return (
        <div className="grid p-6 h-full w-full bg-white place-items-center min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={CHART_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="temp" label={{ value: 'Temperatura de Revenido (°C)', position: 'insideBottom', offset: -10 }} />
              <YAxis yAxisId="left" label={{ value: 'Dureza', angle: -90, position: 'insideLeft' }} domain={[20, 70]} />
              <YAxis yAxisId="right" orientation="right" label={{ value: 'Tenacidad', angle: 90, position: 'insideRight' }} domain={[0, 100]} />
              <Tooltip />
              <Legend verticalAlign="top" height={36}/>
              <Line yAxisId="left" type="monotone" dataKey="dureza" stroke="#dc2626" strokeWidth={3} name="Dureza" />
              <Line yAxisId="right" type="monotone" dataKey="tenacidad" stroke="#2563eb" strokeWidth={3} name="Tenacidad" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
    case 8: // Aplicación: Herramientas de Corte
      return (
        <div className="grid place-items-center h-full p-6 bg-slate-50">
          <div className="grid grid-rows-[auto_1fr] gap-4 place-items-center">
            <div className="grid w-40 h-40 bg-red-100 rounded-full place-items-center border-4 border-red-500 shadow-xl relative">
              <span className="text-6xl">🔪</span>
              <div className="grid absolute -bottom-4 bg-red-600 text-white px-3 py-1 rounded text-sm font-bold shadow">
                Alta Dureza
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 text-center w-full max-w-sm">
               <div className="grid p-3 bg-white shadow rounded border border-slate-200">
                  <span className="font-bold text-slate-700 text-sm">Temp. Revenido</span>
                  <span className="text-red-600 font-bold">150°C - 250°C</span>
               </div>
               <div className="grid p-3 bg-white shadow rounded border border-slate-200">
                  <span className="font-bold text-slate-700 text-sm">Objetivo Principal</span>
                  <span className="text-slate-600 text-sm">Resistencia al desgaste</span>
               </div>
            </div>
          </div>
        </div>
      );
    case 9: // Aplicación: Resortes
      return (
        <div className="grid place-items-center h-full p-6 bg-slate-50">
          <div className="grid grid-rows-[auto_1fr] gap-4 place-items-center">
            <div className="grid w-40 h-40 bg-purple-100 rounded-full place-items-center border-4 border-purple-500 shadow-xl relative">
              <span className="text-6xl">🪀</span>
              <div className="grid absolute -bottom-4 bg-purple-600 text-white px-3 py-1 rounded text-sm font-bold shadow">
                Límite Elástico
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 text-center w-full max-w-sm">
               <div className="grid p-3 bg-white shadow rounded border border-slate-200">
                  <span className="font-bold text-slate-700 text-sm">Temp. Revenido</span>
                  <span className="text-purple-600 font-bold">350°C - 450°C</span>
               </div>
               <div className="grid p-3 bg-white shadow rounded border border-slate-200">
                  <span className="font-bold text-slate-700 text-sm">Objetivo Principal</span>
                  <span className="text-slate-600 text-sm">Elasticidad y fatiga</span>
               </div>
            </div>
          </div>
        </div>
      );
    case 10: // Aplicación: Componentes Estructurales
      return (
        <div className="grid place-items-center h-full p-6 bg-slate-50">
          <div className="grid grid-rows-[auto_1fr] gap-4 place-items-center">
            <div className="grid w-40 h-40 bg-blue-100 rounded-full place-items-center border-4 border-blue-500 shadow-xl relative">
              <span className="text-6xl">🏗️</span>
              <div className="grid absolute -bottom-4 bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold shadow">
                Alta Tenacidad
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 text-center w-full max-w-sm">
               <div className="grid p-3 bg-white shadow rounded border border-slate-200">
                  <span className="font-bold text-slate-700 text-sm">Temp. Revenido</span>
                  <span className="text-blue-600 font-bold">500°C - 650°C</span>
               </div>
               <div className="grid p-3 bg-white shadow rounded border border-slate-200">
                  <span className="font-bold text-slate-700 text-sm">Objetivo Principal</span>
                  <span className="text-slate-600 text-sm">Resistencia a impactos</span>
               </div>
            </div>
          </div>
        </div>
      );
    case 11: // Cierre
      return (
        <div className="grid place-items-center h-full w-full p-6 bg-slate-50 overflow-hidden">
          <div className="grid grid-rows-[auto_auto_auto_auto_auto] place-items-center gap-2 w-full max-w-lg">
             <div className="grid place-items-center w-full bg-slate-800 text-white p-4 rounded-xl shadow">
               <h3 className="font-bold">MICROESTRUCTURA</h3>
               <span className="text-sm text-slate-300">Martensita → Ferrita + Cementita</span>
             </div>
             <div className="grid text-2xl font-bold text-slate-400">↓</div>
             <div className="grid place-items-center w-full bg-blue-600 text-white p-4 rounded-xl shadow">
               <h3 className="font-bold">PROPIEDADES MECÁNICAS</h3>
               <div className="grid grid-cols-3 gap-2 w-full mt-2 text-center text-xs">
                 <div className="grid bg-blue-500 p-1 rounded">Dureza ↓</div>
                 <div className="grid bg-blue-500 p-1 rounded">Tenacidad ↑</div>
                 <div className="grid bg-blue-500 p-1 rounded">Ductilidad ↑</div>
               </div>
             </div>
             <div className="grid text-2xl font-bold text-slate-400">↓</div>
             <div className="grid place-items-center w-full bg-emerald-600 text-white p-4 rounded-xl shadow">
               <h3 className="font-bold">APLICACIONES INDUSTRIALES</h3>
               <span className="text-sm text-emerald-100 text-center mt-1">Herramientas, Resortes, Estructuras</span>
             </div>
          </div>
        </div>
      );
    default:
      return <div className="grid place-items-center h-full">Seleccione una pestaña válida.</div>;
  }
};

const LessonLayout: React.FC<LessonLayoutProps> = ({ section }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full p-6 bg-slate-100 items-start">
      {/* Panel Izquierdo: Título y Descripción */}
      <div className="md:col-span-4 grid grid-rows-[auto_1fr] gap-4 h-full">
        <Card className="h-full">
          <div className="grid grid-rows-[auto_1fr] h-full">
            <div className="grid p-6 border-b border-slate-100 bg-white">
              <h2 className="text-2xl font-extrabold text-slate-800 leading-tight">
                {section.title}
              </h2>
            </div>
            <div className="grid p-6 bg-slate-50 place-items-start content-start">
              <p className="text-slate-600 leading-relaxed text-lg">
                {section.description}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Panel Derecho: Render del Diagrama */}
      <div className="md:col-span-8 grid h-full min-h-[500px]">
        <Card className="h-full">
          <div className="grid grid-rows-[auto_1fr] h-full">
            <div className="grid relative bg-white w-full h-full overflow-hidden">
              <DiagramRender sectionId={section.id} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

// --- MAIN APP ---

export default function App() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="grid grid-rows-[auto_auto_1fr] h-screen w-full bg-slate-100 font-sans ">
      
      {/* Header */}
      <header className="grid grid-cols-[1fr_auto] items-center px-6 py-4 bg-slate-900 text-white shadow-md z-10">
        <div className="grid gap-1">
          <h1 className="text-xl font-bold tracking-tight">Cambios Microestructurales y Propiedades</h1>
        </div>
      </header>

      {/* Navegación (Tabs) */}
      <nav className="grid grid-cols-5  gap-2  bg-white px-6 py-3 border-b border-slate-200 shadow-sm z-0">
        {LESSON_DATA.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveTab(section.id)}
            className={`grid place-items-center truncate px-4 py-2 rounded-md font-medium text-sm transition-all whitespace-nowrap ${
              activeTab === section.id
                ? 'bg-blue-600 text-white shadow'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {section.tabTitle}
          </button>
        ))}
      </nav>

      {/* Main Content Area */}
      <main className="grid w-full h-full">
        <LessonLayout section={LESSON_DATA[activeTab]} />
      </main>
      
    </div>
  );
}