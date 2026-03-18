import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
} from 'recharts';

// --- DEFINICIÓN DE TIPOS ---

interface SectionData {
  id: number;
  tabLabel: string;
  diagramTitle: string;
  diagramDescription: string;
  content: string;
}

interface LessonLayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

interface CardProps {
  children: React.ReactNode;
}

interface DiagramRenderProps {
  activeIndex: number;
}

// --- DATOS DE LA LECCIÓN ---

const lessonData: SectionData[] = [
  {
    id: 0,
    tabLabel: 'Visión General',
    diagramTitle: 'Las Tres Etapas del Temple',
    diagramDescription: 'El proceso de temple se compone de tres etapas fundamentales: calentamiento, mantenimiento y enfriamiento rápido. El resultado final depende del control estricto de esta secuencia térmica.',
    content: 'El proceso de temple se compone de tres etapas fundamentales: calentamiento, mantenimiento y enfriamiento rápido. Cada una cumple una función específica y el resultado final depende del control conjunto de todas ellas.'
  },
  {
    id: 1,
    tabLabel: 'Calentamiento',
    diagramTitle: 'Curva de Austenización',
    diagramDescription: 'El material se calienta hasta alcanzar la temperatura de austenización (usualmente entre 750 °C y 900 °C para aceros al carbono), donde la estructura cristalina se transforma en austenita.',
    content: 'En la etapa de calentamiento, el acero se lleva hasta una temperatura en la que su estructura se transforma en austenita. En aceros al carbono, esta temperatura suele ubicarse aproximadamente entre 750 °C y 900 °C, según la composición del material.'
  },
  {
    id: 2,
    tabLabel: 'Uniformidad',
    diagramTitle: 'Impacto de los Gradientes Térmicos',
    diagramDescription: 'Es crítico lograr una distribución térmica uniforme. Las diferencias de temperatura dentro de la misma pieza generan tensiones internas y transformaciones estructurales heterogéneas.',
    content: 'El calentamiento debe ser uniforme para evitar gradientes térmicos que generen tensiones internas antes del enfriamiento. Si distintas zonas de la pieza alcanzan temperaturas diferentes, la transformación estructural puede resultar incompleta o desigual.'
  },
  {
    id: 3,
    tabLabel: 'Mantenimiento',
    diagramTitle: 'Permanencia a Temperatura',
    diagramDescription: 'Una vez alcanzada la temperatura objetivo, la pieza debe mantenerse en ese estado térmico el tiempo suficiente para garantizar que la transformación austenítica sea completa en toda su sección.',
    content: 'La etapa de mantenimiento o permanencia consiste en conservar la pieza a la temperatura de temple durante un tiempo determinado. El objetivo es asegurar que toda la sección del material alcance una estructura homogénea antes del enfriamiento.'
  },
  {
    id: 4,
    tabLabel: 'Factores de Tiempo',
    diagramTitle: 'Variables del Tiempo de Mantenimiento',
    diagramDescription: 'El tiempo requerido para el mantenimiento térmico no es constante; es una función multivariable que depende del volumen de la pieza, la aleación específica y la temperatura de trabajo.',
    content: 'El tiempo de mantenimiento depende de factores como el tamaño de la pieza, el tipo de acero y la temperatura alcanzada. Piezas más grandes o aceros con ciertas composiciones pueden requerir tiempos mayores para lograr uniformidad interna.'
  },
  {
    id: 5,
    tabLabel: 'Enfriamiento',
    diagramTitle: 'Transformación Martensítica',
    diagramDescription: 'La extracción violenta de calor (temple) bloquea la difusión del carbono y fuerza la estructura cristalina a transformarse en martensita, confiriendo la alta dureza característica del proceso.',
    content: 'La última etapa es el enfriamiento rápido, en la cual la pieza se sumerge o expone a un medio capaz de extraer calor con rapidez. Este descenso brusco de temperatura impide transformaciones lentas y favorece la formación de estructuras duras, especialmente martensita.'
  }
];

// --- DATOS PARA EL GRÁFICO (RECHARTS) ---
const thermalData = [
  { time: 0, temp: 20 },
  { time: 10, temp: 400 },
  { time: 20, temp: 820 },
  { time: 35, temp: 820 },
  { time: 40, temp: 40 }
];

// --- COMPONENTES DE PRESENTACIÓN ---

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-6 bg-white p-8 rounded-xl shadow-md border border-slate-200">
      {children}
    </div>
  );
};

const LessonLayout: React.FC<LessonLayoutProps> = ({ header, children }) => {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen bg-slate-50 font-sans text-slate-800">
      {header}
      <main className="grid grid-cols-1 p-4 md:p-8 max-w-5xl mx-auto w-full content-start">
        {children}
      </main>
    </div>
  );
};

