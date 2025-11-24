import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero = () => {
    const typedText = useTypewriter(['React', 'TypeScript', 'Next.js', 'Tailwind CSS']);

    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-6xl mx-auto pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-emerald font-mono mb-5 text-lg">Hi, my name is</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <h1 className="text-5xl md:text-7xl font-bold text-slate-lighter mb-4">
                    Yiju.
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2 className="text-4xl md:text-6xl font-bold text-slate mb-8">
                    I build <span className="text-emerald">{typedText}</span>
                    <span className="animate-pulse">|</span>
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-xl text-slate text-lg mb-12 leading-relaxed"
            >
                <p>
                    I'm a frontend developer specializing in building exceptional digital experiences.
                    Currently, I'm focused on building accessible, human-centered products.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <a
                    href="#projects"
                    className="group inline-flex items-center gap-2 px-8 py-4 border border-emerald text-emerald rounded hover:bg-emerald/10 transition-all duration-300"
                >
                    Check out my projects
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
