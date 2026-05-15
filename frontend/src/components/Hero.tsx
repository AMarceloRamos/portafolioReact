import { motion } from "framer-motion";

export default function Hero() {
    // const fileId: string = "TU_FILE_ID";

    return (
        <section
            id="about"
            className="grid lg:grid-cols-2 gap-10 items-center px-6 sm:px-10 lg:px-16 py-12 lg:py-20 pt-24"
        >
            {/* IMAGE */}
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <img
                    src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200"
                    alt="Developer"
                    className="rounded-2xl object-cover shadow-2xl w-full h-[300px] sm:h-[450px]"
                />
            </motion.div>

            {/* CONTENT */}
            <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <p className="text-green-400 uppercase tracking-[4px] mb-4 text-sm">
                    FullStack Developer
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                    Adrián Ramos
                </h1>

                <p className="text-gray-400 mt-6 leading-relaxed text-sm sm:text-base">
                    Desarrollador apasionado enfocado en crear experiencias digitales escalables,
                    modernas y de alto rendimiento.
                </p>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-4 mt-8">
                    <a
                       href={`https://drive.google.com/uc?export=download&id=1-rJmcywC2p3F3XPACdmobvmkhis6ySV-`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full transition duration-300 inline-block text-center"
                    >
                        Download CV
                    </a>

                    <button className="px-8 py-3 border border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-black transition duration-300">
                        <a href="#contact">
                        Contact 
                        </a>
                    </button>
                   
                </div>
            </motion.div>
        </section>
    );
}