import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { features, progressSteps } from "~/data/features";
import { HiOutlineDocumentText, HiOutlineClock, HiOutlineDevicePhoneMobile, HiArrowLongRight } from "react-icons/hi2";

const getIcon = (iconType: "document" | "clock" | "phone") => {
    switch (iconType) {
        case "document":
            return <HiOutlineDocumentText className="w-8 h-8 text-primary" />;
        case "clock":
            return <HiOutlineClock className="w-8 h-8 text-primary" />;
        case "phone":
            return <HiOutlineDevicePhoneMobile className="w-8 h-8 text-primary" />;
    }
};

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative h-full"
        >
            <div className="bg-white rounded-2xl p-8 shadow-lg transition duration-300 h-full flex flex-col
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-secondary/5
                before:rounded-2xl before:opacity-0 before:transition-opacity group-hover:before:opacity-100
                hover:shadow-xl relative"
            >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
                    {getIcon(feature.icon)}
                </div>
                <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                </div>
                
                {/* Privacy Policy Link - Only show for first two cards */}
                {index < 2 && (
                    <a
                        href="/privacy-policy"
                        className="inline-flex items-center gap-2 text-secondary hover:text-secondary/90 font-medium transition-colors group/link mt-auto"
                    >
                        <span>Read our Data Privacy Policy</span>
                        <HiArrowLongRight className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" />
                    </a>
                )}
            </div>
        </motion.div>
    );
};

const ProgressStep = ({ step, index }: { step: string; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
            className="flex items-center gap-6 group"
        >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 text-primary font-semibold flex items-center justify-center
                group-hover:scale-110 transition-transform">
                {index + 1}
            </div>
            <p className="text-gray-700 group-hover:text-gray-900 transition-colors">{step}</p>
        </motion.div>
    );
};

const Features = () => {
    return (
        <section className="w-full py-8 lg:py-12 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
                            Our Commitment
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
                        >
                            What We Offer
                            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-2 bg-gradient-to-r from-secondary to-primary/50 rounded-full" />
                        </motion.h2>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl mx-auto">
                        {/* Left Column - First Two Feature Cards */}
                        <div className="space-y-8 lg:h-full flex flex-col">
                            {features.slice(0, 2).map((feature, index) => (
                                <div key={feature.title} className="flex-1">
                                    <FeatureCard feature={feature} index={index} />
                                </div>
                            ))}
                        </div>

                        {/* Right Column - Combined Phone and Progress */}
                        <div className="relative lg:h-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="bg-white rounded-[2rem] p-8 shadow-xl relative overflow-hidden h-full
                                    before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-secondary/5
                                    before:opacity-40 before:transition-opacity hover:before:opacity-60 flex flex-col"
                            >
                                {/* Phone Feature Card */}
                                <div className="mb-8 pb-8 border-b border-gray-100 flex-shrink-0">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6">
                                        {getIcon("phone")}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{features[2].title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{features[2].description}</p>
                                </div>

                                {/* Progress Steps */}
                                <div className="space-y-8 flex-grow flex flex-col justify-center">
                                    {progressSteps.map((step, index) => (
                                        <ProgressStep key={step} step={step} index={index} />
                                    ))}
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -z-10 inset-0 scale-[1.2] blur-2xl opacity-20 bg-gradient-to-br from-primary/30 via-secondary/30 to-primary/30 rounded-[2rem]" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Features; 