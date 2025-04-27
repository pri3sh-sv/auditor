import { motion } from "framer-motion";
import { useRotatingBenefits } from "../../hooks/useRotatingBenefits";
import { benefits } from "./data";

/**
 * Component that shows a stacked rotating display of benefits
 * Only visible on mobile screens (sm:hidden)
 */
const StackedBenefits = () => {
    const activeIndex = useRotatingBenefits(benefits.length);

    return (
        <div className="relative h-[180px] w-full sm:hidden">
            {benefits.map((benefit, index) => {
                const isActive = index === activeIndex;
                const position = (index - activeIndex + benefits.length) % benefits.length;
                return (
                    <motion.div
                        key={index} 
                        animate={{
                            top: position * 24, 
                            scale: 1 - (position * 0.03), 
                            opacity: position === 0 ? 1 : 0.8 - (position * 0.1), 
                            zIndex: benefits.length - position
                        }}
                        initial={false}
                        transition={{duration: 0.5, ease: [0.32, 0.72, 0, 1]}}
                        style={{position: 'absolute', width: '100%', transformOrigin: 'top center'}}
                        className={`
                            rounded-xl p-3 backdrop-blur-sm
                            ${isActive ? 'bg-gradient-to-br shadow-lg' : 'bg-white/10 shadow'}
                            ${benefit.color}
                            transition-all duration-300
                        `}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`
                                flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg
                                ${isActive ? 'bg-white/90 text-primary' : 'bg-white/30'}
                                flex items-center justify-center shadow-sm
                            `}>
                                {benefit.icon}
                            </div>
                            <p className={`
                                font-medium text-sm sm:text-[15px] font-noto
                                ${isActive ? 'text-gray-800' : 'text-gray-600'}
                            `}>
                                {benefit.text}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default StackedBenefits; 