import React, { useState,  useMemo } from 'react';
import { 
  Thermometer, 
  Activity, 
  Minimize2, 
  TrendingUp, 
  AlertTriangle, 
  Clock, 
  Layers,
  Info
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import DivCarousel from '../assets/DivCarousel';

/**
 * --- TIPOS E INTERFACES ---
 */

interface TabData {
  id: string;
  label: string;
  icon: React.ElementType;
  title: string;
  description: React.ReactNode;
  renderDiagram: () => React.ReactNode;
}

/**
 * --- DATOS PARA GRÁFICOS ---
 */

const mechPropertiesData = [
  { temp: 0, resistencia: 100, ductilidad: 10 },
  { temp: 200, resistencia: 95, ductilidad: 15 },
  { temp: 400, resistencia: 80, ductilidad: 30 },
  { temp: 600, resistencia: 50, ductilidad: 60 },
  { temp: 800, resistencia: 20, ductilidad: 90 },
];

const processData = [
  { time: 0, temp: 20, stage: 'Inicio' },
  { time: 20, temp: 850, stage: 'Calentamiento' },
  { time: 60, temp: 850, stage: 'Mantenimiento' },
  { time: 80, temp: 20, stage: 'Enfriamiento' },
];

/**
 * --- COMPONENTES VISUALES ESPECÍFICOS (DIAGRAMAS) ---
 */

// 1. Diagrama Estático: Introducción
const IntroDiagram = () => (
  <div className="grid grid-cols-3 gap-4 items-center justify-items-center h-64 w-full">
    <div className="text-center p-4 border-2 border-orange-500 rounded-lg bg-orange-50">
      <Thermometer className="w-12 h-12 text-orange-600 mx-auto mb-2" />
      <p className="font-bold text-slate-800">Temperatura Aplicada</p>
    </div>
    
    <div className="relative w-full h-full grid place-items-center">
      <div className="absolute h-1 w-full bg-slate-300 z-0"></div>
      <div className="z-10 bg-white p-2 border border-slate-300 rounded-full">
        <span className="text-2xl font-bold text-slate-400">→</span>
      </div>
      <p className="absolute -top-2 text-sm font-semibold text-slate-500">Aumento de Energía Interna</p>
    </div>

    <div className="text-center p-4 border-2 border-blue-500 rounded-lg bg-blue-50">
      <Layers className="w-12 h-12 text-blue-600 mx-auto mb-2" />
      <p className="font-bold text-slate-800">Cambio Estructural</p>
    </div>
  </div>
);

// 2. Diagrama Dinámico: Movimiento Atómico
const AtomicMovementDiagram = () => {
  const [temp, setTemp] = useState(20);
  
  // Simulación simple de velocidad basada en temperatura
  const animationSpeed = useMemo(() => {
    return Math.max(0.1, 2 - (temp / 100) * 1.8);
  }, [temp]);

  return (
    <div className="grid grid-rows-[auto_1fr] gap-4 h-full w-full">
      <div className="grid grid-cols-[auto_1fr] gap-4 items-center bg-slate-100 p-4 rounded-lg">
        <label className="font-bold text-slate-700">Aumentar T°:</label>
        <input 
          type="range" 
          min="20" 
          max="1000" 
          value={temp} 
          onChange={(e) => setTemp(Number(e.target.value))}
          className="w-full accent-red-600 cursor-pointer"
        />
        <span className="font-mono text-red-600 font-bold">{temp}°C</span>
      </div>

      <div className="relative bg-slate-900 rounded-lg overflow-hidden border-4 border-slate-300 h-64 w-full grid place-items-center">
        <div className="grid grid-cols-6 gap-6 p-8">
          {Array.from({ length: 18 }).map((_, i) => (
            <div 
              key={i}
              className="w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"
              style={{
                animation: `vibrate ${animationSpeed}s infinite linear alternate`
              }}
            />
          ))}
        </div>
        <p className="absolute bottom-2 text-white/50 text-sm">Representación del aumento de vibración reticular</p>
      </div>
      
      <style>{`
        @keyframes vibrate {
          0% { transform: translate(0, 0); }
          25% { transform: translate(2px, 2px); }
          50% { transform: translate(-2px, 1px); }
          75% { transform: translate(1px, -2px); }
          100% { transform: translate(-1px, -1px); }
        }
      `}</style>
    </div>
  );
};

// 3. Diagrama Comparativo: Microestructura
const MicrostructureDiagram = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
    {/* Baja Temperatura */}
    <div className="border border-slate-300 rounded-lg p-4 bg-white grid grid-rows-[auto_1fr] gap-2">
      <h4 className="font-bold text-center text-blue-700">Baja Temperatura (Recocido suave)</h4>
      <div className="border-2 border-black h-48 w-full bg-slate-100 relative overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 200 200">
           {/* Granos alargados / deformados o pequeños */}
           <path d="M0,0 L50,40 L100,10 L150,50 L200,0 V200 H0 Z" fill="none" stroke="#ccc" strokeWidth="1"/>
           <path d="M20,20 Q60,60 40,100 T20,180" stroke="#555" strokeWidth="2" fill="none"/>
           <path d="M80,0 Q100,50 120,80 T100,200" stroke="#555" strokeWidth="2" fill="none"/>
           <path d="M160,0 Q140,60 180,100 T160,200" stroke="#555" strokeWidth="2" fill="none"/>
           <text x="10" y="190" fontSize="12" fill="#666">Granos Deformados/Finos</text>
        </svg>
      </div>
      <p className="text-sm text-slate-600 mt-2 text-center">Alta dureza, baja ductilidad.</p>
    </div>

    {/* Alta Temperatura */}
    <div className="border border-slate-300 rounded-lg p-4 bg-white grid grid-rows-[auto_1fr] gap-2">
      <h4 className="font-bold text-center text-red-700">Alta Temperatura (Recristalización)</h4>
      <div className="border-2 border-black h-48 w-full bg-slate-100 relative overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 200 200">
           {/* Granos grandes y equiaxiales */}
           <circle cx="50" cy="50" r="45" stroke="#333" strokeWidth="2" fill="none"/>
           <circle cx="150" cy="50" r="40" stroke="#333" strokeWidth="2" fill="none"/>
           <circle cx="50" cy="150" r="42" stroke="#333" strokeWidth="2" fill="none"/>
           <circle cx="150" cy="150" r="48" stroke="#333" strokeWidth="2" fill="none"/>
           <text x="10" y="190" fontSize="12" fill="#666">Granos Equiaxiales Grandes</text>
        </svg>
      </div>
      <p className="text-sm text-slate-600 mt-2 text-center">Baja dureza, alta ductilidad.</p>
    </div>
  </div>
);

