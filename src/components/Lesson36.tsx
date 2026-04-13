import React from 'react';
import { Settings, Thermometer, Wind, Layers, Activity, GitCommit, ArrowRight, CheckCircle2 } from 'lucide-react';

// --- COMPONENTES VISUALES (Diagramas) ---

const VisualIntro = () => (
  <div className="flex justify-center items-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
    <svg viewBox="0 0 400 300" className="w-full max-w-md h-auto">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      {/* Ejes tridimensionales simplificados */}
      <path d="M 50 250 L 350 250 L 250 50 Z" fill="url(#grad1)" className="drop-shadow-lg" />
      <text x="200" y="270" textAnchor="middle" className="text-sm font-semibold fill-slate-700">Concentración de Nitrógeno [N]</text>
      <text x="120" y="140" textAnchor="middle" transform="rotate(-55, 120, 140)" className="text-sm font-semibold fill-slate-700">Temperatura (T)</text>
      <text x="320" y="150" textAnchor="middle" transform="rotate(55, 320, 150)" className="text-sm font-semibold fill-slate-700">Fases Formadas</text>
      
      {/* Nodos de interacción */}
      <circle cx="250" cy="50" r="8" fill="#1e40af" />
      <circle cx="50" cy="250" r="8" fill="#1e40af" />
      <circle cx="350" cy="250" r="8" fill="#1e40af" />
      <circle cx="200" cy="180" r="6" fill="#fbbf24" />
      <text x="200" y="200" textAnchor="middle" className="text-xs font-bold fill-white">Termodinámica</text>
    </svg>
  </div>
);

const PhaseDiagram = () => (
  <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-center">
    <h4 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wide">Diagrama de Fases Fe-N Simplificado</h4>
    <svg viewBox="0 0 500 350" className="w-full max-w-lg h-auto font-sans">
      {/* Ejes */}
      <line x1="50" y1="300" x2="450" y2="300" stroke="#94a3b8" strokeWidth="2" />
      <line x1="50" y1="300" x2="50" y2="50" stroke="#94a3b8" strokeWidth="2" />
      
      {/* Región Ferrita (α) */}
      <rect x="52" y="150" width="40" height="148" fill="#e2e8f0" opacity="0.8" />
      <text x="72" y="224" textAnchor="middle" className="font-bold fill-slate-700">α (Ferrita)</text>
      
      {/* Región Gamma Prima (γ') */}
      <rect x="150" y="100" width="60" height="198" fill="#c7d2fe" opacity="0.9" />
      <text x="180" y="200" textAnchor="middle" className="font-bold fill-indigo-800">γ' (Fe₄N)</text>
      
      {/* Región Epsilon (ε) */}
      <rect x="250" y="80" width="150" height="218" fill="#818cf8" opacity="0.9" />
      <text x="325" y="190" textAnchor="middle" className="font-bold text-lg fill-white">ε (Fe₂–₃N)</text>
      
      {/* Etiquetas Ejes */}
      <text x="250" y="335" textAnchor="middle" className="text-sm fill-slate-600 font-medium">Concentración de Nitrógeno (% N) →</text>
      <text x="20" y="175" textAnchor="middle" transform="rotate(-90, 20, 175)" className="text-sm fill-slate-600 font-medium">Temperatura (°C) →</text>
    </svg>
  </div>
);

const CrossSection = () => (
  <div className="relative p-6 bg-slate-800 rounded-xl shadow-lg overflow-hidden flex flex-col items-center">
    <div className="w-full max-w-md">
      {/* Superficie / Gas */}
      <div className="h-12 w-full border-b-2 border-dashed border-slate-500 flex items-center justify-center opacity-70">
        <span className="text-slate-300 text-sm tracking-widest uppercase">Atmósfera rica en Nitrógeno</span>
      </div>
      
      {/* Capa Compuesta */}
      <div className="h-16 w-full bg-indigo-500 flex items-center justify-center relative group transition-all hover:h-20">
        <span className="text-white font-bold z-10">Capa Compuesta (ε + γ')</span>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvc3ZnPg==')] opacity-50"></div>
      </div>
      
      {/* Zona de Difusión */}
      <div className="h-40 w-full bg-gradient-to-b from-indigo-900 to-slate-700 flex flex-col items-center justify-start pt-4 relative">
        <span className="text-indigo-200 font-semibold mb-2">Zona de Difusión</span>
        <span className="text-slate-400 text-xs">Nitrógeno disuelto en la matriz α</span>
        {/* Simulación de granos/agujas de difusión */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-400 via-transparent to-transparent"></div>
      </div>
      
      {/* Sustrato Base */}
      <div className="h-24 w-full bg-slate-600 flex items-center justify-center border-t border-slate-500">
        <span className="text-slate-400 text-sm">Material Base (Núcleo)</span>
      </div>
    </div>
  </div>
);

