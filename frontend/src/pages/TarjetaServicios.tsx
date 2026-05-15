export default function TarjetaServicios() {
  const descargarTarjeta = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2 border border-slate-200">
        {/* Lado Izquierdo */}
        <div className="bg-gradient-to-br from-blue-700 via-cyan-600 to-slate-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-md">
              Técnico en Computación & Desarrollador Web
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Adrián Ramos Valladares
            </h1>

            <p className="text-lg text-slate-100 leading-relaxed mb-8">
              Desarrollo sitios web modernos, aplicaciones y soluciones digitales para empresas,
              emprendedores y marcas personales.
            </p>

            <div className="space-y-4 text-sm md:text-base">
              <div className="flex items-start gap-3">
                <span className="text-cyan-300 text-xl">✔</span>
                <p>Desarrollo Web Frontend y Backend</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-cyan-300 text-xl">✔</span>
                <p>Creación de Sistemas Web y APIs</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-cyan-300 text-xl">✔</span>
                <p>Diseño Responsivo y Optimización Web</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-cyan-300 text-xl">✔</span>
                <p>Soporte Técnico y Configuración de Equipos</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-cyan-300 text-xl">✔</span>
                <p>Mantenimiento y Armado de Computadores</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-10 border-t border-white/20 pt-6 text-sm text-slate-200">
            <p>Experiencia en:</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {[
                'React',
                'Next.js',
                'Node.js',
                'PHP',
                'JavaScript',
                'TypeScript',
                'Java',
                'PostgreSQL',
                'MySQL',
                'Git',
                'Bootstrap',
                'SASS'
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-white/15 px-3 py-1 rounded-full backdrop-blur-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Lado Derecho */}
        <div className="p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Servicios Profesionales
            </h2>

            <p className="text-slate-600 leading-relaxed mb-8">
              Técnico en Análisis y Programación Computacional con experiencia desarrollando
              plataformas web, e-commerce, sistemas internos empresariales y soporte técnico.
            </p>

            <div className="grid gap-4">
              <div className="bg-slate-100 rounded-2xl p-5 hover:shadow-lg transition-all">
                <h3 className="font-bold text-slate-800 mb-2">💻 Desarrollo Web</h3>
                <p className="text-slate-600 text-sm">
                  Sitios corporativos, portafolios, landing pages y aplicaciones web modernas.
                </p>
              </div>

              <div className="bg-slate-100 rounded-2xl p-5 hover:shadow-lg transition-all">
                <h3 className="font-bold text-slate-800 mb-2">⚙ Sistemas Personalizados</h3>
                <p className="text-slate-600 text-sm">
                  Sistemas con login, roles, bases de datos y APIs integradas.
                </p>
              </div>

              <div className="bg-slate-100 rounded-2xl p-5 hover:shadow-lg transition-all">
                <h3 className="font-bold text-slate-800 mb-2">🛠 Soporte Técnico</h3>
                <p className="text-slate-600 text-sm">
                  Reparación, mantención, optimización y configuración de computadores.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-5">
            <div className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-xl mb-2">¿Necesitas una solución digital?</h3>
              <p className="text-slate-100 text-sm">
                Trabajo en proyectos personalizados para empresas, emprendedores y clientes particulares.
              </p>
            </div>

            <button
              onClick={descargarTarjeta}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-2xl transition-all duration-300 shadow-lg hover:scale-[1.02]"
            >
              Descargar / Compartir Tarjeta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
