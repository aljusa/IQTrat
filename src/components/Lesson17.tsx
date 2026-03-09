import React, { useState, useEffect, ReactNode } from 'react';
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import DivCarousel from '../assets/DivCarousel';

// --- TIPOS E INTERFACES ---
interface TabItem {
  id: string;
  title: string;
  description: ReactNode;
  component: ReactNode;
}

interface CardProps {
  children: ReactNode;
  className?: string;
}

interface LayoutProps {
  children: ReactNode;
}

interface HeaderProps {
  title: string;
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

// --- COMPONENTES DE ESTRUCTURA Y UI (Usando exclusivamente CSS Grid) ---

const LessonLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 grid grid-rows-[auto_1fr] font-sans text-slate-800">
      {children}
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ title, tabs, activeTab, onTabChange }) => {
  return (
    <header className="bg-slate-900 text-white grid grid-rows-[auto_auto] gap-6 p-6 shadow-md z-10">
      <div className="grid place-items-start">
        <h1 className="text-2xl font-bold tracking-wide">{title}</h1>
       
      </div>
      <nav className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-slate-800 p-2 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`grid place-items-center py-3 px-4 rounded-md text-sm font-semibold transition-colors duration-300 ${
              activeTab === tab.id 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'bg-transparent text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            {tab.id}
          </button>
        ))}
      </nav>
    </header>
  );
};

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200 grid p-6 gap-6 ${className}`}>
      {children}
    </div>
  );
};

// --- COMPONENTES DE VISUALIZACIÓN (Diagram Renders) ---

// 1. Recocido Completo (Dinámico)
const DiagramFullAnnealing: React.FC = () => {
  const [time, setTime] = useState<number>(0);

  // Simulación del paso del tiempo
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Datos para la curva Temperatura-Tiempo
  const chartData = [
    { time: 0, temp: 20, stage: 'Inicio' },
    { time: 30, temp: 900, stage: 'Calentamiento' },
    { time: 60, temp: 900, stage: 'Mantenimiento' },
    { time: 100, temp: 20, stage: 'Enfriamiento Lento' }
  ];

  // Lógica de fases microestructurales
  const getPhaseColor = () => {
    if (time < 30) return '#cbd5e1'; // Ferrita/Perlita (Gris)
    if (time >= 30 && time < 60) return '#fca5a5'; // Austenita (Rojo claro)
    return '#94a3b8'; // Perlita Gruesa (Gris oscuro)
  };

  const currentTemp = time < 30 ? 20 + (880 * (time / 30)) : time < 60 ? 900 : 900 - (880 * ((time - 60) / 40));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Panel Izquierdo: Curva T-t */}
      <div className="grid gap-4 h-80">
        <h4 className="text-sm font-semibold text-slate-600 text-center">Curva Temperatura vs Tiempo</h4>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" type="number" domain={[0, 100]} label={{ value: 'Tiempo (%)', position: 'insideBottomRight', offset: -5 }} />
            <YAxis domain={[0, 1000]} label={{ value: 'Temperatura (°C)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line type="monotone" dataKey="temp" stroke="#2563eb" strokeWidth={3} dot={false} isAnimationActive={false} />
            {/* Indicador de tiempo actual */}
            <Line 
              type="monotone" 
              data={[{time: time, temp: currentTemp}]} 
              dataKey="temp" 
              stroke="#ef4444" 
              strokeWidth={0} 
              dot={{ r: 6, fill: '#ef4444' }} 
              isAnimationActive={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Panel Derecho: Microestructura Dinámica */}
      <div className="grid gap-4 place-items-center h-80">
        <h4 className="text-sm font-semibold text-slate-600">Transformación Microestructural</h4>
        <div className="w-64 h-64 rounded-full border-4 border-slate-800 grid place-items-center relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: getPhaseColor() }}>
          {/* Representación abstracta de granos */}
          <svg className="absolute w-full h-full opacity-60">
            <path d="M 0 50 Q 50 20 100 50 T 200 50 T 300 50" stroke="#1e293b" strokeWidth={time >= 60 ? "4" : "1"} fill="none" />
            <path d="M 0 100 Q 50 150 100 100 T 200 100 T 300 100" stroke="#1e293b" strokeWidth={time >= 60 ? "4" : "1"} fill="none" />
            <path d="M 0 150 Q 80 120 150 150 T 300 150" stroke="#1e293b" strokeWidth={time >= 60 ? "4" : "1"} fill="none" />
            
            {/* Esferas de austenita que aparecen en mantenimiento */}
            {time >= 30 && time < 60 && (
              <>
                <circle cx="70" cy="70" r="15" fill="#ef4444" className="animate-pulse" />
                <circle cx="180" cy="120" r="25" fill="#ef4444" className="animate-pulse" />
                <circle cx="90" cy="190" r="18" fill="#ef4444" className="animate-pulse" />
              </>
            )}
          </svg>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full text-center text-sm mt-2">
          <div className="bg-slate-100 p-2 rounded"><strong>Estado:</strong> {time < 30 ? 'Calentamiento' : time < 60 ? 'Austenización' : 'Enfriamiento'}</div>
          <div className="bg-slate-100 p-2 rounded"><strong>Fase:</strong> {time < 30 ? 'α + Fe3C' : time < 60 ? 'γ (Austenita)' : 'Perlita Gruesa'}</div>
        </div>
      </div>
    </div>
  );
};

