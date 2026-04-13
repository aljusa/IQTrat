// --- COMPONENTES VISUALES (Diagramas SVG) ---

const GeneralScheme = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-md">
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
      </marker>
    </defs>
    {/* Central Piece */}
    <rect x="150" y="110" width="100" height="80" rx="8" fill="#94a3b8" stroke="#334155" strokeWidth="3" />
    <text x="200" y="155" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="16">PIEZA</text>
    
    {/* Nodes & Connections */}
    <g stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)">
      <line x1="200" y1="40" x2="200" y2="100" />
      <line x1="330" y1="150" x2="260" y2="150" />
      <line x1="200" y1="260" x2="200" y2="200" />
      <line x1="70" y1="150" x2="140" y2="150" />
      <line x1="90" y1="60" x2="140" y2="100" />
    </g>

    {/* Labels */}
    <g fontSize="14" fontWeight="600" fill="#1e293b" textAnchor="middle">
      <rect x="150" y="10" width="100" height="30" rx="5" fill="#bae6fd" />
      <text x="200" y="30">Gas (NH₃)</text>

      <rect x="310" y="135" width="85" height="30" rx="5" fill="#fcd34d" />
      <text x="352" y="155">Sales</text>

      <rect x="150" y="260" width="100" height="30" rx="5" fill="#c4b5fd" />
      <text x="200" y="280">Plasma</text>

      <rect x="5" y="135" width="85" height="30" rx="5" fill="#fca5a5" />
      <text x="47" y="155">Láser</text>

      <rect x="30" y="30" width="85" height="30" rx="5" fill="#a7f3d0" />
      <text x="72" y="50">Iones</text>
    </g>
  </svg>
);

const GasDiagram = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-md">
    {/* Furnace */}
    <rect x="50" y="40" width="300" height="220" rx="10" fill="#f1f5f9" stroke="#64748b" strokeWidth="4" />
    <text x="200" y="30" textAnchor="middle" fill="#475569" fontWeight="bold">Horno de Nitruración</text>
    
    {/* Heat indicators */}
    <path d="M 60 240 Q 80 220 100 240 T 140 240 T 180 240 T 220 240 T 260 240 T 300 240 T 340 240" fill="none" stroke="#ef4444" strokeWidth="3" opacity="0.5" />
    
    {/* Gas Input */}
    <path d="M 10 100 L 50 100" stroke="#0ea5e9" strokeWidth="8" />
    <text x="25" y="90" fontSize="14" fill="#0ea5e9" fontWeight="bold">NH₃</text>

    {/* Material */}
    <rect x="120" y="120" width="160" height="80" rx="4" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
    <text x="200" y="165" textAnchor="middle" fill="#1e293b" fontWeight="bold">Material</text>

    {/* Diffusion */}
    <g fill="#0284c7" fontSize="12" fontWeight="bold">
      <circle cx="100" cy="100" r="4" /> <text x="108" y="104">N</text>
      <circle cx="200" cy="80" r="4" /> <text x="208" y="84">N</text>
      <circle cx="280" cy="110" r="4" /> <text x="288" y="114">N</text>
      <circle cx="300" cy="180" r="4" /> <text x="308" y="184">N</text>
    </g>

    {/* Arrows pointing to surface */}
    <g stroke="#0284c7" strokeWidth="2" strokeDasharray="2,2">
      <line x1="110" y1="105" x2="130" y2="120" />
      <line x1="200" y1="90" x2="200" y2="115" />
      <line x1="280" y1="120" x2="270" y2="130" />
    </g>
    
    {/* Layer */}
    <rect x="120" y="120" width="160" height="10" fill="#0284c7" opacity="0.4" />
    <rect x="120" y="120" width="10" height="80" fill="#0284c7" opacity="0.4" />
    <rect x="270" y="120" width="10" height="80" fill="#0284c7" opacity="0.4" />
  </svg>
);

