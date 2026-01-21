import React, { useState } from 'react';
import DivCarousel from '../assets/DivCarousel';
import { 
  Thermometer, 
  Clock, 
  Snowflake, 
  Flame, 
  Hammer, 
  Search, 
  Activity, 
  Layers, 
  ArrowRight,
} from 'lucide-react';

// --- Tipos de Datos ---
type TabId = 
  | 'contexto' 
  | 'proceso' 
  | 'calentamiento' 
  | 'mantenimiento' 
  | 'enfriamiento' 
  | 'calor' 
  | 'comparativo' 
  | 'integrador';

interface TabConfig {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

// --- Componentes Auxiliares ---

// Componente para representar la estructura de granos (Microestructura)
const Microstructure = ({ scale = 1, agitation = 0, color = "#52525b" }: { scale?: number, agitation?: number, color?: string }) => {
  // Generamos algunos "granos" aleatorios pero deterministicos para la demo
  const grains = [
    { cx: 20, cy: 20, r: 15 }, { cx: 50, cy: 15, r: 12 }, { cx: 80, cy: 25, r: 18 },
    { cx: 15, cy: 50, r: 14 }, { cx: 45, cy: 50, r: 16 }, { cx: 75, cy: 55, r: 13 },
    { cx: 25, cy: 80, r: 15 }, { cx: 60, cy: 85, r: 17 }, { cx: 90, cy: 80, r: 10 },
  ];

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <defs>
        <pattern id="grainPattern" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M0 10L10 0M-2 2L2 -2M8 12L12 8" stroke={color} strokeWidth="0.5" opacity="0.5"/>
        </pattern>
      </defs>
      <rect x="0" y="0" width="100" height="100" fill="none" stroke={color} strokeWidth="2" />
      {grains.map((g, i) => (
        <circle 
          key={i} 
          cx={g.cx} 
          cy={g.cy} 
          r={g.r * scale} 
          fill="url(#grainPattern)" 
          stroke={color} 
          strokeWidth="1"
          style={{
            transition: 'all 0.5s ease',
            transformOrigin: `${g.cx}px ${g.cy}px`,
            animation: agitation > 0 ? `vibrate ${1.1 - agitation}s infinite` : 'none'
          }}
        />
      ))}
      <style>{`
        @keyframes vibrate {
          0% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-1px, 1px) scale(1.02); }
          50% { transform: translate(0, -1px) scale(1); }
          75% { transform: translate(1px, 1px) scale(0.98); }
          100% { transform: translate(0, 0) scale(1); }
        }
      `}</style>
    </svg>
  );
};

// --- Componentes de Paneles ---

const PanelContexto = () => (
  <div className="space-y-6 animate-in fade-in zoom-in duration-500">
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
      <h3 className="text-xl font-bold text-slate-800 mb-2">Introducción</h3>
      
        <DivCarousel>
             <div>
        Los <strong>tratamientos térmicos</strong> son una herramienta fundamental en la ingeniería de materiales, ya que mediante el control del <strong>calentamiento</strong> y <strong>enfriamiento</strong> permiten modificar la <strong>estructura interna</strong> de los metales para mejorar sus <strong>propiedades</strong>, sin cambiar su forma ni su composición química global.
         </div>
         <div>
        En esta lección se presenta una visión general de <strong>qué son los tratamientos térmicos</strong>, <strong>por qué se utilizan</strong> y<strong> cuáles son sus características principales</strong>, sentando las bases conceptuales para el estudio detallado de sus fundamentos y aplicaciones en las siguientes lecciones.
      </div>
        </DivCarousel>
      
      <div className="flex flex-col md:flex-row items-center justify-around gap-8">
        {/* Antes */}
        <div className="text-center group">
          <div className="w-40 h-40 bg-slate-200 rounded-lg border-4 border-slate-400 relative overflow-hidden flex items-center justify-center mb-3 transition-transform group-hover:scale-105">
            <Microstructure scale={1.2} color="#475569" />
            <div className="absolute inset-0 bg-slate-900/10 pointer-events-none"></div>
          </div>
          <span className="font-semibold text-slate-700">Antes del Tratamiento</span>
          <p className="text-xs text-slate-500">Grano grande, estructura blanda</p>
        </div>

        <ArrowRight className="w-10 h-10 text-blue-500 hidden md:block" />

        {/* Después */}
        <div className="text-center group">
          <div className="w-40 h-40 bg-slate-200 rounded-lg border-4 border-slate-400 relative overflow-hidden flex items-center justify-center mb-3 transition-transform group-hover:scale-105 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <Microstructure scale={0.6} color="#0f172a" />
          </div>
          <span className="font-semibold text-blue-700">Después del Tratamiento</span>
          <p className="text-xs text-slate-500">Grano fino, estructura dura</p>
        </div>
      </div>
      
      
    </div>
  </div>
);

