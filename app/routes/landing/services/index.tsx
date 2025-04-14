import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ServicesNav } from "~/routes/landing/services/services-nav";
import { ServiceContent } from "~/routes/landing/services/service-content";

export type ServiceCategory = "business" | "gst" | "roc";

const ServicesSection = () => {
    const [activeCategory, setActiveCategory] = useState<ServiceCategory>("business");

    return (
        <section className="min-h-screen w-full py-8 lg:py-12 bg-gray-50/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-12"
                >
                    {/* Title */}
                    <div className="text-center relative">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6"
                        >
                            Popular Services
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
                        >
                            Our Services
                            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-2 bg-gradient-to-r from-secondary to-primary/50 rounded-full" />
                        </motion.h2>
                    </div>

                    {/* Navigation */}
                    <ServicesNav activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

                    {/* Content */}
                    <AnimatePresence mode="wait">
                        <ServiceContent key={activeCategory} category={activeCategory} />
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection; 