import type { ServiceCategory } from "~/routes/landing/services";
import PrivateLimitedCompany from "~/assets/landing/popular-services/20945245.jpg";

export interface ServiceData {
    title: string;
    description: string;
    requirements: string[];
    image: any;
}

export const servicesData: Record<ServiceCategory, ServiceData[]> = {
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