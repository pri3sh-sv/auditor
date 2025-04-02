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
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                {getIcon(feature.icon)}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            
            {/* Privacy Policy Link - Only show for first two cards */}
            {index < 2 && (
                <a
                    href="/privacy-policy"
                    className="inline-flex items-center gap-2 text-secondary hover:text-secondary/90 font-medium transition-colors group"
                >
                    <span>Read our Data Privacy Policy</span>
                    <HiArrowLongRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
            )}
        </motion.div>
    );
};

const ProgressStep = ({ step, index }: { step: string; index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, scale }}
            className="flex items-center gap-6"
        >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center">
                {index + 1}
            </div>
            <p className="text-gray-700">{step}</p>
        </motion.div>
    );
};

const Features = () => {
    return (
        <section className="min-h-screen w-full py-16 lg:py-24 bg-gray-50/50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Features Grid */}
                    <div className="grid grid-cols-1 gap-8">
                        {features.map((feature, index) => (
                            <FeatureCard key={feature.title} feature={feature} index={index} />
                        ))}
                    </div>

                    {/* Progress Steps */}
                    <div className="relative">
                        {/* Phone Frame */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-[3rem] p-8 shadow-2xl max-w-sm mx-auto"
                        >
                            <div className="space-y-12">
                                {progressSteps.map((step, index) => (
                                    <ProgressStep key={step} step={step} index={index} />
                                ))}
                            </div>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 inset-0 scale-[1.3] blur-lg opacity-30 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[3rem]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features; 