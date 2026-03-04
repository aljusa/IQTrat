import React, { useState } from 'react';
import { Layers, Box, Hexagon, Activity, Zap, Maximize, Grid as GridIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import DivCarousel from '../assets/DivCarousel';

// --- Tipos e Interfaces ---

type SectionId = 'intro' | 'unit-cell' | 'bcc' | 'bcc-fcc' | 'hcp' | 'grains' | 'properties';

interface LessonSection {
  id: SectionId;
  title: string;
  shortTitle: string;
  description: React.ReactNode;
  details: string[];
  icon: React.ReactNode;
}

// --- Datos del Contenido ---

const sections: LessonSection[] = [
  {
    id: 'intro',
    title: 'Estructura Cristalina',
    shortTitle: 'Estructura',
    description: (
      <DivCarousel>
        
          <p>Los metales no son materiales continuos y homogéneos a escala microscópica. Su comportamiento mecánico y térmico depende de cómo están organizados sus átomos en el espacio. Esta organización ordenada se conoce como estructura cristalina y constituye la base para comprender la respuesta de los metales a los tratamientos térmicos.</p>
          <p>En esta lección se analiza cómo la estructura cristalina influye directamente en las propiedades mecánicas y físicas de los materiales metálicos.</p>
             <p>La estructura cristalina es la disposición regular, ordenada y repetitiva de los átomos dentro de un metal. Esta organización no es aleatoria, sino que sigue un patrón geométrico definido que se repite en las tres dimensiones del espacio.</p>
          <p>La forma en que los átomos se acomodan determina la manera en que el metal se deforma, resiste esfuerzos y responde al calor.</p>
          <div><p><strong>Características clave:</strong></p>
          <ul>
            <li>Organización atómica tridimensional.</li>
            <li>Repetición periódica del arreglo atómico.</li>
            <li>Interacción definida entre átomos vecinos.</li>
          </ul></div>
          
        
      </DivCarousel>
    ),
    details: [
      'Los átomos se organizan en patrones tridimensionales periódicos.',
      'Define las propiedades fundamentales del material.',
      'La base de la ciencia de materiales moderna.'
    ],
    icon: <GridIcon size={18} />
  },
  {
    id: 'unit-cell',
    title: 'Celda Unitaria',
    shortTitle: 'Celda 3D',
    description: (
      <DivCarousel>
          <p>La celda unitaria es la porción más pequeña de la estructura cristalina que contiene toda la información geométrica del cristal. Al repetirse de manera continua en todas las direcciones, forma la red cristalina completa del metal.</p>
          <p>El estudio de la celda unitaria permite comparar diferentes estructuras cristalinas de forma clara y simplificada.</p>
          <div> <p><strong>Aspectos relevantes de la celda unitaria:</strong></p>
          <ul>
            <li>Representa la simetría del cristal.</li>
            <li>Define distancias y posiciones atómicas.</li>
            <li>Facilita la clasificación de estructuras cristalinas.</li>
          </ul></div>
          <p>La mayoría de los metales cristalizan en tres tipos de estructuras fundamentales. Cada una genera comportamientos mecánicos distintos debido a la forma en que los átomos se acomodan.</p>
      </DivCarousel>
    ),
    details: [
      'Representación simplificada de la simetría del cristal.',
      'Definida por parámetros de red (a, b, c) y ángulos.',
      'Contiene la información completa de la simetría.'
    ],
    icon: <Box size={18} />
  },
  {
    id: 'bcc',
    title: 'Cúbica Centrada en el Cuerpo (BCC)',
    shortTitle: 'BCC',
    description: (
      <DivCarousel>
             <p>En esta estructura, los átomos se ubican en los ocho vértices del cubo y uno en el centro. Esta disposición proporciona alta resistencia, pero limita la facilidad de deformación.</p>
          <p><strong>Características principales:</strong></p>
          <div><ul>
            <li>Alta resistencia mecánica.</li>
            <li>Menor ductilidad.</li>
            <li>Presente en el hierro a temperatura ambiente.</li>
          </ul></div>
          
      </DivCarousel>
    ),
    details: [
      'Número de coordinación: 8.',
      'Factor de empaquetamiento: 0.68.',
      'Ejemplos: Hierro alfa, Cromo, Tungsteno.'
    ],
    icon: <Maximize size={18} />
  },
  {
    id: 'bcc-fcc',
    title: 'Comparativa BCC vs FCC',
    shortTitle: 'BCC vs FCC',
    description:  (
      <DivCarousel>
          <p>Los átomos se localizan en los vértices del cubo y en el centro de cada una de sus caras. Esta estructura favorece el deslizamiento atómico, permitiendo grandes deformaciones.</p>
          <div>  <p><strong>Características principales:</strong></p>
          <ul>
            <li>Alta ductilidad.</li>
            <li>Excelente conformabilidad.</li>
            <li>Presente en aluminio, cobre y níquel.</li>
          </ul></div>
              </DivCarousel>
    ),
    details: [
      'FCC es más compacta (0.74) que BCC (0.68).',
      'FCC es generalmente más dúctil debido a más sistemas de deslizamiento.',
      'BCC es más resistente pero menos deformable a bajas temperaturas.'
    ],
    icon: <Layers size={18} />
  },
  {
    id: 'hcp',
    title: 'Hexagonal Compacta (HCP)',
    shortTitle: 'HCP',
    description: (
      <DivCarousel>    
          <p>Esta estructura presenta un empaquetamiento denso, pero con menos planos de deslizamiento disponibles. Como resultado, el material suele ser menos dúctil y presenta comportamiento direccional.</p>
          <div>  <p><strong>Características principales:</strong></p>
          <ul>
            <li>Menor ductilidad.</li>
            <li>Comportamiento anisotrópico.</li>
            <li>Presente en magnesio y titanio.</li>
          </ul></div>
        
      </DivCarousel>
    ),
    details: [
      'Factor de empaquetamiento: 0.74 (igual que FCC).',
      'Menos sistemas de deslizamiento, lo que implica menor ductilidad.',
      'Ejemplos: Magnesio, Titanio, Zinc.'
    ],
    icon: <Hexagon size={18} />
  },
  {
    id: 'grains',
    title: 'Dinámica de Granos',
    shortTitle: 'Granos (Dinámico)',
    description: (
      <DivCarousel>
     
          <p>En los metales reales, la estructura cristalina no es un solo cristal continuo, sino un conjunto de muchos cristales pequeños llamados granos. Las regiones donde se encuentran granos con distinta orientación se conocen como límites de grano.</p>
          <p>Estos límites influyen directamente en la resistencia mecánica y en la difusión atómica durante los tratamientos térmicos.</p>
          <div><p><strong>Efectos de los granos y límites de grano:</strong></p>
          <ul>
            <li>Incremento de la resistencia mecánica.</li>
            <li>Influencia en la difusión de átomos.</li>
            <li>Modificación mediante tratamientos térmicos.</li>
          </ul></div>
          
       
      </DivCarousel>
    ),
    details: [
      'Nucleación: Aparecen nuevos cristales.',
      'Crecimiento: Los cristales consumen la matriz deformada.',
      'Límites de grano: Regiones de alta energía entre cristales.'
    ],
    icon: <Activity size={18} />
  },
  {
    id: 'properties',
    title: 'Propiedades Mecánicas',
    shortTitle: 'Interactivo',
    description: (
      <DivCarousel>
       
       
          <p>La estructura cristalina condiciona cómo un metal responde al calentamiento y al enfriamiento. Determina qué transformaciones microestructurales son posibles y cómo cambian las propiedades mecánicas.</p>
          <p>Por ello, comprender la estructura cristalina es esencial para diseñar tratamientos térmicos efectivos.</p>
          <div> <p><strong>Relación con los tratamientos térmicos:</strong></p>
          <ul>
            <li>Influye en la deformación y resistencia.</li>
            <li>Controla la respuesta a la temperatura.</li>
            <li>Define las transformaciones microestructurales posibles.</li>
          </ul></div>
         
       
          
      </DivCarousel>
    ),
    details: [
      'Interactúa con el gráfico para ver el efecto del tratamiento.',
      'Recocido: Aumenta ductilidad, baja resistencia.',
      'Temple: Aumenta resistencia, baja ductilidad.'
    ],
    icon: <Zap size={18} />
  }
];

// --- Componentes Visuales (Diagramas) ---

const Atom = ({ cx, cy, r, color = "#3B82F6", opacity = 1 }: { cx: number, cy: number, r: number, color?: string, opacity?: number }) => (
  <circle cx={cx} cy={cy} r={r} fill={color} fillOpacity={opacity} stroke="#1E3A8A" strokeWidth="2" />
);

const CrystalLattice2D = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full bg-slate-50 rounded-lg border border-slate-200">
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="1" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#grid)" />
    {/* Matriz 5x5 de átomos */}
    {Array.from({ length: 5 }).map((_, row) =>
      Array.from({ length: 7 }).map((_, col) => (
        <Atom key={`${row}-${col}`} cx={50 + col * 50} cy={50 + row * 50} r={15} />
      ))
    )}
    <text x="200" y="280" textAnchor="middle" className="text-sm fill-slate-500 font-mono">Orden de Largo Alcance</text>
  </svg>
);

