import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-6 md:px-20 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-lighter mb-4 flex items-center gap-4">
                    <span className="text-emerald">02.</span> Skills
                    <span className="h-px bg-navy-lighter flex-grow max-w-xs"></span>
                </h2>
            </motion.div>

            <div className="space-y-16">
                {Object.entries(SKILLS).map(([category, items], categoryIndex) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    >
                        <h3 className="text-xl font-semibold text-emerald mb-6">{category}</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {items.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    whileHover={{ y: -5, borderColor: skill.color }}
                                    className="bg-navy-light p-6 rounded-lg border border-navy-lighter flex flex-col items-center justify-center gap-4 transition-colors group cursor-default"
                                >
                                    <skill.icon className="text-4xl text-slate group-hover:text-white transition-colors" style={{ color: undefined }} />
                                    <span className="text-slate-light font-medium">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