const SaltBathDiagram = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-md">
    {/* Crucible */}
    <path d="M 80 80 L 80 260 Q 80 280 100 280 L 300 280 Q 320 280 320 260 L 320 80" fill="none" stroke="#475569" strokeWidth="8" />
    
    {/* Liquid Salt */}
    <path d="M 84 120 Q 140 110 200 120 T 316 120 L 316 270 L 84 270 Z" fill="#fb923c" opacity="0.8" />
    <text x="200" y="260" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="14">Sales Fundidas (Cianuros/Cianatos)</text>

    {/* Material Submerged */}
    <rect x="160" y="140" width="80" height="80" fill="#94a3b8" stroke="#1e293b" strokeWidth="2" />
    <rect x="156" y="136" width="88" height="88" fill="none" stroke="#ea580c" strokeWidth="4" opacity="0.7" /> {/* Nitrided layer */}

    {/* Nitrogen Transfer */}
    <g stroke="#fff" strokeWidth="2" markerEnd="url(#arrow-white)">
      <defs>
        <marker id="arrow-white" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#fff" />
        </marker>
      </defs>
      <line x1="120" y1="180" x2="150" y2="180" />
      <line x1="280" y1="180" x2="250" y2="180" />
      <line x1="200" y1="230" x2="200" y2="225" />
    </g>
    <text x="135" y="175" fill="#fff" fontSize="12" fontWeight="bold">N</text>
    <text x="260" y="175" fill="#fff" fontSize="12" fontWeight="bold">N</text>
  </svg>
);

const PlasmaDiagram = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-md">
    {/* Vacuum Chamber */}
    <circle cx="200" cy="150" r="130" fill="#1e293b" stroke="#64748b" strokeWidth="6" />
    <text x="200" y="40" textAnchor="middle" fill="#64748b" fontWeight="bold" fontSize="12">Cámara de Vacío</text>

    {/* Glow / Plasma */}
    <defs>
      <radialGradient id="plasmaGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="200" cy="150" r="90" fill="url(#plasmaGlow)" />

    {/* Material */}
    <rect x="150" y="120" width="100" height="60" fill="#cbd5e1" stroke="#fff" strokeWidth="2" />
    <text x="200" y="155" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="14">Cátodo (-)</text>

    {/* Ions hitting surface */}
    <g fill="#c4b5fd" fontSize="16" fontWeight="bold">
      <text x="130" y="100">N⁺</text> <line x1="140" y1="105" x2="160" y2="120" stroke="#c4b5fd" strokeWidth="2" />
      <text x="250" y="90">N⁺</text> <line x1="250" y1="95" x2="230" y2="120" stroke="#c4b5fd" strokeWidth="2" />
      <text x="110" y="160">N⁺</text> <line x1="130" y1="155" x2="150" y2="150" stroke="#c4b5fd" strokeWidth="2" />
      <text x="270" y="170">N⁺</text> <line x1="270" y1="165" x2="250" y2="160" stroke="#c4b5fd" strokeWidth="2" />
    </g>

    {/* Voltage Source */}
    <rect x="30" y="240" width="80" height="40" rx="4" fill="#334155" />
    <text x="70" y="265" textAnchor="middle" fill="#fff" fontSize="12">Fuente CC</text>
  </svg>
);

const LaserDiagram = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-md">
    {/* Material Surface */}
    <rect x="50" y="200" width="300" height="80" fill="#94a3b8" />
    
    {/* Laser Emitter */}
    <polygon points="180,40 220,40 210,100 190,100" fill="#475569" />
    <rect x="170" y="20" width="60" height="20" fill="#334155" />
    <text x="200" y="15" textAnchor="middle" fill="#ef4444" fontWeight="bold" fontSize="14">Cabezal Láser</text>

    {/* Laser Beam */}
    <polygon points="195,100 205,100 215,200 185,200" fill="#ef4444" opacity="0.6" />
    
    {/* Localized Treated Zone */}
    <path d="M 170 200 Q 200 230 230 200" fill="#fca5a5" />
    <text x="260" y="230" fill="#991b1b" fontSize="12" fontWeight="bold">Capa tratada (≈1 µm)</text>
    <line x1="230" y1="210" x2="255" y2="225" stroke="#991b1b" strokeWidth="1" />

    {/* Nitrogen Atmosphere */}
    <text x="100" y="150" fill="#0284c7" fontSize="14" fontWeight="bold">Atmósfera de N₂</text>
    <circle cx="130" cy="160" r="3" fill="#0284c7" />
    <circle cx="270" cy="180" r="3" fill="#0284c7" />
    <circle cx="250" cy="130" r="3" fill="#0284c7" />
  </svg>
);