const UnitCell3D = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full bg-slate-50 rounded-lg border border-slate-200">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#f8fafc', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#e2e8f0', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    
    {/* Perspectiva simple */}
    <g transform="translate(130, 80)">
      {/* Aristas traseras */}
      <path d="M0 0 L80 -40 L200 -40 L120 0 Z" fill="none" stroke="#94a3b8" strokeDasharray="4" />
      <path d="M80 -40 L80 80" fill="none" stroke="#94a3b8" strokeDasharray="4" />
      <path d="M200 -40 L200 80" fill="none" stroke="#94a3b8" strokeDasharray="4" />

      {/* Cubo frontal */}
      <path d="M0 0 L120 0 L120 120 L0 120 Z" fill="url(#grad1)" stroke="#475569" strokeWidth="2" fillOpacity="0.5" />
      <path d="M0 0 L80 -40" fill="none" stroke="#475569" strokeWidth="2" />
      <path d="M120 0 L200 -40" fill="none" stroke="#475569" strokeWidth="2" />
      <path d="M120 120 L200 80" fill="none" stroke="#475569" strokeWidth="2" />
      <path d="M200 -40 L200 80 L120 120" fill="none" stroke="#475569" strokeWidth="2" />
      <path d="M80 -40 L200 -40" fill="none" stroke="#475569" strokeWidth="2" />
      <path d="M0 120 L80 80 L80 -40" fill="none" stroke="#94a3b8" strokeDasharray="4" />

      {/* Atomos vértices (visibles) */}
      <Atom cx={0} cy={0} r={10} color="#ef4444" />
      <Atom cx={120} cy={0} r={10} color="#ef4444" />
      <Atom cx={0} cy={120} r={10} color="#ef4444" />
      <Atom cx={120} cy={120} r={10} color="#ef4444" />
      <Atom cx={200} cy={80} r={10} color="#ef4444" />
      <Atom cx={200} cy={-40} r={10} color="#ef4444" />
      <Atom cx={80} cy={-40} r={10} color="#ef4444" opacity={0.5} /> {/* Trasero */}
    </g>
    <text x="200" y="270" textAnchor="middle" className="text-sm fill-slate-600">Simetría Cúbica Simple</text>
  </svg>
);

