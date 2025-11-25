import { motion } from 'framer-motion';
import { Briefcase, Github, Linkedin, Mail, Globe } from 'lucide-react';
import { EXPERIENCES, SOCIAL_LINKS } from '../constants';
import profileImg from '../assets/profile.png'

const About = () => {
    return (
        <section className="min-h-screen pt-24 px-6 md:px-20 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-lighter mb-4 flex items-center gap-4">
                    <span className="text-emerald">About Me</span>
                    <span className="h-px bg-navy-lighter flex-grow max-w-xs"></span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Profile Image & Quick Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:col-span-1"
                >
                    <div className="relative group w-full max-w-sm mx-auto md:mx-0 aspect-square bg-navy-light rounded-lg overflow-hidden border-2 border-emerald/20 hover:border-emerald transition-colors">
                        <div className="absolute inset-0 flex items-center justify-center bg-navy-lighter/30">
                            <img src={profileImg} alt="Profile" className="w-full h-full object-contain" />
                        </div>
                        <div className="absolute inset-0 bg-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="mt-4">
                        <p className="text-slate-lighter text-center">Contact</p>
                        <div className="flex justify-center gap-6 mt-4">
                            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-emerald transition-colors">
                                <Github size={24} />
                            </a>
                            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-emerald transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href={SOCIAL_LINKS.email} className="text-slate hover:text-emerald transition-colors">
                                <Mail size={24} />
                            </a>
                            <a href={SOCIAL_LINKS.blog} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-emerald transition-colors">
                                <Globe size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Bio & Timeline */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="md:col-span-2 space-y-8"
                >
                    <div className="text-slate text-lg leading-relaxed space-y-4">
                        <p>
                            Hello! I'm Yiju, a passionate Frontend Developer dedicated to creating intuitive and dynamic user experiences.
                        </p>
                        <p>
                            As a front-end developer working on React and TypeScript, I'm currently responsible for the development and maintenance of B2B logistics platform services and admin services.
                        </p>
                        <p>
                            I develop with a user-centered UX in mind, ensuring every user is taken care of.
                            I live by the maxim, <strong className='underline'>"No individual is greater than the team,"</strong> and strive to become a leader who guides teams in the right direction through collaboration.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-slate-lighter flex items-center gap-2">
                            <Briefcase size={24} className="text-emerald" /> Experience & Education
                        </h3>

                        <div className="border-l-2 border-navy-lighter ml-3 pl-8 space-y-8 relative">
                            {EXPERIENCES.map((exp, index) => (
                                <div key={index} className="relative">
                                    <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-navy border-2 border-emerald"></span>
                                    <h4 className="text-xl font-bold text-slate-lighter">{exp.title}</h4>
                                    <p className="text-emerald font-mono text-sm mb-2">{exp.period}</p>
                                    <p className="text-slate whitespace-pre-line">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
