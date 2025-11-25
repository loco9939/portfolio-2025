import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Folder, Info } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { PROJECTS } from '../constants';
import Accordion from '../components/Accordion';
import Carousel from '../components/Carousel';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = PROJECTS.find((p) => p.id === Number(id));

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-slate">
                <h2 className="text-2xl font-bold mb-4">Project not found</h2>
                <Link to="/projects" className="text-emerald hover:underline flex items-center gap-2">
                    <ArrowLeft size={20} /> Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 px-6 md:px-20 max-w-6xl mx-auto">
            <Link to="/projects" className="inline-flex items-center gap-2 text-emerald hover:underline mb-8">
                <ArrowLeft size={20} /> Back to Projects
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-20"
            >
                {/* Header Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-lighter">{project.title}</h1>
                        <p className="text-xl text-slate leading-relaxed">{project.description}</p>

                        <div className="flex gap-4 pt-4">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-navy-light border border-emerald text-emerald rounded hover:bg-emerald/10 transition-colors font-medium"
                            >
                                <Github size={20} />
                                GitHub
                            </a>
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-emerald text-navy rounded hover:bg-emerald-light transition-colors font-medium"
                            >
                                <ExternalLink size={20} />
                                Live Demo
                            </a>
                        </div>
                    </div>

                    <div className="aspect-video bg-navy-light rounded-xl overflow-hidden shadow-2xl border border-navy-lighter group relative">
                        {project.image ? (
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <Folder size={64} className="text-emerald opacity-50" />
                            </div>
                        )}
                    </div>
                </section>

                {/* Overview (Markdown) */}
                {project.overview && (
                    <section>
                        <h2 className="text-2xl font-bold text-slate-lighter mb-8 flex items-center gap-3">
                            <span className="text-emerald">01.</span> Overview
                        </h2>
                        <div className="prose prose-invert prose-lg max-w-none text-slate">
                            <ReactMarkdown>{project.overview}</ReactMarkdown>
                        </div>
                    </section>
                )}

                {/* Tech Stack */}
                {project.techStack && (
                    <section>
                        <h2 className="text-2xl font-bold text-slate-lighter mb-8 flex items-center gap-3">
                            <span className="text-emerald">02.</span> Tech Stack
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {project.techStack.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="group relative bg-navy-light p-4 rounded-lg border border-navy-lighter hover:border-emerald transition-colors"
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="font-mono text-emerald font-medium">{tech.name}</span>
                                        <Info size={16} className="text-slate-light opacity-50 group-hover:opacity-100 transition-opacity" />
                                    </div>

                                    {/* Tooltip */}
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-navy-lighter text-slate-lighter text-xs rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                        {tech.reason}
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-navy-lighter"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Troubleshooting */}
                {project.troubleshooting && project.troubleshooting.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold text-slate-lighter mb-8 flex items-center gap-3">
                            <span className="text-emerald">03.</span> Troubleshooting
                        </h2>
                        <Accordion items={project.troubleshooting} />
                    </section>
                )}

                {/* Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold text-slate-lighter mb-8 flex items-center gap-3">
                            <span className="text-emerald">04.</span> Gallery
                        </h2>
                        <Carousel images={project.gallery} />
                    </section>
                )}
            </motion.div>
        </div>
    );
};

export default ProjectDetail;
