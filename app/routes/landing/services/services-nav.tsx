import { motion } from "framer-motion";
import type { ServiceCategory } from "./index";

interface ServicesNavProps {
    activeCategory: ServiceCategory;
    onCategoryChange: (category: ServiceCategory) => void;
}

const navItems: { id: ServiceCategory; label: string }[] = [
    { id: "business", label: "Start Your Business" },
    { id: "gst", label: "GST" },
    { id: "roc", label: "ROC Compliance" }
];

export const ServicesNav = ({ activeCategory, onCategoryChange }: ServicesNavProps) => {
    return (
        <div className="w-full max-w-2xl mx-auto">
            <nav className="relative flex items-center justify-between p-1.5 bg-gray-100/50 rounded-full">
                {/* Animated Background */}
                <motion.div
                    className="absolute h-full top-0 rounded-full bg-white shadow-lg"
                    layoutId="navBackground"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    style={{
                        width: `${100 / navItems.length}%`,
                        left: `${(navItems.findIndex(item => item.id === activeCategory) * 100) / navItems.length}%`
                    }}
                />

                {/* Nav Items */}
                {navItems.map(({ id, label }) => (
                    <motion.button
                        key={id}
                        onClick={() => onCategoryChange(id)}
                        className={`relative z-10 flex-1 py-2 text-sm sm:text-base font-medium transition-colors duration-200
                            ${activeCategory === id ? 'text-primary' : 'text-gray-600 hover:text-gray-900'}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {label}
                    </motion.button>
                ))}
            </nav>
        </div>
    );
}; 