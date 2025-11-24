import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-slate-lighter mb-4">
                    Hello, I'm <span className="text-emerald">Developer</span>
                </h1>
                <p className="text-xl text-slate max-w-2xl mx-auto mb-8">
                    I build things for the web.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border border-emerald text-emerald rounded hover:bg-emerald/10 transition-colors"
                >
                    Check out my work
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Home;
