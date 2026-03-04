import React, { useState, useEffect } from 'react';
import {  Play, RefreshCw,  Activity } from 'lucide-react';
import DivCarousel from '../assets/DivCarousel';

// --- TIPOS Y INTERFACES ---

type Phase = 'Líquido' | 'Sólido Alpha' | 'Sólido Beta' | 'Alpha + Líquido' | 'Beta + Líquido' | 'Alpha + Beta';

interface Point {
  x: number; // Composición %B
  y: number; // Temperatura °C
  label?: string;
}

interface TabData {
  id: string;
  title: string;
  description: string;
  details: React.ReactNode;
}

// --- CONSTANTES DEL DIAGRAMA ---
// Sistema Eutéctico Simple Simulado
// Eje X: 0 a 100 (% B)
// Eje Y: 0 a 1000 (°C)


// --- UTILS ---

/**
 * Determina la fase basada en la coordenada (x, y) en el diagrama simplificado
 */
const getPhase = (x: number, y: number): Phase => {
  // Ecuación línea Liquidus izquierda (MeltA -> Eutectic)
  // m = (400 - 800) / (50 - 0) = -8
  const liquidusLeftY = -8 * x + 800;

  // Ecuación línea Liquidus derecha (MeltB -> Eutectic)
  // m = (400 - 700) / (50 - 100) = -300 / -50 = 6
  const liquidusRightY = 6 * (x - 100) + 700;

  if (y > liquidusLeftY && y > liquidusRightY) return 'Líquido';
  if (y < 400) return 'Alpha + Beta';
  
  if (x < 50) {
      // Zona izquierda (Alpha + L) vs Alpha puro (simplificado como línea recta para demo)
      // Asumiremos solubilidad sólida despreciable para simplificar visualización
      // o una pequeña región alpha a la izquierda.
      if (x < 5) return 'Sólido Alpha';
      return 'Alpha + Líquido';
  } else {
      if (x > 95) return 'Sólido Beta';
      return 'Beta + Líquido';
  }
};