const PanelProceso = () => (
  <div className="space-y-6 animate-in slide-in-from-right-10 duration-500">
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
      <h3 className="text-xl font-bold text-slate-800 mb-4">¿Qué se entiende por tratamiento térmico?</h3>
      <DivCarousel>
         <p>
        Un tratamiento térmico es un proceso industrial que consiste en <strong>calentar</strong> un material metálico hasta una temperatura determinada, <strong>mantenerlo</strong> durante un tiempo específico y posteriormente <strong>enfriarlo</strong> bajo condiciones controladas.
        </p>
        <p>El objetivo principal es <strong>modificar la microestructura</strong> del metal para obtener propiedades mecánicas y físicas deseadas, como mayor dureza, resistencia, ductilidad o estabilidad dimensional.</p>
        <div> <strong>Aspectos clave que lo definen:</strong>
        <ul>
          <li>No se busca fundir el material.</li>
          <li>La forma y dimensiones de la pieza se conservan.</li>
          <li>Los cambios ocurren a nivel interno, en la estructura del metal.</li>
        </ul></div>
       
     
      </DivCarousel>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Línea conectora (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-slate-200 -z-10 transform translate-y-1/2"></div>

        {/* Fase 1 */}
        <div className="flex flex-col items-center text-center bg-white p-4">
          <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center mb-4 border-4 border-white shadow-lg">
            <Flame className="w-10 h-10 text-red-500 animate-pulse" />
          </div>
          <h4 className="font-bold text-lg text-slate-800">1. Calentamiento</h4>
          <p className="text-sm text-slate-500 mt-2">Elevar la temperatura hasta el punto de austenización.</p>
        </div>

        {/* Fase 2 */}
        <div className="flex flex-col items-center text-center bg-white p-4">
          <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center mb-4 border-4 border-white shadow-lg">
            <Clock className="w-10 h-10 text-orange-500" />
          </div>
          <h4 className="font-bold text-lg text-slate-800">2. Mantenimiento</h4>
          <p className="text-sm text-slate-500 mt-2">Homogeneizar la temperatura en toda la pieza.</p>
        </div>

        {/* Fase 3 */}
        <div className="flex flex-col items-center text-center bg-white p-4">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-4 border-4 border-white shadow-lg">
            <Snowflake className="w-10 h-10 text-blue-500" />
          </div>
          <h4 className="font-bold text-lg text-slate-800">3. Enfriamiento</h4>
          <p className="text-sm text-slate-500 mt-2">Controlar la velocidad de bajada para fijar la estructura.</p>
        </div>
      </div>
    </div>
  </div>
);

const PanelCalentamiento = () => (
  <div className="space-y-6 animate-in fade-in duration-700">
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
      <h3 className="text-xl font-bold text-slate-800 mb-2">Elementos fundamentales de un tratamiento térmico</h3>
      <DivCarousel>
        <div><p>El material se <strong>eleva progresivamente</strong> hasta una <strong>temperatura previamente establecida</strong>, la cual depende del <strong>tipo de metal</strong> y del <strong>objetivo del tratamiento</strong>.</p>
        
        <ul>
          <li>El calentamiento debe ser <strong>controlado</strong>.</li>
          <li>Un calentamiento inadecuado puede generar <strong>tensiones internas</strong>.</li>
          <li>La temperatura <strong>define qué transformaciones</strong> internas pueden ocurrir.</li>
        </ul></div>
        
      </DivCarousel>
      
     <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-slate-100">
     

      <div className="relative h-64 w-full">
        {/* Etiquetas de Ejes */}
        <span className="absolute -left-24 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-semibold text-slate-500 tracking-wider">
          Temperatura (°C)
        </span>
        <span className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-xs font-semibold text-slate-500 tracking-wider">
          Tiempo (t)
        </span>

        {/* Contenedor Gráfico */}
        <div className="h-full w-full relative">
          
          {/* Grid de fondo (Líneas horizontales) */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-full h-px bg-slate-100 flex items-center">
                <span className="text-[10px]  -ml-6 w-4 text-right">
                  {850 - i * 25}
                </span>
              </div>
            ))}
          </div>

          {/* SVG Principal */}
          <svg 
            className="w-full h-full overflow-visible" 
            viewBox="0 0 300 200" 
            preserveAspectRatio="none"
          >
            <defs>
              {/* Gradiente para el relleno */}
              <linearGradient id="heatGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
              </linearGradient>
              
              {/* Filtro de brillo (Glow) */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Area bajo la curva (Relleno) */}
            <path 
              d="M 0 200 C 50 200, 120 50, 300 20 L 300 200 L 0 200 Z" 
              fill="url(#heatGradient)" 
              className="opacity-0 animate-[fadeIn_2s_ease-out_0.5s_forwards]"
            />

            {/* Línea de la curva (Animada) */}
            <path 
              d="M 0 200 C 50 200, 120 50, 300 20" 
              fill="none" 
              stroke="#ef4444" 
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="400"
              strokeDashoffset="400"
              filter="url(#glow)"
              className="animate-[draw_2.5s_cubic-bezier(0.4,0,0.2,1)_forwards]"
            />

            {/* Puntos de interés interactivos (Tooltips visuales) */}
            <g className="opacity-0 animate-[appear_0.5s_ease-out_2s_forwards]">
                {/* Punto Final */}
                <circle cx="300" cy="20" r="4" fill="white" stroke="#ef4444" strokeWidth="2" />
                {/* Etiqueta flotante */}
                <foreignObject x="220" y="25" width="100" height="50">
                    <div className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-1 rounded shadow-sm border border-red-100 text-center">
                        Máx. Energía
                    </div>
                </foreignObject>
            </g>
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes appear {
          to { opacity: 1; transform: translateY(0); }
          from { opacity: 0; transform: translateY(5px); }
        }
      `}</style>
    </div>
    </div>
  </div>
);

const PanelMantenimiento = () => (
  <div className="space-y-6 animate-in slide-in-from-bottom-5 duration-500">
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
      <h3 className="text-xl font-bold text-slate-800 mb-2">Mantenimiento Térmico</h3>
      <DivCarousel>
        <div>
        Una vez alcanzada la temperatura objetivo, el material se mantiene durante un <strong>tiempo determinado</strong> para permitir que los cambios internos ocurran de manera uniforme.
        <br /><br />
        <ul>
          <li>Asegura <strong>homogeneidad</strong> en toda la pieza.</li>
          <li>El tiempo <strong>depende del tamaño y del tipo de metal</strong>.</li>
          <li>Un mantenimiento <strong>insuficiente</strong> genera transformaciones <strong>incompletas</strong>.</li>
        </ul>
      </div>

      </DivCarousel>

    <div className="relative h-80 bg-slate-50 rounded-xl border border-slate-200 shadow-sm overflow-hidden font-sans">
 

  <div className="absolute inset-0 flex items-center justify-center pt-8 pr-4 pb-8 pl-10">
    <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
      <defs>
        {/* Gradiente para el área bajo la curva */}
        <linearGradient id="heatGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </linearGradient>
        
        {/* Patrón de cuadrícula */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="1" />
        </pattern>
        
        {/* Filtro de sombra para la línea */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Fondo de cuadrícula */}
      <rect x="0" y="0" width="400" height="180" fill="url(#grid)" />

      {/* Ejes */}
      <line x1="0" y1="180" x2="0" y2="0" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="0" y1="180" x2="400" y2="180" stroke="#94a3b8" strokeWidth="2" />
      
      {/* Etiquetas de Ejes */}
      <text x="-30" y="130" textAnchor="end" fontSize="10" fill="#64748b" style={{writingMode: "vertical-lr", textOrientation: "sideways"}}>Temperatura (°C)</text>
      <text x="390" y="195" textAnchor="end" fontSize="10" fill="#64748b">Tiempo (min)</text>

      {/* Ticks del eje Y */}
      <text x="-5" y="50" textAnchor="end" fontSize="9" fill="#94a3b8">850°</text>
      <text x="-5" y="180" textAnchor="end" fontSize="9" fill="#94a3b8">20°</text>

      {/* Área de Mantenimiento (Highlight) */}
      <rect x="80" y="20" width="170" height="160" fill="url(#heatGradient)" />
      <line x1="80" y1="50" x2="80" y2="180" stroke="#f97316" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
      <line x1="250" y1="50" x2="250" y2="180" stroke="#f97316" strokeWidth="1" strokeDasharray="4" opacity="0.5" />

      {/* La Curva Principal (Combinada y suavizada) 
          M 0 180 (Inicio) -> Q 40 180 80 50 (Calentamiento) -> L 250 50 (Meseta) -> Q 300 50 350 150 (Enfriamiento suave)
      */}
      <path 
        d="M 0 180 C 30 180, 50 50, 80 50 L 250 50 Q 300 50 350 120" 
        fill="none" 
        stroke="#f97316" 
        strokeWidth="3" 
        strokeLinecap="round"
        filter="url(#glow)"
      />

      {/* Etiqueta Flotante de la Fase */}
      <g transform="translate(165, 30)">
        <rect x="-60" y="-12" width="120" height="20" rx="10" fill="#fff" stroke="#fdba74" strokeWidth="1" />
        <text x="0" y="2" textAnchor="middle" fill="#c2410c" fontSize="10" fontWeight="bold">Austenización (Holding)</text>
      </g>

      {/* Visualización de la Estructura de Granos (Metáfora visual) */}
      <g transform="translate(0, 10)">
        {/* Inicio: Estructura mixta/caótica */}
        <g opacity="0.6">
            <circle cx="100" cy="140" r="6" fill="#fb923c" />
            <circle cx="92" cy="132" r="4" fill="#fb923c" />
            <circle cx="108" cy="135" r="3" fill="#fb923c" />
            <text x="100" y="160" textAnchor="middle" fontSize="8" fill="#64748b">Inicio</text>
        </g>
        
        {/* Medio: Transición */}
        <g opacity="0.8">
             <path d="M 125 140 L 145 140" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2" /> {/* Flecha conectora */}
        </g>

        {/* Fin: Estructura Homogénea (Uniforme) */}
        <g opacity="1">
            <circle cx="230" cy="140" r="8" fill="#f97316" />
            <circle cx="215" cy="140" r="8" fill="#f97316" />
            <circle cx="245" cy="140" r="8" fill="#f97316" />
            
            {/* Indicador de éxito */}
            <circle cx="260" cy="130" r="4" fill="#22c55e" stroke="white" strokeWidth="1"/>
            <path d="M 258 130 L 259 132 L 262 128" stroke="white" strokeWidth="1" fill="none"/>
            
            <text x="230" y="160" textAnchor="middle" fontSize="8" fill="#64748b" fontWeight="bold">Homogénea</text>
        </g>
      </g>
      
      {/* Indicador de tiempo */}
      <text x="165" y="100" textAnchor="middle" fill="#94a3b8" fontSize="9" fontStyle="italic">t = x min</text>

    </svg>
  </div>
</div>
    </div>
  </div>
);

const PanelEnfriamiento = () => (
  <div className="space-y-6 animate-in fade-in zoom-in duration-500">
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
      <h3 className="text-xl font-bold text-slate-800 mb-2">Enfriamiento</h3>
    <DivCarousel>
      <div>
        El enfriamiento se realiza bajo condiciones controladas y puede ser lento, moderado o rápido, utilizando distintos medios.
        <br /><br />
        <ul>
          <li><strong>Aire</strong>: enfriamiento <strong>lento</strong>.</li>
          <li><strong>Aceite</strong>: enfriamiento <strong>moderado</strong>.</li>
          <li><strong>Agua</strong>: enfriamiento <strong>rápido</strong>.</li>
        </ul>
        <br />
        La <strong>velocidad de enfriamiento</strong> influye directamente en la <strong>microestructura final</strong> y, por tanto, en las propiedades del metal.
      </div>
    </DivCarousel>

      <div className="h-72 w-full rounded-lg shadow-inner relative p-4 overflow-hidden">
        {/* Ejes Blancos */}
        <div className="absolute left-8 bottom-8 top-4 w-0.5 bg-slate-600"></div>
        <div className="absolute left-8 bottom-8 right-4 h-0.5 bg-slate-600"></div>
        <span className="absolute top-4 left-10 text-xs text-slate-400">Temp</span>
        <span className="absolute bottom-4 right-4 text-xs text-slate-400">Tiempo</span>
        <svg className="w-full h-full" viewBox="0 0 400 250" preserveAspectRatio="none">
      
      {/* 1. GRID (Cuadrícula tenue oscura) y TEMPERATURAS CRÍTICAS */}
      <defs>
        <pattern id="grid-light" width="40" height="40" patternUnits="userSpaceOnUse">
          
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-light)" />
      
      {/* Línea A1 (Temperatura eutectoide aprox) - Gris medio */}
      <line x1="40" y1="60" x2="400" y2="60" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
      <text x="45" y="55" fill="#64748b" fontSize="10" fontWeight="bold">A1 (727°C)</text>
      
      {/* Línea Ms (Inicio Martensita) - Gris medio */}
      <line x1="40" y1="200" x2="400" y2="200" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
      <text x="45" y="195" fill="#64748b" fontSize="10" fontWeight="bold">Ms (Inicio Martensita)</text>


      {/* 2. ZONA DE TRANSFORMACIÓN (La "Nariz" o Curva C) - Gris claro translúcido */}
      <path 
        d="M 150 60 Q 100 130 150 200 L 400 200 L 400 60 Z" 
        fill="rgba(203, 213, 225, 0.5)" 
        stroke="#cbd5e1"
        strokeWidth="2"
      />
      <text x="220" y="130" fill="#475569" fontSize="10" className="opacity-70 font-bold tracking-wide">ZONA DE TRANSFORMACIÓN</text>


      {/* 3. CURVAS DE ENFRIAMIENTO */}
      
      {/* Punto de partida (Austenitización) */}
      <circle cx="40" cy="30" r="5" fill="#dc2626" className="animate-pulse shadow-sm" stroke="white" strokeWidth="2"/>
      <text x="50" y="30" fill="#dc2626" fontSize="11" fontWeight="800">Austenita</text>

      {/* Rápido (Temple) - Azul vibrante */}
      <path 
        d="M 40 30 C 50 30, 60 220, 100 240" 
        fill="none" 
        stroke="#2563eb" 
        strokeWidth="3" 
        className="animate-[draw_2s_ease-out_forwards] drop-shadow-sm" 
        strokeDasharray="400" 
        strokeDashoffset="400"
      />
      <text x="60" y="230" fill="#2563eb" fontSize="11" fontWeight="bold" className="opacity-0 animate-[appear_0.5s_forwards_2s]">Temple</text>

      {/* Moderado (Normalizado) - Verde esmeralda */}
      <path 
        d="M 40 30 C 120 30, 140 220, 250 240" 
        fill="none" 
        stroke="#16a34a" 
        strokeWidth="3" 
        className="animate-[draw_3s_ease-out_forwards] drop-shadow-sm" 
        strokeDasharray="500" 
        strokeDashoffset="500"
      />
      <text x="180" y="180" fill="#16a34a" fontSize="11" fontWeight="bold" className="opacity-0 animate-[appear_0.5s_forwards_3s]">Normalizado</text>

      {/* Lento (Recocido) - Amarillo oscuro para contraste */}
      <path 
        d="M 40 30 C 200 30, 300 220, 390 220" 
        fill="none" 
        stroke="#ca8a04" 
        strokeWidth="3" 
        className="animate-[draw_4s_ease-out_forwards] drop-shadow-sm" 
        strokeDasharray="600" 
        strokeDashoffset="600"
      />
      {/* Usamos un amarillo más oscuro (ca8a04) para el texto sobre fondo blanco */}
      <text x="310" y="100" fill="#ca8a04" fontSize="11" fontWeight="bold" className="opacity-0 animate-[appear_0.5s_forwards_4s]">Recocido</text>

    </svg>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-sm">
        <div className="text-blue-600 font-semibold">Martensita (Duro)</div>
        <div className="text-green-600 font-semibold">Perlita Fina</div>
        <div className="text-yellow-600 font-semibold">Perlita Gruesa (Blando)</div>
      </div>
    </div>
  </div>
);

const PanelInteractivo = () => {
  const [temp, setTemp] = useState(0); // 0 a 100

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-2">Rol del calor en los materiales metálicos</h3>
        <DivCarousel>
           <div>
       El <strong>calor</strong> proporciona la <strong>energía necesaria</strong> para que los átomos del metal se <strong>muevan</strong> y se <strong>reorganicen</strong>.
        A determinadas temperaturas, los metales pueden experimentar transformaciones internas que modifican:
        <ul>
          <li>La disposición de los átomos.</li>
          <li>El tamaño y la forma de los granos cristalinos.</li>
          <li>La presencia y distribución de distintas fases internas.</li>
        </ul>
        Estos <strong>cambios estructurales</strong> son los responsables directos de las <strong>variaciones en las propiedades</strong> mecánicas y físicas del material.
      </div>
        </DivCarousel>

        <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Controles */}
            <div className="w-full md:w-1/3 bg-slate-50 p-6 rounded-lg border border-slate-200">
                <label className="block text-sm font-bold text-slate-700 mb-2">
                    Temperatura: {temp * 10}°C
                </label>
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={temp} 
                    onChange={(e) => setTemp(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                    <span>Frío</span>
                    <span>Caliente</span>
                </div>
                
                <div className="mt-6 text-sm text-slate-600">
                    <p className="font-semibold">Efecto:</p>
                    {temp < 30 && <p>Baja movilidad atómica. Estructura rígida.</p>}
                    {temp >= 30 && temp < 70 && <p className="text-orange-600">Aumento de vibración. Posibilidad de difusión.</p>}
                    {temp >= 70 && <p className="text-red-600 font-bold">Alta energía. Crecimiento de grano y cambio de fase.</p>}
                </div>
            </div>

            {/* Visualización */}
            <div className="w-full md:w-2/3 h-64 border-4 border-slate-800 rounded-lg bg-slate-900 relative overflow-hidden flex items-center justify-center">
                <div className="absolute top-2 right-2 text-white font-mono z-10">
                    Energía: {Math.floor(temp * 1.5)}%
                </div>
                
                {/* Matriz de "átomos" */}
                <div className="grid grid-cols-6 gap-2 p-4">
                    {Array.from({ length: 24 }).map((_, i) => (
                        <div 
                            key={i}
                            className={`rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.3)]`}
                            style={{
                                width: `${20 + (temp / 10)}px`,
                                height: `${20 + (temp / 10)}px`,
                                backgroundColor: `rgb(${50 + temp * 2}, ${50}, ${100 - temp})`,
                                transform: `scale(${1 + (temp/200)})`,
                                animation: `vibrateAtom ${1.1 - (temp / 100)}s infinite alternate ease-in-out`
                            }}
                        />
                    ))}
                </div>
                
                {/* CSS local para la animación dinámica */}
                <style>{`
                    @keyframes vibrateAtom {
                        0% { transform: translate(0, 0); }
                        100% { transform: translate(${temp/10}px, ${temp/10}px); }
                    }
                `}</style>
            </div>
        </div>
      </div>
    </div>
  );
};

const PanelComparativo = () => (
  <div className="space-y-6 animate-in slide-in-from-left-10 duration-500">
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
      <h3 className="text-xl font-bold text-slate-800 mb-6">Diferencia entre tratamientos térmicos y otros procesos</h3>
      <DivCarousel>
          <div>
        A diferencia de la conformación mecánica o el mecanizado, los tratamientos térmicos no alteran la geometría externa de la pieza.
        <br /><br />
        Además:
        <ul>
          <li>Su acción es <strong>interna</strong> y estructural.</li>
          <li>Son procesos <strong>complementarios</strong> a la fabricación.</li>
          <li>Se diferencian de los tratamientos termoquímicos, ya que <strong>no modifican</strong> intencionalmente la <strong>composición química</strong> del material.</li>
        </ul>
      </div>
      </DivCarousel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
        
        {/* Conformado */}
        <div className="p-4 text-center">
            <div className="flex justify-center mb-4">
                <div className="bg-slate-100 p-4 rounded-full">
                    <Hammer className="w-12 h-12 text-slate-600" />
                </div>
            </div>
            <h4 className="text-lg font-bold text-slate-700 mb-2">Procesos de Conformado</h4>
            <p className="text-sm text-slate-500 mb-4">(Forja, Laminado, Extrusión)</p>
            
            <ul className="text-left space-y-2 text-slate-600 text-sm bg-slate-50 p-4 rounded-lg">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-slate-400"/> Cambia la <strong>Forma Externa</strong>.</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-slate-400"/> Aplica fuerza mecánica.</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-slate-400"/> El objetivo es la geometría.</li>
            </ul>
        </div>

        {/* Térmico */}
        <div className="p-4 text-center">
            <div className="flex justify-center mb-4">
                <div className="bg-red-50 p-4 rounded-full">
                    <Layers className="w-12 h-12 text-red-600" />
                </div>
            </div>
            <h4 className="text-lg font-bold text-slate-700 mb-2">Tratamientos Térmicos</h4>
            <p className="text-sm text-slate-500 mb-4">(Temple, Recocido, Revenido)</p>
            
            <ul className="text-left space-y-2 text-slate-600 text-sm bg-red-50 p-4 rounded-lg">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-red-400"/> Cambia la <strong>Estructura Interna</strong>.</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-red-400"/> Aplica energía térmica.</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-red-400"/> El objetivo son las propiedades (Dureza/Tenacidad).</li>
            </ul>
        </div>
      </div>
    </div>
  </div>
);

const PanelIntegrador = () => (
  <div className="space-y-6 animate-in zoom-in duration-500">
    <div className=" p-8 rounded-xl shadow-xl ">
      <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <Activity className="w-8 h-8 text-green-400" />
        Cierre de la lección
      </h3>
      <DivCarousel>
         <div>
        Los tratamientos térmicos son procesos esenciales para el control de las propiedades de los metales en la ingeniería de materiales. Mediante el uso adecuado del calor, el tiempo y el enfriamiento, es posible adaptar un material a distintas exigencias técnicas e industriales.
        <br /><br />
        Esta lección ha introducido el concepto general, sus etapas fundamentales y su importancia como base para comprender los fenómenos físicos y microestructurales que se desarrollarán en las siguientes lecciones del módulo.
      </div>
      </DivCarousel>

      <div className="text-white grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Material Base", desc: "Estructura inicial", color: "bg-slate-700" },
          { label: "Calentamiento", desc: "Activación atómica", color: "bg-red-600" },
          { label: "Mantenimiento", desc: "Homogeneización", color: "bg-orange-600" },
          { label: "Enfriamiento", desc: "Fijación de propiedades", color: "bg-blue-600" },
        ].map((item, idx) => (
          <div key={idx} className={`${item.color} p-4 rounded-lg border border-white/10 hover:transform hover:-translate-y-1 transition-transform cursor-default`}>
            <div className="text-2xl font-bold opacity-20 mb-1">{idx + 1}</div>
            <h4 className="font-bold text-lg mb-1">{item.label}</h4>
            <p className="text-xs opacity-80">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-white/20 text-center">
        <p className="text-lg font-medium text-green-800">Resultado Final:</p>
        <p className="text-2xl font-bold mt-2">Propiedades Mecánicas Optimizadas</p>
      </div>
    </div>
  </div>
);

// --- Componente Principal ---

export default function Lesson1() {
  const [activeTab, setActiveTab] = useState<TabId>('contexto');

  const tabs: TabConfig[] = [
    { id: 'contexto', label: 'Contexto', icon: <Search className="w-4 h-4" /> },
    { id: 'proceso', label: 'Proceso', icon: <Activity className="w-4 h-4" /> },
    { id: 'calentamiento', label: 'Calentar', icon: <Flame className="w-4 h-4" /> },
    { id: 'mantenimiento', label: 'Mantener', icon: <Clock className="w-4 h-4" /> },
    { id: 'enfriamiento', label: 'Enfriar', icon: <Snowflake className="w-4 h-4" /> },
    { id: 'calor', label: 'Interactivo', icon: <Thermometer className="w-4 h-4" /> },
    { id: 'comparativo', label: 'Conformado', icon: <Hammer className="w-4 h-4" /> },
    { id: 'integrador', label: 'Resumen', icon: <Layers className="w-4 h-4" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'contexto': return <PanelContexto />;
      case 'proceso': return <PanelProceso />;
      case 'calentamiento': return <PanelCalentamiento />;
      case 'mantenimiento': return <PanelMantenimiento />;
      case 'enfriamiento': return <PanelEnfriamiento />;
      case 'calor': return <PanelInteractivo />;
      case 'comparativo': return <PanelComparativo />;
      case 'integrador': return <PanelIntegrador />;
      default: return <PanelContexto />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 pb-10">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
    <div className="max-w-7xl mx-auto p-4">
 <h1 className="text-2xl font-bold text-slate-800 mb-4 text-center">Introducción a los tratamientos térmicos</h1>
      {/* Navegación por Pestañas */}
    
          <nav className="grid grid-cols-8 gap-2" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex flex-col items-center justify-center p-3 rounded-md transition-all duration-200 text-sm font-medium
                  ${activeTab === tab.id
                     ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'}
                  
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        
      </div>
</header>
      {/* Área de Contenido Principal */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {renderContent()}
      </main>

    </div>
  );
}