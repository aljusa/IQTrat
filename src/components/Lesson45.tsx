import React, { useState } from 'react';
import { BookOpen, Atom, ArrowRight, Activity, Thermometer, GitCommit, Layers, Settings, ChevronRight } from 'lucide-react';

// Componente principal de la lección
export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900">
      {/* Header */}
      <header className="bg-slate-900 text-white py-12 px-6 sm:px-12 shadow-md">
        <div className="max-w-5xl mx-auto">
       
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Reacciones químicas en la <span className="text-blue-400">carburización</span>
          </h1>
      
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-12 px-6 sm:px-12 space-y-16">
        
        {/* Concept 1 */}
        <ConceptCard 
          icon={<Thermometer className="w-6 h-6" />}
          title="1. Introducción al papel de las reacciones químicas"
          explanation="El proceso de carburización depende directamente de las reacciones químicas que ocurren tanto en la atmósfera del horno como en la superficie del material. Estas reacciones generan el carbono activo necesario para enriquecer la superficie del acero."
          visual={<VisualFurnace />}
          visualDescription="Esquema del horno de carburización con interacción atmósfera-metal."
        />

        {/* Concept 2 */}
        <ConceptCard 
          icon={<Atom className="w-6 h-6" />}
          title="2. Descomposición del monóxido de carbono"
          explanation={
            <>
              Una de las reacciones más importantes es la descomposición del monóxido de carbono:<br/>
              <span className="block my-3 text-center text-xl font-mono bg-slate-100 py-2 rounded-lg text-slate-700">
                2CO &rarr; C + CO<sub>2</sub>
              </span>
              En esta reacción, el CO se descompone en carbono sólido (activo) y dióxido de carbono. El carbono liberado se deposita en la superficie del metal, iniciando el proceso de enriquecimiento.
            </>
          }
          visual={<VisualCODecomp />}
          visualDescription="Diagrama molecular: transformación del CO en Carbono y CO₂."
        />

        {/* Concept 3 */}
        <ConceptCard 
          icon={<Atom className="w-6 h-6" />}
          title="3. Descomposición del metano"
          explanation={
            <>
              Otra fuente de carbono es el metano, cuya descomposición se expresa como:<br/>
              <span className="block my-3 text-center text-xl font-mono bg-slate-100 py-2 rounded-lg text-slate-700">
                CH<sub>4</sub> &rarr; C + 2H<sub>2</sub>
              </span>
              El metano libera carbono activo y genera hidrógeno como subproducto. Este carbono también contribuye al enriquecimiento superficial del material.
            </>
          }
          visual={<VisualCH4Decomp />}
          visualDescription="Representación de la molécula de CH₄ liberando Carbono activo."
        />

        {/* Concept 4 */}
        <ConceptCard 
          icon={<Activity className="w-6 h-6" />}
          title="4. Reacciones de equilibrio gas-superficie"
          explanation={
            <>
              Las reacciones de carburización no son unidireccionales, sino que establecen equilibrios dinámicos, como:<br/>
              <span className="block my-3 text-center text-xl font-mono bg-slate-100 py-2 rounded-lg text-slate-700">
                CO + H<sub>2</sub> &harr; C + H<sub>2</sub>O
              </span>
              Este equilibrio regula la cantidad de carbono disponible en la superficie. Dependiendo de las condiciones del horno, la reacción puede favorecer la formación o la eliminación de carbono.
            </>
          }
          visual={<VisualEquilibrium />}
          visualDescription="Esquema de equilibrio químico bidireccional de los gases."
        />

        {/* Concept 5 */}
        <ConceptCard 
          icon={<ArrowRight className="w-6 h-6" />}
          title="5. Generación de carbono activo"
          explanation="Las reacciones anteriores producen carbono en estado activo, es decir, disponible para ser absorbido por la superficie del acero. Este carbono no permanece como depósito superficial, sino que interactúa con la red cristalina del material."
          visual={<VisualActiveCarbon />}
          visualDescription="Átomos de carbono adhiriéndose e incorporándose a la red metálica."
        />

        {/* Concept 6 */}
        <ConceptCard 
          icon={<Activity className="w-6 h-6" />}
          title="6. Potencial de carburización"
          explanation="El potencial de carbono es un parámetro clave que define la capacidad de la atmósfera para transferir carbono al material. Depende de la composición de gases como CO, CO₂, CH₄ y H₂O. Un potencial alto favorece la absorción de carbono, mientras que uno bajo puede incluso provocar descarburización."
          visual={<VisualPotentialGraph />}
          visualDescription="Relación entre la mezcla de gases y el potencial de carbono."
        />

        {/* Concept 7 */}
        <ConceptCard 
          icon={<GitCommit className="w-6 h-6" />}
          title="7. Disolución del carbono en la austenita"
          explanation="Una vez en la superficie, el carbono se disuelve en la austenita (fase del acero a alta temperatura). Esta fase tiene una estructura que permite alojar átomos de carbono en solución sólida intersticial."
          visual={<VisualAustenite />}
          visualDescription="Modelo cúbico centrado en las caras (FCC) con carbono intersticial."
        />

        {/* Concept 8 */}
        <ConceptCard 
          icon={<Layers className="w-6 h-6" />}
          title="8. Difusión del carbono en el material"
          explanation="El carbono disuelto se desplaza hacia el interior del material debido a un gradiente de concentración (mayor en la superficie, menor en el núcleo). Este proceso determina la profundidad de la capa carburizada."
          visual={<VisualDiffusion />}
          visualDescription="Perfil de concentración descendente desde la superficie."
        />

        {/* Concept 9 */}
        <ConceptCard 
          icon={<Layers className="w-6 h-6" />}
          title="9. Formación de carburos y soluciones sólidas"
          explanation="Durante y después del proceso, el carbono puede permanecer en solución sólida en la austenita o formar carburos (compuestos duros entre carbono y metales). Estas transformaciones influyen directamente en la dureza final del material."
          visual={<VisualCarbides />}
          visualDescription="Solución sólida (difuso) vs Formación de carburos (precipitados)."
        />

        {/* Concept 10 */}
        <ConceptCard 
          icon={<Settings className="w-6 h-6" />}
          title="10. Importancia del control químico en la carburización"
          explanation="El control de las reacciones químicas permite regular la cantidad, profundidad y uniformidad del carbono incorporado. Esto asegura que el tratamiento produzca las propiedades mecánicas deseadas sin defectos."
          visual={<VisualControl />}
          visualDescription="Ajuste de variables para un perfil de carbono perfecto."
        />

      </main>
    </div>
  );
}