// 4. Gráfico Estático: Propiedades Mecánicas
const PropertiesChart = () => (
  <div className="h-80 w-full bg-white p-4 rounded-lg border border-slate-200">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={mechPropertiesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="temp" label={{ value: 'Temperatura (°C)', position: 'insideBottomRight', offset: -5 }} />
        <YAxis label={{ value: '% Propiedad', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="resistencia" stroke="#ef4444" name="Resistencia" strokeWidth={3} />
        <Line type="monotone" dataKey="ductilidad" stroke="#3b82f6" name="Ductilidad" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

// 5. Diagrama Dinámico: Temperaturas Críticas
const CriticalTempDiagram = () => (
  <div className="grid grid-cols-[100px_1fr] gap-8 h-80 w-full p-4">
    {/* Termómetro visual */}
    <div className="relative w-12 bg-slate-200 rounded-full mx-auto border border-slate-400 overflow-hidden">
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-blue-500 via-yellow-400 to-red-600 h-full opacity-80"></div>
      
      {/* Marcadores */}
      <div className="absolute bottom-[20%] w-full border-t-2 border-black flex items-center">
        <span className="absolute left-full ml-2 text-xs font-bold whitespace-nowrap">200°C - Recuperación</span>
      </div>
      <div className="absolute bottom-[50%] w-full border-t-2 border-black flex items-center">
        <span className="absolute left-full ml-2 text-xs font-bold whitespace-nowrap">727°C - Eutectoide (A1)</span>
      </div>
      <div className="absolute bottom-[80%] w-full border-t-2 border-black flex items-center">
        <span className="absolute left-full ml-2 text-xs font-bold whitespace-nowrap">912°C - Austenitización (A3)</span>
      </div>
      <div className="absolute bottom-[95%] w-full border-t-2 border-black flex items-center">
        <span className="absolute left-full ml-2 text-xs font-bold whitespace-nowrap">1538°C - Fusión (Fe)</span>
      </div>
    </div>

    {/* Panel de detalles */}
    <div className="grid grid-rows-4 gap-2">
      <div className="bg-red-50 border-l-4 border-red-500 p-2 flex items-center text-sm">
        <span className="font-bold mr-2">Fusión:</span> Pérdida total de estructura cristalina.
      </div>
      <div className="bg-orange-50 border-l-4 border-orange-500 p-2 flex items-center text-sm">
        <span className="font-bold mr-2">Austenitización:</span> Cambio a estructura FCC. Solubilidad de carbono.
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-2 flex items-center text-sm">
        <span className="font-bold mr-2">Recristalización:</span> Formación de nuevos granos libres de deformación.
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-2 flex items-center text-sm">
        <span className="font-bold mr-2">Recuperación:</span> Alivio de tensiones internas sin cambios visibles.
      </div>
    </div>
  </div>
);

// 6. Diagrama Interactivo: Control de Proceso
const ProcessControlDiagram = () => {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  return (
    <div className="grid grid-rows-[1fr_auto] gap-4 h-full">
      <div className="bg-white p-4 rounded-lg border border-slate-200">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={processData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" label={{ value: 'Tiempo (min)', position: 'insideBottom' }} />
            <YAxis label={{ value: 'Temp (°C)', angle: -90, position: 'insideLeft' }} />
            <Tooltip content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="bg-white p-2 border border-slate-300 shadow-lg rounded">
                    <p className="font-bold">{data.stage}</p>
                    <p>T: {data.temp}°C</p>
                  </div>
                );
              }
              return null;
            }} />
            <Line 
              type="monotone" 
              dataKey="temp" 
              stroke="#0f766e" 
              strokeWidth={3}
              dot={{ r: 6 }} 
              activeDot={{ r: 8 }}
            />
            {activeStage === 'Calentamiento' && <ReferenceLine x={20} stroke="red" label="Subida" />}
            {activeStage === 'Mantenimiento' && <ReferenceLine x={60} stroke="orange" label="Hold" />}
            {activeStage === 'Enfriamiento' && <ReferenceLine x={80} stroke="blue" label="Bajada" />}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {['Calentamiento', 'Mantenimiento', 'Enfriamiento'].map((stage) => (
          <button
            key={stage}
            onClick={() => setActiveStage(stage)}
            className={`p-2 rounded-lg text-sm font-bold transition-colors ${
              activeStage === stage 
                ? 'bg-teal-600 text-white shadow-md' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {stage}
          </button>
        ))}
      </div>
    </div>
  );
};

// 7. Diagrama Integrador: Cierre
const SummaryDiagram = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full items-stretch">
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200 shadow-sm flex flex-col items-center justify-center text-center">
      <Thermometer className="w-10 h-10 text-blue-600 mb-2" />
      <h3 className="font-bold text-slate-800">Temperatura</h3>
      <p className="text-xs text-slate-600 mt-2">Variable de control principal. Aporta energía cinética al sistema.</p>
    </div>
    
    <div className="flex items-center justify-center">
      <div className="h-1 bg-slate-400 w-full relative">
        <span className="absolute top-[-20px] left-[50%] translate-x-[-50%] text-xs font-bold text-slate-500">Causa</span>
      </div>
    </div>

    <div className="grid grid-rows-2 gap-4">
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200 shadow-sm flex flex-col items-center justify-center text-center">
        <Minimize2 className="w-8 h-8 text-purple-600 mb-2" />
        <h3 className="font-bold text-slate-800">Microestructura</h3>
        <p className="text-xs text-slate-600">Cambio en tamaño de grano y fases.</p>
      </div>
      <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200 shadow-sm flex flex-col items-center justify-center text-center">
        <TrendingUp className="w-8 h-8 text-green-600 mb-2" />
        <h3 className="font-bold text-slate-800">Propiedades</h3>
        <p className="text-xs text-slate-600">Dureza, Ductilidad, Resistencia.</p>
      </div>
    </div>
  </div>
);

/**
 * --- COMPONENTES DE LAYOUT ---
 */

const Card = ({ children, title, className = '' }: { children: React.ReactNode, title?: string, className?: string }) => (
  <div className={`bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col ${className}`}>
    {title && (
      <div className="bg-slate-50 border-b border-slate-200 p-4">
        <h3 className="font-bold text-slate-700 text-lg flex items-center gap-2">
          <Info className="w-5 h-5 text-indigo-500" />
          {title}
        </h3>
      </div>
    )}
    <div className="p-6 ">
      {children}
    </div>
  </div>
);

const LessonLayout = ({ 
  children, 
  header, 
  nav 
}: { 
  children: React.ReactNode; 
  header: React.ReactNode; 
  nav: React.ReactNode; 
}) => {
  return (
    // Grid Principal: 12 columnas.
    // Filas: Auto (Header) -> Auto (Nav) -> 1fr (Contenido)
    <div className="w-full h-screen bg-slate-100 p-4 md:p-8 grid grid-cols-12 grid-rows-[auto_auto_1fr] gap-6 font-sans text-slate-800">
      
      {/* Header Area: Ocupa las 12 columnas */}
      <header className="col-span-12">
        {header}
      </header>

      {/* Nav Area: Ocupa las 12 columnas */}
      <nav className="col-span-12">
        {nav}
      </nav>

      {/* Main Content Area: Ocupa las 12 columnas. */}
      {/* Dentro de este contenedor se renderizará el 'Card' */}
      <main className="col-span-12 min-h-0">
        {children}
      </main>

    </div>
  );
};

/**
 * --- CONFIGURACIÓN DE PESTAÑAS (CONTENIDO) ---
 */

const TABS: TabData[] = [
  {
    id: 'intro',
    label: 'Introducción',
    icon: Info,
    title: 'Introducción',
    description: (
      <DivCarousel>
        <p>La <strong>temperatura</strong> es el factor más <strong>determinante</strong> en los tratamientos térmicos, ya que controla la cantidad de energía disponible para que ocurran los cambios internos en los metales. 
        <br /><strong>Variaciones en la temperatura</strong> pueden <strong>modificar</strong> de forma significativa la <strong>estructura cristalina</strong>, la <strong>microestructura</strong> y, como consecuencia, las <strong>propiedades mecánicas</strong> del material.</p>
        <p>En esta lección se analiza cómo la <strong>temperatura influye en los materiales metálicos</strong> y <strong>por qué su control preciso es esencial en los procesos térmicos</strong>.</p>
      </DivCarousel>
    ),
    renderDiagram: () => <IntroDiagram />
  },
  {
    id: 'sec1',
    label: 'Energía Interna',
    icon: Activity,
    title: 'Temperatura y Energía Interna',
    description: (
      <DivCarousel>
        
        <div>
            <p>Al <strong>elevar la temperatura</strong> de un metal se <strong>incrementa su energía interna</strong>, lo que <strong>activa</strong> los procesos físicos responsables de los <strong>cambios estructurales</strong>.</p>
            <ul>
          <li>Se <strong>incrementa la energía interna</strong> del sistema.</li>
          <li>Se <strong>intensifica el movimiento</strong> vibratorio de los <strong>átomos</strong>.</li>
          <li>Se <strong>facilita la reorganización atómica</strong> dentro de la red cristalina.</li>
        </ul>
        <p>Este aporte energético es <strong>indispensable</strong> para que ocurran procesos como la <strong>difusión atómica</strong> y las <strong>transformaciones de fase</strong>.</p>
        </div>
        
        
      </DivCarousel>
    ),
    renderDiagram: () => <AtomicMovementDiagram />
  },
  {
    id: 'sec2',
    label: 'Microestructura',
    icon: Minimize2,
    title: 'Cambios Microestructurales',
    description: (
      <DivCarousel>
        <div><p>La <strong>temperatura determina los cambios microestructurales</strong> que experimenta un metal durante un tratamiento térmico.</p>
        <ul>
          <li><strong>Crecimiento</strong> del tamaño de <strong>grano</strong>.</li>
          <li><strong>Disolución</strong> o <strong>formación</strong> de <strong>fases</strong> internas.</li>
          <li><strong>Homogeneización</strong> de la <strong>estructura</strong> del material.</li>
        </ul>
        <p>Estos cambios microestructurales influyen directamente en <strong>propiedades</strong> como la <strong>resistencia</strong>, la <strong>ductilidad</strong> y la <strong>dureza</strong> del metal.</p></div>
        
      </DivCarousel>
    ),
    renderDiagram: () => <MicrostructureDiagram />
  },
  {
    id: 'sec3',
    label: 'Propiedades',
    icon: TrendingUp,
    title: 'Influencia Mecánica',
    description: (
      <DivCarousel>
        <div>  <p>La <strong>temperatura afecta</strong> de manera directa las propiedades mecánicas de los metales, <strong>modificando su respuesta frente a esfuerzos</strong>.</p>
         <ul>
          <li>A <strong>temperaturas elevadas</strong>, <strong>aumenta</strong> la <strong>ductilidad</strong>.</li>
          <li>La <strong>resistencia y la dureza</strong> tienden a <strong>disminuir</strong> al <strong>aumentar la temperatura</strong>.</li>
          <li>A <strong>temperaturas bajas</strong>, algunos metales pueden volverse más <strong>frágiles</strong>.</li>
        </ul>
        <p>Los tratamientos térmicos aprovechan estas variaciones para <strong>obtener el equilibrio adecuado entre resistencia y deformabilidad</strong>, según la aplicación del material.</p>
        </div>
      
       
        
      </DivCarousel>
    ),
    renderDiagram: () => <PropertiesChart />
  },
  {
    id: 'sec4',
    label: 'Temp. Críticas',
    icon: AlertTriangle,
    title: 'Puntos Críticos en Tratamientos',
    description: (
      <DivCarousel>
        <div><p>Existen <strong>temperaturas específicas</strong>, conocidas como <strong>temperaturas críticas</strong>, en las cuales ocurren <strong>transformaciones importantes</strong> en la estructura del metal.</p>
        <ul>
          <li>Marcan el <strong>inicio</strong> o el <strong>fin</strong> de <strong>cambios de fase</strong>.</li>
          <li>Determinan el <strong>tipo de microestructura final</strong>.</li>
          <li>Definen el <strong>ciclo térmico</strong> adecuado para <strong>cada tratamiento</strong>.</li>
        </ul>
        <p>El conocimiento preciso de estas temperaturas es esencial para <strong>diseñar tratamientos térmicos eficaces y repetibles</strong>.</p></div>
        
      </DivCarousel>
    ),
    renderDiagram: () => <CriticalTempDiagram />
  },
  {
    id: 'sec5',
    label: 'Control',
    icon: Clock,
    title: 'Importancia del Control',
    description:  (
      <DivCarousel>
        <div><p>Un <strong>control inadecuado</strong> de la temperatura puede generar <strong>efectos negativos</strong> en el material tratado.</p>
        <ul>
          <li><strong>Deformaciones indeseadas</strong>.</li>
          <li><strong>Generación de tensiones</strong> internas <strong>excesivas</strong>.</li>
          <li>Formación de <strong>microestructuras no deseadas</strong>.</li>
        </ul>
        <p>Por esta razón, los tratamientos térmicos emplean <strong>sistemas de control precisos</strong> que aseguran que el material alcance y mantenga la <strong>temperatura correcta durante el tiempo necesario</strong>.</p></div>
        
      </DivCarousel>
    ),
    renderDiagram: () => <ProcessControlDiagram />
  },
  {
    id: 'closure',
    label: 'Resumen',
    icon: Layers,
    title: 'Cierre de la lección',
    description:  (
      <DivCarousel>
        <p>En esta lección se analizó que la <strong>temperatura es el eje central de los tratamientos térmicos</strong>, ya que gobierna la energía disponible para los procesos físicos que ocurren en los metales. 
        <br />
        Su <strong>influencia</strong> se manifiesta tanto en la <strong>microestructura</strong> como en las <strong>propiedades</strong> mecánicas del material.</p>
        <p><strong>Comprender este efecto</strong> permite <strong>avanzar</strong> hacia el estudio de otros factores clave del tratamiento térmico, como el <strong>tiempo de mantenimiento</strong> y la <strong>velocidad de enfriamiento</strong>.</p>
      </DivCarousel>
    ),
    renderDiagram: () => <SummaryDiagram />
  }
];

/**
 * --- COMPONENTE PRINCIPAL (APP) ---
 */

export default function App() {
  const [activeTabId, setActiveTabId] = useState<string>('intro');

  // Encontrar la data de la pestaña activa
  const activeContent = useMemo(() => 
    TABS.find(t => t.id === activeTabId) || TABS[0]
  , [activeTabId]);

  return (
    <LessonLayout
      header={
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-8 border-indigo-600 flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
              Efecto de la Temperatura en los Metales
            </h1>
          
          </div>
       
        </div>
      }
      nav={
        // Grid para las pestañas: Responsivo
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTabId === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`
                  flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 border-2
                  ${isActive 
                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-md scale-105 z-10' 
                    : 'bg-white border-slate-200 text-slate-500 hover:border-indigo-300 hover:bg-indigo-50'
                  }
                `}
              >
                <Icon size={20} className={`mb-1 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span className="text-xs font-bold whitespace-nowrap">{tab.label}</span>
              </button>
            );
          })}
        </div>
      }
    >
      {/* Contenido Principal Renderizado en Grid de 12 columnas internamente */}
      <Card className=" border-t-4 border-t-indigo-500">
        <div className="grid grid-cols-1 gap-8 h-full">
          
          {/* Columna Izquierda: Texto (4 columnas en escritorio) */}
          <div className="flex flex-col gap-4 border-b lg:border-b-0 lg:border-r border-slate-200 pb-6 lg:pb-0 lg:pr-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">{activeContent.title}</h2>
              <div className="h-1 w-20 bg-indigo-500 rounded-full mb-4"></div>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              {activeContent.description}
            </p>
            
         
          </div>

          {/* Columna Derecha: Diagrama (8 columnas en escritorio) */}
          <div className="bg-slate-50 rounded-lg p-4 grid place-items-center h-full min-h-[300px]">
            {activeContent.renderDiagram()}
          </div>

        </div>
      </Card>
    </LessonLayout>
  );
}