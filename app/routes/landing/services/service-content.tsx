import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import type { ServiceCategory } from "./index";
import type { ServiceData } from "~/data/services";
import { servicesData } from "~/data/services";

interface ServiceContentProps {
    category: ServiceCategory;
}

export const ServiceContent = ({ category }: ServiceContentProps) => {
    const services = servicesData[category];

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            {services.map((service, index) => (
                <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-auto min-h-webkit-fill group hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                >
                    {/* Service Card */}
                    <div className="p-6 flex flex-col flex-grow">
                        {/* Badge */}
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 w-fit">
                            Popular Services
                        </span>

                        {/* Image Placeholder */}
                        <div className="relative h-56 lg:h-72 mb-6 rounded-xl overflow-hidden flex justify-center items-center">
                            <img src={service.image} alt={service.title} className="w-[70%] lg:w-[70%] object-cover" />
                        </div>

                        {/* Content */}
                        <div className="flex-grow flex flex-col">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>

                            {/* Requirements List */}
                            <ul className="space-y-2 mb-12 flex-grow">
                                {service.requirements.map((req, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                                        {req}
                                    </li>
                                ))}
                            </ul>

                            {/* Button - Now will stay at bottom */}
                            <Button
                                variant="solid"
                                className="w-full bg-secondary hover:!bg-secondary/90 text-white mt-auto"
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}; 