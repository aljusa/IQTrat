import React, { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, ReferenceArea, AreaChart, Area 
} from 'recharts';

// --- DEFINICIÓN DE TIPOS ---

type VisualType = 
  | 'intro' 
  | 'heating' 
  | 'maintenance' 
  | 'cooling' 
  | 'range_low' 
  | 'range_mid' 
  | 'range_high' 
  | 'time_influence' 
  | 'cooling_role' 
  | 'closure';

interface Section {
  id: number;
  tabTitle: string;
  title: string;
  description: string;
  visualType: VisualType;
}

// --- DATOS DE LA LECCIÓN ---

const lessonSections: Section[] = [
  {
    id: 0,
    tabTitle: "Introducción",
    title: "Introducción a los Parámetros del Revenido",
    description: "El revenido no es un proceso único e invariable; sus resultados dependen directamente del control de parámetros como la temperatura y el tiempo. Estos factores determinan la evolución de la microestructura y, por tanto, las propiedades mecánicas finales del acero.",
    visualType: 'intro'
  },
  {
    id: 1,
    tabTitle: "Etapa 1: Calentamiento",
    title: "Etapa 1: Calentamiento Controlado",
    description: "El proceso inicia con el calentamiento del acero previamente templado hasta una temperatura inferior al punto crítico. Este calentamiento debe ser controlado para evitar gradientes térmicos bruscos que puedan generar nuevas tensiones internas.",
    visualType: 'heating'
  },
  {
    id: 2,
    tabTitle: "Etapa 2: Mantenimiento",
    title: "Etapa 2: Mantenimiento a Temperatura",
    description: "Una vez alcanzada la temperatura deseada, el material se mantiene durante un tiempo determinado. En esta etapa ocurren transformaciones microestructurales que reducen tensiones y modifican las propiedades mecánicas.",
    visualType: 'maintenance'
  },
  {
    id: 3,
    tabTitle: "Etapa 3: Enfriamiento",
    title: "Etapa 3: Enfriamiento Controlado",
    description: "El proceso concluye con un enfriamiento generalmente al aire. A diferencia del temple, no se busca un enfriamiento brusco, sino una reducción gradual de la temperatura que preserve los cambios logrados durante el mantenimiento.",
    visualType: 'cooling'
  },
  {
    id: 4,
    tabTitle: "Rango Bajo",
    title: "Temperatura de Revenido: Rango Bajo",
    description: "En el rango de 150–250 °C, el acero mantiene una alta dureza con una ligera mejora en la tenacidad. Este rango se utiliza cuando se requiere resistencia al desgaste con mínima pérdida de dureza.",
    visualType: 'range_low'
  },
  {
    id: 5,
    tabTitle: "Rango Medio",
    title: "Temperatura de Revenido: Rango Medio",
    description: "Entre 250–450 °C se logra un equilibrio entre dureza y resistencia. Este rango es común en aplicaciones estructurales donde se requiere una combinación balanceada de propiedades mecánicas.",
    visualType: 'range_mid'
  },
  {
    id: 6,
    tabTitle: "Rango Alto",
    title: "Temperatura de Revenido: Rango Alto",
    description: "En el rango de 450–650 °C, el acero presenta una mayor tenacidad y menor dureza. Este tratamiento es adecuado para componentes que deben resistir impactos o cargas dinámicas.",
    visualType: 'range_high'
  },
  {
    id: 7,
    tabTitle: "Tiempo",
    title: "Influencia del Tiempo de Permanencia",
    description: "El tiempo de permanencia a la temperatura de revenido permite que las transformaciones microestructurales se desarrollen de manera uniforme. Un mayor tiempo favorece la homogeneidad y estabilidad del material, aunque con efectos decrecientes tras cierto punto.",
    visualType: 'time_influence'
  },
  {
    id: 8,
    tabTitle: "Rol del Enfriamiento",
    title: "Rol del Enfriamiento en el Revenido",
    description: "El enfriamiento en el revenido no busca endurecer el material, sino conservar los cambios logrados. Por ello, se realiza generalmente al aire, evitando la formación de nuevas estructuras frágiles.",
    visualType: 'cooling_role'
  },
  {
    id: 9,
    tabTitle: "Cierre",
    title: "Control de Propiedades Mecánicas",
    description: "El éxito del revenido radica en el control preciso de la temperatura y el tiempo, lo que permite diseñar las propiedades mecánicas del acero según su aplicación. Este proceso convierte al tratamiento térmico en una herramienta de ingeniería ajustable.",
    visualType: 'closure'
  }
];

