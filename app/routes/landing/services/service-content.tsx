import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import type { ServiceCategory } from "./index";
import PrivateLimitedCompany from "~/assets/landing/20945245.jpg";

interface ServiceData {
    title: string;
    description: string;
    requirements: string[];
    image: any;
}

const servicesData: Record<ServiceCategory, ServiceData[]> = {
    business: [
        {
            title: "Private Limited Company",
            description: "Documents required to register your PVT Ltd Company:",
            requirements: [
                "Pan card",
                "Aadhar card",
                "Passport or Voter ID or Valid Driving License",
                "Recent Bank statements (not older than 1 month)",
                "Passport size photo"
            ],
            image: PrivateLimitedCompany
        },
        {
            title: "Limited Liability Partnership (LLP)",
            description: "Documents required to register your PVT Ltd Company:",
            requirements: [
                "Pan card",
                "Aadhar card",
                "Passport or Voter ID or Valid Driving License",
                "Recent Bank statements (not older than 1 month)",
                "Passport size photo"
            ],
            image: PrivateLimitedCompany
        },
        {
            title: "One Person Company",
            description: "Documents required to register your PVT Ltd Company:",
            requirements: [
                "Pan card",
                "Aadhar card",
                "Passport or Voter ID or Valid Driving License",
                "Recent Bank statements (not older than 1 month)",
                "Passport size photo"
            ],
            image: PrivateLimitedCompany
        }
    ],
    gst: [
        {
            title: "GST Registration",
            description: "Documents required to register your PVT Ltd Company:",
            requirements: [
                "Certificate of Incorporation",
                "AOA & MOA",
                "Resolution signed by board members",
                "Digital Signature",
                "Director's Proof"
            ],
            image: PrivateLimitedCompany
        },
        {
            title: "GST Return Filing",
            description: "Documents required to register your PVT Ltd Company:",
            requirements: [
                "Provide your Name, Email & Mobile No. and click Get Start Now",
                "Our Expert will call you and send you an email with list of required details/documents.",
                "Kindly email the requested documents to us to start the income tax return filling process."
            ],
            image: PrivateLimitedCompany
        },
        {
            title: "GST Modification",
            description: "Documents required to register your PVT Ltd Company:",
            requirements: [
                "Provide your Name, Email & Mobile No. and click Get Start Now",
                "Our Expert will call you and send you an email with list of required details/documents.",
                "Kindly email the requested documents to us to start the GST Modification process.",
                "Our Expert Team will help you to complete all your compliances done."
            ],
            image: PrivateLimitedCompany
        }
    ],
    roc: [
        {
            title: "Private limited Company RoC Compliance",
            description: "Documents required to register your PVT Ltd Company:",
            requirements: [
                "Provide your Name, Email & Mobile No. and click Get Start Now",
                "Our Expert will call you and send you an email with list of required details/documents.",
                "Kindly email the requested documents to us to start the ROC filling process.",
                "Our Expert Team will help you to complete all your compliances done."
            ],
            image: PrivateLimitedCompany
        },
        {
            title: "OPC RoC Compliance",
            description: "Documents required to register your PVT Ltd Company:",
            requirements: [
                "Company Reports",
                "Financial Statement Preparation",
                "Form AOC-4 Filing",
                "Form MGT-7 Filing"
            ],
            image: PrivateLimitedCompany
        },
        {
            title: "LLP RoC Compliance",
            description: "Documents required to register your PVT Ltd Company:",
            requirements: [
                "Form 8 Filing"
            ],
            image: PrivateLimitedCompany
        }
    ]
};

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
                    className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
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