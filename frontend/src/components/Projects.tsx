import { motion } from "framer-motion";
import { useState, useEffect } from "react"
import {
    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";

import { API } from "../services/api";

interface Project {
    _id: string;
    titulo: string;
    descripcion: string;
    imagen: string;
    url?: string;
    tecnologias?: string[];
    github: string
}


export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    // 📌 Obtener proyectos
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await API.get("/projects");
                setProjects(res.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <>
            {/* LOADING */}
            {loading && (
                <div className="flex justify-center items-center py-40">
                    <div className="w-16 h-16 border-4 border-[#8176AF] border-t-transparent rounded-full animate-spin" />
                </div>
            )}
            <section
                id="projects"
                className="px-6 sm:px-10 lg:px-16 py-20"
            >
                {/* TITLE */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <p className="text-green-400 uppercase tracking-[4px] text-sm mb-3">
                        Portfolio
                    </p>

                    <h2 className="text-4xl sm:text-5xl font-black text-white">
                        Proyectos destacados
                    </h2>

                    <p className="text-gray-400 mt-5 max-w-2xl leading-relaxed">
                     
                    Una selección de proyectos centrados en el rendimiento,
                    la escalabilidad y las experiencias de usuario modernas.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.titulo}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="group bg-[#161616] border border-white/10 rounded-3xl overflow-hidden hover:border-green-400/50 transition"
                        >
                            {/* IMAGE */}
                            <div className="overflow-hidden relative">
                                <img
                                    src={project.imagen}
                                    alt={project.titulo}
                                    className="h-60 w-full object-cover group-hover:scale-110 transition duration-700"
                                />

                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
                            </div>

                            {/* CONTENT */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {project.titulo}
                                </h3>

                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {project.descripcion}
                                </p>

                                {/* BUTTONS */}
                                <div className="flex items-center gap-4">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"

                                        className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#222] text-white hover:bg-green-400 hover:text-black transition"
                                    >
                                        <FaGithub />
                                        Code
                                    </motion.a>

                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.url}
                                         target="_blank"
                                         rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-3 rounded-full border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition"
                                    >
                                        <FaExternalLinkAlt />
                                        Live Demo
                                    </motion.a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>
        </>
    );
}
