import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 md:px-20 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-lighter mb-4 flex items-center gap-4">
                    <span className="text-emerald">03.</span> Projects
                    <span className="h-px bg-navy-lighter flex-grow max-w-xs"></span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="bg-navy-light rounded-lg overflow-hidden border border-navy-lighter hover:border-emerald/50 transition-colors group flex flex-col h-full"
                    >
                        {/* Image Placeholder */}
                        <div className="h-48 bg-navy-lighter/50 flex items-center justify-center group-hover:bg-navy-lighter/70 transition-colors relative overflow-hidden">
                            <Folder size={48} className="text-emerald opacity-50" />
                            <div className="absolute inset-0 bg-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-slate-lighter group-hover:text-emerald transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        className="text-slate hover:text-emerald transition-colors"
                                        aria-label="GitHub Repo"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="text-slate hover:text-emerald transition-colors"
                                        aria-label="Live Demo"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <p className="text-slate mb-6 text-sm leading-relaxed flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-3 mt-auto">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-mono text-emerald/80 bg-emerald/5 px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
