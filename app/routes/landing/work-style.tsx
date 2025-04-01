import { motion } from "framer-motion";
import { HiDocumentArrowUp, HiCog8Tooth, HiCheckCircle } from "react-icons/hi2";

const steps = [
    {
        icon: <HiDocumentArrowUp className="w-12 h-12" />,
        title: "We Collect Documents",
        description: "We collect necessary documents from you to initiate the process.",
        color: "from-primary/10 to-primary/5"
    },
    {
        icon: <HiCog8Tooth className="w-12 h-12" />,
        title: "We Process",
        description: "Process the documents and we communicate with government bodies.",
        color: "from-secondary/10 to-secondary/5"
    },
    {
        icon: <HiCheckCircle className="w-12 h-12" />,
        title: "We Deliver",
        description: "After successfully processing your documents, we will communicate the deliverables",
        color: "from-[#55B848]/10 to-[#55B848]/5"
    }
];

const WorkStyle = () => {
    return (
        <section className="w-full py-16 mt-16 lg:py-24 lg:mt-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-12"
                >
                    {/* Title with gradient underline */}
                    <div className="text-center relative">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6"
                        >
                            Simple 3-Step Process
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
                        >
                            How We Work
                            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-2 bg-gradient-to-r from-secondary to-primary/50 rounded-full" />
                        </motion.h2>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 w-full max-w-6xl mx-auto relative">
                        {/* Connector Lines */}
                        <div className="hidden lg:block absolute top-1/2 left-[33%] right-[33%] -translate-y-1/2 h-[3px] bg-gradient-to-r from-primary/20 to-secondary/20" />
                        
                        {steps.map(({ icon, title, description, color }, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ 
                                    delay: 0.2 * (index + 1),
                                    duration: 0.8,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{ y: -8 }}
                                className="relative group"
                            >
                                {/* Card */}
                                <div className={`
                                    relative p-6 sm:p-8 rounded-2xl bg-white shadow-lg h-[200px] sm:h-[220px]
                                    before:absolute before:inset-0 before:bg-gradient-to-br ${color}
                                    before:rounded-2xl before:opacity-40 before:transition-opacity
                                    group-hover:before:opacity-60
                                `}>
                                    {/* Step Number */}
                                    <div className="absolute -top-4 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-primary font-bold z-10">
                                        {index + 1}
                                    </div>
                                    
                                    {/* Icon */}
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 * (index + 1), duration: 0.5 }}
                                        className="text-primary mb-4"
                                    >
                                        {icon}
                                    </motion.div>
                                    
                                    {/* Content */}
                                    <div className="space-y-2">
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h3>
                                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WorkStyle;