// --- COMPONENTES VISUALES ---

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden ${className}`}>
    {children}
  </div>
);

const Badge: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'bg-slate-100 text-slate-800' }) => (
  <span className={`px-2 py-1 rounded text-xs font-semibold ${color}`}>
    {children}
  </span>
);

// --- COMPONENTE BASE DEL DIAGRAMA (SVG) ---

interface DiagramProps {
  children?: React.ReactNode;
  showRegions?: boolean;
  highlightTemp?: number;
}

const BaseDiagram: React.FC<DiagramProps> = ({ children, showRegions = false, highlightTemp }) => {
  // Conversión de coordenadas de datos a SVG
  // SVG ViewBox: 0 0 400 300
  // X: 0-100% -> 40-360 px
  // Y: 200-1000°C -> 260-40 px (invertido)
  
  const mapX = (val: number) => 40 + (val / 100) * 320;
  const mapY = (val: number) => 260 - ((val - 200) / 800) * 220;

  return (
    <svg viewBox="0 0 400 300" className="w-full h-full select-none font-sans">
      {/* Fondo y Ejes */}
      <rect x="0" y="0" width="400" height="300" fill="#f8fafc" />
      
      {/* Grid Lines */}
      {[200, 400, 600, 800, 1000].map(t => (
        <line key={t} x1="40" y1={mapY(t)} x2="360" y2={mapY(t)} stroke="#e2e8f0" strokeWidth="1" />
      ))}
      {[0, 20, 40, 60, 80, 100].map(c => (
        <line key={c} x1={mapX(c)} y1="40" x2={mapX(c)} y2="260" stroke="#e2e8f0" strokeWidth="1" />
      ))}

      {/* Regiones de Fases (Polígonos) */}
      {/* Líquido */}
      <path 
        d={`M ${mapX(0)} ${mapY(800)} L ${mapX(50)} ${mapY(400)} L ${mapX(100)} ${mapY(700)} L ${mapX(100)} ${mapY(1000)} L ${mapX(0)} ${mapY(1000)} Z`} 
        fill={showRegions ? "#dbeafe" : "none"} 
        stroke="none"
      />
      {/* Alpha + Beta (Sólido) */}
      <path 
        d={`M ${mapX(0)} ${mapY(400)} L ${mapX(100)} ${mapY(400)} L ${mapX(100)} ${mapY(200)} L ${mapX(0)} ${mapY(200)} Z`} 
        fill={showRegions ? "#f1f5f9" : "none"} 
        stroke="none"
      />
      {/* Alpha + L */}
      <path 
         d={`M ${mapX(0)} ${mapY(800)} L ${mapX(0)} ${mapY(400)} L ${mapX(50)} ${mapY(400)} Z`}
         fill={showRegions ? "#ffedd5" : "none"}
         stroke="none"
      />
       {/* Beta + L */}
       <path 
         d={`M ${mapX(100)} ${mapY(700)} L ${mapX(100)} ${mapY(400)} L ${mapX(50)} ${mapY(400)} Z`}
         fill={showRegions ? "#dcfce7" : "none"}
         stroke="none"
      />

      {/* Líneas Principales del Diagrama */}
      <polyline 
        points={`${mapX(0)},${mapY(800)} ${mapX(50)},${mapY(400)} ${mapX(100)},${mapY(700)}`} 
        fill="none" 
        stroke="#334155" 
        strokeWidth="2"
      />
      <line 
        x1={mapX(0)} y1={mapY(400)} 
        x2={mapX(100)} y2={mapY(400)} 
        stroke="#334155" 
        strokeWidth="2" 
      />

      {/* Etiquetas de Ejes */}
      <text x="200" y="290" textAnchor="middle" fontSize="12" fill="#475569">Composición (% B)</text>
      <text x="15" y="150" textAnchor="middle" fontSize="12" fill="#475569" transform="rotate(-90, 15, 150)">Temperatura (°C)</text>
      
      {/* Valores Eje X */}
      <text x={mapX(0)} y="275" textAnchor="middle" fontSize="10">0</text>
      <text x={mapX(50)} y="275" textAnchor="middle" fontSize="10">50</text>
      <text x={mapX(100)} y="275" textAnchor="middle" fontSize="10">100</text>

      {/* Valores Eje Y */}
      <text x="35" y={mapY(400)} textAnchor="end" fontSize="10" alignmentBaseline="middle">400</text>
      <text x="35" y={mapY(800)} textAnchor="end" fontSize="10" alignmentBaseline="middle">800</text>

      {/* Etiquetas de Regiones (si showRegions) */}
      {showRegions && (
        <>
          <text x={mapX(50)} y={mapY(850)} textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e40af">Líquido (L)</text>
          <text x={mapX(50)} y={mapY(300)} textAnchor="middle" fontSize="14" fontWeight="bold" fill="#475569">Alpha + Beta</text>
          <text x={mapX(20)} y={mapY(500)} textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9a3412">Alpha + L</text>
          <text x={mapX(80)} y={mapY(500)} textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">Beta + L</text>
        </>
      )}

      {/* Línea de temperatura dinámica */}
      {highlightTemp && (
          <line 
            x1="40" y1={mapY(highlightTemp)} 
            x2="360" y2={mapY(highlightTemp)} 
            stroke="#ef4444" 
            strokeDasharray="4" 
            strokeWidth="1.5" 
            opacity="0.6"
          />
      )}

      {children}
    </svg>
  );
};

// --- COMPONENTES DE LÓGICA POR PESTAÑA ---

const StaticDiagram = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-4">
      <BaseDiagram showRegions={true} />
    </div>
  );
};

const PointsDiagram = () => {
  const points: Point[] = [
    { x: 50, y: 900, label: 'A' },
    { x: 20, y: 500, label: 'B' },
    { x: 50, y: 300, label: 'C' },
  ];

  const mapX = (val: number) => 40 + (val / 100) * 320;
  const mapY = (val: number) => 260 - ((val - 200) / 800) * 220;

  return (
    <div className="h-full flex flex-col items-center justify-center p-4">
      <BaseDiagram>
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={mapX(p.x)} cy={mapY(p.y)} r="5" fill="#ef4444" stroke="white" strokeWidth="2" />
            <text x={mapX(p.x) + 8} y={mapY(p.y) - 8} fontSize="12" fontWeight="bold" fill="#1e293b">{p.label}</text>
          </g>
        ))}
      </BaseDiagram>
      <div className="grid grid-cols-3 gap-2 mt-4 w-full max-w-md">
        {points.map((p, i) => (
          <div key={i} className="text-xs bg-slate-50 p-2 rounded border border-slate-200">
            <strong>Punto {p.label}:</strong> {p.x}% B, {p.y}°C <br/>
            <span className="text-blue-600 font-semibold">{getPhase(p.x, p.y)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const DynamicDiagram = () => {
  const [temp, setTemp] = useState(600);
  const composition = 30; // Fijo para demo

  const mapX = (val: number) => 40 + (val / 100) * 320;
  const mapY = (val: number) => 260 - ((val - 200) / 800) * 220;
  
  const currentPhase = getPhase(composition, temp);

  return (
    <div className="h-full grid grid-rows-[1fr_auto] gap-4 p-4">
      <div className="relative">
        <BaseDiagram highlightTemp={temp}>
           <circle cx={mapX(composition)} cy={mapY(temp)} r="6" fill="#2563eb" stroke="white" strokeWidth="2" />
           <line x1={mapX(composition)} y1={mapY(temp)} x2={mapX(composition)} y2={260} stroke="#2563eb" strokeDasharray="2" opacity="0.5" />
        </BaseDiagram>
        <div className="absolute top-2 right-2 bg-white/90 p-2 rounded border border-slate-200 shadow-sm text-sm">
            Fase Actual: <span className="font-bold text-blue-700">{currentPhase}</span>
        </div>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Control de Temperatura ({temp}°C)
        </label>
        <input 
          type="range" 
          min="200" 
          max="900" 
          step="10" 
          value={temp} 
          onChange={(e) => setTemp(Number(e.target.value))} 
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <p className="text-xs text-slate-500 mt-2">
          Arrastra el control para ver cómo cambia la fase al enfriar o calentar una aleación al 30% B.
        </p>
      </div>
    </div>
  );
};

const InteractiveCycle = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  
  // Ciclo simple: Calentar -> Mantener -> Enfriar
  // 0-30: Calentar 200->800
  // 30-50: Mantener 800
  // 50-100: Enfriar 800->200
  const getTempAtTime = (t: number) => {
    if (t < 30) return 200 + (t / 30) * 600;
    if (t < 50) return 800;
    return 800 - ((t - 50) / 50) * 600;
  };

  const composition = 40;
  const temp = getTempAtTime(time);
  const mapX = (val: number) => 40 + (val / 100) * 320;
  const mapY = (val: number) => 260 - ((val - 200) / 800) * 220;

  useEffect(() => {
    let interval: number;
    if (running) {
      interval = window.setInterval(() => {
        setTime(prev => {
          if (prev >= 100) {
            setRunning(false);
            return 100;
          }
          return prev + 1;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [running]);

  const reset = () => {
    setRunning(false);
    setTime(0);
  };

  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {/* Panel Izquierdo: Diagrama de Fases */}
      <Card className="h-64 md:h-auto">
        <BaseDiagram>
          <circle cx={mapX(composition)} cy={mapY(temp)} r="6" fill="#7c3aed" stroke="white" strokeWidth="2" />
          {/* Rastro */}
          <path 
             d={`M ${mapX(composition)} ${mapY(200)} L ${mapX(composition)} ${mapY(getTempAtTime(time))}`}
             stroke="#7c3aed" strokeWidth="2" strokeOpacity="0.3" fill="none"
          />
        </BaseDiagram>
      </Card>

      {/* Panel Derecho: Gráfica T vs t y Controles */}
      <div className="flex flex-col gap-4">
        <Card className="flex-1 p-4 relative">
             <h4 className="text-sm font-semibold text-slate-500 mb-2">Ciclo Térmico (T vs tiempo)</h4>
             {/* Mini gráfica SVG de T vs t */}
             <svg viewBox="0 0 200 100" className="w-full h-32 border-b border-l border-slate-300">
                <polyline 
                    points="0,100 60,0 100,0 200,100" 
                    fill="none" stroke="#cbd5e1" strokeWidth="2"
                />
                <circle cx={time * 2} cy={100 - (temp - 200)/6} r="4" fill="#7c3aed" />
             </svg>
             <div className="mt-4 text-center">
                 <div className="text-2xl font-bold text-slate-700">{Math.round(temp)}°C</div>
                 <Badge color="bg-violet-100 text-violet-800">{getPhase(composition, temp)}</Badge>
             </div>
        </Card>

        <div className="flex gap-2">
            <button 
                onClick={() => setRunning(!running)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-medium transition-colors ${running ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
                {running ? 'Pausar' : (time === 100 ? 'Finalizado' : 'Iniciar Ciclo')} <Play size={16} />
            </button>
            <button 
                onClick={reset}
                className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200"
            >
                <RefreshCw size={18} />
            </button>
        </div>
      </div>
    </div>
  );
};

const ComparativeDiagram = () => {
    const mapX = (val: number) => 40 + (val / 100) * 320;
    const mapY = (val: number) => 260 - ((val - 200) / 800) * 220;
    const composition = 20;

    return (
        <div className="h-full flex flex-col p-4">
            <div className="flex-1">
                <BaseDiagram>
                    {/* Inicio */}
                    <circle cx={mapX(composition)} cy={mapY(900)} r="4" fill="black" />
                    <text x={mapX(composition)+5} y={mapY(900)} fontSize="10">Inicio (L)</text>

                    {/* Proceso 1: Equilibrio (Lento) */}
                    <path 
                        d={`M ${mapX(composition)} ${mapY(900)} L ${mapX(composition)} ${mapY(300)}`}
                        stroke="#16a34a" strokeWidth="2" strokeDasharray="4" fill="none"
                    />
                    <text x={mapX(composition)+5} y={mapY(600)} fontSize="10" fill="#16a34a">Equilibrio (Lento)</text>

                    {/* Proceso 2: Enfriamiento Rápido (Quenching) - Desviación teórica */}
                    {/* En un diagrama de equilibrio, el quenching se suele representar como una línea vertical que 'atraviesa' sin transformar, o genera estructuras metaestables */}
                    <path 
                         d={`M ${mapX(composition)} ${mapY(900)} L ${mapX(composition)} ${mapY(300)}`}
                         stroke="#dc2626" strokeWidth="3" opacity="0.4" fill="none"
                    />
                     <text x={mapX(composition)-50} y={mapY(600)} fontSize="10" fill="#dc2626">Enfriamiento Rápido</text>

                     {/* Anotación de diferencia */}
                     <rect x={mapX(55)} y={mapY(600)} width="120" height="60" rx="4" fill="white" stroke="#94a3b8" />
                     <text x={mapX(55)+10} y={mapY(600)+20} fontSize="10" fill="#0f172a">Diferencia Microestructural:</text>
                     <text x={mapX(55)+10} y={mapY(600)+35} fontSize="9" fill="#16a34a">• Granos gruesos (Equilibrio)</text>
                     <text x={mapX(55)+10} y={mapY(600)+50} fontSize="9" fill="#dc2626">• Estructura fina / Martensita</text>

                </BaseDiagram>
            </div>
        </div>
    );
};

// --- DATA Y CONFIGURACIÓN ---

const TABS: TabData[] = [
  { 
    id: 'static', 
    title: 'Regiones', 
    description: 'Diagrama Estático de Equilibrio',
    details:
    (
      <DivCarousel>
        
          <p>Los diagramas de equilibrio de fases son herramientas fundamentales en la ingeniería de materiales porque permiten visualizar cómo cambia la estructura interna de un material metálico cuando varían la temperatura y la composición química. A partir de ellos es posible anticipar qué fases estarán presentes y bajo qué condiciones, lo cual resulta clave para comprender y diseñar tratamientos térmicos.</p>
          <p>En esta lección se presentan los elementos básicos necesarios para interpretar estos diagramas y entender su utilidad práctica.</p>
             <p>Un diagrama de equilibrio de fases es una representación gráfica que describe el estado estable de un material metálico bajo diferentes condiciones. Muestra de manera ordenada qué fases existen y cómo se relacionan entre sí cuando el sistema alcanza el equilibrio térmico.</p>
          <p>Estos diagramas se construyen experimentalmente y resumen una gran cantidad de información sobre el comportamiento del material.</p>
          <div>  <p><strong>Información que proporciona un diagrama de fases:</strong></p>
          <ul>
            <li>Fases presentes en el material.</li>
            <li>Condiciones de temperatura y composición.</li>
            <li>Relaciones de equilibrio entre fases.</li>
          </ul></div>
        
         
      </DivCarousel>
    )
  },
  { 
    id: 'points', 
    title: 'Puntos', 
    description: 'Coordenadas Temperatura-Composición',
    details:  (
      <DivCarousel>
        
        <p>Los diagramas de fases más comunes se representan en dos dimensiones. Cada eje corresponde a una variable fundamental que controla el comportamiento del material.</p>
          <p>La lectura correcta de estos ejes es el primer paso para interpretar cualquier diagrama.</p>
          <div> <p><strong>Elementos básicos de los ejes:</strong></p>
          <ul>
            <li>Eje vertical: temperatura.</li>
            <li>Eje horizontal: composición química (porcentaje de los componentes).</li>
          </ul>
          <p>Cada punto del diagrama representa una condición específica del material.</p>
       
</div>
         
      </DivCarousel>
    )
  },
  { 
    id: 'dynamic', 
    title: 'Dinámico', 
    description: 'Efecto de la Temperatura',
    details: (
      <DivCarousel>
        
          <p>Dentro de un diagrama de fases se distinguen zonas y líneas que indican el estado del material. Estas regiones permiten saber si el material se encuentra en una sola fase o en una combinación de fases.</p>
          <p>Las líneas separan condiciones donde ocurren transformaciones internas al variar la temperatura o la composición.</p>
          <div> <p><strong>Componentes principales:</strong></p>
          <ul>
            <li>Regiones monofásicas: una sola fase estable.</li>
            <li>Regiones bifásicas: coexistencia de dos fases.</li>
            <li>Líneas de transformación: límites donde cambian las fases presentes.</li>
          </ul></div>
         
       
       
      </DivCarousel>
    )
  },
  { 
    id: 'interactive', 
    title: 'Ciclo', 
    description: 'Simulación de Ciclo Térmico',
    details: (
      <DivCarousel>
        
            <p>Los diagramas de equilibrio de fases sirven como guía para el diseño de tratamientos térmicos. Permiten seleccionar temperaturas de calentamiento adecuadas y anticipar las fases que se formarán durante procesos lentos de enfriamiento.</p>
          <p>Aunque en la práctica industrial no siempre se alcanza el equilibrio completo, estos diagramas ofrecen una referencia indispensable.</p>
          <div> <p><strong>Aplicaciones principales:</strong></p>
          <ul>
            <li>Elección de temperaturas de tratamiento.</li>
            <li>Predicción de fases formadas.</li>
            <li>Comprensión del origen de microestructuras observadas.</li>
          </ul>
       </div>
         
       
      </DivCarousel>
    )
  },
  { 
    id: 'compare', 
    title: 'Comparativo', 
    description: 'Equilibrio vs No-Equilibrio',
    details: (
      <DivCarousel>
        
       
          <p>Es importante reconocer que los diagramas de equilibrio describen situaciones ideales. No consideran el efecto del tiempo ni la rapidez de los cambios térmicos, factores clave en muchos tratamientos reales.</p>
          <p>Por esta razón, deben complementarse con otros conceptos relacionados con transformaciones fuera del equilibrio.</p>
         <div><p><strong>Principales limitaciones:</strong></p>
          <ul>
            <li>Representan solo condiciones de equilibrio.</li>
            <li>No describen enfriamientos rápidos.</li>
            <li>No incluyen el efecto del tiempo.</li>
          </ul></div>
                <p>Los diagramas de equilibrio de fases son herramientas esenciales para comprender y predecir el comportamiento de los materiales metálicos frente a cambios de temperatura y composición. Su correcta interpretación permite tomar decisiones informadas en el diseño de tratamientos térmicos y en el control de la microestructura.</p>
          <p>En la siguiente lección se estudiarán las transformaciones microestructurales que ocurren como resultado de los tratamientos térmicos y su influencia directa en las propiedades del material.</p>
    
       
       
      </DivCarousel>
    )
  },
];

// --- APP PRINCIPAL ---

export default function App() {
  const [activeTabId, setActiveTabId] = useState<string>('static');
  
  const activeTab = TABS.find(t => t.id === activeTabId) || TABS[0];

  const renderContent = () => {
    switch (activeTabId) {
      case 'static': return <StaticDiagram />;
      case 'points': return <PointsDiagram />;
      case 'dynamic': return <DynamicDiagram />;
      case 'interactive': return <InteractiveCycle />;
      case 'compare': return <ComparativeDiagram />;
      default: return <StaticDiagram />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans grid grid-rows-[auto_auto_1fr]">
      {/* 1. HEADER (Grid Area 1) */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm z-10">
        <div className="flex items-center gap-3">
          <Activity className="text-blue-600" size={28} />
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-800">Diagramas de equilibrio de fases</h1>
            
          </div>
        </div>
        <div className="hidden md:block text-sm text-slate-400 font-mono">v1.0.4 • TypeScript • React</div>
      </header>

      {/* 2. TABS NAVIGATION (Grid Area 2) */}
      <nav className="bg-white border-b border-slate-200 px-6 grid grid-cols-5">
          {TABS.map((tab) => (
           
              <button
                onClick={() => setActiveTabId(tab.id)}
                className={`relative py-4 text-sm font-medium transition-colors whitespace-nowrap
                  ${activeTabId === tab.id ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'}
                `}
              >
                {tab.title}
                {activeTabId === tab.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-t-full" />
                )}
              </button>
           
          ))}
      </nav>

      {/* 3. MAIN CONTENT (Grid Area 3) */}
      <main className="p-6 overflow-hidden max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6">
        
     

        {/* Columna Derecha: Información y Contexto */}
        <aside className="flex flex-col gap-4">
          <Card className="p-5 border-l-4 border-l-blue-500">
            <h2 className="text-lg font-bold text-slate-800 mb-1">{activeTab.description}</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {activeTab.details}
            </p>
            
            
          </Card>

             {/* Columna Izquierda: Renderizado del Diagrama */}
        <section className="flex flex-col h-full min-h-[400px]">
          <Card className="flex-1 h-full shadow-md border-slate-200 bg-white relative">
             <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-slate-200 text-xs font-semibold text-slate-600 shadow-sm pointer-events-none">
               Vista: {activeTab.title}
             </div>
             {renderContent()}
          </Card>
        </section>
        </aside>

      </main>
    </div>
  );
}