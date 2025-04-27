import { useState, useEffect } from 'react';
import { useFetcher } from 'react-router';

type FormStatus = "idle" | "loading" | "success" | "error";

/**
 * Hook to handle contact form state and submission
 * @returns Form state and handlers
 */
export const useContactForm = () => {
    const [email, setEmail] = useState("");
    const [formStatus, setFormStatus] = useState<FormStatus>("idle");
    const [statusMessage, setStatusMessage] = useState("");
    const inquiryFetcher = useFetcher();
    
    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            setFormStatus("error");
            setStatusMessage("Please enter a valid email address");
            return;
        }

        setFormStatus("loading");
        setStatusMessage(""); // No message during loading

        const formData = new FormData();
        formData.append("email", email);

        inquiryFetcher.submit(formData, {
            method: "POST",
            action: "/api/send-inquiry"
        });
    };

    // Handle submission response
    useEffect(() => {
        if (inquiryFetcher.state === "idle" && inquiryFetcher.data) {
            if (inquiryFetcher.data.success) {
                setFormStatus("success");
                setStatusMessage(inquiryFetcher.data.message);
                setEmail(""); // Clear email on success
                
                // Reset form status after 5 seconds for better UX
                const timer = setTimeout(() => {
                    setFormStatus("idle");
                }, 5000);
                
                return () => clearTimeout(timer);
            } else {
                setFormStatus("error");
                setStatusMessage(inquiryFetcher.data.message || "An error occurred. Please try again.");
            }
        }
    }, [inquiryFetcher.state, inquiryFetcher.data]);

    return { 
        email, 
        setEmail, 
        formStatus, 
        statusMessage, 
        handleSubmit 
    };
};

export default useContactForm; 