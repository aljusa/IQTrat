import React, { useState } from 'react';
import { 
  Car, Wrench, Factory, Settings, ShieldCheck, 
  TrendingUp, TrendingDown, Leaf, AlertTriangle, 
  ArrowRight, CheckCircle, Droplets
} from 'lucide-react';

// --- DATOS EXTRAÍDOS DEL TEXTO ACADÉMICO ---
const sectionsData = [
  {
    id: 1,
    title: "Introducción a las aplicaciones industriales",
    text: "La nitrocarburización es un tratamiento ampliamente utilizado en la industria debido a su capacidad para mejorar las propiedades superficiales de los materiales sin alterar significativamente su núcleo. Esta característica la hace especialmente valiosa en componentes sometidos a desgaste, fricción y ambientes agresivos.",
    visualType: "collage"
  },
  {
    id: 2,
    title: "Aplicaciones en aceros al carbono y aleados",
    text: "En aceros al carbono y aceros aleados, la nitrocarburización se emplea en componentes mecánicos que requieren alta resistencia superficial y buena tenacidad interna. Entre los más comunes se encuentran:\n\n• Engranajes\n• Ejes\n• Piezas de maquinaria\n• Componentes automotrices\n\nEstos elementos suelen estar sometidos a cargas cíclicas, fricción y contacto continuo, lo que hace esencial mejorar su superficie sin comprometer su resistencia estructural.",
    visualType: "gear-surface"
  },
  {
    id: 3,
    title: "Beneficios en aceros convencionales",
    text: "La aplicación de este tratamiento en aceros convencionales proporciona mejoras significativas en el desempeño:\n\n• Incremento de la vida útil de los componentes\n• Reducción del desgaste superficial\n• Mejor comportamiento en condiciones de fricción y contacto\n\nEstas ventajas permiten disminuir costos de mantenimiento y aumentar la confiabilidad de los sistemas mecánicos.",
    visualType: "chart"
  },
  {
    id: 4,
    title: "Aplicaciones en aceros inoxidables",
    text: "En aceros inoxidables, como el AISI 304, la nitrocarburización presenta un interés particular, ya que permite mejorar la dureza superficial sin perder la resistencia a la corrosión, que es su principal ventaja. Durante el proceso:\n\n• Se forman capas enriquecidas en nitrógeno y carbono.\n• Se modifican las propiedades superficiales sin comprometer la pasivación del material.\n\nEsto amplía significativamente el campo de uso de los aceros inoxidables en aplicaciones donde antes estaban limitados por su baja dureza.",
    visualType: "shield"
  },
  {
    id: 5,
    title: "Propiedades destacadas en aceros inoxidables",
    text: "Tras la nitrocarburización, los aceros inoxidables pueden alcanzar:\n\n• Alta dureza superficial (hasta aproximadamente 1500 HV)\n• Mayor resistencia al desgaste\n• Conservación o mejora de la resistencia a la corrosión\n\nEste conjunto de propiedades es especialmente valioso en sectores como el alimentario, médico y químico.",
    visualType: "table"
  },
  {
    id: 6,
    title: "Aplicaciones avanzadas y sustitución de recubrimientos",
    text: "La nitrocarburización también se aplica en contextos más especializados:\n\n• Materiales sinterizados\n• Componentes de alta precisión\n• Sustitución de recubrimientos como el cromado\n\nEn este último caso, el proceso representa una alternativa más sostenible, evitando el uso de recubrimientos potencialmente contaminantes y mejorando la adherencia de la capa funcional.",
    visualType: "comparison"
  },
  {
    id: 7,
    title: "Ventajas industriales del proceso",
    text: "Desde el punto de vista productivo, la nitrocarburización ofrece:\n\n• Un proceso relativamente económico\n• Alta reproducibilidad en condiciones controladas\n• Mejora integral del rendimiento superficial\n\nEstas características favorecen su adopción en procesos industriales de gran escala.",
    visualType: "production"
  },
  {
    id: 8,
    title: "Importancia en la ingeniería moderna",
    text: "La nitrocarburización se ha consolidado como un tratamiento versátil y estratégico en la ingeniería de materiales. Su capacidad para combinar dureza, resistencia al desgaste y protección contra la corrosión la convierte en una solución óptima tanto para aceros convencionales como para aceros inoxidables.",
    visualType: "flow"
  }
];

