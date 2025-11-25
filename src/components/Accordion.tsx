import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';

interface AccordionProps {
    items: {
        problem: string;
        solution: string;
        result: string;
    }[];
}

const Accordion = ({ items }: AccordionProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border border-navy-lighter rounded-lg overflow-hidden bg-navy-light"
                >
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-navy-lighter/30 transition-colors"
                    >
                        <span className="font-bold text-slate-lighter text-lg">
                            <span className="text-emerald mr-2">Q.</span>
                            {item.problem}
                        </span>
                        <ChevronDown
                            className={cn(
                                "text-slate transition-transform duration-300",
                                activeIndex === index ? "rotate-180" : ""
                            )}
                        />
                    </button>

                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="px-6 pb-6 pt-2 border-t border-navy-lighter/50">
                                    <div className="mb-4">
                                        <h4 className="text-emerald font-semibold mb-2">Solution</h4>
                                        <p className="text-slate leading-relaxed">{item.solution}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-emerald font-semibold mb-2">Result</h4>
                                        <p className="text-slate leading-relaxed">{item.result}</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
