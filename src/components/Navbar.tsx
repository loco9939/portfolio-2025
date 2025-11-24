import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Skills', path: '/skills' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300',
                scrolled ? 'bg-navy/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-emerald font-mono">
                    &lt;Yiju /&gt;
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-slate-light hover:text-emerald transition-colors font-medium text-sm"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-emerald focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 w-full h-screen bg-navy flex flex-col items-center justify-center space-y-8 md:hidden z-[60]"
                    >
                        <button
                            className="absolute top-6 right-6 text-emerald focus:outline-none"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={28} />
                        </button>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl text-slate-light hover:text-emerald transition-colors font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