// --- COMPONENTES VISUALES (Diagramas interactivos) ---

const VisualCollage = () => (
  <div className="grid grid-cols-2 gap-4 h-full p-4 bg-slate-50 rounded-xl">
    <div className="flex flex-col items-center justify-center p-4 bg-blue-100 text-blue-700 rounded-lg shadow-sm">
      <Car size={40} className="mb-2" />
      <span className="text-sm font-semibold text-center">Automotriz</span>
    </div>
    <div className="flex flex-col items-center justify-center p-4 bg-indigo-100 text-indigo-700 rounded-lg shadow-sm">
      <Factory size={40} className="mb-2" />
      <span className="text-sm font-semibold text-center">Maquinaria pesada</span>
    </div>
    <div className="flex flex-col items-center justify-center p-4 bg-teal-100 text-teal-700 rounded-lg shadow-sm col-span-2">
      <Wrench size={40} className="mb-2" />
      <span className="text-sm font-semibold text-center">Herramientas sometidas a desgaste</span>
    </div>
  </div>
);

const VisualGearSurface = () => (
  <div className="flex flex-col items-center justify-center h-full p-6 bg-slate-900 rounded-xl text-white relative overflow-hidden">
    {/* Capa de desgaste animada visualmente mediante stroke */}
    <Settings size={120} className="text-slate-500 relative z-10" strokeWidth={1} />
    <Settings size={120} className="text-orange-500 absolute z-20 opacity-80" style={{ filter: 'blur(2px)' }} strokeWidth={2.5} />
    <Settings size={120} className="text-yellow-400 absolute z-30" strokeWidth={1.5} />
    
    <div className="mt-6 flex flex-col items-center">
      <div className="flex items-center gap-2 text-sm text-yellow-400 mb-1">
        <span className="w-4 h-1 bg-yellow-400 rounded"></span> Capa Superficial Tratada
      </div>
      <div className="flex items-center gap-2 text-sm text-slate-400">
        <span className="w-4 h-4 bg-slate-500 rounded-full"></span> Núcleo Tenaz
      </div>
    </div>
  </div>
);

