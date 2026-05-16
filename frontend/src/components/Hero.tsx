export default function Hero() {
    return (
        <section
            id="about"
            className="relative overflow-hidden px-6 sm:px-10 lg:px-16 py-16 pt-30 pb-4"
        >
            {/* BACKGROUND EFFECTS */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_rgba(0,255,255,0.4),transparent_35%)]"></div>

            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.15)_1px,transparent_1px)] bg-[size:35px_35px]"></div>

            {/* CONTENT */}
            <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center max-w-7xl mx-auto">

                {/* LEFT */}
                <div>
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-green-400 text-sm tracking-[0.25em] uppercase mb-6">
                        Desarrollador Web & Técnico TI
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white mb-6">
                        Adrián Ramos
                        <span className="block text-green-400 bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Valladares
                        </span>
                    </h1>

                    <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl">
                        Desarrollo sitios web modernos, aplicaciones dinámicas y soluciones
                        tecnológicas para empresas, emprendedores y marcas personales.
                    </p>

                    {/* CARDS */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                            <h3 className="text-green-400 font-bold mb-2">Frontend</h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                React, TypeScript, Next.js, TailwindCSS y Framer Motion
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                            <h3 className="text-green-400 font-bold mb-2">Backend</h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                Node.js, Express, PHP MVC, PostgreSQL y MySQL
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                            <h3 className="text-green-400 font-bold mb-2">Soporte TI</h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                Armado, configuración, mantenimiento y soporte remoto
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                            <h3 className="text-green-400 font-bold mb-2">Experiencia</h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                +4 años desarrollando proyectos web y soporte técnico
                            </p>
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="mailto:tuemail@gmail.com"
                            className="flex items-center gap-2 px-5 py-3 rounded-full border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition"
                        >
                            Contactar
                        </a>

                        <a
                            href="#projects"
                            className="px-7 py-4 rounded-2xl border border-cyan-400/30 text-cyan-300 font-bold bg-cyan-400/5 hover:bg-cyan-400/10 transition"
                        >
                            Ver Portafolio
                        </a>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="relative flex items-stretch justify-center h-full min-h-[200px] ml-20">

                    {/* Glow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full"></div>
                    </div>

                    <div className="relative flex items-center justify-center w-full">
                        <img
                            src="https://res.cloudinary.com/dcya6gygz/image/upload/v1778886495/perfilpixel_goy6e2.png"
                            alt="Adrián Ramos Pixel Art"
                            className="
                             w-[700px]
                             max-w-none
                            scale-125
                            object-contain
                            drop-shadow-[0_0_45px_rgba(0,255,255,1)]
                        "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}