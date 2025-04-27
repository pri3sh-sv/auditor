import { motion } from "framer-motion";
import { benefits } from "./data";
import { benefitVariants, containerVariants } from "./animations";

/**
 * Grid layout for benefits, visible on sm screens and above
 */
const BenefitsGrid = () => {
    return (
        <motion.div 
            variants={containerVariants}
            className="mt-6 sm:mt-8 hidden sm:block"
        >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        variants={benefitVariants}
                        whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                        }}
                        className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${benefit.color} p-3 sm:p-4 backdrop-blur-sm`}
                    >
                        <div className="flex items-center gap-2 sm:gap-3">
                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.8 + (index * 0.1), duration: 0.3, type: "spring" }}
                                className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/90 text-primary flex items-center justify-center shadow-sm"
                            >
                                {benefit.icon}
                            </motion.div>
                            <p className="text-gray-800 font-medium text-sm sm:text-base font-noto">{benefit.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default BenefitsGrid; 