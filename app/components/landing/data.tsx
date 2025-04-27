import type { ReactNode } from 'react';
import { 
    HiDocumentText, 
    HiCurrencyRupee, 
    HiShieldCheck, 
    HiClock, 
    HiUserGroup, 
    HiClipboardDocument, 
    HiLockClosed 
} from "react-icons/hi2";

// Benefits data
export interface Benefit {
    icon: ReactNode;
    text: string;
    color: string;
}

export const benefits: Benefit[] = [
    {
        icon: <HiClipboardDocument className="w-5 h-5" />,
        text: "Quick Registration Process",
        color: "from-primary/20 to-primary/30"
    },
    {
        icon: <HiUserGroup className="w-5 h-5" />,
        text: "Expert Consultation",
        color: "from-secondary/20 to-secondary/30"
    },
    {
        icon: <HiClock className="w-5 h-5" />,
        text: "24/7 Support Available",
        color: "from-primary/30 to-primary/20"
    },
    {
        icon: <HiLockClosed className="w-5 h-5" />,
        text: "Secure Documentation",
        color: "from-secondary/30 to-secondary/20"
    }
];

// Features data
export interface Feature {
    icon: ReactNode;
    title: string;
    description: string;
}

export const features: Feature[] = [
    {
        icon: <HiDocumentText className="w-6 h-6" />,
        title: "Easy Documentation",
        description: "Hassle-free paperwork handling"
    },
    {
        icon: <HiCurrencyRupee className="w-6 h-6" />,
        title: "Competitive Pricing",
        description: "Best-in-market rates guaranteed"
    },
    {
        icon: <HiShieldCheck className="w-6 h-6" />,
        title: "100% Compliance",
        description: "Full legal compliance assured"
    }
]; 