// --- DATOS PARA GRÁFICOS (RECHARTS) ---

const processData = [
  { time: 0, temp: 25 },
  { time: 10, temp: 150 },
  { time: 20, temp: 400 },
  { time: 30, temp: 500 },
  { time: 40, temp: 500 },
  { time: 50, temp: 500 },
  { time: 60, temp: 500 },
  { time: 70, temp: 400 },
  { time: 80, temp: 250 },
  { time: 90, temp: 100 },
  { time: 100, temp: 25 }
];

const propertiesData = [
  { temp: 100, dureza: 95, tenacidad: 10 },
  { temp: 150, dureza: 92, tenacidad: 15 },
  { temp: 200, dureza: 88, tenacidad: 22 },
  { temp: 250, dureza: 82, tenacidad: 30 },
  { temp: 350, dureza: 70, tenacidad: 50 },
  { temp: 450, dureza: 55, tenacidad: 70 },
  { temp: 550, dureza: 40, tenacidad: 85 },
  { temp: 650, dureza: 25, tenacidad: 95 },
  { temp: 700, dureza: 20, tenacidad: 100 }
];

const coolingComparisonData = [
  { time: 0, airTemp: 500, quenchTemp: 500 },
  { time: 10, airTemp: 450, quenchTemp: 100 },
  { time: 20, airTemp: 400, quenchTemp: 25 },
  { time: 30, airTemp: 350, quenchTemp: 25 },
  { time: 50, airTemp: 250, quenchTemp: 25 },
  { time: 70, airTemp: 150, quenchTemp: 25 },
  { time: 100, airTemp: 25, quenchTemp: 25 }
];