const DiagramRender: React.FC<DiagramRenderProps> = ({ activeIndex }) => {
  // Renderizador condicional del diagrama basado en la pestaña activa
  const renderDiagramContent = () => {
    switch (activeIndex) {
      case 0:
        // Diagrama 1: Bloques conceptuales horizontales (Grid)
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full place-items-center h-full">
            <div className="grid place-items-center w-full bg-red-100 border-2 border-red-500 p-6 rounded-lg text-red-700 font-bold shadow-sm">
              <span className="text-2xl mb-2">🔥</span>
              1. Calentamiento
            </div>
            <div className="grid place-items-center w-full bg-orange-100 border-2 border-orange-500 p-6 rounded-lg text-orange-700 font-bold shadow-sm">
              <span className="text-2xl mb-2">⏱️</span>
              2. Mantenimiento
            </div>
            <div className="grid place-items-center w-full bg-blue-100 border-2 border-blue-500 p-6 rounded-lg text-blue-700 font-bold shadow-sm">
              <span className="text-2xl mb-2">❄️</span>
              3. Enfriamiento
            </div>
          </div>
        );
      
      case 1:
        // Diagrama 2: Gráfico de Austenización (Recharts)
        return (
          <div className="grid w-full h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={thermalData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="time" label={{ value: 'Tiempo', position: 'insideBottom', offset: -10 }} />
                <YAxis label={{ value: 'Temperatura (°C)', angle: -90, position: 'insideLeft' }} domain={[0, 1000]} />
                <Tooltip />
                <ReferenceArea y1={750} y2={900} strokeOpacity={0.3} fill="#fca5a5" fillOpacity={0.3} />
                <Line type="monotone" dataKey="temp" stroke="#ef4444" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                {/* Etiqueta de zona */}
                <text x="50%" y="25%" fill="#b91c1c" textAnchor="middle" dominantBaseline="central" className="font-semibold text-sm">
                  Zona de Austenización (750°C - 900°C)
                </text>
              </LineChart>
            </ResponsiveContainer>
          </div>
        );

      case 2:
        // Diagrama 3: Esquema Comparativo de Uniformidad Térmica
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full">
            <div className="grid grid-rows-[auto_1fr] gap-4 place-items-center">
              <h4 className="text-slate-600 font-semibold text-center">Calentamiento Uniforme</h4>
              <div className="grid place-items-center w-40 h-40 bg-red-500 rounded-md shadow-inner text-white font-medium border-4 border-red-600">
                Homogéneo
              </div>
            </div>
            <div className="grid grid-rows-[auto_1fr] gap-4 place-items-center">
              <h4 className="text-slate-600 font-semibold text-center">Gradiente Térmico (Deficiente)</h4>
              {/* Uso de un grid interno para simular manchas de diferentes temperaturas */}
              <div className="grid grid-cols-2 grid-rows-2 w-40 h-40 rounded-md shadow-inner border-4 border-slate-700 overflow-hidden">
                <div className="bg-red-600 grid place-items-center text-xs text-white">850°C</div>
                <div className="bg-orange-400 grid place-items-center text-xs text-white">700°C</div>
                <div className="bg-yellow-300 grid place-items-center text-xs text-slate-800">550°C</div>
                <div className="bg-red-500 grid place-items-center text-xs text-white">800°C</div>
              </div>
            </div>
          </div>
        );

      case 3:
        // Diagrama 4: Viñeta Conceptual del Horno y Tiempo
        return (
          <div className="grid place-items-center w-full h-full">
            <div className="grid grid-cols-[auto_auto] gap-8 place-items-center bg-slate-100 p-8 rounded-2xl border-2 border-slate-300">
              {/* Horno representado con SVG simple y Grid */}
              <div className="grid grid-rows-[auto_1fr] w-32 h-32 bg-slate-700 rounded-t-full border-4 border-slate-800 relative shadow-lg overflow-hidden">
                 <div className="bg-orange-500 w-full h-full grid place-items-center absolute bottom-0 opacity-80">
                    <span className="text-white text-3xl animate-pulse">🔥</span>
                 </div>
              </div>
              <div className="grid place-items-center w-24 h-24 bg-white rounded-full border-4 border-slate-300 shadow-md">
                 <span className="text-4xl">⏳</span>
                 <span className="text-xs font-bold text-slate-500 mt-1">Tiempo t</span>
              </div>
            </div>
          </div>
        );

      case 4:
        // Diagrama 5: Factores de Mantenimiento
        return (
          <div className="grid grid-rows-[1fr_auto_1fr] gap-6 w-full place-items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="grid place-items-center bg-indigo-50 border-2 border-indigo-200 p-4 rounded-lg text-center shadow-sm">
                <span className="text-xl mb-1">📏</span>
                <span className="font-semibold text-indigo-800">Tamaño / Volumen</span>
              </div>
              <div className="grid place-items-center bg-emerald-50 border-2 border-emerald-200 p-4 rounded-lg text-center shadow-sm">
                <span className="text-xl mb-1">🔬</span>
                <span className="font-semibold text-emerald-800">Composición (Acero)</span>
              </div>
              <div className="grid place-items-center bg-rose-50 border-2 border-rose-200 p-4 rounded-lg text-center shadow-sm">
                <span className="text-xl mb-1">🌡️</span>
                <span className="font-semibold text-rose-800">Temperatura Actual</span>
              </div>
            </div>
            
            <div className="grid place-items-center">
              <span className="text-2xl text-slate-400">⬇️</span>
            </div>

            <div className="grid place-items-center bg-slate-800 text-white p-4 rounded-lg w-full max-w-sm shadow-md border-2 border-slate-900">
              <span className="font-bold text-lg tracking-wide">Tiempo de Mantenimiento Total</span>
            </div>
          </div>
        );

      case 5:
        // Diagrama 6: Enfriamiento Rápido
        return (
          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 w-full place-items-center h-full">
             <div className="grid grid-rows-[auto_1fr] gap-2 place-items-center">
                <div className="w-24 h-24 bg-red-500 rounded-sm border-2 border-red-700 grid place-items-center shadow-md">
                  <span className="text-white font-bold">Austenita</span>
                </div>
                <span className="text-xs text-slate-500 font-semibold">Salida del Horno</span>
             </div>
             
             <div className="grid grid-rows-[auto_auto] gap-1 place-items-center">
                <span className="text-blue-500 font-bold text-sm bg-blue-50 px-2 py-1 rounded">Enfriamiento Brusco</span>
                <span className="text-3xl text-blue-500">➡️</span>
             </div>

             <div className="grid grid-rows-[auto_1fr] gap-2 place-items-center">
                <div className="w-24 h-24 bg-slate-300 rounded-sm border-2 border-slate-500 grid place-items-center shadow-lg relative overflow-hidden">
                  {/* Patrón para simular martensita acicular (agujas) */}
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, #475569 5px, #475569 6px)'}}></div>
                  <span className="text-slate-800 font-bold relative z-10 bg-white/70 px-1 rounded">Martensita</span>
                </div>
                <span className="text-xs text-slate-500 font-semibold">Pieza Templada</span>
             </div>
          </div>
        );

      default:
        return <div>Diagrama no disponible</div>;
    }
  };

  return (
    <div className="grid place-items-center w-full min-h-[400px] bg-slate-50 rounded-xl p-6 border border-slate-200 mt-6 shadow-inner">
      {renderDiagramContent()}
    </div>
  );
};