// ==========================================
// Componentes de la Interfaz (UI)
// ==========================================

function ConceptCard({ title, explanation, visual, icon, visualDescription }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row transition-all hover:shadow-md">
      {/* Text Content */}
      <div className="p-8 md:w-1/2 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100">
        <div className="flex items-center gap-3 text-blue-600 mb-4">
          <div className="bg-blue-50 p-2 rounded-lg">
            {icon}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 leading-tight">{title}</h2>
        </div>
        <div className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {explanation}
        </div>
      </div>
      
      {/* Visual Content */}
      <div className="md:w-1/2 bg-slate-50 p-8 flex flex-col items-center justify-center relative min-h-[300px]">
        <div className="w-full h-full flex items-center justify-center">
          {visual}
        </div>
        {visualDescription && (
          <p className="mt-4 text-xs text-slate-400 text-center uppercase tracking-wide font-semibold">
            {visualDescription}
          </p>
        )}
      </div>
    </div>
  );
}

// ==========================================
// Componentes Visuales (Diagramas SVG)
// ==========================================

const VisualFurnace = () => (
  <svg viewBox="0 0 200 150" className="w-full max-w-sm drop-shadow-sm">
    <rect x="20" y="10" width="160" height="130" rx="5" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="5,5" />
    <text x="100" y="30" fontSize="12" fill="#ef4444" textAnchor="middle" fontWeight="bold">Horno (Atmósfera Reactiva)</text>
    
    {/* Gas particles */}
    <circle cx="50" cy="50" r="4" fill="#3b82f6" />
    <text x="50" y="65" fontSize="10" fill="#64748b" textAnchor="middle">CO</text>
    
    <circle cx="150" cy="60" r="4" fill="#3b82f6" />
    <text x="150" y="75" fontSize="10" fill="#64748b" textAnchor="middle">CH₄</text>
    
    {/* Metal */}
    <rect x="40" y="100" width="120" height="40" fill="#94a3b8" rx="2" />
    <text x="100" y="125" fontSize="12" fill="#ffffff" textAnchor="middle" fontWeight="bold">Pieza de Acero</text>
    
    {/* Arrows */}
    <path d="M 50 75 L 60 95" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowhead)" />
    <path d="M 150 85 L 140 95" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowhead)" />
    
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
      </marker>
    </defs>
  </svg>
);