const BCCStructure = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full bg-slate-50 rounded-lg border border-slate-200">
     <g transform="translate(130, 80)">
        {/* Caras traseras */}
        <polygon points="50,-30 170,-30 170,90 50,90" fill="#e2e8f0" stroke="#cbd5e1" />
        
        {/* Átomos Traseros */}
        <Atom cx={50} cy={-30} r={12} color="#64748b" />
        <Atom cx={170} cy={-30} r={12} color="#64748b" />
        <Atom cx={50} cy={90} r={12} color="#64748b" />
        <Atom cx={170} cy={90} r={12} color="#64748b" />

        {/* Átomo Central (BCC) */}
        <line x1="0" y1="0" x2="85" y2="45" stroke="#94a3b8" strokeWidth="2" />
        <line x1="120" y1="0" x2="85" y2="45" stroke="#94a3b8" strokeWidth="2" />
        <line x1="0" y1="120" x2="85" y2="45" stroke="#94a3b8" strokeWidth="2" />
        <line x1="120" y1="120" x2="85" y2="45" stroke="#94a3b8" strokeWidth="2" />
        <Atom cx={85} cy={45} r={22} color="#22c55e" /> {/* Centro */}

        {/* Cara Frontal transparente */}
        <rect x="0" y="0" width="120" height="120" fill="none" stroke="#475569" strokeWidth="2" />
        
        {/* Átomos Frontales */}
        <Atom cx={0} cy={0} r={15} />
        <Atom cx={120} cy={0} r={15} />
        <Atom cx={0} cy={120} r={15} />
        <Atom cx={120} cy={120} r={15} />
    </g>
    <text x="200" y="280" textAnchor="middle" className="text-sm fill-slate-700 font-bold">Estructura BCC (Átomo Central)</text>
  </svg>
);