// --- COMPONENTE PRINCIPAL (APP) ---

export default function App() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeSection = lessonData[activeTab];

  const headerContent = (
    <header className="grid grid-rows-[auto_auto] gap-6 p-6 bg-slate-900 text-white shadow-md">
      <div className="grid place-items-start max-w-5xl mx-auto w-full">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-100">
          El Proceso de Temple
        </h1>
      </div>
      
      <nav className="grid max-w-5xl mx-auto w-full">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 w-full">
          {lessonData.map((section, index) => (
            <li key={section.id} className="grid">
              <button
                onClick={() => setActiveTab(index)}
                className={`grid place-items-center text-sm font-medium py-3 px-2 rounded-t-lg transition-colors border-b-4 ${
                  activeTab === index
                    ? 'bg-slate-800 border-blue-500 text-white'
                    : 'bg-slate-900 border-transparent text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                {section.tabLabel}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );

  return (
    <LessonLayout header={headerContent}>
      <Card>
        {/* Sección de Contenido Teórico */}
        <div className="grid grid-cols-1 gap-4 border-b border-slate-100 pb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            {activeSection.tabLabel}
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            {activeSection.content}
          </p>
        </div>

        {/* Sección de Visualización de Datos / Diagrama */}
        <div className="grid grid-cols-1 gap-2 pt-2">
          <h3 className="text-xl font-semibold text-slate-800 mt-4">
            {activeSection.diagramTitle}
          </h3>
          <p className="text-sm text-slate-500 mb-2">
            {activeSection.diagramDescription}
          </p>
          
          {/* Componente que renderiza el diagrama específico */}
          <DiagramRender activeIndex={activeTab} />
        </div>
      </Card>
    </LessonLayout>
  );
}