const PhasePropertiesTable = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-white p-5 rounded-xl border-t-4 border-indigo-600 shadow-sm flex flex-col items-center text-center">
      <div className="bg-indigo-100 text-indigo-700 font-bold text-xl h-12 w-12 rounded-full flex items-center justify-center mb-3">ε</div>
      <h4 className="font-bold text-slate-800 mb-2">Fase Épsilon</h4>
      <p className="text-sm text-slate-600 mb-4">Alta concentración de nitrógeno en la superficie externa.</p>
      <div className="mt-auto w-full bg-slate-50 p-3 rounded-lg">
        <ul className="text-sm text-left text-slate-700 space-y-1">
          <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2"/> Máxima Dureza</li>
          <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2"/> Resistencia al desgaste</li>
        </ul>
      </div>
    </div>

    <div className="bg-white p-5 rounded-xl border-t-4 border-blue-500 shadow-sm flex flex-col items-center text-center">
      <div className="bg-blue-100 text-blue-700 font-bold text-xl h-12 w-12 rounded-full flex items-center justify-center mb-3">γ'</div>
      <h4 className="font-bold text-slate-800 mb-2">Fase Gamma Prima</h4>
      <p className="text-sm text-slate-600 mb-4">Fase intermetálica estable bajo la capa épsilon.</p>
      <div className="mt-auto w-full bg-slate-50 p-3 rounded-lg">
        <ul className="text-sm text-left text-slate-700 space-y-1">
          <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2"/> Alta Estabilidad</li>
          <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2"/> Dureza Moderada</li>
        </ul>
      </div>
    </div>

    <div className="bg-white p-5 rounded-xl border-t-4 border-slate-400 shadow-sm flex flex-col items-center text-center">
      <div className="bg-slate-100 text-slate-700 font-bold text-xl h-12 w-12 rounded-full flex items-center justify-center mb-3"><Activity size={24}/></div>
      <h4 className="font-bold text-slate-800 mb-2">Zona de Difusión</h4>
      <p className="text-sm text-slate-600 mb-4">Solución sólida de nitrógeno intersticial en la matriz.</p>
      <div className="mt-auto w-full bg-slate-50 p-3 rounded-lg">
        <ul className="text-sm text-left text-slate-700 space-y-1">
          <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2"/> Límite de Fatiga</li>
          <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2"/> Tenacidad global</li>
        </ul>
      </div>
    </div>
  </div>
);

const ProcessFlow = () => (
  <div className="flex flex-col md:flex-row items-center justify-between w-full p-6 bg-white rounded-xl border border-slate-100 shadow-sm space-y-4 md:space-y-0">
    {[
      { step: 1, title: 'Descomposición', desc: 'Disociación del gas amoníaco (NH₃)', icon: Wind },
      { step: 2, title: 'Absorción', desc: 'Nitrógeno atómico en la superficie', icon: Layers },
      { step: 3, title: 'Difusión', desc: 'Migración hacia el interior (ley de Fick)', icon: ArrowRight },
      { step: 4, title: 'Formación', desc: 'Creación de nitruros (ε, γ\')', icon: GitCommit }
    ].map((item, idx) => (
      <React.Fragment key={item.step}>
        <div className="flex flex-col items-center text-center w-40">
          <div className="w-14 h-14 rounded-full bg-indigo-50 border-4 border-indigo-100 flex items-center justify-center text-indigo-600 mb-3 shadow-sm">
            <item.icon size={24} />
          </div>
          <h5 className="font-bold text-slate-800 text-sm mb-1">{item.step}. {item.title}</h5>
          <p className="text-xs text-slate-500">{item.desc}</p>
        </div>
        {idx < 3 && (
          <div className="hidden md:block w-12 h-1 bg-slate-200 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-slate-300 rotate-45"></div>
          </div>
        )}
      </React.Fragment>
    ))}
  </div>
);

