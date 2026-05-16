export default function TarjetaServicios() {
  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center p-6">
      <div className="relative overflow-hidden w-full max-w-5xl rounded-[40px] border border-cyan-400/20 bg-gradient-to-br from-[#0b1020] via-[#10182f] to-[#050816] shadow-[0_0_60px_rgba(0,255,255,0.15)]">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_rgba(0,255,255,0.4),transparent_35%)]"></div>
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.15)_1px,transparent_1px)] bg-[size:35px_35px]"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-10 p-10 md:p-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm tracking-[0.25em] uppercase mb-6">
              Desarrollador Web & Técnico TI
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight text-white mb-6">
              Adrián Ramos
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Valladares
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              Desarrollo sitios web modernos, aplicaciones dinámicas y soluciones tecnológicas para empresas, emprendedores y marcas personales.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <h3 className="text-cyan-300 font-bold mb-2">Frontend</h3>
                <p className="text-gray-400 text-sm">
                  React, TypeScript, Next.js, TailwindCSS, Framer Motion
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <h3 className="text-cyan-300 font-bold mb-2">Backend</h3>
                <p className="text-gray-400 text-sm">
                  Node.js, Express, PHP MVC, PostgreSQL, MySQL
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <h3 className="text-cyan-300 font-bold mb-2">Soporte TI</h3>
                <p className="text-gray-400 text-sm">
                  Armado, configuración, mantenimiento y soporte remoto
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <h3 className="text-cyan-300 font-bold mb-2">Experiencia</h3>
                <p className="text-gray-400 text-sm">
                  +4 años desarrollando proyectos web y soporte técnico
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:tuemail@gmail.com"
                className="px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-[0_0_25px_rgba(0,255,255,0.35)] hover:scale-105 transition"
              >
                Contactar
              </a>

              <a
                href="#"
                className="px-7 py-4 rounded-2xl border border-cyan-400/30 text-cyan-300 font-bold bg-cyan-400/5 hover:bg-cyan-400/10 transition"
              >
                Ver Portafolio
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            <div className="absolute w-[350px] h-[350px] bg-cyan-500/20 blur-3xl rounded-full"></div>

            <div className="relative w-full max-w-md rounded-[35px] border border-cyan-400/20 bg-[#0b1120]/80 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(0,255,255,0.1)]">
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://res.cloudinary.com/dcya6gygz/image/upload/v1778618747/icono_hvzgeb.png"
                  alt="Logo"
                  className="w-28 h-28 object-contain mb-6 drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]"
                />

                <h2 className="text-3xl font-black text-white mb-2">
                  Servicios Profesionales
                </h2>

                <p className="text-cyan-300 mb-8 tracking-widest uppercase text-sm">
                  Desarrollo • Diseño • Tecnología
                </p>

                <div className="w-full space-y-4 text-left">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-gray-400 text-sm">Especialidades</p>
                    <p className="text-white font-semibold">
                      Aplicaciones Web, APIs, Landing Pages y Sistemas
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-gray-400 text-sm">Tecnologías</p>
                    <p className="text-white font-semibold">
                      React • TypeScript • Node.js • PostgreSQL
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-gray-400 text-sm">Disponibilidad</p>
                    <p className="text-white font-semibold">
                      Freelance • Remoto • Proyectos Personalizados
                    </p>
                  </div>
                </div>

                <div className="mt-8 w-full rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/20 p-5 text-center">
                  <p className="text-gray-300 text-sm mb-2">
                    ¿Necesitas una página web moderna o soporte técnico?
                  </p>

                  <p className="text-cyan-300 font-bold text-xl">
                    ¡Trabajemos juntos!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
