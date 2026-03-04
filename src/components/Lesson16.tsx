import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  BarChart, Bar, ComposedChart, Area, ReferenceLine, ScatterChart, Scatter, ZAxis
} from 'recharts';
import { Thermometer, Activity, Settings, Maximize } from 'lucide-react';
import DivCarousel from '../assets/DivCarousel';

// --- TYPES & INTERFACES ---
interface TabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface LessonLayoutProps {
  title: string;
  tabs: TabItem[];
  activeTab: string;
  setActiveTab: (id: string) => void;
  children: React.ReactNode;
}

// --- CORE LAYOUT COMPONENTS ---

// Card Component (Estrictamente Grid)
const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`grid bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

// LessonLayout Component (Estrictamente Grid)
const LessonLayout: React.FC<LessonLayoutProps> = ({ title, tabs, activeTab, setActiveTab, children }) => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_auto_1fr] bg-slate-50 font-sans">
      
      {/* Header: Title and Nav Info */}
      <header className="grid grid-cols-[1fr_auto] items-center p-6 bg-slate-900 text-white shadow-md z-10">
        <div className="grid gap-1">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        </div>
       
      </header>

      {/* Nav: Tabs (Navegación Exclusiva) */}
      <nav className="grid grid-cols-2 md:grid-cols-4 gap-1 p-2 bg-slate-800 shadow-inner">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`grid grid-cols-[auto_1fr] gap-3 items-center p-4 text-sm font-semibold rounded-t-lg transition-all duration-300 ${
                isActive 
                  ? 'bg-slate-50 text-slate-900 border-t-4 border-t-emerald-500' 
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200 border-t-4 border-t-transparent'
              }`}
            >
              <div className="grid place-items-center">{tab.icon}</div>
              <span className="text-left">{tab.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Main Content Area */}
      <main className="grid p-4 md:p-8 overflow-y-auto">
        <div className="grid max-w-6xl w-full mx-auto justify-self-center content-start gap-8">
          {children}
        </div>
      </main>

    </div>
  );
};

// --- DIAGRAM COMPONENTS ---

// 1. Diagrama Dinámico Secuencial (Evolución Microestructural)
const SequentialAnnealingDiagram: React.FC = () => {
  const [stage, setStage] = useState<number>(0);
  
  const stagesData = [
    { name: "Estado Inicial", desc: "Temperatura ambiente. Microestructura de ferrita y perlita original con tensiones internas.", temp: 25, color: "#64748b" },
    { name: "Calentamiento", desc: "Aumento gradual de temperatura. Nucleación de austenita en los límites de grano.", temp: 400, color: "#ef4444" },
    { name: "Mantenimiento", desc: "Austenitización completa. Crecimiento de grano y homogeneización térmica y química.", temp: 850, color: "#dc2626" },
    { name: "Enfriamiento Lento", desc: "Enfriamiento dentro del horno. Formación de perlita gruesa y ferrita proeutectoide. Máxima ductilidad.", temp: 300, color: "#3b82f6" }
  ];

  const currentStage = stagesData[stage];

  // Generación de "granos" para simulación visual estricta en Grid
  const renderGrains = () => {
    const grains = Array.from({ length: 48 });
    return (
      <div className="grid grid-cols-8 gap-1 p-2 bg-slate-100 rounded-lg w-full h-64 content-center justify-center border-2 border-slate-300">
        {grains.map((_, i) => {
          // Lógica visual simulada basada en la etapa
          let bgClass = "bg-slate-400"; // Inicial
          let radius = "rounded-sm";
          let scale = "scale-100";

          if (stage === 1) {
            bgClass = Math.random() > 0.5 ? "bg-red-400" : "bg-slate-500";
            radius = "rounded-md";
          } else if (stage === 2) {
            bgClass = "bg-red-600";
            radius = "rounded-full";
            scale = "scale-110";
          } else if (stage === 3) {
            bgClass = Math.random() > 0.3 ? "bg-blue-300" : "bg-slate-300";
            radius = "rounded-lg";
            scale = "scale-125"; // Granos más grandes (perlita gruesa)
          }

          return (
            <div 
              key={i} 
              className={`w-full aspect-square transition-all duration-700 ${bgClass} ${radius} ${scale} opacity-90 border border-black/10`}
            />
          );
        })}
      </div>
    );
  };

  return (
    <Card>
      <div className="grid p-6 gap-6">
        <div className="grid gap-2 border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold text-slate-800">Definición y propósito del recocido</h2>
           <DivCarousel>
      <div> <p>El recocido es un tratamiento térmico que consiste en:</p>
          <ul>
            <li>Calentar el acero hasta una temperatura determinada (generalmente por encima de la temperatura crítica).</li>
            <li>Mantenerlo durante un tiempo suficiente para permitir transformaciones internas.</li>
            <li>Enfriarlo lentamente, usualmente dentro del horno.</li>
          </ul>

          <p>Desde el punto de vista metalúrgico, el recocido busca llevar al acero hacia una condición cercana al equilibrio estructural, favoreciendo microestructuras más estables y blandas.</p></div>
         
  <div>
          <p><strong>Propósito principal</strong></p>
          <ul>
            <li>Disminuir la dureza.</li>
            <li>Aumentar la ductilidad.</li>
            <li>Mejorar la maquinabilidad.</li>
            <li>Reducir tensiones internas.</li>
            <li>Preparar el material para procesos posteriores (deformación en frío, mecanizado).</li>
          </ul>

        </div>
      </DivCarousel>
        </div>
        
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-center">
          {/* Controles Dinámicos */}
          <div className="grid gap-6">
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-slate-700">Control de Etapa (Tiempo)</label>
              <input 
                type="range" 
                min="0" 
                max="3" 
                step="1" 
                value={stage}
                onChange={(e) => setStage(parseInt(e.target.value))}
                className="w-full accent-emerald-600"
              />
              <div className="grid grid-cols-4 text-xs text-slate-500 text-center mt-2">
                <span>Inicial</span>
                <span>Calent.</span>
                <span>Mant.</span>
                <span>Enfria.</span>
              </div>
            </div>

            <div className="grid gap-2 p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <h3 className="text-lg font-bold text-slate-800" style={{ color: currentStage.color }}>
                {currentStage.name}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{currentStage.desc}</p>
              <div className="grid grid-cols-[auto_1fr] gap-2 mt-2 items-center text-sm font-mono font-semibold">
                <Thermometer size={16} color={currentStage.color}/>
                <span>T ~ {currentStage.temp}°C</span>
              </div>
            </div>
          </div>

          {/* Render del Diagrama */}
          <div className="grid gap-4">
            <h3 className="text-sm font-semibold text-center text-slate-500 uppercase tracking-wider">Simulación de Retícula</h3>
            {renderGrains()}
          </div>
        </div>
      </div>
    </Card>
  );
};

// 2. Diagrama Estático Comparativo (Perlita Fina vs Gruesa)
const PearliteComparisonDiagram: React.FC = () => {
  const data = [
    {
      name: 'Enfriamiento Rápido (Normalizado)',
      microestructura: 'Perlita Fina',
      dureza: 85,
      ductilidad: 40,
    },
    {
      name: 'Enfriamiento Lento (Recocido)',
      microestructura: 'Perlita Gruesa',
      dureza: 45,
      ductilidad: 95,
    },
  ];

  return (
    <Card>
      <div className="grid p-6 gap-6">
        <div className="grid gap-2 border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold text-slate-800">Cambios microestructurales durante el recocido</h2>
          <DivCarousel>
      <div>  <p>El recocido implica transformaciones progresivas que dependen de la temperatura alcanzada y del tiempo de permanencia.</p>

<strong>          <h3>Etapa de calentamiento</h3>
</strong>          <p>Durante el calentamiento:</p>
          <ul>
            <li>La microestructura inicial (por ejemplo, ferrita + perlita) comienza a transformarse.</li>
            <li>Si se supera la temperatura crítica (A₁ o A₃ según el contenido de carbono), se forma austenita.</li>
            <li>La estructura se vuelve más homogénea.</li>
          </ul>
          <p><strong>Conceptualmente:</strong></p>
          <p>Ferrita + Perlita → Austenita (al superar temperatura crítica)</p></div>
        
<div><h3><strong>Etapa de mantenimiento</strong></h3>
          <p>En esta fase:</p>
          <ul>
            <li>Se homogeniza la composición química.</li>
            <li>Se eliminan gradientes internos.</li>
            <li>Se estabiliza completamente la fase austenítica.</li>
            <li>Se favorece la difusión del carbono.</li>
          </ul>
          <p>El tiempo de mantenimiento depende de:</p>
          <ul>
            <li>Espesor de la pieza.</li>
            <li>Composición química.</li>
            <li>Tipo de acero.</li>
          </ul></div>
          
<div>  <h3><strong>Etapa de enfriamiento lento</strong></h3>
          <p>El enfriamiento se realiza de forma controlada, generalmente dentro del horno.</p>
          <p>Durante esta etapa:</p>
          <ul>
            <li>La austenita se transforma en perlita gruesa.</li>
            <li>Se obtiene mayor tamaño de grano.</li>
            <li>Disminuye la dureza.</li>
            <li>Aumenta la ductilidad.</li>
          </ul></div>
        
  <div>
          <p><strong>Resultado microestructural típico</strong></p>
          <p>Características finales:</p>
          <ul>
            <li>Perlita más gruesa (lamelas más separadas).</li>
            <li>Mayor proporción de ferrita en aceros hipoeutectoides.</li>
            <li>Microestructura más estable.</li>
            <li>Menor resistencia mecánica comparada con estructuras templadas.</li>
          </ul>



     
        </div>
      </DivCarousel>
        </div>

        <div className="grid h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barGap={20}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="microestructura" tick={{ fill: '#475569', fontWeight: 600 }} />
              <YAxis yAxisId="left" orientation="left" stroke="#ef4444" label={{ value: 'Dureza (HRB)', angle: -90, position: 'insideLeft', fill: '#ef4444' }} />
              <YAxis yAxisId="right" orientation="right" stroke="#3b82f6" label={{ value: 'Ductilidad (%)', angle: 90, position: 'insideRight', fill: '#3b82f6' }} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                cursor={{ fill: '#f8fafc' }}
              />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Bar yAxisId="left" dataKey="dureza" name="Dureza" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={60} />
              <Bar yAxisId="right" dataKey="ductilidad" name="Ductilidad" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={60} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="grid p-4 bg-red-50 text-red-900 border border-red-200 rounded-lg">
            <span className="font-bold text-sm mb-1">Perlita Fina (Rápido)</span>
            <span className="text-xs">Láminas de cementita muy juntas. Obstaculiza el movimiento de dislocaciones, aumentando fuertemente la dureza pero reduciendo la deformación plástica.</span>
          </div>
          <div className="grid p-4 bg-blue-50 text-blue-900 border border-blue-200 rounded-lg">
            <span className="font-bold text-sm mb-1">Perlita Gruesa (Lento / Recocido)</span>
            <span className="text-xs">Láminas espaciadas. Facilita el deslizamiento cristalográfico, reduciendo la dureza a cambio de una excelente ductilidad y maquinabilidad.</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

// 3. Diagrama Dinámico Temperatura-Tiempo
const TemperatureTimeDiagram: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<number>(0);

  // Datos del ciclo de recocido (Tiempo en horas, Temp en °C)
  const thermalCycle = [
    { time: 0, temp: 25, phase: "Ferrita+Perlita" },
    { time: 1, temp: 300, phase: "Ferrita+Perlita" },
    { time: 2, temp: 727, phase: "Austenitización Inicio" }, // Temperatura crítica inferior (A1)
    { time: 3, temp: 850, phase: "Austenita" }, // Calentamiento completo
    { time: 5, temp: 850, phase: "Austenita (Crecimiento de Grano)" }, // Mantenimiento
    { time: 8, temp: 600, phase: "Transformación Perlítica" }, // Enfriamiento lento en horno
    { time: 12, temp: 300, phase: "Perlita Gruesa" },
    { time: 15, temp: 25, phase: "Microestructura Final" }
  ];

  // Datos filtrados hasta el tiempo actual para efecto "dinámico" de dibujo
  const activeData = thermalCycle.filter(d => d.time <= currentTime);
  const currentPoint = thermalCycle.reduce((prev, curr) => (curr.time <= currentTime ? curr : prev), thermalCycle[0]);

  return (
    <Card>
      <div className="grid p-6 gap-6">
        <div className="grid gap-2 border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold text-slate-800">Curva típica de calentamiento y enfriamiento</h2>
           <DivCarousel>
       <div><p>El recocido puede representarse mediante una curva temperatura–tiempo que describe el ciclo térmico completo.</p>

<strong>          <h3>Fase 1: Calentamiento</h3>
</strong>          <ul>
            <li>Incremento gradual de temperatura.</li>
            <li>Debe evitarse un calentamiento brusco para reducir tensiones térmicas.</li>
            <li>Se alcanza la zona austenítica.</li>
          </ul></div>
          
<div> <strong><h3>Fase 2: Mantenimiento</h3></strong>
          <ul>
            <li>La temperatura se mantiene constante.</li>
            <li>Permite que la transformación austenítica sea completa.</li>
            <li>Se homogeniza la estructura.</li>
          </ul></div>
         
 <div>
<strong>          <h3>Fase 3: Enfriamiento lento</h3>
</strong>          <ul>
            <li>Generalmente dentro del horno apagado.</li>
            <li>Transformación cercana al equilibrio.</li>
            <li>Formación de perlita gruesa.</li>
          </ul>

          <p><strong>Elemento determinante:</strong></p>
          <p>La velocidad de enfriamiento es el factor más importante para obtener una estructura blanda.</p>

        </div>
      </DivCarousel>
        </div>

        <div className="grid grid-cols-[1fr_auto] items-center gap-4 bg-slate-50 p-4 border border-slate-200 rounded-lg">
          <input 
            type="range" 
            min="0" 
            max="15" 
            step="1" 
            value={currentTime}
            onChange={(e) => setCurrentTime(parseInt(e.target.value))}
            className="w-full accent-emerald-600"
          />
          <div className="grid grid-cols-1 place-items-end font-mono text-sm w-32">
            <span className="text-slate-500">Tiempo: {currentTime} hrs</span>
            <span className="text-emerald-600 font-bold">T: {currentPoint.temp}°C</span>
          </div>
        </div>

        <div className="grid h-80 w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={thermalCycle} // Usamos toda la base para el dominio, pero controlamos el render con strokeOpacity o un custom dot
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" vertical={false} />
              <XAxis dataKey="time" type="number" domain={[0, 15]} label={{ value: 'Tiempo (Horas)', position: 'bottom', offset: 0 }} />
              <YAxis domain={[0, 1000]} label={{ value: 'Temperatura (°C)', angle: -90, position: 'insideLeft' }} />
              
              {/* Línea crítica A1 */}
              <ReferenceLine y={727} stroke="#ef4444" strokeDasharray="5 5" label={{ position: 'top', value: 'Temperatura A1 (727°C)', fill: '#ef4444', fontSize: 12 }} />
              
              <Tooltip 
                formatter={(value: number) => [`${value}°C`, 'Temperatura']}
                labelFormatter={(label) => `Hora ${label}`}
              />
              
              {/* Línea Base (Gris clara) */}
              <Line type="monotone" dataKey="temp" stroke="#e2e8f0" strokeWidth={4} dot={false} isAnimationActive={false} />
              
              {/* Línea Activa (Dinámica basada en state) */}
              <Line 
                data={activeData} 
                type="monotone" 
                dataKey="temp" 
                stroke="#10b981" 
                strokeWidth={4} 
                dot={{ r: 6, fill: '#10b981', stroke: '#fff', strokeWidth: 2 }} 
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
          
          {/* Overlay descriptivo de fase */}
          <div className="absolute top-4 right-4 grid bg-white/90 p-3 rounded shadow border border-slate-200 backdrop-blur-sm">
            <span className="text-xs text-slate-500 font-bold uppercase mb-1">Fase Presente</span>
            <span className="text-sm font-medium text-slate-800">{currentPoint.phase}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

// 4. Diagrama Estático de Balance Propiedades-Proceso
const PropertiesBalanceDiagram: React.FC = () => {
  // Datos simulando el tamaño de grano vs propiedades
  const data = [
    { grainSize: 10, dureza: 250, ductilidad: 15, name: 'Grano Fino' },
    { grainSize: 30, dureza: 210, ductilidad: 25, name: 'Crecimiento Inicial' },
    { grainSize: 50, dureza: 180, ductilidad: 35, name: 'Medio' },
    { grainSize: 70, dureza: 150, ductilidad: 45, name: 'Recocido Pleno' },
    { grainSize: 90, dureza: 120, ductilidad: 55, name: 'Grano Grueso' },
  ];

  return (
    <Card>
      <div className="grid p-6 gap-6">
        <div className="grid gap-2 border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold text-slate-800">Ventajas y limitaciones del recocido</h2>
          <DivCarousel>
         

         
          <div> <p>El recocido es ampliamente utilizado en la industria debido a su impacto en la trabajabilidad del acero.</p> <h3>Ventajas</h3>
          <ul>
            <li>Reduce la dureza.</li>
            <li>Mejora la maquinabilidad.</li>
            <li>Elimina tensiones internas.</li>
            <li>Aumenta ductilidad.</li>
            <li>Facilita procesos de deformación en frío.</li>
            <li>Mejora la estabilidad dimensional.</li>
          </ul></div>
<div> <strong> <h3>Limitaciones</h3></strong>
          <ul>
            <li>Proceso relativamente lento.</li>
            <li>Alto consumo energético.</li>
            <li>No incrementa significativamente la resistencia mecánica.</li>
            <li>Puede producir crecimiento excesivo de grano si no se controla adecuadamente.</li>
            <li>Requiere control preciso de temperatura.</li>
          </ul>
        
       
         
        </div>
      </DivCarousel>
        </div>

        <div className="grid h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="grainSize" 
                type="number" 
                domain={[0, 100]} 
                label={{ value: 'Tamaño de Grano Relativo (μm)', position: 'bottom', offset: 0 }} 
                tick={{ fill: '#64748b' }}
              />
              <YAxis 
                yAxisId="left" 
                label={{ value: 'Dureza (HB)', angle: -90, position: 'insideLeft', fill: '#64748b' }} 
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                label={{ value: 'Ductilidad (% Elongación)', angle: 90, position: 'insideRight', fill: '#64748b' }} 
              />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                labelFormatter={(value) => `Tamaño de grano: ${value}μm`}
              />
              <Legend wrapperStyle={{ paddingTop: '10px' }} />
              
              {/* Curva de Dureza (Descendente) */}
              <Line yAxisId="left" type="monotone" dataKey="dureza" name="Dureza" stroke="#64748b" strokeWidth={3} dot={{ r: 5 }} />
              
              {/* Área de Ductilidad (Ascendente) */}
              <Area yAxisId="right" type="monotone" dataKey="ductilidad" name="Ductilidad" fill="#10b981" stroke="#10b981" fillOpacity={0.2} strokeWidth={3} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="grid bg-slate-100 p-4 rounded-lg border border-slate-200">
          <p className="text-sm text-slate-700 leading-relaxed text-center font-medium">
            El recocido busca intencionalmente desplazar el material hacia la derecha del gráfico: 
            <span className="text-emerald-700 font-bold ml-1">promoviendo el crecimiento del grano</span> para sacrificar dureza a favor de 
            <span className="text-emerald-700 font-bold ml-1">maximizar la ductilidad y formabilidad</span>.
          </p>
        </div>
      </div>
    </Card>
  );
};

// --- MAIN APP ENTRY POINT ---

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('secuencial');

  const tabs: TabItem[] = [
    { id: 'secuencial', label: 'Evolución Secuencial', icon: <Activity size={18} /> },
    { id: 'comparativo', label: 'Perlita Fina vs Gruesa', icon: <Settings size={18} /> },
    { id: 'ciclo', label: 'Ciclo Térmico', icon: <Thermometer size={18} /> },
    { id: 'balance', label: 'Balance de Propiedades', icon: <Maximize size={18} /> },
  ];

  // Renderizador lógico basado en la pestaña activa
  const renderContent = () => {
    switch (activeTab) {
      case 'secuencial':
        return <SequentialAnnealingDiagram />;
      case 'comparativo':
        return <PearliteComparisonDiagram />;
      case 'ciclo':
        return <TemperatureTimeDiagram />;
      case 'balance':
        return <PropertiesBalanceDiagram />;
      default:
        return <SequentialAnnealingDiagram />;
    }
  };

  return (
    <LessonLayout 
      title="Fundamentos del Tratamiento Térmico: Recocido" 
      tabs={tabs} 
      activeTab={activeTab} 
      setActiveTab={setActiveTab}
    >
      {renderContent()}
    </LessonLayout>
  );
}