const ControlGraph = () => (
  <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
    <h4 className="text-sm font-bold text-slate-500 mb-6 text-center uppercase tracking-wide">Perfil de Concentración de Nitrógeno vs Profundidad</h4>
    <div className="relative w-full max-w-2xl mx-auto h-64 border-l-2 border-b-2 border-slate-400">
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
        </defs>
        {/* Curva exponencial decayente */}
        <path d="M 0,10 Q 15,10 30,50 T 100,95" fill="none" stroke="url(#lineGrad)" strokeWidth="3" />
        
        {/* Área bajo la curva para Capa Compuesta */}
        <rect x="0" y="0" width="15" height="100" fill="#c7d2fe" opacity="0.3" />
        
        {/* Líneas guía */}
        <line x1="15" y1="0" x2="15" y2="100" stroke="#818cf8" strokeDasharray="2" strokeWidth="0.5"/>
      </svg>
      {/* Etiquetas superpuestas con HTML para mejor tipografía */}
      <div className="absolute top-2 left-2 text-xs font-bold text-indigo-700 bg-white/80 p-1 rounded">Capa Compuesta</div>
      <div className="absolute top-1/2 left-1/4 text-xs font-bold text-slate-600 bg-white/80 p-1 rounded">Zona de Difusión</div>
      <div className="absolute bottom-2 right-2 text-xs font-bold text-slate-500 bg-white/80 p-1 rounded">Material Base</div>
      
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-medium text-slate-600 whitespace-nowrap">% Nitrógeno</div>
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-medium text-slate-600">Profundidad desde la superficie (µm)</div>
    </div>
  </div>
);

const IntegrationDashboard = () => (
  <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white shadow-xl">
    <h3 className="text-xl font-bold mb-6 text-center text-indigo-200">Visión Integral del Proceso</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
      <div className="bg-slate-800 p-4 rounded-xl text-center border border-slate-700">
        <Thermometer className="w-8 h-8 mx-auto text-rose-400 mb-2" />
        <h4 className="font-bold text-sm text-slate-300">1. Termodinámica</h4>
        <p className="text-xs text-slate-400 mt-2">Temperatura y gas determinan el diagrama Fe-N.</p>
      </div>
      <div className="bg-slate-800 p-4 rounded-xl text-center border border-slate-700 relative">
        {/* Conectores */}
        <div className="hidden md:block absolute -left-4 top-1/2 w-4 h-0.5 bg-indigo-500"></div>
        <div className="hidden md:block absolute -right-4 top-1/2 w-4 h-0.5 bg-indigo-500"></div>
        
        <Settings className="w-8 h-8 mx-auto text-indigo-400 mb-2" />
        <h4 className="font-bold text-sm text-slate-300">2. Cinética (Difusión)</h4>
        <p className="text-xs text-slate-400 mt-2">El tiempo genera el gradiente y crecimiento de capa.</p>
      </div>
      <div className="bg-slate-800 p-4 rounded-xl text-center border border-slate-700">
        <Layers className="w-8 h-8 mx-auto text-emerald-400 mb-2" />
        <h4 className="font-bold text-sm text-slate-300">3. Microestructura</h4>
        <p className="text-xs text-slate-400 mt-2">Formación final de la capa compuesta y zona de difusión.</p>
      </div>
    </div>
  </div>
);

// --- COMPONENTE ESTRUCTURAL PRINCIPAL ---

