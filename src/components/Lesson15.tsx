import React, { useState, useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  ReferenceDot,
  ReferenceLine
} from 'recharts';
import { BookOpen, Activity, Layout, Maximize, Target } from 'lucide-react';

// --- Types & Interfaces ---

interface TabProps {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface LayoutProps {
  children: React.ReactNode;
}

// --- Layout Components ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

const Header: React.FC = () => (
  <header className="bg-slate-900 text-white p-4 border-b border-slate-800">
    <div className="max-w-7xl mx-auto grid grid-cols-[auto_1fr] items-center gap-4">
      <div className="grid grid-cols-[auto_auto] items-center gap-2">
        <div className="bg-blue-600 p-2 rounded-lg">
          <BookOpen size={24} className="text-white" />
        </div>
        <h1 className="text-xl font-bold tracking-tight">Metalurgia Interactiva</h1>
      </div>
      <nav className="grid grid-flow-col justify-end gap-6 text-sm font-medium text-slate-300">
        <a href="#" className="hover:text-white transition-colors">Lecciones</a>
        <a href="#" className="hover:text-white transition-colors">Documentación</a>
        <a href="#" className="hover:text-white transition-colors">Ajustes</a>
      </nav>
    </div>
  </header>
);

const LessonLayout: React.FC<LayoutProps> = ({ children }) => (
  <div className="min-h-screen bg-slate-50 grid grid-rows-[auto_1fr]">
    <Header />
    <main className="max-w-7xl mx-auto w-full p-6 grid grid-rows-[auto_1fr] gap-6">
      {children}
    </main>
  </div>
);

// --- Diagrams Components ---

// 1. Diagrama Dinámico: Ciclo Térmico
const ThermalCycleDiagram: React.FC = () => {
  const [coolingRate, setCoolingRate] = useState<number>(5);

  const data = useMemo(() => {
    const points = [];
    // Calentamiento y mantenimiento
    points.push({ time: 0, temp: 20 });
    points.push({ time: 10, temp: 900 });
    points.push({ time: 30, temp: 900 });
    // Enfriamiento
    const coolingDuration = 60 / coolingRate;
    points.push({ time: 30 + coolingDuration, temp: 20 });
    points.push({ time: 100, temp: 20 });
    return points;
  }, [coolingRate]);

  const properties = useMemo(() => {
    return [
      { name: 'Dureza', valor: 100 + coolingRate * 15 },
      { name: 'Ductilidad', valor: 100 - coolingRate * 8 },
      { name: 'Tenacidad', valor: 80 - Math.abs(5 - coolingRate) * 5 }
    ];
  }, [coolingRate]);

  return (
    <Card>
      <div className="p-6 grid grid-rows-[auto_auto_1fr] gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 grid grid-cols-[auto_1fr] items-center gap-2">
            <Activity className="text-blue-500" /> Ciclo Térmico y Propiedades
          </h2>
          <p className="text-slate-600 mt-2">
            Ajusta la velocidad de enfriamiento para observar cómo afecta el ciclo térmico a la microestructura y, en consecuencia, a las propiedades mecánicas finales del material.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="grid grid-rows-[auto_1fr] gap-4">
            <div className="bg-slate-100 p-4 rounded-lg grid grid-cols-[1fr_auto] items-center gap-4">
              <div className="grid grid-rows-[auto_auto] gap-1">
                <label className="text-sm font-semibold text-slate-700">Velocidad de Enfriamiento</label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={coolingRate}
                  onChange={(e) => setCoolingRate(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
              </div>
              <span className="text-xl font-bold text-blue-700">{coolingRate}x</span>
            </div>
            
            <div className="h-64 border border-slate-200 rounded-lg p-2 bg-white">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="time" type="number" domain={[0, 100]} label={{ value: 'Tiempo (s)', position: 'insideBottom', offset: -5 }} />
                  <YAxis label={{ value: 'Temp (°C)', angle: -90, position: 'insideLeft' }} domain={[0, 1000]} />
                  <Tooltip />
                  <Line type="linear" dataKey="temp" stroke="#ef4444" strokeWidth={3} dot={false} name="Temperatura" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-rows-[auto_1fr] gap-4">
            <h3 className="text-lg font-semibold text-slate-800 text-center">Impacto en Propiedades Mecánicas</h3>
            <div className="h-64 border border-slate-200 rounded-lg p-2 bg-white">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={properties} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 250]} />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Bar dataKey="valor" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

// 2. Diagrama Estático Comparativo: Tamaño de Grano
const GrainSizeDiagram: React.FC = () => {
  return (
    <Card>
      <div className="p-6 grid grid-rows-[auto_auto_1fr] gap-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 grid grid-cols-[auto_1fr] items-center gap-2">
            <Layout className="text-emerald-500" /> Tamaño de Grano y Ley de Hall-Petch
          </h2>
          <p className="text-slate-600 mt-2">
            Comparativa entre microestructuras de grano grueso y grano fino. La reducción del tamaño de grano aumenta el área de los límites de grano, impidiendo el movimiento de dislocaciones y aumentando la resistencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Grano Grueso */}
          <div className="grid grid-rows-[auto_auto] gap-4">
            <div className="aspect-square bg-slate-100 rounded-xl border-2 border-slate-300 relative overflow-hidden grid place-items-center">
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="opacity-80">
                <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="#e2e8f0"/>
                <path d="M0,40 Q30,50 50,20 T100,30" fill="none" stroke="#64748b" strokeWidth="2"/>
                <path d="M20,100 Q40,70 80,80 T100,60" fill="none" stroke="#64748b" strokeWidth="2"/>
                <path d="M0,70 Q20,50 50,60 T70,100" fill="none" stroke="#64748b" strokeWidth="2"/>
                <circle cx="25" cy="25" r="3" fill="#334155" />
                <circle cx="75" cy="50" r="3" fill="#334155" />
                <circle cx="35" cy="80" r="3" fill="#334155" />
              </svg>
              <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-slate-700 shadow-sm">
                Grano Grueso (Baja Velocidad Enfriamiento)
              </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-lg grid gap-2">
              <h4 className="font-bold text-emerald-800">Propiedades Típicas</h4>
              <ul className="text-sm text-emerald-700 grid gap-1 list-disc list-inside">
                <li>Baja resistencia a la fluencia</li>
                <li>Mayor ductilidad</li>
                <li>Mejor maquinabilidad</li>
                <li>Menor tenacidad al impacto</li>
              </ul>
            </div>
          </div>

          {/* Grano Fino */}
          <div className="grid grid-rows-[auto_auto] gap-4">
            <div className="aspect-square bg-slate-100 rounded-xl border-2 border-slate-300 relative overflow-hidden grid place-items-center">
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="opacity-80">
                <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="#cbd5e1"/>
                {/* Red de granos finos generada estáticamente */}
                <path d="M20,0 L25,20 L0,30 M25,20 L45,15 L60,0 M45,15 L50,35 L25,45 L10,60 L0,50 M50,35 L75,30 L90,10 L100,15 M75,30 L80,55 L100,45 M25,45 L40,65 L20,85 L0,80 M40,65 L65,60 L80,80 L60,100 M20,85 L35,100 M80,80 L100,75 M80,55 L100,65" fill="none" stroke="#475569" strokeWidth="1.5"/>
                <circle cx="12" cy="15" r="2" fill="#1e293b" />
                <circle cx="35" cy="10" r="2" fill="#1e293b" />
                <circle cx="80" cy="20" r="2" fill="#1e293b" />
                <circle cx="15" cy="40" r="2" fill="#1e293b" />
                <circle cx="60" cy="45" r="2" fill="#1e293b" />
                <circle cx="90" cy="55" r="2" fill="#1e293b" />
                <circle cx="30" cy="70" r="2" fill="#1e293b" />
                <circle cx="70" cy="85" r="2" fill="#1e293b" />
                <circle cx="15" cy="90" r="2" fill="#1e293b" />
              </svg>
              <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-slate-700 shadow-sm">
                Grano Fino (Alta Velocidad Enfriamiento)
              </div>
            </div>
             <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg grid gap-2">
              <h4 className="font-bold text-blue-800">Propiedades Típicas</h4>
              <ul className="text-sm text-blue-700 grid gap-1 list-disc list-inside">
                <li>Alta resistencia a la fluencia</li>
                <li>Ductilidad aceptable</li>
                <li>Excelente tenacidad al impacto</li>
                <li>Mayor dureza superficial</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-4 border border-slate-200 rounded-lg overflow-hidden">
          <div className="grid grid-cols-4 bg-slate-100 font-bold text-slate-700 text-sm p-3 border-b border-slate-200">
            <div>Microestructura</div>
            <div>Límite Elástico (<span className="font-serif">σy</span>)</div>
            <div>Ductilidad (% EL)</div>
            <div>Tenacidad</div>
          </div>
          <div className="grid grid-cols-4 bg-white text-slate-600 text-sm p-3 border-b border-slate-100 items-center">
            <div className="font-semibold text-slate-800">Grano Grueso (ASTM 1-4)</div>
            <div>Bajo</div>
            <div>Alta</div>
            <div>Baja</div>
          </div>
          <div className="grid grid-cols-4 bg-slate-50 text-slate-600 text-sm p-3 items-center">
            <div className="font-semibold text-slate-800">Grano Fino (ASTM 7-10)</div>
            <div>Alto (Hall-Petch)</div>
            <div>Media/Alta</div>
            <div>Muy Alta</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

// 3. Diagrama TTT (Temperatura, Tiempo, Transformación)
const TTTDiagram: React.FC = () => {
  // Generamos datos simulados para las curvas C (Inicio y fin de transformación)
  const tttData = useMemo(() => {
    const data = [];
    for (let temp = 800; temp >= 200; temp -= 20) {
      let start = null;
      let end = null;
      let ms = null;
      let mf = null;

      // Simulamos la forma de C
      if (temp <= 727 && temp >= 250) {
        // Vértice (nariz) alrededor de 550°C
        const diff = Math.abs(temp - 550);
        // Función cuadrática simple para simular log(t)
        const baseLogTStart = 0.5 + Math.pow(diff / 100, 2) * 1.5;
        const baseLogTEnd = baseLogTStart + 1.5 + (diff / 200);
        
        start = Math.pow(10, baseLogTStart);
        end = Math.pow(10, baseLogTEnd);
      }

      if (temp === 250) ms = temp; // Ms line
      if (temp === 100) mf = temp; // Mf line

      data.push({ temp, start, end });
    }
    return data;
  }, []);

  const coolingPaths = [
    { name: 'Temple (Martensita)', data: [{ temp: 800, time: 0.1 }, { temp: 20, time: 10 }] },
    { name: 'Normalizado (Perlita Fina)', data: [{ temp: 800, time: 0.1 }, { temp: 500, time: 20 }, { temp: 20, time: 100 }] },
    { name: 'Recocido (Perlita Gruesa)', data: [{ temp: 800, time: 0.1 }, { temp: 650, time: 100 }, { temp: 20, time: 10000 }] },
  ];

  return (
    <Card>
      <div className="p-6 grid grid-rows-[auto_auto_1fr] gap-4 h-[600px]">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 grid grid-cols-[auto_1fr] items-center gap-2">
            <Maximize className="text-purple-500" /> Diagrama TTT Simplificado
          </h2>
          <p className="text-slate-600 mt-2">
            Curvas de Temperatura-Tiempo-Transformación. Las diferentes trayectorias de enfriamiento evitan o cruzan la "nariz" de las curvas, definiendo si se forma Perlita, Bainita o Martensita.
          </p>
        </div>

        <div className="grid grid-cols-[1fr_250px] gap-6 h-full">
          <div className="border border-slate-200 rounded-lg p-4 bg-white relative">
             <ResponsiveContainer width="100%" height="100%">
                {/* Usamos LineChart con layout vertical. X es tiempo (escala log), Y es temp */}
                <LineChart layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis 
                    type="number" 
                    scale="log" 
                    domain={[0.1, 100000]} 
                    dataKey="time" 
                    label={{ value: 'Tiempo (s) - Escala Log', position: 'bottom', offset: 0 }} 
                    allowDataOverflow
                  />
                  <YAxis 
                    type="number" 
                    dataKey="temp" 
                    domain={[0, 800]} 
                    label={{ value: 'Temperatura (°C)', angle: -90, position: 'insideLeft', offset: -10 }} 
                  />
                  <Tooltip formatter={(value: number) => value.toFixed(1)} />
                  <Legend verticalAlign="top" />
                  
                  {/* Curvas TTT */}
                  <Line data={tttData} type="monotone" dataKey="start" stroke="#334155" strokeWidth={2} dot={false} name="Inicio Transf." isAnimationActive={false} />
                  <Line data={tttData} type="monotone" dataKey="end" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Fin Transf." isAnimationActive={false} />
                  
                  {/* Lineas Ms y Mf */}
                  <ReferenceLine y={250} stroke="#ef4444" strokeDasharray="3 3" label={{ position: 'top', value: 'Ms (250°C)', fill: '#ef4444', fontSize: 12 }} />
                  <ReferenceLine y={100} stroke="#b91c1c" strokeDasharray="3 3" label={{ position: 'top', value: 'Mf (100°C)', fill: '#b91c1c', fontSize: 12 }} />
                  <ReferenceLine y={727} stroke="#475569" strokeDasharray="3 3" label={{ position: 'top', value: 'A1 (727°C)', fill: '#475569', fontSize: 12 }} />

                  {/* Trayectorias de enfriamiento */}
                  <Line data={coolingPaths[0].data} type="linear" dataKey="time" stroke="#3b82f6" strokeWidth={2} dot={true} name="Temple" />
                  <Line data={coolingPaths[1].data} type="linear" dataKey="time" stroke="#10b981" strokeWidth={2} dot={true} name="Normalizado" />
                  <Line data={coolingPaths[2].data} type="linear" dataKey="time" stroke="#f59e0b" strokeWidth={2} dot={true} name="Recocido" />
                </LineChart>
             </ResponsiveContainer>
          </div>
          
          <div className="grid grid-rows-[auto_auto_auto] gap-4 align-start">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded shadow-sm">
              <h4 className="font-bold text-blue-900 text-sm">Temple (Azul)</h4>
              <p className="text-xs text-blue-800 mt-1">Enfriamiento rápido (agua/aceite). Evita la nariz. Forma <strong>Martensita</strong> (muy dura y frágil).</p>
            </div>
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-3 rounded shadow-sm">
              <h4 className="font-bold text-emerald-900 text-sm">Normalizado (Verde)</h4>
              <p className="text-xs text-emerald-800 mt-1">Enfriamiento al aire. Cruza la nariz rápidamente. Forma <strong>Perlita Fina</strong> (equilibrada).</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded shadow-sm">
              <h4 className="font-bold text-amber-900 text-sm">Recocido (Naranja)</h4>
              <p className="text-xs text-amber-800 mt-1">Enfriamiento en horno. Cruza la parte superior. Forma <strong>Perlita Gruesa</strong> (blanda y dúctil).</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

// 4. Diagrama Interactivo: Hierro-Carbono
const FeCDiagram: React.FC = () => {
  const [carbon, setCarbon] = useState<number>(0.4);
  const [temp, setTemp] = useState<number>(800);

  // Líneas de fase simplificadas
  const phaseLines = [
    { c: 0, a3: 912, a1: 727, acm: null },
    { c: 0.76, a3: 727, a1: 727, acm: 727 },
    { c: 2.14, a3: null, a1: 727, acm: 1147 },
    { c: 4.3, a3: null, a1: null, acm: 1147 }, // Eutéctico
  ];

  const determinePhase = (c: number, t: number) => {
    if (t > 1147) return "Líquido / Fusión Parcial";
    if (t > 727) {
      if (c <= 0.76) {
        // Interpolar A3
        const a3 = 912 - ((912 - 727) / 0.76) * c;
        if (t > a3) return "Austenita (γ)";
        return "Ferrita (α) + Austenita (γ)";
      } else if (c <= 2.14) {
        // Interpolar Acm
        const acm = 727 + ((1147 - 727) / (2.14 - 0.76)) * (c - 0.76);
        if (t > acm) return "Austenita (γ)";
        return "Austenita (γ) + Cementita (Fe3C)";
      } else {
        return "Austenita (γ) + Cementita / Ledeburita";
      }
    } else {
      if (c < 0.022) return "Ferrita (α)";
      if (c === 0.76) return "Perlita (100%)";
      if (c < 0.76) return "Ferrita Proeutectoide + Perlita";
      return "Cementita Proeutectoide + Perlita";
    }
  };

  const currentPhase = determinePhase(carbon, temp);

  return (
    <Card>
      <div className="p-6 grid grid-rows-[auto_auto_1fr] gap-4 h-[650px]">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 grid grid-cols-[auto_1fr] items-center gap-2">
            <Target className="text-orange-500" /> Diagrama de Fases Hierro-Carbono
          </h2>
          <p className="text-slate-600 mt-2">
            Selecciona el porcentaje de carbono y la temperatura para identificar las fases presentes en el equilibrio termodinámico (Aceros y Fundiciones).
          </p>
        </div>

        <div className="grid grid-cols-[1fr_2fr] gap-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="grid grid-rows-[auto_auto] gap-6">
            <div className="grid gap-2">
              <label className="text-sm font-bold text-slate-700 grid grid-cols-[1fr_auto]">
                <span>Contenido de Carbono (% C)</span>
                <span className="text-orange-600">{carbon.toFixed(2)}%</span>
              </label>
              <input 
                type="range" min="0" max="4.5" step="0.05" 
                value={carbon} onChange={(e) => setCarbon(Number(e.target.value))}
                className="w-full accent-orange-500"
              />
              <div className="grid grid-cols-2 text-xs text-slate-500 text-center mt-1">
                <span>Aceros ({"<"} 2.14%)</span>
                <span>Fundiciones ({">"} 2.14%)</span>
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-bold text-slate-700 grid grid-cols-[1fr_auto]">
                <span>Temperatura (°C)</span>
                <span className="text-orange-600">{temp}°C</span>
              </label>
              <input 
                type="range" min="0" max="1400" step="10" 
                value={temp} onChange={(e) => setTemp(Number(e.target.value))}
                className="w-full accent-orange-500"
              />
            </div>
          </div>
          <div className="bg-white border border-orange-200 rounded-lg p-4 grid grid-rows-[auto_1fr] gap-2 place-items-center text-center">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Fase(s) Presente(s)</span>
            <span className="text-2xl font-bold text-orange-700">{currentPhase}</span>
          </div>
        </div>

        <div className="border border-slate-200 rounded-lg p-4 bg-white relative">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={phaseLines} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="c" type="number" domain={[0, 4.5]} tickCount={10} label={{ value: 'Carbono (%)', position: 'bottom' }} />
              <YAxis domain={[0, 1400]} tickCount={8} label={{ value: 'Temperatura (°C)', angle: -90, position: 'insideLeft' }} />
              
              {/* Linea A3 */}
              <Line dataKey="a3" type="linear" stroke="#ef4444" strokeWidth={2} dot={false} isAnimationActive={false} />
              {/* Linea Acm */}
              <Line dataKey="acm" type="linear" stroke="#f59e0b" strokeWidth={2} dot={false} isAnimationActive={false} />
              {/* Linea A1 (Eutectoide) */}
              <ReferenceLine y={727} stroke="#3b82f6" strokeWidth={2} label={{ value: 'A1 (727°C)', position: 'right', fill: '#3b82f6' }} />
              {/* Eutéctico */}
              <ReferenceLine y={1147} stroke="#8b5cf6" strokeWidth={2} segment={[{x: 2.14, y: 1147}, {x: 4.5, y: 1147}]} label={{ value: 'Eutéctico (1147°C)', position: 'top', fill: '#8b5cf6' }} />
              
              <ReferenceLine x={0.76} stroke="#94a3b8" strokeDasharray="3 3" label={{ value: 'Eutectoide 0.76%', position: 'bottom', fill: '#94a3b8' }} />
              <ReferenceLine x={2.14} stroke="#94a3b8" strokeDasharray="3 3" label={{ value: 'Max Sol. 2.14%', position: 'bottom', fill: '#94a3b8' }} />

              {/* Punto del usuario */}
              <ReferenceDot x={carbon} y={temp} r={6} fill="#ea580c" stroke="#fff" strokeWidth={2} />
              {/* Líneas guía del punto */}
              <ReferenceLine x={carbon} stroke="#fdba74" strokeDasharray="3 3" />
              <ReferenceLine y={temp} stroke="#fdba74" strokeDasharray="3 3" />
              
              {/* Textos estáticos de zonas */}
              <text x="15%" y="30%" fill="#94a3b8" fontWeight="bold" fontSize="14" textAnchor="middle">Austenita (γ)</text>
              <text x="10%" y="80%" fill="#94a3b8" fontWeight="bold" fontSize="14" textAnchor="middle">α + Fe3C</text>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};

// --- Main App Component ---

const TABS: TabProps[] = [
  { id: 'cycle', label: 'Ciclo Térmico', icon: <Activity size={18} /> },
  { id: 'grain', label: 'Tamaño de Grano', icon: <Layout size={18} /> },
  { id: 'ttt', label: 'Diagrama TTT', icon: <Maximize size={18} /> },
  { id: 'fec', label: 'Hierro-Carbono', icon: <Target size={18} /> },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<string>(TABS[0].id);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'cycle': return <ThermalCycleDiagram />;
      case 'grain': return <GrainSizeDiagram />;
      case 'ttt': return <TTTDiagram />;
      case 'fec': return <FeCDiagram />;
      default: return null;
    }
  };

  return (
    <LessonLayout>
      {/* Tab Navigation Menu (CSS Grid Only) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-slate-200 p-1 rounded-xl">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              grid grid-cols-[auto_auto] place-content-center items-center gap-2 
              py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-200
              ${activeTab === tab.id 
                ? 'bg-white text-blue-700 shadow-sm' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/50'}
            `}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1">
        {renderActiveTab()}
      </div>
    </LessonLayout>
  );
}