const IonDiagram = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-md">
    {/* Material */}
    <rect x="250" y="80" width="100" height="160" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
    
    {/* Accelerator / Source */}
    <rect x="20" y="130" width="80" height="60" rx="5" fill="#334155" />
    <text x="60" y="165" textAnchor="middle" fill="#fff" fontSize="12">Cañón de Iones</text>
    <polygon points="100,140 120,150 120,170 100,180" fill="#475569" />

    {/* Ion Beam */}
    <g fill="#10b981">
      <circle cx="130" cy="160" r="3" />
      <circle cx="150" cy="160" r="3" />
      <circle cx="170" cy="160" r="3" />
      <circle cx="190" cy="160" r="3" />
      <circle cx="210" cy="160" r="3" />
      <circle cx="230" cy="160" r="3" />
    </g>

    {/* Treated Layer (Very thin) */}
    <rect x="250" y="80" width="10" height="160" fill="#10b981" opacity="0.8" />
    
    {/* Explanatory texts */}
    <text x="290" y="110" fill="#065f46" fontSize="12" fontWeight="bold">Penetración atómica</text>
    <text x="290" y="125" fill="#065f46" fontSize="12" fontWeight="bold">controlada (≈1 µm)</text>
    <line x1="260" y1="160" x2="280" y2="120" stroke="#065f46" strokeWidth="1" />
  </svg>
);

const TechMapDiagram = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-md">
    {/* Axes */}
    <g stroke="#64748b" strokeWidth="3" markerEnd="url(#arrow)">
      {/* Y Axis: Precisión / Control */}
      <line x1="40" y1="260" x2="40" y2="40" />
      {/* X Axis: Complejidad */}
      <line x1="40" y1="260" x2="360" y2="260" />
    </g>
    <text x="15" y="150" transform="rotate(-90 15 150)" textAnchor="middle" fill="#334155" fontWeight="bold" fontSize="14">Precisión / Control</text>
    <text x="200" y="290" textAnchor="middle" fill="#334155" fontWeight="bold" fontSize="14">Complejidad Tecnológica</text>

    {/* Zones */}
    <rect x="42" y="150" width="150" height="108" fill="#f1f5f9" opacity="0.5" />
    <text x="110" y="200" fill="#94a3b8" fontSize="16" fontWeight="bold" textAnchor="middle">Tradicionales</text>
    
    <rect x="192" y="42" width="160" height="108" fill="#e0f2fe" opacity="0.5" />
    <text x="270" y="100" fill="#7dd3fc" fontSize="16" fontWeight="bold" textAnchor="middle">Avanzadas</text>

    {/* Data Points */}
    <g fontSize="12" fontWeight="bold">
      {/* Sales */}
      <circle cx="100" cy="220" r="8" fill="#fcd34d" />
      <text x="100" y="240" textAnchor="middle" fill="#d97706">Sales</text>
      
      {/* Gas */}
      <circle cx="140" cy="180" r="8" fill="#bae6fd" />
      <text x="140" y="170" textAnchor="middle" fill="#0284c7">Gas</text>

      {/* Plasma */}
      <circle cx="220" cy="140" r="8" fill="#c4b5fd" />
      <text x="220" y="130" textAnchor="middle" fill="#6d28d9">Plasma</text>

      {/* Laser */}
      <circle cx="280" cy="80" r="8" fill="#fca5a5" />
      <text x="280" y="70" textAnchor="middle" fill="#b91c1c">Láser</text>

      {/* Iones */}
      <circle cx="320" cy="50" r="8" fill="#a7f3d0" />
      <text x="320" y="40" textAnchor="middle" fill="#047857">Iones</text>
    </g>
  </svg>
);