const CompareBCCFCC = () => (
  <div className="grid grid-cols-2 gap-2 h-full">
    <div className="relative border border-slate-200 bg-white rounded p-2 flex flex-col items-center">
        <h4 className="text-center font-bold text-blue-800 mb-2">BCC</h4>
        <svg viewBox="0 0 100 100" className="w-32 h-32">
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="#333" />
            <circle cx="20" cy="20" r="8" fill="#3B82F6" />
            <circle cx="80" cy="20" r="8" fill="#3B82F6" />
            <circle cx="20" cy="80" r="8" fill="#3B82F6" />
            <circle cx="80" cy="80" r="8" fill="#3B82F6" />
            <circle cx="50" cy="50" r="12" fill="#22c55e" />
        </svg>
        <div className="text-xs text-slate-600 mt-2 text-center">
            <p>Empaquetamiento: 0.68</p>
            <p>Menos compacto</p>
        </div>
    </div>
    <div className="relative border border-slate-200 bg-white rounded p-2 flex flex-col items-center">
        <h4 className="text-center font-bold text-purple-800 mb-2">FCC</h4>
        <svg viewBox="0 0 100 100" className="w-32 h-32">
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="#333" />
            <circle cx="20" cy="20" r="8" fill="#9333ea" />
            <circle cx="80" cy="20" r="8" fill="#9333ea" />
            <circle cx="20" cy="80" r="8" fill="#9333ea" />
            <circle cx="80" cy="80" r="8" fill="#9333ea" />
            
            {/* Centros de caras */}
            <circle cx="50" cy="20" r="8" fill="#d8b4fe" />
            <circle cx="50" cy="80" r="8" fill="#d8b4fe" />
            <circle cx="20" cy="50" r="8" fill="#d8b4fe" />
            <circle cx="80" cy="50" r="8" fill="#d8b4fe" />
            <circle cx="50" cy="50" r="10" fill="#d8b4fe" opacity={0.5} />
        </svg>
        <div className="text-xs text-slate-600 mt-2 text-center">
            <p>Empaquetamiento: 0.74</p>
            <p>Más compacto</p>
        </div>
    </div>
  </div>
);

const HCPStructure = () => (
    <svg viewBox="0 0 400 300" className="w-full h-full bg-slate-50 rounded-lg border border-slate-200">
        <g transform="translate(200, 150)">
            {/* Hexagono Base Inferior */}
            <g transform="translate(0, 60)">
                 <polygon points="0,50 43,25 43,-25 0,-50 -43,-25 -43,25" fill="none" stroke="#94a3b8" strokeWidth="2" transform="scale(1.5, 0.5)"/>
                 <Atom cx={0} cy={50 * 0.5} r={10} color="#f59e0b" />
                 <Atom cx={43 * 1.5} cy={25 * 0.5} r={10} color="#f59e0b" />
                 <Atom cx={-43 * 1.5} cy={25 * 0.5} r={10} color="#f59e0b" />
            </g>

            {/* Capa Intermedia (3 átomos) */}
            <g transform="translate(0, 0)">
                <polygon points="43,25 -43,25 0,-50" fill="none" stroke="#cbd5e1" transform="scale(0.8)"/>
                <Atom cx={0} cy={-20} r={12} color="#d97706" opacity={0.8} />
                <Atom cx={25} cy={15} r={12} color="#d97706" opacity={0.8} />
                <Atom cx={-25} cy={15} r={12} color="#d97706" opacity={0.8} />
            </g>

            {/* Hexagono Base Superior */}
            <g transform="translate(0, -60)">
                 <polygon points="0,50 43,25 43,-25 0,-50 -43,-25 -43,25" fill="rgba(252, 211, 77, 0.2)" stroke="#78350f" strokeWidth="2" transform="scale(1.5, 0.5)"/>
                 <Atom cx={0} cy={50 * 0.5} r={12} color="#f59e0b" />
                 <Atom cx={43 * 1.5} cy={25 * 0.5} r={12} color="#f59e0b" />
                 <Atom cx={43 * 1.5} cy={-25 * 0.5} r={12} color="#f59e0b" />
                 <Atom cx={0} cy={-50 * 0.5} r={12} color="#f59e0b" />
                 <Atom cx={-43 * 1.5} cy={-25 * 0.5} r={12} color="#f59e0b" />
                 <Atom cx={-43 * 1.5} cy={25 * 0.5} r={12} color="#f59e0b" />
                 {/* Centro */}
                 <Atom cx={0} cy={0} r={12} color="#f59e0b" /> 
            </g>
        </g>
        <text x="200" y="280" textAnchor="middle" className="text-sm fill-amber-800 font-bold">Estructura Hexagonal Compacta</text>
    </svg>
);