const VisualCODecomp = () => (
  <svg viewBox="0 0 200 100" className="w-full max-w-sm">
    {/* Left Side: 2 CO */}
    <g transform="translate(30, 50)">
      <circle cx="-15" cy="-15" r="10" fill="#1e293b" /> {/* C */}
      <circle cx="5" cy="-15" r="10" fill="#ef4444" />  {/* O */}
      <circle cx="-15" cy="15" r="10" fill="#1e293b" /> {/* C */}
      <circle cx="5" cy="15" r="10" fill="#ef4444" />  {/* O */}
      <text x="-5" y="40" fontSize="10" fill="#64748b" textAnchor="middle">2 Monóxido de Carbono</text>
    </g>

    {/* Arrow */}
    <path d="M 70 50 L 100 50" stroke="#94a3b8" strokeWidth="3" markerEnd="url(#arrow-gray)" />

    {/* Right Side: C + CO2 */}
    <g transform="translate(140, 50)">
      {/* Carbon on surface */}
      <rect x="-15" y="10" width="30" height="15" fill="#94a3b8" rx="2" />
      <circle cx="0" cy="5" r="10" fill="#1e293b" /> {/* C solid */}
      <text x="0" y="40" fontSize="10" fill="#64748b" textAnchor="middle">Carbono Activo</text>
      
      {/* CO2 gas */}
      <circle cx="45" cy="-15" r="10" fill="#ef4444" /> {/* O */}
      <circle cx="60" cy="-15" r="10" fill="#1e293b" /> {/* C */}
      <circle cx="75" cy="-15" r="10" fill="#ef4444" /> {/* O */}
      <text x="60" y="10" fontSize="10" fill="#64748b" textAnchor="middle">CO₂</text>
    </g>

    <defs>
      <marker id="arrow-gray" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
      </marker>
    </defs>
  </svg>
);

const VisualCH4Decomp = () => (
  <svg viewBox="0 0 200 100" className="w-full max-w-sm">
    {/* Left Side: CH4 */}
    <g transform="translate(40, 50)">
      <circle cx="0" cy="0" r="12" fill="#1e293b" /> {/* C */}
      <circle cx="-18" cy="-18" r="6" fill="#cbd5e1" /> {/* H */}
      <circle cx="18" cy="-18" r="6" fill="#cbd5e1" /> {/* H */}
      <circle cx="-18" cy="18" r="6" fill="#cbd5e1" /> {/* H */}
      <circle cx="18" cy="18" r="6" fill="#cbd5e1" /> {/* H */}
      <line x1="-10" y1="-10" x2="-2" y2="-2" stroke="#94a3b8" strokeWidth="2" />
      <line x1="10" y1="-10" x2="2" y2="-2" stroke="#94a3b8" strokeWidth="2" />
      <line x1="-10" y1="10" x2="-2" y2="2" stroke="#94a3b8" strokeWidth="2" />
      <line x1="10" y1="10" x2="2" y2="2" stroke="#94a3b8" strokeWidth="2" />
      <text x="0" y="40" fontSize="10" fill="#64748b" textAnchor="middle">Metano (CH₄)</text>
    </g>

    {/* Arrow */}
    <path d="M 80 50 L 110 50" stroke="#94a3b8" strokeWidth="3" markerEnd="url(#arrow-gray)" />

    {/* Right Side: C + 2H2 */}
    <g transform="translate(150, 50)">
      <rect x="-15" y="10" width="30" height="15" fill="#94a3b8" rx="2" />
      <circle cx="0" cy="5" r="10" fill="#1e293b" /> {/* C solid */}
      
      {/* H2 molecules */}
      <circle cx="35" cy="-20" r="6" fill="#cbd5e1" />
      <circle cx="45" cy="-20" r="6" fill="#cbd5e1" />
      <circle cx="35" cy="0" r="6" fill="#cbd5e1" />
      <circle cx="45" cy="0" r="6" fill="#cbd5e1" />
      <text x="0" y="40" fontSize="10" fill="#64748b" textAnchor="middle">C + 2H₂</text>
    </g>
  </svg>
);

