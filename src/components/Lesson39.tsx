import React from 'react';
import { 
  Layers, 
  Settings, 
  Flame, 
  Thermometer, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Target,
  Globe
} from 'lucide-react';

// --- Visual Components ---

const IntroDiagram = () => (
  <div className="flex flex-col sm:flex-row gap-4 w-full h-full justify-center items-end bg-slate-50 p-6 rounded-xl border border-slate-200">
    {[
      { name: 'Acero', color: 'bg-slate-700', layer: 'bg-slate-400', height: 'h-32' },
      { name: 'Titanio', color: 'bg-slate-300', layer: 'bg-yellow-500', height: 'h-40' },
      { name: 'Aluminio', color: 'bg-slate-200', layer: 'bg-blue-300', height: 'h-28', layerHeight: 'h-1' },
      { name: 'Refractarios', color: 'bg-stone-600', layer: 'bg-orange-500', height: 'h-36' },
    ].map((mat, idx) => (
      <div key={idx} className="flex flex-col items-center w-full sm:w-1/4">
        <div className="text-xs font-semibold text-slate-500 mb-2">{mat.name}</div>
        <div className={`w-full ${mat.height} rounded-t-md overflow-hidden flex flex-col shadow-md`}>
          <div className={`w-full ${mat.layerHeight || 'h-4'} ${mat.layer}`}></div>
          <div className={`w-full flex-grow ${mat.color}`}></div>
        </div>
      </div>
    ))}
  </div>
);

const TitaniumDiagram = () => (
  <div className="flex items-center justify-center h-full p-6 bg-slate-50 rounded-xl border border-slate-200 relative overflow-hidden">
    <div className="w-full max-w-sm flex flex-col rounded-xl overflow-hidden shadow-2xl transform rotate-3">
      {/* Capa de TiN */}
      <div className="h-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 flex items-center justify-center relative">
        <span className="font-bold text-white tracking-widest drop-shadow-md relative z-10">CAPA DORADA (TiN)</span>
        <div className="absolute inset-0 bg-white opacity-20 transform -skew-x-12 translate-x-1/2"></div>
      </div>
      {/* Zona de transición Ti2N */}
      <div className="h-4 bg-gradient-to-r from-yellow-700 to-yellow-800 opacity-80"></div>
      {/* Sustrato */}
      <div className="h-32 bg-gradient-to-b from-slate-400 to-slate-600 flex items-center justify-center">
        <span className="font-semibold text-slate-200">Sustrato de Titanio</span>
      </div>
    </div>
  </div>
);

const RefractoryDiagram = () => (
  <div className="flex items-center justify-center h-full p-6 bg-slate-900 rounded-xl border border-slate-700 relative overflow-hidden group">
    <div className="absolute inset-0 bg-red-500 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
    <div className="relative z-10 flex flex-col items-center">
      <div className="relative">
        <Settings className="w-32 h-32 text-slate-300 animate-[spin_10s_linear_infinite]" strokeWidth={1} />
        {/* Capa nitrurada brillante indicando resistencia térmica */}
        <div className="absolute inset-0 rounded-full border-4 border-orange-500 animate-pulse shadow-[0_0_20px_rgba(249,115,22,0.6)]"></div>
      </div>
      <div className="mt-6 flex gap-4">
        <div className="flex items-center text-orange-400 bg-slate-800 px-3 py-1 rounded-full text-sm">
          <Flame className="w-4 h-4 mr-2" /> Alta Temp
        </div>
        <div className="flex items-center text-blue-400 bg-slate-800 px-3 py-1 rounded-full text-sm">
          <ShieldCheck className="w-4 h-4 mr-2" /> Corrosión
        </div>
      </div>
    </div>
  </div>
);

const AluminumDiagram = () => (
  <div className="flex flex-col items-center justify-center h-full p-6 bg-slate-50 rounded-xl border border-slate-200">
    <div className="w-full max-w-sm relative">
      <div className="absolute -left-8 top-0 bottom-0 flex flex-col justify-between py-2 text-xs text-slate-400 font-mono">
        <span>0 µm</span>
        <span>10 µm</span>
        <span>50 µm</span>
      </div>
      
      <div className="w-full flex flex-col rounded-xl overflow-hidden shadow-lg border border-slate-300">
        {/* Capa muy fina de AlN */}
        <div className="h-2 bg-blue-500 flex items-center justify-center relative group cursor-pointer">
           <div className="absolute -top-8 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
             Nitruro de Aluminio (AlN) - Baja profundidad
           </div>
        </div>
        {/* Sustrato de Aluminio */}
        <div className="h-40 bg-slate-100 flex items-center justify-center pattern-dots pattern-slate-300 pattern-bg-white pattern-size-4 pattern-opacity-40">
          <span className="font-semibold text-slate-500">Aluminio Base</span>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-slate-600 flex justify-center items-center">
         <Zap className="w-4 h-4 text-blue-500 mr-2" />
         Alta conductividad térmica en superficie
      </div>
    </div>
  </div>
);