const GrainDynamics = () => {
    // Simulación simple de crecimiento con CSS
    return (
        <div className="w-full h-full bg-zinc-900 relative overflow-hidden rounded-lg border border-zinc-700 p-4">
            <style>
                {`
                    @keyframes grow {
                        0% { transform: scale(0.1); opacity: 0.5; }
                        50% { transform: scale(1.0); opacity: 0.8; }
                        100% { transform: scale(1.5); opacity: 1; }
                    }
                `}
            </style>
            <div className="absolute top-0 left-0 text-white p-2 z-10 bg-black/50 text-xs rounded">
                Simulación: Nucleación y Crecimiento
            </div>
            
            {/* Granos simulados */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full mix-blend-screen" 
                 style={{ animation: 'grow 4s infinite alternate ease-in-out' }}></div>
            
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-red-500 rounded-full mix-blend-screen" 
                 style={{ animation: 'grow 5s infinite alternate-reverse ease-in-out', animationDelay: '1s' }}></div>

            <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-green-500 rounded-full mix-blend-screen" 
                 style={{ animation: 'grow 6s infinite alternate ease-in-out', animationDelay: '0.5s' }}></div>
            
             <div className="absolute top-10 right-10 w-24 h-24 bg-purple-500 rounded-full mix-blend-screen" 
                 style={{ animation: 'grow 3s infinite alternate ease-in-out', animationDelay: '2s' }}></div>
        </div>
    );
};

const InteractiveProperties = () => {
    const [treatment, setTreatment] = useState<'Normal' | 'Recocido' | 'Temple'>('Normal');

    const dataBase = [
        { name: 'BCC (Fe)', Resistencia: 60, Ductilidad: 30 },
        { name: 'FCC (Al)', Resistencia: 30, Ductilidad: 80 },
        { name: 'HCP (Ti)', Resistencia: 80, Ductilidad: 20 },
    ];

    const getData = () => {
        if (treatment === 'Recocido') {
            return dataBase.map(d => ({ ...d, Resistencia: d.Resistencia * 0.7, Ductilidad: d.Ductilidad * 1.4 }));
        }
        if (treatment === 'Temple') {
            return dataBase.map(d => ({ ...d, Resistencia: d.Resistencia * 1.5, Ductilidad: d.Ductilidad * 0.4 }));
        }
        return dataBase;
    };

    return (
        <div className="flex flex-col h-full gap-4">
            <div className="flex justify-center gap-2 mb-2 bg-slate-100 p-2 rounded">
                {(['Normal', 'Recocido', 'Temple'] as const).map(t => (
                    <button
                        key={t}
                        onClick={() => setTreatment(t)}
                        className={`px-3 py-1 text-sm rounded transition-colors ${
                            treatment === t ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 border hover:bg-slate-50'
                        }`}
                    >
                        {t}
                    </button>
                ))}
            </div>
            <div className="flex-grow">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={getData()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" fontSize={12} />
                        <YAxis fontSize={12} />
                        <Tooltip cursor={{ fill: '#f1f5f9' }} />
                        <Legend />
                        <Bar dataKey="Resistencia" fill="#ef4444" name="Resistencia (MPa x10)" radius={[4, 4, 0, 0]} >
                            {getData().map(( index) => (
                                <Cell key={`cell-${index}`} fill={treatment === 'Temple' ? '#b91c1c' : '#ef4444'} />
                            ))}
                        </Bar>
                        <Bar dataKey="Ductilidad" fill="#3b82f6" name="Ductilidad (%)" radius={[4, 4, 0, 0]} >
                             {getData().map(( index) => (
                                <Cell key={`cell-${index}`} fill={treatment === 'Recocido' ? '#2563eb' : '#3b82f6'} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <p className="text-xs text-center text-slate-500 italic">
                *Valores normalizados para propósitos educativos.
            </p>
        </div>
    );
};

// --- Componentes Estructurales ---

const Header = () => (
    <header className="bg-slate-900 text-white p-6 shadow-md rounded-xl mb-4">
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-blue-400">Estructura cristalina de los metales</h1>
           
            </div>
        
        </div>
    </header>
);

const Tabs = ({ activeId, onChange }: { activeId: SectionId, onChange: (id: SectionId) => void }) => (
    <nav className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 mb-6">
        {sections.map((section) => (
            <button
                key={section.id}
                onClick={() => onChange(section.id)}
                className={`
                    flex flex-col items-center justify-center p-3 rounded-lg border text-sm font-medium transition-all duration-200
                    ${activeId === section.id 
                        ? 'bg-blue-600 border-blue-600 text-white shadow-lg scale-105' 
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-blue-300'}
                `}
            >
                <div className="mb-1">{section.icon}</div>
                <span className="text-xs text-center">{section.shortTitle}</span>
            </button>
        ))}
    </nav>
);

const Card = ({ children, title, className = "" }: { children: React.ReactNode, title?: string, className?: string }) => (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col ${className}`}>
        {title && (
            <div className="bg-slate-50 border-b border-slate-100 px-4 py-3">
                <h3 className="font-semibold text-slate-700 flex items-center gap-2">
                    {title}
                </h3>
            </div>
        )}
        <div className="p-5 flex-grow relative">
            {children}
        </div>
    </div>
);

const DiagramRender = ({ sectionId }: { sectionId: SectionId }) => {
    switch (sectionId) {
        case 'intro': return <CrystalLattice2D />;
        case 'unit-cell': return <UnitCell3D />;
        case 'bcc': return <BCCStructure />;
        case 'bcc-fcc': return <CompareBCCFCC />;
        case 'hcp': return <HCPStructure />;
        case 'grains': return <GrainDynamics />;
        case 'properties': return <InteractiveProperties />;
        default: return <div className="text-slate-400">Diagrama no disponible</div>;
    }
};

// --- Componente Principal ---

export default function App() {
    const [activeTab, setActiveTab] = useState<SectionId>('intro');
    const activeSection = sections.find(s => s.id === activeTab) || sections[0];

    return (
        <div className="min-h-screen bg-slate-100 p-4 md:p-8 font-sans text-slate-900">
            <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6">
                
                {/* Zona Superior */}
                <div className="col-span-1">
                    <Header />
                    <Tabs activeId={activeTab} onChange={setActiveTab} />
                </div>

                {/* Zona de Contenido Principal: CSS Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[500px]">
                    
                    {/* Panel de Información (Izquierda) */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        <Card title="" className="h-full">
                            <h2 className="text-xl font-bold text-slate-800 mb-2">{activeSection.title}</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {activeSection.description}
                            </p>
                            
                            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                                <h4 className="text-sm font-bold text-blue-800 mb-3 uppercase tracking-wider">Puntos Clave</h4>
                                <ul className="space-y-2">
                                    {activeSection.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-blue-900">
                                            <span className="mr-2 mt-1 block w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </div>

                    {/* Panel de Visualización (Derecha) */}
                    <div className="lg:col-span-8 flex flex-col h-full">
                        <Card title="" className="h-full bg-slate-50/50">
                            <div className="w-full h-[400px] lg:h-full min-h-[400px]">
                                <DiagramRender sectionId={activeTab} />
                            </div>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    );
}