const VisualEquilibrium = () => (
  <svg viewBox="0 0 200 100" className="w-full max-w-sm">
    <rect x="10" y="20" width="70" height="60" rx="8" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2" />
    <text x="45" y="50" fontSize="14" fill="#0369a1" textAnchor="middle" fontWeight="bold">CO + H₂</text>
    <text x="45" y="65" fontSize="10" fill="#0369a1" textAnchor="middle">(Gases)</text>

    {/* Bidirectional Arrow */}
    <path d="M 90 45 L 110 45" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arrow-right)" />
    <path d="M 110 55 L 90 55" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arrow-left)" />

    <rect x="120" y="20" width="70" height="60" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
    <text x="155" y="50" fontSize="14" fill="#b45309" textAnchor="middle" fontWeight="bold">C + H₂O</text>
    <text x="155" y="65" fontSize="10" fill="#b45309" textAnchor="middle">(Activo + Gas)</text>

    <defs>
      <marker id="arrow-right" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
        <polygon points="0 0, 6 2, 0 4" fill="#1e293b" />
      </marker>
      <marker id="arrow-left" markerWidth="6" markerHeight="4" refX="1" refY="2" orient="auto">
        <polygon points="6 0, 0 2, 6 4" fill="#1e293b" />
      </marker>
    </defs>
  </svg>
);

