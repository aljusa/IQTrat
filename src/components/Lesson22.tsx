import React, { useState } from 'react';
import { 
  Shield, 
  Activity, 
  Settings, 
  Wrench, 
  RotateCw, 
  GitCommit, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  Layers, 
  Box,
  TrendingDown,
  TrendingUp,
  Scale
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';

// --- Types & Interfaces ---
interface LessonContent {
  id: string;
  tabTitle: string;
  diagramTitle: string;
  description: string;
  renderComponent: React.FC;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

// --- Reusable Components ---
const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden ${className}`}>
    {children}
  </div>
);

// --- Diagram Components ---

// 1. Ventajas
const VentajasDiagram: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full h-full place-items-center p-4">
    <Card className="grid grid-rows-[auto_1fr] p-6 text-center gap-4 w-full h-full border-t-4 border-t-blue-500 hover:-translate-y-1 transition-transform">
      <div className="grid place-items-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mx-auto">
        <Shield size={24} />
      </div>
      <div className="grid gap-2">
        <h3 className="font-bold text-lg text-slate-800">Aumento de Dureza</h3>
        <p className="text-sm text-slate-600">Incrementa significativamente la resistencia a la deformación plástica superficial.</p>
      </div>
    </Card>

    <Card className="grid grid-rows-[auto_1fr] p-6 text-center gap-4 w-full h-full border-t-4 border-t-emerald-500 hover:-translate-y-1 transition-transform">
      <div className="grid place-items-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full mx-auto">
        <Activity size={24} />
      </div>
      <div className="grid gap-2">
        <h3 className="font-bold text-lg text-slate-800">Resistencia al Desgaste</h3>
        <p className="text-sm text-slate-600">Ideal para piezas sometidas a fricción constante, prolongando su vida útil.</p>
      </div>
    </Card>

    <Card className="grid grid-rows-[auto_1fr] p-6 text-center gap-4 w-full h-full border-t-4 border-t-indigo-500 hover:-translate-y-1 transition-transform">
      <div className="grid place-items-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full mx-auto">
        <Settings size={24} />
      </div>
      <div className="grid gap-2">
        <h3 className="font-bold text-lg text-slate-800">Resistencia Mecánica</h3>
        <p className="text-sm text-slate-600">Mayor capacidad para soportar cargas elevadas sin fallar ni romperse fácilmente.</p>
      </div>
    </Card>
  </div>
);

// 2. Limitaciones (Recharts Data Viz)
const dataLimitaciones = [
  { nivel: 'Bajo', dureza: 20, ductilidad: 80 },
  { nivel: 'Medio-Bajo', dureza: 40, ductilidad: 60 },
  { nivel: 'Medio', dureza: 60, ductilidad: 40 },
  { nivel: 'Medio-Alto', dureza: 80, ductilidad: 20 },
  { nivel: 'Alto', dureza: 95, ductilidad: 5 },
];

const LimitacionesDiagram: React.FC = () => (
  <div className="grid grid-rows-[auto_1fr] gap-6 w-full h-full p-4">
    <div className="grid grid-cols-2 gap-4 text-center">
      <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-100 grid place-items-center gap-2">
        <TrendingUp size={32} />
        <span className="font-semibold">Sube la Dureza</span>
      </div>
      <div className="p-4 bg-orange-50 text-orange-700 rounded-lg border border-orange-100 grid place-items-center gap-2">
        <TrendingDown size={32} />
        <span className="font-semibold">Baja la Ductilidad (Fragilidad)</span>
      </div>
    </div>
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={dataLimitaciones} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="nivel" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend />
          <Line type="monotone" dataKey="dureza" name="Dureza" stroke="#ef4444" strokeWidth={3} dot={{ r: 6 }} />
          <Line type="monotone" dataKey="ductilidad" name="Ductilidad" stroke="#f97316" strokeWidth={3} dot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

// 3. Riesgos
const RiesgosDiagram: React.FC = () => (
  <div className="grid grid-cols-[1fr_auto_1fr] gap-4 w-full h-full place-items-center p-4">
    {/* Causas */}
    <div className="grid gap-3 w-full">
      {['Geometría de la pieza', 'Composición del acero', 'Temperatura alcanzada', 'Medio de enfriamiento'].map((causa, idx) => (
        <div key={idx} className="bg-slate-100 p-3 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 text-right">
          {causa}
        </div>
      ))}
    </div>
    
    {/* Convergencia */}
    <div className="grid place-items-center text-slate-400">
      <ArrowRight size={48} strokeWidth={1} />
    </div>

    {/* Efectos */}
    <div className="grid gap-4 w-full">
      <Card className="p-4 border-l-4 border-l-red-500 bg-red-50">
        <div className="grid grid-cols-[auto_1fr] gap-3 place-items-center">
          <AlertTriangle className="text-red-500" size={24} />
          <div className="grid text-left">
            <span className="font-bold text-red-900">Grietas</span>
            <span className="text-xs text-red-700">Fisuras por estrés térmico</span>
          </div>
        </div>
      </Card>
      <Card className="p-4 border-l-4 border-l-orange-500 bg-orange-50">
        <div className="grid grid-cols-[auto_1fr] gap-3 place-items-center">
          <Layers className="text-orange-500" size={24} />
          <div className="grid text-left">
            <span className="font-bold text-orange-900">Deformaciones</span>
            <span className="text-xs text-orange-700">Cambios de forma indeseados</span>
          </div>
        </div>
      </Card>
      <Card className="p-4 border-l-4 border-l-yellow-500 bg-yellow-50">
        <div className="grid grid-cols-[auto_1fr] gap-3 place-items-center">
          <Activity className="text-yellow-600" size={24} />
          <div className="grid text-left">
            <span className="font-bold text-yellow-900">Tensiones Residuales</span>
            <span className="text-xs text-yellow-700">Estrés interno acumulado</span>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

// 4. Aplicaciones
const AplicacionesDiagram: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full h-full p-4 place-content-center">
    {[
      { icon: Wrench, title: "Herramientas de corte", color: "text-blue-600", bg: "bg-blue-100" },
      { icon: Settings, title: "Engranajes", color: "text-purple-600", bg: "bg-purple-100" },
      { icon: GitCommit, title: "Ejes de transmisión", color: "text-emerald-600", bg: "bg-emerald-100" },
      { icon: RotateCw, title: "Resortes", color: "text-amber-600", bg: "bg-amber-100" }
    ].map((item, idx) => (
      <Card key={idx} className="grid grid-rows-[auto_1fr] p-4 text-center gap-3 place-items-center hover:shadow-lg transition-shadow">
        <div className={`grid place-items-center w-16 h-16 rounded-full ${item.bg} ${item.color}`}>
          <item.icon size={32} />
        </div>
        <span className="font-semibold text-sm text-slate-800">{item.title}</span>
      </Card>
    ))}
  </div>
);

// 5. Decisión Técnica
const DecisionDiagram: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 w-full h-full place-items-center p-4">
    <Card className="w-full h-full p-6 bg-emerald-50 border-emerald-200">
      <h3 className="font-bold text-emerald-800 mb-4 grid grid-cols-[auto_1fr] gap-2 place-items-center">
        <CheckCircle size={20} /> Beneficios
      </h3>
      <div className="grid gap-2">
        <div className="bg-white p-2 rounded border border-emerald-100 text-sm text-emerald-900">Aumento de Dureza</div>
        <div className="bg-white p-2 rounded border border-emerald-100 text-sm text-emerald-900">Resistencia al desgaste</div>
      </div>
    </Card>

    <div className="grid place-items-center gap-2 p-4 bg-slate-800 text-white rounded-full shadow-lg z-10">
      <Scale size={32} />
      <span className="text-xs font-bold uppercase tracking-wider">Decisión</span>
    </div>

    <Card className="w-full h-full p-6 bg-red-50 border-red-200">
      <h3 className="font-bold text-red-800 mb-4 grid grid-cols-[auto_1fr] gap-2 place-items-center">
        <XCircle size={20} /> Costos / Riesgos
      </h3>
      <div className="grid gap-2">
        <div className="bg-white p-2 rounded border border-red-100 text-sm text-red-900">Pérdida de Tenacidad</div>
        <div className="bg-white p-2 rounded border border-red-100 text-sm text-red-900">Inestabilidad dimensional</div>
        <div className="bg-white p-2 rounded border border-red-100 text-sm text-red-900">Costo del proceso</div>
      </div>
    </Card>
  </div>
);

// 6. Importancia
const ImportanciaDiagram: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full place-items-center p-4">
    <div className="grid place-items-center text-center gap-4">
      <div className="w-24 h-24 rounded-full bg-indigo-100 text-indigo-600 grid place-items-center border-4 border-indigo-200">
        <Box size={40} />
      </div>
      <div className="grid gap-1">
        <h4 className="font-bold text-slate-800">Ciencia Microestructural</h4>
        <p className="text-xs text-slate-500">Alteración de fases a nivel atómico</p>
      </div>
    </div>
    
    <div className="grid grid-cols-[1fr_auto_1fr] place-items-center w-full text-slate-300">
      <div className="w-full h-1 bg-slate-200 rounded"></div>
      <ArrowRight size={32} className="mx-2 text-indigo-400" />
      <div className="w-full h-1 bg-slate-200 rounded"></div>
    </div>

    <div className="grid place-items-center text-center gap-4">
      <div className="w-24 h-24 rounded-full bg-emerald-100 text-emerald-600 grid place-items-center border-4 border-emerald-200">
        <Settings size={40} />
      </div>
      <div className="grid gap-1">
        <h4 className="font-bold text-slate-800">Necesidades Reales</h4>
        <p className="text-xs text-slate-500">Manufactura, diseño y servicio</p>
      </div>
    </div>
  </div>
);


// --- Data Source ---
const lessonData: LessonContent[] = [
  {
    id: "ventajas",
    tabTitle: "Ventajas",
    diagramTitle: "Beneficios Principales del Temple",
    description: "Entre las principales ventajas del temple se encuentran el aumento de la dureza, la mejora de la resistencia al desgaste y el incremento de la resistencia mecánica. Estas propiedades lo convierten en un tratamiento especialmente valioso para piezas sometidas a fricción o cargas elevadas.",
    renderComponent: VentajasDiagram
  },
  {
    id: "limitaciones",
    tabTitle: "Limitaciones",
    diagramTitle: "Compromiso: Dureza vs Ductilidad",
    description: "El temple también presenta limitaciones relevantes. El aumento de dureza suele acompañarse de una disminución de ductilidad, lo que puede traducirse en fragilidad y en mayor sensibilidad a defectos si el proceso no se ejecuta correctamente.",
    renderComponent: LimitacionesDiagram
  },
  {
    id: "riesgos",
    tabTitle: "Riesgos",
    diagramTitle: "Esquema Causal de Defectos",
    description: "Los riesgos principales del temple son la aparición de grietas, deformaciones y tensiones residuales. Estos problemas dependen de factores como la geometría de la pieza, la composición del acero, la temperatura alcanzada y la severidad del medio de enfriamiento.",
    renderComponent: RiesgosDiagram
  },
  {
    id: "aplicaciones",
    tabTitle: "Aplicaciones",
    diagramTitle: "Componentes Industriales Comunes",
    description: "En la industria, el temple se aplica a componentes que necesitan alta dureza superficial o elevada resistencia al desgaste, como herramientas de corte, engranajes, ejes, resortes y diversas piezas de maquinaria. En estos casos, el tratamiento mejora el desempeño y la vida útil del componente.",
    renderComponent: AplicacionesDiagram
  },
  {
    id: "decision",
    tabTitle: "Decisión Técnica",
    diagramTitle: "Mapa de Decisión del Tratamiento",
    description: "La decisión de templar una pieza no depende solo de querer aumentar su dureza, sino de evaluar si esa mejora compensa las posibles desventajas en tenacidad, estabilidad dimensional y costo de control del proceso. Por eso el temple debe considerarse una solución técnica específica, no una mejora universal.",
    renderComponent: DecisionDiagram
  },
  {
    id: "importancia",
    tabTitle: "Importancia",
    diagramTitle: "Conexión Práctica y Teórica",
    description: "En ingeniería de materiales, el temple es un tratamiento fundamental porque permite adaptar el comportamiento del acero a exigencias funcionales concretas. Su importancia radica en que conecta la ciencia microestructural con necesidades reales de manufactura, diseño y servicio mecánico.",
    renderComponent: ImportanciaDiagram
  }
];

// --- Main Layout Component ---
export default function LessonLayout() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const activeContent = lessonData[activeTabIndex];
  const ActiveDiagram = activeContent.renderComponent;

  return (
    // Layout Principal usando GRID (No Flexbox)
    <div className="grid grid-rows-[auto_1fr] min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* HEADER & NAV */}
      <header className="grid gap-6 bg-white border-b border-slate-200 px-6 pt-8 shadow-sm">
        <div className="grid gap-2 max-w-7xl mx-auto w-full">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Tratamientos Térmicos: <span className="text-blue-600">El Temple</span>
          </h1>
          <p className="text-slate-500 font-medium">Ventajas, Limitaciones y Aplicaciones Industriales</p>
        </div>
        
        {/* TAB NAVIGATION (Grid-based) */}
        <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 max-w-7xl mx-auto w-full">
          {lessonData.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabIndex(index)}
              className={`grid place-items-center py-3 px-2 text-sm font-semibold rounded-t-lg border-b-4 transition-colors duration-200 outline-none
                ${activeTabIndex === index 
                  ? 'border-blue-600 text-blue-700 bg-blue-50/50' 
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                }`}
            >
              {tab.tabTitle}
            </button>
          ))}
        </nav>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="grid p-6 max-w-7xl mx-auto w-full place-items-start">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          
          {/* TEXT PANEL */}
          <div className="grid gap-6 lg:col-span-5 h-fit">
            <Card className="grid gap-4 p-6 bg-white border-l-4 border-l-blue-600">
              <div className="grid gap-2">
             
                <h2 className="text-2xl font-bold text-slate-800 leading-tight">
                  {activeContent.diagramTitle}
                </h2>
              </div>
              <div className="w-full h-px bg-slate-100"></div>
              <p className="text-slate-600 leading-relaxed text-lg">
                {activeContent.description}
              </p>
            </Card>
          </div>

          {/* DIAGRAM PANEL */}
          <div className="grid lg:col-span-7 w-full h-full min-h-[400px]">
            <Card className="grid grid-rows-[auto_1fr] bg-white w-full h-full shadow-lg">
             
              <div className="grid place-items-center w-full h-full p-4 overflow-hidden">
                 <ActiveDiagram />
              </div>
            </Card>
          </div>

        </div>
      </main>
      
    </div>
  );
}