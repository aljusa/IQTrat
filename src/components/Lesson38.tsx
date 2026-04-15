import React from 'react';
import { Settings, PenTool, Shield, Zap, ArrowRight, CheckCircle2, AlertTriangle, Activity } from 'lucide-react';

// --- Visual Components ---

const DiagramaIntroduccion = () => (
  <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-4 bg-slate-50 rounded-xl border border-slate-200">
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 relative rounded-lg overflow-hidden border-2 border-slate-400 shadow-md">
        <div className="absolute top-0 w-full h-1/3 bg-blue-600 flex items-center justify-center border-b-2 border-slate-800">
          <span className="text-white text-xs font-bold">Capa Nitrurada</span>
        </div>
        <div className="absolute bottom-0 w-full h-2/3 bg-slate-300 flex items-center justify-center">
          <span className="text-slate-600 text-xs font-semibold">Material Ideal</span>
        </div>
      </div>
      <p className="mt-3 text-sm font-medium text-slate-700">Alta Respuesta</p>
    </div>

    <div className="hidden md:block w-px h-24 bg-slate-300"></div>

    <div className="flex flex-col items-center">
      <div className="w-32 h-32 relative rounded-lg overflow-hidden border-2 border-slate-400 shadow-md">
        <div className="absolute top-0 w-full h-1/6 bg-blue-300 flex items-center justify-center border-b border-slate-400 border-dashed">
          <span className="text-slate-800 text-xs font-bold">Capa Pobre</span>
        </div>
        <div className="absolute bottom-0 w-full h-5/6 bg-slate-200 flex items-center justify-center">
          <span className="text-slate-500 text-xs font-semibold">Material No Apto</span>
        </div>
      </div>
      <p className="mt-3 text-sm font-medium text-slate-700">Baja Respuesta</p>
    </div>
  </div>
);

const DiagramaAceros = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {[
      { title: 'Aceros al Carbono', icon: Activity, desc: 'Estructuras generales', color: 'bg-emerald-100 text-emerald-700 border-emerald-300' },
      { title: 'Aceros Aleados', icon: Settings, desc: 'Engranajes, cigüeñales', color: 'bg-blue-100 text-blue-700 border-blue-300' },
      { title: 'Para Herramientas', icon: PenTool, desc: 'Moldes, troqueles', color: 'bg-indigo-100 text-indigo-700 border-indigo-300' },
      { title: 'Aceros Inoxidables', icon: Shield, desc: 'Válvulas (condiciones esp.)', color: 'bg-purple-100 text-purple-700 border-purple-300' },
    ].map((acero, idx) => (
      <div key={idx} className={`p-4 rounded-lg border ${acero.color} flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow`}>
        <acero.icon className="w-8 h-8 mb-2 opacity-80" />
        <h4 className="font-bold text-sm mb-1">{acero.title}</h4>
        <p className="text-xs opacity-90">{acero.desc}</p>
      </div>
    ))}
  </div>
);

const DiagramaAleacion = () => (
  <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col items-center">
    <svg viewBox="0 0 300 200" className="w-full max-w-sm" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }}>
      {/* Matriz de Hierro */}
      {[...Array(5)].map((_, i) =>
        [...Array(4)].map((_, j) => (
          <circle key={`fe-${i}-${j}`} cx={40 + i * 55} cy={40 + j * 45} r="14" fill="#475569" />
        ))
      )}
      
      {/* Elementos de Aleación (Al, Cr, Mo) */}
      <circle cx={95} cy={85} r="16" fill="#3b82f6" />
      <text x={95} y={89} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Cr</text>
      
      <circle cx={205} cy={130} r="16" fill="#10b981" />
      <text x={205} y={134} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Al</text>
      
      <circle cx={150} cy={40} r="16" fill="#8b5cf6" />
      <text x={150} y={44} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Mo</text>

      {/* Nitrógeno y Enlaces */}
      <circle cx={95} cy={60} r="6" fill="#fbbf24" />
      <line x1={95} y1={66} x2={95} y2={69} stroke="#fbbf24" strokeWidth="2" />
      
      <circle cx={190} cy={110} r="6" fill="#fbbf24" />
      <line x1={190} y1={116} x2={195} y2={120} stroke="#fbbf24" strokeWidth="2" />

      <circle cx={165} cy={25} r="6" fill="#fbbf24" />
      <line x1={160} y1={30} x2={155} y2={35} stroke="#fbbf24" strokeWidth="2" />
    </svg>
    <div className="mt-4 flex gap-4 text-xs font-medium text-slate-300">
      <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-slate-600 inline-block"></span> Fe (Matriz)</div>
      <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-blue-500 inline-block"></span> Aleantes</div>
      <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span> Nitrógeno</div>
    </div>
  </div>
);