const VisualActiveCarbon = () => (
  <svg viewBox="0 0 200 120" className="w-full max-w-sm">
    {/* Metal Grid */}
    <g fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1">
      {[0, 1, 2, 3, 4, 5, 6].map(i => 
        [0, 1, 2].map(j => (
          <circle key={`fe-${i}-${j}`} cx={30 + i * 25} cy={100 - j * 20} r="8" />
        ))
      )}
    </g>
    
    {/* Active Carbon coming in */}
    <g fill="#1e293b">
      <circle cx="80" cy="30" r="5" />
      <circle cx="105" cy="50" r="5" />
      <circle cx="155" cy="20" r="5" />
      {/* Absorbed carbon */}
      <circle cx="42" cy="90" r="4" fill="#f59e0b" />
      <circle cx="92" cy="70" r="4" fill="#f59e0b" />
      <circle cx="142" cy="90" r="4" fill="#f59e0b" />
    </g>
    
    {/* Trajectories */}
    <path d="M 80 35 Q 85 50 90 65" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,3" fill="none" markerEnd="url(#arrow-small)"/>
    <path d="M 105 55 Q 115 70 140 85" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,3" fill="none" markerEnd="url(#arrow-small)"/>
    
    <defs>
      <marker id="arrow-small" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
        <polygon points="0 0, 4 2, 0 4" fill="#f59e0b" />
      </marker>
    </defs>
  </svg>
);

const VisualPotentialGraph = () => (
  <svg viewBox="0 0 200 140" className="w-full max-w-sm">
    {/* Axes */}
    <line x1="30" y1="110" x2="180" y2="110" stroke="#64748b" strokeWidth="2" />
    <line x1="30" y1="20" x2="30" y2="110" stroke="#64748b" strokeWidth="2" />
    <text x="105" y="130" fontSize="10" fill="#64748b" textAnchor="middle">Relación de Gases Activos (CO/CH₄)</text>
    <text x="15" y="65" fontSize="10" fill="#64748b" textAnchor="middle" transform="rotate(-90, 15, 65)">Potencial de C (%)</text>
    
    {/* Graph Curve */}
    <path d="M 30 110 Q 100 90 170 30" fill="none" stroke="#2563eb" strokeWidth="3" />
    
    {/* Descarburización zone */}
    <rect x="31" y="90" width="40" height="19" fill="#fca5a5" opacity="0.3" />
    <text x="50" y="105" fontSize="8" fill="#ef4444" textAnchor="middle">Descarb.</text>
    
    {/* Carburización zone */}
    <rect x="120" y="20" width="50" height="90" fill="#86efac" opacity="0.3" />
    <text x="145" y="70" fontSize="8" fill="#16a34a" textAnchor="middle">Absorción</text>
  </svg>
);

const VisualAustenite = () => (
  <svg viewBox="0 0 200 160" className="w-full max-w-sm">
    <g transform="translate(50, 40)">
      {/* Cube edges */}
      <path d="M 0 0 L 60 0 L 100 30 L 40 30 Z" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
      <path d="M 0 60 L 60 60 L 100 90 L 40 90 Z" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
      <path d="M 0 0 L 0 60" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
      <path d="M 60 0 L 60 60" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
      <path d="M 100 30 L 100 90" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
      <path d="M 40 30 L 40 90" fill="none" stroke="#94a3b8" strokeWidth="1.5" />

      {/* Iron atoms (corners & face centers) */}
      <g fill="#cbd5e1" stroke="#64748b" strokeWidth="1">
        {/* Back face */}
        <circle cx="40" cy="30" r="6" /> <circle cx="100" cy="30" r="6" />
        <circle cx="40" cy="90" r="6" /> <circle cx="100" cy="90" r="6" />
        <circle cx="70" cy="60" r="6" /> {/* face center */}
        
        {/* Front face */}
        <circle cx="0" cy="0" r="6" /> <circle cx="60" cy="0" r="6" />
        <circle cx="0" cy="60" r="6" /> <circle cx="60" cy="60" r="6" />
        <circle cx="30" cy="30" r="6" /> {/* face center */}
        
        {/* Side/Top face centers */}
        <circle cx="50" cy="15" r="6" />
        <circle cx="50" cy="75" r="6" />
        <circle cx="20" cy="45" r="6" />
        <circle cx="80" cy="45" r="6" />
      </g>
      
      {/* Carbon atom (interstitial) */}
      <circle cx="50" cy="45" r="4" fill="#1e293b" />
      <line x1="50" y1="45" x2="80" y2="10" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2,2"/>
      <text x="85" y="5" fontSize="10" fill="#f59e0b" fontWeight="bold">Carbono intersticial</text>
    </g>
  </svg>
);
const VisualDiffusion = () => (
  <svg viewBox="0 0 200 140" className="w-full max-w-sm">
    <defs>
      <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="50%" stopColor="#94a3b8" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
    </defs>

    <rect x="40" y="20" width="140" height="90" fill="url(#metalGrad)" opacity="0.2" rx="4" />

    {/* Axes */}
    <line x1="40" y1="110" x2="180" y2="110" stroke="#64748b" strokeWidth="2" />
    <line x1="40" y1="20" x2="40" y2="110" stroke="#64748b" strokeWidth="2" />

    <text x="110" y="130" fontSize="10" fill="#64748b" textAnchor="middle">
      Profundidad en el material
    </text>
    <text
      x="25"
      y="65"
      fontSize="10"
      fill="#64748b"
      textAnchor="middle"
      transform="rotate(-90, 25, 65)"
    >
      % Carbono
    </text>
    <text x="45" y="15" fontSize="8" fill="#1e293b" fontWeight="bold">
      Superficie
    </text>
    <text x="165" y="15" fontSize="8" fill="#64748b" fontWeight="bold">
      Núcleo
    </text>

    {/* ✅ Curva corregida: nunca baja de y=110 */}
    <path
      d="M 40 30 Q 80 45 120 80 T 180 110"
      fill="none"
      stroke="#f59e0b"
      strokeWidth="3"
    />

    {/* Carbon rich area */}
    <rect x="40" y="20" width="60" height="90" fill="url(#metalGrad)" opacity="0.4" />
  </svg>
);

const VisualCarbides = () => (
  <svg viewBox="0 0 200 120" className="w-full max-w-sm">
    {/* Split view */}
    <rect x="10" y="10" width="85" height="85" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
    <rect x="105" y="10" width="85" height="85" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
    
    <text x="52" y="115" fontSize="10" fill="#64748b" textAnchor="middle">Solución Sólida</text>
    <text x="147" y="115" fontSize="10" fill="#64748b" textAnchor="middle">Carburos Precipitados</text>

    {/* Left: Solid Solution (small dots) */}
    <g transform="translate(10, 10)">
      <rect width="85" height="85" fill="#e2e8f0" rx="4" />
      {[...Array(30)].map((_, i) => (
        <circle key={`ss-${i}`} cx={10 + (i % 6) * 13} cy={10 + Math.floor(i / 6) * 15} r="1.5" fill="#1e293b" />
      ))}
    </g>

    {/* Right: Carbides (large blobs/polygons) */}
    <g transform="translate(105, 10)">
      <rect width="85" height="85" fill="#e2e8f0" rx="4" />
      <polygon points="20,20 30,15 35,25 25,30" fill="#0f172a" />
      <polygon points="60,30 70,25 75,40 55,45" fill="#0f172a" />
      <polygon points="25,60 40,55 45,70 30,75" fill="#0f172a" />
      <polygon points="70,65 80,60 75,75 65,70" fill="#0f172a" />
      
      <circle cx="50" cy="20" r="1.5" fill="#1e293b" opacity="0.5" />
      <circle cx="20" cy="45" r="1.5" fill="#1e293b" opacity="0.5" />
    </g>
  </svg>
);

const VisualControl = () => (
  <svg viewBox="0 0 200 140" className="w-full max-w-sm">
    {/* Inputs */}
    <rect x="10" y="20" width="50" height="20" rx="4" fill="#bae6fd" />
    <text x="35" y="33" fontSize="8" fill="#0284c7" textAnchor="middle" fontWeight="bold">Gases</text>
    
    <rect x="10" y="50" width="50" height="20" rx="4" fill="#fecaca" />
    <text x="35" y="63" fontSize="8" fill="#b91c1c" textAnchor="middle" fontWeight="bold">Temp.</text>
    
    <rect x="10" y="80" width="50" height="20" rx="4" fill="#fef08a" />
    <text x="35" y="93" fontSize="8" fill="#a16207" textAnchor="middle" fontWeight="bold">Tiempo</text>

    {/* Process Box */}
    <rect x="80" y="30" width="40" height="60" rx="8" fill="#64748b" />
    <circle cx="100" cy="60" r="10" fill="#94a3b8" />
    <circle cx="100" cy="60" r="4" fill="#334155" />
    <text x="100" y="25" fontSize="8" fill="#64748b" textAnchor="middle" fontWeight="bold">Proceso</text>

    {/* Arrows */}
    <line x1="60" y1="30" x2="75" y2="45" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-control)"/>
    <line x1="60" y1="60" x2="75" y2="60" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-control)"/>
    <line x1="60" y1="90" x2="75" y2="75" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-control)"/>

    {/* Output Target */}
    <line x1="120" y1="60" x2="145" y2="60" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-success)"/>
    
    <rect x="150" y="40" width="40" height="40" rx="4" fill="#d1fae5" stroke="#10b981" strokeWidth="2"/>
    <path d="M 155 70 Q 165 50 185 45" fill="none" stroke="#059669" strokeWidth="2" />
    <text x="170" y="90" fontSize="8" fill="#059669" textAnchor="middle" fontWeight="bold">Perfil Ideal</text>

    <defs>
      <marker id="arrow-control" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
        <polygon points="0 0, 6 2, 0 4" fill="#94a3b8" />
      </marker>
      <marker id="arrow-success" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
        <polygon points="0 0, 6 2, 0 4" fill="#10b981" />
      </marker>
    </defs>
  </svg>
);