const VisualChart = () => (
  <div className="flex flex-col h-full p-6 bg-white border border-slate-200 rounded-xl">
    <h4 className="text-sm font-bold text-center text-slate-600 mb-6">Comparativa de Desempeño</h4>
    <div className="flex items-end justify-center gap-8 h-40 mt-auto">
      {/* Barra No tratada */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 bg-red-400 rounded-t-md relative flex justify-center">
          <TrendingDown className="absolute -top-6 text-red-500" size={20} />
        </div>
        <span className="text-xs font-semibold text-slate-500 text-center">Sin tratar</span>
      </div>
      {/* Barra Tratada */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-36 bg-emerald-500 rounded-t-md relative flex justify-center">
          <TrendingUp className="absolute -top-6 text-emerald-600" size={20} />
        </div>
        <span className="text-xs font-semibold text-slate-800 text-center">Nitrocarburizada</span>
      </div>
    </div>
    <div className="flex justify-between mt-4 px-8 text-xs font-medium text-slate-400">
      <span>Menor vida útil<br/>Mayor desgaste</span>
      <span className="text-right">Mayor vida útil<br/>Menor desgaste</span>
    </div>
  </div>
);

const VisualShield = () => (
  <div className="flex flex-col items-center justify-center h-full p-6 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl relative">
    <div className="relative w-48 h-32">
      {/* Núcleo de acero inoxidable */}
      <div className="absolute bottom-0 w-full h-16 bg-slate-300 rounded-b-lg border-2 border-slate-400 flex items-center justify-center">
         <span className="text-slate-600 font-bold text-sm">AISI 304</span>
      </div>
      {/* Capa nitrocarburizada */}
      <div className="absolute bottom-16 w-full h-8 bg-blue-300 border-2 border-blue-400 flex items-center justify-center">
        <span className="text-blue-800 text-xs font-bold">Capa N + C</span>
      </div>
      {/* Escudo anticorrosión */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-emerald-500 bg-white rounded-full p-1 shadow-lg">
        <ShieldCheck size={48} />
      </div>
      {/* Agresiones ambientales rebotando */}
      <div className="absolute top-2 left-0 text-red-400 opacity-70">
        <Droplets size={20} />
      </div>
      <div className="absolute top-2 right-0 text-red-400 opacity-70">
        <Droplets size={20} />
      </div>
    </div>
    <p className="mt-8 text-xs text-center text-slate-600 font-medium">
      Modificación superficial conservando la pasivación (resistencia a corrosión).
    </p>
  </div>
);

const VisualTable = () => (
  <div className="h-full p-2 bg-white rounded-xl overflow-hidden flex flex-col justify-center">
    <table className="w-full text-left border-collapse text-sm">
      <thead>
        <tr className="bg-slate-800 text-white">
          <th className="p-3 border-b border-slate-700">Propiedad</th>
          <th className="p-3 border-b border-slate-700">Antes</th>
          <th className="p-3 border-b border-slate-700 text-emerald-400">Después</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-slate-50 border-b border-slate-200">
          <td className="p-3 font-semibold text-slate-700">Dureza</td>
          <td className="p-3 text-slate-600">~200 HV</td>
          <td className="p-3 text-emerald-600 font-bold">Hasta 1500 HV</td>
        </tr>
        <tr className="bg-white border-b border-slate-200">
          <td className="p-3 font-semibold text-slate-700">Desgaste</td>
          <td className="p-3 text-slate-600">Alto</td>
          <td className="p-3 text-emerald-600 font-bold">Muy Bajo</td>
        </tr>
        <tr className="bg-slate-50">
          <td className="p-3 font-semibold text-slate-700">Corrosión</td>
          <td className="p-3 text-slate-600">Excelente</td>
          <td className="p-3 text-emerald-600 font-bold">Conservada/Mejorada</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const VisualComparison = () => (
  <div className="flex h-full rounded-xl overflow-hidden shadow-sm">
    <div className="flex-1 bg-red-50 p-4 flex flex-col items-center justify-center border-r border-red-100">
      <AlertTriangle size={40} className="text-red-500 mb-3" />
      <h4 className="font-bold text-red-700 text-center mb-2">Cromado Duro</h4>
      <ul className="text-xs text-red-600 space-y-2">
        <li>• Riesgo ambiental</li>
        <li>• Problemas de adherencia</li>
        <li>• Microgrietas</li>
      </ul>
    </div>
    <div className="flex-1 bg-emerald-50 p-4 flex flex-col items-center justify-center">
      <Leaf size={40} className="text-emerald-500 mb-3" />
      <h4 className="font-bold text-emerald-700 text-center mb-2">Nitrocarburización</h4>
      <ul className="text-xs text-emerald-600 space-y-2">
        <li>• Proceso sostenible</li>
        <li>• Excelente integración</li>
        <li>• Capa funcional unida</li>
      </ul>
    </div>
  </div>
);

const VisualProduction = () => (
  <div className="flex flex-col justify-center items-center h-full p-6 bg-slate-50 rounded-xl border border-slate-200">
    <div className="flex items-center w-full justify-between px-2">
      <div className="flex flex-col items-center text-slate-500">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
          <Settings size={24} />
        </div>
        <span className="text-xs mt-2">Pieza Bruta</span>
      </div>
      <ArrowRight className="text-blue-400" />
      <div className="flex flex-col items-center text-blue-600">
        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center shadow-md border-2 border-blue-400 relative overflow-hidden">
           <Factory size={32} />
           <div className="absolute inset-0 bg-blue-400 opacity-20 animate-pulse"></div>
        </div>
        <span className="text-xs font-bold mt-2 text-center">Horno<br/>Controlado</span>
      </div>
      <ArrowRight className="text-emerald-500" />
      <div className="flex flex-col items-center text-emerald-600">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
          <CheckCircle size={24} />
        </div>
        <span className="text-xs mt-2 text-center">Tratamiento<br/>Repetible</span>
      </div>
    </div>
  </div>
);

const VisualFlow = () => (
  <div className="flex flex-col justify-center h-full p-4 bg-slate-800 rounded-xl text-white">
    <div className="flex items-center gap-2 mb-3">
      <div className="bg-slate-600 p-2 rounded text-xs flex-1 text-center font-semibold">Material</div>
      <ArrowRight size={16} className="text-slate-400" />
      <div className="bg-blue-600 p-2 rounded text-xs flex-1 text-center font-semibold">Tratamiento (Nitrocarburización)</div>
    </div>
    <div className="flex justify-center my-1">
      <ArrowRight size={16} className="text-slate-400 rotate-90" />
    </div>
    <div className="bg-emerald-600 p-3 rounded text-sm text-center font-bold mb-3 shadow-lg">
      Dureza + Resistencia Desgaste + Anticorrosión
    </div>
    <div className="flex justify-center my-1">
      <ArrowRight size={16} className="text-slate-400 rotate-90" />
    </div>
    <div className="bg-amber-500 text-amber-950 p-2 rounded text-sm text-center font-black">
      Aplicación Óptima
    </div>
  </div>
);


// --- RENDERIZADOR DE VISUALES ---
const VisualRenderer = ({ type }) => {
  switch (type) {
    case 'collage': return <VisualCollage />;
    case 'gear-surface': return <VisualGearSurface />;
    case 'chart': return <VisualChart />;
    case 'shield': return <VisualShield />;
    case 'table': return <VisualTable />;
    case 'comparison': return <VisualComparison />;
    case 'production': return <VisualProduction />;
    case 'flow': return <VisualFlow />;
    default: return <div className="text-slate-400 italic">Visual no disponible</div>;
  }
};

// --- COMPONENTE PRINCIPAL DE LA APLICACIÓN ---
export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 selection:bg-blue-200">
      {/* Encabezado / Hero Section */}
      <header className="bg-slate-900 text-white py-16 px-6 text-center shadow-xl">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Aplicaciones en Aceros y Aceros Inoxidables
          </h1>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            El impacto de la nitrocarburización en la industria moderna: mejorando la durabilidad, resistencia y sostenibilidad de los materiales.
          </p>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-16">
          {sectionsData.map((section, index) => {
            const isEven = index % 2 === 0;
            return (
              <section 
                key={section.id} 
                className={`flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl shadow-sm p-6 lg:p-10 border border-slate-200 transition-all hover:shadow-md ${!isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Texto y Explicación */}
                <div className="flex-1 space-y-4">
                  <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-2">
                    Sección {index + 1}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-b-2 border-blue-100 pb-2">
                    {section.title}
                  </h2>
                  <div className="prose text-slate-600 leading-relaxed">
                    {section.text.split('\n').map((paragraph, i) => (
                      <p key={i} className={paragraph.startsWith('•') ? 'ml-4 font-medium text-slate-700' : 'mb-3'}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Sugerencia Visual Interactiva */}
                <div className="flex-1 w-full h-64 md:h-80 w-full min-w-[300px]">
                  <VisualRenderer type={section.visualType} />
                </div>
              </section>
            );
          })}
        </div>
      </main>

      {/* Pie de página */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>Documento interactivo generado para estudio e investigación técnica en ciencia de materiales.</p>
        <p className="mt-2">© {new Date().getFullYear()} Ideastoweb - Entorno de Aprendizaje</p>
      </footer>
    </div>
  );
}