const DiagramaCarbono = () => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
    <h4 className="text-center text-sm font-bold text-slate-700 mb-4">Eficiencia vs Contenido de Carbono</h4>
    <svg viewBox="0 0 400 200" className="w-full h-auto">
      {/* Ejes */}
      <line x1="40" y1="160" x2="380" y2="160" stroke="#94a3b8" strokeWidth="2" />
      <line x1="40" y1="160" x2="40" y2="20" stroke="#94a3b8" strokeWidth="2" />
      
      {/* Etiquetas Ejes */}
      <text x="210" y="190" textAnchor="middle" fill="#64748b" fontSize="12">% de Carbono (C)</text>
      <text x="20" y="90" textAnchor="middle" transform="rotate(-90 20 90)" fill="#64748b" fontSize="12">Eficiencia de Nitruración</text>

      {/* Zonas */}
      <rect x="40" y="20" width="120" height="140" fill="#dcfce7" opacity="0.4" />
      <rect x="160" y="20" width="220" height="140" fill="#fee2e2" opacity="0.4" />
      
      {/* Linea de tendencia */}
      <path d="M 40 40 Q 140 40 180 80 T 360 150" fill="none" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
      
      {/* Marcador < 0.5% */}
      <line x1="160" y1="160" x2="160" y2="20" stroke="#ef4444" strokeWidth="1" strokeDasharray="5,5" />
      <text x="160" y="15" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold">0.5% Límite</text>

      {/* Puntos clave */}
      <circle cx="80" cy="40" r="5" fill="#2563eb" />
      <text x="80" y="30" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Óptimo</text>
      
      <circle cx="280" cy="130" r="5" fill="#2563eb" />
      <text x="280" y="120" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Difusión Dificultada</text>
    </svg>
  </div>
);

const DiagramaTriangulo = () => (
  <div className="flex justify-center items-center py-8">
    <div className="relative w-64 h-64">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
        <polygon points="50,15 90,85 10,85" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,4" />
        <line x1="50" y1="15" x2="50" y2="60" stroke="#94a3b8" strokeWidth="1" />
        <line x1="90" y1="85" x2="50" y2="60" stroke="#94a3b8" strokeWidth="1" />
        <line x1="10" y1="85" x2="50" y2="60" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="50" cy="60" r="3" fill="#3b82f6" />
      </svg>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-full shadow-md whitespace-nowrap">
        Tipo de Acero
      </div>
      
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/2 bg-emerald-600 text-white text-xs font-bold py-1 px-3 rounded-full shadow-md whitespace-nowrap">
        Elementos de Aleación
      </div>
      
      <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/2 bg-amber-500 text-white text-xs font-bold py-1 px-3 rounded-full shadow-md whitespace-nowrap">
        Nivel de Carbono
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-4 text-center">
        <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Capa Uniforme</div>
        <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Alta Dureza</div>
      </div>
    </div>
  </div>
);

const DiagramaFlujoFinal = () => (
  <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
    <div className="flex flex-col items-center text-center p-3">
      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg mb-3">
        <Settings size={28} />
      </div>
      <h4 className="font-bold text-slate-800 text-sm">Composición<br/>Adecuada</h4>
    </div>
    
    <ArrowRight className="hidden md:block text-blue-300 w-8 h-8" />
    <ArrowRight className="block md:hidden text-blue-300 w-8 h-8 rotate-90" />
    
    <div className="flex flex-col items-center text-center p-3">
      <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg mb-3">
        <Zap size={28} />
      </div>
      <h4 className="font-bold text-slate-800 text-sm">Formación de<br/>Nitruros</h4>
    </div>

    <ArrowRight className="hidden md:block text-indigo-300 w-8 h-8" />
    <ArrowRight className="block md:hidden text-indigo-300 w-8 h-8 rotate-90" />

    <div className="flex flex-col items-center text-center p-3">
      <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg mb-3">
        <Shield size={28} />
      </div>
      <h4 className="font-bold text-slate-800 text-sm">Rendimiento<br/>Óptimo</h4>
    </div>
  </div>
);