const ComparisonTable = () => (
  <div className="overflow-x-auto w-full h-full flex items-center justify-center p-4">
    <table className="min-w-full bg-white border border-slate-200 shadow-sm rounded-lg overflow-hidden">
      <thead className="bg-slate-800 text-white">
        <tr>
          <th className="py-3 px-4 text-left">Tecnología</th>
          <th className="py-3 px-4 text-left">Nivel</th>
          <th className="py-3 px-4 text-left">Control</th>
          <th className="py-3 px-4 text-left">Complejidad</th>
        </tr>
      </thead>
      <tbody className="text-slate-700">
        <tr className="border-b border-slate-200 hover:bg-slate-50">
          <td className="py-3 px-4 font-semibold text-blue-600">Gas</td>
          <td className="py-3 px-4">Tradicional</td>
          <td className="py-3 px-4">Bajo/Medio</td>
          <td className="py-3 px-4">Baja</td>
        </tr>
        <tr className="border-b border-slate-200 hover:bg-slate-50">
          <td className="py-3 px-4 font-semibold text-orange-500">Sales</td>
          <td className="py-3 px-4">Tradicional</td>
          <td className="py-3 px-4">Bajo</td>
          <td className="py-3 px-4">Baja</td>
        </tr>
        <tr className="border-b border-slate-200 hover:bg-slate-50">
          <td className="py-3 px-4 font-semibold text-purple-600">Plasma</td>
          <td className="py-3 px-4">Avanzada</td>
          <td className="py-3 px-4">Alto</td>
          <td className="py-3 px-4">Media/Alta</td>
        </tr>
        <tr className="border-b border-slate-200 hover:bg-slate-50">
          <td className="py-3 px-4 font-semibold text-red-500">Láser</td>
          <td className="py-3 px-4">Avanzada</td>
          <td className="py-3 px-4">Muy Alto (Local)</td>
          <td className="py-3 px-4">Alta</td>
        </tr>
        <tr className="hover:bg-slate-50">
          <td className="py-3 px-4 font-semibold text-emerald-600">Iones</td>
          <td className="py-3 px-4">Avanzada</td>
          <td className="py-3 px-4">Atómico</td>
          <td className="py-3 px-4">Muy Alta</td>
        </tr>
      </tbody>
    </table>
  </div>
);


// --- DATOS DEL CONTENIDO ---