// 2. Recristalización (Estático)
const DiagramRecrystallization: React.FC = () => {
  const data = [
    { name: 'Trabajo en Frío', Dureza: 90, Ductilidad: 20 },
    { name: 'Recuperación', Dureza: 85, Ductilidad: 25 },
    { name: 'Recristalización', Dureza: 45, Ductilidad: 75 },
    { name: 'Crecimiento de Grano', Dureza: 40, Ductilidad: 85 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <div className="grid gap-6">
        <h4 className="text-sm font-semibold text-slate-600 text-center">Evolución del Grano</h4>
        <div className="grid grid-rows-2 gap-4 h-72">
          {/* Granos Deformados */}
          <div className="bg-slate-100 rounded border border-slate-300 grid place-items-center relative overflow-hidden">
            <span className="absolute top-2 left-2 text-xs font-bold bg-white px-2 py-1 rounded shadow">Antes: Granos Alargados</span>
            <svg width="200" height="80">
              {[...Array(6)].map((_, i) => (
                <ellipse key={`e-${i}`} cx={30 + i * 30} cy={40} rx="25" ry="8" fill="#cbd5e1" stroke="#475569" strokeWidth="2" transform={`rotate(15 ${30 + i * 30} 40)`} />
              ))}
              {[...Array(5)].map((_, i) => (
                <ellipse key={`e2-${i}`} cx={45 + i * 30} cy={60} rx="25" ry="8" fill="#cbd5e1" stroke="#475569" strokeWidth="2" transform={`rotate(15 ${45 + i * 30} 60)`} />
              ))}
            </svg>
          </div>
          {/* Granos Equiaxiales */}
          <div className="bg-slate-100 rounded border border-slate-300 grid place-items-center relative overflow-hidden">
            <span className="absolute top-2 left-2 text-xs font-bold bg-white px-2 py-1 rounded shadow">Después: Granos Equiaxiales</span>
            <svg width="200" height="80">
              {[...Array(4)].map((_, i) => (
                [...Array(3)].map((_, j) => (
                   <circle key={`c-${i}-${j}`} cx={30 + i * 45 + (j%2)*20} cy={20 + j * 25} r="12" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
                ))
              ))}
            </svg>
          </div>
        </div>
      </div>
      
      <div className="grid gap-4 h-80">
        <h4 className="text-sm font-semibold text-slate-600 text-center">Propiedades Mecánicas</h4>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 25 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-15} textAnchor="end" height={60} tick={{fontSize: 12}} />
            <YAxis label={{ value: 'Unidades Relativas', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend verticalAlign="top" />
            <Bar dataKey="Dureza" fill="#ef4444" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Ductilidad" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// 3. Alivio de Tensiones (Dinámico)
const DiagramStressRelief: React.FC = () => {
  const [stress, setStress] = useState<number>(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setStress((prev) => {
        if (prev <= 10) return 100; // Reset para el ciclo
        return prev - 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Opacidad y tamaño basados en el nivel de tensión
  const arrowScale = 0.5 + (stress / 100) * 1.5;
  const arrowColor = `rgb(${255 * (stress/100)}, ${150 - (stress/100)*150}, ${255 - (stress/100)*255})`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
      <div className="grid gap-4 w-full">
        <h4 className="text-sm font-semibold text-slate-600 text-center">Redistribución de Esfuerzos Residuales</h4>
        <div className="relative w-full h-64 bg-slate-200 border-4 border-slate-400 rounded-lg grid place-items-center overflow-hidden">
          {/* Matriz del material */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-2 opacity-20">
            {[...Array(9)].map((_, i) => <div key={i} className="bg-slate-500 rounded-sm"></div>)}
          </div>
          
          {/* Flechas de Tensión (Dinámicas) */}
          <svg className="w-full h-full absolute z-10" viewBox="0 0 200 200">
            <g transform={`translate(100, 100) scale(${arrowScale})`}>
              {/* Flecha hacia afuera 1 */}
              <path d="M 10 -10 L 40 -40 M 40 -40 L 25 -40 M 40 -40 L 40 -25" stroke={arrowColor} strokeWidth="4" fill="none" />
              {/* Flecha hacia afuera 2 */}
              <path d="M -10 10 L -40 40 M -40 40 L -25 40 M -40 40 L -40 25" stroke={arrowColor} strokeWidth="4" fill="none" />
              {/* Flecha hacia adentro 1 */}
              <path d="M -30 -30 L -10 -10 M -10 -10 L -25 -10 M -10 -10 L -10 -25" stroke={arrowColor} strokeWidth="4" fill="none" />
              {/* Flecha hacia adentro 2 */}
              <path d="M 30 30 L 10 10 M 10 10 L 25 10 M 10 10 L 10 25" stroke={arrowColor} strokeWidth="4" fill="none" />
            </g>
          </svg>
          
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-3 rounded shadow-sm grid grid-cols-1 gap-2 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Nivel de Tensión Interna</span>
            <div className="w-full bg-slate-200 rounded-full h-2.5">
              <div className="h-2.5 rounded-full transition-all duration-100 ease-linear" style={{ width: `${stress}%`, backgroundColor: arrowColor }}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-slate-100 p-6 rounded-lg text-sm grid gap-3 w-full border border-slate-200">
        <h5 className="font-bold text-slate-800 border-b border-slate-300 pb-2">Mecanismo de Acción</h5>
        <p className="text-slate-600">Al someter la pieza a una temperatura inferior a la crítica (típicamente 550°C - 650°C para aceros), el límite elástico del material disminuye.</p>
        <p className="text-slate-600">Las tensiones macroscópicas y microscópicas (representadas por las flechas rojas) que superan el nuevo límite elástico causan una deformación plástica local imperceptible.</p>
        <p className="text-slate-600">Este proceso redistribuye y disminuye la magnitud de los esfuerzos residuales (transición a verde/azul y reducción de tamaño), previniendo deformaciones o agrietamientos durante el mecanizado o servicio.</p>
      </div>
    </div>
  );
};

// 4. Esferoidización (Estático)
const DiagramSpheroidization: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
      {/* Perlita Laminar */}
      <div className="grid gap-4 w-full h-full place-items-center">
        <h4 className="text-sm font-semibold text-slate-600">Estructura Inicial: Perlita Laminar</h4>
        <div className="w-64 h-64 bg-[#f8fafc] rounded-full border-4 border-slate-400 overflow-hidden relative shadow-inner grid place-items-center">
          <svg className="w-full h-full absolute" viewBox="0 0 100 100">
            {/* Láminas alternadas de ferrita (fondo) y cementita (líneas oscuras) */}
            {[...Array(12)].map((_, i) => (
              <line key={i} x1="0" y1={i * 9} x2="100" y2={i * 9 + 15} stroke="#334155" strokeWidth="3" />
            ))}
            {/* Otro grano con orientación distinta */}
            <g transform="translate(50, 50) rotate(60) translate(-50, -50)">
              <circle cx="50" cy="50" r="50" fill="#f8fafc" opacity="0.8" />
              {[...Array(12)].map((_, i) => (
                <line key={`b-${i}`} x1="0" y1={i * 9} x2="100" y2={i * 9} stroke="#334155" strokeWidth="2.5" />
              ))}
            </g>
          </svg>
        </div>
        <p className="text-xs text-slate-500 text-center px-4">Láminas duras de cementita (Fe3C) en una matriz de ferrita. Estructura rígida y menos maquinable.</p>
      </div>

      {/* Estructura Esferoidizada */}
      <div className="grid gap-4 w-full h-full place-items-center">
        <h4 className="text-sm font-semibold text-slate-600">Estructura Final: Esferoidita</h4>
        <div className="w-64 h-64 bg-[#f8fafc] rounded-full border-4 border-slate-400 overflow-hidden relative shadow-inner grid place-items-center">
          <svg className="w-full h-full absolute" viewBox="0 0 100 100">
             {/* Partículas esféricas de cementita en matriz de ferrita */}
             {[...Array(40)].map((_, i) => (
                <circle 
                  key={i} 
                  cx={10 + (i * 17) % 85 + Math.random() * 5} 
                  cy={10 + (i * 13) % 85 + Math.random() * 5} 
                  r={2 + Math.random() * 2} 
                  fill="#334155" 
                />
             ))}
          </svg>
        </div>
        <p className="text-xs text-slate-500 text-center px-4">La cementita adopta forma esférica para minimizar el área superficial. Máxima ductilidad y maquinabilidad.</p>
      </div>
    </div>
  );
};


// --- CONTENIDO PRINCIPAL ---
const tabsData: TabItem[] = [
  {
    id: 'Recocido Completo',
    title: 'Recocido Completo (Full Annealing)',
    description: (
      <DivCarousel>
<div> 
        <p>Consiste en:</p>
        <ul>
          <li>Calentar el acero por encima de la temperatura crítica (zona austenítica).</li>
          <li>Mantenerlo el tiempo necesario para lograr transformación completa.</li>
          <li>Enfriarlo lentamente dentro del horno.</li>
        </ul>
        <p>Se aplica principalmente a aceros hipoeutectoides destinados a procesos posteriores de mecanizado o conformado.</p></div>
       
<div>  <h3>Objetivos</h3>
        <ul>
          <li>Obtener una estructura blanda.</li>
          <li>Mejorar maquinabilidad.</li>
          <li>Eliminar tensiones internas.</li>
          <li>Homogeneizar la microestructura.</li>
        </ul></div>
      
<div>  <h3>Cambios microestructurales</h3>
        <ul>
          <li>Calentamiento → Formación de austenita.</li>
          <li>Mantenimiento → Homogeneización estructural.</li>
          <li>Enfriamiento lento → Transformación en perlita gruesa + ferrita.</li>
        </ul></div>
      
<div> <h3>Resultado microestructural</h3>
       
        <ul>
          <li>Perlita gruesa.</li>
          <li>Mayor tamaño de grano.</li>
          <li>Baja dureza.</li>
          <li>Alta ductilidad.</li>
          <li>Buena maquinabilidad.</li>
        </ul></div>
       

      </DivCarousel>
    ),
    component: <DiagramFullAnnealing />
  },
  {
    id: 'Recristalización',
    title: 'Recocido de Recristalización',
    description: (
      <DivCarousel>
       
<div>  
        <p>Se aplica a materiales previamente deformados en frío (laminado, trefilado, estampado).</p>
        <p>Consiste en calentar el acero a una temperatura inferior a la crítica, suficiente para permitir la formación de nuevos granos libres de deformación.</p></div>
      <div>   <h3>Objetivos</h3>
        <ul>
          <li>Eliminar endurecimiento por deformación.</li>
          <li>Restaurar ductilidad.</li>
          <li>Recuperar capacidad de deformación posterior.</li>
        </ul>
</div>
<div>
       
        <p>Durante el proceso:</p>
        <ul>
          <li>Desaparece la estructura elongada y deformada.</li>
          <li>Se forman nuevos granos equiaxiales.</li>
          <li>Se reduce la densidad de dislocaciones.</li>
        </ul></div>
     
<div>   
        <p>Comparación conceptual:</p>
        <ul>
          <li>Antes → Granos alargados, alta dureza.</li>
          <li>Después → Granos equiaxiales, mayor ductilidad.</li>
        </ul></div>
     
<div>  <p>Aplicaciones típicas:</p>
        <ul>
          <li>Láminas laminadas en frío.</li>
          <li>Alambres trefilados.</li>
          <li>Componentes estampados.</li>
        </ul></div>
      

      </DivCarousel>
    ),
    component: <DiagramRecrystallization />
  },
  {
    id: 'Alivio Tensiones',
    title: 'Recocido de Alivio de Tensiones',
    description: (
      <DivCarousel>
     <div>  

      
        <p>Consiste en calentar el acero a temperatura moderada (por debajo de la crítica) y enfriarlo lentamente.</p>
        <p>No busca transformar fases, sino reducir tensiones internas generadas por procesos previos.</p></div>

     <div>  <h3>Objetivos</h3>
        <ul>
          <li>Reducir esfuerzos residuales.</li>
          <li>Evitar deformaciones posteriores.</li>
          <li>Prevenir grietas.</li>
          <li>Mejorar estabilidad dimensional.</li>
        </ul>
</div>
<div>  <h3>Características microestructurales</h3>
        <ul>
          <li>No ocurre transformación completa de fases.</li>
          <li>Cambios microestructurales mínimos.</li>
          <li>Reducción de tensiones internas por difusión y redistribución atómica.</li>
        </ul></div>
      
      <div> <p>Aplicaciones típicas</p>
        <ul>
          <li>Piezas soldadas.</li>
          <li>Componentes mecanizados.</li>
          <li>Estructuras sometidas a temple previo.</li>
        </ul>
</div>

       
      
      </DivCarousel>
    ),
    component: <DiagramStressRelief />
  },
  {
    id: 'Esferoidización',
    title: 'Recocido de Esferoidización',
    description: (
      <DivCarousel>
        <div>
        <p>Tratamiento aplicado principalmente a aceros de medio y alto contenido de carbono, calentándolos cerca de la temperatura eutectoide durante tiempos prolongados.</p></div>

       <div>
        <h3>Objetivo</h3>
        <ul>
          <li>Transformar la cementita laminar en partículas esféricas.</li>
          <li>Reducir dureza.</li>
          <li>Mejorar significativamente la maquinabilidad.</li>
        </ul></div>

<div>  <h3>Cambios microestructurales</h3>
        <ul>
          <li>La cementita deja de estar en forma laminar (perlita).</li>
          <li>Se transforma en partículas esferoidales dentro de matriz ferrítica.</li>
          <li>Disminuye la energía interfacial del sistema.</li>
        </ul></div>
      <div> 
        <p>Características finales:</p>
        <ul>
          <li>Cementita en forma esférica.</li>
          <li>Reducción significativa de dureza.</li>
          <li>Excelente maquinabilidad.</li>
          <li>Mayor facilidad de conformado.</li>
        </ul></div>

       <div>
        <p>Aplicación típica:</p>
        <ul>
          <li>Preparación de aceros para fabricación de herramientas.</li>
          <li>Piezas que serán posteriormente templadas.</li>
        </ul></div>

      </DivCarousel>
    ),
    component: <DiagramSpheroidization />
  }
];

// --- COMPONENTE PRINCIPAL (Entry Point) ---
export default function App() {
  const [activeTabId, setActiveTabId] = useState<string>(tabsData[0].id);

  const activeTabContent = tabsData.find(tab => tab.id === activeTabId);

  return (
    <LessonLayout>
      <Header 
        title="Tipos de Recocido" 
        tabs={tabsData} 
        activeTab={activeTabId}
        onTabChange={setActiveTabId}
      />
      
      <main className="grid place-items-start p-4 md:p-8 overflow-y-auto">
        <div className="grid w-full max-w-6xl mx-auto">
          {activeTabContent && (
            <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid gap-2 border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-bold text-slate-800">{activeTabContent.title}</h2>
                <p className="text-slate-600 leading-relaxed text-justify">
                  {activeTabContent.description}
                </p>
              </div>
              
              <div className="grid mt-4">
                {activeTabContent.component}
              </div>
            </Card>
          )}
        </div>
      </main>
    </LessonLayout>
  );
}