const ComparisonTable = () => (
  <div className="w-full overflow-x-auto rounded-xl shadow-sm border border-slate-200">
    <table className="w-full text-left bg-white border-collapse">
      <thead>
        <tr className="bg-indigo-600 text-white text-sm">
          <th className="p-4 rounded-tl-xl font-semibold">Material Base</th>
          <th className="p-4 font-semibold">Compuestos Principales</th>
          <th className="p-4 font-semibold">Propiedades Obtenidas</th>
          <th className="p-4 rounded-tr-xl font-semibold">Limitaciones/Observaciones</th>
        </tr>
      </thead>
      <tbody className="text-sm divide-y divide-slate-100">
        <tr className="hover:bg-slate-50 transition-colors">
          <td className="p-4 font-medium text-slate-800 border-l-4 border-yellow-500">Titanio</td>
          <td className="p-4 text-slate-600">TiN, Ti₂N</td>
          <td className="p-4 text-slate-600">Alta dureza, resistencia al desgaste</td>
          <td className="p-4 text-slate-500">Sensibilidad a la fatiga si no se controla</td>
        </tr>
        <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
          <td className="p-4 font-medium text-slate-800 border-l-4 border-orange-500">Metales Refractarios (Zr, Nb, Mo...)</td>
          <td className="p-4 text-slate-600">Nitruros complejos</td>
          <td className="p-4 text-slate-600">Desempeño extremo a altas temperaturas, anticorrosión</td>
          <td className="p-4 text-slate-500">Procesos más complejos/costosos</td>
        </tr>
        <tr className="hover:bg-slate-50 transition-colors">
          <td className="p-4 font-medium text-slate-800 border-l-4 border-blue-400">Aluminio</td>
          <td className="p-4 text-slate-600">AlN</td>
          <td className="p-4 text-slate-600">Resistencia al desgaste, mejora térmica</td>
          <td className="p-4 text-slate-500">Muy limitada profundidad de difusión</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const ConceptMap = () => (
  <div className="flex flex-col items-center bg-slate-50 p-8 rounded-xl border border-slate-200 w-full">
    <div className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-md z-10">
      Nitruración (Proceso Integral)
    </div>
    
    <div className="h-8 w-px bg-slate-300"></div>
    
    <div className="flex flex-wrap justify-center gap-4 w-full">
      {[
        { title: 'Materiales', items: 'Aceros, Titanio, Aluminio, Refractarios', icon: Layers, color: 'text-blue-600', bg: 'bg-blue-100' },
        { title: 'Propiedades', items: 'Dureza, Desgaste, Corrosión, Fatiga', icon: Target, color: 'text-green-600', bg: 'bg-green-100' },
        { title: 'Industrias', items: 'Aeroespacial, Automotriz, Electrónica', icon: Globe, color: 'text-purple-600', bg: 'bg-purple-100' },
      ].map((node, i) => (
        <div key={i} className="flex flex-col items-center w-full md:w-[30%]">
          <div className="h-6 w-px bg-slate-300"></div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm w-full text-center relative hover:-translate-y-1 transition-transform">
            <div className={`absolute -top-4 left-1/2 -translate-x-1/2 p-2 rounded-full ${node.bg}`}>
              <node.icon className={`w-5 h-5 ${node.color}`} />
            </div>
            <h4 className="font-semibold text-slate-800 mt-4 mb-2">{node.title}</h4>
            <p className="text-xs text-slate-500 leading-relaxed">{node.items}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);


// --- Layout Components ---

const Section = ({ title, children, isReverse }) => (
  <section className="py-12 border-b border-slate-100 last:border-0">
    <div className={`flex flex-col gap-8 items-center ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      {children}
    </div>
  </section>
);

const TextContent = ({ title, children }) => (
  <div className="w-full md:w-1/2 space-y-4">
    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center">
      <div className="w-8 h-1 bg-indigo-500 mr-4 rounded-full"></div>
      {title}
    </h2>
    <div className="text-slate-600 leading-relaxed space-y-4 text-base md:text-lg">
      {children}
    </div>
  </div>
);

const VisualContent = ({ children }) => (
  <div className="w-full md:w-1/2 h-64 md:h-80">
    {children}
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Header */}
      <header className="bg-slate-900 text-white py-16 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           {/* Abstract tech background pattern */}
           <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-6">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-500/20 text-indigo-300 rounded-full mb-4">
            <Layers className="w-6 h-6 mr-2" />
            <span className="font-semibold uppercase tracking-wider text-sm">Ingeniería de Superficies</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Nitruración en <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Materiales Avanzados</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Explora cómo la modificación superficial transforma las propiedades de materiales más allá de los aceros tradicionales.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">

        <Section isReverse={false}>
          <TextContent title="Introducción a otros materiales">
            <p>
              Aunque la nitruración se asocia principalmente con aceros, también se aplica a <strong>otros materiales</strong> para modificar sus propiedades superficiales.
            </p>
            <p>
              Esta extensión permite adaptar materiales avanzados a condiciones de operación mucho más exigentes, abriendo puertas en distintos sectores tecnológicos innovadores.
            </p>
          </TextContent>
          <VisualContent>
            <IntroDiagram />
          </VisualContent>
        </Section>

        <Section isReverse={true}>
          <TextContent title="Nitruración del titanio">
            <p>
              El <strong>titanio</strong> es un material ampliamente utilizado en aplicaciones de alto desempeño. Su nitruración permite mejorar significativamente sus propiedades superficiales.
            </p>
            <p>
              Durante el proceso se forman compuestos como <span className="font-semibold text-yellow-600">TiN (nitruro de titanio)</span> y <span className="font-semibold text-yellow-600">Ti₂N</span>. Estos incrementan drásticamente la dureza y la resistencia al desgaste.
            </p>
            <div className="bg-red-50 text-red-700 p-4 rounded-lg border border-red-100 text-sm flex items-start">
              <span className="mr-2 font-bold text-lg mt-[-2px]">!</span>
              Sin embargo, un control inadecuado del proceso puede afectar negativamente la resistencia a la fatiga del material.
            </div>
          </TextContent>
          <VisualContent>
            <TitaniumDiagram />
          </VisualContent>
        </Section>

        <Section isReverse={false}>
          <TextContent title="Metales refractarios">
            <p>
              Los metales refractarios como <strong>zirconio (Zr), niobio (Nb), molibdeno (Mo), tungsteno (W) y tantalio (Ta)</strong> también pueden ser nitrurados.
            </p>
            <ul className="space-y-2 list-none pl-0">
              {[
                'Aumentar significativamente la dureza',
                'Mejorar la resistencia a la corrosión',
                'Incrementar la estabilidad en altas temperaturas'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-500 mt-4">
              Estas características los hacen ideales para la industria electrónica, energética y aeroespacial.
            </p>
          </TextContent>
          <VisualContent>
            <RefractoryDiagram />
          </VisualContent>
        </Section>

        <Section isReverse={true}>
          <TextContent title="Nitruración del aluminio">
            <p>
              El aluminio se somete a nitruración para formar <strong>nitruro de aluminio (AlN)</strong> en su superficie.
            </p>
            <p>
              Este compuesto aporta mayor resistencia al desgaste y una altísima conductividad térmica. No obstante, el proceso presenta limitaciones importantes.
            </p>
            <div className="bg-blue-50 text-blue-800 p-4 rounded-lg border border-blue-100 text-sm">
              Debido a la baja difusión del nitrógeno en la red de aluminio, es muy difícil la formación de capas profundas, resultando en tratamientos extremadamente superficiales.
            </div>
          </TextContent>
          <VisualContent>
            <AluminumDiagram />
          </VisualContent>
        </Section>

        {/* Full width comparison section */}
        <section className="py-16 mt-8 bg-slate-50 rounded-3xl px-6 md:px-12 border border-slate-200">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Comparación entre materiales nitrurados</h2>
            <p className="text-slate-600">
              La nitruración presenta diferencias clave dependiendo del sustrato. Estas diferencias reflejan la importancia crítica de adaptar el proceso térmico y químico según el material base.
            </p>
          </div>
          <ComparisonTable />
        </section>

        {/* Closure Section */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Visión integral de la nitruración</h2>
          <p className="text-slate-600 max-w-3xl mx-auto mb-12 text-lg">
            La nitruración ha evolucionado hasta abarcar una amplia gama de materiales más allá de los aceros, siendo un proceso fundamental en la <strong>ingeniería moderna de superficies</strong>. Comprender este proceso de manera integral permite diseñar superficies con propiedades específicas, optimizando el rendimiento, la durabilidad y la confiabilidad de componentes en múltiples industrias.
          </p>
          
          <div className="flex justify-center">
            <ConceptMap />
          </div>
        </section>

      </main>

      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>Generado como recurso educativo interactivo basado en textos académicos de ciencia de materiales.</p>
      </footer>
    </div>
  );
}