// --- Main Application ---

export default function App() {
  const sections = [
    {
      id: 1,
      title: "Introducción a los materiales para nitruración",
      content: "La efectividad de la nitruración depende en gran medida del material tratado, especialmente de su composición química. No todos los materiales responden de la misma manera, ya que la formación de nitruros está condicionada por los elementos presentes en la aleación.",
      visual: <DiagramaIntroduccion />
    },
    {
      id: 2,
      title: "Aceros ideales para nitruración",
      content: "Los aceros son los materiales más comúnmente utilizados en nitruración debido a su capacidad para formar nitruros estables. Estos materiales permiten obtener capas nitruradas con buenas propiedades mecánicas y alta estabilidad.",
      bullets: ["Aceros al carbono", "Aceros aleados", "Aceros para herramientas", "Aceros inoxidables (con condiciones específicas)"],
      visual: <DiagramaAceros />
    },
    {
      id: 3,
      title: "Papel de los elementos de aleación",
      content: "La presencia de ciertos elementos de aleación es clave para una nitruración efectiva, ya que favorecen la formación de nitruros duros y estables. Estos elementos reaccionan con el nitrógeno para formar compuestos que incrementan la dureza y la resistencia al desgaste.",
      bullets: ["Aluminio (Al)", "Cromo (Cr)", "Molibdeno (Mo)", "Vanadio (V)", "Manganeso (Mn)"],
      visual: <DiagramaAleacion />
    },
    {
      id: 4,
      title: "Influencia del contenido de carbono",
      content: "El contenido de carbono en el acero influye significativamente en el proceso. Existe un equilibrio entre carbono y elementos formadores de nitruros para optimizar el tratamiento.",
      bullets: [
        "Se recomienda un contenido menor a 0.5%",
        "Un exceso de carbono puede dificultar la difusión del nitrógeno",
        "Altos niveles de carbono reducen la formación de nitruros efectivos"
      ],
      visual: <DiagramaCarbono />
    },
    {
      id: 5,
      title: "Interacción entre composición y propiedades",
      content: "La respuesta del material a la nitruración depende de la interacción armónica de múltiples variables. Una composición adecuada permite obtener capas más uniformes, mayor dureza y mejor resistencia al desgaste.",
      bullets: ["Tipo de acero", "Contenido de elementos de aleación", "Nivel de carbono"],
      visual: <DiagramaTriangulo />
    },
    {
      id: 6,
      title: "Cierre: Importancia de la selección del material",
      content: "La selección del material es un factor crítico en la nitruración. Elegir un acero con la composición adecuada garantiza una mejor formación de nitruros y, por tanto, un rendimiento óptimo del componente tratado.",
      visual: <DiagramaFlujoFinal />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-blue-900 text-white py-16 px-6 text-center shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Materiales para Nitruración</h1>
      
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
        {sections.map((section, index) => {
          const isEven = index % 2 === 0;
          return (
            <section key={section.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              
              {/* Text Area */}
              <div className="w-full lg:w-1/2 space-y-6">
              
                <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                  {section.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {section.content}
                </p>
                
                {section.bullets && (
                  <ul className="space-y-3 mt-6">
                    {section.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Visual Area */}
              <div className="w-full lg:w-1/2">
                <div className="bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
                  <div className="bg-slate-50 rounded-xl p-6 sm:p-8 relative overflow-hidden">
                    {/* Decorative background element */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-60"></div>
                    
                    <div className="relative z-10">
                      {section.visual}
                    </div>
                  </div>
                </div>
              </div>
              
            </section>
          );
        })}
      </main>

    </div>
  );
}