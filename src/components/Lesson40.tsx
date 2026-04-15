import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
  Settings, PenTool, Wind, ArrowDownCircle, Layers, ShieldCheck, ArrowRight, Activity 
} from 'lucide-react';

export default function App() {
  // Datos para el gráfico de barras del Objetivo 3
  const propertiesData = [
    {
      name: 'Dureza',
      'Sin Tratamiento': 30,
      'Nitrocarburizado': 95,
    },
    {
      name: 'Res. al Desgaste',
      'Sin Tratamiento': 25,
      'Nitrocarburizado': 90,
    },
    {
      name: 'Res. a la Corrosión',
      'Sin Tratamiento': 40,
      'Nitrocarburizado': 85,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200">
      
      {/* Header */}
      <header className="bg-slate-900 text-white py-12 px-6 shadow-lg">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Fundamentos de la <span className="text-blue-400">Nitrocarburización</span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-12 px-6 space-y-20">

        {/* Sección 1: Introducción */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2 border-b-2 border-blue-500 pb-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-black">1</span>
              Introducción al proceso
            </h2>
            <div className="prose text-slate-600 leading-relaxed">
              <p>
                La nitrocarburización es un tratamiento termoquímico aplicado principalmente a aceros para modificar sus propiedades superficiales <strong>sin alterar de forma significativa su estructura interna</strong>.
              </p>
              <p>
                Se enmarca dentro de las técnicas de ingeniería de superficies, cuyo objetivo es mejorar el desempeño funcional de los materiales en condiciones de servicio exigentes.
              </p>
            </div>
          </div>
          {/* Visual: Esquema de pieza metálica */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex flex-col items-center">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">Sección Transversal de Pieza Tratada</h3>
            <svg viewBox="0 0 300 200" className="w-full max-w-sm drop-shadow-md">
              <defs>
                <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#94a3b8" />
                </radialGradient>
                <linearGradient id="surfaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
              {/* Núcleo */}
              <circle cx="150" cy="100" r="70" fill="url(#coreGrad)" />
              {/* Capa Superficial */}
              <circle cx="150" cy="100" r="80" fill="none" stroke="url(#surfaceGrad)" strokeWidth="12" />
              
              <text x="150" y="105" textAnchor="middle" fill="#334155" fontWeight="bold" fontSize="14">Núcleo Dúctil</text>
              
              {/* Líneas indicadoras */}
              <path d="M 235 100 L 270 70 L 290 70" fill="none" stroke="#475569" strokeWidth="1.5" />
              <text x="290" y="65" textAnchor="end" fill="#2563eb" fontSize="12" fontWeight="bold">Capa modificada</text>
              
              <path d="M 150 185 L 150 210 L 200 210" fill="none" stroke="#475569" strokeWidth="1.5" />
            </svg>
            <p className="text-xs text-slate-500 mt-4 text-center">Esquema que distingue la capa endurecida del núcleo intacto.</p>
          </div>
        </section>

        {/* Sección 2: Definición */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="md:order-2">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2 border-b-2 border-blue-500 pb-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-black">2</span>
              Definición de nitrocarburización
            </h2>
            <div className="prose text-slate-600 leading-relaxed">
              <p>
                Es un proceso de difusión simultánea de <strong>nitrógeno y carbono</strong> en la superficie de un metal.
              </p>
              <p>
                Se realiza a temperaturas relativamente bajas (aproximadamente entre <strong className="text-blue-600">500 y 580 °C</strong>), dentro del rango donde el acero se encuentra en <strong>estado ferrítico</strong>. Esta condición de baja temperatura evita transformaciones estructurales profundas en el material base.
              </p>
            </div>
          </div>
          {/* Visual: Diagrama de Temperatura/Fases */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 md:order-1">
             <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 text-center">Diagrama de Temperatura vs. Fases (Simplificado)</h3>
             <svg viewBox="0 0 400 300" className="w-full h-auto text-xs font-sans">
                {/* Ejes */}
                <line x1="50" y1="260" x2="380" y2="260" stroke="#cbd5e1" strokeWidth="2"/>
                <line x1="50" y1="20" x2="50" y2="260" stroke="#cbd5e1" strokeWidth="2"/>
                <text x="360" y="275" textAnchor="middle" fill="#64748b">% Carbono</text>
                <text x="15" y="140" textAnchor="middle" fill="#64748b" transform="rotate(-90 15 140)">Temperatura (°C)</text>

                {/* Fase Austenítica */}
                <rect x="52" y="20" width="328" height="120" fill="#fde68a" opacity="0.6"/>
                <text x="216" y="80" textAnchor="middle" fill="#b45309" fontWeight="bold">Fase Austenítica (γ)</text>
                <line x1="45" y1="140" x2="380" y2="140" stroke="#ef4444" strokeDasharray="5,5"/>
                <text x="40" y="145" textAnchor="end" fill="#ef4444" fontWeight="bold">727°</text>

                {/* Fase Ferrítica */}
                <rect x="52" y="142" width="328" height="116" fill="#e2e8f0" opacity="0.6"/>
                <text x="216" y="230" textAnchor="middle" fill="#475569" fontWeight="bold">Fase Ferrítica (α)</text>

                {/* Zona de Nitrocarburización */}
                <rect x="52" y="170" width="328" height="40" fill="#3b82f6" opacity="0.4"/>
                <line x1="45" y1="170" x2="55" y2="170" stroke="#2563eb" />
                <line x1="45" y1="210" x2="55" y2="210" stroke="#2563eb" />
                <text x="40" y="175" textAnchor="end" fill="#2563eb" fontWeight="bold">580°</text>
                <text x="40" y="215" textAnchor="end" fill="#2563eb" fontWeight="bold">500°</text>
                
                <text x="216" y="195" textAnchor="middle" fill="#1e3a8a" fontWeight="bold" fontSize="14">Zona de Nitrocarburización</text>
             </svg>
          </div>
        </section>

        {/* Sección 3: Objetivo */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="mb-8 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 inline-flex items-center justify-center gap-2 border-b-2 border-blue-500 pb-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-black">3</span>
              Objetivo del tratamiento superficial
            </h2>
            <p className="text-slate-600 leading-relaxed mt-4">
              El propósito es mejorar propiedades específicas en la capa superficial manteniendo intactas las características del núcleo. Estas propiedades son críticas en componentes sometidos a fricción, carga y ambientes agresivos.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <ul className="space-y-4">
              {[
                { text: "Aumento de la dureza superficial", icon: <ShieldCheck className="text-emerald-500"/> },
                { text: "Mayor resistencia al desgaste", icon: <Activity className="text-blue-500"/> },
                { text: "Mejora de la resistencia a la corrosión", icon: <Layers className="text-purple-500"/> },
                { text: "Optimización de propiedades tribológicas (fricción y contacto)", icon: <Settings className="text-amber-500"/> }
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 bg-slate-50 p-4 rounded-lg border border-slate-100 shadow-sm">
                  <div className="p-2 bg-white rounded-md shadow-sm">{item.icon}</div>
                  <span className="font-medium text-slate-700">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Visual: Gráfico Comparativo */}
            <div className="h-80 w-full">
               <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2 text-center">Comparativa de Propiedades (Relativa)</h3>
               <ResponsiveContainer width="100%" height="100%">
                <BarChart data={propertiesData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0"/>
                  <XAxis dataKey="name" tick={{fill: '#64748b'}} axisLine={false} tickLine={false} />
                  <YAxis tick={{fill: '#64748b'}} axisLine={false} tickLine={false} />
                  <Tooltip 
                    cursor={{fill: '#f8fafc'}}
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                  />
                  <Legend wrapperStyle={{paddingTop: '20px'}}/>
                  <Bar dataKey="Sin Tratamiento" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Nitrocarburizado" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Sección 4: Mecanismo */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center justify-center gap-2 border-b-2 border-blue-500 pb-2 max-w-max mx-auto">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-black">4</span>
            Mecanismo del proceso
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            El proceso se desarrolla mediante una serie de etapas físico-químicas, basadas en el principio de difusión controlada de elementos (N y C).
          </p>

          {/* Visual: Diagrama Secuencial */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-2 lg:gap-4">
            {[
              { title: "1. Descomposición", desc: "De los compuestos activos (gases)", icon: <Wind className="w-8 h-8 text-sky-500"/> },
              { title: "2. Absorción", desc: "De átomos de N y C en la superficie", icon: <ArrowDownCircle className="w-8 h-8 text-blue-500"/> },
              { title: "3. Difusión", desc: "De los átomos hacia el interior", icon: <Layers className="w-8 h-8 text-indigo-500"/> },
              { title: "4. Formación", desc: "Nuevas fases superficiales enriquecidas", icon: <ShieldCheck className="w-8 h-8 text-emerald-500"/> }
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="bg-white w-full md:w-64 p-6 rounded-xl shadow-md border-t-4 border-t-blue-500 text-center relative hover:-translate-y-1 transition-transform">
                  <div className="mx-auto bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-inner">
                    {step.icon}
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <ArrowRight className="hidden md:block w-8 h-8 text-slate-300 flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Sección 5: Importancia */}
        <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20 pointer-events-none"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-black">5</span>
                Importancia en Ingeniería
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                La nitrocarburización es fundamental porque permite extender la vida útil y el rendimiento de componentes mecánicos sin comprometer su tenacidad interna.
              </p>
              <p className="text-slate-400 bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                Solución eficiente para aplicaciones industriales donde se requiere <strong className="text-blue-400">resistencia superficial combinada con un núcleo dúctil</strong>.
              </p>
            </div>
            
            {/* Visual: Aplicaciones Industriales */}
            <div className="grid gap-4">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Aplicaciones y Zonas de Desgaste</h3>
              {[
                { title: "Engranajes", desc: "Resistencia en los flancos de los dientes.", icon: <Settings className="w-6 h-6"/> },
                { title: "Ejes de Transmisión", desc: "Protección contra fricción en los apoyos.", icon: <Activity className="w-6 h-6"/> },
                { title: "Herramientas de Corte/Matricería", desc: "Mantenimiento del filo y anti-desgaste.", icon: <PenTool className="w-6 h-6"/> }
              ].map((app, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-slate-800 border border-slate-700 p-4 rounded-xl relative overflow-hidden group">
                  {/* Glowing edge representing treated surface */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-emerald-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                  
                  <div className="p-3 bg-slate-700/50 text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
                    {app.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-100">{app.title}</h4>
                    <p className="text-sm text-slate-400">{app.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}