// --- COMPONENTES BASE ---

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`grid bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

// --- COMPONENTE DE RENDERIZADO VISUAL ---

const DiagramRender: React.FC<{ type: VisualType }> = ({ type }) => {
  
  // Renderizado Condicional de Visualizaciones
  switch (type) {
    case 'intro':
    case 'closure':
      return (
        <div className="grid grid-rows-[auto_1fr] h-full gap-6 p-6">
          <div className="grid place-items-center">
            <h3 className="text-xl font-bold text-slate-800 text-center">Panel de Control de Propiedades</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Perillas (Inputs conceptuales) */}
            <div className="grid gap-6 p-6 bg-slate-50 rounded-lg border border-slate-200">
              <div className="grid gap-2">
                <span className="font-semibold text-slate-700 text-center">Temperatura (°C)</span>
                <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
                  <span className="text-sm text-slate-500">Baja</span>
                  <div className="h-4 bg-gradient-to-r from-blue-300 via-yellow-400 to-red-500 rounded-full w-full"></div>
                  <span className="text-sm text-slate-500">Alta</span>
                </div>
              </div>
              <div className="grid gap-2">
                <span className="font-semibold text-slate-700 text-center">Tiempo (t)</span>
                <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
                  <span className="text-sm text-slate-500">Corto</span>
                  <div className="h-4 bg-gradient-to-r from-slate-300 to-slate-600 rounded-full w-full"></div>
                  <span className="text-sm text-slate-500">Largo</span>
                </div>
              </div>
            </div>
            {/* Indicadores (Outputs) */}
            <div className="grid gap-4">
              <div className="grid grid-cols-[100px_1fr] gap-4 items-center">
                <span className="font-bold text-slate-700">Dureza</span>
                <div className="h-6 bg-slate-200 rounded-md overflow-hidden grid">
                  <div className="bg-indigo-600 h-full w-[60%] transition-all duration-500"></div>
                </div>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4 items-center">
                <span className="font-bold text-slate-700">Tenacidad</span>
                <div className="h-6 bg-slate-200 rounded-md overflow-hidden grid">
                  <div className="bg-emerald-500 h-full w-[70%] transition-all duration-500"></div>
                </div>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4 items-center">
                <span className="font-bold text-slate-700">Resistencia</span>
                <div className="h-6 bg-slate-200 rounded-md overflow-hidden grid">
                  <div className="bg-amber-500 h-full w-[80%] transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'heating':
    case 'maintenance':
    case 'cooling':
      return (
        <div className="grid grid-rows-[auto_1fr] h-full p-4 min-h-[400px]">
          <h3 className="text-lg font-bold text-center text-slate-800 mb-4">Curva Temperatura-Tiempo</h3>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={processData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <defs>
                <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="time" label={{ value: 'Tiempo', position: 'insideBottom', offset: -10 }} />
              <YAxis label={{ value: 'Temperatura (°C)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              
              {/* Resaltado Dinámico según la etapa */}
              {type === 'heating' && <ReferenceArea x1={0} x2={30} fill="#fef08a" fillOpacity={0.4} />}
              {type === 'maintenance' && <ReferenceArea x1={30} x2={60} fill="#bfdbfe" fillOpacity={0.4} />}
              {type === 'cooling' && <ReferenceArea x1={60} x2={100} fill="#bbf7d0" fillOpacity={0.4} />}
              
              <Area type="monotone" dataKey="temp" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorTemp)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      );

    case 'range_low':
    case 'range_mid':
    case 'range_high':
      return (
        <div className="grid grid-rows-[auto_1fr] h-full p-4 min-h-[400px]">
          <h3 className="text-lg font-bold text-center text-slate-800 mb-4">Propiedades vs Temperatura de Revenido</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={propertiesData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="temp" label={{ value: 'Temperatura de Revenido (°C)', position: 'insideBottom', offset: -10 }} />
              <YAxis domain={[0, 100]} label={{ value: 'Nivel Relativo (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              
              {/* Zonas de Temperatura Resaltadas */}
              {type === 'range_low' && <ReferenceArea x1={150} x2={250} fill="#bfdbfe" fillOpacity={0.5} />}
              {type === 'range_mid' && <ReferenceArea x1={250} x2={450} fill="#fef08a" fillOpacity={0.5} />}
              {type === 'range_high' && <ReferenceArea x1={450} x2={650} fill="#fecaca" fillOpacity={0.5} />}
              
              <Line type="monotone" dataKey="dureza" name="Dureza" stroke="#4f46e5" strokeWidth={3} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="tenacidad" name="Tenacidad" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );

    case 'cooling_role':
      return (
        <div className="grid grid-rows-[auto_1fr] h-full p-4 min-h-[400px]">
          <h3 className="text-lg font-bold text-center text-slate-800 mb-4">Comparativa de Velocidad de Enfriamiento</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={coolingComparisonData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="time" label={{ value: 'Tiempo', position: 'insideBottom', offset: -10 }} />
              <YAxis label={{ value: 'Temperatura (°C)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Line type="monotone" dataKey="airTemp" name="Enfriamiento al Aire (Revenido)" stroke="#3b82f6" strokeWidth={3} strokeDasharray="5 5" />
              <Line type="monotone" dataKey="quenchTemp" name="Enfriamiento Rápido (Temple)" stroke="#ef4444" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );

    case 'time_influence':
     const getT1Color = (i:number) => {
    const colors = ['bg-rose-500', 'bg-orange-500', 'bg-amber-400', 'bg-yellow-300'];
    return colors[(i * 7) % colors.length]; // Patrón pseudoaleatorio
  };

  return (
    <div className="flex flex-col h-full p-8 gap-10 bg-slate-50 rounded-3xl">
      {/* Encabezado */}
      <div className="space-y-2 text-center">
        <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight">
          Homogeneización a través del Tiempo
        </h3>
        <p className="text-slate-500 text-sm font-medium">
          Evolución de un sistema inestable hacia el equilibrio
        </p>
      </div>

      {/* Contenedor Principal (Responsivo + Flechas) */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 place-items-center w-full max-w-5xl mx-auto">
        
        {/* Tiempo 1 */}
        <figure className="flex flex-col gap-5 w-full">
          <div className="grid grid-cols-4 grid-rows-4 gap-2 w-full aspect-square p-3 bg-white rounded-2xl shadow-sm border border-slate-200 transition-transform hover:scale-105 duration-300">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={`t1-${i}`} className={`rounded-md shadow-inner ${getT1Color(i)}`}></div>
            ))}
          </div>
          <figcaption className="flex flex-col items-center gap-2">
            <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs font-bold rounded-full tracking-wide">
              t1 : INICIO
            </span>
            <span className="text-center text-sm font-medium text-slate-600 leading-tight">
              Tensiones e Inestabilidad
            </span>
          </figcaption>
        </figure>

        {/* Flecha Indicadora 1 (Oculta en móviles) */}
        <div className="hidden md:flex text-slate-300">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>

        {/* Tiempo 2 */}
        <figure className="flex flex-col gap-5 w-full">
          <div className="grid grid-cols-4 grid-rows-4 gap-2 w-full aspect-square p-3 bg-white rounded-2xl shadow-sm border border-slate-200 transition-transform hover:scale-105 duration-300">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={`t2-${i}`} className={`rounded-md shadow-inner transition-colors duration-700 ${i % 3 === 0 ? 'bg-orange-400' : 'bg-orange-300'}`}></div>
            ))}
          </div>
          <figcaption className="flex flex-col items-center gap-2">
            <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full tracking-wide">
              t2 : MEDIO
            </span>
            <span className="text-center text-sm font-medium text-slate-600 leading-tight">
              Proceso de Transformación
            </span>
          </figcaption>
        </figure>

        {/* Flecha Indicadora 2 (Oculta en móviles) */}
        <div className="hidden md:flex text-slate-300">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>

        {/* Tiempo 3 */}
        <figure className="flex flex-col gap-5 w-full">
          <div className="grid grid-cols-4 grid-rows-4 gap-2 w-full aspect-square p-3 bg-white rounded-2xl shadow-sm border border-slate-200 transition-transform hover:scale-105 duration-300">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={`t3-${i}`} className="rounded-md shadow-inner bg-orange-300 transition-colors duration-700"></div>
            ))}
          </div>
          <figcaption className="flex flex-col items-center gap-2">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full tracking-wide">
              t3 : FINAL
            </span>
            <span className="text-center text-sm font-medium text-slate-600 leading-tight">
              Homogeneidad Estable
            </span>
          </figcaption>
        </figure>

      </div>
    </div>
  );

    default:
      return null;
  }
};

// --- COMPONENTE PRINCIPAL (LAYOUT DE LA LECCIÓN) ---

export default function LessonLayout() {
  const [activeSectionId, setActiveSectionId] = useState<number>(0);
  
  const activeSection = lessonSections.find(s => s.id === activeSectionId) || lessonSections[0];

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen bg-slate-100 text-slate-900 font-sans">
      
      {/* HEADER Y NAVEGACIÓN (Sistema de Pestañas Grid) */}
      <header className="grid gap-4 p-4 md:p-6 bg-slate-900 text-white shadow-md z-10">
        <div className="grid grid-cols-1">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-center md:text-left">
            Proceso y Parámetros del Revenido
          </h1>
         
        </div>
        
        {/* Pestañas de Navegación Exclusiva usando Grid */}
        <nav className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 mt-4">
          {lessonSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSectionId(section.id)}
              className={`
                grid place-items-center text-xs md:text-sm font-semibold p-2 md:p-3 rounded-t-lg border-b-4 transition-all
                ${activeSectionId === section.id 
                  ? 'bg-slate-800 border-indigo-500 text-indigo-300' 
                  : 'bg-slate-900 border-transparent text-slate-400 hover:bg-slate-800 hover:text-slate-200'}
              `}
            >
              {section.tabTitle}
            </button>
          ))}
        </nav>
      </header>

      {/* ÁREA DE CONTENIDO PRINCIPAL (CSS Grid, sin Flexbox) */}
      <main className="grid p-4 md:p-8 gap-6 grid-cols-1 lg:grid-cols-12 items-start">
        
        {/* PANEL IZQUIERDO: TEXTO DE LA SECCIÓN */}
        <div className="grid lg:col-span-4 gap-6 content-start">
          <Card className="p-6 md:p-8 grid gap-4">
            <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-200 pb-4">
              {activeSection.title}
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              {activeSection.description}
            </p>
            
            
          </Card>
        </div>

        {/* PANEL DERECHO: RENDERIZADO VISUAL/DIAGRAMA */}
        <div className="grid lg:col-span-8 h-[500px] lg:h-[600px]">
          <Card className="h-full">
            <DiagramRender type={activeSection.visualType} />
          </Card>
        </div>

      </main>
    </div>
  );
}