const Section = ({ title, icon: Icon, children, explanation }) => (
  <section className="mb-16">
    <div className="flex items-center mb-6">
      <div className="bg-indigo-600 p-2 rounded-lg mr-4 shadow-md text-white">
        <Icon size={24} />
      </div>
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">{title}</h2>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-5 text-slate-600 leading-relaxed space-y-4 text-lg">
        {explanation}
      </div>
      <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-2">
        {children}
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* HEADER */}
      <header className="bg-indigo-900 text-white py-16 px-6 md:px-12 lg:px-24 mb-12 shadow-lg bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-700 via-indigo-900 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block px-3 py-1 bg-indigo-800/50 rounded-full text-indigo-200 text-sm font-semibold mb-4 border border-indigo-500/30">
            Módulo Educativo Interactivo
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Fundamentos de la Nitruración</h1>
          <p className="text-xl md:text-2xl text-indigo-200 max-w-3xl font-light">
            Descubre los principios termodinámicos, cinéticos y microestructurales que permiten endurecer y proteger el acero a nivel superficial.
          </p>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 pb-24">
        
        <Section 
          title="Introducción a la teoría de la nitruración" 
          icon={Activity}
          explanation={
            <>
              <p>La nitruración se fundamenta en principios termodinámicos y cinéticos que describen cómo el nitrógeno interactúa con el material.</p>
              <p>En particular, el sistema hierro-nitrógeno permite entender la formación de fases y la evolución de la microestructura durante el tratamiento térmico.</p>
            </>
          }
        >
          <VisualIntro />
        </Section>

        <hr className="border-slate-200 mb-16" />

        <Section 
          title="Sistema hierro-nitrógeno (Fe–N)" 
          icon={GitCommit}
          explanation={
            <>
              <p>El sistema hierro-nitrógeno describe las posibles fases que se forman cuando el nitrógeno se disuelve o reacciona con el hierro. Este sistema incluye:</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 mt-4">
                <li>Soluciones sólidas de nitrógeno en hierro.</li>
                <li>Fases intermetálicas como <strong>γ' (Fe₄N)</strong> y <strong>ε (Fe₂–₃N)</strong>.</li>
              </ul>
              <p className="mt-4 text-sm bg-blue-50 p-4 rounded-lg border border-blue-100 text-blue-800">
                La formación de estas fases depende principalmente de la concentración de nitrógeno y de la temperatura del proceso.
              </p>
            </>
          }
        >
          <PhaseDiagram />
        </Section>

        <hr className="border-slate-200 mb-16" />

        <Section 
          title="Formación de la capa nitrurada" 
          icon={Layers}
          explanation={
            <>
              <p>Durante la nitruración, se genera una estructura en capas bien definida, compuesta por dos zonas principales:</p>
              <div className="mt-4 space-y-4">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-bold text-slate-800">Capa compuesta (externa):</h4>
                  <p className="text-sm">Formada por nitruros como ε y γ'. Se caracteriza por su alta dureza y resistencia al desgaste.</p>
                </div>
                <div className="border-l-4 border-slate-500 pl-4">
                  <h4 className="font-bold text-slate-800">Zona de difusión (interna):</h4>
                  <p className="text-sm">Contiene nitrógeno disuelto en la matriz metálica. Esta zona mejora propiedades como la resistencia a la fatiga y la tenacidad.</p>
                </div>
              </div>
              <p className="mt-4">Ambas zonas trabajan de manera complementaria para optimizar el comportamiento del material.</p>
            </>
          }
        >
          <CrossSection />
        </Section>

        <hr className="border-slate-200 mb-16" />

        <Section 
          title="Relación entre fases y propiedades" 
          icon={CheckCircle2}
          explanation={
            <>
              <p>Las fases formadas durante la nitruración determinan directamente las propiedades finales del material.</p>
              <p>El control riguroso de la presencia y espesor de estas fases es la clave para adaptar el tratamiento térmico a distintas aplicaciones industriales, desde engranajes automotrices hasta matrices de extrusión.</p>
            </>
          }
        >
          <PhasePropertiesTable />
        </Section>

        <hr className="border-slate-200 mb-16" />

        <Section 
          title="Mecanismo del proceso" 
          icon={Settings}
          explanation={
            <>
              <p>El proceso de nitruración puede describirse como una secuencia de etapas físicas y químicas que ocurren en la interfase gas-metal y dentro del material:</p>
              <p>Este mecanismo está gobernado fundamentalmente por las leyes de difusión (Leyes de Fick) y el equilibrio de fases termodinámico.</p>
            </>
          }
        >
          <ProcessFlow />
        </Section>

        <hr className="border-slate-200 mb-16" />

        <Section 
          title="Control del proceso y microestructura" 
          icon={Thermometer}
          explanation={
            <>
              <p>El resultado final de la nitruración no es aleatorio; depende estrechamente de variables de control paramétrico:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4 font-medium text-slate-700">
                <li>Temperatura de operación</li>
                <li>Tiempo de tratamiento</li>
                <li>Potencial de nitrógeno (composición atmosférica)</li>
              </ul>
              <p className="mt-4">Estas variables determinan el espesor de la capa, la proporción exacta de las fases y la distribución del nitrógeno en la profundidad.</p>
            </>
          }
        >
          <ControlGraph />
        </Section>

        <hr className="border-slate-200 mb-16" />

        {/* CIERRE */}
        <section className="mb-8">
          <div className="bg-indigo-50 p-8 md:p-12 rounded-3xl border border-indigo-100 mb-8">
            <h2 className="text-3xl font-extrabold text-indigo-900 mb-4 text-center">Base científica de la nitruración</h2>
            <p className="text-center text-lg text-indigo-800 max-w-3xl mx-auto mb-8">
              La nitruración es un proceso gobernado por fenómenos de difusión y transformaciones de fase descritos por el sistema hierro-nitrógeno. Comprender estos fundamentos permite controlar la microestructura y diseñar superficies con propiedades específicas, optimizadas para el rendimiento extremo.
            </p>
            <IntegrationDashboard />
          </div>
        </section>

      </main>
      
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>Documento Educativo Interactivo generado por Ideastoweb.</p>
      </footer>
    </div>
  );
}