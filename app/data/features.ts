interface Feature {
    title: string;
    description: string;
    icon: "document" | "clock" | "phone";
}

export const features: Feature[] = [
    {
        title: "Your confidential documents are safe with us",
        description: "All your confidential documents, personal information is safe with us as per our company's policy. Your information is not accessed by any third party.",
        icon: "document"
    },
    {
        title: "Transparent, Minimal communication, on-time delivery",
        description: "All your confidential documents, personal information is safe with us as per our company's policy. Your information is not accessed by any third party.",
        icon: "clock"
    },
    {
        title: "Get your progress updates wherever you go",
        description: "Track your business registration progress in real-time with our mobile-friendly platform.",
        icon: "phone"
    }
];

export const progressSteps = [
    "Raise the ticket",
    "Get Push Notifications and Email Updates",
    "Track the progress in your mobile devices",
    "Know the progress and deliverables across different devices"
]; 