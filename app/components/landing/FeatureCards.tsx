import { motion } from "framer-motion";
import { features } from "./data";

/**
 * Floating feature cards displayed around the illustration
 * Only visible on larger screens
 */
const FeatureCards = () => {
    return (
        <>
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                        opacity: 1, 
                        scale: 1,
                        y: [0, -10, 0]
                    }}
                    transition={{
                        delay: 0.2 * index,
                        y: {
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: index * 0.5
                        }
                    }}
                    className={`absolute bg-white rounded-xl p-4 shadow-lg w-48 xl:w-56 z-20 hidden
                        ${index === 0 ? 'lg:block top-4 left-1/3 xl:left-1/2 -translate-x-1/2' : 
                        index === 1 ? '2xl:block top-1/3 -translate-y-1/2 right-[-120px]' : 
                        'lg:block bottom-4 left-1/3 xl:left-1/2 -translate-x-1/2'}`}
                >
                    <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-7 h-7 xl:w-8 xl:h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                            {feature.icon}
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-900 text-sm xl:text-base font-noto">{feature.title}</h3>
                            <p className="text-xs xl:text-sm text-gray-500 mt-1 font-noto">{feature.description}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </>
    );
};

export default FeatureCards; 