const courseData = [
  {
    id: "intro",
    title: "Introducción a las tecnologías de nitruración",
    explanation: "La nitruración puede llevarse a cabo mediante diversas tecnologías, cada una diseñada para satisfacer diferentes necesidades industriales. Estas variantes difieren en su mecanismo de incorporación de nitrógeno, nivel de control, velocidad del proceso y tipo de aplicación.",
    VisualComponent: GeneralScheme,
    bgColor: "bg-slate-50"
  },
  {
    id: "gas",
    title: "Nitruración gaseosa",
    explanation: "La nitruración gaseosa es una de las técnicas más tradicionales y utilizadas. Emplea amoníaco (NH₃) como fuente de nitrógeno, el cual se descompone térmicamente para generar nitrógeno activo que difunde en la superficie del material.\n\nSu principal ventaja es su amplio uso industrial y relativa simplicidad. Sin embargo, presenta limitaciones en el control preciso del potencial de nitrógeno, lo que puede afectar la uniformidad del tratamiento.",
    VisualComponent: GasDiagram,
    bgColor: "bg-blue-50"
  },
  {
    id: "sales",
    title: "Nitruración en sales líquidas",
    explanation: "Este proceso se realiza mediante la inmersión del material en baños de sales fundidas, generalmente compuestas por cianuros o cianatos, que liberan nitrógeno.\n\nSe caracteriza por ser un proceso rápido y eficiente en términos de tiempo. No obstante, presenta desventajas importantes como su alta toxicidad y un menor control sobre la calidad de la superficie obtenida.",
    VisualComponent: SaltBathDiagram,
    bgColor: "bg-orange-50"
  },
  {
    id: "plasma",
    title: "Nitruración por plasma (iónica)",
    explanation: "La nitruración por plasma utiliza descargas eléctricas en un entorno de vacío para ionizar el nitrógeno, generando especies altamente reactivas. Estas interactúan con la superficie del material, facilitando la difusión.\n\nEntre sus ventajas destacan:\n• Alto control del proceso\n• Excelente uniformidad de la capa\n• Activación superficial que elimina óxidos\n\nEsto la convierte en una de las tecnologías más avanzadas y precisas.",
    VisualComponent: PlasmaDiagram,
    bgColor: "bg-purple-50"
  },
  {
    id: "laser",
    title: "Nitruración por láser",
    explanation: "La nitruración por láser emplea radiación láser para calentar localmente la superficie del material en presencia de nitrógeno, promoviendo su incorporación.\n\nEste método permite generar capas muy delgadas (del orden de 1 µm) y es ideal para tratamientos localizados o zonas específicas de una pieza.",
    VisualComponent: LaserDiagram,
    bgColor: "bg-red-50"
  },
  {
    id: "iones",
    title: "Implantación iónica",
    explanation: "La implantación iónica introduce nitrógeno mediante haces de iones acelerados que impactan directamente la superficie del material.\n\nSe caracteriza por su alta precisión y control a nivel atómico, permitiendo modificar capas extremadamente finas (≈1 µm). Sin embargo, su principal limitación es el bajo espesor alcanzado.",
    VisualComponent: IonDiagram,
    bgColor: "bg-emerald-50"
  },
  {
    id: "comparacion",
    title: "Comparación general de tecnologías",
    explanation: "Las distintas tecnologías de nitruración pueden entenderse como un espectro que va desde métodos tradicionales hasta técnicas altamente avanzadas:\n\n• Procesos tradicionales: mayor volumen y menor control (gas, sales)\n• Procesos avanzados: mayor precisión y control (plasma, láser, iones)\n\nLa elección depende de factores como el tipo de material, el espesor requerido y la aplicación final.",
    VisualComponent: ComparisonTable,
    bgColor: "bg-slate-100"
  },
  {
    id: "cierre",
    title: "Diversidad tecnológica",
    explanation: "Las tecnologías de nitruración reflejan la evolución de la ingeniería de superficies hacia procesos más precisos y especializados. Desde métodos convencionales hasta técnicas de alta tecnología, cada opción ofrece ventajas específicas que permiten adaptarse a diferentes contextos industriales.",
    VisualComponent: TechMapDiagram,
    bgColor: "bg-slate-800",
    textColor: "text-slate-100"
  }
];

// --- COMPONENTE PRINCIPAL ---

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-slate-900 text-white py-12 px-6 shadow-md text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Ingeniería de Superficies
        </h1>
      
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8 space-y-12">
        {courseData.map((section, index) => {
          const isEven = index % 2 === 0;
          const Visual = section.VisualComponent;
          
          return (
            <section 
              key={section.id} 
              className={`rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row ${section.bgColor} ${section.textColor || 'text-slate-800'}`}
            >
              {/* Text Area */}
              <div className={`p-8 md:p-12 flex flex-col justify-center w-full md:w-1/2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
               
                <h2 className="text-3xl font-bold mb-6 leading-tight">
                  {section.title}
                </h2>
                <div className="text-lg leading-relaxed space-y-4 opacity-90 whitespace-pre-wrap">
                  {section.explanation}
                </div>
              </div>

              {/* Visual Area */}
              <div className={`w-full md:w-1/2 min-h-[300px] p-6 flex items-center justify-center bg-white/40 backdrop-blur-sm ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                <div className="w-full h-full max-w-md max-h-80 relative flex items-center justify-center">
                   <Visual />
                </div>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}